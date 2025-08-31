import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Enhanced canonical URL handler to fix Google indexing issues
 */
export const EnhancedCanonicalHandler: React.FC = () => {
  const location = useLocation();
  
  // Clean and normalize the path
  const cleanPath = location.pathname
    .replace(/\/+/g, '/') // Remove double slashes
    .replace(/\/+$/, '') // Remove trailing slashes except root
    || '/';
  
  const canonical = `https://safeorstolen.com${cleanPath === '/' ? '/' : cleanPath}`;
  
  // Handle specific redirects and alternate URLs
  const getAlternateUrls = () => {
    const alternates: string[] = [];
    
    // Common alternate patterns that might cause duplicates
    if (cleanPath !== '/') {
      alternates.push(`https://safeorstolen.com${cleanPath}/`); // With trailing slash
    }
    
    // Add www version as alternate
    alternates.push(`https://www.safeorstolen.com${cleanPath}`);
    
    return alternates;
  };

  const alternateUrls = getAlternateUrls();

  return (
    <Helmet>
      {/* Primary canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Alternate URLs to prevent duplicates */}
      {alternateUrls.map((url, index) => (
        <link key={index} rel="alternate" href={url} />
      ))}
      
      {/* Prevent indexing of www version */}
      {typeof window !== 'undefined' && window.location.hostname.startsWith('www.') && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      
      {/* Enhanced robots directive */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:160, max-video-preview:-1" />
      
      {/* Additional canonical signals */}
      <meta property="og:url" content={canonical} />
      <meta name="twitter:url" content={canonical} />
      
      {/* Prevent duplicate content issues */}
      <meta httpEquiv="Content-Language" content="en-US" />
      <meta name="geo.region" content="US" />
    </Helmet>
  );
};