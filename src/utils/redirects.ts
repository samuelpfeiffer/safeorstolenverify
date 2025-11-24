/**
 * URL Redirect Configuration - SITE CONSOLIDATION
 * Handles 280+ page redirects to 9 core SaaS pages
 * Last updated: 2025-11-24
 */

import { CONSOLIDATION_REDIRECT_MAP } from '@/config/consolidation-redirects';

export interface RedirectRule {
  from: string;
  to: string;
  permanent: boolean;
}

/**
 * Legacy Redirect Rules - For backward compatibility
 */
export const LEGACY_REDIRECT_RULES: RedirectRule[] = [
  // ===== DUPLICATE APP URLS =====
  { from: '/imei-checker-app', to: '/mobile-app', permanent: true },
  { from: '/mobile-verification', to: '/mobile-app', permanent: true },
  { from: '/get-app', to: '/mobile-app', permanent: true },
  { from: '/install-app', to: '/mobile-app', permanent: true },
  { from: '/verification-app', to: '/mobile-app', permanent: true },
  { from: '/android-app', to: '/mobile-app', permanent: true },
  { from: '/ios-app', to: '/mobile-app', permanent: true },

  // ===== BLOG POSTS WITH TIMESTAMPS (404s) =====
  // Note: Timestamp pattern is handled by findRedirect() function
  // These specific redirects kept for reference and faster exact matches
  { from: '/blog/red-flags-buying-used-electronics-1759314016.095080', to: '/blog/red-flags-buying-used-electronics', permanent: true },
  { from: '/blog/complete-guide-verify-imei-numbers-used-phone-1759314016.095080', to: '/blog/complete-guide-verify-imei-numbers-used-phone', permanent: true },
  { from: '/blog/vin-verification-complete-guide-used-cars-1759314016.095080', to: '/blog/vin-verification-complete-guide-used-cars', permanent: true },

  // ===== BLOG POST REDIRECTS =====
  { from: '/blog/ultimate-marketplace-buyers-guide', to: '/blog', permanent: true },
  { from: '/blog/complete-imei-guide-protect-yourself', to: '/blog', permanent: true },
  { from: '/blog/safeorstolen-firearms-marketplace-verification', to: '/firearms-check', permanent: true },
  { from: '/blog/complete-verification-guide-stolen-goods-check', to: '/how-it-works', permanent: true },
  { from: '/blog/data-source-credibility-stolen-goods-verification', to: '/data-sources', permanent: true },
  { from: '/blog/mobile-app-features', to: '/mobile-app', permanent: true },
  { from: '/blog/industry-insights-2024', to: '/blog', permanent: true },
  { from: '/blog/what-to-do-if-you-bought-stolen', to: '/blog', permanent: true },
  { from: '/blog/ai-verification-technology', to: '/blog', permanent: true },
  { from: '/blog/verification-data-privacy', to: '/privacy', permanent: true },
  { from: '/blog/serial-numbers-stolen-goods-101', to: '/blog', permanent: true },
  { from: '/blog/enterprise-security', to: '/for-brands', permanent: true },

  // ===== SOFT 404 REDIRECTS =====
  { from: '/bulk', to: '/verify', permanent: true },
  { from: '/stolen-property-lookup', to: '/verify', permanent: true },
  { from: '/vin', to: '/check-car', permanent: true },
  
  // ===== STATISTICS PAGE EVERGREEN URL =====
  { from: '/statistics/stolen-goods-2025', to: '/statistics/stolen-goods', permanent: true },

  // ===== LEGACY VERIFICATION URLS =====
  { from: '/verify-not-stolen', to: '/verify', permanent: true },
  { from: '/stolen-merchandise-check', to: '/verify', permanent: true },
  { from: '/verification-hub', to: '/verify', permanent: true },

  // ===== LEGACY CHECKER URLS =====
  { from: '/imei-checker', to: '/imei-check', permanent: true },
  { from: '/vin-verification', to: '/check-car', permanent: true },
  { from: '/serial-number-checker', to: '/verify', permanent: true },
  { from: '/stolen-item-checker', to: '/verify', permanent: true },
  { from: '/imei', to: '/check-phone', permanent: true },

  // ===== OTHER LEGACY URLS =====
  { from: '/avoid-buying-stolen-goods', to: '/how-it-works', permanent: true },
  { from: '/stolen-items-database', to: '/data-sources', permanent: true },
  { from: '/how-to-check-if-anything-is-stolen-before-you-buy', to: '/how-it-works', permanent: true },
  { from: '/disclaimer', to: '/terms-of-service', permanent: true },
  { from: '/our-story', to: '/about', permanent: true },
  { from: '/enterprise-demo', to: '/for-brands', permanent: true },
  { from: '/for-consumers', to: '/', permanent: true },
  { from: '/fastercapital/tech-cofounder', to: '/fastercapital/raise-capital', permanent: true },
  { from: '/terms-of-service', to: '/terms', permanent: true },
  { from: '/privacy-policy', to: '/privacy', permanent: true },
];

/**
 * Find matching redirect for a given path
 * Checks consolidation redirects first, then legacy rules
 */
export function findRedirect(path: string): string | null {
  const cleanPath = path.toLowerCase().trim();
  
  // Check consolidation redirects first (280+ pages)
  const consolidationRedirect = CONSOLIDATION_REDIRECT_MAP[cleanPath];
  if (consolidationRedirect) {
    return consolidationRedirect;
  }
  
  // Check legacy redirect rules
  for (const rule of LEGACY_REDIRECT_RULES) {
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
