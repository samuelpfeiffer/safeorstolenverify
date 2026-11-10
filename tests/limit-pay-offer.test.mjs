import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

async function fixture(invoke = async () => ({ data: { url: 'https://checkout.stripe.com/test' } })) {
  const calls = [];
  const bundle = await build({
    entryPoints: ['src/components/verify-chat/LimitPayOffer.tsx'], bundle: true, write: false,
    platform: 'node', format: 'cjs', jsx: 'automatic', external: ['react/jsx-runtime'],
    plugins: [{ name: 'checkout-boundaries', setup(b) {
      b.onResolve({ filter: /^(react|lucide-react|@\/integrations\/supabase\/client|@\/hooks\/useVerifyGate|@\/lib\/pendingCheck)$/ }, a => ({ path: a.path, namespace: 'mock' }));
      b.onLoad({ filter: /.*/, namespace: 'mock' }, a => ({ contents:
        a.path === 'react' ? 'export const useEffect = () => {}; export const useState = v => [v, () => {}]; export const useRef = v => ({current:v});' :
        a.path === 'lucide-react' ? 'export const Loader2 = () => null;' :
        a.path.includes('supabase') ? 'export const supabase = globalThis.checkoutTest.supabase;' :
        a.path.includes('useVerifyGate') ? 'export const getOrCreateFingerprint = () => "qa-fingerprint";' :
        'export const savePendingCheck = () => {};'
      }));
    }}],
  });
  const module = { exports: {} }; const window = { location: { href: '' } };
  vm.runInNewContext(bundle.outputFiles[0].text, {
    module, exports: module.exports, require, window,
    checkoutTest: { supabase: { functions: { invoke: async (name, args) => { calls.push({name, ...args}); return invoke(); } } } },
  });
  return { render: itemType => module.exports.LimitPayOffer({identifier:'QA-NOT-A-REAL-SERIAL',itemType}), calls, window };
}
function buttons(node, out = []) {
  if (!node || typeof node !== 'object') return out;
  if (node.type === 'button') out.push(node);
  for (const child of [node.props?.children].flat(Infinity)) buttons(child, out);
  return out;
}

test('all categories get the same two primary choices without category surcharges', async () => {
  const f = await fixture();
  const baseline = JSON.stringify(f.render('phone'));
  for (const type of ['firearm','vehicle','serial','bicycle','unknown']) assert.equal(JSON.stringify(f.render(type)), baseline);
  assert.equal(buttons(f.render('firearm')).length, 2);
  assert.ok(baseline.includes('4.99') && !baseline.includes('gun_buyer'));
  assert.ok(baseline.includes('No category unlock fees'));
});

test('firearm uses the same universal checkout plan as every item', async () => {
  const f = await fixture(); await buttons(f.render('firearm'))[0].props.onClick();
  assert.equal(f.calls[0].body.plan, 'single');
  assert.equal(f.calls[0].body.planName, 'One verification check');
  assert.equal(f.calls[0].body.itemType, 'firearm');
  assert.equal(f.window.location.href, 'https://checkout.stripe.com/test');
});

test('rapid clicks start only one checkout; monthly is explicitly recurring', async () => {
  let finish; const f = await fixture(() => new Promise(r => { finish = r; }));
  const b = buttons(f.render('firearm'));
  const first = b[0].props.onClick(); await b[1].props.onClick();
  assert.equal(f.calls.length, 1); finish({ data: { url: 'https://checkout.stripe.com/test' } }); await first;
  const m = await fixture(); await buttons(m.render('vehicle'))[1].props.onClick();
  assert.equal(m.calls[0].body.isSubscription, true);
});

test('invalid checkout URLs allow a retry without navigation', async () => {
  const f = await fixture(async () => ({ data: { url: 123 } }));
  const b = buttons(f.render('serial'))[0]; await b.props.onClick(); await b.props.onClick();
  assert.equal(f.calls.length, 2); assert.equal(f.window.location.href, '');
});
