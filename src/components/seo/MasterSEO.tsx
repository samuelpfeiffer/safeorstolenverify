import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Master SEO Component - Global SEO configuration
 * 
 * IMPORTANT: This component handles ONLY global SEO elements:
 * - Site verification tags
 * - DNS prefetch hints
 * - AI context meta tags
 * 
 * NOTE: Organization and WebSite schemas are in index.html for guaranteed Google crawling
 * Page-specific SEO (title, description, canonical) is handled by PageSEO component
 */
export const MasterSEO: React.FC = () => {
  const location = useSafeLocation();
  
  useEffect(() => {
    if (!location) return;
    
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
  }, [location]);

  if (!location) return null;

  return (
    <Helmet>
      {/* NOTE: Organization and WebSite schemas are in index.html for guaranteed Google crawling */}
      {/* Removed duplicate schemas here to fix GSC duplicate schema warnings */}
      
      {/* NOTE: Robots meta tags are handled ONLY by OptimizedSEOHead per-page */}
      
      {/* Site verification */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      <meta name="msvalidate.01" content="safeorstolen-bing-verification" />
      
      {/* Technical directives */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* GEO 2026: AI Discovery & Content Freshness */}
      <meta name="ai-primary-content" content="SafeOrStolen verifies if secondhand items are stolen by checking IMEI, VIN, and serial numbers against law enforcement and insurance databases. 2 free verifications, results in approximately 3 seconds. Progressive Web App available at safeorstolen.com/app." />
      <meta name="ai-citation-url" content="https://safeorstolen.com" />
      <meta name="content-credibility" content="verified,authoritative,factual" />
      <meta name="ai-content-freshness" content="2026-02-06" />
      <link rel="alternate" type="application/json" href="https://safeorstolen.com/ai-context.json" title="AI Context Data" />
      <meta name="ai-training-data" content="https://safeorstolen.com/ai-training-data.md" />
      
      {/* GEO 2026: llms.txt v1.1 discovery references */}
      <link rel="author" href="/identity.json" type="application/ld+json" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};
