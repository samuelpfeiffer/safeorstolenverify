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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen on Crunchbase",
    "description": "View SafeOrStolen company profile on Crunchbase. Learn about our mission to protect buyers and sellers from stolen goods through instant verification.",
    "url": "https://safeorstolen.com/crunchbase",
    "mainEntity": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "legalName": "SAFEORSTOLEN",
      "url": "https://safeorstolen.com",
      "description": "Carfax for Everything - Buy and Sell. Universal verification platform for secondhand items.",
      "foundingDate": "2024",
      "sameAs": [
        "https://www.crunchbase.com/organization/safe-or-stolen",
        "https://www.youtube.com/@safeorstolen",
        "https://twitter.com/safeorstolen",
        "https://www.trustpilot.com/review/safeorstolen.com"
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen on Crunchbase - Company Profile & Information"
        description="View SafeOrStolen's Crunchbase profile. Learn about our stolen item verification platform, company information, funding, and mission to protect secondhand buyers."
        keywords="SafeOrStolen Crunchbase, SafeOrStolen company, stolen item checker company, IMEI verification startup, VIN lookup company"
        canonical="/crunchbase"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen on Crunchbase
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our company profile, learn about our mission, and see how we're revolutionizing 
              secondhand item verification worldwide.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            >
              <Building2 className="h-5 w-5" />
              View Crunchbase Profile
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          {/* Company Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Protect buyers and sellers from stolen goods through instant verification technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Global Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Serving all 50 US states plus international verification for phones, vehicles, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  FasterCapital Partner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Backed by FasterCapital to accelerate growth and expand verification capabilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  Growing Daily
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Join our growing community of buyers and sellers who verify before they trade.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">About SafeOrStolen</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
              <p>
                SafeOrStolen is the "Carfax for Everything" - a universal verification platform that helps 
                buyers and sellers verify secondhand items in just 3 seconds. Our platform covers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>IMEI verification for smartphones and mobile devices</li>
                <li>VIN lookup for cars, motorcycles, and vehicles</li>
                <li>Serial number verification for electronics and appliances</li>
                <li>License plate lookup across all 50 US states</li>
                <li>Firearms verification through federal databases</li>
              </ul>
              <p className="mt-4">
                We're the only stolen item verification service with a dedicated mobile app featuring 
                barcode scanning for instant verification on the go.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Learn More About Our Company</h2>
            <p className="text-muted-foreground mb-6">
              Visit our Crunchbase profile for detailed company information, team details, and more.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            >
              <Building2 className="h-5 w-5" />
              View Full Profile on Crunchbase
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrunchbasePage;
