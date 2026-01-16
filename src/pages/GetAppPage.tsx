import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Download, Smartphone, Shield, Camera, Wifi, Star, Check, Zap } from 'lucide-react';

/**
 * Get App Page - Real page for /get-app URL
 * Focused on driving app downloads
 */
const GetAppPage = () => {
  const appFeatures = [
    {
      icon: Camera,
      title: "Barcode Scanner",
      description: "Scan serial numbers, IMEI barcodes, and VINs instantly with your camera"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get verification results in under 3 seconds from 100+ databases"
    },
    {
      icon: Wifi,
      title: "Works Offline",
      description: "Download database for offline verification at flea markets and swap meets"
    },
    {
      icon: Shield,
      title: "Safe Buying",
      description: "Never buy stolen goods again. Verify before you pay."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the SafeOrStolen app free?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! The app is free to download and includes 2 free verification checks. Additional checks require a subscription or credits." }
      },
      {
        "@type": "Question",
        "name": "What platforms is the app available on?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen is available as a Progressive Web App (PWA) that works on both iOS and Android devices. Simply visit safeorstolen.com on your phone and tap 'Add to Home Screen'." }
      },
      {
        "@type": "Question",
        "name": "Can I scan barcodes with the app?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! The app includes a barcode scanner that reads IMEI barcodes, serial number barcodes, and VIN barcodes. Just point your camera at the barcode for instant scanning." }
      }
    ]
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    },
    "description": "The only stolen item verification app. Check if phones, cars, bikes are stolen before buying."
  };

  return (
    <>
      <PageSEO
        title="Get SafeOrStolen App - Free Stolen Item Checker for iPhone & Android"
        description="Download the SafeOrStolen app to verify phones, cars, and electronics aren't stolen. Free IMEI checker, VIN scanner, and barcode reader. Works offline. The only verification app."
        keywords="safeorstolen app, stolen item checker app, IMEI checker app, VIN scanner app, barcode scanner, stolen phone app"
        canonical="/get-app"
        structuredData={[faqSchema, appSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
                  <Star className="w-4 h-4 text-green-500 fill-green-500" />
                  <span className="text-sm font-medium">4.8★ Rating • 1,247 Reviews</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get the SafeOrStolen App
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  The ONLY mobile app for verifying stolen items. Check IMEI, VIN, and serial numbers 
                  on the go. Scan barcodes, get instant results, and never buy stolen goods again.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/app">
                      <Download className="w-5 h-5" />
                      Install App - Free
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link to="/app/features">
                      <Smartphone className="w-5 h-5" />
                      View All Features
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Works on iPhone, Android, and all mobile browsers. No app store download needed.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gradient-to-b from-primary/20 to-primary/5 rounded-[3rem] border-4 border-primary/30 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Shield className="w-20 h-20 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold">SafeOrStolen</p>
                      <p className="text-sm text-muted-foreground">Verify Before You Buy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">App Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use the App */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Use the SafeOrStolen App?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">The Only Verification App</h3>
                  <p className="text-muted-foreground">CheckMEND has no mobile app. IMEI.info has no app. We're the only service with a real mobile verification app.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Verify On-Site</h3>
                  <p className="text-muted-foreground">Meeting a seller at a parking lot or flea market? Open the app and scan the item's barcode before handing over cash.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">No App Store Required</h3>
                  <p className="text-muted-foreground">Our Progressive Web App installs directly from your browser. No app store account needed, no downloads, no storage issues.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Works Offline</h3>
                  <p className="text-muted-foreground">No cell service at the swap meet? Download our database for offline verification. Perfect for rural areas and large venues.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Stay Safe?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of buyers who verify before they buy. Get the app free today.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/app">
                <Download className="w-5 h-5" />
                Get the App - Free
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetAppPage;
