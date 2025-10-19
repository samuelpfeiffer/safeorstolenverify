import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Search, AlertTriangle, Shield, FileCheck } from 'lucide-react';

const VINVerificationPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "VIN Checker - Verify if Car is Stolen",
    "description": "Free VIN checker to verify if a vehicle is reported stolen before buying. Check car history and protect yourself from purchasing stolen vehicles.",
    "url": "https://safeorstolen.com/vin-verification",
    "applicationCategory": "AutomotiveApplication",
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
        title="Free VIN Checker - Verify if Car is Stolen | SafeOrStolen"
        description="Check if a car is stolen before buying with our free VIN checker. Enter any vehicle identification number to verify its status against stolen car databases."
        keywords="VIN checker, stolen car checker, vehicle verification, check stolen car, VIN lookup, car history check, vehicle theft verification"
        canonical="/vin-verification"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Free VIN Check - Verify Car Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Check & verify if a vehicle is stolen before buying. Free database search of law enforcement records.
              Search VIN numbers to protect yourself from stolen cars, trucks, and motorcycles.
            </p>
          </div>

          {/* VIN Checker Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Car className="h-6 w-6" />
                  Enter VIN Number
                </CardTitle>
                <CardDescription>
                  Find your VIN on the dashboard, driver's door frame, or vehicle registration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter 17-character VIN (e.g., 1HGBH41JXMN109186)"
                    className="text-center text-lg font-mono"
                    maxLength={17}
                  />
                  <Button className="w-full" size="lg">
                    <Search className="h-5 w-5 mr-2" />
                    Search Database Free
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                  Verify vehicle status against NCIC and law enforcement stolen vehicle databases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileCheck className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Title Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check for title issues, liens, and legal complications before purchase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Fraud Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protect yourself from vehicle fraud, title washing, and stolen car scams.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>How to Check if a Car is Stolen Using VIN - Free Database</h2>
            <p>
              Every vehicle manufactured since 1981 has a unique 17-character Vehicle Identification Number (VIN) that serves as its DNA. 
              When vehicles are reported stolen, their VIN numbers are entered into national databases. Our free VIN checker searches 
              these databases to help you verify a vehicle's history before purchase.
            </p>

            <h3>What is a VIN Number?</h3>
            <p>
              A VIN is a 17-character code that uniquely identifies every vehicle. This number contains important information about:
            </p>
            <ul>
              <li>Vehicle manufacturer and model year</li>
              <li>Manufacturing plant and assembly line</li>
              <li>Engine type and vehicle specifications</li>
              <li>Theft and insurance claim history</li>
            </ul>

            <h3>Why Check VIN Before Buying Used Cars?</h3>
            <p>
              Purchasing a stolen vehicle can result in devastating consequences:
            </p>
            <ul>
              <li><strong>Legal Seizure:</strong> Police can confiscate stolen vehicles without compensation</li>
              <li><strong>Criminal Charges:</strong> Possession of stolen property charges</li>
              <li><strong>Financial Loss:</strong> Complete loss of purchase money</li>
              <li><strong>Title Issues:</strong> Unable to register or insure the vehicle</li>
            </ul>

            <h3>How Our VIN Checker Works</h3>
            <p>
              Our comprehensive VIN verification system checks multiple authoritative sources:
            </p>
            <ol>
              <li>Enter the 17-character VIN number</li>
              <li>System searches NCIC stolen vehicle database</li>
              <li>Cross-reference with insurance theft claims</li>
              <li>Check DMV records for title issues</li>
              <li>Receive detailed vehicle status report</li>
            </ol>

            <h3>Common VIN Check Results</h3>
            <ul>
              <li><strong>Clear:</strong> No theft reports - safe to purchase</li>
              <li><strong>Stolen:</strong> Vehicle reported stolen - do not buy</li>
              <li><strong>Recovered:</strong> Previously stolen but recovered - verify clear title</li>
              <li><strong>Salvage:</strong> Declared total loss by insurance</li>
              <li><strong>Lien:</strong> Outstanding loans or liens on vehicle</li>
            </ul>

            <h3>Where to Find Your VIN</h3>
            <p>You can locate a vehicle's VIN in several places:</p>
            <ul>
              <li>Dashboard on driver's side (visible through windshield)</li>
              <li>Driver's side door frame sticker</li>
              <li>Vehicle registration and title documents</li>
              <li>Insurance cards and policies</li>
              <li>Engine block (stamped on metal)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VINVerificationPage;