# Functions to Explore

## Analysis Summary
Based on the comprehensive SDK documentation in `docs-condensed.md` and our current exploration in `functionCatalog.js`, I've identified functions that we haven't yet explored. This list categorizes them by module and indicates which ones require human-in-the-loop verification due to their mutative or potentially destructive nature.

## Already Explored Functions ✅
- `giraffeState.get('project')`
- `giraffeState.get('projects')`
- `giraffeState.get('projectLayers')`
- `giraffeState.get('rawSections')`
- `giraffeState.get('bakedSections')`
- `giraffeState.get('mapView')`
- `giraffeState.get('mapContent')`
- `giraffeState.get('layerTree')`
- `giraffeState.get('views')`
- `rpc.invoke('getSelectedFeatures', [])`
- `rpc.invoke('activateDrawingLayer', [])`
- `rpc.invoke('getAnalyticsResult', [])`
- `rpc.invoke('getLayerContents', [layerName])`

## Unexplored Functions by Module

### Commands Module 📋
- `createRectangleVista()` - Creates a new rectangle vista/view
- `getLassoedLensedFeatures()` - Gets features within a lasso selection with lens applied
- `getLassoedProjectFeatures()` - Gets project features within a lasso selection
- `getLassoShape()` - Gets the lasso shape drawn by user
- `getLensedFeatureMap()` - Gets feature map with lens applied
- `getSelectableProjectFeatures()` - Gets features that can be selected in project
- `getUserDrawnPolygon()` - Gets polygon drawn by user

### Layers Module 🎨
#### Read Operations
- `getLayerPermission(layerName)` - Gets permissions for a specific layer
- `setTiles()` - Sets tile configuration

#### Mutation Operations (Need Review)
- `activateLensLayer(layerName)` - Activates lens mode for a layer
- `addProjectLayer()` - Adds a new project layer
- `addTempLayer()` - Adds a temporary layer
- `addTempLayerGeoJSON(layerName, geoJSON, config)` - Adds temporary GeoJSON layer
- `createGeoJSONLayer()` - Creates a new GeoJSON layer
- `createLayer()` - Creates a new layer
- `deactivateLensLayer()` - Deactivates lens layer
- `deleteProjectLayer()` - Deletes a project layer
- `removeTempLayer()` - Removes a temporary layer
- `toggleLensLayer()` - Toggles lens layer on/off
- `updateGeoJSONLayerContents(layerName, geoJSON)` - Updates GeoJSON layer contents
- `updateLayer()` - Updates layer configuration
- `updateLayerStyle(layerName, style)` - Updates layer styling
- `updateTempLayerGeoJSON(layerName, geoJSON)` - Updates temporary GeoJSON layer

### Layer Tree Module 🌳
#### Read Operations
- `activateViewLayers()` - Activates layers for a specific view

#### Mutation Operations (Need Review)
- `changeLayerOpacity(layerId, opacity)` - Changes layer opacity
- `createLayerGroup()` - Creates a new layer group
- `moveLayerTreeItemIntoGroup()` - Moves layer tree item into a group
- `removeLayerGroup()` - Removes a layer group
- `reorderLayerTreeItem()` - Reorders items in layer tree

### Map Module 🗺️
#### Read Operations
- `getFeatureState(featureId)` - Gets state of a specific feature
- `getMapBounds()` - Gets current map bounds
- `getQueriedFeature()` - Gets queried feature information
- `queryRenderedFeatures(point, options)` - Queries features at a point

#### Mutation Operations (Need Review)
- `addHtmlPopup(html, coordinates, options)` - Adds HTML popup to map
- `addIframePopup(url, coordinates, options, width, height, closeOnClick)` - Adds iframe popup
- `clearSDKPopup()` - Clears SDK-created popups
- `fitBounds(bounds)` - Fits map to specified bounds
- `flyTo(options)` - Animates map to location
- `removeFeatureState(featureId)` - Removes state from feature
- `setDrawTool(toolConfig)` - Sets the active drawing tool
- `setFeatureState(featureId, state)` - Sets state for a feature
- `setHighlightedFeatures(features)` - Sets highlighted features
- `setSelectedFeatures(features)` - Sets selected features

