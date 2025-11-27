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
import { WhatYouCanVerify } from '@/components/home/WhatYouCanVerify';
import { WhyChooseSafeOrStolen } from '@/components/home/WhyChooseSafeOrStolen';

const Index = () => {
  const [searchParams] = useSafeSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/logo.png",
      "description": "Crime Reduction Ecosystem - Verify if second-hand items (phones, vehicles, firearms, electronics) are stolen before buying or selling.",
      "founder": {
        "@type": "Person",
        "name": "Sam Pfeiffer"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@safeorstolen.com",
        "contactType": "Customer Support"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/verify?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": ["Android", "iOS", "Web"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "The only mobile app to verify if items are stolen. Instant barcode scanning, offline mode, 3-second verification."
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
        title="Free IMEI Checker, VIN Lookup, Serial Number Verification | Check If Stolen in 3 Seconds"
        description="FREE IMEI checker, VIN lookup, serial number verification. Check if phones, cars, electronics are stolen before buying. 50M+ database searches. Mobile app with barcode scanner. 2 free checks. Better than CheckMEND/Carfax."
        keywords="free imei checker, free vin check, serial number lookup, check if phone stolen free, vin check stolen vehicle, imei check online, stolen item checker, verify serial number, safe or stolen, safeorstolen"
        canonical="/"
        structuredData={homeStructuredData}
      />
      
      <TrustHeaderBar />
      
      {/* Exit Intent Popup - Shows when user tries to leave */}
      <ExitIntentPopup />
      
      <div className="min-h-screen">
        <Hero />
        <PressMediaSection />
        <WhatYouCanVerify />
        <WhyChooseSafeOrStolen />
        <CompactTestimonials />
        <CompactMobileAppCTA />
        <TrustSignals />
      </div>
    </>
  );
};

export default Index;