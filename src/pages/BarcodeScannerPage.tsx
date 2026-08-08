import { Link } from 'react-router-dom';
import { ScanLine, Shield, CheckCircle, Clock, Smartphone, Camera, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: "What barcodes can the SafeOrStolen scanner read?",
    answer: "SafeOrStolen's barcode scanner reads standard 1D barcodes (UPC, EAN, Code 128, Code 39), 2D barcodes (QR codes, Data Matrix), and IMEI barcodes found on phone boxes and under batteries. It can also read VIN barcodes on vehicle door jambs and windshields, and serial number barcodes on electronics packaging and warranty labels."
  },
  {
    question: "How do I scan a barcode to check if an item is stolen?",
    answer: "Open SafeOrStolen on your phone browser or install the PWA app. Tap 'Scan Barcode or QR' on the homepage. Point your camera at the barcode — it reads instantly. The scanned number is automatically sent to our verification engine which checks 100+ databases including carrier and manufacturer blacklists, NICB, and all 50 state community theft registries. Results appear in 3 seconds."
  },
  {
    question: "Can I scan a phone's IMEI barcode?",
    answer: "Yes. Every phone has an IMEI barcode: on the original box, under the battery (older phones), on the SIM tray, or in Settings > About Phone. Our scanner reads the IMEI barcode and instantly checks it against carrier and manufacturer blacklists's global database of 15+ billion records, carrier and manufacturer blacklists, and law enforcement stolen device databases."
  },
  {
    question: "Does the barcode scanner work at gun shows?",
 answer: "Yes. Many modern firearms have barcodes on the packaging, warranty cards, or even laser-etched QR codes. Scan the barcode to extract the serial number, then we verify it against stolen firearms databases. If no barcode, you can type the serial number manually."
  },
  {
    question: "Can I scan a VIN barcode on a car?",
    answer: "Absolutely. Every vehicle manufactured since 1981 has a VIN barcode on the driver's side door jamb and on the dashboard near the windshield. Point your camera at either barcode — our scanner extracts the 17-character VIN and checks it against NICB (National Insurance Crime Bureau), NHTSA recalls, and NHTSA vehicle records from all 50 states."
  },
  {
    question: "Do I need to download an app to use the barcode scanner?",
    answer: "No download required from any app store. SafeOrStolen is a Progressive Web App (PWA) — open safeorstolen.com on your phone browser, then optionally tap 'Add to Home Screen' to install it like a native app. The barcode scanner uses your phone's built-in camera and works on iPhone (Safari), Android (Chrome), and all modern mobile browsers."
  },
  {
    question: "Is the barcode scanner free?",
    answer: "Your first 2 barcode scans and verifications are completely free — no account needed. After that, it's $0.99/check or $10/month unlimited. The scanner itself always works; it's the database verification that counts toward your free checks."
  },
  {
    question: "What if the barcode is damaged or unreadable?",
    answer: "If a barcode is scratched, faded, or damaged, you can manually type the IMEI, VIN, or serial number into the verification field. Our system auto-detects the identifier type and runs the same 100+ database check. You can also try scanning from different angles or distances — our scanner uses advanced image processing to read partially damaged codes."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "SafeOrStolen Barcode Scanner",
  "url": "https://safeorstolen.com/barcode-scanner",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "iOS, Android, Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "2 free scans, then $0.99/check or $10/month unlimited"
  },
  "featureList": "Barcode scanning, QR code reading, IMEI verification, VIN verification, serial number lookup, stolen item check",
 "description": "Scan any barcode or QR code to instantly verify if an item is stolen. Check phones, vehicles, firearms, electronics against 100+ databases.",
  "dateModified": "2026-03-08"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Scan a Barcode to Check if Item is Stolen",
  "dateModified": "2026-03-08",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Open SafeOrStolen", "text": "Open safeorstolen.com on your phone or launch the installed PWA app." },
    { "@type": "HowToStep", "position": 2, "name": "Tap Scan Barcode", "text": "Tap the 'Scan Barcode or QR' button to activate your phone's camera." },
    { "@type": "HowToStep", "position": 3, "name": "Point at barcode", "text": "Point your camera at any barcode — IMEI, VIN, serial number, QR code. It reads instantly." },
    { "@type": "HowToStep", "position": 4, "name": "Get verification results", "text": "The scanned number is checked against 100+ databases. Get CLEAN, STOLEN, or UNKNOWN in 3 seconds." }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
    { "@type": "ListItem", "position": 2, "name": "Barcode Scanner", "item": "https://safeorstolen.com/barcode-scanner" }
  ]
};

