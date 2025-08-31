import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, Monitor, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import { PageSEO } from '@/components/seo/PageSEO';
import { ConversionTracker } from '@/components/ConversionTracker';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
import { SponsorsStrip } from '@/components/marketing/SponsorsStrip';

// Lazy load components for better performance
const Features = lazy(() => import('@/components/Features'));
const TestimonialsSection = lazy(() => import('@/components/testimonials/TestimonialsSection').then(m => ({
  default: m.TestimonialsSection
})));
const FeaturedBlogSection = lazy(() => import('@/components/blog/FeaturedBlogSection').then(m => ({
  default: m.FeaturedBlogSection
})));
const EnhancedCTASection = lazy(() => import('@/components/cta/EnhancedCTASection').then(m => ({
  default: m.EnhancedCTASection
})));

// Loading component for lazy loaded sections
const SectionLoader = () => <div className="h-32 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-sos-orange border-t-transparent rounded-full animate-spin"></div>
  </div>;
const HomePage = () => {
  const navigate = useNavigate();
  const homePageStructuredData = [{
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
    "sameAs": ["https://safeorstolen.com"]
  }, {
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
    "featureList": ["Electronics verification (IMEI, serial numbers)", "Vehicle VIN stolen check", "Firearms serial number lookup", "Art & collectibles verification", "Jewelry & watches authentication", "Tools & machinery checks", "Gaming equipment verification", "Real-time database searches", "Enterprise API integration", "Bulk verification processing"]
  }, {
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
  }];
  return <>
      <PageSEO title="Free Stolen Item Checker | SafeOrStolen - Verify Before You Buy" description="Check if electronics, vehicles, firearms & valuables are stolen before buying. Free IMEI, VIN & serial number verification against police databases worldwide." keywords="stolen item checker, IMEI checker, VIN checker, serial number verification, stolen goods database, free verification tool" canonical="/" structuredData={homePageStructuredData} />
      <div className="min-h-screen">
        <ConversionTracker />
        <Hero />
        
        {/* FasterCapital Partnership Section */}
        
        
        {/* Sponsors & Partners */}
        <SponsorsStrip />
        
        {/* Features Section */}
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        
        {/* Protection Information Section */}
        <section className="py-16 bg-gradient-to-r from-sos-dark/10 to-sos-orange/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Protecting Everyone in the Second-Hand Market
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  SafeOrStolen provides comprehensive protection for all participants in the second-hand marketplace
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* For Buyers */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
                  <div className="bg-sos-lime/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-sos-lime" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-card-foreground">For Buyers</h3>
                  <p className="text-muted-foreground mb-4">
                    Avoid purchasing stolen goods with our comprehensive verification system
                  </p>
                  <ul className="text-sm text-muted-foreground text-left space-y-2">
                    <li>• Legal protection from unknowingly buying stolen items</li>
                    <li>• Real-time database searches</li>
                    <li>• Peace of mind with every purchase</li>
                    <li>• Free verification checks</li>
                  </ul>
                </div>
                
                {/* For Sellers */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
                  <div className="bg-sos-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-sos-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-card-foreground">For Sellers</h3>
                  <p className="text-muted-foreground mb-4">
                    Build trust with buyers by providing verification certificates
                  </p>
                  <ul className="text-sm text-muted-foreground text-left space-y-2">
                    <li>• Verify items before listing</li>
                    <li>• Provide certificates to buyers</li>
                    <li>• Increase sale prices with verified items</li>
                    <li>• Build reputation as trusted seller</li>
                  </ul>
                </div>
                
                {/* For Businesses */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-card-foreground">For Businesses</h3>
                  <p className="text-muted-foreground mb-4">
                    Enterprise solutions for pawn shops, auction houses, and retailers
                  </p>
                  <ul className="text-sm text-muted-foreground text-left space-y-2">
                    <li>• Bulk verification API</li>
                    <li>• Due diligence compliance</li>
                    <li>• Reduce liability and legal risks</li>
                    <li>• Integration with existing systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
                <Button size="lg" className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold" onClick={() => navigate('/community-watch')}>
                  <Shield className="mr-2 h-5 w-5" />
                  See Community Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/for-brands')}>
                  <Monitor className="mr-2 h-5 w-5" />
                  Business Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        
        {/* Blog Section */}
        <Suspense fallback={<SectionLoader />}>
          <FeaturedBlogSection />
        </Suspense>
        
        {/* CTA Section */}
        <Suspense fallback={<SectionLoader />}>
          <EnhancedCTASection />
        </Suspense>
      </div>
    </>;
};
export default HomePage;