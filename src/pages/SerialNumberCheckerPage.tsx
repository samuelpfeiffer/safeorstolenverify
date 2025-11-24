import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { createServiceSchema } from '@/utils/seo/structuredData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hash, Search, AlertTriangle, Shield, Laptop, Camera, Watch } from 'lucide-react';
import { ServiceOfferSchema } from '@/components/seo/ServiceOfferSchema';

const SerialNumberCheckerPage: React.FC = () => {
  const serviceSchema = createServiceSchema();
  const structuredData = [{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Serial Number Checker - Verify if Item is Stolen",
    "description": "Free serial number checker to verify if electronics, bikes, and other items are reported stolen. Check before buying to avoid purchasing stolen goods.",
    "url": "https://safeorstolen.com/serial-number-checker",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web Browser",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    }
  }, serviceSchema];

  return (
    <>
      <PageSEO
        title="Free Serial Number Checker - Verify if Item is Stolen | SafeOrStolen"
        description="Check if electronics, bikes, or other items are stolen before buying with our free serial number checker. Verify against theft databases to avoid stolen goods."
        keywords="serial number lookup, check electronics serial number, laptop serial number verification, verify bike serial number, serial number stolen check"
        canonical="/serial-number-checker"
        structuredData={structuredData}
      />
      <ServiceOfferSchema />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Free Serial Number Checker
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Verify if electronics, bicycles, and other valuable items are reported stolen before making a purchase. 
              Our serial number checker searches theft databases to protect you from buying stolen goods.
            </p>
          </div>

          {/* Serial Checker Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Hash className="h-6 w-6" />
                  Enter Serial Number
                </CardTitle>
                <CardDescription>
                  Find serial numbers on product labels, settings menus, or original packaging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter serial number (varies by product)"
                    className="text-center text-lg"
                  />
                  <Button className="w-full" size="lg">
                    <Search className="h-5 w-5 mr-2" />
                    Check Serial Number
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Supported Items */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Items We Can Verify</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Laptop className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Electronics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Laptops & Computers</li>
                    <li>• Gaming Consoles</li>
                    <li>• Tablets & iPads</li>
                    <li>• Smart TVs</li>
                    <li>• Audio Equipment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Camera className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Photography</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• DSLR Cameras</li>
                    <li>• Camera Lenses</li>
                    <li>• Professional Equipment</li>
                    <li>• Camcorders</li>
                    <li>• Tripods & Accessories</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Watch className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Other Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bicycles</li>
                    <li>• Watches</li>
                    <li>• Power Tools</li>
                    <li>• Musical Instruments</li>
                    <li>• Sports Equipment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle>Theft Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verify items against police reports and theft databases before purchase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Quick Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get instant results when checking serial numbers across multiple databases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Legal Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Avoid legal issues from unknowingly purchasing stolen merchandise.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>How to Check if Items are Stolen Using Serial Numbers</h2>
            <p>
              Most valuable items have unique serial numbers that manufacturers assign for identification and warranty purposes. 
              When items are reported stolen, these serial numbers are entered into law enforcement databases. 
              Our serial number checker helps you verify an item's status before purchase.
            </p>

            <h3>What are Serial Numbers?</h3>
            <p>
              Serial numbers are unique identifiers assigned to individual products by manufacturers. They help with:
            </p>
            <ul>
              <li>Product identification and warranty tracking</li>
              <li>Theft recovery and law enforcement investigations</li>
              <li>Insurance claims and documentation</li>
              <li>Authenticity verification</li>
            </ul>

            <h3>Why Check Serial Numbers Before Buying?</h3>
            <p>
              Purchasing stolen goods can result in serious consequences:
            </p>
            <ul>
              <li><strong>Legal Issues:</strong> Possession of stolen property is a crime</li>
              <li><strong>Property Seizure:</strong> Police can confiscate stolen items</li>
              <li><strong>Financial Loss:</strong> No compensation when items are returned to owners</li>
              <li><strong>Criminal Investigation:</strong> You may become part of a theft investigation</li>
            </ul>

            <h3>How Our Serial Number Checker Works</h3>
            <p>
              Our verification system searches multiple databases simultaneously:
            </p>
            <ol>
              <li>Enter the product's serial number</li>
              <li>System searches law enforcement theft databases</li>
              <li>Cross-reference with insurance claim records</li>
              <li>Check manufacturer warranty status</li>
              <li>Receive comprehensive status report</li>
            </ol>

            <h3>Where to Find Serial Numbers</h3>
            <p>Serial numbers are typically located:</p>
            <ul>
              <li><strong>Electronics:</strong> On product labels, in system settings, or battery compartments</li>
              <li><strong>Bicycles:</strong> On the frame, usually near the bottom bracket</li>
              <li><strong>Cameras:</strong> On the bottom or inside the battery compartment</li>
              <li><strong>Laptops:</strong> On the bottom panel or under the battery</li>
              <li><strong>Tools:</strong> Engraved on the tool body or motor housing</li>
            </ul>

            <h3>Common Check Results</h3>
            <ul>
              <li><strong>Clear:</strong> No theft reports found - safe to purchase</li>
              <li><strong>Stolen:</strong> Item reported stolen - do not purchase</li>
              <li><strong>Suspicious:</strong> Unusual activity detected - investigate further</li>
              <li><strong>Invalid:</strong> Serial number format not recognized</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerialNumberCheckerPage;