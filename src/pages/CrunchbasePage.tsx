import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, ExternalLink, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const CrunchbasePage: React.FC = () => {
  const crunchbaseUrl = 'https://www.crunchbase.com/organization/safe-or-stolen';

  const handleVisitProfile = () => {
    window.open(crunchbaseUrl, '_blank', 'noopener,noreferrer');
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SafeOrStolen Company Profile",
      "description": "View SafeOrStolen company info on Crunchbase. Stolen item verification startup.",
      "url": "https://safeorstolen.com/crunchbase"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "legalName": "SAFEORSTOLEN",
      "url": "https://safeorstolen.com",
      "description": "Stolen item verification platform for buyers, sellers, and businesses.",
      "foundingDate": "2024",
      "industry": "Security Software",
      "sameAs": [
        "https://www.crunchbase.com/organization/safe-or-stolen",
        "https://www.youtube.com/@safeorstolen",
        "https://twitter.com/safeorstolen",
        "https://www.trustpilot.com/review/safeorstolen.com"
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen Company Profile | Crunchbase"
        description="View SafeOrStolen on Crunchbase. Stolen item verification startup backed by FasterCapital. IMEI, VIN, serial number checking platform."
        keywords="SafeOrStolen Crunchbase, SafeOrStolen company, stolen item verification startup, IMEI checker company, FasterCapital portfolio"
        canonical="/crunchbase"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <Building2 className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen Company Profile
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Learn about our mission to protect buyers and sellers from stolen goods through instant verification technology.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              aria-label="View SafeOrStolen profile on Crunchbase"
            >
              <Building2 className="h-5 w-5" aria-hidden="true" />
              View on Crunchbase
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Company Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Protect buyers and sellers from stolen goods through instant verification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  Global Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  All 50 US states plus international verification for phones, vehicles, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  FasterCapital Partner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Backed by FasterCapital to expand verification capabilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  Growing Daily
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Join our growing community of buyers and sellers who verify before trading.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">About SafeOrStolen</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
              <p>
                SafeOrStolen is the "Carfax for Everything" - a universal verification platform for secondhand items in 3 seconds:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>IMEI verification for smartphones and mobile devices</li>
                <li>VIN lookup for cars, motorcycles, and vehicles</li>
                <li>Serial number verification for electronics</li>
                <li>License plate lookup across all 50 US states</li>
                <li>Firearms verification through federal databases</li>
              </ul>
              <p className="mt-4">
                The only stolen item verification service with a dedicated mobile app featuring barcode scanning.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Learn More About Our Company</h2>
            <p className="text-muted-foreground mb-6">
              Visit our Crunchbase profile for company details, team info, and funding.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              aria-label="View full SafeOrStolen profile on Crunchbase"
            >
              <Building2 className="h-5 w-5" aria-hidden="true" />
              View Full Crunchbase Profile
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrunchbasePage;
