import { Link } from '@/lib/router-compat';
import { SEOHead } from '@/components/seo/SEOHead';

const FAQ_ITEMS = [
  { q: 'What is the most common Facebook Marketplace scam in 2026?', a: 'The most common scam is selling stolen electronics — particularly iPhones, laptops, and gaming consoles — at below-market prices. Scammers list items they don\'t own or that are blacklisted, pocket the cash, and disappear. The other big one is the deposit scam: the seller asks you to send money to "hold" an item that never shows up.' },
  { q: 'How can I tell if a Facebook Marketplace listing is a scam?', a: 'Red flags include: a price far below what the same item sells for used, new seller account with no history, refusal to meet in a public place, pressure to pay via Zelle/Venmo/Cash App (no buyer protection), blurry or stock photos, and unwillingness to let you inspect or verify the item before purchase.' },
  { q: 'Can I check if a phone listed on Facebook Marketplace is stolen?', a: 'Yes. Ask the seller for the IMEI number (dial *#06# on the phone). Then check it on SafeOrStolen, which shows the make and model from the IMEI and searches its own theft reports and public web results. A carrier blacklist check is available as a paid check. A phone with a reported stolen IMEI is often added to a carrier blacklist, making it unusable on major carriers. You can also ask the seller which carrier the phone was originally activated with, and contact that carrier to verify its status.' },
  { q: 'What happens if I accidentally buy a stolen item on Facebook Marketplace?', a: 'If law enforcement identifies the item as stolen, they can take it back for its owner, and the money you paid is usually gone unless you can recover it from the seller. Buying something you had no reason to think was stolen is generally not a crime, but a deal that looks too good to be true can be used as evidence that you should have known. Keep the listing, messages and payment record.' },
  { q: 'Does Facebook Marketplace have buyer protection?', a: 'Facebook offers limited Purchase Protection only for items bought with checkout on Facebook (not local pickup cash deals). Most person-to-person transactions have zero protection. If you pay with Zelle, Venmo, or cash, there is no recourse if the item is stolen or defective.' },
  { q: 'How do I verify a car listed on Facebook Marketplace?', a: 'Ask for the VIN (Vehicle Identification Number) — visible on the dashboard through the windshield or on the driver\'s door jamb. Run it through SafeOrStolen to decode the year, make and model, see open safety recalls, and check SafeOrStolen\'s theft reports and public web results (Arizona VINs are also checked against Arizona law-enforcement stolen-vehicle records). Never buy a car without a VIN check.' },
  { q: 'What should I do if I suspect a Facebook Marketplace listing is selling stolen goods?', a: 'Do not confront the seller. Report the listing to Facebook using the "Report" button. If you have evidence (like a flagged IMEI or VIN), file a report with your local police department and include the SafeOrStolen verification result as documentation.' },
  { q: 'Are Facebook Marketplace scams increasing in 2026?', a: 'Marketplace scams remain common because anyone with a Facebook account can list an item, with no identity check and no serial number required. That makes it easy to resell stolen goods, so check the serial, IMEI or VIN before you pay.' },
];

