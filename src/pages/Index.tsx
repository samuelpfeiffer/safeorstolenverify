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
import { BuyerProtectionSEO } from '@/components/seo/BuyerProtectionSEO';
import { AdvancedSEOOptimizations } from '@/components/seo/AdvancedSEOOptimizations';
import { CompetitorComparisonSEO } from '@/components/seo/CompetitorComparisonSEO';
import { InternalLinkingStrategy } from '@/components/seo/InternalLinkingStrategy';
import { AdvancedSchemaMarkup } from '@/components/seo/AdvancedSchemaMarkup';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <BuyerProtectionSEO pageType="general" />
      <AdvancedSEOOptimizations />
      <CompetitorComparisonSEO />
      <AdvancedSchemaMarkup />
      <UnifiedSEOOptimizer
        title="Free IMEI Checker & VIN Verification Mobile App | Better Than CheckMend | SafeOrStolen"
        description="✓ ONLY verification service with mobile app (iOS & Android) ✓ Free IMEI check ✓ VIN verification - CheckMend, IMEIinfo & Stolen Register have NO mobile apps! Download now for instant on-the-go verification. 4 FREE searches!"
        keywords="mobile imei checker app, vin verification app ios android, stolen item checker mobile app, imei check app free download, mobile phone verification app, car vin check app, safeorstolen app, checkmend mobile app alternative, imeiinfo app alternative, verification app ios android, scan imei app, on the go verification"
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