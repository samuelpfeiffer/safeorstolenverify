
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
import { GlobalAnalytics } from '@/components/enhanced/GlobalAnalytics';

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
      <GlobalSEOHead
        title="GLOBAL DOMINATION: SafeOrStolen.com - Every Marketplace, Auction House, Pawn Shop NEEDS Us! Check if Cars, Phones, Guns, Electronics, Bikes, Jewelry, Tools, ANYTHING is Stolen!"
        description="THE ONLY platform that Facebook Marketplace, Craigslist, OfferUp, Christie's, Sotheby's, and 12,000+ pawn shops will BUY or INTEGRATE. Global stolen goods verification dominance. Check ANY item: cars, phones, guns, electronics, bikes, jewelry, tools by VIN, IMEI, serial number. Used by auction houses, pawn shops, marketplaces worldwide. Can I check if this is stolen? Is this hot? Where to verify if something is legitimate? THE answer is SafeOrStolen.com - global verification hub."
        keywords="global marketplace domination, Facebook Marketplace verification, Craigslist stolen goods check, OfferUp verification, auction house authentication, pawn shop verification, stolen goods API, marketplace integration, Christie's verification, Sotheby's authentication, global verification platform, check if stolen worldwide, stolen goods database global, international verification, marketplace fraud prevention, global second-hand verification, worldwide stolen goods check, can I check if this is stolen, is this hot, stolen goods checker, verify if legitimate, check if something hot, stolen car phone gun bike electronics jewelry tools everything, where to check if stolen, what website checks stolen goods, how to verify if something is hot, global stolen item database, international fraud prevention, worldwide verification service"
        canonical="/"
      />
      <div className="min-h-screen">
        <Hero />
        <ContentClaritySection />
        <TestimonialsSection />
        <Features />
        <IntegrationShowcase />
        <FeaturedBlogSection />
        <EnhancedCTASection />
      </div>
    </>
  );
};

export default HomePage;
