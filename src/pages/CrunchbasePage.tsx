import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, ExternalLink, TrendingUp, Users, Globe, Shield, Brain, Recycle, DollarSign } from 'lucide-react';

const CrunchbasePage: React.FC = () => {
  const crunchbaseUrl = 'https://www.crunchbase.com/organization/safe-or-stolen';

  const handleVisitProfile = () => {
    window.open(crunchbaseUrl, '_blank', 'noopener,noreferrer');
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SafeOrStolen Crunchbase Company Profile - AI-Powered Circular Economy Infrastructure",
      "description": "View SafeOrStolen's official Crunchbase profile. AI/ML-powered stolen item verification platform enabling the $367B global secondhand market. Machine learning fraud detection for circular economy.",
      "url": "https://safeorstolen.com/crunchbase",
      "mainEntity": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "keywords": [
        "SafeOrStolen Crunchbase",
        "AI fraud detection startup",
        "circular economy technology",
        "secondhand market infrastructure",
        "machine learning verification",
        "$367 billion resale market"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "alternateName": ["Safe or Stolen", "SOS Verification"],
      "description": "AI-powered stolen item verification platform protecting the $367B global secondhand market. Uses machine learning for fraud detection across vehicles, electronics, and equipment.",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "foundingDate": "2025-07-07",
      "founder": [
        { "@type": "Person", "name": "Samuel Pfeiffer", "jobTitle": "Founder & CEO" },
        { "@type": "Person", "name": "Kelly McEvoy", "jobTitle": "Co-Founder" }
      ],
      "industry": [
        "Security Software",
        "Machine Learning & AI",
        "Predictive Analytics",
        "Circular Economy",
        "Secondhand Marketplace Technology",
        "Fraud Prevention"
      ],
      "funder": {
        "@type": "Organization",
        "name": "FasterCapital",
        "url": "https://fastercapital.com"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Total Addressable Market",
          "value": "$367 billion global secondhand market by 2029"
        },
        {
          "@type": "PropertyValue",
          "name": "Market Growth Rate", 
          "value": "10.7% CAGR"
        },
        {
          "@type": "PropertyValue",
          "name": "Technology",
          "value": "AI/ML-powered multi-database verification"
        }
      ],
      "knowsAbout": [
        "Machine learning fraud detection",
        "AI-powered verification",
        "Predictive analytics",
        "Circular economy infrastructure",
        "Secondhand market trust",
        "IMEI verification",
        "VIN checking",
        "Serial number lookup"
      ],
      "sameAs": [
        "https://www.crunchbase.com/organization/safe-or-stolen",
        "https://twitter.com/safeorstolen",
        "https://linkedin.com/company/safeorstolen",
        "https://www.youtube.com/@safeorstolen"
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen Company Profile | AI-Powered Circular Economy | Crunchbase"
        description="View SafeOrStolen on Crunchbase. AI/ML-powered stolen item verification enabling the $367B secondhand market. Machine learning fraud detection startup backed by FasterCapital."
        keywords="SafeOrStolen Crunchbase, AI fraud detection startup, circular economy technology, machine learning verification, $367B secondhand market, FasterCapital portfolio, predictive analytics"
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              AI-powered trust infrastructure for the $367 billion global secondhand market.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Machine learning fraud detection protecting buyers and sellers across vehicles, electronics, and equipment.
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

          {/* Investor-Focused Market Opportunity */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="border-2 border-green-500/20 bg-green-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <DollarSign className="h-5 w-5 text-green-600" aria-hidden="true" />
                  Market Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600 mb-2">$367B</p>
                <p className="text-muted-foreground text-sm">
                  Global secondhand market by 2029 with 10.7% annual growth. SafeOrStolen provides critical trust infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500/20 bg-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  AI Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600 mb-2">ML-Powered</p>
                <p className="text-muted-foreground text-sm">
                  Machine learning fraud detection with predictive analytics. Computer vision for serial number recognition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500/20 bg-teal-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Recycle className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  Circular Economy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-teal-600 mb-2">Trust Layer</p>
                <p className="text-muted-foreground text-sm">
                  Enabling sustainable commerce by building trust in secondhand transactions. ESG-aligned impact investment.
                </p>
              </CardContent>
            </Card>
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
                  Protect buyers and sellers from stolen goods through AI-powered instant verification.
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
                  Backed by FasterCapital to expand AI verification capabilities globally.
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
                SafeOrStolen is the "Carfax for Everything" - an AI-powered universal verification platform for the $367B secondhand market:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Machine Learning Fraud Detection</strong> - AI-powered analysis across 50+ databases</li>
                <li><strong>IMEI Verification</strong> - Smartphones and mobile devices</li>
                <li><strong>VIN Lookup</strong> - Cars, motorcycles, boats, and vehicles</li>
                <li><strong>Serial Number Verification</strong> - Electronics and equipment</li>
                <li><strong>Circular Economy Enablement</strong> - Building trust in sustainable resale</li>
              </ul>
              <p className="mt-4">
                The only AI-powered stolen item verification service with predictive analytics and a dedicated mobile app.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Learn More About Our Company</h2>
            <p className="text-muted-foreground mb-6">
              Visit our Crunchbase profile for company details, AI technology stack, team info, and funding.
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
