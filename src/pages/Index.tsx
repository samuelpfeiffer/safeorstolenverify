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
import { EnhancedFAQSchema } from '@/components/seo/EnhancedFAQSchema';
import { ReviewSchema } from '@/components/seo/ReviewSchema';
import { BuyerProtectionSEO } from '@/components/seo/BuyerProtectionSEO';
import { AdvancedSEOOptimizations } from '@/components/seo/AdvancedSEOOptimizations';
import { CompetitorComparisonSEO } from '@/components/seo/CompetitorComparisonSEO';
import { InternalLinkingStrategy } from '@/components/seo/InternalLinkingStrategy';
import { AdvancedSchemaMarkup } from '@/components/seo/AdvancedSchemaMarkup';
import { AIAnswerEngineOptimizer } from '@/components/seo/AIAnswerEngineOptimizer';
import { LCPOptimizer } from '@/components/performance/LCPOptimizer';
import { AdvancedSchemaGenerator } from '@/components/seo/AdvancedSchemaGenerator';
import { EEATSignals } from '@/components/seo/EEATSignals';
import { FeaturedSnippetOptimizer } from '@/components/seo/FeaturedSnippetOptimizer';
import { VoiceSearchOptimizer } from '@/components/seo/VoiceSearchOptimizer';
import { LinkBuildingSignals } from '@/components/seo/LinkBuildingSignals';
import { MarketplaceSEODomination } from '@/components/seo/MarketplaceSEODomination';
import { LocalMarketplaceSEO } from '@/components/seo/LocalMarketplaceSEO';
import { CompetitorTargetingSEO } from '@/components/seo/CompetitorTargetingSEO';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  return (
    <>
      <LCPOptimizer />
      <OrganizationSchema />
      <WebSiteSchema />
      <BuyerProtectionSEO pageType="general" />
      <AdvancedSEOOptimizations />
      <CompetitorComparisonSEO />
      <AdvancedSchemaMarkup />
      <AIAnswerEngineOptimizer />
      <AdvancedSchemaGenerator />
      <EEATSignals />
      <FeaturedSnippetOptimizer />
      <VoiceSearchOptimizer />
      <LinkBuildingSignals />
      <MarketplaceSEODomination />
      <LocalMarketplaceSEO />
      <CompetitorTargetingSEO />
      <UnifiedSEOOptimizer
        title="FREE Mobile App for Facebook Marketplace OfferUp Craigslist eBay | Check Stolen Items BEFORE Buying | iOS Android"
        description="🔥 ONLY MOBILE APP for marketplace buyers! Verify phones, cars, electronics BEFORE buying on Facebook Marketplace, OfferUp, Craigslist, eBay. FREE iPhone & Android app with 4 FREE checks. CheckMend & IMEIinfo have NO mobile apps. Download SafeOrStolen NOW - don't meet seller without it!"
        keywords="facebook marketplace safety app, offerup scam prevention app, craigslist buyer protection app, ebay verification mobile app, marketplace stolen phone checker, facebook marketplace phone verification, offerup imei check app, craigslist vin checker app, marketplace safety checker mobile, stolen item checker app ios android, verify before buying app, marketplace buyer protection mobile, facebook marketplace scam detector, craigslist car verification app, offerup electronics checker"
        canonical="/"
        structuredData={getHomePageStructuredData()}
        competitiveKeywords="homepage"
        priorityLevel="max"
        aiOptimized={true}
        type="website"
      />
      
      <div className="min-h-screen">
        <Hero />
        <AppDownloadSection />
        <SEOContentSection />
        <InternalLinkingStrategy />
        <ReviewSchema />
        <EnhancedFAQSchema />
        
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