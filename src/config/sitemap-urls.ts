/**
 * Comprehensive Sitemap URL Configuration
 * All URLs for search engine indexing
 */

export interface SitemapURL {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

export const SITEMAP_URLS: SitemapURL[] = [
  // ============================================
  // 10 CORE PAGES
  // ============================================
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/verify', priority: 0.9, changefreq: 'daily' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/dashboard', priority: 0.8, changefreq: 'weekly' },
  { path: '/account', priority: 0.7, changefreq: 'monthly' },
  { path: '/app', priority: 0.9, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/faq', priority: 0.8, changefreq: 'monthly' },
  { path: '/terms', priority: 0.6, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.6, changefreq: 'yearly' },

  // ============================================
  // 12 ITEM LANDING PAGES
  // ============================================
  { path: '/check-phone', priority: 0.9, changefreq: 'weekly' },
  { path: '/check-laptop', priority: 0.9, changefreq: 'weekly' },
  { path: '/check-bike', priority: 0.9, changefreq: 'weekly' },
  { path: '/check-vehicle', priority: 0.9, changefreq: 'weekly' },
  { path: '/check-boat', priority: 0.9, changefreq: 'weekly' },
  { path: '/check-jewelry', priority: 0.8, changefreq: 'weekly' },
  { path: '/check-electronics', priority: 0.8, changefreq: 'weekly' },
  { path: '/check-tools', priority: 0.8, changefreq: 'weekly' },
  { path: '/check-firearm', priority: 0.9, changefreq: 'weekly' },
  { path: '/check-camera', priority: 0.8, changefreq: 'weekly' },
  { path: '/check-watch', priority: 0.8, changefreq: 'weekly' },
  { path: '/check-appliance', priority: 0.8, changefreq: 'weekly' },

  // ============================================
  // 3 COMPETITOR COMPARISON PAGES
  // ============================================
  { path: '/vs-checkmend', priority: 0.8, changefreq: 'monthly' },
  { path: '/vs-imei-info', priority: 0.8, changefreq: 'monthly' },
  { path: '/vs-swappa', priority: 0.8, changefreq: 'monthly' },

  // ============================================
  // 50 STATE VIN CHECKER PAGES
  // ============================================
  { path: '/vin-check/alabama', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/alaska', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/arizona', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/arkansas', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/california', priority: 0.8, changefreq: 'monthly' },
  { path: '/vin-check/colorado', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/connecticut', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/delaware', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/florida', priority: 0.8, changefreq: 'monthly' },
  { path: '/vin-check/georgia', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/hawaii', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/idaho', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/illinois', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/indiana', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/iowa', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/kansas', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/kentucky', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/louisiana', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/maine', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/maryland', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/massachusetts', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/michigan', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/minnesota', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/mississippi', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/missouri', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/montana', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/nebraska', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/nevada', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/new-hampshire', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/new-jersey', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/new-mexico', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/new-york', priority: 0.8, changefreq: 'monthly' },
  { path: '/vin-check/north-carolina', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/north-dakota', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/ohio', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/oklahoma', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/oregon', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/pennsylvania', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/rhode-island', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/south-carolina', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/south-dakota', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/tennessee', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/texas', priority: 0.8, changefreq: 'monthly' },
  { path: '/vin-check/utah', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/vermont', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/virginia', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/washington', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/west-virginia', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/wisconsin', priority: 0.7, changefreq: 'monthly' },
  { path: '/vin-check/wyoming', priority: 0.7, changefreq: 'monthly' },

  // ============================================
  // 12 BLOG ARTICLES
  // ============================================
  { path: '/blog/protect-yourself-buying-used-electronics', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/data-source-credibility-stolen-goods-verification', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/ultimate-marketplace-buyers-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/complete-imei-guide-protect-yourself', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/safeorstolen-firearms-marketplace-verification', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/buying-used-cars-avoid-stolen-vehicles', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/stolen-goods-statistics-what-buyers-need-know', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/pawnshop-buyers-guide-verify-before-purchase', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/mobile-app-barcode-scanning-verification', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/business-guide-preventing-stolen-goods', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/international-verification-global-coverage', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/how-safeorstolen-works-comprehensive-guide', priority: 0.8, changefreq: 'monthly' },

  // ============================================
  // 5 BUSINESS PAGES
  // ============================================
  { path: '/for-businesses', priority: 0.8, changefreq: 'monthly' },
  { path: '/for-pawnshops', priority: 0.8, changefreq: 'monthly' },
  { path: '/for-dealers', priority: 0.8, changefreq: 'monthly' },
  { path: '/marketplace-safety', priority: 0.8, changefreq: 'monthly' },
  { path: '/legal-guide', priority: 0.7, changefreq: 'monthly' },
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
