
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

export const generateStaticSitemapEntries = (): SitemapEntry[] => [
  {
    url: 'https://safeorstolen.com/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0,
    images: [
      {
        loc: 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
        caption: 'Safe Or Stolen Logo - Global IMEI, Serial & VIN Verification Service',
        title: 'Safe Or Stolen Global Verification Service'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/real-time-verification',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: 'https://safeorstolen.com/firearms-check',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: 'https://safeorstolen.com/how-it-works',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9,
    images: [
      {
        loc: 'https://safeorstolen.com/how-it-works-image.png',
        caption: 'How IMEI, Serial Number and VIN verification works globally - 3 simple steps',
        title: 'Safe Or Stolen Global Verification Process'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/enterprise-demo',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://safeorstolen.com/api-docs',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://safeorstolen.com/referral',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://safeorstolen.com/check-phone',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: 'https://safeorstolen.com/check-car',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: 'https://safeorstolen.com/check-electronics',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: 'https://safeorstolen.com/check-bike',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: 'https://safeorstolen.com/for-brands',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/brands-image.png',
        caption: 'Safe Or Stolen for brands worldwide - Global brand protection services',
        title: 'Global Brand Protection Services'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/for-consumers',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/consumers-image.png',
        caption: 'Safe Or Stolen for consumers worldwide - Verify IMEI, Serial Numbers, VIN before buying',
        title: 'Global Consumer Protection Services'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/blog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 0.7,
    images: [
      {
        loc: 'https://safeorstolen.com/og-image-blog.png',
        caption: 'Safe Or Stolen Blog - Verification news, guides, and safety tips',
        title: 'Verification Blog and News'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: 'https://safeorstolen.com/terms-of-service',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.3
  },
  {
    url: 'https://safeorstolen.com/privacy-policy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.3
  }
];

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
  return [...staticEntries, ...blogEntries];
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
  return `# Safe Or Stolen Global robots.txt
User-agent: *
Allow: /

# Enhanced crawling for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# Sitemap locations
Sitemap: https://safeorstolen.com/sitemap.xml
Sitemap: https://safeorstolen.com/sitemap-news.xml

# Prevent crawling of admin, private, or dynamic areas
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /auth/callback
Disallow: /verification-success
Disallow: /_next/
Disallow: /tmp/

# Block tracking parameters
Disallow: /*?*utm_*
Disallow: /*?*fbclid*
Disallow: /*?*gclid*
Disallow: /*?*ref=*
Disallow: /*?*source=*

# Allow important assets and pages
Allow: /lovable-uploads/
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp
Allow: /*.ico
Allow: /blog/
Allow: /how-it-works
Allow: /for-brands
Allow: /for-consumers
Allow: /contact
Allow: /terms-of-service
Allow: /privacy-policy

# Cache directive for better performance
User-agent: *
Request-rate: 1/1s

# Host directive
Host: https://safeorstolen.com`;
};
