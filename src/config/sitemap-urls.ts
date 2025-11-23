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
  // Homepage - Highest Priority (Brand: "safe or stolen")
  { path: '/', priority: 1.0, changefreq: 'daily' },
  
  // Core Verification Pages
  { path: '/verify', priority: 0.9, changefreq: 'daily' },
  { path: '/serial-number-checker', priority: 0.9, changefreq: 'daily' },
  { path: '/check', priority: 0.9, changefreq: 'daily' },
  
  // Comprehensive Stolen Item Search Pages (High SEO Priority)
  { path: '/stolen-item-lookup', priority: 0.9, changefreq: 'daily' },
  { path: '/check-stolen-item', priority: 0.9, changefreq: 'daily' },
  { path: '/stolen-items-list', priority: 0.9, changefreq: 'daily' },
  { path: '/check-stolen-database', priority: 0.9, changefreq: 'daily' },
  
  // Vehicle-Related Stolen Check Pages
  { path: '/stolen-vehicle-database', priority: 0.9, changefreq: 'daily' },
  { path: '/vin-check-lookup', priority: 0.9, changefreq: 'daily' },
  { path: '/check-stolen-car', priority: 0.9, changefreq: 'daily' },
  { path: '/search-stolen-vehicle', priority: 0.9, changefreq: 'daily' },
  { path: '/check-vehicle-stolen', priority: 0.9, changefreq: 'daily' },
  { path: '/stolen-car-vin', priority: 0.9, changefreq: 'daily' },
  { path: '/vehicles-by-license-plate', priority: 0.9, changefreq: 'daily' },
  { path: '/search-stolen-cars', priority: 0.9, changefreq: 'daily' },
  { path: '/car-by-vin', priority: 0.9, changefreq: 'daily' },
  
  // Phone-Related Stolen Check Pages
  { path: '/stolen-phone-check', priority: 0.9, changefreq: 'daily' },
  { path: '/search-stolen-phone', priority: 0.9, changefreq: 'daily' },
  { path: '/search-stolen-mobile', priority: 0.9, changefreq: 'daily' },
  { path: '/search-stolen-iphone', priority: 0.9, changefreq: 'daily' },
  
  // Firearms-Related Stolen Check Pages
  { path: '/search-stolen-firearms', priority: 0.8, changefreq: 'weekly' },
  { path: '/search-stolen-guns', priority: 0.8, changefreq: 'weekly' },
  { path: '/stolen-gun-database', priority: 0.8, changefreq: 'weekly' },
  
  // Bike-Related Stolen Check Pages
  { path: '/search-stolen-bikes', priority: 0.8, changefreq: 'weekly' },
  { path: '/check-bike-stolen', priority: 0.8, changefreq: 'weekly' },
  
  // Natural Language Question-Based Routes (High SEO Value)
  { path: '/how-do-i-check-if-stolen', priority: 0.9, changefreq: 'weekly' },
  { path: '/is-this-stolen', priority: 0.9, changefreq: 'daily' },
  { path: '/verify-not-stolen', priority: 0.9, changefreq: 'daily' },
  { path: '/check-if-phone-was-stolen', priority: 0.9, changefreq: 'daily' },
  { path: '/check-if-car-was-stolen', priority: 0.9, changefreq: 'daily' },
  
  // Additional Common Search Terms
  { path: '/stolen-goods-search', priority: 0.9, changefreq: 'daily' },
  { path: '/free-stolen-check', priority: 0.9, changefreq: 'daily' },
  { path: '/stolen-property-check', priority: 0.9, changefreq: 'daily' },
  { path: '/stolen-item-search', priority: 0.9, changefreq: 'daily' },
  { path: '/check-stolen-goods', priority: 0.9, changefreq: 'daily' },
  { path: '/stolen-check-free', priority: 0.9, changefreq: 'daily' },
  { path: '/verify-serial-number', priority: 0.9, changefreq: 'daily' },
  { path: '/imei-stolen-check', priority: 0.9, changefreq: 'daily' },
  { path: '/vin-stolen-check', priority: 0.9, changefreq: 'daily' },
  
  // Item-Specific Verification
  { path: '/check-electronics', priority: 0.8, changefreq: 'weekly' },
  { path: '/check-bike', priority: 0.8, changefreq: 'weekly' },
  { path: '/item-categories', priority: 0.8, changefreq: 'weekly' },
  
  // Authentication & Account
  { path: '/auth', priority: 0.7, changefreq: 'monthly' },
  { path: '/dashboard', priority: 0.7, changefreq: 'weekly' },
  { path: '/profile', priority: 0.6, changefreq: 'monthly' },
  { path: '/search-history', priority: 0.6, changefreq: 'weekly' },
  { path: '/receipts', priority: 0.6, changefreq: 'weekly' },
  { path: '/purchase-history', priority: 0.6, changefreq: 'weekly' },
  
  // Pricing & Subscriptions
  { path: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { path: '/subscriptions', priority: 0.8, changefreq: 'weekly' },
  { path: '/subscription-success', priority: 0.5, changefreq: 'monthly' },
  { path: '/subscription-cancel', priority: 0.5, changefreq: 'monthly' },
  
  // Main Information Pages
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/how-it-works', priority: 0.8, changefreq: 'monthly' },
  { path: '/how-it-works-detailed', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/services', priority: 0.8, changefreq: 'weekly' },
  { path: '/features', priority: 0.8, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  
  // Trust & Credibility Pages
  { path: '/trust-verification', priority: 0.9, changefreq: 'weekly' },
  { path: '/data-sources', priority: 0.7, changefreq: 'monthly' },
  { path: '/transparency', priority: 0.7, changefreq: 'monthly' },
  { path: '/accuracy', priority: 0.7, changefreq: 'monthly' },
  { path: '/service-limitations', priority: 0.6, changefreq: 'monthly' },
  
  // Guides & Educational Content
  { path: '/guides/how-to-check-stolen-items', priority: 0.8, changefreq: 'monthly' },
  { path: '/guides/imei-blacklist-explained', priority: 0.8, changefreq: 'monthly' },
  { path: '/ultimate-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/verification-hub', priority: 0.7, changefreq: 'weekly' },
  { path: '/how-to-check-if-item-stolen', priority: 0.8, changefreq: 'monthly' },
  { path: '/how-to-check-if-anything-is-stolen-before-you-buy', priority: 0.8, changefreq: 'monthly' },
  { path: '/comprehensive-guide', priority: 0.7, changefreq: 'monthly' },
  { path: '/ultimate-guide-buying-safely', priority: 0.8, changefreq: 'monthly' },
  { path: '/guide/buying-safely', priority: 0.8, changefreq: 'monthly' },
  { path: '/buyer-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/guide/buyers', priority: 0.8, changefreq: 'monthly' },
  { path: '/seller-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/guide/sellers', priority: 0.8, changefreq: 'monthly' },
  { path: '/how-to-check-if-laptop-stolen', priority: 0.7, changefreq: 'monthly' },
  { path: '/laptop-serial-number-check', priority: 0.7, changefreq: 'monthly' },
  { path: '/buy-used-electronics-safely', priority: 0.7, changefreq: 'monthly' },
  { path: '/safe-way-to-buy-used-gadgets', priority: 0.7, changefreq: 'monthly' },
  
  // Stolen Goods Information
  { path: '/stolen-items-database', priority: 0.8, changefreq: 'daily' },
  { path: '/stolen-property-lookup', priority: 0.8, changefreq: 'daily' },
  { path: '/check-if-stolen', priority: 0.8, changefreq: 'daily' },
  { path: '/stolen-goods-checker', priority: 0.8, changefreq: 'daily' },
  { path: '/stolen-merchandise-check', priority: 0.8, changefreq: 'daily' },
  { path: '/avoid-buying-stolen-goods', priority: 0.8, changefreq: 'monthly' },
  { path: '/avoid-stolen-goods', priority: 0.8, changefreq: 'monthly' },
  { path: '/ultimate-guide-not-buying-stolen-goods', priority: 0.8, changefreq: 'monthly' },
  { path: '/stolen-goods-statistics-2024', priority: 0.7, changefreq: 'monthly' },
  { path: '/statistics/stolen-goods-2024', priority: 0.7, changefreq: 'monthly' },
  
  // Blog Pages
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/blog/data-source-credibility', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/verification-methodology', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/real-user-stories', priority: 0.7, changefreq: 'weekly' },
  { path: '/blog/complete-verification-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/how-to-check-if-device-is-safe-stolen', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/enterprise-security', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/mobile-app-features', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/2024-theft-trends-report', priority: 0.7, changefreq: 'yearly' },
  
  // Company Pages
  { path: '/our-story', priority: 0.7, changefreq: 'monthly' },
  { path: '/our-team', priority: 0.7, changefreq: 'monthly' },
  { path: '/about-problem', priority: 0.7, changefreq: 'monthly' },
  { path: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { path: '/partnerships', priority: 0.6, changefreq: 'monthly' },
  { path: '/press-release', priority: 0.8, changefreq: 'yearly' },
  // Stolen Search Console - Analytics Platform
  { path: '/stolen-search-console', priority: 0.9, changefreq: 'daily' },
  { path: '/search-console', priority: 0.8, changefreq: 'daily' },
  { path: '/analytics', priority: 0.7, changefreq: 'weekly' },
  { path: '/search-trends', priority: 0.7, changefreq: 'daily' },
  
  // Trust & Company Pages
  { path: '/about-company', priority: 0.9, changefreq: 'monthly' },
  { path: '/transparency', priority: 0.8, changefreq: 'monthly' },
  { path: '/roadmap', priority: 0.7, changefreq: 'weekly' },
  { path: '/company-verification', priority: 0.95, changefreq: 'monthly' },
  
  // Target Audiences
  { path: '/for-consumers', priority: 0.7, changefreq: 'monthly' },
  { path: '/for-brands', priority: 0.7, changefreq: 'monthly' },
  { path: '/auction-houses', priority: 0.6, changefreq: 'monthly' },
  { path: '/pawn-shops', priority: 0.6, changefreq: 'monthly' },
  
  // Enterprise & Integrations
  { path: '/integrations', priority: 0.7, changefreq: 'weekly' },
  { path: '/marketplace-integration', priority: 0.7, changefreq: 'monthly' },
  { path: '/enterprise-demo', priority: 0.7, changefreq: 'monthly' },
  { path: '/api-docs', priority: 0.7, changefreq: 'weekly' },
  
  // Comparison Pages
  { path: '/vs-checkmend', priority: 0.7, changefreq: 'monthly' },
  { path: '/vs/checkmend', priority: 0.7, changefreq: 'monthly' },
  { path: '/comparison/checkmend', priority: 0.7, changefreq: 'monthly' },
  
  // Mobile App
  { path: '/download-app', priority: 0.7, changefreq: 'monthly' },
  { path: '/app', priority: 0.7, changefreq: 'monthly' },
  
  // Community & Social
  { path: '/community', priority: 0.6, changefreq: 'weekly' },
  { path: '/community-watch', priority: 0.6, changefreq: 'weekly' },
  { path: '/referral', priority: 0.6, changefreq: 'monthly' },
  
  // Legal Pages
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
  { path: '/disclaimer', priority: 0.5, changefreq: 'yearly' },
  { path: '/cookies', priority: 0.5, changefreq: 'yearly' },
  { path: '/refunds', priority: 0.5, changefreq: 'yearly' },
  
  // Firearms Verification (Target: "how to check if gun is stolen")
  { path: '/firearms-check', priority: 1.0, changefreq: 'daily' },
  
  // Utilities
  { path: '/sitemap', priority: 0.5, changefreq: 'monthly' },
  { path: '/security', priority: 0.6, changefreq: 'monthly' },
  { path: '/feed.xml', priority: 0.6, changefreq: 'daily' },
  { path: '/rss', priority: 0.6, changefreq: 'daily' },
  
  // FasterCapital Partnership
  { path: '/fastercapital/raise-capital', priority: 0.5, changefreq: 'monthly' },
  { path: '/fastercapital/tech-cofounder', priority: 0.5, changefreq: 'monthly' },
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
