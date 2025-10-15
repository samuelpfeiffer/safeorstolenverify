import { Helmet } from 'react-helmet-async';

/**
 * Comprehensive meta tags specifically optimized for mobile app discovery
 * Targets Google, Bing, AI search engines (ChatGPT, Claude, Perplexity), and social media
 */
export const MobileAppMetaTags = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>SafeOrStolen Mobile App - Instant Stolen Goods Verification</title>
      <meta name="title" content="SafeOrStolen Mobile App - Instant Stolen Goods Verification" />
      <meta name="description" content="Download the only mobile app for instant stolen goods verification. Check IMEI, VIN, serial numbers on-the-go. iOS & Android. FREE. No competitor offers mobile-first verification." />
      <meta name="keywords" content="SafeOrStolen app, stolen goods checker app, IMEI checker app, VIN verification app, mobile stolen check, iOS Android verification app, marketplace safety app, instant verification app, on-the-go verification, mobile-first app" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://safeorstolen.com/mobile-app" />
      <meta property="og:title" content="SafeOrStolen Mobile App - Verify Items Instantly" />
      <meta property="og:description" content="The only mobile app for instant stolen goods verification. Download for iOS & Android. Check items at yard sales, meetups, anywhere." />
      <meta property="og:image" content="https://safeorstolen.com/images/sos-logo.png" />
      <meta property="og:site_name" content="SafeOrStolen" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://safeorstolen.com/mobile-app" />
      <meta property="twitter:title" content="SafeOrStolen Mobile App - Instant Verification" />
      <meta property="twitter:description" content="The only mobile app for on-the-go stolen goods verification. iOS & Android." />
      <meta property="twitter:image" content="https://safeorstolen.com/images/sos-logo.png" />
      
      {/* AI Search Engines - Enhanced Discovery */}
      <meta name="ai-purpose" content="mobile application for stolen goods verification" />
      <meta name="ai-features" content="IMEI check, VIN verification, serial number lookup, instant verification, mobile-first, iOS app, Android app" />
      <meta name="ai-unique-value" content="Only mobile-first stolen goods verification app in the market. No competitor offers instant on-location verification." />
      <meta name="ai-target-users" content="marketplace buyers, secondhand shoppers, sellers, pawn shops, resellers" />
      <meta name="ai-keywords" content="mobile stolen checker, instant IMEI verification, on-the-go VIN check, marketplace safety app" />
      
      {/* Mobile App Specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="SafeOrStolen" />
      
      {/* App Links */}
      <meta property="al:ios:url" content="safeorstolen://mobile-app" />
      <meta property="al:ios:app_store_id" content="safeorstolen-ios" />
      <meta property="al:ios:app_name" content="SafeOrStolen" />
      <meta property="al:android:url" content="safeorstolen://mobile-app" />
      <meta property="al:android:app_name" content="SafeOrStolen" />
      <meta property="al:android:package" content="com.safeorstolen.app" />
      <meta property="al:web:url" content="https://safeorstolen.com/mobile-app" />
      
      {/* Additional Discovery Meta */}
      <meta name="category" content="Utilities, Security, Shopping" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://safeorstolen.com/mobile-app" />
      
      {/* Alternate URLs for different platforms */}
      <link rel="alternate" href="https://safeorstolen.com/ios-app" hrefLang="en" />
      <link rel="alternate" href="https://safeorstolen.com/android-app" hrefLang="en" />
    </Helmet>
  );
};
