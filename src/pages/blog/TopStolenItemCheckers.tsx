import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, Smartphone, ArrowRight, ExternalLink, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sectionIds = [
  'comparison-table',
  'safeorstolen',
  'imei-info',
  'carfax',
  'checkmend',
  'swappa',
  'nicb-vincheck',
  'hotgunz',
  'local-police',
  'bikeindex',
  'ebay-verification',
  'how-to-choose',
  'faq',
];

const sectionLabels: Record<string, string> = {
  'comparison-table': 'Quick Comparison',
  'safeorstolen': '1. SafeOrStolen',
  'imei-info': '2. IMEI.info',
  'carfax': '3. Carfax',
  'checkmend': '4. CheckMEND',
  'swappa': '5. Swappa',
  'nicb-vincheck': '6. NICB VINCheck',
  'hotgunz': '7. HotGunz',
  'local-police': '8. Local Police',
  'bikeindex': '9. BikeIndex',
  'ebay-verification': '10. eBay Verification',
  'how-to-choose': 'How to Choose',
  'faq': 'FAQ',
};

const TopStolenItemCheckers = () => {
  const [activeSection, setActiveSection] = useState('comparison-table');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const topEntry = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topEntry.target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const faqs = [
    {
      question: "What is the most comprehensive stolen item checker?",
      answer: "SafeOrStolen is the most comprehensive option, checking 100+ databases across all item categories — phones, vehicles, firearms, electronics, bikes, and more. Competitors typically specialize in a single category. For example, IMEI.info only checks phones, Carfax only checks vehicles, and HotGunz only checks firearms. SafeOrStolen is the only service that covers all categories in one platform with a mobile app."
    },
    {
      question: "Are free stolen item checkers reliable?",
      answer: "Free services like IMEI.info, NICB VINCheck, and HotGunz are reliable within their limitations. IMEI.info checks carrier blacklists for phones but doesn't access police databases. NICB VINCheck only checks insurance theft claims for vehicles. HotGunz relies on community-reported stolen guns (approximately 32,000 entries) versus the 7+ million records in FBI NCIC. Free tools are a good starting point, but paid services like SafeOrStolen search significantly more databases for higher accuracy."
    },
    {
      question: "How much does Carfax cost compared to SafeOrStolen?",
      answer: "Carfax charges $44.99 per single vehicle report or $99.99 for 6 reports. SafeOrStolen costs just $1/month for unlimited checks across ALL item types (not just vehicles). If you only need vehicle theft verification (not full vehicle history), SafeOrStolen provides comparable theft data at approximately 98% less cost."
    },
    {
      question: "How much does SafeOrStolen cost for firearm checks?",
      answer: "SafeOrStolen offers unlimited firearm serial number checks for $1/month — including FBI NCIC, ATF eTrace, all 50 state databases, HotGunz, and insurance records. HotGunz is also free but only searches its community-reported database of approximately 32,000 stolen guns — a fraction of the 7+ million records in NCIC."
    },
    {
      question: "Which service has a mobile app for checking stolen items?",
      answer: "SafeOrStolen is the only stolen item verification service with a dedicated mobile app. It's available as a Progressive Web App (PWA) that works on iPhone, Android, and any mobile browser. The app includes barcode scanning for instant serial number entry at gun shows, pawn shops, marketplace meetups, and yard sales. No other competitor offers a mobile app."
    },
    {
      question: "How do I check if a phone is stolen using IMEI?",
      answer: "Dial *#06# on the phone to get the IMEI number, then enter it into a verification service. IMEI.info offers free unlimited checks against carrier blacklists. SafeOrStolen's $1/month plan searches GSMA global blacklist, police databases, insurance claims, and all major carrier records (AT&T, Verizon, T-Mobile). Both services return results instantly."
    },
    {
      question: "Is it illegal to buy stolen items?",
      answer: "Yes. Receiving stolen property is a crime in all 50 US states. Penalties vary by state and item value but can include felony charges, imprisonment, and fines. Even if you didn't know the item was stolen, you can still face legal consequences — especially if the price was suspiciously low or circumstances were questionable. Checking serial numbers before purchase demonstrates due diligence and provides legal protection."
    },
    {
      question: "What databases does NCIC check?",
      answer: "FBI NCIC (National Crime Information Center) is the largest stolen property database in the United States with over 7 million stolen firearm records and millions of other stolen property records. It includes stolen vehicles, firearms, boats, securities, and other property reported by law enforcement agencies nationwide. NCIC is restricted to law enforcement — civilians cannot access it directly. SafeOrStolen provides indirect access through data partnerships."
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top 10 Ways to Check if an Item is Stolen Before Buying (2026)",
      "description": "Comprehensive comparison of stolen item verification services for phones, vehicles, firearms, and electronics. Compare SafeOrStolen, IMEI.info, Carfax, CheckMEND, and more.",
      "author": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
      "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com", "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" } },
      "datePublished": "2026-02-06",
      "dateModified": "2026-02-10",
      "mainEntityOfPage": "https://safeorstolen.com/blog/top-10-stolen-item-checkers",
      "url": "https://safeorstolen.com/blog/top-10-stolen-item-checkers"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://safeorstolen.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Top 10 Stolen Item Checkers", "item": "https://safeorstolen.com/blog/top-10-stolen-item-checkers" }
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

  const Yes = () => <CheckCircle className="w-4 h-4 text-primary inline" />;
  const No = () => <XCircle className="w-4 h-4 text-destructive inline" />;

  return (
    <>
      <PageSEO
        title="Top 10 Stolen Item Checkers 2026 - Compare Free Tools"
        description="Compare the 10 best ways to check if items are stolen before buying. Free tools for phones (IMEI), vehicles (VIN), firearms, electronics. Side-by-side comparison."
        keywords="stolen item checker, check if item stolen, IMEI checker, VIN checker, stolen gun check, stolen property database, SafeOrStolen vs Carfax, best stolen item verification"
        canonical="/blog/top-10-stolen-item-checkers"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Link to="/blog" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Blog</Link>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ml-4">
              <Shield className="w-4 h-4" />
              2026 Comparison Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Top 10 Ways to Check if an Item is Stolen Before Buying (2026)
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              Comprehensive comparison of stolen item verification services for phones, vehicles, firearms, and electronics. We tested every major service and ranked them by database coverage, cost, speed, and ease of use.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: February 10, 2026 · 12 min read
            </p>
          </div>
        </section>

        <SitewideCredibilityBar />

        {/* Main Content with Sidebar TOC */}
        <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
          {/* Sticky Sidebar TOC - desktop only */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <nav className="sticky top-24 space-y-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Contents</p>
              {sectionIds.map(id => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-xs py-1.5 px-2 rounded transition-colors ${
                    activeSection === id
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {sectionLabels[id]}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-12">
            {/* Comparison Table */}
            <section id="comparison-table">
              <h2 className="text-2xl font-bold mb-6">Quick Comparison Table</h2>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-3 font-bold">Service</th>
                      <th className="text-left p-3 font-bold">Categories</th>
                      <th className="text-left p-3 font-bold">Databases</th>
                      <th className="text-left p-3 font-bold">Cost</th>
                      <th className="text-center p-3 font-bold">App</th>
                      <th className="text-left p-3 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-primary/5">
                      <td className="p-3 font-bold text-primary flex items-center gap-1"><Crown className="w-3 h-3" /> SafeOrStolen</td>
                      <td className="p-3">All (phones, cars, guns, electronics, bikes)</td>
                      <td className="p-3">100+</td>
                      <td className="p-3">$1/mo unlimited</td>
                      <td className="p-3 text-center"><Yes /></td>
                      <td className="p-3">Everything</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">IMEI.info</td>
                      <td className="p-3">Phones only</td>
                      <td className="p-3">~10</td>
                      <td className="p-3">Free unlimited</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">Phone-only checks</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Carfax</td>
                      <td className="p-3">Vehicles only</td>
                      <td className="p-3">1 (vehicle history)</td>
                      <td className="p-3">$44.99/report</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">Full vehicle history</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">CheckMEND</td>
                      <td className="p-3">Phones, electronics</td>
                      <td className="p-3">UK-focused</td>
                      <td className="p-3">£7/check</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">UK buyers</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Swappa</td>
                      <td className="p-3">Phones only</td>
                      <td className="p-3">Carrier blacklists</td>
                      <td className="p-3">Free (10/day)</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">Swappa marketplace</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">NICB VINCheck</td>
                      <td className="p-3">Vehicles only</td>
                      <td className="p-3">Insurance claims</td>
                      <td className="p-3">Free (5/day)</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">Quick VIN check</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">HotGunz</td>
                      <td className="p-3">Firearms only</td>
                      <td className="p-3">Community (32K)</td>
                      <td className="p-3">Free unlimited</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">Gun serial lookup</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Local Police</td>
                      <td className="p-3">Any item</td>
                      <td className="p-3">NCIC (official)</td>
                      <td className="p-3">Free</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">High-value items</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">BikeIndex</td>
                      <td className="p-3">Bicycles only</td>
                      <td className="p-3">Community + police</td>
                      <td className="p-3">Free</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">Bike theft</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">eBay Verification</td>
                      <td className="p-3">eBay listings</td>
                      <td className="p-3">eBay internal</td>
                      <td className="p-3">Built-in</td>
                      <td className="p-3 text-center"><No /></td>
                      <td className="p-3">eBay purchases</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. SafeOrStolen */}
            <section id="safeorstolen">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Crown className="w-5 h-5 text-primary" /> 1. SafeOrStolen — Best Overall Multi-Category Checker</h2>
              <p className="text-sm text-primary font-medium mb-4">safeorstolen.com · $1/mo unlimited · All item types</p>
              <p className="text-muted-foreground mb-4">
                SafeOrStolen is the only verification service that checks <strong>all item categories</strong> — phones, vehicles, firearms, electronics, bicycles, gaming consoles, power tools, jewelry — against 100+ databases in a single platform. It is also the only service with a <Link to="/app" className="text-primary hover:underline">dedicated mobile app</Link> featuring barcode scanning for on-the-spot verification.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold text-sm mb-2">Databases Searched (100+)</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• FBI NCIC (7M+ stolen firearm records)</li>
                    <li>• NICB (National Insurance Crime Bureau)</li>
                    <li>• GSMA Device Registry (global phone blacklist)</li>
                    <li>• ATF eTrace (traced crime firearms)</li>
                    <li>• All 50 state stolen property databases</li>
                    <li>• Carrier blacklists (AT&T, Verizon, T-Mobile)</li>
                    <li>• Insurance company theft claims</li>
                    <li>• HotGunz (32K+ community-reported guns)</li>
                    <li>• BikeIndex (bicycle theft registry)</li>
                    <li>• Local law enforcement reports</li>
                  </ul>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold text-sm mb-2">Key Advantages</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li><Yes /> Only service with mobile app + barcode scanning</li>
                    <li><Yes /> All item categories in one platform</li>
                    <li><Yes /> 100+ databases (competitors: 10-20)</li>
                    <li><Yes /> $1/mo unlimited — cheapest in industry</li>
                    <li><Yes /> 3-second instant results</li>
                    <li><Yes /> Downloadable verification certificates</li>
                    <li><Yes /> Business API for pawn shops and dealers</li>
                    <li><Yes /> Used by law enforcement and resellers</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                <strong>Best for:</strong> Anyone buying used items from <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace</Link>, OfferUp, Craigslist, eBay, pawn shops, gun shows, or private sellers. The mobile app makes it ideal for in-person meetups where you need to verify on the spot.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Pricing:</strong> $1/month for unlimited verifications across all item types. Cancel anytime. Business API also available.
              </p>
              <div className="mt-4">
                <Link to="/verify">
                  <Button className="gap-2">Check Item Now — $1/mo <ArrowRight className="w-4 h-4" /></Button>
                </Link>
              </div>
            </section>

            {/* 2. IMEI.info */}
            <section id="imei-info">
              <h2 className="text-2xl font-bold mb-2">2. IMEI.info — Best Free Phone-Only Checker</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">imei.info · Free unlimited · Phones only</p>
              <p className="text-muted-foreground mb-4">
                IMEI.info is a popular free service for checking phone IMEI numbers against carrier blacklists. It provides basic device information including model, storage, color, and blacklist status. It's fast, free, and unlimited — making it a solid choice for phone-only verification.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free and unlimited</li>
                    <li><Yes /> Device specs included</li>
                    <li><Yes /> Fast results</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> Phones only (no cars, guns, etc.)</li>
                    <li><No /> ~10 databases (vs 100+)</li>
                    <li><No /> No mobile app</li>
                    <li><No /> No police database access</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Quick phone blacklist checks when you only need carrier status. For comprehensive stolen property verification including police databases, <Link to="/imei-checker" className="text-primary hover:underline">SafeOrStolen's IMEI checker</Link> searches more sources.
              </p>
            </section>

            {/* 3. Carfax */}
            <section id="carfax">
              <h2 className="text-2xl font-bold mb-2">3. Carfax — Best Detailed Vehicle History</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">carfax.com · $44.99/report · Vehicles only</p>
              <p className="text-muted-foreground mb-4">
                Carfax is the industry standard for detailed vehicle history reports including accident history, ownership chain, mileage verification, service records, and theft status. It's the most comprehensive option for vehicles — but it's expensive and vehicles-only.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Most detailed vehicle history</li>
                    <li><Yes /> Accident and service records</li>
                    <li><Yes /> Industry-trusted brand</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> $44.99 per report (expensive)</li>
                    <li><No /> Vehicles only</li>
                    <li><No /> No mobile app for quick checks</li>
                    <li><No /> No phones, firearms, electronics</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Buyers who need full vehicle history (accidents, service, ownership). If you only need theft verification, <Link to="/vin-checker" className="text-primary hover:underline">SafeOrStolen's VIN checker</Link> provides comparable theft data at approximately 98% less cost ($1/mo vs $44.99/report).
              </p>
            </section>

            {/* 4. CheckMEND */}
            <section id="checkmend">
              <h2 className="text-2xl font-bold mb-2">4. CheckMEND (Recipero) — Best for UK Buyers</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">checkmend.com · £7/check · Phones and electronics</p>
              <p className="text-muted-foreground mb-4">
                CheckMEND, powered by Recipero, specializes in device verification primarily for the UK market. It checks phones and electronics against UK police databases, insurance records, and carrier blacklists. It's the standard verification tool for UK pawn shops and secondhand retailers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Strong UK police data</li>
                    <li><Yes /> UK pawn shop standard</li>
                    <li><Yes /> Insurance company partnerships</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> £7 per check (expensive)</li>
                    <li><No /> UK-focused data (limited US coverage)</li>
                    <li><No /> No firearms or vehicles</li>
                    <li><No /> No mobile app</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> UK-based buyers and pawn shops. For US buyers, <Link to="/verify" className="text-primary hover:underline">SafeOrStolen</Link> provides better coverage of American databases at lower cost.
              </p>
            </section>

            {/* 5. Swappa */}
            <section id="swappa">
              <h2 className="text-2xl font-bold mb-2">5. Swappa — Best Phone Marketplace with Built-In Checks</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">swappa.com · Free (10/day limit) · Phones only</p>
              <p className="text-muted-foreground mb-4">
                Swappa is a phone resale marketplace that includes built-in IMEI verification. When buying through Swappa, devices are automatically checked against carrier blacklists before listing. Their standalone ESN/IMEI checker is available for free with a 10-check daily limit.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free with marketplace</li>
                    <li><Yes /> Built into purchase flow</li>
                    <li><Yes /> Buyer protection program</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> 10 checks/day limit</li>
                    <li><No /> Phones only</li>
                    <li><No /> Carrier blacklists only</li>
                    <li><No /> No police database access</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Buyers already shopping on Swappa. For items from other marketplaces (Facebook, OfferUp, Craigslist), use <Link to="/check-phone" className="text-primary hover:underline">SafeOrStolen's phone check</Link> for more comprehensive results.
              </p>
            </section>

            {/* 6. NICB VINCheck */}
            <section id="nicb-vincheck">
              <h2 className="text-2xl font-bold mb-2">6. NICB VINCheck — Best Free Vehicle Theft Check</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">nicb.org · Free (5/day) · Vehicles only</p>
              <p className="text-muted-foreground mb-4">
                NICB (National Insurance Crime Bureau) offers a free VINCheck service that searches insurance theft and salvage/junk records. It's backed by the insurance industry and provides reliable data on whether a vehicle has been reported stolen through insurance claims. Limited to 5 searches per day.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free</li>
                    <li><Yes /> Insurance industry backed</li>
                    <li><Yes /> Reliable theft data</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> 5 searches per day</li>
                    <li><No /> Vehicles only</li>
                    <li><No /> Only insurance claims (not police)</li>
                    <li><No /> No app</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Quick free vehicle theft checks. For comprehensive coverage including DMV records and police databases, use <Link to="/vin-checker" className="text-primary hover:underline">SafeOrStolen's VIN checker</Link>.
              </p>
            </section>

            {/* 7. HotGunz */}
            <section id="hotgunz">
              <h2 className="text-2xl font-bold mb-2">7. HotGunz — Best Free Firearm Serial Lookup</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">hotgunz.com · Free unlimited · Firearms only</p>
              <p className="text-muted-foreground mb-4">
                HotGunz is a community-driven stolen firearm database where gun owners can report and search for stolen weapons. It contains approximately 32,000 user-reported stolen guns. Free and unlimited, but relies entirely on voluntary community reporting — it does not access official law enforcement databases like NCIC.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free and unlimited</li>
                    <li><Yes /> Simple interface</li>
                    <li><Yes /> Community-driven</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> Only 32K entries (vs NCIC's 7M+)</li>
                    <li><No /> Community reports only (no police data)</li>
                    <li><No /> Firearms only</li>
                    <li><No /> No app</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Quick free gun serial checks as a first step. For comprehensive verification including NCIC, ATF, and state databases, use <Link to="/firearms-check" className="text-primary hover:underline">SafeOrStolen's gun serial number lookup</Link> (2 free checks).
              </p>
            </section>

            {/* 8. Local Police */}
            <section id="local-police">
              <h2 className="text-2xl font-bold mb-2">8. Local Police Department — Most Authoritative</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Your local PD · Free · Any item type</p>
              <p className="text-muted-foreground mb-4">
                Your local police department can check any serial number against the FBI's NCIC database — the most authoritative stolen property database in the country. This is free and works for any item type. The downside: it requires an in-person visit, and results can take 3-7 business days.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Official NCIC access</li>
                    <li><Yes /> Free</li>
                    <li><Yes /> Any item type</li>
                    <li><Yes /> Most authoritative source</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> In-person visit required</li>
                    <li><No /> 3-7 day wait time</li>
                    <li><No /> Not practical for marketplace meetups</li>
                    <li><No /> No app</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> High-value purchases where you can wait days for results. For instant verification at gun shows, marketplace meetups, and pawn shops, use <Link to="/verify" className="text-primary hover:underline">SafeOrStolen</Link> for 3-second results.
              </p>
            </section>

            {/* 9. BikeIndex */}
            <section id="bikeindex">
              <h2 className="text-2xl font-bold mb-2">9. BikeIndex — Best for Bicycle Theft</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">bikeindex.org · Free · Bicycles only</p>
              <p className="text-muted-foreground mb-4">
                BikeIndex is a nonprofit bicycle registration and stolen bike database with over 1.3 million registered bikes. It partners with police departments in many US cities and has recovered over 13,000 stolen bicycles. Free to register and search.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free nonprofit</li>
                    <li><Yes /> Police partnerships</li>
                    <li><Yes /> 13K+ bikes recovered</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> Bicycles only</li>
                    <li><No /> Voluntary registration</li>
                    <li><No /> No app</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Bicycle buyers. SafeOrStolen also includes BikeIndex data in our <Link to="/check-bike" className="text-primary hover:underline">bicycle verification</Link> along with additional police and insurance databases.
              </p>
            </section>

            {/* 10. eBay Verification */}
            <section id="ebay-verification">
              <h2 className="text-2xl font-bold mb-2">10. eBay's Built-In Verification — Best for eBay Shoppers</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">ebay.com · Built into platform · eBay listings only</p>
              <p className="text-muted-foreground mb-4">
                eBay has internal fraud detection and buyer protection that can identify some stolen goods. Their Money Back Guarantee covers most purchases. However, eBay's systems don't check external stolen property databases — they primarily rely on seller reputation and internal fraud patterns.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Built into purchases</li>
                    <li><Yes /> Buyer protection</li>
                    <li><Yes /> Seller reputation system</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> eBay only</li>
                    <li><No /> No external stolen databases</li>
                    <li><No /> Reactive (after purchase)</li>
                    <li><No /> No serial number verification</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Passive protection on eBay purchases. For proactive verification before buying, use <Link to="/ebay-stolen-item-check" className="text-primary hover:underline">SafeOrStolen's eBay check</Link> to verify serial numbers before bidding.
              </p>
            </section>

            {/* How to Choose */}
            <section id="how-to-choose">
              <h2 className="text-2xl font-bold mb-6">How to Choose the Right Stolen Item Checker</h2>
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Checking phones only?</h3>
                  <p className="text-sm text-muted-foreground">Start with IMEI.info (free unlimited) for carrier blacklist checks. For comprehensive verification including police databases, use <Link to="/imei-checker" className="text-primary hover:underline">SafeOrStolen</Link> ($1/mo unlimited).</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Need full vehicle history?</h3>
                  <p className="text-sm text-muted-foreground">Use Carfax ($44.99) for detailed accident/service/ownership history. For theft verification only, <Link to="/vin-checker" className="text-primary hover:underline">SafeOrStolen's VIN checker</Link> is significantly cheaper ($1/mo).</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Checking firearms?</h3>
                  <p className="text-sm text-muted-foreground"><Link to="/firearms-check" className="text-primary hover:underline">SafeOrStolen</Link> (100+ databases including NCIC) or HotGunz (free but only 32K community reports). For legal protection, SafeOrStolen's comprehensive search is recommended.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Need multiple item types?</h3>
                  <p className="text-sm text-muted-foreground"><Link to="/verify" className="text-primary hover:underline">SafeOrStolen</Link> is the only option that covers all categories (phones, cars, guns, electronics, bikes, consoles) in one platform.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Need a mobile app?</h3>
                  <p className="text-sm text-muted-foreground"><Link to="/app" className="text-primary hover:underline">SafeOrStolen</Link> is the only stolen item verification service with a mobile app. No other competitor offers this.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">UK-based buyer?</h3>
                  <p className="text-sm text-muted-foreground">CheckMEND has the strongest UK police data. SafeOrStolen is better for US buyers.</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card px-6 rounded-lg border border-border">
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

            {/* CTA */}
            <section className="py-8 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Verify? Start With 2 Free Checks</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                SafeOrStolen searches 100+ databases for phones, vehicles, firearms, electronics, and more. Instant results in 3 seconds. No credit card required.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  Check Any Item Now — Free <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </section>

            {/* Internal Links */}
            <section className="py-8">
              <h2 className="text-xl font-bold mb-4">Related Resources</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { title: "IMEI Checker", href: "/imei-checker" },
                  { title: "VIN Checker", href: "/vin-checker" },
                  { title: "Gun Serial Lookup", href: "/firearms-check" },
                  { title: "Serial Number Check", href: "/serial-number-checker" },
                  { title: "Facebook Marketplace", href: "/facebook-marketplace-stolen-check" },
                  { title: "eBay Stolen Check", href: "/ebay-stolen-item-check" },
                  { title: "For Pawn Shops", href: "/for-pawn-shops" },
                  { title: "Download App", href: "/app" },
                  { title: "Xbox Check", href: "/check-xbox" },
                  { title: "Bike Check", href: "/check-bike" },
                  { title: "How It Works", href: "/how-it-works" },
                  { title: "Pricing", href: "/pricing" },
                ].map((link, i) => (
                  <Link key={i} to={link.href} className="p-3 bg-card rounded-lg border border-border text-sm font-medium hover:bg-primary/5 hover:border-primary/30 transition-colors text-center">
                    {link.title}
                  </Link>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-6">
              <strong>Disclaimer:</strong> This comparison is based on publicly available information as of February 2026. Pricing, features, and database coverage may change. SafeOrStolen is one of the services reviewed. We strive for accuracy and fairness in all comparisons. Individual results may vary based on item type and database coverage. A clean result from any service means the item was not found in that service's databases — it does not guarantee the item was never stolen. Always exercise caution when buying used items.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStolenItemCheckers;
