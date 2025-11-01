import { functionCatalog } from '../automation/functionCatalog.js';
import { displayOutput } from './ui.js';

function catalogById() {
  const map = new Map();
  functionCatalog.forEach(fn => map.set(fn.id, fn));
  return map;
}

function makeHandler(fn) {
  if (!fn || typeof fn.invoke !== 'function') return null;
  return async (context) => fn.invoke(context);
}

export function renderSdkModules(context) {
  const byId = catalogById();

  const modules = [
    {
      key: 'commands',
      containerId: 'commandsButtons',
      outputId: 'commandsOutput',
      items: [
        { name: 'getLassoedLensedFeatures', handler: makeHandler(byId.get('rpc.invoke.getLassoedLensedFeatures')) },
        { name: 'getLassoedProjectFeatures', handler: makeHandler(byId.get('rpc.invoke.getLassoedProjectFeatures')) },
        { name: 'getLassoShape', handler: makeHandler(byId.get('rpc.invoke.getLassoShape')) },
        { name: 'getLensedFeatureMap', handler: makeHandler(byId.get('rpc.invoke.getLensedFeatureMap')) },
        { name: 'getSelectableProjectFeatures', handler: makeHandler(byId.get('rpc.invoke.getSelectableProjectFeatures')) },
        { name: 'getUserDrawnPolygon', handler: makeHandler(byId.get('rpc.invoke.getUserDrawnPolygon')) }
      ]
    },
    {
      key: 'layers',
      containerId: 'layersSdkButtons',
      outputId: 'layersSdkOutput',
      items: [
        { name: 'activateDrawingLayer', handler: makeHandler(byId.get('rpc.invoke.activateDrawingLayer')) },
        { name: 'activateLensLayer', handler: makeHandler(byId.get('rpc.invoke.activateLensLayer')) },
        { name: 'addProjectLayer', handler: makeHandler(byId.get('rpc.invoke.addProjectLayer')) },
        { name: 'addTempLayer', handler: makeHandler(byId.get('rpc.invoke.addTempLayer')) },
        { name: 'addTempLayerGeoJSON', handler: makeHandler(byId.get('rpc.invoke.addTempLayerGeoJSON')) },
        { name: 'createDrawingLayer', handler: makeHandler(byId.get('rpc.invoke.createDrawingLayer')) },
        { name: 'createGeoJSONLayer', handler: makeHandler(byId.get('rpc.invoke.createGeoJSONLayer')) },
        { name: 'createLayer', handler: makeHandler(byId.get('rpc.invoke.createLayer')) },
        { name: 'deactivateLensLayer', handler: makeHandler(byId.get('rpc.invoke.deactivateLensLayer')) },
        { name: 'deleteDrawingLayer', handler: makeHandler(byId.get('rpc.invoke.deleteDrawingLayer')) },
        { name: 'deleteProjectLayer', handler: makeHandler(byId.get('rpc.invoke.deleteProjectLayer')) },
        { name: 'duplicateDrawingLayer', handler: makeHandler(byId.get('rpc.invoke.duplicateDrawingLayer')) },
        { name: 'getLayerContents', handler: makeHandler(byId.get('composite.layer.testLayerContents')) },
        { name: 'getLayerPermission', handler: makeHandler(byId.get('rpc.invoke.getLayerPermission')) },
        { name: 'removeTempLayer', handler: makeHandler(byId.get('rpc.invoke.removeTempLayer')) },
        { name: 'renameDrawingLayer', handler: makeHandler(byId.get('rpc.invoke.renameDrawingLayer')) },
        { name: 'setTiles', handler: makeHandler(byId.get('rpc.invoke.setTiles')) },
        { name: 'toggleLensLayer', handler: makeHandler(byId.get('rpc.invoke.toggleLensLayer')) },
        { name: 'updateGeoJSONLayerContents', handler: makeHandler(byId.get('rpc.invoke.updateGeoJSONLayerContents')) },
        { name: 'updateLayer', handler: makeHandler(byId.get('rpc.invoke.updateLayer')) },
        { name: 'updateLayerStyle', handler: makeHandler(byId.get('rpc.invoke.updateLayerStyle')) },
        { name: 'updateTempLayerGeoJSON', handler: makeHandler(byId.get('rpc.invoke.updateTempLayerGeoJSON')) }
      ]
    },
    {
      key: 'layerTree',
      containerId: 'layerTreeButtons',
      outputId: 'layerTreeOutput',
      items: [
        { name: 'activateViewLayers' },
        { name: 'changeLayerOpacity' },
        { name: 'createLayerGroup' },
        { name: 'moveLayerTreeItemIntoGroup' },
        { name: 'removeLayerGroup' },
        { name: 'reorderLayerTreeItem' }
      ]
    },
    {
      key: 'map',
      containerId: 'mapSdkButtons',
      outputId: 'mapSdkOutput',
      items: [
        { name: 'addHtmlPopup' },
        { name: 'addIframePopup' },
        { name: 'clearSDKPopup' },
        { name: 'fitBounds' },
        { name: 'flyTo' },
        { name: 'getFeatureState' },
        { name: 'getMapBounds' },
        { name: 'getQueriedFeature' },
        { name: 'getSelectedFeatures', handler: makeHandler(byId.get('rpc.invoke.getSelectedFeatures')) },
        { name: 'loadImage' },
        { name: 'queryRenderedFeatures' },
        { name: 'removeFeatureState' },
        { name: 'setDrawTool' },
        { name: 'setFeatureState' },
        { name: 'setHighlightedFeatures' },
        { name: 'setSelectedFeatures' }
      ]
    },
    {
      key: 'misc',
      containerId: 'miscButtons',
      outputId: 'miscOutput',
      items: [
        { name: 'addMapboxEventListener' },
        { name: 'clearIsolatedFeatures' },
        { name: 'disableBottomBarIframe' },
        { name: 'disableIsolateMode' },
        { name: 'disableMapContentEvents' },
        { name: 'disableMapHover' },
        { name: 'disableSecondaryAppOverlay' },
        { name: 'enableBottomBarIframe' },
        { name: 'enableIsolateMode' },
        { name: 'enableMapContentEvents' },
        { name: 'enableMapHover' },
        { name: 'enableSecondaryAppOverlay' },
        { name: 'featureArea' },
        { name: 'fetchProjectDetails' },
        { name: 'fetchProjectFiles' },
        { name: 'fetchUserFiles' },
        { name: 'fetchVistas' },
        { name: 'fromProjected' },
        { name: 'getAnalyticsResult', handler: makeHandler(byId.get('rpc.invoke.getAnalyticsResult')) },
        { name: 'getAutoUsage' },
        { name: 'getAutoUsageMode' },
        { name: 'getGeoTiff' },
        { name: 'getGltf' },
        { name: 'getIsolatedFeatures' },
        { name: 'getIsolateMode' },
        { name: 'getPng' },
        { name: 'getSceneTransform' },
        { name: 'getSourceLayerDetails' },
        { name: 'getTeamList' },
        { name: 'getTempUrl' },
        { name: 'getTerrainMeshes' },
        { name: 'getThreeScene' },
        { name: 'getTiles' },
        { name: 'getUrlParams' },
        { name: 'getUserClaimsJwt' },
        { name: 'getVectorLayerContents' },
        { name: 'readyToClose' },
        { name: 'removeMapboxEventListener' },
        { name: 'setAutoUsage' },
        { name: 'setAutoUsageMode' },
        { name: 'setContextMenuItems' },
        { name: 'setIsolatedFeatures' },
        { name: 'setTopView' },
        { name: 'toProjected' },
        { name: 'updateUiLayout' }
      ]
    },
    {
      key: 'project',
      containerId: 'projectSdkButtons',
      outputId: 'projectSdkOutput',
      items: [
        { name: 'addFlowDag' },
        { name: 'createRawSection' },
        { name: 'createRawSections' },
        { name: 'deleteFlowDag' },
        { name: 'deleteRawSection' },
        { name: 'deleteRawSections' },
        { name: 'getProjectApp' },
        { name: 'getProjectAttachmentPrompt' },
        { name: 'importRawSections' },
        { name: 'openProject' },
        { name: 'selectProjectAttachmentPrompt' },
        { name: 'updateFlowDags' },
        { name: 'updateProjectApp' },
        { name: 'updateRawSection' },
        { name: 'updateRawSections' },
        { name: 'uploadProjectAttachment' }
      ]
    },
    {
      key: 'projects',
      containerId: 'projectsSdkButtons',
      outputId: 'projectsSdkOutput',
      items: [
        { name: 'createProject' },
        { name: 'getProjectBundle' },
        { name: 'getProjects' },
        { name: 'patchProperties' },
        { name: 'shareWithTeam' },
        { name: 'syncToProjects' },
        { name: 'updateProject' }
      ]
    }
  ];

  function renderModule(module) {
    const container = document.getElementById(module.containerId);
    const outputEl = document.getElementById(module.outputId);
    if (!container) return;

    container.innerHTML = '';
    module.items.forEach(item => {
      const btn = document.createElement('button');
      btn.textContent = item.name;
      btn.dataset.funcName = item.name.toLowerCase();
      btn.dataset.module = module.key;
      if (!item.handler) {
        btn.disabled = true;
      } else {
        btn.addEventListener('click', async () => {
          try {
            // Mark this button as active and clear others in this module container
            Array.from(container.querySelectorAll('button.active-output')).forEach(b => b.classList.remove('active-output'));
            btn.classList.add('active-output');
            const data = await item.handler(context);
            if (outputEl) displayOutput(module.outputId, data);
          } catch (err) {
            if (outputEl) displayOutput(module.outputId, { error: err instanceof Error ? err.message : String(err) });
          }
        });
      }
      container.appendChild(btn);
    });
  }

  modules.forEach(renderModule);

  // Custom tab: render all derived/composite actions with their labels
  const customContainer = document.getElementById('customButtons');
  const customOutputId = 'customOutput';
  if (customContainer) {
    const derived = functionCatalog.filter(fn => fn.derived);
    derived.forEach(fn => {
      const btn = document.createElement('button');
      btn.textContent = fn.label;
      btn.dataset.funcName = (fn.id || fn.label || '').toLowerCase();
      btn.dataset.module = 'custom';
      btn.addEventListener('click', async () => {
        try {
          // Highlight within the custom container
          Array.from(customContainer.querySelectorAll('button.active-output')).forEach(b => b.classList.remove('active-output'));
          btn.classList.add('active-output');
          const data = await fn.invoke(context);
          displayOutput(customOutputId, data);
        } catch (err) {
          displayOutput(customOutputId, { error: err instanceof Error ? err.message : String(err) });
        }
      });
      customContainer.appendChild(btn);
    });
  }
}

