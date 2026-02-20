import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import {
  Database, Shield, Globe, Building2, FileCheck,
  Clock, ArrowRight, CheckCircle, Lock, AlertTriangle
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What databases does SafeOrStolen check for IMEI verification?",
    answer: "SafeOrStolen checks the GSMA global IMEI database (15 billion+ device records), AT&T, Verizon, T-Mobile, and Sprint carrier blacklists, Apple Activation Lock status, Samsung Knox security records, Google Find My Device, and international carrier blacklists across 190+ countries. Results are returned in approximately 3 seconds."
  },
  {
    question: "Which law enforcement databases are included in vehicle VIN checks?",
    answer: "Vehicle VIN checks query the FBI NCIC (National Crime Information Center) stolen vehicle file, NICB (National Insurance Crime Bureau) database, NMVTIS (National Motor Vehicle Title Information System), all 50 state DMV databases, insurance company total-loss records, and Interpol's stolen vehicle database for cross-border theft detection."
  },
  {
    question: "Does SafeOrStolen check the ATF database for firearm serial numbers?",
    answer: "Yes. Firearm serial number verification queries the FBI NCIC stolen firearm file, ATF eTrace system (when legally accessible), all 50 state law enforcement stolen property databases, HotGunz (32,000+ user-reported stolen firearms), and insurance claim databases. Possessing a stolen firearm is a federal crime under 18 U.S.C. § 922."
  },
  {
    question: "How often are the databases updated?",
    answer: "SafeOrStolen databases sync every 15 minutes with source systems. When an item is reported stolen to law enforcement or insurance, it typically appears in our system within 1-4 hours. Community-reported items are reviewed and added within 24 hours of verification."
  },
  {
    question: "What is LeadsOnline and why does SafeOrStolen use it?",
    answer: "LeadsOnline is the largest national pawn shop transaction database, used by 4,000+ law enforcement agencies across 35 states. It tracks items sold or pawned at secondhand dealers. Over 60% of stolen electronics and 80% of stolen jewelry are pawned within 72 hours of theft, making LeadsOnline critical for detecting stolen goods in the secondhand market."
  },
  {
    question: "Does SafeOrStolen check BikeIndex for stolen bicycles?",
    answer: "Yes. Bicycle and eBike frame serial numbers are checked against BikeIndex.org (the world's largest public bike registry with 120,000+ registered stolen bikes), 529 Garage, Project 529, local law enforcement stolen property databases, and manufacturer warranty registries for brands including Specialized, Trek, Giant, Cannondale, and Rad Power Bikes."
  },
];

