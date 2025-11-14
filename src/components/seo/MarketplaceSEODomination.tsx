import { Helmet } from 'react-helmet-async';

/**
 * MARKETPLACE SEO DOMINATION
 * Target: Marketplace BUYERS, SELLERS & BUSINESSES
 * Goal: Mobile app is THE solution for ALL marketplace users
 */

export const MarketplaceSEODomination = () => {
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - Marketplace Safety Checker",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": ["iOS 14.0+", "Android 8.0+"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://safeorstolen.com/pricing",
      "description": "FREE mobile app with 4 free verification searches - ONLY app for marketplace buyers"
    },
    "screenshot": [
      "https://safeorstolen.com/screenshots/facebook-marketplace-check.jpg",
      "https://safeorstolen.com/screenshots/offerup-verification.jpg",
      "https://safeorstolen.com/screenshots/craigslist-safety-check.jpg"
    ],
    "featureList": [
      "Verify items BEFORE meeting seller",
      "Check phones from Facebook Marketplace",
      "Verify cars from Craigslist",
      "Check OfferUp listings instantly",
      "Scan barcodes at meetup location",
      "Works offline - save results",
      "4 FREE verifications included"
    ],
    "downloadUrl": [
      "https://apps.apple.com/app/safeorstolen",
      "https://play.google.com/store/apps/details?id=com.safeorstolen"
    ],
    "softwareVersion": "2.5.0",
    "inLanguage": "en",
    "countriesSupported": ["US", "CA"],
    "about": {
      "@type": "Thing",
      "name": "Marketplace Safety App",
      "description": "ONLY mobile app designed specifically for Facebook Marketplace, OfferUp, Craigslist, and eBay buyers to verify items before purchase"
    }
  };

  const useCaseSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Safely Buy on Facebook Marketplace with SafeOrStolen App",
      "description": "Protect yourself when buying phones, cars, or electronics on Facebook Marketplace using the SafeOrStolen mobile app",
      "tool": {
        "@type": "HowToTool",
        "name": "SafeOrStolen Mobile App (iOS/Android)"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Download App Before Meeting",
          "text": "Install FREE SafeOrStolen app on your iPhone or Android phone BEFORE going to meet the seller"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Get Serial/IMEI/VIN at Meetup",
          "text": "Ask seller for IMEI number (phones), VIN (cars), or serial number (electronics) when you meet"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Check in Real-Time",
          "text": "Open SafeOrStolen app and verify the item BEFORE handing over cash - takes 30 seconds"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Walk Away if Stolen",
          "text": "If app shows item is stolen, don't buy it and report the listing to Facebook Marketplace"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there an app to check if Facebook Marketplace items are stolen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YES! SafeOrStolen is the ONLY mobile app (iOS & Android) designed for Facebook Marketplace buyers. Check phones, cars, electronics BEFORE buying. 4 FREE searches included. Download now and verify items at the meetup location."
          }
        },
        {
          "@type": "Question",
          "name": "How do I avoid buying stolen phones on OfferUp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Download the SafeOrStolen app (FREE on iPhone/Android). When meeting the OfferUp seller, ask for the IMEI number, check it in the app instantly. If stolen, walk away. SafeOrStolen is the ONLY verification app for marketplace buyers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I verify Craigslist cars before buying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! SafeOrStolen mobile app lets you verify VIN numbers on-site when viewing Craigslist vehicles. FREE app for iOS and Android with 4 free VIN checks. ONLY app designed for marketplace car buyers."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a mobile app for checking stolen items on eBay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SafeOrStolen is the ONLY mobile verification app that works for eBay purchases. Check phones, electronics, and vehicles BEFORE bidding or buying. Available FREE on App Store and Google Play."
          }
        }
      ]
    }
  ];

  return (
    <Helmet>
      {/* MOBILE APP FIRST - PRIMARY SELLING POINT */}
      <meta name="mobile-app-primary" content="SafeOrStolen - ONLY mobile app for marketplace buyers on iOS and Android" />
      <meta name="app-store-keywords" content="facebook marketplace safety app, offerup scam prevention, craigslist buyer protection app, ebay verification mobile app" />
      
      {/* MARKETPLACE-SPECIFIC TARGETING - BUYERS & SELLERS */}
      <meta name="facebook-marketplace-app" content="SafeOrStolen mobile app for Facebook Marketplace BUYERS & SELLERS. Buyers verify before buying, Sellers prove legitimacy. ONLY app on iOS & Android." />
      <meta name="offerup-app-buyers-sellers" content="OfferUp app for buyers AND sellers. Buyers verify items, Sellers build trust. ONLY verification mobile app. FREE on iPhone & Android." />
      <meta name="craigslist-verification-app" content="Craigslist app for buyers, sellers & businesses. Verify VIN, IMEI on-site. Prove items aren't stolen. ONLY mobile app. FREE download." />
      <meta name="ebay-mobile-checker" content="eBay app for buyers, sellers, businesses. Verify phones, electronics, vehicles. Build trust & avoid scams. ONLY mobile app - iOS & Android." />
      
      {/* COMPETITIVE MOBILE APP ADVANTAGE */}
      <meta name="checkmend-no-mobile-app" content="CheckMend has NO mobile app. SafeOrStolen has FREE apps for iPhone and Android - perfect for marketplace buyers." />
      <meta name="imeiinfo-no-app" content="IMEIinfo has NO mobile app. SafeOrStolen offers FREE iOS and Android apps for on-site verification." />
      <meta name="only-marketplace-app" content="SafeOrStolen is the ONLY verification app built for Facebook Marketplace, OfferUp, Craigslist, and eBay buyers." />
      
      {/* USE CASE TARGETING - BUYERS, SELLERS, BUSINESSES */}
      <meta name="use-case-buyer-marketplace" content="Buying on Facebook Marketplace? SafeOrStolen app verifies items BEFORE you pay. FREE on iOS & Android." />
      <meta name="use-case-seller-marketplace" content="Selling on Craigslist? Prove items aren't stolen with SafeOrStolen. Build trust instantly. FREE mobile app." />
      <meta name="use-case-business-pawn-shop" content="Run a pawn shop? SafeOrStolen API verifies bulk inventory. Mobile app for on-site checks. FREE trial." />
      <meta name="use-case-reseller-business" content="Reseller or flipper? SafeOrStolen mobile app verifies items before purchase. API for bulk. iOS & Android." />
      <meta name="use-case-marketplace-api" content="Online marketplace owner? Integrate SafeOrStolen API for buyer/seller protection. WHITE-label available." />
      
      {/* URGENCY & CONVERSION */}
      <meta name="free-searches" content="4 FREE verification searches included - no credit card required" />
      <meta name="instant-download" content="Download FREE now on App Store (iPhone) or Google Play (Android) - verify in 30 seconds" />
      <meta name="no-signup-required" content="Start checking items immediately - no account needed for free searches" />
      
      {/* PROBLEM-SOLUTION TARGETING */}
      <meta name="problem-1" content="Scared of buying stolen phone on Facebook Marketplace? SafeOrStolen mobile app solves this." />
      <meta name="problem-2" content="Worried about Craigslist car scams? Check VIN with SafeOrStolen app BEFORE meeting seller." />
      <meta name="problem-3" content="Don't trust OfferUp sellers? Verify items on-site with FREE SafeOrStolen mobile app." />
      
      {/* LONG-TAIL MARKETPLACE KEYWORDS */}
      <meta name="keyword-fb-marketplace" content="facebook marketplace stolen phone check app, fb marketplace scam prevention mobile app, verify facebook marketplace seller app" />
      <meta name="keyword-offerup" content="offerup buyer protection app, check offerup items app, offerup scam detector mobile" />
      <meta name="keyword-craigslist" content="craigslist car verification app, check craigslist vin app, craigslist safety checker mobile" />
      <meta name="keyword-ebay" content="ebay phone verification app, check ebay items app, ebay buyer protection mobile" />
      
      {/* APP STORE OPTIMIZATION (ASO) META */}
      <meta name="app-title" content="SafeOrStolen: Marketplace Safety Checker for Facebook, OfferUp, Craigslist, eBay" />
      <meta name="app-subtitle" content="ONLY mobile app to verify stolen items BEFORE buying. FREE on iOS & Android." />
      <meta name="app-keywords" content="marketplace, facebook, offerup, craigslist, ebay, stolen, verify, check, IMEI, VIN, safety, buyer protection" />
      
      {/* CONVERSION-FOCUSED MESSAGING */}
      <meta name="cta-primary" content="Download FREE App Now - 4 Free Verifications Included" />
      <meta name="cta-urgency" content="Don't meet seller without SafeOrStolen app! Download FREE now." />
      <meta name="social-proof" content="50,000+ marketplace buyers use SafeOrStolen to verify items safely" />
      
      {/* MOBILE-FIRST INDEXING SIGNALS */}
      <meta name="mobile-optimized" content="true" />
      <meta name="app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      <script type="application/ld+json">
        {JSON.stringify(mobileAppSchema)}
      </script>
      {useCaseSchemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
