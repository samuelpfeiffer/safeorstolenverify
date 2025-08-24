
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

const HomePage = () => {
  const homePageStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Safe or Stolen",
      "url": "https://safeorstolen.com",
      "description": "Global verification service for IMEI, serial numbers, and VIN to check if items are stolen or safe to buy",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Safe or Stolen Verification Tool",
      "description": "Free online tool to check if IMEI, serial numbers, and VIN are stolen",
      "url": "https://safeorstolen.com",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Web Browser",
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
        title="Stolen Item Checker | Safe Or Stolen - Verify IMEI, VIN, Serial Numbers"
        description="Check if something is stolen before you buy. Instant IMEI, VIN, and serial number verification against police databases. Free searches available. Protect yourself from fraud."
        keywords="how to check if something is stolen, stolen item checker, IMEI stolen check, VIN stolen verification, check phone stolen, verify before you buy, stolen goods database, marketplace safety, secondhand verification, avoid stolen goods, is my phone stolen, car stolen check, electronics verification, Facebook marketplace safety, unknowingly bought stolen goods, stolen item database, serial number verification, prevent fraud buying used, police stolen database, consumer protection"
        canonical="/"
      />
      <div className="min-h-screen">
        <Hero />
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
