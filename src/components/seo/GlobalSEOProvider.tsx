import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Global SEO Provider that handles site-wide redirects and canonical domain enforcement
 * This should be included once at the app level
 */
export const GlobalSEOProvider: React.FC = () => {
  useEffect(() => {
    // Handle client-side canonical domain enforcement
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
      {/* Global meta tags that apply to all pages */}
      <meta name="author" content="SafeOrStolen" />
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Domain preferences for search engines */}
      <meta name="preferred-domain" content="safeorstolen.com" />
      <meta name="canonical-domain" content="https://safeorstolen.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="https://js.stripe.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {/* Favicon and PWA icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />
    </Helmet>
  );
};