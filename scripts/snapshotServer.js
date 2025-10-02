const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = Number(process.env.SNAPSHOT_PORT || 4000);
const RUNS_DIR = path.join(__dirname, '..', 'giraffe_docs', 'runs');
const ALLOWED_METHODS = new Set(['POST', 'OPTIONS']);

function ensureRunsDir() {
  fs.mkdirSync(RUNS_DIR, { recursive: true });
}

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(payload);
}

function sanitizeLabel(label = 'snapshot') {
  if (typeof label !== 'string' || !label.trim()) {
    return 'snapshot';
  }
  return label.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40) || 'snapshot';
}

function buildFilename(label) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  return ${timestamp}-.md;
}

function handlePost(req, res) {
  let raw = '';
  req.on('data', chunk => {
    raw += chunk;
    if (raw.length > 5 * 1024 * 1024) {
      req.destroy();
    }
  });

  req.on('end', () => {
    let parsed;
    try {
      parsed = raw ? JSON.parse(raw) : {};
    } catch (error) {
      sendJson(res, 400, { ok: false, error: 'Invalid JSON body' });
      return;
    }

    const { content, label = 'safe', metadata } = parsed;

    if (typeof content !== 'string' || !content.trim()) {
      sendJson(res, 400, { ok: false, error: 'content (markdown string) is required' });
      return;
    }

    ensureRunsDir();
    const filename = buildFilename(label);
    const fullPath = path.join(RUNS_DIR, filename);

    fs.writeFile(fullPath, content, 'utf8', error => {
      if (error) {
        sendJson(res, 500, { ok: false, error: error.message });
        return;
      }
      sendJson(res, 200, {
        ok: true,
        filename,
        relativePath: path.relative(process.cwd(), fullPath),
        metadata: metadata ?? null
      });
    });
  });
}

const server = http.createServer((req, res) => {
  if (!ALLOWED_METHODS.has(req.method)) {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  if (req.url === '/api/run-snapshots') {
    handlePost(req, res);
    return;
  }

  sendJson(res, 404, { ok: false, error: 'Not found' });
});

server.listen(PORT, () => {
  console.log([snapshot-server] Listening on http://localhost:);
  console.log([snapshot-server] Writing markdown files into );
});
