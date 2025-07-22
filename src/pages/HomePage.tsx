
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CTASection />
    </div>
  );
};

export default HomePage;