### Misc Module 🔧
#### Read Operations
- `featureArea(feature)` - Calculates area of a feature
- `fetchProjectDetails()` - Fetches detailed project information
- `fetchProjectFiles()` - Fetches project files
- `fetchVistas()` - Fetches project vistas/views
- `fromProjected(geoJSON, projectOrigin)` - Converts from projected to geographic coordinates
- `getGeoTiff()` - Gets GeoTIFF data
- `getGltf()` - Gets GLTF 3D model data
- `getPng()` - Gets PNG image data
- `getSceneTransform()` - Gets 3D scene transformation parameters
- `getSourceLayerDetails()` - Gets details of source layers
- `getTeamList()` - Gets list of teams
- `getTempUrl()` - Gets temporary URL for file access
- `getTerrainMeshes()` - Gets terrain mesh data
- `getThreeScene()` - Gets Three.js scene data
- `getTiles()` - Gets tile data
- `getUrlParams()` - Gets URL parameters
- `getUserClaimsJwt()` - Gets user claims JWT token
- `getVectorLayerContents()` - Gets vector layer contents
- `toProjected(geoJSON, projectOrigin)` - Converts to projected coordinates

#### UI Operations (Need Review)
- `addMapboxEventListener()` - Adds Mapbox event listener
- `disableBottomBarIframe()` - Disables bottom bar iframe
- `disableMapContentEvents()` - Disables map content events
- `disableMapHover()` - Disables map hover events
- `disableSecondaryAppOverlay()` - Disables secondary app overlay
- `enableBottomBarIframe(url, height)` - Enables bottom bar iframe
- `enableMapContentEvents()` - Enables map content events
- `enableMapHover()` - Enables map hover events
- `enableSecondaryAppOverlay()` - Enables secondary app overlay
- `removeMapboxEventListener()` - Removes Mapbox event listener
- `setContextMenuItems()` - Sets context menu items
- `setTopView()` - Sets top view
- `updateUiLayout()` - Updates UI layout
- `readyToClose()` - Signals ready to close

### Project Module 📋
#### Read Operations
- `getProjectApp(appId)` - Gets project app data
- `getProjectAttachmentPrompt()` - Gets project attachment prompt

#### Mutation Operations (Need Review)
- `createRawSection(feature)` - Creates new raw section/feature
- `createRawSections(features)` - Creates multiple raw sections
- `deleteRawSection(featureId)` - Deletes a raw section
- `updateProjectApp(appId, data)` - Updates project app data
- `updateRawSection(feature)` - Updates existing raw section
- `updateRawSections(features)` - Updates multiple raw sections

### Projects Module 📁
#### Read Operations
- `getProjectBundle()` - Gets complete project bundle
- `getProjects()` - Gets list of projects

#### Mutation Operations (Need Review)
- `createProject(projectData)` - Creates a new project
- `patchProperties(projectId, properties)` - Updates project properties
- `shareWithTeam(teamName, projects)` - Shares projects with team
- `syncToProjects(features, nameFunction)` - Syncs features to projects
- `updateProject(projectId, projectData)` - Updates existing project

### Additional GiraffeState Keys 🔄
#### Read Operations
- `giraffeState.get('selected')` - Gets selected features
- `giraffeState.get('projectOrigin')` - Gets project origin coordinates
- `giraffeState.get('projectAppsByAppID')` - Gets project apps by app ID
- `giraffeState.get('flows')` - Gets workflow/flow data
- `giraffeState.get('selectedProjectApp')` - Gets currently selected project app

---

## Human-in-the-Loop Required 🚨

These functions modify data, create/delete resources, or change UI state and should only be tested with human oversight:

