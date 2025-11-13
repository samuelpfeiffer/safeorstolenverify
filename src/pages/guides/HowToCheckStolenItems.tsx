import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Shield, CheckCircle, AlertTriangle, Phone, Car, Laptop, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UnifiedSearchForm } from '@/components/search/UnifiedSearchForm';
import { useNavigate } from 'react-router-dom';

const HowToCheckStolenItems = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check if Your Item is Stolen",
    "description": "Complete guide on how to verify if items are stolen using IMEI, VIN, and serial number lookups",
    "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Device or Vehicle Identifier (IMEI, VIN, Serial Number)"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool", 
        "name": "SafeOrStolen Verification Tool"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Find Your Item's Identifier",
        "text": "Locate the IMEI number on phones, VIN number on vehicles, or serial number on electronics"
      },
      {
        "@type": "HowToStep", 
        "name": "Enter Into Stolen Database Search",
        "text": "Use our free stolen item checker to search police databases and stolen goods registries"
      },
      {
        "@type": "HowToStep",
        "name": "Review Verification Results", 
        "text": "Get instant results showing if your item is reported stolen, lost, or clear to use"
      }
    ]
  };

  const stepByStepGuide = [
    {
      icon: Search,
      title: "Step 1: Find Your Item's Identifier",
      description: "Every electronic device and vehicle has a unique identifier",
      details: [
        "Phones: IMEI number (dial *#06# or check Settings)",
        "Cars: VIN number (dashboard, door jamb, registration)",
        "Electronics: Serial number (device label, settings menu)",
        "Gaming consoles: Serial number on back or settings"
      ]
    },
    {
      icon: Shield,
      title: "Step 2: Use Our Free Stolen Item Checker",
      description: "Search multiple databases instantly for stolen property reports",
      details: [
        "Enter your identifier in our verification tool",
        "We search police databases automatically",
        "Check stolen goods registries worldwide",
        "Verify against blacklist databases"
      ]
    },
    {
      icon: CheckCircle,
      title: "Step 3: Review Your Results",
      description: "Get instant verification of your item's status",
      details: [
        "Clear: Item is safe and not reported stolen",
        "Stolen: Item appears in stolen property databases",
        "Blacklisted: Device is blocked by carriers/manufacturers",
        "Missing Info: Additional verification may be needed"
      ]
    }
  ];

  const whenToCheck = [
    {
      scenario: "Buying Used Items",
      description: "Always verify secondhand items before purchasing",
      keywords: "device check before buying, verify before buying, secondhand item legitimacy"
    },
    {
      scenario: "Selling Your Items", 
      description: "Check your own items to ensure clear ownership",
      keywords: "is my item stolen, property recovery service, validate used electronics"
    },
    {
      scenario: "Insurance Claims",
      description: "Verify items for insurance and warranty purposes", 
      keywords: "trusted item verification, secure resale lookup, property legitimacy"
    },
    {
      scenario: "Workplace Security",
      description: "Ensure company devices are legitimate and trackable",
      keywords: "enterprise verification, track stolen gear, blacklist registry search"
    }
  ];

  return (
    <>
      <Helmet>
        <title>How to Check if Your Item is Stolen | Complete Verification Guide</title>
        <meta 
          name="description" 
          content="Complete guide: How to check if items are stolen using IMEI, VIN & serial numbers. Step-by-step process to verify secondhand items, avoid buying stolen goods." 
        />
        <meta 
          name="keywords" 
          content="how to check if item stolen, is my item stolen, device check before buying, verify secondhand items, avoid buying stolen goods, stolen item verification guide" 
        />
        {/* Canonical tag handled by PageSEO component to prevent duplicates */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-sos-orange/5">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-sos-dark to-sos-orange text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-sos-lime text-sos-dark">
                Complete Guide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How to Check if Your Item is Stolen
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Complete step-by-step guide to verify if items are stolen. Learn how to check IMEI, VIN, serial numbers 
                and avoid buying stolen goods. Protect yourself with our free verification tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="border-white text-white">
                  📱 IMEI Block Status
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🚗 Check VIN for Theft
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  💻 Validate Electronics
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🔍 Lost Item Search
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Check Tool */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-sos-dark">
                    Check Stolen Status Now
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Enter IMEI, VIN, or serial number to verify instantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <UnifiedSearchForm 
                    variant="simple"
                    onOpenQrScanner={() => navigate('/qr-scanner')}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  3-Step Process: How to Verify Secondhand Items
                </h2>
                <p className="text-xl text-muted-foreground">
                  Follow this simple guide to check if any item is stolen before you buy
                </p>
              </div>
              
              <div className="space-y-8">
                {stepByStepGuide.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-sos-lime/10 rounded-full flex items-center justify-center">
                              <IconComponent className="h-8 w-8 text-sos-lime" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* When to Check */}
        <section className="py-16 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  When Should You Check if Items Are Stolen?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Critical scenarios where stolen item verification protects you
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {whenToCheck.map((scenario, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-sos-orange/10 rounded-full flex items-center justify-center">
                          <HelpCircle className="h-5 w-5 text-sos-orange" />
                        </div>
                        {scenario.scenario}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {scenario.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground italic">
                        Related searches: {scenario.keywords}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "Is my item stolen if I bought it secondhand?",
                    answer: "Not necessarily. Use our free stolen item checker to verify. Enter the IMEI, VIN, or serial number to check if it's reported stolen."
                  },
                  {
                    question: "How do I find my device's serial number database entry?",
                    answer: "Use our verification tool to search multiple databases at once. We check police reports, stolen goods registries, and blacklist databases automatically."
                  },
                  {
                    question: "What is IMEI block status and how do I check it?",
                    answer: "IMEI block status shows if a phone is blacklisted by carriers. Our IMEI checker verifies both stolen status and carrier blacklist information."
                  },
                  {
                    question: "Can I check VIN for theft on any vehicle?",
                    answer: "Yes, our VIN check works for cars, trucks, motorcycles, and other vehicles. Enter the 17-character VIN to verify stolen status."
                  }
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sos-lime/10 to-sos-orange/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Checking Items Now - It's Free!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don't risk buying stolen goods or having unclear ownership. Verify any item in seconds with our comprehensive stolen item checker.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-sos-orange hover:bg-sos-orange/90"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Check Stolen Status Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/stolen-item-checker')}
                >
                  Learn More About Our Tool
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToCheckStolenItems;