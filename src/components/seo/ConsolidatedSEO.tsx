import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Consolidated SEO component to replace multiple overlapping SEO components
 * Fixes Google Search Console canonical and indexing issues
 */
export const ConsolidatedSEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Force redirect www to non-www at JavaScript level
    if (typeof window !== 'undefined' && window.location.hostname === 'www.safeorstolen.com') {
      const newUrl = window.location.href.replace('www.safeorstolen.com', 'safeorstolen.com');
      window.location.replace(newUrl);
    }
  }, []);

  // Generate clean canonical URL with proper URL mappings
  const getCanonicalUrl = (pathname: string): string => {
    // URL mapping for redirects and canonical URLs
    const urlMappings: Record<string, string> = {
      '/imei': '/check-phone',
      '/imei-checker': '/check-phone', 
      '/vin-checker': '/check-car',
      '/serial-checker': '/check-electronics',
      '/verify': '/dashboard'
    };
    
    // Clean up the path - remove trailing slashes except root
    let cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    
    // Apply URL mappings
    cleanPath = urlMappings[cleanPath] || cleanPath;
    
    return `https://safeorstolen.com${cleanPath}`;
  };
  
  const canonicalUrl = getCanonicalUrl(location.pathname);
  
  // Determine if this page should be indexed
  const shouldIndex = !location.pathname.includes('/admin') && 
                     !location.pathname.includes('/auth') && 
                     !location.pathname.includes('/test') &&
                     !location.pathname.includes('/private');

  return (
    <Helmet>
      {/* Single canonical tag - prevents duplicate canonical issues */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots directive */}
      <meta name="robots" content={shouldIndex ? 
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" : 
        "noindex, nofollow"
      } />
      
      {/* Googlebot specific directive */}
      <meta name="googlebot" content={shouldIndex ? 
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" : 
        "noindex, nofollow"
      } />
      
      {/* Open Graph URL */}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Language and locale */}
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      <meta name="content-language" content="en" />
      
      {/* Prevent duplicate content */}
      <meta httpEquiv="content-language" content="en" />
      
      {/* Site verification placeholders - replace with actual codes */}
      <meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE" />
      <meta name="msvalidate.01" content="REPLACE_WITH_BING_VERIFICATION_CODE" />
      
      {/* Additional crawling hints */}
      <meta name="revisit-after" content="1 day" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
    </Helmet>
  );
};

export default ConsolidatedSEO;