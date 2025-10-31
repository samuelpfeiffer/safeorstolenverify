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

const Index = () => {
  const [searchParams] = useSafeSearchParams();
  const verificationId = searchParams.get('verificationId');
  const serialNumber = searchParams.get('serialNumber');

  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen - Free Stolen Item Checker",
      "alternateName": "Safe or Stolen",
      "url": "https://safeorstolen.com",
      "description": "Free stolen item verification platform. Check phones, cars, electronics using IMEI, VIN, serial numbers. 4 free searches, 50M+ database records.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Verification App",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": ["iOS", "Android", "Web"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "12500"
      }
    }
  ];

  return (
    <>
      {/* SEO Optimization */}
      <PageSEO
        title="Free Stolen Item Checker - Verify IMEI, VIN, Serial Numbers | SafeOrStolen"
        description="Check if items are stolen before buying. Free IMEI, VIN, serial number verification. Protect yourself from purchasing stolen phones, cars, electronics. 4 FREE searches."
        keywords="free stolen item checker, IMEI check, VIN verification, serial number lookup, verify phone stolen, check car stolen, stolen goods database"
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