export function setupFunctionSearch() {
  const input = document.getElementById('functionSearch');
  const results = document.getElementById('functionSearchResults');
  if (!input) return;

  const allButtons = () => Array.from(document.querySelectorAll('.button-grid button'));

  function applyFilter(query) {
    const q = (query || '').trim().toLowerCase();
    const buttons = allButtons();
    if (!q) {
      buttons.forEach(b => b.style.display = '');
      if (results) {
        results.innerHTML = '';
        results.classList.add('hidden');
      }
      return [];
    }
    const matches = [];
    buttons.forEach(b => {
      const text = (b.dataset.funcName || b.textContent || '').toLowerCase();
      const matched = text.includes(q);
      b.style.display = matched ? '' : 'none';
      if (matched) {
        const panel = b.closest('.tab-content');
        const panelId = panel ? panel.id : '';
        const tab = panelId ? document.querySelector(`.tab[data-target="#${panelId}"]`) : null;
        matches.push({
          button: b,
          name: b.textContent.trim(),
          nameKey: text,
          module: b.dataset.module || 'unknown',
          panelId,
          tab
        });
      }
    });
    if (results) {
      renderResults(matches.slice(0, 30));
    }
    return matches;
  }

  input.addEventListener('input', () => applyFilter(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      applyFilter('');
    }
    if (e.key === 'Enter') {
      const q = input.value.trim().toLowerCase();
      if (!q) return;
      const matches = applyFilter(q);
      const first = matches[0]?.button || allButtons().find(b => b.style.display !== 'none' && ((b.dataset.funcName || b.textContent || '').toLowerCase().includes(q)));
      if (first) {
        const panel = first.closest('.tab-content');
        if (panel) {
          const tab = document.querySelector(`.tab[data-target="#${panel.id}"]`);
          tab?.click();
          setTimeout(() => first.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
        }
      }
    }
  });

  function renderResults(matches) {
    if (!results) return;
    if (!matches.length) {
      results.innerHTML = '';
      results.classList.add('hidden');
      return;
    }
    const html = matches.map(m => `
      <div class="result-item" data-panel="${m.panelId}">
        <span class="result-name">${m.name}</span>
        <span class="result-module">${m.module}</span>
      </div>
    `).join('');
    results.innerHTML = html;
    results.classList.remove('hidden');
    Array.from(results.querySelectorAll('.result-item')).forEach((el, idx) => {
      el.addEventListener('click', () => {
        const panelId = el.getAttribute('data-panel');
        const panel = document.getElementById(panelId);
        if (panel) {
          const tab = document.querySelector(`.tab[data-target="#${panelId}"]`);
          tab?.click();
          const match = matches[idx];
          setTimeout(() => match.button.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
        }
      });
    });
  }
}