### Data Mutation Functions
- `createRawSection()` - Creates new features
- `createRawSections()` - Creates multiple features
- `deleteRawSection()` - **DELETES features** ⚠️
- `updateRawSection()` - Modifies existing features
- `updateRawSections()` - Modifies multiple features
- `createProject()` - Creates new projects
- `updateProject()` - Modifies existing projects
- `deleteProjectLayer()` - **DELETES layers** ⚠️
- `updateProjectApp()` - Modifies app data

### Layer Management Functions
- `addProjectLayer()` - Adds permanent layers
- `createGeoJSONLayer()` - Creates new layers
- `createLayer()` - Creates new layers
- `updateGeoJSONLayerContents()` - Modifies layer data
- `updateLayer()` - Modifies layer configuration
- `updateLayerStyle()` - Changes layer appearance
- `createLayerGroup()` - Creates layer groups
- `removeLayerGroup()` - **REMOVES layer groups** ⚠️
- `moveLayerTreeItemIntoGroup()` - Reorganizes layer tree
- `reorderLayerTreeItem()` - Reorganizes layer tree

### Map State Functions
- `setSelectedFeatures()` - Changes user selection
- `setHighlightedFeatures()` - Changes map highlighting
- `setFeatureState()` - Modifies feature state
- `removeFeatureState()` - Removes feature state
- `setDrawTool()` - Changes active tool
- `flyTo()` - Changes map viewport
- `fitBounds()` - Changes map viewport

### UI Control Functions
- `addHtmlPopup()` - Shows popups
- `addIframePopup()` - Shows iframe popups
- `enableBottomBarIframe()` - Changes UI layout
- `disableBottomBarIframe()` - Changes UI layout
- `updateUiLayout()` - Changes UI layout
- `setContextMenuItems()` - Modifies context menus

### Project Management Functions
- `shareWithTeam()` - **SHARES projects with teams** ⚠️
- `syncToProjects()` - **SYNCS data to projects** ⚠️
- `patchProperties()` - Modifies project metadata

### Event Management Functions
- `addMapboxEventListener()` - Modifies event handling
- `removeMapboxEventListener()` - Modifies event handling
- `enableMapContentEvents()` - Changes event handling
- `disableMapContentEvents()` - Changes event handling

## Priority Exploration Order 🎯

### Phase 1: Safe Read Functions
1. Remaining giraffeState keys (`selected`, `projectOrigin`, `projectAppsByAppID`, `flows`, `selectedProjectApp`)
2. Project information functions (`fetchProjectDetails`, `getProjectBundle`, `getProjects`)
3. Geometry utility functions (`featureArea`, `toProjected`, `fromProjected`)
4. Map query functions (`queryRenderedFeatures`, `getMapBounds`, `getFeatureState`)

### Phase 2: Resource Access Functions
1. File and media functions (`fetchProjectFiles`, `getGltf`, `getPng`, `getGeoTiff`)
2. 3D scene functions (`getThreeScene`, `getSceneTransform`, `getTerrainMeshes`)
3. User/team functions (`getTeamList`, `getUserClaimsJwt`)

### Phase 3: Command Functions (With Human Review)
1. User interaction commands (`getLassoShape`, `getUserDrawnPolygon`, `getLassoedProjectFeatures`)
2. Selection commands (`getSelectableProjectFeatures`, `getLassoedLensedFeatures`)
3. View creation (`createRectangleVista`)

### Phase 4: Mutation Functions (Human-in-the-Loop Only)
1. Temporary layer functions (safe for testing)
2. Feature creation/update functions (careful testing required)
3. UI modification functions (reversible changes)
4. Project/layer management (high-impact changes)

## Notes 📝
- Functions marked with ⚠️ are particularly dangerous and could result in data loss
- Temporary layer functions are safer for testing as they don't persist
- Always test read functions before mutation functions
- Consider creating backup/snapshot functionality before testing destructive operations
- Some functions may require specific project states or user permissions to work properly