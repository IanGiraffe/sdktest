import pathlib

path = pathlib.Path('src/automation/setupAutomation.js')
text = path.read_text(encoding='utf-8')

orig_const = "const MAX_JSON_SNIPPET_LENGTH = 2000;\r\n\r\n"
if orig_const not in text:
    raise SystemExit('MAX constant pattern not found')
text = text.replace(orig_const, "const MAX_JSON_SNIPPET_LENGTH = 2000;\r\nconst DEFAULT_SNAPSHOT_ENDPOINT = 'http://localhost:4000/api/run-snapshots';\r\n\r\n", 1)

state_orig = "  const state = {\r\n    latestById: new Map(),\r\n    isRunning: false\r\n  };\r\n\r\n  renderSummary"
state_repl = "  const state = {\r\n    latestById: new Map(),\r\n    isRunning: false\r\n  };\r\n\r\n  const snapshotEndpoint = (typeof window !== 'undefined' && window.AUTOMATION_SNAPSHOT_ENDPOINT)\r\n    || DEFAULT_SNAPSHOT_ENDPOINT;\r\n\r\n  renderSummary"
if state_orig not in text:
    raise SystemExit('state block pattern not found')
text = text.replace(state_orig, state_repl, 1)

run_orig = "  async function runSafeFunctions() {\r\n    if (state.isRunning) return;\r\n    state.isRunning = true;\r\n\r\n    if (statusEl) {\r\n      statusEl.textContent = `Running ${safeFunctions.length} direct read/network SDK calls.`;\r\n    }\r\n\r\n    for (const fn of safeFunctions) {\r\n      if (statusEl) {\r\n        statusEl.textContent = `Running ${fn.label}.`;\r\n      }\r\n      try {\r\n        const data = await fn.invoke(context);\r\n        recordResult(fn, { success: true, data });\r\n      } catch (error) {\r\n        recordResult(fn, { success: false, error: formatError(error) });\r\n      }\r\n    }\r\n\r\n    if (statusEl) {\r\n      statusEl.textContent = 'Safe run complete.';\r\n    }\r\n    state.isRunning = false;\r\n  }"

run_repl = "  function shouldAttemptSnapshot() {\r\n    if (!docPreviewEl) return false;\r\n    if (typeof window === 'undefined') return false;\r\n    if (window.AUTOMATION_DISABLE_SNAPSHOT === true) return false;\r\n    const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);\r\n    return isLocalhost || Boolean(window.AUTOMATION_SNAPSHOT_ENDPOINT);\r\n  }\r\n\r\n  async function persistDocSnapshot(label) {\r\n    if (!shouldAttemptSnapshot()) {\r\n      return { skipped: true, reason: 'Snapshot skipped (non-local environment).' };\r\n    }\r\n\r\n    const markdown = docPreviewEl.value ?? '';\r\n    if (!markdown.trim()) {\r\n      return { skipped: true, reason: 'Snapshot skipped (no automation results captured).' };\r\n    }\r\n\r\n    const payload = {\r\n      label,\r\n      content: markdown,\r\n      metadata: {\r\n        generatedAt: new Date().toISOString(),\r\n        totalEntries: state.latestById.size\r\n      }\r\n    };\r\n\r\n    try {\r\n      const response = await fetch(snapshotEndpoint, {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify(payload)\r\n      });\r\n\r\n      if (!response.ok) {\r\n        const message = await response.text();\r\n        throw new Error(message || `Snapshot endpoint returned ${response.status}`);\r\n      }\r\n\r\n      const result = await response.json();\r\n      return { skipped: false, result };\r\n    } catch (error) {\r\n      throw new Error(`Snapshot request failed: ${error.message}`);\r\n    }\r\n  }\r\n\r\n  async function runSafeFunctions() {\r\n    if (state.isRunning) return;\r\n    state.isRunning = true;\r\n\r\n    if (statusEl) {\r\n      statusEl.textContent = `Running ${safeFunctions.length} direct read/network SDK calls.`;\r\n    }\r\n\r\n    try {\r\n      for (const fn of safeFunctions) {\r\n        if (statusEl) {\r\n          statusEl.textContent = `Running ${fn.label}.`;\r\n        }\r\n        try {\r\n          const data = await fn.invoke(context);\r\n          recordResult(fn, { success: true, data });\r\n        } catch (error) {\r\n          recordResult(fn, { success: false, error: formatError(error) });\r\n        }\r\n      }\r\n\r\n      let snapshotMessage = 'Safe run complete.';\r\n      try {\r\n        const snapshot = await persistDocSnapshot('safe');\r\n        if (snapshot?.skipped) {\r\n          snapshotMessage = `Safe run complete. ${snapshot.reason}`;\r\n        } else if (snapshot?.result?.relativePath || snapshot?.result?.filename) {\r\n          const location = snapshot.result.relativePath || snapshot.result.filename;\r\n          snapshotMessage = `Safe run complete. Snapshot saved as ${location}.`;\r\n        }\r\n      } catch (error) {\r\n        console.warn('Automation snapshot failed', error);\r\n        snapshotMessage = `Safe run complete. ${error.message}`;\r\n      }\r\n\r\n      if (statusEl) {\r\n        statusEl.textContent = snapshotMessage;\r\n      }\r\n    } finally {\r\n      state.isRunning = false;\r\n    }\r\n  }"

if run_orig not in text:
    raise SystemExit('runSafeFunctions block not found')
text = text.replace(run_orig, run_repl, 1)

path.write_text(text, encoding='utf-8')
