import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Component that ensures proper canonical URLs and handles www/non-www redirect issues
 * Fixes Google Search Console "Alternate page with proper canonical tag" issues
 */
export const CanonicalRedirectFix: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if current URL has www and redirect to non-www if needed
    if (typeof window !== 'undefined' && window.location.hostname.startsWith('www.')) {
      const nonWwwUrl = window.location.href.replace('://www.', '://');
      window.location.replace(nonWwwUrl);
    }
  }, []);

  // Always use non-www canonical URL
  const canonicalUrl = `https://safeorstolen.com${location.pathname}${location.search}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {/* Add alternate URLs to help Google understand the canonical relationship */}
      <link rel="alternate" href={canonicalUrl} />
      {/* Prevent indexing of www version by explicitly stating the canonical */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};