import { ViewportVectorLayer } from '../lib/ViewportVectorLayer.js';

const ACCESS = {
  READ: 'read',
  MUTATION: 'mutation',
  NETWORK: 'network'
};

function ensureGiraffeState(giraffeState) {
  if (!giraffeState || typeof giraffeState.get !== 'function') {
    throw new Error('giraffeState.get is unavailable. Run inside a Giraffe iframe.');
  }
  return giraffeState;
}

function ensureRPC(rpc) {
  if (!rpc || typeof rpc.invoke !== 'function') {
    throw new Error('rpc.invoke is unavailable. Run inside a Giraffe iframe.');
  }
  return rpc;
}

async function fetchFirstVectorLayerContents(giraffeState, rpc) {
  const state = ensureGiraffeState(giraffeState);
  const runner = ensureRPC(rpc);
  const layers = state.get('projectLayers');

  if (!Array.isArray(layers) || layers.length === 0) {
    return { error: 'No layers available', totalLayers: Array.isArray(layers) ? layers.length : 0 };
  }

  for (const layer of layers) {
    const layerName = layer?.layer_full?.name;
    const layerType = layer?.layer_full?.layer_type;
    const layerStyle = layer?.layer_full?.style?.type;

    if (!layerName) continue;
    if (layerType === 0 || layerStyle === 'raster') continue;

    try {
      const contents = await runner.invoke('getLayerContents', [layerName]);
      return {
        testedLayer: layerName,
        layerInfo: layer,
        contents
      };
    } catch (error) {
      continue;
    }
  }

  return { error: 'No compatible vector layers found for getLayerContents', totalLayers: layers.length };
}

function snapshotStateKeys(giraffeState, keys) {
  const state = ensureGiraffeState(giraffeState);
  const snapshot = {};
  keys.forEach(key => {
    try {
      const value = state.get(key);
      snapshot[key] = {
        exists: value !== undefined && value !== null,
        type: Array.isArray(value) ? 'array' : typeof value,
        length: Array.isArray(value) ? value.length : undefined,
        sample: value
      };
    } catch (error) {
      snapshot[key] = { error: error instanceof Error ? error.message : String(error) };
    }
  });
  return snapshot;
}

function pickFirstProjectLayerName(giraffeState) {
	const state = ensureGiraffeState(giraffeState);
	const layers = state.get('projectLayers');
	if (!Array.isArray(layers) || layers.length === 0) return '';
	for (const layer of layers) {
		const name = layer?.layer_full?.name;
		const styleType = layer?.layer_full?.style?.type;
		if (name && styleType !== 'raster') return name;
	}
	const fallback = layers[0]?.layer_full?.name || '';
	return fallback || '';
}

function promptForLayerName(giraffeState, message = 'Enter layer name') {
	const def = pickFirstProjectLayerName(giraffeState) || 'My Layer Name';
	const name = typeof window !== 'undefined' ? window.prompt(message, def) : def;
	return (name || '').trim();
}

function pickFirstViewName(giraffeState) {
	const state = ensureGiraffeState(giraffeState);
	const views = state.get('views');
	if (Array.isArray(views) && views.length) {
		return (views[0]?.name || views[0]?.id || '').toString();
	}
	return '';
}

function promptForViewName(giraffeState, message = 'Enter view name') {
	const def = pickFirstViewName(giraffeState) || 'Default View';
	const value = typeof window !== 'undefined' ? window.prompt(message, def) : def;
	return (value || '').trim();
}

function promptForJson(message, defaultObj) {
	const fallback = defaultObj ?? {};
	const seed = JSON.stringify(fallback, null, 2);
	const text = typeof window !== 'undefined' ? window.prompt(message, seed) : seed;
	if (!text) return fallback;
	try {
		return JSON.parse(text);
	} catch (err) {
		return fallback;
	}
}

function sampleFeatureCollection() {
	return { type: 'FeatureCollection', features: [] };
}

