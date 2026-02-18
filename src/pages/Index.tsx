import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Database, Zap } from 'lucide-react';
import { lazy, Suspense } from 'react';

// Critical above-fold components
const heroImage = '/images/hero-device.png';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

// Lazy loaded components for below-fold content
import { LazySection } from '@/components/performance/LazySection';

const TrustBadgesStrip = lazy(() => import('@/components/marketing/TrustBadgesStrip').then(m => ({ default: m.TrustBadgesStrip })));
const DataSourcesSection = lazy(() => import('@/components/home/DataSourcesSection').then(m => ({ default: m.DataSourcesSection })));
const PressMediaSection = lazy(() => import('@/components/home/PressMediaSection').then(m => ({ default: m.PressMediaSection })));
const WhatYouCanVerify = lazy(() => import('@/components/home/WhatYouCanVerify').then(m => ({ default: m.WhatYouCanVerify })));
const ValueProposition = lazy(() => import('@/components/marketing/ValueProposition').then(m => ({ default: m.ValueProposition })));
const LiveStatsCounter = lazy(() => import('@/components/conversion/LiveStatsCounter').then(m => ({ default: m.LiveStatsCounter })));
const CompetitorComparison = lazy(() => import('@/components/marketing/CompetitorComparison').then(m => ({ default: m.CompetitorComparison })));
const TestimonialsCarousel = lazy(() => import('@/components/marketing/TestimonialsCarousel').then(m => ({ default: m.TestimonialsCarousel })));
const RealTimeStats = lazy(() => import('@/components/traffic/RealTimeStats').then(m => ({ default: m.RealTimeStats })));
const EmailCaptureHero = lazy(() => import('@/components/traffic/EmailCaptureHero').then(m => ({ default: m.EmailCaptureHero })));
const CompactMobileAppCTA = lazy(() => import('@/components/home/CompactMobileAppCTA').then(m => ({ default: m.CompactMobileAppCTA })));
const YouTubeChannelSection = lazy(() => import('@/components/home/YouTubeChannelSection').then(m => ({ default: m.YouTubeChannelSection })));
const InternalLinksSection = lazy(() => import('@/components/home/InternalLinksSection').then(m => ({ default: m.InternalLinksSection })));
const TrustSignals = lazy(() => import('@/components/seo/TrustSignals').then(m => ({ default: m.TrustSignals })));

// Homepage content sections (static, not lazy - for SEO)
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
          <h1>Stolen Item Checker - Free IMEI, VIN & Serial Number Verification</h1>
          <p>SafeOrStolen verifies if secondhand items are stolen. Check IMEI, VIN, and serial numbers against 50+ databases. Free verification with results in 3 seconds.</p>
        </div>
      </noscript>

      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* ─── Hero Section ─── */}
        <section className="relative overflow-hidden">
          {/* Subtle gradient glow behind hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              {/* Trust pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/40 text-sm text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span>Trusted by buyers & sellers across all 50 states</span>
              </div>

              {/* Headline */}
              <h1 className="text-foreground">
                Verify any item is
                <span className="text-gradient"> safe to buy</span>
              </h1>
              
              {/* Sub-headline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Check IMEI, VIN, or serial numbers against 100+ law enforcement and insurance databases. Results in 3 seconds. 2 free checks.
              </p>

              {/* Search Form */}
              <div className="pt-2">
                <HomeSearchFormWithURL />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="container mx-auto px-4 pb-16 md:pb-24">
            <div className="max-w-4xl mx-auto">
              <div 
                className="relative rounded-2xl overflow-hidden border border-border/50"
                style={{ aspectRatio: '16/9', minHeight: '200px' }}
                data-hero-img
              >
                <picture>
                  <source srcSet="/images/hero-device.webp" type="image/webp" />
                  <img 
                    src={heroImage} 
                    alt="SafeOrStolen verification dashboard showing IMEI, VIN, and serial number check results" 
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="1200"
                    height="675"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Feature Strip ─── */}
        <section className="py-12 border-y border-border/50 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: 'For Buyers',
                  desc: 'Verify any item before paying. If seized by police, you lose your money with no recourse.'
                },
                {
                  icon: Shield,
                  title: 'For Sellers',
                  desc: 'Build trust with verified listings. Share a verification certificate to prove legitimacy.'
                },
                {
                  icon: Zap,
                  title: 'For Businesses',
                  desc: 'Pawn shops and dealers use bulk verification via API. Comply with state due diligence.'
                }
              ].map((item, i) => (
                <div key={i} className="modern-card p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Static SEO content ─── */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-4">Why Verify Before You Buy?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Over $15 billion worth of property is stolen annually in the United States. When buying secondhand phones, cars, bikes, laptops, or electronics from Facebook Marketplace, Craigslist, OfferUp, or eBay, there is a real risk of purchasing stolen goods. SafeOrStolen is the only verification service with a mobile app that lets you check IMEI numbers for phones, VIN numbers for vehicles, and serial numbers for electronics against over 100 law enforcement, insurance, and manufacturer databases in just 3 seconds.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Below-fold lazy sections ─── */}
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

        <LazySection minHeight="300px">
          <Suspense fallback={<SectionSkeleton />}>
            <ValueProposition />
          </Suspense>
        </LazySection>

        <LazySection minHeight="100px">
          <section className="py-8 bg-muted/20">
            <div className="container mx-auto px-4 max-w-4xl">
              <Suspense fallback={<SectionSkeleton />}>
                <LiveStatsCounter />
              </Suspense>
            </div>
          </section>
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
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <Suspense fallback={<SectionSkeleton />}>
                <RealTimeStats />
              </Suspense>
            </div>
          </section>
        </LazySection>

        <LazySection minHeight="200px">
          <section className="py-12 bg-muted/20">
            <div className="container mx-auto px-4 max-w-2xl">
              <Suspense fallback={<SectionSkeleton />}>
                <EmailCaptureHero />
              </Suspense>
            </div>
          </section>
        </LazySection>

        <LazySection minHeight="150px">
          <Suspense fallback={<SectionSkeleton />}>
            <CompactMobileAppCTA />
          </Suspense>
        </LazySection>

        <LazySection minHeight="300px">
          <Suspense fallback={<SectionSkeleton />}>
            <YouTubeChannelSection />
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
      </div>
    </>
  );
};

export default Index;
