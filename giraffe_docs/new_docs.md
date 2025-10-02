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


## Additional giraffeState Keys

### **`get('selected')`**

Returns a GeoJSON FeatureCollection of currently selected features on the map.

#### Response Structure:
- `type`: "FeatureCollection"
- `features`: array of selected Feature objects
  - Each feature includes `geometry`, `properties`, and feature metadata
  - Selection may include features from multiple layers
  - Empty array if nothing is selected

#### Usage Patterns:
```js
const selectedFeatures = giraffeState.get('selected');
console.log(`${selectedFeatures.features.length} features selected`);

selectedFeatures.features.forEach(feature => {
  console.log(`Selected: ${feature.properties.id}`);
});
```

#### Notes:
- Updates when user selection changes on the map
- Prefer `rpc.invoke('getSelectedFeatures')` for one-time reads
- Use `giraffeState.addListener(['selected'], callback)` to react to selection changes

### **`get('projectOrigin')`**

Returns the project's origin coordinates used for local coordinate system calculations.

#### Response Structure:
- Array format: `[longitude, latitude]` in WGS84 decimal degrees
- Used as reference point for projected coordinate conversions

#### Usage Patterns:
```js
const projectOrigin = giraffeState.get('projectOrigin');
const [lng, lat] = projectOrigin;

// Use with coordinate conversion functions
const projected = await rpc.invoke('toProjected', [geoJSON, projectOrigin]);
const geographic = await rpc.invoke('fromProjected', [projected, projectOrigin]);
```

#### Notes:
- Essential for working with local coordinate systems (meters-based)
- Typically matches the project's grid origin from `giraffeState.get('project').properties.grid.origin`
- Required for external geometry processing workflows

### **`get('projectAppsByAppID')`**

Returns an object mapping app IDs to their project-specific data stores.

#### Response Structure:
```js
{
  "1": {  // App ID 1 is the built-in Giraffe app
    "app": 1,
    "project": "project-id",
    "public": { /* app-specific public data */ },
    "private": { /* app-specific private data */ },
    "featureCategories": { /* layer organization */ }
  },
  "customAppId": {
    "app": "customAppId",
    "project": "project-id",
    "public": { /* custom app public data */ },
    "private": { /* custom app private data */ }
  }
}
```

#### Usage Patterns:
```js
const appData = giraffeState.get('projectAppsByAppID');
const giraffeAppData = appData['1'];
const myAppData = appData['myCustomAppId'];

// Access app-specific configuration
console.log('Feature categories:', giraffeAppData.featureCategories);
```

#### Notes:
- Each app maintains its own data store per project
- `public` data is shareable across apps; `private` is app-specific
- Use `rpc.invoke('updateProjectApp', [appId, data])` to modify

### **`get('flows')`**

Returns flow data for the current project.

#### Response Structure:
```js
{
  "flowId": {
    /* GiraffeNodeGraph structure */
    // Workflow definition and state
  }
}
```

#### Usage Patterns:
```js
const flows = giraffeState.get('flows');
const flowIds = Object.keys(flows);

flowIds.forEach(id => {
  console.log(`Flow ${id}:`, flows[id]);
});
```

#### Notes:
- Represents saved flows and automation pipelines
- Structure depends on Giraffe's workflow system configuration
- May be empty if no flows are configured for the project

### **`get('selectedProjectApp')`**

Returns the currently active/selected project app.

#### Response Structure:
```js
{
  "app": 1,  // or custom app ID
  "appName": "Giraffe",
  "project": "project-id",
  "public": {
    /* app-specific public data accessible to all apps */
  },
  "private": {
    /* app-specific private data */
  },
  "featureCategories": {
    /* layer organization and categorization */
  },
  "mapStyle": {
    /* Mapbox GL style configuration */
  },
  "opacity": 1,
  "readMe": "App description or help text"
}
```

#### Usage Patterns:
```js
const activeApp = giraffeState.get('selectedProjectApp');
console.log(`Active app: ${activeApp.appName}`);

// Access app's public data store
const appPublicData = activeApp.public;

// Update app data
rpc.invoke('updateProjectApp', [activeApp.app, {
  ...activeApp,
  public: {
    ...activeApp.public,
    newField: 'newValue'
  }
}]);
```

