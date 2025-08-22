Below is a detailed documentation for the Giraffe SDK, generated from the provided `app.js` file, `docs-condensed.md`, and `raw_output.json`. This document focuses on explaining the core SDK functions and the structure of the data they return.

***

# Giraffe SDK Developer Documentation

This document provides detailed documentation for the Giraffe Javascript SDK. It is intended for developers building custom web applications that integrate with the Giraffe platform.

## Core Concepts

The Giraffe SDK provides two primary objects for interacting with a Giraffe project from within an iframe app:

*   `giraffeState`: A class instance for synchronously accessing the current state of the Giraffe project. This is used for reading data like the current project details, layers, features on the map, and map view.
*   `rpc`: An object for making asynchronous Remote Procedure Calls (RPC) to the Giraffe application. This is used for actions that might require user interaction or take time to complete, such as getting the user's current selection.

### Initializing the SDK

First, you must import the necessary modules from the SDK package.

```javascript
// For standard Javascript applications
import { giraffeState, rpc } from '@gi-nx/iframe-sdk';

// For React applications, a convenient hook is also available
import { useGiraffeState } from '@gi-nx/iframe-sdk-react';
```

## `giraffeState` - Accessing Project Data

The `giraffeState` object is your primary tool for reading data from the Giraffe project. It holds a snapshot of the project's state, which you can access using the `.get()` method.

### `giraffeState.get(key)`

This method retrieves a specific piece of data from the Giraffe state.

**Example:**

```javascript
// Get the current project's information
const project = giraffeState.get('project');
console.log(project.properties.name);

// Get all the layers added to the project
const layers = giraffeState.get('projectLayers');
console.log(`There are ${layers.length} layers in this project.`);
```

---

### `giraffeState.addListener(keys, listener)`

To make your application reactive, you can listen for changes to specific state keys. The `addListener` method registers a callback function that will execute whenever one of the specified keys is updated.

*   `keys`: An array of state key strings to listen to.
*   `listener`: A callback function that is executed upon a state change.

**Example:**

```javascript
// Log a message whenever the map view or selected features change
giraffeState.addListener(['mapView', 'selected'], (key, event) => {
    console.log(`Map state changed for key: ${key}`);
    
    if (key === 'selected') {
        const selectedFeatures = giraffeState.get('selected');
        console.log('New selection contains', selectedFeatures.features.length, 'features');
    }
});
```

---

## `giraffeState` Data Structures

The following sections detail the data structures returned by `giraffeState.get(key)` for various keys, based on the output from a running application.

### `project`

> `giraffeState.get('project')`

Retrieves a GeoJSON Feature object representing the currently active project boundary and its properties.

