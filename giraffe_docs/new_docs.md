# Giraffe SDK: Functions Reference (Updated)

This document lists only Giraffe SDK functions used by the app and what they return. It focuses on the two SDK surfaces available to iframe apps:

- giraffeState: synchronous access to current project state via keys.
- rpc: asynchronous remote procedure calls for actions and data retrieval.

Note: App-specific helpers or non-SDK utilities are intentionally omitted.

## Getting access to the SDK

```js
import { giraffeState, rpc } from '@gi-nx/iframe-sdk';
// In a plain iframe app you can import dynamically as well.
```

## giraffeState: State Access

### **`get('project')`**

Returns a GeoJSON Feature for the active project, including geometry and properties.

#### Response Structure:
  
  Returns a GeoJSON Feature object with the following structure:
  
##### Standard GeoJSON Properties:
  - `type`: "Feature"
  - `geometry`: GeoJSON geometry object defining the project boundary
    - `type`: geometry type (typically "Polygon" for project areas)
    - `coordinates`: coordinate arrays in WGS84 decimal degrees
  
##### Core Project Properties:
  - `name`: string project name
  - `id`: string project identifier
  - `units`: string measurement units ("feet", "meters", etc.)
  - `org_id`: numeric organization identifier
  - `org_name`: string organization name
  - `created_at`: ISO timestamp of project creation
  - `updated_at`: ISO timestamp of last modification
  
##### Custom Project Fields:
  The properties object includes user-defined fields that vary by organization and project type:
  - **Financial Fields**: "Sale Price", "Price", "Price per Sq Ft", "Hard Costs", "Project NOI", "Return on Costs"
  - **Property Details**: "Lot Size", "Total Square Footage", "Number of Units", "City", "County"
  - **Development Info**: "Land Use", "Project Type", "Status", "Assigned To"
  - **Market Data**: "Average Rent", "% Leased", "qoz" (Opportunity Zone status)
  - **Environmental**: "Wetlands Coverage?", "Flood Risk?"
  - **Documents**: "Site Plan", "Floor Plan", "services provided"
  - **Timeline**: "Date of Contact", "Last Sold Date", "Last Sold Value"
  - **Notes**: "Comments", "Pursuit" (boolean flag)
  
##### Grid Configuration:
  - `grid`: object defining coordinate system for measurements
    - `origin`: [longitude, latitude] reference point
    - `distance`: numeric distance value for grid spacing
    - `bearing`: numeric bearing angle in radians
  
##### Sharing Status:
  - `shared_with_me`: boolean indicating if project is shared with current user
  - `shared_with_my_team`: boolean indicating if project is shared with user's team
  - `shared_with_my_workspace`: boolean indicating if project is shared with workspace
  
##### Permissions Object (`_permissions`):
  - `userAccess`: array of user access entries
    - Each entry: `{id, user_email, project, access_level}`
    - Access levels: "admin", "edit", "view"
  - `teamAccess`: array of team access entries
  - `orgAccess`: array of organization access entries
  - `orgAdmin`: boolean indicating if current user is org admin
  - `fullPermissions`: boolean indicating if user has full permissions
  - `maxPermission`: string indicating highest permission level for current user
  
##### Sharing Details (`_sharingDetails`):
  - `user`: array of individual user shares
  - `team`: array of team shares
  - `org`: array of organization shares
  
##### Additional Flags:
  - `_isSpace`: boolean indicating if this is a space rather than a project
  
##### Usage Patterns:
  ```js
  const project = giraffeState.get('project');
  
  // Access basic project info
  console.log(`Project: ${project.properties.name} (${project.properties.id})`);
  console.log(`Organization: ${project.properties.org_name}`);
  
  // Check permissions
  const canEdit = project._permissions.maxPermission === 'admin' || 
                  project._permissions.maxPermission === 'edit';
  
  // Access custom fields (field names vary by organization)
  const salePrice = project.properties['Sale Price'];
  const lotSize = project.properties['Lot Size'];
  const status = project.properties['Status'];
  
  // Get project boundary
  const boundary = project.geometry;
  if (boundary.type === 'Polygon') {
    console.log('Project has polygon boundary');
  }
  ```
  
##### Notes:
  - Custom field names and availability vary by organization configuration
  - Field values can be strings, numbers, booleans, or dates depending on field type
  - The geometry defines the project's geographic boundary for analysis
  - Permissions control what actions the current user can perform
  - Grid configuration is used for local coordinate system calculations

### **`get('projects')`**

Returns a GeoJSON FeatureCollection of projects visible to the user. Each feature includes properties like id, name, organization, and custom fields.

### **`get('projectBoundary')`**

Returns the current project's boundary (GeoJSON Feature or geometry), if exposed as a distinct state key.

### **`get('mapView')`**

Returns current map view state (e.g., center, zoom, bearing, bounds). Bounds may be an object with west/south/east/north or an array like [[west, south],[east, north]].

#### Response Structure:
  
  Returns an object containing the current map viewport configuration:
  
  ```js
  {
    "bounds": [[west, south], [east, north]],
    "zoom": number,
    "center": [longitude, latitude],
    "padding": {
      "top": number,
      "bottom": number, 
      "left": number,
      "right": number
    }
  }
  ```
  
##### Properties:
  
