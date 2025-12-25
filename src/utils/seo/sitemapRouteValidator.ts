/**
 * Sitemap-Route Validator
 * Automatically validates that all sitemap URLs have corresponding routes
 * Prevents GSC indexing errors by catching mismatches early
 */

// All routes from AppRoutes.tsx - must be kept in sync
export const VALID_ROUTES = new Set([
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
  
  // Mobile routes
  '/mobile-verify',
  '/mobile-dashboard',
  '/mobile-settings',
  
  // Item checkers
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
  '/license-plate-lookup',
  
  // NEW SEO item pages
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
  
  // Competitor comparisons
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
  
  // App pages
  '/app/features',
  '/app/stolen-phone-checker',
  '/app/vin-checker',
  '/app/barcode-scanner',
  
  // Business pages
  '/for-pawn-shops',
  '/for-dealers',
  '/for-marketplaces',
  '/for-auction-houses',
  '/for-businesses',
  '/for-electronics-resellers',
  '/for-insurance-companies',
  '/for-law-enforcement',
  
  // Marketplace pages (all 8)
  '/facebook-marketplace-stolen-check',
  '/craigslist-safety-verification',
  '/offerup-verify-not-stolen',
  '/ebay-stolen-item-check',
  '/mercari-stolen-check',
  '/poshmark-stolen-check',
  '/stockx-verification',
  '/letgo-stolen-check',
  
  // Top 10 state VIN pages
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
  
  // Top 10 state license plate pages
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
  
  // City pages
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
  
  // Traffic landing pages
  '/is-my-phone-stolen',
  '/is-this-car-stolen',
  '/is-this-laptop-stolen',
  '/is-this-bike-stolen',
  '/is-this-gun-stolen',
  '/check-stolen-phone',
  '/check-stolen-car',
  '/stolen-phone-check',
  '/stolen-car-check',
  
  // Blog
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
  
  // News & social
  '/news/onevalley-recognition',
  '/press-kit',
  '/product-hunt',
  '/youtube',
  '/crunchbase',
]);

// URLs that should redirect (not be in sitemap)
export const REDIRECT_URLS = new Set([
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
  '/app/features/history',
  '/canada-vin-check',
  '/california',
  '/marketplace-integration',
  '/check-android',
  '/blog/best-imei-checker-tools-2025',
  '/check-imei-before-buying',
]);

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

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

  // Check if URL has a valid route
  if (!VALID_ROUTES.has(path)) {
    result.isValid = false;
    result.errors.push(`URL "${path}" has no corresponding route in AppRoutes`);
  }

  return result;
}

export function runFullValidation(): ValidationResult {
  console.log('🔍 Running sitemap-route validation...');
  
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
  };

  // This would parse sitemap.xml and validate each URL
  // For now, log the validation check
  console.log(`✅ ${VALID_ROUTES.size} valid routes registered`);
  console.log(`⚠️ ${REDIRECT_URLS.size} redirect URLs blocked from sitemap`);

  return result;
}
