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
import { isPrivateRoute } from './route-manifest.mjs';

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

/**
 * Locate the TRUE span of the `<div id="root">…</div>` element by walking
 * forward and counting nested <div>/</div> pairs. A regex cannot match
 * nested tags — the old non-greedy `/<div id="root">[\s\S]*?<\/div>/`
 * stopped at the FIRST close tag, which left the previous body in place and
 * caused every route to ship duplicated DOM (multiple <main>, <nav>, <h1>).
 */
function findRootSpan(html) {
  const open = html.search(/<div\s+id=["']root["'][^>]*>/i);
  if (open === -1) return null;
  const openTag = html.slice(open).match(/^<div\s+id=["']root["'][^>]*>/i)[0];
  let i = open + openTag.length;
  let depth = 1;
  const tag = /<\/?div\b[^>]*>/gi;
  tag.lastIndex = i;
  let m;
  while ((m = tag.exec(html)) !== null) {
    if (m[0][1] === '/') {
      depth -= 1;
      if (depth === 0) {
        return { start: open, end: m.index + m[0].length, openTag };
      }
    } else if (!/\/>$/.test(m[0])) {
      depth += 1;
    }
  }
  return null;
}

function setRootContent(html, body) {
  const span = findRootSpan(html);
  if (!span) throw new Error('could not locate <div id="root"> in the shell');
  return `${html.slice(0, span.start)}<div id="root">${body}</div>${html.slice(span.end)}`;
}

/**
 * The shell must NEVER carry prerendered body content or another route's
 * marker comments. Empty #root and drop stale prerender markers, then cache
 * the pristine copy so later builds cannot pick up a contaminated shell.
 */
function pristineShell(distIndexPath, shellCachePath) {
  if (fs.existsSync(shellCachePath)) {
    return fs.readFileSync(shellCachePath, 'utf-8');
  }
  let shell = fs.readFileSync(distIndexPath, 'utf-8');
  shell = shell.replace(/<!--\s*✅[^>]*?(PRERENDERED FOR BOTS|SCHEMAS:|Generated:)[\s\S]*?-->\s*/g, '');
  shell = setRootContent(shell, '');
  shell = shell.replace(/\sdata-prerendered-route="[^"]*"/g, '');
  fs.writeFileSync(shellCachePath, shell);
  return shell;
}

/** Count <main> elements that are NOT inside a <noscript> fallback block. */
function countMainOutsideNoscript(html) {
  const withoutNoscript = html.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  return (withoutNoscript.match(/<main\b/gi) || []).length;
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
  html = setRootContent(html, body);
  if (!html.includes('data-prerendered-route')) {
    html = html.replace('<body', `<body data-prerendered-route="${esc(page.route)}"`);
  }

  // Build-time assertion: the pipeline must never ADD landmarks. If the output
  // has more <main> elements than the captured body, the shell leaked its own
  // content in (the duplicated-DOM bug). Pre-existing duplicates inside a
  // page's own markup are only warned about.
  const inBody = countMainOutsideNoscript(body);
  const inDoc = countMainOutsideNoscript(html);
  if (inDoc > inBody) {
    throw new Error(
      `Prerender duplicated DOM for route "${page.route}": ${inDoc} <main> in output vs ${inBody} in the captured body. Aborting build.`,
    );
  }
  if (inBody > 1) {
    console.warn(`⚠️  ${page.route} renders ${inBody} <main> landmarks (page markup issue, not prerender).`);
  }
  return html;
}

/**
 * Non-content routes still get a static document for crawlers that fetch them
 * directly — a bare shell carrying `noindex, follow` so they can never be
 * indexed with homepage content.
 */
const NOINDEX_STUB_ROUTES = [
  '/dashboard',
  '/auth',
  '/verify',
  '/report-stolen',
  '/app/imei-checker',
  '/app/serial-number-checker',
];

function writeStub(shell, route) {
  let html = shell
    .replace(/<meta[^>]+name=["']robots["'][^>]*>\s*/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, '');
  html = html.replace('</head>', `    <meta name="robots" content="noindex, follow">\n  </head>`);
  return html.replace('<body', `<body data-prerendered-route="${esc(route)}"`);
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

  const shell = pristineShell(indexPath, path.join(DIST, 'index.html.shell'));
  const { pages: index } = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  let written = 0;
  let skipped = 0;

  for (const entry of index) {
    if (isPrivateRoute(entry.route)) {
      skipped++;
      continue;
    }
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

  for (const route of NOINDEX_STUB_ROUTES) {
    const clean = route.replace(/^\//, '');
    const dir = path.join(DIST, clean);
    fs.mkdirSync(dir, { recursive: true });
    const html = writeStub(shell, route);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    fs.mkdirSync(path.dirname(path.join(DIST, `${clean}.html`)), { recursive: true });
    fs.writeFileSync(path.join(DIST, `${clean}.html`), html);
  }
  console.log(`🚫 ${NOINDEX_STUB_ROUTES.length} non-content routes written as noindex stubs.`);

  console.log(`✅ Per-route prerender applied to ${written} routes (unique title/description/canonical/og:url + body). ${skipped} private routes skipped.`);
}


main();
