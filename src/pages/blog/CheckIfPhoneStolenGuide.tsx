import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const FAQ_ITEMS = [
  { q: 'How do I check if a phone is stolen before buying it?', a: 'Get the IMEI number from the seller (dial *#06# on the phone or check Settings → About Phone). Enter it into SafeOrStolen\'s IMEI checker to cross-reference GSMA, carrier blacklists (AT&T, Verizon, T-Mobile), and law enforcement databases. Results appear in 3 seconds.' },
  { q: 'What is an IMEI number and where do I find it?', a: 'IMEI (International Mobile Equipment Identity) is a unique 15-digit number assigned to every mobile device. Find it by: (1) dialing *#06#, (2) checking Settings → About Phone → IMEI, (3) looking on the original box, or (4) checking the SIM tray on iPhones. Every phone has one, and it cannot be changed without illegal modification.' },
  { q: 'Can a stolen phone be used after a factory reset?', a: 'A factory reset does NOT clear a stolen phone\'s status. The IMEI remains blacklisted across all carriers regardless of resets. iPhones have Activation Lock tied to the Apple ID, and Android phones have Factory Reset Protection (FRP) — both prevent use without the original owner\'s credentials.' },
  { q: 'What does a blacklisted IMEI mean?', a: 'A blacklisted IMEI means the phone was reported as stolen, lost, or has an unpaid financial balance with a carrier. Blacklisted phones cannot be activated on major U.S. carriers (AT&T, Verizon, T-Mobile). The GSMA maintains a global blacklist shared across 200+ carriers in 50+ countries.' },
  { q: 'Is it illegal to buy a stolen phone?', a: 'Yes. In most U.S. states, receiving stolen property is a criminal offense even if you didn\'t know it was stolen. Under federal law (18 U.S.C. § 2315), knowingly receiving stolen goods worth $5,000+ carries up to 10 years in prison. Law enforcement will seize the phone with no compensation to you.' },
  { q: 'How much does it cost to check if a phone is stolen?', a: 'SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited. This is significantly cheaper than CheckMEND (£1.99+/check) and more comprehensive than free-only tools like IMEI.info.' },
  { q: 'Can I check if an iPhone is stolen without the IMEI?', a: 'Yes, partially. Check for Activation Lock by going to Settings → [Name] → Find My → Find My iPhone. If it\'s locked to another Apple ID, the phone may be stolen. However, a full IMEI check against law enforcement databases is the only way to definitively verify theft status.' },
  { q: 'What should I do if I discover my phone was stolen?', a: 'Report it immediately to: (1) your carrier to blacklist the IMEI, (2) local police with the IMEI and serial number, (3) your insurance company if applicable, (4) SafeOrStolen\'s stolen database to alert future buyers. File a police report within 48 hours for best recovery chances.' },
];

