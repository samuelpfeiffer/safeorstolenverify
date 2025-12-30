import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Car, Laptop, Bike, ShieldCheck, Clock, Database, 
  Scan, Bell, FileText, Lock, Globe, Zap, CheckCircle, Award, Users
} from 'lucide-react';

const FeaturesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen Features - Complete Verification Tools",
    "description": "Explore all SafeOrStolen features: IMEI checker, VIN lookup, serial number verification, barcode scanning, real-time alerts, and comprehensive database access.",
    "url": "https://safeorstolen.com/features",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "IMEI Verification" },
        { "@type": "ListItem", "position": 2, "name": "VIN Lookup" },
        { "@type": "ListItem", "position": 3, "name": "Serial Number Check" },
        { "@type": "ListItem", "position": 4, "name": "Barcode Scanner" },
        { "@type": "ListItem", "position": 5, "name": "Real-time Alerts" }
      ]
    }
  };

  const coreFeatures = [
    {
      icon: Smartphone,
      title: "IMEI Verification",
      description: "Check any phone's IMEI number against carrier blacklists, insurance databases, and police records. Works for iPhone, Samsung, and all Android devices.",
      link: "/imei-checker"
    },
    {
      icon: Car,
      title: "VIN Lookup",
      description: "Comprehensive vehicle history including stolen status, title issues, accidents, and ownership history. Similar to Carfax but with stolen item focus.",
      link: "/vin-checker"
    },
    {
      icon: Laptop,
      title: "Serial Number Check",
      description: "Verify laptops, electronics, cameras, gaming consoles, and more. Cross-reference against insurance claims and theft reports.",
      link: "/serial-number-checker"
    },
    {
      icon: Bike,
      title: "Bicycle Verification",
      description: "Check bicycle frame numbers against national registries and police databases. Protect yourself from buying stolen bikes.",
      link: "/check-bike"
    },
    {
      icon: ShieldCheck,
      title: "Firearm Serial Check",
      description: "Verify firearm serial numbers against ATF databases and stolen property reports. Stay legal and safe.",
      link: "/firearms-check"
    },
    {
      icon: FileText,
      title: "License Plate Lookup",
      description: "Look up vehicle information by license plate. Check registration status, stolen reports, and basic vehicle history.",
      link: "/license-plate-lookup"
    }
  ];

  const appFeatures = [
    {
      icon: Scan,
      title: "Barcode Scanner",
      description: "Instantly scan barcodes and serial numbers with your phone camera. No typing required - just point and verify."
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Get notified instantly when an item you've verified becomes reported as stolen or suspicious activity is detected."
    },
    {
      icon: Clock,
      title: "3-Second Verification",
      description: "Get results in under 3 seconds. Our optimized infrastructure ensures lightning-fast verification every time."
    },
    {
      icon: Database,
      title: "100+ Databases",
      description: "Access data from police departments, insurance companies, carrier blacklists, and international registries."
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your searches are encrypted and never shared. We don't store your personal data or search history without permission."
    },
    {
      icon: Globe,
      title: "Works Worldwide",
      description: "International coverage for global marketplaces. Verify items across borders and protect yourself anywhere."
    }
  ];

  const benefits = [
    { icon: Zap, text: "Instant results in 3 seconds" },
    { icon: CheckCircle, text: "2 free searches to start" },
    { icon: Award, text: "99.7% accuracy rate" },
    { icon: Users, text: "Trusted by 50,000+ users" }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen Features - IMEI, VIN & Serial Number Verification Tools"
        description="Explore SafeOrStolen's complete verification suite: IMEI checker, VIN lookup, serial number verification, barcode scanning, real-time alerts. 100+ databases, 3-second results."
        keywords="safeorstolen features, imei checker, vin lookup, serial number verification, barcode scanner, stolen item database, phone verification, car verification"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Complete Verification Suite for Every Item
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                From phones to vehicles to electronics, SafeOrStolen provides comprehensive verification 
                tools to protect you from buying stolen goods. Access 100+ databases in under 3 seconds.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/verify">Start Verifying Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/download">Download App</Link>
                </Button>
              </div>
              
              {/* Quick benefits */}
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <benefit.icon className="w-4 h-4 text-primary" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Verification Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Verification Tools for Every Item Type
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're buying a phone, car, laptop, or bicycle, we have specialized 
                verification tools designed for each item category.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Button asChild variant="link" className="p-0">
                      <Link to={feature.link}>Learn more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* App & Technology Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Powerful Technology Behind Every Search
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our mobile app and web platform are built with cutting-edge technology 
                to give you fast, accurate, and secure verification results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Who Uses SafeOrStolen?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/for-buyers" className="block">
                <Card className="h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Individual Buyers</h3>
                    <p className="text-sm text-muted-foreground">Protect yourself when buying from marketplaces</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/for-sellers" className="block">
                <Card className="h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Sellers</h3>
                    <p className="text-sm text-muted-foreground">Prove your items are legitimate before selling</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/for-pawn-shops" className="block">
                <Card className="h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Pawn Shops</h3>
                    <p className="text-sm text-muted-foreground">Comply with regulations and verify inventory</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/for-businesses" className="block">
                <Card className="h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Businesses</h3>
                    <p className="text-sm text-muted-foreground">Scale verification with our API and bulk tools</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Verifying?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get 2 free searches to test our verification tools. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/verify">Start Free Verification</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FeaturesPage;