**bounds**: Array of coordinate pairs defining the visible map area
  - Format: `[[west, south], [east, north]]`
  - First coordinate: `[westernmost_longitude, southernmost_latitude]`
  - Second coordinate: `[easternmost_longitude, northernmost_latitude]`
  - Coordinates are in WGS84 decimal degrees
  - Example: `[[-97.72035, 30.23978], [-97.71892, 30.24126]]`
  
  **zoom**: Number representing the current zoom level
  - Higher numbers = more zoomed in (closer view)
  - Decimal precision indicates fractional zoom levels
  - Typical range: 0 (world view) to 22+ (building level detail)
  - Example: `18.469870740886723` (very close, street/building level)
  
  **center**: Array with the map's center point coordinates
  - Format: `[longitude, latitude]`
  - Coordinates are in WGS84 decimal degrees
  - Represents the geographic center of the current view
  - Example: `[-97.7196878939427, 30.24046551548861]`
  
**padding**: Object defining viewport padding in pixels
  - `top`: pixels of padding from the top edge
  - `bottom`: pixels of padding from the bottom edge
  - `left`: pixels of padding from the left edge
  - `right`: pixels of padding from the right edge
  - Used to account for UI elements that overlay the map
  - Example: `{"top": 200, "bottom": 200, "left": 200, "right": 200}`
  
##### Optional Properties (may appear in some contexts):
  - `bearing`: rotation angle in degrees (0 = north up)
  - `pitch`: tilt angle in degrees (0 = top-down, 60 = perspective view)
  
##### Usage Patterns:
  ```js
  const mapView = giraffeState.get('mapView');
  
  // Get current center coordinates
  const [longitude, latitude] = mapView.center;
  console.log(`Map centered at: ${latitude}, ${longitude}`);
  
  // Check zoom level for conditional rendering
  if (mapView.zoom > 15) {
    console.log('Detailed view - show building details');
  } else {
    console.log('Overview - show general areas');
  }
  
  // Calculate visible area
  const [[west, south], [east, north]] = mapView.bounds;
  const width = east - west;
  const height = north - south;
  console.log(`Visible area: ${width}° × ${height}°`);
  
  // Account for UI padding
  const effectiveViewport = {
    width: window.innerWidth - mapView.padding.left - mapView.padding.right,
    height: window.innerHeight - mapView.padding.top - mapView.padding.bottom
  };
  ```
  
##### Coordinate System:
  - All coordinates use WGS84 (EPSG:4326) decimal degrees
  - Longitude: negative values are west of Greenwich meridian
  - Latitude: positive values are north of the equator
  - Example Austin, TX coordinates: longitude ≈ -97.7, latitude ≈ 30.3
  
##### Bounds Format Variations:
  The bounds may appear in different formats depending on the map library:
  ```js
  // Array format (shown in example)
  "bounds": [[-97.720, 30.239], [-97.718, 30.241]]
  
  // Object format (alternative)
  "bounds": {
    "west": -97.720,
    "south": 30.239,
    "east": -97.718,
    "north": 30.241
  }
  ```
  
##### Notes:
  - The map view updates when users pan, zoom, or resize the map
  - Padding accounts for UI overlays (toolbars, panels) that cover the map
  - Zoom levels follow standard web map conventions (Google Maps, Mapbox)
  - Bounds represent the actual visible geographic area
  - Center coordinates may not be the geometric center if padding is asymmetric

### **`get('projectLayers')`**

Returns an array of project-layer entries. Each item contains a layer_full object describing name, type, and style/source configuration.

#### Detailed Response Structure:
  
  Each layer entry in the array contains:
  - `id`: unique identifier for the project-layer relationship
  - `project`: project ID this layer belongs to
  - `group`: layer group name (e.g., "Basemap", "Esri FeatureServer", "Context") or null
  - `opacity`: layer opacity value (0-1)
  - `order`: layer ordering or null
  - `layer`: reference to the layer ID
  - `layer_full`: complete layer definition object containing:
    - `id`: unique layer identifier
    - `name`: human-readable layer name
    - `public`: boolean indicating if layer is publicly available
    - `protected`: boolean indicating if layer is protected
    - `description`: detailed layer description
    - `tags`: array of categorization tags
    - `meta`: additional metadata or null
    - `data_date`: date of data or null
    - `default_group`: suggested grouping for the layer
    - `layer_type`: numeric type (0=raster, 2=vector, 3=3D/model)
    - `created_at`: ISO timestamp of layer creation
    - `org_id`: organization identifier
    - `org_name`: organization name or null
    - `style`: Mapbox GL style object for raster/3D layers (or null for vector layers)
    - `vector_style`: styling configuration for vector layers (or null for raster/3D layers)
    - `vector_source`: vector tile source configuration (or null for raster/3D layers)

##### Layer Types:
  - **Type 0 (Raster)**: Contains `style` with Mapbox GL raster configuration
  - **Type 2 (Vector)**: Contains `vector_style` and `vector_source` for vector tile rendering
  - **Type 3 (3D/Model)**: Contains `style` with 3D model or symbol configuration

##### Vector Style Properties (for layer_type 2):
  - `mainColor`: color configuration with scale functions and palette mapping
  - `lineColor`: stroke color configuration
  - `mainLayer`: geometry type ("fill", "line", "circle", etc.)
  - `showLines`: boolean for outline visibility
  - `sourceLayer`: vector tile layer name
  - `columnDef`: field definitions for data properties
  - `fillOpacity`: transparency for fill layers
  - `sortBy`: array of sorting criteria

