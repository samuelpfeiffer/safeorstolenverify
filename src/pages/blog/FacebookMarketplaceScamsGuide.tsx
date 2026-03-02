import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';

const FAQ_ITEMS = [
  { q: 'What is the most common Facebook Marketplace scam in 2026?', a: 'The most common scam is selling stolen electronics — particularly iPhones, laptops, and gaming consoles — at below-market prices. Scammers list items they don\'t own or that are blacklisted, pocket the cash, and disappear. In 2025, the FBI IC3 reported over $1.2 billion in losses from online marketplace fraud.' },
  { q: 'How can I tell if a Facebook Marketplace listing is a scam?', a: 'Red flags include: price 30%+ below market value, new seller account with no history, refusal to meet in a public place, pressure to pay via Zelle/Venmo/Cash App (no buyer protection), blurry or stock photos, and unwillingness to let you inspect or verify the item before purchase.' },
  { q: 'Can I check if a phone listed on Facebook Marketplace is stolen?', a: 'Yes. Ask the seller for the IMEI number (dial *#06# on the phone). Then use SafeOrStolen to check it against GSMA, carrier blacklists (AT&T, Verizon, T-Mobile), and law enforcement databases. A blacklisted IMEI means the phone was reported stolen or has an unpaid balance — either way, it will be unusable on major carriers.' },
  { q: 'What happens if I accidentally buy a stolen item on Facebook Marketplace?', a: 'If law enforcement identifies the item as stolen, they will seize it — and you receive zero compensation. In most U.S. states, possessing stolen property (even unknowingly) can result in misdemeanor charges. Under 18 U.S.C. § 2315, knowingly receiving stolen goods worth $5,000+ is a federal offense carrying up to 10 years in prison.' },
  { q: 'Does Facebook Marketplace have buyer protection?', a: 'Facebook offers limited Purchase Protection only for items bought with checkout on Facebook (not local pickup cash deals). Most person-to-person transactions have zero protection. If you pay with Zelle, Venmo, or cash, there is no recourse if the item is stolen or defective.' },
  { q: 'How do I verify a car listed on Facebook Marketplace?', a: 'Ask for the VIN (Vehicle Identification Number) — visible on the dashboard through the windshield or on the driver\'s door jamb. Run it through SafeOrStolen to check against NICB theft records, NHTSA recalls, and all 50 state DMV databases. Never buy a car without a VIN check.' },
  { q: 'What should I do if I suspect a Facebook Marketplace listing is selling stolen goods?', a: 'Do not confront the seller. Report the listing to Facebook using the "Report" button. If you have evidence (like a flagged IMEI or VIN), file a report with your local police department and include the SafeOrStolen verification result as documentation.' },
  { q: 'Are Facebook Marketplace scams increasing in 2026?', a: 'Yes. According to the FTC, online marketplace fraud increased 180% between 2022 and 2025, with Facebook Marketplace being the #1 platform for stolen goods resale due to its massive user base (over 1 billion monthly users) and minimal seller verification requirements.' },
];

