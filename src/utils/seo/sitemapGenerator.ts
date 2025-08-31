// Sitemap generator for Google Console submission
export const generateSitemapUrls = () => {
  const baseUrl = 'https://safeorstolen.com';
  
  const staticPages = [
    '/',
    '/dashboard',
    '/how-it-works',
    '/pricing',
    '/subscriptions', 
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/blog'
  ];

  const blogPosts = [
    '/blog/data-source-credibility',
    '/blog/verification-methodology', 
    '/blog/real-user-stories',
    '/blog/complete-verification-guide',
    '/blog/ai-verification-technology',
    '/blog/mobile-app-features', 
    '/blog/enterprise-security',
    '/blog/industry-insights-2024',
    '/blog/database-integration',
    '/blog/2024-theft-trends-report'
  ];

  const allUrls = [...staticPages, ...blogPosts];
  
  return allUrls.map(url => ({
    url: `${baseUrl}${url}`,
    changefreq: url.includes('/blog/') ? 'weekly' : 'monthly',
    priority: url === '/' ? 1.0 : url === '/dashboard' ? 0.9 : url.includes('/blog/') ? 0.7 : 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  }));
};

export const generateSitemapXML = () => {
  const urls = generateSitemapUrls();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

// Google Console URLs to submit
export const getGoogleConsoleUrls = () => {
  const baseUrl = 'https://safeorstolen.com';
  
  return {
    // New blog posts for immediate indexing
    newBlogPosts: [
      `${baseUrl}/blog/ai-verification-technology`,
      `${baseUrl}/blog/mobile-app-features`,
      `${baseUrl}/blog/enterprise-security`,
      `${baseUrl}/blog/industry-insights-2024`,
      `${baseUrl}/blog/database-integration`
    ],
    
    // Updated pages for re-indexing
    updatedPages: [
      `${baseUrl}/how-it-works`,
      `${baseUrl}/blog`,
      `${baseUrl}/`
    ],
    
    // Sitemap URL
    sitemap: `${baseUrl}/sitemap.xml`
  };
};