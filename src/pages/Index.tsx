
import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { UnifiedSEO } from '@/components/seo/UnifiedSEO';
import { GlobalCanonicalFix } from '@/components/seo/GlobalCanonicalFix';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';
import { HubSpotTracker } from '@/components/marketing/HubSpotTracker';
import { CoreWebVitalsOptimizer } from '@/components/seo/CoreWebVitalsOptimizer';
import { CriticalSEOFixes } from '@/components/seo/CriticalSEOFixes';
import { InternalLinkingOptimizer } from '@/components/seo/InternalLinkingOptimizer';
import { AdvancedSchemaMarkup } from '@/components/seo/AdvancedSchemaMarkup';
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
      <CoreWebVitalsOptimizer />
      <CriticalSEOFixes pageType="homepage" />
      <GlobalCanonicalFix />
      <HubSpotTracker portalId="YOUR_PORTAL_ID" />
      <UnifiedSEO
        title="Free IMEI Check - Verify Stolen Phone & Device Status | SafeOrStolen"
        description="Instantly check if phones, cars, bikes are stolen with our free IMEI checker & VIN lookup. Protect yourself from stolen device scams. 4 free checks, then $9.99/month unlimited."
        keywords="free IMEI check, verify stolen phone, VIN lookup, check if device stolen, stolen phone checker, device verification service, marketplace safety"
        canonical="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SafeOrStolen",
            "description": "Free IMEI checker and device verification service to protect against stolen goods",
            "url": "https://safeorstolen.com",
            "potentialAction": {
              "@type": "SearchAction", 
              "target": "https://safeorstolen.com/check-phone?imei={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafeOrStolen",
            "description": "Leading platform for verifying IMEI, VIN, and Serial Numbers to protect buyers and sellers from stolen goods",
            "url": "https://safeorstolen.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Peoria",
              "addressRegion": "Arizona",
              "addressCountry": "US"
            }
          }
        ]}
      />
      <AdvancedSchemaMarkup pageType="homepage" />
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

      {/* Internal Linking for Homepage */}
      <div className="container mx-auto px-4">
        <InternalLinkingOptimizer 
          pageType="homepage" 
          currentPath="/"
        />
      </div>

    </div>
  );
};

export default Index;