const FacebookMarketplaceScamsGuide = () => {
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Facebook Marketplace Scams: 12 Red Flags & How to Protect Yourself (2026)",
      "description": "Complete guide to identifying and avoiding Facebook Marketplace scams in 2026. Learn 12 red flags, how to verify items aren't stolen, and protect yourself from fraud.",
      "author": { "@type": "Person", "name": "Samuel Pfeiffer" },
      "publisher": { "@type": "Organization", "name": "SafeOrStolen", "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" } },
      "datePublished": "2026-03-02",
      "dateModified": "2026-10-07",
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
    <>
    <div className="min-h-screen bg-background text-foreground pt-20">
      <SEOHead
        title="Facebook Marketplace Scams: 12 Red Flags (2026 Guide) | SafeOrStolen"
        description="Avoid Facebook Marketplace scams with this 2026 guide. Learn 12 red flags for stolen goods, how to verify IMEI/VIN before buying, and protect yourself from fraud."
        canonical="/blog/facebook-marketplace-scams-guide"
        keywords="facebook marketplace scams, facebook marketplace stolen goods, how to avoid scams on facebook marketplace, facebook marketplace red flags, buying stolen phone facebook"
        ogType="article"
        publishedTime="2026-03-02"
        modifiedTime="2026-10-07"
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
            Anyone with a Facebook account can list something on Marketplace, with no ID check and no serial number required. That makes it an easy place to sell stolen goods. This guide shows you the 12 red flags to watch for, how to check a phone, car or serial number before you pay, and what to do if something looks wrong.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-10 text-center">
          <p className="text-foreground font-bold text-lg mb-3">Found something on Facebook Marketplace?</p>
          <p className="text-muted-foreground mb-4">Check it in a few seconds — 2 free checks with a free account.</p>
          <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all">
            Verify Now — Free →
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">Why Facebook Marketplace Is a Hotbed for Stolen Goods</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Facebook Marketplace is one of the most popular places in the US to buy and sell used things locally, and that makes it attractive to people moving stolen property. Most deals are cash, in person, with a stranger. Unlike sites that authenticate items or hold payment until delivery, Marketplace lets anyone list anything with just a Facebook account: no identity check, no item check, and no serial number required.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Stolen goods on Marketplace come in a few forms: items taken outright, items reported stolen in an insurance claim and then sold, and items bought with a stolen credit card and flipped for cash.
          </p>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">The 12 Red Flags: How to Spot a Facebook Marketplace Scam</h2>

          {[
            { n: 1, title: 'Price Far Below Market Value', desc: 'If a current iPhone Pro is listed for well under half what the same model sells for used, that\'s not a "great deal" — it\'s a warning. Thieves need to move things fast and price them to sell. Look up what the same model sells for used on other listings before you get excited.' },
            { n: 2, title: 'Brand New Seller Account', desc: 'An account created days or weeks ago with zero ratings, no profile photo, and no transaction history is a major red flag. Legitimate sellers have months or years of marketplace activity. Check the "Joined" date on their profile.' },
            { n: 3, title: 'Refuses to Meet in a Public Place', desc: 'A seller who insists you come to their house, a dark parking lot, or an unfamiliar location may be setting up a robbery or avoiding surveillance cameras. Always insist on a police station lobby, bank lobby, or well-lit public space.' },
            { n: 4, title: 'Payment via Zelle, Venmo, or Wire Transfer Only', desc: 'These payment methods offer zero buyer protection. Once sent, the money is gone. Scammers prefer them because transactions cannot be reversed. Legitimate sellers accept Facebook checkout, PayPal Goods & Services, or cash at meetup.' },
            { n: 5, title: 'Won\'t Let You Inspect the Item', desc: 'If a seller refuses to let you power on a phone, start a car, or physically inspect an item before paying, walk away immediately. Stolen items often have activation locks, blacklisted IMEIs, or hidden damage that inspection would reveal.' },
            { n: 6, title: 'Stock Photos or Blurry Images', desc: 'Real sellers photograph their actual items. If the listing uses manufacturer stock photos, images clearly copied from other listings, or deliberately blurry photos that hide details, the seller may not possess the item at all.' },
            { n: 7, title: 'No Original Packaging or Receipt', desc: 'While not always suspicious on its own, the absence of original packaging, receipts, or proof of purchase combined with other red flags significantly increases the likelihood of stolen goods.' },
            { n: 8, title: 'Pressure to Buy Immediately', desc: '"I have 10 other people interested" or "This will be gone in an hour" are classic pressure tactics designed to prevent you from doing due diligence. Take your time. No honest seller needs you to decide on the spot.' },
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
            The single most effective protection against buying stolen goods is running the item's identifier through a verification system before you pay. SafeOrStolen checks IMEI numbers, VINs, serial numbers, and license plates against its own theft reports and public web results. Bike checks also search a national stolen-bicycle registry, and gun checks also search police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Step-by-Step: Verify a Phone from Facebook Marketplace</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">1.</strong> Ask the seller for the IMEI number (they can find it by dialing *#06# or in Settings → About Phone)</li>
              <li><strong className="text-foreground">2.</strong> Go to <Link to="/verify" className="text-primary hover:underline">safeorstolen.com/verify</Link> and enter the IMEI</li>
              <li><strong className="text-foreground">3.</strong> Wait a few seconds for results from SafeOrStolen's own theft reports and public web results</li>
              <li><strong className="text-foreground">4.</strong> If it says no report found in the records searched, keep going: dial *#06# at the meetup to confirm it's the same phone, and watch the seller sign out of their Apple or Google account. The check is saved to your account with the date.</li>
              <li><strong className="text-foreground">5.</strong> If it says reported stolen or possible match, don't buy. Report the listing to Facebook and call your local police non-emergency line.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">The Legal Consequences of Buying Stolen Goods</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Receiving stolen property is a crime in every state, and many state laws cover not just buyers who knew but buyers who should have known. A brand-new phone sold for a fraction of its price by a stranger in a parking lot is the kind of detail that can be used to argue you should have known.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Guns carry extra federal rules. Under <strong>18 U.S.C. § 922(j)</strong> it's a federal crime to possess a firearm you know or have reason to believe is stolen, and under <strong>18 U.S.C. § 922(k)</strong> it's a federal crime to possess one with an altered or obliterated serial number.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Even when you did nothing wrong: if police identify an item you bought as stolen, <strong>they can take it</strong> and return it to its owner. The money you paid is usually gone unless you can get it back from the seller.
          </p>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">What to Check for the Most Common Stolen Items</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { cat: 'Smartphones', check: 'IMEI (dial *#06#)', detail: 'Watch for a phone that asks for someone else\'s Apple or Google account after a reset' },
              { cat: 'Laptops & Tablets', check: 'Serial number', detail: 'Look out for Remote Management or a company login screen during setup' },
              { cat: 'Vehicles', check: 'VIN', detail: 'Match the VIN on the dash, door jamb and title; a cloned VIN won\'t match all three' },
              { cat: 'Gaming Consoles', check: 'Serial number', detail: 'PS5, Xbox and Switch serials are on the box and in the system settings' },
              { cat: 'Power Tools', check: 'Serial number', detail: 'Scraped labels or engraved company names are warning signs' },
              { cat: 'Bicycles', check: 'Frame serial', detail: 'Usually under the bottom bracket; a ground-off serial means walk away' },
            ].map(item => (
              <div key={item.cat} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-bold">{item.cat}</span>
                  <span className="text-primary font-semibold text-sm">{item.check}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">SafeOrStolen: Your Defense Against Marketplace Fraud</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. A free account comes with 2 free checks, no credit card; after that it's $0.99 a check or $10 a month for unlimited checks. Results come back in a few seconds, and the free web app at safeorstolen.com/app lets you scan a barcode or serial label with your camera at the meetup.
          </p>

          {/* Final CTA */}
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl font-black text-foreground mb-3">Don't Buy Stolen Goods. Verify First.</h2>
            <p className="text-muted-foreground mb-6">2 free checks. No credit card. Results in a few seconds.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all">
                Verify Now — Free →
              </Link>
              <Link to="/app" className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-all">
                Get the Free Web App
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
    </>
  );
};

export default FacebookMarketplaceScamsGuide;
