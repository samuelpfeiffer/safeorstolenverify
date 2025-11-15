import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import { RebuildHero } from '@/components/home/RebuildHero';
import { BillboardSection } from '@/components/home/BillboardSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { HowItWorksSteps } from '@/components/home/HowItWorksSteps';
import { WhatWeCheck } from '@/components/home/WhatWeCheck';
import { CompetitiveAdvantageTable } from '@/components/home/CompetitiveAdvantageTable';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { ConversionOptimizedPricing } from '@/components/ConversionOptimizedPricing';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';
import { PageSEO } from '@/components/seo/PageSEO';
import { EnhancedFAQSection } from '@/components/home/EnhancedFAQSection';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';

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
        title="SafeOrStolen - Verify Phones, Cars & Electronics Aren't Stolen | Free IMEI VIN Serial Check"
        description="Don't get scammed on Facebook Marketplace. Verify phones (IMEI), cars (VIN), and electronics (serial numbers) aren't stolen before buying. Mobile verification app with instant results. Backed by FasterCapital. Try free."
        keywords="stolen goods checker, IMEI verification, VIN check, serial number lookup, Facebook Marketplace safety, OfferUp verification, secondhand market protection, verify before buying, mobile verification app, stolen phone check, stolen car check"
        canonical="/"
        structuredData={homeStructuredData}
      />
      
      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* New Hero Section */}
        <RebuildHero />
        
        {/* Billboard Campaign Section */}
        <BillboardSection />
        
        {/* Problem Section */}
        <ProblemSection />
        
        {/* How It Works Steps */}
        <HowItWorksSteps />
        
        {/* What We Check */}
        <WhatWeCheck />
        
        {/* Competitive Advantage */}
        <CompetitiveAdvantageTable />
        
        {/* Pricing Section */}
        <div className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ConversionOptimizedPricing onSubscribe={() => {}} />
          </div>
        </div>
        
        {/* Use Cases */}
        <UseCasesSection />
        
        {/* Social Proof with Testimonials */}
        <SocialProofSection />
        
        {/* App Download CTA */}
        <AppDownloadSection />
        
        {/* FAQ Section */}
        <EnhancedFAQSection />
      </div>
    </>
  );
};

export default Index;