const fs = require('fs');
const text = fs.readFileSync('src/automation/setupAutomation.js', 'utf8');
const start = text.indexOf('  async function runSafeFunctions() {');
const snippet = text.slice(start, start + 400);
console.log(JSON.stringify(snippet));
