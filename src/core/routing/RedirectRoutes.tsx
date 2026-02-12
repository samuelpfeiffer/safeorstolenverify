/**
 * RedirectRoutes - React-level redirects for all legacy URLs
 * 
 * CRITICAL: These must exist as React routes (not just _redirects) because
 * the prerenderer/SSR executes React code. Without these, legacy URLs hit
 * the NotFound component which sets noindex, causing GSC exclusion.
 * 
 * The _redirects file handles the server-side 301s for direct browser requests,
 * but React Navigate handles the prerenderer/SSR path.
 */
import { Route, Navigate } from 'react-router-dom';

/**
 * Map of legacy paths → redirect targets
 * Organized by category for maintainability
 */
const REDIRECT_MAP: Record<string, string> = {
  // ===== APP VARIANT URLS =====
  '/android-app': '/app',
  '/mobile-app': '/app',
  '/ios-app': '/app',
  '/mobile-verification': '/app',
  '/app/download': '/app',

  // ===== VERIFY/CHECK CATCH-ALL =====
  '/tennessee-stolen-item-check': '/verify',
  '/kentucky-stolen-item-check': '/verify',
  '/mercari-verification': '/verify',
  '/austin-stolen-item-check': '/verify',
  '/stolen-search-console': '/verify',
  '/new-jersey-stolen-item-check': '/verify',
  '/oakland-stolen-item-check': '/verify',
  '/columbus-stolen-item-check': '/verify',
  '/hawaii-stolen-item-check': '/verify',
  '/vermont-stolen-item-check': '/verify',
  '/indiana-stolen-item-check': '/verify',
  '/new-york-stolen-item-check': '/verify',
  '/buyer-guide': '/verify',
  '/check': '/verify',
  '/app/investigate-stolen-property': '/verify',
  '/app/lookup-stolen-items': '/verify',
  '/app/check-stolen-before-buying': '/verify',
  '/michigan-stolen-item-check': '/verify',
  '/florida-stolen-item-check': '/verify',
  '/tucson-stolen-item-check': '/verify',
  '/baltimore-stolen-item-check': '/verify',
  '/indianapolis-stolen-item-check': '/verify',
  '/san-francisco-stolen-item-check': '/verify',
  '/denver-stolen-item-check': '/verify',
  '/seattle-stolen-item-check': '/verify',
  '/portland-stolen-item-check': '/verify',
  '/nashville-stolen-item-check': '/verify',

  // ===== VIN CHECKER REDIRECTS =====
  '/australia-vin-check': '/vin-checker',
  '/uk-vehicle-check': '/vin-checker',
  '/vermont-vin-lookup': '/vin-checker',
  '/michigan-vin-lookup': '/vin-checker',
  '/wyoming-vin-lookup': '/vin-checker',
  '/alaska-vin-lookup': '/vin-checker',
  '/new-mexico-vin-lookup': '/vin-checker',
  '/connecticut-vin-lookup': '/vin-checker',
  '/oklahoma-vin-lookup': '/vin-checker',
  '/vin': '/vin-checker',

  // ===== ABOUT PAGE REDIRECTS =====
  '/crime-prevention-impact': '/about',
  '/trust-verification': '/about',
  '/statistics': '/about',
  '/careers': '/about',
  '/fastercapital/raise-capital': '/about',

  // ===== SPECIFIC PAGE REDIRECTS =====
  '/ultimate-guide': '/how-it-works',
  '/guides/pawnshop-buying-tips': '/for-pawn-shops',
  '/app/ebay-verification': '/ebay-stolen-item-check',
  '/app/offerup-safety': '/offerup-safety',
  '/app/firearms-checker': '/firearms-check',
  '/for-brands': '/for-businesses',
  '/check-gaming-console': '/check-gaming-console-stolen',
  '/auction-houses': '/for-auction-houses',
  '/new-york/stolen-item-check': '/stolen-check-new-york-city',
  '/app/vs-imeipro': '/vs-imeiinfo',
  '/los-angeles/stolen-item-check': '/stolen-check-los-angeles',
  '/marketplace-safety': '/facebook-marketplace-safety',
  '/pawn-shops': '/for-pawn-shops',
  '/for-pawnshops': '/for-pawn-shops',
  '/app/sellers': '/for-marketplaces',
  '/app/vs-carfax': '/vs-carfax',
  '/app/features/barcode-scanner': '/app/barcode-scanner',
  '/app/stolen-database-search': '/stolen-database',
  '/app/vs-imeiinfo': '/vs-imeiinfo',
  '/app/philadelphia': '/stolen-check-philadelphia',
  '/app/carfax-alternative': '/vs-carfax',
  '/database': '/stolen-database',
  '/app/pawn-shops': '/for-pawn-shops',
  '/for-marketplace-sellers': '/for-marketplaces',
  '/cookies': '/privacy',

  // ===== SERIAL NUMBER CHECKER REDIRECTS =====
  '/check-fender-guitar': '/serial-number-checker',
  '/check-gibson-guitar': '/serial-number-checker',
  '/check-guitar': '/serial-number-checker',
  '/check-instrument': '/serial-number-checker',
  '/check-dslr-camera': '/serial-number-checker',
  '/check-violin': '/serial-number-checker',
  '/check-breitling': '/serial-number-checker',

  // ===== EBIKE/SCOOTER REDIRECTS =====
  '/check-scooter': '/check-ebike',

  // ===== BLOG POSTS WITH NUMERIC SUFFIXES → BASE SLUGS =====
  '/blog/understanding-imei-blacklists-and-what-they-mean-1759741218983': '/blog/complete-imei-guide-protect-yourself',
  '/blog/understanding-imei-blacklists-and-what-they-mean-1759395616027': '/blog/complete-imei-guide-protect-yourself',
  '/blog/how-law-enforcement-tracks-stolen-goods-1759827620043': '/blog/data-source-credibility-stolen-goods-verification',
  '/blog/how-pawn-shops-can-prevent-buying-stolen-goods-1759482018229': '/blog/pawn-shop-stolen-item-verification',
  '/blog/playstation-5-serial-number-verification-guide-1': '/blog/ps5-stolen-check-guide',
  '/blog/stolen-item-checker-in-new-york-city-complete-2025-guide-1': '/blog/complete-verification-guide',
  '/blog/los-angeles-imei-verification-phone-fraud-protection-1': '/blog/complete-imei-guide-protect-yourself',
  '/blog/iphone-16-pro-max-imei-check-complete-2025-buyer-protection-guide': '/blog/how-to-check-if-iphone-stolen',
  '/blog/iphone-16-pro-max-imei-check-complete-2025-buyer-protection-guide-1': '/blog/how-to-check-if-iphone-stolen',
  '/blog/how-law-enforcement-tracks-stolen-goods-2': '/blog/data-source-credibility-stolen-goods-verification',
  '/blog/safeorstolen-mobile-app-complete-guide-to-on-the-go-verification': '/blog/stolen-verification-app-guide',
  '/blog/avoid-buying-stolen-laptops': '/blog/protect-yourself-buying-used-electronics',
  '/blog/5-signs-used-phone-might-be-stolen': '/blog/how-to-check-if-phone-stolen',
  '/blog/craigslist-scam-prevention-item-verification-checklist': '/blog/scammer-tactics-exposed',
  '/blog/how-to-use-imei-checker-app': '/blog/imei-checker-app-download',
  '/blog/business-guide-preventing-stolen-goods': '/blog/pawn-shop-stolen-item-verification',
};

/**
 * Generate Route elements for all redirects.
 * Must be placed BEFORE the catch-all "*" route in AppRoutes.
 */
export const RedirectRoutes = () => (
  <>
    {Object.entries(REDIRECT_MAP).map(([from, to]) => (
      <Route key={from} path={from} element={<Navigate to={to} replace />} />
    ))}
  </>
);

export default RedirectRoutes;
