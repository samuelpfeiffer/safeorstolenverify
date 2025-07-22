
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