##### Vector Source Properties (for layer_type 2):
  - `type`: "vector"
  - `tiles`: array of tile URL templates
  - `minzoom`/`maxzoom`: zoom level constraints
  - `promoteId`: feature ID field for interaction

  Example layer types you might encounter:
  - Satellite imagery (raster basemap)
  - Zoning boundaries (vector polygons with color-coded styling)
  - Building footprints (3D extruded models)
  - Transit routes (vector lines)
  - Parcel data (vector polygons with rich attribute data)

### **`get('rawSections')`**

Returns a FeatureCollection of user-drawn "raw" sections associated with the project.

#### Response Structure:
  
  Returns a GeoJSON FeatureCollection where each feature represents a user-drawn section with:
  
##### Standard GeoJSON Properties:
  - `type`: "Feature"
  - `geometry`: GeoJSON geometry object (Polygon, LineString, Point, etc.)
  - `geometry.type`: geometry type ("Polygon", "LineString", "Point", "MultiPolygon", etc.)
  - `geometry.coordinates`: coordinate arrays following GeoJSON specification
  
##### Giraffe-Specific Properties:
  - `versionId`: numeric identifier for the version of this feature
  - `properties`: object containing section metadata and styling
  
##### Properties Object Fields:
  - `id`: unique string identifier for the section (e.g., "-qERUMklzoQqnt_07Ic5I")
  - `appId`: string identifier for the app that created this section
  - `projectId`: string project ID this section belongs to
  - `layerId`: string layer identifier (e.g., "default", "parking count")
  - `color`: hex color code for fill/primary color (e.g., "#ffec7d")
  - `public`: boolean indicating if section is publicly visible
  - `stackOrder`: numeric z-index for layer ordering (-1, 0, 1, etc.)
  
##### Optional Properties (depending on geometry type and user configuration):
  - `usage`: string describing intended use (e.g., "Core")
  - `levels`: numeric value for building levels or similar
  - `groupID`: string identifier for grouping related sections (e.g., "group 1")
  - `stroke`: hex color code for outline/stroke color
  - `strokeWidth`: numeric pixel width for strokes
  - `strokeLinecap`: string stroke cap style ("butt", "round", "square")
  
##### Common Geometry Types:
  - **Polygon**: Building footprints, zones, areas of interest
  - **LineString**: Roads, boundaries, linear measurements
  - **Point**: Markers, annotations, specific locations
  - **MultiPolygon**: Complex areas with holes or multiple parts
  
##### Usage Patterns:
  ```js
  const rawSections = giraffeState.get('rawSections');
  rawSections.features.forEach(feature => {
    const { id, layerId, color, usage } = feature.properties;
    const geometryType = feature.geometry.type;
    console.log(`Section ${id} on layer ${layerId}: ${geometryType} with color ${color}`);
  });
  ```
  
##### Notes:
  - Sections are user-created drawings and annotations on the map
  - Each section maintains its visual styling (colors, stroke properties)
  - The `versionId` helps track changes and updates to sections
  - Different apps may create sections with different property schemas
  - Sections can be organized into layers and groups for better management

### **`get('bakedSections')`**

Returns a FeatureCollection of "baked" sections derived from raw sections.

#### Response Structure:
  
  Returns a GeoJSON FeatureCollection where each feature represents a processed section with calculated properties and enhanced metadata. Baked sections include all raw section properties plus computed values.
  
##### Standard GeoJSON Properties:
  - `type`: "Feature"
  - `geometry`: GeoJSON geometry object (same as raw sections)
  - `geometry.coordinates`: coordinate arrays following GeoJSON specification
  
  **Giraffe-Specific Properties:**
  - `versionId`: numeric identifier for the version of this feature
  - `properties`: enhanced object with raw properties plus calculated values
  - `_projected`: array of projected coordinates for rendering optimization
  - `_display2dOutline`: optional 2D outline geometry for complex shapes
  
##### Enhanced Properties Object:
  
###### Original Raw Section Properties (inherited from raw sections):
  - `id`: unique string identifier
  - `appId`: string app identifier
  - `projectId`: string project ID
  - `layerId`: string layer identifier
  - `color`: hex color code for fill
  - `stroke`: hex color code for outline
  - `public`: boolean visibility flag
  - `stackOrder`: numeric z-index
  - `strokeWidth`: numeric stroke width
  - `strokeLinecap`: stroke cap style
  
###### Calculated Geometric Properties:
  - `perimeter`: calculated perimeter length in project units
  - `area`: calculated area in square project units
  - `length`: calculated length for LineString geometries
  
###### Building-Specific Properties (for buildingSection types):
  - `type`: "buildingSection" for building footprints
  - `levels`: number of floors/levels
  - `floorToFloor`: height per floor in project units
  - `grossArea`: total floor area across all levels
  - `grossBuildingArea`: same as grossArea (total building area)
  - `netArea`: usable area (may be 0 if not calculated)
  - `saleableArea`: sellable area (may be 0 if not calculated)
  - `efficiency`: efficiency ratio (0-1)
  - `sellEfficiency`: selling efficiency ratio (0-1)
  - `hardCost`: cost per square unit
  - `facadeCost`: facade cost per unit
  
###### Rendering Properties:
  - `_layerOpacity`: opacity for the layer (0-1)
  - `_fillOpacity`: fill opacity (0-1)
  - `_strokeOpacity`: stroke opacity (0-1)
  - `_height`: total height in project units
  - `_baseHeight`: base/foundation height
  - `_baseElevation`: elevation above ground level
  - `_stackOrder`: computed stacking order
  
###### Building Hierarchy Properties:
  - `_buildingID`: identifier linking sections to buildings
  - `_isBaseSection`: boolean indicating if this is a base/foundation section
  - `ix`: index within building or group
  
###### Projection and Display Properties:
  - `_projected`: array of coordinates projected to screen/local coordinate system
  - `_display2dOutline`: optional MultiPolygon geometry for complex 2D outlines
  
##### Usage Patterns:
  ```js
  const bakedSections = giraffeState.get('bakedSections');
  bakedSections.features.forEach(feature => {
    const props = feature.properties;
    
    if (props.type === 'buildingSection') {
      console.log(`Building ${props.id}: ${props.grossArea} sq ft across ${props.levels} levels`);
      console.log(`Height: ${props._height} ft, Hard cost: $${props.hardCost}/sq ft`);
    }
    
    if (feature.geometry.type === 'LineString') {
      console.log(`Line ${props.id}: ${props.length} ft long`);
    }
    
    if (feature.geometry.type === 'Polygon') {
      console.log(`Area ${props.id}: ${props.area} sq ft, perimeter: ${props.perimeter} ft`);
    }
  });
  ```
  
##### Key Differences from Raw Sections:
  - **Calculated Values**: Includes computed area, perimeter, length, and building metrics
  - **3D Properties**: Height, elevation, and building hierarchy information
  - **Rendering Optimization**: Projected coordinates and display geometries
  - **Building Analytics**: Gross area, efficiency ratios, and cost calculations
  - **Enhanced Metadata**: Additional flags and computed properties for visualization
  
##### Notes:
  - Baked sections are the processed, calculation-ready version of raw sections
  - All geometric calculations are performed and cached in the properties
  - Building sections include detailed floor area and cost analysis
  - Projected coordinates optimize rendering performance
  - The `_display2dOutline` provides alternative geometry for complex shapes

### **`get('layerTree')`**

Returns a hierarchical representation of layers/groups for UI organization.

#### Response Structure:
  
  Returns an object with an `items` property containing a flat map of all tree nodes, where each node can be either a group or a layer item.
  
##### Root Structure:
  ```js
  {
    "items": {
      "root": { /* root node */ },
      "groupId": { /* group nodes */ },
      "layerId": { /* layer nodes */ }
    }
  }
  ```
  
##### Node Types:
  
###### Root Node (`"root"`):**
  - `id`: "root" - identifier for the root node
  - `children`: array of direct child IDs (groups and layers)
  - `isExpanded`: boolean indicating if the root is expanded in UI
  
###### Group Nodes (e.g., "Base Map", "Zoning", "Environmental"):**
  - `id`: string identifier for the group
  - `data`: object containing group metadata
    - `enabled`: boolean indicating if the entire group is enabled/visible
  - `children`: array of child layer IDs belonging to this group
  - `isExpanded`: boolean indicating if the group is expanded in UI
  
###### Layer Nodes (e.g., "GIRPLA-74.0", "GIRPLA-20392.0"):**
  - `id`: string identifier for the layer (typically "GIRPLA-{layerId}.{version}")
  - `data`: object containing layer-specific configuration
    - `opacity`: numeric opacity value (0-1) for the layer
    - `lens`: optional object with data visualization configuration
      - `sortBy`: array of sorting criteria
      - `columnDef`: object defining available data columns/fields
  
###### Drawing Layer Nodes (e.g., "GIRDRW-1:default-fill"):**
  - `id`: string identifier following pattern "GIRDRW-{appId}:{layerName}-{renderType}"
  - Represent user-drawn sections and annotations
  - No additional `data` properties in basic cases
  
##### Layer ID Patterns:
  - **Platform Layers**: `GIRPLA-{layerId}.{version}` (e.g., "GIRPLA-75.0")
  - **Drawing Layers**: `GIRDRW-{appId}:{layerName}-{renderType}` (e.g., "GIRDRW-1:default-fill")
  - **Groups**: Human-readable names (e.g., "Base Map", "Zoning")
  
##### Example Group Categories:
  - **"Base Map"**: Foundational layers like satellite imagery, labels, 3D buildings
  - **"Zoning"**: Zoning classifications and regulations
  - **"Environmental"**: Environmental constraints and features
  - **"Parcel Data"**: Property boundary and ownership information
  - **Drawing Layers**: User-created sections and annotations (at root level)
  
##### Column Definition Structure (in `lens.columnDef`):**
  ```js
  "columnName": {
    "name": "columnName",
    "type": "string|number|boolean|date",
    "label": "Human Readable Label",
    "description": "Detailed field description"
  }
  ```
  
##### Usage Patterns:
  ```js
  const layerTree = giraffeState.get('layerTree');
  const { items } = layerTree;
  
  // Get root children (top-level groups and layers)
  const rootChildren = items.root.children;
  
  // Find all groups
  const groups = rootChildren.filter(id => items[id].children);
  
  // Get layers in a specific group
  const zoneGroup = items["Zoning"];
  if (zoneGroup && zoneGroup.children) {
    zoneGroup.children.forEach(layerId => {
      const layer = items[layerId];
      console.log(`Layer ${layerId}: opacity ${layer.data?.opacity}`);
    });
  }
  
  // Find drawing layers
  const drawingLayers = rootChildren.filter(id => id.startsWith('GIRDRW-'));
  
  // Access layer data fields
  const parcelLayer = items["GIRPLA-20392.0"];
  if (parcelLayer?.data?.lens?.columnDef) {
    Object.entries(parcelLayer.data.lens.columnDef).forEach(([field, def]) => {
      console.log(`${def.label}: ${def.description}`);
    });
  }
  ```
  
