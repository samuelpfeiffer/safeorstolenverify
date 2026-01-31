import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Database, CheckCircle, Users, Globe, Lock } from 'lucide-react';

const dataSources = [
  {
    name: "IMEI.info",
    logo: "/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
    type: "Mobile Device Database",
    description: "Official IMEI verification and stolen device registry",
    coverage: "Global mobile devices",
    verification: "Law enforcement integrated",
    url: "https://www.imei.info"
  },
  {
    name: "Bike Index",
    logo: "/images/partners/bikeindex-logo.svg",
    type: "Bicycle Registry",
    description: "World's largest open bicycle registry",
    coverage: "500k+ registered bikes",
    verification: "Police department verified",
    url: "https://bikeindex.org"
  },
  {
    name: "HotGunz",
    logo: "/lovable-uploads/03461ed0-873b-46ba-8871-8ed6fd1c51b2.png",
    type: "Firearms Database",
    description: "Stolen firearms verification system",
    coverage: "Federal firearm records",
    verification: "ATF data integration",
    url: "https://hotgunz.io"
  },
  {
    name: "Recipero",
    logo: null,
    type: "Asset Recovery",
    description: "Professional asset recovery services",
    coverage: "Commercial & consumer items",
    verification: "Insurance industry partner",
    url: "https://www.recipero.com"
  },
  {
    name: "CheckMEND Integration",
    logo: null,
    type: "Electronics Verification",
    description: "Official electronics stolen database",
    coverage: "UK & European electronics",
    verification: "Police & insurance verified",
    url: "#"
  },
  {
    name: "NCIC Network Access",
    logo: null,
    type: "Federal Database",
    description: "National Crime Information Center integration",
    coverage: "Federal crime database",
    verification: "FBI authorized access",
    url: "#"
  }
];

const trustIndicators = [
  {
    icon: Shield,
    title: "Law Enforcement Verified",
    description: "Direct integration with official police databases"
  },
  {
    icon: Database,
    title: "Multi-Source Verification",
    description: "Cross-reference multiple authoritative databases"
  },
  {
    icon: CheckCircle,
    title: "Real-Time Updates",
    description: "Live data feeds from trusted registry partners"
  },
  {
    icon: Users,
    title: "Industry Partnerships",
    description: "Verified partnerships with legitimate data providers"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "International database networks and registries"
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "GDPR compliant with enterprise-grade security"
  }
];

export const DataSourceCredibility: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20" id="data-sources">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Verified Data Sources & Official Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Our verification system integrates with official law enforcement databases, 
            verified registries, and trusted industry partners to provide accurate, 
            legally-actionable stolen item checks.
          </p>
          <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            Official Database Integration Verified
          </Badge>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <indicator.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{indicator.title}</h3>
                <p className="text-sm text-muted-foreground">{indicator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Sources */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Verified Database Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataSources.map((source, index) => (
              <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {source.logo ? (
                      <img 
                        src={source.logo} 
                        alt={`${source.name} logo`}
                        className="h-8 w-auto mr-3"
                        loading="lazy"
                      />
                    ) : (
                      <Database className="h-8 w-8 text-primary mr-3" />
                    )}
                    <div>
                      <h4 className="font-semibold">{source.name}</h4>
                      <Badge variant="outline" className="text-xs">{source.type}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{source.description}</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div><strong>Coverage:</strong> {source.coverage}</div>
                    <div><strong>Verification:</strong> {source.verification}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Official Verification Statement */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Official Database Verification</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Unlike unverified third-party services, SafeOrStolen maintains direct 
              integrations with official law enforcement databases, verified industry 
              registries, and trusted data providers. Our verification methodology
              registries, and trusted data providers. Our verification methodology 
              is transparent and legally actionable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                NCIC Network Access
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Database className="h-3 w-3 mr-1" />
                Multi-Source Verification
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Shield className="h-3 w-3 mr-1" />
                Law Enforcement Integrated
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};