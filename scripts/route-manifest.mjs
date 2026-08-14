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
  '/report-stolen',
  '/search-history',
  '/receipts',
  '/analytics',
  '/404',
  '/trust-engine',
  '/mobile-dashboard',
  '/mobile-onboarding',
  '/mobile-settings',
  '/mobile-verify',
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

/** All static (non-parameterised) paths declared in the router. */
export function routesFromRouter() {
  const src = fs.readFileSync(path.join(ROOT, 'src/core/routing/AppRoutes.tsx'), 'utf-8');
  const paths = new Set();
  for (const m of src.matchAll(/<Route\s+path=["']([^"']+)["']([\s\S]{0,120}?)\/?>/g)) {
    const p = m[1];
    const rest = m[2] || '';
    if (!p.startsWith('/')) continue;
    if (p.includes(':') || p.includes('*')) continue;
    // Routes whose element is a <Navigate> are redirects, not destinations.
    if (/<Navigate\b/.test(rest)) continue;
    paths.add(p.length > 1 ? p.replace(/\/$/, '') : '/');
  }
  return paths;
}

/** Legacy paths handled by REDIRECT_MAP — they 301 and must not be sitemapped. */
export function redirectPaths() {
  const src = fs.readFileSync(path.join(ROOT, 'src/core/routing/RedirectRoutes.tsx'), 'utf-8');
  const out = new Set();
  const body = src.slice(src.indexOf('REDIRECT_MAP'));
  for (const m of body.matchAll(/^\s*'([^']+)':\s*'([^']+)'/gm)) out.add(m[1]);
  return out;
}

/** Final public URL list: router routes minus redirects minus private routes. */
export function publicRoutes() {
  const redirects = redirectPaths();
  return [...routesFromRouter()]
    .filter((p) => !redirects.has(p))
    .filter((p) => !isPrivateRoute(p))
    .sort();
}
