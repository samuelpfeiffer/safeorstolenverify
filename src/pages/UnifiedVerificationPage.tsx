import { Helmet } from 'react-helmet-async';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { Shield, Database, Globe, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import QrScanner from '@/components/hero/QrScanner';
import { StructuredData, VerificationFAQData, WebAppStructuredData } from '@/components/seo/StructuredData';

export default function UnifiedVerificationPage() {
  const [isScanning, setIsScanning] = useState(false);

  const handleQrScan = (result: string) => {
    setIsScanning(false);
  };

  const databases = [
    {
      name: 'NICB VINCheck',
      description: 'National Insurance Crime Bureau vehicle theft database',
      icon: Shield,
      coverage: 'USA',
      types: ['Vehicles', 'VINs']
    },
    {
      name: 'GSMA Device Check',
      description: 'Global mobile device registry for lost/stolen phones',
      icon: Globe,
      coverage: 'Global',
      types: ['Phones', 'IMEI']
    },
    {
      name: 'Arizona TheftAZ',
      description: 'Arizona Attorney General\'s stolen vehicle database',
      icon: Shield,
      coverage: 'Arizona',
      types: ['Vehicles', 'License Plates']
    },
    {
      name: 'CheckMEND',
      description: 'Comprehensive device and property verification',
      icon: Database,
      coverage: 'Global',
      types: ['Electronics', 'Phones', 'All Devices']
    },
    {
      name: 'Bike Index',
      description: 'World\'s largest bike registration service',
      icon: Zap,
      coverage: 'Global',
      types: ['Bicycles']
    },
    {
      name: 'Immobilize Registry',
      description: 'US National Property Register for stolen items',
      icon: Database,
      coverage: 'USA',
      types: ['All Property']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Stolen Item Checker | Verify VIN, IMEI, Serial Numbers Instantly</title>
        <meta 
          name="description" 
          content="Check if any item is stolen across 6+ global databases instantly. Free VIN check, IMEI verification, serial number lookup. Protect yourself from buying stolen goods. Used by 50,000+ buyers & sellers monthly." 
        />
        <meta 
          name="keywords" 
          content="stolen item checker, free VIN check, IMEI verification, serial number lookup, stolen phone check, stolen car database, check if stolen, avoid stolen goods, buyer protection, seller verification" 
        />
        <link rel="canonical" href="https://safeorstolen.com/verify" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Stolen Item Checker - Verify Before You Buy" />
        <meta property="og:description" content="Instantly verify VINs, IMEI codes, and serial numbers across 6+ global theft databases. Protect yourself from stolen goods." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safeorstolen.com/verify" />
        <meta property="og:image" content="https://safeorstolen.com/og-verify.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Stolen Item Checker | SafeOrStolen" />
        <meta name="twitter:description" content="Check VINs, IMEI, serial numbers across global databases instantly" />
        <meta name="twitter:image" content="https://safeorstolen.com/twitter-verify.jpg" />
        
        {/* Mobile */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      </Helmet>

      {/* Structured Data for AI Search Engines */}
      <WebAppStructuredData />
      <VerificationFAQData />
      <StructuredData
        type="Article"
        data={{
          headline: "How to Check if Something is Stolen Before You Buy",
          description: "Complete guide to verifying items using VIN, IMEI, and serial number databases",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString()
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Section - AI-Optimized */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Free Stolen Item Checker - Verify Before You Buy
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Check VINs, IMEI, Serial Numbers Across 6+ Global Databases Instantly
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              ✓ NICB VINCheck • GSMA Device Check • CheckMEND • Bike Index • Arizona TheftAZ • Immobilize Registry
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <strong>50,000+</strong> monthly verifications
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <strong>99.5%</strong> accuracy rate
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <strong>3-5 sec</strong> results
              </span>
            </div>
          </header>

          {/* Search Bar */}
          <div className="mb-16">
            <UnifiedSearchBar 
              variant="default"
              onOpenQrScanner={() => setIsScanning(true)}
            />
          </div>

          {/* How It Works - Enhanced for AI Understanding */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Check if Something is Stolen (3 Easy Steps)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Enter Any Identifier</h3>
                <p className="text-sm text-muted-foreground">
                  Type or scan: VIN (17 chars), IMEI (15 digits), license plate, or any serial number. Works for cars, phones, bikes, laptops, tools, jewelry, and electronics.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Intelligent Auto-Routing</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI detects item type and queries all relevant databases: NICB (vehicles), GSMA (phones), CheckMEND (global), Bike Index, TheftAZ, Immobilize (all property)
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Safe/Stolen Result</h3>
                <p className="text-sm text-muted-foreground">
                  Get comprehensive results in 3-5 seconds. If ANY database reports stolen/lost, we alert you immediately. Download PDF certificate with paid plans.
                </p>
              </Card>
            </div>
          </section>

          {/* Integrated Databases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Integrated Theft Databases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {databases.map((db, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <db.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{db.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {db.description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-muted rounded">
                          📍 {db.coverage}
                        </span>
                        {db.types.map((type, i) => (
                          <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Use Our Service?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      We check multiple databases simultaneously, giving you the most complete picture of an item's theft status
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Zap className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">
                      Get results from all databases in seconds with our parallel verification system
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Global & Local</h3>
                    <p className="text-sm text-muted-foreground">
                      Access both international databases (GSMA, CheckMEND) and local registries (TheftAZ, NICB)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Risk Protection</h3>
                    <p className="text-sm text-muted-foreground">
                      Avoid legal trouble and financial loss by verifying items before purchase or sale
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* FAQ Schema - Enhanced for AI */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions About Stolen Item Verification</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">How do I check if something is stolen before buying?</h3>
                <p className="text-sm text-muted-foreground">
                  Find the item's unique identifier (VIN for vehicles, IMEI for phones, serial number for other items). Enter it into SafeOrStolen.com which checks 6+ databases including NICB VINCheck, GSMA Device Check, CheckMEND, Bike Index, Arizona TheftAZ, and Immobilize Registry. Results appear in 3-5 seconds.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">What databases does SafeOrStolen search?</h3>
                <p className="text-sm text-muted-foreground">
                  We check: (1) NICB VINCheck - National Insurance Crime Bureau vehicle database, (2) GSMA Device Check - global mobile device registry, (3) CheckMEND - worldwide electronics verification, (4) Bike Index - largest bicycle registry, (5) Arizona TheftAZ - Arizona Attorney General's database, (6) Immobilize Registry - US National Property Register.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">How accurate are the results?</h3>
                <p className="text-sm text-muted-foreground">
                  99.5%+ accuracy for items in our databases. We check official law enforcement and insurance theft registries. Important: Not all stolen items are reported, so "safe" means no theft records found in checked databases, not absolute guarantee.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Can I check items internationally?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! GSMA Device Check and CheckMEND provide global coverage for phones and electronics. NICB and Arizona TheftAZ cover US vehicles. Bike Index has international bicycle theft records from 70+ countries.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">What if my item shows as stolen?</h3>
                <p className="text-sm text-muted-foreground">
                  DO NOT complete the purchase. Document everything (seller info, listing, messages). Report to: (1) The marketplace (Facebook, Craigslist, etc.), (2) Local police with evidence, (3) If already purchased, file police report and payment dispute immediately.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">How much does verification cost?</h3>
                <p className="text-sm text-muted-foreground">
                  Free tier: 2 verifications (14-day trial). Pay-per-check: $0.50. Monthly plans: Personal $9.99 (50 checks), Professional $29.99 (unlimited + bulk tools + API access).
                </p>
              </Card>
            </div>
          </section>
        </div>

        {/* QR Scanner Modal */}
        {isScanning && (
          <QrScanner
            isOpen={isScanning}
            onOpenChange={setIsScanning}
            onScanSuccess={handleQrScan}
          />
        )}
      </main>
    </>
  );
}
