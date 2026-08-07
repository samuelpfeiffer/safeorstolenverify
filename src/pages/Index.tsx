import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { CompetitorTargetingSEO } from '@/components/seo/CompetitorTargetingSEO';
import { Shield, Zap, Lock, Star, Building2, Scan } from 'lucide-react';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { HomeAIHero } from '@/components/home/HomeAIHero';
import { SampleResultPreview } from '@/components/homepage/SampleResultPreview';
import { ShareVerification } from '@/components/homepage/ShareVerification';
import { DownloadAppBanner } from '@/components/home/DownloadAppBanner';
import { useState } from 'react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

// Card images served from /public for smaller JS bundle (no ES module overhead)
const cardFirearms = '/images/cards/firearms-check.jpg';
const cardVehicle = '/images/cards/vehicle-vin.jpg';
const cardPhone = '/images/cards/phone-imei.jpg';
const cardPlate = '/images/cards/license-plate.jpg';
const cardBicycle = '/images/cards/bicycle-serial.jpg';
const cardLaptop = '/images/cards/laptop-electronics.jpg';
const cardBarcode = '/images/cards/scan-barcode.jpg';
const cardListing = '/images/cards/paste-listing.jpg';

// ============================================================
// DATA
// ============================================================

const VERIFY_CARDS = [
  {
    title: 'Gun Serial Number Lookup',
    subtitle: 'ATF, NCIC, HotGunz + 50 state police databases',
    href: '/firearms-check',
    image: cardFirearms,
    badge: '🔥 Top Search',
  },
  {
    title: 'Vehicle VIN Check',
    subtitle: 'NICB, NHTSA, DMV records from all 50 states',
    href: '/vin-checker',
    image: cardVehicle,
    badge: null,
  },
  {
    title: 'Phone IMEI Check',
    subtitle: 'GSMA, AT&T, Verizon, T-Mobile carrier blacklists',
    href: '/imei-checker',
    image: cardPhone,
    badge: null,
  },
  {
    title: 'License Plate Lookup',
    subtitle: 'State DMV records + theft database cross-check',
    href: '/license-plate-lookup',
    image: cardPlate,
    badge: null,
  },
  {
    title: 'Bicycle Serial Check',
    subtitle: 'BikeIndex (700K+ bikes) + 529 Garage + police',
    href: '/check-bike',
    image: cardBicycle,
    badge: null,
  },
  {
    title: 'Electronics, Power Tools & Appliances',
    subtitle: 'Apple, Dell, DeWalt, Milwaukee, Samsung, LG + insurance databases',
    href: '/check-laptop',
    image: cardLaptop,
    badge: null,
  },
  {
    title: 'Scan Barcode or QR',
    subtitle: 'Use your camera to scan any item instantly',
    href: '/verify?mode=scan',
    image: cardBarcode,
    badge: '📱 App Feature',
  },
  {
    title: 'Paste Listing URL',
    subtitle: 'Facebook, OfferUp, Craigslist, eBay — we extract for you',
    href: '/verify?mode=url',
    image: cardListing,
    badge: '✨ New',
  },
];

const FOR_SELLERS_FEATURES = [
  { icon: '📄', title: 'Verified Certificate', desc: 'Generate a shareable PDF proving your item is clean — commands higher sale prices' },
  { icon: '🔗', title: 'Shareable Link', desc: 'Send buyers a direct link to your verified result — no login required to view' },
  { icon: '⚡', title: '3-Second Results', desc: 'Check before you list, not after — protect your reputation as a seller' },
  { icon: '🛡️', title: 'Legal Protection', desc: 'Documented due diligence protects you if a buyer later claims the item was stolen' },
];

