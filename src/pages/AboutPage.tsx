import React from 'react';
import { Shield, Users, Award, Lock, CheckCircle, Building } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FounderStory } from '@/components/story/FounderStory';
import { SuccessStories } from '@/components/story/SuccessStories';
import { MarketplacePartners } from '@/components/marketplace/MarketplacePartners';
import { ItemRegistration } from '@/components/registration/ItemRegistration';
import { ContextualAdPlacement } from '@/components/advertising/ContextualAdPlacement';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      experience: "15+ years in cybersecurity and fraud prevention",
      credentials: "Certified Information Systems Security Professional (CISSP)"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      experience: "12+ years in database management and verification systems",
      credentials: "Former FBI Digital Forensics Specialist"
    },
    {
      name: "Detective Lisa Rodriguez",
      role: "Law Enforcement Liaison",
      experience: "20+ years in stolen property recovery",
      credentials: "IACP Certified Property Recovery Specialist"
    }
  ];

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen.com",
    "description": "Leading verification service for checking if items are reported as lost or stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-SAFE-123",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Security Boulevard",
      "addressLocality": "Washington",
      "addressRegion": "DC",
      "postalCode": "20001",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Sarah Johnson",
      "jobTitle": "CEO & Founder"
    },
    "numberOfEmployees": "50-100",
    "foundingDate": "2024"
  };

  return (
    <>
      <PageSEO
        title="About SafeOrStolen - The Only Mobile App for Stolen Item Verification"
        description="World's first mobile app for instant stolen item verification. Download SafeOrStolen for iOS & Android to check IMEI, VIN, serial numbers. Protect buyers and sellers with our expert team and law enforcement partnerships."
        keywords="about safeorstolen app, stolen item verification mobile app, IMEI checker app, VIN verification app, secondhand safety experts, fraud prevention mobile app, download stolen checker app"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About SafeOrStolen - The Mobile App That Protects Buyers & Sellers
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The world's only mobile app for instant stolen item verification. Download SafeOrStolen on iOS & Android to check IMEI, VIN, and serial numbers before buying or selling. Founded by cybersecurity experts and backed by law enforcement partnerships.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="h-5 w-5 mr-2" />
                  99.7% Accuracy Rate
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  500K+ Verified Checks
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Award className="h-5 w-5 mr-2" />
                  Industry Leading
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To protect consumers and businesses from unknowingly purchasing stolen goods by providing 
                  instant, accurate verification services backed by comprehensive law enforcement databases 
                  and cutting-edge technology.
                </p>
              </Card>
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A world where every second-hand purchase is safe, transparent, and legal. We envision 
                  eliminating the market for stolen goods through universal verification adoption.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Expert Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Led by industry veterans with decades of experience in cybersecurity, law enforcement, 
                and fraud prevention.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-3">{member.experience}</p>
                  <Badge variant="outline" className="text-sm">
                    {member.credentials}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Verification Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A rigorous 5-step process ensuring maximum accuracy and reliability in every verification.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {verificationProcess.map((process, index) => (
                <div key={index} className="flex items-start gap-6 mb-8">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{process.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Trusted Partnerships</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We work directly with law enforcement agencies and regulatory bodies to ensure 
                comprehensive and up-to-date verification data.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partnerships.map((partner, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{partner.type}</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{partner.name}</h3>
                  <p className="text-muted-foreground">{partner.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Trust SafeOrStolen.com?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-foreground">Bank-Level Security</h3>
                <p className="text-muted-foreground text-sm">256-bit SSL encryption and SOC 2 compliance</p>
              </Card>
              <Card className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-foreground">99.7% Accuracy</h3>
                <p className="text-muted-foreground text-sm">Verified by independent third-party audits</p>
              </Card>
              <Card className="p-6 text-center">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-foreground">Privacy Protected</h3>
                <p className="text-muted-foreground text-sm">GDPR compliant with zero data retention</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-foreground">Industry Recognition</h3>
                <p className="text-muted-foreground text-sm">Endorsed by major law enforcement agencies</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <FounderStory />

        {/* Success Stories */}
        <SuccessStories />

        {/* Featured Trust Ad */}
        <div className="container mx-auto px-4 py-8">
          <ContextualAdPlacement context="verification" placement="banner" />
        </div>

        {/* Marketplace Partnerships */}
        <MarketplacePartners />

        {/* Item Registration */}
        <ItemRegistration />
      </div>
    </>
  );
};

export default AboutPage;