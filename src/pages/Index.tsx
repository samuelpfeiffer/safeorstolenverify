import { PageSEO } from '@/components/seo/PageSEO';
import { lazy, Suspense } from 'react';
import { VoiceSearchFAQSchema } from '@/components/seo/VoiceSearchFAQSchema';
import { IMEICheckHowTo, VINCheckHowTo } from '@/components/seo/HowToSchema';

// New streamlined components - loaded eagerly for above-fold
import { CleanHeroSection } from '@/components/home/CleanHeroSection';
import { ItemsGridSection } from '@/components/home/ItemsGridSection';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { SimpleHowItWorks } from '@/components/home/SimpleHowItWorks';
import { MobileAppSection } from '@/components/home/MobileAppSection';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';
import { PressMediaSection } from '@/components/home/PressMediaSection';

// Lazy loaded components for below-fold content
import { LazySection } from '@/components/performance/LazySection';

// Dynamic imports for supplementary sections
const HomepageFAQ = lazy(() => import('@/components/home/HomepageFAQ').then(m => ({ default: m.HomepageFAQ })));
const InternalLinksSection = lazy(() => import('@/components/home/InternalLinksSection').then(m => ({ default: m.InternalLinksSection })));
const TrustSignals = lazy(() => import('@/components/seo/TrustSignals').then(m => ({ default: m.TrustSignals })));

// Loading skeleton
const SectionSkeleton = ({ height = '8rem' }: { height?: string }) => (
  <div className="animate-pulse bg-muted/30 rounded-lg" style={{ minHeight: height }} />
);

const Index = () => {
  return (
    <>
      {/* SEO */}
      <PageSEO
        title="Is This Item Stolen? Check Before Buying | SafeOrStolen"
        description="Check if phones, cars, bikes are stolen before buying. Free instant verification for Facebook Marketplace, Craigslist, eBay. Enter serial number, get results in 2 seconds."
        keywords="is this phone stolen, check if item is stolen, stolen phone checker, stolen car check, IMEI check, VIN check, Facebook Marketplace stolen, Craigslist scam protection, used phone verification"
        canonical="/"
      />
      
      {/* Schema Markup */}
      <VoiceSearchFAQSchema pageType="homepage" />
      <IMEICheckHowTo />
      <VINCheckHowTo />
      
      {/* Noscript fallback for crawlers */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Is This Item Stolen? Check Before Buying</h1>
          <p>SafeOrStolen verifies if secondhand items are stolen. Check IMEI, VIN, and serial numbers against 100+ databases. Free verification with results in 2 seconds.</p>
          <p>Visit safeorstolen.com/verify to check any item before buying or selling.</p>
        </div>
      </noscript>

      <div className="min-h-screen">
        {/* Section 1: Hero with Search Box */}
        <CleanHeroSection />

        {/* Section 2: Items Grid - What You Can Check */}
        <ItemsGridSection />

        {/* Section 3: Use Cases - Buyers, Resellers, Businesses */}
        <UseCasesSection />

        {/* Section 4: How It Works - 3 Steps */}
        <SimpleHowItWorks />

        {/* Section 5: Mobile App */}
        <MobileAppSection />

        {/* Section 6: Social Proof - Testimonials + Stats */}
        <SocialProofSection />

        {/* Section 7: Partners & Press */}
        <SponsorsStrip />
        <PressMediaSection />

        {/* Below-fold: FAQ for SEO */}
        <LazySection minHeight="400px">
          <Suspense fallback={<SectionSkeleton height="400px" />}>
            <HomepageFAQ />
          </Suspense>
        </LazySection>

        {/* Internal Links for SEO */}
        <LazySection minHeight="200px">
          <Suspense fallback={<SectionSkeleton />}>
            <InternalLinksSection />
          </Suspense>
        </LazySection>

        {/* Trust Signals for footer area */}
        <LazySection minHeight="100px">
          <Suspense fallback={<SectionSkeleton />}>
            <TrustSignals />
          </Suspense>
        </LazySection>
      </div>
    </>
  );
};

export default Index;
