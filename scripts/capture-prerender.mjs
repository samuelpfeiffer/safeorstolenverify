/**
 * capture-prerender.mjs
 *
 * Renders every public route in a real browser and captures the per-route
 * head metadata (title, description, canonical, og:*, twitter:*, JSON-LD)
 * plus the rendered body HTML into `prerender/`.
 *
 * The captured snapshots are committed to the repo and applied to `dist/`
 * at build time by `scripts/apply-prerender.mjs`, so every route ships its
 * OWN static HTML (unique title/description/canonical/og:url + real content)
 * for crawlers that do not execute JavaScript.
 *
 * Usage (dev machine / sandbox, dev server must be running on :8080):
 *   node scripts/capture-prerender.mjs [--base http://localhost:8080] [--only /imei-checker,/]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'prerender');
const PAGES_DIR = path.join(OUT_DIR, 'pages');
const SITE = 'https://safeorstolen.com';

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const BASE = getArg('base', 'http://localhost:8080');
const ONLY = getArg('only', '');
const CONCURRENCY = Number(getArg('concurrency', '4'));

function routesFromSitemap() {
  const xml = fs.readFileSync(path.join(ROOT, 'public/sitemap.xml'), 'utf-8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const paths = locs
    .map((u) => u.replace(SITE, ''))
    .map((p) => (p === '' ? '/' : p))
    .filter((p) => p.startsWith('/'))
    .map((p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p));
  return [...new Set(paths)].sort();
}

export function slugFor(route) {
  return route === '/' ? 'index' : route.replace(/^\//, '').replace(/\//g, '__');
}

async function capture(page, route) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  // Wait for React to mount and Helmet effects to flush.
  await page.waitForSelector('#root [data-prerender-ready], #root h1, #root main, #root div', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(1200);

  const data = await page.evaluate((site) => {
    const canonicalUrl = site + (location.pathname === '/' ? '/' : location.pathname);

    const metas = [];
    document.head.querySelectorAll('meta').forEach((el) => {
      const name = el.getAttribute('name');
      const property = el.getAttribute('property');
      const content = el.getAttribute('content');
      if (!content) return;
      if (!name && !property) return;
      if (name === 'viewport' || name === 'charset') return;
      metas.push({ name, property, content });
    });

    const links = [];
    document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach((el) => {
      links.push({
        rel: el.getAttribute('rel'),
        href: el.getAttribute('href'),
        hreflang: el.getAttribute('hreflang'),
        type: el.getAttribute('type'),
      });
    });

    const jsonld = [];
    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
      const txt = (el.textContent || '').trim();
      if (txt) jsonld.push(txt);
    });
    document.body.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
      const txt = (el.textContent || '').trim();
      if (txt) jsonld.push(txt);
    });

    // Body snapshot: strip scripts/styles so stale asset hashes never ship.
    const root = document.getElementById('root');
    let body = '';
    if (root) {
      const clone = root.cloneNode(true);
      clone.querySelectorAll('script, style, noscript, link, iframe, canvas, svg use').forEach((n) => n.remove());
      body = clone.innerHTML;
    }

    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      canonicalUrl,
      metas,
      links,
      jsonld,
      body,
    };
  }, SITE);

  return data;
}

function normalizeMeta(entry, route) {
  const canonical = SITE + (route === '/' ? '/' : route);
  const byKey = new Map();
  for (const m of entry.metas) {
    const key = m.property ? `p:${m.property}` : `n:${m.name}`;
    byKey.set(key, m);
  }
  // Force per-route correctness for the tags that were collapsing to the homepage.
  byKey.set('p:og:url', { property: 'og:url', content: canonical });
  if (!byKey.get('p:og:title')) byKey.set('p:og:title', { property: 'og:title', content: entry.title });
  if (!byKey.get('p:og:description')) byKey.set('p:og:description', { property: 'og:description', content: entry.description });
  byKey.set('p:og:title', { property: 'og:title', content: byKey.get('p:og:title').content });
  if (!byKey.get('n:twitter:title')) byKey.set('n:twitter:title', { name: 'twitter:title', content: entry.title });
  if (!byKey.get('n:twitter:description')) byKey.set('n:twitter:description', { name: 'twitter:description', content: entry.description });

  entry.metas = [...byKey.values()];
  entry.links = [
    { rel: 'canonical', href: canonical },
    ...entry.links.filter((l) => l.rel !== 'canonical'),
  ];
  entry.canonical = canonical;
  return entry;
}

async function main() {
  const routes = ONLY ? ONLY.split(',').map((r) => r.trim()) : routesFromSitemap();
  fs.mkdirSync(PAGES_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const results = [];
  const failures = [];

  const queue = [...routes];
  const workers = Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    const context = await browser.newContext({ viewport: { width: 1280, height: 1400 } });
    const page = await context.newPage();
    page.on('dialog', (d) => d.dismiss().catch(() => {}));
    while (queue.length) {
      const route = queue.shift();
      try {
        const raw = await capture(page, route);
        if (!raw.title) throw new Error('empty title');
        const entry = normalizeMeta(raw, route);
        const slug = slugFor(route);
        fs.writeFileSync(path.join(PAGES_DIR, `${slug}.html`), entry.body || '');
        results.push({
          route,
          slug,
          title: entry.title,
          description: entry.description,
          canonical: entry.canonical,
          metas: entry.metas,
          links: entry.links,
          jsonld: entry.jsonld,
        });
        console.log(`✓ ${route} — ${entry.title.slice(0, 70)}`);
      } catch (err) {
        failures.push({ route, error: String(err && err.message ? err.message : err) });
        console.warn(`✗ ${route} — ${err}`);
      }
    }
    await context.close();
  });

  await Promise.all(workers);
  await browser.close();

  results.sort((a, b) => a.route.localeCompare(b.route));

  // Merge with any previously captured routes that failed this run.
  const manifestPath = path.join(OUT_DIR, 'manifest.json');
  let previous = [];
  if (fs.existsSync(manifestPath)) {
    try {
      previous = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')).pages || [];
    } catch {}
  }
  const merged = new Map(previous.map((p) => [p.route, p]));
  for (const r of results) merged.set(r.route, r);

  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      { generatedAt: new Date().toISOString(), site: SITE, pages: [...merged.values()].sort((a, b) => a.route.localeCompare(b.route)) },
      null,
      2,
    ),
  );

  console.log(`\nCaptured ${results.length}/${routes.length} routes → prerender/manifest.json`);
  if (failures.length) console.log('Failures:', JSON.stringify(failures, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
