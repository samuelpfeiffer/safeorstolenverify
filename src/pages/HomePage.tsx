
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
import RealVerificationCard from '@/components/verification/RealVerificationCard';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="verification-results">
        <RealVerificationCard />
      </div>
      <TestimonialsSection />
      <Features />
      <FeaturedBlogSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
