import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, AlertTriangle, CheckCircle } from 'lucide-react';

const IMEICheckerPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "IMEI Checker - Verify if Phone is Stolen",
    "description": "Free IMEI checker to verify if a mobile phone or smartphone is reported stolen before buying. Protect yourself from purchasing stolen devices.",
    "url": "https://safeorstolen.com/imei-checker",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    }
  };

  return (
    <>
      <PageSEO
        title="Free IMEI Checker - Verify if Phone is Stolen | SafeOrStolen"
        description="Check if a phone is stolen before buying with our free IMEI checker. Enter any mobile device IMEI number to verify its status against stolen device databases."
        keywords="IMEI checker, stolen phone checker, verify IMEI, check stolen phone, mobile device verification, smartphone security check"
        canonical="/imei-checker"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Free IMEI Checker Tool
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Verify if a mobile phone or smartphone is reported stolen before making a purchase. 
              Our IMEI checker searches multiple databases to protect you from buying stolen devices.
            </p>
          </div>

          {/* IMEI Checker Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Shield className="h-6 w-6" />
                  Enter IMEI Number
                </CardTitle>
                <CardDescription>
                  Find your IMEI by dialing *#06# on your phone or checking Settings → About Phone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter 15-digit IMEI number (e.g., 123456789012345)"
                    className="text-center text-lg"
                  />
                  <Button className="w-full" size="lg">
                    <Search className="h-5 w-5 mr-2" />
                    Check IMEI Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle>Instant Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get immediate results when checking IMEI numbers against our comprehensive stolen device database.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Multiple Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We search across multiple law enforcement and carrier databases for comprehensive coverage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Fraud Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protect yourself from unknowingly purchasing stolen smartphones and mobile devices.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>How to Check if a Phone is Stolen Using IMEI</h2>
            <p>
              Every mobile device has a unique International Mobile Equipment Identity (IMEI) number that serves as its fingerprint. 
              When phones are reported stolen to law enforcement or carriers, their IMEI numbers are added to blacklist databases. 
              Our IMEI checker tool searches these databases to help you verify a device's status before purchase.
            </p>

            <h3>What is an IMEI Number?</h3>
            <p>
              An IMEI is a 15-digit unique identifier assigned to every mobile phone and smartphone. This number helps:
            </p>
            <ul>
              <li>Identify devices on cellular networks</li>
              <li>Track stolen or lost phones</li>
              <li>Block compromised devices from network access</li>
              <li>Verify device authenticity and warranty status</li>
            </ul>

            <h3>Why Check IMEI Before Buying Used Phones?</h3>
            <p>
              Purchasing a stolen phone can result in serious consequences:
            </p>
            <ul>
              <li><strong>Legal Issues:</strong> Possession of stolen property is illegal</li>
              <li><strong>Network Blocking:</strong> Carriers will block stolen devices</li>
              <li><strong>Financial Loss:</strong> You may lose both money and the device</li>
              <li><strong>No Support:</strong> Manufacturers won't provide warranty support</li>
            </ul>

            <h3>How Our IMEI Checker Works</h3>
            <p>
              Our advanced IMEI verification system checks multiple databases simultaneously:
            </p>
            <ol>
              <li>Enter the 15-digit IMEI number</li>
              <li>Our system searches law enforcement databases</li>
              <li>We check carrier blacklists and theft reports</li>
              <li>Receive instant results about the device status</li>
            </ol>

            <h3>Common IMEI Check Results</h3>
            <ul>
              <li><strong>Clean:</strong> No theft reports found - safe to purchase</li>
              <li><strong>Blacklisted:</strong> Device reported stolen - avoid purchase</li>
              <li><strong>Lost:</strong> Device reported lost - proceed with caution</li>
              <li><strong>Invalid:</strong> IMEI format incorrect - verify number</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default IMEICheckerPage;