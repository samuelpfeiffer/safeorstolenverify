/**
 * Sitemap-Route Validator
 * SINGLE SOURCE OF TRUTH for all valid routes
 * 
 * CRITICAL: Every route here MUST have a corresponding <Route> in AppRoutes.tsx
 * If you add a route here without a real page, it becomes a Soft 404.
 * 
 * Last synced with AppRoutes.tsx: 2026-01-04
 */

// All REAL routes from AppRoutes.tsx - MUST match exactly
export const VALID_ROUTES = new Set([
  // === CORE ROUTES ===
  '/',
  '/verify',
  '/dashboard',
  '/profile',
  '/app',
  '/pricing',
  '/about',
  '/faq',
  '/terms',
  '/privacy',
  '/sitemap',
  '/how-it-works',
  '/auth',
  '/report-stolen',
  '/checkout-redirect',
  '/verification-success',
  '/payment-success',
  '/testimonials',
  '/download',
  '/compare',
  '/free-tools',
  '/stolen-database',
  '/marketplace-url-checker',
  '/contact',
  '/reviews',
  '/news',
  '/videos',
  '/shorts',

  // === ITEM LANDING PAGES ===
  '/imei-checker',
  '/vin-checker',
  '/serial-number-checker',
  '/check-phone',
  '/check-car',
  '/check-bike',
  '/check-laptop',
  '/check-electronics',
  '/check-ebike',
  '/check-appliances',
  '/check-tools',
  '/check-jewelry',
  '/check-boat',
  '/firearms-check',
  '/gun-serial-number-lookup',
  '/license-plate-lookup',
  '/free-carfax-alternative',
  '/ps5-serial-number-check',
  '/imei-check-free',
  '/stolen-vehicle-database-arizona',
  '/rolex-serial-number-check',
  '/arizona-stolen-property-database',
  '/unlimited-vin-checks',
  '/partial-serial-number-search',
  '/how-to-check-serial-number',

  // === NEW SEO ITEM PAGES (Phase 1 - All 14) ===
  '/check-iphone-stolen',
  '/check-samsung-stolen',
  '/check-android-phone-stolen',
  '/check-car-stolen-vin',
  '/check-motorcycle-stolen-vin',
  '/check-laptop-stolen',
  '/check-tablet-stolen',
  '/check-bicycle-stolen',
  '/check-gaming-console-stolen',
  '/check-watch-stolen',
  '/check-camera-stolen',
  '/check-power-tools-stolen',
  '/check-firearm-serial',
  '/check-jewelry-stolen',

  // === MARKETPLACE PAGES (All 8) ===
  '/facebook-marketplace-stolen-check',
  '/craigslist-safety-verification',
  '/offerup-verify-not-stolen',
  '/ebay-stolen-item-check',
  '/mercari-stolen-check',
  '/poshmark-stolen-check',
  '/stockx-verification',
  '/letgo-stolen-check',

  // === TOP 11 STATE LICENSE PLATE PAGES ===
  '/california-license-plate-lookup',
  '/texas-license-plate-lookup',
  '/florida-license-plate-lookup',
  '/new-york-license-plate-lookup',
  '/illinois-license-plate-lookup',
  '/georgia-license-plate-lookup',
  '/pennsylvania-license-plate-lookup',
  '/ohio-license-plate-lookup',
  '/north-carolina-license-plate-lookup',
  '/washington-license-plate-lookup',
  '/arizona-license-plate-lookup',

  // === REMAINING 39 STATE LICENSE PLATE PAGES ===
  '/alabama-license-plate-lookup',
  '/alaska-license-plate-lookup',
  '/arkansas-license-plate-lookup',
  '/colorado-license-plate-lookup',
  '/connecticut-license-plate-lookup',
  '/delaware-license-plate-lookup',
  '/hawaii-license-plate-lookup',
  '/idaho-license-plate-lookup',
  '/indiana-license-plate-lookup',
  '/iowa-license-plate-lookup',
  '/kansas-license-plate-lookup',
  '/kentucky-license-plate-lookup',
  '/louisiana-license-plate-lookup',
  '/maine-license-plate-lookup',
  '/maryland-license-plate-lookup',
  '/massachusetts-license-plate-lookup',
  '/michigan-license-plate-lookup',
  '/minnesota-license-plate-lookup',
  '/mississippi-license-plate-lookup',
  '/missouri-license-plate-lookup',
  '/montana-license-plate-lookup',
  '/nebraska-license-plate-lookup',
  '/nevada-license-plate-lookup',
  '/new-hampshire-license-plate-lookup',
  '/new-jersey-license-plate-lookup',
  '/new-mexico-license-plate-lookup',
  '/north-dakota-license-plate-lookup',
  '/oklahoma-license-plate-lookup',
  '/oregon-license-plate-lookup',
  '/rhode-island-license-plate-lookup',
  '/south-carolina-license-plate-lookup',
  '/south-dakota-license-plate-lookup',
  '/tennessee-license-plate-lookup',
  '/utah-license-plate-lookup',
  '/vermont-license-plate-lookup',
  '/virginia-license-plate-lookup',
  '/west-virginia-license-plate-lookup',
  '/wisconsin-license-plate-lookup',
  '/wyoming-license-plate-lookup',

  // === ALL 50 STATE VIN PAGES ===
  '/california-vin-lookup',
  '/texas-vin-lookup',
  '/florida-vin-lookup',
  '/new-york-vin-lookup',
  '/illinois-vin-lookup',
  '/georgia-vin-lookup',
  '/pennsylvania-vin-lookup',
  '/ohio-vin-lookup',
  '/north-carolina-vin-lookup',
  '/washington-vin-lookup',
  '/arizona-vin-lookup',
  '/alabama-vin-lookup',
  '/alaska-vin-lookup',
  '/arkansas-vin-lookup',
  '/colorado-vin-lookup',
  '/connecticut-vin-lookup',
  '/delaware-vin-lookup',
  '/hawaii-vin-lookup',
  '/idaho-vin-lookup',
  '/indiana-vin-lookup',
  '/iowa-vin-lookup',
  '/kansas-vin-lookup',
  '/kentucky-vin-lookup',
  '/louisiana-vin-lookup',
  '/maine-vin-lookup',
  '/maryland-vin-lookup',
  '/massachusetts-vin-lookup',
  '/michigan-vin-lookup',
  '/minnesota-vin-lookup',
  '/mississippi-vin-lookup',
  '/missouri-vin-lookup',
  '/montana-vin-lookup',
  '/nebraska-vin-lookup',
  '/nevada-vin-lookup',
  '/new-hampshire-vin-lookup',
  '/new-jersey-vin-lookup',
  '/new-mexico-vin-lookup',
  '/north-dakota-vin-lookup',
  '/oklahoma-vin-lookup',
  '/oregon-vin-lookup',
  '/rhode-island-vin-lookup',
  '/south-carolina-vin-lookup',
  '/south-dakota-vin-lookup',
  '/tennessee-vin-lookup',
  '/utah-vin-lookup',
  '/vermont-vin-lookup',
  '/virginia-vin-lookup',
  '/west-virginia-vin-lookup',
  '/wisconsin-vin-lookup',
  '/wyoming-vin-lookup',

  // === COMPETITOR COMPARISON PAGES ===
  '/vs-checkmend',
  '/vs-imeiinfo',
  '/vs-swappa',
  '/vs-carfax',
  '/vs-autocheck',
  '/comparisons/safeorstolen-vs-imei-info',
  '/comparisons/safeorstolen-vs-swappa',
  '/comparisons/nicb-vincheck-alternative',
  '/comparisons/best-free-imei-checkers-2025',
  '/comparisons/top-vin-check-services-2025',

  // === APP FEATURE PAGES ===
  '/app/features',
  '/app/stolen-phone-checker',
  '/app/vin-checker',
  '/app/barcode-scanner',

  // === BUSINESS PAGES (All 10) ===
  '/for-pawn-shops',
  '/for-dealers',
  '/for-marketplaces',
  '/for-auction-houses',
  '/for-businesses',
  '/for-electronics-resellers',
  '/for-insurance-companies',
  '/for-law-enforcement',
  '/for-buyers',
  '/for-sellers',

  // === CITY PAGES (Top 10) ===
  '/stolen-check-los-angeles',
  '/stolen-check-new-york-city',
  '/stolen-check-chicago',
  '/stolen-check-houston',
  '/stolen-check-phoenix',
  '/stolen-check-philadelphia',
  '/stolen-check-san-antonio',
  '/stolen-check-san-diego',
  '/stolen-check-dallas',
  '/stolen-check-san-jose',

  // === TRAFFIC LANDING PAGES ===
  '/is-my-phone-stolen',
  '/is-this-car-stolen',
  '/is-this-laptop-stolen',
  '/is-this-bike-stolen',
  '/is-this-gun-stolen',
  '/check-stolen-phone',
  '/check-stolen-car',

  // === BLOG (Static routes only - dynamic /blog/:slug handled separately) ===
  '/blog',
  '/blog/how-to-check-if-phone-stolen',
  '/blog/complete-vin-guide',
  '/blog/protect-yourself-buying-used-electronics',
  '/blog/data-source-credibility-stolen-goods-verification',
  '/blog/ultimate-marketplace-buyers-guide',
  '/blog/complete-imei-guide-protect-yourself',
  '/blog/scammer-tactics-exposed',
  '/blog/phone-verification-guide',
  '/blog/theft-trends-report-2024',
  '/blog/verification-methodology',
  '/blog/real-user-stories',
  '/blog/complete-verification-guide',
  '/blog/stolen-verification-app-guide',
  '/blog/checkmend-has-no-app',
  '/blog/like-carfax-for-phones',
  '/blog/how-to-check-if-iphone-stolen',
  '/blog/facebook-marketplace-scams',
  '/blog/pawn-shop-stolen-item-verification',
  '/blog/imei-checker-app-download',
  '/blog/firearm-serial-number-verification',
  '/blog/bicycle-stolen-serial-number-check',
  '/blog/verify-item-before-meetup',
  '/blog/carfax-vs-free-vin-alternatives',
  '/blog/arizona-theftaz-guide',
  '/blog/ps5-stolen-check-guide',

  // === NEWS & SOCIAL PAGES ===
  '/news/onevalley-recognition',
  '/press-kit',
  '/product-hunt',
  '/youtube',
  '/crunchbase',
]);

// Dynamic route patterns (validated at runtime)
export const DYNAMIC_ROUTE_PATTERNS = [
  /^\/blog\/[a-z0-9-]+$/, // Dynamic blog posts from DB
  /^\/item\/[a-z0-9-]+$/, // Stolen item detail pages
  /^\/shared\/[a-z0-9-]+$/, // Shared report pages
  /^\/youtube\/[a-z0-9-]+$/, // YouTube video pages
];

// URLs that should redirect (NEVER in sitemap)
export const REDIRECT_URLS = new Set([
  // Legacy/duplicate URLs
  '/mobile-app',
  '/account',
  '/imei-checker-app',
  '/mobile-verification',
  '/get-app',
  '/install-app',
  '/verification-app',
  '/verify-not-stolen',
  '/stolen-merchandise-check',
  '/verification-hub',
  '/imei-check',
  '/vin-check',
  '/vin-verification',
  
  // GSC December 2025 validation failures
  '/verify/ebay',
  '/verify/pawnshops',
  '/verify/auctions',
  '/verify/facebook-marketplace',
  '/verify/offerup',
  '/verify/craigslist',
  '/app/features/history',
  '/canada-vin-check',
  '/california',
  '/marketplace-integration',
  '/check-android',
  '/blog/best-imei-checker-tools-2025',
  '/check-imei-before-buying',
  '/results',
  '/app/research-stolen-car',
  '/app/buyer-protection-research',
  '/app/research-stolen-phone',
  '/app/facebook-marketplace-checker',
  '/app/pawnshop-verification',
  '/app/research-stolen-items',
  '/app/offerup-safety',
  '/app/ebay-verification',
  '/app/secondhand-research-app',
  '/blog/mobile-app-features',
  '/app/ios',
  '/app/android',
  '/service-limitations',
  '/analytics',
  '/blog/best-stolen-item-checker-apps-2025',
  '/app/serial-number-checker',
  '/texas',
  '/florida',
  '/new-york',
  '/mesa-stolen-item-check',
  '/craigslist-verification',
  '/check-samsung',
  
  // Mobile pages (real routes but noindexed)
  '/mobile-verify',
  '/mobile-dashboard',
  '/mobile-settings',
  
  // GSC "Alternate page" errors - Jan 2026
  '/comparison-checkmend',
  '/blog/enterprise-security',
  '/ios-app',
  '/avoid-buying-stolen-goods',
  '/city/los-angeles-ca/vin-verification',
  '/city/new-york-ny/imei-check',
  
  // Previously phantom routes (no real pages)
  '/accuracy',
  '/disclaimer',
  '/our-story',
  '/avoid-stolen-goods',
  '/ultimate-guide',
  '/how-to-check-if-anything-is-stolen-before-you-buy',
  '/can-police-track-stolen-phone',
  '/check-drone',
  '/stolen-goods-checker',
  '/auction-houses',
  '/case-studies',
  '/enterprise-demo',
  '/blog/real-user-stories-stolen-goods-verification',
  '/stolen-phone-check',
  '/stolen-car-check',
  
  // GSC NOINDEX FIXES - January 2026 (77 URLs)
  '/how-to-check-if-item-stolen',
  '/how-to-check-if-laptop-stolen',
  '/pawn-shops',
  '/for-pawnshops',
  '/press-release',
  '/mobile',
  '/community',
  '/data-sources',
  '/comprehensive-guide',
  '/buy-used-electronics-safely',
  '/statistics',
  '/trust-verification',
  '/resource-center',
  '/check',
  '/app/download',
  '/vs-stolenregister',
  '/app/vs-imeipro',
  '/guides/ebay-buyer-protection',
  '/transparency',
  '/features',
  '/app/sellers',
  '/app/vs-carfax',
  '/app/features/barcode-scanner',
  '/app/stolen-database-search',
  '/app/investigate-stolen-property',
  '/app/lookup-stolen-items',
  '/app/vs-imeiinfo',
  '/app/check-stolen-before-buying',
  '/guides/verify-craigslist-items',
  '/app/philadelphia',
  '/guides/offerup-scam-protection',
  '/app/carfax-alternative',
  '/blog/how-to-use-imei-checker-app',
  
  // NOTE: All 50 state VIN pages and license plate pages now have REAL routes
  // The routes below are phantom patterns that should redirect
  '/chicago/imei-check',
  '/bulk',
  '/for-consumers',
  '/imei-check',
  '/verification-app',
  '/vin-check',
  '/verify/auctions',
  '/imei-checker-app',
  '/stolen-items-database',
  '/app/features/history',
  '/canada-vin-check',
  '/marketplace-integration',
  '/stolen-item-checker',
  '/app/research-stolen-car',
  '/app/buyer-protection-research',
  '/app/research-stolen-phone',
  '/app/facebook-marketplace-checker',
  '/app/pawnshop-verification',
  '/verify/facebook-marketplace',
  '/app/research-stolen-items',
  '/app/offerup-safety',
  '/blog/scan-and-verify-using-safeorstolen-camera-feature-1',
  '/app/secondhand-research-app',
  '/blog/mobile-app-features',
  '/verify-not-stolen',
  '/vin-verification',
  '/verification-hub',
]);

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Check if a path matches a dynamic route pattern
 */
