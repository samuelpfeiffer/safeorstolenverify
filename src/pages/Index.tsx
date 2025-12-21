import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { PressMediaSection } from '@/components/home/PressMediaSection';
import { WhatYouCanVerify } from '@/components/home/WhatYouCanVerify';
import { CompactMobileAppCTA } from '@/components/home/CompactMobileAppCTA';
import { TrustSignals } from '@/components/seo/TrustSignals';
import { YouTubeChannelSection } from '@/components/home/YouTubeChannelSection';
import { InternalLinksSection } from '@/components/home/InternalLinksSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, CheckCircle, Trophy, ArrowRight } from 'lucide-react';
// Use public folder for better caching - preloaded in index.html
const heroImage = '/images/hero-device.png';
import { LiveStatsCounter } from '@/components/conversion/LiveStatsCounter';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';
import { EmailCaptureHero } from '@/components/traffic/EmailCaptureHero';
import { RealTimeStats } from '@/components/traffic/RealTimeStats';

// High-conversion components
import { QuickValueProof } from '@/components/conversion/QuickValueProof';
import { SocialProofBanner } from '@/components/conversion/SocialProofBanner';

// Marketing components for visibility and conversions
import { TrustBadgesStrip } from '@/components/marketing/TrustBadgesStrip';
import { ValueProposition } from '@/components/marketing/ValueProposition';
import { CompetitorComparison } from '@/components/marketing/CompetitorComparison';
import { TestimonialsCarousel } from '@/components/marketing/TestimonialsCarousel';


const Index = () => {
  return (
    <>
        {/* NOTE: WebSite and Organization schemas are in index.html - DO NOT duplicate here */}
        <PageSEO
        title="Free Stolen Item Checker App - IMEI VIN Serial Verification | Only Mobile App | SafeOrStolen"
        description="The ONLY stolen item checker with a mobile app. Protect buyers, sellers, pawn shops & resale businesses. Free IMEI, VIN, serial verification. 100+ databases. More comprehensive than CheckMEND, IMEI.info, Carfax, Swappa. Download free."
        keywords="stolen item checker app, IMEI checker app free, VIN checker app free, serial number verification app, stolen phone checker app, stolen car check app, pawn shop verification, resale business protection, CheckMEND alternative app, Carfax alternative app, IMEI.info alternative, Swappa alternative, only stolen item app, free stolen goods checker"
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
        {/* Hero Section - Focused on Immediate Action */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-5">
              {/* Social Proof Banner - Shows activity */}
              <SocialProofBanner />
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Paste Any Listing. Check if Stolen.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                The <strong>only service</strong> that can analyze marketplace URLs. Paste a Facebook Marketplace, eBay, or Craigslist link — or enter any IMEI, VIN, serial. Verified against 100+ databases in 3 seconds.
              </p>
              
              {/* Quick Value Proof - Shows credibility fast */}
              <QuickValueProof />
              
              {/* Search Form with URL Paste - Primary Action */}
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

              {/* Hero Image - LCP Optimized with explicit dimensions */}
              <div className="mt-8 max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={heroImage} 
                    alt="SafeOrStolen app - IMEI checker, VIN checker with instant 3 second verification results" 
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-primary/30"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    width="1200"
                    height="675"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OneValley / EWC Recognition Strip */}
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

        {/* Trust Badges Strip */}
        <TrustBadgesStrip />

        {/* Press & Trust Partners */}
        <PressMediaSection />

        {/* What You Can Verify */}
        <WhatYouCanVerify />

        {/* Value Proposition Section */}
        <ValueProposition />

        {/* Simplified Stats - Trust Building */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <LiveStatsCounter />
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <CompetitorComparison />

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Real-Time Stats */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <RealTimeStats />
          </div>
        </section>

        {/* Email Capture */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-2xl">
            <EmailCaptureHero />
          </div>
        </section>

        {/* Mobile App CTA */}
        <CompactMobileAppCTA />

        {/* YouTube Channel Section */}
        <YouTubeChannelSection />

        {/* Internal Links for SEO */}
        <InternalLinksSection />

        {/* Trust Signals */}
        <TrustSignals />
        {/* Removed StructuredDataForTraffic to avoid duplicate schemas */}
      </div>
      
      {/* ExitIntentPopup is now rendered globally in AppRoot */}
    </>
  );
};

export default Index;
