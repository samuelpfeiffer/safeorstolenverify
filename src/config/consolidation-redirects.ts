/**
 * COMPREHENSIVE SITE CONSOLIDATION REDIRECT MAP
 * Maps 280+ bloat pages to 9 core SaaS pages
 * 
 * CORE PAGES:
 * 1. / (Home)
 * 2. /verify (Main verification tool)
 * 3. /dashboard (User dashboard)
 * 4. /account (Settings/Profile)
 * 5. /mobile-app (Mobile app download)
 * 6. /pricing (Pricing plans)
 * 7. /about (About/How it works)
 * 8. /faq (FAQ/Support)
 * 9. /terms, /privacy (Legal)
 */

export const CONSOLIDATION_REDIRECT_MAP: Record<string, string> = {
  // ===== STATE VIN LOOKUPS (50 pages) → /verify =====
  '/arizona-vin-lookup': '/verify',
  '/california-vin-lookup': '/verify',
  '/texas-vin-lookup': '/verify',
  '/florida-vin-lookup': '/verify',
  '/new-york-vin-lookup': '/verify',
  '/virginia-vin-lookup': '/verify',
  '/massachusetts-vin-lookup': '/verify',
  '/connecticut-vin-lookup': '/verify',
  '/delaware-vin-lookup': '/verify',
  '/maine-vin-lookup': '/verify',
  '/maryland-vin-lookup': '/verify',
  '/new-hampshire-vin-lookup': '/verify',
  '/new-jersey-vin-lookup': '/verify',
  '/rhode-island-vin-lookup': '/verify',
  '/alabama-vin-lookup': '/verify',
  '/arkansas-vin-lookup': '/verify',
  '/kentucky-vin-lookup': '/verify',
  '/louisiana-vin-lookup': '/verify',
  '/mississippi-vin-lookup': '/verify',
  '/south-carolina-vin-lookup': '/verify',
  '/tennessee-vin-lookup': '/verify',
  '/west-virginia-vin-lookup': '/verify',
  '/indiana-vin-lookup': '/verify',
  '/iowa-vin-lookup': '/verify',
  '/vermont-vin-lookup': '/verify',
  '/michigan-vin-lookup': '/verify',
  '/ohio-vin-lookup': '/verify',
  '/pennsylvania-vin-lookup': '/verify',
  '/north-carolina-vin-lookup': '/verify',
  '/georgia-vin-lookup': '/verify',
  '/illinois-vin-lookup': '/verify',
  '/kansas-vin-lookup': '/verify',
  '/minnesota-vin-lookup': '/verify',
  '/missouri-vin-lookup': '/verify',
  '/nebraska-vin-lookup': '/verify',
  '/north-dakota-vin-lookup': '/verify',
  '/south-dakota-vin-lookup': '/verify',
  '/wisconsin-vin-lookup': '/verify',
  '/alaska-vin-lookup': '/verify',
  '/colorado-vin-lookup': '/verify',
  '/hawaii-vin-lookup': '/verify',
  '/idaho-vin-lookup': '/verify',
  '/montana-vin-lookup': '/verify',
  '/nevada-vin-lookup': '/verify',
  '/new-mexico-vin-lookup': '/verify',
  '/oklahoma-vin-lookup': '/verify',
  '/oregon-vin-lookup': '/verify',
  '/utah-vin-lookup': '/verify',
  '/washington-vin-lookup': '/verify',
  '/wyoming-vin-lookup': '/verify',

  // ===== LICENSE PLATE LOOKUPS (5 pages) → /verify =====
  '/arizona-license-plate-lookup': '/verify',
  '/florida-license-plate-lookup': '/verify',
  '/texas-license-plate-lookup': '/verify',
  '/california-license-plate-lookup': '/verify',
  '/new-york-license-plate-lookup': '/verify',
  '/north-carolina-license-plate-lookup': '/verify',

  // ===== CITY PAGES (50+ pages) → /verify =====
  '/phoenix-verification': '/verify',
  '/los-angeles-verification': '/verify',
  '/san-diego-verification': '/verify',
  '/san-jose-verification': '/verify',
  '/sacramento-verification': '/verify',
  '/oakland-verification': '/verify',
  '/miami-verification': '/verify',
  '/orlando-verification': '/verify',
  '/new-york-city-verification': '/verify',
  '/portland-verification': '/verify',
  '/seattle-verification': '/verify',
  '/memphis-verification': '/verify',
  '/nashville-verification': '/verify',
  '/louisville-verification': '/verify',
  '/milwaukee-verification': '/verify',
  '/raleigh-verification': '/verify',
  '/omaha-verification': '/verify',
  '/mesa-verification': '/verify',

  // ===== ITEM-SPECIFIC CHECK PAGES (40+ pages) → /verify =====
  '/check-phone': '/verify',
  '/check-iphone': '/verify',
  '/check-iphone-14': '/verify',
  '/check-iphone-15': '/verify',
  '/check-samsung-phone': '/verify',
  '/check-android-phone': '/verify',
  '/check-laptop': '/verify',
  '/check-macbook': '/verify',
  '/check-ipad': '/verify',
  '/check-car': '/verify',
  '/check-bike': '/verify',
  '/check-firearm': '/verify',
  '/check-gaming-console': '/verify',
  '/check-electronics': '/verify',
  '/check-if-stolen': '/verify',
  '/check-stolen-item': '/verify',
  '/check-stolen-database': '/verify',
  '/imei-check': '/verify',
  '/imei-checker': '/verify',
  '/imei-checker-app': '/verify',
  '/vin-checker': '/verify',
  '/vin-verification': '/verify',
  '/serial-number-checker': '/verify',
  '/stolen-item-checker': '/verify',
  '/stolen-property-lookup': '/verify',
  '/verification-hub': '/verify',
  '/verify-not-stolen': '/verify',
  '/mobile-verify': '/verify',
  '/firearms-check': '/verify',
  '/search-stolen-phone': '/verify',
  '/search-stolen-bikes': '/verify',
  '/search-stolen-firearms': '/verify',
  '/stolen-phone-check': '/verify',
  '/stolen-property-check': '/verify',
  '/stolen-goods-checker': '/verify',
  '/stolen-goods-search': '/verify',
  '/stolen-item-lookup': '/verify',
  '/stolen-items-database': '/verify',
  '/stolen-items-list': '/verify',
  '/stolen-vehicle-database': '/verify',
  '/free-stolen-check': '/verify',

  // ===== APP SUB-PAGES (40+ pages) → /mobile-app =====
  '/app/download': '/mobile-app',
  '/app/ios': '/mobile-app',
  '/app/android': '/mobile-app',
  '/app/pwa': '/mobile-app',
  '/app/install': '/mobile-app',
  '/app/features': '/mobile-app',
  '/app/features/barcode-scanner': '/mobile-app',
  '/app/features/offline-mode': '/mobile-app',
  '/app/features/instant-verification': '/mobile-app',
  '/install-app': '/mobile-app',
  '/get-app': '/mobile-app',
  '/download': '/mobile-app',
  '/mobile-verification': '/mobile-app',
  '/verification-app': '/mobile-app',
  '/android-app': '/mobile-app',
  '/ios-app': '/mobile-app',

  // ===== BUSINESS PAGES (15 pages) → /pricing =====
  '/for-pawn-shops': '/pricing',
  '/pawn-shops': '/pricing',
  '/for-consumers': '/pricing',
  '/for-brands': '/pricing',
  '/for-phone-repair-shops': '/pricing',
  '/auction-houses': '/pricing',
  '/reseller': '/pricing',
  '/brands': '/pricing',
  '/law-enforcement': '/pricing',
  '/enterprise-demo': '/pricing',
  '/company-verification': '/pricing',
  '/marketplace-integration': '/pricing',
  '/integrations': '/pricing',
  '/data-partnerships': '/pricing',
  '/partnerships': '/pricing',

  // ===== COMPARISON PAGES (10 pages) → /about =====
  '/vs-carfax': '/about',
  '/vs-checkmend': '/about',
  '/vs-imei-info': '/about',
  '/vs-imeipro': '/about',
  '/vs-swappa': '/about',
  '/vs-ebay': '/about',
  '/vs-greyscout': '/about',
  '/comparison-checkmend': '/about',
  '/carfax-alternative': '/about',
  '/competitor-alternatives': '/about',
  '/competitor-alternatives-hub': '/about',

  // ===== GUIDES & HOW-TO PAGES (20+ pages) → /faq =====
  '/how-to-check-if-anything-is-stolen-before-you-buy': '/faq',
  '/how-to-check-if-item-stolen': '/faq',
  '/how-to-check-laptop-stolen': '/faq',
  '/how-do-i-check-if-stolen': '/faq',
  '/avoid-buying-stolen-goods': '/faq',
  '/avoid-stolen-goods': '/faq',
  '/buy-used-electronics-safely': '/faq',
  '/buyer-guide': '/faq',
  '/seller-guide': '/faq',
  '/marketplace-safety': '/faq',
  '/marketplace': '/faq',
  '/ultimate-guide': '/faq',
  '/ultimate-guide-buying-safely': '/faq',
  '/ultimate-guide-not-buying-stolen': '/faq',
  '/comprehensive-guide': '/faq',
  '/legal-guide': '/faq',
  '/educational-content-hub': '/faq',
  '/resource-center': '/faq',
  '/tools': '/faq',

  // ===== INFO/CONTENT PAGES (20+ pages) → /about =====
  '/how-it-works-detailed': '/about',
  '/data-sources': '/about',
  '/database': '/about',
  '/accuracy': '/about',
  '/transparency': '/about',
  '/our-mission': '/about',
  '/our-story': '/about',
  '/our-team': '/about',
  '/about-us': '/about',
  '/about-problem': '/about',
  '/problem': '/about',
  '/organization': '/about',
  '/global-mission': '/about',
  '/global-domination': '/about',
  '/crime-prevention-impact': '/about',
  '/press': '/about',
  '/press-releases': '/about',
  '/press-release': '/about',
  '/careers': '/about',
  '/contact': '/about',
  '/case-studies': '/about',
  '/success-stories': '/about',
  '/testimonials': '/about',
  '/community': '/about',
  '/community-watch': '/about',
  '/features': '/about',
  '/services': '/about',
  '/item-categories': '/about',
  '/premium-features': '/about',
  '/real-time-verification': '/about',
  '/trust-verification': '/about',
  '/social-media-monitoring': '/about',

  // ===== STATISTICS/ANALYSIS PAGES → /about =====
  '/statistics': '/about',
  '/statistics/stolen-goods': '/about',
  '/statistics/stolen-goods-2024': '/about',
  '/statistics/stolen-goods-2025': '/about',
  '/stolen-goods-statistics': '/about',
  '/stolen-goods-statistics-2024': '/about',
  '/theft-trends-blog': '/about',
  '/search-trends': '/about',

  // ===== REGION/INTERNATIONAL PAGES → /about =====
  '/region/brazil': '/about',
  '/region/india': '/about',
  '/region/uk': '/about',
  '/australia-vin-check': '/about',
  '/canada-vin-check': '/about',
  '/uk-vehicle-check': '/about',

  // ===== ADMIN/INTERNAL PAGES (Keep blocked via robots.txt) =====
  // These should remain in AppRoutes but blocked from public access

  // ===== SEO/TECHNICAL PAGES → /about =====
  '/seo-health': '/about',
  '/seo-strategy': '/about',
  '/seo-backlink-strategy': '/about',
  '/traffic-strategy': '/about',
  '/local-seo': '/about',

  // ===== DEPRECATED/OLD URLS =====
  '/bulk': '/verify',
  '/vin': '/verify',
  '/imei': '/verify',
  '/stolen-merchandise-check': '/verify',
  '/disclaimer': '/terms',
  '/terms-of-service': '/terms',
  '/privacy-policy': '/privacy',
  '/cookies': '/privacy',
  '/refunds': '/terms',
  '/service-limitations': '/terms',

  // ===== MISC/OTHER =====
  '/report-stolen': '/verify',
  '/videos': '/about',
  '/product-roadmap': '/about',
  '/developer-portal': '/pricing',
  '/api-docs': '/pricing',
  '/api-management': '/pricing',
  '/sitemap': '/',
  '/rss-feed': '/blog',
  '/referral': '/pricing',
  '/subscriptions': '/pricing',
  '/checkout-redirect': '/pricing',
  '/receipts': '/dashboard',
  '/purchase-history': '/dashboard',
  '/search-history': '/dashboard',
  '/security-settings': '/account',
  '/activity-timeline': '/dashboard',
};

/**
 * Get redirect destination for a given path
 */
export function getConsolidationRedirect(path: string): string | null {
  const cleanPath = path.toLowerCase().trim();
  return CONSOLIDATION_REDIRECT_MAP[cleanPath] || null;
}

/**
 * Check if path should be redirected during consolidation
 */
export function shouldConsolidateRedirect(path: string): boolean {
  return getConsolidationRedirect(path) !== null;
}

/**
 * Get all paths that redirect to a specific core page
 */
export function getRedirectsToCorePage(corePage: string): string[] {
  return Object.entries(CONSOLIDATION_REDIRECT_MAP)
    .filter(([_, target]) => target === corePage)
    .map(([source]) => source);
}

/**
 * Statistics about the consolidation
 */
export const CONSOLIDATION_STATS = {
  totalRedirects: Object.keys(CONSOLIDATION_REDIRECT_MAP).length,
  stateVINPages: 50,
  licensePlatePages: 5,
  cityPages: 18,
  itemCheckPages: 45,
  appSubPages: 16,
  businessPages: 15,
  comparisonPages: 11,
  guidePages: 18,
  infoPages: 35,
  otherPages: 20,
  corePages: 9,
};
