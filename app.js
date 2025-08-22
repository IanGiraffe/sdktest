// Giraffe SDK - only works within Giraffe iframe
let giraffeState, rpc;

// Load the SDK dynamically when running in Giraffe
async function loadGiraffeSDK() {
    try {
        // Import SDK modules
        const sdk = await import('https://esm.run/@gi-nx/iframe-sdk');
        giraffeState = sdk.giraffeState;
        rpc = sdk.rpc;
        console.log('Giraffe SDK loaded successfully');
        return true;
    } catch (error) {
        console.error('Failed to load Giraffe SDK:', error);
        return false;
    }
}

// Initialize SDK when page loads
document.addEventListener('DOMContentLoaded', async function() {
    const sdkLoaded = await loadGiraffeSDK();
    if (!sdkLoaded) {
        console.log('SDK not loaded - make sure this app is running within Giraffe iframe');
        document.body.innerHTML = `
            <div style="padding: 20px; text-align: center; font-family: Arial;">
                <h2>Giraffe SDK Test App</h2>
                <p>This app only works when loaded as an iframe within Giraffe.</p>
                <p>To use this app:</p>
                <ol style="text-align: left; display: inline-block;">
                    <li>Open your Giraffe project</li>
                    <li>Add the iframe app</li>
                    <li>Set the URL to: <code>http://localhost:3001</code></li>
                </ol>
            </div>
        `;
    }
});

// Helper function to display output
function displayOutput(elementId, data) {
    const element = document.getElementById(elementId);
    element.textContent = JSON.stringify(data, null, 2);
}

// Project Information Functions
window.getCurrentProject = async function() {
    try {
        const project = giraffeState.get('project');
        displayOutput('projectOutput', {
            title: 'Current Project',
            data: project
        });
    } catch (error) {
        displayOutput('projectOutput', { error: error.message });
    }
};

window.getAllProjects = async function() {
    try {
        const projects = giraffeState.get('projects');
        displayOutput('projectOutput', {
            title: 'All Projects',
            count: projects?.features?.length || 0,
            data: projects
        });
    } catch (error) {
        displayOutput('projectOutput', { error: error.message });
    }
};

window.getCurrentProjectBoundary = async function() {
    try {
        const currentProject = giraffeState.get('project');
        const allProjects = giraffeState.get('projects');
        
        if (!currentProject || !allProjects) {
            displayOutput('projectOutput', { error: 'Project data not available' });
            return;
        }

        // Find current project boundary
        const currentProjectBoundary = allProjects.features.find(
            feature => feature.properties.id === currentProject.id
        );

        // Also check for default boundary
        const defaultBoundary = allProjects.features.find(
            feature => feature.properties.defaultBoundary === true
        );

        displayOutput('projectOutput', {
            title: 'Current Project Boundary',
            currentProjectId: currentProject.id,
            foundBoundary: !!currentProjectBoundary,
            defaultBoundary: !!defaultBoundary,
            boundaryGeometry: currentProjectBoundary?.geometry || defaultBoundary?.geometry,
            boundaryProperties: currentProjectBoundary?.properties || defaultBoundary?.properties
        });
    } catch (error) {
        displayOutput('projectOutput', { error: error.message });
    }
};

// Map State Functions
window.getMapView = async function() {
    try {
        const mapView = giraffeState.get('mapView');
        displayOutput('mapOutput', {
            title: 'Map View',
            data: mapView
        });
    } catch (error) {
        displayOutput('mapOutput', { error: error.message });
    }
};

window.getSelectedFeatures = async function() {
    try {
        const selected = await rpc.invoke('getSelectedFeatures', []);
        displayOutput('mapOutput', {
            title: 'Selected Features',
            count: selected?.features?.length || 0,
            data: selected
        });
    } catch (error) {
        displayOutput('mapOutput', { error: error.message });
    }
};

