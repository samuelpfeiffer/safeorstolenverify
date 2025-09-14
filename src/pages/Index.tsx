
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
import { AdvancedTechnicalSEO } from '@/components/seo/AdvancedTechnicalSEO';
import { LocalBusinessSEO } from '@/components/seo/LocalBusinessSEO';
import { EnhancedBreadcrumbs } from '@/components/seo/EnhancedBreadcrumbs';
import { WebVitalsTracker } from '@/components/seo/WebVitalsTracker';
import { VoiceSearchFAQ } from '@/components/seo/VoiceSearchFAQ';
import { AISearchOptimization } from '@/components/seo/AISearchOptimization';
import { FeaturedSnippetsOptimizer } from '@/components/seo/FeaturedSnippetsOptimizer';
import { GoogleRankingBooster } from '@/components/seo/GoogleRankingBooster';
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
      {/* Ultimate SEO Stack for #1 Rankings */}
      <GoogleRankingBooster />
      <AISearchOptimization 
        pageTitle="SafeOrStolen - Free IMEI Check & VIN Verification | Prevent Stolen Goods Fraud 2024"
        pageDescription="🔒 Instantly verify if phones, cars, electronics are stolen before buying secondhand. Free IMEI checker, VIN lookup, serial verification. Protect yourself from fraud on eBay, Facebook Marketplace, Craigslist. 4 free checks, then $9.99/month unlimited access."
        keywords={[
          "free IMEI check", "stolen phone verification", "VIN lookup free", "verify stolen device", 
          "secondhand marketplace safety", "eBay fraud prevention", "Facebook marketplace protection",
          "Craigslist safety check", "device verification service", "stolen goods checker"
        ]}
      />
      <FeaturedSnippetsOptimizer />
      <WebVitalsTracker enableConsoleLogging={false} enableAnalytics={true} />
      <AdvancedTechnicalSEO 
        pageType="homepage"
        customKeywords={[
          "safeorstolen", "stolen goods verification", "marketplace protection",
          "IMEI fraud prevention", "VIN theft check", "serial number authentication",
          "free IMEI check", "stolen phone verification", "VIN lookup free", "verify stolen device"
        ]}
      />
      <LocalBusinessSEO />
      <CoreWebVitalsOptimizer />
      <CriticalSEOFixes pageType="homepage" />
      <GlobalCanonicalFix />
      <HubSpotTracker portalId="YOUR_PORTAL_ID" />
      
      {/* Legacy SEO - kept for compatibility */}
      <UnifiedSEO
        title="Free IMEI Check - Verify Stolen Phone & Device Status | SafeOrStolen"
        description="Instantly check if phones, cars, bikes are stolen with our free IMEI checker & VIN lookup. Protect yourself from stolen device scams. 4 free checks, then $9.99/month unlimited."
        keywords="free IMEI check, verify stolen phone, VIN lookup, check if device stolen, stolen phone checker, device verification service, marketplace safety"
        canonical="/"
      />
      <AdvancedSchemaMarkup pageType="homepage" />
      
      {/* Enhanced Breadcrumbs */}
      <div className="container mx-auto px-4 pt-4">
        <EnhancedBreadcrumbs showHome={false} />
      </div>
      
      <Hero />
      <SponsorsStrip />
      
      {/* Enhanced FAQ Section */}
      <div className="container mx-auto px-4">
        <VoiceSearchFAQ pageType="general" />
      </div>
      
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
