### Get Current Project: Button-to-Panel Flow

- **Purpose**: When the user clicks the `Get Current Project` button, call `giraffeState.get('project')` and render the JSON into the Project panel.
- **Flow**:
  - User clicks `#getCurrentProject` in the UI
  - `bindManualButtons` wires the button to the matching `functionCatalog` entry
  - Catalog entry invokes `giraffeState.get('project')`
  - Result is passed to `displayOutput('projectOutput', data)`
  - The Project panel div shows the JSON

#### UI: Button and Output Panel
```24:30:c:\Dev\Apps\sdktest\index.html
        <div id="tab-project" class="tab-content section active" role="tabpanel">
            <h2>Project Information</h2>
            <button id="getCurrentProject">Get Current Project</button>
            <button id="getAllProjects">Get All Projects</button>
            <button id="getCurrentProjectBoundary">Get Current Project Boundary</button>
            <div id="projectOutput" class="output" aria-live="polite"></div>
        </div>
```

#### Wiring: Button → Function Catalog → Output Target
```76:87:c:\Dev\Apps\sdktest\src\automation\functionCatalog.js
export const functionCatalog = [
  {
    id: 'giraffeState.get.project',
    label: 'giraffeState.get("project")',
    sdkCall: 'giraffeState.get("project")',
    buttonId: 'getCurrentProject',
    category: 'Project',
    access: ACCESS.READ,
    direct: true,
    outputId: 'projectOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('project')
  },
```

#### Binding the Click Handler and Rendering the Result
```24:40:c:\Dev\Apps\sdktest\src\app.js
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
```

#### Actual Renderer Used by the Flow
```2:6:c:\Dev\Apps\sdktest\src\ui\ui.js
export function displayOutput(elementId, data) {
    const element = document.getElementById(elementId);
    // Update text content first (this clears children)
    element.textContent = JSON.stringify(data, null, 2);
```

#### SDK Availability (loaded at startup)
```11:18:c:\Dev\Apps\sdktest\src\app.js
async function loadGiraffeSDK() {
    try {
        const sdk = await import('https://esm.run/@gi-nx/iframe-sdk');
        giraffeState = sdk.giraffeState;
        rpc = sdk.rpc;
```

- **Notes**:
  - The catalog entry’s `invoke` calls `giraffeState.get('project')`.
  - The result is rendered into `#projectOutput` by `displayOutput(...)`.


