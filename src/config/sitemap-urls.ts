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
  // CORE PAGES (9)
  // ============================================
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/verify', priority: 0.9, changefreq: 'daily' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/dashboard', priority: 0.7, changefreq: 'weekly' },
  { path: '/account', priority: 0.6, changefreq: 'monthly' },
  { path: '/app', priority: 0.9, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/faq', priority: 0.8, changefreq: 'monthly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },

  // ============================================
  // BLOG ARTICLES (12)
  // ============================================
  { path: '/blog/protect-yourself-buying-used-electronics', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/data-source-credibility-stolen-goods-verification', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/ultimate-marketplace-buyers-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/complete-imei-guide-protect-yourself', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/how-to-check-if-phone-stolen', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/complete-verification-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/complete-vin-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/verification-methodology', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/real-user-stories', priority: 0.7, changefreq: 'weekly' },
  { path: '/blog/scammer-tactics-exposed', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/theft-trends-report-2024', priority: 0.7, changefreq: 'yearly' },
  { path: '/blog/phone-verification-guide', priority: 0.7, changefreq: 'monthly' },

  // ============================================
  // BUSINESS PAGES (5)
  // ============================================
  { path: '/for-businesses', priority: 0.8, changefreq: 'monthly' },
  { path: '/for-pawnshops', priority: 0.8, changefreq: 'monthly' },
  { path: '/for-dealers', priority: 0.8, changefreq: 'monthly' },
  { path: '/for-auction-houses', priority: 0.7, changefreq: 'monthly' },
  { path: '/for-marketplaces', priority: 0.7, changefreq: 'monthly' },

  // ============================================
  // COMPETITOR COMPARISON (3)
  // ============================================
  { path: '/vs-checkmend', priority: 0.8, changefreq: 'monthly' },
  { path: '/vs-imei-info', priority: 0.8, changefreq: 'monthly' },
  { path: '/vs-swappa', priority: 0.8, changefreq: 'monthly' },
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
