
import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';


const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  const isCached = searchParams.get('cached') === 'true';

  return (
    <div className="min-h-screen">
      <EnhancedSEOHead 
        title="Safe or Stolen - Real-time Stolen Goods Verification"
        description="Verify IMEI, VIN, or serial numbers in seconds. Protect your purchases with real-time stolen goods checks."
        canonical="/"
      />
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

    </div>
  );
};

export default Index;