let viewportLayerInstance = null;

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
  {
    id: 'giraffeState.get.projects',
    label: 'giraffeState.get("projects")',
    sdkCall: 'giraffeState.get("projects")',
    buttonId: 'getAllProjects',
    category: 'Project',
    access: ACCESS.READ,
    direct: true,
    outputId: 'projectOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('projects')
  },
  {
    id: 'giraffeState.get.projectBoundary',
    label: 'giraffeState.get("projectBoundary")',
    sdkCall: 'giraffeState.get("projectBoundary")',
    buttonId: 'getCurrentProjectBoundary',
    category: 'Project',
    access: ACCESS.READ,
    direct: true,
    outputId: 'projectOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('projectBoundary')
  },
  {
    id: 'giraffeState.get.mapView',
    label: 'giraffeState.get("mapView")',
    sdkCall: 'giraffeState.get("mapView")',
    buttonId: 'getMapView',
    category: 'Map',
    access: ACCESS.READ,
    direct: true,
    outputId: 'mapOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('mapView')
  },
  {
    id: 'rpc.invoke.getSelectedFeatures',
    label: 'rpc.invoke("getSelectedFeatures", [])',
    sdkCall: 'rpc.invoke("getSelectedFeatures", [])',
    buttonId: 'getSelectedFeatures',
    category: 'Map',
    access: ACCESS.READ,
    direct: true,
    outputId: 'mapOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getSelectedFeatures', [])
  },
  {
    id: 'rpc.invoke.getLassoedLensedFeatures',
    label: 'rpc.invoke("getLassoedLensedFeatures", [])',
    sdkCall: 'rpc.invoke("getLassoedLensedFeatures", [])',
    category: 'Commands',
    access: ACCESS.READ,
    direct: true,
    outputId: 'commandsOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getLassoedLensedFeatures', [])
  },
  {
    id: 'rpc.invoke.getLassoedProjectFeatures',
    label: 'rpc.invoke("getLassoedProjectFeatures", [])',
    sdkCall: 'rpc.invoke("getLassoedProjectFeatures", [])',
    category: 'Commands',
    access: ACCESS.READ,
    direct: true,
    outputId: 'commandsOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getLassoedProjectFeatures', [])
  },
  {
    id: 'rpc.invoke.getLassoShape',
    label: 'rpc.invoke("getLassoShape", [])',
    sdkCall: 'rpc.invoke("getLassoShape", [])',
    category: 'Commands',
    access: ACCESS.READ,
    direct: true,
    outputId: 'commandsOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getLassoShape', [])
  },
  {
    id: 'rpc.invoke.getLensedFeatureMap',
    label: 'rpc.invoke("getLensedFeatureMap", [])',
    sdkCall: 'rpc.invoke("getLensedFeatureMap", [])',
    category: 'Commands',
    access: ACCESS.READ,
    direct: true,
    outputId: 'commandsOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getLensedFeatureMap', [])
  },
  {
    id: 'rpc.invoke.getSelectableProjectFeatures',
    label: 'rpc.invoke("getSelectableProjectFeatures", [])',
    sdkCall: 'rpc.invoke("getSelectableProjectFeatures", [])',
    category: 'Commands',
    access: ACCESS.READ,
    direct: true,
    outputId: 'commandsOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getSelectableProjectFeatures', [])
  },
  {
    id: 'rpc.invoke.getUserDrawnPolygon',
    label: 'rpc.invoke("getUserDrawnPolygon", [])',
    sdkCall: 'rpc.invoke("getUserDrawnPolygon", [])',
    category: 'Commands',
    access: ACCESS.READ,
    direct: true,
    outputId: 'commandsOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getUserDrawnPolygon', [])
  },
  {
    id: 'giraffeState.get.mapContent',
    label: 'giraffeState.get("mapContent")',
    sdkCall: 'giraffeState.get("mapContent")',
    buttonId: 'getMapContent',
    category: 'Map',
    access: ACCESS.READ,
    direct: true,
    outputId: 'boundaryOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('mapContent')
  },
  {
    id: 'giraffeState.get.projectLayers',
    label: 'giraffeState.get("projectLayers")',
    sdkCall: 'giraffeState.get("projectLayers")',
    buttonId: 'getProjectLayers',
    category: 'Layers',
    access: ACCESS.READ,
    direct: true,
    outputId: 'layersOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('projectLayers')
  },
  {
    id: 'giraffeState.get.rawSections',
    label: 'giraffeState.get("rawSections")',
    sdkCall: 'giraffeState.get("rawSections")',
    buttonId: 'getRawSections',
    category: 'Layers',
    access: ACCESS.READ,
    direct: true,
    outputId: 'layersOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('rawSections')
  },
  {
    id: 'giraffeState.get.bakedSections',
    label: 'giraffeState.get("bakedSections")',
    sdkCall: 'giraffeState.get("bakedSections")',
    buttonId: 'getBakedSections',
    category: 'Layers',
    access: ACCESS.READ,
    direct: true,
    outputId: 'layersOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('bakedSections')
  },
  {
    id: 'giraffeState.get.layerTree',
    label: 'giraffeState.get("layerTree")',
    sdkCall: 'giraffeState.get("layerTree")',
    buttonId: 'getLayerTree',
    category: 'Layers',
    access: ACCESS.READ,
    direct: true,
    outputId: 'layersOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('layerTree')
  },
  {
    id: 'composite.layer.overview',
    label: 'Composite: project/raw/baked sections',
    sdkCall: 'giraffeState.get("projectLayers"|"rawSections"|"bakedSections")',
    buttonId: 'exploreLayerTypes',
    category: 'Layers',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'layersOutput',
    notes: 'Combines three giraffeState.get calls for comparison.',
    invoke: async ({ giraffeState }) => {
      const state = ensureGiraffeState(giraffeState);
      return {
        projectLayers: state.get('projectLayers'),
        rawSections: state.get('rawSections'),
        bakedSections: state.get('bakedSections')
      };
    }
  },
  {
    id: 'composite.layer.analyzeDataLayers',
    label: 'Composite: analyze data layers',
    sdkCall: 'giraffeState.get("projectLayers")',
    buttonId: 'analyzeDataLayers',
    category: 'Layers',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'layersOutput',
    notes: 'Returns project layer payload for schema inspection.',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('projectLayers')
  },
  {
    id: 'rpc.invoke.activateDrawingLayer',
    label: 'rpc.invoke("activateDrawingLayer", [])',
    sdkCall: 'rpc.invoke("activateDrawingLayer", [])',
    buttonId: 'testDrawingLayerActivation',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersOutput',
    requiresReview: true,
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('activateDrawingLayer', [])
  },
  {
    id: 'composite.layer.testLayerContents',
    label: 'Composite: rpc.invoke("getLayerContents") search',
    sdkCall: 'rpc.invoke("getLayerContents", [layerName])',
    buttonId: 'testLayerContents',
    category: 'Layers',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'layersOutput',
    notes: 'Attempts getLayerContents on the first compatible project layer.',
    invoke: async ({ giraffeState, rpc }) => fetchFirstVectorLayerContents(giraffeState, rpc)
  },
  {
    id: 'rpc.invoke.getSelectedFeatures.boundary',
    label: 'Composite: boundary check via getSelectedFeatures',
    sdkCall: 'rpc.invoke("getSelectedFeatures")',
    buttonId: 'checkSelectedForBoundary',
    category: 'Boundary',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'boundaryOutput',
    notes: 'Summarises selection properties to identify boundary features.',
    invoke: async ({ rpc }) => {
      const runner = ensureRPC(rpc);
      const selected = await runner.invoke('getSelectedFeatures');
      const feature = selected?.features?.[0];
      return {
        hasFeature: Boolean(feature),
        defaultBoundary: feature?.properties?.defaultBoundary,
        geometryType: feature?.geometry?.type,
        coordinateCount: feature?.geometry?.coordinates?.length,
        properties: feature?.properties,
        raw: selected
      };
    }
  },
  {
    id: 'composite.boundary.exploreAllStates',
    label: 'Composite: snapshot common giraffeState keys',
    sdkCall: 'giraffeState.get([...keys])',
    buttonId: 'exploreAllStates',
    category: 'Boundary',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'boundaryOutput',
    notes: 'Runs giraffeState.get across a curated list of keys.',
    invoke: async ({ giraffeState }) => snapshotStateKeys(giraffeState, [
      'project',
      'projects',
      'projectLayers',
      'rawSections',
      'bakedSections',
      'mapView',
      'mapContent',
      'selected',
      'layerTree',
      'projectOrigin',
      'projectAppsByAppID',
      'flows',
      'selectedProjectApp',
      'views'
    ])
  },
  {
    id: 'giraffeState.get.views',
    label: 'giraffeState.get("views")',
    sdkCall: 'giraffeState.get("views")',
    buttonId: 'getAllViews',
    category: 'Views',
    access: ACCESS.READ,
    direct: true,
    outputId: 'viewsOutput',
    invoke: async ({ giraffeState }) => ensureGiraffeState(giraffeState).get('views')
  },
  {
    id: 'composite.views.structure',
    label: 'Composite: analyse view structure',
    sdkCall: 'giraffeState.get("views")',
    buttonId: 'analyzeViewStructure',
    category: 'Views',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'viewsOutput',
    notes: 'Maps view metadata, optional props, and counts.',
    invoke: async ({ giraffeState }) => {
      const views = ensureGiraffeState(giraffeState).get('views');
      if (!Array.isArray(views)) {
        return { message: 'giraffeState.get("views") did not return an array', data: views };
      }
      return {
        totalViews: views.length,
        commonProperties: views.length ? Object.keys(views[0]).sort() : [],
        viewAnalysis: views.map((view, index) => ({
          index,
          id: view?.id,
          name: view?.name,
          type: view?.type,
          hasMapState: Boolean(view?.mapState),
          hasFilters: Boolean(view?.filters),
          hasConfig: Boolean(view?.config),
          keys: Object.keys(view || {})
        }))
      };
    }
  },
  {
    id: 'composite.views.details',
    label: 'Composite: detailed views breakdown',
    sdkCall: 'giraffeState.get("views")',
    buttonId: 'getViewDetails',
    category: 'Views',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'viewsOutput',
    notes: 'Expands metadata, mapState, filters, and config for each view.',
    invoke: async ({ giraffeState }) => {
      const views = ensureGiraffeState(giraffeState).get('views');
      if (!Array.isArray(views) || views.length === 0) {
        return { message: 'No views available', data: views };
      }

      return views.map((view, index) => ({
        index,
        metadata: {
          id: view?.id,
          name: view?.name,
          description: view?.description,
          type: view?.type,
          created: view?.created_at || view?.createdAt,
          updated: view?.updated_at || view?.updatedAt,
          owner: view?.owner || view?.created_by
        },
        mapState: view?.mapState || null,
        filters: view?.filters || null,
        config: view?.config || null
      }));
    }
  },
  {
    id: 'rpc.invoke.getAnalyticsResult',
    label: 'rpc.invoke("getAnalyticsResult", [])',
    sdkCall: 'rpc.invoke("getAnalyticsResult", [])',
    buttonId: 'getAnalyticsResult',
    category: 'Analytics',
    access: ACCESS.READ,
    direct: true,
    outputId: 'analyticsOutput',
    invoke: async ({ rpc }) => ensureRPC(rpc).invoke('getAnalyticsResult', [])
  },
  {
    id: 'network.testArcGISService',
    label: 'Network: fetch ArcGIS service metadata',
    sdkCall: 'fetch(ArcGIS FeatureServer)',
    buttonId: 'testArcGISService',
    category: 'Viewport',
    access: ACCESS.NETWORK,
    direct: false,
    derived: true,
    outputId: 'viewportOutput',
    notes: 'Queries external ArcGIS service based on current map bounds.',
    invoke: async ({ giraffeState }) => {
      const serviceUrl = 'https://meckgis.mecklenburgcountync.gov/server/rest/services/CityofCharlotteZoning/FeatureServer/0';
      const infoResponse = await fetch(`${serviceUrl}?f=json`);
      const serviceInfo = await infoResponse.json();
      const mapView = ensureGiraffeState(giraffeState).get('mapView');
      const result = { serviceUrl, serviceInfo };

      const bounds = mapView?.bounds;
      if (!bounds) {
        return { ...result, message: 'Map bounds unavailable; returning service metadata only.' };
      }

      let west;
      let south;
      let east;
      let north;

      if (Array.isArray(bounds)) {
        west = bounds[0]?.[0];
        south = bounds[0]?.[1];
        east = bounds[1]?.[0];
        north = bounds[1]?.[1];
      } else {
        ({ west, south, east, north } = bounds);
      }

      const envelope = `${west},${south},${east},${north}`;
      const queryParams = new URLSearchParams({
        f: 'json',
        where: '1=1',
        geometry: envelope,
        geometryType: 'esriGeometryEnvelope',
        spatialRel: 'esriSpatialRelIntersects',
        inSR: '4326',
        outSR: '4326',
        outFields: '*',
        maxRecordCount: '25',
        returnGeometry: 'true'
      });

      const queryResponse = await fetch(`${serviceUrl}/query?${queryParams.toString()}`);
      const queryResults = await queryResponse.json();

      return {
        ...result,
        query: {
          envelope,
          featureCount: queryResults?.features?.length || 0,
          sampleFeature: queryResults?.features?.[0] || null,
          errors: queryResults?.error || null
        }
      };
    }
  },
  {
    id: 'viewport.activateViewportLayer',
    label: 'Composite: activate viewport vector layer',
    sdkCall: 'ViewportVectorLayer.activate()',
    buttonId: 'activateViewportLayer',
    category: 'Viewport',
    access: ACCESS.MUTATION,
    direct: false,
    derived: true,
    outputId: 'viewportOutput',
    requiresReview: true,
    notes: 'Instantiates ViewportVectorLayer and starts streaming features.',
    invoke: async ({ rpc, giraffeState }) => {
      const state = ensureGiraffeState(giraffeState);
      const runner = ensureRPC(rpc);

      if (viewportLayerInstance?.isActive) {
        return { message: 'Viewport layer already active', layerName: viewportLayerInstance.layerName };
      }

      viewportLayerInstance = new ViewportVectorLayer(
        'Charlotte Zoning',
        'https://meckgis.mecklenburgcountync.gov/server/rest/services/CityofCharlotteZoning/FeatureServer/0',
        runner,
        state,
        {
          maxRecordCount: 2000,
          refreshOnMove: true,
          debounceTime: 1000,
          cacheFeatures: true,
          cacheTimeout: 300000
        }
      );

      viewportLayerInstance.activate();
      return {
        message: 'Viewport layer activated',
        layerName: viewportLayerInstance.layerName,
        serviceUrl: viewportLayerInstance.serviceUrl
      };
    }
  },
  {
    id: 'viewport.refreshViewportLayer',
    label: 'Composite: refresh viewport layer',
    sdkCall: 'ViewportVectorLayer.loadFeaturesForCurrentViewport()',
    buttonId: 'refreshViewportLayer',
    category: 'Viewport',
    access: ACCESS.MUTATION,
    direct: false,
    derived: true,
    outputId: 'viewportOutput',
    requiresReview: true,
    notes: 'Clears cached bounds and reloads viewport features.',
    invoke: async () => {
      if (!viewportLayerInstance?.isActive) {
        return { error: 'No active viewport layer to refresh.' };
      }
      viewportLayerInstance.lastBounds = null;
      await viewportLayerInstance.loadFeaturesForCurrentViewport();
      return { message: 'Viewport layer refreshed.' };
    }
  },
  {
    id: 'viewport.getViewportLayerStatus',
    label: 'Composite: viewport layer status',
    sdkCall: 'ViewportVectorLayer state snapshot',
    buttonId: 'getViewportLayerStatus',
    category: 'Viewport',
    access: ACCESS.READ,
    direct: false,
    derived: true,
    outputId: 'viewportOutput',
    notes: 'Reports on the in-memory ViewportVectorLayer instance.',
    invoke: async () => ({
      hasInstance: Boolean(viewportLayerInstance),
      isActive: Boolean(viewportLayerInstance?.isActive),
      layerName: viewportLayerInstance?.layerName || null,
      serviceUrl: viewportLayerInstance?.serviceUrl || null,
      refreshOnMove: viewportLayerInstance?.options?.refreshOnMove || false,
      lastBounds: viewportLayerInstance?.lastBounds || null
    })
  },
  {
    id: 'viewport.deactivateViewportLayer',
    label: 'Composite: deactivate viewport layer',
    sdkCall: 'ViewportVectorLayer.deactivate()',
    buttonId: 'deactivateViewportLayer',
    category: 'Viewport',
    access: ACCESS.MUTATION,
    direct: false,
    derived: true,
    outputId: 'viewportOutput',
    requiresReview: true,
    notes: 'Stops the ViewportVectorLayer and clears cached state.',
    invoke: async () => {
      if (!viewportLayerInstance?.isActive) {
        return { message: 'Viewport layer is not active.' };
      }
      await viewportLayerInstance.deactivate();
      return { message: 'Viewport layer deactivated.' };
    }
  }
  ,
  // LAYERS (SDK) direct calls wired for the Layers (SDK) tab
  {
    id: 'rpc.invoke.activateLensLayer',
    label: 'rpc.invoke("activateLensLayer", [layerName])',
    sdkCall: 'rpc.invoke("activateLensLayer", [layerName])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const layerName = promptForLayerName(giraffeState, 'Layer name for activateLensLayer');
      return ensureRPC(rpc).invoke('activateLensLayer', [layerName]);
    }
  },
  {
    id: 'rpc.invoke.deactivateLensLayer',
    label: 'rpc.invoke("deactivateLensLayer", [layerName?])',
    sdkCall: 'rpc.invoke("deactivateLensLayer", [layerName?])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Optional layer name for deactivateLensLayer (leave blank for global)');
      const args = name ? [name] : [];
      return ensureRPC(rpc).invoke('deactivateLensLayer', args);
    }
  },
  {
    id: 'rpc.invoke.toggleLensLayer',
    label: 'rpc.invoke("toggleLensLayer", [layerName])',
    sdkCall: 'rpc.invoke("toggleLensLayer", [layerName])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const layerName = promptForLayerName(giraffeState, 'Layer name for toggleLensLayer');
      return ensureRPC(rpc).invoke('toggleLensLayer', [layerName]);
    }
  },
  {
    id: 'rpc.invoke.addTempLayerGeoJSON',
    label: 'rpc.invoke("addTempLayerGeoJSON", [name, geojson, style, options])',
    sdkCall: 'rpc.invoke("addTempLayerGeoJSON", [name, geojson, style, options])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = typeof window !== 'undefined' ? (window.prompt('Temp layer name', 'Temp Layer') || 'Temp Layer') : 'Temp Layer';
      const geojson = promptForJson('GeoJSON FeatureCollection for temp layer', sampleFeatureCollection());
      const style = promptForJson('Optional style object (JSON)', {});
      const options = promptForJson('Optional options object (JSON)', {});
      return ensureRPC(rpc).invoke('addTempLayerGeoJSON', [name, geojson, style, options]);
    }
  },
  {
    id: 'rpc.invoke.updateTempLayerGeoJSON',
    label: 'rpc.invoke("updateTempLayerGeoJSON", [name, geojson])',
    sdkCall: 'rpc.invoke("updateTempLayerGeoJSON", [name, geojson])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Temp layer name to update');
      const geojson = promptForJson('GeoJSON FeatureCollection for update', sampleFeatureCollection());
      return ensureRPC(rpc).invoke('updateTempLayerGeoJSON', [name, geojson]);
    }
  },
  {
    id: 'rpc.invoke.removeTempLayer',
    label: 'rpc.invoke("removeTempLayer", [name])',
    sdkCall: 'rpc.invoke("removeTempLayer", [name])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Temp layer name to remove');
      return ensureRPC(rpc).invoke('removeTempLayer', [name]);
    }
  },
  {
    id: 'rpc.invoke.updateGeoJSONLayerContents',
    label: 'rpc.invoke("updateGeoJSONLayerContents", [name, geojson])',
    sdkCall: 'rpc.invoke("updateGeoJSONLayerContents", [name, geojson])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Permanent GeoJSON layer name');
      const geojson = promptForJson('GeoJSON FeatureCollection for permanent layer update', sampleFeatureCollection());
      return ensureRPC(rpc).invoke('updateGeoJSONLayerContents', [name, geojson]);
    }
  },
  {
    id: 'rpc.invoke.updateLayerStyle',
    label: 'rpc.invoke("updateLayerStyle", [name, style])',
    sdkCall: 'rpc.invoke("updateLayerStyle", [name, style])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Layer name to style');
      const style = promptForJson('Style object (JSON)', { showLabels: true });
      return ensureRPC(rpc).invoke('updateLayerStyle', [name, style]);
    }
  },
  {
    id: 'rpc.invoke.getLayerPermission',
    label: 'rpc.invoke("getLayerPermission", [name])',
    sdkCall: 'rpc.invoke("getLayerPermission", [name])',
    category: 'Layers',
    access: ACCESS.READ,
    direct: true,
    outputId: 'layersSdkOutput',
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Layer name for getLayerPermission');
      return ensureRPC(rpc).invoke('getLayerPermission', [name]);
    }
  },
  {
    id: 'rpc.invoke.getLayerContents',
    label: 'rpc.invoke("getLayerContents", [name])',
    sdkCall: 'rpc.invoke("getLayerContents", [name])',
    category: 'Layers',
    access: ACCESS.READ,
    direct: true,
    outputId: 'layersSdkOutput',
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Layer name for getLayerContents');
      return ensureRPC(rpc).invoke('getLayerContents', [name]);
    }
  },
  {
    id: 'rpc.invoke.createDrawingLayer',
    label: 'rpc.invoke("createDrawingLayer", [name])',
    sdkCall: 'rpc.invoke("createDrawingLayer", [name])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc }) => {
      const name = typeof window !== 'undefined' ? (window.prompt('New drawing layer name', 'New Drawing Layer') || 'New Drawing Layer') : 'New Drawing Layer';
      return ensureRPC(rpc).invoke('createDrawingLayer', [name]);
    }
  },
  {
    id: 'rpc.invoke.deleteDrawingLayer',
    label: 'rpc.invoke("deleteDrawingLayer", [name])',
    sdkCall: 'rpc.invoke("deleteDrawingLayer", [name])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Drawing layer to delete');
      return ensureRPC(rpc).invoke('deleteDrawingLayer', [name]);
    }
  },
  {
    id: 'rpc.invoke.duplicateDrawingLayer',
    label: 'rpc.invoke("duplicateDrawingLayer", [name, newName])',
    sdkCall: 'rpc.invoke("duplicateDrawingLayer", [name, newName])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Drawing layer to duplicate');
      const newName = typeof window !== 'undefined' ? (window.prompt('New name for duplicate', `${name || 'Layer'} Copy`) || `${name || 'Layer'} Copy`) : `${name || 'Layer'} Copy`;
      return ensureRPC(rpc).invoke('duplicateDrawingLayer', [name, newName]);
    }
  },
  {
    id: 'rpc.invoke.renameDrawingLayer',
    label: 'rpc.invoke("renameDrawingLayer", [oldName, newName])',
    sdkCall: 'rpc.invoke("renameDrawingLayer", [oldName, newName])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const oldName = promptForLayerName(giraffeState, 'Current drawing layer name');
      const newName = typeof window !== 'undefined' ? (window.prompt('New drawing layer name', `${oldName || 'Layer'} Renamed`) || `${oldName || 'Layer'} Renamed`) : `${oldName || 'Layer'} Renamed`;
      return ensureRPC(rpc).invoke('renameDrawingLayer', [oldName, newName]);
    }
  },
  {
    id: 'rpc.invoke.addTempLayer',
    label: 'rpc.invoke("addTempLayer", [config])',
    sdkCall: 'rpc.invoke("addTempLayer", [config])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Temp layer name');
      const def = { name, featureCollection: sampleFeatureCollection() };
      const config = promptForJson('Temp layer config (JSON)', def);
      return ensureRPC(rpc).invoke('addTempLayer', [config]);
    }
  },
  {
    id: 'rpc.invoke.createGeoJSONLayer',
    label: 'rpc.invoke("createGeoJSONLayer", [name, geojson])',
    sdkCall: 'rpc.invoke("createGeoJSONLayer", [name, geojson])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc }) => {
      const name = typeof window !== 'undefined' ? (window.prompt('New GeoJSON layer name', 'New GeoJSON Layer') || 'New GeoJSON Layer') : 'New GeoJSON Layer';
      const geojson = promptForJson('GeoJSON FeatureCollection (JSON)', sampleFeatureCollection());
      return ensureRPC(rpc).invoke('createGeoJSONLayer', [name, geojson]);
    }
  },
  {
    id: 'rpc.invoke.createLayer',
    label: 'rpc.invoke("createLayer", [config])',
    sdkCall: 'rpc.invoke("createLayer", [config])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc }) => {
      const config = promptForJson('Generic layer config (JSON)', { name: 'New Layer' });
      return ensureRPC(rpc).invoke('createLayer', [config]);
    }
  },
  {
    id: 'rpc.invoke.addProjectLayer',
    label: 'rpc.invoke("addProjectLayer", [config])',
    sdkCall: 'rpc.invoke("addProjectLayer", [config])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc }) => {
      const config = promptForJson('Project layer config (JSON)', { name: 'New Project Layer' });
      return ensureRPC(rpc).invoke('addProjectLayer', [config]);
    }
  },
  {
    id: 'rpc.invoke.deleteProjectLayer',
    label: 'rpc.invoke("deleteProjectLayer", [name])',
    sdkCall: 'rpc.invoke("deleteProjectLayer", [name])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Project layer to delete');
      return ensureRPC(rpc).invoke('deleteProjectLayer', [name]);
    }
  },
  {
    id: 'rpc.invoke.updateLayer',
    label: 'rpc.invoke("updateLayer", [name, patch])',
    sdkCall: 'rpc.invoke("updateLayer", [name, patch])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc, giraffeState }) => {
      const name = promptForLayerName(giraffeState, 'Layer name to update');
      const patch = promptForJson('Layer patch (JSON)', { visible: true });
      return ensureRPC(rpc).invoke('updateLayer', [name, patch]);
    }
  },
  {
    id: 'rpc.invoke.setTiles',
    label: 'rpc.invoke("setTiles", [config])',
    sdkCall: 'rpc.invoke("setTiles", [config])',
    category: 'Layers',
    access: ACCESS.MUTATION,
    direct: true,
    outputId: 'layersSdkOutput',
    requiresReview: true,
    invoke: async ({ rpc }) => {
      const config = promptForJson('Tiles config (JSON)', { tiles: ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'] });
      return ensureRPC(rpc).invoke('setTiles', [config]);
    }
  }
];

// LAYER TREE (SDK) direct calls wired for the Layer Tree tab
export const layerTreeCatalogExtensions = [
	{
		id: 'rpc.invoke.activateViewLayers',
		label: 'rpc.invoke("activateViewLayers", [viewName])',
		sdkCall: 'rpc.invoke("activateViewLayers", [viewName])',
		category: 'Layer Tree',
		access: ACCESS.MUTATION,
		direct: true,
		outputId: 'layerTreeOutput',
		requiresReview: true,
		invoke: async ({ rpc, giraffeState }) => {
			const viewName = promptForViewName(giraffeState, 'View name for activateViewLayers');
			return ensureRPC(rpc).invoke('activateViewLayers', [viewName]);
		}
	},
	{
		id: 'rpc.invoke.changeLayerOpacity',
		label: 'rpc.invoke("changeLayerOpacity", [layerName, opacity])',
		sdkCall: 'rpc.invoke("changeLayerOpacity", [layerName, opacity])',
		category: 'Layer Tree',
		access: ACCESS.MUTATION,
		direct: true,
		outputId: 'layerTreeOutput',
		requiresReview: true,
		invoke: async ({ rpc, giraffeState }) => {
			const layerName = promptForLayerName(giraffeState, 'Layer name for changeLayerOpacity');
			const def = '0.75';
			const raw = typeof window !== 'undefined' ? (window.prompt('Opacity (0-1)', def) || def) : def;
			let opacity = Number.parseFloat(raw);
			if (!Number.isFinite(opacity)) opacity = 1;
			opacity = Math.max(0, Math.min(1, opacity));
			return ensureRPC(rpc).invoke('changeLayerOpacity', [layerName, opacity]);
		}
	},
	{
		id: 'rpc.invoke.createLayerGroup',
		label: 'rpc.invoke("createLayerGroup", [config])',
		sdkCall: 'rpc.invoke("createLayerGroup", [config])',
		category: 'Layer Tree',
		access: ACCESS.MUTATION,
		direct: true,
		outputId: 'layerTreeOutput',
		requiresReview: true,
		invoke: async ({ rpc }) => {
			const config = promptForJson('Layer group config (JSON)', { name: 'New Group' });
			return ensureRPC(rpc).invoke('createLayerGroup', [config]);
		}
	},
	{
		id: 'rpc.invoke.moveLayerTreeItemIntoGroup',
		label: 'rpc.invoke("moveLayerTreeItemIntoGroup", [itemName, targetGroupName])',
		sdkCall: 'rpc.invoke("moveLayerTreeItemIntoGroup", [itemName, targetGroupName])',
		category: 'Layer Tree',
		access: ACCESS.MUTATION,
		direct: true,
		outputId: 'layerTreeOutput',
		requiresReview: true,
		invoke: async ({ rpc }) => {
			const itemName = typeof window !== 'undefined' ? (window.prompt('Item name to move', '') || '').trim() : '';
			const targetGroup = typeof window !== 'undefined' ? (window.prompt('Target group name', '') || '').trim() : '';
			return ensureRPC(rpc).invoke('moveLayerTreeItemIntoGroup', [itemName, targetGroup]);
		}
	},
	{
		id: 'rpc.invoke.removeLayerGroup',
		label: 'rpc.invoke("removeLayerGroup", [groupName])',
		sdkCall: 'rpc.invoke("removeLayerGroup", [groupName])',
		category: 'Layer Tree',
		access: ACCESS.MUTATION,
		direct: true,
		outputId: 'layerTreeOutput',
		requiresReview: true,
		invoke: async ({ rpc }) => {
			const groupName = typeof window !== 'undefined' ? (window.prompt('Layer group name to remove', '') || '').trim() : '';
			return ensureRPC(rpc).invoke('removeLayerGroup', [groupName]);
		}
	},
	{
		id: 'rpc.invoke.reorderLayerTreeItem',
		label: 'rpc.invoke("reorderLayerTreeItem", [itemName, newIndex])',
		sdkCall: 'rpc.invoke("reorderLayerTreeItem", [itemName, newIndex])',
		category: 'Layer Tree',
		access: ACCESS.MUTATION,
		direct: true,
		outputId: 'layerTreeOutput',
		requiresReview: true,
		invoke: async ({ rpc }) => {
			const itemName = typeof window !== 'undefined' ? (window.prompt('Item name to reorder', '') || '').trim() : '';
			const defIdx = '0';
			const rawIdx = typeof window !== 'undefined' ? (window.prompt('New index (0-based)', defIdx) || defIdx) : defIdx;
			let newIndex = Number.parseInt(rawIdx, 10);
			if (!Number.isFinite(newIndex)) newIndex = 0;
			return ensureRPC(rpc).invoke('reorderLayerTreeItem', [itemName, newIndex]);
		}
	}
];

// Merge into main catalog for consumers expecting a single list
export const mergedFunctionCatalog = [...functionCatalog, ...layerTreeCatalogExtensions];
functionCatalog.push(...layerTreeCatalogExtensions);

export const SAFE_ACCESS_TYPES = new Set([ACCESS.READ, ACCESS.NETWORK]);