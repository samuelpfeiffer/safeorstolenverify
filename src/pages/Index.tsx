import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { lazy, Suspense } from 'react';
import { SecurityChicDashboard } from '@/components/dashboard/SecurityChicDashboard';
import { LazySection } from '@/components/performance/LazySection';

const TrustBadgesStrip = lazy(() => import('@/components/marketing/TrustBadgesStrip').then(m => ({ default: m.TrustBadgesStrip })));
const DataSourcesSection = lazy(() => import('@/components/home/DataSourcesSection').then(m => ({ default: m.DataSourcesSection })));
const PressMediaSection = lazy(() => import('@/components/home/PressMediaSection').then(m => ({ default: m.PressMediaSection })));
const WhatYouCanVerify = lazy(() => import('@/components/home/WhatYouCanVerify').then(m => ({ default: m.WhatYouCanVerify })));
const CompetitorComparison = lazy(() => import('@/components/marketing/CompetitorComparison').then(m => ({ default: m.CompetitorComparison })));
const TestimonialsCarousel = lazy(() => import('@/components/marketing/TestimonialsCarousel').then(m => ({ default: m.TestimonialsCarousel })));
const InternalLinksSection = lazy(() => import('@/components/home/InternalLinksSection').then(m => ({ default: m.InternalLinksSection })));
const TrustSignals = lazy(() => import('@/components/seo/TrustSignals').then(m => ({ default: m.TrustSignals })));

import { HomeContentSections } from '@/components/home/HomeContentSections';

const SectionSkeleton = ({ height = '8rem' }: { height?: string }) => (
  <div className="animate-pulse bg-muted/20 rounded-2xl" style={{ minHeight: height }} />
);

const Index = () => {
  return (
    <>
      <PageSEO
        title="Free Stolen Item Checker - IMEI VIN Serial Verification"
        description="Check if phones, cars, bikes are stolen before buying. Verify IMEI, VIN, serial numbers against 100+ databases. 2 free searches. Results in 3 seconds."
        keywords="stolen item checker, IMEI checker free, VIN checker free, serial number verification, stolen phone checker, stolen car check"
        canonical="/"
      />
      
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Stolen Item Checker - Free IMEI, VIN &amp; Serial Number Verification</h1>
          <p>SafeOrStolen verifies if secondhand items are stolen. Check IMEI, VIN, and serial numbers against 50+ databases. Free verification with results in 3 seconds.</p>
        </div>
      </noscript>

      <TrustHeaderBar />
      
      <main className="min-h-screen">
        {/* Security-Chic Dashboard — hero + verification + SEO-GEO blocks */}
        <SecurityChicDashboard />

        {/* ─── Below-fold trust & social proof sections ─── */}
        <LazySection minHeight="80px">
          <Suspense fallback={<SectionSkeleton />}>
            <TrustBadgesStrip />
          </Suspense>
        </LazySection>

        <LazySection minHeight="300px">
          <Suspense fallback={<SectionSkeleton />}>
            <DataSourcesSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="200px">
          <Suspense fallback={<SectionSkeleton />}>
            <PressMediaSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="400px">
          <Suspense fallback={<SectionSkeleton />}>
            <WhatYouCanVerify />
          </Suspense>
        </LazySection>

        <LazySection minHeight="400px">
          <Suspense fallback={<SectionSkeleton />}>
            <CompetitorComparison />
          </Suspense>
        </LazySection>

        <LazySection minHeight="300px">
          <Suspense fallback={<SectionSkeleton />}>
            <TestimonialsCarousel />
          </Suspense>
        </LazySection>

        <LazySection minHeight="200px">
          <Suspense fallback={<SectionSkeleton />}>
            <InternalLinksSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="100px">
          <Suspense fallback={<SectionSkeleton />}>
            <TrustSignals />
          </Suspense>
        </LazySection>

        <HomeContentSections />
      </main>
    </>
  );
};

export default Index;