#### Notes:
- Changes when user switches between apps in the UI
- Most common use case: reading/writing to the app's data store
- Use `giraffeState.addListener(['selectedProjectApp'], callback)` to detect app changes

## Commands Module Functions

### **`getLassoShape()`**

Gets the polygon shape drawn by the user using the lasso tool.

#### Signature:
```js
await rpc.invoke('getLassoShape', [])
```

#### Returns:
- GeoJSON Feature with Polygon geometry representing the lasso selection area
- Properties include metadata about the drawn shape

#### Usage Patterns:
```js
const lassoShape = await rpc.invoke('getLassoShape', []);
console.log('Lasso area:', lassoShape.geometry);

// Use the shape as a search boundary
const featuresInLasso = await queryFeaturesInPolygon(lassoShape);
```

#### Notes:
- Requires user to have drawn a lasso selection first
- Returns the most recent lasso shape
- Useful for custom spatial queries and filtering

### **`getUserDrawnPolygon()`**

Prompts the user to draw a polygon and returns the result.

#### Signature:
```js
await rpc.invoke('getUserDrawnPolygon', [])
```

#### Returns:
- Promise that resolves to a GeoJSON Feature with Polygon geometry
- User-drawn polygon with coordinates

#### Usage Patterns:
```js
const polygon = await rpc.invoke('getUserDrawnPolygon', []);
console.log('User drew polygon:', polygon.geometry);

// Use for spatial analysis
const area = await rpc.invoke('featureArea', [polygon]);
```

#### Notes:
- Interactive: waits for user to complete drawing
- Returns only after user finishes the polygon
- Useful for custom drawing workflows

### **`getLassoedProjectFeatures()`**

Gets project features (raw sections) within the current lasso selection.

#### Signature:
```js
await rpc.invoke('getLassoedProjectFeatures', [])
```

#### Returns:
- Array of RawSection features or Lensable features within the lasso
- Each feature includes geometry and properties

#### Usage Patterns:
```js
const featuresInLasso = await rpc.invoke('getLassoedProjectFeatures', []);
console.log(`${featuresInLasso.length} features in lasso`);

featuresInLasso.forEach(feature => {
  console.log('Feature:', feature.properties.id);
});
```

#### Notes:
- Requires an active lasso selection
- Returns user-drawn sections/features, not external layer data
- Useful for bulk operations on selected features

### **`getLassoedLensedFeatures()`**

Gets features within the lasso selection with lens (data layer) applied.

#### Signature:
```js
await rpc.invoke('getLassoedLensedFeatures', [])
```

#### Returns:
- Array of Lensable features (from active data layers) within the lasso
- Includes full feature properties and geometry

#### Usage Patterns:
```js
const lensedFeatures = await rpc.invoke('getLassoedLensedFeatures', []);
console.log(`${lensedFeatures.length} data layer features in lasso`);

// Access data layer attributes
lensedFeatures.forEach(feature => {
  console.log('Zoning:', feature.properties.zoning_code);
});
```

#### Notes:
- Requires active lens layer and lasso selection
- Returns features from external data layers, not user-drawn features
- Useful for analyzing external data within a selected area

### **`getSelectableProjectFeatures()`**

Gets all project features that can be selected in the current view.

#### Signature:
```js
const selectableFeatures = getSelectableProjectFeatures()
```

#### Returns:
- Array of RawSection features that are currently selectable
- Includes visible user-drawn features

#### Usage Patterns:
```js
const selectable = getSelectableProjectFeatures();
console.log(`${selectable.length} selectable features`);

// Filter by criteria
const buildings = selectable.filter(f => f.properties.type === 'buildingSection');
```

#### Notes:
- Returns only features visible in current map view
- Respects layer visibility and filters
- Does not require RPC call (synchronous function)

### **`getLensedFeatureMap()`**

Gets a map of features with lens (data visualization) applied.

#### Signature:
```js
const featureMap = getLensedFeatureMap()
```

#### Returns:
- Map object where keys are feature IDs
- Values are either Project features or Lensable features depending on active lens

