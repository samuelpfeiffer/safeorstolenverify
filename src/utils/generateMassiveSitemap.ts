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
  
  // TOP 10 STATE LICENSE PLATE LOOKUP PAGES (Real pages, not redirects)
  { url: '/california-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/texas-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/florida-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-york-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/illinois-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/georgia-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/pennsylvania-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/ohio-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/north-carolina-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/washington-license-plate-lookup', priority: 0.7, changefreq: 'monthly' },
  
  // TOP 10 STATE VIN LOOKUP PAGES (Real pages, not redirects)
  { url: '/california-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/texas-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/florida-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/new-york-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/illinois-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/georgia-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/pennsylvania-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/ohio-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/north-carolina-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  { url: '/washington-vin-lookup', priority: 0.7, changefreq: 'monthly' },
  
  // Marketplace Pages (Real pages)
  { url: '/facebook-marketplace-stolen-check', priority: 0.8, changefreq: 'weekly' },
  { url: '/craigslist-safety-verification', priority: 0.8, changefreq: 'weekly' },
  { url: '/offerup-verify-not-stolen', priority: 0.8, changefreq: 'weekly' },
  { url: '/ebay-stolen-item-check', priority: 0.8, changefreq: 'weekly' },
  
  // City Pages (Top 10 Cities - Real pages)
  { url: '/stolen-check-los-angeles', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-new-york-city', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-chicago', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-houston', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-phoenix', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-philadelphia', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-san-antonio', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-san-diego', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-dallas', priority: 0.7, changefreq: 'monthly' },
  { url: '/stolen-check-san-jose', priority: 0.7, changefreq: 'monthly' },
  
  // Traffic Pages (Real pages)
  { url: '/check-stolen-phone', priority: 0.8, changefreq: 'weekly' },
  { url: '/check-stolen-car', priority: 0.8, changefreq: 'weekly' },
  { url: '/check-stolen-laptop', priority: 0.8, changefreq: 'weekly' },
  { url: '/check-stolen-bike', priority: 0.8, changefreq: 'weekly' },
  { url: '/check-stolen-firearm', priority: 0.8, changefreq: 'weekly' },
  
  // App Pages (Real pages)
  { url: '/app/features', priority: 0.7, changefreq: 'monthly' },
  { url: '/app/stolen-phone-checker', priority: 0.7, changefreq: 'monthly' },
  { url: '/app/vin-checker', priority: 0.7, changefreq: 'monthly' },
  { url: '/app/barcode-scanner', priority: 0.7, changefreq: 'monthly' },
  { url: '/download', priority: 0.8, changefreq: 'monthly' },
  
  // News/External Pages (Real pages)
  { url: '/youtube', priority: 0.6, changefreq: 'monthly' },
  { url: '/product-hunt', priority: 0.6, changefreq: 'monthly' },
  { url: '/press-kit', priority: 0.6, changefreq: 'monthly' },
  { url: '/crunchbase', priority: 0.6, changefreq: 'monthly' },
  { url: '/news/onevalley-recognition', priority: 0.7, changefreq: 'monthly' },
  
  // Compare & Free Tools (Real pages)
  { url: '/compare', priority: 0.8, changefreq: 'monthly' },
  { url: '/free-tools', priority: 0.8, changefreq: 'monthly' },
  
  // Business Pages (Real pages)
  { url: '/for-auction-houses', priority: 0.7, changefreq: 'monthly' },
  { url: '/for-marketplaces', priority: 0.7, changefreq: 'monthly' },
  
  // Auth & Dashboard
  { url: '/auth', priority: 0.6, changefreq: 'monthly' },
  { url: '/report-stolen', priority: 0.7, changefreq: 'monthly' },
  
  // Blog Posts (Real pages - only include existing ones)
  { url: '/blog/how-to-check-if-phone-stolen', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/complete-vin-guide', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/protect-yourself-buying-used-electronics', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/data-source-credibility-stolen-goods-verification', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/ultimate-marketplace-buyers-guide', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/complete-imei-guide-protect-yourself', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/scammer-tactics-exposed', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/phone-verification-guide', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/theft-trends-report-2024', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/verification-methodology', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/real-user-stories', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/complete-verification-guide', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/stolen-verification-app-guide', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/checkmend-has-no-app', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/like-carfax-for-phones', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/how-to-check-if-iphone-stolen', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/facebook-marketplace-scams', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/pawn-shop-stolen-item-verification', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/imei-checker-app-download', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/firearm-serial-number-verification', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/bicycle-stolen-serial-number-check', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/verify-item-before-meetup', priority: 0.7, changefreq: 'monthly' },
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

  // Add core pages ONLY (no SEO expansion pages - those are redirects)
  CORE_PAGES.forEach(page => {
    entries.push(generateURLEntry(page.url, CURRENT_DATE, page.changefreq, page.priority));
  });

  // NOTE: Removed getAllSEOPages() - those URLs are handled by _redirects
  // Only include pages that have actual React components/routes

  return `${xmlHeader}\n${urlsetOpen}\n${entries.join('\n')}\n${urlsetClose}`;
}

/**
 * Get sitemap statistics
 */
export function getSitemapStats() {
  return {
    total: CORE_PAGES.length,
    message: 'Sitemap only includes pages with real React components (no redirects)',
  };
}

/**
 * Console log to show sitemap generation
 */
export function logSitemapGeneration() {
  const stats = getSitemapStats();
  console.log('🚀 OPTIMIZED SITEMAP GENERATED');
  console.log(`📊 Total URLs: ${stats.total}`);
  console.log(`ℹ️ ${stats.message}`);
}
