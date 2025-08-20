
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
import RealVerificationCard from '@/components/verification/RealVerificationCard';
import { IntegrationShowcase } from '@/components/integration/IntegrationShowcase';
import { EnhancedCTASection } from '@/components/cta/EnhancedCTASection';
import { ContentClaritySection } from '@/components/content/ContentClaritySection';
import { EnhancedPageSEO } from '@/components/seo/EnhancedPageSEO';

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
      <EnhancedPageSEO 
        title="Safe or Stolen - Check if IMEI, Serial Numbers & VIN are Stolen | Free Verification Tool"
        description="Instantly verify if phones (IMEI), cars (VIN), bikes, electronics are stolen before buying. Free stolen goods checker. Protect yourself from marketplace fraud."
        keywords="check if stolen, IMEI check stolen, VIN stolen lookup, serial number verification, stolen goods check, verify before you buy, marketplace safety, fraud prevention"
        image="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
        type="website"
        structuredData={homePageStructuredData}
        breadcrumbPath={[
          { name: "Home", url: "/" }
        ]}
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
