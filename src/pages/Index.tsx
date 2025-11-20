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
      "name": "Stolen Item Verification Service",
      "description": "Free verification service to check if items are stolen using IMEI, VIN, or serial numbers",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Stolen Item Verification Service",
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://safeorstolen.com"
      }
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
      {/* SEO Optimization */}
      <PageSEO
        title="Free Stolen Item Checker - Verify IMEI, VIN, Serial Numbers | SafeOrStolen"
        description="Check if phones, cars, electronics are stolen FREE. Instant IMEI, VIN verification. Free Carfax alternative. Verify items from eBay, Facebook Marketplace, OfferUp, auctions, pawn shops. Mobile app available. 2 FREE searches."
        keywords="free stolen item checker, IMEI check, VIN verification, carfax alternative free, ebay verification, facebook marketplace safety, offerup verification, serial number lookup, verify phone stolen, check car stolen, stolen goods database, marketplace safety, pawn shop verification"
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