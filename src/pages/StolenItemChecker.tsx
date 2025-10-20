import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Shield, CheckCircle, AlertTriangle, Phone, Car, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TwoSidedSearchForm } from '@/components/hero/TwoSidedSearchForm';
import { useNavigate } from 'react-router-dom';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';
import { HighImpactFAQ } from '@/components/seo/HighImpactFAQ';

const StolenItemChecker = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Stolen Item Checker",
    "description": "Free online tool to check if items are stolen. Verify IMEI, VIN, and serial numbers against stolen goods databases instantly.",
    "url": "https://safeorstolen.com/stolen-item-checker",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Check if phone is stolen by IMEI",
      "Verify if car is stolen by VIN",
      "Stolen electronics verification",
      "Serial number stolen lookup",
      "Instant stolen goods verification"
    ]
  };

  const checkableItems = [
    {
      icon: Phone,
      title: "Phones & Mobile Devices",
      description: "Check IMEI numbers to verify if smartphones, tablets, or mobile devices are reported stolen",
      examples: ["iPhone IMEI check", "Android phone verification", "Tablet stolen lookup"]
    },
    {
      icon: Car,
      title: "Vehicles & Cars", 
      description: "Verify VIN numbers to check if cars, motorcycles, or vehicles have been reported stolen",
      examples: ["Car VIN verification", "Motorcycle theft check", "Vehicle history lookup"]
    },
    {
      icon: Laptop,
      title: "Electronics & Gadgets",
      description: "Check serial numbers for laptops, gaming consoles, cameras, and other electronics",
      examples: ["Laptop serial check", "Gaming console verification", "Camera equipment lookup"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Avoid Legal Issues",
      description: "Prevent accidentally purchasing stolen goods and facing legal consequences"
    },
    {
      icon: CheckCircle,
      title: "Peace of Mind",
      description: "Buy secondhand items with confidence knowing they're legitimate"
    },
    {
      icon: AlertTriangle,
      title: "Protect Yourself",
      description: "Avoid financial loss from buying items that could be confiscated by police"
    }
  ];

  return (
    <>
      <StatusCodeHandler statusCode={200} canonical="https://safeorstolen.com/stolen-item-checker" />
      <Helmet>
        <title>Stolen Item Checker App - Instant IMEI, VIN & Serial Verification | SafeOrStolen</title>
        <meta 
          name="description" 
          content="Download the SafeOrStolen mobile app for instant stolen item checks. Verify IMEI, VIN, serial numbers on-the-go. Protect buyers and sellers with real-time verification - the only app for stolen goods verification." 
        />
        <meta 
          name="keywords" 
          content="stolen item checker app, IMEI checker app, VIN check app, mobile verification app, check if phone is stolen, secondhand item verification, stolen goods database, safe marketplace buying, anti-fraud app, instant verification app" 
        />
        <link rel="canonical" href="https://safeorstolen.com/stolen-item-checker" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-sos-orange/5">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-black via-[#3D2817] to-[#FF8C00] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-sos-lime text-sos-dark">
                World's Only Mobile App for Stolen Item Verification
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instantly Check if Items are Stolen with Our Mobile App
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                The SafeOrStolen app provides instant verification for IMEI, VIN, and serial numbers. Protect yourself when buying or selling secondhand items - download our mobile app for iOS & Android. Better than CheckMEND with 4 FREE searches and global coverage.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="border-white text-white">
                  🔍 IMEI Check
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🚗 VIN Verification
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  📱 Serial Number Lookup
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  ⚡ Instant Results
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Search Form Section */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-2xl border border-primary/20 bg-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground">
                    Check if an Item is Stolen
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Enter IMEI, VIN, or serial number to verify instantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TwoSidedSearchForm 
                    onOpenQrScanner={() => navigate('/qr-scanner')}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You Can Check Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Can You Check for Theft?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our stolen item checker works with any device or item that has an identifier
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {checkableItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-sos-lime/10 rounded-full w-fit">
                          <IconComponent className="h-8 w-8 text-sos-lime" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {item.examples.map((example, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-sos-lime" />
                              <span className="text-sm">{example}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Check Section */}
        <section className="py-16 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Check if Items are Stolen?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Protect yourself legally and financially when buying secondhand
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="mx-auto mb-4 p-4 bg-sos-orange/10 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-sos-orange" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                How Our Stolen Item Checker Works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sos-lime rounded-full flex items-center justify-center mx-auto">
                    <span className="text-sos-dark font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Enter Identifier</h3>
                  <p className="text-muted-foreground">
                    Type or scan the IMEI, VIN, or serial number of the item you want to check
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sos-orange rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Database Search</h3>
                  <p className="text-muted-foreground">
                    We search police databases and stolen goods registries instantly
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sos-dark rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Get Results</h3>
                  <p className="text-muted-foreground">
                    Receive instant verification if the item is safe to buy or reported stolen
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Start Checking Now - It's Free!</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Don't risk buying stolen goods. Verify any item in seconds with our free stolen item checker.
                </p>
                <Button 
                  size="lg" 
                  className="bg-sos-orange hover:bg-sos-orange/90"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Check an Item Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <HighImpactFAQ />
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenItemChecker;