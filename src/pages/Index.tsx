
import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { UnifiedSEO } from '@/components/seo/UnifiedSEO';
import { GlobalCanonicalFix } from '@/components/seo/GlobalCanonicalFix';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';
import { HubSpotTracker } from '@/components/marketing/HubSpotTracker';
import { useMarketingAutomation } from '@/hooks/useMarketingAutomation';


const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  const isCached = searchParams.get('cached') === 'true';
  const { trackPageView } = useMarketingAutomation();

  useEffect(() => {
    // Track homepage visit
    trackPageView('/');
  }, [trackPageView]);

  return (
    <div className="min-h-screen">
      <GlobalCanonicalFix />
      <HubSpotTracker portalId="YOUR_PORTAL_ID" />
      <UnifiedSEO
        title="Check if Stolen: Free IMEI, VIN, Serial Number Verification | Safe or Stolen"
        description="Verify if items are stolen before buying. Free IMEI, VIN, serial number lookup. Check phones, cars, electronics against global stolen goods databases instantly."
        keywords="check if stolen, IMEI check free, VIN check stolen, serial number lookup, verify before you buy, stolen goods verification, check stolen items, is it stolen, stolen phone check, stolen car check, free stolen check"
        canonical="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Safe or Stolen",
            "url": "https://safeorstolen.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://safeorstolen.com/dashboard?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I check if something is stolen?",
                "acceptedAnswer": { "@type": "Answer", "text": "Go to safeorstolen.com, enter the IMEI, VIN, or serial number, and run a real-time check against global sources to see if the item is reported stolen or lost." }
              },
              {
                "@type": "Question",
                "name": "Where to check if something is stolen?",
                "acceptedAnswer": { "@type": "Answer", "text": "Use SafeOrStolen.com to verify any IMEI, VIN, or serial number. We aggregate trusted data to confirm if an item is flagged as stolen, lost, or clean." }
              },
              {
                "@type": "Question",
                "name": "Can I check if something is stolen before I buy it?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. On safeorstolen.com you can verify the identifier before purchase to avoid buying stolen goods and protect yourself from fraud." }
              }
            ]
          }
        ]}
      />
      <Hero />
      <SponsorsStrip />
      
      {(verificationId || serialNumber) && (
        <Suspense fallback={
          <div className="py-20 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto mb-4"></div>
            <p>Loading verification results...</p>
          </div>
        }>
          <VerifiedProduct />
        </Suspense>
      )}

    </div>
  );
};

export default Index;