##### Tree Traversal Helper:
  ```js
  function traverseLayerTree(items, nodeId = 'root', callback) {
    const node = items[nodeId];
    if (!node) return;
    
    callback(node, nodeId);
    
    if (node.children) {
      node.children.forEach(childId => {
        traverseLayerTree(items, childId, callback);
      });
    }
  }
  
  // Usage
  traverseLayerTree(layerTree.items, 'root', (node, id) => {
    if (node.data?.opacity !== undefined) {
      console.log(`Layer ${id}: ${node.data.opacity * 100}% opacity`);
    }
  });
  ```
  
##### Notes:
  - The tree structure is flattened into a single `items` object for efficient lookup
  - Groups can be collapsed/expanded independently via `isExpanded`
  - Layer opacity can be controlled individually through `data.opacity`
  - Drawing layers appear at the root level and represent user-created content
  - The `lens` configuration provides metadata about data fields for layers with tabular data
  - Group `enabled` state controls visibility of all child layers collectively

### **`get('views')`**

Returns an array of saved views containing map states, camera positions, and layer configurations.

#### Response Structure:

  Returns an array where each view object represents a saved map state with the following structure:

##### Core View Properties:
  - `id`: numeric unique identifier for the view (e.g., 21753)
  - `name`: string name of the view (e.g., "Test View")
  - `sort_order`: numeric ordering value or null
  - `project`: numeric project ID this view belongs to
  - `created_at`: ISO timestamp of view creation (e.g., "2025-09-27T15:31:43.480556Z")

##### View Details Object (`details`):
  The details object contains the complete saved state of the map view:

###### Camera Configuration (`camera`):
  - `center`: object with geographic center coordinates
    - `lng`: longitude in decimal degrees (e.g., -97.7196878939427)
    - `lat`: latitude in decimal degrees (e.g., 30.24046551548861)
  - `bearing`: rotation angle in degrees (e.g., 12.008338760169408)
  - `pitch`: tilt angle in degrees for 3D views (e.g., 18.68091504038405)
  - `zoom`: zoom level (e.g., 18.469870740886723)

###### View Type (`topView`):
  - String indicating the view mode (e.g., "2.5D", "3D", "2D")
  - Controls whether the map displays in flat 2D or perspective 3D mode

###### Layer Tree State (`layerTree`):
  - `items`: object containing complete layer hierarchy and states
  - `rootId`: string identifying the root node (typically "root")

##### Layer Items Structure:
  Each layer in the layerTree.items contains:
  - **Group Items** (e.g., "Zoning", "Base Map"):
    - `id`: group identifier string
    - `data.enabled`: boolean indicating if group is enabled
    - `children`: array of layer IDs in this group
    - `isExpanded`: boolean for UI expansion state

  - **Layer Items** (e.g., "GIRPLA-20392.0"):
    - `id`: layer identifier string
    - `data.opacity`: numeric opacity value (0-1)
    - `data.lens`: optional configuration object for data visualization
      - `sortBy`: array of sorting criteria
      - `columnDef`: object defining data field metadata
      - `lineColor`: stroke styling configuration
      - `mainColor`: fill color and palette configuration
      - `fillOpacity`: transparency for fill layers
      - `sourceLayer`: vector tile layer name
      - `columnKeys`: array of visible data columns
    - `data.styleByLens`: boolean indicating if styled by lens configuration

  - **Drawing Layers** (e.g., "GIRDRW-1:default-fill"):
    - `id`: drawing layer identifier
    - `data.opacity`: layer opacity
    - `data.locked`: boolean indicating if layer is locked from editing

  **Active Layer (`activeLayer`):**
  - String ID of the currently active/selected layer for editing
  - Example: "GIRDRW-1:default-fill"

##### Optional View Properties:
  - `solarDate`: Date string for solar analysis visualization
  - `size`: object with width/height dimensions of the saved viewport
  - `description`: string description of the view
  - `snapShot`: URL path to a preview image of the view

##### Usage Patterns:
  ```js
  const views = giraffeState.get('views');

  views.forEach(view => {
    console.log(`View "${view.name}" (ID: ${view.id})`);
    console.log(`Project: ${view.project}`);
    console.log(`Camera: ${view.details.camera.zoom}x zoom at ${view.details.camera.center.lat}, ${view.details.camera.center.lng}`);
    console.log(`View mode: ${view.details.topView}`);

    // Access layer states
    const layerTree = view.details.layerTree;
    Object.entries(layerTree.items).forEach(([layerId, layer]) => {
      if (layer.data?.opacity !== undefined) {
        console.log(`  Layer ${layerId}: ${Math.round(layer.data.opacity * 100)}% opacity`);
      }
    });
  });
  ```

##### Restoring a View:
  Views contain all the information needed to restore a specific map state:
  ```js
  function restoreView(view) {
    const { camera, topView, layerTree, activeLayer } = view.details;

    // Restore camera position
    map.flyTo({
      center: [camera.center.lng, camera.center.lat],
      zoom: camera.zoom,
      bearing: camera.bearing,
      pitch: camera.pitch
    });

    // Apply layer visibility and opacity
    Object.entries(layerTree.items).forEach(([layerId, layer]) => {
      if (layer.data?.opacity !== undefined) {
        setLayerOpacity(layerId, layer.data.opacity);
      }
      if (layer.data?.enabled !== undefined) {
        setLayerVisibility(layerId, layer.data.enabled);
      }
    });

    // Set active drawing layer
    if (activeLayer) {
      setActiveLayer(activeLayer);
    }
  }
  ```

