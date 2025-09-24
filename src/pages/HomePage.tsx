import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, Monitor, ArrowRight, Smartphone, BarChart3, QrCode, ShieldCheck } from 'lucide-react';
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
import HotGunzWidget from '@/components/integrations/HotGunzWidget';
import { AppDownloadBot } from '@/components/pwa/AppDownloadBot';
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
          <AppDownloadBot />
          <Hero />
          
          {/* Main Features Section */}
          <Features />

          {/* Stolen Guns Check Banner - Redesigned */}
          <section className="py-5 bg-gradient-to-br from-red-900 via-red-800 to-orange-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/50 text-red-100 text-xs font-medium mb-2">
                    <Shield className="h-3 w-3" />
                    Firearms Verification
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    🔫 Stolen Firearms Database
                  </h2>
                  <p className="text-sm text-red-100 max-w-2xl mx-auto leading-relaxed">
                    Before buying or selling any firearm, verify it's not stolen. Protect yourself from legal trouble and help law enforcement recover stolen weapons.
                  </p>
                </div>
                <div className="modern-card bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl p-2">
                  <HotGunzWidget style="style4" height={105} />
                </div>
              </div>
            </div>
          </section>

          {/* Safe Or Stolen - Mission & Protection */}
          <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  Our Mission
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                  Safe Or Stolen
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Trusted by thousands worldwide. Our goal is to protect buyers and sellers from financial 
                  loss and legal risks when dealing with second-hand goods. Prior to purchasing or selling 
                  any used item, check if it is listed as lost, stolen, or safe to handle. Verify the 
                  legitimacy before any transaction - because undercover law enforcement regularly monitors 
                  online marketplaces for stolen goods being resold.
                </p>
              </div>
            </div>
          </section>
          
          {/* Quick Access - Modern Design */}
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Verification Tools</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Protect yourself as both buyer and seller in the secondhand market
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-20 text-lg font-semibold hover-lift modern-card border-2"
                  onClick={() => navigate('/imei-check')}
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  IMEI Phone Check
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-20 text-lg font-semibold hover-lift modern-card border-2"
                  onClick={() => navigate('/vin-verification')}
                >
                  <BarChart3 className="mr-2 h-5 w-5" />
                  VIN Car Check
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-20 text-lg font-semibold hover-lift modern-card border-2"
                  onClick={() => navigate('/serial-number-checker')}
                >
                  <QrCode className="mr-2 h-5 w-5" />
                  Serial Number
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-20 text-lg font-semibold hover-lift modern-card border-2"
                  onClick={() => navigate('/stolen-item-checker')}
                >
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  General Check
                </Button>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <TestimonialsSection />
          
          {/* Trust Indicators */}
          <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <TrustIndicators />
              </div>
            </div>
          </section>
          
          {/* Below-fold content - organized */}
          <div className="space-y-12">
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