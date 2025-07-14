import React, { useEffect } from 'react';
import { SafeComponent } from '@/components/enhanced/SafeComponent';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';
import { ScrollRestoration } from '@/components/ScrollRestoration';
import VerifiedProduct from '@/components/VerifiedProduct';
import { SubscriptionStatus } from '@/components/subscription/SubscriptionStatus';
import { trackPageView } from '@/utils/analytics';
import { SEOHead } from '@/components/seo/SEOHead';
import { getPageMetadata } from '@/utils/seo/metadata';
import { createOrganizationSchema, createWebsiteSchema, createServiceSchema, createLocalBusinessSchema } from '@/utils/seo/structuredData';

const Index = () => {
  const { hash, search } = useLocation();
  const metadata = getPageMetadata('home');

  // Add scroll to top effect
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Track page view when component mounts
  useEffect(() => {
    trackPageView('Home Page');
  }, []);

  // Show verification results when query parameter is present
  const showVerificationResults = search.includes('serialNumber=');

  // Enhanced structured data with multiple schemas
  const structuredData = [
    createOrganizationSchema(),
    createWebsiteSchema(),
    createServiceSchema(),
    createLocalBusinessSchema()
  ];

  return (
    <SafeComponent fallback={<div className="min-h-screen bg-sos">Page unavailable</div>}>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        ogTitle={metadata.ogTitle}
        ogDescription={metadata.ogDescription}
        ogImage={metadata.ogImage}
        structuredData={structuredData}
        robotsDirectives={metadata.robotsDirectives}
        preloadUrls={['/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png']}
      />
      <div className="bg-sos text-white min-h-screen">
        <ScrollRestoration />
        
        <Hero />
        
        {/* Subscription Status Section */}
        <section className="py-12 bg-sos-dark/80 border-y border-sos-orange/20">
          <div className="container mx-auto container-padding">
            <div className="max-w-md mx-auto">
              <SubscriptionStatus />
            </div>
          </div>
        </section>
        
        {showVerificationResults && <VerifiedProduct />}
        
        <HowItWorks />
        
        <Features />
        
        <CTASection />
        
        <Footer />
      </div>
    </SafeComponent>
  );
};

export default Index;