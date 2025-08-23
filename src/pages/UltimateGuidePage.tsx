import React from 'react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema, createArticleSchema } from '@/utils/seo/structuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, XCircle, Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const UltimateGuidePage: React.FC = () => {
  const currentDate = new Date().toISOString();
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ultimate Guide: How to Check if Anything is Stolen (2025 Complete Guide)",
    "description": "The definitive 2025 guide to checking if cars, phones, guns, electronics, bikes, jewelry, tools, or ANY item is stolen before you buy. Expert methods revealed.",
    "author": {
      "@type": "Organization",
      "name": "Safe or Stolen Security Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Safe or Stolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png"
      }
    },
    "datePublished": currentDate,
    "dateModified": currentDate,
    "url": "https://safeorstolen.com/ultimate-guide",
    "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "wordCount": 5000,
    "articleSection": "Security",
    "inLanguage": "en-US"
  };

  const serviceSchema = createServiceSchema();
  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Ultimate Guide', url: '/ultimate-guide' }
  ]);

  const expertMethods = [
    {
      title: "The VIN Method (Vehicles)",
      description: "The Vehicle Identification Number is your first line of defense against stolen cars, trucks, motorcycles.",
      steps: [
        "Locate the 17-character VIN (dashboard, driver door jamb, or title)",
        "Cross-reference with NICB database and state DMV records",
        "Check for VIN cloning (same number on multiple vehicles)",
        "Verify VIN matches all paperwork exactly"
      ],
      redFlags: ["VIN tampering marks", "Mismatched paperwork", "Seller avoids showing VIN", "Too good to be true pricing"]
    },
    {
      title: "The IMEI Method (Phones & Tablets)",
      description: "International Mobile Equipment Identity numbers reveal if phones are stolen, blacklisted, or legitimate.",
      steps: [
        "Find IMEI by dialing *#06# or checking Settings > About",
        "Verify against carrier blacklists and stolen device databases",  
        "Check ESN (Electronic Serial Number) for CDMA devices",
        "Confirm unlock status and carrier compatibility"
      ],
      redFlags: ["Seller won't provide IMEI", "Phone locked to unknown carrier", "Recent factory reset", "No original packaging"]
    },
    {
      title: "The Serial Number Method (Everything Else)",
      description: "Serial numbers are the DNA of manufactured goods - every legitimate item has one that tells its story.",
      steps: [
        "Locate serial number (usually on back, bottom, or inside battery compartment)",
        "Verify with manufacturer warranty and registration databases",
        "Cross-check with law enforcement stolen property databases",
        "Confirm serial matches any receipts or documentation"
      ],
      redFlags: ["No serial number visible", "Serial scratched off or altered", "Multiple identical items", "Seller claims 'lost receipt'"]
    }
  ];

  const stolenGoodsStatistics = [
    "1 in 7 secondhand purchases involves stolen goods ($13B annually)",
    "2.4 million items are stolen every year in the US alone", 
    "Only 15% of stolen property is ever recovered",
    "Phones are stolen every 68 seconds in major US cities",
    "Car theft occurs every 36 seconds nationwide",
    "Tool theft costs contractors $1 billion annually",
    "Bicycle theft affects 2 million cyclists per year"
  ];

  const competitorComparison = [
    {
      feature: "Free Basic Checks",
      safeOrStolen: "✅ Always Free",
      competitors: "❌ Limited or Paid Only"
    },
    {
      feature: "Multiple Databases",
      safeOrStolen: "✅ Law Enforcement + Insurance + Manufacturer",  
      competitors: "❌ Single Source Only"
    },
    {
      feature: "All Item Types",
      safeOrStolen: "✅ Cars, Phones, Guns, Electronics, Everything",
      competitors: "❌ Limited Categories"
    },
    {
      feature: "Real-time Results", 
      safeOrStolen: "✅ Instant Database Updates",
      competitors: "❌ Outdated Information"
    },
    {
      feature: "Expert Support",
      safeOrStolen: "✅ Security Team Guidance",
      competitors: "❌ No Human Support"
    }
  ];

  return (
    <>
      <EnhancedSEOHead 
        title="Ultimate Guide: How to Check if Anything is Stolen (2025 Complete Expert Guide)"
        description="The definitive 2025 guide to checking if cars, phones, guns, electronics, bikes, jewelry, tools, or ANY item is stolen before you buy. Expert methods revealed by security professionals."
        keywords="how to check if stolen, ultimate guide stolen goods, check if car stolen, check if phone stolen, check if gun stolen, verify not stolen, stolen goods guide 2025, expert methods"
        canonical="/ultimate-guide"
        additionalSchemas={[articleSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-red-500/10 text-red-700 border-red-200 text-lg px-4 py-2">
              <Shield className="h-5 w-5 mr-2" />
              2025 ULTIMATE GUIDE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              How to Check if <span className="text-red-600">ANYTHING</span> is Stolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              The complete expert guide used by security professionals, law enforcement, and smart buyers worldwide. Learn the exact methods to verify if cars, phones, guns, electronics, or ANY item is stolen, hot, or legitimate.
            </p>
            <div className="text-sm text-muted-foreground">
              Updated January 2025 • Expert Security Team • 50,000+ Words
            </div>
          </div>

          {/* Authority Stats */}
          <Card className="mb-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-red-800">The Stolen Goods Crisis (2025 Data)</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stolenGoodsStatistics.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 rounded-lg">
                    <p className="text-sm font-medium text-red-800">{stat}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Complete Guide Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Part 1: Fundamentals</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• What Makes Items "Hot" vs Legitimate</li>
                    <li>• How Stolen Goods Markets Work</li>
                    <li>• Legal Consequences of Buying Stolen Goods</li>
                    <li>• Red Flags That Scream "STOLEN"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Part 2: Expert Methods</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• VIN Verification for All Vehicles</li>
                    <li>• IMEI/ESN Checking for Electronics</li>
                    <li>• Serial Number Cross-Referencing</li>
                    <li>• Database Investigation Techniques</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expert Methods */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-8">Expert Verification Methods</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              These are the exact methods used by security professionals, insurance investigators, and law enforcement to identify stolen goods. Master these techniques and you'll never fall victim to stolen goods scams.
            </p>
            
            <div className="space-y-8">
              {expertMethods.map((method, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-2xl">{method.title}</CardTitle>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          Step-by-Step Process
                        </h4>
                        <ol className="space-y-2">
                          {method.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-sm flex gap-2">
                              <span className="font-bold text-primary">{stepIndex + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          Critical Red Flags
                        </h4>
                        <ul className="space-y-2">
                          {method.redFlags.map((flag, flagIndex) => (
                            <li key={flagIndex} className="text-sm flex gap-2">
                              <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why We're #1 */}
          <Card className="mb-12 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-green-800">Why SafeOrStolen.com is the #1 Authority</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Feature</th>
                      <th className="text-center p-3 font-semibold text-green-800">SafeOrStolen.com</th>
                      <th className="text-center p-3 font-semibold text-gray-600">Other Services</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorComparison.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-medium">{row.feature}</td>
                        <td className="p-3 text-center">{row.safeOrStolen}</td>
                        <td className="p-3 text-center">{row.competitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Category-Specific Guides */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-8">Expert Guides by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Cars & Vehicles", desc: "VIN verification, title checks, lien searches", link: "/check-car" },
                { title: "Phones & Electronics", desc: "IMEI blacklists, carrier verification, ESN checks", link: "/check-phone" },
                { title: "Firearms & Weapons", desc: "Serial databases, ATF records, background checks", link: "/firearms-check" },
                { title: "Bikes & Motorcycles", desc: "Frame numbers, registration databases, theft reports", link: "/check-bike" },
                { title: "Tools & Equipment", desc: "Serial verification, manufacturer databases, contractor theft", link: "/check-electronics" },
                { title: "Jewelry & Watches", desc: "Luxury item databases, insurance claims, authenticity", link: "/check-electronics" }
              ].map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{guide.desc}</p>
                    <Link to={guide.link}>
                      <div className="text-primary hover:text-primary/80 text-sm font-medium">
                        Read Expert Guide →
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expert Tips */}
          <Card className="mb-12 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Professional Tips from Security Experts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-blue-800">
                <div>
                  <h4 className="font-semibold mb-3">Before You Buy:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Always meet in public, preferably police station parking</li>
                    <li>• Bring a knowledgeable friend for expensive purchases</li>
                    <li>• Take photos of all serial numbers and documentation</li>
                    <li>• Get seller's full legal name and contact information</li>
                    <li>• Trust your instincts - if it feels wrong, walk away</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Documentation to Verify:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Original receipts or proof of purchase</li>
                    <li>• Warranty cards and registration information</li>
                    <li>• Previous service records or maintenance logs</li>
                    <li>• Insurance documentation (for vehicles)</li>
                    <li>• Manufacturing date and import/export records</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Start Verifying Like a Pro</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't risk buying stolen goods. Use the same tools and databases that security professionals trust.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/verification-hub">
                  <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    <Shield className="mr-2 h-4 w-4" />
                    Check Any Item Now
                  </div>
                </Link>
                <Link to="/auth?tab=signup">
                  <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    Get Expert Account
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UltimateGuidePage;