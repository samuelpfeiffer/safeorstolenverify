import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Global SEO Fixer - Critical component to fix Google Search Console issues
 * This component ensures all pages have proper canonical URLs and meta tags
 */
export const GlobalSEOFixer: React.FC = () => {
  const location = useLocation();
  
  // Generate canonical URL based on current path
  const getCanonicalUrl = (pathname: string): string => {
    // URL mapping for redirects and canonical URLs
    const urlMappings: Record<string, string> = {
      '/imei': '/check-phone',
      '/imei-checker': '/check-phone', 
      '/vin-checker': '/check-car',
      '/serial-checker': '/check-electronics',
      '/verify': '/dashboard'
    };
    
    // Clean up the path
    let cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    
    // Apply URL mappings
    cleanPath = urlMappings[cleanPath] || cleanPath;
    
    return `https://safeorstolen.com${cleanPath}`;
  };
  
  const canonicalUrl = getCanonicalUrl(location.pathname);
  
  // Determine if this page should be indexed
  const shouldIndex = !location.pathname.includes('/admin') && 
                     !location.pathname.includes('/auth') && 
                     !location.pathname.includes('/test');
  
  return (
    <Helmet>
      {/* Critical canonical tag - fixes Google indexing issues */}
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
      
      {/* Additional signals for search engines */}
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      
      {/* Prevent duplicate content */}
      <meta name="content-language" content="en" />
      <meta httpEquiv="content-language" content="en" />
      
      {/* Site verification and ownership */}
      <meta name="google-site-verification" content="safeorstolen-verification" />
      <meta name="msvalidate.01" content="safeorstolen-bing-verification" />
      
      {/* Additional meta tags for better crawling */}
      <meta name="revisit-after" content="1 day" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Helmet>
  );
};

export default GlobalSEOFixer;