const TESTIMONIALS = [
  {
    name: 'Mike T.',
    role: 'Pawn Shop Owner, Phoenix AZ',
    quote: "SafeOrStolen paid for itself week one. Caught a stolen MacBook worth $1,800. Now I check every single item that comes through the door — it's non-negotiable.",
    stars: 5,
    plan: 'Unlimited Plan',
  },
  {
    name: 'Sarah K.',
    role: 'Used Car Buyer, Houston TX',
    quote: 'Ran the VIN on a Craigslist Honda Civic before I drove 2 hours to look at it. Came back salvage title. Saved me from a $12,000 disaster.',
    stars: 5,
    plan: 'Unlimited Plan',
  },
  {
    name: 'James R.',
    role: 'Private Firearms Collector',
    quote: "At gun shows you can't be too careful. The ATF cross-check plus HotGunz gives me real peace of mind on every private sale. Worth every penny.",
    stars: 5,
    plan: 'Unlimited Plan',
  },
];

const RECENT_VERIFICATIONS = [
  { type: 'IMEI', item: 'iPhone 15 Pro', result: 'CLEAN', location: 'Phoenix, AZ', time: '4 min ago', value: '$1,199' },
  { type: 'VIN', item: '2023 Toyota Camry', result: 'CLEAN', location: 'Dallas, TX', time: '11 min ago', value: '$28,000' },
  { type: 'SERIAL', item: 'MacBook Pro M3', result: 'FLAGGED', location: 'Los Angeles, CA', time: '18 min ago', value: '$2,499' },
  { type: 'GUN', item: 'Glock 19 Gen 5', result: 'CLEAN', location: 'Phoenix, AZ', time: '22 min ago', value: '$650' },
  { type: 'PLATE', item: '2021 F-150', result: 'CLEAN', location: 'Scottsdale, AZ', time: '31 min ago', value: '$42,000' },
];

const FAQ_ITEMS = [
  {
    q: 'How do I check if a phone is stolen before buying?',
    a: "Use SafeOrStolen's free IMEI checker at safeorstolen.com/imei-checker. Dial *#06# on the phone to find the IMEI number, enter it on SafeOrStolen, and get instant results showing if the phone is stolen, lost, or blacklisted. SafeOrStolen checks GSMA Device Registry, carrier blacklists, and law enforcement databases simultaneously.",
  },
  {
    q: 'How do I check if a used car is stolen?',
    a: "Use SafeOrStolen's free VIN lookup at safeorstolen.com/vin-checker. Enter the vehicle's 17-digit VIN number to check it against stolen vehicle databases, salvage records, and title status records. Results are returned in approximately 3 seconds.",
  },
  {
    q: 'Can I check a Facebook Marketplace listing for stolen items?',
    a: 'Yes. SafeOrStolen is the only verification service that lets you paste a marketplace listing URL from Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark. SafeOrStolen automatically extracts the IMEI, VIN, or serial number and checks it against 100+ databases. Try it at safeorstolen.com/marketplace-url-checker.',
  },
  {
    q: 'Is SafeOrStolen free?',
    a: 'SafeOrStolen offers 2 free verifications with no credit card required. After that, you can run a single check for $0.99 or get unlimited checks for $10 per month, which includes access to the mobile app with barcode scanning.',
  },
  {
    q: 'What databases does SafeOrStolen check?',
    a: 'SafeOrStolen checks over 100 databases including FBI NCIC stolen property files, GSMA Device Registry, NICB (National Insurance Crime Bureau), ATF eTrace for firearms, major carrier blacklists (AT&T, Verizon, T-Mobile), insurance claims databases, police reports, BikeIndex for bicycles, and HotGunz for firearms. This is the most comprehensive coverage of any stolen item verification service.',
  },
  {
    q: 'How do I check if a gun is stolen?',
    a: "Use SafeOrStolen's firearms verification at safeorstolen.com/firearms-check. Enter the firearm's serial number to check it against stolen firearms databases and law enforcement records. This helps verify the firearm is not stolen before purchasing.",
  },
  {
    q: 'How much does SafeOrStolen cost?',
    a: 'SafeOrStolen offers 2 free checks with no account required. After that, single checks are $0.99 each, or the Unlimited plan is $10 per month for unlimited verifications including IMEI, VIN, serial number, license plate, and firearm checks.',
  },
  {
    q: 'How does the license plate lookup work?',
    a: 'Enter any US license plate number on SafeOrStolen to check if the associated vehicle has been reported stolen. SafeOrStolen queries state DMV records and law enforcement databases across all 50 states. Results include stolen status, registration state, and vehicle details when available.',
  },
  {
    q: 'Can I use SafeOrStolen as a seller to prove my item is legitimate?',
    a: 'Yes. SafeOrStolen generates a shareable verification certificate with a unique URL and QR code that proves your item passed all stolen property checks. Share it in your marketplace listing to build buyer trust and sell faster.',
  },
  {
    q: 'What should I do if an item comes back flagged as stolen?',
    a: 'Do not purchase the item. Report the listing to the marketplace platform (Facebook Marketplace, eBay, Craigslist, etc.) and contact your local law enforcement with the verification details. SafeOrStolen provides a downloadable report you can share with police. Never confront the seller directly.',
  },
  {
    q: 'Does the Unlimited plan work for pawn shops?',
    a: "Yes. SafeOrStolen's Unlimited plan ($10/month) is designed for pawn shops, used electronics stores, and secondhand dealers. It includes unlimited verifications, compliance-ready PDF certificates, and automatic logging for state regulations. Over 500 pawn shops use SafeOrStolen to meet legal requirements for checking items against stolen property databases before purchasing.",
  },
];

