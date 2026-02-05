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
  '/how-it-works',
  '/auth',
  '/report-stolen',
  '/checkout-redirect',
  '/verification-success',
  '/testimonials',
  '/download',
  '/compare',
  '/free-tools',
  
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
  
  // Competitor comparisons
  '/vs-checkmend',
  '/vs-imeiinfo',
  '/vs-swappa',
  '/vs-carfax',
  '/vs-autocheck',
  
  // App pages
  '/app/features',
  '/app/stolen-phone-checker',
  '/app/vin-checker',
  '/app/barcode-scanner',

  // Mobile PWA pages (standalone install) - real routes but NOT in sitemap
  '/mobile-onboarding',
  '/mobile-verify',
  '/mobile-dashboard',
  '/mobile-settings',
  
  // Business pages
  '/for-pawn-shops',
  '/for-dealers',
  '/for-marketplaces',
  '/for-auction-houses',
  '/for-businesses',
  '/for-electronics-resellers',
  '/for-insurance-companies',
  '/for-law-enforcement',
  
  // Marketplace pages
  '/facebook-marketplace-stolen-check',
  '/craigslist-safety-verification',
  '/offerup-verify-not-stolen',
  '/ebay-stolen-item-check',
  '/mercari-stolen-check',
  '/poshmark-stolen-check',
  '/stockx-verification',
  '/letgo-stolen-check',
  
  // GSC noindex fix pages (Jan 2026) - now have real routes
  '/marketplace-integration',
  '/real-time-verification',
  '/how-to-check-if-item-stolen',
  '/transparency',
  '/press-release',
  '/mobile',
  '/community',
  '/vs-stolenregister',
  '/data-sources',
  '/check-android',
  '/verify/pawnshops',
  '/comprehensive-guide',
  '/check-firearm',
  '/resource-center',
  '/features',
  '/stolen-phone-checker',
  '/phone-blacklist-check',
  '/facebook-marketplace-safety',
  '/offerup-safety',
  '/how-to-check-if-phone-stolen',
  '/how-to-check-if-car-stolen',
  
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
  
  // Remaining 39 state license plate pages (GSC noindex fix - all have routes)
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
  '/washington-dc-license-plate-lookup',
  
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
  
  // News & social
  '/news/onevalley-recognition',
  '/press-kit',
  '/product-hunt',
  '/youtube',
  '/youtube/stolen-item-check',
  '/youtube/marketplace-safety',
  '/youtube/vin-check',
  '/youtube/imei-check',
  '/youtube/marketplace-protection',
  '/crunchbase',
]);

// URLs that redirect (not be in sitemap) - GSC noindex fix list
export const REDIRECT_URLS = new Set([
  // Legacy app URLs
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
  
  // GSC January 2026 noindex validation failures - redirect to real pages
  '/for-pawnshops', // → /for-pawn-shops
  '/careers', // → /about
  '/trust-verification', // → /about
  '/marketplace-safety', // → /facebook-marketplace-safety
  '/pawn-shops', // → /for-pawn-shops
  '/app/download', // → /download
  '/app/sellers', // → /about
  '/app/vs-carfax', // → /vs-carfax
  '/app/vs-imeiinfo', // → /vs-imeiinfo
  '/app/features/barcode-scanner', // → /app/barcode-scanner
  '/app/stolen-database-search', // → /stolen-database
  '/app/investigate-stolen-property', // → /verify
  '/app/lookup-stolen-items', // → /verify
  '/app/check-stolen-before-buying', // → /verify
  '/app/carfax-alternative', // → /vs-carfax
  '/app/philadelphia', // → /stolen-check-philadelphia
  
  // Blog posts with timestamps (redirected to clean versions)
  '/blog/how-to-check-phone-stolen', // → /blog/how-to-check-if-phone-stolen
  '/blog/understanding-imei-blacklists-and-what-they-mean-1759741218983',
  '/blog/understanding-imei-blacklists-and-what-they-mean-1759395616027',
  '/blog/how-law-enforcement-tracks-stolen-goods-1759827620043',
  '/blog/how-pawn-shops-can-prevent-buying-stolen-goods-1759482018229',
  '/blog/playstation-5-serial-number-verification-guide-1',
  '/blog/stolen-item-checker-in-new-york-city-complete-2025-guide-1',
  '/blog/los-angeles-imei-verification-phone-fraud-protection-1',
  '/blog/iphone-16-pro-max-imei-check-complete-2025-buyer-protection-guide',
  '/blog/iphone-16-pro-max-imei-check-complete-2025-buyer-protection-guide-1',
  '/blog/how-law-enforcement-tracks-stolen-goods-2',
  '/blog/safeorstolen-mobile-app-complete-guide-to-on-the-go-verification',
  '/blog/business-guide-preventing-stolen-goods',
  '/blog/avoid-buying-stolen-laptops',
  '/blog/5-signs-used-phone-might-be-stolen',
  '/blog/craigslist-scam-prevention-item-verification-checklist',
  '/blog/how-to-use-imei-checker-app',
  '/blog/theft-trends-report-2024',
  '/blog/bicycle-stolen-serial-number-check',
  '/blog/verify-item-before-meetup',
  
  // State VIN pages (only top 10 have real pages)
  '/alaska-vin-lookup',
  '/connecticut-vin-lookup',
  '/delaware-vin-lookup',
  '/new-mexico-vin-lookup',
  '/oklahoma-vin-lookup',
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
