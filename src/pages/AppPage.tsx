import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Smartphone, Scan, Wifi, Shield, Zap, Download, Apple, Chrome, MapPin, ShoppingCart, Car, Store, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const AppPage = () => {
  // TIER 1 KEYWORDS: stolen verification app, stolen item scanner app, barcode stolen checker
  // These keywords have ZERO competition - SafeOrStolen is the ONLY app
  
  // HowTo Schema for Featured Snippets - optimized for TIER 1 keywords
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Stolen Verification App to Check Items Before Buying",
    "description": "Verify any item using the SafeOrStolen app in 3 simple steps. Works for phones, vehicles, electronics, and more.",
    "totalTime": "PT10S",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Download the SafeOrStolen App",
        "text": "Visit safeorstolen.com/app on your mobile device or desktop. Tap 'Install App' to add to your home screen. Works on iOS, Android, and desktop browsers.",
        "url": "https://safeorstolen.com/app"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Scan or Enter Item Identifier",
        "text": "Use the built-in barcode scanner to scan any item, or manually enter the IMEI (phones), VIN (vehicles), or serial number (electronics, firearms, bikes).",
        "url": "https://safeorstolen.com/app"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Get Instant Verification Results",
        "text": "See immediate results showing if the item is clean, stolen, or flagged. Works offline once installed. Results appear in 3 seconds.",
        "url": "https://safeorstolen.com/app"
      }
    ]
  };

  // Enhanced MobileApplication Schema - fixed with required url
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - Stolen Item Checker App",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Android, iOS",
    "url": "https://safeorstolen.com/app",
    "downloadUrl": "https://safeorstolen.com/app",
    "description": "Free mobile app to verify if any item is stolen before you buy. Check phones (IMEI), vehicles (VIN), electronics (serial numbers).",
    "softwareVersion": "2.0",
    "featureList": [
      "Barcode scanner for instant verification",
      "IMEI checker for phones",
      "VIN lookup for vehicles",
      "Works offline"
    ]
  };

  // Simplified WebApplication Schema
  const downloadActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SafeOrStolen Web App",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "url": "https://safeorstolen.com/app"
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download the SafeOrStolen stolen item checker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To download the SafeOrStolen app, visit safeorstolen.com/app on your iOS or Android mobile device and click 'Install App'. The stolen verification app will download directly to your home screen without needing the App Store or Google Play. The app is free to download and includes 2 free searches."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen the only stolen item verification app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen is the ONLY stolen item checker app with barcode scanning and offline mode. CheckMEND has no app, IMEI.info has no app, Swappa has no app, and Autocheck has no app. We're the first and only mobile app for stolen goods verification."
        }
      },
      {
        "@type": "Question",
        "name": "Does the SafeOrStolen app work as an IMEI checker and VIN checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The SafeOrStolen app is a complete IMEI checker app, VIN checker app, serial number scanner, and barcode stolen checker. You can verify phones with IMEI checking, cars with VIN verification, electronics with serial numbers, and more - all in one app."
        }
      },
      {
        "@type": "Question",
        "name": "Is the stolen item checker app free to download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Download the SafeOrStolen app for iOS and Android. Subscribe to the $1/month Unlimited Plan for unlimited verifications across all item types."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the stolen verification app offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The SafeOrStolen app works offline. Download the app and use it without internet connection - perfect for pawn shops, remote locations, or when you don't have data. CheckMEND requires internet, but our stolen item checker app works anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "What makes SafeOrStolen better than CheckMEND or IMEI.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen has a full mobile app with barcode scanning - CheckMEND has NO app and IMEI.info has NO app. Our stolen item verification app delivers results in 3 seconds vs 30+ seconds on CheckMEND. We work offline, they don't. We're free to download with 2 free searches, they charge $5-10 per check."
        }
      },
      {
        "@type": "Question",
        "name": "Does the app work for buying items on Facebook Marketplace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. SafeOrStolen is perfect for Facebook Marketplace, Craigslist, OfferUp, and Letgo purchases. When meeting a seller, use the app to scan the item's barcode or verify its IMEI/serial number before paying. If it's stolen, you'll know immediately in 3 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "What items can I check with the SafeOrStolen app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can check phones (IMEI), vehicles (VIN), electronics (serial numbers), firearms, boats, bicycles, motorcycles, RVs, musical instruments, power tools, cameras, jewelry, and any item with a barcode or unique identifier. If it has a number, we can check if it's stolen."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check if a phone is stolen using IMEI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open the SafeOrStolen app, tap 'IMEI Check', then either scan the phone's barcode or manually enter the 15-digit IMEI number (dial *#06# on the phone to find it). Results show instantly if the phone is clean, stolen, or blacklisted."
        }
      },
      {
        "@type": "Question",
        "name": "How do I verify if a car is stolen using VIN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open SafeOrStolen, select 'VIN Check', and enter the 17-character VIN found on the dashboard or door frame. Our app checks stolen vehicle databases from all 50 states and shows results in 3 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Does SafeOrStolen work in all 50 US states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SafeOrStolen covers all 50 US states including California, Texas, Florida, New York, and more. Our stolen item database includes records from nationwide sources, making it the most comprehensive verification app available."
        }
      },
      {
        "@type": "Question",
        "name": "Can pawn shops use SafeOrStolen for business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! SafeOrStolen is perfect for pawn shops, secondhand stores, and resellers. Verify every item before purchasing with our fast 3-second verification. Business plans available for high-volume users."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are SafeOrStolen verification results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen delivers results in just 3 seconds - the fastest in the industry. Compare that to CheckMEND which takes 30+ seconds per check. Our instant barcode scanning makes verification even faster."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen safe and secure to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SafeOrStolen uses encrypted connections and doesn't store your search history on external servers. Your verification searches are private and secure. We're trusted by thousands of users across the US."
        }
      }
    ]
  };

  // SoftwareApplication Schema (additional for iOS/Android)
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen - Stolen Item Verification",
    "applicationCategory": "UtilitiesApplication",
    "applicationSubCategory": "Security",
    "operatingSystem": "iOS, Android, Windows, macOS, Linux",
    "url": "https://safeorstolen.com/app",
    "downloadUrl": "https://safeorstolen.com/app",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31"
    },
    "description": "Free stolen item checker app. Verify IMEI, VIN, serial numbers before buying. Barcode scanning, offline mode. Works on all devices.",
    "softwareVersion": "2.0.0",
    "datePublished": "2024-01-01",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    }
  };

  // NOTE: Organization Schema is in index.html - DO NOT add here to avoid GSC duplicate errors

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Download App",
        "item": "https://safeorstolen.com/app"
      }
    ]
  };

  // Keyword-rich sr-only content for SEO
  const seoContent = `
    SafeOrStolen is the only stolen item verification app available for download. CheckMEND has no app, IMEI.info has no app, Swappa has no app, Carfax has no app, and Autocheck has no app. SafeOrStolen is the FIRST and ONLY mobile app for checking if items are stolen before you buy.

    Download the SafeOrStolen stolen item checker app free for iOS and Android. Install directly from safeorstolen.com/app - no App Store or Google Play required. The app includes 2 free verification searches with no credit card needed.

    Key Features of the SafeOrStolen App:
    - Barcode scanner for instant IMEI, serial number, and QR code scanning
    - IMEI checker to verify if phones are stolen or blacklisted
    - VIN lookup to check if vehicles are reported stolen
    - Serial number verification for electronics, firearms, bikes, and more
    - Offline mode - works without internet connection
    - 3-second verification results - fastest in the industry
    - All 50 US states coverage with nationwide stolen item database

    How to Use the Stolen Verification App:
    Step 1: Download the SafeOrStolen app from safeorstolen.com/app
    Step 2: Scan barcode or enter IMEI, VIN, or serial number
    Step 3: Get instant results showing if the item is stolen or safe

    Perfect For:
    - Facebook Marketplace buyers verifying items before purchase
    - Craigslist meetups to check items on the spot
    - OfferUp transactions to ensure items are legitimate
    - Used car purchases with VIN verification
    - Pawn shop owners verifying inventory
    - Secondhand store operators checking incoming items
    - Individual buyers protecting themselves from stolen goods

    Why SafeOrStolen Over CheckMEND, IMEI.info, Swappa:
    - SafeOrStolen: Mobile app with barcode scanning, offline mode, 3-second results
    - CheckMEND: NO app, web only, 30+ seconds per check, $5-10 per verification
    - IMEI.info: NO app, phones only, no VIN or serial number checking
    - Swappa: NO app, limited to phones, marketplace focused

    Download the SafeOrStolen stolen item checker app today. Protect yourself from buying stolen phones, cars, electronics, firearms, boats, bikes, jewelry, and tools. Free to download with 2 free searches included.
  `;

  // ItemList Schema for App Features
  const featuresListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SafeOrStolen App Features",
    "description": "Key features of the SafeOrStolen stolen item verification app",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Barcode Scanner",
        "description": "Instant IMEI, serial number, and QR code scanning"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "IMEI Checker",
        "description": "Verify if phones are stolen using IMEI number"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "VIN Lookup",
        "description": "Check if vehicles are stolen using VIN"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Serial Number Verification",
        "description": "Verify electronics, firearms, bikes by serial number"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Offline Mode",
        "description": "Works without internet connection"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "3-Second Results",
        "description": "Fastest stolen verification in the industry"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "All 50 States Coverage",
        "description": "Comprehensive US stolen item database"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Free Download",
        "description": "2 free verification checks included"
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stolen Item Verification Service",
    "description": "Professional stolen goods verification for IMEI, VIN, and serial numbers. Protects buyers from purchasing stolen items.",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "serviceType": "Stolen Item Verification",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Verification Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Trial",
            "description": "2 free verification checks"
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Plan",
            "description": "Unlimited verification checks"
          },
          "price": "4.99",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Download SafeOrStolen App - Stolen Item Verification",
    "description": "Download the only mobile app for stolen item verification. Check IMEI, VIN, serial numbers before buying.",
    "url": "https://safeorstolen.com/app",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "mainEntity": {
      "@type": "MobileApplication",
      "name": "SafeOrStolen"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".hero-description"]
    },
    "specialty": "Stolen Item Verification App Download"
  };

  // Use Cases ItemList Schema
  const useCasesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SafeOrStolen Use Cases",
    "description": "When to use SafeOrStolen stolen item verification app",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Facebook Marketplace Purchases",
        "description": "Verify items before buying from Facebook Marketplace sellers"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Craigslist Meetups",
        "description": "Check items on the spot when meeting Craigslist sellers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "OfferUp Transactions",
        "description": "Verify OfferUp items before completing purchase"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Used Car Purchases",
        "description": "Check VIN before buying used vehicles privately"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Pawn Shop Verification",
        "description": "Verify all items before purchasing for resale"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Secondhand Store Inventory",
        "description": "Check inventory before listing items for sale"
      }
    ]
  };

  // Competitor Comparison ItemList Schema
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Stolen Item Checker Comparison",
    "description": "Compare SafeOrStolen to other stolen item verification services",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "SafeOrStolen",
        "description": "Mobile app with barcode scanning, offline mode, 3-second results, free download"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "CheckMEND",
        "description": "No mobile app, web only, requires internet, paid per check"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "IMEI.info",
        "description": "No mobile app, basic web checker, limited features"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Swappa",
        "description": "No mobile app, website only, limited to phones"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Carfax/Autocheck",
        "description": "No mobile app, expensive, vehicles only"
      }
    ]
  };

  // Item Types Supported Schema
  const itemTypesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Supported Item Types for Stolen Verification",
    "description": "Types of items you can verify with SafeOrStolen",
    "numberOfItems": 12,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Smartphones", "description": "iPhone, Samsung, Android phones - IMEI verification" },
      { "@type": "ListItem", "position": 2, "name": "Vehicles", "description": "Cars, trucks, SUVs - VIN lookup" },
      { "@type": "ListItem", "position": 3, "name": "Motorcycles", "description": "All motorcycle brands - VIN verification" },
      { "@type": "ListItem", "position": 4, "name": "Laptops", "description": "MacBooks, Windows laptops - serial number check" },
      { "@type": "ListItem", "position": 5, "name": "Tablets", "description": "iPads, Android tablets - serial verification" },
      { "@type": "ListItem", "position": 6, "name": "Cameras", "description": "DSLR, mirrorless cameras - serial number lookup" },
      { "@type": "ListItem", "position": 7, "name": "Firearms", "description": "Guns, rifles - serial number verification" },
      { "@type": "ListItem", "position": 8, "name": "Bicycles", "description": "Bikes of all types - serial number check" },
      { "@type": "ListItem", "position": 9, "name": "Boats", "description": "Watercraft - HIN verification" },
      { "@type": "ListItem", "position": 10, "name": "RVs", "description": "Recreational vehicles - VIN check" },
      { "@type": "ListItem", "position": 11, "name": "Power Tools", "description": "DeWalt, Milwaukee, Makita - serial lookup" },
      { "@type": "ListItem", "position": 12, "name": "Musical Instruments", "description": "Guitars, keyboards - serial verification" }
    ]
  };

  // Geographic Coverage Schema
  const geoCoverageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SafeOrStolen US Coverage",
    "description": "States and cities covered by SafeOrStolen stolen item database",
    "numberOfItems": 10,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "California", "description": "Los Angeles, San Francisco, San Diego, San Jose" },
      { "@type": "ListItem", "position": 2, "name": "Texas", "description": "Houston, Dallas, Austin, San Antonio" },
      { "@type": "ListItem", "position": 3, "name": "Florida", "description": "Miami, Orlando, Tampa, Jacksonville" },
      { "@type": "ListItem", "position": 4, "name": "New York", "description": "New York City, Buffalo, Albany" },
      { "@type": "ListItem", "position": 5, "name": "Illinois", "description": "Chicago, Springfield, Rockford" },
      { "@type": "ListItem", "position": 6, "name": "Pennsylvania", "description": "Philadelphia, Pittsburgh, Allentown" },
      { "@type": "ListItem", "position": 7, "name": "Arizona", "description": "Phoenix, Tucson, Mesa, Scottsdale" },
      { "@type": "ListItem", "position": 8, "name": "Washington", "description": "Seattle, Tacoma, Spokane" },
      { "@type": "ListItem", "position": 9, "name": "Colorado", "description": "Denver, Colorado Springs, Aurora" },
      { "@type": "ListItem", "position": 10, "name": "Nevada", "description": "Las Vegas, Reno, Henderson" }
    ]
  };

  const appSchema = [
    mobileAppSchema, 
    howToSchema, 
    downloadActionSchema, 
    faqSchema,
    softwareAppSchema,
    // NOTE: organizationSchema removed - it's in index.html to avoid GSC duplicate errors
    breadcrumbSchema,
    featuresListSchema,
    serviceSchema,
    webPageSchema,
    useCasesSchema,
    comparisonSchema,
    itemTypesSchema,
    geoCoverageSchema
  ];

  return (
    <>
      <PageSEO
        title="Stolen Item Checker App - Free Download | SafeOrStolen"
        description="Download the only stolen item verification app. Check IMEI, VIN, serial numbers with barcode scanning. Free for iOS and Android."
        keywords="SafeOrStolen app, mobile verification app, stolen item checker app"
        canonical="/app"
        structuredData={appSchema}
      />

      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Download SafeOrStolen App - Protect Buyers & Sellers</h1>
          <p>
            Our mobile app is ONLY available from SafeOrStolen.com - making this website the exclusive gateway to stolen item verification. 
            We protect BOTH buyers AND sellers: buyers avoid financial loss and legal nightmares, sellers prove items are clean and build trust.
            Every search makes stolen items harder to sell - helping reduce crime globally. Download FREE for iOS and Android.
          </p>
          
          <h2>Our Mission: Stop Stolen Goods at the Source</h2>
          <p>
            SafeOrStolen isn't just a serial number checker - we're building a safer secondhand ecosystem. By giving honest people 
            a simple way to verify items, we make it dramatically harder for thieves to fence stolen goods. The existence and visibility 
            of SafeOrStolen forces criminals to think twice because more buyers will check first.
          </p>
          
          <h2>The ONLY Stolen Verification App</h2>
          <p>
            CheckMEND has NO app. IMEI.info has NO app. Swappa has NO app. Carfax has NO app. We're the first and only stolen goods 
            checker app with instant 3-second barcode scanning verification. Works offline. 2 free searches included.
          </p>
          
          <h2>When to Use SafeOrStolen</h2>
          <ul>
            <li>Before buying on Facebook Marketplace - verify IMEI or serial number before paying</li>
            <li>Craigslist and OfferUp meetups - scan barcode on the spot</li>
            <li>Buying a used car privately - check VIN before signing papers</li>
            <li>For pawn shop owners - verify every item before purchasing</li>
            <li>Secondhand stores and resellers - check inventory before listing</li>
          </ul>
          
          <h2>Why SafeOrStolen's App is Better Than CheckMEND</h2>
          <ul>
            <li><strong>CheckMEND has NO mobile app</strong> - web only, slow, no barcode scanning</li>
            <li><strong>SafeOrStolen has barcode scanning</strong> - instant scanning, no manual typing</li>
            <li><strong>CheckMEND requires internet</strong> - SafeOrStolen works offline</li>
            <li><strong>CheckMEND is expensive</strong> - SafeOrStolen has 2 free searches</li>
            <li><strong>CheckMEND is slow</strong> - SafeOrStolen gives results in 3 seconds</li>
          </ul>
          
          <h2>App Features</h2>
          <ul>
            <li>Barcode Scanner - Scan IMEI, serial numbers, QR codes instantly</li>
            <li>Offline Mode - Check items without internet connection</li>
            <li>3-Second Verification - Fastest stolen item checker app</li>
            <li>Free Download - 2 free searches, no credit card required</li>
            <li>iOS and Android - Works on iPhone, iPad, Android phones, tablets</li>
            <li>Multiple Item Types - Phones, cars, electronics, bikes, guns</li>
          </ul>
          
          <h2>How to Download SafeOrStolen Stolen Item Checker App</h2>
          <p>
            To download the SafeOrStolen app: Visit safeorstolen.com/app on your iOS or Android device and click "Install App". 
            The stolen item verification app downloads directly to your home screen. No App Store or Google Play required. 
            Download the app now for free IMEI checking, VIN verification, serial number scanning, and barcode stolen goods checking. 
            Works on iPhone, Android phones, tablets, and all mobile devices. Download safeorstolen app today.
          </p>
          
          <h2>Competitor Comparison</h2>
          <p>
            <strong>CheckMEND:</strong> No mobile app, web only, slow verification<br/>
            <strong>IMEI.info:</strong> No mobile app, basic web checker only<br/>
            <strong>Swappa:</strong> No mobile app, website only, limited to phones<br/>
            <strong>Autocheck/Carfax:</strong> No mobile app, expensive vehicle reports only<br/>
            <strong>SafeOrStolen:</strong> Full mobile app, barcode scanning, offline mode, all item types, FREE
          </p>
        </div>
      </noscript>


      <TopNavigation />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Mobile App', href: '/app' }]} />
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                The Only Stolen Item Verification App
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Download SafeOrStolen - Verify if Any Item is Stolen Before You Buy
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                <strong>CheckMEND Has NO App</strong> | <strong>IMEI.info Has NO App</strong> | <strong>Swappa Has NO App</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Free mobile app to check phones, vehicles, electronics, firearms, and more. 
                Instant barcode scanning. Works offline. Covers all 50 US states.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="/app">
                    <Download className="w-5 h-5" />
                    Install App (iOS/Android)
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/verify">
                    Try Web Version
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Check Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Check if Any Item is Stolen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-primary" />
                    📱 Phones & Mobile Devices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verify stolen phones using IMEI checker. Check if iPhone or Android device is stolen before buying from Facebook Marketplace, Craigslist, or OfferUp.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-6 h-6 text-primary" />
                    🚗 Vehicles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check if a car is stolen using VIN lookup. Verify used cars, motorcycles, boats, RVs before purchase. Works for all 50 states.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scan className="w-6 h-6 text-primary" />
                    💻 Electronics & Appliances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verify stolen laptops, tablets, cameras, TVs, power tools using serial number verification. Scan barcodes instantly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    🔫 Firearms & Specialty Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check firearm serial numbers, bicycles, musical instruments, jewelry. Verify any item before buying secondhand.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">When to Use SafeOrStolen</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex gap-4 items-start border-l-4 border-primary pl-6 py-2">
                <ShoppingCart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Before Buying on Facebook Marketplace</h3>
                  <p className="text-muted-foreground">
                    Meeting a seller for a phone or laptop? Use our app to verify the IMEI or serial number isn't stolen before handing over cash. Takes 3 seconds while you're standing there.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-4 border-primary pl-6 py-2">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Craigslist & OfferUp Meetups</h3>
                  <p className="text-muted-foreground">
                    Protect yourself when buying used items from strangers. Scan the barcode or check the serial number on the spot. If it's stolen, walk away.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-4 border-primary pl-6 py-2">
                <Car className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Buying a Used Car Privately</h3>
                  <p className="text-muted-foreground">
                    Before signing any papers or transferring money, verify the VIN isn't stolen. Check if the vehicle has been reported stolen in any of the 50 states.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-4 border-primary pl-6 py-2">
                <Store className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Pawn Shop Owners</h3>
                  <p className="text-muted-foreground">
                    Verify every item before purchasing. Avoid legal trouble by checking if items are stolen. Fast verification helps you process more items.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-4 border-primary pl-6 py-2">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secondhand Stores & Resellers</h3>
                  <p className="text-muted-foreground">
                    Check inventory before listing items for resale. Verify phones, electronics, and tools aren't stolen. Protect your business reputation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why SafeOrStolen is the Best Stolen Item Checker App</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-green-500/30 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    SafeOrStolen Has Mobile App
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ Full iOS and Android app</li>
                    <li>✅ Barcode scanner built-in</li>
                    <li>✅ Works offline</li>
                    <li>✅ 3-second verification</li>
                    <li>✅ Free to download</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-500/30 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chrome className="w-6 h-6 text-red-600" />
                    CheckMEND/IMEI.info/Swappa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>❌ No mobile app</li>
                    <li>❌ No barcode scanner</li>
                    <li>❌ Requires internet</li>
                    <li>❌ Slow verification (30+ seconds)</li>
                    <li>❌ Expensive ($5-10 per check)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Stolen Item Checker App Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <Scan className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Barcode Scanner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Scan IMEI, serial numbers, and QR codes instantly. No manual typing required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Wifi className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Offline Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check items without internet. Perfect for pawn shops and remote locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>3-Second Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fastest verification in the industry. CheckMEND takes 30+ seconds.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Multiple Item Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Phones, cars, bikes, electronics, guns. All in one app.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Apple className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>iOS & Android</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Works on iPhone, iPad, Android phones and tablets. One app for all devices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Download className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Free Download</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    2 free searches included. No credit card required to download.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Download */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">How to Check if Something is Stolen</h2>
              <Card>
                <CardContent className="pt-6">
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="font-bold mb-1">Download the SafeOrStolen App</h3>
                        <p className="text-muted-foreground">Visit this page on your mobile device and tap "Install App". Works on iPhone, Android, and desktop browsers. No app store required.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="font-bold mb-1">Scan Barcode or Enter Identifier</h3>
                        <p className="text-muted-foreground">Use the built-in barcode scanner to instantly scan any item. Or manually type the IMEI (phones), VIN (vehicles), or serial number (electronics).</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="font-bold mb-1">Get Instant Results</h3>
                        <p className="text-muted-foreground">See immediately if the item is clean, stolen, or flagged. Results appear in 3 seconds. Works offline once installed.</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Geographic Coverage Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Check Stolen Items Anywhere in the US</h2>
            <p className="text-lg text-center text-muted-foreground mb-8">
              SafeOrStolen works in all 50 states and covers major cities nationwide:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-sm">
              <div className="space-y-2">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Check stolen items in <strong>Los Angeles</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Verify IMEI in <strong>New York</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> VIN lookup in <strong>Chicago</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Stolen phone check in <strong>Houston</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Serial verification in <strong>Phoenix</strong></p>
              </div>
              
              <div className="space-y-2">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Check items in <strong>San Francisco</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> IMEI check in <strong>Philadelphia</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> VIN check in <strong>Miami</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Verify items in <strong>Denver</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Check items in <strong>Nashville</strong></p>
              </div>
              
              <div className="space-y-2">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Stolen check in <strong>Seattle</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Verify items in <strong>Las Vegas</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Check in <strong>Washington D.C.</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> IMEI check in <strong>Boston</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Verify in <strong>New Orleans</strong></p>
              </div>
              
              <div className="space-y-2">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Check items in <strong>Dallas</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> VIN lookup in <strong>Portland</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Verify in <strong>Detroit</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Check in <strong>Salt Lake City</strong></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> IMEI check in <strong>Atlanta</strong></p>
              </div>
            </div>
            
            <p className="mt-8 text-center font-semibold text-muted-foreground">
              Plus every other city, town, and state across America. Download once, use everywhere.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I check if a phone is stolen?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Download the SafeOrStolen app and enter the phone's IMEI number (dial *#06# to find it). Our app checks multiple stolen phone databases including carrier blacklists and police reports. Results appear in 3 seconds showing if the phone is clean, stolen, or blacklisted.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do I verify a VIN isn't stolen?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use our VIN checker feature in the app. Enter the 17-character VIN found on the vehicle's dashboard or door frame. We check stolen vehicle databases from all 50 states to verify if the car, truck, motorcycle, or boat has been reported stolen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Does it work for buying items on Facebook Marketplace?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. SafeOrStolen is perfect for Facebook Marketplace, Craigslist, OfferUp, and Letgo purchases. When meeting a seller, use the app to scan the item's barcode or verify its IMEI/serial number before paying. If it's stolen, you'll know immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I check serial numbers for electronics?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. SafeOrStolen verifies serial numbers for laptops, tablets, cameras, power tools, TVs, and other electronics. Use our barcode scanner for instant checking or manually enter the serial number. We check against stolen property databases nationwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What makes SafeOrStolen better than CheckMEND or IMEI.info?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    CheckMEND charges $3.99 per check and doesn't have a mobile app. IMEI.info also lacks an app. SafeOrStolen is the ONLY service with a mobile app, barcode scanning, and offline capability. We're faster (3 seconds vs 30+ seconds) and include free checks to try the service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Does the app work offline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. Once you install the SafeOrStolen app, core features work offline. This is crucial when meeting sellers in parking lots or areas with poor cell signal. You can verify items without internet and see results immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is the app really free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. Download the app for free and get 2 verification checks to try the service. See exactly how stolen item checking works before deciding to upgrade for unlimited checks. No credit card required to start.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What items can I check?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Phones (IMEI check), vehicles (VIN lookup), electronics (serial numbers), firearms, boats, bicycles, motorcycles, RVs, musical instruments, power tools, cameras, jewelry, and any item with a barcode or unique identifier. If it has a number, we can check if it's stolen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Yourself From Buying Stolen Items</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download SafeOrStolen now. Free to try. Works offline. Covers all 50 states.
              Used by buyers, sellers, pawn shops, and resellers nationwide to verify items before purchase.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Download SafeOrStolen App FREE
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/verify">
                  Try Web Version First
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AppPage;
