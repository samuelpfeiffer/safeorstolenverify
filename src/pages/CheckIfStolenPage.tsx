import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Search, Shield, Database, AlertCircle, CheckCircle, Phone, Car, Laptop } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function CheckIfStolenPage() {
  const [serialNumber, setSerialNumber] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (serialNumber.trim()) {
      navigate(`/verify?serial=${encodeURIComponent(serialNumber)}`);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Check If Stolen Database",
    "applicationCategory": "SecurityApplication",
    "description": "Free stolen item checker. Verify IMEI, VIN, serial numbers against 50M+ stolen goods database records instantly.",
    "url": "https://safeorstolen.com/check-if-stolen",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <PageSEO
        title="Check If Stolen - Free IMEI, VIN, Serial Number Database Lookup"
        description="Check if an item is stolen before buying. Free instant verification of phones, cars, electronics using IMEI, VIN, serial numbers. 50M+ records checked."
        keywords="check if stolen, stolen goods database, IMEI checker, VIN checker, serial number lookup, verify before buying, stolen item search"
        canonical="/check-if-stolen"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Check If Stolen', href: '/check-if-stolen' }]} />
        </div>

        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">50M+ Records Checked Daily</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Check If Something Is Stolen
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Free instant verification against global stolen goods databases. Protect yourself from buying stolen items.
              </p>

              {/* Search Form */}
              <Card className="max-w-2xl mx-auto mb-12">
                <CardHeader>
                  <CardTitle>Enter Item Information</CardTitle>
                  <CardDescription>
                    IMEI, VIN, or Serial Number - Works for phones, cars, electronics, and more
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      placeholder="e.g., 123456789012345 or 1HGBH41JXMN109186"
                      value={serialNumber}
                      onChange={(e) => setSerialNumber(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleVerify}
                      size="lg"
                      className="sm:w-auto w-full"
                      disabled={!serialNumber.trim()}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Verify Now
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    2 free searches included. No credit card required.
                  </p>
                </CardContent>
              </Card>

              <Alert className="max-w-2xl mx-auto mb-8">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> Always verify items before purchase to avoid financial loss and legal issues.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What You Can Check</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Phones & Tablets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check IMEI numbers for iPhones, Samsung, Android devices, iPads
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      iPhone, Samsung Galaxy
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      iPad, Android tablets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Smartwatches
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Car className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Vehicles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verify VIN numbers for cars, motorcycles, boats, RVs
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Cars, trucks, SUVs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Motorcycles, ATVs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Boats, jet skis, RVs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Laptop className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Electronics & More</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check serial numbers for laptops, cameras, tools, equipment
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Laptops, computers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Cameras, TVs, consoles
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Tools, machinery, bikes
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Enter Identifier</h3>
                <p className="text-sm text-muted-foreground">
                  Type IMEI, VIN, or serial number
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Database Search</h3>
                <p className="text-sm text-muted-foreground">
                  We check 50M+ global records
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  Get status in 30 seconds
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Make Decision</h3>
                <p className="text-sm text-muted-foreground">
                  Buy safely with confidence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Database Sources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6">Comprehensive Database Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our system checks multiple sources to provide the most accurate stolen goods verification
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-background p-4 rounded-lg border">
                  <p className="font-semibold">NICB Database</p>
                  <p className="text-xs text-muted-foreground">Vehicle theft records</p>
                </div>
                <div className="bg-background p-4 rounded-lg border">
                  <p className="font-semibold">GSMA IMEI</p>
                  <p className="text-xs text-muted-foreground">Global phone database</p>
                </div>
                <div className="bg-background p-4 rounded-lg border">
                  <p className="font-semibold">BikeIndex</p>
                  <p className="text-xs text-muted-foreground">Bicycle registry</p>
                </div>
                <div className="bg-background p-4 rounded-lg border">
                  <p className="font-semibold">Law Enforcement</p>
                  <p className="text-xs text-muted-foreground">Police reports</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-3xl">Ready to Verify?</CardTitle>
                <CardDescription className="text-lg">
                  Start with 2 free searches. No credit card required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => navigate('/verify')}>
                    Start Free Verification
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')}>
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
