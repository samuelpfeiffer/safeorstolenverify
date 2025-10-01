import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { UnifiedSEOOptimizer } from '@/components/seo/UnifiedSEOOptimizer';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { HighImpactFAQ } from '@/components/seo/HighImpactFAQ';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';
import { getHomePageStructuredData } from '@/components/home/HomeStructuredData';

const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  return (
    <>
      <UnifiedSEOOptimizer
        title="IMEI, VIN, and Serial Number Checker – SafeOrStolen Mobile App"
        description="Download the SafeOrStolen app for instant stolen item verification. Check IMEI, VIN, and serial numbers to protect buyers and sellers."
        keywords="verify stolen item, IMEI checker app, VIN check app, serial number check, stolen goods database, check if phone is stolen"
        canonical="/"
        structuredData={getHomePageStructuredData()}
        competitiveKeywords="homepage"
        priorityLevel="max"
        aiOptimized={true}
        type="website"
      />
      
      <div className="min-h-screen">
        <Hero />
        <AppDownloadSection />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <TestimonialsSection />
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <HighImpactFAQ />
          </div>
        </section>
        
        {(verificationId || serialNumber) && (
          <Suspense fallback={
            <div className="py-20 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Loading verification results...</p>
            </div>
          }>
            <VerifiedProduct />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default Index;