#### Usage Patterns:
```js
const featureMap = getLensedFeatureMap();

// Access feature by ID
const feature = featureMap.get('feature-id');
console.log('Feature properties:', feature.properties);

// Iterate all features
featureMap.forEach((feature, id) => {
  console.log(`${id}:`, feature.properties);
});
```

#### Notes:
- Efficient lookup structure for feature access by ID
- Includes active lens styling and data transformations
- Synchronous function, no RPC call needed

### **`createRectangleVista()`**

Creates a new rectangle-based vista (saved view).

#### Signature:
```js
await rpc.invoke('createRectangleVista', [])
```

#### Returns:
- Promise resolving to a View object with saved map state

#### Notes:
- ⚠️ This function may create persistent data (mutation)
- Should be reviewed before automated testing
- Creates a new saved view in the project

## Map Module Functions

### **`getFeatureState(featureId)`**

Gets the current state object for a specific feature.

#### Signature:
```js
await rpc.invoke('getFeatureState', [featureId])
```

#### Parameters:
- `featureId`: string or number identifying the feature

#### Returns:
- State object with current feature state properties
- May include: `hover`, `selected`, custom state values

#### Usage Patterns:
```js
const state = await rpc.invoke('getFeatureState', ['feature-123']);
console.log('Is hovered:', state.hover);
console.log('Is selected:', state.selected);
```

#### Notes:
- Feature state is used for interactive styling (hover effects, selection highlights)
- State is ephemeral and not persisted with features
- See `setFeatureState()` to modify (mutation function)

### **`getMapBounds()`**

Gets the current visible bounds of the map viewport.

#### Signature:
```js
await rpc.invoke('getMapBounds', [])
```

#### Returns:
- Bounds object or array: `[[west, south], [east, north]]` or `{west, south, east, north}`
- Coordinates in WGS84 decimal degrees

#### Usage Patterns:
```js
const bounds = await rpc.invoke('getMapBounds', []);

// Array format
if (Array.isArray(bounds)) {
  const [[west, south], [east, north]] = bounds;
  console.log(`Visible area: ${west},${south} to ${east},${north}`);
}

// Object format
if (bounds.west !== undefined) {
  console.log(`Bounds: ${bounds.west} to ${bounds.east}`);
}
```

#### Notes:
- Similar to `giraffeState.get('mapView').bounds` but via RPC
- Prefer `giraffeState.get('mapView')` for synchronous access
- Useful when you need a point-in-time snapshot

### **`getQueriedFeature()`**

Gets feature information from a previous query operation.

#### Signature:
```js
await rpc.invoke('getQueriedFeature', [])
```

#### Returns:
- Feature object from the most recent feature query
- Includes geometry and properties

#### Notes:
- Returns cached query result
- May return null if no recent query
- Use `queryRenderedFeatures()` for new queries

### **`queryRenderedFeatures(point, options)`**

Queries features at a specific point on the map.

#### Signature:
```js
await rpc.invoke('queryRenderedFeatures', [point, options])
```

#### Parameters:
- `point`: coordinates array `[lng, lat]` or point object
- `options`: query options object
  - `layers`: array of layer IDs to query
  - `filter`: Mapbox filter expression

#### Returns:
- Array of Feature objects at the queried point
- Each feature includes geometry, properties, and layer information

#### Usage Patterns:
```js
const clickPoint = [-97.7196, 30.2404];
const features = await rpc.invoke('queryRenderedFeatures', [
  clickPoint,
  { layers: ['zoning-layer', 'parcels-layer'] }
]);

console.log(`Found ${features.length} features at click`);
features.forEach(f => {
  console.log(`Layer ${f.layer.id}:`, f.properties);
});
```

#### Notes:
- Queries only currently rendered/visible features
- Respects layer visibility and zoom constraints
- Useful for click handlers and spatial queries

## Miscellaneous Functions

### **`featureArea(feature)`**

Calculates the area of a GeoJSON feature.

#### Signature:
```js
const area = featureArea(feature)
```

#### Parameters:
- `feature`: GeoJSON Feature with Polygon or MultiPolygon geometry

