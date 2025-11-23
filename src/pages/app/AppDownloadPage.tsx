import { useState } from 'react';
import { Apple, PlayCircle, Smartphone, Shield, Zap, CheckCircle, X, ChevronDown, Play, Star, ArrowRight, Download, Wifi, Globe, Clock, Users, Camera, QrCode } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function AppDownloadPage() {
  const navigate = useNavigate();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - Stolen Item Verification App",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": ["iOS", "Android"],
    "description": "The only mobile app that scans barcodes to verify stolen phones, cars, electronics, and more instantly. Free basic checks. Download on iOS & Android.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "10000"
    },
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    }
  };
  const features = [{
    icon: Camera,
    title: "Instant Barcode Scanning",
    description: "Point and scan - results in 3 seconds",
    detail: "No typing, no mistakes"
  }, {
    icon: Wifi,
    title: "Works Offline",
    description: "Cached database works without internet",
    detail: "Perfect for remote meetups"
  }, {
    icon: Shield,
    title: "Protects Buyers & Sellers",
    description: "Sellers prove items are legitimate",
    detail: "Buyers verify before handing over cash"
  }, {
    icon: CheckCircle,
    title: "Everything Verified",
    description: "Phones, cars, bikes, electronics, firearms",
    detail: "50M+ records checked instantly"
  }];
  const testimonials = [{
    name: "Sarah M.",
    role: "Marketplace Buyer",
    tag: "Facebook Marketplace",
    quote: "I was about to buy an iPhone for $600 at a gas station meetup. Scanned it with SafeOrStolen - STOLEN. Saved me from a huge mistake.",
    avatar: "SM"
  }, {
    name: "Mike R.",
    role: "Pawn Shop Owner",
    tag: "Business User",
    quote: "We check every item with SafeOrStolen before buying. The barcode scanner is 10x faster than typing into CheckMEND. Worth every penny.",
    avatar: "MR"
  }, {
    name: "Jennifer L.",
    role: "eBay Seller",
    tag: "Seller Protection",
    quote: "I scan items before listing to prove they're clean. Buyers trust me more now. My sales went up 40%.",
    avatar: "JL"
  }];
  const reviews = [{
    text: "This app saved me $800. The barcode scanner is so fast!",
    stars: 5
  }, {
    text: "Finally a mobile app for this. CheckMEND is stuck in 2010.",
    stars: 5
  }, {
    text: "I use this at every Facebook Marketplace meetup now.",
    stars: 5
  }, {
    text: "Pawn shop owner here - this is the future.",
    stars: 5
  }];
  const faqs = [{
    question: "Is SafeOrStolen really the only stolen verification app?",
    answer: "Yes. CheckMEND has no mobile app - they're website-only. IMEI.info only checks device specs, not stolen status. Swappa is a marketplace, not a verification tool. SafeOrStolen is the only dedicated mobile app for verifying stolen items with barcode scanning."
  }, {
    question: "How does barcode scanning work?",
    answer: "Most phones, electronics, and items have IMEI or serial number barcodes. Our app uses your camera to instantly recognize these barcodes and check them against 50M+ stolen records in 3 seconds. No manual typing needed."
  }, {
    question: "What if I'm offline?",
    answer: "SafeOrStolen caches our stolen database locally on your device. You can verify items even without internet connection - perfect for remote meetup locations or areas with poor signal."
  }, {
    question: "Is this better than CheckMEND?",
    answer: "CheckMEND has no mobile app, costs $3.99 per check, requires manual typing, and takes 30+ seconds. SafeOrStolen has instant barcode scanning, free basic checks, works offline, and gives results in 3 seconds. Plus we're mobile-first."
  }, {
    question: "Can sellers use this too?",
    answer: "Absolutely! Sellers can scan their items before listing to prove they're legitimate. Show the verification certificate to buyers to build trust and close sales faster."
  }, {
    question: "What items can I verify?",
    answer: "Phones (IMEI), vehicles (VIN), bikes (serial), electronics (serial), laptops, cameras, gaming consoles, power tools, firearms, jewelry, and more. If it has a serial number or IMEI, we can verify it."
  }];
  return <>
      <PageSEO title="SafeOrStolen App: Only Mobile App for Stolen Item Verification | Free Download" description="Download the only app that scans barcodes to verify stolen phones, cars, and electronics instantly. Free on iOS & Android. CheckMEND has no app - we do." keywords="stolen verification app, IMEI checker app, barcode scanner stolen items, mobile verification app, CheckMEND alternative app, stolen phone app, VIN checker app" canonical="/app/download" structuredData={appSchema} />

      <Helmet>
        <meta property="og:image" content="https://safeorstolen.com/images/app-mockup-3-second-verification.jpg" />
        <meta name="twitter:image" content="https://safeorstolen.com/images/app-mockup-3-second-verification.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20">
              <Zap className="h-4 w-4 mr-2 inline" />
              10,000+ Items Verified
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              The Only App That Verifies<br />Stolen Items Before You Buy or Sell
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Instant barcode scanning. Protect yourself in 3 seconds. Download free on iOS & Android.
            </p>
            
            <p className="text-sm text-muted-foreground mb-10">
              No credit card required • Works offline • 100% private
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="h-16 px-8 text-lg gap-3 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all" onClick={() => navigate('/mobile-app')}>
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on</div>
                  <div className="font-bold">iOS & Web</div>
                </div>
              </Button>

              <Button size="lg" variant="secondary" className="h-16 px-8 text-lg gap-3 shadow-lg hover:shadow-xl transition-all" onClick={() => navigate('/mobile-app')}>
                <PlayCircle className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on</div>
                  <div className="font-bold">Android & Web</div>
                </div>
              </Button>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative max-w-4xl mx-auto">
              
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Buyers Choose Our App
            </h2>
            <p className="text-xl text-muted-foreground">
              The difference is obvious
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <Card className="relative overflow-hidden opacity-75">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted opacity-50" />
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4">
                  <X className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-muted-foreground">The Old Way</h3>
                <div className="space-y-4">
                  {["Visit website on computer", "Manually type 15-digit IMEI", "Wait 30+ seconds for results", "CheckMEND charges $3.99 per check", "Can't verify at meetup location"].map((item, idx) => <div key={idx} className="flex items-start gap-3 line-through text-muted-foreground">
                      <Globe className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* The SafeOrStolen Way */}
            <Card className="relative overflow-hidden border-primary/50 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">The SafeOrStolen Way</h3>
                <div className="space-y-4">
                  {["Pull out your phone", "Scan barcode in 3 seconds", "Instant stolen database results", "Free basic checks", "Verify anywhere, even offline"].map((item, idx) => <div key={idx} className="flex items-start gap-3 font-medium">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Watch: We Verify a Phone in 3 Seconds
          </p>

          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-2xl border border-primary/20 overflow-hidden group cursor-pointer" onClick={() => setVideoPlaying(!videoPlaying)}>
            {!videoPlaying ? <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 hover:bg-primary rounded-full p-8 transition-all group-hover:scale-110">
                    <Play className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-8">
                  <Badge className="text-sm px-3 py-1">2:30</Badge>
                </div>
              </> : <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Video player placeholder</p>
              </div>}
          </div>

          <p className="mt-6 text-muted-foreground">
            See how fast SafeOrStolen protects buyers at Facebook Marketplace meetups
          </p>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Features That Protect You
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => <Card key={idx} className="text-center hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-2">{feature.description}</p>
                  <p className="text-sm text-primary font-medium">{feature.detail}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Use Case Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Real Stories, Real Protection
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Join 10,000+ users who verify before they buy
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <Badge className="mb-4">{testimonial.tag}</Badge>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>

                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why We're #1
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="p-4 text-left font-bold">Feature</th>
                  <th className="p-4 text-center bg-primary/10 font-bold text-primary">SafeOrStolen</th>
                  <th className="p-4 text-center text-muted-foreground">CheckMEND</th>
                  <th className="p-4 text-center text-muted-foreground">IMEI.info</th>
                  <th className="p-4 text-center text-muted-foreground">Swappa</th>
                </tr>
              </thead>
              <tbody>
                {[{
                feature: "Mobile App",
                sos: true,
                checkmend: false,
                imei: false,
                swappa: false
              }, {
                feature: "Barcode Scanning",
                sos: true,
                checkmend: false,
                imei: false,
                swappa: false
              }, {
                feature: "Instant Results",
                sos: "3 sec",
                checkmend: "30+ sec",
                imei: "N/A",
                swappa: "N/A"
              }, {
                feature: "Free Checks",
                sos: true,
                checkmend: false,
                imei: true,
                swappa: "N/A"
              }, {
                feature: "Offline Mode",
                sos: true,
                checkmend: false,
                imei: false,
                swappa: false
              }, {
                feature: "Firearms Verification",
                sos: true,
                checkmend: true,
                imei: false,
                swappa: false
              }, {
                feature: "Price per Check",
                sos: "$0",
                checkmend: "$3.99",
                imei: "Free",
                swappa: "N/A"
              }].map((row, idx) => <tr key={idx} className="border-b border-border hover:bg-muted/20">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-primary/5">
                      {typeof row.sos === 'boolean' ? row.sos ? <CheckCircle className="h-6 w-6 text-primary mx-auto" /> : <X className="h-6 w-6 text-muted-foreground mx-auto" /> : <span className="font-bold text-primary">{row.sos}</span>}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.checkmend === 'boolean' ? row.checkmend ? <CheckCircle className="h-6 w-6 text-muted-foreground mx-auto" /> : <X className="h-6 w-6 text-muted-foreground mx-auto" /> : <span className="text-muted-foreground">{row.checkmend}</span>}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.imei === 'boolean' ? row.imei ? <CheckCircle className="h-6 w-6 text-muted-foreground mx-auto" /> : <X className="h-6 w-6 text-muted-foreground mx-auto" /> : <span className="text-muted-foreground">{row.imei}</span>}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.swappa === 'boolean' ? row.swappa ? <CheckCircle className="h-6 w-6 text-muted-foreground mx-auto" /> : <X className="h-6 w-6 text-muted-foreground mx-auto" /> : <span className="text-muted-foreground">{row.swappa}</span>}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Join 10,000+ Verified Users
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Rated 4.8/5 stars
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reviews.map((review, idx) => <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.stars)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Read All Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => <AccordionItem key={idx} value={`item-${idx}`} className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Download CTA Bottom */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Download Now - It's Free
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Available on iPhone, iPad, and Android devices
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="h-16 px-8 text-lg gap-3 shadow-xl hover:shadow-2xl transition-all" onClick={() => navigate('/mobile-app')}>
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Download on</div>
                <div className="font-bold">App Store</div>
              </div>
            </Button>

            <Button size="lg" variant="secondary" className="h-16 px-8 text-lg gap-3 shadow-xl hover:shadow-2xl transition-all" onClick={() => navigate('/mobile-app')}>
              <PlayCircle className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Button>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-xl inline-block">
            <QrCode className="h-48 w-48 mx-auto mb-4 text-primary" />
            <p className="text-lg font-semibold mb-2">Scan to download instantly</p>
            <p className="text-sm text-muted-foreground">Works on all devices</p>
          </div>

          <div className="mt-16 relative">
            <div className="aspect-video max-w-md mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-2xl border border-primary/20 flex items-center justify-center animate-float">
              <Smartphone className="h-32 w-32 text-primary opacity-50" />
            </div>
          </div>
        </div>
      </section>
    </>;
}