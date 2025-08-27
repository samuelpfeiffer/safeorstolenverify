
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
        title="Stolen Item Checker - Free Online Tool to Check if Something is Stolen | SafeOrStolen"
        description="Free verification tool to check if secondhand items are stolen before you buy. Verify IMEI, VIN, serial numbers against databases. Protect yourself when buying used goods from Facebook Marketplace, eBay, Craigslist."
        keywords="check if stolen before buying, verify secondhand items, Facebook Marketplace stolen check, eBay stolen goods verification, Craigslist safety check, used item verification, IMEI stolen check, VIN stolen verification, serial number check, secondhand buyer protection, avoid buying stolen goods, marketplace safety"
        canonical="/"
        structuredData={homePageStructuredData}
      />
      <div className="min-h-screen">
        <Hero />
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
