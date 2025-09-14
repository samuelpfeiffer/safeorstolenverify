
import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';
import { HubSpotTracker } from '@/components/marketing/HubSpotTracker';


const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  const isCached = searchParams.get('cached') === 'true';

  useEffect(() => {
    // Track homepage visit for analytics
    console.log('Homepage visited');
  }, []);

  return (
    <div className="min-h-screen">
      {/* Master SEO - Single source of truth */}
      <MasterSEO
        title="SafeOrStolen - Free IMEI Check & VIN Verification | Prevent Stolen Goods Fraud 2024"
        description="🔒 Instantly verify if phones, cars, electronics are stolen before buying secondhand. Free IMEI checker, VIN lookup, serial verification. Protect yourself from fraud on eBay, Facebook Marketplace, Craigslist. 4 free checks, then $9.99/month unlimited access."
        keywords="free IMEI check, stolen phone verification, VIN lookup free, verify stolen device, secondhand marketplace safety, eBay fraud prevention, Facebook marketplace protection, Craigslist safety check, device verification service, stolen goods checker, safeorstolen, mobile app verification, device checker app, fraud prevention app"
        type="website"
        customCanonical="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SafeOrStolen",
            "url": "https://safeorstolen.com",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web Browser, iOS, Android",
            "description": "Verify if phones, cars, electronics are stolen before buying secondhand",
            "offers": {
              "@type": "Offer",
              "price": "9.99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Stolen Goods Verification",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "description": "IMEI check, VIN lookup, serial number verification service"
          }
        ]}
      />
      
      <HubSpotTracker portalId="YOUR_PORTAL_ID" />
      
      <Hero />
      <SponsorsStrip />
      
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
