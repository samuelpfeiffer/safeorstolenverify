import { EnterpriseDemo } from '@/components/enhanced/EnterpriseDemo';
import { SEOHead } from '@/components/seo/SEOHead';

export default function EnterpriseDemoPage() {
  return (
    <div className="bg-sos min-h-screen">
      <SEOHead 
        title="Enterprise API Demo | Safe Or Stolen"
        description="Experience the power of Safe Or Stolen's Enterprise API with real-time batch verification, advanced analytics, and comprehensive stolen goods detection."
        keywords="enterprise API, batch verification, stolen goods API, marketplace integration, B2B verification"
        ogType="website"
      />
      <EnterpriseDemo />
    </div>
  );
}