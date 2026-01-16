/**
 * URL Redirect Configuration - CLEANED VERSION
 * CRITICAL: Server-side _redirects handles ALL redirects now
 * This file is only for client-side fallback and validation
 * Last updated: 2026-01-16
 */

import { VALID_ROUTES } from '@/utils/seo/sitemapRouteValidator';

export interface RedirectRule {
  from: string;
  to: string;
  permanent: boolean;
}

/**
 * Client-side redirect rules - MINIMAL SET
 * Server-side _redirects file handles the primary redirects
 * These are only for edge cases where client-side redirect is needed
 */
export const REDIRECT_RULES: RedirectRule[] = [
  // These are handled server-side but kept as fallback
  { from: '/imei-check', to: '/imei-checker', permanent: true },
  { from: '/vin-check', to: '/vin-checker', permanent: true },
  { from: '/vin-lookup', to: '/vin-checker', permanent: true },
];

/**
 * Find matching redirect for a given path.
 * Returns null for any real route to prevent accidental redirects.
 * IMPORTANT: Most redirects are handled server-side. This is fallback only.
 */
export function findRedirect(path: string): string | null {
  const cleanPath = path.toLowerCase().trim();

  // Never redirect real routes (prevents "page with redirect" for real content)
  if (VALID_ROUTES.has(cleanPath) || cleanPath === '/') {
    return null;
  }

  // Check minimal client-side rules
  for (const rule of REDIRECT_RULES) {
    if (rule.from === cleanPath) {
      return rule.to;
    }
  }

  // Handle blog post timestamp pattern - strip timestamp and redirect to clean slug
  const timestampMatch = cleanPath.match(/^\/blog\/(.+)-[\d.]+$/);
  if (timestampMatch) {
    const cleanSlug = timestampMatch[1];
    return `/blog/${cleanSlug}`;
  }

  return null;
}

/**
 * Check if URL should redirect
 */
export function shouldRedirect(path: string): boolean {
  return findRedirect(path) !== null;
}
