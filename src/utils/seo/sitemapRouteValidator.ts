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
  '/check-gun',
  '/check-vin',
  '/check-laptop',
  '/check-electronics',
  '/check-ebike',
  '/check-appliances',
  '/check-tools',
  '/check-jewelry',
  '/check-boat',
  '/check-xbox',
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
  '/blog/bought-stolen-phone-what-to-do',
  '/blog/what-is-a-blacklisted-imei',
  '/blog/icloud-locked-phone-meaning',
  '/blog/how-to-find-imei-number',
  '/blog/buying-used-phone-checklist',
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
  '/blog/facebook-marketplace-scams-guide',
  '/blog/check-if-phone-stolen-guide',
  '/blog/how-to-sell-verified-items',
  '/blog/free-vin-lookup-guide',
  '/for-sellers',
  
  // News & social
  '/press-kit',
  '/product-hunt',
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
  '/app/buyers',
  
  // Item variations
  '/check-iphone', '/check-iphone-14', '/check-iphone-15',
  '/check-samsung-phone', '/check-android-phone',
  '/check-apple-watch', '/check-playstation', '/check-nintendo-switch',
  '/check-camera', '/check-ipad', '/check-tablet', '/check-macbook',
  '/check-toyota', '/check-honda', '/check-ford', '/check-bmw',
  '/check-mercedes', '/check-tesla', '/check-motorcycle', '/check-harley-davidson',
  
  // How-to redirects
  '/how-to-verify-phone-not-stolen', '/how-to-check-if-iphone-is-stolen',
  '/how-to-avoid-buying-stolen-iphone', '/how-to-check-if-car-is-stolen-before-buying',
  '/how-to-check-if-anything-is-stolen-before-you-buy',
  
  // Verify/check catch-alls
  '/stolen-item-checker', '/avoid-buying-stolen-goods', '/avoid-stolen-goods',
  '/how-do-i-check-if-stolen', '/offerup-safety-verification',
  '/stolen-items-database',
  
  // VIN redirects
  '/vin-verification', '/free-vin-check-alternative', '/canada-vin-check',
  '/kentucky-vin-lookup', '/minnesota-vin-lookup', '/hawaii-vin-lookup', '/nebraska-vin-lookup',
  '/imei',
  
  // Business/info redirects
  '/accuracy', '/resellers', '/contact', '/api-docs',
  '/for-used-car-dealers', '/for-phone-repair-shops',
  '/cheaper-than-carfax', '/subscriptions', '/partnerships',
  '/enterprise-demo', '/case-studies', '/service-limitations',
  '/how-it-works-detailed', '/ebay-stolen-item-checker',
  '/craigslist-verification-guide',
  
  // City redirects
  '/city/los-angeles-ca/vin-verification', '/city/los-angeles-ca/imei-check',
  '/city/los-angeles-ca/stolen-item-checker',
  '/city/new-york-ny/vin-verification', '/city/new-york-ny/imei-check',
  '/city/new-york-ny/stolen-item-checker',
  '/city/chicago-il/vin-verification', '/city/chicago-il/imei-check',
  '/city/chicago-il/stolen-item-checker',
  '/city/phoenix', '/city/los-angeles', '/city/chicago',
  '/city/houston', '/city/new-york',
  
  // Verify sub-paths
  '/verify/auctions', '/verify/facebook-marketplace',
  
  // Guide redirects
  '/guides/imei-blacklist-explained', '/guides/imei-blacklist-guide',
  
  // GSC January 2026 noindex validation failures
  '/for-pawnshops', '/careers', '/trust-verification',
  '/marketplace-safety', '/pawn-shops',
  '/app/download', '/app/sellers',
  '/app/vs-carfax', '/app/vs-imeiinfo',
  '/app/features/barcode-scanner', '/app/stolen-database-search',
  '/app/investigate-stolen-property', '/app/lookup-stolen-items',
  '/app/check-stolen-before-buying', '/app/carfax-alternative',
  '/app/philadelphia', '/app/vs-imeipro',
  '/app/ebay-verification', '/app/offerup-safety',
  '/app/firearms-checker', '/app/pawn-shops',
  '/for-marketplace-sellers', '/cookies', '/database',
  '/for-brands', '/auction-houses',
  '/crime-prevention-impact', '/statistics',
  '/buyer-guide', '/check', '/ultimate-guide',
  '/marketplace-safety',
  
  // Blog post redirects
  '/blog/how-to-check-phone-stolen',
  '/blog/data-source-credibility',
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
  '/blog/scan-and-verify-using-safeorstolen-camera-feature-1',
  '/blog/vin-verification-for-used-cars-what-you-need-to-know-1',
  '/blog/enterprise-security',
  '/blog/2025-stolen-goods-statistics',
  '/blog/most-stolen-items-2025',
  '/blog/real-user-stories-stolen-goods-verification',
  '/blog/verification-methodology-how-we-check-stolen-items',
  '/blog/what-to-do-if-stolen',
  '/blog/what-to-do-if-you-bought-stolen',
  '/blog/industry-insights-2024',
  '/blog/ai-verification-technology',
  '/blog/verification-data-privacy',
  '/blog/serial-numbers-stolen-goods-101',
  '/blog/marketplace-red-flags-protection-guide',
  // REMOVED: These blog posts have REAL routes in VALID_ROUTES - not redirects
  
  // State VIN pages (only top 10 have real pages)
  '/alaska-vin-lookup',
  '/connecticut-vin-lookup',
  '/delaware-vin-lookup',
  '/new-mexico-vin-lookup',
  '/oklahoma-vin-lookup',
  '/vermont-vin-lookup',
  '/michigan-vin-lookup',
  '/wyoming-vin-lookup',
  '/australia-vin-check',
  '/uk-vehicle-check',
  
  // Stolen item check patterns
  '/tennessee-stolen-item-check', '/kentucky-stolen-item-check',
  '/austin-stolen-item-check', '/new-jersey-stolen-item-check',
  '/oakland-stolen-item-check', '/columbus-stolen-item-check',
  '/hawaii-stolen-item-check', '/vermont-stolen-item-check',
  '/indiana-stolen-item-check', '/new-york-stolen-item-check',
  '/michigan-stolen-item-check', '/florida-stolen-item-check',
  '/tucson-stolen-item-check', '/baltimore-stolen-item-check',
  '/indianapolis-stolen-item-check', '/san-francisco-stolen-item-check',
  '/denver-stolen-item-check', '/seattle-stolen-item-check',
  '/portland-stolen-item-check', '/nashville-stolen-item-check',
  '/dallas-stolen-item-check', '/milwaukee-stolen-item-check',
  '/iowa-stolen-item-check',
  '/mercari-verification', '/stolen-search-console',
  
  // GSC noindex fix 2026-03-08
  '/guides/how-to-check-stolen-items',
  '/community-watch',
  '/blog/serial-numbers-101',
  '/app/resellers',
  '/check-rv',
  '/app/new-york',
  
  // GSC crawled-not-indexed fix 2026-03-08
  '/blog/safeorstolen-offline-mode-verify-without-internet',
  '/blog/how-to-check-an-imei-properly',
  '/blog/safer-buyer-flow',
  '/blog/mobile-app-vs-website-verification',
  '/blog/arizona-theftaz-guide',
  '/blog/safeorstolen-app-guide',
  '/blog/complete-verification-guide-stolen-goods-check',
  '/blog/vin-verification-checklist',
  '/blog/vin-verification-for-used-cars-what-you-need-to-know',
  '/blog/how-to-verify-a-used-phone-before-buying-complete-imei-check-guide',
  '/blog/stolen-item-checker-in-new-york-city-complete-2025-guide',
  '/blog/tesla-model-3-vin-verification-avoid-stolen-electric-vehicles',
  '/for-college-students',
  '/check-atv',
  '/app/marketplace',
  '/how-to-check-laptop-serial-number',
  '/for-seniors',
  '/check-airpods',
  '/how-to-verify-used-electronics',
  '/safeorstolen-vs-autocheck',
  '/app/vs-stolen-register',
  '/marketplace',
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
