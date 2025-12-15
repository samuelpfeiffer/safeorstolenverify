interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://safeorstolen.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Import from centralized sitemap config
  const { SITEMAP_URLS } = require('@/config/sitemap-urls');

  const urls: SitemapUrl[] = SITEMAP_URLS.map((item: any) => ({
    url: `${baseUrl}${item.path}`,
    lastmod: currentDate,
    changefreq: item.changefreq,
    priority: item.priority
  }));

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urlEntries = urls.map(({ url, lastmod, changefreq, priority }) => {
    let entry = `  <url>\n    <loc>${url}</loc>`;
    
    if (lastmod) {
      entry += `\n    <lastmod>${lastmod}</lastmod>`;
    }
    
    if (changefreq) {
      entry += `\n    <changefreq>${changefreq}</changefreq>`;
    }
    
    if (priority !== undefined) {
      entry += `\n    <priority>${priority}</priority>`;
    }
    
    entry += '\n  </url>';
    return entry;
  }).join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${urlEntries}\n${urlsetClose}`;
};

export const generateRobotsTxt = (): string => {
  return `# Robots.txt for SafeOrStolen.com
# Optimized for maximum SEO crawling

User-agent: *
Allow: /

# Important pages for SEO
Allow: /imei-checker
Allow: /vin-verification
Allow: /serial-number-checker
Allow: /verify
Allow: /pricing
Allow: /about
Allow: /contact

# Block all query parameter URLs
Disallow: /*?*

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /dashboard/
Disallow: /auth/
Disallow: /*.json$
Disallow: /*?*print*
Disallow: /*?*utm_*

# Allow important static assets
Allow: /assets/
Allow: /images/
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp

# Sitemap location
Sitemap: https://safeorstolen.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
};