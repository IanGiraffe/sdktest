import { functionCatalog, SAFE_ACCESS_TYPES } from './functionCatalog.js';

const MAX_JSON_SNIPPET_LENGTH = 2000;
const DEFAULT_SNAPSHOT_ENDPOINT = 'http://localhost:4000/api/run-snapshots';

function formatError(error) {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return JSON.stringify(error);
}

function safeStringify(value) {
  try {
    return JSON.stringify(value, null, 2);
  } catch (error) {
    return `<<Unable to stringify: ${formatError(error)}>>`;
  }
}

function truncateSnippet(snippet) {
  if (!snippet) return '<<No data>>';
  if (snippet.length <= MAX_JSON_SNIPPET_LENGTH) return snippet;
  return `${snippet.slice(0, MAX_JSON_SNIPPET_LENGTH)}\n... truncated (${snippet.length - MAX_JSON_SNIPPET_LENGTH} characters)`;
}

function summarizeValue(value) {
  if (value === null) return 'Returned null';
  if (value === undefined) return 'Returned undefined';
  if (Array.isArray(value)) {
    return `Array(${value.length})`;
  }
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    return `Object with keys: ${keys.slice(0, 6).join(', ')}${keys.length > 6 ? ' �' : ''}`;
  }
  if (typeof value === 'string') {
    return `String (${value.length} chars)`;
  }
  return `${typeof value}: ${String(value)}`;
}

function generateMarkdown(entries) {
  if (!entries.length) {
    return '# Automation Run\n\n_No captured results yet._';
  }

  const lines = ['# Automation Run'];

  entries.forEach(entry => {
    lines.push(`\n## ${entry.label}`);
    if (entry.sdkCall) {
      lines.push(`- **SDK Call**: ${entry.sdkCall}`);
    }
    lines.push(`- **Category**: ${entry.category}`);
    lines.push(`- **Access**: ${entry.access}${entry.derived ? ' (derived)' : ''}${entry.requiresReview ? ' (human review)' : ''}`);
    lines.push(`- **Outcome**: ${entry.success ? 'Success' : `Failed � ${entry.error}`}`);
    lines.push(`- **Summary**: ${entry.summary}`);
    if (entry.notes) {
      lines.push(`- **Notes**: ${entry.notes}`);
    }
    lines.push('\n```json');
    lines.push(entry.jsonSnippet || 'null');
    lines.push('```');
  });

  return lines.join('\n');
}

function appendLogEntry(logElement, entry) {
  if (!logElement) return;
  const wrapper = document.createElement('article');
  wrapper.className = `automation-log-entry ${entry.success ? 'success' : 'error'}`;

  const header = document.createElement('header');
  header.className = 'automation-log-header';
  header.innerHTML = `
    <span class="automation-log-title">${entry.label}</span>
    <span class="automation-log-meta">${new Date(entry.timestamp).toLocaleTimeString()} � ${entry.access}${entry.derived ? ' � derived' : ''}</span>
  `;

  const summary = document.createElement('p');
  summary.className = 'automation-log-summary';
  summary.textContent = entry.summary;

  const sdkCall = document.createElement('p');
  sdkCall.className = 'automation-log-summary';
  sdkCall.textContent = entry.sdkCall ? `SDK: ${entry.sdkCall}` : 'SDK: (composite action)';

  const pre = document.createElement('pre');
  pre.className = 'automation-log-json';
  pre.textContent = entry.jsonSnippet;

  wrapper.append(header, summary, sdkCall, pre);
  logElement.prepend(wrapper);
}

function renderHumanReviewList(container, humanReviewItems) {
  if (!container) return;
  if (!humanReviewItems.length) {
    container.innerHTML = '<p>All catalogued functions may run without additional review.</p>';
    return;
  }

  const items = humanReviewItems.map(item => `
    <li>
      <strong>${item.label}</strong>
      <span class="badge">${item.access}</span>
      <div class="note">${item.notes || 'Mutating or external side-effects � review before automating.'}</div>
    </li>
  `).join('');

  container.innerHTML = `
    <p>The following actions require a human-in-the-loop decision:</p>
    <ul class="automation-review-list">${items}</ul>
  `;
}

function renderSummary(container, { total, directCount, derivedCount, safeCount, humanReviewCount }) {
  if (!container) return;
  container.innerHTML = `
    <div class="automation-stat">Total catalogued actions: <strong>${total}</strong></div>
    <div class="automation-stat">Direct SDK calls: <strong>${directCount}</strong></div>
    <div class="automation-stat">Derived/composite calls: <strong>${derivedCount}</strong></div>
    <div class="automation-stat">Automatable (read/network, direct): <strong>${safeCount}</strong></div>
    <div class="automation-stat">Human review required: <strong>${humanReviewCount}</strong></div>
  `;
}

