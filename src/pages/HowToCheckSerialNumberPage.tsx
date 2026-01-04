import { Link } from 'react-router-dom';
import { 
  Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, 
  Smartphone, Laptop, Bike, Wrench, Gamepad2, Database, FileCheck, 
  UserCheck, Eye, MapPin, DollarSign, Scale, FileText, HelpCircle,
  Camera, Lock, Users, Globe
} from 'lucide-react';
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
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';

const HowToCheckSerialNumberPage = () => {
  const title = "How to Check If Item Is Stolen by Serial Number - Complete Guide | SafeOrStolen";
  const metaDescription = "Learn how to check if any item is stolen using serial numbers. Step-by-step guide for phones, electronics, bikes, tools, and equipment verification.";
  const h1 = "How to Check If Item Is Stolen by Serial Number";

  const faqs = [
    {
      question: "Is serial number checking free?",
      answer: "Yes, SafeOrStolen offers 2 free serial number checks for any item type. This allows you to verify phones, electronics, bikes, tools, or any merchandise before buying. Additional checks require a paid plan starting at $9.99/month for unlimited verifications."
    },
    {
      question: "How accurate are the databases?",
      answer: "Our verification system checks 100+ databases including FBI NCIC, all 50 state police records, insurance claim databases, GSMA device registry, and manufacturer stolen shipment records. We maintain access to 50+ million stolen item records with 99.7% accuracy for reported items."
    },
    {
      question: "Can I check before meeting the seller?",
      answer: "Absolutely! We recommend checking serial numbers BEFORE meeting any seller. Ask for the serial number via text or message, verify it through SafeOrStolen, and only proceed with the meeting if the item shows clean. This saves time and keeps you safe."
    },
    {
      question: "What if the seller refuses to provide the serial number?",
      answer: "A seller who refuses to provide a serial number before meeting is a major red flag. Legitimate sellers have nothing to hide. Walk away from any transaction where the seller won't share the serial number - there are plenty of honest sellers with clean merchandise."
    },
    {
      question: "Is it legal to check serial numbers?",
      answer: "Yes, checking serial numbers is completely legal. You're simply accessing publicly available theft reports and databases. In fact, it's legally prudent to verify items before purchasing to avoid unknowingly buying stolen property, which can result in the item being confiscated."
    },
    {
      question: "How long do serial number checks take?",
      answer: "SafeOrStolen provides results in approximately 3 seconds. Enter the serial number, click verify, and receive instant results showing whether the item has been reported stolen, has insurance claims, or appears in any theft databases."
    },
    {
      question: "Can I check partial serial numbers?",
      answer: "We recommend providing the complete serial number for accurate results. Partial serial checks may return multiple matches or false positives. If only a partial serial is available, our system will attempt to match but accuracy decreases significantly."
    },
    {
      question: "What about international items?",
      answer: "SafeOrStolen checks international theft registries including Interpol databases for stolen goods. For phones (IMEI), we check the GSMA global device registry used by carriers worldwide. International coverage varies by item type and reporting country."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://safeorstolen.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "How to Check Serial Number", "item": "https://safeorstolen.com/how-to-check-serial-number" }
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check If an Item Is Stolen by Serial Number",
    "description": "Complete guide to verifying any item isn't stolen before buying or selling using serial number verification.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Locate and Record Serial Number",
        "text": "Find the serial number on the item and write it down completely. Take a photo for records."
      },
      {
        "@type": "HowToStep",
        "name": "Verify on SafeOrStolen",
        "text": "Visit safeorstolen.com, select item category, enter complete serial number, and click Verify Now."
      },
      {
        "@type": "HowToStep",
        "name": "Review Results",
        "text": "Check if item is clean (safe to purchase), stolen (do not buy), or has insurance claims."
      },
      {
        "@type": "HowToStep",
        "name": "Perform Additional Checks",
        "text": "Ask seller for receipt, verify serial matches paperwork, and meet in safe public location."
      }
    ]
  };

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords="check serial number stolen, verify item not stolen, serial number lookup, stolen property check, how to check stolen goods, serial number verification, theft database check"
        canonical="/how-to-check-serial-number"
        structuredData={[breadcrumbSchema, faqSchema, howToSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to check any serial number.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Guides", href: "/blog" },
            { name: "How to Check Serial Number", href: "/how-to-check-serial-number" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <Search className="w-4 h-4" />
                Complete Verification Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Complete guide to verifying any item isn't stolen before buying or selling. Learn how to find serial numbers, check against stolen property databases, and protect yourself from unknowingly purchasing stolen goods. Works for phones, electronics, bikes, tools, and all merchandise.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Verify Serial Number Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Database className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">100+ Databases</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3-Second Results</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">50M+ Records</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">2 Free Checks</span>
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

        {/* Section 1: Why Check Serial Numbers */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Why Check Serial Numbers Before Buying
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Checking serial numbers before purchasing any used item protects you legally, financially, and gives you peace of mind. Here's why verification is essential:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <AlertTriangle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold mb-2">Avoid Buying Stolen Property</h3>
                <p className="text-muted-foreground">Purchasing stolen goods, even unknowingly, makes you liable. Police can seize the item leaving you with nothing.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <DollarSign className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Protect from Financial Loss</h3>
                <p className="text-muted-foreground">If an item is recovered as stolen, you lose both the item and the money paid. No recourse against a disappeared seller.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <Scale className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Prevent Legal Liability</h3>
                <p className="text-muted-foreground">In many states, possessing stolen property is a crime. Verification proves you did due diligence before purchasing.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Know Item's History</h3>
                <p className="text-muted-foreground">Serial number checks reveal insurance claims, warranty status, and whether the item has been reported lost or stolen.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <UserCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Seller Verification</h3>
                <p className="text-muted-foreground">Honest sellers readily provide serial numbers. Refusal to share is a major red flag indicating potential theft.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Peace of Mind</h3>
                <p className="text-muted-foreground">Know with confidence that your purchase is legitimate and won't come back to haunt you later.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How to Find Serial Numbers */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              How to Find Serial Numbers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every item type has serial numbers in specific locations. Here's where to find them for common items:
            </p>

            {/* Phones */}
            <div className="mb-10 p-6 bg-card rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary" />
                Phones (IMEI Number)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Dial <strong>*#06#</strong> on the phone dialer</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Settings → About Phone → IMEI</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>SIM card tray (engraved number)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Back of device (older models)</span>
                </div>
              </div>
            </div>

            {/* Electronics */}
            <div className="mb-10 p-6 bg-card rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Laptop className="w-6 h-6 text-primary" />
                Electronics (Laptops, Tablets, Cameras)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Bottom or back panel sticker</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Battery compartment</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Original packaging/box</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Warranty cards and receipts</span>
                </div>
              </div>
            </div>

            {/* Bikes */}
            <div className="mb-10 p-6 bg-card rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Bike className="w-6 h-6 text-primary" />
                Bicycles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Bottom bracket (under the pedals)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Head tube (front of frame)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Rear dropout (near back wheel)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Frame underside near seat tube</span>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="mb-10 p-6 bg-card rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary" />
                Power Tools
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Motor housing sticker</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Battery pack (if separate)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Manufacturer label on body</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Purchase receipt (verify match)</span>
                </div>
              </div>
            </div>

            {/* Gaming Consoles */}
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Gamepad2 className="w-6 h-6 text-primary" />
                Gaming Consoles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Back or bottom of console unit</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Settings → System → System Information</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Original box barcode sticker</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Match box serial to console</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Check */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-primary" />
              Step-by-Step Serial Number Check
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow these four steps to verify any item isn't stolen before completing your purchase:
            </p>

            {/* Step 1 */}
            <div className="mb-8 p-6 bg-background rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                <h3 className="text-xl font-bold">Locate and Record Serial Number</h3>
              </div>
              <div className="ml-16 space-y-2">
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Find serial number location based on item type (see guide above)</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Write down the complete serial (all digits and letters)</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Take a photo for your records</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Note the make and model of the item</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8 p-6 bg-background rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                <h3 className="text-xl font-bold">Verify on SafeOrStolen</h3>
              </div>
              <div className="ml-16 space-y-2">
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Visit safeorstolen.com or use our mobile app</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Select the appropriate item category</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Enter the complete serial number</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Click "Verify Now" button</span>
                </div>
              </div>
              <div className="mt-6 ml-16">
                <Link to="/verify">
                  <Button className="gap-2">
                    Verify Serial Number <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8 p-6 bg-background rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                <h3 className="text-xl font-bold">Review Results</h3>
              </div>
              <div className="ml-16 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <h4 className="font-bold text-green-600 mb-2">✅ Clean/Safe</h4>
                  <p className="text-sm text-muted-foreground">No theft reports found. Safe to proceed with purchase.</p>
                </div>
                <div className="p-4 bg-red-500/10 rounded-lg">
                  <h4 className="font-bold text-red-600 mb-2">🚨 Stolen</h4>
                  <p className="text-sm text-muted-foreground">DO NOT buy. Report to police immediately.</p>
                </div>
                <div className="p-4 bg-orange-500/10 rounded-lg">
                  <h4 className="font-bold text-orange-600 mb-2">⚠️ Insurance Claim</h4>
                  <p className="text-sm text-muted-foreground">Potential fraud. Investigate further before buying.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 rounded-lg">
                  <h4 className="font-bold text-yellow-600 mb-2">❓ Suspicious</h4>
                  <p className="text-sm text-muted-foreground">Exercise caution. Verify seller credibility.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">4</div>
                <h3 className="text-xl font-bold">Additional Checks</h3>
              </div>
              <div className="ml-16 space-y-2">
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ask seller for original receipt or proof of purchase</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Verify serial number on receipt matches item</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Check manufacturer warranty status online</span>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Meet in safe public location (police station recommended)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What Databases Are Checked */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              What Databases Are Checked
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SafeOrStolen searches 100+ databases to verify whether an item has been reported stolen. Our comprehensive coverage includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "FBI NCIC stolen property files",
                "All 50 state police databases",
                "Insurance company theft claims",
                "GSMA Device Registry (phones)",
                "Manufacturer stolen shipment records",
                "International theft registries",
                "50+ million stolen item records"
              ].map((item, index) => (
                <div key={index} className="flex gap-3 p-4 bg-card rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* Section 5: Check by Item Type */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-primary" />
              Serial Number Check by Item Type
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Different item types have different verification systems. Here's what's checked for each:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  Phones (IMEI)
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 15-digit unique identifier</li>
                  <li>• Carrier blacklist checks</li>
                  <li>• Insurance fraud detection</li>
                  <li>• International GSMA database</li>
                </ul>
                <Link to="/imei-checker" className="text-primary hover:underline text-sm mt-3 inline-block">
                  Check IMEI →
                </Link>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Bike className="w-5 h-5 text-primary" />
                  Bicycles
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Frame serial (6-10 digits)</li>
                  <li>• Police theft reports</li>
                  <li>• Bike recovery programs</li>
                  <li>• Manufacturer records</li>
                </ul>
                <Link to="/check-bike" className="text-primary hover:underline text-sm mt-3 inline-block">
                  Check Bike →
                </Link>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-primary" />
                  Electronics
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Alphanumeric serials</li>
                  <li>• Warranty validation</li>
                  <li>• Theft insurance claims</li>
                  <li>• Manufacturer databases</li>
                </ul>
                <Link to="/check-electronics" className="text-primary hover:underline text-sm mt-3 inline-block">
                  Check Electronics →
                </Link>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Power Tools
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Model and serial combo</li>
                  <li>• Professional tool tracking</li>
                  <li>• Job site theft reports</li>
                  <li>• Equipment registries</li>
                </ul>
                <Link to="/check-tools" className="text-primary hover:underline text-sm mt-3 inline-block">
                  Check Tools →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Red Flags */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Red Flags When Buying Used Items
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Watch for these warning signs that may indicate stolen merchandise:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Seller won't provide serial number before meeting",
                "Serial number is scratched off or removed",
                "Price is too good to be true (50-70% below market)",
                "Cash only, refuses PayPal or Venmo",
                "Pressures you for immediate sale",
                "Only meets in remote or unusual locations",
                "Serial number doesn't match model or year",
                "Multiple items, all 'new in box'"
              ].map((flag, index) => (
                <div key={index} className="flex gap-4 p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: What If Item Shows Stolen */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-destructive" />
              What If the Item Shows as Stolen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If your verification shows the item is reported stolen, take these steps immediately:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-destructive/10 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center font-bold flex-shrink-0">✗</div>
                <span className="font-medium">DO NOT complete the purchase under any circumstances</span>
              </div>
              <div className="flex gap-4 p-4 bg-destructive/10 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center font-bold flex-shrink-0">✗</div>
                <span className="font-medium">DO NOT take possession of the item</span>
              </div>
              <div className="flex gap-4 p-4 bg-primary/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">Contact local police with seller information</span>
              </div>
              <div className="flex gap-4 p-4 bg-primary/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">Report the listing to the platform (Facebook Marketplace, Craigslist, etc.)</span>
              </div>
              <div className="flex gap-4 p-4 bg-primary/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">You are protected if you didn't complete the purchase</span>
              </div>
              <div className="flex gap-4 p-4 bg-primary/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">Share information with platform moderators</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Best Practices */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Best Practices for Safe Buying
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow these guidelines to ensure every used item purchase is safe and legitimate:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Search, text: "Always check serial BEFORE meeting the seller" },
                { icon: MapPin, text: "Meet at a police station for high-value items" },
                { icon: Users, text: "Bring someone with you to all meetups" },
                { icon: FileCheck, text: "Verify serial number matches the item in person" },
                { icon: FileText, text: "Get a bill of sale with serial number documented" },
                { icon: Camera, text: "Keep verification results as documentation" },
                { icon: AlertTriangle, text: "Report suspicious sellers to platforms" },
                { icon: Globe, text: "Use verified payment methods with buyer protection" }
              ].map((practice, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-lg">
                  <practice.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{practice.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Start Verifying Items Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify Your Item?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't risk buying stolen property. Check any serial number in 3 seconds with SafeOrStolen's comprehensive database search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Verify Serial Number <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-8 px-4 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold mb-4">Related Verification Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/imei-checker" className="text-primary hover:underline text-sm">IMEI Checker</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/vin-checker" className="text-primary hover:underline text-sm">VIN Checker</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/check-phone" className="text-primary hover:underline text-sm">Phone Verification</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/check-bike" className="text-primary hover:underline text-sm">Bicycle Check</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/check-electronics" className="text-primary hover:underline text-sm">Electronics Check</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/check-tools" className="text-primary hover:underline text-sm">Tool Verification</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/ps5-serial-number-check" className="text-primary hover:underline text-sm">PS5 Check</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToCheckSerialNumberPage;
