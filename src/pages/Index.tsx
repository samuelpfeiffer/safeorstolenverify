import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';
import { PageSEO } from '@/components/seo/PageSEO';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TrustSignalsSection } from '@/components/home/TrustSignalsSection';
import { EnhancedFAQSection } from '@/components/home/EnhancedFAQSection';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { SecurityBadges } from '@/components/home/SecurityBadges';
import { LiveActivityFeed } from '@/components/home/LiveActivityFeed';
import { HomepagePWABanner } from '@/components/pwa/HomepagePWABanner';

const Index = () => {
  const [searchParams] = useSafeSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen - Free Stolen Item Checker",
      "alternateName": ["Safe or Stolen", "SafeOrStolen Verification", "Stolen Item Checker"],
      "url": "https://safeorstolen.com",
      "description": "Free stolen item verification platform. Check phones, cars, electronics using IMEI, VIN, serial numbers. 2 free searches (14-day trial), 50M+ database records.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://safeorstolen.com/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://www.facebook.com/safeorstolen",
        "https://twitter.com/safeorstolen",
        "https://www.linkedin.com/company/safeorstolen"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "description": "Leading stolen item verification platform protecting buyers and sellers worldwide",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-888-SAFE-CHECK",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": ["English"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Verification App",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": ["iOS", "Android", "Web"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://safeorstolen.com/pricing"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stolen Item Verification Service",
      "description": "Free verification service to check if items are stolen using IMEI, VIN, or serial numbers",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://safeorstolen.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com/"
      }]
    }
  ];

  return (
    <>
      {/* SEO Optimization */}
      <PageSEO
        title="Free Stolen Item Checker - Verify IMEI, VIN, Serial Numbers Instantly | SafeOrStolen"
        description="Check if phones, cars, electronics are stolen FREE. Instant IMEI, VIN, serial number verification against 50M+ stolen item records. Mobile app available. Protect buyers & sellers. 2 FREE searches (14-day trial)."
        keywords="free stolen item checker, IMEI check, VIN verification, serial number lookup, verify phone stolen, check car stolen, stolen goods database, buy used safely, secondhand marketplace verification, prevent buying stolen items"
        canonical="/"
        structuredData={homeStructuredData}
      />
      
      {/* Core SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      
      {/* Trust header bar */}
      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* Hero with search bar - THE CORE VALUE */}
        <Hero />
        
        {/* Trust signals immediately */}
        <TrustSignalsSection />
        
        {/* PWA Install Banner - Prominent placement */}
        <div className="container mx-auto px-4 py-8">
          <HomepagePWABanner />
        </div>
        
        {/* Live Activity Feed - Shows real-time verifications */}
        <div className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Join Thousands Verifying Right Now
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real-time verification activity from our community
                </p>
              </div>
              <LiveActivityFeed />
            </div>
          </div>
        </div>
        
        {/* Security Badges */}
        <SecurityBadges />
        
        {/* Simple how it works */}
        <HowItWorks />
        
        {/* Social proof */}
        <TestimonialsSection />
        
        {/* Simple CTA */}
        <AppDownloadSection />
        
        {/* FAQ Section */}
        <EnhancedFAQSection />
      </div>
    </>
  );
};

export default Index;