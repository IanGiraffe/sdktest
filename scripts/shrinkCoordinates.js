const fs = require('fs');
const path = require('path');

/**
 * Streaming transformer that replaces any direct geometry.coordinates value
 * (array/object/string/primitive) with the JSON string "...coordinate".
 *
 * It preserves all other content/whitespace verbatim to keep formatting intact
 * while drastically shortening the file size.
 */

if (process.argv.length < 4) {
  console.error('Usage: node scripts/shrinkCoordinates.js <input.json> <output.json>');
  process.exit(1);
}

const inputPath = path.resolve(process.argv[2]);
const outputPath = path.resolve(process.argv[3]);

const inStream = fs.createReadStream(inputPath, { encoding: 'utf8', highWaterMark: 1024 * 1024 });
const outStream = fs.createWriteStream(outputPath, { encoding: 'utf8' });

let buffer = '';
let i = 0;            // current index in buffer
let flushIndex = 0;   // last index flushed to output

let inString = false;
let escapeNext = false;
let stringQuote = '"';

// JSON stack frames
// type: 'object' | 'array'
// isGeometryRoot: boolean (true only for the object that is the value of a "geometry" key)
// pendingKey: string | null (for objects)
// state: 'expectKey' | 'afterKeyWaitColon' | 'expectValue' | 'other'
const stack = [];

// Replacement/skip state
let skipping = false;
let skipKind = null; // 'string' | 'array' | 'object' | 'literal'
let bracketDepth = 0; // for arrays
let braceDepth = 0;   // for objects
let literalEnded = false; // for true/false/null/number
let resumeFlushAt = 0;    // index to set flushIndex when skip completes
let replacements = 0;

function writeThrough(untilIndex) {
  if (untilIndex > flushIndex) {
    outStream.write(buffer.slice(flushIndex, untilIndex));
    flushIndex = untilIndex;
  }
}

function beginCoordinatesReplacement(valueStartIdx) {
  // Write everything up to the value start, then the placeholder string
  writeThrough(valueStartIdx);
  outStream.write('"...coordinate"');
  flushIndex = valueStartIdx; // we will advance this to end of value when skipping completes
  replacements++;
}

function startSkipForValueAtChar(ch) {
  skipping = true;
  resumeFlushAt = null; // will be set once we locate end
  literalEnded = false;
  bracketDepth = 0;
  braceDepth = 0;

  if (ch === '"') {
    skipKind = 'string';
    // entering string; initialize string state local to skipping
    // Reuse the global string states during skip to stay consistent
    inString = true;
    stringQuote = '"';
    escapeNext = false;
  } else if (ch === '[') {
    skipKind = 'array';
    bracketDepth = 1;
  } else if (ch === '{') {
    skipKind = 'object';
    braceDepth = 1;
  } else {
    skipKind = 'literal';
  }
}

function processSkipChar(c, idx) {
  if (skipKind === 'string') {
    if (escapeNext) {
      escapeNext = false;
      return false;
    }
    if (c === '\\') {
      escapeNext = true;
      return false;
    }
    if (c === '"') {
      // end of string value
      inString = false;
      resumeFlushAt = idx + 1;
      return true;
    }
    return false;
  }
  if (skipKind === 'array') {
    if (inString) {
      if (escapeNext) { escapeNext = false; return false; }
      if (c === '\\') { escapeNext = true; return false; }
      if (c === '"') { inString = false; }
      return false;
    } else {
      if (c === '"') { inString = true; escapeNext = false; return false; }
      if (c === '[') { bracketDepth++; return false; }
      if (c === ']') { bracketDepth--; if (bracketDepth === 0) { resumeFlushAt = idx + 1; return true; } return false; }
      return false;
    }
  }
  if (skipKind === 'object') {
    if (inString) {
      if (escapeNext) { escapeNext = false; return false; }
      if (c === '\\') { escapeNext = true; return false; }
      if (c === '"') { inString = false; }
      return false;
    } else {
      if (c === '"') { inString = true; escapeNext = false; return false; }
      if (c === '{') { braceDepth++; return false; }
      if (c === '}') { braceDepth--; if (braceDepth === 0) { resumeFlushAt = idx + 1; return true; } return false; }
      return false;
    }
  }
  // literal (number/true/false/null): ends on comma or close of container or whitespace after token
  if (!literalEnded) {
    // detect end of literal by encountering a delimiter
    if (c === ',' || c === '}' || c === ']' || c === '\n' || c === '\r' || c === '\t' || c === ' ') {
      literalEnded = true;
      resumeFlushAt = idx; // do not consume delimiter
      return true;
    }
    return false;
  }
  return false;
}

function finishSkipIfDone() {
  if (!skipping || resumeFlushAt == null) return false;
  // Move flush index to after original value
  flushIndex = resumeFlushAt;
  skipping = false;
  skipKind = null;
  resumeFlushAt = null;
  literalEnded = false;
  bracketDepth = 0;
  braceDepth = 0;
  return true;
}

