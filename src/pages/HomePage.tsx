
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
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
        title="Can I Check if This is Stolen? Free Way to Check if Something is Hot"
        description="Can I check if this car/phone/bike is stolen? What website can I use to see if something is hot? Free stolen goods checker - verify before you buy."
        keywords="can I check if this is stolen, is there a way to find out if this is hot, what website can I check if something stolen, how do I know if this is stolen, free way to check stolen"
        image="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
        type="website"
        structuredData={homePageStructuredData}
        breadcrumbPath={[
          { name: "Home", url: "/" }
        ]}
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