#### Returns:
- Numeric area value in project units (square feet, square meters, etc.)

#### Usage Patterns:
```js
const polygon = giraffeState.get('rawSections').features[0];
const area = featureArea(polygon);
console.log(`Area: ${area.toFixed(2)} sq ft`);
```

#### Notes:
- Synchronous function (no RPC call)
- Respects project units from `giraffeState.get('project').properties.units`
- For LineString features, returns 0

### **`fetchProjectDetails()`**

Fetches detailed project information including metadata and configuration.

#### Signature:
```js
await rpc.invoke('fetchProjectDetails', [])
```

#### Returns:
- Detailed project object with extended metadata
- May include: permissions, sharing details, extended properties

#### Usage Patterns:
```js
const details = await rpc.invoke('fetchProjectDetails', []);
console.log('Project details:', details);
console.log('Permissions:', details.permissions);
```

#### Notes:
- More comprehensive than `giraffeState.get('project')`
- May include server-side computed values
- Network request required

### **`fetchProjectFiles()`**

Fetches list of files attached to the current project.

#### Signature:
```js
await rpc.invoke('fetchProjectFiles', [])
```

#### Returns:
- Array of file metadata objects
- Each file includes: `id`, `name`, `url`, `size`, `type`, `created_at`

#### Usage Patterns:
```js
const files = await rpc.invoke('fetchProjectFiles', []);
console.log(`Project has ${files.length} files`);

files.forEach(file => {
  console.log(`${file.name} (${file.size} bytes): ${file.url}`);
});
```

#### Notes:
- Includes documents, images, and other attachments
- URLs may be temporary/signed URLs
- Use `getTempUrl()` for accessing file contents

### **`fetchVistas()`**

Fetches all vistas (saved views) for the current project.

#### Signature:
```js
await rpc.invoke('fetchVistas', [])
```

#### Returns:
- Array of View objects with saved camera positions and layer states
- Similar to `giraffeState.get('views')` but fetched from server

#### Usage Patterns:
```js
const vistas = await rpc.invoke('fetchVistas', []);
console.log(`${vistas.length} saved views`);

vistas.forEach(view => {
  console.log(`View "${view.name}": zoom ${view.details.camera.zoom}`);
});
```

#### Notes:
- May be more up-to-date than cached state
- Useful after views are created/modified
- Prefer `giraffeState.get('views')` for cached access

### **`toProjected(geoJSON, projectOrigin)`**

Converts GeoJSON coordinates from geographic (WGS84) to local projected coordinates (meters).

#### Signature:
```js
await rpc.invoke('toProjected', [geoJSON, projectOrigin])
```

#### Parameters:
- `geoJSON`: GeoJSON FeatureCollection or Feature
- `projectOrigin`: `[lng, lat]` reference point

#### Returns:
- GeoJSON with coordinates converted to meters from origin
- Suitable for external geometry processing

#### Usage Patterns:
```js
const projectOrigin = giraffeState.get('projectOrigin');
const features = giraffeState.get('rawSections');

const projected = await rpc.invoke('toProjected', [features, projectOrigin]);

// Send to external service that expects meters
// const result = await externalGeometryAPI(projected);
```

#### Notes:
- Essential for external CAD/modeling workflows
- Maintains feature properties unchanged
- Use `fromProjected()` to convert back

### **`fromProjected(geoJSON, projectOrigin)`**

Converts GeoJSON coordinates from local projected (meters) back to geographic coordinates.

#### Signature:
```js
await rpc.invoke('fromProjected', [projectedGeoJSON, projectOrigin])
```

#### Parameters:
- `projectedGeoJSON`: GeoJSON with coordinates in meters from origin
- `projectOrigin`: `[lng, lat]` reference point

#### Returns:
- GeoJSON with coordinates converted to WGS84 decimal degrees

#### Usage Patterns:
```js
const projectOrigin = giraffeState.get('projectOrigin');

// After processing in external service
// const processedProjected = await externalAPI(projectedData);

const geographic = await rpc.invoke('fromProjected', [
  processedProjected,
  projectOrigin
]);

// Update features in Giraffe
geographic.features.forEach(f => {
  rpc.invoke('updateRawSection', [f]);
});
```

