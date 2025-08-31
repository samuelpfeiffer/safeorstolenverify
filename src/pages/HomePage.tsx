
import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, Monitor, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import { PageSEO } from '@/components/seo/PageSEO';
import { GoogleSearchConsoleSetup } from '@/components/seo/GoogleSearchConsoleSetup';
import { GlobalAnalytics } from '@/components/enhanced/GlobalAnalytics';
import { ConversionTracker } from '@/components/ConversionTracker';

// Lazy load heavy components for better performance
const Features = lazy(() => import('@/components/Features'));
const TestimonialsSection = lazy(() => import('@/components/testimonials/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FeaturedBlogSection = lazy(() => import('@/components/blog/FeaturedBlogSection').then(m => ({ default: m.FeaturedBlogSection })));
const EnhancedCTASection = lazy(() => import('@/components/cta/EnhancedCTASection').then(m => ({ default: m.EnhancedCTASection })));
const GlobalPerformanceOptimizer = lazy(() => import('@/components/enhanced/GlobalPerformanceOptimizer').then(m => ({ default: m.GlobalPerformanceOptimizer })));
const TrustIndicators = lazy(() => import('@/components/TrustIndicators').then(m => ({ default: m.TrustIndicators })));
const TrustBadgeStrip = lazy(() => import('@/components/trust/TrustBadgeStrip').then(m => ({ default: m.TrustBadgeStrip })));
const AudienceNavigation = lazy(() => import('@/components/hero/AudienceNavigation').then(m => ({ default: m.AudienceNavigation })));
const ValuePropositionSections = lazy(() => import('@/components/hero/ValuePropositionSections').then(m => ({ default: m.ValuePropositionSections })));
const TrustBuildingFAQ = lazy(() => import('@/components/trust/TrustBuildingFAQ').then(m => ({ default: m.TrustBuildingFAQ })));

// Loading component for lazy loaded sections
const SectionLoader = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-sos-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
        "Electronics verification (IMEI, serial numbers)",
        "Vehicle VIN stolen check", 
        "Firearms serial number lookup",
        "Art & collectibles verification",
        "Jewelry & watches authentication",
        "Tools & machinery checks",
        "Gaming equipment verification",
        "Real-time database searches",
        "Enterprise API integration",
        "Bulk verification processing"
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
      <Suspense fallback={null}>
        <GlobalPerformanceOptimizer />
      </Suspense>
      <GlobalAnalytics />
      <GoogleSearchConsoleSetup />
      <PageSEO
        title="Global Verification Hub - Check Any Valuable Item | SafeOrStolen"
        description="The go-to platform for verifying electronics, vehicles, firearms, art, jewelry, tools & more in real-time. For auction houses, pawn shops, resellers, law enforcement & everyone using eBay, Craigslist, Facebook Marketplace."
        keywords="stolen item checker, verify electronics, check VIN, IMEI lookup, art verification, firearm check, auction house verification, pawn shop compliance, reseller tools, marketplace safety, stolen goods database"
        canonical="/"
        structuredData={homePageStructuredData}
      />
      <div className="min-h-screen">
        <ConversionTracker />
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <AudienceNavigation />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ValuePropositionSections />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TrustIndicators />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TrustBadgeStrip />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TrustBuildingFAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        
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
                Safety is a community effort. We've built free tools to help everyone fight fraud. 
                Become a part of the SafeOrStolen community watch and help protect buyers everywhere.
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
        
        <Suspense fallback={<SectionLoader />}>
          <FeaturedBlogSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EnhancedCTASection />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
