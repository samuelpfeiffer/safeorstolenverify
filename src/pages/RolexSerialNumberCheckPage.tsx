import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, Watch, Gem, Eye, Lock, FileText } from 'lucide-react';
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

const RolexSerialNumberCheckPage = () => {
  const title = "Rolex Serial Number Check - Verify Luxury Watch Not Stolen | SafeOrStolen";
  const metaDescription = "Free Rolex serial number verification. Check if luxury watches are stolen before buying. Instant verification from police and insurance databases. 3-second results.";
  const h1 = "Rolex Serial Number Check - Verify Luxury Watch Not Stolen";

  const faqs = [
    {
      question: "Is Rolex serial number verification free?",
      answer: "Yes, SafeOrStolen offers 2 free luxury watch serial number checks. This allows you to verify Rolex watches before buying without any cost. Additional checks require a paid plan starting at $9.99/month for unlimited verifications, which is popular with watch dealers and collectors."
    },
    {
      question: "Can you check vintage Rolex watches?",
      answer: "Yes, we can check vintage Rolex serial numbers. Our databases include historical theft reports dating back decades. However, very old theft reports (pre-1990) may have less comprehensive data. For vintage pieces worth $20,000+, we recommend also consulting specialized vintage watch authentication services."
    },
    {
      question: "What if the serial number is removed or scratched?",
      answer: "A removed, filed, or scratched serial number is a MAJOR red flag. This is often done to hide a watch's stolen status or to conceal that it's a frankenwatch (assembled from parts of multiple watches). Do NOT purchase any Rolex with a damaged serial number. Walk away immediately and consider reporting the seller."
    },
    {
      question: "Do you verify authenticity (fake vs real)?",
      answer: "Our primary function is theft verification, not authentication. We check if a serial number has been reported stolen, not whether the watch is genuine. For authentication, we recommend: (1) Rolex authorized service centers, (2) Certified pre-owned dealers, (3) Professional watch authentication services. However, if a serial number doesn't match Rolex's format, that's a red flag."
    },
    {
      question: "How accurate is the stolen watch database?",
      answer: "Our database aggregates theft reports from international police agencies, Interpol, insurance companies, and victim reports. Accuracy depends on whether the theft was reported. Most luxury watch thefts are reported due to insurance claims, making our database quite comprehensive for high-value pieces like Rolex."
    },
    {
      question: "Can I check the serial number before meeting the seller?",
      answer: "Absolutely! Ask the seller for the serial number before meeting. It's located between the lugs at 6 o'clock (requires bracelet removal) or on the Rolex warranty card. If the seller refuses to provide the serial number, that's a major red flag. Legitimate sellers have nothing to hide."
    },
    {
      question: "What information do I get from the Rolex check?",
      answer: "Our Rolex serial number check provides: (1) Theft status - whether reported stolen to any police agency worldwide, (2) Insurance claim status - whether an insurance claim was filed, (3) Pawn shop records - if the watch was pawned, (4) Basic model information when available based on serial number range. We do NOT provide ownership history or authentication."
    },
    {
      question: "Do you cover watches other than Rolex?",
      answer: "Yes! We verify serial numbers for all luxury watch brands including Patek Philippe, Audemars Piguet, Omega, Cartier, IWC, Jaeger-LeCoultre, Vacheron Constantin, Breitling, TAG Heuer, and more. Any luxury watch with a serial number can be checked."
    }
  ];

  const otherLuxuryBrands = [
    { name: "Patek Philippe", description: "Ultra-luxury Swiss watches, often $50,000+" },
    { name: "Audemars Piguet", description: "Royal Oak, offshore models highly targeted" },
    { name: "Omega", description: "Speedmaster, Seamaster, Planet Ocean" },
    { name: "Cartier", description: "Tank, Santos, Ballon Bleu" },
    { name: "IWC Schaffhausen", description: "Portugieser, Pilot's watches" },
    { name: "Jaeger-LeCoultre", description: "Reverso, Master collection" },
    { name: "Vacheron Constantin", description: "Holy trinity of watchmaking" },
    { name: "Breitling", description: "Navitimer, Superocean" },
    { name: "TAG Heuer", description: "Carrera, Monaco, Aquaracer" },
    { name: "Hublot", description: "Big Bang, Classic Fusion" }
  ];

  const redFlags = [
    { flag: "No papers or original box", detail: "Legitimate sellers usually have original documentation. Missing papers could indicate theft or grey market sourcing." },
    { flag: "Price significantly below market value", detail: "A $15,000 Submariner for $8,000? Too good to be true usually means stolen or fake." },
    { flag: "Seller pressuring for quick sale", detail: "Thieves want to offload stolen goods quickly. Legitimate sellers are patient." },
    { flag: "Serial number doesn't match warranty card", detail: "If the case serial doesn't match the card, something is wrong. Could be stolen or frankenwatch." },
    { flag: "Scratched or removed serial number", detail: "Serial number tampering is a federal crime. This watch is almost certainly stolen." },
    { flag: "Seller won't meet at safe location", detail: "Legitimate sellers will meet at police stations, jewelry stores, or banks." },
    { flag: "Cash only, no traceable payment", detail: "Thieves avoid paper trails. Insist on traceable payment methods." },
    { flag: "Seller has multiple luxury watches", detail: "Unless they're a dealer, someone with many luxury watches for sale could be a fence." },
    { flag: "Watch shows signs of forced removal", detail: "Scratches on clasp, damaged links, or bent pins suggest the watch was forcibly removed." },
    { flag: "Seller can't answer basic questions", detail: "If they don't know when/where they bought it, service history, etc., be suspicious." }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "Check Jewelry", "item": "https://safeorstolen.com/check-jewelry" },
      { "@type": "ListItem", "position": 3, "name": "Rolex Serial Number Check", "item": "https://safeorstolen.com/rolex-serial-number-check" }
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rolex Serial Number Verification",
    "description": metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "serviceType": "Luxury Watch Theft Verification"
  };

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords="rolex serial number check, verify rolex not stolen, rolex theft verification, luxury watch stolen check, check rolex serial number, rolex grey market verification, stolen rolex database, rolex insurance claim check"
        canonical="/rolex-serial-number-check"
        structuredData={[breadcrumbSchema, faqSchema, productSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to check any Rolex serial number.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Check Jewelry", href: "/check-jewelry" },
            { name: "Rolex Serial Number Check", href: "/rolex-serial-number-check" }
          ]} />
        </div>

        {/* Hero Section - Luxury Aesthetic */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4 border border-primary/20">
                <Watch className="w-4 h-4" />
                Luxury Watch Verification
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Buying a pre-owned Rolex? Verify it's not stolen before paying thousands. Our luxury watch verification tool checks police databases, insurance claims, and theft reports in 3 seconds. Essential for buying from private sellers, pawn shops, or online marketplaces.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90">
                  Verify Rolex Serial Number <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators - Premium Styling */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border/50 shadow-sm">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Police Databases</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border/50 shadow-sm">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border/50 shadow-sm">
                <Gem className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Luxury Specialist</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border/50 shadow-sm">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Insurance Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Signals */}
        <aside className="py-4 px-4 border-y border-border/50 bg-muted/20">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Written by</span>
              <Link to="/about" className="font-medium text-foreground hover:text-primary">SafeOrStolen Luxury Verification Team</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Last updated: January 2025</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How we verify</Link>
            </div>
          </div>
        </aside>

        <SitewideCredibilityBar />

        {/* Section 1: How to Find Rolex Serial Number */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              How to Find Rolex Serial Number
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every Rolex has a unique serial number that identifies the watch. Here's where to find it on different Rolex models.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Location 1: Between the Lugs at 6 O'Clock
                </h3>
                <p className="text-muted-foreground mb-4">
                  On most Rolex watches (pre-2005 models), the serial number is engraved on the case between the lugs at the 6 o'clock position. This requires removing the bracelet to view.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm"><strong>How to access:</strong> Use a spring bar tool to carefully remove the bracelet. The serial number will be visible on the case edge. Do NOT attempt this if you're not experienced – take it to a jeweler.</p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Location 2: Rehaut Engraving (2005+ Models)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Starting in 2005, Rolex began engraving the serial number on the rehaut (inner bezel ring) at the 6 o'clock position. This can be seen without removing the bracelet by looking at the dial edge.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm"><strong>How to view:</strong> Look at the inner ring between the dial and crystal. You'll see "ROLEX ROLEX ROLEX" repeated with the serial number at 6 o'clock. Use a loupe for best visibility.</p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Location 3: Rolex Warranty Card / Guarantee
                </h3>
                <p className="text-muted-foreground mb-4">
                  The serial number is printed on the Rolex warranty card (green card for older models, or new-style card for recent purchases). This should match the case serial exactly.
                </p>
                <div className="bg-orange-500/10 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm"><strong>⚠️ Important:</strong> If the card serial doesn't match the watch serial, DO NOT purchase. This indicates the card is from a different watch (possibly stolen) or the watch itself is problematic.</p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-bold text-lg mb-3">Rolex Serial Number Format</h3>
                <p className="text-muted-foreground mb-4">
                  Rolex serial numbers have evolved over the years:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> <strong>Pre-1987:</strong> Pure numbers (e.g., 1234567)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> <strong>1987-2010:</strong> Letter prefix + numbers (e.g., R123456, Z123456)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> <strong>2010-present:</strong> Random alphanumeric (e.g., 3K9P2X1Z)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Verify Rolex Before Buying */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Why Verify Rolex Before Buying?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rolex watches are among the most stolen luxury items in the world. Understanding the risks protects your investment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-3">Rolex Watches: Prime Theft Targets</h3>
                <p className="text-muted-foreground">Rolex is the most stolen luxury watch brand worldwide. Their recognizable design, high value, and strong resale market make them irresistible to thieves. Street robberies, home burglaries, and organized theft rings specifically target Rolex owners.</p>
              </div>

              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-3">High Resale Value Attracts Thieves</h3>
                <p className="text-muted-foreground">A stolen Rolex Submariner can be sold for $8,000-12,000 within hours of theft. Unlike electronics that can be bricked, watches have no "kill switch." This makes them perfect for thieves seeking quick cash.</p>
              </div>

              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-3">Stolen Watches Sold on Grey Market</h3>
                <p className="text-muted-foreground">Stolen Rolex watches often end up on the grey market, sold through private sales, online marketplaces, and even some unscrupulous dealers. Without verification, you can't know if that "great deal" is stolen property.</p>
              </div>

              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-3">You Lose Watch + Money If Recovered</h3>
                <p className="text-muted-foreground">If police trace a stolen Rolex to you, they will confiscate it as evidence – even if you paid $15,000 and had no idea it was stolen. You lose the watch AND your money with no recourse against a seller who has vanished.</p>
              </div>

              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-3">Insurance Fraud is Common</h3>
                <p className="text-muted-foreground">Some owners file insurance claims on their Rolex as "lost" or "stolen," collect the payout, then sell the watch. If the insurance company discovers this, they'll pursue recovery of the watch – from you.</p>
              </div>

              <div className="p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold text-destructive mb-3">Fake Serial Numbers Exist</h3>
                <p className="text-muted-foreground">Sophisticated counterfeiters replicate Rolex serial numbers from stolen watches onto fakes. Our database helps identify if a serial number has been flagged as problematic or associated with known counterfeiting operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How to Check Rolex Serial Number */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-primary" />
              How to Check Rolex Serial Number
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Verifying a Rolex serial number takes just 3 steps and could save you thousands of dollars.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-amber-600 text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="font-bold mb-2">Enter Rolex Serial Number into SafeOrStolen</h3>
                  <p className="text-muted-foreground">Type the complete serial number from the watch case (between lugs or rehaut) or warranty card. Include all letters and numbers exactly as shown. Our system validates the format against known Rolex serial number patterns.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-amber-600 text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="font-bold mb-2">Verify Against Theft Databases</h3>
                  <p className="text-muted-foreground">Our system instantly queries international police databases, Interpol records, insurance company theft reports, and pawn shop databases. We search for any match indicating the watch has been reported stolen.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-amber-600 text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="font-bold mb-2">Get Instant Results in 3 Seconds</h3>
                  <p className="text-muted-foreground">Receive a comprehensive report showing: theft status, insurance claims, pawn shop records, and any law enforcement alerts. If CLEAN, proceed with purchase confidently. If FLAGGED, walk away immediately.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90">
                  Check Rolex Serial Number Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: What We Check */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              What We Check for Luxury Watches
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Rolex verification queries multiple authoritative databases to provide comprehensive theft verification.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">International Police Databases</span>
                  <p className="text-sm text-muted-foreground">Interpol, FBI, Scotland Yard, and police agencies worldwide</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Insurance Theft Claims</span>
                  <p className="text-sm text-muted-foreground">Major insurance companies' stolen property databases</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Luxury Goods Theft Reports</span>
                  <p className="text-sm text-muted-foreground">Specialized databases for high-value property</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Pawn Shop Records</span>
                  <p className="text-sm text-muted-foreground">LeadsOnline and national pawn transaction databases</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">High-Value Property Databases</span>
                  <p className="text-sm text-muted-foreground">Art Loss Register and luxury item registries</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Serial Number Validation</span>
                  <p className="text-sm text-muted-foreground">Format verification against Rolex specifications</p>
                </div>
              </div>
            </div>

            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* Section 5: Rolex Theft Statistics */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Rolex Theft Statistics
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding the scale of luxury watch theft helps you appreciate why verification is essential.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="p-6 bg-card rounded-lg text-center border border-border/50">
                <div className="text-4xl font-bold text-destructive mb-2">$1B+</div>
                <div className="text-muted-foreground">Annual Luxury Watch Theft (Est.)</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center border border-border/50">
                <div className="text-4xl font-bold text-orange-500 mb-2">#1</div>
                <div className="text-muted-foreground">Most Stolen Luxury Watch Brand</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center border border-border/50">
                <div className="text-4xl font-bold text-primary mb-2">15%</div>
                <div className="text-muted-foreground">Pre-Owned Market From Theft (Est.)</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center border border-border/50">
                <div className="text-4xl font-bold text-green-500 mb-2">3 sec</div>
                <div className="text-muted-foreground">Time to Verify Before Buying</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold mb-2">Common Theft Methods</h3>
                <p className="text-muted-foreground">Street robberies (especially in major cities), home burglaries targeting watch collections, airport and hotel room thefts, and organized smash-and-grab raids on jewelry stores. Thieves specifically target visible Rolex watches.</p>
              </div>

              <div className="p-4 bg-card rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold mb-2">Organized Crime Targeting Rolex</h3>
                <p className="text-muted-foreground">Criminal organizations run sophisticated watch theft rings. They target owners leaving restaurants, hotels, and airports. In London alone, over 1,000 watches are stolen from wrists annually. Many end up sold to unsuspecting buyers online.</p>
              </div>

              <div className="p-4 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-2">Grey Market Concerns</h3>
                <p className="text-muted-foreground">The unregulated grey market – private sales, online marketplaces, and non-authorized dealers – is where most stolen watches are sold. Without verification, you have no way to know if that discounted Rolex is legitimate or stolen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Other Luxury Watches We Verify */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Watch className="w-8 h-8 text-primary" />
              Other Luxury Watches We Verify
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SafeOrStolen verifies serial numbers for all major luxury watch brands, not just Rolex.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {otherLuxuryBrands.map((brand, index) => (
                <div key={index} className="flex gap-3 p-4 bg-background rounded-lg border border-border/50">
                  <Gem className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">{brand.name}</span>
                    <p className="text-sm text-muted-foreground">{brand.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">Any luxury watch with a serial number can be verified.</strong> If the brand isn't listed above, we can still check it against theft databases. Just enter the serial number.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Red Flags When Buying Rolex */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-500" />
              Red Flags When Buying a Rolex
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Beyond serial number verification, watch for these warning signs that may indicate a stolen or problematic Rolex.
            </p>

            <div className="space-y-4">
              {redFlags.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-orange-500/10 rounded-lg border-l-4 border-orange-500">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">{item.flag}</span>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Rolex Verification</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg border border-border/50">
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

        {/* Final CTA - Premium Styling */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-amber-500/5 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Verify Rolex Serial Number Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't risk losing thousands on a stolen luxury watch. Check the serial number in 3 seconds before you pay.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90">
                Check Rolex Free Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/check-jewelry" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors border border-border/50">
                <h3 className="font-semibold mb-1">Jewelry Check</h3>
                <p className="text-sm text-muted-foreground">Verify all luxury jewelry</p>
              </Link>
              <Link to="/serial-number-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors border border-border/50">
                <h3 className="font-semibold mb-1">Serial Number Checker</h3>
                <p className="text-sm text-muted-foreground">Check any serial number</p>
              </Link>
              <Link to="/check-electronics" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors border border-border/50">
                <h3 className="font-semibold mb-1">Electronics Check</h3>
                <p className="text-sm text-muted-foreground">Verify electronics serial numbers</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RolexSerialNumberCheckPage;
