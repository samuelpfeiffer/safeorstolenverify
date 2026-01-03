import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, Smartphone, Wifi, Ban, Lock } from 'lucide-react';
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

const IMEICheckFreePage = () => {
  const title = "Free IMEI Check - Verify Phone Not Stolen or Blacklisted | SafeOrStolen";
  const metaDescription = "Free IMEI check tool. Verify if phones are stolen or blacklisted before buying. Check GSMA Device Registry and police databases instantly. 3-second results.";
  const h1 = "Free IMEI Check - Verify Phone Not Stolen or Blacklisted";

  const faqs = [
    {
      question: "Is IMEI check really free?",
      answer: "Yes, SafeOrStolen offers 2 free IMEI checks. This allows you to verify phones before buying without any cost. Additional checks require a paid plan starting at $9.99/month for unlimited verifications, which is popular with resellers and phone shops."
    },
    {
      question: "How accurate is the IMEI check?",
      answer: "Our IMEI check is highly accurate because we query multiple authoritative sources: GSMA Device Registry (global phone blacklist), all major US carrier blacklists, FBI NCIC stolen property database, and insurance claim records. We provide a comprehensive verification covering 100+ databases."
    },
    {
      question: "Can blacklisted phones be unlocked?",
      answer: "No, blacklisted phones cannot be legitimately unlocked. Blacklisting occurs at the network level - carriers block the phone's IMEI from connecting to their towers. No unlock service, factory reset, or SIM card change can fix a blacklisted phone. Only the original carrier or owner who reported it can remove the blacklist."
    },
    {
      question: "What if I already bought a stolen phone?",
      answer: "If you discover you purchased a stolen phone: (1) Contact the seller immediately for a refund, (2) Document the transaction (messages, payment records), (3) File a police report as a fraud victim, (4) Report the seller to the platform (Facebook, Craigslist, etc.), (5) Contact your payment provider (PayPal, credit card) for chargeback. You likely won't face criminal charges if you're a victim, but the phone will be confiscated."
    },
    {
      question: "Does this work for all carriers?",
      answer: "Yes, our IMEI check works for all major carriers worldwide including AT&T, Verizon, T-Mobile, Sprint (now T-Mobile), and international carriers. We check the GSMA Device Registry which is the global blacklist used by carriers in over 200 countries."
    },
    {
      question: "What's the difference between stolen and blacklisted?",
      answer: "Stolen means the phone was reported to police as stolen property. Blacklisted means the carrier blocked the phone from their network - this can happen because it's stolen, has unpaid bills, was reported lost, or is from an insurance claim. A phone can be blacklisted without being stolen (e.g., non-payment), but all stolen phones should be blacklisted."
    },
    {
      question: "Can I check IMEI before meeting the seller?",
      answer: "Yes! Ask the seller for the IMEI number before meeting. Dial *#06# on the phone to get the IMEI, or check Settings > About Phone. If the seller refuses to provide the IMEI, that's a major red flag. Verify before you waste time meeting."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "Check Phone", "item": "https://safeorstolen.com/check-phone" },
      { "@type": "ListItem", "position": 3, "name": "Free IMEI Check", "item": "https://safeorstolen.com/imei-check-free" }
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
        keywords="free IMEI check, IMEI blacklist check, stolen phone check, GSMA device registry, phone blacklist check, IMEI verification free, check if phone stolen, carrier blacklist check"
        canonical="/imei-check-free"
        structuredData={[breadcrumbSchema, faqSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to check any IMEI number.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Check Phone", href: "/check-phone" },
            { name: "Free IMEI Check", href: "/imei-check-free" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <Smartphone className="w-4 h-4" />
                IMEI Verification
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Check if a phone is stolen or blacklisted before buying. Our free IMEI checker verifies against GSMA Device Registry, police databases, and carrier blacklists in 3 seconds. Essential for buying used phones on Facebook Marketplace, Craigslist, OfferUp.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check IMEI Free Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">GSMA Registry</span>
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
                <span className="text-sm font-semibold">All Carriers</span>
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

        {/* How to Check IMEI */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              How to Check IMEI
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Checking an IMEI number takes just seconds and can save you hundreds of dollars. Follow these simple steps:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="font-bold mb-2">Find the IMEI Number</h3>
                  <p className="text-muted-foreground"><strong>Dial *#06#</strong> on the phone keypad - the IMEI displays automatically. Or go to <strong>Settings → About Phone → IMEI</strong>. The IMEI is a 15-digit number unique to every phone.</p>
                  <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm"><strong>iPhone:</strong> Settings → General → About → IMEI</p>
                    <p className="text-sm"><strong>Android:</strong> Settings → About Phone → Status → IMEI</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="font-bold mb-2">Enter 15-Digit IMEI into SafeOrStolen</h3>
                  <p className="text-muted-foreground">Type the complete 15-digit IMEI into our verification tool. Double-check for typos - every digit matters. Example IMEI format: 353456789012345</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="font-bold mb-2">Get Instant Results</h3>
                  <p className="text-muted-foreground">Within 3 seconds, receive a comprehensive report showing: theft status, blacklist status, carrier lock status, and device specifications. Green = safe to buy. Red = walk away immediately.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check IMEI Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is IMEI */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-primary" />
              What is IMEI?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">International Mobile Equipment Identity</h3>
                <p className="text-muted-foreground">IMEI stands for International Mobile Equipment Identity. It's a 15-digit number that uniquely identifies every mobile phone, tablet, and cellular device in the world. Think of it as a phone's fingerprint.</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">Unique Identifier for Every Phone</h3>
                <p className="text-muted-foreground">No two phones share the same IMEI. It's assigned during manufacturing and stays with the device forever. Carriers and law enforcement use it to track, block, and identify phones.</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">Used by Carriers to Block Stolen Phones</h3>
                <p className="text-muted-foreground">When a phone is reported stolen, carriers add its IMEI to their blacklist. This prevents the phone from connecting to their network, making it useless for calls, texts, and data.</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">Cannot Be Changed (Attempts Are Illegal)</h3>
                <p className="text-muted-foreground">The IMEI is hardcoded into the phone's hardware. While sophisticated criminals sometimes try to change it, this is a federal crime. Most attempts fail or can be detected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Check IMEI */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Why Check IMEI Before Buying?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Buying a used phone without checking the IMEI is like buying a car without checking the VIN. Here's what can go wrong:
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-2">Avoid Buying a Stolen Phone</h3>
                <p className="text-muted-foreground">1 in 10 used phones sold on marketplaces is stolen. If you buy a stolen phone, police can confiscate it, and you lose your money with no legal recourse against the seller who has disappeared.</p>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-2">Check if Blacklisted by Carrier</h3>
                <p className="text-muted-foreground">A blacklisted phone won't work on any carrier network. It can't make calls, send texts, or use mobile data. Many phones are blacklisted for unpaid bills, not just theft - and these phones are worthless.</p>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-2">Verify Not Insurance Claim Fraud</h3>
                <p className="text-muted-foreground">Some sellers claim insurance on their phone as "lost/stolen" then sell it. When the insurance company discovers the fraud, they blacklist the phone. You're left with an expensive paperweight.</p>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-2">Protect From Financial Loss</h3>
                <p className="text-muted-foreground">The average used phone costs $300-700. Losing this money to a scammer hurts. A free 3-second IMEI check protects your investment completely.</p>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-2">Avoid Legal Trouble</h3>
                <p className="text-muted-foreground">Possessing stolen property - even unknowingly - can result in police questioning and confiscation. While you likely won't face charges, it's a stressful situation easily avoided.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What We Check</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our free IMEI checker queries multiple authoritative databases to give you a complete picture of the phone's status.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <Wifi className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">GSMA Device Registry</span>
                  <p className="text-sm text-muted-foreground">Global phone blacklist used by 200+ countries</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <Ban className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Carrier Blacklists</span>
                  <p className="text-sm text-muted-foreground">AT&T, Verizon, T-Mobile, Sprint blacklist databases</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">FBI NCIC Database</span>
                  <p className="text-sm text-muted-foreground">National stolen property database</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Police Reports (50 States)</span>
                  <p className="text-sm text-muted-foreground">State and local law enforcement records</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Insurance Theft Claims</span>
                  <p className="text-sm text-muted-foreground">Phones reported stolen to insurance companies</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">iCloud/Google Lock Status</span>
                  <p className="text-sm text-muted-foreground">Activation lock verification (where available)</p>
                </div>
              </div>
            </div>
            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* IMEI Blacklist Status */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">IMEI Blacklist Status Explained</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our IMEI check returns one of these status results. Here's what each means for your purchase:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Clean
                </h3>
                <p className="text-muted-foreground">Safe to buy. Phone is not reported stolen, not blacklisted by carriers, and has no outstanding issues. Proceed with the purchase confidently.</p>
              </div>
              <div className="p-6 bg-red-500/10 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                  <Ban className="w-5 h-5" />
                  Blacklisted
                </h3>
                <p className="text-muted-foreground">Do NOT buy. Phone won't work on any carrier network. It's blocked from making calls, texts, and using mobile data. Often due to theft, non-payment, or fraud.</p>
              </div>
              <div className="p-6 bg-red-500/10 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Stolen
                </h3>
                <p className="text-muted-foreground">Do NOT buy. Phone has been reported stolen to police. Purchasing it makes you guilty of possessing stolen property. Walk away and consider reporting the seller.</p>
              </div>
              <div className="p-6 bg-orange-500/10 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Insurance Claim
                </h3>
                <p className="text-muted-foreground">High fraud risk. Someone filed an insurance claim for this phone. If they claimed it as stolen/lost and are now selling it, that's insurance fraud - and the phone may be blacklisted later.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About IMEI Check</h2>
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
            <h2 className="text-3xl font-bold mb-4">Check IMEI Free Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't risk buying a stolen or blacklisted phone. Verify any IMEI in 3 seconds before you pay.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Verify IMEI Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/check-phone" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Phone Check</h3>
                <p className="text-sm text-muted-foreground">Complete phone verification</p>
              </Link>
              <Link to="/imei-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">IMEI Checker</h3>
                <p className="text-sm text-muted-foreground">Advanced IMEI verification</p>
              </Link>
              <Link to="/blog/how-to-check-if-iphone-stolen" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">iPhone Stolen Check Guide</h3>
                <p className="text-sm text-muted-foreground">Complete iPhone verification guide</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IMEICheckFreePage;
