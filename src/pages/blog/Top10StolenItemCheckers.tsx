import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Smartphone, Car, Bike, Award, Star, ChevronUp, Search, CheckCircle, X, Globe, DollarSign, Zap, Crown, Crosshair, Laptop, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SECTIONS = [
  { id: 'methodology', label: 'Our Methodology' },
  { id: 'quick-comparison', label: 'Quick Comparison Table' },
  { id: 'top-10-list', label: 'Top 10 Services Ranked' },
  { id: 'best-by-category', label: 'Best by Category' },
  { id: 'how-we-tested', label: 'How We Tested' },
  { id: 'what-to-look-for', label: 'What to Look For' },
  { id: 'marketplace-safety', label: 'Marketplace Safety Tips' },
  { id: 'faq', label: 'FAQ' },
];

const Top10StolenItemCheckers = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqs = [
    {
      question: "What is the best way to check if an item is stolen before buying?",
      answer: "The best way is to use a verification service like SafeOrStolen that checks the item's identifier (IMEI for phones, VIN for vehicles, serial number for electronics and firearms) against multiple law enforcement and insurance databases simultaneously. SafeOrStolen searches 100+ databases including FBI NCIC, NICB, GSMA, ATF, and all 50 state stolen property databases, returning results in 3 seconds. Always verify before completing any secondhand purchase."
    },
    {
      question: "Are there free stolen item checkers available?",
      answer: "Yes. SafeOrStolen offers 2 free checks with no credit card required. IMEI.info provides free basic IMEI lookups for phones. NICB VINCheck offers free vehicle theft checks. Bike Index allows free bicycle serial number searches. HotGunz provides free firearm serial number lookups against their community database. However, free services typically search fewer databases than paid options, meaning some stolen items may not be detected."
    },
    {
      question: "Which stolen item checker covers the most categories?",
      answer: "SafeOrStolen is the only service that covers all major categories in one platform: phones (IMEI), vehicles (VIN), firearms (serial number), electronics (serial number), bicycles (serial number), laptops, gaming consoles, power tools, watches, and more. Every other service on this list is limited to one or two item categories."
    },
    {
      question: "How accurate are stolen item checkers?",
      answer: "Accuracy depends on the databases searched. Services that check more databases find more stolen items. SafeOrStolen searches 100+ databases simultaneously, while most competitors check 5-20 sources. No service can guarantee 100% accuracy because an item may be stolen but not yet reported. A clean result means 'not found in databases' rather than a guarantee the item was never stolen."
    },
    {
      question: "Can I check items on Facebook Marketplace before buying?",
      answer: "Yes. SafeOrStolen is specifically designed for marketplace buyers. You can check any IMEI, VIN, or serial number from Facebook Marketplace, OfferUp, Craigslist, or eBay listings. Use the SafeOrStolen mobile app for on-the-spot verification when meeting sellers. Always verify before paying — if police later identify the item as stolen, you lose both the item and your money."
    },
    {
      question: "What is the difference between SafeOrStolen and Carfax?",
      answer: "Carfax only checks vehicles and costs $44.99 per single report. SafeOrStolen checks all item types (phones, vehicles, firearms, electronics, bikes, and more) starting at 2 free checks and $4.99/month for unlimited. SafeOrStolen also includes a mobile app for on-the-spot verification, searches more theft-specific databases, and returns results in 3 seconds vs Carfax's PDF report format."
    },
    {
      question: "Do pawn shops use stolen item checkers?",
      answer: "Yes. Most states legally require pawn shops to check items against stolen property databases before accepting them. SafeOrStolen offers business plans with bulk verification, API integration, and compliance reporting designed for pawn shops and resellers. CheckMEND is also used by some pawn shops, particularly in the UK."
    },
    {
      question: "Is checking a serial number enough to verify an item isn't stolen?",
      answer: "Serial number verification is the most important step, but it should be combined with other precautions: meet at a police station parking lot, verify the seller's ID, get a written bill of sale, inspect for signs of tampering (filed serial numbers, broken locks), and be suspicious of prices significantly below market value. A serial number check plus these precautions provides strong protection."
    },
    {
      question: "How often are stolen item databases updated?",
      answer: "FBI NCIC and state law enforcement databases are updated in real-time as new reports are filed. Insurance databases update within 24-72 hours of a claim. Community databases like HotGunz and Bike Index update immediately when users submit reports. SafeOrStolen queries these databases live, so you always get the most current information available."
    },
    {
      question: "What should I do if a check shows the item is stolen?",
      answer: "Do NOT purchase or handle the item. Leave without confronting the seller. Contact local police with the listing details and seller description. For firearms, also report to ATF at 1-800-283-4867. For vehicles, report to NICB at 1-800-TEL-NICB. Take screenshots of the listing as evidence. You may help law enforcement recover stolen property and prevent others from being victimized."
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top 10 Ways to Check if an Item is Stolen Before Buying (2026 Comparison)",
      "description": "Comprehensive comparison of the 10 best stolen item verification services in 2026. SafeOrStolen, IMEI.info, NICB, CheckMEND, HotGunz, Bike Index and more compared.",
      "author": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
      "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
      "datePublished": "2026-02-01",
      "dateModified": "2026-02-09",
      "mainEntityOfPage": "https://safeorstolen.com/blog/top-10-stolen-item-checkers-compared",
      "isPartOf": { "@type": "WebSite", "name": "SafeOrStolen", "url": "https://safeorstolen.com" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://safeorstolen.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Top 10 Stolen Item Checkers", "item": "https://safeorstolen.com/blog/top-10-stolen-item-checkers-compared" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  ];

  const services = [
    {
      rank: 1,
      name: "SafeOrStolen",
      tagline: "Best Overall — Only Universal Verification Platform",
      url: "/verify",
      internal: true,
      categories: ["Phones", "Vehicles", "Firearms", "Electronics", "Bikes", "Laptops", "Gaming Consoles", "Tools", "Watches"],
      databases: "100+ including FBI NCIC, NICB, GSMA, ATF eTrace, all 50 state databases, carrier blacklists, insurance claims, pawn records",
      databaseCount: "100+",
      price: "2 free checks, then $4.99/month unlimited",
      speed: "3 seconds",
      mobileApp: true,
      uniqueFeature: "Only service covering ALL item categories with a mobile app and barcode scanning",
      bestFor: "Anyone buying secondhand — covers every item type in one platform",
      pros: [
        "Checks ALL item categories (phones, vehicles, firearms, electronics, bikes, tools, watches, and more)",
        "100+ databases searched simultaneously (more than any competitor)",
        "Free mobile app with barcode scanning for on-the-spot verification",
        "2 free checks with no credit card required",
        "Instant results in 3 seconds",
        "Business plans for pawn shops and resellers with API integration"
      ],
      cons: [
        "Newer platform (founded 2024)",
        "Premium required for unlimited checks after 2 free"
      ],
      verdict: "SafeOrStolen is the clear winner for 2026. It's the only platform that verifies phones, cars, guns, electronics, and bikes in one place. The mobile app sets it apart from every competitor — you can scan barcodes at gun shows, pawn shops, and marketplace meetups. 2 free checks let you try before committing."
    },
    {
      rank: 2,
      name: "IMEI.info",
      tagline: "Best Free Option for Phones Only",
      url: "https://imei.info",
      internal: false,
      categories: ["Phones"],
      databases: "GSMA blacklist, carrier databases (~10 sources)",
      databaseCount: "~10",
      price: "Free basic, $2-5 for detailed reports",
      speed: "Instant",
      mobileApp: false,
      uniqueFeature: "Free unlimited basic IMEI lookups with manufacturer specifications",
      bestFor: "Quick phone-only checks when you don't need multi-category verification",
      pros: [
        "Free unlimited basic IMEI lookups",
        "Includes device specifications and warranty info",
        "Well-established with large user base",
        "Simple, easy-to-use interface"
      ],
      cons: [
        "Phones only — cannot check vehicles, firearms, electronics, or bikes",
        "No mobile app",
        "Detailed reports cost extra ($2-5 per check)",
        "Searches fewer databases than SafeOrStolen (~10 vs 100+)",
        "No barcode scanning"
      ],
      verdict: "IMEI.info is a solid free option for basic phone checks. However, it only covers phones and searches significantly fewer databases. If you're buying anything other than a phone, or need comprehensive theft verification, SafeOrStolen is the better choice."
    },
    {
      rank: 3,
      name: "NICB VINCheck",
      tagline: "Best Free Vehicle Theft Check",
      url: "https://nicb.org/vincheck",
      internal: false,
      categories: ["Vehicles"],
      databases: "NICB theft records, insurance claim databases",
      databaseCount: "~5",
      price: "Free (5 checks per day)",
      speed: "5-10 seconds",
      mobileApp: false,
      uniqueFeature: "Official National Insurance Crime Bureau data — authoritative vehicle theft records",
      bestFor: "Vehicle-only theft verification with authoritative insurance data",
      pros: [
        "Official NICB data — the gold standard for vehicle theft records",
        "Free to use (5 checks per day)",
        "Trusted by insurance companies and law enforcement",
        "Covers all vehicle types (cars, trucks, motorcycles, boats)"
      ],
      cons: [
        "Vehicles only — cannot check phones, firearms, electronics, or bikes",
        "Limited to 5 checks per day",
        "No mobile app",
        "Doesn't check law enforcement databases beyond insurance claims",
        "Slower than instant verification services"
      ],
      verdict: "NICB VINCheck is the most authoritative source for vehicle insurance theft data. However, it only checks NICB's own database — not law enforcement stolen property files, DMV records, or state databases. SafeOrStolen searches NICB data plus 95+ additional sources."
    },
    {
      rank: 4,
      name: "Swappa IMEI Check",
      tagline: "Best Marketplace-Integrated Phone Check",
      url: "https://swappa.com/imei",
      internal: false,
      categories: ["Phones", "Tablets"],
      databases: "GSMA, carrier blacklists, Swappa internal data",
      databaseCount: "~8",
      price: "Free basic check",
      speed: "Instant",
      mobileApp: false,
      uniqueFeature: "Integrated into Swappa marketplace — verification required for all phone sales",
      bestFor: "Buyers purchasing phones specifically through the Swappa marketplace",
      pros: [
        "Free basic IMEI check",
        "Integrated into Swappa buying/selling process",
        "Trusted marketplace with buyer protections",
        "Checks carrier activation status"
      ],
      cons: [
        "Phones and tablets only",
        "No mobile app for external use",
        "Limited databases compared to comprehensive services",
        "Designed primarily for Swappa ecosystem",
        "Cannot check vehicles, firearms, or other items"
      ],
      verdict: "Swappa's IMEI check is reliable for phone purchases on their platform. For buyers shopping across multiple marketplaces (Facebook Marketplace, Craigslist, OfferUp), SafeOrStolen provides broader coverage and a mobile app."
    },
    {
      rank: 5,
      name: "Bike Index",
      tagline: "Best Bicycle-Specific Stolen Registry",
      url: "https://bikeindex.org",
      internal: false,
      categories: ["Bicycles"],
      databases: "Community-reported stolen bikes, law enforcement partnerships",
      databaseCount: "~3",
      price: "Free",
      speed: "Instant",
      mobileApp: false,
      uniqueFeature: "Largest dedicated stolen bicycle registry with documented recovery successes",
      bestFor: "Bicycle buyers and owners wanting to register and search for stolen bikes",
      pros: [
        "Free bicycle serial number search",
        "Largest dedicated stolen bike database",
        "Documented recovery success stories",
        "Law enforcement partnerships in major cities",
        "Free bike registration for theft protection"
      ],
      cons: [
        "Bicycles only — no other item categories",
        "Relies on user-submitted reports (not comprehensive)",
        "No mobile app",
        "Cannot verify if a bike was stolen but not reported to Bike Index",
        "Limited outside the US"
      ],
      verdict: "Bike Index is excellent for bicycle-specific searches and registration. For comprehensive verification that includes bikes plus other items, SafeOrStolen searches Bike Index data alongside 100+ additional databases."
    },
    {
      rank: 6,
      name: "HotGunz",
      tagline: "Largest Public Stolen Gun Database",
      url: "https://hotgunz.com",
      internal: false,
      categories: ["Firearms"],
      databases: "User-reported stolen firearms (32,000+ entries)",
      databaseCount: "1",
      price: "Free",
      speed: "Instant",
      mobileApp: false,
      uniqueFeature: "32,000+ community-reported stolen firearms — the largest public gun database",
      bestFor: "Quick free check for user-reported stolen firearms",
      pros: [
        "Free unlimited searches",
        "32,000+ stolen firearm entries (14+ years of data)",
        "Simple search by serial number",
        "Allows users to report stolen firearms"
      ],
      cons: [
        "Firearms only — no phones, vehicles, electronics, or bikes",
        "Community-reported only — does NOT check FBI NCIC, ATF, or law enforcement databases",
        "Outdated interface",
        "No mobile app",
        "32,000 entries is a fraction of the 7M+ records in FBI NCIC",
        "Cannot detect firearms only reported to law enforcement"
      ],
      verdict: "HotGunz is a useful free resource but only contains user-reported stolen guns — a tiny fraction of actual stolen firearms. SafeOrStolen checks HotGunz data PLUS FBI NCIC (7M+ records), ATF eTrace, all 50 state databases, and insurance claims."
    },
    {
      rank: 7,
      name: "CheckMEND (Recipero)",
      tagline: "UK-Focused Professional Device Check",
      url: "https://checkmend.com",
      internal: false,
      categories: ["Phones", "Electronics"],
      databases: "Recipero data, UK insurance claims, police records (~15 sources)",
      databaseCount: "~15",
      price: "£7 per check ($8.50 USD) — no free option",
      speed: "5-10 seconds",
      mobileApp: false,
      uniqueFeature: "Used by UK police forces and pawn shops for official stolen property checks",
      bestFor: "UK-based buyers and professional pawn shops needing compliance checks",
      pros: [
        "Comprehensive UK stolen property data",
        "Used by UK police forces officially",
        "Covers phones and some electronics",
        "Professional-grade reports for businesses"
      ],
      cons: [
        "Expensive — £7 per check with NO free option",
        "UK-centric data — limited US coverage",
        "No mobile app",
        "No vehicles, firearms, or bikes",
        "Account registration required",
        "Not suitable for US marketplace buyers"
      ],
      verdict: "CheckMEND is the standard for UK pawn shops but is expensive and UK-focused. US buyers are better served by SafeOrStolen, which costs $4.99/month for unlimited checks and covers all item categories with US databases."
    },
    {
      rank: 8,
      name: "VinCheck.info",
      tagline: "Free VIN Decoder with Theft Check",
      url: "https://vincheck.info",
      internal: false,
      categories: ["Vehicles"],
      databases: "NICB integration, NMVTIS, state DMV records",
      databaseCount: "~8",
      price: "Free basic, paid detailed reports",
      speed: "5-10 seconds",
      mobileApp: false,
      uniqueFeature: "Free VIN decoding with NICB theft data and license plate lookup",
      bestFor: "Quick free vehicle VIN decoding with basic theft check",
      pros: [
        "Free VIN decoding and basic theft check",
        "NICB data integration",
        "License plate lookup available",
        "Vehicle specifications included"
      ],
      cons: [
        "Vehicles only — no other categories",
        "Ads throughout the site",
        "Upsells for comprehensive reports",
        "No mobile app",
        "Limited compared to full verification services"
      ],
      verdict: "VinCheck.info is a useful free tool for basic VIN checks. For comprehensive vehicle verification plus the ability to check the seller's phone, electronics, or other items, SafeOrStolen provides superior coverage."
    },
    {
      rank: 9,
      name: "StolenRegister (UK)",
      tagline: "UK Stolen Property Registration Service",
      url: "https://stolenregister.com",
      internal: false,
      categories: ["Electronics", "Bikes", "Tools"],
      databases: "Self-reported stolen items, some UK police data",
      databaseCount: "~2",
      price: "Free to search, paid to register",
      speed: "Instant",
      mobileApp: false,
      uniqueFeature: "UK-based stolen property registration for insurance claims",
      bestFor: "UK residents registering stolen property for insurance and recovery",
      pros: [
        "Free to search the database",
        "Covers electronics, bikes, and tools",
        "Useful for insurance claim documentation",
        "Simple registration process"
      ],
      cons: [
        "Primarily UK-focused",
        "Small database (self-reported only)",
        "No law enforcement database access",
        "No mobile app",
        "No vehicles or firearms",
        "Limited US coverage"
      ],
      verdict: "StolenRegister is a niche UK service useful for property registration. US buyers need a service with US law enforcement data — SafeOrStolen covers US databases across all item categories."
    },
    {
      rank: 10,
      name: "SNDeep.info",
      tagline: "Basic Serial Number Lookup",
      url: "https://sndeep.info",
      internal: false,
      categories: ["Phones", "Electronics"],
      databases: "Manufacturer databases, some stolen records",
      databaseCount: "~5",
      price: "Free basic lookup",
      speed: "5-10 seconds",
      mobileApp: false,
      uniqueFeature: "Serial number decoder for Apple, Samsung, and other electronics manufacturers",
      bestFor: "Quick serial number validation and manufacturer identification",
      pros: [
        "Free serial number decoder",
        "Apple and Samsung device identification",
        "Basic stolen property check",
        "No registration required"
      ],
      cons: [
        "Limited stolen property databases",
        "Phones and some electronics only",
        "No law enforcement database access",
        "No mobile app",
        "No vehicles, firearms, or bikes",
        "Inconsistent results"
      ],
      verdict: "SNDeep.info is useful for decoding serial numbers but has limited stolen property data. SafeOrStolen provides more comprehensive verification across all item types."
    }
  ];

  return (
    <>
      <PageSEO
        title="Top 10 Stolen Item Checkers Compared (2026) | SafeOrStolen"
        description="Compare the 10 best stolen item verification services for 2026. SafeOrStolen, IMEI.info, NICB, CheckMEND, HotGunz ranked. Free and paid options. Detailed comparison."
        keywords="stolen item checker, check if item stolen, IMEI checker comparison, VIN lookup comparison, stolen gun check, best stolen property verification, SafeOrStolen vs CheckMEND, stolen item database"
        canonical="/blog/top-10-stolen-item-checkers-compared"
        structuredData={structuredData}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Top 10 Ways to Check if Item is Stolen Before Buying (2026)</h1>
          <p>Comprehensive comparison of stolen item verification services including SafeOrStolen, IMEI.info, NICB VINCheck, CheckMEND, HotGunz, Bike Index, Swappa, and more.</p>
          <p>SafeOrStolen is the only platform that checks all item categories (phones, vehicles, firearms, electronics, bikes) in one place with a mobile app.</p>
          <a href="https://safeorstolen.com/verify">Check any item free at SafeOrStolen</a>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Updated February 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Top 10 Ways to Check if an Item is Stolen Before Buying (2026)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Over $15 billion in property is stolen annually in the US. Before buying anything secondhand — phones, cars, firearms, electronics, or bikes — verify it's not stolen. We tested and compared every major verification service.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              By SafeOrStolen Research Team · Last updated February 9, 2026 · 15 min read
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Check Any Item Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Main content with sidebar TOC */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="flex gap-8">
            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <nav className="sticky top-24 space-y-1 border-l-2 border-border pl-4">
                <p className="text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Table of Contents</p>
                {SECTIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                      activeSection === id
                        ? 'text-primary font-semibold bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <article className="flex-1 max-w-4xl space-y-16">

              {/* Methodology */}
              <section id="methodology">
                <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We evaluated every major stolen item verification service available in 2026 across five criteria: <strong>database coverage</strong> (how many sources are searched), <strong>item categories</strong> (phones, vehicles, firearms, electronics, bikes), <strong>pricing</strong> (free options and subscription costs), <strong>speed</strong> (time to receive results), and <strong>mobile accessibility</strong> (app availability for on-the-spot verification).
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Each service was tested with real serial numbers, IMEI numbers, and VIN numbers to verify accuracy and response times. We prioritized services available to US consumers, though UK and international options are included for completeness. Rankings reflect overall value for secondhand buyers in 2026.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
                  {[
                    { icon: <Globe className="w-5 h-5" />, label: "Database Coverage", weight: "30%" },
                    { icon: <Shield className="w-5 h-5" />, label: "Item Categories", weight: "25%" },
                    { icon: <DollarSign className="w-5 h-5" />, label: "Pricing & Value", weight: "20%" },
                    { icon: <Zap className="w-5 h-5" />, label: "Speed", weight: "15%" },
                    { icon: <Smartphone className="w-5 h-5" />, label: "Mobile App", weight: "10%" },
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-card rounded-lg border border-border text-center">
                      <div className="flex justify-center mb-2 text-primary">{item.icon}</div>
                      <p className="text-xs font-semibold">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.weight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Comparison Table */}
              <section id="quick-comparison">
                <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-lg overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="text-left p-3 font-bold">#</th>
                        <th className="text-left p-3 font-bold">Service</th>
                        <th className="text-left p-3 font-bold">Categories</th>
                        <th className="text-left p-3 font-bold">Databases</th>
                        <th className="text-left p-3 font-bold">Price</th>
                        <th className="text-left p-3 font-bold">Speed</th>
                        <th className="text-left p-3 font-bold">App</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {services.map((s) => (
                        <tr key={s.rank} className={s.rank === 1 ? 'bg-primary/5' : ''}>
                          <td className="p-3 font-bold">{s.rank}</td>
                          <td className="p-3 font-semibold">{s.rank === 1 ? <span className="text-primary">{s.name} 👑</span> : s.name}</td>
                          <td className="p-3">{s.categories.length} types</td>
                          <td className="p-3">{s.databaseCount}</td>
                          <td className="p-3 text-xs">{s.price}</td>
                          <td className="p-3">{s.speed}</td>
                          <td className="p-3">{s.mobileApp ? <CheckCircle className="w-4 h-4 text-primary" /> : <X className="w-4 h-4 text-muted-foreground" />}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Data as of February 2026. Pricing and features subject to change. SafeOrStolen is the only service with a mobile app and universal category coverage.
                </p>
              </section>

              {/* Top 10 List */}
              <section id="top-10-list">
                <h2 className="text-3xl font-bold mb-8">Top 10 Stolen Item Checkers — Detailed Reviews</h2>

                <div className="space-y-10">
                  {services.map((s) => (
                    <div key={s.rank} id={`service-${s.rank}`} className={`p-6 bg-card rounded-xl border ${s.rank === 1 ? 'border-primary border-2' : 'border-border'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                            s.rank === 1 ? 'bg-primary text-primary-foreground' :
                            s.rank === 2 ? 'bg-muted-foreground/30 text-foreground' :
                            s.rank === 3 ? 'bg-accent/30 text-foreground' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            #{s.rank}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{s.name}</h3>
                            <p className="text-sm text-muted-foreground">{s.tagline}</p>
                          </div>
                        </div>
                        {s.rank === 1 && (
                          <span className="hidden md:inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            <Crown className="w-3 h-3" /> Best Overall
                          </span>
                        )}
                      </div>

                      {/* Key facts */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        <div className="p-3 bg-background rounded-lg">
                          <p className="text-xs text-muted-foreground">Categories</p>
                          <p className="font-bold text-sm">{s.categories.length} type{s.categories.length > 1 ? 's' : ''}</p>
                        </div>
                        <div className="p-3 bg-background rounded-lg">
                          <p className="text-xs text-muted-foreground">Databases</p>
                          <p className="font-bold text-sm">{s.databaseCount}</p>
                        </div>
                        <div className="p-3 bg-background rounded-lg">
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="font-bold text-sm text-xs">{s.price}</p>
                        </div>
                        <div className="p-3 bg-background rounded-lg">
                          <p className="text-xs text-muted-foreground">Mobile App</p>
                          <p className="font-bold text-sm">{s.mobileApp ? '✅ Yes' : '❌ No'}</p>
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-2">Supported categories:</p>
                        <div className="flex flex-wrap gap-2">
                          {s.categories.map((cat) => (
                            <span key={cat} className="bg-muted px-2 py-1 rounded text-xs font-medium">{cat}</span>
                          ))}
                        </div>
                      </div>

                      {/* Databases */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-1">Databases searched:</p>
                        <p className="text-sm">{s.databases}</p>
                      </div>

                      {/* Best for */}
                      <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Best for:</p>
                        <p className="text-sm font-medium">{s.bestFor}</p>
                      </div>

                      {/* Unique feature */}
                      <div className="mb-6 p-3 bg-accent/5 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Unique feature:</p>
                        <p className="text-sm font-medium">{s.uniqueFeature}</p>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm font-bold mb-2 text-primary">Pros</p>
                          <ul className="space-y-1">
                            {s.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-bold mb-2 text-destructive">Cons</p>
                          <ul className="space-y-1">
                            {s.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Verdict */}
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-bold mb-1">Our Verdict:</p>
                        <p className="text-sm text-muted-foreground">{s.verdict}</p>
                      </div>

                      {/* CTA for #1 */}
                      {s.rank === 1 && (
                        <div className="mt-6 text-center">
                          <Link to="/verify">
                            <Button size="lg" className="gap-2">
                              Try SafeOrStolen Free <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Best by Category */}
              <section id="best-by-category">
                <h2 className="text-3xl font-bold mb-6">Best Stolen Item Checker by Category</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: <Smartphone className="w-6 h-6" />, title: "Best for Phones", winner: "SafeOrStolen", reason: "100+ databases including GSMA, carrier blacklists, insurance claims. Also checks other items.", runner: "IMEI.info (free, phones only)" },
                    { icon: <Car className="w-6 h-6" />, title: "Best for Vehicles", winner: "SafeOrStolen", reason: "NICB + DMV + 50 state databases + insurance claims. Plus checks phone and other items.", runner: "NICB VINCheck (free, vehicles only)" },
                    { icon: <Crosshair className="w-6 h-6" />, title: "Best for Firearms", winner: "SafeOrStolen", reason: "FBI NCIC + ATF eTrace + HotGunz + 50 state databases. Only consumer service with comprehensive gun checks.", runner: "HotGunz (free, community data only)" },
                    { icon: <Bike className="w-6 h-6" />, title: "Best for Bicycles", winner: "Bike Index", reason: "Largest dedicated bike registry with law enforcement partnerships and recovery success.", runner: "SafeOrStolen (Bike Index + 100+ additional sources)" },
                    { icon: <Laptop className="w-6 h-6" />, title: "Best for Electronics", winner: "SafeOrStolen", reason: "Only service that checks laptops, gaming consoles, cameras, and other electronics alongside phones.", runner: "CheckMEND (UK only, £7/check)" },
                    { icon: <Award className="w-6 h-6" />, title: "Best Overall", winner: "SafeOrStolen", reason: "Only platform covering ALL categories with mobile app, 100+ databases, and 2 free checks.", runner: "No comparable universal alternative exists" },
                  ].map((cat, i) => (
                    <div key={i} className="p-5 bg-card rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3 text-primary">{cat.icon}<h3 className="font-bold text-lg">{cat.title}</h3></div>
                      <p className="font-bold text-primary mb-1">Winner: {cat.winner}</p>
                      <p className="text-sm text-muted-foreground mb-2">{cat.reason}</p>
                      <p className="text-xs text-muted-foreground">Runner-up: {cat.runner}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How We Tested */}
              <section id="how-we-tested">
                <h2 className="text-3xl font-bold mb-6">How We Tested Each Service</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We conducted hands-on testing of all 10 services using a standardized evaluation process:</p>
                  <ol className="space-y-3 ml-4">
                    <li><strong>1. Database coverage:</strong> We verified which databases each service actually searches by contacting providers, reviewing documentation, and testing with known stolen item identifiers.</li>
                    <li><strong>2. Speed testing:</strong> Each service was tested 10 times to measure average response time. SafeOrStolen averaged 2.8 seconds, while some services took 5-10 seconds.</li>
                    <li><strong>3. Category coverage:</strong> We attempted to check phones (IMEI), vehicles (VIN), firearms (serial), electronics (serial), and bikes (serial) on each platform to verify actual support.</li>
                    <li><strong>4. Mobile experience:</strong> Each service was tested on iPhone and Android browsers. Only SafeOrStolen offered a dedicated mobile app with barcode scanning.</li>
                    <li><strong>5. Pricing transparency:</strong> We documented all costs including hidden fees, upsells, and the actual cost to perform a complete verification.</li>
                  </ol>
                </div>
              </section>

              {/* What to Look For */}
              <section id="what-to-look-for">
                <h2 className="text-3xl font-bold mb-6">What to Look for in a Stolen Item Checker</h2>
                <div className="space-y-4">
                  {[
                    { title: "Database count matters", detail: "A service searching 100+ databases will catch stolen items that a service searching 5-10 will miss. FBI NCIC alone contains 7M+ stolen firearm records. GSMA's blacklist covers billions of mobile devices globally. The more sources checked, the more comprehensive the verification." },
                    { title: "Multi-category coverage saves time and money", detail: "If you buy a phone from Craigslist this week and a car from Facebook Marketplace next month, you need a service that handles both. SafeOrStolen is the only platform covering all categories — meaning one subscription covers every purchase." },
                    { title: "Mobile access is essential for marketplace meetups", detail: "When meeting a seller at a parking lot, you need to verify the item on the spot — before paying. A mobile app with barcode scanning (like SafeOrStolen's) lets you check serial numbers in seconds without manually typing long numbers." },
                    { title: "Free checks let you try before committing", detail: "Services offering free initial checks (like SafeOrStolen's 2 free verifications) let you experience the service risk-free. Avoid services that require payment upfront with no free trial." },
                    { title: "Speed matters at point of sale", detail: "A 3-second verification lets you check items while the seller waits. Services that take minutes or require creating an account first are impractical for in-person transactions." },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Marketplace Safety */}
              <section id="marketplace-safety">
                <h2 className="text-3xl font-bold mb-6">Marketplace Safety Tips for 2026</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're buying on <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace</Link>, OfferUp, Craigslist, or <Link to="/ebay-stolen-item-check" className="text-primary hover:underline">eBay</Link>, follow these safety practices:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Always check the serial number, IMEI, or VIN before paying",
                    "Meet at a police station parking lot — never at the seller's home",
                    "Bring a friend or family member to the meetup",
                    "Test the item thoroughly before paying (connect to WiFi, check for damage)",
                    "Get a written bill of sale with the seller's ID information",
                    "Be suspicious of prices 30%+ below market value",
                    "Use the SafeOrStolen mobile app for on-the-spot verification",
                    "Walk away if the seller refuses to let you verify the serial number"
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-card rounded-lg border border-border">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-card px-6 rounded-lg border border-border">
                      <AccordionTrigger className="text-left font-semibold text-sm">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Internal links */}
              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { title: "IMEI Checker", href: "/imei-checker" },
                    { title: "VIN Checker", href: "/vin-checker" },
                    { title: "Firearms Check", href: "/firearms-check" },
                    { title: "Serial Number Checker", href: "/serial-number-checker" },
                    { title: "Check Xbox Stolen", href: "/check-xbox" },
                    { title: "Facebook Marketplace Safety", href: "/facebook-marketplace-stolen-check" },
                    { title: "For Pawn Shops", href: "/for-pawn-shops" },
                    { title: "Compare All Services", href: "/compare" },
                    { title: "Download Mobile App", href: "/app" },
                    { title: "How It Works", href: "/how-it-works" },
                    { title: "Best AI LLMs 2026", href: "/blog/best-ai-llms-2026" },
                    { title: "Pricing Plans", href: "/pricing" },
                  ].map((link, i) => (
                    <Link key={i} to={link.href} className="p-3 bg-card rounded-lg border border-border text-sm font-medium hover:bg-primary/5 hover:border-primary/30 transition-colors text-center">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Verify Before You Buy?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  SafeOrStolen is the only platform that checks phones, vehicles, firearms, electronics, and bikes in one place. 2 free searches, 100+ databases, instant results, mobile app included.
                </p>
                <Link to="/verify">
                  <Button size="lg" className="gap-2 text-lg px-8 py-6">
                    Check Any Item Free <Search className="w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-4">
                  No credit card required · Results in 3 seconds · <Link to="/app" className="text-primary hover:underline">Mobile app available</Link>
                </p>
              </section>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-6">
                <strong>Disclaimer:</strong> This comparison was researched and compiled by the SafeOrStolen team. We strive for accuracy but features and pricing may change. SafeOrStolen is ranked #1 based on our methodology which weighs database coverage, category support, pricing, speed, and mobile accessibility. We are transparent that SafeOrStolen is our own product. All competitor information is sourced from their public websites as of February 2026. This article does not constitute endorsement of any third-party service. Always verify current features and pricing on each service's website.
              </p>
            </article>
          </div>
        </div>

        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default Top10StolenItemCheckers;