##### View Management Operations:
  Views enable several common operations:

###### Finding Views by Criteria:
  ```js
  const views = giraffeState.get('views');

  // Find views by name
  const testViews = views.filter(v => v.name.includes('Test'));

  // Find recent views
  const recentViews = views.filter(v => {
    const created = new Date(v.created_at);
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return created > dayAgo;
  });

  // Find views with specific layers enabled
  const zoningViews = views.filter(v => {
    const zoningGroup = v.details.layerTree.items['Zoning'];
    return zoningGroup?.data?.enabled === true;
  });
  ```

###### Analyzing View Configurations:
  ```js
  function analyzeViewConfiguration(view) {
    const details = view.details;

    return {
      viewName: view.name,
      cameraSettings: {
        is3D: details.topView === '3D' || details.camera.pitch > 0,
        zoomLevel: Math.round(details.camera.zoom),
        isPerspective: details.camera.pitch > 0
      },
      layerCounts: {
        totalLayers: Object.keys(details.layerTree.items).length,
        enabledGroups: Object.values(details.layerTree.items)
          .filter(item => item.data?.enabled === true).length,
        visibleLayers: Object.values(details.layerTree.items)
          .filter(item => item.data?.opacity > 0).length
      },
      activeDrawingLayer: details.activeLayer
    };
  }
  ```

##### Key Insights:
  - Views capture complete map state including camera, layers, and drawing tools
  - Layer tree items include both data layers and user-drawn sections
  - Opacity and visibility states are preserved per layer
  - Camera configuration supports both 2D and 3D perspective viewing
  - Drawing layer state includes which layer is active for editing
  - Views can be analyzed to understand user preferences and common configurations

##### Notes:
  - Views are project-specific and contain the complete visual state
  - The layer tree structure mirrors the current layerTree state format
  - Camera settings are compatible with Mapbox GL JS flyTo() parameters
  - Layer IDs follow the same patterns as in layerTree (GIRPLA-, GIRDRW- prefixes)
  - Views provide a way to save and restore complex map configurations
  - The lens configuration in layer data controls how vector data is styled and displayed

## giraffeState: Events

- addListener(keys: string[], listener: Function): subscribe to updates for specific state keys. Listener fires when any key changes.
  Example:

  ```js
  const unsub = giraffeState.addListener(['project', 'mapView'], () => {
    // react to changes
  });
  // Optional: giraffeState.removeListener(unsub)
  ```

## rpc: Remote Procedure Calls

Call with `rpc.invoke(methodName, argsArray)`. Methods below are known/used by the app.

### **`getSelectedFeatures`**
  - Usage: `await rpc.invoke('getSelectedFeatures', [])`
  - Returns: GeoJSON FeatureCollection representing the user's current selection on the map.

### **`getLayerContents`**
  - Usage: `await rpc.invoke('getLayerContents', [layerName])`
  - Args: layerName (string) – name of a data layer in the project.
  - Returns: GeoJSON FeatureCollection containing all features from the specified layer.
  - Note: Only works with vector/GeoJSON layers. Raster layers (satellite imagery, etc.) are not supported.

#### Detailed Response Structure:

Returns a standard GeoJSON FeatureCollection object containing:
- `type`: always "FeatureCollection"
- `features`: array of GeoJSON Feature objects, each containing:
  - `type`: always "Feature"
  - `geometry`: GeoJSON geometry object with:
    - `type`: geometry type (Point, LineString, Polygon, MultiPolygon, etc.)
    - `coordinates`: array of coordinate arrays defining the geometry
  - `properties`: object containing all feature attributes/metadata (varies by layer)
  - `id`: unique identifier for the feature within the layer

The `properties` object contains layer-specific attribute data which varies depending on the source dataset. Common fields may include identifiers, names, classifications, measurements, and other descriptive information relevant to the geographic features.

### **`activateDrawingLayer`**
  - Usage: `await rpc.invoke('activateDrawingLayer', [])`
  - Effect: Activates the drawing layer/tools in the host app.
  - Returns: Status/result object (implementation-specific).

### **`addTempLayerGeoJSON`**
  - Usage: `await rpc.invoke('addTempLayerGeoJSON', [name, geojson, style, options])`
  - Args:
    - name: string – temporary layer identifier.
    - geojson: FeatureCollection – features to render.
    - style: object – styling config compatible with host rendering.
    - options: object – e.g., lens configuration or label keys.
  - Effect: Adds or updates a temporary layer for display.
  - Returns: Status/result object.

### **`removeTempLayer`**
  - Usage: `await rpc.invoke('removeTempLayer', [name])`
  - Effect: Removes a temporary layer previously added.
  - Returns: Status/result object.

### **`getAnalyticsResult`**
  - Usage: `await rpc.invoke('getAnalyticsResult', [])`
  - Returns: App-defined analytics result payload (shape depends on configured analytics).

### **`getAnalyticsResult`**: Detailed Documentation

#### Description

- Retrieves the most recent analytics output available to the current project/app context. The exact schema is app-defined and may vary by organization or configured analytics pipeline.

#### Signature

```ts
rpc.invoke('getAnalyticsResult', []): Promise<AnalyticsResult>
```

#### Parameters

- None.

#### Returns

- A JSON-serializable object describing the analytics outcome. Common patterns include:
  - Status block: run identifiers and timestamps
  - Summary metrics: key-value KPI results
  - Series: arrays of points suitable for charts
  - Geometry: GeoJSON Feature/FeatureCollection outputs
  - Logs/errors: diagnostic information when runs fail

