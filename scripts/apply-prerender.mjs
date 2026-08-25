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
import { isPrivateRoute, routesFromRouter } from './route-manifest.mjs';

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
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, '')
    // The shell's own JSON-LD was already harvested into `page.jsonld` when the
    // route was captured, and `headFor()` re-supplies every entry. Leaving the
    // shell blocks in place emits each schema twice, byte-identical.
    .replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, '');
}

/**
 * De-duplicate raw JSON-LD strings by SEMANTIC equality: parse each block and
 * key on the re-serialised value so whitespace and key-order differences still
 * collapse. Unparseable blocks fall back to their trimmed raw text. Original
 * order and the original raw strings are preserved.
 */
function dedupeJsonld(raws = []) {
  const seen = new Set();
  const out = [];
  for (const raw of raws) {
    let key;
    try {
      key = JSON.stringify(JSON.parse(raw));
    } catch {
      key = String(raw).trim();
    }
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(raw);
  }
  return out;
}

/**
 * Remove every JSON-LD block from a captured body snapshot. The <head> is the
 * authoritative location for structured data and `headFor()` already emits
 * every unique block, so React-rendered body schema is pure duplication: it
 * adds nothing a crawler consumes and trips the duplicate-JSON-LD assertion.
 */
function stripBodyJsonld(body = '') {
  return body.replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, '');
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


/** Per-route description: `metas` is authoritative, top-level is the fallback. */
function descriptionFor(page) {
  const fromMetas = (page.metas || []).find((m) => m.name === 'description' && m.content)?.content;
  return fromMetas || page.description || '';
}

function headFor(page) {
  const out = [];
  out.push(`<title>${esc(page.title)}</title>`);
  const description = descriptionFor(page);
  if (description) out.push(`<meta name="description" content="${esc(description)}">`);
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

  for (const raw of dedupeJsonld(page.jsonld || [])) {
    out.push(`<script type="application/ld+json">${raw.replace(/<\/script/gi, '<\\/script')}</script>`);
  }

  return out.map((l) => `    ${l}`).join('\n');
}

function documentFor(shell, page, body) {
  // Head is authoritative for structured data; drop any body-level JSON-LD
  // before it is inserted so it cannot duplicate the head blocks.
  const cleanBody = stripBodyJsonld(body);
  let html = stripRouteSpecificHead(shell);
  html = html.replace('</head>', `${headFor(page)}\n  </head>`);
  html = setRootContent(html, cleanBody);
  if (!html.includes('data-prerendered-route')) {
    html = html.replace('<body', `<body data-prerendered-route="${esc(page.route)}"`);
  }

  // Build-time assertion: the pipeline must never ADD landmarks. If the output
  // has more <main> elements than the captured body, the shell leaked its own
  // content in (the duplicated-DOM bug). Pre-existing duplicates inside a
  // page's own markup are only warned about.
  const inBody = countMainOutsideNoscript(cleanBody);
  const inDoc = countMainOutsideNoscript(html);
  if (inDoc > inBody) {
    throw new Error(
      `Prerender duplicated DOM for route "${page.route}": ${inDoc} <main> in output vs ${inBody} in the captured body. Aborting build.`,
    );
  }
  if (inBody > 1) {
    console.warn(`⚠️  ${page.route} renders ${inBody} <main> landmarks (page markup issue, not prerender).`);
  }

  // Build-time assertion: every JSON-LD block in the finished document must be
  // semantically unique. A duplicate means the shell's schema leaked back in.
  const blocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (m) => m[1],
  );
  const keys = blocks.map((b) => {
    try {
      return JSON.stringify(JSON.parse(b));
    } catch {
      throw new Error(`Prerender emitted unparseable JSON-LD for route "${page.route}". Aborting build.`);
    }
  });
  const uniqueKeys = new Set(keys);
  if (uniqueKeys.size !== keys.length) {
    const counts = new Map();
    keys.forEach((k, i) => counts.set(k, [...(counts.get(k) || []), i]));
    const dupTypes = [...counts.entries()]
      .filter(([, idxs]) => idxs.length > 1)
      .map(([k]) => {
        const t = JSON.parse(k)['@type'];
        return Array.isArray(t) ? t.join('/') : t || 'unknown';
      });
    throw new Error(
      `Prerender duplicated JSON-LD for route "${page.route}": ${keys.length} blocks, ${uniqueKeys.size} unique. Duplicated @type: ${dupTypes.join(', ')}. Aborting build.`,
    );
  }

  return html;
}

