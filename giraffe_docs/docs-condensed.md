# gi-nx SDK Documentation

## Documentation 
The Giraffe Javascript SDK allows developers to write custom web apps that extend the functionality of Giraffe. Apps can read and write data from the Giraffe map such as geometries, layers and UI state (eg a user’s current selection).

An app is rendered in an Iframe on the right of the screen. It can interact with other areas of Giraffe through the SDK functions.

**Key SDK Imports:**
```typescript
import { giraffeState, rpc } from '@gi-nx/iframe-sdk';
import { useGiraffeState } from '@gi-nx/iframe-sdk-react'; // For React apps
Use code with caution.
Markdown
Background on Apps
Apps can make designing and developing cities more fun, fast and collaborative. Giraffe comes with a number of apps built in, but we've only scratched the surface of what's possible.
To empower technical users and reduce the cost of deploying business grade custom software, we've released a new javascript SDK. This allows (web) developers to connect their own web app to the Giraffe platform. They can leverage Giraffe authentication, hosting, geometries, layers and more to get from prototype to production faster.
The Giraffe JS SDK is modelled around GeoJSON, because we believe simple formats like this drive automation and interesting analysis.
There are two ways to call the same set of SDK functions - the Iframe Post-message SDK and the Console JS SDK. Both of these will rapidly expand Giraffe’s analytics capacity.
Iframe Post-message SDK: For custom apps deployed and owned by you but with UI appearing in Giraffe. Combine Giraffe’s features with your own APIs, data or workflows. Examples include UIs for external services (Mapbox Isochrones, ShapeDiver), custom data editors, or interactive map tools.
Console JS SDK Examples: For one-off custom workflows/automations (e.g., import a CSV of points, join to cadastre boundaries, save as projects), advanced GIS consulting without leaving the browser, and prototyping algorithms for apps.
(Note: Giraffe has had previous iterations of APIs, including a pub/sub API for Grasshopper interaction and an earlier JavaScript SDK. The current SDK aims for simpler integration.)

Table of Contents
gi-nx (modules)
commands (modules)
createRectangleVista (functions)
getLassoedLensedFeatures (functions)
getLassoedProjectFeatures (functions)
getLassoShape (functions)
getLensedFeatureMap (functions)
getSelectableProjectFeatures (functions)
getUserDrawnPolygon (functions)
data (modules)
AdvancedFeatureFilter (classes)
GiraffeState (classes)
CategoricalPalette (interfaces)
FixedColor (interfaces)
GiraffeProjectApp (interfaces)
GiraffeStateAttr (interfaces)
LensableDataStyle (interfaces)
LensableDisplayStyle (interfaces)
NumericalPalette (interfaces)
ProjectLayer (interfaces)
TreeData (interfaces)
TreeGroupItem (interfaces)
TreeItemWithData (interfaces)
View (interfaces)
ColorPaletteOrFixed (types)
FeatureId (types)
GeoCoordinate (types)
GiraffeLensableStyle (types)
GiraffeStateEvent (types)
GiraffeStateEventKey (types)
GiSourceData (types)
LayerTree (types)
LensUiState (types)
MapboxStyleLayer (types)
MapContent (types)
MapView (types)
Project (types)
ProjectBoundary (types)
RawSection (types)
StackedSection (types)
TreeItem (types)
layers (modules)
GiSourceData (layers) (modules) (Note: GiSourceData also listed under data types)
MapboxStyleLayer (layers) (modules) (Note: MapboxStyleLayer also listed under data types)
LayerConfigOptions (interfaces)
LayerBundle (types)
LayerPatch (types)
activateDrawingLayer (functions)
activateLensLayer (functions)
addProjectLayer (functions)
addTempLayer (functions)
addTempLayerGeoJSON (functions)
createGeoJSONLayer (functions)
createLayer (functions)
deactivateLensLayer (functions)
deleteProjectLayer (functions)
getLayerContents (functions)
getLayerPermission (functions)
removeTempLayer (functions)
setTiles (functions)
toggleLensLayer (functions)
updateGeoJSONLayerContents (functions)
updateLayer (functions)
updateLayerStyle (functions)
updateTempLayerGeoJSON (functions)
layerTree (modules)
activateViewLayers (functions)
changeLayerOpacity (functions)
createLayerGroup (functions)
moveLayerTreeItemIntoGroup (functions)
removeLayerGroup (functions)
reorderLayerTreeItem (functions)
map (modules)
addHtmlPopup (functions)
addIframePopup (functions)
clearSDKPopup (functions)
fitBounds (functions)
flyTo (functions)
getFeatureState (functions)
getMapBounds (functions)
getQueriedFeature (functions)
getSelectedFeatures (functions)
queryRenderedFeatures (functions)
removeFeatureState (functions)
setDrawTool (functions)
setFeatureState (functions)
setHighlightedFeatures (functions)
setSelectedFeatures (functions)
misc (modules)
addMapboxEventListener (functions)
disableBottomBarIframe (functions)
disableMapContentEvents (functions)
disableMapHover (functions)
disableSecondaryAppOverlay (functions)
enableBottomBarIframe (functions)
enableMapContentEvents (functions)
enableMapHover (functions)
enableSecondaryAppOverlay (functions)
featureArea (functions)
fetchProjectDetails (functions)
fetchProjectFiles (functions)
fetchVistas (functions)
fromProjected (functions)
getAnalyticsResult (functions)
getGeoTiff (functions)
getGltf (functions)
getPng (functions)
getSceneTransform (functions)
getSourceLayerDetails (functions)
getTeamList (functions)
getTempUrl (functions)
getTerrainMeshes (functions)
getThreeScene (functions)
getTiles (functions)
getUrlParams (functions)
getUserClaimsJwt (functions)
getVectorLayerContents (functions)
readyToClose (functions)
removeMapboxEventListener (functions)
setContextMenuItems (functions)
setTopView (functions)
toProjected (functions)
updateUiLayout (functions)
project (modules)
createRawSection (functions)
createRawSections (functions)
deleteRawSection (functions)
getProjectApp (functions)
getProjectAttachmentPrompt (functions)
updateProjectApp (functions)
updateRawSection (functions)
updateRawSections (functions)
projects (modules)
createProject (functions)
getProjectBundle (functions)
getProjects (functions)
patchProperties (functions)
shareWithTeam (functions)
syncToProjects (functions)
updateProject (functions)
New Section: Iframe SDK Code Snippets
New Section: Console JS Examples
New Section: Backend Custom Apps (PubSub Integration)
New Section: Giraffe REST API Endpoints
(Original TOC items 141-270 are duplicates or already covered above and have been condensed for brevity in this updated ToC. The full list of functions, classes, etc., follows below as in the original document.)
Modules
gi-nx
commands
Module commands
Defined in libs/gi-js/src/lib/exports/commands.ts:1
data
Module data
Defined in libs/gi-js/src/lib/exports/data.ts:1
...(Rest of the original Modules from layers to projects are listed here as in the original gi-nx-condensed.md file)...
Functions
(This section now includes functions from the original condensed doc, plus new ones identified from examples, placed in their likely modules)
Module: commands
createRectangleVista: Returns Promise<View>. Defined in libs/gi-js/src/lib/exports/commands.ts:42.
getLassoedLensedFeatures: Returns Promise<Lensable[]>. Defined in libs/gi-js/src/lib/exports/commands.ts:36.
getLassoedProjectFeatures: Returns Promise<RawSection[] | Lensable[]>. Defined in libs/gi-js/src/lib/exports/commands.ts:29.
getLassoShape: Returns Promise<RawSection>. Defined in libs/gi-js/src/lib/exports/commands.ts:22. Example: rpc.invoke("getLassoShape", []).then(shape => setSearchBoundary(shape)).
getLensedFeatureMap: Returns Map<string, Project> | Map<string, Lensable>. Defined in libs/lens/src/lens-utils.ts:33.
getSelectableProjectFeatures: Returns RawSection[]. Defined in libs/reticulated/src/marqueeUtils.ts:48.
getUserDrawnPolygon: Returns Promise<RawPolygon>. Defined in libs/sketch/src/lib/DrawCommands/getUserDrawnPolygon.tsx:47.
Module: layers
activateDrawingLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
activateLensLayer: Activates a lens view for the specified layer. Example: rpc.invoke("activateLensLayer", [TEMP_LAYER_NAME]).
addProjectLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
addTempLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
addTempLayerGeoJSON: Adds or updates a temporary GeoJSON layer. May accept additional config objects (e.g., for lens styling). Example: rpc.invoke("addTempLayerGeoJSON", [layerName, featureCollection, {}, {}]).
createGeoJSONLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
createLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
deactivateLensLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
deleteProjectLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
getLayerContents: Gets the contents of a layer as GeoJSON. Example: rpc.invoke('getLayerContents', ['Layer Name']).
getLayerPermission: Defined in libs/gi-js/src/lib/exports/layers.ts.
removeTempLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
setTiles: Defined in libs/gi-js/src/lib/exports/layers.ts.
toggleLensLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
updateGeoJSONLayerContents: Updates the contents of a GeoJSON layer, potentially making it persistent. Example: rpc.invoke("updateGeoJSONLayerContents", [layerName, featureCollection]).
updateLayer: Defined in libs/gi-js/src/lib/exports/layers.ts.
updateLayerStyle: Modifies the style of a layer. Example: rpc.invoke("updateLayerStyle", [TEMP_LAYER_NAME, { showLabels: true, displayKeys: ["name", "amenity"] }]).
updateTempLayerGeoJSON: Updates a temporary GeoJSON layer. Functionally similar to addTempLayerGeoJSON when the layer already exists. Example: rpc.invoke("updateTempLayerGeoJSON", [layerName, featureCollection]).
Module: layerTree
...(Functions from original doc: activateViewLayers, changeLayerOpacity, etc.)...
Module: map
addHtmlPopup: Displays an HTML popup on the map. Example: rpc.invoke("addHtmlPopup", [htmlString, coordinates, options]).
addIframePopup: Displays an iframe popup on the map. Example: rpc.invoke("addIframePopup", [url, coordinates, options, width, height, closeOnClick]).
clearSDKPopup: Defined in libs/gi-js/src/lib/exports/map.ts.
fitBounds: Defined in libs/gi-js/src/lib/exports/map.ts.
flyTo: Defined in libs/gi-js/src/lib/exports/map.ts.
getFeatureState: Defined in libs/gi-js/src/lib/exports/map.ts.
getMapBounds: Defined in libs/gi-js/src/lib/exports/map.ts.
getQueriedFeature: Defined in libs/gi-js/src/lib/exports/map.ts.
getSelectedFeatures: Gets currently selected features on the map. Example: rpc.invoke('getSelectedFeatures', []).
queryRenderedFeatures: Queries features at a specific point on the map. Example: rpc.invoke("queryRenderedFeatures", [coordinates, { layers: [layerId] }]).
removeFeatureState: Defined in libs/gi-js/src/lib/exports/map.ts.
setDrawTool: Programmatically changes the active drawing/interaction tool on the map. Example: rpc.invoke("setDrawTool", [{ tool: "MapSelector" }]).
setFeatureState: Defined in libs/gi-js/src/lib/exports/map.ts.
setHighlightedFeatures: Defined in libs/gi-js/src/lib/exports/map.ts.
setSelectedFeatures: Defined in libs/gi-js/src/lib/exports/map.ts.
Module: misc
addMapboxEventListener: Defined in libs/gi-js/src/lib/exports/misc.ts.
disableBottomBarIframe: Defined in libs/gi-js/src/lib/exports/misc.ts.
enableBottomBarIframe: Opens an iframe in the bottom bar of the Giraffe interface. Example: rpc.invoke("enableBottomBarIframe", [url, heightInPixels]).
fromProjected: Converts GeoJSON features from a local projection (meters) back to geographic coordinates (LngLat). Requires project origin. Example: rpc.invoke('fromProjected', [transformedGeoJson, projectOrigin]).
getGltf: Retrieves the project's scene as GLTF. Example: rpc.invoke("getGltf").
getSceneTransform: Retrieves transformation parameters for the scene. Example: rpc.invoke("getSceneTransform").
getThreeScene: Retrieves the project's scene for use with Three.js. Example: rpc.invoke("getThreeScene").
toProjected: Converts GeoJSON features to a local projection (meters) using the project origin. Example: rpc.invoke('toProjected', [rawSectionsGeoJson, projectOrigin]).
...(Rest of misc functions from original doc)...
Module: project
createRawSection: Creates a new "RawSection" (feature) on the map. Can include custom properties and marker definitions for points. Example: rpc.invoke("createRawSection", [featureObject]).
updateProjectApp: Updates the app-specific unstructured data store. Example: rpc.invoke('updateProjectApp', [appId, projectAppData]).
updateRawSection: Updates an existing "RawSection" on the map. Example: rpc.invoke('updateRawSection', [featureObject]).
...(Rest of project functions from original doc)...
Module: projects
...(Functions from original doc: createProject, getProjects, etc.)...
Classes
AdvancedFeatureFilter
Class AdvancedFeatureFilter
####### Index
Constructors
Properties
AdvancedFeatureFilter
Defined in libs/gi-types/src/filters/advanced-filters.ts:9
new AdvancedFeatureFilter(): AdvancedFeatureFilter
Returns AdvancedFeatureFilter

GiraffeState
Class GiraffeState
####### Index
Constructors
Properties
Methods
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:159
new GiraffeState(): GiraffeState
Returns GiraffeStateDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:160

addListener(keys, listener): string
Parameterskeys: GiraffeStateEventKey[]listener: ((key: GiraffeStateEventKey, event: MessageEvent<any>) => void)(key, event): voidParameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns voidReturns stringDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:196
keys: GiraffeStateEventKey[]
listener: ((key: GiraffeStateEventKey, event: MessageEvent<any>) => void)(key, event): voidParameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
(key, event): voidParameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
Parameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
key: GiraffeStateEventKey
event: MessageEvent<any>
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:196
keys: GiraffeStateEventKey[]
listener: ((key: GiraffeStateEventKey, event: MessageEvent<any>) => void)(key, event): voidParameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
(key, event): voidParameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
Parameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
key: GiraffeStateEventKey
event: MessageEvent<any>
(key, event): voidParameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
Parameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
key: GiraffeStateEventKey
event: MessageEvent<any>
Parameterskey: GiraffeStateEventKeyevent: MessageEvent<any>Returns void
key: GiraffeStateEventKey
event: MessageEvent<any>
key: GiraffeStateEventKey
event: MessageEvent<any>
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:196
get(key): FeatureCollection<Geometry, {     [name: string]: any; }>
Parameterskey: "selected"Returns FeatureCollection<Geometry, {     [name: string]: any; }>Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:165
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:165
Parameterskey: "mapView"Returns MapViewDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:166
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:166
get(key): MapContent
Parameterskey: "mapContent"Returns MapContentDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:167
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:167
get(key): FeatureCollection<{     coordinates: GeoCoordinate[][] | Position[][];     type: "Polygon"; }, {     acronymFloorSpaceRatio?: string;     acronymGross?: string;     acronymNet?: string;     acronymSaleable?: string;     color?: string;     created_at?: string;     crs?: string;     currencySymbol?: string;     defaultBoundary?: boolean;     description?: string;     grid?: Grid;     id: string;     name: string;     org_id?: number;     org_name?: string;     siteArea?: number;     units?: ProjectUnits; } & Record<string, any>>
Parameterskey: "projects"Returns FeatureCollection<{     coordinates: GeoCoordinate[][] | Position[][];     type: "Polygon"; }, {     acronymFloorSpaceRatio?: string;     acronymGross?: string;     acronymNet?: string;     acronymSaleable?: string;     color?: string;     created_at?: string;     crs?: string;     currencySymbol?: string;     defaultBoundary?: boolean;     description?: string;     grid?: Grid;     id: string;     name: string;     org_id?: number;     org_name?: string;     siteArea?: number;     units?: ProjectUnits; } & Record<string, any>>Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:168
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:168
get(key): FeatureCollection<PointGeometry | LineStringGeometry | PolygonGeometry, PreStackedLineStringProps | StackedPointProps | StackedPolygonProps>
Parameterskey: "bakedSections"Returns FeatureCollection<PointGeometry | LineStringGeometry | PolygonGeometry, PreStackedLineStringProps | StackedPointProps | StackedPolygonProps>Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:169
key: "bakedSections"
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:169
get(key): ProjectLayer[]
Parameterskey: "projectLayers"Returns ProjectLayer[]Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:170
key: "projectLayers"
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:170
get(key): FeatureCollection<    | PointGeometry    | LineStringGeometry    | MultiPointGeometry    | PolygonGeometry    | MultiLineStringGeometry    | MultiPolygonGeometry, RawFeatureProps>
Parameterskey: "rawSections"Returns FeatureCollection<    | PointGeometry    | LineStringGeometry    | MultiPointGeometry    | PolygonGeometry    | MultiLineStringGeometry    | MultiPolygonGeometry, RawFeatureProps>Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:171
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:171
Parameterskey: "project"Returns ProjectDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:172
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:172
get(key): GeoCoordinate
Parameterskey: "projectOrigin"Returns GeoCoordinateDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:173
key: "projectOrigin"
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:173
get(key): {     1?: GiraffeProjectApp; } & Record<string, OtherProjectApp<Record<string, any>, Record<string, any>>>
Parameterskey: "projectAppsByAppID"Returns {     1?: GiraffeProjectApp; } & Record<string, OtherProjectApp<Record<string, any>, Record<string, any>>>Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:174
key: "projectAppsByAppID"
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:174
get(key): Record<string, GiraffeNodeGraph>
Parameterskey: "flows"Returns Record<string, GiraffeNodeGraph>Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:175
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:175
get(key): LayerTree
Parameterskey: "layerTree"Returns LayerTreeDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:176
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:176
get(key): GiraffeProjectApp | OtherProjectApp<Record<string, any>, Record<string, any>>
Parameterskey: "selectedProjectApp"Returns GiraffeProjectApp | OtherProjectApp<Record<string, any>, Record<string, any>>Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:177
key: "selectedProjectApp"
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:177
Parameterskey: "views"Returns View[]Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:178

key: "bakedSections"
key: "projectLayers"

key: "projectOrigin"
key: "projectAppsByAppID"

key: "selectedProjectApp"

Returns voidDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:213

removeAllListeners(): void
Returns voidDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:209

removeListener(listenerKey): void
ParameterslistenerKey: anyReturns voidDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:205
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:205
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:205
set(key, value, event): void
Parameterskey: anyvalue: anyevent: anyReturns voidDefined in libs/iframe-sdk/src/lib/iframe-sdk.ts:188
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:188
Defined in libs/iframe-sdk/src/lib/iframe-sdk.ts:188
(noting that giraffeState.get('mapView').center and giraffeState.get('mapSelectCoord') are ways to access state, and giraffeState.addListener(['mapSelectCoord'], callback) is a way to listen to specific map events)...
Interfaces
CategoricalPalette
Interface CategoricalPalette
####### Index
Properties

FixedColor
Interface FixedColor
####### Index
Properties
Defined in libs/gi-types/src/kanbans.ts:110
GiraffeProjectApp
Interface GiraffeProjectApp
####### Index
Properties
Inherited from OtherProjectApp.app
Inherited from OtherProjectApp.appName
Inherited from OtherProjectApp.city
Overrides OtherProjectApp.featureCategories
Inherited from OtherProjectApp.id
Inherited from OtherProjectApp.mapStyle
Inherited from OtherProjectApp.opacity
Inherited from OtherProjectApp.private
Inherited from OtherProjectApp.project
Overrides OtherProjectApp.public
Inherited from OtherProjectApp.readMe
OtherProjectAppGiraffeProjectApp

GiraffeStateAttr
Interface GiraffeStateAttr
####### Index
Properties


LensableDataStyle
Interface LensableDataStyle
####### Index
Properties
opt-in to show specific columns.

LensableDisplayStyle
Interface LensableDisplayStyle
####### Index
Properties
Keys to use for labels on map
paint properties documented at https://docs.mapbox.com/style-spec/reference/layers/#circle
paint properties documented at https://docs.mapbox.com/style-spec/reference/layers/#fill
paint documented at https://docs.mapbox.com/style-spec/reference/layers/#fill-extrusion
paint and layout properties documented at https://docs.mapbox.com/style-spec/reference/layers/#symbol
paint and layout properties documented at https://docs.mapbox.com/style-spec/reference/layers/#symbol
paint and layout properties documented at https://docs.mapbox.com/style-spec/reference/layers/#line
paint properties documented at https://docs.mapbox.com/style-spec/reference/layers/#model
LensableDisplayStyle

NumericalPalette
Interface NumericalPalette
####### Index
Properties
TODO deprecate - could keep paletteId as record

ProjectLayer
Interface ProjectLayer
####### Index
Properties

(Additional interfaces like TreeData, View, LayerConfigOptions are listed in the Table of Contents; refer to their respective links for details if available.)
Types
...(All types as in original doc: ColorPaletteOrFixed, FeatureId, etc. - Note: The provided gi-nx-condensed.md does not contain detailed descriptions for Types. Refer to the Table of Contents for links to specific type definitions if available.)...
Iframe SDK Code Snippets
First import the SDK libraries:
import { giraffeState, rpc } from '@gi-nx/iframe-sdk';
import { useGiraffeState } from '@gi-nx/iframe-sdk-react'; // For React apps
Use code with caution.
TypeScript
Subscribe to changes & Get State:
// In a React component using the hook
const rawSections = useGiraffeState('rawSections');
const selectedAppData = useGiraffeState("selectedProjectApp")?.public;

// In vanilla JS or outside React components
giraffeState.addListener(['rawSections', 'selectedProjectApp'], () => {
     console.log('Raw Sections:', giraffeState.get('rawSections'));
     console.log('Selected App Data:', giraffeState.get('selectedProjectApp')?.public);
});

// Get map center (part of 'mapView' state)
const currentMapCenter = giraffeState.get('mapView')?.center;
Use code with caution.
TypeScript
Working with Layers:
// Add/Update a temporary layer (disappears on refresh)
rpc.invoke('updateTempLayerGeoJSON', [
    'My Temporary Layer',
    { type: 'FeatureCollection', features: [/* ... GeoJSON features ... */] },
    {}, // Optional: Mapbox style overrides
    {}  // Optional: Lens configuration
]);

// Save/Update a permanent GeoJSON layer
rpc.invoke('updateGeoJSONLayerContents', [
    'My Permanent Layer Name',
    { type: 'FeatureCollection', features: [/* ... GeoJSON features ... */] }
]);

// Get the contents of any layer as GeoJSON
const layerContents = await rpc.invoke('getLayerContents', ['Some Layer Name']);

// Dynamically style a layer
rpc.invoke("updateLayerStyle", [
    'My Layer Name',
    { showLabels: true, displayKeys: ["name", "propertyToDisplay"] }
]);

// Activate lens mode for a layer
rpc.invoke("activateLensLayer", ['My Layer Name']);
Use code with caution.
TypeScript
Creating and Modifying Features (RawSections):
// Create a new point feature with custom properties and marker style
rpc.invoke("createRawSection", [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: giraffeState.get("mapView").center, // Example: create at map center
    },
    properties: {
      customProperty: true,
      usage: "Pin", // Often used for point type
      marker: {      // Detailed marker styling
        kind: "text",
        value: {
          scale: 0.25,
          shape: "square",
          backgroundColor: "#E5F2FD",
          borderColor: "#041178",
          shapeSize: 40,
          borderWidth: 3,
          text: "My Custom Pin",
          textSize: 30,
          onTop: true,
          renderMode: "screen",
          stick: false,
          stickHeight: 0,
          anchor: "bottom",
        },
      },
    },
  },
]);

// Update an existing feature
// (Assuming 'featureToUpdate' is a GeoJSON feature with an existing ID)
rpc.invoke('updateRawSection', [featureToUpdate]);
Use code with caution.
TypeScript
Interacting with the Map & User Selections:
// Get currently selected features by the user
const selectedFeatures = await rpc.invoke('getSelectedFeatures', []);

// Listen for map clicks and get coordinates
giraffeState.addListener(["mapSelectCoord"], () => {
  const clickCoords = giraffeState.get("mapSelectCoord");
  console.log('Map clicked at:', clickCoords);
  // Example: Query features at click location
  rpc.invoke("queryRenderedFeatures", [clickCoords])
    .then(features => console.log('Features at click:', features));
});

// Display an iframe popup
rpc.invoke("addIframePopup", [
  'https://example.com/info-page',
  clickCoords, // Coordinates for the popup
  { closeButton: true, maxWidth: "300px" },
  400, // width
  250, // height
  true // close on map click
]);

// Change the active map tool (e.g., to selection tool)
rpc.invoke("setDrawTool", [{ tool: "MapSelector" }]);

// Draw a shape and get it
const lassoShape = await rpc.invoke("getLassoShape", []);
Use code with caution.
TypeScript
Working with Projections (for external geometry processing):
const projectOrigin = giraffeState.get('projectOrigin');
const selectedGeometries = await rpc.invoke('getSelectedFeatures', []);

// Convert to local meters projection
const projectedGeometries = await rpc.invoke('toProjected', [selectedGeometries, projectOrigin]);

// ... send 'projectedGeometries' to an external service (e.g., ShapeDiver) ...
// const transformedProjected = await externalService(projectedGeometries);

// Convert back to LngLat
// const transformedLngLat = await rpc.invoke('fromProjected', [transformedProjected, projectOrigin]);

// Update Giraffe with the result
// transformedLngLat.features.forEach(f => rpc.invoke('updateRawSection', [f]));
Use code with caution.
TypeScript
Saving and Loading App-Specific Unstructured Data:
// Save data
const setDataToStore = (changes: any) => {
  const activePa = giraffeState.get('selectedProjectApp');
  if (activePa) {
    rpc.invoke('updateProjectApp', [
      activePa.app, // App ID
      {
        ...activePa,
        public: { // Store in the 'public' object
          ...(activePa.public || {}),
          ...changes
        }
      }
    ]);
  }
};

// Load data (typically in a React component)
// const storedData = useGiraffeState("selectedProjectApp")?.public;
Use code with caution.
TypeScript
Integrating UI Elements:
// Enable an iframe in the bottom bar of Giraffe
rpc.invoke("enableBottomBarIframe", ['https://my-tool-ui.example.com/', 300]); // URL and height
Use code with caution.
TypeScript
Console JS Examples
Creating Giraffe Projects from a CSV
/*
before we start:
1. get projects in a .csv
  - clean (no padding)
  - with a column "address" (or "lat" and "lon" if available) to geocode
  - with a column "name" which will be project name
2. upload as a vector layer <YOUR PROJECTS>.csv
3. add a parcel layer eg "Regrid"
4. step through below
*/

const buffer = (await import('https://esm.run/@turf/buffer')).default;
const centroid = (await import('https://esm.run/@turf/centroid')).default;
const gi = await loadGiJs(); // Assumes loadGiJs() is a global function provided by Giraffe console environment

const sitePoints = await gi.getLayerContents('<YOUR PROJECTS>.csv');

sitePoints.features.forEach(async f => {

  // adjust properties here eg set f.properties.name or f.properties.source = "Import <TODAY>"

  // fix geocoding if necessary
  const [sw, ne] = gi.map.getBounds().toArray();
  // Assuming gi.gis.googleGeocode and other gi.gis methods are available in console context
  const goog = await gi.gis.googleGeocode(f.properties.address, { bounds: `${sw[1]},${sw[0]}|${ne[1]},${ne[0]}` });
  if (goog?.features?.[0]){
    console.log("moved");
    f.geometry = goog.features[0].geometry;
  }
})

// add a temp layer to check in
gi.addTempLayerGeoJSON("sitePoints", sitePoints);

// join to regrid - backup just a 10m circle around the centroid
const left = sitePoints;
const right = await gi.getLayerContents('Regrid', false, left);
gi.gis.flatJoin(left, right, gi.gis.pointInsideJoin("ogc_fid"));

const byId = right.features.reduce((acc, f) => {
  acc[f.properties.ogc_fid] = f;
  return acc;
}, {});
left.features.forEach(f => {
  // need to be polygons
  if (byId[f.properties.ogc_fid]?.geometry && byId[f.properties.ogc_fid]?.geometry.type === 'Polygon') {
    f.geometry = byId[f.properties.ogc_fid].geometry;
  } else if (byId[f.properties.ogc_fid]?.geometry && byId[f.properties.ogc_fid]?.geometry.type === 'MultiPolygon') {
    // just take first
    f.geometry = {
      type: "Polygon",
      coordinates: byId[f.properties.ogc_fid].geometry.coordinates[0]
    };
  } else {
    // backup - a 10m circle around the centroid
    f.geometry = buffer(centroid(f), 10, {units: 'meters'}).geometry;
  }
})

// to avoid duplicating - sitePolys should be 'left' here
const synced = gi.syncToProjects(left, p => p.properties.name);

gi.shareWithTeam('<TEAM NAME>', gi.getProjects());

// add a temp layer to check in
gi.addTempLayerGeoJSON("sitePolys", left);
Use code with caution.
JavaScript
Backend Custom Apps (PubSub Integration)
This section describes how to add a backend app to Giraffe that interacts via Google's PubSub service. This is distinct from the client-side Iframe SDK.
Explanation
When a user runs such an app:
Giraffe publishes a "message" to the PubSub topic for the App.
Google PubSub sends the message to the app developer's subscriber (server/worker).
The message contains:
A link to GET the app payload (project data).
A link to POST the app's result.
The App's name.
The subscriber runs the app and returns the result.
Giraffe updates the project data.
(More info: Google Cloud Pub/Sub)
Sample Script for Subscriber (Conceptual - Python Example)
A Python script can subscribe to the topic. It would require credentials.json.
Key variables to set in such a script:
SCRIPT_DIR: Directory for scripts (e.g., Grasshopper scripts).
INPUT_PATH: Path to save the incoming Giraffe model JSON.
OUTPUT_PATH: Path where the processed output JSON is saved.
RESTART_PATH: Path to a batch file for restarting the subscriber with credentials.
TOPIC_NAME: Your PubSub topic name.
(Server scripts and Grasshopper examples were mentioned as available for download from Giraffe.)
Payloads
Input:
{
    "project": "<JSON>",
    "giraffeModel": "<GEOJSON FeatureCollection>",
    "appData": {
        "<APP NAME>": {
            "public": "<JSON>",
            "private": "<JSON>",
            "input": "<JSON>",
            "featureCategories": "<JSON>"
        }
    }
}

Output:
{
    "giraffeModel": "<GEOJSON FeatureCollection>",
    "appData": {
        "mapStyle": "<Mapbox Layer JSON for Map>",
        "output": "<HTML for Report>",
        "private": "<JSON>"
    }
}

mapStyle: JSON Mapbox layer style (see Mapbox GL JS API map.addLayer).
output: Any valid HTML.
If your app requires direct access to the Giraffe API (bypassing PubSub), contact info@giraffe.build.
Giraffe REST API Endpoints
These are backend REST API endpoints that underpin the Giraffe platform. While not directly called by the client-side Iframe SDK in the same way as rpc.invoke, they provide context to the data structures and capabilities available.
Base URL: https://app.giraffe.build/api/
{
    "users": "https://app.giraffe.build/api/users/",
    "projectarchives": "https://app.giraffe.build/api/projectarchives/",
    "orgs": "https://app.giraffe.build/api/orgs/",
    "teams": "https://app.giraffe.build/api/teams/",
    "userteams": "https://app.giraffe.build/api/userteams/",
    "webhooks": "https://app.giraffe.build/api/webhooks/",
    "apitokens": "https://app.giraffe.build/api/apitokens/",
    "orgprojects": "https://app.giraffe.build/api/orgprojects/",
    "orgprojectdetails": "https://app.giraffe.build/api/orgprojectdetails/",
    "teamprojects": "https://app.giraffe.build/api/teamprojects/",
    "teamprojectdetails": "https://app.giraffe.build/api/teamprojectdetails/",
    "userprojectdetails": "https://app.giraffe.build/api/userprojectdetails/",
    "userorgs": "https://app.giraffe.build/api/userorgs/",
    "userapps": "https://app.giraffe.build/api/userapps/",
    "orgapps": "https://app.giraffe.build/api/orgapps/",
    "apps": "https://app.giraffe.build/api/apps/",
    "projectlayers": "https://app.giraffe.build/api/projectlayers/",
    "userlayers": "https://app.giraffe.build/api/userlayers/",
    "teamlayers": "https://app.giraffe.build/api/teamlayers/",
    "orglayers": "https://app.giraffe.build/api/orglayers/",
    "vistas": "https://app.giraffe.build/api/vistas/",
    "projectattachments": "https://app.giraffe.build/api/projectattachments/",
    "layerTrees": "https://app.giraffe.build/api/layerTrees/",
    "files": "https://app.giraffe.build/api/files/",
    "userfiles": "https://app.giraffe.build/api/userfiles/",
    "teamfiles": "https://app.giraffe.build/api/teamfiles/",
    "orgfiles": "https://app.giraffe.build/api/orgfiles/",
    "kanbans": "https://app.giraffe.build/api/kanbans/",
    "userkanbans": "https://app.giraffe.build/api/userkanbans/",
    "teamkanbans": "https://app.giraffe.build/api/teamkanbans/",
    "orgkanbans": "https://app.giraffe.build/api/orgkanbans/"
}

## Once built, get the app working within Giraffe
If you’d prefer to start from scratch, 

Install @gi-nx/iframe-sdk (ie yarn add @gi-nx/iframe-sdk) so that your SDK app can interact with Giraffe 

import { giraffeState, rpc } from '@gi-nx/iframe-sdk';
If you use React hooks,  install @gi-nx/iframe-sdk-react.  useGiraffeState provides a convenient method to access the data from giraffeState within React components.

**Add the iframe app to your Giraffe project**
1. Click the Plus sign in the app tool palette to access the app selector.

2. The App selector displays all of the apps you have available.
Search for Iframe by clicking the search icon

3. Click “Add ” for the iframe app.

**Point Giraffe to your app**
1. Navigate to ☰Main menu → Advanced → Json editor 
2. Select the "Giraffe" dropdown and select "Iframe" at the top-left corner of the popup
3. Change the "ur;" field to the URL of your app. If you're simply building on your local machine, you likely just need to update the port number at the end: "url": "http://localhost:3000",
4. You can also add a URL for your app’s logo in the "logo" field. But not required. 
5. Press save in the bottom right corner