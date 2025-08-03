
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { FasterCapitalRequirements } from '@/components/FasterCapitalRequirements';
import { SponsorsSection } from '@/components/SponsorsSection';
import CTASection from '@/components/CTASection';
import { BackendVerificationCard } from '@/components/verification/BackendVerificationCard';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <BackendVerificationCard />
        </div>
      </div>
      <Features />
      <FasterCapitalRequirements />
      <SponsorsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
