import React from 'react';
import { Shield, Database, Building2, Globe, Lock, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const DataPartnershipsPage = () => {
  const partnerCategories = [
    {
      icon: Shield,
      title: "Law Enforcement & Public Safety",
      description: "Collaborating with 500+ law enforcement agencies worldwide",
      partners: ["Police departments globally", "International crime databases", "Public safety networks"]
    },
    {
      icon: Building2,
      title: "Insurance & Financial Institutions",
      description: "Verified data from insurance carriers and financial institutions",
      partners: ["Major insurance providers", "Financial fraud prevention networks", "Claims verification systems"]
    },
    {
      icon: Database,
      title: "Manufacturer & Brand Registries",
      description: "Direct partnerships with leading manufacturers and brands",
      partners: ["Consumer electronics manufacturers", "Automotive brand registries", "Global product authentication systems"]
    },
    {
      icon: Globe,
      title: "Public & Industry Databases",
      description: "Integration with trusted public verification resources",
      partners: [
        "NICB (National Insurance Crime Bureau)",
        "GSMA Device Registry",
        "BikeIndex",
        "Recipero",
        "IMEI.info",
        "Stolen Register",
        "And many more trusted sources"
      ]
    }
  ];

  const exclusiveFeatures = [
    {
      icon: Lock,
      title: "Confidential Partnerships",
      description: "We maintain exclusive data agreements under strict confidentiality and NDA terms with numerous private databases and verification networks."
    },
    {
      icon: CheckCircle,
      title: "Continuously Expanding Network",
      description: "Our partnership network grows daily, adding new data sources to improve verification accuracy and coverage."
    }
  ];

  return (
    <>
      <PageSEO
        title="Exclusive Data Partnerships | SafeOrStolen Verification Network"
        description="SafeOrStolen partners with 500+ law enforcement agencies, insurance providers, manufacturers, and public databases including NICB, GSMA, BikeIndex, and Recipero for comprehensive stolen item verification."
        keywords="data partnerships, verification network, law enforcement databases, NICB, GSMA, BikeIndex, Recipero, stolen item verification"
        canonical="/partnerships"
      />
      
      <div className="bg-sos min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
                Exclusive Data Partnerships
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                SafeOrStolen leverages the world's most comprehensive verification network, 
                partnering with law enforcement, insurance providers, manufacturers, and trusted 
                public databases to protect buyers, sellers, and businesses from stolen goods.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Trusted Partner Network</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We combine data from multiple trusted sources to provide the most accurate 
                and comprehensive stolen item verification available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {partnerCategories.map((category, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{partner}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Exclusive Partnerships Note */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Beyond Public Data</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exclusiveFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6 italic">
                  * Many of our partnerships are subject to confidentiality agreements and cannot be publicly disclosed. 
                  Our network includes, but is not limited to, the sources listed above.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Statement */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Built on Trust & Verification</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every partnership is carefully vetted to ensure data accuracy, security, and compliance 
                with international data protection standards. Our mission is to make secondhand markets 
                safer by providing the most comprehensive verification network available.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">500+ Data Sources</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Global Coverage</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">99.2% Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataPartnershipsPage;