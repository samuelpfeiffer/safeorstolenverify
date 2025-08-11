
import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import VerifiedProduct from '@/components/VerifiedProduct';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';


const Index = () => {
  const [searchParams] = useSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');
  const isCached = searchParams.get('cached') === 'true';

  return (
    <div className="min-h-screen">
      <EnhancedSEOHead 
        title="Check if an item is stolen – Safe or Stolen"
        description="Enter IMEI, VIN, or serial to verify a used item instantly on safeorstolen.com. Check stolen items before you buy."
        keywords="check stolen items, verify its not stolen, check if something is stolen, where to check if something is stolen, can I check if something is stolen before I buy it, how do I check if something used is stolen, verify before you buy, IMEI check, VIN check, serial number check, safeorstolen.com"
        canonical="/"
        additionalSchemas={[{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I check if something is stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Go to safeorstolen.com, enter the IMEI, VIN, or serial number, and run a real-time check against global sources to see if the item is reported stolen or lost." }
            },
            {
              "@type": "Question",
              name: "Where to check if something is stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Use SafeOrStolen.com to verify any IMEI, VIN, or serial number. We aggregate trusted data to confirm if an item is flagged as stolen, lost, or clean." }
            },
            {
              "@type": "Question",
              name: "Can I check if something is stolen before I buy it?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. On safeorstolen.com you can verify the identifier before purchase to avoid buying stolen goods and protect yourself from fraud." }
            },
            {
              "@type": "Question",
              name: "How do I check if something used is stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Enter the device or product identifier on SafeOrStolen.com and get an instant result with a clear stolen/lost status and confidence rating." }
            },
            {
              "@type": "Question",
              name: "How to check stolen items or verify it’s not stolen?",
              acceptedAnswer: { "@type": "Answer", text: "Search the IMEI, VIN, or serial at safeorstolen.com. If the result is clean, you can proceed more confidently; if flagged, avoid the purchase and report it." }
            },
            {
              "@type": "Question",
              name: "I bought a used item and want to see if it’s legitimate. Should I buy this or not?",
              acceptedAnswer: { "@type": "Answer", text: "Run a check on safeorstolen.com. If marked stolen or suspicious, do not buy and contact the seller/marketplace. If clean, keep proof of your check for your records." }
            }
          ]
        }]}
      />
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