#### Notes:
- Inverse of `toProjected()`
- Required after external geometry processing
- Maintains feature properties unchanged

### **`getGeoTiff()`**

Retrieves GeoTIFF raster data for the project.

#### Signature:
```js
await rpc.invoke('getGeoTiff', [])
```

#### Returns:
- GeoTIFF data or URL to GeoTIFF file
- Format depends on project configuration

#### Notes:
- May not be available for all projects
- Used for terrain/elevation data
- Check project settings for availability

### **`getGltf()`**

Retrieves the 3D scene as GLTF format.

#### Signature:
```js
await rpc.invoke('getGltf', [])
```

#### Returns:
- GLTF/GLB 3D model data or URL
- Includes project geometry as 3D models

#### Usage Patterns:
```js
const gltf = await rpc.invoke('getGltf', []);
// Load in Three.js or other 3D library
// const loader = new GLTFLoader();
// loader.parse(gltf, '', (model) => scene.add(model.scene));
```

#### Notes:
- Exports user-drawn geometry as 3D models
- Includes building heights and extrusions
- Compatible with standard 3D viewers

### **`getPng()`**

Retrieves a PNG image export of the current project view.

#### Signature:
```js
await rpc.invoke('getPng', [])
```

#### Returns:
- PNG image data or URL
- Snapshot of current map view

#### Notes:
- Captures current camera position and visible layers
- Useful for generating thumbnails or reports
- Image resolution depends on viewport size

### **`getSceneTransform()`**

Gets transformation parameters for the 3D scene coordinate system.

#### Signature:
```js
await rpc.invoke('getSceneTransform', [])
```

#### Returns:
- Transformation matrix or parameters object
- Includes scale, rotation, translation for 3D scene

#### Usage Patterns:
```js
const transform = await rpc.invoke('getSceneTransform', []);
console.log('Scene transform:', transform);

// Apply to 3D models for correct positioning
```

#### Notes:
- Required for accurate 3D scene positioning
- Aligns local coordinates with geographic coordinates
- Used with `getThreeScene()` and `getGltf()`

### **`getTerrainMeshes()`**

Retrieves terrain mesh data for 3D visualization.

#### Signature:
```js
await rpc.invoke('getTerrainMeshes', [])
```

#### Returns:
- Array of terrain mesh objects
- Each mesh includes geometry and elevation data

#### Notes:
- Provides 3D terrain surface for projects
- May be empty if no terrain data available
- Used for accurate 3D site context

### **`getThreeScene()`**

Retrieves the project scene formatted for Three.js.

#### Signature:
```js
await rpc.invoke('getThreeScene', [])
```

#### Returns:
- Three.js compatible scene data
- Includes geometries, materials, and scene graph

#### Usage Patterns:
```js
const sceneData = await rpc.invoke('getThreeScene', []);

// Load into Three.js
// const scene = new THREE.Scene();
// // Parse and add sceneData to scene
```

#### Notes:
- Pre-formatted for Three.js library
- Includes building models and terrain
- Alternative to `getGltf()` for Three.js workflows

### **`getSourceLayerDetails()`**

Gets metadata about source layers in the project.

#### Signature:
```js
await rpc.invoke('getSourceLayerDetails', [])
```

#### Returns:
- Array of source layer metadata objects
- Includes layer names, types, and configuration

#### Notes:
- Describes available data sources
- Useful for understanding layer structure
- Complements `giraffeState.get('projectLayers')`

### **`getTiles()`**

Retrieves tile data or tile configuration for the project.

#### Signature:
```js
await rpc.invoke('getTiles', [])
```

#### Returns:
- Tile configuration object or tile URLs
- Vector tile or raster tile information

#### Notes:
- Low-level tile access
- Used for custom rendering workflows
- Most apps don't need direct tile access

### **`getVectorLayerContents()`**

Gets contents of vector layers (alternative to `getLayerContents`).

#### Signature:
```js
await rpc.invoke('getVectorLayerContents', [])
```

#### Returns:
- GeoJSON FeatureCollection with vector layer features

