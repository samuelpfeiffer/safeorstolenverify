import React, { useEffect } from 'react';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
}

export const SitemapGenerator: React.FC = () => {
  
  const generateSitemap = (): SitemapUrl[] => {
    const baseUrl = 'https://safeorstolen.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    const urls: SitemapUrl[] = [
      // High-priority pages
      {
        loc: `${baseUrl}/`,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: 1.0,
        images: [
          { loc: `${baseUrl}/images/hero-verification.jpg`, title: 'SafeOrStolen Verification Platform' },
          { loc: `${baseUrl}/images/trust-badges.jpg`, title: 'Trust and Security Badges' }
        ]
      },
      
      // Core verification services
      {
        loc: `${baseUrl}/imei-check`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.9,
        images: [
          { loc: `${baseUrl}/images/imei-verification.jpg`, title: 'IMEI Verification Process' }
        ]
      },
      {
        loc: `${baseUrl}/vin-verification`,
        lastmod: currentDate,
        changefreq: 'weekly', 
        priority: 0.9,
        images: [
          { loc: `${baseUrl}/images/vin-lookup.jpg`, title: 'VIN Vehicle Verification' }
        ]
      },
      {
        loc: `${baseUrl}/serial-number-checker`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: `${baseUrl}/stolen-item-checker`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.9
      },
      
      // Item-specific verification pages
      {
        loc: `${baseUrl}/check-phone`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/check-car`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/check-electronics`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/check-bike`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8
      },
      
      // High-value content pages
      {
        loc: `${baseUrl}/ultimate-guide-buying-safely`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8,
        images: [
          { loc: `${baseUrl}/images/safe-buying-guide.jpg`, title: 'Ultimate Safe Buying Guide 2025' }
        ]
      },
      {
        loc: `${baseUrl}/how-it-works`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/faq`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7
      },
      
      // Business and enterprise
      {
        loc: `${baseUrl}/marketplace-integration`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: `${baseUrl}/pawn-shops`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: `${baseUrl}/auction-houses`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: `${baseUrl}/enterprise-demo`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/api-docs`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.6
      },
      
      // Company and trust pages
      {
        loc: `${baseUrl}/about`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/our-story`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/transparency`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/case-studies`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/stolen-goods-statistics-2024`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.6
      },
      
      // Blog and content
      {
        loc: `${baseUrl}/blog`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7
      },
      {
        loc: `${baseUrl}/blog/complete-verification-guide`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/blog/how-to-check-if-device-is-safe-stolen`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/blog/data-source-credibility`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5
      },
      {
        loc: `${baseUrl}/blog/verification-methodology`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5
      },
      {
        loc: `${baseUrl}/blog/real-user-stories`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5
      },
      
      // Support and legal
      {
        loc: `${baseUrl}/contact`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5
      },
      {
        loc: `${baseUrl}/pricing`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7
      },
      {
        loc: `${baseUrl}/terms-of-service`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.3
      },
      {
        loc: `${baseUrl}/privacy-policy`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.3
      },
      
      // Additional guides
      {
        loc: `${baseUrl}/avoid-stolen-goods`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/how-to-check-if-item-stolen`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/stolen-items-database`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.6
      },
      {
        loc: `${baseUrl}/stolen-goods-checker`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.6
      }
    ];
    
    // Add city pages for local SEO
    const majorCities = [
      'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix',
      'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose',
      'austin', 'jacksonville', 'fort-worth', 'columbus', 'charlotte',
      'seattle', 'denver', 'washington-dc', 'boston', 'nashville'
    ];
    
    majorCities.forEach(city => {
      urls.push({
        loc: `${baseUrl}/city/${city}`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.4
      });
    });
    
    return urls;
  };

  const generateXMLSitemap = (urls: SitemapUrl[]): string => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
    
    urls.forEach(url => {
      xml += `  <url>\n`;
      xml += `    <loc>${url.loc}</loc>\n`;
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      xml += `    <priority>${url.priority}</priority>\n`;
      
      // Add image entries if present
      if (url.images && url.images.length > 0) {
        url.images.forEach(image => {
          xml += `    <image:image>\n`;
          xml += `      <image:loc>${image.loc}</image:loc>\n`;
          if (image.title) {
            xml += `      <image:title>${image.title}</image:title>\n`;
          }
          if (image.caption) {
            xml += `      <image:caption>${image.caption}</image:caption>\n`;
          }
          xml += `    </image:image>\n`;
        });
      }
      
      xml += `  </url>\n`;
    });
    
    xml += `</urlset>`;
    return xml;
  };

  const generateRobotsTxt = (): string => {
    return `User-agent: *
Allow: /

# High-priority pages
Allow: /imei-check
Allow: /vin-verification
Allow: /serial-number-checker
Allow: /stolen-item-checker
Allow: /ultimate-guide-buying-safely
Allow: /how-it-works

# Block admin and private pages
Disallow: /admin/
Disallow: /dashboard/
Disallow: /profile/
Disallow: /auth/
Disallow: /api/

# Block test and development pages
Disallow: /test-*
Disallow: /launch-test
Disallow: /*?test=*

# Allow crawling of blog and resources
Allow: /blog/
Allow: /faq
Allow: /case-studies

Sitemap: https://safeorstolen.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
  };

  useEffect(() => {
    // Generate and store sitemap data
    const urls = generateSitemap();
    const xmlSitemap = generateXMLSitemap(urls);
    const robotsTxt = generateRobotsTxt();
    
    // Store in localStorage for easy access/download
    localStorage.setItem('generated-sitemap', xmlSitemap);
    localStorage.setItem('generated-robots', robotsTxt);
    
    // Track sitemap generation
    if (window.gtag) {
      window.gtag('event', 'sitemap_generated', {
        event_category: 'SEO_Tools',
        urls_count: urls.length,
        timestamp: Date.now()
      });
    }
    
    console.log(`✅ Sitemap generated with ${urls.length} URLs`);
    console.log('📍 Access sitemap: /sitemap or check localStorage for XML content');
  }, []);

  // Make functions globally available for admin use
  useEffect(() => {
    (window as any).generateSitemapXML = () => {
      const urls = generateSitemap();
      return generateXMLSitemap(urls);
    };
    
    (window as any).generateRobotsTxt = generateRobotsTxt;
    
    (window as any).downloadSitemap = () => {
      const xml = localStorage.getItem('generated-sitemap');
      if (xml) {
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sitemap.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };
    
    (window as any).downloadRobotsTxt = () => {
      const robotsTxt = localStorage.getItem('generated-robots');
      if (robotsTxt) {
        const blob = new Blob([robotsTxt], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'robots.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };
  }, []);

  return null; // This component only generates data, doesn't render UI
};