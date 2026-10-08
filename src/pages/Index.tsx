import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { CompetitorTargetingSEO } from '@/components/seo/CompetitorTargetingSEO';
import { Shield, Zap, Lock, Building2, Scan } from 'lucide-react';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { HomeAIHero } from '@/components/home/HomeAIHero';
import { ProductTour } from '@/components/onboarding/ProductTour';
import { SampleResultPreview } from '@/components/homepage/SampleResultPreview';
import { ShareVerification } from '@/components/homepage/ShareVerification';
import { DownloadAppBanner } from '@/components/home/DownloadAppBanner';
import { SafeOrStolenVideo, safeOrStolenVideos } from '@/components/video/SafeOrStolenVideo';
import { useState } from 'react';



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
  subtitle: 'Police theft reports from 33 states and DC, plus live Ohio records',
 href: '/firearms-check',
 image: cardFirearms,
 badge: 'Most searched',
 },
 {
 title: 'Vehicle VIN Check',
 subtitle: 'Theft reports, year, make, model and open recalls',
 href: '/vin-checker',
 image: cardVehicle,
 badge: null,
 },
 {
 title: 'Phone IMEI Check',
 subtitle: 'Theft reports and the phone model, plus an optional blacklist check',
 href: '/imei-checker',
 image: cardPhone,
 badge: null,
 },
 {
 title: 'License Plate Lookup',
 subtitle: 'Stolen check by plate, with Arizona police records for AZ plates',
 href: '/license-plate-lookup',
 image: cardPlate,
 badge: null,
 },
 {
 title: 'Bicycle Serial Check',
 subtitle: 'Frame serial checked against a national stolen-bike registry',
 href: '/check-bike',
 image: cardBicycle,
 badge: null,
 },
 {
 title: 'Electronics, Power Tools & Appliances',
  subtitle: 'Laptops, consoles, cameras, tools and anything with a serial number',
 href: '/serial-number-checker',
 image: cardLaptop,
 badge: null,
 },
 {
 title: 'Scan Barcode or QR',
 subtitle: 'Point your phone camera at a barcode instead of typing',
 href: '/verify?mode=scan',
 image: cardBarcode,
 badge: 'On your phone',
 },
 {
 title: 'Paste Listing URL',
 subtitle: 'Paste a Facebook Marketplace, OfferUp, Craigslist or eBay link',
 href: '/verify?mode=url',
 image: cardListing,
 badge: null,
 },
];

const FOR_SELLERS_FEATURES = [
  { icon: '📄', title: 'Verification Record', desc: 'Generate a shareable Proof of Clean Purchase record showing what was checked and when' },
 { icon: '🔗', title: 'Shareable Link', desc: 'Send buyers a direct link to your verified result — no login required to view' },
 { icon: '⚡', title: 'Results in Seconds', desc: 'Check before you list, so a buyer never finds the problem first' },
  { icon: '🛡️', title: 'Clear Context', desc: 'Give buyers a dated record they can review alongside the identifier and your ownership documents' },
];


