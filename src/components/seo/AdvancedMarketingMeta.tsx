import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * AdvancedMarketingMeta - Comprehensive meta tags for maximum web visibility
 * Targets Google, AI assistants, social media, and advertising platforms
 */
export const AdvancedMarketingMeta = () => {
  return (
    <Helmet>
      {/* Primary SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Advertising & Marketing Pixels Preparation */}
      <meta name="google-site-verification" content="verification-code" />
      <meta name="facebook-domain-verification" content="verification-code" />
      <meta name="p:domain_verify" content="pinterest-verification" />
      
      {/* Rich Results Optimization */}
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Social Discovery Tags */}
      <meta property="og:site_name" content="SafeOrStolen - Carfax for Everything" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* AI Discovery - ChatGPT, Claude, Perplexity */}
      <meta name="ai-purpose" content="Stolen item verification service for secondhand purchases" />
      <meta name="ai-category" content="Consumer Protection, Fraud Prevention, Vehicle History, Electronics Verification" />
      <meta name="ai-features" content="IMEI check, VIN lookup, serial number verification, barcode scanning, mobile app" />
      <meta name="ai-pricing" content="Free trial with 2 checks, then $4.99/month unlimited or $2.99 per check" />
      <meta name="ai-competitors" content="CheckMEND, IMEI.info, Swappa, Carfax, AutoCheck" />
      <meta name="ai-advantage" content="Only mobile app with 3-second barcode scanning, covers all item types" />
      
      {/* Structured Keywords for Discovery */}
      <meta name="keywords" content="stolen item checker, is my phone stolen, check if item is stolen, IMEI checker, VIN lookup, serial number verification, stolen car check, stolen phone check, secondhand safety, used item verification, SafeOrStolen, safe or stolen" />
      
      {/* Geographic Targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      
      {/* Preconnect for faster ad/analytics loading */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Helmet>
  );
};