#### Typical Shapes

##### 1) Summary with time series

```json
{
  "status": {
    "state": "succeeded",
    "runId": "run_01HE9Z...",
    "startedAt": "2025-09-10T21:41:12.102Z",
    "completedAt": "2025-09-10T21:41:13.920Z",
    "durationMs": 1818
  },
  "summary": {
    "totalParcels": 1243,
    "eligibleParcels": 412,
    "coveragePct": 33.15
  },
  "series": [
    { "name": "eligibleByZone", "points": [ ["R-3", 120], ["R-4", 92] ] },
    { "name": "sqftByUse", "points": [ ["Retail", 182340], ["Office", 99400] ] }
  ]
}
```

##### 2) GeoJSON output

```json
{
  "status": { "state": "succeeded", "runId": "run_..." },
  "features": {
    "type": "FeatureCollection",
    "features": [
      { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [...] }, "properties": { "score": 0.82 } }
    ]
  }
}
```

##### 3) In-progress or failed run

```json
{
  "status": { "state": "running", "runId": "run_...", "startedAt": "..." }
}
```

```json
{
  "status": { "state": "failed", "runId": "run_...", "error": { "message": "Timeout", "code": "ETIMEDOUT" } },
  "logs": ["Queued", "Executing query", "Timeout after 30s"]
}
```

#### Field Reference (commonly observed)

- status: object
  - state: string – "succeeded" | "failed" | "running" | "queued"
  - runId: string – unique identifier for the analytics execution
  - startedAt, completedAt: ISO strings
  - durationMs: number – execution time in milliseconds
  - error: object – present on failures (message, code, details)
- summary: object – flat KPI values (numbers/strings)
- series: array – list of named series for charting; each item has name and points
  - points: array of tuples [x, y] or objects { x, y }
- features: GeoJSON FeatureCollection or Feature (if spatial outputs are produced)
- logs: array of strings with diagnostic information

#### Errors and Edge Cases

- If analytics are not configured for the project, the call may return an empty object `{}` or a status with `state: "not_configured"` depending on backend setup.
- For long-running jobs, `state` may be `queued` or `running`; clients should poll or provide a refresh action.
- On error, inspect `status.error` and optionally `logs` for details.

#### Usage Example

```js
const result = await rpc.invoke('getAnalyticsResult', []);
if (result?.status?.state === 'succeeded') {
  // Prefer summary KPIs when present
  if (result.summary) renderSummary(result.summary);
  // Show chart series
  if (Array.isArray(result.series)) renderCharts(result.series);
  // Render spatial output if provided
  if (result.features) addGeoJson(result.features);
} else {
  console.warn('Analytics status:', result?.status);
}
```

#### Compatibility

- The schema is organization/app specific. Introspect keys to adapt UI robustly. Avoid hard-coding to a single expected shape unless your app controls the analytics pipeline.


## Notes and Tips

- State vs RPC: use `giraffeState.get(...)` for instantaneous reads of the current app state; use `rpc.invoke(...)` for operations that query, compute, or mutate through the host.
- Bounds formats: when working with `mapView.bounds`, handle both object and array forms as above.
- Data layers: contents and availability depend on project configuration and permissions; not all layers are directly queryable.

## rpc: `getLassoedLensedFeatures`

### `getLassoedLensedFeatures`
- **Usage**: `await rpc.invoke('getLassoedLensedFeatures', [])`
- **Returns**: Promise<Lensable[]> — GeoJSON Feature objects intersecting the current lasso selection, enriched with lens attributes when a lens is active.

#### Description
Returns features within the user’s current lasso/marquee selection. If a lens context is active, the returned features include lens-derived values in `properties` (e.g., computed metrics, derived fields).

#### Prerequisites
- Draw a lasso on the map before calling; otherwise the result is typically an empty array.
- To receive lens attributes, ensure a lens-enabled context is active (e.g., lens layer or layer with lens configuration).

#### Signature
```ts
rpc.invoke('getLassoedLensedFeatures', []): Promise<Lensable[]>
```

#### Return Shape
```ts
type Lensable = {
  id: number | string;
  tile?: { z: number; x: number; y: number }; // present for tiled/vector sources
  properties: Record<string, any>;            // layer fields + lens fields (if lens active)
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPolygon' | string;
    coordinates: any[];
  };
  type: 'Feature';
};
```

#### Example Response
```json
[
  {
    "id": 304721,
    "tile": { "z": 16, "x": 14978, "y": 26988 },
    "properties": {
      "address": "1500 S PLEASANT VALLEY RD",
      "owner": "BCF 1 LAKESHORE LLC",
      "parcelnumb": "285503",
      "parval": 95230000,
      "usedesc": "APARTMENT 100+",
      "zoning": "ERC",
      "zoning_description": "East Riverside Corridor",
      "city": "austin",
      "county": "travis",
      "state2": "TX",
      "qoz": "No",
      "ll_bldg_footprint_sqft": 119288,
      "ll_last_refresh": "2025-09-30T00:00:00.000Z",
      "ll_updated_at": "2025-10-24T23:17:08.190Z"
      /* ...additional dataset-specific fields... */
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [ [ [ -97.7212643623352, 30.239474612698217 ], [ -97.72029340267181, 30.239012323115972 ] ] ]
    },
    "type": "Feature"
  }
]
```

