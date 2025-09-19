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
      {/* Advanced SEO Optimization - Outrank Competition */}
      <UnifiedSEOOptimizer
        title="Safe Secondhand Buying - Check If Item Is Stolen Before You Buy | SafeOrStolen"
        description="Free stolen item verification service. Verify ownership before buying used items. Check IMEI, VIN, serial numbers against global stolen property database. Trusted item verification platform."
        keywords="safe secondhand buying, check if item is stolen, verify ownership before buying, secondhand item verification, buy and sell safely, protect buyers and sellers, IMEI device check, serial number lookup, VIN lookup, stolen goods verification, trusted item verification, global stolen property database, secure marketplace tool"
        canonical="/"
        structuredData={homePageStructuredData}
        competitiveKeywords="homepage"
        priorityLevel="max"
        aiOptimized={true}
        type="website"
      />
      <AdvancedKeywordOptimizer 
        pageType="homepage" 
        context="transaction"
        primaryKeywords={['safe secondhand buying', 'check if item is stolen', 'verify ownership before buying']}
      />
      <DomainAuthorityBooster pageType="homepage" />
      <LinkBuildingHelper 
        pageTitle="Safe Or Stolen - Free Stolen Item Verification"
        pageUrl="https://safeorstolen.com/"
        contentType="tool"
      />
      <ContentAuthoritySignals 
        wordCount={2800}
        lastUpdated={new Date().toISOString()}
        authorExpertise={['Fraud Prevention', 'Law Enforcement Partnerships', 'Database Security']}
        contentDepth="comprehensive"
      />
      <GoogleDiscoverOptimizer 
        title="Safe Secondhand Buying - Verify Ownership Before Buying Used Items"
        description="Instantly check if phones, cars, electronics and other items are stolen before you buy. Free verification tools for safe secondhand buying and trusted item verification."
        image="/assets/hero-verification-devices.png"
        category="Consumer Protection"
        enableFollow={true}
      />
      
      {/* Main content - ensure it loads immediately for crawlers */}
      <div className="min-h-screen">
        <noscript>
          {/* Fallback content for crawlers when JS is disabled */}
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-primary">
              SafeOrStolen
            </h1>
              <p className="text-lg md:text-2xl text-muted-foreground mb-6">
               Safe secondhand buying platform with trusted item verification. Check if item is stolen before you buy. 
               Free verification service for consumers and businesses to protect buyers and sellers.
              </p>
            <p className="text-lg text-muted-foreground">
              Enable JavaScript to access our full verification platform.
            </p>
          </div>
        </noscript>
        
        <Hero />
        <AIOptimizedContent page="home" />
        <KeywordOptimizedContent pageType="homepage" className="py-12 bg-muted/30" />
        <SponsorsStrip />
        <TrustSignals />
        <TestimonialsSection />
        <SecurityBadges />
        
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
        
        <ComprehensiveKeywordFooter />
      </div>
    </>
  );
};

export default Index;