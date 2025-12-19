import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Google Search Console Setup Component
 * 
 * IMPORTANT: Organization, WebSite, and Service schemas are in index.html (static)
 * to ensure guaranteed Google crawling. DO NOT add duplicate schemas here.
 * 
 * This component handles ONLY:
 * - GSC verification tag
 * - Google Analytics
 * - Performance preconnects
 */
export const GoogleSearchConsoleSetup: React.FC = () => {
  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-0T59FF9N6Z"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0T59FF9N6Z');
        `}
      </script>
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      
      {/* NOTE: Organization, WebSite, Service schemas removed - they are in index.html */}
    </Helmet>
  );
};