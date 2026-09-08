/**
 * Legacy URL -> destination map, extracted from the pre-migration RedirectRoutes.tsx.
 * Served as real 301 redirects from the root route's beforeLoad (SSR-aware).
 * NEVER delete entries - URL preservation mandate.
 */
export const LEGACY_REDIRECT_MAP: Record<string, string> = {
  // ===== REMOVED PAGES =====
  '/news/onevalley-recognition': '/press',

  // ===== REMOVED VIDEO PAGES (video content retired) =====
  '/youtube': '/',
  '/youtube/*': '/',
  '/videos': '/',
  '/videos/*': '/',

  // ===== APP VARIANT URLS =====
  '/android-app': '/app',
  '/mobile-app': '/app',
  '/ios-app': '/app',
  '/mobile-verification': '/app',
  '/app/download': '/app',
  '/app/buyers': '/app',

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
  '/dallas-stolen-item-check': '/stolen-check-dallas',
  '/milwaukee-stolen-item-check': '/verify',
  '/iowa-stolen-item-check': '/verify',
  '/stolen-item-checker': '/verify',
  '/verify-not-stolen': '/verify',
  '/how-do-i-check-if-stolen': '/verify',
  '/avoid-buying-stolen-goods': '/verify',
  '/avoid-stolen-goods': '/verify',
  '/how-to-check-if-anything-is-stolen-before-you-buy': '/verify',
  '/offerup-safety-verification': '/verify',
  '/stolen-items-database': '/stolen-database',

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
  '/kentucky-vin-lookup': '/vin-checker',
  '/minnesota-vin-lookup': '/vin-checker',
  '/hawaii-vin-lookup': '/vin-checker',
  '/nebraska-vin-lookup': '/vin-checker',
  '/canada-vin-check': '/vin-checker',
  '/vin-verification': '/vin-checker',
  '/free-vin-check-alternative': '/vin-checker',

  // ===== IMEI REDIRECTS =====
  '/imei': '/imei-checker',

  // ===== AI-PREFIXED VARIANTS (no dedicated page exists — 301 to the real one) =====
  '/ai-imei-check': '/imei-checker',
  '/ai-license-plate-check': '/license-plate-lookup',
  '/ai-serial-number-check': '/serial-number-checker',
  '/firearms-serial-check': '/firearms-serial-number-check',


  // ===== ABOUT PAGE REDIRECTS =====
  '/crime-prevention-impact': '/about',
  '/trust-verification': '/about',
  '/statistics': '/about',
  '/careers': '/about',
  '/fastercapital/raise-capital': '/about',
  '/fastercapital/tech-cofounder': '/about',
  '/accuracy': '/about',
  '/resellers': '/about',
  '/contact': '/about',
  '/api-docs': '/about',

  // ===== ITEM VARIATION REDIRECTS =====
  '/check-iphone': '/check-phone',
  '/check-iphone-14': '/check-phone',
  '/check-iphone-15': '/check-phone',
  '/check-samsung-phone': '/check-phone',
  '/check-android-phone': '/check-phone',
  '/check-apple-watch': '/check-electronics',
  '/check-playstation': '/check-electronics',
  '/check-nintendo-switch': '/check-electronics',
  '/check-camera': '/check-electronics',
  '/check-ipad': '/check-electronics',
  '/check-tablet': '/check-electronics',
  '/check-macbook': '/check-laptop',
  '/check-toyota': '/check-car',
  '/check-honda': '/check-car',
  '/check-ford': '/check-car',
  '/check-bmw': '/check-car',
  '/check-mercedes': '/check-car',
  '/check-tesla': '/check-car',
  '/check-motorcycle': '/check-car',
  '/check-harley-davidson': '/check-car',

  // ===== HOW-TO REDIRECTS =====
  '/how-to-verify-phone-not-stolen': '/check-phone',
  '/how-to-check-if-iphone-is-stolen': '/check-phone',
  '/how-to-avoid-buying-stolen-iphone': '/check-phone',
  '/how-to-check-if-car-is-stolen-before-buying': '/check-car',

  // ===== SPECIFIC PAGE REDIRECTS =====
  '/ultimate-guide': '/how-it-works',
  '/how-it-works-detailed': '/how-it-works',
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
  '/for-used-car-dealers': '/for-dealers',
  '/for-phone-repair-shops': '/for-dealers',
  '/cheaper-than-carfax': '/carfax-alternative-free',
  '/subscriptions': '/pricing',
  '/partnerships': '/for-businesses',
  '/enterprise-demo': '/pricing',
  '/case-studies': '/testimonials',
  '/service-limitations': '/terms',
  '/ebay-stolen-item-checker': '/ebay-stolen-item-check',
  '/craigslist-verification-guide': '/craigslist-safety-verification',

  // ===== MARKETPLACE VERIFY REDIRECTS =====
  '/verify/auctions': '/for-auction-houses',
  '/verify/facebook-marketplace': '/facebook-marketplace-stolen-check',
  // REMOVED: /verify/pawnshops has real route (VerifyPawnshopsPage) in AppRoutes.tsx

  // ===== CITY REDIRECTS =====
  '/city/los-angeles-ca/vin-verification': '/stolen-check-los-angeles',
  '/city/los-angeles-ca/imei-check': '/stolen-check-los-angeles',
  '/city/los-angeles-ca/stolen-item-checker': '/stolen-check-los-angeles',
  '/city/new-york-ny/vin-verification': '/stolen-check-new-york-city',
  '/city/new-york-ny/imei-check': '/stolen-check-new-york-city',
  '/city/new-york-ny/stolen-item-checker': '/stolen-check-new-york-city',
  '/city/chicago-il/vin-verification': '/illinois-vin-lookup',
  '/city/chicago-il/imei-check': '/imei-checker',
  '/city/chicago-il/stolen-item-checker': '/verify',
  '/city/phoenix': '/stolen-check-phoenix',
  '/city/los-angeles': '/stolen-check-los-angeles',
  '/city/chicago': '/stolen-check-chicago',
  '/city/houston': '/stolen-check-houston',
  '/city/new-york': '/stolen-check-new-york-city',

  // ===== GUIDE REDIRECTS =====
  '/guides/imei-blacklist-explained': '/about',
  '/guides/imei-blacklist-guide': '/about',

  // ===== SERIAL NUMBER CHECKER REDIRECTS =====
  '/check-fender-guitar': '/serial-number-checker',
  '/check-gibson-guitar': '/serial-number-checker',
  '/check-guitar': '/serial-number-checker',
  '/check-instrument': '/serial-number-checker',
  '/check-dslr-camera': '/serial-number-checker',
  '/check-violin': '/serial-number-checker',
  '/check-breitling': '/serial-number-checker',
  '/check-dewalt-tools': '/serial-number-checker',

  // ===== EBIKE/SCOOTER REDIRECTS =====
  '/check-scooter': '/check-ebike',
  '/check-bicycle': '/check-bike',

  // ===== GSC SOFT 404 FIX 2026-03-08 =====
  // URLs missing from React redirects causing prerenderer to hit NotFound → noindex
  '/analytics': '/dashboard',
  '/stolen-phone-database': '/stolen-database',
  '/stolen-car-database': '/stolen-database',
  '/offerup-verification': '/verify',
  '/for-parents': '/faq',
  '/what-happens-if-you-buy-stolen-goods': '/faq',
  '/stolen-checker-app': '/app',
  '/verify-vin-before-purchase': '/vin-checker',
  '/check-samsung': '/check-phone',
  '/seller-guide': '/about',
  '/seo-strategy': '/about',
  '/our-mission': '/about',
  '/stolen-property-lookup': '/verify',
  '/firearm-serial-check': '/firearms-check',
  '/ebay-verification': '/ebay-stolen-item-check',
  '/facebook-marketplace-verification': '/facebook-marketplace-stolen-check',
  '/craigslist-verification': '/craigslist-safety-verification',
  '/how-to-check-if-phone-is-stolen': '/check-phone',
  '/how-to-verify-car-not-stolen': '/check-car',
  '/refunds': '/terms',
  '/app/serial-number-checker': '/serial-number-checker',
  '/app/imei-checker': '/imei-checker',
  '/app/law-enforcement': '/app',
  '/app/ios': '/app',
  '/app/features/history': '/app/features',
  '/app/research-stolen-car': '/app',
  '/app/research-stolen-phone': '/app',
  '/app/buyer-protection-research': '/app',
  '/app/facebook-marketplace-checker': '/app',
  '/app/pawnshop-verification': '/app',
  '/app/secondhand-research-app': '/app',
  '/app/houston': '/app',

  // ===== STATE REDIRECTS (Soft 404 fix) =====
  '/new-jersey-vin-lookup': '/vin-checker',
  '/alabama-vin-lookup': '/vin-checker',
  '/maryland-vin-lookup': '/vin-checker',
  '/new-york/vin-check': '/new-york-vin-lookup',

  // ===== COMPARISON REDIRECTS (Soft 404 fix) =====
  '/vs-stolenphonechecker': '/compare',
  '/vs-imeipro': '/vs-imeiinfo',
  '/vs/checkmend': '/vs-checkmend',
  '/competitor-alternatives': '/compare',

  // ===== GSC 404 FIX 2026-03-08 =====
  '/minneapolis-stolen-item-check': '/verify',
  '/louisville-stolen-item-check': '/verify',
  '/ultimate-guide-not-buying-stolen-goods': '/faq',
  '/about-problem': '/about',
  '/blog/imei-checker-app-comparison': '/comparisons/best-free-imei-checkers-2025',
  '/blog/red-flags-buying-used-electronics-1759314016.095080': '/blog',
  '/blog/complete-guide-verify-imei-numbers-used-phone-1759314016.095080': '/blog',
  '/blog/vin-verification-complete-guide-used-cars-1759314016.095080': '/blog',

  // ===== STATE/CITY DIRECTORY REDIRECTS =====
  '/state/new-york/stolen-item-checker': '/new-york-vin-lookup',
  '/state/california/stolen-item-checker': '/california-vin-lookup',
  '/state/florida/stolen-item-checker': '/florida-vin-lookup',
  '/chicago/stolen-item-check': '/stolen-check-chicago',
  '/mesa-stolen-item-check': '/verify',

  // ===== BLOG REDIRECTS =====
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
  '/blog/how-to-check-phone-stolen': '/blog/how-to-check-if-phone-stolen',
  '/blog/data-source-credibility': '/blog/data-source-credibility-stolen-goods-verification',
  '/blog/scan-and-verify-using-safeorstolen-camera-feature-1': '/app',
  '/blog/vin-verification-for-used-cars-what-you-need-to-know-1': '/blog/complete-vin-guide',
  '/blog/enterprise-security': '/blog',
  '/blog/2025-stolen-goods-statistics': '/blog',
  '/blog/most-stolen-items-2025': '/blog',
  '/blog/real-user-stories-stolen-goods-verification': '/blog/real-user-stories',
  '/blog/verification-methodology-how-we-check-stolen-items': '/blog/verification-methodology',
  '/blog/what-to-do-if-stolen': '/blog',
  '/blog/what-to-do-if-you-bought-stolen': '/blog',
  '/blog/industry-insights-2024': '/blog',
  '/blog/ai-verification-technology': '/blog',
  '/blog/verification-data-privacy': '/blog',
  '/blog/serial-numbers-stolen-goods-101': '/blog',
  '/blog/marketplace-red-flags-protection-guide': '/blog/scammer-tactics-exposed',
  // GSC Soft 404 fix 2026-03-08: Blog slugs hitting NotFound in prerenderer
  '/blog/how-to-check-if-phone-is-stolen': '/blog/how-to-check-if-phone-stolen',
  '/blog/best-stolen-item-checker-apps-2025': '/blog',
  '/blog/why-verify-serial-numbers': '/blog',
  '/blog/complete-marketplace-buyers-checklist': '/blog',
  '/blog/how-to-install-safeorstolen-app': '/app',
  '/blog/scan-and-verify-using-safeorstolen-camera-feature': '/app',
  '/blog/tesla-model-3-vin-verification-avoid-stolen-electric-vehicles-1': '/blog',
  // REMOVED: These blog posts have REAL routes - they must NOT be redirected
  // /blog/phone-verification-guide, /blog/bicycle-stolen-serial-number-check,
  // /blog/firearm-serial-number-verification, /blog/verify-item-before-meetup,
  // /blog/pawn-shop-stolen-item-verification, /blog/theft-trends-report-2024,
  // /blog/ultimate-marketplace-buyers-guide, /blog/like-carfax-for-phones

  // ===== GSC "Not found (404)" slugs (mirrors EXTRA_REDIRECT_STUBS in
  // scripts/apply-prerender.mjs — keep the two lists in sync) =====
  '/idaho-vin-lookup': '/vin-checker',
  '/utah-vin-lookup': '/vin-checker',
  '/nevada-vin-lookup': '/vin-checker',
  '/kansas-vin-lookup': '/vin-checker',
  '/wisconsin-stolen-item-check': '/verify',
  '/maine-stolen-item-check': '/verify',
  '/washington-dc-stolen-item-check': '/verify',
  '/virginia-stolen-item-check': '/verify',
  '/ohio-stolen-item-check': '/verify',
  '/alabama-stolen-item-check': '/verify',
  '/memphis-stolen-item-check': '/verify',
  '/miami-stolen-item-check': '/stolen-check-miami',
  '/vs-nicb': '/nicb-alternative',
  '/blog/safeorstolen-app-guide': '/blog/stolen-verification-app-guide',
  '/blog/avoid-buying-stolen-items': '/blog/ultimate-marketplace-buyers-guide',
};

/** Resolve a legacy path to its destination, handling trailing slashes and wildcard entries. */
export function resolveLegacyRedirect(pathname: string): string | null {
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const direct = LEGACY_REDIRECT_MAP[p];
  if (direct) return direct;
  for (const [from, to] of Object.entries(LEGACY_REDIRECT_MAP)) {
    if (from.endsWith("/*") && (p === from.slice(0, -2) || p.startsWith(from.slice(0, -1)))) {
      return to;
    }
  }
  return null;
}