<details>
<summary>View 'project' JSON structure</summary>

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [/* an array of coordinate arrays */]
  },
  "properties": {
    "name": "Austin Feasibility",
    "id": "58808",
    "units": "meters",
    "org_id": 1,
    "org_name": "Giraffe Team",
    "created_at": "2025-07-25T16:19:49.225471+00:00",
    "updated_at": "2025-08-01T03:51:28.270885+00:00",
    /* ... more custom and system properties ... */
  },
  "_permissions": {
    "userAccess": [
      {
        "id": 115823,
        "user_email": "ian@giraffe.build",
        "project": 58808,
        "access_level": "admin"
      }
    ],
    "teamAccess": [],
    "orgAccess": [],
    "orgAdmin": true,
    "fullPermissions": false,
    "maxPermission": "admin"
  }
}
```
</details>

**Key Properties (`project.properties`):**

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the project. |
| `name` | `string` | The user-defined name of the project. |
| `units` | `string` | The measurement units used in the project (e.g., "meters"). |
| `org_id` | `number` | The ID of the organization that owns the project. |
| `created_at` | `string` | An ISO 8601 timestamp of when the project was created. |
| `updated_at` | `string` | An ISO 8601 timestamp of the last update. |

---

### `projectLayers`

> `giraffeState.get('projectLayers')`

Retrieves an array of objects, where each object represents a layer that has been added to the project.

<details>
<summary>View 'projectLayers' JSON structure</summary>

```json
[
  {
    "id": 761286,
    "project": 58808,
    "group": null,
    "opacity": 1,
    "order": null,
    "layer": 34404,
    "layer_full": {
      "id": 34404,
      "name": "Landfill Buffer",
      "public": false,
      "description": "This layer represents the buffered geography...",
      "layer_type": 2,
      "created_at": "2025-07-29T22:07:06.065107+00:00",
      "org_id": 1,
      "vector_style": {
        "lineColor": { "fixedValue": "rgba(110, 110, 110, 255)" },
        "mainColor": { "fixedValue": "rgba(201, 242, 208, 255)" },
        "mainLayer": "fill",
        "showLines": true,
        "sourceLayer": "geojsonLayer"
      },
      "vector_source": {
        "type": "vector",
        "tiles": [ /* Array of tile URLs */ ]
      }
    }
  }
]
```
</details>

**Key Properties (per layer object):**

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | The unique ID of the project-layer link. |
| `project` | `number` | The ID of the project this layer belongs to. |
| `opacity` | `number` | The current opacity of the layer (0-1). |
| `layer_full` | `object` | An object containing the full definition of the layer. |
| `layer_full.id` | `number` | The global ID of the layer definition. |
| `layer_full.name` | `string` | The name of the layer. |
| `layer_full.layer_type` | `number` | The numeric type identifier for the layer (see Layer Types section). |
| `layer_full.vector_style` | `object` | The Mapbox-compatible styling object for the layer. |
| `layer_full.vector_source` | `object` | The Mapbox-compatible source object for the layer data. |

#### Layer Types

Giraffe uses numeric `layer_type` values to classify different types of layers. The most important distinction is between drawing layers and data layers:

**✅ Data Layers** - `layer_type: 2`:
- These contain imported or external GIS data (shapefiles, GeoJSON, tile services, etc.)
- Typically have `vector_source` with either `tiles` array (for tile services) or `data` property (for direct GeoJSON)
- Examples: Census data, parcel boundaries, environmental buffers, imported shapefiles
- Accessed via functions like `getLayerContents()`, `addTempLayerGeoJSON()`, `updateGeoJSONLayerContents()`
- Have complex `vector_style` objects with Mapbox styling properties
- Can be queried for their contents using `rpc.invoke('getLayerContents', [layerName])`

**Drawing Layers** - Other layer types:
- Used for user sketching, annotations, and interactive geometry creation
- Accessed via functions like `activateDrawingLayer()`, `getUserDrawnPolygon()`, `createRawSection()`
- User-drawn features are stored in `rawSections` and `bakedSections` rather than as separate layers

**Layer Type Reference:**

| `layer_type` | Description | Common Use Cases |
| :--- | :--- | :--- |
| `2` | **Data Layers** | GIS datasets, imported files, tile services, external data sources |
| Other values | Drawing/Sketch Layers | User annotations, interactive drawing tools |

**Example - Comprehensive Layer Analysis:**

```javascript
const layers = giraffeState.get('projectLayers');

// Analyze all layers to identify data layers
const dataLayers = layers.filter(layer => layer.layer_full.layer_type === 2);
const otherLayers = layers.filter(layer => layer.layer_full.layer_type !== 2);

console.log(`Found ${dataLayers.length} data layers:`);
dataLayers.forEach(layer => {
    const layerFull = layer.layer_full;
    console.log(`- ${layerFull.name} (${layerFull.layer_type})`);
    
    // Check if it has vector tiles (external service)
    if (layerFull.vector_source?.tiles) {
        console.log(`  → Uses tile service with ${layerFull.vector_source.tiles.length} tile URLs`);
    }
    
    // Check if it has direct data (uploaded GeoJSON)
    if (layerFull.vector_source?.data) {
        console.log(`  → Contains direct GeoJSON data`);
    }
});

console.log(`Found ${otherLayers.length} other layers (likely drawing/annotation layers)`);
```

**Getting Data Layer Contents:**

```javascript
// Get contents of all data layers
async function analyzeDataLayerContents() {
    const layers = giraffeState.get('projectLayers');
    const dataLayers = layers.filter(layer => layer.layer_full.layer_type === 2);
    
    for (const layer of dataLayers) {
        try {
            const contents = await rpc.invoke('getLayerContents', [layer.layer_full.name]);
            console.log(`${layer.layer_full.name}: ${contents.features?.length || 0} features`);
        } catch (error) {
            console.log(`${layer.layer_full.name}: Could not retrieve contents (${error.message})`);
        }
    }
}
```

---

### `rawSections` and `bakedSections`

> `giraffeState.get('rawSections')`
> `giraffeState.get('bakedSections')`

Retrieves a GeoJSON `FeatureCollection` of all the geometries drawn or created by the user in the project.
*   **`rawSections`** contains the features as they were created.
*   **`bakedSections`** contains the same features but with additional calculated properties like area, perimeter, and projected coordinates, which are useful for analysis.

<details>
<summary>View 'bakedSections' FeatureCollection JSON structure</summary>

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [/*...coordinates...*/]
      },
      "properties": {
        "id": "c7gj4rMwwJOQr0-vRRpAa",
        "projectId": "58808",
        "appId": "1",
        "public": true,
        "layerId": "default",
        "perimeter": 243.588373633055,
        "area": 622.6512824467057,
        "grossArea": 622.6512824467057,
        "_baseHeight": 0,
        "_height": 0
      },
      "_projected": [/*...projected coordinates in meters...*/]
    }
  ]
}
```
</details>