const FacebookMarketplaceScamsGuide = () => {
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Facebook Marketplace Scams: 12 Red Flags & How to Protect Yourself (2026)",
      "description": "Complete guide to identifying and avoiding Facebook Marketplace scams in 2026. Learn 12 red flags, how to verify items aren't stolen, and protect yourself from fraud.",
      "author": { "@type": "Person", "name": "Samuel Pfeiffer" },
      "publisher": { "@type": "Organization", "name": "SafeOrStolen LLC", "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" } },
      "datePublished": "2026-03-02",
      "dateModified": "2026-03-02",
      "mainEntityOfPage": "https://safeorstolen.com/blog/facebook-marketplace-scams-guide"
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
      "name": "How to Avoid Facebook Marketplace Scams",
      "step": [
        { "@type": "HowToStep", "name": "Check the seller profile", "text": "Review seller's account age, ratings, and transaction history. New accounts with no reviews are high-risk." },
        { "@type": "HowToStep", "name": "Verify the item", "text": "Get the IMEI, VIN, or serial number and run it through SafeOrStolen before meeting the seller." },
        { "@type": "HowToStep", "name": "Meet in public", "text": "Always meet at a police station parking lot or other safe public location. Never go to a private address." },
        { "@type": "HowToStep", "name": "Use protected payment", "text": "Never pay with Zelle, Venmo, or wire transfer. Use Facebook checkout or PayPal Goods & Services for buyer protection." },
        { "@type": "HowToStep", "name": "Inspect before paying", "text": "Physically inspect the item, check for damage, verify serial numbers match the listing, and test functionality before handing over money." }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://safeorstolen.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Facebook Marketplace Scams Guide", "item": "https://safeorstolen.com/blog/facebook-marketplace-scams-guide" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Facebook Marketplace Scams: 12 Red Flags (2026 Guide) | SafeOrStolen"
        description="Avoid Facebook Marketplace scams with this 2026 guide. Learn 12 red flags for stolen goods, how to verify IMEI/VIN before buying, and protect yourself from fraud."
        canonical="/blog/facebook-marketplace-scams-guide"
        keywords="facebook marketplace scams, facebook marketplace stolen goods, how to avoid scams on facebook marketplace, facebook marketplace red flags, buying stolen phone facebook"
        ogType="article"
        publishedTime="2026-03-02"
        modifiedTime="2026-03-02"
        schemaJson={schemaJson}
      />

      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Facebook Marketplace Scams Guide</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
          Facebook Marketplace Scams: 12 Red Flags & How to Protect Yourself in 2026
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
          <span>By Samuel Pfeiffer</span>
          <span>•</span>
          <time dateTime="2026-03-02">March 2, 2026</time>
          <span>•</span>
          <span>12 min read</span>
        </div>

        {/* Speakable summary */}
        <div className="speakable-summary bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-10">
          <p className="text-foreground font-semibold text-lg leading-relaxed">
            Over $1.2 billion was lost to online marketplace fraud in 2025 (FBI IC3). Facebook Marketplace — with 1 billion monthly users — is the #1 platform for reselling stolen goods. This guide shows you exactly how to spot scams, verify items before buying, and protect yourself from purchasing stolen property.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-10 text-center">
          <p className="text-foreground font-bold text-lg mb-3">Found something on Facebook Marketplace?</p>
          <p className="text-muted-foreground mb-4">Verify it's not stolen in 3 seconds — free, no signup required.</p>
          <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all">
            Verify Now — Free →
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">Why Facebook Marketplace Is a Hotbed for Stolen Goods</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Facebook Marketplace has become the largest peer-to-peer selling platform in the United States, surpassing Craigslist, OfferUp, and Letgo combined. With over 1 billion monthly active users and minimal seller verification requirements, it's also become the preferred channel for offloading stolen property. Unlike eBay (which requires seller ID verification and offers robust buyer protection) or StockX (which authenticates items), Facebook Marketplace allows anyone to list anything with just a Facebook account — no identity verification, no item authentication, and no mandatory serial number disclosure.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            According to the Federal Trade Commission (FTC), reports of online marketplace fraud increased 180% between 2022 and 2025. The National Insurance Crime Bureau (NICB) estimates that approximately 15% of used electronics sold on Facebook Marketplace have some form of theft history — whether outright stolen, obtained through insurance fraud, or purchased with stolen credit cards.
          </p>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">The 12 Red Flags: How to Spot a Facebook Marketplace Scam</h2>

          {[
            { n: 1, title: 'Price 30%+ Below Market Value', desc: 'If a $1,200 iPhone 16 Pro Max is listed for $500, that\'s not a "great deal" — it\'s likely stolen. Thieves need to move merchandise fast and price accordingly. Check current retail prices on Apple.com, Amazon, or Swappa before assuming any deal is legitimate.' },
            { n: 2, title: 'Brand New Seller Account', desc: 'An account created days or weeks ago with zero ratings, no profile photo, and no transaction history is a major red flag. Legitimate sellers have months or years of marketplace activity. Check the "Joined" date on their profile.' },
            { n: 3, title: 'Refuses to Meet in a Public Place', desc: 'A seller who insists you come to their house, a dark parking lot, or an unfamiliar location may be setting up a robbery or avoiding surveillance cameras. Always insist on a police station lobby, bank lobby, or well-lit public space.' },
            { n: 4, title: 'Payment via Zelle, Venmo, or Wire Transfer Only', desc: 'These payment methods offer zero buyer protection. Once sent, the money is gone. Scammers prefer them because transactions cannot be reversed. Legitimate sellers accept Facebook checkout, PayPal Goods & Services, or cash at meetup.' },
            { n: 5, title: 'Won\'t Let You Inspect the Item', desc: 'If a seller refuses to let you power on a phone, start a car, or physically inspect an item before paying, walk away immediately. Stolen items often have activation locks, blacklisted IMEIs, or hidden damage that inspection would reveal.' },
            { n: 6, title: 'Stock Photos or Blurry Images', desc: 'Real sellers photograph their actual items. If the listing uses manufacturer stock photos, images clearly copied from other listings, or deliberately blurry photos that hide details, the seller may not possess the item at all.' },
            { n: 7, title: 'No Original Packaging or Receipt', desc: 'While not always suspicious on its own, the absence of original packaging, receipts, or proof of purchase combined with other red flags significantly increases the likelihood of stolen goods.' },
            { n: 8, title: 'Pressure to Buy Immediately', desc: '"I have 10 other people interested" or "This will be gone in an hour" are classic pressure tactics designed to prevent you from doing due diligence. Take your time. No legitimate deal requires instant decisions.' },
            { n: 9, title: 'Refuses to Share IMEI/VIN/Serial Number', desc: 'This is the single biggest red flag. If a seller won\'t provide the IMEI (phones), VIN (vehicles), or serial number (electronics), they almost certainly know the item will come back flagged. Any honest seller will happily share this information.' },
            { n: 10, title: 'Multiple Identical Listings', desc: 'A seller listing 5 "brand new" iPhone 16s simultaneously is not a regular person clearing out old tech. This pattern suggests organized theft rings or receipt fraud operations.' },
            { n: 11, title: 'Ships From a Different Location', desc: 'If the seller\'s profile says Phoenix but they want to ship from Miami, the item may not exist, or it may be shipping from a fencing operation in another state.' },
            { n: 12, title: 'Sob Story or Emotional Manipulation', desc: '"Selling because of a divorce," "need rent money by tonight," or "my kid is sick" — while sometimes legitimate, these stories are commonly used to bypass your rational judgment and prevent verification.' },
          ].map((flag) => (
            <div key={flag.n} className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {flag.n}. {flag.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{flag.desc}</p>
            </div>
          ))}

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">How to Verify Any Item Before Buying on Facebook Marketplace</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The single most effective protection against buying stolen goods is running the item's identifier through a verification database before you pay. SafeOrStolen checks IMEI numbers, VINs, serial numbers, and license plates against 100+ law enforcement and insurance databases simultaneously — including FBI NCIC, GSMA Device Registry, NICB, carrier blacklists (AT&T, Verizon, T-Mobile), and all 50 state law enforcement systems.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Step-by-Step: Verify a Phone from Facebook Marketplace</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">1.</strong> Ask the seller for the IMEI number (they can find it by dialing *#06# or in Settings → About Phone)</li>
              <li><strong className="text-foreground">2.</strong> Go to <Link to="/verify" className="text-primary hover:underline">safeorstolen.com/verify</Link> and enter the IMEI</li>
              <li><strong className="text-foreground">3.</strong> Wait 3 seconds for results from GSMA, carrier blacklists, and law enforcement databases</li>
              <li><strong className="text-foreground">4.</strong> If CLEAN → safe to proceed with the purchase (download the certificate for your records)</li>
              <li><strong className="text-foreground">5.</strong> If FLAGGED → do not buy. Report the listing to Facebook and local police.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">The Legal Consequences of Buying Stolen Goods</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Many buyers assume that if they didn't know an item was stolen, they're legally in the clear. This is a dangerous misconception. Under most state laws, "receiving stolen property" can be charged even without proof of knowledge — prosecutors only need to show that a "reasonable person" would have known the deal was suspicious (e.g., buying a $1,200 phone for $300 from a stranger in a parking lot).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At the federal level, knowingly receiving stolen goods valued at $5,000 or more is a felony under <strong>18 U.S.C. § 2315</strong>, carrying up to 10 years in prison. For firearms specifically, <strong>18 U.S.C. § 922(j)</strong> makes possession of a stolen firearm a federal felony regardless of value — and ignorance is not a defense if the serial number was removed or altered.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Perhaps most importantly: if law enforcement identifies an item in your possession as stolen, <strong>they will seize it immediately</strong> — and you receive zero compensation. The item goes back to the original owner or into evidence. The money you paid is gone.
          </p>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">What Categories Are Most Commonly Stolen on Facebook Marketplace?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { cat: 'Smartphones', pct: '34%', detail: 'iPhones account for 72% of stolen phones resold online' },
              { cat: 'Laptops & Tablets', pct: '22%', detail: 'MacBooks, iPads, and Surface devices are primary targets' },
              { cat: 'Vehicles', pct: '18%', detail: 'VIN cloning makes stolen cars harder to detect without a check' },
              { cat: 'Gaming Consoles', pct: '11%', detail: 'PS5, Xbox Series X, and Nintendo Switch top the list' },
              { cat: 'Power Tools', pct: '8%', detail: 'DeWalt, Milwaukee, Makita — high resale value, easy to steal' },
              { cat: 'Bicycles', pct: '7%', detail: 'E-bikes and high-end road bikes are increasingly targeted' },
            ].map(item => (
              <div key={item.cat} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-bold">{item.cat}</span>
                  <span className="text-primary font-black">{item.pct}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">SafeOrStolen: Your Defense Against Marketplace Fraud</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SafeOrStolen is the only verification platform that checks phones, cars, electronics, firearms, bicycles, and more — all in one place. Unlike CheckMEND (which charges £1.99+ per check and is UK-focused) or IMEI.info (which only checks phones), SafeOrStolen offers 2 free verifications with no credit card, results in 3 seconds, and works across every item category. It's also the only verification service with a mobile app — so you can scan barcodes and verify items on the spot at meetups.
          </p>

          {/* Final CTA */}
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl font-black text-foreground mb-3">Don't Buy Stolen Goods. Verify First.</h2>
            <p className="text-muted-foreground mb-6">2 free checks. No credit card. Results in 3 seconds.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all">
                Verify Now — Free →
              </Link>
              <Link to="/app" className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-all">
                📱 Download Mobile App
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-black text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="border border-border rounded-xl bg-card">
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
        </section>

        {/* Related articles */}
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-bold text-foreground mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/blog/how-to-sell-verified-items" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">How to Sell Verified Items</h3>
              <p className="text-muted-foreground text-xs">Prove your items are legitimate and sell faster</p>
            </Link>
            <Link to="/blog/scammer-tactics-exposed" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">Scammer Tactics Exposed</h3>
              <p className="text-muted-foreground text-xs">The latest tricks scammers use to sell stolen goods</p>
            </Link>
            <Link to="/blog/verify-item-before-meetup" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">Verify Before Meetup</h3>
              <p className="text-muted-foreground text-xs">Complete checklist for safe marketplace transactions</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default FacebookMarketplaceScamsGuide;
