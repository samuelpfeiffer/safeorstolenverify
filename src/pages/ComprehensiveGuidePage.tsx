import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Shield, Search, Database, AlertTriangle, CheckCircle, Users, Map, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ComprehensiveGuidePage = () => {
  const guideSteps = [
    {
      icon: Search,
      title: "Pre-Purchase Research",
      description: "Before meeting the seller, research the item's typical price range and common red flags.",
      details: [
        "Check manufacturer specifications and serial number formats",
        "Research typical market prices on multiple platforms",
        "Identify common counterfeit indicators for the item type",
        "Verify seller's reputation and history"
      ]
    },
    {
      icon: Database,
      title: "Database Verification",
      description: "Use multiple databases to verify the item's legitimacy and theft status.",
      details: [
        "Search serial numbers in stolen property databases",
        "Check IMEI numbers for mobile devices",
        "Verify VIN numbers for vehicles",
        "Cross-reference with manufacturer databases"
      ]
    },
    {
      icon: Shield,
      title: "Physical Inspection",
      description: "Examine the item thoroughly for signs of tampering or theft.",
      details: [
        "Look for altered or removed serial numbers",
        "Check for signs of forced entry or damage",
        "Verify all components match manufacturer specifications",
        "Test all functions and features"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Documentation Review",
      description: "Request and verify all relevant documentation from the seller.",
      details: [
        "Original purchase receipts or invoices",
        "Warranty cards and registration documents",
        "Service records and maintenance history",
        "Insurance documentation if applicable"
      ]
    },
    {
      icon: CheckCircle,
      title: "Final Verification",
      description: "Complete your due diligence before making the purchase.",
      details: [
        "Confirm seller's identity matches documentation",
        "Verify payment method is secure and traceable",
        "Document the transaction with photos and receipts",
        "Register the item with relevant authorities if required"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "The $15,000 Motorcycle That Wasn't",
      location: "Phoenix, AZ",
      description: "A buyer avoided purchasing a stolen Harley-Davidson by using our verification service.",
      outcome: "Saved $15,000 and avoided criminal charges",
      details: "The VIN check revealed the motorcycle was reported stolen 3 months earlier in California."
    },
    {
      title: "Electronics Store Prevents Inventory Loss",
      location: "Miami, FL", 
      description: "A pawn shop used our API to screen incoming electronics inventory.",
      outcome: "Prevented 23 stolen items from entering inventory in one month",
      details: "Our real-time verification helped identify stolen iPhones, laptops, and gaming consoles."
    },
    {
      title: "Construction Equipment Recovery",
      location: "Houston, TX",
      description: "A contractor verified equipment serial numbers before a large purchase.",
      outcome: "Identified $45,000 in stolen construction tools",
      details: "Our database search revealed the equipment was stolen from a job site in Dallas."
    }
  ];

  const localStats = [
    { city: "Los Angeles", theftRate: "1 in 285", topItem: "Vehicles" },
    { city: "New York", theftRate: "1 in 398", topItem: "Electronics" },
    { city: "Chicago", theftRate: "1 in 312", topItem: "Bicycles" },
    { city: "Houston", theftRate: "1 in 267", topItem: "Tools" },
    { city: "Phoenix", theftRate: "1 in 243", topItem: "Motorcycles" },
    { city: "Miami", theftRate: "1 in 189", topItem: "Phones" }
  ];

  return (
    <>
      <PageSEO
        title="Complete Guide to Buying Second-Hand Items Safely - Avoid Stolen Goods | SafeOrStolen"
        description="The ultimate 2025 guide to safely purchasing used items. Learn professional verification techniques, database checks, and legal protection strategies to avoid stolen goods."
        keywords="buying used items safely, avoid stolen goods, second hand verification, stolen property check, pre-purchase inspection"
        canonical="/comprehensive-guide"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Complete Guide to Buying Second-Hand Items Safely",
          "description": "Professional guide to verify legitimacy and avoid stolen goods when purchasing used items",
          "totalTime": "PT15M",
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Item serial number or identifier"
            },
            {
              "@type": "HowToSupply", 
              "name": "Seller documentation"
            }
          ],
          "step": guideSteps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description,
            "image": "https://safeorstolen.com/images/guide-steps.jpg"
          }))
        }}
      />
      <AISearchOptimizer 
        page="comprehensive-guide" 
        context="secondhand-buying-guide"
        primaryKeywords={['buying used items safely', 'avoid stolen goods', 'verify secondhand purchases']}
      />

    <div className="min-h-screen bg-sos text-white">

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-sos to-sos-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Complete Guide to Buying <span className="text-sos-orange">Second-Hand Items Safely</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional verification techniques used by law enforcement, pawn shops, and savvy buyers to avoid stolen goods and protect themselves legally.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 bg-sos-orange/20 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  15-minute read
                </span>
                <span className="flex items-center gap-2 bg-sos-lime/20 px-3 py-1 rounded-full">
                  <Award className="h-4 w-4" />
                  Expert level
                </span>
                <span className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  50,000+ readers
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-sos-dark/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Theft Risk by Major US Cities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {localStats.map((stat, index) => (
                <Card key={index} className="bg-card/20 border-border/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-sos-orange">{stat.theftRate}</div>
                    <div className="text-sm text-muted-foreground">{stat.city}</div>
                    <div className="text-xs text-sos-lime mt-1">{stat.topItem}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Guide Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">5-Step Professional Verification Process</h2>
            <div className="space-y-12">
              {guideSteps.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-sos-orange rounded-xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-sos-lime flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-sos-dark/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-card/20 border-border/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Map className="h-5 w-5 text-sos-orange" />
                      <span className="text-sm text-sos-orange">{study.location}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.description}</p>
                    <div className="bg-sos-lime/10 border border-sos-lime/20 rounded-lg p-3 mb-4">
                      <div className="text-sos-lime font-semibold">Outcome:</div>
                      <div className="text-sm">{study.outcome}</div>
                    </div>
                    <p className="text-sm text-gray-400">{study.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Verifying Items Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't risk your money or legal standing. Use our comprehensive database to verify any item before you buy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90" asChild>
                <Link to="/dashboard">
                  <Shield className="mr-2 h-5 w-5" />
                  Check an Item Now - Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sos-lime text-sos-lime hover:bg-sos-lime/10" asChild>
                <Link to="/for-brands">
                  <Database className="mr-2 h-5 w-5" />
                  Business Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default ComprehensiveGuidePage;