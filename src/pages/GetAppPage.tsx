import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Download, Smartphone, Shield, Camera, Wifi, Star, Check, Clock } from 'lucide-react';

/**
 * Get App Page - /get-app
 * SafeOrStolen is a free installable web app at safeorstolen.com/app (not an App Store or Google Play app).
 */
const GetAppPage = () => {
  const appFeatures = [
    {
      icon: Camera,
      title: "Barcode Scanner",
      description: "Point your camera at a serial, IMEI or VIN barcode instead of typing it"
    },
    {
      icon: Clock,
      title: "Results in a Few Seconds",
      description: "Reported stolen, possible match, or no report found, with every source listed"
    },
    {
      icon: Wifi,
      title: "Needs a Data Connection",
      description: "Checks run online against current records, so make sure you have signal at the meetup"
    },
    {
      icon: Shield,
      title: "Saved History",
      description: "Each check is saved to your account with the date, so you can show you checked before you paid"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the SafeOrStolen app free?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. The SafeOrStolen web app is free to install from safeorstolen.com/app, and a free account includes 2 checks with no credit card. After that it costs $0.99 a check or $10 a month for unlimited checks." }
      },
      {
        "@type": "Question",
        "name": "What platforms is the app available on?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen is not in the App Store or Google Play. It is a free installable web app that runs in Safari on iPhone and Chrome on Android. Open safeorstolen.com/app on your phone and tap Add to Home Screen (iPhone: Share button; Android: three-dot menu)." }
      },
      {
        "@type": "Question",
        "name": "Can I scan barcodes with the app?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. The web app has a camera scanner that reads IMEI, serial number and VIN barcodes. Point your camera at the barcode and the number fills in, then run the check." }
      }
    ]
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web browser (installable on iPhone and Android home screens)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free installable web app for checking whether phones, cars, bikes and other items are reported stolen before you buy them."
  };

  return (
    <>
      <PageSEO
        title="Get the SafeOrStolen App - Free Web App for iPhone & Android"
        description="Add SafeOrStolen to your iPhone or Android home screen from safeorstolen.com/app. Free web app with a barcode scanner for IMEI, VIN and serial checks."
        keywords="safeorstolen app, stolen item checker app, IMEI checker app, VIN scanner app, barcode scanner, stolen phone app"
        canonical="/get-app"
        structuredData={[faqSchema, appSchema]}
      />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
                  <Star className="w-4 h-4 text-green-500 fill-green-500" />
                  <span className="text-sm font-medium">Free to start • No card required</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get the SafeOrStolen App
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  SafeOrStolen is a free web app you add to your home screen from safeorstolen.com/app.
                  Scan or type an IMEI, VIN or serial number at the meetup and get a result in a few seconds.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/app">
                      <Download className="w-5 h-5" />
                      Open the Free Web App
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
                  Runs in Safari on iPhone and Chrome on Android. It isn't in the App Store or Google Play.
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
                  <h3 className="font-semibold text-lg">Every Category in One Place</h3>
                  <p className="text-muted-foreground">One account checks phones by IMEI, vehicles by VIN, license plates, guns, bikes, tools and electronics by serial number.</p>
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
                  <p className="text-muted-foreground">The web app installs from your browser in a few taps. No app store account, nothing to download.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Plan for Weak Signal</h3>
                  <p className="text-muted-foreground">Checks need a data connection. If the swap meet has poor service, ask the seller for the number ahead of time and run the check before you go.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Check Before You Pay</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Add the web app to your home screen and use your 2 free checks. No credit card.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/app">
                <Download className="w-5 h-5" />
                Open the Free Web App
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetAppPage;
