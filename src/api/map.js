import { displayOutput } from '../ui/ui.js';

export function getMapView(giraffeState) {
    try {
        const mapView = giraffeState.get('mapView');
        displayOutput('mapOutput', mapView);
    } catch (error) {
        displayOutput('mapOutput', { error: error.message });
    }
}

export async function getSelectedFeatures(rpc) {
    try {
        const selected = await rpc.invoke('getSelectedFeatures', []);
        displayOutput('mapOutput', selected);
    } catch (error) {
        displayOutput('mapOutput', { error: error.message });
    }
}

export function getMapContent(giraffeState) {
    try {
        const mapContent = giraffeState.get('mapContent');
        displayOutput('boundaryOutput', mapContent);
    } catch (error) {
        displayOutput('boundaryOutput', { error: error.message });
    }
}


