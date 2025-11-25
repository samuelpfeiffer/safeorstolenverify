import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { PressMediaSection } from '@/components/home/PressMediaSection';
import { CompactTestimonials } from '@/components/home/CompactTestimonials';
import { CompactMobileAppCTA } from '@/components/home/CompactMobileAppCTA';
import { TrustSignals } from '@/components/seo/TrustSignals';
import { ExitIntentPopup } from '@/components/conversion/ExitIntentPopup';
import { MarketplaceSafetySection } from '@/components/home/MarketplaceSafetySection';
import { WhyCheckBeforeBuying } from '@/components/home/WhyCheckBeforeBuying';
import { WhatYouCanVerify } from '@/components/home/WhatYouCanVerify';
import { HowSafeOrStolenWorksSection } from '@/components/home/HowSafeOrStolenWorksSection';
import { WhyChooseSafeOrStolen } from '@/components/home/WhyChooseSafeOrStolen';
import { HomepageFAQ } from '@/components/home/HomepageFAQ';

const Index = () => {
  const [searchParams] = useSafeSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  // Page-specific structured data only (WebSite and Organization are in MasterSEO)
  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Verification App",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": ["iOS", "Android", "Web"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://safeorstolen.com/pricing"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IMEI Verification Service",
      "description": "Check if phones are stolen using IMEI numbers against global stolen device databases",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Phone Verification Service",
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://safeorstolen.com/check-phone"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "VIN Verification Service",
      "description": "Check if vehicles are stolen using VIN numbers against law enforcement databases",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Vehicle Verification Service",
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://safeorstolen.com/check-car"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Serial Number Verification Service",
      "description": "Verify electronics and equipment using serial numbers against stolen property registries",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Electronics Verification Service",
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://safeorstolen.com/check-electronics"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I check if an item is stolen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the IMEI, VIN, or serial number into SafeOrStolen's verification tool. Results appear in 3 seconds showing if the item is stolen or safe."
          }
        },
        {
          "@type": "Question",
          "name": "Is SafeOrStolen free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SafeOrStolen offers 2 free verification searches. Additional searches available with paid plans starting at $9.99/month."
          }
        },
        {
          "@type": "Question",
          "name": "What items can I verify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can verify phones (IMEI), vehicles (VIN), electronics (serial numbers), bicycles, firearms, and any item with a unique identifier."
          }
        },
        {
          "@type": "Question",
          "name": "Does SafeOrStolen have a mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SafeOrStolen is the ONLY stolen item verification service with a mobile app for iOS and Android. Download free at safeorstolen.com/mobile-app"
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if an Item is Stolen",
      "description": "Step-by-step guide to verify if phones, cars, electronics are stolen before buying",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Find the Identifier",
          "text": "Locate the IMEI (phones), VIN (vehicles), or serial number (electronics) on the item you want to check."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Enter Number",
          "text": "Type or scan the identifier into SafeOrStolen's verification tool at safeorstolen.com/verify"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Get Results",
          "text": "Receive instant results in 3 seconds showing if the item is stolen, safe, or has alerts."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Make Decision",
          "text": "If safe, proceed with purchase. If stolen, report to police and avoid transaction."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com/"
      }]
    }
  ];

  return (
    <>
      {/* Bot-visible content for search engines */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Free Stolen Item Checker - Verify IMEI, VIN, Serial Numbers</h1>
          <p>
            SafeOrStolen is the world's fastest stolen item verification service. Check if phones, cars, 
            electronics, bikes, and other items are stolen before you buy. Free IMEI checker, free VIN lookup, 
            and serial number verification in just 3 seconds.
          </p>
          
          <h2>Why Check Before You Buy?</h2>
          <p>
            Every year, $13 billion worth of stolen goods are sold to unsuspecting buyers. Don't become a victim. 
            Use our free stolen item checker to verify IMEI numbers for phones, VIN numbers for cars, and serial 
            numbers for electronics. Protect yourself from financial loss and legal trouble.
          </p>
          
          <h2>What You Can Verify</h2>
          <ul>
            <li><strong>Phones & Tablets:</strong> Free IMEI checker for iPhone, Samsung, Android devices. Verify against carrier blacklists and stolen phone databases.</li>
            <li><strong>Vehicles:</strong> Free VIN check for cars, trucks, motorcycles. Better than Carfax for stolen vehicle verification.</li>
            <li><strong>Electronics:</strong> Check serial numbers for laptops, cameras, gaming consoles, tools, and more.</li>
            <li><strong>Bicycles:</strong> Verify bike frame numbers against BikeIndex and police databases.</li>
          </ul>
          
          <h2>How SafeOrStolen Works</h2>
          <ol>
            <li><strong>Enter ID Number:</strong> Input IMEI, VIN, or serial number</li>
            <li><strong>Instant Search:</strong> We check 50M+ records in 3 seconds</li>
            <li><strong>Get Results:</strong> Know if it's safe or stolen</li>
            <li><strong>Buy Confidently:</strong> Make informed purchase decisions</li>
          </ol>
          
          <h2>Why Choose SafeOrStolen?</h2>
          <ul>
            <li><strong>Only Service with Mobile App:</strong> Download for iOS and Android</li>
            <li><strong>Fastest Verification:</strong> Results in 3 seconds, not minutes</li>
            <li><strong>Most Comprehensive:</strong> IMEI + VIN + Serial + Bike in one place</li>
            <li><strong>2 Free Searches:</strong> No credit card required</li>
            <li><strong>Global Coverage:</strong> 150+ countries, 50M+ records</li>
            <li><strong>Privacy Focused:</strong> Your data is never sold</li>
          </ul>
          
          <h2>Marketplace Safety</h2>
          <p>
            Buying from eBay, Facebook Marketplace, OfferUp, Craigslist, or pawn shops? Always verify items 
            before purchase. Our free checker works for any secondhand marketplace. Protect yourself from 
            scams and stolen goods.
          </p>
          
          <h2>Free vs Paid Verification</h2>
          <p>
            Get 2 free searches to verify stolen items. Upgrade for unlimited searches, advanced AI analysis, 
            detailed history reports, and legal protection certificates. Starting at just $9.99/month.
          </p>
          
          <h2>Start Verification Now</h2>
          <p>
            Enter any IMEI number, VIN number, or serial number above to check if an item is stolen. 
            Our database includes law enforcement records, insurance claims, and manufacturer reports. 
            Verification takes just 3 seconds. Start your free check now!
          </p>
        </div>
      </noscript>

      {/* SEO Optimization */}
      <PageSEO
        title="Safe Or Stolen - #1 Free Stolen Item Checker | Verify IMEI, VIN, Serial Numbers"
        description="SafeOrStolen.com - The ONLY stolen item verification service with a mobile app. Check if phones, cars, electronics, guns are stolen FREE in 3 seconds. Download our mobile app for iOS/Android. Trusted by millions. 2 FREE searches."
        keywords="safe or stolen, safeorstolen, stolen item checker, IMEI check, VIN verification, free stolen check, how to check if stolen, verify serial number, stolen phone check, stolen car check, stolen gun check, mobile app stolen checker, safeorstolen.com, safeorstolen app"
        canonical="/"
        structuredData={homeStructuredData}
      />
      
      <TrustHeaderBar />
      
      {/* Exit Intent Popup - Shows when user tries to leave */}
      <ExitIntentPopup />
      
      <div className="min-h-screen">
        <Hero />
        <PressMediaSection />
        <WhyCheckBeforeBuying />
        <WhatYouCanVerify />
        <HowSafeOrStolenWorksSection />
        <MarketplaceSafetySection />
        <WhyChooseSafeOrStolen />
        <HowItWorks />
        <CompactTestimonials />
        <HomepageFAQ />
        <CompactMobileAppCTA />
        <TrustSignals />
      </div>
    </>
  );
};

export default Index;