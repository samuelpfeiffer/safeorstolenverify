import { Helmet } from 'react-helmet-async';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { Shield, Database, Globe, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import QrScanner from '@/components/hero/QrScanner';

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
        <title>Universal Stolen Item Checker | Multi-Database Verification | SafeOrStolen</title>
        <meta 
          name="description" 
          content="Check if any item is stolen across 6+ global databases instantly. Verify VIN numbers, IMEI codes, serial numbers, bikes, and electronics. Free NICB VINCheck, GSMA Device Check, CheckMEND, Bike Index, and more." 
        />
        <meta 
          name="keywords" 
          content="stolen item checker, VIN check, IMEI check, serial number lookup, NICB VINCheck, GSMA device check, CheckMEND, bike index, stolen phone checker, stolen vehicle database" 
        />
        <link rel="canonical" href="https://safeorstolen.com/verify" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Universal Stolen Item Checker - Multi-Database Verification" />
        <meta property="og:description" content="Verify VINs, IMEI codes, and serial numbers across 6+ global theft databases instantly" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safeorstolen.com/verify" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SafeOrStolen Universal Verification",
            "description": "Multi-database stolen item verification system",
            "applicationCategory": "SecurityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "NICB VINCheck integration",
              "GSMA Device Check for IMEI",
              "CheckMEND verification",
              "Bike Index lookup",
              "Arizona TheftAZ database",
              "Immobilize Registry"
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Universal Stolen Item Verification
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              One search across 6+ global theft databases
            </p>
            <p className="text-sm text-muted-foreground">
              NICB • GSMA • CheckMEND • Bike Index • Arizona TheftAZ • Immobilize
            </p>
          </header>

          {/* Search Bar */}
          <div className="mb-16">
            <UnifiedSearchBar 
              variant="default"
              onOpenQrScanner={() => setIsScanning(true)}
            />
          </div>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Enter Identifier</h3>
                <p className="text-sm text-muted-foreground">
                  Type or scan any VIN, IMEI, license plate, or serial number
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Intelligent Routing</h3>
                <p className="text-sm text-muted-foreground">
                  Our system automatically checks all relevant databases
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  Get comprehensive results from multiple sources in seconds
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

          {/* FAQ Schema */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What databases do you search?</h3>
                <p className="text-sm text-muted-foreground">
                  We search NICB VINCheck, GSMA Device Check, CheckMEND, Bike Index, Arizona TheftAZ, and Immobilize Registry simultaneously for comprehensive results.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">How accurate are the results?</h3>
                <p className="text-sm text-muted-foreground">
                  Our system aggregates data from official theft databases maintained by law enforcement, insurance companies, and global registries, providing highly accurate results.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Can I check international items?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! Our integration with GSMA Device Check and CheckMEND provides global coverage for phones and electronics, while NICB and TheftAZ cover US vehicles.
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
