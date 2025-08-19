
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
import RealVerificationCard from '@/components/verification/RealVerificationCard';
import { IntegrationShowcase } from '@/components/integration/IntegrationShowcase';
import { EnhancedCTASection } from '@/components/cta/EnhancedCTASection';
import { ContentClaritySection } from '@/components/content/ContentClaritySection';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';

const HomePage = () => {
  const structuredData = {
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
  };

  return (
    <>
      <EnhancedSEOHead 
        title="Safe or Stolen - Global IMEI, Serial Number & VIN Verification"
        description="Verify IMEI, serial numbers, and VIN instantly. Check if phones, cars, bikes, electronics are stolen before buying. Global database protection."
        canonical="/"
        additionalSchemas={[structuredData]}
      />
      <div className="min-h-screen">
        <Hero />
        <div id="verification-results">
          <RealVerificationCard />
        </div>
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
