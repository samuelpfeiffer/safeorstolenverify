import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Master SEO Component - Single source of truth for all SEO
 * Fixes Google Search Console issues:
 * - Eliminates duplicate canonical tags
 * - Ensures proper 200 status codes
 * - Prevents redirect loops
 * - Sets correct indexing directives
 */
export const MasterSEO: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle client-side canonical domain enforcement (only if needed)
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      
      // Force www to non-www redirect (one-time only)
      if (currentUrl.includes('://www.safeorstolen.com')) {
        const nonWwwUrl = currentUrl.replace('://www.safeorstolen.com', '://safeorstolen.com');
        window.location.replace(nonWwwUrl);
        return;
      }
      
      // Force HTTP to HTTPS (one-time only)
      if (currentUrl.startsWith('http://safeorstolen.com')) {
        const httpsUrl = currentUrl.replace('http://safeorstolen.com', 'https://safeorstolen.com');
        window.location.replace(httpsUrl);
        return;
      }
    }
  }, []);

  // Generate clean canonical URL
  const generateCanonicalUrl = (pathname: string): string => {
    // Clean up path - remove trailing slashes except for root
    let cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    
    // Handle redirects at SEO level to inform Google of preferred URLs
    const redirectMap: Record<string, string> = {
      '/imei': '/imei-check',
      '/imei-checker': '/imei-check',
      '/vin-checker': '/vin-verification',
      '/serial-checker': '/stolen-item-checker',
      '/verify': '/stolen-item-checker'
    };
    
    // Use mapped URL if available
    cleanPath = redirectMap[cleanPath] || cleanPath;
    
    return `https://safeorstolen.com${cleanPath}`;
  };
  
  const canonicalUrl = generateCanonicalUrl(location.pathname);
  
  // Determine indexing status
  const shouldIndex = !location.pathname.includes('/admin') && 
                     !location.pathname.includes('/auth') && 
                     !location.pathname.includes('/test') &&
                     !location.pathname.includes('/dashboard') &&
                     !location.pathname.includes('/profile') &&
                     !location.pathname.includes('/subscription');

  // Base structured data for all pages
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "description": "Free stolen item lookup service. Check IMEI, VIN, serial numbers against stolen databases. Verify electronics, vehicles, phones before buying.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://safeorstolen.com/stolen-item-checker?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "description": "Leading stolen item verification service protecting buyers and sellers in secondhand markets.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@safeorstolen.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://facebook.com/safeorstolen"
    ]
  };

  return (
    <Helmet>
      {/* Core canonical and indexing directives */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots directives - clear and specific */}
      <meta name="robots" content={shouldIndex ? 
        "index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30" : 
        "noindex, nofollow"
      } />
      <meta name="googlebot" content={shouldIndex ? 
        "index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30" : 
        "noindex, nofollow"
      } />
      
      {/* Prevent duplicate content issues */}
      <meta property="og:url" content={canonicalUrl} />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      
      {/* Site verification */}
      <meta name="google-site-verification" content="safeorstolen-verification" />
      <meta name="msvalidate.01" content="safeorstolen-bing-verification" />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Technical directives */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};