/**
 * Non-content routes still get a static document for crawlers that fetch them
 * directly — a bare shell carrying `noindex, follow` so they can never be
 * indexed with homepage content.
 *
 * This is the ONLY layer that can deliver a crawler-visible directive on this
 * host: the edge is Cloudflare static hosting, which serves `web.config` as a
 * plain file rather than executing it. A committed static document at the path
 * wins over the SPA fallback, so the directive is in the raw response.
 */
const NOINDEX_STUB_ROUTES = [
  '/dashboard',
  '/auth',
  '/verify',
  '/report-stolen',
  '/app/imei-checker',
  '/app/serial-number-checker',
  '/app/features',
  '/app/stolen-phone-checker',
  '/app/vin-checker',
  '/app/barcode-scanner',
  '/mobile-dashboard',
  '/mobile-onboarding',
  '/mobile-settings',
  '/mobile-verify',
  '/trust-engine',
];

/**
 * Legacy paths with a canonical destination. A static file can't emit a 301 on
 * this host, so each gets a document that is noindex, canonicalises to the
 * destination and bounces non-JS clients there via meta refresh. The React
 * <Navigate replace> in RedirectRoutes.tsx still handles in-app navigation.
 */
const REDIRECT_STUB_ROUTES = {
  '/ai-imei-check': '/imei-checker',
  '/ai-license-plate-check': '/license-plate-lookup',
  '/ai-serial-number-check': '/serial-number-checker',
  '/firearms-serial-check': '/firearms-serial-number-check',
  '/imei': '/imei-checker',
};

/**
 * Legacy slugs Google Search Console reports as "Not found (404)". Static
 * hosting has no pattern matching, so wildcard rules in public/_redirects
 * (e.g. `/*-stolen-item-check`) can never fire — every slug must be explicit.
 * Destinations are validated against the real router below.
 */
const EXTRA_REDIRECT_STUBS = {
  // State VIN lookups that never had their own page
  '/idaho-vin-lookup': '/vin-checker',
  '/utah-vin-lookup': '/vin-checker',
  '/nevada-vin-lookup': '/vin-checker',
  '/kansas-vin-lookup': '/vin-checker',
  // "-stolen-item-check" slugs (the _redirects wildcard is inert on this host)
  '/wisconsin-stolen-item-check': '/verify',
  '/maine-stolen-item-check': '/verify',
  '/washington-dc-stolen-item-check': '/verify',
  '/virginia-stolen-item-check': '/verify',
  '/ohio-stolen-item-check': '/verify',
  '/alabama-stolen-item-check': '/verify',
  '/memphis-stolen-item-check': '/verify',
  '/minneapolis-stolen-item-check': '/verify',
  '/miami-stolen-item-check': '/stolen-check-miami',
  // Competitor comparison
  '/vs-nicb': '/nicb-alternative',
  // Blog slugs that never existed — mapped to the closest real article
  '/blog/safeorstolen-app-guide': '/blog/stolen-verification-app-guide',
  '/blog/imei-checker-app-comparison': '/comparisons/best-free-imei-checkers-2025',
  '/blog/avoid-buying-stolen-items': '/blog/ultimate-marketplace-buyers-guide',
};

/**
 * Reported slugs with NO good destination in the router. They get the real 404
 * document (noindex, nofollow, no canonical) rather than an arbitrary target.
 * There is no statistics page anywhere in AppRoutes.tsx.
 */
