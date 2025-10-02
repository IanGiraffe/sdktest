# Functions to Explore

## Analysis Summary
Based on the comprehensive SDK documentation in `docs-condensed.md` and our current exploration in `functionCatalog.js`, I've identified functions that we haven't yet explored. This list categorizes them by module and indicates which ones require human-in-the-loop verification due to their mutative or potentially destructive nature.

## Already Explored Functions ✅
- `giraffeState.get('project')` ✅ Documented
- `giraffeState.get('projects')` ✅ Documented
- `giraffeState.get('projectLayers')` ✅ Documented
- `giraffeState.get('rawSections')` ✅ Documented
- `giraffeState.get('bakedSections')` ✅ Documented
- `giraffeState.get('mapView')` ✅ Documented
- `giraffeState.get('mapContent')` ✅ Documented
- `giraffeState.get('layerTree')` ✅ Documented
- `giraffeState.get('views')` ✅ Documented
- `giraffeState.get('selected')` ✅ Documented (Run: 2025-10-02)
- `giraffeState.get('projectOrigin')` ✅ Documented (Run: 2025-10-02)
- `giraffeState.get('projectAppsByAppID')` ✅ Documented (Run: 2025-10-02)
- `giraffeState.get('flows')` ✅ Documented (Run: 2025-10-02)
- `giraffeState.get('selectedProjectApp')` ✅ Documented (Run: 2025-10-02)
- `rpc.invoke('getSelectedFeatures', [])` ✅ Documented
- `rpc.invoke('activateDrawingLayer', [])` ⚠️ DEFERRED (mutation)
- `rpc.invoke('getAnalyticsResult', [])` ✅ Documented
- `rpc.invoke('getLayerContents', [layerName])` ✅ Documented

## Unexplored Functions by Module

### Commands Module 📋
- `createRectangleVista()` ⚠️ DEFERRED (creates persistent view)
- `getLassoedLensedFeatures()` ✅ Documented (Run: 2025-10-02)
- `getLassoedProjectFeatures()` ✅ Documented (Run: 2025-10-02)
- `getLassoShape()` ✅ Documented (Run: 2025-10-02)
- `getLensedFeatureMap()` ✅ Documented (Run: 2025-10-02)
- `getSelectableProjectFeatures()` ✅ Documented (Run: 2025-10-02)
- `getUserDrawnPolygon()` ✅ Documented (Run: 2025-10-02)

### Layers Module 🎨
#### Read Operations
- `getLayerPermission(layerName)` ✅ Documented (Run: 2025-10-02)

#### Mutation Operations (⚠️ All DEFERRED)
- `setTiles()` ⚠️ DEFERRED (mutation)
- `activateLensLayer(layerName)` ⚠️ DEFERRED (changes UI state)
- `addProjectLayer()` ⚠️ DEFERRED (persistent mutation)
- `addTempLayer()` ⚠️ DEFERRED (UI mutation)
- `addTempLayerGeoJSON(layerName, geoJSON, config)` ⚠️ DEFERRED (UI mutation)
- `createGeoJSONLayer()` ⚠️ DEFERRED (persistent creation)
- `createLayer()` ⚠️ DEFERRED (persistent creation)
- `deactivateLensLayer()` ⚠️ DEFERRED (changes UI state)
- `deleteProjectLayer()` ⚠️ DEFERRED (DESTRUCTIVE)
- `removeTempLayer()` ⚠️ DEFERRED (UI mutation)
- `toggleLensLayer()` ⚠️ DEFERRED (changes UI state)
- `updateGeoJSONLayerContents(layerName, geoJSON)` ⚠️ DEFERRED (mutation)
- `updateLayer()` ⚠️ DEFERRED (mutation)
- `updateLayerStyle(layerName, style)` ⚠️ DEFERRED (mutation)
- `updateTempLayerGeoJSON(layerName, geoJSON)` ⚠️ DEFERRED (UI mutation)

### Layer Tree Module 🌳
#### Read Operations
- None remaining (all are mutation operations)

#### Mutation Operations (⚠️ All DEFERRED)
- `activateViewLayers()` ⚠️ DEFERRED (changes UI state)
- `changeLayerOpacity(layerId, opacity)` ⚠️ DEFERRED (UI mutation)
- `createLayerGroup()` ⚠️ DEFERRED (persistent creation)
- `moveLayerTreeItemIntoGroup()` ⚠️ DEFERRED (mutation)
- `removeLayerGroup()` ⚠️ DEFERRED (DESTRUCTIVE)
- `reorderLayerTreeItem()` ⚠️ DEFERRED (mutation)

### Map Module 🗺️
#### Read Operations
- `getFeatureState(featureId)` ✅ Documented (Run: 2025-10-02)
- `getMapBounds()` ✅ Documented (Run: 2025-10-02)
- `getQueriedFeature()` ✅ Documented (Run: 2025-10-02)
- `queryRenderedFeatures(point, options)` ✅ Documented (Run: 2025-10-02)

