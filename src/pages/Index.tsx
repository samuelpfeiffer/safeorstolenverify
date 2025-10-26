import { Suspense, lazy } from 'react';
import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { SEOContentSection } from '@/components/seo/SEOContentSection';
import { InternalLinkingStrategy } from '@/components/seo/InternalLinkingStrategy';
import { ConversionTracking } from '@/components/conversion/ConversionTracking';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TrustSignalsSection } from '@/components/home/TrustSignalsSection';
import { ContactFormSection } from '@/components/home/ContactFormSection';
import { EnhancedFAQSection } from '@/components/home/EnhancedFAQSection';
import { QuestionBasedContent } from '@/components/home/QuestionBasedContent';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { VerifiedSiteBadge } from '@/components/trust/VerifiedSiteBadge';

// Lazy load VerifiedProduct component
const VerifiedProduct = lazy(() => import('@/components/VerifiedProduct'));

const Index = () => {
  const [searchParams] = useSafeSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen - Free Stolen Item Checker",
      "alternateName": "Safe or Stolen",
      "url": "https://safeorstolen.com",
      "description": "Free stolen item verification platform. Check phones, cars, electronics using IMEI, VIN, serial numbers. 4 free searches, 50M+ database records.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Verification App",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": ["iOS", "Android", "Web"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "12500"
      }
    }
  ];

  return (
    <>
      {/* SEO Optimization */}
      <PageSEO
        title="Free Stolen Item Checker - Verify IMEI, VIN, Serial Numbers | SafeOrStolen"
        description="Check if items are stolen before buying. Free IMEI, VIN, serial number verification. Protect yourself from purchasing stolen phones, cars, electronics. 4 FREE searches."
        keywords="free stolen item checker, IMEI check, VIN verification, serial number lookup, verify phone stolen, check car stolen, stolen goods database"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <AISearchOptimizer 
        page="home" 
        context="stolen-goods-verification-platform"
        primaryKeywords={['free stolen item checker', 'IMEI VIN verification', 'check if stolen before buying']}
      />
      
      {/* Essential tracking only */}
      <ConversionTracking />
      
      {/* Core SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      
      {/* Trust header bar */}
      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* Hero with search bar - THE CORE VALUE */}
        <Hero />
        
        {/* Floating verified badge */}
        <VerifiedSiteBadge variant="floating" />
        
        {/* Trust signals immediately */}
        <TrustSignalsSection />
        
        {/* Simple how it works */}
        <HowItWorks />
        
        {/* Question-based content for SEO */}
        <QuestionBasedContent />
        
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
    </>
  );
};

export default Index;