const NOT_FOUND_STUB_ROUTES = ['/statistics/stolen-goods', '/statistics'];

/**
 * public/_redirects is INERT on this host (verified live: `/verification-app`,
 * which has a `301!` rule, returned 200 with the homepage snapshot). It is
 * still the maintained source of truth for legacy slugs, so its 301 table is
 * read at build time and every orphan slug is materialised as a static stub —
 * the only mechanism that actually changes the bytes a crawler receives.
 *
 * Only rules that are safe are used: no wildcards (static hosting cannot match
 * patterns), source must not be a real route, destination must be a real route.
 */
function redirectsFromFile(realRoutes) {
  const file = path.join(ROOT, 'public', '_redirects');
  if (!fs.existsSync(file)) return {};
  const out = {};
  for (const line of fs.readFileSync(file, 'utf-8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const [from, to, code = ''] = t.split(/\s+/);
    if (!from?.startsWith('/') || !to?.startsWith('/')) continue;
    if (code.replace('!', '') !== '301') continue;
    if (from.includes('*') || from.includes(':') || to.includes('*') || to.includes(':')) continue;
    if (realRoutes.has(from)) continue; // never redirect a page that exists
    if (!realRoutes.has(to)) continue; // never redirect into another 404
    if (isPrivateRoute(from)) continue;
    out[from] = to;
  }
  return out;
}

/**
 * Final stub table: derived _redirects rules, then the hand-curated maps, which
 * win. Build-time assertion: every destination must be a real router path and
 * no source may collide with one, otherwise the build fails.
 */
function buildRedirectStubs() {
  const realRoutes = routesFromRouter();
  const derived = redirectsFromFile(realRoutes);
  const map = { ...derived, ...REDIRECT_STUB_ROUTES, ...EXTRA_REDIRECT_STUBS };
  for (const route of NOT_FOUND_STUB_ROUTES) delete map[route];

  const bad = [];
  for (const [from, to] of Object.entries(map)) {
    if (!realRoutes.has(to)) bad.push(`${from} -> ${to} (destination is not a route)`);
    if (realRoutes.has(from)) bad.push(`${from} -> ${to} (source IS a real route)`);
  }
  if (bad.length) {
    throw new Error(`Invalid redirect stub targets. Aborting build:\n  ${bad.join('\n  ')}`);
  }
  const badNotFound = NOT_FOUND_STUB_ROUTES.filter((r) => realRoutes.has(r));
  if (badNotFound.length) {
    throw new Error(`404 stub routes collide with real routes: ${badNotFound.join(', ')}`);
  }
  return { map, derivedCount: Object.keys(derived).length };
}

const SITE = 'https://safeorstolen.com';

function writeStub(shell, route, destination = null) {
  let html = shell
    .replace(/<meta[^>]+name=["']robots["'][^>]*>\s*/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, '');
  const head = destination
    ? `    <meta name="robots" content="noindex, follow">\n` +
      `    <link rel="canonical" href="${SITE}${esc(destination)}">\n` +
      `    <meta http-equiv="refresh" content="0; url=${esc(destination)}">\n  </head>`
    : `    <meta name="robots" content="noindex, follow">\n  </head>`;
  html = html.replace('</head>', head);
  return html.replace('<body', `<body data-prerendered-route="${esc(route)}"`);
}

/**
 * dist/404.html — served with a real 404 status by the _redirects catch-all.
 * Reuses the shell so the built bundle refs stay correct and React still boots
 * for humans landing on legitimate client-side-only routes. No canonical.
 */
function writeNotFound(shell) {
  const snapshotBody = path.join(PRERENDER, 'pages', '404.html');
  const snapshotJson = path.join(PRERENDER, 'pages', '404.json');
  const snap = fs.existsSync(snapshotJson) ? JSON.parse(fs.readFileSync(snapshotJson, 'utf-8')) : null;
  const title = snap?.title || 'Page Not Found — SafeOrStolen';
  const description = snap ? descriptionFor(snap) : '';
  const body = fs.existsSync(snapshotBody)
    ? stripBodyJsonld(fs.readFileSync(snapshotBody, 'utf-8'))
    : '<main><h1>Page Not Found</h1>' +
      '<p>The page you requested does not exist at SafeOrStolen.</p>' +
      '<ul>' +
      '<li><a href="/">Home</a></li>' +
      '<li><a href="/verify">Verify an item</a></li>' +
      '<li><a href="/blog">Blog</a></li>' +
      '</ul></main>';

  let html = shell
    .replace(/<meta[^>]+name=["'](robots|prerender-status-code)["'][^>]*>\s*/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, '')
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
  const head =
    `    <meta name="robots" content="noindex, nofollow">\n` +
    `    <meta name="prerender-status-code" content="404">\n` +
    (description ? `    <meta name="description" content="${esc(description)}">\n` : '') +
    `  </head>`;
  html = html.replace('</head>', head);
  html = setRootContent(html, body);
  return html.replace('<body', '<body data-prerendered-route="/404"');
}

function writeAtRoute(route, html) {
  const clean = route.replace(/^\//, '');
  const dir = path.join(DIST, clean);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  const flat = path.join(DIST, `${clean}.html`);
  fs.mkdirSync(path.dirname(flat), { recursive: true });
  fs.writeFileSync(flat, html);
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
  const descCounts = new Map();


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
    const emittedDesc = descriptionFor(page);
    if (emittedDesc) descCounts.set(emittedDesc, (descCounts.get(emittedDesc) || 0) + 1);


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

  // Build-time assertion: no single meta description may cover >15% of routes.
  const totalDesc = [...descCounts.values()].reduce((a, b) => a + b, 0);
  if (totalDesc > 0) {
    const [topDesc, topCount] = [...descCounts.entries()].sort((a, b) => b[1] - a[1])[0];
    const share = topCount / totalDesc;
    if (share > 0.15 && topCount > 1) {
      throw new Error(
        `Duplicate meta description across ${topCount}/${totalDesc} prerendered routes ` +
          `(${(share * 100).toFixed(1)}% > 15% threshold):\n  "${topDesc}"\n` +
          `Per-route descriptions must be unique. Re-capture snapshots (scripts/capture_prerender.py).`,
      );
    }
    console.log(`🔎 ${descCounts.size} unique descriptions across ${totalDesc} routes (most repeated: ${topCount}x).`);
  }

  for (const route of NOINDEX_STUB_ROUTES) {

    writeAtRoute(route, writeStub(shell, route));
  }
  const { map: redirectStubs, derivedCount } = buildRedirectStubs();
  for (const [route, destination] of Object.entries(redirectStubs)) {
    writeAtRoute(route, writeStub(shell, route, destination));
  }
  const notFoundDoc = writeNotFound(shell);
  for (const route of NOT_FOUND_STUB_ROUTES) {
    writeAtRoute(route, notFoundDoc);
  }
  console.log(
    `🚫 ${NOINDEX_STUB_ROUTES.length} non-content routes written as noindex stubs, ` +
      `${Object.keys(redirectStubs).length} legacy paths written as canonicalised redirect stubs ` +
      `(${derivedCount} derived from public/_redirects), ` +
      `${NOT_FOUND_STUB_ROUTES.length} slugs written as real 404 documents.`,
  );


  // dist/404.html — the _redirects catch-all serves this with a real 404 for
  // any URL that is not a known route, so unmatched URLs can never return the
  // homepage snapshot with an indexable canonical.
  fs.writeFileSync(path.join(DIST, '404.html'), writeNotFound(shell));
  console.log('🧭 dist/404.html written (noindex, nofollow + prerender-status-code 404, no canonical).');

  console.log(`✅ Per-route prerender applied to ${written} routes (unique title/description/canonical/og:url + body). ${skipped} private routes skipped.`);
}


main();
