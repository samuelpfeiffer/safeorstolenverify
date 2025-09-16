import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Critical fix for Google Search Console canonical tag issues
 * Ensures all pages have proper, unique canonical URLs that Google can index
 */
export const CanonicalFix: React.FC = () => {
  const location = useLocation();
  
  // Generate clean, consistent canonical URL
  const generateCanonicalUrl = (pathname: string): string => {
    // Remove trailing slashes except for root
    const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    
    // Handle special cases and redirects
    const pathMappings: Record<string, string> = {
      '/verify': '/dashboard',
      '/imei-checker': '/check-phone',
      '/vin-checker': '/check-car',
      '/serial-checker': '/check-electronics'
    };
    
    const finalPath = pathMappings[cleanPath] || cleanPath;
    return `https://safeorstolen.com${finalPath}`;
  };
  
  const canonicalUrl = generateCanonicalUrl(location.pathname);
  
  return (
    <Helmet>
      {/* Primary canonical tag - this fixes the indexing issues */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots directive to ensure indexing */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      
      {/* Additional signals for Google */}
      <meta property="og:url" content={canonicalUrl} />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      
      {/* Prevent duplicate content issues */}
      <meta name="duplicate-content" content="canonical" />
    </Helmet>
  );
};

export default CanonicalFix;