import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
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
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TrustSignalsSection } from '@/components/home/TrustSignalsSection';
import { ContactFormSection } from '@/components/home/ContactFormSection';
import { EnhancedFAQSection } from '@/components/home/EnhancedFAQSection';

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
      {/* Essential tracking only */}
      <ConversionTracking />
      
      {/* Core SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      <UnifiedSEOOptimizer
        title="Check if Stolen FREE | Instant Verification | SafeOrStolen"
        description="FREE instant verification. Check if phones, cars, laptops, tools are stolen. Verify items on Facebook Marketplace, OfferUp, Craigslist before buying. 4 free checks to start."
        keywords="check if stolen, IMEI lookup, VIN check, verify serial number, marketplace verification"
        canonical="/"
        structuredData={getHomePageStructuredData()}
        type="website"
      />
      
      <div className="min-h-screen">
        {/* Hero with search bar - THE CORE VALUE */}
        <Hero />
        
        {/* Trust signals immediately */}
        <TrustSignalsSection />
        
        {/* Simple how it works */}
        <HowItWorks />
        
        {/* Social proof */}
        <TestimonialsSection />
        
        {/* Simple CTA */}
        <AppDownloadSection />
        
        {/* Progressive Disclosure: Hide advanced content below fold */}
        <details className="container mx-auto px-4 py-8 max-w-4xl">
          <summary className="text-center text-muted-foreground cursor-pointer hover:text-foreground transition-colors text-sm">
            Show More Information ▼
          </summary>
          <div className="mt-8 space-y-12">
            <EnhancedFAQSection />
            <ContactFormSection />
            <SEOContentSection />
            <InternalLinkingStrategy />
          </div>
        </details>
        
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
      
      {/* Subtle conversion helpers */}
      <LiveActivityFeed />
    </>
  );
};

export default Index;