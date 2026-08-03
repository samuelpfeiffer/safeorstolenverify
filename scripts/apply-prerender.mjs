/**
 * apply-prerender.mjs
 *
 * Build-time step. Takes the per-route snapshots captured in `prerender/`
 * (see scripts/capture_prerender.py) and writes a real, unique static HTML
 * document for EVERY route into `dist/`:
 *
 *   dist/imei-checker/index.html   <- served for /imei-checker
 *   dist/imei-checker.html         <- fallback for hosts that map extensionless paths
 *
 * Each generated document has that route's own <title>, meta description,
 * og:tags and twitter:tags, canonical + og:url pointing at ITS OWN URL, its JSON-LD
 * and its own rendered body content. The React bundle still boots on top of it,
 * so humans get the normal SPA.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PRERENDER = path.join(ROOT, 'prerender');

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function stripRouteSpecificHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, '')
    .replace(/<meta[^>]+name=["'](description|twitter:title|twitter:description|twitter:url|keywords)["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']og:(title|description|url)["'][^>]*>\s*/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, '');
}

function headFor(page) {
  const out = [];
  out.push(`<title>${esc(page.title)}</title>`);
  if (page.description) out.push(`<meta name="description" content="${esc(page.description)}">`);
  out.push(`<link rel="canonical" href="${esc(page.canonical)}">`);

  const seen = new Set(['description']);
  for (const m of page.metas || []) {
    const key = m.property ? `p:${m.property}` : `n:${m.name}`;
    if (seen.has(key) || seen.has(m.name)) continue;
    seen.add(key);
    if (m.property) out.push(`<meta property="${esc(m.property)}" content="${esc(m.content)}">`);
    else if (m.name) out.push(`<meta name="${esc(m.name)}" content="${esc(m.content)}">`);
  }

  for (const l of page.links || []) {
    if (l.rel === 'canonical') continue;
    const attrs = [`rel="${esc(l.rel)}"`, `href="${esc(l.href)}"`];
    if (l.hreflang) attrs.push(`hreflang="${esc(l.hreflang)}"`);
    if (l.type) attrs.push(`type="${esc(l.type)}"`);
    out.push(`<link ${attrs.join(' ')}>`);
  }

  for (const raw of page.jsonld || []) {
    out.push(`<script type="application/ld+json">${raw.replace(/<\/script/gi, '<\\/script')}</script>`);
  }

  return out.map((l) => `    ${l}`).join('\n');
}

function documentFor(shell, page, body) {
  let html = stripRouteSpecificHead(shell);
  html = html.replace('</head>', `${headFor(page)}\n  </head>`);
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${body}</div>`,
  );
  if (!html.includes('data-prerendered-route')) {
    html = html.replace('<body', `<body data-prerendered-route="${esc(page.route)}"`);
  }
  return html;
}

function main() {
  const manifestPath = path.join(PRERENDER, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.warn('⚠️  prerender/manifest.json missing — skipping per-route prerender.');
    return;
  }
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html not found — run the build first.');
    return;
  }

  const shell = fs.readFileSync(indexPath, 'utf-8');
  const { pages: index } = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  let written = 0;

  for (const entry of index) {
    const pageFile = path.join(PRERENDER, 'pages', `${entry.slug}.json`);
    if (!fs.existsSync(pageFile)) continue;
    const page = JSON.parse(fs.readFileSync(pageFile, 'utf-8'));
    const bodyFile = path.join(PRERENDER, 'pages', `${page.slug}.html`);
    const body = fs.existsSync(bodyFile) ? fs.readFileSync(bodyFile, 'utf-8') : '';
    const html = documentFor(shell, page, body);

    if (page.route === '/') {
      fs.writeFileSync(indexPath, html);
    } else {
      const clean = page.route.replace(/^\//, '');
      const dir = path.join(DIST, clean);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html);
      // Flat variant for hosts that resolve /foo -> /foo.html
      const flat = path.join(DIST, `${clean}.html`);
      fs.mkdirSync(path.dirname(flat), { recursive: true });
      fs.writeFileSync(flat, html);
    }
    written++;
  }

  console.log(`✅ Per-route prerender applied to ${written} routes (unique title/description/canonical/og:url + body).`);
}

main();
