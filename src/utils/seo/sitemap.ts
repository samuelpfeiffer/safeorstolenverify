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
  // Core Pages - Maximum Priority
  {
    url: 'https://safeorstolen.com/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 1.0,
    images: [
      {
        loc: 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
        caption: 'Safe Or Stolen - Global IMEI, Serial & VIN Verification Service',
        title: 'Safe Or Stolen Global Verification Service'
      }
    ]
  },
  
  // Primary Verification Services - Critical for SEO
  {
    url: 'https://safeorstolen.com/real-time-verification',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.9,
    images: [
      {
        loc: 'https://safeorstolen.com/real-time-verification-image.png',
        caption: 'Real-time IMEI, Serial Number and VIN verification across global databases',
        title: 'Safe Or Stolen Real-time Verification'
      }
    ]
  },
  
  // Verification Type Pages - High SEO Value for Targeted Keywords
  {
    url: 'https://safeorstolen.com/check-phone',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/phone-verification-image.png',
        caption: 'IMEI and ESN phone verification - Check if phone is stolen',
        title: 'Safe Or Stolen Phone IMEI Verification'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/check-car',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/car-verification-image.png',
        caption: 'VIN number verification - Check if car is stolen',
        title: 'Safe Or Stolen Car VIN Verification'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/check-electronics',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/electronics-verification-image.png',
        caption: 'Serial number verification for electronics - Check if stolen',
        title: 'Safe Or Stolen Electronics Verification'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/check-bike',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/bike-verification-image.png',
        caption: 'Bicycle serial number verification - Check if bike is stolen',
        title: 'Safe Or Stolen Bike Verification'
      }
    ]
  },
  
  // Firearms Check - Specialized Service
  {
    url: 'https://safeorstolen.com/firearms-check',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/firearms-verification-image.png',
        caption: 'Firearm serial number verification - Check if firearm is stolen',
        title: 'Safe Or Stolen Firearms Verification'
      }
    ]
  },
  
  // Additional Core Verification Services
  {
    url: 'https://safeorstolen.com/stolen-item-checker',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.9,
    images: [
      {
        loc: 'https://safeorstolen.com/stolen-item-checker-image.png',
        caption: 'Free stolen item checker - verify serial numbers, IMEI, and VIN numbers instantly',
        title: 'Safe Or Stolen Item Checker'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/serial-number-checker',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.9,
    images: [
      {
        loc: 'https://safeorstolen.com/serial-checker-image.png',
        caption: 'Serial number checker - verify if electronics and bikes are stolen',
        title: 'Serial Number Checker'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/imei-check',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.9,
    images: [
      {
        loc: 'https://safeorstolen.com/imei-check-image.png',
        caption: 'IMEI checker - verify phone blacklist status and theft reports',
        title: 'IMEI Check Service'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/vin-verification',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always',
    priority: 0.9,
    images: [
      {
        loc: 'https://safeorstolen.com/vin-verification-image.png',
        caption: 'VIN verification - check if vehicle is stolen or has liens',
        title: 'VIN Verification Service'
      }
    ]
  },
  
  // How It Works - Essential for User Education & SEO
  {
    url: 'https://safeorstolen.com/how-it-works',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/how-it-works-image.png',
        caption: 'How IMEI, Serial Number and VIN verification works globally - 4 simple steps',
        title: 'Safe Or Stolen Global Verification Process'
      }
    ]
  },
  
  // Core Business Pages
  {
    url: 'https://safeorstolen.com/pricing',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  
  // Content Marketing Hub
  {
    url: 'https://safeorstolen.com/blog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 0.9,
    images: [
      {
        loc: 'https://safeorstolen.com/og-image-blog.png',
        caption: 'Safe Or Stolen Blog - Verification news, guides, and safety tips',
        title: 'Verification Blog and News'
      }
    ]
  },
  
  // High-Value Blog Posts
  {
    url: 'https://safeorstolen.com/blog/how-to-check-if-device-is-safe-stolen',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: 'https://safeorstolen.com/device-safety-guide.jpg',
        caption: 'Complete guide to verify IMEI, serial numbers, and VIN before buying',
        title: 'Device Safety Verification Guide'
      }
    ]
  },
  
  // Target Audience Pages
  {
    url: 'https://safeorstolen.com/for-consumers',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      {
        loc: 'https://safeorstolen.com/consumers-image.png',
        caption: 'Safe Or Stolen for consumers worldwide - Verify IMEI, Serial Numbers, VIN before buying',
        title: 'Global Consumer Protection Services'
      }
    ]
  },
  {
    url: 'https://safeorstolen.com/for-brands',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      {
        loc: 'https://safeorstolen.com/brands-image.png',
        caption: 'Safe Or Stolen for brands worldwide - Global brand protection services',
        title: 'Global Brand Protection Services'
      }
    ]
  },
  
  // Enterprise Services
  {
    url: 'https://safeorstolen.com/enterprise-demo',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://safeorstolen.com/api-docs',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: 'https://safeorstolen.com/seo-strategy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    url: 'https://safeorstolen.com/transparency',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: 'https://safeorstolen.com/data-sources',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  
  // Company Information
  {
    url: 'https://safeorstolen.com/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.6
  },
  {
    url: 'https://safeorstolen.com/our-story',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.6
  },
  {
    url: 'https://safeorstolen.com/about-problem',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  
  // Support & Trust Pages
  {
    url: 'https://safeorstolen.com/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    url: 'https://safeorstolen.com/faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.5
  },
  
  // Marketing & Growth
  {
    url: 'https://safeorstolen.com/referral',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.5
  },
  
  // Legal Pages - Important for Trust & Compliance
  {
    url: 'https://safeorstolen.com/privacy-policy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.4
  },
  {
    url: 'https://safeorstolen.com/terms-of-service',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.4
  },
  {
    url: 'https://safeorstolen.com/disclaimer',
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
  
  // Add new blog post entries for canonical fix
  const newBlogEntries: SitemapEntry[] = [
    {
      url: 'https://safeorstolen.com/blog/enterprise-security',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: 'https://safeorstolen.com/blog/mobile-app-features', 
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    }
  ];
  
  return [...staticEntries, ...blogEntries, ...newBlogEntries];
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
Allow: /real-time-verification
Allow: /firearms-check
Allow: /how-it-works
Allow: /for-consumers
Allow: /for-brands
Allow: /about-problem
Allow: /our-story
Allow: /pricing
Allow: /contact
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