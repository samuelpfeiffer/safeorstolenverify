/**
 * Single source of truth for "which URLs are public".
 *
 * Routes are DERIVED from the real route table (src/core/routing/AppRoutes.tsx)
 * instead of being maintained by hand, so a route can never again exist in the
 * app but be missing from the sitemap / prerender set.
 *
 * Used by:
 *   - scripts/generate-sitemap.mjs   (writes public/sitemap.xml)
 *   - scripts/apply-prerender.mjs    (skips private routes at build time)
 *   - scripts/capture_prerender.py   (reads the sitemap)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Paths that must never be indexed, sitemapped or prerendered. */
const PRIVATE_EXACT = new Set([
  '/verify',
  '/dashboard',
  '/profile',
  '/auth',
  '/account',
  '/settings',
  '/checkout-redirect',
  '/verification-success',
  '/payment-success',
  '/search-history',
  '/receipts',
  '/analytics',
  '/404',
  '/trust-engine',
  '/mobile-dashboard',
  '/mobile-onboarding',
  '/mobile-settings',
  '/mobile-verify',
  '/my-items',
]);

const PRIVATE_PREFIXES = [
  '/admin',
  '/app/', // /app is public; /app/imei-checker etc. are not
  '/account/',
  '/auth/',
  '/dashboard/',
  '/profile/',
  '/.lovable/',
  '/go/',
  '/proof/', // user-data proof records: noindex, never sitemapped or prerendered
  '/shared/',

  '/verified/',
];

export function isPrivateRoute(routePath) {
  const p = (routePath || '/').split('?')[0].split('#')[0];
  if (PRIVATE_EXACT.has(p)) return true;
  return PRIVATE_PREFIXES.some((prefix) => p.startsWith(prefix));
}

/** All static (non-parameterised) paths declared in the router (TanStack file routes). */
export function routesFromRouter() {
  const routesDir = path.join(ROOT, 'src/routes');
  const paths = new Set();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      // .ts route files are server API endpoints (certificate-api, reports-api, verify-api), not pages.
      if (!entry.name.endsWith('.tsx')) continue;
      const rel = path.relative(routesDir, full).replace(/\\/g, '/');
      if (rel === '__root.tsx') continue;
      let p = '/' + rel.replace(/\.(tsx|ts)$/, '');
      // TanStack conventions: dots become slashes, [.] is an escaped literal dot,
      // index maps to the parent path, $param/$ are dynamic.
      p = p.replace(/\./g, '/').replace(/\[\/\]/g, '.');
      if (p.endsWith('/index')) p = p.slice(0, -'/index'.length) || '/';
      if (p.includes('$')) continue; // dynamic segments are not sitemapped
      paths.add(p.length > 1 ? p.replace(/\/$/, '') : '/');
    }
  };
  walk(routesDir);
  return paths;
}

/** Legacy paths handled by the redirect map — they 301 and must not be sitemapped. */
export function redirectPaths() {
  const src = fs.readFileSync(path.join(ROOT, 'src/utils/legacyRedirectMap.ts'), 'utf-8');
  const out = new Set();
  const body = src.slice(src.indexOf('LEGACY_REDIRECT_MAP'));
  // The map uses double quotes; accept either quote style.
  for (const m of body.matchAll(/^\s*(['"])([^'"]+)\1:\s*(['"])([^'"]+)\3/gm)) out.add(m[2]);
  return out;
}

/** Dynamic pages with a fixed, known list of params (Oct 5 2026: gun state lookup pages). */
export function dynamicRoutes() {
  const src = fs.readFileSync(path.join(ROOT, 'src/data/gunTheftStats.ts'), 'utf-8');
  return [...src.matchAll(/slug: '([a-z-]+)'/g)].map((m) => `/gun-serial-number-lookup/${m[1]}`);
}

/** Final public URL list: router routes minus redirects minus private routes. */
export function publicRoutes() {
  const redirects = redirectPaths();
  return [...routesFromRouter(), ...dynamicRoutes()]
    .filter((p) => !redirects.has(p))
    .filter((p) => !isPrivateRoute(p))
    .sort();
}
