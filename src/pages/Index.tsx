import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { Button } from '@/components/ui/button';
import { Shield, BadgeCheck, Users } from 'lucide-react';
import heroImage from '@/assets/hero-verification-devices.png';
import { UnifiedSEOOptimizer } from '@/components/seo/UnifiedSEOOptimizer';
import { DomainAuthorityBooster } from '@/components/seo/DomainAuthorityBooster';
import { LinkBuildingHelper } from '@/components/seo/LinkBuildingHelper';
import { GoogleDiscoverOptimizer } from '@/components/seo/GoogleDiscoverOptimizer';
import { ContentAuthoritySignals } from '@/components/seo/ContentAuthoritySignals';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';
import { TrustSignals } from '@/components/seo/TrustSignals';
import SecurityBadges from '@/components/seo/SecurityBadges';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { KeywordOptimizedContent } from '@/components/seo/KeywordOptimizedContent';
import { AdvancedKeywordOptimizer } from '@/components/seo/AdvancedKeywordOptimizer';
import { ComprehensiveKeywordFooter } from '@/components/seo/ComprehensiveKeywordFooter';
import { AIOptimizedContent } from '@/components/seo/AIOptimizedContent';
import { TrustBadges } from '@/components/trust/TrustBadges';
import { MobileOptimization } from '@/components/mobile/MobileOptimization';
import { BackgroundAIMonitor } from '@/components/ai/BackgroundAIMonitor';
import { PrivacyTransparency } from '@/components/privacy/PrivacyTransparency';
import { HighImpactFAQ } from '@/components/seo/HighImpactFAQ';
import { createFAQSchema, createOrganizationSchema, createServiceSchema, createWebsiteSchema } from '@/utils/seo/structuredData';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  // Enhanced structured data for Google crawler
  const homePageStructuredData = [
    createWebsiteSchema(),
    createOrganizationSchema(),
    createServiceSchema(),
    createFAQSchema(),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Verification Platform",
      "description": "Free IMEI, VIN, and serial number verification service to check if items are stolen before purchase",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free verification service for consumers"
      },
      "featureList": [
        "IMEI number verification",
        "VIN number checking", 
        "Serial number validation",
        "Global stolen goods database search",
        "Instant verification results",
        "Consumer fraud protection"
      ],
      "url": "https://safeorstolen.com",
      "screenshot": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
    }
  ];

  return (
    <>
      {/* Simplified SEO - Single Optimizer */}
      <UnifiedSEOOptimizer
        title="IMEI, VIN, and Serial Number Checker – SafeOrStolen Mobile App"
        description="Download the SafeOrStolen app for instant stolen item verification. Check IMEI, VIN, and serial numbers to protect buyers and sellers."
        keywords="verify stolen item, IMEI checker app, VIN check app, serial number check, stolen goods database, check if phone is stolen"
        canonical="/"
        structuredData={homePageStructuredData}
        competitiveKeywords="homepage"
        priorityLevel="max"
        aiOptimized={true}
        type="website"
      />
      
      {/* Clean, organized content */}
      <div className="min-h-screen">
        <Hero />
        
        {/* Prominent App Download Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Get the SafeOrStolen App
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Verify items on-the-go with our powerful mobile app. Scan, check, and buy with confidence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* App Screenshots */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl">
                    <img 
                      src={heroImage} 
                      alt="SafeOrStolen mobile app showing verification interface"
                      className="rounded-2xl shadow-xl w-full"
                    />
                  </div>
                </div>

                {/* Download CTAs */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Instant Scanning</h3>
                        <p className="text-muted-foreground">Use your camera to scan barcodes and serial numbers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <BadgeCheck className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Offline Access</h3>
                        <p className="text-muted-foreground">Check your verification history anytime, anywhere</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Push Alerts</h3>
                        <p className="text-muted-foreground">Get notified when items match stolen reports</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Success Stories / Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <TestimonialsSection />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <HighImpactFAQ />
          </div>
        </section>
        
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