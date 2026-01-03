import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, Gamepad2, Monitor, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';

const PS5SerialNumberCheckPage = () => {
  const title = "PS5 Serial Number Check - Verify PlayStation 5 Not Stolen | SafeOrStolen";
  const metaDescription = "Free PS5 serial number verification. Check if PlayStation 5 consoles are stolen before buying used. Instant verification from police databases. 3-second results.";
  const h1 = "PS5 Serial Number Check - Verify PlayStation 5 Not Stolen";

  const faqs = [
    {
      question: "Is PS5 serial number check free?",
      answer: "Yes, SafeOrStolen offers 2 free PS5 serial number checks. This allows you to verify consoles before buying without any cost. Additional checks require a paid plan starting at $9.99/month for unlimited verifications."
    },
    {
      question: "Can I check Xbox Series X too?",
      answer: "Absolutely! SafeOrStolen checks all gaming consoles including Xbox Series X, Xbox Series S, Nintendo Switch, PlayStation 4, and more. Any device with a serial number can be verified against our theft databases."
    },
    {
      question: "What if the PS5 shows as stolen?",
      answer: "If our check shows the PS5 is reported stolen: (1) Do NOT buy it, (2) Walk away immediately, (3) Report the listing to the platform (Facebook Marketplace, Craigslist), (4) File an anonymous tip with local police. If you already purchased it, contact police immediately - you're likely a fraud victim."
    },
    {
      question: "Will the seller know I checked?",
      answer: "No, our verification is completely anonymous. The seller has no way of knowing you checked the serial number. We recommend checking before meeting the seller to avoid wasting time on stolen items."
    },
    {
      question: "How long does PS5 verification take?",
      answer: "Our PS5 serial number check takes only 3 seconds. Enter the complete serial number, click verify, and receive instant results showing whether the console has been reported stolen or has outstanding insurance claims."
    },
    {
      question: "Where is the PS5 serial number located?",
      answer: "The PS5 serial number is on a sticker on the bottom of the console (disc edition) or rear bottom (digital edition). You can also find it in Settings > System > System Information. The serial number starts with 'CFI' followed by model numbers."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "Electronics Check", "item": "https://safeorstolen.com/check-electronics" },
      { "@type": "ListItem", "position": 3, "name": "PS5 Serial Number Check", "item": "https://safeorstolen.com/ps5-serial-number-check" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords="ps5 serial number check, playstation 5 stolen check, verify ps5 not stolen, check ps5 serial number, ps5 theft verification, used ps5 verification"
        canonical="/ps5-serial-number-check"
        structuredData={[breadcrumbSchema, faqSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to check any PS5 serial number.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Electronics Check", href: "/check-electronics" },
            { name: "PS5 Serial Number Check", href: "/ps5-serial-number-check" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <Gamepad2 className="w-4 h-4" />
                PlayStation 5 Verification
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Buying a used PlayStation 5? Verify it's not stolen before you pay. Our PS5 serial number checker scans police databases, insurance claims, and theft reports in 3 seconds. Essential for Facebook Marketplace and Craigslist purchases.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Verify PS5 Serial Number Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Police Databases</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">2 Free Checks</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">100+ Databases</span>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Signals */}
        <aside className="py-4 px-4 border-y border-border/50 bg-muted/20">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Written by</span>
              <Link to="/about" className="font-medium text-foreground hover:text-primary">SafeOrStolen Research Team</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Last updated: January 2025</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How we verify</Link>
            </div>
          </div>
        </aside>

        <SitewideCredibilityBar />

        {/* How to Find PS5 Serial Number */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Monitor className="w-8 h-8 text-primary" />
              How to Find PS5 Serial Number
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Before checking if a PS5 is stolen, you need to locate its unique serial number. Sony places the serial number in multiple locations on every PlayStation 5 console.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-background rounded-lg border-l-4 border-primary">
                <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Location 1: Bottom of Console</h3>
                  <p className="text-muted-foreground">Look at the bottom of the PS5 where the stand attaches. The serial number is on a white sticker starting with "CFI" followed by model numbers (e.g., CFI-1015A). The serial number itself is a 17-character code.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg border-l-4 border-primary">
                <Monitor className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Location 2: System Settings</h3>
                  <p className="text-muted-foreground">Navigate to Settings → System → System Information. The serial number displays under "Serial Number." This requires powering on the console.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg border-l-4 border-primary">
                <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Location 3: Original Box</h3>
                  <p className="text-muted-foreground">If the seller has the original box, the serial number is printed on a barcode sticker. Match this to the console's serial number to verify authenticity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Check PS5 Before Buying */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Why Check PS5 Before Buying?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              PlayStation 5 consoles are among the most stolen electronics due to their high resale value and demand. Buying a stolen PS5 has serious consequences.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-destructive/10 rounded-lg">
                <h3 className="font-bold text-destructive mb-3">PS5 Theft is Common</h3>
                <p className="text-muted-foreground">Gaming consoles are prime targets for organized retail crime, porch pirates, and home burglaries. Stolen PS5s are resold within hours on Facebook Marketplace and Craigslist at 60-70% of retail price.</p>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg">
                <h3 className="font-bold text-destructive mb-3">Police Can Seize Stolen Consoles</h3>
                <p className="text-muted-foreground">If police trace a stolen PS5 to you, they will confiscate it as evidence. You lose both the console AND the money you paid. No refund from the seller who has already disappeared.</p>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg">
                <h3 className="font-bold text-destructive mb-3">Financial Loss</h3>
                <p className="text-muted-foreground">Buying a stolen PS5 at $400-500 means losing that entire amount when it's recovered. The average used PS5 buyer loses $450 when purchasing stolen goods unknowingly.</p>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg">
                <h3 className="font-bold text-destructive mb-3">Legal Consequences</h3>
                <p className="text-muted-foreground">Possessing stolen property, even unknowingly, can result in questioning by police. While you likely won't face charges, it's a stressful situation that's easily avoided.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How SafeOrStolen Verifies */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How SafeOrStolen Verifies PS5 Consoles</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our PS5 verification system checks your serial number against multiple authoritative databases in seconds.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Law enforcement stolen property databases</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>FBI NCIC stolen electronics registry</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Insurance theft claim records</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>LeadsOnline pawn shop database</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Sony warranty registration records</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>User-reported theft registries</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check PS5 Serial Number <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-500" />
              Red Flags When Buying Used PS5
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Watch for these warning signs that may indicate a stolen PlayStation 5:
            </p>
            <div className="space-y-4">
              {[
                "Price too good to be true ($300-350 when market is $400-450)",
                "No original box, receipt, or warranty documentation",
                "Seller refuses to provide serial number before meeting",
                "Cash only, no PayPal or Venmo payment accepted",
                "Seller pushes for quick sale with urgency",
                "Meets in remote or unusual location (not their home)",
                "Multiple consoles for sale (organized theft ring)",
                "Serial number sticker looks tampered or replaced",
                "Won't let you power on and check system settings",
                "Account already logged in (could be stolen from home)"
              ].map((flag, index) => (
                <div key={index} className="flex gap-4 p-4 bg-orange-500/10 rounded-lg border-l-4 border-orange-500">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Check Beyond Serial */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What to Check Beyond Serial Number</h2>
            <p className="text-lg text-muted-foreground mb-8">
              After verifying the PS5 serial number is clean, perform these additional checks before purchasing:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Console Condition</h3>
                <p className="text-muted-foreground">Check for unusual scratches, dents, or damage that might indicate theft. Inspect the serial number sticker for tampering.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Controllers Included</h3>
                <p className="text-muted-foreground">Stolen consoles sometimes don't include controllers or have mismatched controllers. Original DualSense should be included.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Original Cables</h3>
                <p className="text-muted-foreground">Power cable, HDMI cable, and USB-C charging cable should all be present. Missing cables may indicate quick theft.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Test Before Buying</h3>
                <p className="text-muted-foreground">Power on the console, check system settings, verify serial number matches label, ensure no account is logged in.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Meet in Safe Location</h3>
                <p className="text-muted-foreground">Many police stations have safe exchange zones. Avoid meeting at night or in isolated areas. Bring a friend.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Get Seller Information</h3>
                <p className="text-muted-foreground">Photograph seller's ID or get contact information. Legitimate sellers won't object. Scammers will refuse.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About PS5 Verification</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg">
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
        </section>

        <AuthoritySignals variant="banner" className="mb-0" />

        {/* Final CTA */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Verify PS5 Serial Number Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't risk buying a stolen PlayStation 5. Check the serial number in 3 seconds before you pay.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Check PS5 Free Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/check-electronics" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Electronics Check</h3>
                <p className="text-sm text-muted-foreground">Verify any electronics serial number</p>
              </Link>
              <Link to="/check-laptop" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Laptop Check</h3>
                <p className="text-sm text-muted-foreground">Verify laptops aren't stolen</p>
              </Link>
              <Link to="/check-phone" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Phone Check</h3>
                <p className="text-sm text-muted-foreground">IMEI verification for phones</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PS5SerialNumberCheckPage;