const CheckIfPhoneStolenGuide = () => {
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Check If a Phone Is Stolen Before Buying (2026 Complete Guide)",
      "description": "Step-by-step guide to verify any phone isn't stolen using IMEI checks. Covers iPhone, Samsung, Android — check against GSMA, carrier blacklists, and law enforcement databases.",
      "author": { "@type": "Person", "name": "Samuel Pfeiffer" },
      "publisher": { "@type": "Organization", "name": "SafeOrStolen", "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" } },
      "datePublished": "2026-03-02",
      "dateModified": "2026-03-02",
      "mainEntityOfPage": "https://safeorstolen.com/blog/check-if-phone-stolen-guide"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check If a Phone Is Stolen",
      "totalTime": "PT1M",
      "step": [
        { "@type": "HowToStep", "name": "Get the IMEI", "text": "Ask the seller to dial *#06# on the phone or check Settings → About Phone → IMEI. Write down the 15-digit number." },
        { "@type": "HowToStep", "name": "Run an IMEI check", "text": "Go to safeorstolen.com/verify and enter the IMEI number. The system checks GSMA, carrier blacklists, and law enforcement databases simultaneously." },
        { "@type": "HowToStep", "name": "Review the results", "text": "Within 3 seconds, you'll see a Trust Score (0-100) and detailed source-level breakdown. CLEAN means safe to buy. FLAGGED means stolen, blacklisted, or suspicious." },
        { "@type": "HowToStep", "name": "Check Activation Lock (iPhone)", "text": "For iPhones, also verify that Find My iPhone is turned off and the phone isn't locked to another Apple ID." },
        { "@type": "HowToStep", "name": "Save your proof", "text": "Download the PDF verification certificate for your records. This serves as documented due diligence if the item's status is ever questioned." }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://safeorstolen.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Check If Phone Stolen Guide", "item": "https://safeorstolen.com/blog/check-if-phone-stolen-guide" }
      ]
    }
  ];

  return (
    <>
    <TopNavigation />
    <div className="min-h-screen bg-background text-foreground pt-20">
      <SEOHead
        title="How to Check If a Phone Is Stolen (2026 Guide) | SafeOrStolen"
        description="Free IMEI check guide: verify if any phone is stolen before buying. Check iPhone, Samsung, Android against GSMA blacklist and 100+ law enforcement databases in 3 seconds."
        canonical="/blog/check-if-phone-stolen-guide"
        keywords="check if phone stolen, IMEI check free, how to tell if phone is stolen, stolen phone checker, blacklisted IMEI check, is my phone stolen"
        ogType="article"
        publishedTime="2026-03-02"
        modifiedTime="2026-03-02"
        schemaJson={schemaJson}
      />

      <article className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Check If Phone Stolen Guide</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
          How to Check If a Phone Is Stolen Before Buying: Complete 2026 Guide
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
          <span>By Samuel Pfeiffer</span>
          <span>•</span>
          <time dateTime="2026-03-02">March 2, 2026</time>
          <span>•</span>
          <span>10 min read</span>
        </div>

        <BlogHeroImage src={blogImages.phoneStolen} alt="Person holding smartphone showing IMEI number with magnifying glass - how to check if a phone is stolen" />

        <div className="speakable-summary bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-10">
          <p className="text-foreground font-semibold text-lg leading-relaxed">
            Every year, over 3.1 million smartphones are stolen in the United States (Pew Research). When these phones are resold on Facebook Marketplace, OfferUp, or Craigslist, the buyer gets stuck with a blacklisted device and potential criminal charges. Here's exactly how to check if any phone is stolen before you hand over your money — using a free IMEI check that takes 3 seconds.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mb-10 text-center">
          <p className="text-foreground font-bold text-lg mb-3">Got an IMEI number? Check it now.</p>
          <p className="text-muted-foreground mb-4">Free. No signup. Results in 3 seconds.</p>
          <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all">
            Check IMEI Now — Free →
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">What Is an IMEI Number and Why Does It Matter?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Every mobile phone manufactured since 2004 has a unique 15-digit IMEI (International Mobile Equipment Identity) number — think of it as the phone's fingerprint. This number is permanently embedded in the device's hardware and is used by carriers worldwide to identify, track, and blacklist devices. When a phone is reported stolen, the carrier adds its IMEI to the GSMA Device Registry — a global blacklist shared across 200+ carriers in 50+ countries. A blacklisted phone cannot be activated on any major carrier network.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is exactly why checking the IMEI before buying a used phone is the single most important step you can take. Without this check, you could end up with a $1,000+ device that's essentially a paperweight — unable to make calls, send texts, or use cellular data on any major network.
          </p>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">How to Find the IMEI Number on Any Phone</h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-foreground font-bold mb-3">📱 iPhone</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Dial <code className="bg-muted px-1.5 py-0.5 rounded text-xs">*#06#</code></li>
                <li>• Settings → General → About → IMEI</li>
                <li>• Printed on the SIM tray</li>
                <li>• On the original box barcode</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-foreground font-bold mb-3">🤖 Android (Samsung, Pixel, etc.)</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Dial <code className="bg-muted px-1.5 py-0.5 rounded text-xs">*#06#</code></li>
                <li>• Settings → About Phone → IMEI</li>
                <li>• Under the battery (older models)</li>
                <li>• On the original box</li>
              </ul>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 mb-8">
            <h3 className="text-destructive font-bold mb-2">⚠️ Warning: If the seller refuses to share the IMEI</h3>
            <p className="text-muted-foreground text-sm">This is the single biggest red flag when buying a used phone. An honest seller has nothing to hide. If they won't let you check the IMEI, walk away immediately — the phone is almost certainly stolen, blacklisted, or has an unpaid carrier balance.</p>
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">Step-by-Step: How to Check If a Phone Is Stolen</h2>
          
          <div className="space-y-6 mb-8">
            {[
              { step: 1, title: 'Get the IMEI from the seller', desc: 'Before you meet up or commit to buying, ask the seller for the IMEI number. If they claim they don\'t know what that is, tell them to dial *#06# — it will display on screen instantly. If they refuse, end the conversation.' },
              { step: 2, title: 'Run the IMEI through SafeOrStolen', desc: 'Go to safeorstolen.com/verify and enter the 15-digit IMEI. Our system simultaneously queries the GSMA Device Registry, all major U.S. carrier blacklists (AT&T, Verizon, T-Mobile, Sprint), stolen property reports from all 50 states, and state law enforcement records from all 50 states.' },
              { step: 3, title: 'Review the Trust Score', desc: 'Within 3 seconds, you\'ll receive a Trust Score from 0 to 100 with a detailed breakdown showing exactly which databases returned results. A score of 80+ with no flags means the phone is safe to buy. Any stolen, blacklisted, or financed flags should be dealbreakers.' },
              { step: 4, title: 'Check Activation Lock (iPhone only)', desc: 'For iPhones, go to Settings → [Name] → Find My → Find My iPhone. If Find My is enabled and locked to another Apple ID, the phone cannot be reset or used without the original owner\'s password. This is separate from the IMEI check and equally critical.' },
              { step: 5, title: 'Download the verification certificate', desc: 'Save the PDF certificate as proof of due diligence. If the item is ever questioned by law enforcement, this certificate demonstrates you took reasonable steps to verify it wasn\'t stolen — protecting you legally.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary font-black flex items-center justify-center flex-shrink-0 mt-1">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-foreground font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">What a Stolen Phone IMEI Check Reveals</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A comprehensive IMEI check through SafeOrStolen returns data from multiple independent sources. Here's what each check tells you:
          </p>

          <div className="space-y-3 mb-8">
            {[
              { source: 'GSMA Device Registry', what: 'Global blacklist status — if flagged, the phone is reported stolen/lost internationally and won\'t work on any carrier in 50+ countries' },
              { source: 'Carrier Blacklists', what: 'AT&T, Verizon, T-Mobile, Sprint records — checks for unpaid balances, insurance claims, and theft reports filed directly with the carrier' },
              { source: 'Stolen property reports from all 50 states', what: 'National Crime Information Center — the FBI\'s central database of stolen property reported by law enforcement agencies nationwide' },
              { source: 'State Law Enforcement', what: 'Records from all 50 state police databases — catches stolen phones reported to local police departments' },
              { source: 'Insurance Claims', what: 'Checks if an insurance claim was filed for the device — phones with insurance claims are often still blacklisted even if the owner was paid out' },
            ].map(item => (
              <div key={item.source} className="bg-card border border-border rounded-xl p-4">
                <span className="text-primary font-bold text-sm">{item.source}</span>
                <p className="text-muted-foreground text-sm mt-1">{item.what}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">The Most Stolen Phone Models in 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            According to law enforcement data and SafeOrStolen's own verification statistics, these are the most commonly stolen phones in 2026, ranked by theft volume:
          </p>
          <ol className="space-y-2 mb-8 text-muted-foreground">
            <li><strong className="text-foreground">1. iPhone 15 Pro Max</strong> — $1,199 retail, highest resale value of any smartphone</li>
            <li><strong className="text-foreground">2. iPhone 16 Pro</strong> — New model, extreme demand in secondary market</li>
            <li><strong className="text-foreground">3. Samsung Galaxy S24 Ultra</strong> — $1,299 retail, popular Android theft target</li>
            <li><strong className="text-foreground">4. iPhone 14 Pro</strong> — Still high value at $800+ used</li>
            <li><strong className="text-foreground">5. Samsung Galaxy Z Fold 5</strong> — $1,799 retail, easily pawned</li>
            <li><strong className="text-foreground">6. Google Pixel 8 Pro</strong> — Growing theft target as market share increases</li>
            <li><strong className="text-foreground">7. iPhone 15</strong> — Volume model, most common phone on marketplaces</li>
            <li><strong className="text-foreground">8. Samsung Galaxy S23</strong> — Previous gen but still $500+ used</li>
          </ol>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">Where Stolen Phones Are Sold in 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Understanding where stolen phones end up helps you stay vigilant:
          </p>
          <ul className="space-y-2 mb-8 text-muted-foreground">
            <li>• <strong className="text-foreground">Facebook Marketplace</strong> — #1 platform for stolen phone resale (minimal seller verification)</li>
            <li>• <strong className="text-foreground">OfferUp</strong> — Quick local meetups make it easy for thieves to cash out</li>
            <li>• <strong className="text-foreground">Craigslist</strong> — Anonymous listings, cash-only deals</li>
            <li>• <strong className="text-foreground">Pawn shops</strong> — Some don't verify against stolen databases (though most states legally require it)</li>
            <li>• <strong className="text-foreground">International resale</strong> — Phones shipped overseas where U.S. blacklists may not be enforced</li>
          </ul>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">SafeOrStolen: The Best IMEI Checker</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            While there are several IMEI checkers available online, SafeOrStolen is the most comprehensive option for U.S. buyers. Unlike IMEI.info (which only checks basic device info) or CheckMEND (UK-focused, £1.99+ per check), SafeOrStolen queries 100+ databases simultaneously — including law enforcement records that consumer-grade tools don't access. $0.99/check or $10/month unlimited, and the results include a downloadable PDF certificate for legal protection.
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl font-black text-foreground mb-3">Check Any Phone in 3 Seconds</h2>
            <p className="text-muted-foreground mb-6">IMEI, serial number, or just paste the marketplace listing URL — we'll handle the rest.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all">
                Check IMEI Now — Free →
              </Link>
              <Link to="/app" className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-all">
                📱 Get the Mobile App
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-black text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="border border-border rounded-xl bg-card">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-foreground font-semibold text-sm hover:text-primary transition-colors list-none">
                  {item.q}
                  <span className="text-muted-foreground ml-4 flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-bold text-foreground mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/blog/facebook-marketplace-scams-guide" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">Facebook Marketplace Scams</h3>
              <p className="text-muted-foreground text-xs">12 red flags to watch for when buying on Marketplace</p>
            </Link>
            <Link to="/blog/complete-imei-guide-protect-yourself" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">Complete IMEI Guide</h3>
              <p className="text-muted-foreground text-xs">Everything you need to know about IMEI numbers</p>
            </Link>
            <Link to="/imei-checker" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">IMEI Checker Tool</h3>
              <p className="text-muted-foreground text-xs">Run a free IMEI check right now</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
    <Footer />
    </>
  );
};

export default CheckIfPhoneStolenGuide;
