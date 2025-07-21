
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TopNavigation from '@/components/TopNavigation';
import VerifiedProduct from '@/components/VerifiedProduct';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  const isCached = searchParams.get('cached') === 'true';

  return (
    <div className="min-h-screen bg-sos text-white">
      <TopNavigation />
      
      <Hero />
      
      {(verificationId || serialNumber) && (
        <Suspense fallback={
          <div className="py-20 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto mb-4"></div>
            <p>Loading verification results...</p>
          </div>
        }>
          <VerifiedProduct />
        </Suspense>
      )}
      
      <Features />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