function topFrame() {
  return stack.length ? stack[stack.length - 1] : null;
}

function processChunk() {
  for (; i < buffer.length; i++) {
    const c = buffer[i];

    if (skipping) {
      if (processSkipChar(c, i)) {
        finishSkipIfDone();
      }
      continue;
    }

    if (inString) {
      if (escapeNext) {
        escapeNext = false;
      } else if (c === '\\') {
        escapeNext = true;
      } else if (c === stringQuote) {
        inString = false;
        // If we just parsed a key string when expecting a key
        const tf = topFrame();
        if (tf && tf.type === 'object' && tf.state === 'readingKey') {
          tf.pendingKey = currentToken;
          tf.state = 'afterKeyWaitColon';
        }
      } else {
        // accumulate string content for key tokens only
        if (collectingStringForKey) {
          currentToken += c;
        }
      }
      continue;
    }

    // Not in string and not skipping
    if (c === '"') {
      // Potentially a key string if inside object and expecting key
      const tf = topFrame();
      collectingStringForKey = !!(tf && tf.type === 'object' && tf.state === 'expectKey');
      currentToken = '';
      inString = true;
      stringQuote = '"';
      escapeNext = false;
      if (collectingStringForKey) {
        // Mark that we are reading a key now
        tf.state = 'readingKey';
      }
      continue;
    }

    // structural tokens
    if (c === '{') {
      const parent = topFrame();
      const parentIsObject = !!(parent && parent.type === 'object');
      const isGeometryRoot = parentIsObject && parent.pendingKey === 'geometry';
      stack.push({ type: 'object', isGeometryRoot, pendingKey: null, state: 'expectKey' });
      continue;
    }
    if (c === '}') {
      // close current object
      const closed = stack.pop();
      // After closing an object that was a value of some key, parent remains in place; comma will handle next key
      // Reset any transient key-reading states
      collectingStringForKey = false;
      currentToken = '';
      continue;
    }
    if (c === '[') {
      // arrays don't affect key parsing inside objects, but we track them on stack to remain structurally aware if needed
      const parent = topFrame();
      stack.push({ type: 'array', isGeometryRoot: false, pendingKey: null, state: 'other' });
      continue;
    }
    if (c === ']') {
      stack.pop();
      continue;
    }
    if (c === ':') {
      const tf = topFrame();
      if (tf && tf.type === 'object' && tf.state === 'afterKeyWaitColon') {
        tf.state = 'expectValue';
      }
      continue;
    }
    if (c === ',') {
      const tf = topFrame();
      if (tf && tf.type === 'object') {
        tf.state = 'expectKey';
        tf.pendingKey = null;
      }
      continue;
    }

    // When expecting a value, check for coordinates replacement on first non-whitespace char
    const tf = topFrame();
    if (tf && tf.type === 'object' && tf.state === 'expectValue') {
      if (c === ' ' || c === '\t' || c === '\n' || c === '\r') {
        continue; // still before the value
      }
      // First char of the value encountered
      const shouldReplace = tf.isGeometryRoot && tf.pendingKey === 'coordinates';
      if (shouldReplace) {
        // Perform replacement and start skipping original value
        beginCoordinatesReplacement(i);
        startSkipForValueAtChar(c);
        // After skip completes, mark object ready for next key
        tf.state = 'afterValue';
        tf.pendingKey = null;
        // Continue loop, processSkipChar will advance until end of value
        if (processSkipChar(c, i)) {
          finishSkipIfDone();
        }
        continue;
      } else {
        // Not replacing this value; for primitives we could set state but not required
        tf.state = 'other';
      }
    }
    // All other characters fall through as plain content
  }
}

let collectingStringForKey = false;
let currentToken = '';

inStream.on('data', (chunk) => {
  buffer += chunk;
  processChunk();
  // Flush safe portion of buffer to output to avoid memory bloat
  if (flushIndex > 0) {
    const cut = flushIndex;
    // Keep only unflushed tail in buffer
    buffer = buffer.slice(cut);
    i -= cut;
    // If we are in the middle of skipping a value and have already
    // computed an absolute resumeFlushAt, adjust it to the sliced buffer.
    if (skipping && resumeFlushAt != null) {
      resumeFlushAt -= cut;
    }
    flushIndex = 0;
  }
});

inStream.on('end', () => {
  // Finish any pending skip (for literals that end at EOF)
  if (skipping && skipKind === 'literal') {
    resumeFlushAt = i; // end of buffer
    finishSkipIfDone();
  }
  // Write remaining
  writeThrough(buffer.length);
  outStream.end();
  console.error(`Replacements made: ${replacements}`);
});

inStream.on('error', (err) => {
  console.error('Read error:', err);
  process.exitCode = 1;
});

outStream.on('error', (err) => {
  console.error('Write error:', err);
  process.exitCode = 1;
});


