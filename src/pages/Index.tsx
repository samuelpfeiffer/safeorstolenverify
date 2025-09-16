
import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { AIOptimizedSEO } from '@/components/seo/AIOptimizedSEO';
import { CoreWebVitalsOptimizer } from '@/components/seo/CoreWebVitalsOptimizer';
import { AdvancedSEOOptimizations } from '@/components/seo/AdvancedSEOOptimizations';
import { GlobalCanonicalFix } from '@/components/seo/GlobalCanonicalFix';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';
import { HubSpotTracker } from '@/components/marketing/HubSpotTracker';
import { useMarketingAutomation } from '@/hooks/useMarketingAutomation';
import { createFAQSchema, createOrganizationSchema, createServiceSchema, createWebsiteSchema } from '@/utils/seo/structuredData';
import { TrustSignals } from '@/components/seo/TrustSignals';
import SecurityBadges from '@/components/seo/SecurityBadges';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';


const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  const isCached = searchParams.get('cached') === 'true';
  const { trackPageView } = useMarketingAutomation();

  useEffect(() => {
    trackPageView('/');
  }, [trackPageView]);

  // Enhanced structured data for AI understanding
  const homePageStructuredData = [
    createWebsiteSchema(),
    createOrganizationSchema(),
    createServiceSchema(),
    createFAQSchema(),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Safe or Stolen Verification Platform",
      "description": "AI-powered stolen goods verification platform protecting consumers from fraud",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free basic verification service"
      },
      "featureList": [
        "Real-time IMEI verification",
        "VIN number checking", 
        "Serial number validation",
        "Global stolen goods database access",
        "Instant verification results",
        "Consumer fraud protection",
        "Mobile and web access"
      ],
      "screenshot": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <CoreWebVitalsOptimizer />
      <AdvancedSEOOptimizations />
      <GlobalCanonicalFix />
      <HubSpotTracker portalId="YOUR_PORTAL_ID" />
      
      <AIOptimizedSEO
        title="Check if Stolen: Free IMEI, VIN, Serial Number Verification | Safe or Stolen"
        description="Verify if items are stolen before buying. Free IMEI, VIN, serial number lookup. Check phones, cars, electronics against global stolen goods databases instantly. Protect yourself from fraud."
        keywords="check if stolen, IMEI check free, VIN check stolen, serial number lookup, verify before you buy, stolen goods verification, check stolen items, is it stolen, stolen phone check, stolen car check, free stolen check, how to check if something is stolen, where to check if something is stolen, can I check if something is stolen before I buy it, AI fraud detection, real-time verification"
        canonical="/"
        type="website"
        structuredData={homePageStructuredData}
        aiOptimized={true}
      />
      
      <Hero />
      <SponsorsStrip />
      <TrustSignals />
      <TestimonialsSection />
      <SecurityBadges />
      
      {(verificationId || serialNumber) && (
        <Suspense fallback={
          <div className="py-20 text-center">
            <div className="loading-spinner mx-auto mb-4"></div>
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
