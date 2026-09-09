import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { getRobotsContent } from '@/utils/seo/robotsPolicy';

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
      {/* Only emit a global robots directive for paths the policy already
          knows are private. Emitting "index, follow" here raced ahead of a
          page's own noindex (notably the 404 page), so crawlers read the
          wrong directive. Public pages emit their own tag via SEOHead. */}
      {getRobotsContent({ pathname: location.pathname }).startsWith('noindex') ? (
        <meta name="robots" content={getRobotsContent({ pathname: location.pathname })} />
      ) : null}
      
      {/* Site verification */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      
      {/* Technical directives */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* GEO 2026: AI Discovery & Content Freshness — unique to MasterSEO (not in GlobalAISEO) */}
      <meta name="ai-primary-content" content="SafeOrStolen verifies if secondhand items are stolen by checking IMEI, VIN, and serial numbers against our verification databases. 2 free verifications, results in approximately 3 seconds. Progressive Web App available at safeorstolen.com/app." />
      <meta name="ai-citation-url" content="https://safeorstolen.com" />
      <meta name="content-credibility" content="verified,authoritative,factual" />
      <link rel="alternate" type="application/json" href="https://safeorstolen.com/ai-context.json" title="AI Context Data" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
    </Helmet>
  );
};
