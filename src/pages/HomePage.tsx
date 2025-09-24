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
import { InternalLinkingSchema } from '@/components/seo/InternalLinkingSchema';
import { SEOAuditComponent } from '@/components/seo/SEOAuditComponent';
import { AuthDebug } from '@/components/debug/AuthDebug';
import { PaymentSystemDebug } from '@/components/debug/PaymentSystemDebug';
import { EnhancedSEOContent } from '@/components/seo/EnhancedSEOContent';
import { OptimizedTitles } from '@/components/seo/OptimizedTitles';
import { SiteNavigationOptimizer } from '@/components/seo/SiteNavigationOptimizer';
import { ComprehensiveFAQ } from '@/components/seo/ComprehensiveFAQ';
const HomePage = () => {
  const navigate = useNavigate();
  const homePageStructuredData = [{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SafeOrStolen - Stolen Item Checker",
    "alternateName": "Safe or Stolen",
    "url": "https://safeorstolen.com",
    "description": "Global hub for secondhand market safety - protect both buyers and sellers by verifying IMEI, VIN, and serial numbers against stolen goods databases",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://safeorstolen.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": ["https://safeorstolen.com"]
  }, {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SafeOrStolen Stolen Item Checker",
    "description": "Global hub for secondhand market safety - verify IMEI, serial numbers, and VIN to protect both buyers and sellers from stolen goods risks",
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
    "featureList": ["IMEI stolen check", "VIN stolen verification", "Serial number stolen lookup", "Phone stolen check", "Car stolen verification", "Electronics stolen check"]
  }, {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stolen Item Checker Service",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "description": "Complete stolen item verification service protecting both buyers and sellers in secondhand transactions",
    "serviceType": "Verification Service",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }];
  return <>
      <StatusCodeHandler statusCode={200} canonical="https://safeorstolen.com/" />
      <InternalLinkingSchema />
      <SEOAuditComponent />
      <ImageOptimizer>
        <GlobalPerformanceOptimizer />
        <GlobalAnalytics />
        <GoogleSearchConsoleSetup />
        <OptimizedTitles pageType="home" />
        <PageSEO title="Protect Buyers & Sellers - Global Verification Hub | SafeOrStolen" description="Global hub protecting both buyers and sellers in secondhand markets. Verify IMEI, VIN & serial numbers to safely buy and resell items - avoid legal trouble from stolen goods." keywords="buyer seller protection, secondhand market safety, verify before buying, verify before selling, IMEI VIN check, stolen goods verification, resale protection, marketplace safety" canonical="/" structuredData={homePageStructuredData} />
        <div className="min-h-screen">
          <ConversionTracker />
          <Hero />
          
          {/* Main Features Section */}
          <Features />
          
          {/* Content moved to expandable sections below */}
          <div className="py-16 space-y-16">
            {/* Quick Access - Condensed */}
            <section className="py-8 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Verification Tools</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Protect yourself as both buyer and seller in the secondhand market</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  <Button variant="outline" onClick={() => navigate('/imei-check')}>
                    IMEI Phone Check
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/vin-verification')}>
                    VIN Car Check
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/serial-number-checker')}>
                    Serial Number Check
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/stolen-item-checker')}>
                    General Item Check
                  </Button>
                </div>
              </div>
            </section>
            
            {/* Testimonials */}
            <TestimonialsSection />
            
            {/* Trust and Community - Simplified */}
            <section className="py-8 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  
                  
                  <div className="flex justify-center gap-4">
                    <TrustIndicators />
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Below-fold content - collapsed/organized */}
          <div className="space-y-8">
            <SiteNavigationOptimizer />
            <TrustBuildingFAQ />
            <ComprehensiveFAQ pageType="home" maxItems={6} />
            <FeaturedBlogSection />
            <EnhancedCTASection />
          </div>
        </div>
      </ImageOptimizer>
    </>;
};
export default HomePage;