**Key Properties (per feature in `properties`):**

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this specific feature. |
| `projectId` | `string` | The ID of the project this feature belongs to. |
| `appId` | `string` | The ID of the Giraffe App that created this feature (e.g., "1" for the default tools). |
| `usage` | `string` | (Optional) The primary category or type of the feature (e.g., "Residential", "Road"). |
| `area` | `number` | (*Baked only*) The calculated area of the feature. |
| `grossArea` | `number` | (*Baked only*) The calculated gross area of the feature. |
| `perimeter` | `number` | (*Baked only*) The calculated perimeter of the feature. |
| `_projected` | `array` | (*Baked only*) The feature's geometry, re-projected into local meters. |

---

### `mapView`

> `giraffeState.get('mapView')`

Retrieves an object describing the current state of the map viewport, including its boundaries, center, and zoom level.

<details>
<summary>View 'mapView' JSON structure</summary>

```json
{
  "bounds": [
    [ -97.7439, 30.2615 ],
    [ -97.7433, 30.2652 ]
  ],
  "zoom": 17.095,
  "center": [ -97.7436, 30.2634 ],
  "padding": {
    "top": 20, "bottom": 20, "left": 20, "right": 20
  }
}
```
</details>

**Key Properties:**

| Property | Type | Description |
| :--- | :--- | :--- |
| `bounds` | `array` | An array containing the southwest and northeast corners of the map view as `[lng, lat]` pairs. |
| `zoom` | `number` | The current zoom level of the map. |
| `center` | `array` | A `[lng, lat]` array representing the center point of the map. |
| `padding`| `object` | The pixel padding applied to the map's viewport. |

---

### `layerTree`

> `giraffeState.get('layerTree')`

Retrieves the hierarchical structure of the layers panel, including layer groups and the visibility state of each item.

<details>
<summary>View 'layerTree' JSON structure</summary>

```json
{
  "rootId": "root",
  "items": {
    "root": {
      "id": "root",
      "children": [
        "GIRDRW-1:default-fill",
        "Structures",
        "Environmental"
      ],
      "isExpanded": true
    },
    "Structures": {
      "id": "Structures",
      "data": { "enabled": false },
      "children": [ "GIRPLA-34410.0" ],
      "isExpanded": false
    },
    "GIRPLA-34410.0": {
      "id": "GIRPLA-34410.0",
      "data": { "opacity": 0, "styleByLens": true }
    }
  }
}
```
</details>

**Structure Explanation:**

The `layerTree` is represented as a flattened tree.
*   `rootId`: The key for the top-level item in the `items` object.
*   `items`: An object where each key is the ID of a tree item (either a layer or a group).
*   **Group Item:** Has an `id`, `children` (an array of item IDs), and `isExpanded` property.
*   **Layer Item:** Has an `id` and a `data` object containing properties like `opacity`. The ID typically corresponds to an ID in the `projectLayers` array.

---

## `rpc` - Invoking Asynchronous Actions

The `rpc` object is used to call functions that may require a response from the main Giraffe application or involve user interaction.

### `rpc.invoke(command, params)`

This method executes a command within the Giraffe application.

*   `command`: A string representing the name of the command to execute.
*   `params`: An array of parameters to pass to the command.

**Example:**

```javascript
// Get the features currently selected by the user on the map
async function logSelectedFeatures() {
    try {
        const selected = await rpc.invoke('getSelectedFeatures', []);
        console.log(selected);
    } catch (error) {
        console.error('Could not get selected features:', error);
    }
}
```

---

### `getSelectedFeatures`

> `rpc.invoke('getSelectedFeatures', [])`

Asynchronously retrieves a GeoJSON `FeatureCollection` containing all the features currently selected by the user on the map.

**Parameters:**
*   `[]`: This command takes no parameters.

**Returns:**
*   A `Promise` that resolves to a `FeatureCollection`. The structure of the features within this collection is identical to those found in `rawSections` and `bakedSections`. If nothing is selected, the `features` array will be empty.