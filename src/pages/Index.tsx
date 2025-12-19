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
import { Download, CheckCircle, Trophy } from 'lucide-react';
// Use public folder for better caching - preloaded in index.html
const heroImage = '/images/hero-device.png';
import { LiveStatsCounter } from '@/components/conversion/LiveStatsCounter';
import { HomeSearchForm } from '@/components/home/HomeSearchForm';
import { EmailCaptureHero } from '@/components/traffic/EmailCaptureHero';
import { RealTimeStats } from '@/components/traffic/RealTimeStats';


const Index = () => {
  return (
    <>
        <PageSEO
        title="Stolen Item Checker for Buyers, Sellers & Businesses | Free IMEI VIN Serial Verification | SafeOrStolen"
        description="Protect buyers, sellers & businesses from stolen goods. Buyers verify before purchasing. Sellers prove legitimacy. Businesses reduce risk. Free IMEI, VIN, serial number verification in 3 seconds. The only mobile app available."
        keywords="stolen item checker, verify before buying, prove item not stolen, pawn shop verification, business stolen goods check, IMEI checker free, VIN lookup, serial number verification, secondhand verification, reseller protection"
        canonical="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SafeOrStolen",
            "url": "https://safeorstolen.com",
            "description": "Stolen item verification service for buyers, sellers & businesses",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://safeorstolen.com/verify?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafeOrStolen",
            "url": "https://safeorstolen.com",
            "description": "SafeOrStolen is a stolen item verification service that helps buyers, sellers, and businesses verify IMEI, VIN, and serial numbers against 50+ databases in 3 seconds.",
            "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "support@safeorstolen.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://twitter.com/safeorstolen",
              "https://facebook.com/safeorstolen",
              "https://linkedin.com/company/safeorstolen",
              "https://www.youtube.com/@safeorstolen"
            ]
          }
        ]}
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
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Stolen Item Checker for Buyers, Sellers & Businesses
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Verify IMEI, VIN & Serial Numbers - Free in 3 Seconds
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                <strong>Buyers:</strong> Don't get stuck with stolen goods. <strong>Sellers:</strong> Prove your items are legitimate. <strong>Businesses:</strong> Protect your reputation and reduce risk. The only mobile app for verification.
              </p>
              
              {/* Search Form */}
              <div className="pt-6">
                <HomeSearchForm />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <LiveStatsCounter />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  For Buyers
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  For Sellers
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  For Businesses
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button asChild variant="outline" size="sm">
                  <Link to="/app">
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Link>
                </Button>
              </div>

              {/* Hero Image - Performance Optimized */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={heroImage} 
                    alt="SafeOrStolen - the only stolen verification app with barcode scanning - IMEI checker, VIN checker, stolen item scanner app showing instant verification results in 3 seconds" 
                    className="relative w-full h-auto rounded-2xl shadow-2xl border border-primary/30"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={1200}
                    height={675}
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

        {/* Press & Trust Partners */}
        <PressMediaSection />

        {/* What You Can Verify */}
        <WhatYouCanVerify />

        {/* Quick Trust Stats - HONEST numbers only */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Database Sources</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3 sec</div>
                <div className="text-sm text-muted-foreground">Verification Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50</div>
                <div className="text-sm text-muted-foreground">US States</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">2 Trial Checks</div>
              </div>
            </div>
          </div>
        </section>

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
