/**
 * URL Redirect Configuration
 * Handles 404s, duplicates, and legacy URLs from Google Search Console
 * Last updated: 2025-12-18
 */

import { VALID_ROUTES } from '@/utils/seo/sitemapRouteValidator';

export interface RedirectRule {
  from: string;
  to: string;
  permanent: boolean;
}

/**
 * Redirect Rules - legacy/typo URLs ONLY.
 * IMPORTANT: Real routes must never be redirected (guarded in findRedirect()).
 */
export const REDIRECT_RULES: RedirectRule[] = [
  // ===== DUPLICATE APP URLS =====
  { from: '/imei-checker-app', to: '/app', permanent: true },
  { from: '/mobile-verification', to: '/app', permanent: true },
  { from: '/get-app', to: '/app', permanent: true },
  { from: '/install-app', to: '/app', permanent: true },
  { from: '/verification-app', to: '/app', permanent: true },
  { from: '/android-app', to: '/app', permanent: true },
  { from: '/ios-app', to: '/app', permanent: true },
  { from: '/mobile-app', to: '/app', permanent: true },

  // ===== SOFT 404 / LEGACY VERIFICATION URLS =====
  { from: '/bulk', to: '/verify', permanent: true },
  { from: '/stolen-property-lookup', to: '/verify', permanent: true },
  { from: '/verify-not-stolen', to: '/verify', permanent: true },
  { from: '/stolen-merchandise-check', to: '/verify', permanent: true },
  { from: '/verification-hub', to: '/verify', permanent: true },

  // ===== LEGACY CHECKER URLS =====
  // Note: /imei-checker, /vin-checker, /serial-number-checker are real pages - DO NOT redirect
  { from: '/imei-check', to: '/imei-checker', permanent: true },
  { from: '/vin-verification', to: '/vin-checker', permanent: true },
  { from: '/vin-check', to: '/vin-checker', permanent: true },
  { from: '/stolen-item-checker', to: '/verify', permanent: true },
  { from: '/imei', to: '/imei-checker', permanent: true },
  { from: '/vin', to: '/check-car', permanent: true },

  // ===== OTHER LEGACY URLS =====
  { from: '/avoid-buying-stolen-goods', to: '/how-it-works', permanent: true },
  { from: '/stolen-items-database', to: '/how-it-works', permanent: true },
  { from: '/how-to-check-if-anything-is-stolen-before-you-buy', to: '/how-it-works', permanent: true },
  { from: '/disclaimer', to: '/terms', permanent: true },
  { from: '/our-story', to: '/about', permanent: true },
  { from: '/enterprise-demo', to: '/for-businesses', permanent: true },
  { from: '/for-brands', to: '/for-businesses', permanent: true },
  { from: '/for-consumers', to: '/verify', permanent: true },
  { from: '/fastercapital/tech-cofounder', to: '/about', permanent: true },
  { from: '/terms-of-service', to: '/terms', permanent: true },
  { from: '/privacy-policy', to: '/privacy', permanent: true },
];

/**
 * Find matching redirect for a given path.
 * Returns null for any real route to prevent accidental redirects.
 */
export function findRedirect(path: string): string | null {
  const cleanPath = path.toLowerCase().trim();

  // Never redirect real routes (prevents "page with redirect" for real content)
  if (VALID_ROUTES.has(cleanPath) || cleanPath === '/') {
    return null;
  }

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

