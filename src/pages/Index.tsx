import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
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
        
        {/* Consolidated Trust Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 space-y-16">
            <TestimonialsSection />
            <HighImpactFAQ />
          </div>
        </section>
        
        {/* Mobile App Promotion */}
        <Suspense fallback={<div className="py-8" />}>
          <MobileOptimization />
        </Suspense>
        
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