import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, Trophy, ArrowRight } from 'lucide-react';
import { lazy, Suspense } from 'react';

// Critical above-fold components - loaded immediately
const heroImage = '/images/hero-device.png';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';
import { HomeSEOBodyContent } from '@/components/home/HomeSEOBodyContent';

// Lazy loaded components for below-fold content
import { LazySection } from '@/components/performance/LazySection';

// Dynamic imports for heavy components (reduces initial JS bundle)
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

// Deferred above-fold components (loaded after hero but before user interaction)
const SocialProofBanner = lazy(() => import('@/components/conversion/SocialProofBanner').then(m => ({ default: m.SocialProofBanner })));
const QuickValueProof = lazy(() => import('@/components/conversion/QuickValueProof').then(m => ({ default: m.QuickValueProof })));

// Loading skeleton for sections - with fixed heights to prevent CLS
const SectionSkeleton = ({ height = '8rem' }: { height?: string }) => (
  <div className="animate-pulse bg-muted/30 rounded-lg" style={{ minHeight: height }} />
);

const Index = () => {
  return (
    <>
      {/* NOTE: WebSite and Organization schemas are in index.html - DO NOT duplicate here */}
      <PageSEO
        title="Stolen Item Checker - Free IMEI, VIN & Serial Lookup | SafeOrStolen"
        description="THE ONLY stolen item checker with a mobile app. Verify phones, cars, bikes & more against 100+ databases. 3-second results. Trusted by pawn shops & police."
        keywords="stolen item checker, IMEI checker free, VIN checker free, serial number lookup, stolen phone check, stolen car check, pawn shop verification, mobile app"
        canonical="/"
      />
      
      {/* Minimal noscript fallback for crawlers */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Stolen Item Checker - Free IMEI, VIN & Serial Number Verification</h1>
          <p>SafeOrStolen verifies if secondhand items are stolen. Check IMEI, VIN, and serial numbers against 50+ databases. Free verification with results in 3 seconds. The only mobile app for stolen item checking.</p>
          <p>Visit safeorstolen.com/verify to check any item before buying or selling.</p>
        </div>
      </noscript>

      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* Hero Section - Optimized for Mobile LCP */}
        <section className="py-8 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-4 md:space-y-5">
              {/* MOBILE LCP FIX: Static social proof on mobile, deferred on desktop */}
              <div className="h-10 flex items-center justify-center" style={{ minHeight: '40px', contain: 'layout' }}>
                <Suspense fallback={
                  <div className="text-sm text-muted-foreground">✓ Trusted by 10,000+ users</div>
                }>
                  <SocialProofBanner />
                </Suspense>
              </div>
              
              {/* H1 - Critical for LCP, fixed height to prevent CLS */}
              <h1 
                className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                style={{ minHeight: 'clamp(2.5rem, 8vw, 4rem)', contain: 'layout style' }}
              >
                Check If Secondhand Items Are Safe Or Stolen
              </h1>
              <p className="text-lg md:text-2xl font-medium text-foreground/80">
                The <strong>ONLY</strong> Stolen Item Checker With A Mobile App
              </p>
              
              {/* Static badges - no JS required, helps LCP */}
              <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm font-medium text-muted-foreground">
                <span className="bg-primary/10 px-2 md:px-3 py-1 rounded-full">100+ Databases</span>
                <span className="bg-primary/10 px-2 md:px-3 py-1 rounded-full">3-Second Results</span>
                <span className="bg-primary/10 px-2 md:px-3 py-1 rounded-full hidden sm:inline-flex">Used by Pawn Shops & Police</span>
              </div>
              
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Cross-references <strong>police databases</strong>, <strong>NICB</strong>, <strong>insurance claims</strong>, and <strong>100+ global sources</strong> in real-time.
              </p>
              
              {/* MOBILE CLS FIX: Fixed height container for QuickValueProof */}
              <div style={{ minHeight: '80px', contain: 'layout' }}>
                <Suspense fallback={<div className="h-20" />}>
                  <QuickValueProof />
                </Suspense>
              </div>
              
              {/* Search Form - Primary Action (critical, loaded eagerly) */}
              <div className="pt-4">
                <HomeSearchFormWithURL />
              </div>
              
              {/* Secondary CTAs */}
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button asChild size="lg" variant="outline">
                  <Link to="/app">
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link to="/how-it-works">
                    Learn How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Hero Image - CRITICAL LCP Element with explicit mobile optimizations */}
              <div 
                className="mt-6 md:mt-8 max-w-4xl mx-auto" 
                style={{ 
                  aspectRatio: '16/9', 
                  minHeight: '180px',
                  contain: 'layout style paint',
                }}
                data-hero-img
              >
                <div className="relative group h-full">
                  {/* Simplified gradient on mobile (no blur), full blur on desktop for performance */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity hidden md:block md:blur-2xl" aria-hidden="true" />
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl opacity-50 md:hidden" aria-hidden="true" />
                  <img 
                    src={heroImage} 
                    alt="SafeOrStolen app - IMEI checker, VIN checker with instant 3 second verification results" 
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-primary/30"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="1200"
                    height="675"
                    style={{ 
                      aspectRatio: '16/9',
                      contain: 'layout style',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OneValley / EWC Recognition Strip - Static, minimal JS */}
        <section className="py-4 bg-gradient-to-r from-amber-500/5 via-background to-amber-500/5 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <Trophy className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Recognized by <strong className="text-foreground">OneValley</strong> and the{' '}
                <strong className="text-foreground">Entrepreneurship World Cup 2020</strong> for innovative 
                SaaS/Enterprise disruption · Representing the United States
              </p>
              <Link 
                to="/news/onevalley-recognition" 
                className="text-xs text-primary hover:underline whitespace-nowrap"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </section>

        {/* Substantial, user-visible body content (not lazy loaded) */}
        <HomeSEOBodyContent />

        {/* Below-fold content - All lazy loaded */}
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

        {/* Simplified Stats */}
        <LazySection minHeight="100px">
          <section className="py-6 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Suspense fallback={<SectionSkeleton />}>
                  <LiveStatsCounter />
                </Suspense>
              </div>
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
          <section className="py-12 bg-muted/30">
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
      </div>
      
      {/* ExitIntentPopup is now rendered globally in AppRoot */}
    </>
  );
};

export default Index;
