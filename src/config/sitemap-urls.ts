/**
 * Comprehensive Sitemap URL Configuration
 * All URLs for search engine indexing - SYNCED with public/sitemap.xml
 */

export interface SitemapURL {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

export const SITEMAP_URLS: SitemapURL[] = [
  // ============================================
  // CORE PAGES (10)
  // ============================================
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/verify', priority: 0.95, changefreq: 'daily' },
  { path: '/pricing', priority: 0.85, changefreq: 'weekly' },
  { path: '/how-it-works', priority: 0.75, changefreq: 'monthly' },
  { path: '/about', priority: 0.75, changefreq: 'monthly' },
  { path: '/faq', priority: 0.75, changefreq: 'monthly' },
  { path: '/terms', priority: 0.40, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.40, changefreq: 'yearly' },
  { path: '/testimonials', priority: 0.70, changefreq: 'monthly' },

  // ============================================
  // APP PAGES (6)
  // ============================================
  { path: '/app', priority: 0.95, changefreq: 'weekly' },
  { path: '/app/features', priority: 0.90, changefreq: 'weekly' },
  { path: '/app/stolen-phone-checker', priority: 0.90, changefreq: 'weekly' },
  { path: '/app/barcode-scanner', priority: 0.90, changefreq: 'weekly' },
  { path: '/download', priority: 0.95, changefreq: 'weekly' },
  { path: '/app/vin-checker', priority: 0.85, changefreq: 'weekly' },

  // ============================================
  // ITEM LANDING PAGES (15)
  // ============================================
  { path: '/imei-checker', priority: 0.90, changefreq: 'weekly' },
  { path: '/vin-checker', priority: 0.90, changefreq: 'weekly' },
  { path: '/serial-number-checker', priority: 0.85, changefreq: 'weekly' },
  { path: '/check-phone', priority: 0.85, changefreq: 'weekly' },
  { path: '/check-car', priority: 0.85, changefreq: 'weekly' },
  { path: '/check-bike', priority: 0.80, changefreq: 'weekly' },
  { path: '/check-laptop', priority: 0.80, changefreq: 'weekly' },
  { path: '/check-electronics', priority: 0.80, changefreq: 'weekly' },
  { path: '/check-ebike', priority: 0.80, changefreq: 'weekly' },
  { path: '/check-appliances', priority: 0.80, changefreq: 'weekly' },
  { path: '/check-tools', priority: 0.80, changefreq: 'weekly' },
  { path: '/check-jewelry', priority: 0.80, changefreq: 'weekly' },
  { path: '/check-boat', priority: 0.80, changefreq: 'weekly' },
  { path: '/firearms-check', priority: 0.80, changefreq: 'weekly' },
  { path: '/license-plate-lookup', priority: 0.80, changefreq: 'weekly' },

  // ============================================
  // COMPETITOR COMPARISON PAGES (11)
  // ============================================
  { path: '/compare', priority: 0.85, changefreq: 'monthly' },
  { path: '/vs-checkmend', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-imeiinfo', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-swappa', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-carfax', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-autocheck', priority: 0.80, changefreq: 'monthly' },
  // New detailed comparison pages (December 2025)
  { path: '/comparisons/safeorstolen-vs-imeiinfo', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/comparisons/safeorstolen-vs-swappa', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/comparisons/nicb-vincheck-alternative', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/comparisons/best-free-imei-checkers-2025', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/comparisons/top-vin-check-services-2025', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },

  // ============================================
  // BUSINESS PAGES (5)
  // ============================================
  { path: '/for-businesses', priority: 0.80, changefreq: 'monthly' },
  { path: '/for-pawn-shops', priority: 0.80, changefreq: 'monthly' },
  { path: '/for-dealers', priority: 0.80, changefreq: 'monthly' },
  { path: '/for-marketplaces', priority: 0.75, changefreq: 'monthly' },
  { path: '/for-auction-houses', priority: 0.75, changefreq: 'monthly' },

  // ============================================
  // MARKETPLACE SAFETY PAGES (4)
  // ============================================
  { path: '/facebook-marketplace-stolen-check', priority: 0.80, changefreq: 'weekly' },
  { path: '/craigslist-safety-verification', priority: 0.80, changefreq: 'weekly' },
  { path: '/offerup-verify-not-stolen', priority: 0.80, changefreq: 'weekly' },
  { path: '/ebay-stolen-item-check', priority: 0.80, changefreq: 'weekly' },

  // ============================================
  // CITY PAGES - TOP 10 (10)
  // ============================================
  { path: '/stolen-check-los-angeles', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-new-york-city', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-chicago', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-houston', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-phoenix', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-philadelphia', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-san-antonio', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-san-diego', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-dallas', priority: 0.70, changefreq: 'monthly' },
  { path: '/stolen-check-san-jose', priority: 0.70, changefreq: 'monthly' },

  // ============================================
  // BLOG ARTICLES (22)
  // ============================================
  { path: '/blog', priority: 0.80, changefreq: 'weekly', lastmod: '2025-12-23' },
  { path: '/blog/how-to-check-if-phone-stolen', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/complete-vin-guide', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/data-source-credibility-stolen-goods-verification', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/protect-yourself-buying-used-electronics', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/ultimate-marketplace-buyers-guide', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/complete-imei-guide-protect-yourself', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/scammer-tactics-exposed', priority: 0.70, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/phone-verification-guide', priority: 0.70, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/theft-trends-report-2024', priority: 0.70, changefreq: 'yearly', lastmod: '2025-12-23' },
  { path: '/blog/verification-methodology', priority: 0.70, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/real-user-stories', priority: 0.70, changefreq: 'weekly', lastmod: '2025-12-23' },
  { path: '/blog/complete-verification-guide', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/stolen-verification-app-guide', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/checkmend-has-no-app', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/like-carfax-for-phones', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/pawn-shop-stolen-item-verification', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/imei-checker-app-download', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/firearm-serial-number-verification', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/bicycle-stolen-serial-number-check', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/verify-item-before-meetup', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/how-to-check-if-iphone-stolen', priority: 0.90, changefreq: 'weekly', lastmod: '2025-12-23' },
  { path: '/blog/facebook-marketplace-scams', priority: 0.90, changefreq: 'weekly', lastmod: '2025-12-23' },
  { path: '/blog/ps5-stolen-check-guide', priority: 0.80, changefreq: 'monthly', lastmod: '2025-12-23' },
  { path: '/blog/carfax-vs-free-vin-alternatives', priority: 0.75, changefreq: 'monthly', lastmod: '2025-12-23' },

  // ============================================
  // FREE TOOLS (1)
  // ============================================
  { path: '/free-tools', priority: 0.85, changefreq: 'weekly' },

  // ============================================
  // HIGH-TRAFFIC SEARCH LANDING PAGES (7)
  // ============================================
  { path: '/is-my-phone-stolen', priority: 0.85, changefreq: 'weekly' },
  { path: '/is-this-car-stolen', priority: 0.85, changefreq: 'weekly' },
  { path: '/is-this-laptop-stolen', priority: 0.85, changefreq: 'weekly' },
  { path: '/is-this-bike-stolen', priority: 0.85, changefreq: 'weekly' },
  { path: '/is-this-gun-stolen', priority: 0.85, changefreq: 'weekly' },
  { path: '/check-stolen-phone', priority: 0.85, changefreq: 'weekly' },
  { path: '/check-stolen-car', priority: 0.85, changefreq: 'weekly' },
  { path: '/report-stolen', priority: 0.70, changefreq: 'monthly' },

  // ============================================
  // NEWS & PRESS PAGES (5)
  // ============================================
  { path: '/news/onevalley-recognition', priority: 0.60, changefreq: 'yearly' },
  { path: '/press-kit', priority: 0.60, changefreq: 'monthly' },
  { path: '/product-hunt', priority: 0.60, changefreq: 'monthly' },
  { path: '/youtube', priority: 0.75, changefreq: 'weekly' },
  { path: '/youtube/stolen-item-check', priority: 0.70, changefreq: 'weekly' },
  { path: '/youtube/marketplace-safety', priority: 0.70, changefreq: 'weekly' },
  { path: '/youtube/vin-check', priority: 0.70, changefreq: 'weekly' },
  { path: '/youtube/imei-check', priority: 0.70, changefreq: 'weekly' },
  { path: '/crunchbase', priority: 0.55, changefreq: 'monthly' },

  // ============================================
  // TOP 10 STATE LICENSE PLATE LOOKUPS (have actual routes)
  // ============================================
  { path: '/california-license-plate-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/texas-license-plate-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/florida-license-plate-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/new-york-license-plate-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/illinois-license-plate-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/georgia-license-plate-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/pennsylvania-license-plate-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/ohio-license-plate-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/north-carolina-license-plate-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/washington-license-plate-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/arizona-license-plate-lookup', priority: 0.80, changefreq: 'monthly' },

  // ============================================
  // HIGH-VALUE SEO PAGES (NEW)
  // ============================================
  { path: '/check-if-stolen', priority: 0.90, changefreq: 'weekly' },
  { path: '/theftaz', priority: 0.80, changefreq: 'monthly' },
  { path: '/check-ps5', priority: 0.70, changefreq: 'monthly' },
  { path: '/partial-serial-number-search', priority: 0.70, changefreq: 'monthly' },
  
  // GUN VERIFICATION PAGES (HIGH-VALUE SEO)
  { path: '/stolen-gun-database', priority: 0.90, changefreq: 'weekly' },
  { path: '/gun-serial-number-lookup', priority: 0.85, changefreq: 'weekly' },
  
  // COMPETITOR ALTERNATIVE PAGES (SEO)
  { path: '/carfax-alternative-free', priority: 0.80, changefreq: 'monthly' },
  { path: '/nicb-alternative', priority: 0.80, changefreq: 'monthly' },
  { path: '/hotgunz-alternative', priority: 0.80, changefreq: 'monthly' },

  // ============================================
  // REMAINING 39 STATE LICENSE PLATE LOOKUPS (All 50 states)
  // ============================================
  { path: '/alabama-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/alaska-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/arkansas-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/colorado-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/connecticut-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/delaware-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/hawaii-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/idaho-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/indiana-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/iowa-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/kansas-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/kentucky-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/louisiana-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/maine-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/maryland-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/massachusetts-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/michigan-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/minnesota-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/mississippi-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/missouri-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/montana-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/nebraska-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/nevada-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/new-hampshire-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/new-jersey-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/new-mexico-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/north-dakota-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/oklahoma-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/oregon-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/rhode-island-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/south-carolina-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/south-dakota-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/tennessee-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/utah-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/vermont-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/virginia-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/west-virginia-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/wisconsin-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },
  { path: '/wyoming-license-plate-lookup', priority: 0.60, changefreq: 'monthly' },

  // ============================================
  // TOP 10 STATE VIN LOOKUPS (have actual routes)
  // ============================================
  { path: '/california-vin-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/texas-vin-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/florida-vin-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/new-york-vin-lookup', priority: 0.75, changefreq: 'monthly' },
  { path: '/illinois-vin-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/georgia-vin-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/pennsylvania-vin-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/ohio-vin-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/north-carolina-vin-lookup', priority: 0.70, changefreq: 'monthly' },
  { path: '/washington-vin-lookup', priority: 0.70, changefreq: 'monthly' },

];

/**
 * Generate full absolute URLs for sitemap
 */
export const generateAbsoluteURLs = (baseUrl: string = 'https://safeorstolen.com'): string[] => {
  return SITEMAP_URLS.map(url => `${baseUrl}${url.path}`);
};

/**
 * Get URLs by priority level
 */
export const getURLsByPriority = (minPriority: number = 0.7): SitemapURL[] => {
  return SITEMAP_URLS.filter(url => url.priority >= minPriority);
};

/**
 * Get URLs by change frequency
 */
export const getURLsByChangeFreq = (
  freq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
): SitemapURL[] => {
  return SITEMAP_URLS.filter(url => url.changefreq === freq);
};

/**
 * Export for sitemap.xml generation
 */
export const generateSitemapXML = (baseUrl: string = 'https://safeorstolen.com'): string => {
  const urls = SITEMAP_URLS.map(url => {
    const lastmod = url.lastmod || new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${baseUrl}${url.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

// Total URLs count
export const TOTAL_SITEMAP_URLS = SITEMAP_URLS.length;
