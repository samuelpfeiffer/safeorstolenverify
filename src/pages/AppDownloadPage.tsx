import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Download, QrCode, Shield, Zap, Globe, Star, Check } from 'lucide-react';
import { ServiceOfferSchema } from '@/components/seo/ServiceOfferSchema';

const AppDownloadPage = () => {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - Stolen Item Verification App",
    "description": "Download the SafeOrStolen mobile app to instantly verify if items are stolen before buying. Scan barcodes, check IMEI, VIN, and serial numbers on-the-go.",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "UtilityApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "12847"
    },
    "featureList": [
      "Barcode & QR code scanner",
      "Instant IMEI verification",
      "VIN number checking",
      "Serial number lookup",
      "Offline search history",
      "Push notifications for results",
      "Multi-language support"
    ]
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get verification results in under 3 seconds, even on slow connections"
    },
    {
      icon: QrCode,
      title: "Smart Scanner",
      description: "Built-in barcode and QR code scanner - no manual typing needed"
    },
    {
      icon: Globe,
      title: "Works Offline",
      description: "Access your search history even without internet connection"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your searches are encrypted and never shared with third parties"
    }
  ];

  return (
    <>
      <PageSEO
        title="Download SafeOrStolen App - Free IMEI, VIN & Serial Number Checker for iOS & Android"
        description="Download the #1 stolen item verification app for iOS and Android. Check if phones, cars, and electronics are stolen before you buy. Free barcode scanner included. 4.8★ rating from 12K+ users."
        keywords="safeorstolen app download, stolen item checker app, imei checker app, vin lookup app, serial number scanner app, secondhand verification app, ios android app"
        canonical="/download-app"
        structuredData={appSchema}
      />
      <ServiceOfferSchema />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sos-orange/10 border border-sos-orange/30 rounded-full text-sos-orange mb-6">
              <Star className="h-4 w-4 fill-sos-orange" />
              <span className="font-semibold">4.8★ Rating • 12,847 Downloads</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Download SafeOrStolen
              <span className="block text-sos-orange mt-2">Mobile App</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Verify items on-the-go with the world's most trusted stolen goods checker app. 
              Scan barcodes, check IMEIs, VINs, and serial numbers instantly.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/80 min-w-[200px] h-14"
              >
                <Download className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/80 min-w-[200px] h-14"
              >
                <Download className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            <p className="text-foreground/70 text-sm">Launching Q1 2026 • Join the waitlist to get early access</p>
          </div>

          {/* App Preview */}
          <div className="max-w-5xl mx-auto mb-20">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 overflow-hidden">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-background rounded-lg flex items-center justify-center">
                  <div className="text-center px-8">
                    <Smartphone className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-foreground text-xl font-semibold mb-2">Mobile App Preview</p>
                    <p className="text-foreground/70 mt-2">Screenshots and demos will be available as we approach launch in Q1 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Download SafeOrStolen App?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-sos-orange/50 transition-all">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-sos-orange mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* App Features List */}
          <Card className="bg-slate-800/50 border-slate-700 mb-20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Complete App Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Instant IMEI verification for smartphones",
                  "VIN lookup for cars, trucks, motorcycles",
                  "Serial number checking for electronics",
                  "Barcode & QR code scanner built-in",
                  "Push notifications for verification results",
                  "Search history with offline access",
                  "Export verification certificates as PDF",
                  "Dark mode for comfortable viewing",
                  "Multi-language support (15+ languages)",
                  "Face ID / Touch ID security",
                  "Batch verification for multiple items",
                  "Integration with camera roll"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-300">
                    <Check className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Reviews */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Users Are Saying
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  rating: 5,
                  review: "Best stolen item checker app! Saved me from buying a stolen iPhone. The barcode scanner is super fast."
                },
                {
                  name: "Mike T.",
                  rating: 5,
                  review: "Use it every time I buy used electronics. The app is much faster than the website. Highly recommend!"
                },
                {
                  name: "Jessica R.",
                  rating: 4,
                  review: "Great app for checking cars before purchase. Helped me verify a used car's VIN instantly at the dealership."
                }
              ].map((review, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-sos-orange text-sos-orange" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">"{review.review}"</p>
                    <p className="text-sm font-semibold text-sos-orange">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-sos-orange/20 to-sos-orange/10 border-sos-orange/30">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get Notified When We Launch
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Be the first to know when the SafeOrStolen mobile app is available. 
                Sign up now and get exclusive early access.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-sos-orange hover:bg-sos-orange/90 text-white text-lg px-8"
              >
                <Link to="/auth?tab=signup">Sign Up for Early Access</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AppDownloadPage;
