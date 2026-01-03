import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, MapPin, Car, FileText } from 'lucide-react';
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

const StolenVehicleDatabaseArizonaPage = () => {
  const title = "Arizona Stolen Vehicle Database - Check AZ Cars & VIN Lookup | SafeOrStolen";
  const metaDescription = "Free Arizona stolen vehicle database search. Check if cars are stolen in AZ using VIN or license plate. Access police reports and theft records instantly.";
  const h1 = "Arizona Stolen Vehicle Database - Free VIN & License Plate Check";

  const arizonaCities = [
    "Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", 
    "Gilbert", "Tempe", "Peoria", "Surprise", "Yuma", "Flagstaff"
  ];

  const faqs = [
    {
      question: "Is Arizona stolen vehicle check free?",
      answer: "Yes, SafeOrStolen offers 2 free Arizona vehicle checks. This allows you to verify cars before buying without any cost. Additional checks require a paid plan starting at $9.99/month for unlimited verifications, which is popular with Arizona car dealers and buyers."
    },
    {
      question: "Can I check out-of-state vehicles in Arizona?",
      answer: "Absolutely! Our system checks national databases including FBI NCIC, so you can verify any vehicle regardless of where it's registered. This is important in Arizona where many cars come from California, Nevada, and other states."
    },
    {
      question: "What if the vehicle shows as stolen?",
      answer: "If our check shows a vehicle is reported stolen: (1) Do NOT complete the purchase, (2) Document all seller information, (3) Contact Arizona law enforcement or call the AZ Auto Theft Task Force at 602-223-2212, (4) Report the listing to the platform. If you already purchased it, contact police immediately."
    },
    {
      question: "Do I need VIN and license plate?",
      answer: "Either works, but we recommend checking both for complete verification. The VIN is more reliable for historical records, while license plates can reveal current registration status. If the seller won't provide the VIN, that's a major red flag."
    },
    {
      question: "How current is the Arizona database?",
      answer: "Our database is updated in real-time as stolen vehicle reports are filed with Arizona DPS, local police departments, and the FBI NCIC. A vehicle stolen this morning can appear in our system within hours of the police report."
    },
    {
      question: "Does this check for title washing?",
      answer: "Yes, our Arizona vehicle check includes title brand history. We flag vehicles that may have been 'title washed' - where salvage, flood, or lemon titles from other states were cleared when registering in Arizona. This is a common fraud in border states."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "Check Car", "item": "https://safeorstolen.com/check-car" },
      { "@type": "ListItem", "position": 3, "name": "Arizona Stolen Vehicle Database", "item": "https://safeorstolen.com/stolen-vehicle-database-arizona" }
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arizona Stolen Vehicle Database Check",
    "description": metaDescription,
    "areaServed": {
      "@type": "State",
      "name": "Arizona",
      "containsPlace": arizonaCities.map(city => ({
        "@type": "City",
        "name": city
      }))
    },
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    }
  };

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords="arizona stolen vehicle database, AZ stolen car check, phoenix stolen vehicle search, arizona VIN lookup, AZ license plate lookup, maricopa county stolen car, tucson stolen vehicle check, arizona vehicle theft"
        canonical="/stolen-vehicle-database-arizona"
        structuredData={[breadcrumbSchema, faqSchema, localBusinessSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to check any Arizona vehicle.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Check Car", href: "/check-car" },
            { name: "Arizona Stolen Vehicle Database", href: "/stolen-vehicle-database-arizona" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Arizona (AZ)
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Check Arizona's stolen vehicle database before buying a used car. Our free tool searches Phoenix PD, Mesa PD, Tucson PD, and all Arizona law enforcement databases plus FBI NCIC. Verify any vehicle in seconds using VIN or license plate.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check Arizona Vehicle Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">AZ DPS Data</span>
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
              <Link to="/about" className="font-medium text-foreground hover:text-primary">SafeOrStolen Research Team</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Last updated: January 2025</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How we verify</Link>
            </div>
          </div>
        </aside>

        <SitewideCredibilityBar />

        {/* Arizona Vehicle Theft Statistics */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Arizona Vehicle Theft Statistics
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Arizona has one of the highest vehicle theft rates in the nation. Understanding the local landscape helps you stay protected.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-destructive mb-2">18,742</div>
                <div className="text-muted-foreground">Vehicles Stolen in Arizona (2024)</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">#8</div>
                <div className="text-muted-foreground">Maricopa County Theft Ranking (US)</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">51/day</div>
                <div className="text-muted-foreground">Average Daily Thefts in Arizona</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">56%</div>
                <div className="text-muted-foreground">Recovery Rate</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold mb-2">Phoenix Metro Area Hotspot</h3>
                <p className="text-muted-foreground">The Phoenix metropolitan area accounts for over 70% of Arizona vehicle thefts. Common targets include trucks, SUVs, and Honda/Toyota vehicles which are easily sold for parts.</p>
              </div>
              <div className="p-4 bg-card rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold mb-2">Many Resold on Craigslist/Facebook Marketplace</h3>
                <p className="text-muted-foreground">Stolen vehicles are often resold within days on online marketplaces. Thieves target private party sales where there's less scrutiny than at dealerships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Check */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              How to Check Arizona Stolen Vehicle Database
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Verify any Arizona vehicle in 3 simple steps before you meet the seller.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="font-bold mb-2">Enter VIN or Arizona License Plate</h3>
                  <p className="text-muted-foreground">Type the 17-character VIN (found on dashboard, driver's door jamb, or title) or the Arizona license plate number. Either identifier works for verification.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="font-bold mb-2">We Search Arizona DPS, FBI NCIC & More</h3>
                  <p className="text-muted-foreground">Our system queries Arizona Department of Public Safety, Phoenix PD, Mesa PD, Tucson PD, and FBI NCIC databases simultaneously. We also check NICB and insurance records.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="font-bold mb-2">Get Instant Results in 3 Seconds</h3>
                  <p className="text-muted-foreground">Receive a comprehensive report showing theft status, title brands, registration status, and any law enforcement alerts. If CLEAN, proceed with caution. If STOLEN, walk away immediately.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check Arizona Vehicle <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              What We Check for Arizona Vehicles
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Arizona stolen vehicle database check queries multiple authoritative sources for comprehensive verification.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Arizona Department of Public Safety (DPS)</span>
                  <p className="text-sm text-muted-foreground">State-level stolen vehicle records</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Phoenix Police Department</span>
                  <p className="text-sm text-muted-foreground">Phoenix metro theft reports</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Mesa Police Department</span>
                  <p className="text-sm text-muted-foreground">East Valley coverage</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Tucson Police Department</span>
                  <p className="text-sm text-muted-foreground">Southern Arizona records</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Scottsdale Police Department</span>
                  <p className="text-sm text-muted-foreground">Scottsdale area theft reports</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">All Arizona Law Enforcement</span>
                  <p className="text-sm text-muted-foreground">Statewide police database access</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">FBI NCIC National Database</span>
                  <p className="text-sm text-muted-foreground">Federal stolen vehicle registry</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Insurance Theft Claims</span>
                  <p className="text-sm text-muted-foreground">NICB and insurance records</p>
                </div>
              </div>
            </div>
            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* Arizona VIN Verification */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Car className="w-8 h-8 text-primary" />
              Arizona VIN Verification
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Vehicle Identification Number (VIN) is the most reliable way to verify an Arizona vehicle's history.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">How to Find the VIN</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Dashboard (visible through windshield on driver's side)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Driver's door jamb (sticker on the door frame)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Arizona title document</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Vehicle registration</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Engine block (for verification)</li>
                </ul>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">What the VIN Reveals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Make, model, and year of manufacture</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Theft history and police reports</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Title brands (salvage, flood, lemon)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Odometer readings over time</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Insurance claims and total loss records</li>
                </ul>
              </div>
              <div className="p-6 bg-orange-500/10 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Title Washing Warning for Arizona
                </h3>
                <p className="text-muted-foreground">Arizona is a common destination for "title washing" - where salvage or flood-damaged vehicles from other states are re-registered with clean titles. Our check flags potential title washing by comparing multi-state records.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Arizona License Plate Lookup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Arizona License Plate Lookup</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Arizona license plate lookup provides comprehensive vehicle information from state databases.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">Current Registration Status</h3>
                <p className="text-muted-foreground">Verify the vehicle is currently registered with Arizona MVD and hasn't lapsed or been suspended.</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">Theft Reports</h3>
                <p className="text-muted-foreground">Check if the license plate or associated vehicle has been reported stolen to any Arizona or national law enforcement agency.</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">Traffic Violations</h3>
                <p className="text-muted-foreground">View outstanding violations or unpaid tickets that could transfer to the new owner.</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold mb-3">Title History</h3>
                <p className="text-muted-foreground">Review ownership history and any title brands (salvage, reconstructed, flood damage).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Tips for Arizona */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Buying Used Cars in Arizona Safely</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow these tips when purchasing a used vehicle in Arizona to avoid scams and stolen cars.
            </p>
            <div className="space-y-4">
              {[
                { title: "Meet at a Police Station", desc: "Many Arizona police stations have designated safe exchange zones with cameras. Phoenix PD, Mesa PD, and Scottsdale PD all offer these areas." },
                { title: "Verify VIN Matches Title", desc: "Compare the VIN on the vehicle (dashboard and door jamb) to the Arizona title. They must match exactly. Mismatched VINs indicate fraud." },
                { title: "Check for Title Washing", desc: "Arizona receives many flood-damaged vehicles from Texas and hurricane states. Request a vehicle history report and inspect for water damage." },
                { title: "Avoid Cash-Only Deals", desc: "Legitimate sellers accept cashier's checks or bank wire. Cash-only demands often indicate the seller doesn't want a paper trail." },
                { title: "Phoenix-Area Safe Meetup Locations", desc: "Phoenix Police HQ, Mesa Main Station, Scottsdale Police Department, Tempe Police Department all have safe exchange areas." }
              ].map((tip, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Coverage */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Arizona Cities We Cover</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Arizona stolen vehicle database check works for vehicles registered anywhere in the state, including:
            </p>
            <div className="flex flex-wrap gap-3">
              {arizonaCities.map((city, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{city}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">+ All AZ cities</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Arizona Vehicle Check</h2>
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
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Check Arizona Stolen Vehicle Database Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't risk buying a stolen car in Arizona. Verify any VIN or license plate in 3 seconds.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Verify Arizona Vehicle <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/check-car" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Check Any Car</h3>
                <p className="text-sm text-muted-foreground">National VIN verification</p>
              </Link>
              <Link to="/vin-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">VIN Checker</h3>
                <p className="text-sm text-muted-foreground">Decode and verify VINs</p>
              </Link>
              <Link to="/license-plate-lookup" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">License Plate Lookup</h3>
                <p className="text-sm text-muted-foreground">All 50 states coverage</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenVehicleDatabaseArizonaPage;
