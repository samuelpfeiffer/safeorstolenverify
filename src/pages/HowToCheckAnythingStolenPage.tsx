import React from 'react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Smartphone, 
  Car, 
  Bike,
  Laptop,
  CheckCircle,
  AlertTriangle,
  FileText,
  Database,
  Clock,
  Users
} from 'lucide-react';
import { CommercialCTA } from '@/components/blog/CommercialCTA';
import { createArticleSchema, createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';

const HowToCheckAnythingStolenPage = () => {
  const currentDate = new Date().toISOString();
  
  // Structured data for SEO
  const articleSchema = createArticleSchema({
    id: "how-to-check-if-anything-is-stolen-before-you-buy",
    title: "How to Check if Anything is Stolen Before You Buy",
    slug: "how-to-check-if-anything-is-stolen-before-you-buy", 
    excerpt: "Complete verification guide for checking any item before purchase. Learn step-by-step methods for phones, cars, electronics, and more across all major platforms.",
    content: "Comprehensive step-by-step guide for verifying any item before purchase. Covers IMEI checking, VIN verification, serial number databases, and platform-specific safety tips for Facebook Marketplace, eBay, Craigslist, and more.",
    author_id: "safeorstolen-team",
    featured_image_url: "/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
    published_at: currentDate,
    created_at: currentDate,
    updated_at: currentDate
  });

  const serviceSchema = createServiceSchema();
  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: 'How to Check if Anything is Stolen', url: '/how-to-check-if-anything-is-stolen-before-you-buy' }
  ]);

  const combinedSchema = [articleSchema, serviceSchema, faqSchema, breadcrumbSchema];

  // Item categories with specific verification methods
  const itemCategories = [
    {
      category: "Mobile Phones & Electronics",
      icon: Smartphone,
      identifiers: ["IMEI", "Serial Number", "Model Number"],
      steps: [
        "Check IMEI by dialing *#06# or in settings",
        "Verify on SafeOrStolen.com database",
        "Check carrier blacklist status",
        "Verify iCloud/Google account status",
        "Test all functions before purchase"
      ],
      databases: ["SafeOrStolen.com", "CheckMEND", "Carrier databases"],
      redFlags: ["Device locked to unknown account", "No IMEI accessible", "Price too good to be true"],
      avgTime: "2-3 minutes"
    },
    {
      category: "Vehicles & Motorcycles", 
      icon: Car,
      identifiers: ["VIN", "License Plate", "Engine Number"],
      steps: [
        "Locate VIN on dashboard and door frame",
        "Check VIN on NICB VINCheck",
        "Verify title ownership matches seller",
        "Run comprehensive history report",
        "Check for liens and accidents"
      ],
      databases: ["NICB VINCheck", "AutoCheck", "SafeOrStolen.com"],
      redFlags: ["Title issues", "VIN tampering", "No title available"],
      avgTime: "5-10 minutes"
    },
    {
      category: "Bicycles & Sports Equipment",
      icon: Bike,
      identifiers: ["Frame Serial", "Registration Number"],
      steps: [
        "Locate serial number on frame",
        "Check Bike Index database",
        "Verify on SafeOrStolen.com",
        "Ask for purchase receipt",
        "Check local stolen bike reports"
      ],
      databases: ["Bike Index", "SafeOrStolen.com", "Local police"],
      redFlags: ["Serial number filed off", "No receipt available", "Seller nervous about questions"],
      avgTime: "3-5 minutes"
    },
    {
      category: "Laptops & Computers",
      icon: Laptop,
      identifiers: ["Serial Number", "Service Tag", "MAC Address"],
      steps: [
        "Find serial in system info or on sticker",
        "Check manufacturer database",
        "Verify on SafeOrStolen.com",
        "Check for password protection",
        "Verify specs match listing"
      ],
      databases: ["Manufacturer databases", "SafeOrStolen.com", "CheckMEND"],
      redFlags: ["Admin password locked", "Serial number missing", "Specs don't match"],
      avgTime: "2-4 minutes"
    }
  ];

  // Platform verification guides
  const platformGuides = [
    {
      platform: "Facebook Marketplace",
      riskLevel: "Medium",
      tips: [
        "Check seller profile for history and reviews",
        "Use Facebook's official meetup locations",
        "Verify items before meeting in person",
        "Use Facebook Pay for buyer protection when available",
        "Report suspicious listings to Facebook"
      ],
      verification: "Always ask for serial numbers via Facebook Messenger before meeting"
    },
    {
      platform: "eBay",
      riskLevel: "Low", 
      tips: [
        "Check seller feedback score and reviews",
        "Use eBay's Money Back Guarantee",
        "Ask questions about item history in messages", 
        "Pay through eBay for buyer protection",
        "Report listings that seem suspicious"
      ],
      verification: "Request serial numbers and run checks before bidding or buying"
    },
    {
      platform: "Craigslist",
      riskLevel: "High",
      tips: [
        "Always meet in police station safe exchange zones",
        "Bring someone with you to meetings",
        "Never give personal information upfront",
        "Trust your instincts if something feels wrong",
        "Verify items thoroughly before any payment"
      ],
      verification: "Demand serial numbers before meeting and verify independently"
    },
    {
      platform: "Amazon/Pawn Shops",
      riskLevel: "Low",
      tips: [
        "Check return policies and buyer protection",
        "Verify seller legitimacy and licensing",
        "Keep all purchase documentation", 
        "Understand warranty implications",
        "Research item pricing beforehand"
      ],
      verification: "Ask for purchase history and verify with databases"
    }
  ];

  // Quick reference stats
  const verificationStats = [
    { label: "Items Checked Daily", value: "15,000+", icon: Search },
    { label: "Stolen Items Found", value: "2,847", icon: AlertTriangle },
    { label: "Average Check Time", value: "< 30 sec", icon: Clock },
    { label: "Database Sources", value: "25+", icon: Database }
  ];

  return (
    <>
      <EnhancedSEOHead
        title="How to Check if Anything is Stolen Before You Buy - Complete Verification Guide"
        description="Step-by-step guide to verify any item before purchase. Check phones, cars, bikes, electronics for stolen status. Protect yourself on Facebook Marketplace, eBay, Craigslist."
        keywords="how to check if stolen, verify before buying, check stolen phone, VIN stolen check, serial number verification, Facebook Marketplace check, eBay safety, stolen item lookup"
        canonical="/how-to-check-if-anything-is-stolen-before-you-buy"
        additionalSchemas={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Complete Verification Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How to Check if Anything is Stolen Before You Buy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Step-by-step verification methods for phones, vehicles, electronics, and more. 
              Protect yourself when shopping on Facebook Marketplace, eBay, Craigslist, and other platforms.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {verificationStats.map((stat, index) => (
                <div key={index} className="bg-card border rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/verification-hub">Start Checking Items</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ultimate-guide-not-buying-stolen-goods">Full Buyer Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Quick Start Section */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  Quick Start: 30-Second Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Get Identifier</h3>
                    <p className="text-sm text-muted-foreground">Find serial number, IMEI, or VIN</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Check Database</h3>
                    <p className="text-sm text-muted-foreground">Enter on SafeOrStolen.com</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Get Results</h3>
                    <p className="text-sm text-muted-foreground">Instant verification status</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Item Category Guides */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              Verification by Item Type
            </h2>
            
            <div className="space-y-8">
              {itemCategories.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center gap-3">
                        <item.icon className="h-6 w-6 text-primary" />
                        {item.category}
                      </CardTitle>
                      <Badge variant="outline">
                        {item.avgTime} avg
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.identifiers.map((id, idIndex) => (
                        <Badge key={idIndex} variant="secondary" className="text-xs">
                          {id}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Verification Steps</h4>
                        <ol className="space-y-2 text-sm">
                          {item.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Databases to Check</h4>
                        <ul className="space-y-2 text-sm">
                          {item.databases.map((db, dbIndex) => (
                            <li key={dbIndex} className="flex items-center gap-2">
                              <Database className="h-4 w-4 text-green-500" />
                              {db}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-destructive">Red Flags</h4>
                        <ul className="space-y-2 text-sm">
                          {item.redFlags.map((flag, flagIndex) => (
                            <li key={flagIndex} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                              {flag}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Button asChild className="w-full">
                          <Link to="/verification-hub">Check This Type</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Commercial CTA */}
          <CommercialCTA 
            type="verification"
            variant="success"
          />

          {/* Platform-Specific Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Platform-Specific Verification</h2>
            
            <Tabs defaultValue="facebook" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="facebook">Facebook</TabsTrigger>
                <TabsTrigger value="ebay">eBay</TabsTrigger>
                <TabsTrigger value="craigslist">Craigslist</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              
              {platformGuides.map((platform, index) => (
                <TabsContent key={index} value={platform.platform.toLowerCase().split('/')[0].replace(' ', '')}>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{platform.platform} Verification</CardTitle>
                        <Badge variant={
                          platform.riskLevel === 'High' ? 'destructive' : 
                          platform.riskLevel === 'Medium' ? 'secondary' : 'default'
                        }>
                          {platform.riskLevel} Risk
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Safety Tips</h4>
                          <ul className="space-y-2 text-sm">
                            {platform.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Verification Process</h4>
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <p className="text-sm font-medium">{platform.verification}</p>
                          </div>
                          <Button asChild className="mt-4 w-full">
                            <Link to="/verification-hub">Verify Items Now</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How accurate are stolen item databases?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional databases like SafeOrStolen.com aggregate data from police reports, insurance claims, and manufacturer databases. 
                    Accuracy rates exceed 95% for properly reported stolen items. However, not all thefts are reported immediately.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if an item shows as "clean" but I still have doubts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Trust your instincts. A clean database check doesn't guarantee legitimacy if other red flags exist. 
                    Consider the seller's behavior, pricing, and documentation. When in doubt, walk away.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is it legal to buy something that later turns out stolen?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receiving stolen property is illegal even if purchased unknowingly. However, demonstrating "good faith" efforts 
                    like verification checks can help in legal situations. Always document your verification efforts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Start Verifying Items Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't risk buying stolen goods. Use SafeOrStolen.com's comprehensive database to verify any item in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/verification-hub">Check an Item Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">Get Professional Access</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HowToCheckAnythingStolenPage;