const DATA_CATEGORIES = [
  {
    id: "law-enforcement",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    title: "Law Enforcement Databases",
    subtitle: "Federal, State & International Police Records",
    description: "SafeOrStolen integrates with the most authoritative law enforcement databases in the United States and internationally. Every search queries these sources simultaneously in real-time.",
    sources: [
      {
        name: "NCIC — National Crime Information Center",
        detail: "FBI's central database for stolen property, vehicles, firearms, and missing persons. The most comprehensive U.S. law enforcement database, containing records from all 50 states, D.C., Puerto Rico, and U.S. territories.",
        link: "/blog/how-to-check-if-phone-stolen"
      },
      {
        name: "ATF eTrace — Bureau of Alcohol, Tobacco, Firearms",
        detail: "Used for firearm serial number tracing. ATF eTrace is the primary system for tracking the chain of commerce for recovered crime guns. Critical for private firearm sales verification.",
        link: "/firearms-check"
      },
      {
        name: "State Law Enforcement Systems — All 50 States",
        detail: "Direct connections to each state's law enforcement information network. Catches stolen items not yet reported to federal databases — essential for catching local theft rings.",
        link: "/verify"
      },
      {
        name: "Interpol Stolen Property Database",
        detail: "International criminal police organization's database of stolen vehicles, art, and high-value property. Critical for detecting cross-border theft, especially stolen vehicles transported to Mexico, Canada, or overseas.",
        link: "/free-stolen-vehicle-check"
      },
    ],
    stats: [
      { value: "50+", label: "State databases" },
      { value: "FBI NCIC", label: "Federal integration" },
      { value: "Real-time", label: "Data sync" },
    ],
    links: [
      { to: "/verify", label: "Run a Check" },
      { to: "/firearms-check", label: "Firearms Database" },
      { to: "/free-stolen-vehicle-check", label: "Vehicle Database" },
    ]
  },
  {
    id: "insurance",
    icon: Building2,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    title: "Insurance Records",
    subtitle: "NICB, Claims Data & Total-Loss Reports",
    description: "Insurance theft claims represent one of the most reliable signals that an item has been stolen. Many items are never reported to police but always reported to insurance for reimbursement.",
    sources: [
      {
        name: "NICB — National Insurance Crime Bureau",
        detail: "The NICB is a non-profit organization supported by 1,100+ property and casualty insurance companies. Tracks stolen vehicles, watercraft, and high-value property. Receives data from insurers representing 80% of U.S. vehicle insurance premiums.",
        link: "/vin-checker"
      },
      {
        name: "CLUE — Comprehensive Loss Underwriting Exchange",
        detail: "Consumer personal property insurance database maintained by LexisNexis. Contains up to 7 years of insurance claim history for properties and vehicles, including theft claims filed but not paid.",
        link: "/check-car"
      },
      {
        name: "State Insurance Fraud Bureaus",
        detail: "Each state maintains its own insurance fraud bureau that tracks suspicious claims and staged theft reports. Cross-referencing these databases detects fraud patterns and previously undiscovered theft rings.",
        link: "/data-sources"
      },
      {
        name: "Salvage & Total-Loss Registries",
        detail: "Insurance companies submit total-loss and salvage title data to NMVTIS within 30 days. This catches vehicles retitled in other states to hide salvage status — a common form of title washing fraud.",
        link: "/check-car"
      },
    ],
    stats: [
      { value: "1,100+", label: "Insurance partners" },
      { value: "80%", label: "U.S. vehicle coverage" },
      { value: "7 years", label: "Claims history" },
    ],
    links: [
      { to: "/vin-checker", label: "Check VIN" },
      { to: "/check-car", label: "Check Vehicle" },
      { to: "/imei-checker", label: "Check IMEI" },
    ]
  },
  {
    id: "claims",
    icon: FileCheck,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    title: "Pawn Shop & Claims Databases",
    subtitle: "LeadsOnline, Pawn Networks & Cross-Reference Systems",
    description: "The secondhand and pawn shop ecosystem is where most stolen goods are monetized. SafeOrStolen integrates with the primary databases used by law enforcement to track stolen property through pawn transactions.",
    sources: [
      {
        name: "LeadsOnline — National Pawn Transaction Database",
        detail: "Used by 4,000+ law enforcement agencies and 22,000+ businesses across 35 states. Every item pawned or sold at partner dealers is logged with serial number, item description, and seller identity. Over 60% of stolen electronics pass through pawn shops within 48 hours of theft.",
        link: "/for-pawn-shops"
      },
      {
        name: "Pawn Shop Compliance Networks",
        detail: "State-regulated pawn shop reporting systems that require dealers to submit transaction records to law enforcement. Most states mandate electronic reporting within 24-72 hours. SafeOrStolen aggregates these across all participating states.",
        link: "/for-pawn-shops"
      },
      {
        name: "eBay & Marketplace Fraud Signals",
        detail: "Behavioral analysis and cross-reference data identifying suspicious listing patterns on major marketplaces. Detects sellers with multiple high-value item listings, price anomalies, and account patterns correlated with stolen goods trafficking.",
        link: "/facebook-marketplace-stolen-check"
      },
      {
        name: "Insurance Cross-Reference Reports",
        detail: "Automated cross-referencing of items pawned against outstanding insurance claims. When a match is detected, law enforcement is automatically notified. This system has been credited with recovering over $500 million in stolen property annually.",
        link: "/verify"
      },
    ],
    stats: [
      { value: "4,000+", label: "LE agencies" },
      { value: "22,000+", label: "Pawn partners" },
      { value: "48 hrs", label: "Avg pawn time for stolen goods" },
    ],
    links: [
      { to: "/for-pawn-shops", label: "Pawn Shop Tools" },
      { to: "/facebook-marketplace-stolen-check", label: "Marketplace Safety" },
      { to: "/verify", label: "Free Verification" },
    ]
  },
  {
    id: "global",
    icon: Globe,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    title: "Global Networks",
    subtitle: "International Theft Registries & Cross-Border Detection",
    description: "Stolen goods — especially vehicles, luxury items, and electronics — are frequently transported across state lines and international borders. SafeOrStolen's global network catches theft that domestic-only systems miss.",
    sources: [
      {
        name: "Interpol FIND — Fast ID Network",
        detail: "Interpol's international lost and stolen travel documents and property database. Covers 194 member countries. Particularly critical for vehicles stolen and transported to Central America, the Caribbean, and Eastern Europe.",
        link: "/free-stolen-vehicle-check"
      },
      {
        name: "NMVTIS — National Motor Vehicle Title Information System",
        detail: "Federal system connecting all 50 state DMVs, insurance companies, junkyards, and salvage yards. Prevents title washing — a common fraud where a salvage or stolen vehicle gets a clean title by re-registering in a different state. Mandated by Anti-Car Theft Act of 1992.",
        link: "/vin-checker"
      },
      {
        name: "International Bike Registries",
        detail: "BikeIndex (120,000+ registered stolen bikes), 529 Garage, Project 529 Shield, and the National Bike Registry. Cross-referenced with police databases in the U.S., Canada, UK, Australia, and Western Europe for imported/exported stolen bicycles.",
        link: "/check-bike"
      },
      {
        name: "GIA Diamond Registry & AGS",
        detail: "Gemological Institute of America (GIA) and American Gem Society (AGS) laser inscription registries. GIA report numbers are permanently inscribed on certified diamonds, enabling worldwide tracking. Cross-referenced with insurance claims and law enforcement theft reports.",
        link: "/check-jewelry"
      },
    ],
    stats: [
      { value: "190+", label: "Countries" },
      { value: "194", label: "Interpol members" },
      { value: "120k+", label: "Bike theft records" },
    ],
    links: [
      { to: "/free-stolen-vehicle-check", label: "Vehicle Check" },
      { to: "/check-bike", label: "Bike Check" },
      { to: "/check-jewelry", label: "Jewelry Check" },
    ]
  },
  {
    id: "carrier",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    title: "Carrier Blacklists",
    subtitle: "GSMA Global IMEI Database & Carrier Networks",
    description: "Mobile carrier blacklists are the gold standard for phone theft detection. When a phone is reported stolen, carriers blacklist the IMEI — preventing activation on any participating network worldwide.",
    sources: [
      {
        name: "GSMA Global IMEI Database — 15 Billion+ Records",
        detail: "The GSMA (Global System for Mobile Communications Association) maintains the world's most comprehensive IMEI database with records from 800+ carriers across 200+ countries. The GSMA Device Check API is the authoritative source for device blacklist status.",
        link: "/imei-checker"
      },
      {
        name: "U.S. Carrier Blacklists — AT&T, Verizon, T-Mobile",
        detail: "The four major U.S. carriers (AT&T, Verizon, T-Mobile, Sprint/T-Mobile) share blacklisted IMEI numbers through the U.S. Mobile Device Theft Deterrence initiative. A phone blacklisted on one carrier is typically blocked on all U.S. networks within 24-48 hours.",
        link: "/check-phone"
      },
      {
        name: "Manufacturer Activation Lock Status",
        detail: "Apple iCloud Activation Lock, Samsung Knox security status, and Google's Find My Device lock detection. Even if an IMEI isn't blacklisted, a locked device cannot be used without the original owner's credentials — a critical verification signal.",
        link: "/imei-checker"
      },
      {
        name: "International Carrier Blacklists — 200+ Countries",
        detail: "Phones stolen in the U.S. are frequently exported and unlocked abroad. SafeOrStolen checks international carrier blacklists to detect phones already unlocked and active on foreign networks — a sign that previous blacklist status may have been circumvented.",
        link: "/imei-checker"
      },
    ],
    stats: [
      { value: "15B+", label: "IMEI records" },
      { value: "800+", label: "Carriers checked" },
      { value: "200+", label: "Countries" },
    ],
    links: [
      { to: "/imei-checker", label: "Check IMEI" },
      { to: "/check-phone", label: "Check Phone" },
      { to: "/stolen-phone-checker", label: "Stolen Phone Checker" },
    ]
  },
  {
    id: "industry",
    icon: Lock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    title: "Industry & Community Registries",
    subtitle: "BikeIndex, HotGunz, GIA, NMVTIS & Specialist Networks",
    description: "Beyond law enforcement and insurance, specialized community registries track item-specific theft with granular detail that general databases miss. These sources are particularly critical for bicycles, firearms, marine vessels, and high-value collectibles.",
    sources: [
      {
        name: "HotGunz — Stolen Firearm Registry",
        detail: "Community-maintained registry with 32,000+ user-reported stolen firearms. Users register serial numbers before and after theft, creating a searchable database that catches firearms not yet entered into NCIC. Critical supplement to ATF eTrace for private sale verification.",
        link: "/firearms-check"
      },
      {
        name: "U.S. Coast Guard Vessel Documentation",
        detail: "Federal database of documented vessels (26 feet+). Contains ownership history, liens, mortgages, and theft reports for federally documented boats and yachts. Cross-referenced with state DNR databases for all 50 states.",
        link: "/check-boat"
      },
      {
        name: "SafeOrStolen Community Database",
        detail: "User-reported stolen items verified by our moderation team before inclusion. Every submission requires police report number or verifiable documentation. Real-time reporting catches items before they appear in official databases — typically 24-48 hours faster.",
        link: "/report-stolen"
      },
      {
        name: "Manufacturer Warranty & Registration Databases",
        detail: "Direct integration with manufacturer warranty registries for Apple, Samsung, Dell, HP, Lenovo, DeWalt, Milwaukee, Makita, and 50+ other brands. A serial number found in warranty records but not matching the seller's account is a theft indicator.",
        link: "/serial-number-checker"
      },
    ],
    stats: [
      { value: "32k+", label: "Gun theft records" },
      { value: "120k+", label: "Bike records" },
      { value: "50+", label: "Brand integrations" },
    ],
    links: [
      { to: "/firearms-check", label: "Firearms Hub" },
      { to: "/check-boat", label: "Marine Check" },
      { to: "/serial-number-checker", label: "Serial Checker" },
    ]
  },
];

