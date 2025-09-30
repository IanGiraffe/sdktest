import { setupAnalytics } from './ui/analytics.js';
import { setupTabs } from './ui/tabs.js';
import { functionCatalog } from './automation/functionCatalog.js';
import { setupAutomationPanel } from './automation/setupAutomation.js';
import { displayOutput } from './ui/ui.js';

let giraffeState;
let rpc;
let automationController = null;

async function loadGiraffeSDK() {
    try {
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

function bindManualButtons(context) {
    functionCatalog.forEach(fn => {
        if (!fn.buttonId || typeof fn.invoke !== 'function') {
            return;
        }
        const button = document.getElementById(fn.buttonId);
        if (!button || button.dataset.automationBound === '1') {
            return;
        }

        button.addEventListener('click', async () => {
            try {
                const data = await fn.invoke(context);
                if (fn.outputId) {
                    displayOutput(fn.outputId, data);
                }
            } catch (error) {
                const formattedError = error instanceof Error ? error.message : String(error);
                if (fn.outputId) {
                    displayOutput(fn.outputId, { error: formattedError });
                }
                console.error(`Manual invocation failed for ${fn.id}:`, error);
            }
        });

        button.dataset.automationBound = '1';
    });
}

function initializeListeners(state) {
    if (!state || typeof state.addListener !== 'function') {
        return;
    }

    state.addListener(['project', 'projects'], () => {
        console.log('Project data changed');
    });

    state.addListener(['mapView', 'selected'], () => {
        console.log('Map state changed');
    });
}

async function initializeApp(context) {
    bindManualButtons(context);
    setupAnalytics(context.rpc);
    automationController = setupAutomationPanel(context);
    initializeListeners(context.giraffeState);
    console.log('Giraffe SDK Test App initialized');
}

document.addEventListener('DOMContentLoaded', async () => {
    setupTabs();

    const { success, error } = await loadGiraffeSDK();
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
                <p style="margin-top:16px; color:#b91c1c;">${error ? `Error: ${error.message || error}` : ''}</p>
            </div>
        `;
        return;
    }

    await initializeApp({ giraffeState, rpc });
});