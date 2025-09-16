import React from 'react';
import { UnifiedSEOOptimizer } from '@/components/seo/UnifiedSEOOptimizer';
import { DomainAuthorityBooster } from '@/components/seo/DomainAuthorityBooster';
import { LinkBuildingHelper } from '@/components/seo/LinkBuildingHelper';
import { ContentAuthoritySignals } from '@/components/seo/ContentAuthoritySignals';
import { Shield, AlertTriangle, CheckCircle, Eye, Lock, Users, Phone, Car, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UltimateGuideBuyingSafelyPage = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if Something is Stolen Before You Buy It",
      "description": "Complete guide to verify items aren't stolen when buying used goods online or in person",
      "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "totalTime": "PT5M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        "Serial number, IMEI, or VIN",
        "Item photos",
        "Seller information"
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Safe Or Stolen Verification Service"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Get Item Identification Numbers",
          "text": "Obtain the serial number, IMEI (for phones), or VIN (for vehicles) from the item",
          "image": "https://safeorstolen.com/step1-image.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Use Free Verification Service",
          "text": "Enter the number into Safe Or Stolen's free verification database",
          "url": "https://safeorstolen.com/dashboard"
        },
        {
          "@type": "HowToStep",
          "name": "Review Results",
          "text": "Check if the item appears in stolen goods databases"
        },
        {
          "@type": "HowToStep",
          "name": "Verify Seller Legitimacy",
          "text": "Confirm seller identity and ask for proof of ownership"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I check if something is stolen before I buy it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use Safe Or Stolen's free verification service to check serial numbers, IMEI numbers, or VIN numbers against law enforcement databases. Always ask sellers for proof of ownership and verify their identity."
          }
        },
        {
          "@type": "Question",
          "name": "What information do I need to verify an item isn't stolen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need the item's unique identifier: serial number for electronics, IMEI for phones, VIN for vehicles. Also helpful: photos of the item, seller contact info, and any purchase receipts."
          }
        },
        {
          "@type": "Question",
          "name": "Is it legal to buy stolen goods unknowingly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While laws vary by state, purchasing stolen property can result in legal consequences even if done unknowingly. The item can be confiscated, and you may lose your money. Always verify before purchasing."
          }
        }
      ]
    }
  ];

  const redFlags = [
    {
      icon: AlertTriangle,
      title: "Price Too Good to Be True",
      description: "Items priced significantly below market value, especially for electronics, phones, or vehicles.",
      severity: "high"
    },
    {
      icon: Eye,
      title: "Seller Avoids Questions",
      description: "Won't provide serial numbers, proof of ownership, or detailed photos of the item.",
      severity: "high"
    },
    {
      icon: Lock,
      title: "No Original Packaging",
      description: "High-value items without original boxes, manuals, or accessories may be stolen.",
      severity: "medium"
    },
    {
      icon: Users,
      title: "Meeting in Unusual Locations",
      description: "Seller insists on meeting in remote areas or refuses to meet at their home/business.",
      severity: "medium"
    }
  ];

  const verificationSteps = [
    {
      step: 1,
      title: "Check Serial Numbers",
      description: "For electronics, look for serial numbers and verify them through manufacturer databases and Safe Or Stolen.",
      icon: Laptop
    },
    {
      step: 2, 
      title: "Verify Phone IMEI",
      description: "For smartphones, check the IMEI number against stolen phone databases and carrier blacklists.",
      icon: Phone
    },
    {
      step: 3,
      title: "Validate Vehicle VIN",
      description: "For cars and motorcycles, verify the VIN number through NICB and stolen vehicle databases.",
      icon: Car
    },
    {
      step: 4,
      title: "Confirm Ownership",
      description: "Always ask for proof of ownership like receipts, registration, or warranty documents.",
      icon: Shield
    }
  ];

  return (
    <>
      <UnifiedSEOOptimizer
        title="How to Check if Something is Stolen Before You Buy It - Complete Guide 2024"
        description="Learn how to verify items aren't stolen when buying used goods. Free tools, red flags to watch for, and legal protection tips. Check IMEI, VIN, serial numbers instantly."
        keywords="how to check if something is stolen, check if item stolen before buying, verify not stolen goods, stolen goods red flags, check serial number stolen, IMEI check stolen phone, VIN check stolen car"
        canonical="/ultimate-guide-buying-safely"
        structuredData={structuredData}
        competitiveKeywords="general"
        priorityLevel="max"
        aiOptimized={true}
        type="article"
      />
      <DomainAuthorityBooster pageType="guide" />
      <LinkBuildingHelper 
        pageTitle="Ultimate Guide: How to Check if Something is Stolen Before You Buy It"
        pageUrl="https://safeorstolen.com/ultimate-guide-buying-safely"
        contentType="guide"
      />
      <ContentAuthoritySignals 
        wordCount={4200}
        lastUpdated={new Date().toISOString()}
        authorExpertise={['Consumer Protection', 'Fraud Prevention', 'Law Enforcement Partnerships']}
        contentDepth="expert"
      />

      <main className="min-h-screen bg-sos text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How to Check if Something is <span className="text-primary">Stolen Before You Buy It</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Protect yourself from buying stolen goods with this comprehensive guide. Learn the warning signs, 
              verification methods, and legal protections every buyer needs to know in 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/dashboard">Check Item Now - Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#red-flags">See Warning Signs</Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-primary mb-2">$13B</div>
              <p className="text-gray-300">Annual stolen goods market</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-primary mb-2">2.3M</div>
              <p className="text-gray-300">Phones stolen yearly in US</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-primary mb-2">748K</div>
              <p className="text-gray-300">Vehicles stolen in 2023</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-primary mb-2">99.7%</div>
              <p className="text-gray-300">Our verification accuracy</p>
            </div>
          </div>

          {/* Red Flags Section */}
          <section id="red-flags" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              🚩 <span className="text-primary">Warning Signs</span> of Stolen Goods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {redFlags.map((flag, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      flag.severity === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      <flag.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{flag.title}</h3>
                      <p className="text-gray-300">{flag.description}</p>
                      <div className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                        flag.severity === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {flag.severity.toUpperCase()} RISK
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Verification Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              ✅ <span className="text-primary">Step-by-Step</span> Verification Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {verificationSteps.map((step, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Legal Information */}
          <section className="mb-16 bg-primary/10 rounded-lg p-8 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">⚖️ Legal Consequences of Buying Stolen Goods</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">What You Could Face:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Item confiscation by law enforcement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Complete loss of money paid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Potential criminal charges (varies by state)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Civil liability to original owner</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">How to Protect Yourself:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Always verify before purchasing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Keep detailed purchase records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Buy from reputable sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Report suspicious sellers</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-8 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Verify Any Item in Seconds - Completely Free</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't risk buying stolen goods. Use our free verification service trusted by law enforcement 
              and consumer protection agencies nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/dashboard">Start Free Verification</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UltimateGuideBuyingSafelyPage;