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
  // COMPETITOR COMPARISON PAGES (6)
  // ============================================
  { path: '/compare', priority: 0.85, changefreq: 'monthly' },
  { path: '/vs-checkmend', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-imeiinfo', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-swappa', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-carfax', priority: 0.80, changefreq: 'monthly' },
  { path: '/vs-autocheck', priority: 0.80, changefreq: 'monthly' },

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
  // BLOG ARTICLES (20+)
  // ============================================
  { path: '/blog', priority: 0.80, changefreq: 'weekly' },
  { path: '/blog/how-to-check-if-phone-stolen', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/complete-vin-guide', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/protect-yourself-buying-used-electronics', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/ultimate-marketplace-buyers-guide', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/complete-imei-guide-protect-yourself', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/scammer-tactics-exposed', priority: 0.70, changefreq: 'monthly' },
  { path: '/blog/phone-verification-guide', priority: 0.70, changefreq: 'monthly' },
  { path: '/blog/theft-trends-report-2024', priority: 0.70, changefreq: 'yearly' },
  { path: '/blog/verification-methodology', priority: 0.70, changefreq: 'monthly' },
  { path: '/blog/real-user-stories', priority: 0.70, changefreq: 'weekly' },
  { path: '/blog/complete-verification-guide', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/stolen-verification-app-guide', priority: 0.80, changefreq: 'monthly' },
  { path: '/blog/checkmend-has-no-app', priority: 0.80, changefreq: 'monthly' },
  { path: '/blog/like-carfax-for-phones', priority: 0.80, changefreq: 'monthly' },
  { path: '/blog/pawn-shop-stolen-item-verification', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/imei-checker-app-download', priority: 0.80, changefreq: 'monthly' },
  { path: '/blog/firearm-serial-number-verification', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/bicycle-stolen-serial-number-check', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/verify-item-before-meetup', priority: 0.75, changefreq: 'monthly' },
  { path: '/blog/how-to-check-if-iphone-stolen', priority: 0.90, changefreq: 'weekly' },
  { path: '/blog/facebook-marketplace-scams', priority: 0.90, changefreq: 'weekly' },

  // ============================================
  // FREE TOOLS (1)
  // ============================================
  { path: '/free-tools', priority: 0.85, changefreq: 'weekly' },

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
