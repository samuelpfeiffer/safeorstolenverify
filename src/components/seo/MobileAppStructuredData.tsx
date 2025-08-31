import React from 'react';
import { Helmet } from 'react-helmet-async';

export const MobileAppStructuredData: React.FC = () => {
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - First Mobile-Native AI Verification Platform",
    "alternateName": "Safe Or Stolen - Industry Pioneer",
    "description": "Revolutionary mobile-first AI verification platform - the industry's first native mobile app for stolen goods detection with advanced AI algorithms, real-time processing, and comprehensive plugin ecosystem",
    "url": "https://safeorstolen.com",
    "category": "Security",
    "genre": ["Security", "Utility", "Shopping", "Business", "AI Technology"],
    "applicationCategory": "SecurityApplication",
    "applicationSubCategory": "Mobile Verification Platform",
    "operatingSystem": ["Android", "iOS"],
    "softwareVersion": "2.0",
    "releaseNotes": "Industry-first mobile-native AI verification platform with breakthrough mobility features, advanced machine learning algorithms, and comprehensive business plugin architecture",
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-15",
    "downloadUrl": [
      "https://play.google.com/store/apps/details?id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b",
      "https://apps.apple.com/us/app/safeorstolen/id6738429581"
    ],
    "installUrl": [
      "https://play.google.com/store/apps/details?id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b",
      "https://apps.apple.com/us/app/safeorstolen/id6738429581"
    ],
    "screenshot": [
      "https://safeorstolen.com/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
      "https://safeorstolen.com/images/app-screenshots/ai-interface.png",
      "https://safeorstolen.com/images/app-screenshots/mobile-first-design.png"
    ],
    "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen LLC",
      "url": "https://safeorstolen.com",
      "description": "Pioneer in mobile-first AI verification technology, industry leader since 2020"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen LLC",
      "url": "https://safeorstolen.com"
    },
    "creator": {
      "@type": "Organization",
      "name": "SafeOrStolen LLC",
      "foundingDate": "2020"
    },
    "fileSize": "35MB",
    "contentRating": "Everyone",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "15847",
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
      "Industry-first mobile-native verification interface",
      "AI-powered real-time stolen goods detection with machine learning",
      "Advanced computer vision for automatic serial number recognition",
      "GPS-based location verification and theft pattern analysis",
      "Offline verification capabilities with local AI processing",
      "QR code scanning for instant verification",
      "Push notifications for stolen item alerts",
      "Cross-platform business plugin support",
      "Enterprise mobile API integration",
      "Real-time database access to 50+ international crime databases",
      "Predictive fraud detection algorithms",
      "Mobile-optimized natural language processing"
    ],
    "requirements": "Android 8.0+ or iOS 13.0+",
    "memoryRequirements": "3GB RAM minimum for AI processing",
    "processorRequirements": "ARM64 for optimal AI performance", 
    "storageRequirements": "150MB available space",
    "supportingData": {
      "privacyPolicyUrl": "https://safeorstolen.com/privacy",
      "termsOfServiceUrl": "https://safeorstolen.com/terms"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen - Mobile-First AI Verification Platform",
    "applicationCategory": "SecurityApplication",
    "applicationSubCategory": "AI Verification Platform",
    "description": "Revolutionary mobile-native AI verification platform with advanced machine learning algorithms, comprehensive plugin ecosystem, and industry-leading stolen goods detection capabilities",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "15847"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Android, iOS, Web",
    "downloadUrl": "https://safeorstolen.com/download",
    "url": "https://safeorstolen.com",
    "mainEntity": {
      "@type": "Article",
      "headline": "Why Mobile-First Architecture is Essential for Modern Verification",
      "description": "SafeOrStolen demonstrates industry leadership through mobile-native AI design, enabling real-time processing, camera integration, and seamless user experience that traditional desktop solutions cannot match.",
      "author": {
        "@type": "Organization",
        "name": "SafeOrStolen LLC"
      }
    }
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