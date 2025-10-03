import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * SEO Audit Component
 * Ensures all pages have proper SEO optimization and reports issues
 * Helps identify and fix indexing problems
 */
export const SEOAuditComponent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // SEO Audit checks
    const runSEOAudit = () => {
      const issues: string[] = [];
      
      // Check for title tag
      const titleElement = document.querySelector('title');
      if (!titleElement || titleElement.textContent === '') {
        issues.push('Missing or empty title tag');
      } else if (titleElement.textContent && titleElement.textContent.length > 60) {
        issues.push('Title tag too long (over 60 characters)');
      }
      
      // Check for meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription || !metaDescription.getAttribute('content')) {
        issues.push('Missing meta description');
      } else {
        const content = metaDescription.getAttribute('content');
        if (content && content.length > 160) {
          issues.push('Meta description too long (over 160 characters)');
        }
      }
      
      // Check for canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        issues.push('Missing canonical URL');
      }
      
      // Check for h1 tag
      const h1Elements = document.querySelectorAll('h1');
      if (h1Elements.length === 0) {
        issues.push('Missing H1 tag');
      } else if (h1Elements.length > 1) {
        issues.push('Multiple H1 tags found (should be only one)');
      }
      
      // Check for alt text on images
      const images = document.querySelectorAll('img');
      let missingAltCount = 0;
      images.forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
          missingAltCount++;
        }
      });
      if (missingAltCount > 0) {
        issues.push(`${missingAltCount} images missing alt text`);
      }
      
      // Check for structured data
      const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
      if (structuredDataScripts.length === 0) {
        issues.push('No structured data (JSON-LD) found');
      }
      
      // Log issues in development
      if (process.env.NODE_ENV === 'development' && issues.length > 0) {
        console.warn(`SEO Issues on ${location.pathname}:`, issues);
      }
      
      // Store audit results for potential dashboard display
      if (typeof window !== 'undefined') {
        (window as any).seoAuditResults = {
          path: location.pathname,
          issues,
          timestamp: new Date().toISOString(),
          score: Math.max(0, 100 - (issues.length * 10))
        };
      }
    };
    
    // Run audit after DOM is loaded
    const timer = setTimeout(runSEOAudit, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Generate comprehensive meta tags for better indexing
  const generateComprehensiveMeta = () => {
    const path = location.pathname;
    const isHomePage = path === '/';
    
    // Base meta tags that should be on every page
    const baseMeta = [
      // Core viewport and compatibility
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
      { name: 'format-detection', content: 'telephone=no' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      
      // SEO essentials
      { name: 'robots', content: 'index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30' },
      { name: 'googlebot', content: 'index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30' },
      
      // Site verification (placeholder - replace with actual values)
      { name: 'google-site-verification', content: 'google29952b5cc1a6a4dd' },
      { name: 'msvalidate.01', content: 'safeorstolen-bing-verification' },
      
      // Security headers
      { httpEquiv: 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" },
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'X-Frame-Options', content: 'DENY' },
      { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
      
      // Performance hints
      { name: 'dns-prefetch', content: '//fonts.googleapis.com' },
      { name: 'dns-prefetch', content: '//www.google-analytics.com' },
      { name: 'preconnect', content: 'https://fonts.gstatic.com' },
      
      // Theme and app info
      { name: 'theme-color', content: '#FF6B35' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'SafeOrStolen' },
      
      // Additional indexing hints
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'language', content: 'en' },
      { name: 'geo.region', content: 'US' },
      { name: 'geo.placename', content: 'United States' },
      
      // Social media fallbacks (Open Graph and Twitter handled by page-specific SEO)
      { property: 'og:site_name', content: 'SafeOrStolen' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:site', content: '@safeorstolen' },
      { name: 'twitter:creator', content: '@safeorstolen' }
    ];
    
    return baseMeta;
  };

  const metaTags = generateComprehensiveMeta();

  return (
    <Helmet>
      {metaTags.map((tag, index) => {
        if (tag.name) {
          return <meta key={index} name={tag.name} content={tag.content} />;
        } else if (tag.property) {
          return <meta key={index} property={tag.property} content={tag.content} />;
        } else if (tag.httpEquiv) {
          return <meta key={index} httpEquiv={tag.httpEquiv} content={tag.content} />;
        }
        return null;
      })}
      
      {/* Enhanced language and locale declarations */}
      <html lang="en" />
      <link rel="alternate" hrefLang="en" href={`https://safeorstolen.com${location.pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://safeorstolen.com${location.pathname}`} />
      
      {/* Additional resource hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
    </Helmet>
  );
};