// Layer Functions
window.getProjectLayers = async function() {
    try {
        const layers = giraffeState.get('projectLayers');
        displayOutput('layersOutput', {
            title: 'Project Layers',
            count: layers?.length || 0,
            data: layers
        });
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
};

window.getRawSections = async function() {
    try {
        const rawSections = giraffeState.get('rawSections');
        displayOutput('layersOutput', {
            title: 'Raw Sections',
            count: rawSections?.features?.length || 0,
            data: rawSections
        });
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
};

// Additional Layer Functions
window.getBakedSections = async function() {
    try {
        const bakedSections = giraffeState.get('bakedSections');
        displayOutput('layersOutput', {
            title: 'Baked Sections',
            count: bakedSections?.features?.length || 0,
            data: bakedSections
        });
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
};

window.getLayerTree = async function() {
    try {
        const layerTree = giraffeState.get('layerTree');
        displayOutput('layersOutput', {
            title: 'Layer Tree',
            data: layerTree
        });
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
};

// Layer Type Exploration Function - Enhanced for Data Layer Identification
window.exploreLayerTypes = async function() {
    try {
        const layers = giraffeState.get('projectLayers');
        const rawSections = giraffeState.get('rawSections');
        const bakedSections = giraffeState.get('bakedSections');
        
        if (!layers || layers.length === 0) {
            displayOutput('layersOutput', {
                title: 'Layer Types Exploration',
                error: 'No project layers found. Try adding some layers to your project first.'
            });
            return;
        }

        // Analyze each layer's type with focus on data layer identification
        const layerAnalysis = layers.map(layer => {
            const layerFull = layer.layer_full || {};
            return {
                id: layer.id,
                name: layerFull.name || 'Unknown',
                layer_type: layerFull.layer_type,
                layer_full_id: layerFull.id,
                description: layerFull.description,
                // Focus on properties that might indicate data layers
                has_vector_style: !!layerFull.vector_style,
                has_vector_source: !!layerFull.vector_source,
                source_type: layerFull.vector_source?.type,
                has_tiles: !!layerFull.vector_source?.tiles,
                has_data: !!layerFull.vector_source?.data,
                is_data_layer: layerFull.layer_type === 2, // Testing the "type 2" hypothesis
                opacity: layer.opacity,
                public: layerFull.public,
                // Additional properties for data layer identification
                source_url: layerFull.vector_source?.url,
                tile_scheme: layerFull.vector_source?.scheme,
                promoteId: layerFull.vector_source?.promoteId,
                maxzoom: layerFull.vector_source?.maxzoom,
                minzoom: layerFull.vector_source?.minzoom
            };
        });

        // Group by layer_type to identify patterns
        const typeGroups = {};
        const dataLayers = [];
        const nonDataLayers = [];
        
        layerAnalysis.forEach(layer => {
            const type = layer.layer_type;
            if (!typeGroups[type]) {
                typeGroups[type] = [];
            }
            typeGroups[type].push(layer);
            
            // Separate potential data layers
            if (layer.layer_type === 2) {
                dataLayers.push(layer);
            } else {
                nonDataLayers.push(layer);
            }
        });

        displayOutput('layersOutput', {
            title: 'Layer Types & Data Layer Identification',
            totalLayers: layers.length,
            rawSectionsCount: rawSections?.features?.length || 0,
            bakedSectionsCount: bakedSections?.features?.length || 0,
            // Data layer analysis
            potentialDataLayers: {
                type2Layers: dataLayers,
                type2Count: dataLayers.length,
                nonType2Layers: nonDataLayers,
                nonType2Count: nonDataLayers.length
            },
            layerAnalysis: layerAnalysis,
            typeGroups: typeGroups,
            typeCounts: Object.keys(typeGroups).map(type => ({
                layer_type: type,
                count: typeGroups[type].length,
                examples: typeGroups[type].map(l => l.name).slice(0, 3),
                isDataType: type === 2
            })),
            // Summary insights
            insights: {
                hasType2Layers: dataLayers.length > 0,
                type2Names: dataLayers.map(l => l.name),
                mostCommonType: Object.keys(typeGroups).reduce((a, b) => 
                    typeGroups[a].length > typeGroups[b].length ? a : b, Object.keys(typeGroups)[0]
                )
            }
        });
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
};

// Deep Layer Analysis Function - Focus on Data Layer Characteristics
window.analyzeDataLayers = async function() {
    try {
        const layers = giraffeState.get('projectLayers');
        
        if (!layers || layers.length === 0) {
            displayOutput('layersOutput', {
                title: 'Data Layer Analysis',
                error: 'No project layers found. Try adding some layers to your project first.'
            });
            return;
        }

        // Deep analysis of each layer
        const deepAnalysis = layers.map(layer => {
            const layerFull = layer.layer_full || {};
            const vectorSource = layerFull.vector_source || {};
            const vectorStyle = layerFull.vector_style || {};
            
            return {
                // Basic info
                name: layerFull.name,
                id: layer.id,
                layer_type: layerFull.layer_type,
                
                // Data characteristics
                hasVectorData: !!vectorSource.data,
                hasVectorTiles: !!vectorSource.tiles,
                sourceType: vectorSource.type,
                
                // Data layer indicators
                isType0: layerFull.layer_type === 0,
                isType1: layerFull.layer_type === 1,
                isType2: layerFull.layer_type === 2, // Main hypothesis
                isType3: layerFull.layer_type === 3,
                
                // Content analysis
                hasFeatureData: !!vectorSource.data && typeof vectorSource.data === 'object',
                hasTileService: !!vectorSource.tiles && Array.isArray(vectorSource.tiles),
                
                // Style analysis
                hasComplexStyle: vectorStyle && Object.keys(vectorStyle).length > 0,
                styleKeys: vectorStyle ? Object.keys(vectorStyle) : [],
                
                // Full layer details for inspection
                fullLayer: {
                    layer_type: layerFull.layer_type,
                    description: layerFull.description,
                    public: layerFull.public,
                    vector_source: vectorSource,
                    vector_style: vectorStyle
                }
            };
        });

        // Classification analysis
        const classification = {
            type0Layers: deepAnalysis.filter(l => l.isType0),
            type1Layers: deepAnalysis.filter(l => l.isType1),
            type2Layers: deepAnalysis.filter(l => l.isType2),
            type3Layers: deepAnalysis.filter(l => l.isType3),
            unknownTypeLayers: deepAnalysis.filter(l => ![0,1,2,3].includes(l.layer_type))
        };

        // Data vs non-data patterns
        const dataPatterns = {
            layersWithVectorData: deepAnalysis.filter(l => l.hasVectorData),
            layersWithTileService: deepAnalysis.filter(l => l.hasTileService),
            layersWithComplexStyle: deepAnalysis.filter(l => l.hasComplexStyle)
        };

        displayOutput('layersOutput', {
            title: 'Data Layer Deep Analysis',
            totalLayers: layers.length,
            
            // Type distribution
            typeDistribution: {
                type0Count: classification.type0Layers.length,
                type1Count: classification.type1Layers.length,
                type2Count: classification.type2Layers.length,
                type3Count: classification.type3Layers.length,
                unknownCount: classification.unknownTypeLayers.length
            },
            
            // Detailed classification
            classification: classification,
            
            // Data characteristics patterns
            dataPatterns: dataPatterns,
            
            // Key findings
            findings: {
                mostCommonType: Object.entries({
                    type0: classification.type0Layers.length,
                    type1: classification.type1Layers.length,
                    type2: classification.type2Layers.length,
                    type3: classification.type3Layers.length
                }).reduce((a, b) => a[1] > b[1] ? a : b)[0],
                
                type2LayerNames: classification.type2Layers.map(l => l.name),
                type2HasData: classification.type2Layers.some(l => l.hasVectorData),
                type2HasTiles: classification.type2Layers.some(l => l.hasTileService)
            },
            
            // Full analysis for inspection
            deepAnalysis: deepAnalysis
        });
        
    } catch (error) {
        displayOutput('layersOutput', { 
            title: 'Data Layer Deep Analysis',
            error: error.message 
        });
    }
};

// Function to test drawing layer activation
window.testDrawingLayerActivation = async function() {
    try {
        // Try to activate drawing layer and see what happens
        const result = await rpc.invoke('activateDrawingLayer', []);
        displayOutput('layersOutput', {
            title: 'Drawing Layer Activation Test',
            result: result,
            message: 'Successfully called activateDrawingLayer'
        });
    } catch (error) {
        displayOutput('layersOutput', { 
            title: 'Drawing Layer Activation Test',
            error: error.message 
        });
    }
};

// Function to get layer contents by name
window.testLayerContents = async function() {
    try {
        const layers = giraffeState.get('projectLayers');
        if (!layers || layers.length === 0) {
            displayOutput('layersOutput', {
                title: 'Layer Contents Test',
                error: 'No layers available to test'
            });
            return;
        }

        // Test getting contents of the first layer
        const firstLayer = layers[0];
        const layerName = firstLayer.layer_full?.name;
        
        if (!layerName) {
            displayOutput('layersOutput', {
                title: 'Layer Contents Test',
                error: 'First layer has no name'
            });
            return;
        }

        const contents = await rpc.invoke('getLayerContents', [layerName]);
        displayOutput('layersOutput', {
            title: 'Layer Contents Test',
            layerName: layerName,
            layerType: firstLayer.layer_full?.layer_type,
            contentsType: typeof contents,
            hasFeatures: contents?.features?.length || 0,
            contents: contents
        });
    } catch (error) {
        displayOutput('layersOutput', { 
            title: 'Layer Contents Test',
            error: error.message 
        });
    }
};

// Boundary Investigation Functions
window.checkSelectedForBoundary = async function() {
    try {
        const selected = await rpc.invoke('getSelectedFeatures');
        const feature = selected.features[0];
        
        displayOutput('boundaryOutput', {
            title: 'Selected Feature Analysis',
            hasFeature: !!feature,
            hasDefaultBoundary: feature?.properties?.defaultBoundary,
            properties: feature?.properties,
            geometryType: feature?.geometry?.type,
            coordinatesCount: feature?.geometry?.coordinates?.length
        });
    } catch (error) {
        displayOutput('boundaryOutput', { error: error.message });
    }
};

window.exploreAllStates = async function() {
    try {
        // Get all available state keys
        const stateKeys = [
            'project', 'projects', 'projectLayers', 'rawSections', 'bakedSections',
            'mapView', 'mapContent', 'selected', 'layerTree', 'projectOrigin',
            'projectAppsByAppID', 'flows', 'selectedProjectApp', 'views'
        ];
        
        const stateData = {};
        stateKeys.forEach(key => {
            try {
                const data = giraffeState.get(key);
                stateData[key] = {
                    exists: data !== null && data !== undefined,
                    type: typeof data,
                    isArray: Array.isArray(data),
                    hasFeatures: data?.features?.length || 0,
                    sample: data
                };
            } catch (e) {
                stateData[key] = { error: e.message };
            }
        });
        
        displayOutput('boundaryOutput', {
            title: 'All Available State Keys',
            data: stateData
        });
    } catch (error) {
        displayOutput('boundaryOutput', { error: error.message });
    }
};

window.getMapContent = async function() {
    try {
        const mapContent = giraffeState.get('mapContent');
        displayOutput('boundaryOutput', {
            title: 'Map Content',
            data: mapContent
        });
    } catch (error) {
        displayOutput('boundaryOutput', { error: error.message });
    }
};

// Viewport-based Vector Layer Loading
class ViewportVectorLayer {
    constructor(layerName, serviceUrl, options = {}) {
        this.layerName = layerName;
        this.serviceUrl = serviceUrl;
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
            giraffeState.removeListener(this.mapViewListener);
            this.mapViewListener = null;
        }
        
        // Remove the temporary layer
        try {
            await rpc.invoke('removeTempLayer', [this.layerName]);
        } catch (error) {
            console.warn('Error removing temp layer:', error);
        }
    }

    setupMapListener() {
        this.mapViewListener = giraffeState.addListener(['mapView'], () => {
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
            const mapView = giraffeState.get('mapView');
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
                await rpc.invoke('addTempLayerGeoJSON', [
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
                await rpc.invoke('addTempLayerGeoJSON', [
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
        
        await rpc.invoke('updateLayerStyle', [this.layerName, style]);
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

// Global viewport layer instance
let buildingFootprintsLayer = null;

// Viewport Layer Control Functions
window.activateViewportLayer = async function() {
    try {
        if (buildingFootprintsLayer && buildingFootprintsLayer.isActive) {
            displayOutput('viewportOutput', {
                title: 'Viewport Layer',
                message: 'Building footprints layer is already active'
            });
            return;
        }
        
        buildingFootprintsLayer = new ViewportVectorLayer(
            'Charlotte Zoning',
            'https://meckgis.mecklenburgcountync.gov/server/rest/services/CityofCharlotteZoning/FeatureServer/0',
            {
                maxRecordCount: 2000,
                refreshOnMove: true,
                debounceTime: 1000, // Increased debounce for smoother experience
                cacheFeatures: true,
                cacheTimeout: 300000 // 5 minutes
            }
        );
        
        await buildingFootprintsLayer.activate();
        
        displayOutput('viewportOutput', {
            title: 'Viewport Layer Activated',
            layerName: buildingFootprintsLayer.layerName,
            serviceUrl: buildingFootprintsLayer.serviceUrl,
            message: 'Charlotte zoning layer is now loading features based on viewport'
        });
        
    } catch (error) {
        displayOutput('viewportOutput', { 
            title: 'Viewport Layer Activation Error',
            error: error.message 
        });
    }
};

window.deactivateViewportLayer = async function() {
    try {
        if (!buildingFootprintsLayer || !buildingFootprintsLayer.isActive) {
            displayOutput('viewportOutput', {
                title: 'Viewport Layer',
                message: 'No active viewport layer to deactivate'
            });
            return;
        }
        
        await buildingFootprintsLayer.deactivate();
        
        displayOutput('viewportOutput', {
            title: 'Viewport Layer Deactivated',
            message: 'Charlotte zoning layer has been removed'
        });
        
    } catch (error) {
        displayOutput('viewportOutput', { 
            title: 'Viewport Layer Deactivation Error',
            error: error.message 
        });
    }
};

window.refreshViewportLayer = async function() {
    try {
        if (!buildingFootprintsLayer || !buildingFootprintsLayer.isActive) {
            displayOutput('viewportOutput', {
                title: 'Viewport Layer Refresh',
                error: 'No active viewport layer to refresh'
            });
            return;
        }
        
        // Force refresh by clearing last bounds
        buildingFootprintsLayer.lastBounds = null;
        await buildingFootprintsLayer.loadFeaturesForCurrentViewport();
        
        displayOutput('viewportOutput', {
            title: 'Viewport Layer Refreshed',
            message: 'Features reloaded for current viewport'
        });
        
    } catch (error) {
        displayOutput('viewportOutput', { 
            title: 'Viewport Layer Refresh Error',
            error: error.message 
        });
    }
};

window.getViewportLayerStatus = function() {
    try {
        const status = {
            hasLayer: !!buildingFootprintsLayer,
            isActive: buildingFootprintsLayer?.isActive || false,
            layerName: buildingFootprintsLayer?.layerName || null,
            serviceUrl: buildingFootprintsLayer?.serviceUrl || null,
            refreshOnMove: buildingFootprintsLayer?.options?.refreshOnMove || false,
            lastBounds: buildingFootprintsLayer?.lastBounds || null
        };
        
        displayOutput('viewportOutput', {
            title: 'Viewport Layer Status',
            status: status
        });
        
    } catch (error) {
        displayOutput('viewportOutput', { 
            title: 'Viewport Layer Status Error',
            error: error.message 
        });
    }
};

// Test ArcGIS Service Function
window.testArcGISService = async function() {
    try {
        const serviceUrl = 'https://meckgis.mecklenburgcountync.gov/server/rest/services/CityofCharlotteZoning/FeatureServer/0';
        
        // Test service availability
        const infoResponse = await fetch(`${serviceUrl}?f=json`);
        const serviceInfo = await infoResponse.json();
        
        // Test query with current map bounds
        const mapView = giraffeState.get('mapView');
        let testResults = { serviceInfo };
        
        if (mapView && mapView.bounds) {
            const bounds = mapView.bounds;
            console.log('Test bounds:', bounds);
            console.log('Test bounds type:', typeof bounds);
            
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
                console.warn('Unknown bounds format in test:', bounds);
                return;
            }
            
            const envelope = `${west},${south},${east},${north}`;
            
            const queryUrl = `${serviceUrl}/query`;
            const params = new URLSearchParams({
                f: 'json',
                where: '1=1',
                geometry: envelope,
                geometryType: 'esriGeometryEnvelope',
                spatialRel: 'esriSpatialRelIntersects',
                inSR: '4326', // Input spatial reference (WGS84)
                outSR: '4326', // Output spatial reference (WGS84)
                outFields: '*',
                maxRecordCount: 10,
                returnGeometry: 'true'
            });
            
            const queryResponse = await fetch(`${queryUrl}?${params}`);
            const queryResults = await queryResponse.json();
            
            testResults.queryTest = {
                bounds: mapView.bounds,
                envelope: envelope,
                queryUrl: `${queryUrl}?${params}`,
                featureCount: queryResults.features?.length || 0,
                sampleFeature: queryResults.features?.[0] || null,
                error: queryResults.error || null,
                fullResponse: queryResults
            };
        }
        
        displayOutput('viewportOutput', {
            title: 'ArcGIS Service Test',
            serviceUrl: serviceUrl,
            results: testResults
        });
        
    } catch (error) {
        displayOutput('viewportOutput', { 
            title: 'ArcGIS Service Test Error',
            error: error.message 
        });
    }
};

// Initialize and listen for state changes
console.log('Giraffe SDK Test App initialized');

// Listen for project changes
if (giraffeState && typeof giraffeState.addListener === 'function') {
    giraffeState.addListener(['project', 'projects'], () => {
        console.log('Project data changed');
    });

    // Listen for map changes
    giraffeState.addListener(['mapView', 'selected'], () => {
        console.log('Map state changed');
    });
}