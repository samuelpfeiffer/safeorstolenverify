
import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { CompetitiveKeywords } from '@/components/seo/CompetitiveKeywords';
import { LocalSEO } from '@/components/seo/LocalSEO';
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
      <HubSpotTracker portalId="YOUR_PORTAL_ID" />
      <EnhancedSEOHead
        title="Check if Stolen: Free IMEI, VIN, Serial Number Verification | Safe or Stolen"
        description="Verify if items are stolen before buying. Free IMEI, VIN, serial number lookup. Check phones, cars, electronics against global stolen goods databases instantly."
        keywords="check if stolen, IMEI check free, VIN check stolen, serial number lookup, verify before you buy, stolen goods verification, check stolen items, is it stolen, stolen phone check, stolen car check, free stolen check"
        canonical="/"
        additionalSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Safe or Stolen",
            "url": "https://safeorstolen.com",
            "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
            "description": "Real-time stolen goods verification platform protecting consumers from fraud",
            "sameAs": [
              "https://twitter.com/safeorstolen"
            ],
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "Safe or Stolen Team"
              }
            ],
            "knowsAbout": [
              "Stolen goods verification",
              "IMEI checking",
              "VIN verification", 
              "Serial number checking",
              "Marketplace safety",
              "Fraud prevention"
            ]
          },
          {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I check if something is stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Go to safeorstolen.com, enter the IMEI, VIN, or serial number, and run a real-time check against global sources to see if the item is reported stolen or lost." }
            },
            {
              "@type": "Question",
              name: "Where to check if something is stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Use SafeOrStolen.com to verify any IMEI, VIN, or serial number. We aggregate trusted data to confirm if an item is flagged as stolen, lost, or clean." }
            },
            {
              "@type": "Question",
              name: "Can I check if something is stolen before I buy it?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. On safeorstolen.com you can verify the identifier before purchase to avoid buying stolen goods and protect yourself from fraud." }
            },
            {
              "@type": "Question",
              name: "How do I check if something used is stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Enter the device or product identifier on SafeOrStolen.com and get an instant result with a clear stolen/lost status and confidence rating." }
            },
            {
              "@type": "Question",
              name: "How to check stolen items or verify it’s not stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Search the IMEI, VIN, or serial at safeorstolen.com. If the result is clean, you can proceed more confidently; if flagged, avoid the purchase and report it." }
            },
            {
              "@type": "Question",
              name: "I bought a used item and want to see if it’s legitimate. Should I buy this or not?",
              acceptedAnswer: { "@type": "Answer", text: "Run a check on safeorstolen.com. If marked stolen or suspicious, do not buy and contact the seller/marketplace. If clean, keep proof of your check for your records." }
            }
          ]
        }]}
      />
      <CompetitiveKeywords pageType="homepage" />
      <LocalSEO />
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