const FAQ_ITEMS = [
 {
 q: 'How do I check if something is stolen before I buy it?',
 a: "Find its identifier: the IMEI on a phone (dial *#06#), the VIN on a car, the frame serial on a bike, or the serial number on anything else. Enter it on SafeOrStolen (safeorstolen.com). In a few seconds you'll see whether it's reported stolen, a possible match, or no report found, with every source listed. Your first 2 checks are free with no credit card.",
 },
 {
 q: 'How do I check if a phone is stolen?',
 a: "Dial *#06# or open the phone's settings to get the 15-digit IMEI, then check it at safeorstolen.com/imei-checker. SafeOrStolen searches its theft reports and public web results and shows the phone's model, and you can add a lost-and-stolen blacklist check. Before you pay, also make sure the phone isn't locked to the previous owner's account.",
 },
 {
 q: 'How do I check if a used car is stolen?',
 a: "Get the 17-character VIN from the dashboard and the driver's door jamb and make sure they match. Check it at safeorstolen.com/vin-checker for theft reports, the year, make and model, and open safety recalls. Then compare the VIN and the name on the title with the seller's photo ID before you pay.",
 },
 {
 q: 'How do I check if a gun is stolen?',
 a: "Enter the serial number at safeorstolen.com/firearms-check. SafeOrStolen searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and its own theft reports, and flags serials that look altered. The public can't search the FBI's NCIC file, so ask your local police whether they will run the serial too.",
 },
 {
 q: 'Can I check a Facebook Marketplace listing?',
 a: "Yes. Paste the listing link into SafeOrStolen and it pulls out any serial number, IMEI or VIN it can find, then checks it the same way as a typed number. Most listings don't show the serial, so ask the seller for a photo of it before you meet.",
 },
 {
 q: 'What does SafeOrStolen search?',
 a: "Every check searches SafeOrStolen's own theft reports and public web results. Guns are also checked against police theft and loss reports from 33 states and Washington, DC and live Ohio records, bikes against a national stolen-bicycle registry, Arizona plates and VINs against Arizona police stolen-vehicle records, and phones can get a paid lost-and-stolen blacklist check. Each result lists exactly what was searched.",
 },
 {
 q: 'How much does SafeOrStolen cost?',
 a: 'Your first 2 checks are free with a free account and no credit card. After that it is $0.99 for a single check, or $10 a month for unlimited checks (including up to 20 phone blacklist checks a month), with a 30-day refund on the monthly plan.',
 },
 {
 q: 'Can a license plate lookup tell me who owns a car?',
 a: "No. Owner names and addresses are protected by the federal Driver's Privacy Protection Act, and SafeOrStolen never shows them. A plate check on SafeOrStolen tells you whether the plate is reported stolen. For a hit-and-run or an abandoned car, give the plate to the police, who can identify the owner.",
 },
 {
 q: 'Can I show a buyer that my item checked clean?',
 a: "Yes. After a check you can get a $1.99 verification certificate: a dated record with its own link that shows what you checked, when, and what the check found. It isn't proof an item was never stolen, but it shows you checked before the sale. Monthly members get certificates free.",
 },
 {
 q: 'What should I do if an item comes back stolen?',
 a: "Don't buy it and don't confront the seller. Leave if you're meeting in person, report the listing to the marketplace, and give the listing and the check result to your local police on their non-emergency line.",
 },
 {
 q: 'Does SafeOrStolen work for pawn shops and dealers?',
 a: "Yes. The $10 monthly plan includes unlimited checks, and the bulk check at safeorstolen.com/bulk-check lets you paste up to 100 serial numbers, IMEIs or VINs or upload a spreadsheet, then download a dated results file for your records.",
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
 title="SafeOrStolen: Free Stolen Item Checker for Phones, Cars, Guns and Serial Numbers"
 description="Check if something is stolen before you buy it. Free IMEI, VIN, license plate, gun serial and serial number checks with every source listed. 2 free checks, no card."
 keywords="stolen item checker, check if something is stolen, free serial number search, imei check free, vin check stolen, gun serial number lookup free, stolen bike check, license plate lookup"
 canonical="/"
 />
 <CompetitorTargetingSEO />

 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
 <h1>Check if something is stolen before you buy it</h1>
 <p>SafeOrStolen checks whether a used item is reported stolen. Type a phone's IMEI, a car's VIN, a license plate, a gun's serial number, a bike's frame serial or any other serial number, and in a few seconds you see whether it is reported stolen, a possible match, or not found in the records searched, with every source listed.</p>
 <p>Every check searches SafeOrStolen's own theft reports and public web results. Guns are also checked against 242,839 police firearm theft and loss reports from 33 states and Washington, DC and live Ohio law-enforcement records, bikes against a national stolen-bicycle registry, and Arizona plates and VINs against Arizona police stolen-vehicle records. Your first 2 checks are free; then $0.99 a check or $10 a month for unlimited checks.</p>
 </div>
 </noscript>
 {/* ── STICKY TOP DOWNLOAD APP BANNER ─────────────────────── */}
 <DownloadAppBanner />

 {/* ── AI CHAT HERO ──────────────────────────── */}
 <HomeAIHero />

 {/* ── STATS BAR ───────────────────────────────────── */}
 <div className="bg-card border-y border-border">
 <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
 {[
  { v: 'Seconds', l: 'To get a result' },
  { v: '6', l: 'Kinds of items' },
  { v: 'Listed', l: 'Every source searched' },
 { v: '2', l: 'Free Checks to Start' },
 ].map((s) => (
 <div key={s.l} className="text-center py-5 px-4">
 <div className="text-2xl font-black text-primary">{s.v}</div>
 <div className="text-muted-foreground text-xs mt-1">{s.l}</div>
 </div>
 ))}
 </div>
 </div>

 {/* ── SOFT VALUE STRIP — trust-led pricing reminder ── */}
 <section data-tour="free-checks" className="py-10 px-4 bg-gradient-to-b from-background to-muted/20 border-b border-border">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
 <Shield className="w-3.5 h-3.5" /> Simple, honest pricing
 </div>
 <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
 <span className="text-primary">Check for free</span>. No credit card.
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-sm sm:text-base leading-relaxed">
 Need just one verification? Pay <strong className="text-foreground">$0.99</strong> with a free account.
 Verifying often? Get <strong className="text-foreground">$10/month unlimited</strong> with the seller badge,
 installable web app, and verification certificates included. Cancel anytime, 30-day refund.
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
 What do you want to check?
 </h2>
 <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
 Pick the kind of item. Each check searches every source that applies to it at the same time
 and lists them in the result.
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

 {/* ── SAMPLE RESULT PREVIEW (shows value before signup) ─── */}
 <SampleResultPreview />

 {/* ── HOW IT WORKS ────────────────────────────────── */}
 <section className="py-16 px-4" data-deploy-marker="deploy-probe-20260906">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-black text-foreground text-center mb-8">
 How a check works
 </h2>
 <figure className="mb-12">
 <div className="rounded-2xl overflow-hidden border border-border bg-card">
 <img
 src="/images/item-verified-result.jpg"
 alt="A person reviewing a SafeOrStolen 'Item Verified' result on a laptop and a phone at the same time, showing the item's serial number, brand, and product details with a View Details button"
 width={960}
 height={640}
 loading="lazy"
 decoding="async"
 className="w-full h-auto block"
 />
 </div>
 <figcaption className="text-center text-xs text-muted-foreground mt-3">
 A finished check on a laptop and a phone. You can share the result with the other person in the sale.
 </figcaption>
 </figure>
 <div className="grid md:grid-cols-3 gap-8">

 {[
 {
 n: '1',
 title: 'Enter the number',
 desc: "Type or scan the IMEI, VIN, serial number or license plate, or paste a Facebook Marketplace, OfferUp or Craigslist link and SafeOrStolen pulls out the number for you.",
 },
 {
 n: '2',
 title: 'Every source searched at once',
 desc: "SafeOrStolen theft reports and public web results on every check, plus police gun theft reports from 33 states and DC, live Ohio records, a national stolen-bike registry and Arizona stolen-vehicle records where they apply.",
 },
 {
 n: '3',
 title: 'Read the result',
 desc: "Reported stolen, possible match, or no report found, with each source listed. The check is saved to your account with the date, and you can add a $1.99 certificate to share.",
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

  {/* ── SHORT VIDEOS ───────────────────────────────── */}
  <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20 border-y border-border">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">See It In Action</div>
        <h2 className="text-3xl font-black text-foreground mb-3">
          Watch a check from start to finish
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A short video of a real check on a used item.
        </p>
      </div>

      <SafeOrStolenVideo caption="Checking a used item on SafeOrStolen before the sale." />

      <div className="flex justify-center mt-8">
        <Link
          to="/verify"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-2xl transition-all button-glow"
        >
          Run a free check →
        </Link>
      </div>
    </div>
  </section>

  {/* ── FOR SELLERS SECTION ─────────────────────────── */}
 <section className="py-16 px-4 bg-card">
 <div className="max-w-5xl mx-auto">
 <div className="text-center mb-10">
 <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">For Sellers</div>
 <h2 className="text-3xl font-black text-foreground mb-3">
 Show buyers you checked<br />before you listed it
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 More buyers ask whether an item is stolen before they pay. Check your item's serial number,
 then add the dated certificate link to your listing so the buyer can see what you checked and when.
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
 Check for Free →
 </Link>
 <Link
 to="/for-sellers"
 className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary text-foreground font-bold px-8 py-4 rounded-2xl transition-all hover:bg-primary/5"
 >
 More for sellers →
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
 Check every item at intake,<br />and keep the record
 </h2>
 <p className="text-muted-foreground mb-6 leading-relaxed">
 Many states require pawn shops and secondhand dealers to record serial numbers and report
 purchases to police. SafeOrStolen adds a stolen check at the counter: unlimited checks for one
 monthly price, a bulk check for up to 100 items at a time, and a dated record of every check.
 </p>
 <ul className="space-y-3 mb-8">
 {[
 'Unlimited checks for $10 a month',
 'Bulk check: paste or upload up to 100 items at once',
 'Download a dated results file for your records',
 'Every check saved to your account with the date',
 'Gun serials checked against police theft reports',
 'Certificates you can show a customer',
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
 More for pawn shops →
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
 'Unlimited checks',
 'Up to 20 phone blacklist checks a month',
 'Bulk check for up to 100 items',
 'Verification certificates included',
 'Every check saved with the date',
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

 {/* ── SHARE & REFERRAL SECTION ─────────────────── */}
 <ShareVerification />

 {/* ── DOWNLOAD APP STRIP ──────────────────────────── */}
 <section className="py-12 px-4 bg-card border-y border-border">
 <div className="max-w-3xl mx-auto text-center">
 <div className="text-4xl mb-4">📱</div>
 <h2 className="text-2xl font-black text-foreground mb-2">
 Check from your phone at the meetup</h2>
 <p className="text-muted-foreground text-sm mb-6">
 Install the free web app from your browser. Scan a barcode or type the number,
 at a garage sale, gun show, pawn shop or car lot.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/app"
 className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl transition-all button-glow"
 >
 Get the free web app
 </Link>
 <Link
 to="/app"
 className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-muted transition-all"
 >
 How to install it →
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
 See all questions →
 </Link>
 </div>
 </div>
 </section>

 {/* ── FINAL CTA ───────────────────────────────────── */}
 <section className="py-20 px-4 text-center" style={{ background: 'var(--gradient-hero)' }}>
 <div className="max-w-2xl mx-auto">
 <Lock className="w-12 h-12 text-primary mx-auto mb-5" />
 <h2 className="text-4xl font-black text-foreground mb-4">
 Check it before you pay
 </h2>
 <p className="text-muted-foreground mb-8 text-lg">
 If you buy something that turns out to be stolen, police can return it to the owner and you usually lose what you paid.
 It takes a few seconds, and your first 2 checks are free.
 </p>
 <Link
 to="/verify"
 className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-black px-10 py-5 rounded-2xl text-xl transition-all button-glow hover:scale-[1.02]"
 >
 <Shield className="w-6 h-6" />
 Run a free check
 </Link>
 <p className="text-muted-foreground/50 text-sm mt-4">
 2 free checks · No credit card · Every source listed
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
 "name": "SafeOrStolen: Free Stolen Item Checker",
 "url": "https://safeorstolen.com",
 "description": "Check whether a phone, car, license plate, gun, bike or any serial-numbered item is reported stolen before you buy it. Every result lists the sources searched.",
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
 "dateModified": "2026-10-07"
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
 "operatingSystem": "Web",
 "offers": [
 { "@type": "Offer", "name": "Free Tier", "price": "0", "priceCurrency": "USD", "description": "2 free verifications" },
 { "@type": "Offer", "name": "Unlimited", "price": "10.00", "priceCurrency": "USD", "description": "Unlimited verifications, all item types" }
 ],
 "dateModified": "2026-10-07"
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
 <ProductTour />
 </div>
 );
};

export default Index;