// ============================================================
// COMPONENT
// ============================================================

const Index = () => {
  const [showScanner, setShowScanner] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="SafeOrStolen — AI Stolen Item Verification, All Categories"
        description="AI-powered stolen-item checks for buyers, sellers, and businesses — phones, vehicles, electronics, power tools, firearms, and bikes across 100+ databases."
        keywords="stolen item checker, IMEI checker free, VIN checker free, serial number verification, stolen phone checker, stolen car check, gun serial number lookup, marketplace safety"
        canonical="/"
      />
      <CompetitorTargetingSEO />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>AI Stolen Item Verification for Buyers, Sellers, and Businesses</h1>
          <p>SafeOrStolen is an AI-powered platform that checks whether a secondhand item is reported stolen. Buyers verify before they pay, sellers prove an item is clean, and businesses such as pawn shops, resellers, dealers, and repair shops document diligence at intake.</p>
          <p>We verify six categories: phones by IMEI, vehicles by VIN, license plates, serial-numbered goods including electronics, power tools, and appliances, firearms by serial number, and bicycles by frame number. Each check runs against 100+ law enforcement, insurance, and carrier databases, including FBI NCIC, GSMA, NICB, ATF, BikeIndex, and HotGunz, with results in about 3 seconds. You can also paste a marketplace listing URL and our AI will extract the identifier for you.</p>
        </div>
      </noscript>


      <TopNavigation />

      {/* ── STICKY TOP DOWNLOAD APP BANNER ─────────────────────── */}
      <DownloadAppBanner />

      {/* ── AI CHAT HERO ──────────────────────────── */}
      <HomeAIHero />

      {/* ── STATS BAR ───────────────────────────────────── */}
      <div className="bg-card border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { v: '100+', l: 'Databases Checked' },
            { v: '3 sec', l: 'Average Result Time' },
            { v: '10K+', l: 'Verified Users' },
            { v: '99.2%', l: 'Accuracy Rate' },
          ].map((s) => (
            <div key={s.l} className="text-center py-5 px-4">
              <div className="text-2xl font-black text-primary">{s.v}</div>
              <div className="text-muted-foreground text-xs mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SOFT VALUE STRIP — trust-led pricing reminder ── */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
            <Shield className="w-3.5 h-3.5" /> Simple, honest pricing
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
            Start with <span className="text-primary">2 free checks</span>. No credit card.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-sm sm:text-base leading-relaxed">
            Need just one verification? Pay <strong className="text-foreground">$0.99</strong> — no account required.
            Verifying often? Get <strong className="text-foreground">$10/month unlimited</strong> with the seller badge,
            mobile app, and PDF certificates included. Cancel anytime, 30-day refund.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/verify"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-all button-glow"
            >
              Start Free — 2 Checks
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:bg-primary/5"
            >
              See Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VERIFICATION CARDS WITH PHOTOS ──────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-foreground text-center mb-2">
            What Are You Verifying Today?
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Click any category — each runs parallel checks across all relevant databases simultaneously.
            Buyers AND sellers both protected.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VERIFY_CARDS.map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card modern-card"
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="300"
                    height="176"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  {card.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-black px-2.5 py-1 rounded-full shadow-lg">
                      {card.badge}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{card.subtitle}</p>
                  <div className="mt-3 flex items-center text-primary text-xs font-semibold">
                    Verify now
                    <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE VERIFICATION FEED ──────────────────────── */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">
            Live Verification Activity
          </h2>
          <div className="space-y-2">
            {RECENT_VERIFICATIONS.map((v, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded">
                    {v.type}
                  </span>
                  <div>
                    <span className="text-sm text-foreground font-medium">{v.item}</span>
                    <span className="text-xs text-muted-foreground ml-2">{v.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    v.result === 'CLEAN'
                      ? 'bg-secondary/20 text-secondary border border-secondary/30'
                      : 'bg-destructive/20 text-destructive border border-destructive/30'
                  }`}>
                    {v.result}
                  </span>
                  <span className="text-xs text-muted-foreground hidden sm:block">{v.time}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/60 mt-3">
            Activity shown is representative of platform usage patterns.
          </p>
        </div>
      </section>

      {/* ── SAMPLE RESULT PREVIEW (shows value before signup) ─── */}
      <SampleResultPreview />

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-foreground text-center mb-12">
            3 Steps. 3 Seconds. Full Protection.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '1',
                title: 'Enter Any Identifier',
                desc: "Type or scan your IMEI, VIN, serial number, or license plate. Or paste a Facebook Marketplace / OfferUp / Craigslist listing URL and we'll extract the identifier automatically.",
              },
              {
                n: '2',
                title: 'Parallel Database Scan',
                desc: 'We simultaneously query FBI NCIC, GSMA, NICB, ATF, HotGunz, BikeIndex, all 50 state law enforcement systems, carrier blacklists, and insurance theft records. All at once.',
              },
              {
                n: '3',
                title: 'Get Trust Score + Certificate',
                desc: 'Receive a 0–100 Trust Score with a source-level breakdown showing exactly which databases returned results. Download a PDF certificate or share a link directly with your buyer.',
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary font-black text-lg flex items-center justify-center mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="text-foreground font-bold text-base mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR SELLERS SECTION ─────────────────────────── */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">For Sellers</div>
            <h2 className="text-3xl font-black text-foreground mb-3">
              Prove Your Items Are Legitimate.<br />Sell Faster. Get More Money.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Buyers are increasingly savvy — they ask for verification before paying.
              A SafeOrStolen certificate attached to your listing removes doubt instantly,
              builds trust, and gets you full price.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {FOR_SELLERS_FEATURES.map((f) => (
              <div key={f.title} className="card-enhanced p-5">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-foreground font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/verify"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-2xl transition-all button-glow"
            >
              Try 2 Free Checks — Then $10/mo Unlimited →
            </Link>
            <Link
              to="/for-sellers"
              className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary text-foreground font-bold px-8 py-4 rounded-2xl transition-all hover:bg-primary/5"
            >
              Learn More for Sellers →
            </Link>
          </div>
        </div>
      </section>

      {/* ── B2B PAWN SHOP / DEALER SECTION ──────────────── */}
      <section className="py-16 px-4 border-y border-primary/10" style={{ background: 'linear-gradient(135deg, hsl(25 92% 53% / 0.05) 0%, hsl(var(--background)) 40%, hsl(var(--background)) 100%)' }}>
        <div className="max-w-5xl mx-auto md:flex items-center gap-12">
          <div className="flex-1 mb-10 md:mb-0">
            <div className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              For Pawn Shops, Dealers & Resellers
            </div>
            <h2 className="text-3xl font-black text-foreground mb-4 leading-tight">
              Compliance Is Required.<br />We Make It Automatic.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Most U.S. states legally require pawn shops to verify items against stolen property
              databases before accepting them. SafeOrStolen automates that compliance with
              unlimited checks, timestamped PDF certificates, and bulk CSV processing —
              all for one flat monthly fee.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Unlimited verifications — no per-item cost',
                'Timestamped PDF certificates for every transaction',
                'Bulk CSV upload — verify 100 items at once',
                'Full audit trail for law enforcement requests',
                'API integration with your existing POS system',
                'Multi-user seats for your entire staff',
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground/80 text-sm">
                  <span className="text-primary text-base flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
               <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-3.5 rounded-xl transition-all button-glow"
              >
                <Building2 className="w-4 h-4" />
                Get Unlimited Plan — $10/mo
              </Link>
              <Link
                to="/for-pawn-shops"
                className="inline-flex items-center justify-center gap-2 bg-card hover:bg-muted text-foreground font-semibold px-7 py-3.5 rounded-xl transition-all border border-border"
              >
                Learn More About Pawn Shop Solutions →
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-72 modern-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <span className="text-foreground font-bold">Unlimited Plan — $10/mo</span>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                '♾️ Unlimited verifications',
                '📄 PDF compliance certificates',
                '📊 Bulk CSV upload',
                '🔌 Full REST API access',
                '📋 Audit trail + export',
                '👥 5 staff user seats',
                '📞 Dedicated support line',
              ].map((f) => (
                <li key={f} className="text-muted-foreground text-sm">{f}</li>
              ))}
            </ul>
            <div className="border-t border-border pt-5">
              <div>
                <span className="text-4xl font-black text-foreground">$10</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <div className="text-muted-foreground text-xs mt-1">Cancel anytime · 30-day money-back guarantee</div>
              <Link
                to="/pricing"
                className="mt-4 block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl text-center transition-all text-sm"
              >
                Start Unlimited Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-foreground text-center mb-10">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="modern-card p-6 flex flex-col">
                <div className="text-primary text-lg mb-3">{'★'.repeat(t.stars)}</div>
                <p className="text-foreground/80 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="border-t border-border mt-5 pt-4">
                  <div className="text-foreground font-semibold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                  <div className="text-primary text-xs mt-1">✓ Verified {t.plan} subscriber</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHARE & REFERRAL SECTION ─────────────────── */}
      <ShareVerification />

      {/* ── PRESS, TRUST & CREDENTIALS ──────────────────── */}
      <section className="py-16 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-foreground text-center mb-2">
            Backed, Listed & Verified
          </h2>
          <p className="text-muted-foreground text-center text-sm mb-10">
            Independent third-party credentials you can verify yourself
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* FasterCapital */}
            <a
              href="https://fastercapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card p-5 flex flex-col items-center text-center hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <img
                src="/images/partners/fastercapital-logo.png"
                alt="FasterCapital accelerator logo"
                className="h-12 w-auto mb-3"
                loading="lazy"
              />
              <h3 className="text-foreground font-bold text-sm mb-1">FasterCapital</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Selected for global accelerator program to scale marketplace safety technology
              </p>
              <span className="mt-3 text-primary text-xs font-semibold">Accelerator Partner ↗</span>
            </a>

            {/* Trustpilot */}
            <a
              href="https://www.trustpilot.com/review/safeorstolen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card p-5 flex flex-col items-center text-center hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="h-12 flex items-center mb-3">
                <svg viewBox="0 0 126 31" className="h-8 w-auto" aria-label="Trustpilot logo">
                  <path d="M33.3 12.1h-8.5l-2.6-8.1L19.5 12l-8.5.1 6.9 5-2.6 8.1 6.9-5 6.9 5-2.7-8 6.9-5.1z" fill="#00B67A"/>
                  <path d="M28.6 19.1l-.9-2.8-5.5 4 6.4-1.2z" fill="#005128"/>
                  <text x="40" y="22" fill="currentColor" fontSize="14" fontWeight="700" fontFamily="system-ui">Trustpilot</text>
                </svg>
              </div>
              <h3 className="text-foreground font-bold text-sm mb-1">4.1★ on Trustpilot</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Real reviews from real users — read what buyers and sellers say about us
              </p>
              <span className="mt-3 text-primary text-xs font-semibold">Read Reviews ↗</span>
            </a>

            {/* Crunchbase */}
            <a
              href="https://www.crunchbase.com/organization/safe-or-stolen"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card p-5 flex flex-col items-center text-center hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="h-12 flex items-center mb-3">
                <svg viewBox="0 0 20 20" className="h-8 w-8" aria-label="Crunchbase logo">
                  <rect width="20" height="20" rx="4" fill="#0288D1"/>
                  <text x="4" y="15" fill="#fff" fontSize="13" fontWeight="800" fontFamily="system-ui">cb</text>
                </svg>
              </div>
              <h3 className="text-foreground font-bold text-sm mb-1">Crunchbase Listed</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Verified company profile — funding, team, and product information publicly documented
              </p>
              <span className="mt-3 text-primary text-xs font-semibold">View Profile ↗</span>
            </a>

            {/* Press Releases */}
            <Link
              to="/press-release"
              className="modern-card p-5 flex flex-col items-center text-center hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="h-12 flex items-center mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">📰</span>
                </div>
              </div>
              <h3 className="text-foreground font-bold text-sm mb-1">Press Releases</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Featured on PRLog & IssueWire — official product launches and partnership announcements
              </p>
              <span className="mt-3 text-primary text-xs font-semibold">Read Press →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD APP STRIP ──────────────────────────── */}
      <section className="py-12 px-4 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">📱</div>
          <h2 className="text-2xl font-black text-foreground mb-2">
            The Only Stolen Item Checker With a Mobile App
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Barcode scanning, QR codes, offline history — check items on the spot
            at garage sales, gun shows, pawn shops, and car lots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/app"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl transition-all button-glow"
            >
              📲 Download Free App
            </Link>
            <Link
              to="/app"
              className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-muted transition-all"
            >
              See App Features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group modern-card"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer text-foreground font-semibold text-sm hover:text-primary transition-colors list-none">
                  {item.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="text-primary hover:underline text-sm">
              View all 50+ frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────── */}
      <section className="py-20 px-4 text-center" style={{ background: 'var(--gradient-hero)' }}>
        <div className="max-w-2xl mx-auto">
          <Lock className="w-12 h-12 text-primary mx-auto mb-5" />
          <h2 className="text-4xl font-black text-foreground mb-4">
            Don't Get Burned.
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Law enforcement seizes stolen property with zero compensation to buyers.
            Two free checks. No credit card. 3 seconds. Protect yourself now.
          </p>
          <Link
            to="/verify"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-black px-10 py-5 rounded-2xl text-xl transition-all button-glow hover:scale-[1.02]"
          >
            <Shield className="w-6 h-6" />
            Start Free Verification Now
          </Link>
          <p className="text-muted-foreground/50 text-sm mt-4">
            2 free checks · Results in 3 seconds · No credit card
          </p>
        </div>
      </section>

      {/* ── JSON-LD SCHEMAS (standalone, not @graph — 2026 standard) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free Stolen Item Checker - IMEI VIN Serial Verification",
            "url": "https://safeorstolen.com",
            "description": "AI-powered stolen-item verification for buyers, sellers, and businesses. Check phones (IMEI), vehicles (VIN), license plates, serial-numbered goods including electronics, power tools, and appliances, firearms, and bicycles against 100+ law enforcement, insurance, and carrier databases.",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" }
              ]
            },
            "dateModified": "2026-03-02"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SafeOrStolen",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": ["Web", "iOS", "Android"],
            "offers": [
              { "@type": "Offer", "name": "Free Tier", "price": "0", "priceCurrency": "USD", "description": "2 free verifications" },
              { "@type": "Offer", "name": "Unlimited", "price": "10.00", "priceCurrency": "USD", "description": "Unlimited verifications, all item types" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.1",
              "reviewCount": "3"
            },
            "dateModified": "2026-03-02"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ITEMS.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })
        }}
      />
      <Footer />
    </div>
  );
};

export default Index;
