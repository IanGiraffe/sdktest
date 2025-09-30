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
];

export const SAFE_ACCESS_TYPES = new Set([ACCESS.READ, ACCESS.NETWORK]);