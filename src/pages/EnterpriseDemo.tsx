import { EnterpriseDemo } from '@/components/enhanced/EnterpriseDemo';
import { PageSEO } from '@/components/seo/PageSEO';

export default function EnterpriseDemoPage() {
  return (
    <div className="bg-sos min-h-screen">
      <SEOHead 
        title="Enterprise API Demo - Live Verification Testing | Safe Or Stolen"
        description="Experience the power of Safe Or Stolen's Enterprise API with real-time batch verification, advanced analytics, and comprehensive stolen goods detection. Try our live demo."
        keywords="enterprise API demo, batch verification, stolen goods API, marketplace integration, B2B verification, API testing, live demo"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Safe Or Stolen Enterprise API",
          "description": "Enterprise-grade stolen goods verification API for businesses",
          "url": "https://safeorstolen.com/enterprise-demo",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any"
        }}
      />
      <EnterpriseDemo />
    </div>
  );
}