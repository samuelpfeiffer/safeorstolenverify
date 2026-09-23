import React from 'react';
import { Link } from '@/lib/router-compat';
import { 
  Shield, Smartphone, Camera, WifiOff, Clock, CheckCircle, Star, 
  Zap, Globe, ArrowRight, Download, Car, Phone, Laptop, Bike, 
  Target, Lock, Bell, History, Users, FileCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const AppFeatures = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Barcode & QR Scanner",
      description: "Point your camera at any barcode, serial number plate, or VIN sticker. Instant recognition - no typing required. Works with all standard barcodes.",
      highlight: "Competitors don't have this"
    },
    {
      icon: <WifiOff className="w-8 h-8" />,
      title: "Offline Mode",
      description: "Verify items anywhere - parking lots, garages, rural areas. No WiFi or cell signal needed. Perfect for marketplace meetups in any location.",
      highlight: "Competitors don't have this"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "3-Second Verification",
      description: "Get instant results the moment you scan or enter a serial number. Our system checks SafeOrStolen's reports, public web results, and uses AI analysis.",
      highlight: "Fastest in industry"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Buyer & Seller Protection",
      description: "Buyers verify items before purchasing. Sellers prove legitimacy to build trust. Both parties protected from stolen goods transactions.",
      highlight: "Dual protection"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "All 50 US States",
      description: "Comprehensive coverage across the entire United States. Access stolen property databases from every state. International databases coming soon.",
      highlight: "Nationwide coverage"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your searches are encrypted and private. We never share your data with third parties. Bank-level security for all transactions.",
      highlight: "Privacy first"
    }
  ];

  const itemTypes = [
    { icon: <Phone className="w-6 h-6" />, name: "Phones", description: "iPhone, Samsung, all smartphones via IMEI" },
    { icon: <Car className="w-6 h-6" />, name: "Vehicles", description: "Cars, trucks, motorcycles via VIN" },
    { icon: <Laptop className="w-6 h-6" />, name: "Electronics", description: "Laptops, TVs, gaming consoles" },
    { icon: <Bike className="w-6 h-6" />, name: "Bicycles", description: "Road bikes, mountain bikes, e-bikes" },
    { icon: <Target className="w-6 h-6" />, name: "Firearms", description: "Guns, rifles via serial number" },
    { icon: <FileCheck className="w-6 h-6" />, name: "Tools", description: "Power tools, equipment, machinery" }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "iOS, Android, Web",
    "description": "Mobile app for verifying if items are stolen. Features barcode scanning, offline mode, 3-second verification. Protects both buyers AND sellers.",
    "featureList": [
      "Barcode & QR code scanner",
      "Offline verification mode",
      "3-second instant results",
      "IMEI phone verification",
      "VIN vehicle verification",
      "Serial number lookup",
      "Buyer protection",
      "Seller verification certificates",
      "All 50 US states coverage",
      "Encrypted & private searches"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen App Features | Barcode Scanner, Offline Mode, Instant Verification"
        description="Explore SafeOrStolen app features: barcode scanning, offline verification, 3-second checks, buyer AND seller protection. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Free download."
        keywords="stolen verification app features, IMEI checker app, VIN checker app, barcode scanner stolen items, offline stolen checker, mobile verification app, buyer seller protection, stolen item scanner features"
        canonical="/app/features"
        structuredData={softwareSchema}
      />

      <div className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Mobile App Features
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Most Powerful <span className="text-primary">Stolen Item Checker</span> App
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. 
              Features competitors simply don't have.
            </p>

            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-primary mb-8">
              <Shield className="w-6 h-6" />
              <span>Protects Buyers AND Sellers</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Download FREE App
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/verify">
                  Try Web Version
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Features That Set Us Apart
              </h2>
              <p className="text-xl text-muted-foreground">
                Dedicated services like BikeIndex, HotGunz, and phone IMEI lookups are integrated into our comprehensive checks. Other services are website-only.
                We have a real app with real advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {feature.icon}
                    </div>
                    <div className="inline-block bg-green-500/10 text-green-600 text-xs font-medium px-2 py-1 rounded-[0.25rem] mb-3">
                      {feature.highlight}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Item Types Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Verify Any Item Type
              </h2>
              <p className="text-xl text-muted-foreground">
                "Carfax for Everything" - One app verifies phones, cars, electronics, and more
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itemTypes.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buyer & Seller Protection */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Buyer Protection */}
              <Card className="border-2 border-blue-500/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Buyers</h3>
                  <p className="text-muted-foreground mb-6">
                    Protect yourself from unknowingly purchasing stolen property. 
                    Avoid legal trouble and financial loss.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Verify items before handing over cash</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Use at Facebook Marketplace meetups</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Check items at pawn shops</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Works offline in parking lots</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Seller Protection */}
              <Card className="border-2 border-green-500/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Sellers</h3>
                  <p className="text-muted-foreground mb-6">
                    Prove your items are legitimate. Build buyer trust instantly. 
                    Sell faster at better prices.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Generate verification certificates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Build instant buyer trust</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Stand out from other sellers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Command higher prices with proof</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How SafeOrStolen App Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Three simple steps to protect yourself
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scan or Enter</h3>
                  <p className="text-muted-foreground">
                    Use the built-in barcode scanner to instantly capture any serial number, IMEI, or VIN. 
                    Or type it manually if you prefer. The app recognizes all standard formats.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Instant Database Check</h3>
                  <p className="text-muted-foreground">
                    We check across multiple stolen property databases in real-time. 
                    Results in just 3 seconds. Our offline mode stores recent checks for areas without signal.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Clear Results</h3>
                  <p className="text-muted-foreground">
                    Receive a clear SAFE or ALERT status. Buyers get confidence before purchasing. 
                    Sellers get verification certificates to share with potential buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App and Competitors */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                SafeOrStolen App and Website-Only Competitors
              </h2>
              <p className="text-xl text-muted-foreground">
                See why having a mobile app makes all the difference
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4 bg-primary/10 font-bold">SafeOrStolen App</th>
                    <th className="text-center p-4">Proprietary & Public Data</th>
                    <th className="text-center p-4">IMEI.info</th>
                    <th className="text-center p-4">Carfax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Downloadable App</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Barcode Scanner</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Offline Mode</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Free Basic Checks</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Phones + Vehicles + Electronics</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">Phones only</td>
                    <td className="text-center p-4 text-red-500">Vehicles only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Seller Certificates</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Download className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download SafeOrStolen Free
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of smart buyers and sellers who verify items before transactions. 
              Available on iOS, Android, and as a Progressive Web App.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Get the App
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/verify">
                  Try Web Version
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AppFeatures;
