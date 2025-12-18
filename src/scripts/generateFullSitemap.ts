/**
 * Generate complete sitemap with all 2000+ URLs
 * Run: npm run generate-sitemap
 */

import { writeFileSync } from 'fs';
import { getAllSEOPages } from '../config/seo-expansion-urls';

const BASE_URL = 'https://safeorstolen.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

function generateSitemapXML(): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">`;
  const urlsetClose = '</urlset>';

  const entries: string[] = [];

  // Get all SEO pages
  const allPages = getAllSEOPages();

  // Core pages (highest priority)
  const corePages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/app', priority: 1.0, changefreq: 'weekly' },
    { url: '/download', priority: 1.0, changefreq: 'weekly' },
  ];

  // Add core pages
  corePages.forEach(page => {
    entries.push(`  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
    <mobile:mobile/>
  </url>`);
  });

  // Add all SEO expansion pages
  allPages.forEach(page => {
    entries.push(`  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
    <mobile:mobile/>
  </url>`);
  });

  const xml = `${xmlHeader}\n${urlsetOpen}\n${entries.join('\n')}\n${urlsetClose}`;
  
  // Write to file
  writeFileSync('public/sitemap-full.xml', xml);
  
  console.log(`✅ Generated sitemap with ${entries.length} URLs`);
  console.log(`📁 Saved to: public/sitemap-full.xml`);
  
  return xml;
}

// Run if called directly
if (require.main === module) {
  generateSitemapXML();
}

export { generateSitemapXML };
