import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { FounderStory } from '@/components/story/FounderStory';
import { SuccessStories } from '@/components/story/SuccessStories';
import { MarketplacePartners } from '@/components/marketplace/MarketplacePartners';
import { ItemRegistration } from '@/components/registration/ItemRegistration';
import { HighImpactFAQ } from '@/components/seo/HighImpactFAQ';

const FeaturesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen Mobile App",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "SecurityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen Mobile App Features - IMEI, VIN & Serial Number Verification"
        description="Download the SafeOrStolen mobile app for iOS & Android. Features include instant IMEI verification, VIN checks, serial number lookup, barcode scanning, and offline verification. The only app buyers and sellers need for secondhand safety."
        keywords="stolen item app features, IMEI checker app, VIN verification mobile app, serial number scanner, marketplace safety app, download verification app, anti-fraud app features, mobile stolen checker"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                SafeOrStolen Mobile App Features
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The world's only mobile app for instant stolen item verification. Download for iOS & Android to check IMEI, VIN, and serial numbers on-the-go. Protect yourself when buying or selling secondhand items.
              </p>
            </div>
          </div>
        </section>

        <ItemRegistration />
        <MarketplacePartners />
        
        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <HighImpactFAQ />
          </div>
        </section>
        
        <SuccessStories />
        <FounderStory />
      </div>
    </>
  );
};

export default FeaturesPage;
