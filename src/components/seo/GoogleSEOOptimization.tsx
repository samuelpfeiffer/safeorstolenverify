import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GA4_MEASUREMENT_ID } from '@/config/analytics';

interface GoogleSEOOptimizationProps {
  pageType?: 'homepage' | 'blog' | 'service' | 'legal';
  pageUrl?: string;
}

/**
 * GoogleSEOOptimization - Adds Google-specific performance hints and verification.
 * 
 * NOTE: title, description, robots, canonical, og:*, twitter:* tags are managed
 * by SEOHead. Do NOT add those here to avoid conflicts.
 */
export const GoogleSEOOptimization: React.FC<GoogleSEOOptimizationProps> = ({ 
  pageType = 'homepage',
  pageUrl = '/'
}) => {
  return (
    <Helmet>
      {/* Google Search Console Verification - duplicated in index.html for safety */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      
      {/* Google Analytics 4 - Managed by GA4Provider */}
      <script>
        {`
          // GA4 is initialized by GA4Provider component
          // Measurement ID: ${GA4_MEASUREMENT_ID}
        `}
      </script>

      {/* Core Web Vitals Optimization - preconnects */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Enhanced Performance Hints */}
      <meta name="format-detection" content="telephone=no" />
      
      <meta name="google" content="nositelinksearchbox" />
      <meta name="google" content="notranslate" />
      
      {/* NOTE: Organization, WebSite, and Service schemas are defined in index.html - DO NOT duplicate */}

      {/* Enhanced Security for Google Crawler */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};
