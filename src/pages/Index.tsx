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
        title="Free IMEI Checker & VIN Verification | Better Than CheckMend, IMEIinfo | SafeOrStolen"
        description="✓ Free IMEI check ✓ VIN verification ✓ Serial number lookup - Instant stolen item verification. More accurate than CheckMend, faster than IMEIinfo, comprehensive than Stolen Register. 4 FREE searches, no credit card!"
        keywords="imei checker free, check if phone is stolen, vin verification free, stolen item checker, serial number lookup stolen, imei check better than checkmend, alternative to imeiinfo, free stolen register, verify phone not stolen, check car stolen vin, stolen goods database search, checkserial alternative, swappa imei check, phone blacklist check, stolen property database"
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