#### Mutation Operations (⚠️ All DEFERRED)
- `addHtmlPopup(html, coordinates, options)` ⚠️ DEFERRED (UI mutation)
- `addIframePopup(url, coordinates, options, width, height, closeOnClick)` ⚠️ DEFERRED (UI mutation)
- `clearSDKPopup()` ⚠️ DEFERRED (UI mutation)
- `fitBounds(bounds)` ⚠️ DEFERRED (changes viewport)
- `flyTo(options)` ⚠️ DEFERRED (changes viewport)
- `removeFeatureState(featureId)` ⚠️ DEFERRED (mutation)
- `setDrawTool(toolConfig)` ⚠️ DEFERRED (UI mutation)
- `setFeatureState(featureId, state)` ⚠️ DEFERRED (mutation)
- `setHighlightedFeatures(features)` ⚠️ DEFERRED (UI mutation)
- `setSelectedFeatures(features)` ⚠️ DEFERRED (UI mutation)

### Misc Module 🔧
#### Read Operations
- `featureArea(feature)` ✅ Documented (Run: 2025-10-02)
- `fetchProjectDetails()` ✅ Documented (Run: 2025-10-02)
- `fetchProjectFiles()` ✅ Documented (Run: 2025-10-02)
- `fetchVistas()` ✅ Documented (Run: 2025-10-02)
- `fromProjected(geoJSON, projectOrigin)` ✅ Documented (Run: 2025-10-02)
- `getGeoTiff()` ✅ Documented (Run: 2025-10-02)
- `getGltf()` ✅ Documented (Run: 2025-10-02)
- `getPng()` ✅ Documented (Run: 2025-10-02)
- `getSceneTransform()` ✅ Documented (Run: 2025-10-02)
- `getSourceLayerDetails()` ✅ Documented (Run: 2025-10-02)
- `getTeamList()` ✅ Documented (Run: 2025-10-02)
- `getTempUrl()` ✅ Documented (Run: 2025-10-02)
- `getTerrainMeshes()` ✅ Documented (Run: 2025-10-02)
- `getThreeScene()` ✅ Documented (Run: 2025-10-02)
- `getTiles()` ✅ Documented (Run: 2025-10-02)
- `getUrlParams()` ✅ Documented (Run: 2025-10-02)
- `getUserClaimsJwt()` ✅ Documented (Run: 2025-10-02)
- `getVectorLayerContents()` ✅ Documented (Run: 2025-10-02)
- `toProjected(geoJSON, projectOrigin)` ✅ Documented (Run: 2025-10-02)

#### UI Operations (⚠️ All DEFERRED)
- `addMapboxEventListener()` ⚠️ DEFERRED (modifies event handling)
- `disableBottomBarIframe()` ⚠️ DEFERRED (UI mutation)
- `disableMapContentEvents()` ⚠️ DEFERRED (changes event handling)
- `disableMapHover()` ⚠️ DEFERRED (changes interaction)
- `disableSecondaryAppOverlay()` ⚠️ DEFERRED (UI mutation)
- `enableBottomBarIframe(url, height)` ⚠️ DEFERRED (UI mutation)
- `enableMapContentEvents()` ⚠️ DEFERRED (changes event handling)
- `enableMapHover()` ⚠️ DEFERRED (changes interaction)
- `enableSecondaryAppOverlay()` ⚠️ DEFERRED (UI mutation)
- `removeMapboxEventListener()` ⚠️ DEFERRED (modifies event handling)
- `setContextMenuItems()` ⚠️ DEFERRED (UI mutation)
- `setTopView()` ⚠️ DEFERRED (changes UI state)
- `updateUiLayout()` ⚠️ DEFERRED (UI mutation)
- `readyToClose()` ⚠️ DEFERRED (state change)

### Project Module 📋
#### Read Operations
- `getProjectApp(appId)` ✅ Documented (Run: 2025-10-02)
- `getProjectAttachmentPrompt()` ✅ Documented (Run: 2025-10-02)

#### Mutation Operations (⚠️ All DEFERRED)
- `createRawSection(feature)` ⚠️ DEFERRED (creates new feature)
- `createRawSections(features)` ⚠️ DEFERRED (bulk creation)
- `deleteRawSection(featureId)` ⚠️ DEFERRED (DESTRUCTIVE)
- `updateProjectApp(appId, data)` ⚠️ DEFERRED (mutation)
- `updateRawSection(feature)` ⚠️ DEFERRED (mutation)
- `updateRawSections(features)` ⚠️ DEFERRED (bulk mutation)

### Projects Module 📁
#### Read Operations
- `getProjectBundle()` ✅ Documented (Run: 2025-10-02)
- `getProjects()` ✅ Documented (Run: 2025-10-02)

#### Mutation Operations (⚠️ All DEFERRED)
- `createProject(projectData)` ⚠️ DEFERRED (persistent creation)
- `patchProperties(projectId, properties)` ⚠️ DEFERRED (mutation)
- `shareWithTeam(teamName, projects)` ⚠️ DEFERRED (SHARING MUTATION)
- `syncToProjects(features, nameFunction)` ⚠️ DEFERRED (BULK SYNC)
- `updateProject(projectId, projectData)` ⚠️ DEFERRED (mutation)

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