#### Notes:
- Similar to `getLayerContents(layerName)`
- May return all vector layers or require parameters
- Check implementation for exact behavior

### **`getTeamList()`**

Gets list of teams the current user belongs to.

#### Signature:
```js
await rpc.invoke('getTeamList', [])
```

#### Returns:
- Array of team objects
- Each team includes: `id`, `name`, `members`, `permissions`

#### Usage Patterns:
```js
const teams = await rpc.invoke('getTeamList', []);
console.log(`User is in ${teams.length} teams`);

teams.forEach(team => {
  console.log(`Team: ${team.name} (${team.members.length} members)`);
});
```

#### Notes:
- User/organization specific data
- Useful for team-based sharing workflows
- Permissions determine visibility

### **`getUserClaimsJwt()`**

Gets JWT token with user claims and authentication information.

#### Signature:
```js
await rpc.invoke('getUserClaimsJwt', [])
```

#### Returns:
- JWT token string with encoded user claims
- Claims include: user ID, email, organization, permissions

#### Usage Patterns:
```js
const jwt = await rpc.invoke('getUserClaimsJwt', []);

// Decode JWT (using jwt-decode library or similar)
// const claims = jwtDecode(jwt);
// console.log('User:', claims.email);
// console.log('Org:', claims.org_id);
```

#### Notes:
- Used for authenticated API calls to external services
- Token has expiration time
- Contains sensitive user information - handle securely

### **`getUrlParams()`**

Gets URL parameters from the current Giraffe session.

#### Signature:
```js
await rpc.invoke('getUrlParams', [])
```

#### Returns:
- Object with URL parameters as key-value pairs

#### Usage Patterns:
```js
const params = await rpc.invoke('getUrlParams', []);
console.log('URL parameters:', params);

if (params.projectId) {
  console.log('Project ID from URL:', params.projectId);
}
```

#### Notes:
- Accesses parent window URL parameters
- Useful for deep linking and state restoration
- Parameters depend on Giraffe URL structure

### **`getTempUrl()`**

Gets a temporary signed URL for accessing project resources.

#### Signature:
```js
await rpc.invoke('getTempUrl', [])
```

#### Returns:
- Temporary URL string with authentication token
- URL expires after specified time period

#### Notes:
- Used for secure file access
- Commonly used with project attachments
- URLs expire (typically 1-24 hours)

## Project Module Functions

### **`getProjectApp(appId)`**

Gets project app data for a specific app ID.

#### Signature:
```js
await rpc.invoke('getProjectApp', [appId])
```

#### Parameters:
- `appId`: numeric or string app identifier

#### Returns:
- ProjectApp object with app-specific data
- Includes `public`, `private`, and configuration data

#### Usage Patterns:
```js
const appData = await rpc.invoke('getProjectApp', [1]); // Built-in Giraffe app
console.log('App name:', appData.appName);
console.log('Public data:', appData.public);

// Get custom app data
const customApp = await rpc.invoke('getProjectApp', ['myCustomAppId']);
```

#### Notes:
- Alternative to accessing via `giraffeState.get('projectAppsByAppID')[appId]`
- May be more up-to-date than cached state
- Use `updateProjectApp()` to modify

### **`getProjectAttachmentPrompt()`**

Gets the prompt/template for project file attachments.

#### Signature:
```js
await rpc.invoke('getProjectAttachmentPrompt', [])
```

#### Returns:
- String with attachment prompt or configuration object
- Defines expected attachment types and requirements

#### Notes:
- Organization-specific configuration
- May return empty if not configured
- Used for guided file upload workflows

## Projects Module Functions

### **`getProjectBundle()`**

Gets a complete project data bundle including all related data.

#### Signature:
```js
await rpc.invoke('getProjectBundle', [])
```

#### Returns:
- Comprehensive project object including:
  - Project metadata and properties
  - All features (rawSections, bakedSections)
  - Layers and layer configuration
  - Views and vistas
  - App data
  - Attachments

#### Usage Patterns:
```js
const bundle = await rpc.invoke('getProjectBundle', []);
console.log('Complete project data:', bundle);

// Export project for backup
const projectExport = JSON.stringify(bundle);
```

