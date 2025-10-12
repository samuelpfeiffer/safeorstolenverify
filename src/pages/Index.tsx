import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { UnifiedSEOOptimizer } from '@/components/seo/UnifiedSEOOptimizer';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';
import { getHomePageStructuredData } from '@/components/home/HomeStructuredData';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { SEOContentSection } from '@/components/seo/SEOContentSection';
import { InternalLinkingStrategy } from '@/components/seo/InternalLinkingStrategy';
import { AdvertisingStrategy } from '@/components/advertising/AdvertisingStrategy';
import { AdvancedSEOManager } from '@/components/advertising/AdvancedSEOManager';
import { SocialProofEngine } from '@/components/advertising/SocialProofEngine';
import { ConversionOptimizer } from '@/components/advertising/ConversionOptimizer';
import { KeywordTargeting } from '@/components/advertising/KeywordTargeting';
import { PerformanceMonitor } from '@/components/performance/PerformanceMonitor';
import { ComprehensiveSchemaMarkup } from '@/components/seo/ComprehensiveSchemaMarkup';
import { SocialShareOptimizer } from '@/components/seo/SocialShareOptimizer';
import { ComprehensiveFAQSection } from '@/components/seo/ComprehensiveFAQSection';
import { RichContentHub } from '@/components/seo/RichContentHub';
import { useCoreWebVitals, optimizeImages, prefetchCriticalResources } from '@/hooks/useCoreWebVitals';
import { ConversionTracking } from '@/components/conversion/ConversionTracking';
import { LiveActivityFeed } from '@/components/conversion/LiveActivityFeed';
import { ArizonaTheftSection } from '@/components/arizona/ArizonaTheftSection';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  
  // Monitor Core Web Vitals for SEO
  const webVitals = useCoreWebVitals();
  
  useEffect(() => {
    // Optimize images and prefetch critical resources for better SEO
    optimizeImages();
    prefetchCriticalResources();
  }, []);

  return (
    <>
      {/* Conversion Tracking */}
      <ConversionTracking />
      
      {/* Advanced Advertising & SEO System */}
      <AdvertisingStrategy />
      <AdvancedSEOManager />
      <ConversionOptimizer />
      <KeywordTargeting />
      
      <OrganizationSchema />
      <WebSiteSchema />
      <ComprehensiveSchemaMarkup pageType="home" />
      <UnifiedSEOOptimizer
        title="Check if Stolen FREE | Verify Phones, Cars, Laptops, Tools Before Buying | SafeOrStolen Mobile App"
        description="FREE mobile app for iOS & Android. Instantly check if phones (IMEI), cars (VIN), laptops, tools, bikes are stolen. Verify items on Facebook Marketplace, OfferUp, Craigslist, eBay before buying. 2 FREE verifications (14-day trial). 127M+ items tracked."
        keywords="check if phone stolen, IMEI lookup free, VIN check stolen car, verify laptop serial number, facebook marketplace verification, offerup safety check, craigslist stolen item checker, serial number lookup, check if stolen before buying, secondhand item verification"
        canonical="/"
        structuredData={getHomePageStructuredData()}
        type="website"
      />
      
      <div className="min-h-screen">
      <Hero />
      <ArizonaTheftSection />
      <AppDownloadSection />
      
      {/* Social Sharing for Backlinks */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <SocialShareOptimizer 
          title="SafeOrStolen - FREE Mobile App to Check if Items Are Stolen"
          description="Download the #1 verification app. Check phones, cars, laptops before buying. Protect yourself from stolen goods on Facebook Marketplace, OfferUp, eBay."
          hashtags={['SafeOrStolen', 'VerifyBeforeYouBuy', 'MarketplaceSafety', 'StolenItemCheck']}
        />
      </div>
      
      <SEOContentSection />
      <RichContentHub />
      <ComprehensiveFAQSection />
      <InternalLinkingStrategy />
        
        {(verificationId || serialNumber) && (
          <Suspense fallback={
            <div className="py-20 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Loading verification results...</p>
            </div>
          }>
            <VerifiedProduct />
          </Suspense>
        )}
      </div>
      
      {/* Dynamic Conversion Elements */}
      <SocialProofEngine />
      <LiveActivityFeed />
      
      {/* Performance Monitoring (Dev Only) */}
      <PerformanceMonitor />
    </>
  );
};

export default Index;