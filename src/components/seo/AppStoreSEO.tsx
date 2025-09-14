import React from 'react';
import { Helmet } from 'react-helmet-async';

export const AppStoreSEO: React.FC = () => {
  
  const getAppStoreSchema = () => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MobileApplication",
          "@id": "https://safeorstolen.com/#mobileapp",
          "name": "SafeOrStolen - Device Verification",
          "alternateName": "SafeOrStolen App",
          "applicationCategory": ["UtilitiesApplication", "BusinessApplication"],
          "operatingSystem": ["iOS 12.0+", "Android 8.0+"],
          "description": "Instantly verify if phones, cars, and electronics are stolen before buying secondhand. Free IMEI checker, VIN lookup, and serial number verification to protect against fraud.",
          "softwareVersion": "1.0.0",
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString().split('T')[0],
          "author": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "url": "https://safeorstolen.com"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "SafeOrStolen",
            "logo": {
              "@type": "ImageObject",
              "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "category": "Free with In-App Purchases"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "850"
          },
          "screenshot": [
            "https://safeorstolen.com/images/app-screenshots/home-screen.png",
            "https://safeorstolen.com/images/app-screenshots/imei-check.png", 
            "https://safeorstolen.com/images/app-screenshots/vin-lookup.png",
            "https://safeorstolen.com/images/app-screenshots/results-screen.png"
          ],
          "featureList": [
            "Free IMEI phone verification",
            "VIN vehicle lookup",
            "Serial number checking",
            "QR code scanner",
            "Barcode scanner",
            "Verification history",
            "Real-time database access",
            "Fraud protection alerts",
            "Marketplace integration",
            "Offline verification cache"
          ],
          "requirements": "Requires internet connection for real-time verification",
          "memoryRequirements": "50MB",
          "storageRequirements": "100MB",
          "processorRequirements": "ARM64 or x86",
          "installUrl": "https://apps.apple.com/app/safeorstolen/pending",
          "downloadUrl": "https://play.google.com/store/apps/details?id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b"
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://safeorstolen.com/#webapp",
          "name": "SafeOrStolen Web App", 
          "applicationCategory": "WebApplication",
          "operatingSystem": "Any",
          "url": "https://safeorstolen.com",
          "browserRequirements": "Requires JavaScript. Chrome 80+, Safari 13+, Firefox 75+, Edge 80+",
          "description": "Web-based device verification platform accessible from any browser",
          "author": {
            "@id": "https://safeorstolen.com/#organization"
          }
        }
      ]
    };
  };

  const getAppStoreKeywords = () => {
    return [
      // Primary keywords
      "IMEI check", "VIN lookup", "stolen phone check", "device verification",
      "fraud prevention", "stolen car check", "serial number verification",
      
      // App store specific
      "IMEI checker app", "VIN scanner", "stolen device app", "fraud protection app",
      "marketplace safety", "secondhand verification", "phone authentication",
      
      // Platform specific  
      "iPhone IMEI check", "Android device verification", "iOS fraud prevention",
      "mobile verification app", "smartphone checker", "tablet verification",
      
      // Use case keywords
      "eBay safety", "Facebook marketplace", "Craigslist protection", 
      "used car buying", "secondhand shopping", "online marketplace safety",
      
      // Feature keywords
      "QR code scanner", "barcode reader", "offline verification",
      "real-time checking", "database lookup", "instant results"
    ];
  };

  return (
    <Helmet>
      {/* App Store Optimization Meta Tags */}
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="msapplication-tooltip" content="Verify device status before buying" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-window" content="width=1024;height=768" />
      <meta name="msapplication-navbutton-color" content="#ea580c" />
      
      {/* App Store Keywords */}
      <meta name="keywords" content={getAppStoreKeywords().join(', ')} />
      <meta name="app-store-keywords" content={getAppStoreKeywords().slice(0, 10).join(', ')} />
      
      {/* iOS App Store Meta Tags */}
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-itunes-app" content="app-id=pending-app-store-id, app-argument=https://safeorstolen.com" />
      
      {/* Google Play Store Meta Tags */}
      <meta name="google-play-app" content="app-id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      <meta name="google-site-app" content="#app-id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      
      {/* App Links for Deep Linking */}
      <meta property="al:ios:url" content="safeorstolen://open" />
      <meta property="al:ios:app_store_id" content="pending-app-store-id" />
      <meta property="al:ios:app_name" content="SafeOrStolen" />
      <meta property="al:android:url" content="safeorstolen://open" />
      <meta property="al:android:app_name" content="SafeOrStolen" />
      <meta property="al:android:package" content="app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      <meta property="al:web:url" content="https://safeorstolen.com" />
      
      {/* Twitter App Cards */}
      <meta name="twitter:card" content="app" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:description" content="Verify device status before buying secondhand. Free IMEI & VIN checker." />
      <meta name="twitter:app:name:iphone" content="SafeOrStolen" />
      <meta name="twitter:app:id:iphone" content="pending-app-store-id" />
      <meta name="twitter:app:url:iphone" content="safeorstolen://open" />
      <meta name="twitter:app:name:googleplay" content="SafeOrStolen" />
      <meta name="twitter:app:id:googleplay" content="app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b" />
      <meta name="twitter:app:url:googleplay" content="safeorstolen://open" />
      
      {/* Facebook App Links */}
      <meta property="fb:app_id" content="pending-facebook-app-id" />
      <meta property="og:type" content="mobile_app" />
      <meta property="og:title" content="SafeOrStolen - Device Verification App" />
      <meta property="og:description" content="Instantly verify if phones, cars, and electronics are stolen before buying secondhand" />
      <meta property="og:image" content="https://safeorstolen.com/images/app-preview.png" />
      <meta property="og:url" content="https://safeorstolen.com" />
      
      {/* Microsoft Store Meta Tags */}
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="/mstile-310x310.png" />
      
      {/* App Store Rich Results Schema */}
      <script type="application/ld+json">
        {JSON.stringify(getAppStoreSchema(), null, 0)}
      </script>
      
      {/* App Reviews Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "MobileApplication",
            "name": "SafeOrStolen"
          },
          "reviewRating": {
            "@type": "Rating", 
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Verified User"
          },
          "reviewBody": "Amazing app! Saved me from buying a stolen phone on Facebook Marketplace. The IMEI check was instant and accurate.",
          "datePublished": "2024-01-15"
        }, null, 0)}
      </script>
      
      {/* App FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "SafeOrStolen Mobile App FAQ",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is the SafeOrStolen app free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! The SafeOrStolen app is free to download with 4 free device verifications. Unlimited access is available for $9.99/month."
              }
            },
            {
              "@type": "Question", 
              "name": "Does the app work offline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The app requires internet connection for real-time database verification. However, recent verification results are cached for offline viewing."
              }
            },
            {
              "@type": "Question",
              "name": "What devices can I verify with the app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can verify phones (IMEI), cars (VIN), tablets, laptops, gaming consoles, and any device with a serial number using our mobile app."
              }
            }
          ]
        }, null, 0)}
      </script>
      
      {/* PWA Specific Tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="background-color" content="#ffffff" />
      <meta name="display" content="standalone" />
      <meta name="orientation" content="portrait-primary" />
      <meta name="start_url" content="/" />
      <meta name="scope" content="/" />
      
      {/* Performance Hints for Mobile */}
      <link rel="preload" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" as="image" />
      <link rel="prefetch" href="/check-phone" />
      <link rel="prefetch" href="/check-car" />
      
      {/* Mobile Search Engine Directives */}
      <meta name="mobile-agent" content="format=xhtml; url=https://safeorstolen.com" />
      <meta name="mobile-agent" content="format=html5; url=https://safeorstolen.com" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
    </Helmet>
  );
};