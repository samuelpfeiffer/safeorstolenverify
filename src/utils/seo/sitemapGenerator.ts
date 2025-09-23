/**
 * Dynamic Sitemap Generator for Maximum Google Indexing
 * Automatically generates and updates XML sitemaps for optimal crawling
 */

import { getCanonicalUrl, getSitemapPriority, getChangeFrequency } from './canonicalUtils';

const BASE_URL = 'https://safeorstolen.com';

// All static pages that should be in sitemap
const STATIC_PAGES = [
  // High Priority Pages (0.9-1.0)
  '/',
  '/dashboard',
  '/stolen-item-checker', 
  '/imei-check',
  '/vin-verification',
  '/serial-number-checker',
  '/check-phone',
  '/check-car',
  '/check-electronics',
  '/check-bike',
  '/firearms-check',
  '/comprehensive-guide',
  '/how-to-check-if-item-stolen',
  '/how-to-check-if-anything-is-stolen-before-you-buy',
  '/ultimate-guide-not-buying-stolen-goods',
  
  // Important Service Pages (0.7-0.8)
  '/how-it-works',
  '/for-brands',
  '/for-consumers', 
  '/about',
  '/api-docs',
  '/transparency',
  '/data-sources',
  '/accuracy',
  '/subscriptions',
  '/pricing',
  
  // Content & Support Pages (0.6-0.7)
  '/blog',
  '/contact',
  '/faq',
  '/case-studies',
  '/partnerships',
  '/community',
  '/ultimate-guide',
  
  // Specialized Markets (0.4-0.5)
  '/auction-houses',
  '/pawn-shops',
  '/marketplace-integration',
  '/enterprise-demo',
  '/real-time-verification',
  
  // Legal Pages (0.2-0.3)
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer',
  '/cookies',
  '/refunds'
];

// High-priority blog posts and guides
const BLOG_POSTS = [
  '/blog/ultimate-marketplace-buyers-guide',
  '/blog/business-guide-preventing-stolen-goods', 
  '/blog/scammer-tactics-exposed',
  '/blog/phone-verification-guide',
  '/blog/2024-theft-trends-report',
  '/blog/data-source-credibility',
  '/blog/verification-methodology',
  '/blog/real-user-stories',
  '/blog/complete-verification-guide'
];

// Local SEO pages for major cities
const CITY_PAGES = [
  '/city/los-angeles',
  '/city/new-york', 
  '/city/chicago',
  '/city/houston',
  '/city/phoenix',
  '/city/philadelphia',
  '/city/san-antonio',
  '/city/san-diego',
  '/city/dallas',
  '/city/san-jose',
  '/city/austin',
  '/city/jacksonville',
  '/city/fort-worth',
  '/city/columbus',
  '/city/charlotte',
  '/city/san-francisco',
  '/city/indianapolis',
  '/city/seattle',
  '/city/denver',
  '/city/washington',
  '/city/boston',
  '/city/nashville',
  '/city/baltimore',
  '/city/louisville',
  '/city/portland',
  '/city/oklahoma-city',
  '/city/milwaukee',
  '/city/las-vegas',
  '/city/albuquerque',
  '/city/tucson',
  '/city/fresno',
  '/city/sacramento',
  '/city/kansas-city',
  '/city/mesa',
  '/city/atlanta',
  '/city/omaha',
  '/city/colorado-springs',
  '/city/raleigh',
  '/city/miami',
  '/city/virginia-beach',
  '/city/oakland',
  '/city/minneapolis',
  '/city/tulsa',
  '/city/tampa',
  '/city/arlington',
  '/city/new-orleans'
];

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

/**
 * Generate complete sitemap with all pages
 */
export const generateSitemap = async (): Promise<string> => {
  const allPages = [...STATIC_PAGES, ...BLOG_POSTS, ...CITY_PAGES];
  const entries: SitemapEntry[] = [];
  
  // Add all static pages
  for (const page of allPages) {
    entries.push({
      url: getCanonicalUrl(page),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: getChangeFrequency(page),
      priority: getSitemapPriority(page)
    });
  }
  
  // Sort by priority (highest first)
  entries.sort((a, b) => b.priority - a.priority);
  
  return generateXMLSitemap(entries);
};

