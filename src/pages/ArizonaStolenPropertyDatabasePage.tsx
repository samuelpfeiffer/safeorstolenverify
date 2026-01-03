import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, MapPin, Car, Smartphone, Laptop, Wrench, Gem, FileText, Scale, Building } from 'lucide-react';
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

const ArizonaStolenPropertyDatabasePage = () => {
  const title = "Arizona Stolen Property Database - Free Statewide Theft Verification | SafeOrStolen";
  const metaDescription = "Search Arizona's stolen property database. Verify vehicles, electronics, firearms across all AZ law enforcement, FBI NCIC, and insurance databases instantly.";
  const h1 = "Arizona Stolen Property Database - Statewide Theft Verification";

  const arizonaCities = [
    "Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", 
    "Gilbert", "Tempe", "Peoria", "Surprise", "Yuma", "Flagstaff",
    "Goodyear", "Avondale", "Buckeye", "Casa Grande"
  ];

  const itemTypes = [
    { icon: Car, name: "Vehicles", desc: "VIN or AZ license plate verification", link: "/check-car" },
    { icon: Shield, name: "Firearms", desc: "Serial number - federal requirement", link: "/firearms-check" },
    { icon: Smartphone, name: "Phones", desc: "IMEI/serial - carrier blacklist check", link: "/check-phone" },
    { icon: Laptop, name: "Electronics", desc: "Laptops, cameras, gaming consoles", link: "/check-electronics" },
    { icon: Car, name: "Bicycles", desc: "Frame serial number verification", link: "/check-bike" },
    { icon: Wrench, name: "Tools & Equipment", desc: "Construction, power tools", link: "/check-tools" },
    { icon: Gem, name: "Jewelry & Watches", desc: "Rolex, luxury items", link: "/check-jewelry" },
    { icon: FileText, name: "Any Unique Identifier", desc: "Serial numbers, model numbers", link: "/verify" }
  ];

  const faqs = [
    {
      question: "Is this connected to Arizona law enforcement?",
      answer: "Our database aggregates stolen property reports from Arizona law enforcement agencies including Phoenix PD, Mesa PD, Tucson PD, Scottsdale PD, Arizona DPS, and the FBI NCIC national database. While we are not a law enforcement agency, we provide access to the same stolen property data used by police for verification purposes."
    },
    {
      question: "How current is the Arizona database?",
      answer: "Our database receives real-time updates as stolen property reports are filed with law enforcement and insurance companies. A vehicle or item stolen this morning in Phoenix can appear in our system within hours of the police report being filed. We sync with multiple databases continuously."
    },
    {
      question: "Do I need to be in Arizona to search?",
      answer: "No, you can search our Arizona stolen property database from anywhere. This is particularly useful for out-of-state buyers purchasing vehicles or items from Arizona sellers, or for verifying Arizona-registered items being sold elsewhere."
    },
    {
      question: "What if property shows as stolen?",
      answer: "If our check shows property is reported stolen: (1) Do NOT complete the purchase, (2) Document all seller information, (3) Contact local Arizona law enforcement or the originating police department, (4) Report the listing to the platform. If you already purchased, contact police immediately as a fraud victim."
    },
    {
      question: "Is Arizona property verification free?",
      answer: "Yes, SafeOrStolen offers 2 free property verifications. This covers most casual buyers. For pawn shops, dealers, and high-volume users, we offer unlimited verification plans starting at $9.99/month."
    },
    {
      question: "Can I search by partial information?",
      answer: "For best results, provide complete identifiers (full VIN, complete serial number, full license plate). Partial searches may return incomplete results. If you only have partial information, enter what you have and we'll search for matches, but complete identifiers are recommended."
    },
    {
      question: "Does this cover all of Arizona?",
      answer: "Yes, our Arizona stolen property database covers all 15 counties and every city in Arizona including Phoenix, Tucson, Mesa, Scottsdale, Chandler, Glendale, Gilbert, Tempe, Peoria, Surprise, Yuma, Flagstaff, and all rural areas. Statewide coverage is comprehensive."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "Arizona Stolen Property Database", "item": "https://safeorstolen.com/arizona-stolen-property-database" }
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
    "name": "Arizona Stolen Property Database Verification",
    "description": metaDescription,
    "areaServed": {
      "@type": "State",
      "name": "Arizona"
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
        keywords="arizona stolen property database, AZ stolen vehicle check, phoenix stolen property search, arizona theft verification, maricopa county stolen property, tucson stolen items, arizona pawn shop verification, AZ law enforcement database"
        canonical="/arizona-stolen-property-database"
        structuredData={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to search Arizona stolen property database.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Arizona Stolen Property Database", href: "/arizona-stolen-property-database" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Arizona (AZ) Statewide Coverage
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Verify if property is stolen across all Arizona law enforcement databases, FBI NCIC, and insurance claims. Our platform provides comprehensive stolen property verification for vehicles, firearms, phones, electronics, and more. Used by Arizona buyers, sellers, pawn shops, and dealers.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Search Arizona Database Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">All AZ Agencies</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Real-Time Updates</span>
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
              <Link to="/about" className="font-medium text-foreground hover:text-primary">SafeOrStolen Arizona Team</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Last updated: January 2025</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How we verify</Link>
            </div>
          </div>
        </aside>

        <SitewideCredibilityBar />

        {/* Section 1: Comprehensive Arizona Database Coverage */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Comprehensive Arizona Database Coverage
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Arizona stolen property database aggregates data from every major law enforcement agency and database in the state, plus national resources.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">All Arizona Law Enforcement Agencies</span>
                  <p className="text-sm text-muted-foreground">Statewide coverage of all police departments</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Phoenix Police Department</span>
                  <p className="text-sm text-muted-foreground">Arizona's largest city - highest volume</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Mesa Police Department</span>
                  <p className="text-sm text-muted-foreground">East Valley coverage</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Tucson Police Department</span>
                  <p className="text-sm text-muted-foreground">Southern Arizona coverage</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Scottsdale Police Department</span>
                  <p className="text-sm text-muted-foreground">High-value property focus</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Arizona DPS (State Police)</span>
                  <p className="text-sm text-muted-foreground">State-level stolen property records</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">FBI NCIC National Database</span>
                  <p className="text-sm text-muted-foreground">Federal stolen property registry</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Arizona Attorney General Records</span>
                  <p className="text-sm text-muted-foreground">State-level fraud and theft tracking</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Insurance Theft Claims</span>
                  <p className="text-sm text-muted-foreground">NICB and insurance company databases</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Real-Time Updates</span>
                  <p className="text-sm text-muted-foreground">Continuous sync across all sources</p>
                </div>
              </div>
            </div>

            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* Section 2: How to Search Arizona Stolen Property */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-primary" />
              How to Search Arizona Stolen Property
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Verify any property type in 3 seconds using our comprehensive Arizona database search.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="font-bold mb-2">Enter VIN, Serial Number, License Plate, or IMEI</h3>
                  <p className="text-muted-foreground">Type any unique identifier for the property you want to verify. Works for vehicles (VIN/plate), phones (IMEI), electronics (serial), firearms (serial), and any item with a unique identifier.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="font-bold mb-2">Instant Verification Across All Databases (3 Seconds)</h3>
                  <p className="text-muted-foreground">Our system simultaneously queries Phoenix PD, Mesa PD, Tucson PD, all Arizona law enforcement, FBI NCIC, and insurance databases. Results appear in 3 seconds.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="font-bold mb-2">Works for Any Item Type</h3>
                  <p className="text-muted-foreground">Vehicles, firearms, phones, laptops, gaming consoles, bicycles, tools, jewelry, watches - if it has a serial number or unique identifier, we can check it.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="font-bold mb-2">Mobile App or Website</h3>
                  <p className="text-muted-foreground">Use our website from any device or download our mobile app for on-the-go verification at pawn shops, car lots, or private sales anywhere in Arizona.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Verify Property Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Arizona Theft Statistics & Hotspots */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Arizona Theft Statistics & Hotspots
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding Arizona's theft landscape helps you know why verification is essential.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-destructive mb-2">18,742</div>
                <div className="text-muted-foreground">Vehicles Stolen Annually in AZ</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">#8</div>
                <div className="text-muted-foreground">Maricopa County US Ranking</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">$182M</div>
                <div className="text-muted-foreground">Est. Annual Property Theft Value</div>
              </div>
              <div className="p-6 bg-card rounded-lg text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">56%</div>
                <div className="text-muted-foreground">Vehicle Recovery Rate</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border-l-4 border-destructive">
                <h3 className="font-bold mb-2">Phoenix Metro Area Theft Trends</h3>
                <p className="text-muted-foreground">The Phoenix metropolitan area accounts for over 70% of Arizona property theft. High-target areas include downtown Phoenix, Maryvale, South Phoenix, and along the I-17 corridor. Used items from these areas frequently appear on marketplaces.</p>
              </div>
              <div className="p-4 bg-card rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold mb-2">Common Stolen Items in Arizona</h3>
                <p className="text-muted-foreground">Trucks and SUVs (Honda, Toyota, Ford), firearms, construction tools and equipment, phones and laptops, bicycles, and porch package theft. These items frequently appear on Facebook Marketplace, Craigslist, and OfferUp within hours of theft.</p>
              </div>
              <div className="p-4 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-2">Recovery Rates by Category</h3>
                <p className="text-muted-foreground">Vehicles: 56% recovered. Firearms: 12% recovered. Electronics: 8% recovered. Most recoveries happen because the item was verified before purchase and reported. Verification helps recovery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What You Can Verify in Arizona */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What You Can Verify in Arizona</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Arizona stolen property database covers virtually any item with a unique identifier.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {itemTypes.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.link}
                  className="flex gap-3 p-4 bg-background rounded-lg hover:bg-background/80 transition-colors border border-border/50"
                >
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Arizona Legal Requirements */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              Arizona Legal Requirements
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Arizona has specific regulations requiring verification of certain property before purchase or resale.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Pawn Shop Verification Requirements</h3>
                <p className="text-muted-foreground mb-3">Arizona Revised Statutes require pawn shops to record serial numbers and hold items for a waiting period. Using SafeOrStolen helps pawn shops:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Verify items before accepting them as collateral</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Document due diligence for compliance</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Avoid unknowingly handling stolen property</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Protect against liability</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">FFL Firearms Compliance</h3>
                <p className="text-muted-foreground mb-3">Federal Firearms Licensees in Arizona must maintain records and exercise due diligence. Our gun serial number lookup helps FFLs:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Check firearms against FBI NCIC before transactions</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Document verification for ATF compliance</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Avoid accepting stolen firearms</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Second-Hand Dealer Regulations</h3>
                <p className="text-muted-foreground">Arizona second-hand dealers handling used goods should verify items to avoid handling stolen property. While not always legally required, verification provides protection against liability and demonstrates good faith in transactions.</p>
              </div>

              <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-3">Buyer Due Diligence Protection</h3>
                <p className="text-muted-foreground">Arizona courts consider whether buyers exercised reasonable due diligence when purchasing used property. Verifying serial numbers through SafeOrStolen documents your good-faith effort and may provide legal protection if property later proves stolen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Arizona-Specific Features */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              Arizona-Specific Features
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Special features designed for Arizona users and Arizona-registered property.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">AZ License Plate Lookup</h3>
                <p className="text-muted-foreground">Verify Arizona license plates against AZ MVD records and theft databases. Check registration status, ownership verification, and stolen vehicle reports for any Arizona plate.</p>
                <Link to="/arizona-license-plate-lookup" className="text-primary hover:underline text-sm mt-2 inline-block">→ Arizona License Plate Lookup</Link>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Phoenix Area Theft Trends</h3>
                <p className="text-muted-foreground">Stay informed about theft patterns in the Valley. Our system flags high-risk item types and areas, helping you make informed decisions about purchases in the Phoenix metro area.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Valley Safe Meetup Locations</h3>
                <p className="text-muted-foreground">Phoenix PD, Mesa PD, Scottsdale PD, and Tempe PD all offer safe exchange zones. We recommend using these when buying items from strangers in Arizona.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Arizona Title Verification</h3>
                <p className="text-muted-foreground">Check for title washing, salvage brands, and liens on Arizona vehicle titles. Important for out-of-state buyers purchasing vehicles registered in Arizona.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">AZ DMV Integration</h3>
                <p className="text-muted-foreground">Our system accesses Arizona MVD records to verify vehicle registration status, ownership information, and title history for Arizona-registered vehicles.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold mb-3">Mobile App for Arizona</h3>
                <p className="text-muted-foreground">Download our mobile app for on-the-go verification at Phoenix-area car lots, pawn shops, swap meets, and private sales anywhere in Arizona.</p>
                <Link to="/app" className="text-primary hover:underline text-sm mt-2 inline-block">→ Download Mobile App</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Coverage */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Arizona Cities We Cover</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive coverage across all Arizona cities and counties.
            </p>
            <div className="flex flex-wrap gap-3">
              {arizonaCities.map((city, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{city}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">+ All 15 AZ Counties</span>
              </div>
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
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Search Arizona Stolen Property Database Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Verify any property in Arizona in 3 seconds. Comprehensive coverage across all law enforcement databases.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Verify Property Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Arizona Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/stolen-vehicle-database-arizona" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Arizona Vehicle Database</h3>
                <p className="text-sm text-muted-foreground">AZ stolen vehicle verification</p>
              </Link>
              <Link to="/arizona-license-plate-lookup" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">AZ License Plate Lookup</h3>
                <p className="text-sm text-muted-foreground">Check Arizona plates</p>
              </Link>
              <Link to="/for-pawn-shops" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">For Arizona Pawn Shops</h3>
                <p className="text-sm text-muted-foreground">Compliance verification tools</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArizonaStolenPropertyDatabasePage;
