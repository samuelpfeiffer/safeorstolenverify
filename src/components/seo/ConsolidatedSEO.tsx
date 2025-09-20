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

  // Generate clean canonical URL with proper URL mappings - avoid conflicts
  const getCanonicalUrl = (pathname: string): string => {
    // URL mapping for redirects and canonical URLs - be very specific
    const urlMappings: Record<string, string> = {
      '/imei': '/check-phone',
      '/imei-checker': '/check-phone', 
      '/vin-checker': '/check-car',
      '/serial-checker': '/check-electronics',
      '/verify': '/dashboard',
      // Add more specific mappings to prevent conflicts
      '/cart': '/services',
      '/wishlist': '/services',
      '/shopping-cart': '/services',
      '/terms': '/terms-of-service'
    };
    
    // Clean up the path - remove trailing slashes except root
    let cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    
    // Apply URL mappings only if exact match to prevent conflicts
    if (urlMappings[cleanPath]) {
      cleanPath = urlMappings[cleanPath];
    }
    
    return `https://safeorstolen.com${cleanPath}`;
  };
  
  const canonicalUrl = getCanonicalUrl(location.pathname);
  
  // Determine if this page should be indexed - be more restrictive to avoid indexing issues
  const shouldIndex = !location.pathname.includes('/admin') && 
                     !location.pathname.includes('/auth') && 
                     !location.pathname.includes('/test') &&
                     !location.pathname.includes('/private') &&
                     !location.pathname.includes('/dashboard') &&
                     !location.pathname.includes('/profile') &&
                     !location.pathname.includes('/subscription') &&
                     !location.pathname.includes('/security') &&
                     !location.pathname.includes('/receipts') &&
                     !location.pathname.includes('/search-history');

  return (
    <Helmet prioritizeSeoTags>
      {/* Single canonical tag - prevents duplicate canonical issues */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots directive - more specific to prevent conflicts */}
      <meta name="robots" content={shouldIndex ? 
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" : 
        "noindex, nofollow"
      } />
      
      {/* Googlebot specific directive */}
      <meta name="googlebot" content={shouldIndex ? 
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" : 
        "noindex, nofollow"
      } />
      
      {/* Prevent duplicate content with additional meta tags */}
      <meta name="referrer" content="no-referrer-when-downgrade" />
      
      {/* Open Graph URL - ensure consistency */}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Language and locale - consistent with canonical */}
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      <meta name="content-language" content="en" />
      <meta httpEquiv="content-language" content="en" />
      
      {/* Site verification - verified code */}
      <meta name="google-site-verification" content="CEKJMjlTWCmifp7l0LdxaIrp5wtSuxQ4Q6gXsLv-MEE" />
      <meta name="msvalidate.01" content="REPLACE_WITH_BING_VERIFICATION_CODE" />
      
      {/* Additional crawling hints for better indexing */}
      <meta name="revisit-after" content="1 day" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
      
      {/* Additional structured hints for Google */}
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
    </Helmet>
  );
};

export default ConsolidatedSEO;