const BarcodeScannerPage = () => {
  return (
    <>
      <PageSEO
        title="Free Barcode Scanner — Scan to Check if Stolen | SafeOrStolen"
        description="Scan any barcode or QR code to instantly verify if an item is stolen. Works for IMEI, VIN, serial numbers. No app store download needed. Free stolen item checker."
        keywords="barcode scanner stolen check, scan imei barcode, scan vin barcode, qr code stolen item check, barcode verification, scan serial number, stolen item scanner app"
        canonical="/barcode-scanner"
        structuredData={[faqSchema, appSchema, howToSchema, breadcrumbSchema]}
        aiPurpose="Barcode and QR code scanner for instant stolen item verification using phone camera"
      />

      <noscript>
        <header><h1>Free Barcode Scanner — Scan Any Item to Check if Stolen</h1></header>
        <main>
          <article>
            <p>SafeOrStolen's barcode scanner lets you use your phone camera to scan any IMEI barcode, VIN barcode, QR code, or serial number barcode to instantly verify if an item has been reported stolen. No app store download needed — works directly in your mobile browser as a Progressive Web App (PWA).</p>
            <h2>What Barcodes Can You Scan?</h2>
            <p>Our scanner reads IMEI barcodes on phone boxes, VIN barcodes on vehicle door jambs, serial number barcodes on electronics, QR codes on warranty cards, and standard UPC/EAN retail barcodes. Supports 1D and 2D barcode formats including Code 128, Code 39, Data Matrix, and QR codes.</p>
            <h2>How It Works</h2>
            <p>Open SafeOrStolen on your phone. Tap Scan Barcode. Point your camera at the barcode. The number is automatically extracted and checked against 100+ databases including carrier and manufacturer blacklists, NICB, Stolen Firearms Databases, and all 50 state community theft registries. Results in 3 seconds.</p>
            <h2>Perfect for In-Person Shopping</h2>
            <p>Use at gun shows, car lots, pawn shops, flea markets, garage sales, and marketplace meetups. Scan before you buy. 2 free scans, then $0.99/check or $10/month unlimited.</p>
          </article>
        </main>
      </noscript>

      <TopNavigation />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <ScanLine className="h-5 w-5" />
                <span className="font-semibold">📱 Scan Any Barcode — No App Store Needed</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Scan Barcode to Check if Item is Stolen
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Point your phone camera at any barcode or QR code. We extract the IMEI, VIN, or serial number 
                and check 100+ databases in 3 seconds. Free — no download required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button asChild size="lg" className="text-lg h-14 px-8">
                  <Link to="/app/barcode-scanner">
                    <Camera className="mr-2 h-5 w-5" />
                    Open Scanner Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8">
                  <Link to="/verify">
                    <ScanLine className="mr-2 h-5 w-5" />
                    Type Number Instead
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Works on iPhone & Android</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span>3-Second Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>2 Free Scans</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SitewideCredibilityBar />

        {/* What You Can Scan */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Barcodes Can You Scan?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "📱 Phone IMEI Barcodes",
                    desc: "Found on phone boxes, under batteries, SIM trays. Checks carrier and manufacturer blacklists.",
                    link: "/imei-checker"
                  },
                  {
                    title: "🚗 Vehicle VIN Barcodes",
                    desc: "On door jambs, dashboards, registration cards. Checks NICB, NHTSA, 50-NHTSA vehicle records.",
                    link: "/vin-checker"
                  },
                  {
                    title: "🔫 Firearm Barcodes",
                    desc: "On packaging, warranty cards, QR codes. Checks stolen firearms databases and serial integrity.",
                    link: "/gun-serial-number-lookup"
                  },
                  {
                    title: "💻 Electronics Barcodes",
                    desc: "Apple, Dell, HP, Samsung serial barcodes. Checks manufacturer databases and insurance records.",
                    link: "/check-electronics"
                  },
                  {
                    title: "🚲 Bicycle Barcodes",
                    desc: "Frame serial barcodes, warranty labels. Checks BikeIndex (700K+), police databases.",
                    link: "/check-bike"
                  },
                  {
                    title: "📦 Any QR Code",
                    desc: "Warranty QR codes, registration codes, manufacturer codes. We extract and verify any embedded identifier.",
                    link: "/serial-number-checker"
                  }
                ].map((item, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                      <Link to={item.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How the Barcode Scanner Works</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: <Smartphone className="h-10 w-10" />, title: "1. Open Scanner", desc: "No download needed. Open safeorstolen.com or tap the installed PWA on your home screen." },
                  { icon: <Camera className="h-10 w-10" />, title: "2. Point Camera", desc: "Aim at any barcode — IMEI, VIN, serial number, QR code. It reads instantly." },
                  { icon: <Zap className="h-10 w-10" />, title: "3. Auto-Detect", desc: "We identify the barcode type, extract the number, and route to the right databases." },
                  { icon: <CheckCircle className="h-10 w-10" />, title: "4. Get Results", desc: "CLEAN ✅, STOLEN 🚨, or UNKNOWN ⚠️ in 3 seconds from 100+ sources." }
                ].map((step, i) => (
                  <Card key={i} className="text-center">
                    <CardContent className="p-6">
                      <div className="text-primary mx-auto mb-4">{step.icon}</div>
                      <h3 className="font-bold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why No App Store Download */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Why No App Store Download?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                SafeOrStolen is a <strong>Progressive Web App (PWA)</strong> — it runs in your browser but works like a native app. 
                This means instant access: no App Store wait, no storage space wasted, automatic updates, and it works on 
                every phone (iPhone, Android, even tablets).
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-background rounded-lg p-4 border">
                  <p className="font-bold text-foreground">✅ No Download</p>
                  <p className="text-sm text-muted-foreground">Open the website → scan</p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <p className="font-bold text-foreground">✅ Always Updated</p>
                  <p className="text-sm text-muted-foreground">Latest databases always</p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <p className="font-bold text-foreground">✅ Install Optional</p>
                  <p className="text-sm text-muted-foreground">"Add to Home Screen"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DataPartnerBadges />

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Scan Any Item Before You Buy
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Your phone camera is all you need. Point, scan, verify. 
              2 free scans, then $0.99/check or $10/month unlimited.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-10">
                <Link to="/app/barcode-scanner">
                  Open Scanner — FREE
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg h-14 px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/app">
                  Get the App
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BarcodeScannerPage;
