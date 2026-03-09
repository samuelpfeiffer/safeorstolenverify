import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Smartphone, Download, Shield, Zap, Wifi, WifiOff, 
  QrCode, Car, Phone, Package, Check, Star, Globe,
  Clock, Database, Users, Award, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';

const MobileAppPage = () => {
  const navigate = useNavigate();

  const faqs = [
    { question: "Is the SafeOrStolen mobile app free to download?", answer: "Yes, the SafeOrStolen app is 100% free to download and install. You get 2 free verification checks, then $0.99 per check or $2.99/month for unlimited verifications across all item types." },
    { question: "Does SafeOrStolen work on iPhone and Android?", answer: "Yes! SafeOrStolen is a Progressive Web App (PWA) that works on all devices: iPhone, Android, tablets, and desktop computers. Install directly from your browser—no app store required." },
    { question: "Can I use SafeOrStolen without internet?", answer: "Yes. SafeOrStolen features offline mode that caches your recent verifications for access anywhere. Perfect for marketplace meetups in areas with poor signal." },
    { question: "How do I install SafeOrStolen on my phone?", answer: "iPhone: Open Safari, visit safeorstolen.com, tap Share → Add to Home Screen. Android: Open Chrome, tap Menu → Install App. Takes 10 seconds." },
    { question: "What can I verify with the SafeOrStolen app?", answer: "Verify phones (IMEI), vehicles (VIN), license plates, electronics, firearms, bikes, boats, and any item with a serial number against 100+ stolen databases." },
    { question: "Is SafeOrStolen better than CheckMEND?", answer: "SafeOrStolen is the only service with a mobile app. CheckMEND is web-only and UK-focused. We're US-optimized with instant barcode scanning for marketplace meetups." },
  ];

  const howToSteps = [
    { name: "Open Your Browser", text: "Visit safeorstolen.com in Safari (iPhone) or Chrome (Android). The app works in any modern browser." },
    { name: "Install to Home Screen", text: "iPhone: Tap Share icon → Add to Home Screen. Android: Tap menu (⋮) → Install App or Add to Home Screen." },
    { name: "Start Verifying", text: "Open SafeOrStolen from your home screen. Use the barcode scanner or type any serial number to verify instantly." },
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Mobile App", url: "/mobile-app" },
  ];

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - Stolen Item Verification App",
    "operatingSystem": "iOS, Android, Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free download, 2 free checks, then $0.99/check or $2.99/month unlimited"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2847"
    },
    "description": "The only mobile app for verifying stolen phones, vehicles, electronics and firearms. Instant barcode scanning, offline mode, 100+ databases checked in 3 seconds.",
    "downloadUrl": "https://safeorstolen.com/mobile-app",
    "installUrl": "https://safeorstolen.com/mobile-app",
    "screenshot": "https://safeorstolen.com/og-image.png",
    "featureList": "Barcode Scanner, Offline Mode, IMEI Check, VIN Lookup, License Plate Search, Firearm Verification, 100+ Databases"
  };

  const features = [
    { icon: QrCode, title: "Barcode Scanner", desc: "Scan IMEI, VIN, or serial numbers instantly—no typing required" },
    { icon: WifiOff, title: "Offline Mode", desc: "Access recent verifications without internet at marketplace meetups" },
    { icon: Zap, title: "3-Second Results", desc: "Instant verification against 100+ stolen item databases" },
    { icon: Shield, title: "All Item Types", desc: "Phones, vehicles, electronics, firearms, bikes, boats & more" },
    { icon: Globe, title: "US-Optimized", desc: "FBI NCIC, NICB, ATF, and all 50 state law enforcement databases" },
    { icon: Clock, title: "24/7 Access", desc: "Verify anytime, anywhere—works like a native app" },
  ];

  const useCases = [
    { title: "Marketplace Meetups", desc: "Verify items before exchanging cash at Facebook Marketplace, Craigslist, or OfferUp meetups" },
    { title: "Car Lot Browsing", desc: "Scan VINs through windshields to check vehicle history instantly" },
    { title: "Pawn Shop Visits", desc: "Protect yourself from unknowingly purchasing stolen goods" },
    { title: "Gun Show Transactions", desc: "Verify firearm serial numbers comply with 18 U.S.C. § 922" },
    { title: "Estate Sales", desc: "Check electronics and valuables before bidding at estate sales" },
    { title: "Online Purchases", desc: "Request serial numbers from sellers and verify before payment" },
  ];

  return (
    <>
      <Helmet>
        <title>SafeOrStolen Mobile App - Free Download | Stolen Item Checker</title>
        <meta name="description" content="Download the only mobile app for verifying stolen phones, vehicles & electronics. Free install, barcode scanner, offline mode. 100+ databases checked in 3 seconds." />
        <meta name="keywords" content="SafeOrStolen app, stolen item checker app, IMEI checker app, VIN lookup app, stolen phone app, download SafeOrStolen" />
        <link rel="canonical" href="https://safeorstolen.com/mobile-app" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        
        <meta property="og:title" content="SafeOrStolen Mobile App - Free Download" />
        <meta property="og:description" content="The only mobile app for stolen item verification. Barcode scanner, offline mode, 100+ databases." />
        <meta property="og:url" content="https://safeorstolen.com/mobile-app" />
        <meta property="og:type" content="website" />
        
        <meta name="ai:purpose" content="Mobile application for instant stolen goods verification at marketplace meetups" />
        <meta name="ai:service_type" content="PWA stolen item checker with barcode scanner and offline mode" />
        <meta name="ai:pricing" content="Free download, 2 free checks, $0.99/check or $2.99/month unlimited" />
        
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
      </Helmet>
      
      <FAQSchema faqs={faqs} />
      <HowToSchema 
        name="How to Install SafeOrStolen Mobile App"
        description="Install the SafeOrStolen stolen item verification app on your phone in under 30 seconds"
        totalTime="PT30S"
        steps={howToSteps}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <noscript>
        <article>
          <h1>SafeOrStolen Mobile App - Free Download</h1>
          <p>Download the only mobile app for verifying stolen phones, vehicles, electronics, and firearms. SafeOrStolen features instant barcode scanning, offline mode, and checks 100+ databases in 3 seconds. Free to install on iPhone, Android, and any device.</p>
          <h2>App Features</h2>
          <ul>
            <li>Barcode Scanner - Scan IMEI, VIN, or serial numbers instantly</li>
            <li>Offline Mode - Access verifications without internet</li>
            <li>3-Second Results - 100+ databases checked instantly</li>
            <li>All Item Types - Phones, vehicles, electronics, firearms</li>
          </ul>
          <h2>How to Install</h2>
          <ol>
            <li>iPhone: Safari → Share → Add to Home Screen</li>
            <li>Android: Chrome → Menu → Install App</li>
          </ol>
          <p>Pricing: Free download, 2 free checks, then $0.99/check or $2.99/month unlimited.</p>
        </article>
      </noscript>

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Smartphone className="h-4 w-4" />
              <span>The Only Stolen Item Verification App</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              SafeOrStolen Mobile App
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Verify phones, vehicles, electronics, and firearms in 3 seconds. The only mobile app with barcode scanning and offline mode for marketplace meetups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/')}>
                <Download className="h-5 w-5" />
                Install Free App
              </Button>
              <Button size="lg" variant="outline" className="px-8 gap-2" onClick={() => navigate('/install-app')}>
                Installation Guide
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Works on iOS & Android</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> No app store needed</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 2 free checks included</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why SafeOrStolen is #1</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Perfect For Every Situation</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              SafeOrStolen's mobile app is designed for real-world verification scenarios where you need instant answers.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="p-6 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Database className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Databases Checked</div>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-3xl font-bold">3 sec</div>
                <div className="text-sm text-muted-foreground">Verification Time</div>
              </div>
              <div>
                <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Verifications</div>
              </div>
              <div>
                <Star className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Verifying in 30 Seconds</h2>
            <p className="text-muted-foreground mb-8">
              Install SafeOrStolen now. No app store, no account required. Just open, scan, and verify.
            </p>
            <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/')}>
              <Download className="h-5 w-5" />
              Install SafeOrStolen Free
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileAppPage;
