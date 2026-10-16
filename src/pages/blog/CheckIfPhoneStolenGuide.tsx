/** Oct 8 2026: audited by hand for "how to check if a phone is stolen". Removed AI-as-source, trust score, invented stats and rankings, false carrier/police claims. */
import { Link } from '@/lib/router-compat';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const FAQ_ITEMS = [
  { q: 'How do I check if a phone is stolen before buying it?', a: 'Ask the seller to dial *#06# so the IMEI shows on screen, then type that 15-digit number into SafeOrStolen (safeorstolen.com/verify). It searches SafeOrStolen\'s own theft reports and public web results and shows the make and model from the IMEI. Results come back in a few seconds. A paid lost/stolen carrier blacklist check is available too.' },
  { q: 'What is an IMEI number and where do I find it?', a: 'An IMEI (International Mobile Equipment Identity) is a 15-digit number that identifies a phone on cellular networks. Dial *#06#, or go to Settings > General > About on an iPhone or Settings > About phone on Android. It is also printed on the original box, and on many iPhones it is etched on the SIM tray.' },
  { q: 'Can a stolen phone be used after a factory reset?', a: 'A factory reset does not change the IMEI, so a blacklisted phone stays blacklisted. iPhones also have Activation Lock tied to the owner\'s Apple Account, and most Android phones have Factory Reset Protection tied to the owner\'s Google account. Either one stops a reset phone from being set up without the owner\'s login.' },
  { q: 'What does a blacklisted IMEI mean?', a: 'A blacklisted IMEI has been reported lost or stolen to a carrier, or flagged for an unpaid balance. Carriers that honor the list will refuse to activate the phone, so it may not make calls or use mobile data. SafeOrStolen offers a paid blacklist check, and monthly members get up to 20 blacklist checks a month.' },
  { q: 'Is it illegal to buy a stolen phone?', a: 'Knowingly buying or keeping stolen property is a crime in every U.S. state. Even if you didn\'t know, police can take the phone back as evidence and return it to the owner, and you usually lose what you paid. Checking the IMEI and keeping a dated record of that check shows you tried to buy honestly.' },
  { q: 'How much does it cost to check if a phone is stolen?', a: 'SafeOrStolen gives you 2 free checks with a free account, no credit card. After that a single check is $0.99, or $10 a month for unlimited checks. The paid carrier blacklist check is separate; monthly members get up to 20 a month. An optional $1.99 certificate gives you a dated record of the check.' },
  { q: 'Can I check if an iPhone is locked to someone else without the IMEI?', a: 'Yes. Ask the seller to open Settings, tap their name at the top, then Find My > Find My iPhone. It should be off, and the seller should sign out of their Apple Account in front of you. If the phone shows "iPhone Locked to Owner" after a reset, it is still tied to someone else. Run the IMEI check as well.' },
  { q: 'What should I do if my phone was stolen?', a: 'Call your carrier and ask them to blacklist the IMEI. File a police report with the IMEI and serial number. Mark the phone as lost in Find My or Find My Device. Tell your insurer if it\'s covered. Then report it on SafeOrStolen so anyone who checks that IMEI sees the theft report.' },
];

const CheckIfPhoneStolenGuide = () => {
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Check If a Phone Is Stolen Before Buying",
      "description": "Step-by-step guide to checking a used iPhone, Samsung or Android phone before you buy: find the IMEI, run a check, and confirm the phone isn't locked to someone else.",
      "author": { "@type": "Person", "name": "Samuel Pfeiffer" },
      "publisher": { "@type": "Organization", "name": "SafeOrStolen", "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" } },
      "datePublished": "2026-03-02",
      "dateModified": "2026-10-07",
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
      "totalTime": "PT5M",
      "step": [
        { "@type": "HowToStep", "name": "Get the IMEI", "text": "Ask the seller to dial *#06# on the phone, or open Settings > General > About (iPhone) or Settings > About phone (Android). Write down the 15-digit number." },
        { "@type": "HowToStep", "name": "Run an IMEI check", "text": "Go to safeorstolen.com/verify and enter the IMEI. The check searches SafeOrStolen's theft reports and public web results and shows the make and model from the IMEI." },
        { "@type": "HowToStep", "name": "Read the result", "text": "In a few seconds you see \"reported stolen\", \"possible match\", or \"no report found in the records searched\", with every source listed. Make sure the model matches the phone in your hand." },
        { "@type": "HowToStep", "name": "Check the lock", "text": "On an iPhone, Find My must be off and the seller signed out of their Apple Account. On Android, the seller should remove their Google account before a reset." },
        { "@type": "HowToStep", "name": "Keep a record", "text": "Each check is saved to your account with the date. An optional $1.99 certificate gives you a dated record with its own link." }
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
    <div className="min-h-screen bg-background text-foreground pt-20">
      <SEOHead
        title="How to Check If a Phone Is Stolen Before Buying | SafeOrStolen"
        description="How to check if a used phone is stolen: find the IMEI, run it through a stolen-phone check, read the result, and make sure it isn't locked to someone else."
        canonical="/blog/check-if-phone-stolen-guide"
        keywords="check if phone stolen, IMEI check free, how to tell if phone is stolen, stolen phone checker, blacklisted IMEI check, is my phone stolen"
        ogType="article"
        publishedTime="2026-03-02"
        modifiedTime="2026-10-07"
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
          How to check if a phone is stolen before buying
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
          <span>By Samuel Pfeiffer</span>
          <span>•</span>
          <time dateTime="2026-10-07">Updated October 7, 2026</time>
        </div>

        <BlogHeroImage src={blogImages.phoneStolen} alt="Person holding smartphone showing IMEI number with magnifying glass - how to check if a phone is stolen" />

        <div className="speakable-summary bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-10">
          <p className="text-foreground font-semibold text-lg leading-relaxed">
            Get the IMEI by dialing *#06# on the phone, then run it through a stolen-phone check such as SafeOrStolen (safeorstolen.com/verify), which searches owner theft reports and public web results in a few seconds. Then make sure the phone isn't locked to the seller's or anyone else's account: Find My off on an iPhone, Google account removed on Android. If the seller won't let you do either, walk away.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mb-10 text-center">
          <p className="text-foreground font-bold text-lg mb-3">Got an IMEI number? Check it now.</p>
          <p className="text-muted-foreground mb-4">2 free checks with a free account. Results in a few seconds.</p>
          <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all">
            Check an IMEI →
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">What an IMEI is and why it matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The IMEI is the 15-digit number a phone uses to identify itself to cell networks. When an owner reports a phone lost or stolen, their carrier can put that IMEI on a blacklist, and carriers that honor the list won't activate it. Owners can also report the IMEI on sites like SafeOrStolen, and thieves sometimes leave the number visible in listing photos. That's why the IMEI is the one number to check before you pay.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A phone that's blacklisted or locked to someone else's account may never make calls or use mobile data for you, and police can take a stolen one back.
          </p>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">How to find the IMEI on any phone</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-foreground font-bold mb-3">iPhone</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Dial <code className="bg-muted px-1.5 py-0.5 rounded-[0.25rem] text-xs">*#06#</code></li>
                <li>• Settings → General → About → IMEI</li>
                <li>• Etched on the SIM tray on many models</li>
                <li>• On the original box label</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-foreground font-bold mb-3">Android (Samsung, Pixel and others)</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Dial <code className="bg-muted px-1.5 py-0.5 rounded-[0.25rem] text-xs">*#06#</code></li>
                <li>• Settings → About phone → IMEI</li>
                <li>• Under the battery on older models</li>
                <li>• On the original box label</li>
              </ul>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 mb-8">
            <h3 className="text-destructive font-bold mb-2">Warning: the seller won't share the IMEI</h3>
            <p className="text-muted-foreground text-sm">An honest seller can dial *#06# in front of you in a few seconds. If they refuse, stall, or only send a photo of a box, treat it as a no. Also compare the number on screen to the one on the box or SIM tray. If they differ, walk away.</p>
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">Step by step: how to check if a phone is stolen</h2>

          <div className="space-y-6 mb-8">
            {[
              { step: 1, title: 'Get the IMEI from the seller', desc: 'Ask for it before you meet. If they don\'t know what it is, tell them to dial *#06# and it shows on screen in a few seconds. If they refuse, end the conversation.' },
              { step: 2, title: 'Run the IMEI through SafeOrStolen', desc: 'Go to safeorstolen.com/verify and enter the 15 digits. The check searches SafeOrStolen\'s theft reports and public web results, and shows the make and model from the IMEI.' },
              { step: 3, title: 'Read the result', desc: 'You see "reported stolen", "possible match", or "no report found in the records searched", with every source listed. Make sure the make and model match the phone in front of you. If you want the carrier blacklist status, add the paid blacklist check.' },
              { step: 4, title: 'Check the account lock', desc: 'On an iPhone, open Settings, tap the name at the top, then Find My > Find My iPhone. It must be off, and the seller should sign out of their Apple Account in front of you. On Android, the seller should remove their Google account under Settings > Accounts before resetting.' },
              { step: 5, title: 'Keep a record', desc: 'Each check is saved to your account with the date. If you want a record you can share, the optional $1.99 certificate gives you a dated page with its own link showing you checked before the sale.' },
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

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">What a SafeOrStolen phone check covers</h2>

          <div className="space-y-3 mb-8">
            {[
              { source: 'Make and model from the IMEI', what: 'Confirms the number belongs to the phone the seller says it is. A mismatch is a red flag on its own.' },
              { source: 'SafeOrStolen theft reports', what: 'Thefts reported by owners on SafeOrStolen.' },
              { source: 'Public web results', what: 'Listings and posts that mention the IMEI, such as an owner\'s stolen-phone post.' },
              { source: 'Carrier blacklist (paid add-on)', what: 'A lost/stolen blacklist check. Monthly members get up to 20 a month.' },
              { source: 'Not covered', what: 'Police databases such as NCIC, Apple or Google account status, and pawn or insurer records. Check the account lock on the phone yourself.' },
            ].map(item => (
              <div key={item.source} className="bg-card border border-border rounded-xl p-4">
                <span className="text-primary font-bold text-sm">{item.source}</span>
                <p className="text-muted-foreground text-sm mt-1">{item.what}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-foreground mt-12 mb-4">Where to be extra careful</h2>
          <ul className="space-y-2 mb-8 text-muted-foreground">
            <li>• <strong className="text-foreground">Facebook Marketplace and OfferUp</strong>: quick cash meetups. Meet somewhere with Wi-Fi so you can check the phone on the spot.</li>
            <li>• <strong className="text-foreground">Craigslist</strong>: anonymous listings. Ask for the IMEI before you agree to meet.</li>
            <li>• <strong className="text-foreground">"Locked" or "iCloud locked" listings</strong>: a phone sold "for parts" because it's locked to someone else is a common sign of theft.</li>
            <li>• <strong className="text-foreground">Prices far below market</strong>: compare to other listings for the same model and storage.</li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl font-black text-foreground mb-3">Check a phone in a few seconds</h2>
            <p className="text-muted-foreground mb-6">2 free checks with a free account, then $0.99 a check or $10 a month unlimited.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all">
                Check an IMEI →
              </Link>
              <Link to="/app" className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-all">
                Get the free web app
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-black text-foreground text-center mb-10">Frequently asked questions</h2>
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
          <h2 className="text-xl font-bold text-foreground mb-6">Related guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/blog/facebook-marketplace-scams-guide" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">Facebook Marketplace scams</h3>
              <p className="text-muted-foreground text-xs">Red flags to watch for when buying on Marketplace</p>
            </Link>
            <Link to="/blog/complete-imei-guide-protect-yourself" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">IMEI guide</h3>
              <p className="text-muted-foreground text-xs">What the IMEI is and how buyers use it</p>
            </Link>
            <Link to="/imei-checker" className="border border-border rounded-xl p-4 hover:border-primary/60 transition-all">
              <h3 className="text-foreground font-bold text-sm mb-2">IMEI checker</h3>
              <p className="text-muted-foreground text-xs">Run an IMEI check now</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
    </>
  );
};

export default CheckIfPhoneStolenGuide;
