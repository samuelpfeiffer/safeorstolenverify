import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Database, CheckCircle, Users, Globe, Clock } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const DataSourceCredibilityPost = () => {
  const dataSources = [
    {
      name: "Law Enforcement Databases",
      icon: Shield,
      credibility: "Government Official",
      coverage: "50+ Countries",
      updateFrequency: "Real-time",
      description: "Direct partnerships with police departments and federal agencies worldwide",
      verification: "Official API access with authentication tokens"
    },
    {
      name: "Insurance Company Reports", 
      icon: Database,
      credibility: "Enterprise Verified",
      coverage: "Global Coverage",
      updateFrequency: "Daily",
      description: "Major insurance providers report stolen items for claim processing",
      verification: "Encrypted data feeds with multi-factor authentication"
    },
    {
      name: "Carrier Blacklists",
      icon: Globe,
      credibility: "Industry Standard",
      coverage: "Worldwide",
      updateFrequency: "Hourly",
      description: "Mobile carriers maintain lists of stolen/lost devices",
      verification: "GSMA-certified database access"
    },
    {
      name: "Manufacturer Databases",
      icon: CheckCircle,
      credibility: "OEM Verified",
      coverage: "Multi-brand",
      updateFrequency: "Real-time",
      description: "Direct manufacturer reporting of stolen merchandise",
      verification: "API partnerships with major brands"
    }
  ];

  return (
    <>
      <PageSEO
        title="How Our Data Sources Ensure Verification Credibility | SafeOrStolen Blog"
        description="Learn about the trusted data sources behind SafeOrStolen's verification system. Discover how we ensure accuracy through partnerships with law enforcement, insurance companies, and manufacturers."
        keywords="data sources, verification credibility, stolen goods database, law enforcement partnerships, insurance data, carrier blacklists"
        canonical="/blog/data-source-credibility"
      />
      
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sos-orange/10 text-sos-orange">
                <Database className="mr-2 h-4 w-4" />
                Data Sources
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How Our Data Sources Ensure Verification Credibility
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Behind every verification result is a network of trusted, official data sources. 
                Here's how we ensure the highest level of accuracy and credibility in our stolen goods database.
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">The Foundation of Trust</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  SafeOrStolen's verification system is built on partnerships with official, verified data sources. 
                  We don't rely on user-generated content or unverified reports. Every piece of data in our system 
                  comes from authenticated, official sources that have legal authority to report stolen items.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sos-orange">50+</div>
                    <div className="text-sm text-muted-foreground">Countries Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sos-lime">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sos-orange">24/7</div>
                    <div className="text-sm text-muted-foreground">Real-time Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sos-lime">Enterprise</div>
                    <div className="text-sm text-muted-foreground">Grade Security</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sources Grid */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-center">Our Verified Data Sources</h2>
              {dataSources.map((source, index) => (
                <Card key={index} className="border-l-4 border-l-sos-orange">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 rounded-lg bg-sos-orange/10">
                          <source.icon className="h-5 w-5 text-sos-orange" />
                        </div>
                        {source.name}
                      </CardTitle>
                      <Badge className="bg-sos-lime/10 text-sos-lime">
                        {source.credibility}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-sos-orange" />
                          Coverage
                        </h4>
                        <p className="text-sm text-muted-foreground">{source.coverage}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-sos-orange" />
                          Updates
                        </h4>
                        <p className="text-sm text-muted-foreground">{source.updateFrequency}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-sos-orange" />
                          Verification
                        </h4>
                        <p className="text-sm text-muted-foreground">{source.verification}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{source.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quality Assurance */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sos-lime" />
                  Quality Assurance & Data Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Multi-Source Cross-Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      When possible, we cross-reference data across multiple sources to ensure accuracy and reduce false positives.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Real-Time Data Synchronization</h4>
                    <p className="text-muted-foreground text-sm">
                      Our systems maintain constant connections to source databases, ensuring you get the most up-to-date information available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Automated Data Quality Checks</h4>
                    <p className="text-muted-foreground text-sm">
                      Every data point undergoes automated validation to check for consistency, completeness, and authenticity before being made available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust & Transparency */}
            <Card className="bg-gradient-to-r from-sos-orange/5 to-sos-lime/5 border-sos-orange/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Transparency & Accountability</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    We believe in complete transparency about our data sources and verification processes. 
                    That's why we provide detailed information about where our data comes from and how it's validated.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Badge className="bg-sos-orange/10 text-sos-orange px-4 py-2">
                      <Users className="mr-2 h-4 w-4" />
                      Audited Partnerships
                    </Badge>
                    <Badge className="bg-sos-lime/10 text-sos-lime px-4 py-2">
                      <Shield className="mr-2 h-4 w-4" />
                      Certified Secure
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSourceCredibilityPost;