// Prove these build fixes do not change runtime routing or public page behavior.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { transformSync } from 'esbuild';

const base = process.argv[2] || 'origin/main';
const previous = path => execFileSync('git', ['show', `${base}:${path}`], { encoding: 'utf8' });
const root = 'src/routes/__root.tsx';
const compile = code => transformSync(code, { loader: 'tsx', format: 'esm', minify: true, target: 'es2022', logLevel: 'silent' }).code;
assert.equal(compile(readFileSync(root, 'utf8')), compile(previous(root)), 'Root route runtime output changed');
const redirects = 'src/utils/legacyRedirectMap.ts';
function evaluate(code) {
  const module = { exports: {} };
  vm.runInNewContext(transformSync(code, { loader: 'ts', format: 'cjs', logLevel: 'silent' }).code, { module, exports: module.exports });
  return module.exports;
}
const old = evaluate(previous(redirects));
const current = evaluate(readFileSync(redirects, 'utf8'));
assert.equal(JSON.stringify(current.LEGACY_REDIRECT_MAP), JSON.stringify(old.LEGACY_REDIRECT_MAP), 'Redirect entries, values or order changed');
for (const key of Object.keys(old.LEGACY_REDIRECT_MAP)) {
  for (const path of [key, key + '/', key.endsWith('/*') ? key.slice(0, -1) + 'example' : key]) {
    assert.equal(current.resolveLegacyRedirect(path), old.resolveLegacyRedirect(path), `Redirect changed for ${path}`);
  }
}
console.log(`Runtime-equivalent root route; all ${Object.keys(old.LEGACY_REDIRECT_MAP).length} redirect entries and variants preserved.`);
