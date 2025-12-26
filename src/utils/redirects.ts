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
  { from: '/app/ios', to: '/app', permanent: true },
  { from: '/app/android', to: '/app', permanent: true },
  { from: '/app/serial-number-checker', to: '/serial-number-checker', permanent: true },

  // ===== SOFT 404 BLOG REDIRECTS (Dec 2025 GSC) =====
  { from: '/blog/best-stolen-item-checker-apps-2025', to: '/blog/stolen-verification-app-guide', permanent: true },
  { from: '/blog/enterprise-security', to: '/for-businesses', permanent: true },
  { from: '/blog/why-verify-serial-numbers', to: '/blog/complete-verification-guide', permanent: true },
  { from: '/blog/complete-marketplace-buyers-checklist', to: '/blog/ultimate-marketplace-buyers-guide', permanent: true },
  { from: '/blog/tesla-model-3-vin-verification-avoid-stolen-electric-vehicles-1', to: '/blog/complete-vin-guide', permanent: true },

  // ===== STATE PATTERN URLS =====
  { from: '/state/new-york/stolen-item-checker', to: '/verify', permanent: true },
  { from: '/state/california/stolen-item-checker', to: '/verify', permanent: true },
  { from: '/state/texas/stolen-item-checker', to: '/verify', permanent: true },
  { from: '/state/florida/stolen-item-checker', to: '/verify', permanent: true },
  { from: '/city/chicago-il/stolen-item-checker', to: '/stolen-check-chicago', permanent: true },
  { from: '/city/los-angeles-ca/stolen-item-checker', to: '/stolen-check-los-angeles', permanent: true },
  { from: '/city/new-york-ny/stolen-item-checker', to: '/stolen-check-new-york-city', permanent: true },

  // ===== MARKETPLACE VERIFICATION URLS =====
  { from: '/offerup-verification', to: '/offerup-verify-not-stolen', permanent: true },
  { from: '/facebook-marketplace-verification', to: '/facebook-marketplace-stolen-check', permanent: true },

  // ===== SOFT 404 / LEGACY VERIFICATION URLS =====
  { from: '/bulk', to: '/verify', permanent: true },
  { from: '/stolen-property-lookup', to: '/verify', permanent: true },
  { from: '/verify-not-stolen', to: '/verify', permanent: true },
  { from: '/stolen-merchandise-check', to: '/verify', permanent: true },
  { from: '/verification-hub', to: '/verify', permanent: true },
  { from: '/craigslist-verification', to: '/verify', permanent: true },
  { from: '/ebay-verification', to: '/verify', permanent: true },
  { from: '/mesa-stolen-item-check', to: '/verify', permanent: true },
  { from: '/stolen-phone-database', to: '/verify', permanent: true },
  { from: '/stolen-car-database', to: '/verify', permanent: true },
  { from: '/verify-vin-before-purchase', to: '/vin-checker', permanent: true },

  // ===== LEGACY CHECKER URLS =====
  { from: '/imei-check', to: '/imei-checker', permanent: true },
  { from: '/vin-verification', to: '/vin-checker', permanent: true },
  { from: '/vin-check', to: '/vin-checker', permanent: true },
  { from: '/vin-lookup', to: '/vin-checker', permanent: true },
  { from: '/stolen-item-checker', to: '/verify', permanent: true },
  { from: '/imei', to: '/imei-checker', permanent: true },
  { from: '/vin', to: '/check-car', permanent: true },
  { from: '/check-samsung', to: '/check-phone', permanent: true },
  { from: '/check-scooter', to: '/check-ebike', permanent: true },
  { from: '/check-bicycle', to: '/check-bike', permanent: true },
  { from: '/firearm-serial-check', to: '/firearms-check', permanent: true },
  { from: '/how-to-verify-car-not-stolen', to: '/check-car', permanent: true },
  { from: '/how-to-check-if-phone-is-stolen', to: '/check-phone', permanent: true },
  { from: '/stolen-phone-check', to: '/check-stolen-phone', permanent: true },
  { from: '/stolen-car-check', to: '/check-stolen-car', permanent: true },

  // ===== STATE ABBREVIATION PAGES =====
  { from: '/texas', to: '/texas-vin-lookup', permanent: true },
  { from: '/florida', to: '/florida-vin-lookup', permanent: true },
  { from: '/new-york', to: '/new-york-vin-lookup', permanent: true },
  { from: '/indiana-vin-lookup', to: '/vin-checker', permanent: true },
  { from: '/new-mexico-vin-lookup', to: '/vin-checker', permanent: true },
  { from: '/oklahoma-vin-lookup', to: '/vin-checker', permanent: true },
  // Note: /arizona-license-plate-lookup now has dedicated page - removed redirect

  // ===== CRAWLED NOT INDEXED - Dec 2025 GSC =====
  { from: '/app/buyers', to: '/app', permanent: true },
  { from: '/auction-houses', to: '/for-auction-houses', permanent: true },
  { from: '/case-studies', to: '/testimonials', permanent: true },
  { from: '/accuracy', to: '/how-it-works', permanent: true },
  { from: '/avoid-stolen-goods', to: '/how-it-works', permanent: true },
  { from: '/blog/data-source-credibility', to: '/blog/data-source-credibility-stolen-goods-verification', permanent: true },

  // ===== NOINDEX PAGES - Dec 2025 GSC =====
  { from: '/transparency', to: '/about', permanent: true },
  { from: '/features', to: '/how-it-works', permanent: true },
  { from: '/app/sellers', to: '/app', permanent: true },
  { from: '/app/vs-carfax', to: '/vs-carfax', permanent: true },
  { from: '/app/features/barcode-scanner', to: '/app/barcode-scanner', permanent: true },
  { from: '/app/stolen-database-search', to: '/stolen-database', permanent: true },
  { from: '/app/investigate-stolen-property', to: '/verify', permanent: true },
  { from: '/app/lookup-stolen-items', to: '/verify', permanent: true },
  { from: '/app/vs-imeiinfo', to: '/vs-imeiinfo', permanent: true },
  { from: '/app/check-stolen-before-buying', to: '/verify', permanent: true },
  { from: '/guides/verify-craigslist-items', to: '/craigslist-safety-verification', permanent: true },
  { from: '/app/philadelphia', to: '/stolen-check-philadelphia', permanent: true },
  { from: '/guides/offerup-scam-protection', to: '/offerup-verify-not-stolen', permanent: true },
  { from: '/app/carfax-alternative', to: '/vs-carfax', permanent: true },
  { from: '/blog/how-to-use-imei-checker-app', to: '/blog/imei-checker-app-download', permanent: true },

  // ===== COMPETITOR COMPARISON PAGES =====
  { from: '/vs-stolenphonechecker', to: '/compare', permanent: true },
  { from: '/vs-imeipro', to: '/vs-imeiinfo', permanent: true },

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
  { from: '/database', to: '/about', permanent: true },
  { from: '/analytics', to: '/dashboard', permanent: true },
  { from: '/for-businesses', to: '/for-pawn-shops', permanent: true },
  { from: '/seo-strategy', to: '/about', permanent: true },
  { from: '/seller-guide', to: '/about', permanent: true },
  { from: '/service-limitations', to: '/terms', permanent: true },

  // ===== GSC PAGE WITH REDIRECT ERRORS (Dec 2025) =====
  { from: '/verify/auctions', to: '/verify', permanent: true },
  { from: '/verify/facebook-marketplace', to: '/verify', permanent: true },
  { from: '/verify/ebay', to: '/verify', permanent: true },
  { from: '/verify/pawnshops', to: '/verify', permanent: true },
  { from: '/verify/offerup', to: '/verify', permanent: true },
  { from: '/verify/craigslist', to: '/verify', permanent: true },
  { from: '/app/features/history', to: '/app', permanent: true },
  { from: '/canada-vin-check', to: '/vin-checker', permanent: true },
  { from: '/blog/best-imei-checker-tools-2025', to: '/blog/complete-imei-guide-protect-yourself', permanent: true },
  { from: '/app/research-stolen-car', to: '/app', permanent: true },
  { from: '/app/buyer-protection-research', to: '/app', permanent: true },
  { from: '/app/research-stolen-phone', to: '/app', permanent: true },
  { from: '/app/facebook-marketplace-checker', to: '/app', permanent: true },
  { from: '/app/pawnshop-verification', to: '/app', permanent: true },
  { from: '/app/research-stolen-items', to: '/app', permanent: true },
  { from: '/app/offerup-safety', to: '/app', permanent: true },
  { from: '/app/ebay-verification', to: '/app', permanent: true },
  { from: '/app/secondhand-research-app', to: '/app', permanent: true },
  { from: '/blog/mobile-app-features', to: '/app', permanent: true },
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

