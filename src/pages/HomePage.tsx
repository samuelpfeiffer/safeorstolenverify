
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
import { IntegrationShowcase } from '@/components/integration/IntegrationShowcase';
import { EnhancedCTASection } from '@/components/cta/EnhancedCTASection';
import { ContentClaritySection } from '@/components/content/ContentClaritySection';
import { GlobalPerformanceOptimizer } from '@/components/enhanced/GlobalPerformanceOptimizer';
import { GlobalSEOHead } from '@/components/seo/GlobalSEOHead';
import { GoogleSearchConsoleSetup } from '@/components/seo/GoogleSearchConsoleSetup';
import { GlobalAnalytics } from '@/components/enhanced/GlobalAnalytics';
import { UserSearchQueriesSection } from '@/components/seo/UserSearchQueriesSection';
import { RealUserScenariosSection } from '@/components/seo/RealUserScenariosSection';
import { DetailedFAQSection } from '@/components/seo/DetailedFAQSection';
import { StolenItemCheckerSection } from '@/components/seo/StolenItemCheckerSection';
import { ItemSpecificQuestionsSection } from '@/components/seo/ItemSpecificQuestionsSection';
import { DataSourceCredibility } from '@/components/seo/DataSourceCredibility';
import { MethodologyTransparency } from '@/components/seo/MethodologyTransparency';
import { PublicAuditDashboard } from '@/components/seo/PublicAuditDashboard';
import { ThirdPartyValidation } from '@/components/trust/ThirdPartyValidation';
import { LiveSystemStatus } from '@/components/system/LiveSystemStatus';
import { TrustBadgeStrip } from '@/components/trust/TrustBadgeStrip';

const HomePage = () => {
  const homePageStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen - Stolen Item Checker",
      "alternateName": "Safe or Stolen",
      "url": "https://safeorstolen.com",
      "description": "Free online stolen item checker tool to verify IMEI, VIN, and serial numbers against police databases before buying secondhand items",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://safeorstolen.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "SafeOrStolen Stolen Item Checker",
      "description": "Free online stolen item checker - verify IMEI, serial numbers, and VIN against stolen goods databases instantly",
      "url": "https://safeorstolen.com",
      "applicationCategory": "SecurityApplication",
      "applicationSubCategory": "Verification Tool",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Chrome, Firefox, Safari, Edge",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free stolen item checking service"
      },
      "featureList": [
        "IMEI stolen check",
        "VIN stolen verification", 
        "Serial number stolen lookup",
        "Phone stolen check",
        "Car stolen verification",
        "Electronics stolen check"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stolen Item Checker Service",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "description": "Professional stolen item checking service for consumers buying secondhand goods",
      "serviceType": "Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ];

  return (
    <>
      <GlobalPerformanceOptimizer />
      <GlobalAnalytics />
      <GoogleSearchConsoleSetup />
      <GlobalSEOHead
        title="Stolen Item Checker - Free Online Tool to Check if Something is Stolen | SafeOrStolen"
        description="Free stolen item checker tool. Verify IMEI, VIN, serial numbers instantly before buying secondhand items. Check phones, cars, electronics against police databases. Protect yourself from stolen goods."
        keywords="stolen item checker, check if stolen, stolen item lookup, stolen goods checker, IMEI checker stolen, VIN stolen check, serial number stolen verification, stolen phone checker, stolen car lookup, stolen electronics check, free stolen item search, police stolen database, stolen goods database, check before you buy, secondhand safety checker, marketplace verification tool, avoid stolen goods, stolen item verification, stolen property checker, stolen goods search"
        canonical="/"
      />
      <div className="min-h-screen">
        <Hero />
        <TrustBadgeStrip />
        <DataSourceCredibility />
        <ThirdPartyValidation />
        <PublicAuditDashboard />
        <LiveSystemStatus />
        <MethodologyTransparency />
        <StolenItemCheckerSection />
        <ItemSpecificQuestionsSection />
        <ContentClaritySection />
        <UserSearchQueriesSection />
        <TestimonialsSection />
        <Features />
        <RealUserScenariosSection />
        <DetailedFAQSection />
        <IntegrationShowcase />
        <FeaturedBlogSection />
        <EnhancedCTASection />
      </div>
    </>
  );
};

export default HomePage;
