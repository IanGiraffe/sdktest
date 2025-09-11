export class ViewportVectorLayer {
    constructor(layerName, serviceUrl, rpc, giraffeState, options = {}) {
        this.layerName = layerName;
        this.serviceUrl = serviceUrl;
        this.rpc = rpc;
        this.giraffeState = giraffeState;
        this.options = {
            maxRecordCount: 1000,
            outFields: '*',
            refreshOnMove: true,
            debounceTime: 500,
            cacheFeatures: true,
            cacheTimeout: 300000, // 5 minutes
            ...options
        };
        this.isActive = false;
        this.lastBounds = null;
        this.debounceTimer = null;
        this.mapViewListener = null;
        this.featureCache = new Map(); // Cache for features by envelope
        this.lastCacheCleanup = Date.now();
    }

    async activate() {
        if (this.isActive) return;
        
        this.isActive = true;
        console.log(`Activating viewport layer: ${this.layerName}`);
        
        // Load initial features for current viewport
        await this.loadFeaturesForCurrentViewport();
        
        // Set up listener for map changes if refresh on move is enabled
        if (this.options.refreshOnMove) {
            this.setupMapListener();
        }
    }

    async deactivate() {
        if (!this.isActive) return;
        
        this.isActive = false;
        console.log(`Deactivating viewport layer: ${this.layerName}`);
        
        // Remove map listener
        if (this.mapViewListener) {
            this.giraffeState.removeListener(this.mapViewListener);
            this.mapViewListener = null;
        }
        
        // Remove the temporary layer
        try {
            await this.rpc.invoke('removeTempLayer', [this.layerName]);
        } catch (error) {
            console.warn('Error removing temp layer:', error);
        }
    }

    setupMapListener() {
        this.mapViewListener = this.giraffeState.addListener(['mapView'], () => {
            if (!this.isActive) return;
            
            // Debounce the refresh to avoid too many requests
            if (this.debounceTimer) {
                clearTimeout(this.debounceTimer);
            }
            
            this.debounceTimer = setTimeout(() => {
                this.loadFeaturesForCurrentViewport();
            }, this.options.debounceTime);
        });
    }

    async loadFeaturesForCurrentViewport() {
        try {
            const mapView = this.giraffeState.get('mapView');
            if (!mapView || !mapView.bounds) {
                console.warn('No map bounds available');
                return;
            }

            const bounds = mapView.bounds;
            
            // Check if bounds have changed significantly
            if (this.lastBounds && this.boundsEqual(bounds, this.lastBounds)) {
                return;
            }
            
            this.lastBounds = { ...bounds };
            
            console.log(`Loading features for viewport:`, bounds);
            console.log('Bounds type:', typeof bounds);
            console.log('Bounds keys:', Object.keys(bounds));
            
            // Handle different bounds formats
            let west, south, east, north;
            
            if (Array.isArray(bounds)) {
                // Bounds is an array like [[west, south], [east, north]]
                west = bounds[0][0];
                south = bounds[0][1];
                east = bounds[1][0];
                north = bounds[1][1];
            } else if (bounds.west !== undefined) {
                // Bounds is an object with west, south, east, north properties
                west = bounds.west;
                south = bounds.south;
                east = bounds.east;
                north = bounds.north;
            } else {
                console.warn('Unknown bounds format:', bounds);
                return;
            }
            
            // Create geometry envelope for spatial query
            const envelope = `${west},${south},${east},${north}`;
            
            console.log('Query envelope:', envelope);
            console.log('Bounds object:', bounds);
            
            // Check cache first
            let features = null;
            const cacheKey = envelope;
            
            if (this.options.cacheFeatures && this.featureCache.has(cacheKey)) {
                const cached = this.featureCache.get(cacheKey);
                if (Date.now() - cached.timestamp < this.options.cacheTimeout) {
                    console.log(`Using cached features for envelope: ${cached.features.length} features`);
                    features = cached.features;
                } else {
                    // Cache expired, remove it
                    this.featureCache.delete(cacheKey);
                }
            }
            
            // Fetch from service if not cached
            if (!features) {
                features = await this.fetchFeaturesFromService(envelope);
                
                // Cache the results
                if (this.options.cacheFeatures && features && features.length > 0) {
                    this.featureCache.set(cacheKey, {
                        features: features,
                        timestamp: Date.now()
                    });
                    
                    // Clean up old cache entries periodically
                    this.cleanupCache();
                }
            }
            
            if (features && features.length > 0) {
                // Convert to GeoJSON
                const geojson = {
                    type: 'FeatureCollection',
                    features: features.map(f => this.esriToGeoJSON(f))
                };
                
                // Use addTempLayerGeoJSON for smoother updates (no flickering)
                // This creates a temporary layer that updates seamlessly
                await this.rpc.invoke('addTempLayerGeoJSON', [
                    this.layerName,
                    geojson,
                    this.getLayerStyle(),
                    { 
                        // Lens configuration for better performance
                        showLabels: true,
                        displayKeys: ["zonepetition", "zonedes", "zoneclass"]
                    }
                ]);
                
                console.log(`Loaded ${features.length} features for ${this.layerName}`);
            } else {
                console.log(`No features found for current viewport`);
                // Update with empty collection to clear previous features
                await this.rpc.invoke('addTempLayerGeoJSON', [
                    this.layerName,
                    { type: 'FeatureCollection', features: [] },
                    this.getLayerStyle(),
                    {}
                ]);
            }
            
        } catch (error) {
            console.error('Error loading viewport features:', error);
        }
    }

    async fetchFeaturesFromService(envelope) {
        try {
            const queryUrl = `${this.serviceUrl}/query`;
            const params = new URLSearchParams({
                f: 'json',
                where: '1=1',
                geometry: envelope,
                geometryType: 'esriGeometryEnvelope',
                spatialRel: 'esriSpatialRelIntersects',
                inSR: '4326', // Input spatial reference (WGS84)
                outSR: '4326', // Output spatial reference (WGS84)
                outFields: this.options.outFields,
                maxRecordCount: this.options.maxRecordCount,
                returnGeometry: 'true'
            });
            
            console.log('Query parameters:', params.toString());
            
            const response = await fetch(`${queryUrl}?${params}`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(`Service error: ${data.error.message}`);
            }
            
            return data.features || [];
            
        } catch (error) {
            console.error('Error fetching from ArcGIS service:', error);
            return [];
        }
    }

    esriToGeoJSON(esriFeature) {
        const geometry = this.esriGeometryToGeoJSON(esriFeature.geometry);
        
        return {
            type: 'Feature',
            geometry: geometry,
            properties: esriFeature.attributes || {}
        };
    }

    esriGeometryToGeoJSON(esriGeometry) {
        if (!esriGeometry) return null;
        
        // Handle different geometry types
        if (esriGeometry.rings) {
            // Polygon
            return {
                type: 'Polygon',
                coordinates: esriGeometry.rings
            };
        } else if (esriGeometry.paths) {
            // Polyline
            return {
                type: esriGeometry.paths.length === 1 ? 'LineString' : 'MultiLineString',
                coordinates: esriGeometry.paths.length === 1 ? esriGeometry.paths[0] : esriGeometry.paths
            };
        } else if (esriGeometry.x !== undefined && esriGeometry.y !== undefined) {
            // Point
            return {
                type: 'Point',
                coordinates: [esriGeometry.x, esriGeometry.y]
            };
        }
        
        return null;
    }

    async applyLayerStyling() {
        // Apply custom styling to the permanent layer
        const style = {
            showLabels: true,
            displayKeys: ["zonepetition", "zonedes", "zoneclass"],
            'fill-color': '#ff6b35',
            'fill-opacity': 0.4,
            'line-color': '#d63031',
            'line-width': 2,
            'line-opacity': 0.9
        };
        
        await this.rpc.invoke('updateLayerStyle', [this.layerName, style]);
    }

    getLayerStyle() {
        return {
            'fill-color': '#ff6b35',
            'fill-opacity': 0.4,
            'line-color': '#d63031',
            'line-width': 2,
            'line-opacity': 0.9
        };
    }

    cleanupCache() {
        const now = Date.now();
        if (now - this.lastCacheCleanup > 60000) { // Clean up every minute
            this.lastCacheCleanup = now;
            
            for (const [key, value] of this.featureCache.entries()) {
                if (now - value.timestamp > this.options.cacheTimeout) {
                    this.featureCache.delete(key);
                }
            }
            
            console.log(`Cache cleanup: ${this.featureCache.size} entries remaining`);
        }
    }

    boundsEqual(bounds1, bounds2, tolerance = 0.0001) {
        // Handle both array and object formats
        let b1 = bounds1, b2 = bounds2;
        
        if (Array.isArray(bounds1)) {
            b1 = {
                west: bounds1[0][0],
                south: bounds1[0][1],
                east: bounds1[1][0],
                north: bounds1[1][1]
            };
        }
        
        if (Array.isArray(bounds2)) {
            b2 = {
                west: bounds2[0][0],
                south: bounds2[0][1],
                east: bounds2[1][0],
                north: bounds2[1][1]
            };
        }
        
        return Math.abs(b1.north - b2.north) < tolerance &&
               Math.abs(b1.south - b2.south) < tolerance &&
               Math.abs(b1.east - b2.east) < tolerance &&
               Math.abs(b1.west - b2.west) < tolerance;
    }
}
