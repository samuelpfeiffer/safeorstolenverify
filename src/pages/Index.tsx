import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { UnifiedSEOOptimizer } from '@/components/seo/UnifiedSEOOptimizer';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';
import { getHomePageStructuredData } from '@/components/home/HomeStructuredData';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { SEOContentSection } from '@/components/seo/SEOContentSection';
import { EnhancedFAQSchema } from '@/components/seo/EnhancedFAQSchema';
import { ReviewSchema } from '@/components/seo/ReviewSchema';
import { InternalLinkingStrategy } from '@/components/seo/InternalLinkingStrategy';
import { LCPOptimizer } from '@/components/performance/LCPOptimizer';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  return (
    <>
      <LCPOptimizer />
      <OrganizationSchema />
      <WebSiteSchema />
      <UnifiedSEOOptimizer
        title="FREE Mobile App for Buyers, Sellers & Businesses"
        description="ONLY verification mobile app for iOS & Android. Check phones, cars, guns & items. Works on Facebook Marketplace, OfferUp, Craigslist, eBay. 4 FREE verifications."
        keywords="mobile verification app, facebook marketplace app, offerup app, craigslist verification, imei checker app, vin verification app, firearm serial checker app, stolen item checker app"
        canonical="/"
        structuredData={getHomePageStructuredData()}
        competitiveKeywords="homepage"
        priorityLevel="max"
        aiOptimized={true}
        type="website"
      />
      
      <div className="min-h-screen">
        <Hero />
        <AppDownloadSection />
        <SEOContentSection />
        <InternalLinkingStrategy />
        <ReviewSchema />
        <EnhancedFAQSchema />
        
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