#### Notes:
- Large payload - may take time to fetch
- Useful for project export/backup
- Includes all project-related data in single call

### **`getProjects()`**

Gets list of all projects accessible to the current user.

#### Signature:
```js
await rpc.invoke('getProjects', [])
```

#### Returns:
- GeoJSON FeatureCollection with project features
- Each feature represents a project with boundary geometry
- Properties include project metadata

#### Usage Patterns:
```js
const projects = await rpc.invoke('getProjects', []);
console.log(`User has access to ${projects.features.length} projects`);

projects.features.forEach(project => {
  console.log(`Project: ${project.properties.name}`);
  console.log(`  Org: ${project.properties.org_name}`);
  console.log(`  Created: ${project.properties.created_at}`);
});
```

#### Notes:
- Similar to `giraffeState.get('projects')` but fetched from server
- May be more complete/up-to-date than cached state
- Useful for project browsing/selection UIs

## Layers Module Functions

### **`getLayerPermission(layerName)`**

Gets permission information for a specific layer.

#### Signature:
```js
await rpc.invoke('getLayerPermission', [layerName])
```

#### Parameters:
- `layerName`: string name of the layer

#### Returns:
- Permission object with access level information
- May include: `canView`, `canEdit`, `canShare`, `accessLevel`

#### Usage Patterns:
```js
const permission = await rpc.invoke('getLayerPermission', ['Zoning Layer']);
console.log('Can view:', permission.canView);
console.log('Can edit:', permission.canEdit);

if (permission.canEdit) {
  // Allow editing operations
} else {
  console.log('Read-only access to layer');
}
```

#### Notes:
- Permissions depend on user role and layer sharing settings
- Useful for conditional UI (show/hide edit buttons)
- Layer names must match exactly

## ⚠️ Deferred Functions (Require Human Review)

The following functions modify data, create/delete resources, or change UI state. They have been identified but not executed to preserve project integrity. Each requires manual review and testing.

### Data Mutation Functions

- ⚠️ `createRawSection(feature)` - Creates new feature on map (mutates project data)
- ⚠️ `createRawSections(features)` - Creates multiple features (bulk mutation)
- ⚠️ `deleteRawSection(featureId)` - **DELETES feature permanently** (destructive)
- ⚠️ `updateRawSection(feature)` - Modifies existing feature properties/geometry (mutation)
- ⚠️ `updateRawSections(features)` - Bulk update of features (mutation)
- ⚠️ `createProject(projectData)` - Creates new project (persistent creation)
- ⚠️ `updateProject(projectId, projectData)` - Modifies project properties (mutation)
- ⚠️ `updateProjectApp(appId, data)` - Modifies app data store (mutation)

### Layer Management Functions

- ⚠️ `addProjectLayer()` - Adds permanent layer to project (persistent mutation)
- ⚠️ `addTempLayer()` - Adds temporary layer (ephemeral but modifies UI state)
- ⚠️ `addTempLayerGeoJSON(layerName, geoJSON, config)` - Adds temporary GeoJSON layer (UI mutation)
- ⚠️ `createGeoJSONLayer()` - Creates new permanent layer (persistent creation)
- ⚠️ `createLayer()` - Creates new layer (persistent creation)
- ⚠️ `deleteProjectLayer()` - **DELETES layer permanently** (destructive)
- ⚠️ `removeTempLayer()` - Removes temporary layer (UI mutation)
- ⚠️ `updateGeoJSONLayerContents(layerName, geoJSON)` - Updates layer contents (mutation)
- ⚠️ `updateLayer()` - Updates layer configuration (mutation)
- ⚠️ `updateLayerStyle(layerName, style)` - Changes layer styling (mutation)
- ⚠️ `updateTempLayerGeoJSON(layerName, geoJSON)` - Updates temporary layer (UI mutation)
- ⚠️ `activateDrawingLayer()` - Activates drawing mode (changes UI state)
- ⚠️ `activateLensLayer(layerName)` - Activates lens view (changes UI state)
- ⚠️ `deactivateLensLayer()` - Deactivates lens view (changes UI state)
- ⚠️ `toggleLensLayer()` - Toggles lens on/off (changes UI state)
- ⚠️ `setTiles()` - Sets tile configuration (mutation)

