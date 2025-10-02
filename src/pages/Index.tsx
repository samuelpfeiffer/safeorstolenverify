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
import { InternalLinkingStrategy } from '@/components/seo/InternalLinkingStrategy';
import { FloatingAdCarousel } from '@/components/advertising/FloatingAdCarousel';
import { ParanoiaAd } from '@/components/advertising/ParanoiaAd';
import { AdvertisingStrategy } from '@/components/advertising/AdvertisingStrategy';
import { AdvancedSEOManager } from '@/components/advertising/AdvancedSEOManager';
import { DynamicCTASystem } from '@/components/advertising/DynamicCTASystem';
import { SocialProofEngine } from '@/components/advertising/SocialProofEngine';
import { ConversionOptimizer } from '@/components/advertising/ConversionOptimizer';
import { KeywordTargeting } from '@/components/advertising/KeywordTargeting';
import { PerformanceMonitor } from '@/components/performance/PerformanceMonitor';
import familyProtection from '@/assets/ads/family-protection.jpg';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  return (
    <>
      {/* Advanced Advertising & SEO System */}
      <AdvertisingStrategy />
      <AdvancedSEOManager />
      <ConversionOptimizer />
      <KeywordTargeting />
      
      <OrganizationSchema />
      <WebSiteSchema />
      <UnifiedSEOOptimizer
        title="FREE Mobile App | SafeOrStolen"
        description="ONLY verification mobile app for iOS & Android. Check phones, cars, guns & items on Facebook Marketplace, OfferUp, Craigslist, eBay. 4 FREE verifications."
        keywords="mobile verification app, facebook marketplace app, imei checker, vin verification, firearm serial checker"
        canonical="/"
        structuredData={getHomePageStructuredData()}
        type="website"
      />
      
      <div className="min-h-screen">
      <Hero />
      <AppDownloadSection />
      
      {/* Strategic Paranoia Ad - Homepage */}
      <ParanoiaAd 
        src={familyProtection} 
        alt="Protect yourself and your family when buying used goods with SafeOrStolen.com"
        size="large"
      />
      
      <SEOContentSection />
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
      
      {/* Floating Ad Carousel */}
      <FloatingAdCarousel />
      
      {/* Dynamic Conversion Elements */}
      <DynamicCTASystem />
      <SocialProofEngine />
      
      {/* Performance Monitoring (Dev Only) */}
      <PerformanceMonitor />
    </>
  );
};

export default Index;