function renderCatalogTable(container) {
  if (!container) return;
  const rows = functionCatalog.map(fn => `
    <tr>
      <td>${fn.category}</td>
      <td>${fn.label}</td>
      <td>${fn.sdkCall || '�'}</td>
      <td>${fn.access}</td>
      <td>${fn.direct ? 'Yes' : 'No'}</td>
      <td>${fn.derived ? 'Yes' : 'No'}</td>
      <td>${fn.requiresReview ? 'Yes' : 'No'}</td>
      <td>${fn.buttonId || '�'}</td>
      <td>${fn.notes || ''}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <table class="automation-catalog-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Label</th>
          <th>SDK Call</th>
          <th>Access</th>
          <th>Direct</th>
          <th>Derived</th>
          <th>Human Review</th>
          <th>Button ID</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

export function setupAutomationPanel(context) {
  const humanReviewItems = functionCatalog.filter(fn => fn.requiresReview);
  const derivedItems = functionCatalog.filter(fn => fn.derived && !fn.requiresReview);
  const safeFunctions = functionCatalog.filter(fn =>
    SAFE_ACCESS_TYPES.has(fn.access) && !fn.requiresReview && !fn.derived
  );

  const summaryEl = document.getElementById('automationSummary');
  const reviewEl = document.getElementById('humanReviewList');
  const catalogEl = document.getElementById('automationCatalog');
  const runButton = document.getElementById('runSafeFunctions');
  const clearButton = document.getElementById('clearAutomationLog');
  const statusEl = document.getElementById('automationStatus');
  const logEl = document.getElementById('automationLog');
  const docPreviewEl = document.getElementById('automationDocPreview');

  const state = {
    latestById: new Map(),
    isRunning: false
  };

  const snapshotEndpoint = (typeof window !== 'undefined' && window.AUTOMATION_SNAPSHOT_ENDPOINT)
    || DEFAULT_SNAPSHOT_ENDPOINT;

  renderSummary(summaryEl, {
    total: functionCatalog.length,
    directCount: functionCatalog.filter(fn => fn.direct).length,
    derivedCount: derivedItems.length,
    safeCount: safeFunctions.length,
    humanReviewCount: humanReviewItems.length
  });
  renderHumanReviewList(reviewEl, humanReviewItems);
  renderCatalogTable(catalogEl);

  function updateDocPreview() {
    if (!docPreviewEl) return;
    const ordered = functionCatalog
      .map(fn => state.latestById.get(fn.id))
      .filter(Boolean);
    docPreviewEl.value = generateMarkdown(ordered);
  }

  function recordResult(fn, { success, data, error }) {
    const timestamp = new Date().toISOString();
    const summary = success ? summarizeValue(data) : `Error: ${error}`;
    const snippetSource = success ? data : { error };
    const jsonSnippet = truncateSnippet(safeStringify(snippetSource));

    const entry = {
      id: fn.id,
      label: fn.label,
      category: fn.category,
      access: fn.access,
      sdkCall: fn.sdkCall,
      derived: Boolean(fn.derived),
      requiresReview: Boolean(fn.requiresReview),
      notes: fn.notes,
      timestamp,
      success,
      error,
      summary,
      jsonSnippet
    };

    state.latestById.set(fn.id, entry);
    appendLogEntry(logEl, entry);
    updateDocPreview();
  }

  function shouldAttemptSnapshot() {
    if (!docPreviewEl) return false;
    if (typeof window === 'undefined') return false;
    if (window.AUTOMATION_DISABLE_SNAPSHOT === true) return false;
    const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    return isLocalhost || Boolean(window.AUTOMATION_SNAPSHOT_ENDPOINT);
  }

  async function persistDocSnapshot(label) {
    if (!shouldAttemptSnapshot()) {
      return { skipped: true, reason: 'Snapshot skipped (non-local environment).' };
    }

    const markdown = docPreviewEl.value ?? '';
    if (!markdown.trim()) {
      return { skipped: true, reason: 'Snapshot skipped (no automation results captured).' };
    }

    const payload = {
      label,
      content: markdown,
      metadata: {
        generatedAt: new Date().toISOString(),
        totalEntries: state.latestById.size
      }
    };

    try {
      const response = await fetch(snapshotEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || `Snapshot endpoint returned ${response.status}`);
      }

      const result = await response.json();
      return { skipped: false, result };
    } catch (error) {
      throw new Error(`Snapshot request failed: ${error.message}`);
    }
  }

  async function runSafeFunctions() {
    if (state.isRunning) return;
    state.isRunning = true;

    if (statusEl) {
      statusEl.textContent = `Running ${safeFunctions.length} direct read/network SDK calls.`;
    }

    try {
      for (const fn of safeFunctions) {
        if (statusEl) {
          statusEl.textContent = `Running ${fn.label}.`;
        }
        try {
          const data = await fn.invoke(context);
          recordResult(fn, { success: true, data });
        } catch (error) {
          recordResult(fn, { success: false, error: formatError(error) });
        }
      }

      let snapshotMessage = 'Safe run complete.';
      try {
        const snapshot = await persistDocSnapshot('safe');
        if (snapshot?.skipped) {
          snapshotMessage = `Safe run complete. ${snapshot.reason}`;
        } else if (snapshot?.result?.relativePath || snapshot?.result?.filename) {
          const location = snapshot.result.relativePath || snapshot.result.filename;
          snapshotMessage = `Safe run complete. Snapshot saved as ${location}.`;
        }
      } catch (error) {
        console.warn('Automation snapshot failed', error);
        snapshotMessage = `Safe run complete. ${error.message}`;
      }

      if (statusEl) {
        statusEl.textContent = snapshotMessage;
      }
    } finally {
      state.isRunning = false;
    }
  }
  function clearAutomationLog() {
    state.latestById.clear();
    if (logEl) {
      logEl.innerHTML = '';
    }
    if (statusEl) {
      statusEl.textContent = 'Log cleared.';
    }
    updateDocPreview();
  }

  runButton?.addEventListener('click', runSafeFunctions);
  clearButton?.addEventListener('click', clearAutomationLog);

  updateDocPreview();

  return {
    runSafeFunctions,
    clearAutomationLog,
    state,
    safeFunctions,
    humanReviewItems
  };
}