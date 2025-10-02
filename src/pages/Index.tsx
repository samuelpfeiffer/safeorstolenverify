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
      <LocalMarketplaceSEO />
      <UnifiedSEOOptimizer
        title="FREE Marketplace App | SafeOrStolen Verify Items"
        description="ONLY mobile app for Facebook Marketplace, OfferUp, Craigslist & eBay buyers/sellers. Verify items instantly before buying. FREE iPhone & Android app with 4 free checks. Download now!"
        keywords="facebook marketplace app buyers sellers, offerup app seller verification, craigslist business verification app, pawn shop verification app, reseller stolen goods checker, marketplace seller trust app, buyer protection mobile app, business bulk verification api, facebook marketplace seller legitimacy, craigslist seller proof app, offerup buyer seller app, ebay verification sellers, marketplace stolen phone checker buyers sellers, business inventory verification app, stolen item checker, stolen phone lookup, IMEI checker, VIN checker, serial number verification, check if phone is stolen free, stolen goods database, verify used items before buying, marketplace scam prevention, facebook marketplace safety tips, offerup scam detector, craigslist fraud prevention, check stolen electronics, stolen laptop checker, stolen tablet verification, stolen camera check, stolen jewelry verification, stolen bike registry, stolen car VIN check, stolen motorcycle check, stolen equipment verification, verify second hand items, used item verification app, pre owned item checker, check if item is reported stolen, avoid buying stolen merchandise, stolen property database search, police stolen goods registry, report stolen items online, verify item ownership, check item history, marketplace buyer safety, safe buying used items, how to check if something is stolen, verify item before purchase, stolen item reporting, item verification service, authenticate used goods, check item legitimacy, stolen goods prevention, marketplace verification tool, buyer seller protection app, trust verification marketplace, legitimate seller proof, authentic item verification, pawn shop inventory software, reseller verification tools, thrift store item checker, consignment shop verification, used car dealer verification, second hand store safety, antique dealer verification, collectibles authentication, electronics resale verification, phone reseller tools, device verification app, used phone checker, refurbished phone verification, carrier blacklist check, IMEI blacklist lookup, ESN checker, MEID verification, iCloud locked check, activation lock checker, stolen iPhone checker, stolen Samsung check, stolen Android verification, check phone carrier status, phone unlock verification, clean IMEI checker, verify phone is unlocked, check phone contract status, phone financing check, leased phone verification, financed device checker, blacklisted device lookup, stolen device registry, lost phone database, find stolen phone, track stolen device, report lost item, stolen item recovery, retrieve stolen goods, police report verification, insurance claim verification, theft report lookup, crime report database, stolen property recovery, law enforcement database, police stolen item check, verify police report, authenticate theft claim, fraud detection tools, scam prevention app, identity theft prevention, financial fraud protection, transaction security, payment verification, secure marketplace transactions, safe online buying, ecommerce security, marketplace fraud detection, seller verification system, buyer authentication, trust badge verification, secure payment gateway, escrow service integration, dispute resolution system, transaction monitoring, risk assessment tools, compliance verification, regulatory compliance check, anti money laundering verification, know your customer verification, identity verification service, document authentication, proof of ownership verification, receipt verification, warranty check, authenticity guarantee, certified pre owned verification, manufacturer verification, brand authentication, counterfeit detection, fake product checker, genuine item verification, original product verification, licensed merchandise check, authorized dealer verification, retail arbitrage tools, dropshipping verification, wholesale verification, bulk item checker, inventory management verification, asset tracking verification, property management tools, fleet management verification, vehicle history report, carfax alternative, autocheck alternative, free VIN decoder, vehicle title check, lien check, salvage title check, flood damage check, accident history report, odometer verification, recall check, safety recall database, manufacturer recall lookup, product recall checker, consumer safety database, CPSC recall check, FDA recall database, consumer product verification, safety certification check, quality assurance verification, standards compliance check, certification verification, license verification, permit verification, registration verification, title verification, deed verification, lien search, encumbrance check, property title search, real estate verification, mortgage verification, loan verification, credit check alternative, background check service, criminal record check, sex offender registry, tenant screening, employment verification, education verification, professional license verification, credential verification, certification validation, accreditation verification"
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