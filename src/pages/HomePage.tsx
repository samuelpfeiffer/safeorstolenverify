
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
import { EnhancedCTASection } from '@/components/cta/EnhancedCTASection';
import { GlobalPerformanceOptimizer } from '@/components/enhanced/GlobalPerformanceOptimizer';
import { PageSEO } from '@/components/seo/PageSEO';
import { GoogleSearchConsoleSetup } from '@/components/seo/GoogleSearchConsoleSetup';
import { GlobalAnalytics } from '@/components/enhanced/GlobalAnalytics';
import { ConversionTracker } from '@/components/ConversionTracker';
import { TrustIndicators } from '@/components/TrustIndicators';
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
      <PageSEO
        title="Don't Get Scammed - Verify Items Before You Buy | SafeOrStolen"
        description="Stop losing money to scams! Check any secondhand item in seconds before buying from Facebook Marketplace, eBay, Craigslist. Join 25,000+ smart buyers who protect their purchases."
        keywords="don't get scammed, protect your purchase, avoid stolen goods, Facebook Marketplace scams, eBay safety, secondhand buyer protection, verify before buying, stolen item checker, marketplace safety"
        canonical="/"
        structuredData={homePageStructuredData}
      />
      <div className="min-h-screen">
        <ConversionTracker />
        <Hero />
        <TrustIndicators />
        <TrustBadgeStrip />
        <Features />
        <TestimonialsSection />
        <FeaturedBlogSection />
        <EnhancedCTASection />
      </div>
    </>
  );
};

export default HomePage;
