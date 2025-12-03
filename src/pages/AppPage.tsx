import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Smartphone, Scan, Wifi, Shield, Zap, Download, Apple, Chrome, MapPin, ShoppingCart, Car, Store, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppPage = () => {
  // HowTo Schema for Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check if an Item is Stolen Before You Buy",
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

  // Enhanced MobileApplication Schema
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - Stolen Item Checker App",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": ["Android", "iOS", "Web"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "description": "Free mobile app to verify if any item is stolen before you buy. Check phones (IMEI), vehicles (VIN), electronics (serial numbers), firearms, boats, bikes, and more. Instant barcode scanning works offline.",
    "downloadUrl": "https://safeorstolen.com/app",
    "installUrl": "https://safeorstolen.com/app",
    "screenshot": "https://safeorstolen.com/og-image.jpg",
    "softwareVersion": "2.0",
    "featureList": [
      "Barcode scanner for instant IMEI/serial verification",
      "IMEI checker for stolen phones",
      "VIN lookup for stolen vehicles",
      "Serial number verification for electronics",
      "Works offline after installation",
      "Covers all 50 US states",
      "Free verification checks included",
      "3-second stolen verification results"
    ]
  };

  // WebApplication with DownloadAction Schema
  const downloadActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SafeOrStolen Web App",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "url": "https://safeorstolen.com/app",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "potentialAction": {
      "@type": "DownloadAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://safeorstolen.com/app",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      }
    }
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
          "text": "Yes! Download the SafeOrStolen app FREE for iOS and Android. The app includes 2 free searches with no credit card required. Additional searches are available through affordable plans starting at $4.99/month."
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

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "alternateName": ["Safe Or Stolen", "SOS", "SafeOrStolen.com"],
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "description": "The only mobile app to verify if items are stolen before buying. IMEI checker, VIN lookup, serial number verification.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://facebook.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": "English"
    }
  };

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

  const appSchema = [
    mobileAppSchema, 
    howToSchema, 
    downloadActionSchema, 
    faqSchema,
    softwareAppSchema,
    organizationSchema,
    breadcrumbSchema,
    featuresListSchema,
    serviceSchema,
    webPageSchema
  ];

  return (
    <>
      <PageSEO
        title="Download Free Stolen Item Checker App | Verify IMEI, VIN, Serial Numbers"
        description="Free mobile app to check if any item is stolen before you buy. Verify phones (IMEI), vehicles (VIN), electronics, firearms. Instant barcode scanning. Works offline in all 50 US states."
        keywords="stolen item checker, verify stolen phone, check IMEI stolen, VIN stolen check, serial number verification, stolen item app, barcode scanner stolen, check before buying, Facebook Marketplace stolen check, stolen verification app download"
        canonical="/app"
        structuredData={appSchema}
      />

      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Download SafeOrStolen App - Best Stolen Item Checker App 2025</h1>
          <p>
            Download the SafeOrStolen mobile app - the ONLY stolen item verification app with barcode scanning and offline mode. 
            CheckMEND has NO app. IMEI.info has NO app. Swappa has NO app. We're the first stolen goods checker app 
            with instant 3-second verification. Download FREE for iOS and Android. Best IMEI checker app, VIN checker app, 
            serial number scanner, and stolen item verification tool. 2 free searches included. Works without internet.
          </p>
          
          <h2>Check Stolen Items Anywhere in the US</h2>
          <p>
            SafeOrStolen works in all 50 states including: Check stolen items in Los Angeles, verify IMEI in New York, 
            VIN lookup in Chicago, stolen phone check in Houston, serial verification in Phoenix, check items in San Francisco,
            IMEI check in Philadelphia, VIN check in Miami, verify in Denver, check items in Nashville, stolen check in Seattle,
            verify items in Las Vegas, check in Washington D.C., IMEI check in Boston, verify in New Orleans, check items in Dallas,
            VIN lookup in Portland, verify in Detroit, check in Salt Lake City, IMEI check in Atlanta.
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
                  <a href="/app/download">
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
                <a href="/app/download">
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
    </>
  );
};

export default AppPage;
