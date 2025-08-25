import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Search, CheckCircle, AlertTriangle, Smartphone, Car, Laptop, Watch } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const CompleteVerificationGuidePost = () => {
  const itemTypes = [
    {
      name: "Mobile Phones",
      icon: Smartphone,
      identifier: "IMEI Number",
      location: "Settings > About Phone or dial *#06#",
      example: "123456789012345",
      commonTheft: "Most stolen item type - 2.1M phones stolen annually in US",
      tips: [
        "Check IMEI before any phone purchase",
        "Verify carrier unlock status",
        "Confirm warranty status",
        "Check for insurance claims"
      ]
    },
    {
      name: "Vehicles", 
      icon: Car,
      identifier: "VIN (Vehicle Identification Number)",
      location: "Dashboard, driver's side door jam, or registration",
      example: "1HGBH41JXMN109186",
      commonTheft: "765K vehicles stolen per year - $7.4B in losses",
      tips: [
        "Always verify VIN matches title",
        "Check for flood/accident history",
        "Verify lien information",
        "Confirm registration is current"
      ]
    },
    {
      name: "Laptops & Electronics",
      icon: Laptop,
      identifier: "Serial Number",
      location: "Bottom of device, System Settings, or original box",
      example: "ABC12345DEF67890",
      commonTheft: "Electronics theft up 23% - college campuses especially targeted", 
      tips: [
        "Check serial number before purchase",
        "Verify warranty registration",
        "Confirm proof of purchase available",
        "Check for corporate asset tags"
      ]
    },
    {
      name: "Jewelry & Watches",
      icon: Watch,
      identifier: "Serial Number / Model Number",
      location: "Case back, certificate, or original documentation",
      example: "RLX123456 or varies by brand",
      commonTheft: "Luxury watches - avg $25K loss per incident",
      tips: [
        "Verify authenticity certificates",
        "Check serial against manufacturer records",
        "Confirm insurance coverage history",
        "Validate provenance documentation"
      ]
    }
  ];

  const verificationSteps = [
    {
      step: 1,
      title: "Identify the Item Type",
      description: "Determine what kind of identifier your item has",
      action: "Look for IMEI (phones), VIN (vehicles), or serial numbers (electronics)"
    },
    {
      step: 2,
      title: "Locate the Identifier",
      description: "Find the unique identifier on your specific item",
      action: "Check device settings, physical labels, or documentation"
    },
    {
      step: 3,
      title: "Run the Verification",
      description: "Enter the identifier into SafeOrStolen's verification system",
      action: "Get instant results from our comprehensive database network"
    },
    {
      step: 4,
      title: "Interpret the Results",
      description: "Understand what the verification status means for your purchase decision",
      action: "Follow our guidance based on SAFE, STOLEN, or UNKNOWN results"
    }
  ];

  const resultInterpretation = [
    {
      status: "SAFE",
      color: "sos-lime",
      icon: CheckCircle,
      meaning: "No theft reports found in any database",
      action: "Proceed with confidence - item appears legitimate",
      confidence: "High confidence - safe to purchase"
    },
    {
      status: "STOLEN",
      color: "red-500",
      icon: AlertTriangle,
      meaning: "Item reported stolen in one or more databases",
      action: "Do NOT purchase - report to authorities if possible",
      confidence: "High confidence - avoid this item"
    },
    {
      status: "UNKNOWN",
      color: "yellow-500",
      icon: Search,
      meaning: "Identifier not found or inconclusive results",
      action: "Exercise caution - request additional documentation",
      confidence: "Medium confidence - investigate further"
    }
  ];

  return (
    <>
      <PageSEO
        title="Complete Guide to Stolen Item Verification | SafeOrStolen Blog"
        description="Learn how to verify any item before purchase with our comprehensive guide. Step-by-step instructions for checking IMEI, VIN, serial numbers and more."
        keywords="stolen item verification guide, how to check if stolen, IMEI verification, VIN check, serial number lookup, verification tutorial"
      />
      
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sos-orange/10 text-sos-orange">
                <Shield className="mr-2 h-4 w-4" />
                Complete Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Guide to Stolen Item Verification
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about verifying items before purchase. 
                Protect yourself from fraud with our comprehensive step-by-step guide.
              </p>
            </div>

            {/* Why Verification Matters */}
            <Card className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-red-800">Why Verification is Critical</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-600">$13B</div>
                    <div className="text-sm text-red-700">Annual stolen goods market</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600">67%</div>
                    <div className="text-sm text-red-700">Buyers unaware they purchased stolen goods</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600">Legal Risk</div>
                    <div className="text-sm text-red-700">Possession of stolen property charges</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Item Types Guide */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-center">Verification by Item Type</h2>
              {itemTypes.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-sos-orange">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <item.icon className="h-6 w-6 text-sos-orange" />
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Identifier: {item.identifier}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
                          <div className="bg-muted p-2 rounded font-mono text-sm">{item.example}</div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Theft Statistics</h4>
                          <p className="text-sm text-red-600">{item.commonTheft}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Verification Tips</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {item.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-sos-lime flex-shrink-0" />
                              <span className="text-muted-foreground">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Step-by-Step Process */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-center">4-Step Verification Process</h2>
              {verificationSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sos-orange to-sos-lime"></div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sos-orange text-white font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className="bg-sos-lime/10 border border-sos-lime/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-sos-lime">{step.action}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Result Interpretation */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-center">Understanding Your Results</h2>
              {resultInterpretation.map((result, index) => (
                <Card key={index} className={`border-l-4 border-l-${result.color}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-3 text-xl text-${result.color}`}>
                      <result.icon className="h-5 w-5" />
                      {result.status}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-1">What it means:</h4>
                        <p className="text-muted-foreground text-sm">{result.meaning}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">What to do:</h4>
                        <p className="text-muted-foreground text-sm">{result.action}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Confidence level:</h4>
                        <p className={`text-sm font-medium text-${result.color}`}>{result.confidence}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Best Practices */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-sos-orange" />
                  Best Practices for Safe Purchasing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Before Meeting the Seller</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        Always verify the item identifier first
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        Research typical pricing for the item
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        Ask for proof of purchase or ownership
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        Meet in safe, public locations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Red Flags to Watch For</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        Prices significantly below market value
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        Seller reluctant to show identifier
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        No proof of purchase available
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        Pressure to complete transaction quickly
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get Started CTA */}
            <Card className="bg-gradient-to-r from-sos-dark to-sos text-white border-sos-orange/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Start Verifying Today</h3>
                  <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                    Join thousands of smart buyers who verify before they buy. 
                    Get started with 4 free verifications daily.
                  </p>
                  <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white">
                    Start Free Verification
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteVerificationGuidePost;