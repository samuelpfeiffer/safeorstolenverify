import React from 'react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Search, 
  FileText, 
  Smartphone, 
  Car, 
  Bike, 
  Laptop,
  ShoppingCart,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import { CommercialCTA } from '@/components/blog/CommercialCTA';
import { createArticleSchema, createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';

const UltimateGuideNotBuyingStolenPage = () => {
  const currentDate = new Date().toISOString();
  
  // Structured data for SEO
  const articleSchema = createArticleSchema({
    id: "ultimate-guide-not-buying-stolen-goods",
    title: "The Ultimate Guide to Not Buying Stolen Goods",
    slug: "ultimate-guide-not-buying-stolen-goods",
    excerpt: "Complete guide to protecting yourself from stolen goods when buying secondhand items from Facebook Marketplace, eBay, Craigslist, and pawn shops.",
    content: "Comprehensive guide covering verification methods, red flags, legal implications, and step-by-step processes for safe secondhand shopping. Learn professional verification techniques used by law enforcement and security experts to protect yourself when shopping on popular platforms.",
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
  { name: 'Ultimate Guide to Not Buying Stolen Goods', url: '/ultimate-guide-not-buying-stolen-goods' }
  ]);

  const combinedSchema = [articleSchema, serviceSchema, faqSchema, breadcrumbSchema];

  // Verification methods with commercial intent focus
  const verificationMethods = [
    {
      title: "Serial Number Verification",
      description: "Check serial numbers against police databases and manufacturer records",
      icon: Search,
      steps: [
        "Locate the serial number on the item",
        "Use SafeOrStolen.com to check against databases",
        "Verify with manufacturer if purchased recently",
        "Cross-reference with insurance databases"
      ],
      redFlags: ["No serial number visible", "Serial number tampered/scratched", "Seller refuses to provide serial"],
      platforms: ["Facebook Marketplace", "eBay", "Craigslist", "Pawn Shops"]
    },
    {
      title: "IMEI Check for Phones",
      description: "Verify mobile devices against carrier blacklists and theft databases",
      icon: Smartphone,
      steps: [
        "Dial *#06# to get IMEI number",
        "Check IMEI on SafeOrStolen.com",
        "Verify with carrier blacklist status",
        "Check iCloud/Google account locks"
      ],
      redFlags: ["Phone locked to unknown account", "IMEI blocked by carrier", "No IMEI accessible"],
      platforms: ["Facebook Marketplace", "eBay", "Swappa", "Local sellers"]
    },
    {
      title: "VIN Verification for Vehicles",
      description: "Check vehicles against theft records and title issues",
      icon: Car,
      steps: [
        "Locate VIN on dashboard and door frame",
        "Run VIN through NICB VINCheck",
        "Verify title ownership matches seller",
        "Check for liens and accidents"
      ],
      redFlags: ["Title issues", "VIN doesn't match paperwork", "Seller pressure to buy quickly"],
      platforms: ["Autotrader", "Cars.com", "Facebook Marketplace", "Craigslist"]
    }
  ];

  // Platform-specific safety tips
  const platformTips = [
    {
      platform: "Facebook Marketplace",
      icon: ShoppingCart,
      tips: [
        "Meet in public Facebook Marketplace meetup spots",
        "Check seller's profile history and reviews",
        "Use Facebook's buyer protection when available",
        "Verify serial numbers before meeting"
      ],
      riskLevel: "Medium"
    },
    {
      platform: "eBay",
      icon: ExternalLink,
      tips: [
        "Check seller feedback and return policy",
        "Use eBay's buyer protection program",
        "Ask for serial numbers in messages",
        "Verify item descriptions match photos"
      ],
      riskLevel: "Low"
    },
    {
      platform: "Craigslist",
      icon: AlertTriangle,
      tips: [
        "Always meet in police station parking lots",
        "Bring someone with you",
        "Verify serial numbers beforehand",
        "Trust your instincts - if it feels wrong, walk away"
      ],
      riskLevel: "High"
    },
    {
      platform: "Pawn Shops",
      icon: Shield,
      tips: [
        "Check shop's license and reputation",
        "Ask for purchase documentation",
        "Verify items with SafeOrStolen.com",
        "Understand return policies"
      ],
      riskLevel: "Low"
    }
  ];

  // Legal consequences section
  const legalConsequences = [
    {
      consequence: "Criminal Charges",
      description: "Receiving stolen property is a crime in all 50 states, even if you didn't know it was stolen",
      severity: "High"
    },
    {
      consequence: "Property Confiscation",
      description: "Police can seize stolen goods even if you paid for them in good faith",
      severity: "High"
    },
    {
      consequence: "Financial Loss",
      description: "No refund if item is returned to original owner - you lose both money and item",
      severity: "High"
    },
    {
      consequence: "Legal Fees",
      description: "Potential court costs and attorney fees to prove innocence",
      severity: "Medium"
    }
  ];

  return (
    <>
      <EnhancedSEOHead
        title="The Ultimate Guide to Not Buying Stolen Goods - Protect Your Purchases"
        description="Complete guide to avoiding stolen goods when buying secondhand. Learn verification methods for Facebook Marketplace, eBay, Craigslist. Protect yourself legally and financially."
        keywords="avoid buying stolen goods, secondhand buyer protection, Facebook Marketplace safety, eBay stolen items, Craigslist safety tips, verify before buying, stolen goods guide, buyer protection tips"
        canonical="/ultimate-guide-not-buying-stolen-goods"
        additionalSchemas={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
              Ultimate Buyer Protection Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Ultimate Guide to Not Buying Stolen Goods
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protect yourself from stolen merchandise when shopping on Facebook Marketplace, eBay, Craigslist, and pawn shops. 
              Learn professional verification methods used by law enforcement and security experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/verification-hub">Start Verifying Items Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">Get Expert Account</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Verification Methods</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Serial Number Verification</li>
                  <li>• IMEI Phone Checking</li>
                  <li>• VIN Vehicle Verification</li>
                  <li>• Electronics & Devices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Platform Safety</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Facebook Marketplace Safety</li>
                  <li>• eBay Protection Tips</li>
                  <li>• Craigslist Red Flags</li>
                  <li>• Pawn Shop Verification</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Legal Stakes Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              Why This Matters: Legal & Financial Consequences
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {legalConsequences.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.consequence}</h3>
                      <Badge variant={item.severity === 'High' ? 'destructive' : 'secondary'}>
                        {item.severity} Risk
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
              <p className="text-sm">
                <strong>Legal Fact:</strong> In most jurisdictions, purchasing stolen property is a crime even if you had no knowledge it was stolen. 
                The burden of proof often falls on you to demonstrate "good faith" purchase efforts, making verification essential.
              </p>
            </div>
          </section>

          {/* Verification Methods */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              Professional Verification Methods
            </h2>
            <div className="space-y-8">
              {verificationMethods.map((method, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <method.icon className="h-6 w-6 text-primary" />
                      {method.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Verification Steps</h4>
                        <ol className="space-y-2 text-sm">
                          {method.steps.map((step, stepIndex) => (
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
                        <h4 className="font-semibold mb-3 text-destructive">Red Flags</h4>
                        <ul className="space-y-2 text-sm">
                          {method.redFlags.map((flag, flagIndex) => (
                            <li key={flagIndex} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                              {flag}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Common Platforms</h4>
                        <ul className="space-y-2 text-sm">
                          {method.platforms.map((platform, platformIndex) => (
                            <li key={platformIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              {platform}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Platform-Specific Safety */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <ShoppingCart className="h-8 w-8 text-primary" />
              Platform-Specific Safety Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {platformTips.map((platform, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center gap-3">
                        <platform.icon className="h-6 w-6" />
                        {platform.platform}
                      </CardTitle>
                      <Badge variant={
                        platform.riskLevel === 'High' ? 'destructive' : 
                        platform.riskLevel === 'Medium' ? 'secondary' : 'default'
                      }>
                        {platform.riskLevel} Risk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {platform.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Reference Checklist */}
          <section className="mb-16">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <CheckCircle className="h-7 w-7 text-primary" />
                  Pre-Purchase Verification Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Before Meeting Seller</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Ask seller for serial/IMEI/VIN number
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Run verification on SafeOrStolen.com
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Research seller's profile/feedback
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Arrange safe meeting location
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">During Purchase</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Verify physical serial numbers match listing
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Test all functions properly
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Get receipt or proof of purchase
                      </li>
                      <li className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Document transaction details
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Commercial CTA Mid-Article */}
          <CommercialCTA 
            type="protection"
            variant="primary"
          />

          {/* Expert Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Expert Tips from Security Professionals</h2>
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Trust Your Instincts</h3>
                  <p className="text-sm text-muted-foreground">
                    If a deal seems too good to be true, it probably is. Professional thieves often price items 50-70% below market value for quick sales.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Document Everything</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep records of all verification checks, seller communications, and transaction details. This documentation can protect you legally.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">When in Doubt, Walk Away</h3>
                  <p className="text-sm text-muted-foreground">
                    No purchase is worth legal troubles or financial loss. If verification raises any concerns, find another seller.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Start Protecting Your Purchases Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't risk buying stolen goods. Use SafeOrStolen.com's comprehensive verification system to check any item before you buy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/verification-hub">Verify an Item Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">Get Professional Account</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UltimateGuideNotBuyingStolenPage;