### Layer Tree Management Functions

- ⚠️ `changeLayerOpacity(layerId, opacity)` - Changes layer opacity (UI mutation)
- ⚠️ `createLayerGroup()` - Creates new layer group (persistent creation)
- ⚠️ `moveLayerTreeItemIntoGroup()` - Reorganizes layer tree (mutation)
- ⚠️ `removeLayerGroup()` - **REMOVES layer group** (destructive)
- ⚠️ `reorderLayerTreeItem()` - Reorders layer tree (mutation)
- ⚠️ `activateViewLayers()` - Activates layers for specific view (changes UI state)

### Map State and Interaction Functions

- ⚠️ `setSelectedFeatures(features)` - Changes user selection (UI mutation)
- ⚠️ `setHighlightedFeatures(features)` - Changes highlighted features (UI mutation)
- ⚠️ `setFeatureState(featureId, state)` - Sets feature state (ephemeral mutation)
- ⚠️ `removeFeatureState(featureId)` - Removes feature state (mutation)
- ⚠️ `setDrawTool(toolConfig)` - Changes active drawing tool (UI mutation)
- ⚠️ `flyTo(options)` - Animates camera to location (changes viewport)
- ⚠️ `fitBounds(bounds)` - Fits viewport to bounds (changes viewport)

### UI Control Functions

- ⚠️ `addHtmlPopup(html, coordinates, options)` - Displays HTML popup (UI mutation)
- ⚠️ `addIframePopup(url, coordinates, options, width, height, closeOnClick)` - Displays iframe popup (UI mutation)
- ⚠️ `clearSDKPopup()` - Clears SDK popups (UI mutation)
- ⚠️ `enableBottomBarIframe(url, height)` - Enables bottom bar iframe (UI mutation)
- ⚠️ `disableBottomBarIframe()` - Disables bottom bar iframe (UI mutation)
- ⚠️ `enableSecondaryAppOverlay()` - Enables app overlay (UI mutation)
- ⚠️ `disableSecondaryAppOverlay()` - Disables app overlay (UI mutation)
- ⚠️ `updateUiLayout()` - Changes UI layout (UI mutation)
- ⚠️ `setTopView()` - Sets top view mode (changes UI state)
- ⚠️ `setContextMenuItems()` - Modifies context menu (UI mutation)

### Map Events and Interaction

- ⚠️ `addMapboxEventListener()` - Adds event listener (modifies event handling)
- ⚠️ `removeMapboxEventListener()` - Removes event listener (modifies event handling)
- ⚠️ `enableMapContentEvents()` - Enables map content events (changes event handling)
- ⚠️ `disableMapContentEvents()` - Disables map content events (changes event handling)
- ⚠️ `enableMapHover()` - Enables map hover (changes interaction)
- ⚠️ `disableMapHover()` - Disables map hover (changes interaction)

### Project Management Functions

- ⚠️ `shareWithTeam(teamName, projects)` - **SHARES projects with team** (sharing mutation)
- ⚠️ `syncToProjects(features, nameFunction)` - **SYNCS features to projects** (bulk creation/update)
- ⚠️ `patchProperties(projectId, properties)` - Updates project metadata (mutation)

### View Creation

- ⚠️ `createRectangleVista()` - Creates new saved view (persistent creation)

### Application Lifecycle

- ⚠️ `readyToClose()` - Signals app ready to close (state change)

## Notes and Tips

- State vs RPC: use `giraffeState.get(...)` for instantaneous reads of the current app state; use `rpc.invoke(...)` for operations that query, compute, or mutate through the host.
- Bounds formats: when working with `mapView.bounds`, handle both object and array forms as above.
- Data layers: contents and availability depend on project configuration and permissions; not all layers are directly queryable.
- Coordinate systems: Use `projectOrigin` with `toProjected()`/`fromProjected()` for external geometry processing in meters.
- Safe functions: All functions documented above the ⚠️ section are read-only or network-only and safe for automated testing.
- Mutation functions: Functions in the ⚠️ section require careful manual review and should only be tested in sandbox environments.