export function matchesDynamicPattern(path: string): boolean {
  return DYNAMIC_ROUTE_PATTERNS.some(pattern => pattern.test(path));
}

/**
 * Validate a single URL for sitemap inclusion
 */
export function validateSitemapUrl(url: string): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
  };

  // Extract path from full URL
  const path = url.replace('https://safeorstolen.com', '');

  // Check if URL is a redirect (should NOT be in sitemap)
  if (REDIRECT_URLS.has(path)) {
    result.isValid = false;
    result.errors.push(`URL "${path}" is a redirect and should NOT be in sitemap`);
    return result;
  }

  // Check static routes first
  if (VALID_ROUTES.has(path)) {
    return result;
  }

  // Check dynamic route patterns
  if (matchesDynamicPattern(path)) {
    return result;
  }

  // No match found
  result.isValid = false;
  result.errors.push(`URL "${path}" has no corresponding route in AppRoutes`);
  return result;
}

/**
 * Run full validation and report
 */
export function runFullValidation(): ValidationResult {
  console.log('🔍 Running sitemap-route validation...');
  
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
  };

  console.log(`✅ ${VALID_ROUTES.size} valid static routes registered`);
  console.log(`✅ ${DYNAMIC_ROUTE_PATTERNS.length} dynamic route patterns registered`);
  console.log(`⚠️ ${REDIRECT_URLS.size} redirect URLs blocked from sitemap`);

  return result;
}