#### Notes and Edge Cases
- No lasso selection → returns `[]`.
- Lens inactive → `properties` reflect source layer fields only (no lens-derived attributes).
- Field schema varies by dataset; code should inspect keys defensively.

## rpc: `getLassoedProjectFeatures`

### `getLassoedProjectFeatures`
- **Usage**: `await rpc.invoke('getLassoedProjectFeatures', [])`
- **Returns**: Promise<Feature[]> — GeoJSON features from project layers that intersect the current lasso.

#### Description
Returns the underlying project-layer GeoJSON features that intersect the user’s lasso/marquee selection. Unlike `getLassoedLensedFeatures`, this call does not require an active lens. If a lens happens to be active, returned `properties` may still include lens-derived fields, but they are not required.

#### Prerequisites
- Run the app inside Giraffe so `rpc` is available (embedded iframe).
- Draw a lasso on the map before calling; otherwise the result is typically an empty array.
- No lens requirement (returns raw layer attributes when no lens is active).

#### Signature
```ts
rpc.invoke('getLassoedProjectFeatures', []): Promise<Feature[]>
```

#### Return Shape
```ts
type Feature = {
  id?: number | string;
  tile?: { z: number; x: number; y: number }; // present for tiled/vector sources
  properties: Record<string, any>;            // dataset-specific attributes; may include lens fields if lens active
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPolygon' | string;
    coordinates: any[];
  };
  type: 'Feature';
};
```

#### Notes and Edge Cases
- No lasso selection → returns `[]`.
- Without lens, `properties` contains only source layer attributes.
- Attribute schema varies by dataset; consume defensively.

## rpc: `getLassoShape`

### `getLassoShape`
- **Usage**: `await rpc.invoke('getLassoShape', [])`
- **Returns**: Promise<Feature> — GeoJSON Feature representing the current lasso polygon.

#### Description
Returns the geometry of the lasso/marquee drawn by the user as a GeoJSON Feature. Useful for using the selection geometry as a boundary in subsequent operations.

#### Prerequisites
- Run inside Giraffe so `rpc` is available.
- Draw a lasso on the map before calling; otherwise it may return `null`/empty depending on host implementation.

#### Signature
```ts
rpc.invoke('getLassoShape', []): Promise<Feature>
```

#### Return Shape
```ts
type Feature = {
  type: 'Feature';
  properties: Record<string, any>; // commonly includes { stackOrder: number }
  geometry: {
    type: 'Polygon';
    coordinates: number[][][]; // standard GeoJSON polygon ring coordinates
  };
};
```

#### Example Response (truncated)
```json
{
  "type": "Feature",
  "properties": { "stackOrder": 0 },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [ -97.72058683135394, 30.239310979894896 ],
        [ -97.72059097076185, 30.239312948245896 ],
        [ -97.72059924957772, 30.239317... ]
      ]
    ]
  }
}
```

#### Notes
- If no lasso is active, result may be `null`/empty.
- Use as a spatial boundary for querying or visualization (e.g., pass to a temp layer or use for filtering).

## rpc: `getSelectableProjectFeatures`

### `getSelectableProjectFeatures`
- **Usage**: `await rpc.invoke('getSelectableProjectFeatures', [])`
- **Returns**: Promise<Feature[]> — all selectable project GeoJSON features (across layers configured as selectable).

#### Description
Returns all project-layer features that are marked/selectable in the current project context. This does not require a lasso selection and can span multiple selectable layers.

#### Prerequisites
- Run inside Giraffe so `rpc` is available.
- Project must have one or more layers configured as selectable; otherwise an empty array may be returned.

#### Signature
```ts
rpc.invoke('getSelectableProjectFeatures', []): Promise<Feature[]>
```

#### Return Shape
```ts
type Feature = {
  id?: number | string;
  tile?: { z: number; x: number; y: number };
  properties: Record<string, any>; // dataset-specific attributes per layer
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPolygon' | string;
    coordinates: any[];
  };
  type: 'Feature';
};
```

#### Notes and Edge Cases
- May return a large array depending on project size; filter client-side or prefer lassoed calls for subsets.
- Schema varies by dataset; handle attributes defensively.

## rpc: `getUserDrawnPolygon`

### `getUserDrawnPolygon`
- **Usage**: `await rpc.invoke('getUserDrawnPolygon', [])`
- **Returns**: Promise<Feature> — GeoJSON Feature polygon drawn by the user via a guided drawing interaction.

#### Description
Similar to `getLassoShape`, but instead of a freehand lasso, the user explicitly draws a polygon. The call resolves with the resulting polygon as a GeoJSON Feature.

#### Prerequisites
- Run inside Giraffe so `rpc` is available.
- User must complete the polygon drawing interaction; cancelation may return `null` depending on host behavior.

#### Signature
```ts
rpc.invoke('getUserDrawnPolygon', []): Promise<Feature>
```

#### Return Shape
```ts
type Feature = {
  type: 'Feature';
  properties: Record<string, any>; // commonly includes { stackOrder: number }
  geometry: {
    type: 'Polygon';
    coordinates: number[][][];
  };
};
```

#### Example Response (truncated)
```json
{
  "type": "Feature",
  "properties": { "stackOrder": 0 },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [ -97.72140973886472, 30.239720922282658 ],
        [ -97.72192036366431, 30.239884518854325 ],
        [ -97.7219..., 30.2398... ]
      ]
    ]
  }
}
```

#### Notes
- If the user cancels drawing, result may be `null`/empty.
- Use the returned polygon for filtering, analysis, or temporary layer visualization.