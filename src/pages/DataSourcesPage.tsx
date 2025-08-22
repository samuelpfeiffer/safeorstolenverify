import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Database, Globe, Lock, CheckCircle, AlertTriangle } from 'lucide-react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';

const DataSourcesPage: React.FC = () => {
  const dataSources = [
    {
      name: "HotGunz",
      type: "Firearms Database",
      description: "Comprehensive stolen firearms database with law enforcement partnerships",
      coverage: "Federal & State Reports",
      updateFrequency: "Real-time",
      icon: Shield,
      color: "bg-red-100 text-red-800"
    },
    {
      name: "CheckMEND",
      type: "Global Registry",
      description: "International database of stolen property including electronics, bikes, and vehicles",
      coverage: "Global Coverage",
      updateFrequency: "Daily",
      icon: Globe,
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "BikeIndex",
      type: "Bicycle Registry",
      description: "Community-driven stolen bike database with law enforcement integration",
      coverage: "North America",
      updateFrequency: "Real-time",
      icon: Database,
      color: "bg-green-100 text-green-800"
    },
    {
      name: "IMEI Databases",
      type: "Mobile Devices",
      description: "Carrier blacklists and stolen device reports from major networks",
      coverage: "Global Networks",
      updateFrequency: "Hourly",
      icon: Lock,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const trustFactors = [
    {
      title: "Law Enforcement Partnerships",
      description: "Direct integration with police databases and FBI systems",
      icon: Shield
    },
    {
      title: "Insurance Company Data",
      description: "Claims data from major insurers to identify stolen items",
      icon: CheckCircle
    },
    {
      title: "Community Reports",
      description: "Verified user reports with photo and documentation evidence",
      icon: AlertTriangle
    },
    {
      title: "Manufacturer Cooperation",
      description: "Direct feeds from manufacturers on warranty fraud and theft",
      icon: Database
    }
  ];

  return (
    <>
      <EnhancedSEOHead
        title="Our Data Sources | Safe Or Stolen"
        description="Learn about the trusted databases and law enforcement partnerships that power our verification system. Transparent, reliable, and comprehensive stolen item detection."
        canonical="/data-sources"
        keywords="data sources, stolen item database, law enforcement, CheckMEND, HotGunz, BikeIndex"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Database className="h-4 w-4 mr-2" />
              Trusted Data Sources
            </Badge>
            <h1 className="text-4xl font-bold mb-4">THE MOST COMPREHENSIVE DATABASE NETWORK ON EARTH</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just access databases - we DOMINATE data coverage. 15+ sources, real-time updates, global reach. 
              <span className="font-bold text-primary">Competitors can't even dream of this level of access.</span>
            </p>
          </div>

          {/* Trust Statement */}
          <Card className="mb-12 border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold text-green-900">Our Commitment to Accuracy</h2>
              </div>
              <p className="text-green-800 leading-relaxed">
                Every verification runs against multiple trusted sources simultaneously. We cross-reference data from law enforcement, insurance claims, manufacturer reports, and community databases to give you the most reliable results possible. Our system is updated in real-time to catch newly reported thefts.
              </p>
            </CardContent>
          </Card>

          {/* Primary Data Sources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Primary Data Sources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dataSources.map((source, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <source.icon className="h-8 w-8 text-primary" />
                      <Badge className={source.color}>{source.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{source.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{source.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage:</span>
                        <span className="text-muted-foreground">{source.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Updates:</span>
                        <span className="text-muted-foreground">{source.updateFrequency}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust Factors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Why You Can Trust Our Data</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trustFactors.map((factor, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <factor.icon className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold">{factor.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Privacy */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" />
                Your Privacy is Protected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-blue-800">
                <div>
                  <h4 className="font-semibold mb-2">What We Don't Store:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Personal information about item owners</li>
                    <li>• Your search history beyond 30 days</li>
                    <li>• Device locations or usage patterns</li>
                    <li>• Payment information (processed by Stripe)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What We Do:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Encrypt all data in transit and at rest</li>
                    <li>• Follow SOC 2 compliance standards</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• GDPR and CCPA compliant data handling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Questions About Our Data?</h3>
            <p className="text-muted-foreground mb-6">
              We're committed to transparency. If you have questions about our sources or methodologies, we're here to help.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/contact" className="text-primary hover:text-primary/80 font-medium">
                Contact Our Team
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/privacy" className="text-primary hover:text-primary/80 font-medium">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSourcesPage;