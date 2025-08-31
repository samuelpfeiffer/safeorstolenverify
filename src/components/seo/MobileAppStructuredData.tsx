import React from 'react';
import { Helmet } from 'react-helmet-async';

export const MobileAppStructuredData: React.FC = () => {
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen",
    "alternateName": "Safe Or Stolen",
    "description": "Verify items aren't stolen before you buy. Real-time verification for IMEI, VIN, and serial numbers. Protect yourself from marketplace fraud.",
    "url": "https://safeorstolen.com",
    "category": "Security",
    "genre": ["Security", "Utility", "Shopping"],
    "applicationCategory": "SecurityApplication",
    "operatingSystem": ["Android", "iOS"],
    "downloadUrl": [
      "https://play.google.com/store/apps/details?id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b",
      "https://apps.apple.com/us/app/safeorstolen/id6738429581"
    ],
    "installUrl": [
      "https://play.google.com/store/apps/details?id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b",
      "https://apps.apple.com/us/app/safeorstolen/id6738429581"
    ],
    "screenshot": [
      "https://safeorstolen.com/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png"
    ],
    "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "author": {
      "@type": "Organization",
      "name": "Safe or Stolen Corp.",
      "url": "https://safeorstolen.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Safe or Stolen Corp.",
      "url": "https://safeorstolen.com"
    },
    "creator": {
      "@type": "Organization",
      "name": "Safe or Stolen Corp."
    },
    "softwareVersion": "1.0.0",
    "releaseNotes": "First release of SafeOrStolen mobile app with real-time stolen goods verification",
    "datePublished": "2024-12-01",
    "dateModified": "2024-12-01",
    "fileSize": "25MB",
    "contentRating": "Everyone",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Real-time stolen goods verification",
      "IMEI, VIN, and serial number checking",
      "Offline verification cache",
      "Purchase history tracking",
      "Fraud protection alerts",
      "Marketplace integration"
    ],
    "requirements": "Android 8.0+ or iOS 12.0+",
    "memoryRequirements": "2GB RAM minimum",
    "processorRequirements": "ARMv7 or ARM64",
    "storageRequirements": "100MB available space",
    "supportingData": {
      "privacyPolicyUrl": "https://safeorstolen.com/privacy",
      "termsOfServiceUrl": "https://safeorstolen.com/terms"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen - Stolen Goods Verification",
    "applicationCategory": "SecurityApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Android, iOS, Web",
    "downloadUrl": "https://safeorstolen.com/download",
    "url": "https://safeorstolen.com",
    "description": "Verify items aren't stolen before you buy. Protect yourself from marketplace fraud with real-time database checks."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(mobileAppSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
      
      {/* Smart App Banners */}
      <meta name="apple-itunes-app" content="app-id=6738429581, app-argument=https://safeorstolen.com" />
      <meta name="google-play-app" content="app-id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      
      {/* App Store Links */}
      <link rel="alternate" href="android-app://app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b/https/safeorstolen.com" />
      <link rel="alternate" href="ios-app://6738429581/https/safeorstolen.com" />
      
      {/* Deep Link Support */}
      <meta name="al:android:package" content="app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      <meta name="al:android:app_name" content="SafeOrStolen" />
      <meta name="al:android:url" content="safeorstolen://open" />
      <meta name="al:ios:app_store_id" content="6738429581" />
      <meta name="al:ios:app_name" content="SafeOrStolen" />
      <meta name="al:ios:url" content="safeorstolen://open" />
      <meta name="al:web:url" content="https://safeorstolen.com" />
      
      {/* Twitter App Cards */}
      <meta name="twitter:app:name:iphone" content="SafeOrStolen" />
      <meta name="twitter:app:id:iphone" content="6738429581" />
      <meta name="twitter:app:url:iphone" content="safeorstolen://open" />
      <meta name="twitter:app:name:googleplay" content="SafeOrStolen" />
      <meta name="twitter:app:id:googleplay" content="app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      <meta name="twitter:app:url:googleplay" content="safeorstolen://open" />
    </Helmet>
  );
};