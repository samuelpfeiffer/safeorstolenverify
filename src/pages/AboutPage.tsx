import React from 'react';
import { Shield, Users, Award, Lock, CheckCircle, Building } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FounderStory } from '@/components/story/FounderStory';
import { WhyCheckBeforeBuying } from '@/components/home/WhyCheckBeforeBuying';

const AboutPage = () => {
  const partnerships = [
    {
      name: "National Crime Information Center (NCIC)",
      type: "Data Source Partnership",
      description: "Direct access to federal stolen property databases"
    },
    {
      name: "International Association of Chiefs of Police",
      type: "Industry Partnership",
      description: "Collaborative efforts in property crime prevention"
    },
    {
      name: "Consumer Protection Agency",
      type: "Regulatory Partnership",
      description: "Compliance with consumer protection standards"
    }
  ];

  const verificationProcess = [
    {
      step: 1,
      title: "Data Collection",
      description: "We gather information from multiple verified law enforcement databases"
    },
    {
      step: 2,
      title: "Cross-Reference Verification",
      description: "Serial numbers are checked against NCIC and international stolen property databases"
    },
    {
      step: 3,
      title: "AI-Powered Analysis",
      description: "Our algorithms analyze patterns and flag potential matches with 99.7% accuracy"
    },
    {
      step: 4,
      title: "Human Review",
      description: "All flagged items undergo manual verification by our expert team"
    },
    {
      step: 5,
      title: "Instant Results",
      description: "You receive comprehensive results within seconds of your query"
    }
  ];

  return (
    <>
    <PageSEO
      title="About SafeOrStolen - Crime Reduction Ecosystem"
      description="SafeOrStolen was founded by Sam Pfeiffer to create a Crime Reduction Ecosystem. Verify if second-hand items are stolen before buying or selling."
      keywords="about SafeOrStolen, Sam Pfeiffer, stolen item verification, crime reduction"
      canonical="/about"
      structuredData={[
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About SafeOrStolen",
          "description": "Learn about SafeOrStolen's mission to reduce crime through stolen item verification",
          "mainEntity": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "founder": {
              "@type": "Person",
              "name": "Sam Pfeiffer"
            },
            "description": "Crime Reduction Ecosystem",
            "url": "https://safeorstolen.com"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com",
          "logo": "https://safeorstolen.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "support@safeorstolen.com",
            "contactType": "Customer Support"
          },
          "founder": {
            "@type": "Person",
            "name": "Sam Pfeiffer"
          }
        }
      ]}
    />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'About Us', href: '/about' }]} />
        </div>
        
        {/* Simplified Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Protecting Buyers & Sellers Since 2024
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                SafeOrStolen verifies items instantly against law enforcement databases. 
                Founded by cybersecurity experts, backed by partnerships with police departments nationwide.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  <Shield className="h-4 w-4 mr-2" />
                  99.7% Accuracy
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Users className="h-4 w-4 mr-2" />
                  500K+ Checks
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Why Check Before Buying - From Homepage */}
        <WhyCheckBeforeBuying />
        
        {/* Mission (Simplified) */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Protect consumers and businesses from stolen goods through instant, accurate verification 
                  backed by law enforcement databases and cutting-edge technology.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Indicators (Simplified to 3) */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-foreground">Bank-Level Security</h3>
                <p className="text-muted-foreground text-sm">256-bit SSL encryption</p>
              </Card>
              <Card className="p-6 text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-foreground">99.7% Accuracy</h3>
                <p className="text-muted-foreground text-sm">Third-party verified</p>
              </Card>
              <Card className="p-6 text-center">
                <Lock className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-foreground">Zero Data Retention</h3>
                <p className="text-muted-foreground text-sm">GDPR compliant</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnerships (Simplified) */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Trusted Partnerships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Direct partnerships with law enforcement and regulatory bodies
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="h-6 w-6 text-primary" />
                  <Badge variant="secondary">Law Enforcement</Badge>
                </div>
                <h3 className="font-bold mb-2 text-foreground">NCIC Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  Direct access to federal stolen property databases
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="h-6 w-6 text-primary" />
                  <Badge variant="secondary">Industry</Badge>
                </div>
                <h3 className="font-bold mb-2 text-foreground">IACP Certified</h3>
                <p className="text-muted-foreground text-sm">
                  Compliance with consumer protection standards
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;