
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { FasterCapitalRequirements } from '@/components/FasterCapitalRequirements';
import { SponsorsSection } from '@/components/SponsorsSection';
import CTASection from '@/components/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <FasterCapitalRequirements />
      <SponsorsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
