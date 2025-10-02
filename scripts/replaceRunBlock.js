const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'automation', 'setupAutomation.js');
let content = fs.readFileSync(filePath, 'utf8');

const oldRunBlock = [
  '  async function runSafeFunctions() {',
  '    if (state.isRunning) return;',
  '    state.isRunning = true;',
  '',
  '    if (statusEl) {',
  '      statusEl.textContent = `Running ${safeFunctions.length} direct read/network SDK calls.`;',
  '    }',
  '',
  '    for (const fn of safeFunctions) {',
  '      if (statusEl) {',
  '        statusEl.textContent = `Running ${fn.label}.`;',
  '      }',
  '      try {',
  '        const data = await fn.invoke(context);',
  '        recordResult(fn, { success: true, data });',
  '      } catch (error) {',
  '        recordResult(fn, { success: false, error: formatError(error) });',
  '      }',
  '    }',
  '',
  '    if (statusEl) {',
  "      statusEl.textContent = 'Safe run complete.';",
  '    }',
  '    state.isRunning = false;',
  '  }'
].join('\r\n');

const newRunBlock = [
  '  async function runSafeFunctions() {',
  '    if (state.isRunning) return;',
  '    state.isRunning = true;',
  '',
  '    if (statusEl) {',
  '      statusEl.textContent = `Running ${safeFunctions.length} direct read/network SDK calls.`;',
  '    }',
  '',
  '    try {',
  '      for (const fn of safeFunctions) {',
  '        if (statusEl) {',
  '          statusEl.textContent = `Running ${fn.label}.`;',
  '        }',
  '        try {',
  '          const data = await fn.invoke(context);',
  '          recordResult(fn, { success: true, data });',
  '        } catch (error) {',
  '          recordResult(fn, { success: false, error: formatError(error) });',
  '        }',
  '      }',
  '',
  "      let snapshotMessage = 'Safe run complete.';",
  '      try {',
  "        const snapshot = await persistDocSnapshot('safe');",
  '        if (snapshot?.skipped) {',
  '          snapshotMessage = `Safe run complete. ${snapshot.reason}`;',
  '        } else if (snapshot?.result?.relativePath || snapshot?.result?.filename) {',
  '          const location = snapshot.result.relativePath || snapshot.result.filename;',
  '          snapshotMessage = `Safe run complete. Snapshot saved as ${location}.`;',
  '        }',
  '      } catch (error) {',
  "        console.warn('Automation snapshot failed', error);",
  '        snapshotMessage = `Safe run complete. ${error.message}`;',
  '      }',
  '',
  '      if (statusEl) {',
  '        statusEl.textContent = snapshotMessage;',
  '      }',
  '    } finally {',
  '      state.isRunning = false;',
  '    }',
  '  }'
].join('\r\n');

if (!content.includes(oldRunBlock)) {
  throw new Error('Original runSafeFunctions block not found');
}

content = content.replace(oldRunBlock, newRunBlock);

fs.writeFileSync(filePath, content, 'utf8');