/**
 * Generate XML sitemap string
 */
export const generateXMLSitemap = (entries: SitemapEntry[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const sitemapOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';
  const sitemapClose = '</urlset>';
  
  const urlEntries = entries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
    <mobile:mobile/>
  </url>`).join('');
  
  return `${xmlHeader}\n${sitemapOpen}${urlEntries}\n${sitemapClose}`;
};

/**
 * Generate robots.txt content with sitemap reference
 */
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# High priority public pages for maximum crawling
Allow: /stolen-item-checker
Allow: /imei-check  
Allow: /vin-verification
Allow: /serial-number-checker
Allow: /check-phone
Allow: /check-car
Allow: /check-electronics
Allow: /how-it-works
Allow: /comprehensive-guide
Allow: /for-brands
Allow: /about
Allow: /contact
Allow: /faq
Allow: /blog/
Allow: /guides/
Allow: /api-docs

# Block admin and user-specific pages  
Disallow: /admin/
Disallow: /api/
Disallow: /auth/
Disallow: /dashboard/
Disallow: /profile/
Disallow: /subscription/
Disallow: /analytics/
Disallow: /search-history/
Disallow: /receipts/

# Block technical files and parameters
Disallow: *.json$
Disallow: /*?*preview=*
Disallow: /*?*debug=*
Disallow: /*?*test=*

# Allow search and verification parameters
Allow: /*?q=*
Allow: /*?serial=*
Allow: /*?imei=*
Allow: /*?vin=*

# Crawl delay for responsible crawling
Crawl-delay: 1

# Sitemaps - Multiple for better organization
Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap-blog.xml
Sitemap: ${BASE_URL}/sitemap-cities.xml

# Host directive for canonical domain
Host: ${BASE_URL}`;
};

/**
 * Generate specialized blog sitemap
 */
export const generateBlogSitemap = (): string => {
  const blogEntries: SitemapEntry[] = BLOG_POSTS.map(post => ({
    url: getCanonicalUrl(post),
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  }));
  
  return generateXMLSitemap(blogEntries);
};

/**
 * Generate local SEO city pages sitemap
 */
export const generateCitiesSitemap = (): string => {
  const cityEntries: SitemapEntry[] = CITY_PAGES.map(city => ({
    url: getCanonicalUrl(city),
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  }));
  
  return generateXMLSitemap(cityEntries);
};

/**
 * Get sitemap index for multiple sitemaps
 */
export const generateSitemapIndex = (): string => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-blog.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-cities.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
};

/**
 * Validate sitemap entry
 */
export const validateSitemapEntry = (entry: SitemapEntry): boolean => {
  // URL validation
  if (!entry.url || !entry.url.startsWith('http')) {
    return false;
  }
  
  // Priority validation (0.0 to 1.0)
  if (entry.priority < 0 || entry.priority > 1) {
    return false;
  }
  
  // Change frequency validation
  const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
  if (!validFreqs.includes(entry.changefreq)) {
    return false;
  }
  
  // Date validation
  if (!entry.lastmod || isNaN(Date.parse(entry.lastmod))) {
    return false;
  }
  
  return true;
};

/**
 * Update sitemap with new pages
 */
export const updateSitemap = async (newPages: string[]): Promise<string> => {
  const existingEntries = await generateSitemap();
  
  // Add new pages
  const newEntries: SitemapEntry[] = newPages.map(page => ({
    url: getCanonicalUrl(page),
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: getChangeFrequency(page),
    priority: getSitemapPriority(page)
  }));
  
  // Combine and deduplicate
  const allPages = [...STATIC_PAGES, ...BLOG_POSTS, ...CITY_PAGES, ...newPages];
  const uniquePages = [...new Set(allPages)];
  
  const entries: SitemapEntry[] = uniquePages.map(page => ({
    url: getCanonicalUrl(page),
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: getChangeFrequency(page),
    priority: getSitemapPriority(page)
  }));
  
  return generateXMLSitemap(entries);
};