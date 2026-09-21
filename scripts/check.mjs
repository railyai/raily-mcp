import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = p => readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const pkg = json('package.json');
const endpoint = 'https://railyai.com/mcp';
for (const file of ['plugin.json', '.cursor-plugin/plugin.json', 'openclaw.plugin.json', 'server.json']) {
  assert.equal(json(file).version, pkg.version, `${file}: version mismatch`);
  assert.ok(!/read-only/i.test(json(file).description), `${file}: stale description`);
}
assert.match(read('skills/raily/SKILL.md'), new RegExp(`^version: ${pkg.version.replaceAll('.', '\\.')}\\s*$`, 'm'));
assert.equal(pkg.name, '@railyai/raily');
assert.equal(json('server.json').name, 'io.github.railyai/raily');
assert.ok(json('server.json').description.length <= 100, 'MCP Registry description must be at most 100 characters');
assert.deepEqual(json('server.json').remotes, [{ type: 'streamable-http', url: endpoint }]);
assert.ok(!json('server.json').packages, 'Bundle must not be advertised as an executable stdio server');
assert.deepEqual(json('mcp.json').mcpServers.raily, { type: 'streamable-http', url: endpoint });
assert.deepEqual(json('cursor-mcp.example.json').mcpServers.raily, { url: endpoint });
const tools = json('mcp-tools.json');
assert.ok(tools.length > 0);
assert.equal(new Set(tools.map(t => t.name)).size, tools.length);
for (const t of tools) {
  assert.match(t.name, /^[a-z][a-z0-9_]+$/);
  assert.equal(typeof t.mutating, 'boolean');
  assert.equal(typeof t.summary, 'string');
}
const documented = [...read('TOOLS.md').matchAll(/^\| `([^`]+)` \|/gm)].map(m => m[1]);
assert.deepEqual(documented, tools.map(t => t.name));
for (const path of ['README.md', 'skills/raily/SKILL.md', 'TOOLS.md']) {
  assert.ok(read(path).includes(`${tools.length}`), `${path}: stale tool count`);
}
assert.equal(tools.find(t => t.name === 'request_analysis_link')?.mutating, true);
for (const file of pkg.files) assert.ok(existsSync(file), `Missing package file: ${file}`);
for (const linkedFile of ['TOOLS.md', 'PUBLISHING.md', 'CHANGELOG.md']) {
  assert.ok(pkg.files.includes(linkedFile), `README-linked file missing from package: ${linkedFile}`);
}
assert.ok(!pkg.bin && !pkg.main && !pkg.dependencies, 'This is a declarative bundle, not a runtime');
console.log(`Bundle ${pkg.version}: manifest, permissions, endpoint and ${tools.length}-tool catalog checks passed`);
