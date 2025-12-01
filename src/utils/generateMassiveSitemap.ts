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
// COMPREHENSIVE 150+ REAL PAGES FOR MAXIMUM SEO COVERAGE
const CORE_PAGES = [
  // Homepage & Main Pages
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/verify', priority: 1.0, changefreq: 'daily' },
  { url: '/app', priority: 1.0, changefreq: 'weekly' },
  { url: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { url: '/about', priority: 0.9, changefreq: 'monthly' },
  { url: '/faq', priority: 0.8, changefreq: 'monthly' },
  { url: '/how-it-works', priority: 0.8, changefreq: 'monthly' },
  { url: '/testimonials', priority: 0.7, changefreq: 'monthly' },
  { url: '/terms', priority: 0.5, changefreq: 'yearly' },
  { url: '/privacy', priority: 0.5, changefreq: 'yearly' },
  
  // Main Item Checker Pages (High Priority)
  { url: '/imei-checker', priority: 0.9, changefreq: 'weekly' },
  { url: '/vin-checker', priority: 0.9, changefreq: 'weekly' },
  { url: '/serial-number-checker', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-phone', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-car', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-electronics', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-bike', priority: 0.9, changefreq: 'weekly' },
  { url: '/check-ebike', priority: 0.8, changefreq: 'weekly' },
  { url: '/check-laptop', priority: 0.8, changefreq: 'weekly' },
  { url: '/check-boat', priority: 0.8, changefreq: 'weekly' },
  { url: '/check-appliances', priority: 0.7, changefreq: 'weekly' },
  { url: '/check-tools', priority: 0.7, changefreq: 'weekly' },
  { url: '/check-jewelry', priority: 0.7, changefreq: 'weekly' },
  { url: '/firearms-check', priority: 0.9, changefreq: 'weekly' },
  { url: '/license-plate-lookup', priority: 0.8, changefreq: 'weekly' },
  
  // Business Pages
  { url: '/for-pawn-shops', priority: 0.8, changefreq: 'monthly' },
  { url: '/for-dealers', priority: 0.8, changefreq: 'monthly' },
  { url: '/for-businesses', priority: 0.8, changefreq: 'monthly' },
  
  // Comparison Pages (Competitor SEO)
  { url: '/vs-checkmend', priority: 0.8, changefreq: 'monthly' },
  { url: '/vs-imeiinfo', priority: 0.8, changefreq: 'monthly' },
  { url: '/vs-swappa', priority: 0.8, changefreq: 'monthly' },
  { url: '/vs-carfax', priority: 0.8, changefreq: 'monthly' },
  { url: '/vs-autocheck', priority: 0.8, changefreq: 'monthly' },
  
  // Blog
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
  
  // 50 State License Plate Lookup Pages
  { url: '/alabama-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/alaska-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/arizona-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/arkansas-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/california-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/colorado-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/connecticut-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/delaware-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/florida-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/georgia-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/hawaii-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/idaho-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/illinois-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/indiana-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/iowa-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/kansas-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/kentucky-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/louisiana-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/maine-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/maryland-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/massachusetts-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/michigan-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/minnesota-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/mississippi-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/missouri-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/montana-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/nebraska-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/nevada-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-hampshire-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-jersey-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-mexico-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-york-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/north-carolina-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/north-dakota-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/ohio-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/oklahoma-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/oregon-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/pennsylvania-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/rhode-island-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/south-carolina-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/south-dakota-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/tennessee-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/texas-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/utah-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/vermont-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/virginia-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/washington-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/west-virginia-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/wisconsin-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/wyoming-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  
  // 50 State VIN Lookup Pages
  { url: '/alabama-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/alaska-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/arizona-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/arkansas-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/california-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/colorado-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/connecticut-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/delaware-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/florida-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/georgia-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/hawaii-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/idaho-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/illinois-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/indiana-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/iowa-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/kansas-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/kentucky-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/louisiana-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/maine-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/maryland-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/massachusetts-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/michigan-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/minnesota-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/mississippi-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/missouri-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/montana-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/nebraska-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/nevada-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-hampshire-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-jersey-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-mexico-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-york-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/north-carolina-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/north-dakota-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/ohio-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/oklahoma-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/oregon-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/pennsylvania-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/rhode-island-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/south-carolina-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/south-dakota-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/tennessee-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/texas-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/utah-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/vermont-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/virginia-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/washington-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/west-virginia-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/wisconsin-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/wyoming-vin-lookup', priority: 0.7, changefreq: 'monthly' },
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