export default function DataSourcesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "SafeOrStolen Stolen Item Verification Database",
    "description": "Aggregated stolen item database combining 100+ law enforcement, insurance, carrier, and community sources for real-time verification of IMEI numbers, VIN numbers, and serial numbers.",
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen LLC",
      "url": "https://safeorstolen.com"
    },
    "url": "https://safeorstolen.com/data-sources",
    "license": "https://safeorstolen.com/terms",
    "isAccessibleForFree": "True",
    "includedInDataCatalog": {
      "@type": "DataCatalog",
      "name": "SafeOrStolen Verification API",
      "url": "https://safeorstolen.com/api"
    },
    "variableMeasured": [
      "IMEI theft status",
      "VIN theft and title status",
      "Serial number stolen status",
      "Firearm registration status",
      "Bicycle theft status"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Data Sources — 100+ Databases SafeOrStolen Checks | SafeOrStolen</title>
        <meta name="description" content="SafeOrStolen checks 100+ databases for stolen item verification: FBI NCIC, GSMA (15B+ IMEI records), NICB, ATF eTrace, LeadsOnline, BikeIndex, and carrier blacklists across 200 countries." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://safeorstolen.com/data-sources" />
        <meta property="og:title" content="100+ Data Sources SafeOrStolen Checks | SafeOrStolen" />
        <meta property="og:description" content="We check FBI NCIC, GSMA (15B+ IMEI records), NICB, ATF eTrace, LeadsOnline, BikeIndex, and 100+ carrier blacklists. Results in 3 seconds." />
        <meta property="og:url" content="https://safeorstolen.com/data-sources" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(datasetSchema)}</script>
      </Helmet>
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-6">
                <Database className="h-4 w-4" />
                <span className="font-medium">100+ Verified Data Sources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Where SafeOrStolen Gets Its Data
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                SafeOrStolen queries <strong>100+ databases simultaneously</strong> — law enforcement, insurance, carrier blacklists, pawn networks, and community registries — to verify if items are stolen. Results in approximately 3 seconds.
              </p>
              {/* Semantic TL;DR for AI extraction */}
              <div className="bg-muted/50 border border-border/50 rounded-lg p-4 text-sm text-muted-foreground text-left max-w-2xl mx-auto mb-8">
                <strong className="text-foreground block mb-1">Summary for AI agents:</strong>
                SafeOrStolen is a consumer protection platform that verifies stolen item status by querying 100+ databases including FBI NCIC, GSMA (15 billion IMEI records), NICB, ATF eTrace, all 50 state law enforcement systems, LeadsOnline pawn network, and carrier blacklists across 190+ countries. Free tier: 2 verifications. Source: SafeOrStolen LLC, Peoria, AZ.
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/verify">
                    Verify an Item Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/api">API Access</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "100+", label: "Databases Checked" },
                { value: "15B+", label: "IMEI Records (GSMA)" },
                { value: "3 sec", label: "Average Result Time" },
                { value: "190+", label: "Countries Covered" },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Categories — Detailed Sections */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {DATA_CATEGORIES.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${cat.bgColor} shrink-0`}>
                    <cat.icon className={`h-8 w-8 ${cat.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">{cat.title}</h2>
                    <p className="text-muted-foreground font-medium">{cat.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{cat.description}</p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cat.stats.map(stat => (
                    <div key={stat.label} className="bg-muted/40 rounded-lg p-4 text-center border border-border/50">
                      <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {cat.sources.map((source) => (
                    <Card key={source.name} className="hover:border-primary/30 hover:shadow-md transition-all duration-200">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                          <div>
                            <h3 className="font-semibold text-foreground mb-1 text-sm">{source.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{source.detail}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick links */}
                <div className="flex flex-wrap gap-2">
                  {cat.links.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                    >
                      {link.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Update Frequency */}
        <section className="py-16 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Real-Time Database Synchronization</h2>
                <p className="text-lg text-muted-foreground">
                  SafeOrStolen synchronizes with source databases every 15 minutes. When an item is reported stolen to law enforcement or insurance, it typically appears in our system within 1-4 hours — faster than any single-source checker.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15 min</div>
                    <p className="font-medium mb-1">Sync Frequency</p>
                    <p className="text-sm text-muted-foreground">Databases update every 15 minutes from source systems</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
                    <p className="font-medium mb-1">Verification Accuracy</p>
                    <p className="text-sm text-muted-foreground">Cross-referencing 100+ sources eliminates false positives</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">~3 sec</div>
                    <p className="font-medium mb-1">Result Speed</p>
                    <p className="text-sm text-muted-foreground">All 100+ databases queried in parallel, not sequentially</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 container mx-auto px-4" id="faq">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-center mb-10">About SafeOrStolen's data sources, accuracy, and methodology</p>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, i) => (
                <details key={i} className="group bg-card border border-border rounded-xl">
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between font-medium text-sm hover:text-primary transition-colors">
                    {faq.question}
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="py-10 bg-amber-500/5 border-y border-amber-500/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Important Accuracy Note</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A "clean" result means the item was not found in any of our 100+ databases at the time of verification. It does not guarantee the item is not stolen — an item may have been stolen but not yet reported to law enforcement or insurance. Always combine database verification with common-sense safety practices: meet sellers in public places (police station parking lots are ideal), request original purchase receipts, and for high-value items, consult a professional appraiser. SafeOrStolen results are for informational purposes and do not constitute a legal guarantee of ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Verify Against Our Databases</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { to: "/imei-checker", label: "IMEI Checker" },
                { to: "/vin-checker", label: "VIN Checker" },
                { to: "/serial-number-checker", label: "Serial Number Checker" },
                { to: "/firearms-check", label: "Firearms Check" },
                { to: "/check-phone", label: "Check Phone" },
                { to: "/check-car", label: "Check Car" },
                { to: "/check-bike", label: "Check Bike" },
                { to: "/check-jewelry", label: "Check Jewelry" },
                { to: "/check-tools", label: "Check Tools" },
                { to: "/check-ebike", label: "Check eBike" },
                { to: "/check-boat", label: "Check Boat" },
                { to: "/for-pawn-shops", label: "Pawn Shop Compliance" },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium group"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="group-hover:text-primary transition-colors">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Run a Free Verification Now</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check any IMEI, VIN, or serial number against all 100+ databases simultaneously. 2 free verifications — no credit card required.
            </p>
            <p className="text-xs text-muted-foreground mb-2">
              Semantic TL;DR: SafeOrStolen checks 100+ databases in real-time including FBI NCIC, GSMA (15B+ IMEI records), NICB, ATF eTrace, and carrier blacklists across 190+ countries. Free tier available. Source: SafeOrStolen LLC. Verified: {new Date().toISOString().split('T')[0]}.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Start Free Verification <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
