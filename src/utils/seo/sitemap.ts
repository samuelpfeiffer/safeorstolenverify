export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    loc: string;
    caption?: string;
    title?: string;
  }>;
}

import { VALID_ROUTES, REDIRECT_URLS } from '@/utils/seo/sitemapRouteValidator';

/**
 * Check if a path should be indexed
 * CRITICAL: Only returns true for REAL pages with content
 */
const isIndexable = (path: string): boolean => {
  // Private/auth routes - never index
  if (path === '/auth') return false;
  if (path === '/dashboard') return false;
  if (path === '/profile') return false;
  if (path === '/checkout-redirect') return false;
  if (path === '/verification-success') return false;
  if (path === '/payment-success') return false;
  if (path.startsWith('/admin')) return false;
  
  // Check if it's a redirect URL (should never be indexed)
  if (REDIRECT_URLS.has(path)) return false;
  
  return true;
};

const priorityFor = (path: string): number => {
  if (path === '/') return 1.0;
  if (path === '/verify') return 0.95;
  if (path === '/download' || path === '/app') return 0.9;
  if (path === '/pricing') return 0.85;
  if (path === '/how-it-works' || path === '/about') return 0.8;
  if (path === '/blog') return 0.8;

  // High-intent landing pages
  if (
    path === '/imei-checker' ||
    path === '/vin-checker' ||
    path === '/serial-number-checker'
  ) return 0.8;

  // State pages (good SEO value)
  if (path.includes('-license-plate-lookup') || path.includes('-vin-lookup')) return 0.7;

  // Blog posts
  if (path.startsWith('/blog/')) return 0.65;

  // Everything else
  return 0.6;
};

const changefreqFor = (path: string): SitemapEntry['changefreq'] => {
  if (path === '/' || path === '/verify') return 'daily';
  if (path === '/blog') return 'daily';
  if (path.startsWith('/blog/')) return 'weekly';
  return 'weekly';
};

export const generateStaticSitemapEntries = (): SitemapEntry[] => {
  const today = new Date().toISOString().split('T')[0];
  const base = 'https://safeorstolen.com';

  return Array.from(VALID_ROUTES)
    .filter(isIndexable)
    .map((path) => ({
      url: `${base}${path === '/' ? '/' : path}`,
      lastmod: today,
      changefreq: changefreqFor(path),
      priority: priorityFor(path),
    }))
    .sort((a, b) => (b.priority || 0) - (a.priority || 0));
};

export const generateBlogSitemapEntries = (blogPosts: any[]): SitemapEntry[] => {
  return blogPosts.map(post => ({
    url: `https://safeorstolen.com/blog/${post.slug}`,
    lastmod: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    changefreq: 'weekly' as const,
    priority: 0.6,
    images: post.featured_image_url ? [
      {
        loc: post.featured_image_url,
        caption: `${post.title} - Safe Or Stolen Blog`,
        title: post.title
      }
    ] : undefined
  }));
};

export const generateSitemapEntries = (blogPosts: any[] = []): SitemapEntry[] => {
  const staticEntries = generateStaticSitemapEntries();
  const blogEntries = generateBlogSitemapEntries(blogPosts);

  // De-dupe by URL (prevents duplicates if a blog post is both statically routed + stored in DB)
  const map = new Map<string, SitemapEntry>();
  [...staticEntries, ...blogEntries].forEach((e) => {
    map.set(e.url, e);
  });

  return Array.from(map.values());
};

export const generateSitemapXML = (entries: SitemapEntry[]): string => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  const footer = `</urlset>`;

  const urls = entries.map(entry => {
    let urlXml = `  <url>
    <loc>${entry.url}</loc>`;
    
    if (entry.lastmod) {
      urlXml += `
    <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    if (entry.changefreq) {
      urlXml += `
    <changefreq>${entry.changefreq}</changefreq>`;
    }
    
    if (entry.priority) {
      urlXml += `
    <priority>${entry.priority}</priority>`;
    }

    if (entry.images && entry.images.length > 0) {
      entry.images.forEach(image => {
        urlXml += `
    <image:image>
      <image:loc>${image.loc}</image:loc>`;
        if (image.caption) {
          urlXml += `
      <image:caption>${image.caption}</image:caption>`;
        }
        if (image.title) {
          urlXml += `
      <image:title>${image.title}</image:title>`;
        }
        urlXml += `
    </image:image>`;
      });
    }

    urlXml += `
  </url>`;
    
    return urlXml;
  }).join('\n');

  return `${header}\n${urls}\n${footer}`;
};

export const generateRobotsTxt = (): string => {
  return `# Enhanced robots.txt for Safe Or Stolen
User-agent: *
Allow: /

# Disallow sensitive or non-indexable areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /auth/
Disallow: /dashboard/
Disallow: /profile/
Disallow: /analytics/
Disallow: /subscription/
Disallow: /security-settings/
Disallow: /404
Disallow: /*?*
Disallow: /*.json$

# Allow important public pages
Allow: /blog/
Allow: /firearms-check
Allow: /how-it-works
Allow: /verify
Allow: /app
Allow: /app/features
Allow: /download
Allow: /pricing
Allow: /about
Allow: /faq

# Allow verification type pages - high SEO value
Allow: /check-phone
Allow: /check-car
Allow: /check-electronics
Allow: /check-bike

# Allow assets
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp
Allow: /*.ico

# Crawl delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: https://safeorstolen.com/sitemap.xml
`;
};