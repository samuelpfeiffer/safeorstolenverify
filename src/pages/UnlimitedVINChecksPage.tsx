import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, Car, Users, Building, Smartphone, Zap, Database, BarChart3, Infinity } from 'lucide-react';
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

const UnlimitedVINChecksPage = () => {
  const title = "Unlimited Free VIN Checks - No Daily Limits or Restrictions | SafeOrStolen";
  const metaDescription = "Free unlimited VIN verification with no daily limits. Check as many vehicles as needed. Instant theft, salvage, and title verification from FBI and state databases.";
  const h1 = "Unlimited Free VIN Checks - No Limits, No Waiting, No Restrictions";

  const highVolumeUsers = [
    { icon: Building, title: "Auto Dealerships", desc: "Check 50+ vehicles daily when processing inventory" },
    { icon: Users, title: "Wholesale Buyers", desc: "Verify entire auction catalogs before bidding" },
    { icon: Car, title: "Used Car Buyers", desc: "Compare 10-20 options before deciding" },
    { icon: Building, title: "Fleet Management", desc: "Monitor hundreds of company vehicles" },
    { icon: BarChart3, title: "Auto Appraisers", desc: "Verify vehicles for accurate valuations" },
    { icon: Shield, title: "Insurance Adjusters", desc: "Confirm vehicle status for claims" },
    { icon: Car, title: "Repo Companies", desc: "Verify vehicles before recovery" },
    { icon: Users, title: "Anyone Needing Bulk", desc: "No artificial restrictions on usage" }
  ];

  const whatWeCheck = [
    "FBI NCIC stolen vehicle database",
    "All 50 state police theft reports",
    "Insurance total loss records",
    "Salvage title status",
    "Flood damage reports",
    "Title branding issues",
    "Odometer fraud flags",
    "Lien and loan status"
  ];

  const faqs = [
    {
      question: "Is unlimited really unlimited?",
      answer: "Yes, truly unlimited. Our paid plans allow unlimited VIN checks with no daily caps, no weekly limits, and no throttling. Check 10 VINs or 10,000 VINs per month - same price. We mean it when we say unlimited."
    },
    {
      question: "Do you throttle after a certain amount?",
      answer: "No throttling whatsoever. High-volume dealers check hundreds of VINs daily without any slowdown or restrictions. Our infrastructure is built for scale. The only limit on free accounts is 2 checks, then you need a paid plan for unlimited access."
    },
    {
      question: "Can multiple people use one account?",
      answer: "Yes! Business plans include team access management. Add multiple users to your account, each with their own login. All checks count toward your unlimited total. Perfect for dealerships with multiple salespeople or multi-location businesses."
    },
    {
      question: "What about batch checking?",
      answer: "Premium and Business plans include batch VIN checking. Upload a CSV with hundreds of VINs and get results for all of them at once. Perfect for auction buyers, dealers processing trade-ins, or fleet managers auditing vehicles."
    },
    {
      question: "Is there a premium version with more features?",
      answer: "Yes, we offer tiered plans: Starter ($9.99/mo) for unlimited individual checks, Professional ($49.99/mo) adds batch checking and detailed reports, and Business ($99.99/mo) adds API access, team management, and priority support. All plans include truly unlimited VIN checks."
    },
    {
      question: "How is this free/affordable?",
      answer: "We aggregate data from multiple sources efficiently, and our technology stack is optimized for high-volume queries. Free users get 2 checks (enough for casual buyers), while paid plans cover infrastructure costs for unlimited usage. Volume makes the per-check cost very low."
    },
    {
      question: "What's included in the 3-second VIN check?",
      answer: "Every VIN check includes: theft status (FBI NCIC, all 50 states), salvage/title brand status, insurance total loss records, flood damage reports, odometer verification, and basic vehicle specifications. Premium plans add detailed history reports."
    },
    {
      question: "Do I need an account for basic checks?",
      answer: "No, you can run 2 free VIN checks without creating an account. For unlimited checks, you'll need to sign up for a paid plan. Account creation takes 30 seconds and unlocks all features."
    }
  ];

  const testimonials = [
    {
      quote: "We check 200+ VINs per week at our dealership. SafeOrStolen's unlimited plan saves us thousands compared to per-check services.",
      name: "Mike R.",
      title: "Used Car Manager, Phoenix Auto Mall"
    },
    {
      quote: "As an auction buyer, I need to verify entire catalogs quickly. The batch upload feature is a game-changer.",
      name: "Sarah T.",
      title: "Wholesale Auto Buyer"
    },
    {
      quote: "Finally, a VIN checker that doesn't nickel-and-dime us. True unlimited means our sales team can check every trade-in.",
      name: "David L.",
      title: "General Manager, TX Auto Group"
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "VIN Checker", "item": "https://safeorstolen.com/vin-checker" },
      { "@type": "ListItem", "position": 3, "name": "Unlimited VIN Checks", "item": "https://safeorstolen.com/unlimited-vin-checks" }
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Unlimited VIN Verification",
    "description": metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "9.99",
      "priceCurrency": "USD",
      "description": "Unlimited VIN checks starting at $9.99/month"
    }
  };

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords="unlimited VIN checks, free VIN verification, no limit VIN checker, bulk VIN lookup, unlimited vehicle history, dealer VIN check, batch VIN verification, unlimited stolen vehicle check"
        canonical="/unlimited-vin-checks"
        structuredData={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to check any VIN.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "VIN Checker", href: "/vin-checker" },
            { name: "Unlimited VIN Checks", href: "/unlimited-vin-checks" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <Infinity className="w-4 h-4" />
                Truly Unlimited
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-green-500 to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professional-grade VIN verification with unlimited free checks. No daily limits, no waiting periods, no hidden fees. Check unlimited vehicles whether you're a dealer processing inventory, buyer shopping multiple cars, or seller verifying title status. Instant results from FBI NCIC, state police, and insurance databases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/verify">
                  <Button size="lg" className="gap-2">
                    Check VIN Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="gap-2">
                    View Unlimited Plans
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Infinity className="w-8 h-8 text-green-500 mb-2" />
                <span className="text-sm font-semibold">Truly Unlimited</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Database className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">100+ Databases</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">FBI NCIC</span>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Signals */}
        <aside className="py-4 px-4 border-y border-border/50 bg-muted/20">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Written by</span>
              <Link to="/about" className="font-medium text-foreground hover:text-primary">SafeOrStolen Dealer Solutions Team</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Last updated: January 2025</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How we verify</Link>
            </div>
          </div>
        </aside>

        <SitewideCredibilityBar />

        {/* Section 1: Why Unlimited Matters */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Infinity className="w-8 h-8 text-green-500" />
              Why Unlimited Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Most VIN checkers charge per check or impose daily limits. That doesn't work for professionals who need to verify many vehicles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">Car Dealers: Check 50+ Vehicles Daily</h3>
                <p className="text-muted-foreground">When processing inventory, trade-ins, and auction purchases, you can't afford daily limits. Unlimited means every vehicle gets checked, every time.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">Buyers: Compare 10-20 Options</h3>
                <p className="text-muted-foreground">Shopping for a car means looking at many options. Check every vehicle you're considering without worrying about running out of searches.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">Auction Buyers: Verify Entire Catalog</h3>
                <p className="text-muted-foreground">Before an auction, verify every vehicle you might bid on. No limits means you can check the entire catalog, not just your top picks.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">Fleet Managers: Monitor Hundreds</h3>
                <p className="text-muted-foreground">Company fleets need regular verification. Unlimited lets you check your entire fleet without per-vehicle costs adding up.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">No Waiting 24 Hours Between Checks</h3>
                <p className="text-muted-foreground">Some services make you wait between checks. Not us. Check another VIN immediately after the first. No cooldown, no delays.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">No Artificial Restrictions</h3>
                <p className="text-muted-foreground">We don't throttle, cap, or limit your usage. Unlimited means unlimited. Check 10 VINs or 10,000 - your choice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What We Check */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              What We Check (Every Time, Unlimited)
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every VIN check queries the same comprehensive databases - no stripped-down version for free users.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {whatWeCheck.map((item, index) => (
                <div key={index} className="flex gap-3 p-4 bg-card rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-green-500" />
                <span className="font-bold text-lg">3-Second Instant Results</span>
              </div>
              <p className="text-muted-foreground">Every query returns comprehensive results in approximately 3 seconds. No waiting, no processing delays. Check VINs as fast as you can type them.</p>
            </div>

            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* Section 3: Perfect For High-Volume Users */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Perfect For High-Volume Users
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our unlimited VIN checks are designed for professionals and high-volume users.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {highVolumeUsers.map((user, index) => (
                <div key={index} className="flex gap-3 p-4 bg-background rounded-lg">
                  <user.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">{user.title}</span>
                    <p className="text-sm text-muted-foreground">{user.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: How to Check Unlimited VINs */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              How to Check Unlimited VINs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start checking VINs in seconds. No complicated setup, no lengthy onboarding.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="font-bold mb-2">Enter VIN (17 Characters)</h3>
                  <p className="text-muted-foreground">Find the VIN on the dashboard (visible through windshield), driver's door jamb, or vehicle documents. Enter all 17 characters exactly.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="font-bold mb-2">Get Instant Theft Verification</h3>
                  <p className="text-muted-foreground">Within 3 seconds, receive comprehensive results showing theft status, salvage history, title brands, and more from 100+ databases.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="font-bold mb-2">Check Another Immediately</h3>
                  <p className="text-muted-foreground">No waiting, no cooldown. Check your next VIN right away. With unlimited plans, there's no limit to how many you can check.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="font-bold mb-2">No Login Required for Basic Checks</h3>
                  <p className="text-muted-foreground">Try 2 free checks without creating an account. For unlimited access, sign up for a paid plan (takes 30 seconds).</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check VIN Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Mobile App */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-primary" />
              Mobile App for On-the-Go Verification
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take unlimited VIN checks with you. Our mobile app works anywhere, anytime.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Check VINs at Auctions</h3>
                <p className="text-muted-foreground">Walk the lot and verify every vehicle before bidding. No more guessing or hoping – know before you bid.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Scan VIN Barcodes with Camera</h3>
                <p className="text-muted-foreground">Point your camera at the VIN barcode (usually on door jamb sticker) for instant scanning. No typing required.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Verify at Dealership Lots</h3>
                <p className="text-muted-foreground">Whether you're buying or selling, verify vehicles right on the lot. Works on any dealership's inventory.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Works Anywhere, Anytime</h3>
                <p className="text-muted-foreground">Cellular or WiFi – our app works everywhere. Check VINs at private sales, parking lots, or anywhere you find a vehicle.</p>
              </div>
              <div className="p-6 bg-background rounded-lg md:col-span-2">
                <h3 className="font-bold mb-3">Unlimited Checks on Mobile Too</h3>
                <p className="text-muted-foreground">Your unlimited plan works on mobile and desktop. Same account, same unlimited access. Check on your phone, tablet, or computer.</p>
                <Link to="/app" className="text-primary hover:underline text-sm mt-2 inline-block">→ Download Mobile App</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Dealer & Business Features */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Dealer & Business Features
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Premium features for dealerships, wholesalers, and businesses processing high volumes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Batch VIN Checking (Upload CSV)</h3>
                <p className="text-muted-foreground">Upload a spreadsheet with hundreds of VINs and get results for all of them at once. Perfect for inventory audits and auction prep.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">API Integration Available</h3>
                <p className="text-muted-foreground">Integrate VIN verification directly into your DMS, website, or inventory management system. Automatic verification for every vehicle.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Automatic Inventory Verification</h3>
                <p className="text-muted-foreground">Set up automatic checks when vehicles enter inventory. Catch problems before they become your problems.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Export Results for Records</h3>
                <p className="text-muted-foreground">Download verification reports as PDFs or CSVs. Keep records for compliance, due diligence documentation, or customer transparency.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Team Access Management</h3>
                <p className="text-muted-foreground">Add multiple users to your business account. Each team member gets their own login while sharing unlimited access.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Premium: $99/Month Unlimited</h3>
                <p className="text-muted-foreground">Business plan includes everything: unlimited checks, batch upload, API access, team accounts, and priority support.</p>
                <Link to="/pricing" className="text-primary hover:underline text-sm mt-2 inline-block">→ View Business Plans</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Trust & Accuracy */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Trust & Accuracy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Professional-grade verification you can rely on for business decisions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="p-6 bg-background rounded-lg text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">99.2%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">Real-Time</div>
                <div className="text-muted-foreground">Database Updates</div>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">800+</div>
                <div className="text-muted-foreground">Businesses Trust Us</div>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Databases Checked</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">Multiple Database Cross-Reference</h3>
                <p className="text-muted-foreground">We don't rely on a single source. Every VIN is checked against FBI NCIC, all 50 state databases, NICB, insurance records, and more for comprehensive verification.</p>
              </div>
              <div className="p-4 bg-background rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2">Law Enforcement Grade Verification</h3>
                <p className="text-muted-foreground">Our databases include the same sources used by police departments for vehicle verification. Professional-grade accuracy for professional use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What High-Volume Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-card rounded-lg">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg">
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
        <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-green-500/5 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Unlimited VIN Checks Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              No limits. No waiting. No restrictions. Check as many VINs as you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check VIN Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="gap-2">
                  View Unlimited Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/vin-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">VIN Checker</h3>
                <p className="text-sm text-muted-foreground">Standard VIN verification</p>
              </Link>
              <Link to="/check-car" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Check Car</h3>
                <p className="text-sm text-muted-foreground">Complete car verification</p>
              </Link>
              <Link to="/for-dealers" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">For Dealers</h3>
                <p className="text-sm text-muted-foreground">Dealer-specific solutions</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UnlimitedVINChecksPage;
