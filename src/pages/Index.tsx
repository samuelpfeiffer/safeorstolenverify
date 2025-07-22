
import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { FasterCapitalRequirements } from '@/components/FasterCapitalRequirements';
import { SponsorsSection } from '@/components/SponsorsSection';
import CTASection from '@/components/CTASection';
import VerifiedProduct from '@/components/VerifiedProduct';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  const isCached = searchParams.get('cached') === 'true';

  return (
    <div className="min-h-screen">
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
      
      {/* Only show the full homepage content when not showing verification results */}
      {!verificationId && !serialNumber && (
        <>
          <Features />
          <FasterCapitalRequirements />
          <SponsorsSection />
          <CTASection />
        </>
      )}
    </div>
  );
};

export default Index;
