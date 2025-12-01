/**
 * Generate massive sitemap with 2000+ URLs for SEO domination
 */
import { 
  ITEM_VERIFICATION_PAGES, 
  LONG_TAIL_PAGES, 
  USE_CASE_PAGES, 
  BLOG_CONTENT_PAGES,
  generateLocationPages,
  getAllSEOPages 
} from '@/config/seo-expansion-urls';

const BASE_URL = 'https://safeorstolen.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Core pages (highest priority) - ONLY canonical destination pages, NO redirects
const CORE_PAGES = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/verify', priority: 1.0, changefreq: 'daily' },
  { url: '/app', priority: 1.0, changefreq: 'weekly' },
  { url: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { url: '/about', priority: 0.9, changefreq: 'monthly' },
  { url: '/faq', priority: 0.8, changefreq: 'monthly' },
  { url: '/terms', priority: 0.5, changefreq: 'yearly' },
  { url: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { url: '/imei-checker', priority: 0.9, changefreq: 'weekly' },
  { url: '/vin-checker', priority: 0.9, changefreq: 'weekly' },
  { url: '/serial-number-checker', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-phone', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-car', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-electronics', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-bike', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-laptop', priority: 0.8, changefreq: 'weekly' },
  { url: '/firearms-check', priority: 0.9, changefreq: 'weekly' },
  { url: '/license-plate-lookup', priority: 0.8, changefreq: 'weekly' },
  { url: '/for-pawn-shops', priority: 0.8, changefreq: 'monthly' },
  { url: '/for-dealers', priority: 0.8, changefreq: 'monthly' },
  { url: '/for-businesses', priority: 0.8, changefreq: 'monthly' },
  { url: '/how-it-works', priority: 0.8, changefreq: 'monthly' },
  { url: '/testimonials', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
];

/**
 * Generate XML sitemap entry
 */
function generateURLEntry(url: string, lastmod: string, changefreq: string, priority: number): string {
  return `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
    <mobile:mobile/>
  </url>`;
}

/**
 * Generate complete sitemap XML
 */
export function generateMassiveSitemap(): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;
  const urlsetClose = '</urlset>';

  const entries: string[] = [];

  // Add core pages
  CORE_PAGES.forEach(page => {
    entries.push(generateURLEntry(page.url, CURRENT_DATE, page.changefreq, page.priority));
  });

  // Add all SEO expansion pages
  const allSEOPages = getAllSEOPages();
  allSEOPages.forEach(page => {
    entries.push(generateURLEntry(page.path, CURRENT_DATE, page.changefreq, page.priority));
  });

  return `${xmlHeader}\n${urlsetOpen}\n${entries.join('\n')}\n${urlsetClose}`;
}

/**
 * Get sitemap statistics
 */
export function getSitemapStats() {
  const allPages = getAllSEOPages();
  
  return {
    total: CORE_PAGES.length + allPages.length,
    byCategory: {
      core: CORE_PAGES.length,
      electronics: ITEM_VERIFICATION_PAGES.filter(p => p.category === 'electronics').length,
      vehicles: ITEM_VERIFICATION_PAGES.filter(p => p.category === 'vehicles').length,
      guides: LONG_TAIL_PAGES.filter(p => p.category === 'guide').length,
      marketplace: LONG_TAIL_PAGES.filter(p => p.category === 'marketplace').length,
      comparison: LONG_TAIL_PAGES.filter(p => p.category === 'comparison').length,
      business: USE_CASE_PAGES.filter(p => p.category === 'business').length,
      location: generateLocationPages().length,
      blog: BLOG_CONTENT_PAGES.length,
    },
    byPriority: {
      priority_1_0: allPages.filter(p => p.priority === 1.0).length + CORE_PAGES.filter(p => p.priority === 1.0).length,
      priority_0_9: allPages.filter(p => p.priority === 0.9).length + CORE_PAGES.filter(p => p.priority === 0.9).length,
      priority_0_8: allPages.filter(p => p.priority === 0.8).length,
      priority_0_7: allPages.filter(p => p.priority === 0.7).length,
    }
  };
}

/**
 * Console log to show sitemap generation
 */
export function logSitemapGeneration() {
  const stats = getSitemapStats();
  console.log('🚀 MASSIVE SITEMAP GENERATED');
  console.log(`📊 Total URLs: ${stats.total}`);
  console.log('📁 By Category:', stats.byCategory);
  console.log('⭐ By Priority:', stats.byPriority);
}
