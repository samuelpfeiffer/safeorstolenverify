
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, Monitor, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FeaturedBlogSection } from '@/components/blog/FeaturedBlogSection';
import { EnhancedCTASection } from '@/components/cta/EnhancedCTASection';
import { ImageOptimizer } from '@/components/enhanced/ImageOptimizer';
import { GlobalPerformanceOptimizer } from '@/components/enhanced/GlobalPerformanceOptimizer';
import { PageSEO } from '@/components/seo/PageSEO';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';
import { GoogleSearchConsoleSetup } from '@/components/seo/GoogleSearchConsoleSetup';
import { GlobalAnalytics } from '@/components/enhanced/GlobalAnalytics';
import { ConversionTracker } from '@/components/ConversionTracker';
import { TrustIndicators } from '@/components/TrustIndicators';
import { TrustBadgeStrip } from '@/components/trust/TrustBadgeStrip';
import { AudienceNavigation } from '@/components/hero/AudienceNavigation';
import { ValuePropositionSections } from '@/components/hero/ValuePropositionSections';
import { MobileBenefitsSection } from '@/components/mobile/MobileBenefitsSection';
import { TrustBuildingFAQ } from '@/components/trust/TrustBuildingFAQ';

const HomePage = () => {
  const navigate = useNavigate();
  const homePageStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen - Stolen Item Checker",
      "alternateName": "Safe or Stolen",
      "url": "https://safeorstolen.com",
      "description": "Free online stolen item checker tool to verify IMEI, VIN, and serial numbers against police databases before buying secondhand items",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://safeorstolen.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "SafeOrStolen Stolen Item Checker",
      "description": "Free online stolen item checker - verify IMEI, serial numbers, and VIN against stolen goods databases instantly",
      "url": "https://safeorstolen.com",
      "applicationCategory": "SecurityApplication",
      "applicationSubCategory": "Verification Tool",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Chrome, Firefox, Safari, Edge",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free stolen item checking service"
      },
      "featureList": [
        "IMEI stolen check",
        "VIN stolen verification", 
        "Serial number stolen lookup",
        "Phone stolen check",
        "Car stolen verification",
        "Electronics stolen check"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stolen Item Checker Service",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "description": "Professional stolen item checking service for consumers buying secondhand goods",
      "serviceType": "Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ];

  return (
    <>
      <StatusCodeHandler statusCode={200} canonical="https://safeorstolen.com/" />
      <ImageOptimizer>
        <GlobalPerformanceOptimizer />
        <GlobalAnalytics />
        <GoogleSearchConsoleSetup />
        <PageSEO
          title="Stolen Item Lookup | Free IMEI Checker, VIN Check & Serial Number Verification"
          description="Free stolen item check database. Search stolen items, verify IMEI, VIN numbers & serial numbers. Best alternative to CheckMEND, Stolen 911 - track lost property instantly."
          keywords="stolen item lookup, stolen item check, find stolen property, report stolen items, search stolen database, online stolen items search, IMEI checker, VIN check, ESN checker, blacklist check, device authenticity check, free IMEI check"
          canonical="/"
          structuredData={homePageStructuredData}
        />
        <div className="min-h-screen">
          <ConversionTracker />
          <Hero />
          <AudienceNavigation />
          <ValuePropositionSections />
          <TrustIndicators />
          <TrustBadgeStrip />
          <TrustBuildingFAQ />
          <Features />
          <MobileBenefitsSection />
          <TestimonialsSection />
          
          {/* Community Movement Section */}
          <section className="py-16 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-sos-lime/10 p-4 rounded-full">
                    <Users className="h-12 w-12 text-sos-lime" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Join the Movement
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                   Safety is a community effort. We've built free tools to help protect both buyers and sellers. 
                   Become a part of the SafeOrStolen community and help make secondhand transactions safer for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold"
                    onClick={() => navigate('/community-watch')}
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    See Community Tools
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => navigate('/social-media-monitoring')}
                  >
                    <Monitor className="mr-2 h-5 w-5" />
                    Social Monitoring
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          <FeaturedBlogSection />
          <EnhancedCTASection />
        </div>
      </ImageOptimizer>
    </>
  );
};

export default HomePage;
