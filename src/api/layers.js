import { displayOutput } from '../ui/ui.js';

export function getProjectLayers(giraffeState) {
    try {
        const layers = giraffeState.get('projectLayers');
        displayOutput('layersOutput', layers);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}

export function getRawSections(giraffeState) {
    try {
        const rawSections = giraffeState.get('rawSections');
        displayOutput('layersOutput', rawSections);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}

export function getBakedSections(giraffeState) {
    try {
        const bakedSections = giraffeState.get('bakedSections');
        displayOutput('layersOutput', bakedSections);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}

export function getLayerTree(giraffeState) {
    try {
        const layerTree = giraffeState.get('layerTree');
        displayOutput('layersOutput', layerTree);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}

export function exploreLayerTypes(giraffeState) {
    try {
        const layers = giraffeState.get('projectLayers');
        const rawSections = giraffeState.get('rawSections');
        const bakedSections = giraffeState.get('bakedSections');
        
        const output = {
            projectLayers: layers,
            rawSections: rawSections,
            bakedSections: bakedSections
        };

        displayOutput('layersOutput', output);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}

export function analyzeDataLayers(giraffeState) {
    try {
        const layers = giraffeState.get('projectLayers');
        displayOutput('layersOutput', layers);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}

export async function testDrawingLayerActivation(rpc) {
    try {
        const result = await rpc.invoke('activateDrawingLayer', []);
        displayOutput('layersOutput', result);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}

export async function testLayerContents(rpc, giraffeState) {
    try {
        const layers = giraffeState.get('projectLayers');
        if (!layers || layers.length === 0) {
            displayOutput('layersOutput', { error: 'No layers available to test' });
            return;
        }

        let successfulLayer = null;
        let lastError = null;

        // Try each layer until we find one that works
        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i];
            const layerName = layer.layer_full?.name;
            
            if (!layerName) {
                continue; // Skip layers without names
            }

            // Skip known problematic layer types
            const layerType = layer.layer_full?.layer_type;
            const layerStyle = layer.layer_full?.style?.type;
            
            // Skip raster layers (satellite imagery, etc.)
            if (layerType === 0 || layerStyle === 'raster') {
                continue;
            }

            try {
                const contents = await rpc.invoke('getLayerContents', [layerName]);
                successfulLayer = {
                    layerInfo: layer,
                    contents: contents
                };
                break; // Success! Exit the loop
            } catch (error) {
                lastError = error;
                continue; // Try the next layer
            }
        }

        if (successfulLayer) {
            displayOutput('layersOutput', successfulLayer.contents);
        } else {
            displayOutput('layersOutput', { 
                error: 'No compatible layers found to test',
                lastError: lastError?.message || 'Unknown error',
                totalLayers: layers.length
            });
        }
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}
