import { ViewportVectorLayer } from '../lib/ViewportVectorLayer.js';
import { displayOutput } from '../ui/ui.js';

let buildingFootprintsLayer = null;

export function activateViewportLayer(rpc, giraffeState) {
    try {
        if (buildingFootprintsLayer && buildingFootprintsLayer.isActive) {
            displayOutput('viewportOutput', { message: 'Building footprints layer is already active' });
            return;
        }
        
        buildingFootprintsLayer = new ViewportVectorLayer(
            'Charlotte Zoning',
            'https://meckgis.mecklenburgcountync.gov/server/rest/services/CityofCharlotteZoning/FeatureServer/0',
            rpc,
            giraffeState,
            {
                maxRecordCount: 2000,
                refreshOnMove: true,
                debounceTime: 1000,
                cacheFeatures: true,
                cacheTimeout: 300000
            }
        );
        
        buildingFootprintsLayer.activate();
        
        const result = {
            layerName: buildingFootprintsLayer.layerName,
            serviceUrl: buildingFootprintsLayer.serviceUrl,
            message: 'Charlotte zoning layer is now loading features based on viewport'
        };
        
        displayOutput('viewportOutput', result);
        
    } catch (error) {
        displayOutput('viewportOutput', { error: error.message });
    }
}

export async function deactivateViewportLayer() {
    try {
        if (!buildingFootprintsLayer || !buildingFootprintsLayer.isActive) {
            displayOutput('viewportOutput', { message: 'No active viewport layer to deactivate' });
            return;
        }
        
        await buildingFootprintsLayer.deactivate();
        
        displayOutput('viewportOutput', { message: 'Charlotte zoning layer has been removed' });
        
    } catch (error) {
        displayOutput('viewportOutput', { error: error.message });
    }
}

export async function refreshViewportLayer() {
    try {
        if (!buildingFootprintsLayer || !buildingFootprintsLayer.isActive) {
            displayOutput('viewportOutput', { error: 'No active viewport layer to refresh' });
            return;
        }
        
        buildingFootprintsLayer.lastBounds = null;
        await buildingFootprintsLayer.loadFeaturesForCurrentViewport();
        
        displayOutput('viewportOutput', { message: 'Features reloaded for current viewport' });
        
    } catch (error) {
        displayOutput('viewportOutput', { error: error.message });
    }
}

export function getViewportLayerStatus() {
    try {
        const status = {
            hasLayer: !!buildingFootprintsLayer,
            isActive: buildingFootprintsLayer?.isActive || false,
            layerName: buildingFootprintsLayer?.layerName || null,
            serviceUrl: buildingFootprintsLayer?.serviceUrl || null,
            refreshOnMove: buildingFootprintsLayer?.options?.refreshOnMove || false,
            lastBounds: buildingFootprintsLayer?.lastBounds || null
        };
        
        displayOutput('viewportOutput', status);
        
    } catch (error) {
        displayOutput('viewportOutput', { error: error.message });
    }
}

export async function testArcGISService(giraffeState) {
    try {
        const serviceUrl = 'https://meckgis.mecklenburgcountync.gov/server/rest/services/CityofCharlotteZoning/FeatureServer/0';
        
        const infoResponse = await fetch(`${serviceUrl}?f=json`);
        const serviceInfo = await infoResponse.json();
        
        const mapView = giraffeState.get('mapView');
        let testResults = { serviceInfo };
        
        if (mapView && mapView.bounds) {
            const bounds = mapView.bounds;
            
            let west, south, east, north;
            
            if (Array.isArray(bounds)) {
                west = bounds[0][0];
                south = bounds[0][1];
                east = bounds[1][0];
                north = bounds[1][1];
            } else if (bounds.west !== undefined) {
                west = bounds.west;
                south = bounds.south;
                east = bounds.east;
                north = bounds.north;
            } else {
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
                inSR: '4326',
                outSR: '4326',
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
        
        const result = {
            serviceUrl: serviceUrl,
            results: testResults
        };
        
        displayOutput('viewportOutput', result);
        
    } catch (error) {
        displayOutput('viewportOutput', { error: error.message });
    }
}


