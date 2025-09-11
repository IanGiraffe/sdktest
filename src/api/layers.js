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

        const firstLayer = layers[0];
        const layerName = firstLayer.layer_full?.name;
        
        if (!layerName) {
            displayOutput('layersOutput', { error: 'First layer has no name' });
            return;
        }

        const contents = await rpc.invoke('getLayerContents', [layerName]);
        
        displayOutput('layersOutput', contents);
    } catch (error) {
        displayOutput('layersOutput', { error: error.message });
    }
}
