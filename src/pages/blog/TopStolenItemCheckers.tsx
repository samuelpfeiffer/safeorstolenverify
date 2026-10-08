import { useState, useEffect, useRef } from 'react';
import { Link } from '@/lib/router-compat';
import { Shield, CheckCircle, XCircle, Smartphone, ArrowRight, ExternalLink, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
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
  'checkmend': '4. CheckMEND (UK)',
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
      question: "Which stolen item checker covers the most item types?",
      answer: "SafeOrStolen covers the most item types in one place: phones, vehicles, license plates, electronics, power tools, firearms, and bicycles. Every check searches SafeOrStolen's own theft reports and public web results, and gun and bike checks add police and registry records. Most other tools cover one category: IMEI.info is phones only, Carfax is vehicles only, and HotGunz is firearms only."
    },
    {
      question: "Are free stolen item checkers reliable?",
      answer: "Free tools like IMEI.info and NICB VINCheck are useful within their limits. IMEI.info shows device details but is not a police theft-report search. NICB VINCheck only covers vehicle theft reported through insurance claims. HotGunz relies on gun owners reporting their own stolen guns. They are a good starting point, and no single tool covers every record, so check more than one source on a big purchase."
    },
    {
      question: "How does Carfax compare to SafeOrStolen?",
      answer: "Carfax sells paid vehicle history reports covering accidents, ownership and service records; check its site for current prices. SafeOrStolen costs $0.99 a check or $10 a month for unlimited checks across all item types. A SafeOrStolen VIN check decodes the vehicle, lists open recalls and searches its own theft reports and the web, plus Arizona law-enforcement records for Arizona VINs. It is not a full vehicle history report."
    },
    {
      question: "How much does SafeOrStolen cost for firearm checks?",
      answer: "SafeOrStolen gives you 2 free checks, then $0.99 for a single check or $10 a month for unlimited checks. A gun check searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, SafeOrStolen's own theft reports and public web results, and flags serials that look altered or obliterated. NCIC and ATF eTrace are law-enforcement only, and SafeOrStolen does not search them."
    },
    {
      question: "Which service has a mobile app for checking stolen items?",
      answer: "Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. It has a free installable web app at safeorstolen.com/app that works in the browser on iPhone and Android; it is not in the App Store or Google Play. You can scan a barcode to fill in the serial number at a gun show, pawn shop or marketplace meetup, and the result comes back in a few seconds."
    },
    {
      question: "How do I check if a phone is stolen using IMEI?",
      answer: "Dial *#06# on the phone to get the IMEI number, then enter it into a verification service. IMEI.info is a free lookup that shows device details. SafeOrStolen shows the phone's make and model from the IMEI and checks its own theft reports and public web results, with a paid carrier blacklist check available. Results come back in a few seconds."
    },
    {
      question: "Is it illegal to buy stolen items?",
      answer: "Yes. Receiving stolen property is a crime in all 50 US states. Penalties vary by state and item value but can include felony charges, imprisonment, and fines. Even if you didn't know the item was stolen, you can still face legal consequences — especially if the price was suspiciously low or circumstances were questionable. Checking the serial number before you buy, and keeping a dated record of that check, shows you made an honest effort to find out. It does not make a purchase legal if the item turns out to be stolen."
    },
    {
      question: "What databases does the NCIC (National Crime Information Center) check?",
      answer: "The National Crime Information Center (NCIC) is the FBI's national database of stolen property reported by police. It includes stolen vehicles, firearms, boats, securities and other serialized property. Only law enforcement can search it; civilians cannot access it directly, and SafeOrStolen does not search it. You can ask your local police department to check NCIC for you."
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top 10 Ways to Check if an Item is Stolen Before Buying (2026)",
      "description": "Side-by-side comparison of stolen item verification services for phones, vehicles, firearms, and electronics. Compare SafeOrStolen, IMEI.info, Carfax, CheckMEND, and more.",
      "author": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
      "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com", "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" } },
      "datePublished": "2026-02-06",
      "dateModified": "2026-10-07",
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
              How the common stolen-item checks for phones, vehicles, firearms, bikes and electronics compare: what each one searches, what it costs, and where it falls short.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: October 7, 2026 · 12 min read
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
                  className={`block text-xs py-1.5 px-2 rounded-[0.25rem] transition-colors ${
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
                      <th className="text-left p-3 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-primary/5">
                      <td className="p-3 font-bold text-primary flex items-center gap-1"><Crown className="w-3 h-3" /> SafeOrStolen</td>
                      <td className="p-3">All (phones, cars, guns, electronics, bikes)</td>
                      <td className="p-3">Multi-source</td>
                      <td className="p-3">$10/mo unlimited</td>
                      <td className="p-3">Everything</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">IMEI.info</td>
                      <td className="p-3">Phones only</td>
                      <td className="p-3">Device details</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">Phone-only checks</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Carfax</td>
                      <td className="p-3">Vehicles only</td>
                      <td className="p-3">1 (vehicle history)</td>
                      <td className="p-3">Paid per report</td>
                      <td className="p-3">Full vehicle history</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">CheckMEND (UK)</td>
                      <td className="p-3">Phones, electronics</td>
                      <td className="p-3">UK-focused</td>
                      <td className="p-3">Paid per check</td>
                      <td className="p-3">UK buyers</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Swappa</td>
                      <td className="p-3">Phones only</td>
                      <td className="p-3">Carrier blacklists</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">Swappa marketplace</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">NICB VINCheck</td>
                      <td className="p-3">Vehicles only</td>
                      <td className="p-3">Insurance claims</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">Quick VIN check</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">HotGunz</td>
                      <td className="p-3">Firearms only</td>
                      <td className="p-3">Owner-reported</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">Gun serial lookup</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Local Police</td>
                      <td className="p-3">Any item</td>
                      <td className="p-3">NCIC (via police)</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">High-value items</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">BikeIndex</td>
                      <td className="p-3">Bicycles only</td>
                      <td className="p-3">Community + police</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">Bike theft</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">eBay Verification</td>
                      <td className="p-3">eBay listings</td>
                      <td className="p-3">eBay internal</td>
                      <td className="p-3">Built-in</td>
                      <td className="p-3">eBay purchases</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. SafeOrStolen */}
            <section id="safeorstolen">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Crown className="w-5 h-5 text-primary" /> 1. SafeOrStolen — Best Overall Multi-Category Checker</h2>
              <p className="text-sm text-primary font-medium mb-4">safeorstolen.com · $10/mo unlimited · All item types</p>
              <p className="text-muted-foreground mb-4">
                SafeOrStolen checks phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. It also has a free <Link to="/app" className="text-primary hover:underline">installable web app</Link> with barcode scanning for on-the-spot checks.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold text-sm mb-2">Sources Checked</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• SafeOrStolen's own theft reports (every check)</li>
                    <li>• Public web results: listings and posts that mention the number (every check)</li>
                    <li>• Guns: police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records</li>
                    <li>• Guns: flags serials that look altered or obliterated</li>
                    <li>• Bikes: a national stolen-bicycle registry</li>
                    <li>• Phones: make and model from the IMEI, plus a paid carrier blacklist check</li>
                    <li>• Vehicles: VIN decode and open safety recalls; Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates</li>
                  </ul>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold text-sm mb-2">Key Advantages</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li><Yes /> SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place</li>
                    <li><Yes /> All item categories in one platform</li>
                    <li><Yes /> Every source searched is listed in the result</li>
                    <li><Yes /> $10/mo unlimited</li>
                    <li><Yes /> Results in a few seconds</li>
                    <li><Yes /> Optional $1.99 verification certificate with its own link</li>
                    <li><Yes /> Bulk checking for pawn shops and dealers</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                <strong>Best for:</strong> Anyone buying used items from <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace</Link>, OfferUp, Craigslist, eBay, pawn shops, gun shows, or private sellers. The free installable web app makes it easy to run a check on your phone at an in-person meetup.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Pricing:</strong> 2 free checks, then $0.99/check or $10/month unlimited across all item types. Cancel anytime. Bulk checking for businesses is at /bulk-check.
              </p>
              <div className="mt-4">
                <Link to="/verify">
                  <Button className="gap-2">Check Item Now — $10/mo <ArrowRight className="w-4 h-4" /></Button>
                </Link>
              </div>
            </section>

            {/* 2. IMEI.info */}
            <section id="imei-info">
              <h2 className="text-2xl font-bold mb-2">2. IMEI.info — Best Free Phone-Only Checker</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Free · Phones only</p>
              <p className="text-muted-foreground mb-4">
                IMEI.info is a popular free service for checking phone IMEI numbers against carrier blacklists. It provides basic device information including model, storage, color, and blacklist status. It's fast and free, making it a solid choice for phone-only verification. You can ask your carrier if your device is blacklisted.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free</li>
                    <li><Yes /> Device specs included</li>
                    <li><Yes /> Fast results</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> Phones only (no cars, guns, etc.)</li>
                    <li><No /> Coverage varies by service and item type</li>
                    <li><No /> No police database access</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Quick phone blacklist checks when you only need a basic status. To also search theft reports, <Link to="/imei-checker" className="text-primary hover:underline">SafeOrStolen's IMEI checker</Link> shows the make and model and searches its own theft reports and public web results, with a paid carrier blacklist check available.
              </p>
            </section>

            {/* 3. Carfax */}
            <section id="carfax">
              <h2 className="text-2xl font-bold mb-2">3. Carfax — Best Detailed Vehicle History</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Paid reports · Vehicles only</p>
              <p className="text-muted-foreground mb-4">
                Carfax sells detailed vehicle history reports: accident history, ownership chain, mileage records, service records and theft status. It goes much deeper on a car's past than a theft check does, but you pay per report and it only covers vehicles.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Detailed vehicle history</li>
                    <li><Yes /> Accident and service records</li>
                    <li><Yes /> Well-known name with dealers</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> Paid per report</li>
                    <li><No /> Vehicles only</li>
                    <li><No /> No phones, firearms, electronics</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Buyers who need full vehicle history (accidents, service, ownership). If you only need theft verification, <Link to="/vin-checker" className="text-primary hover:underline">SafeOrStolen's VIN checker</Link> decodes the VIN, lists open recalls and searches SafeOrStolen's theft reports and the web for $0.99 a check or $10 a month.
              </p>
            </section>

            {/* 4. CheckMEND (UK) */}
            <section id="checkmend">
              <h2 className="text-2xl font-bold mb-2">4. CheckMEND (Recipero) — Best for UK Buyers</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Paid per check · Phones and electronics</p>
              <p className="text-muted-foreground mb-4">
                CheckMEND, powered by Recipero, specializes in device verification primarily for the UK market. It checks phones and electronics against UK theft reports and carrier blacklists. It's the standard verification tool for UK pawn shops and secondhand retailers.
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
                    <li><No /> Paid per check</li>
                    <li><No /> UK-focused data (limited US coverage)</li>
                    <li><No /> No firearms or vehicles</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> UK-based buyers and pawn shops. For US buyers, <Link to="/verify" className="text-primary hover:underline">SafeOrStolen</Link> covers more item types, including guns, vehicles and bikes, for $0.99 a check.
              </p>
            </section>

            {/* 5. Swappa */}
            <section id="swappa">
              <h2 className="text-2xl font-bold mb-2">5. Swappa — Best Phone Marketplace with Built-In Checks</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Free · Phones only</p>
              <p className="text-muted-foreground mb-4">
                Swappa is a phone resale marketplace that includes built-in IMEI verification. When buying through Swappa, devices are automatically checked against carrier blacklists before listing. Their standalone ESN/IMEI checker is free to use.
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
                                        <li><No /> Phones only</li>
                    <li><No /> Carrier blacklists only</li>
                    <li><No /> No police database access</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Buyers already shopping on Swappa. For items from other marketplaces (Facebook, OfferUp, Craigslist), use <Link to="/check-phone" className="text-primary hover:underline">SafeOrStolen's phone check</Link>, which also searches theft reports and public web results.
              </p>
            </section>

            {/* 6. NICB VINCheck */}
            <section id="nicb-vincheck">
              <h2 className="text-2xl font-bold mb-2">6. NICB VINCheck — Best Free Vehicle Theft Check</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Free · Vehicles only</p>
              <p className="text-muted-foreground mb-4">
                NICB (National Insurance Crime Bureau) offers a free VINCheck service that searches insurance theft and salvage/junk records. It's backed by the insurance industry and provides reliable data on whether a vehicle has been reported stolen through insurance claims.
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
                                        <li><No /> Vehicles only</li>
                    <li><No /> Only insurance claims (not police reports)</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Quick free vehicle theft checks. To also decode the VIN, see open recalls and search SafeOrStolen's theft reports and public web results, use <Link to="/vin-checker" className="text-primary hover:underline">SafeOrStolen's VIN checker</Link>.
              </p>
            </section>

            {/* 7. HotGunz */}
            <section id="hotgunz">
              <h2 className="text-2xl font-bold mb-2">7. HotGunz — Free Community Gun Serial Lookup</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Free · Firearms only</p>
              <p className="text-muted-foreground mb-4">
                HotGunz is a separate, community-driven stolen gun site where owners report and search for stolen guns. It's free, but it relies on owners reporting their own thefts and does not search official registries like NCIC.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free</li>
                    <li><Yes /> Simple interface</li>
                    <li><Yes /> Community-driven</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> Only what owners choose to report</li>
                    <li><No /> Community reports only (no police data)</li>
                    <li><No /> Firearms only</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Quick free gun serial checks as a first step. For firearm checks alongside every other item category, use <Link to="/firearms-check" className="text-primary hover:underline">SafeOrStolen's gun serial number lookup</Link> (2 free checks).
              </p>
            </section>

            {/* 8. Local Police */}
            <section id="local-police">
              <h2 className="text-2xl font-bold mb-2">8. Local Police Department — Most Authoritative</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Your local PD · Free · Any item type</p>
              <p className="text-muted-foreground mb-4">
                Your local police department can check any serial number against the National Crime Information Center (NCIC) — the most authoritative stolen property database in the country. This is free and works for any item type. The downside: you usually have to go in or call, and departments differ on whether they will run a check for a buyer and how long it takes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Official NCIC database</li>
                    <li><Yes /> Free</li>
                    <li><Yes /> Any item type</li>
                    <li><Yes /> Most authoritative source</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> In-person visit required</li>
                    <li><No /> Not every department will do it</li>
                    <li><No /> Not practical for marketplace meetups</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> High-value purchases where you can wait for an answer. For a check on the spot at a gun show, marketplace meetup or pawn shop, <Link to="/verify" className="text-primary hover:underline">SafeOrStolen</Link> returns results in a few seconds.
              </p>
            </section>

            {/* 9. BikeIndex */}
            <section id="bikeindex">
              <h2 className="text-2xl font-bold mb-2">9. BikeIndex — Best for Bicycle Theft</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Free · Bicycles only</p>
              <p className="text-muted-foreground mb-4">
                BikeIndex is a separate nonprofit bicycle registration and stolen bike site. Owners register their bikes and mark them stolen, and you can search it yourself for free.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Strengths</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><Yes /> Free nonprofit</li>
                    <li><Yes /> Police partnerships</li>
                    <li><Yes /> Free to search</li>
                  </ul>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs font-bold mb-1">Limitations</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li><No /> Bicycles only</li>
                    <li><No /> Voluntary registration</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Best for:</strong> Bicycle buyers. A SafeOrStolen <Link to="/check-bike" className="text-primary hover:underline">bike check</Link> searches a national stolen-bicycle registry along with its own theft reports and public web results.
              </p>
            </section>

            {/* 10. eBay Verification */}
            <section id="ebay-verification">
              <h2 className="text-2xl font-bold mb-2">10. eBay's Built-In Verification — Best for eBay Shoppers</h2>
              <p className="text-sm text-muted-foreground font-medium mb-4">Built into platform · eBay listings only</p>
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
                  <p className="text-sm text-muted-foreground">IMEI.info is a free device lookup. To also search SafeOrStolen's own theft reports and public web results, with a paid carrier blacklist check available, use <Link to="/imei-checker" className="text-primary hover:underline">SafeOrStolen</Link> ($10/mo unlimited).</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Need full vehicle history?</h3>
                  <p className="text-sm text-muted-foreground">Use Carfax for detailed accident, service and ownership history. For a quick VIN decode, recall list and theft-report search, <Link to="/vin-checker" className="text-primary hover:underline">SafeOrStolen's VIN checker</Link> costs $0.99 a check or $10 a month.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Checking firearms?</h3>
                  <p className="text-sm text-muted-foreground"><Link to="/firearms-check" className="text-primary hover:underline">SafeOrStolen</Link> (police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, and an altered-serial check) or HotGunz (free, owner-reported thefts only).</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Need multiple item types?</h3>
                  <p className="text-sm text-muted-foreground"><Link to="/verify" className="text-primary hover:underline">SafeOrStolen</Link> covers phones, cars, guns, electronics, bikes and consoles in one place, so you don't need a separate tool for each.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">Need a mobile app?</h3>
                  <p className="text-sm text-muted-foreground"><Link to="/app" className="text-primary hover:underline">SafeOrStolen</Link> has a free installable web app with barcode scanning that covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold mb-1">UK-based buyer?</h3>
                  <p className="text-sm text-muted-foreground">CheckMEND has strong UK data. SafeOrStolen is better for US buyers.</p>
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
 SafeOrStolen searches its own theft reports, public web results and item-specific records for phones, vehicles, firearms, bikes and electronics. Results come back in a few seconds. No credit card required.
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
                  { title: "Web App", href: "/app" },
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
              <strong>Disclaimer:</strong> This comparison is based on publicly available information as of October 2026. Pricing, features, and database coverage may change. SafeOrStolen is one of the services reviewed. We strive for accuracy and fairness in all comparisons. Individual results may vary based on item type and database coverage. A clean result from any service means the item was not found in that service's databases — it does not guarantee the item was never stolen. Always exercise caution when buying used items.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStolenItemCheckers;
