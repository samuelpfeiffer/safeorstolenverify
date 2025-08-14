
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
import RealVerificationCard from '@/components/verification/RealVerificationCard';
import { IntegrationShowcase } from '@/components/integration/IntegrationShowcase';
import { EnhancedCTASection } from '@/components/cta/EnhancedCTASection';
import { ContentClaritySection } from '@/components/content/ContentClaritySection';

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
