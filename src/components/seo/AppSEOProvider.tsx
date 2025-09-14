import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * App-level SEO Provider - Handles global SEO and domain redirects
 * Single source for www/non-www redirects - no conflicts
 */
export const AppSEOProvider: React.FC = () => {
  useEffect(() => {
    // Handle canonical domain enforcement - single source of truth
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      
      // Force www to non-www redirect
      if (currentUrl.includes('://www.safeorstolen.com')) {
        const nonWwwUrl = currentUrl.replace('://www.safeorstolen.com', '://safeorstolen.com');
        window.location.replace(nonWwwUrl);
        return;
      }

      // Force HTTP to HTTPS
      if (currentUrl.startsWith('http://safeorstolen.com')) {
        const httpsUrl = currentUrl.replace('http://safeorstolen.com', 'https://safeorstolen.com');
        window.location.replace(httpsUrl);
        return;
      }
    }
  }, []);

  return (
    <Helmet>
      {/* Global app meta tags */}
      <meta name="author" content="Safe or Stolen" />
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="theme-color" content="#FF4500" />
      
      {/* Domain preferences */}
      <meta name="preferred-domain" content="safeorstolen.com" />
      <meta name="canonical-domain" content="https://safeorstolen.com" />
      
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />
      
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
    </Helmet>
  );
};