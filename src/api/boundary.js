import { displayOutput } from '../ui/ui.js';

export async function checkSelectedForBoundary(rpc) {
    try {
        const selected = await rpc.invoke('getSelectedFeatures');
        const feature = selected.features[0];
        
        const result = {
            hasFeature: !!feature,
            hasDefaultBoundary: feature?.properties?.defaultBoundary,
            properties: feature?.properties,
            geometryType: feature?.geometry?.type,
            coordinatesCount: feature?.geometry?.coordinates?.length
        };
        
        displayOutput('boundaryOutput', result);
    } catch (error) {
        displayOutput('boundaryOutput', { error: error.message });
    }
}

export function exploreAllStates(giraffeState) {
    try {
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
        
        displayOutput('boundaryOutput', stateData);
    } catch (error) {
        displayOutput('boundaryOutput', { error: error.message });
    }
}
