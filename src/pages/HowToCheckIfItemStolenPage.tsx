import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Search, 
  Car, 
  Smartphone, 
  Laptop, 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  ExternalLink,
  Clock,
  Database,
  Users
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';

const HowToCheckIfItemStolenPage: React.FC = () => {
  const methods = [
    {
      title: "SafeOrStolen.com - Instant Verification",
      description: "Free instant checks for IMEI, VIN, and serial numbers across multiple databases",
      icon: <Shield className="h-6 w-6" />,
      category: "Recommended",
      features: ["Instant results", "Multiple databases", "Free checks", "No registration required"],
      url: "/",
      isRecommended: true
    },
    {
      title: "National Crime Information Center (NCIC)",
      description: "Law enforcement database for stolen property - requires police assistance",
      icon: <Database className="h-6 w-6" />,
      category: "Law Enforcement",
      features: ["Most comprehensive", "Police access only", "All item types", "Official records"],
      url: null,
      isRecommended: false
    },
    {
      title: "NICB VINCheck",
      description: "Free vehicle history check for theft and insurance claims",
      icon: <Car className="h-6 w-6" />,
      category: "Vehicles Only",
      features: ["Free vehicle checks", "Insurance records", "Theft history", "Total loss records"],
      url: "https://www.nicb.org/vincheck",
      isRecommended: false
    },
    {
      title: "Immobilise.net",
      description: "UK-based property registration and checking service",
      icon: <Search className="h-6 w-6" />,
      category: "International",
      features: ["UK focused", "Registration required", "Various items", "Property marking"],
      url: "https://www.immobilise.com",
      isRecommended: false
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Gather Item Information",
      description: "Collect the serial number, IMEI, VIN, or other identifying information",
      items: ["Serial number", "IMEI (phones)", "VIN (vehicles)", "Model number", "MAC address"]
    },
    {
      step: 2,
      title: "Choose Verification Method",
      description: "Select the appropriate database or service for your item type",
      items: ["Start with SafeOrStolen.com", "Use NICB for vehicles", "Contact police for NCIC", "Try specialized databases"]
    },
    {
      step: 3,
      title: "Run the Check",
      description: "Enter the information into the chosen verification service",
      items: ["Enter serial number", "Select item type", "Review results", "Save verification record"]
    },
    {
      step: 4,
      title: "Interpret Results",
      description: "Understand what the verification results mean for your situation",
      items: ["Safe to purchase", "Reported stolen", "Unknown status", "Contact authorities if stolen"]
    }
  ];

  const itemTypes = [
    { name: "Mobile Phones", identifier: "IMEI (15 digits)", example: "123456789012345" },
    { name: "Vehicles", identifier: "VIN (17 characters)", example: "1HGBH41JXMN109186" },
    { name: "Laptops", identifier: "Serial Number", example: "ABC123DEF456" },
    { name: "Power Tools", identifier: "Serial Number", example: "TL123456789" },
    { name: "Bicycles", identifier: "Frame Number", example: "BK987654321" },
    { name: "Gaming Consoles", identifier: "Serial Number", example: "GC123456789012" }
  ];

  const warningsSigns = [
    "Seller reluctant to provide serial numbers",
    "Price significantly below market value", 
    "No original packaging or documentation",
    "Seller pressure to buy immediately",
    "Item shows signs of tampering",
    "Missing or altered identification labels"
  ];

  return (
    <>
      <PageSEO
        title="How to Check if Something is Stolen: Complete Guide 2024 | SafeOrStolen"
        description="Learn how to check if an item is stolen before buying. Free tools to verify IMEI, VIN, serial numbers. Check phones, cars, electronics against police databases. Avoid buying stolen goods."
        keywords="how to check if stolen, stolen item database, IMEI check stolen, VIN check stolen, serial number lookup, stolen property check, avoid stolen goods, NCIC database, stolen phone check"
        canonical="/how-to-check-if-item-stolen"
      />
      
      <div className="min-h-screen bg-background">
      {/* Structured Data for HowTo */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Check if Something is Stolen",
          "description": "Complete guide on verifying if an item is stolen before purchase",
          "totalTime": "PT5M",
          "supply": [
            { "@type": "HowToSupply", "name": "Serial number or IMEI" },
            { "@type": "HowToSupply", "name": "Internet connection" }
          ],
          "tool": [
            { "@type": "HowToTool", "name": "SafeOrStolen verification tool" },
            { "@type": "HowToTool", "name": "NICB VINCheck (for vehicles)" }
          ],
          "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description
          }))
        })}
      </script>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How to Check if Something is Stolen
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Complete guide to verifying items before purchase. Learn to check serial numbers, 
            IMEI codes, and VIN numbers against stolen property databases.
          </p>
          
          <Alert className="mb-8 bg-primary/10 border-primary">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-left">
              <strong>Quick Check:</strong> Start with SafeOrStolen.com for instant, free verification 
              of most items. For law enforcement verification, contact your local police department.
            </AlertDescription>
          </Alert>
        </header>

        {/* Verification Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Methods to Check if Items are Stolen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {methods.map((method, index) => (
              <Card key={index} className={method.isRecommended ? "border-primary shadow-lg" : ""}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {method.icon}
                    <div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant={method.isRecommended ? "default" : "secondary"}>
                          {method.category}
                        </Badge>
                        {method.isRecommended && (
                          <Badge variant="outline" className="text-primary border-primary">
                            Recommended
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {method.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-4">
                    {method.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {method.url && (
                    <Button asChild className="w-full">
                      {method.url.startsWith('/') ? (
                        <Link to={method.url}>
                          {method.isRecommended ? 'Start Free Check' : 'Visit Service'}
                        </Link>
                      ) : (
                        <a href={method.url} target="_blank" rel="noopener noreferrer">
                          Visit Service <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Step-by-Step Verification Process</h2>
          <div className="grid gap-6">
            {steps.map((step, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {step.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Item Types and Identifiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Item Types and Their Identifiers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {itemTypes.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.identifier}</p>
                  <code className="bg-muted px-2 py-1 rounded text-sm">{item.example}</code>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Warning Signs When Buying Used Items</h2>
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {warningsSigns.map((warning, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-sm">{warning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What to Do If Stolen */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Do If Item is Stolen</h2>
          <Alert className="bg-destructive/10 border-destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-2">
                <p className="font-semibold">If you discover an item is stolen:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Do not complete the purchase</li>
                  <li>Contact local law enforcement immediately</li>
                  <li>Provide all information about the seller</li>
                  <li>Keep records of your verification check</li>
                  <li>Report the listing to the marketplace platform</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-2">Can I check serial numbers for free?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, SafeOrStolen.com offers free serial number checks. NICB VINCheck is also free for vehicles. 
                  Some services require registration or payment for detailed reports.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-2">How accurate are stolen item databases?</h3>
                <p className="text-sm text-muted-foreground">
                  Accuracy depends on reporting. NCIC is most comprehensive but requires law enforcement access. 
                  Private databases rely on user reports. Always use multiple sources when possible.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-2">What if an item shows as "unknown" status?</h3>
                <p className="text-sm text-muted-foreground">
                  Unknown status means the item wasn't found in available databases. This doesn't guarantee it's not stolen. 
                  Ask for proof of purchase and verify the seller's identity.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">Start Checking Items Now</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't risk buying stolen goods. Verify any item's status in seconds with our free checker tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/">Check Serial Number</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </>
  );
};

export default HowToCheckIfItemStolenPage;