import { Suspense, lazy, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import { UnifiedSEOOptimizer } from '@/components/seo/UnifiedSEOOptimizer';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';
import { getHomePageStructuredData } from '@/components/home/HomeStructuredData';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { SEOContentSection } from '@/components/seo/SEOContentSection';
import { InternalLinkingStrategy } from '@/components/seo/InternalLinkingStrategy';
import { ConversionTracking } from '@/components/conversion/ConversionTracking';
import { LiveActivityFeed } from '@/components/conversion/LiveActivityFeed';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TrustSignalsSection } from '@/components/home/TrustSignalsSection';
import { ContactFormSection } from '@/components/home/ContactFormSection';
import { EnhancedFAQSection } from '@/components/home/EnhancedFAQSection';

// Lazy load VerifiedProduct component
const VerifiedProduct = lazy(() => import('@/components/VerifiedProduct'));

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  return (
    <>
      {/* Essential tracking only */}
      <ConversionTracking />
      
      {/* Core SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      <UnifiedSEOOptimizer
        title="Check if Stolen FREE | Mobile App | Reduce Crime | SafeOrStolen"
        description="FREE mobile verification app protecting buyers & sellers from stolen goods. Instant checks for phones, cars, electronics. Join our mission to reduce crime globally—no other service offers mobile-first verification."
        keywords="check if stolen, mobile app verification, IMEI lookup, VIN check, reduce crime, buyer protection, seller protection, marketplace safety"
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