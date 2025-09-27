import { getCurrentProject, getAllProjects, getCurrentProjectBoundary } from './api/project.js';
import { getMapView, getSelectedFeatures, getMapContent } from './api/map.js';
import { getProjectLayers, getRawSections, getBakedSections, getLayerTree, exploreLayerTypes, analyzeDataLayers, testDrawingLayerActivation, testLayerContents } from './api/layers.js';
import { checkSelectedForBoundary, exploreAllStates } from './api/boundary.js';
import { getAllViews, analyzeViewStructure, getViewDetails } from './api/views.js';
import { activateViewportLayer, deactivateViewportLayer, refreshViewportLayer, getViewportLayerStatus, testArcGISService } from './api/viewport.js';
import { setupAnalytics } from './ui/analytics.js';
import { setupTabs } from './ui/tabs.js';

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
        return { giraffeState, rpc, success: true };
    } catch (error) {
        console.error('Failed to load Giraffe SDK:', error);
        return { success: false, error };
    }
}

function initializeApp() {
    // Project Information
    document.getElementById('getCurrentProject').addEventListener('click', () => getCurrentProject(giraffeState));
    document.getElementById('getAllProjects').addEventListener('click', () => getAllProjects(giraffeState));
    document.getElementById('getCurrentProjectBoundary').addEventListener('click', () => getCurrentProjectBoundary(giraffeState));

    // Map State
    document.getElementById('getMapView').addEventListener('click', () => getMapView(giraffeState));
    document.getElementById('getSelectedFeatures').addEventListener('click', () => getSelectedFeatures(rpc));

    // Layers
    document.getElementById('getProjectLayers').addEventListener('click', () => getProjectLayers(giraffeState));
    document.getElementById('getRawSections').addEventListener('click', () => getRawSections(giraffeState));
    document.getElementById('getBakedSections').addEventListener('click', () => getBakedSections(giraffeState));
    document.getElementById('getLayerTree').addEventListener('click', () => getLayerTree(giraffeState));
    document.getElementById('exploreLayerTypes').addEventListener('click', () => exploreLayerTypes(giraffeState));
    document.getElementById('analyzeDataLayers').addEventListener('click', () => analyzeDataLayers(giraffeState));
    document.getElementById('testDrawingLayerActivation').addEventListener('click', () => testDrawingLayerActivation(rpc));
    document.getElementById('testLayerContents').addEventListener('click', () => testLayerContents(rpc, giraffeState));

    // Boundary Investigation
    document.getElementById('checkSelectedForBoundary').addEventListener('click', () => checkSelectedForBoundary(rpc));
    document.getElementById('exploreAllStates').addEventListener('click', () => exploreAllStates(giraffeState));
    document.getElementById('getMapContent').addEventListener('click', () => getMapContent(giraffeState));

    // Views Exploration
    document.getElementById('getAllViews').addEventListener('click', () => getAllViews(giraffeState));
    document.getElementById('analyzeViewStructure').addEventListener('click', () => analyzeViewStructure(giraffeState));
    document.getElementById('getViewDetails').addEventListener('click', () => getViewDetails(giraffeState));

    // Viewport-Based Vector Layer
    document.getElementById('testArcGISService').addEventListener('click', () => testArcGISService(giraffeState));
    document.getElementById('activateViewportLayer').addEventListener('click', () => activateViewportLayer(rpc, giraffeState));
    document.getElementById('refreshViewportLayer').addEventListener('click', () => refreshViewportLayer());
    document.getElementById('getViewportLayerStatus').addEventListener('click', () => getViewportLayerStatus());
    document.getElementById('deactivateViewportLayer').addEventListener('click', () => deactivateViewportLayer());

    // Analytics
    setupAnalytics(rpc);

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
}

// Initialize SDK when page loads
document.addEventListener('DOMContentLoaded', async function() {
    // Set up UI tabs immediately
    setupTabs();

    const { success } = await loadGiraffeSDK();
    if (!success) {
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
    } else {
        initializeApp();
    }
});
