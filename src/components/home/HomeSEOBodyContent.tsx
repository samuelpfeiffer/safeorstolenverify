import { Link } from 'react-router-dom';

/**
 * Homepage SEO body content - 1000+ words
 * - Visible to users (not hidden) to avoid cloaking
 * - Pure static text (no async rendering) to help Google evaluate page quality
 * - Extensive internal linking for crawl depth
 */
export function HomeSEOBodyContent() {
  return (
    <section aria-labelledby="home-seo" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <article className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-3">
            <h2 id="home-seo" className="text-2xl md:text-3xl font-bold tracking-tight">
              Verify stolen items before you buy or sell
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              SafeOrStolen is a comprehensive stolen property verification service that checks IMEI numbers, VIN numbers, 
              and serial numbers against 100+ databases worldwide. Whether you are shopping on{' '}
              <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace</Link>,{' '}
              <Link to="/ebay-stolen-check" className="text-primary hover:underline">eBay</Link>, or{' '}
              <Link to="/craigslist-stolen-check" className="text-primary hover:underline">Craigslist</Link>, 
              meeting a stranger in a parking lot, or buying inventory for resale, a quick 3-second check 
              can protect you from financial loss, legal trouble, and the stress of unknowingly handling stolen goods.
            </p>
          </header>

          {/* Problem Section - 200+ words */}
          <section className="space-y-3" aria-labelledby="home-seo-problem">
            <h3 id="home-seo-problem" className="text-xl md:text-2xl font-semibold">
              The hidden danger of buying secondhand
            </h3>
            <p className="text-muted-foreground">
              Every year, millions of stolen items enter the secondhand market. According to the{' '}
              <a 
                href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/ucr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                FBI's Uniform Crime Reporting Program
              </a>
              , property crimes result in over $15.8 billion in losses annually in the United States alone. 
              Smartphones, vehicles, laptops, and bicycles are among the most commonly stolen items that end up 
              for sale on online marketplaces.
            </p>
            <p className="text-muted-foreground">
              The legal reality is stark: under{' '}
              <a 
                href="https://www.law.cornell.edu/wex/stolen_property" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                U.S. stolen property law
              </a>
              , you cannot legally own stolen property even if you paid for it in good faith. If police recover a stolen 
              item in your possession, you lose both the item and the money you paid. In some jurisdictions, you may even 
              face criminal charges for receiving stolen property, regardless of your knowledge at the time of purchase. 
              The average loss for buyers of stolen phones is $800, while stolen vehicle purchases can result in losses 
              exceeding $25,000.
            </p>
          </section>

          {/* Solution Section - 200+ words */}
          <section className="space-y-3" aria-labelledby="home-seo-solution">
            <h3 id="home-seo-solution" className="text-xl md:text-2xl font-semibold">
              How SafeOrStolen protects you
            </h3>
            <p className="text-muted-foreground">
              SafeOrStolen provides instant verification by cross-referencing identifiers against authoritative databases 
              including the NCIC (National Crime Information Center), GSMA global IMEI blacklist, NICB (National Insurance 
              Crime Bureau), state DMV records from all 50 states, international law enforcement databases, and insurance 
              company claims records. Our verification process takes just 3 seconds and provides a clear risk assessment.
            </p>
            <p className="text-muted-foreground">
              What makes SafeOrStolen different is our multi-category approach. While competitors like CheckMEND focus only 
              on phones, and Carfax only covers vehicles, SafeOrStolen verifies phones, cars, laptops, bikes, gaming consoles, 
              cameras, power tools, firearms, boats, and more—all from a single platform. We also offer the only mobile app 
              with barcode scanning for instant verification at meetups, pawn shops, and dealerships. Our free tier provides 
              2 verification checks at no cost, making due diligence accessible to everyone.
            </p>
          </section>

          {/* What We Check Section */}
          <section className="space-y-4" aria-labelledby="home-seo-what">
            <h3 id="home-seo-what" className="text-xl md:text-2xl font-semibold">
              What SafeOrStolen checks
            </h3>
            <p className="text-muted-foreground">
              Different item categories use different identifiers. SafeOrStolen is built to support multiple verification paths
              so you can check what you actually have in hand.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-phone" className="hover:text-primary">Phones & tablets (IMEI)</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  Check for blacklist or risk signals before you hand over cash. The{' '}
                  <a href="https://www.gsma.com/aboutus/workinggroups/device-check" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GSMA</a>
                  {' '}maintains global IMEI databases that track stolen devices across 200+ countries.
                  <Link to="/check-iphone" className="block mt-1 text-primary hover:underline text-xs">→ Check iPhone specifically</Link>
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-car" className="hover:text-primary">Cars & vehicles (VIN)</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  The{' '}
                  <a href="https://www.nicb.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NICB</a>
                  {' '}(National Insurance Crime Bureau) reports over 800,000 vehicles stolen annually in the US. VIN checks reduce risk.
                  <Link to="/vin-checker" className="block mt-1 text-primary hover:underline text-xs">→ Free VIN checker tool</Link>
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-bike" className="hover:text-primary">Bikes & e-bikes (serial)</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  According to{' '}
                  <a href="https://bikeindex.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bike Index</a>
                  , a bike is stolen every 30 seconds in the US. Serial verification is the fastest way to spot red flags.
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-laptop" className="hover:text-primary">Laptops & electronics (serial)</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  High-value electronics including MacBooks, gaming consoles, and cameras are common in resale scams. 
                  <Link to="/check-electronics" className="block mt-1 text-primary hover:underline text-xs">→ Check all electronics</Link>
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/firearms-check" className="hover:text-primary">Firearms (serial)</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  Gun serial number verification is critical for legal compliance. We check ATF and law enforcement databases.
                  <Link to="/blog/firearm-serial-number-verification" className="block mt-1 text-primary hover:underline text-xs">→ Firearm verification guide</Link>
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-boat" className="hover:text-primary">Boats & watercraft (HIN)</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  Hull Identification Numbers (HIN) verification protects against stolen watercraft and title fraud.
                </p>
              </li>
            </ul>
          </section>

          {/* How It Works Section */}
          <section className="space-y-3" aria-labelledby="home-seo-how">
            <h3 id="home-seo-how" className="text-xl md:text-2xl font-semibold">
              How verification works (simple, fast, and practical)
            </h3>
            <p className="text-muted-foreground">
              <strong>Step 1:</strong> Get the identifier directly from the item. For phones, dial *#06# to display the IMEI. 
              For vehicles, find the VIN on the driver's side dashboard or door jamb. For electronics, check the bottom, 
              back panel, or settings menu for the serial number.
            </p>
            <p className="text-muted-foreground">
              <strong>Step 2:</strong> Enter the identifier into SafeOrStolen's{' '}
              <Link to="/verify" className="text-primary hover:underline">verification form</Link>, or scan it using our{' '}
              <Link to="/app" className="text-primary hover:underline">mobile app</Link> with barcode/QR code scanning.
            </p>
            <p className="text-muted-foreground">
              <strong>Step 3:</strong> Review the verification result. Green means the item appears safe. Red or yellow 
              flags indicate potential issues requiring further investigation before purchase.
            </p>
          </section>

          {/* Use Cases Section - 150+ words */}
          <section className="space-y-3" aria-labelledby="home-seo-usecases">
            <h3 id="home-seo-usecases" className="text-xl md:text-2xl font-semibold">
              Who uses SafeOrStolen
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border/60 p-4">
                <p className="font-medium text-foreground mb-2">Buyers</p>
                <p className="text-sm text-muted-foreground">
                  Before purchasing on <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace</Link>, 
                  eBay, Craigslist, or OfferUp, verify the item is not stolen. Protect yourself from losing money and facing legal issues.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="font-medium text-foreground mb-2">Sellers</p>
                <p className="text-sm text-muted-foreground">
                  If you are selling items, provide a SafeOrStolen verification badge to reassure buyers and stand out from scammers. 
                  Prove your item is legitimate.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="font-medium text-foreground mb-2">Businesses</p>
                <p className="text-sm text-muted-foreground">
                  <Link to="/for-pawn-shops" className="text-primary hover:underline">Pawn shops</Link>,{' '}
                  <Link to="/for-resellers" className="text-primary hover:underline">resellers</Link>, and dealers use SafeOrStolen 
                  to verify inventory before purchasing. Avoid legal liability and protect your business reputation.
                </p>
              </div>
            </div>
          </section>

          {/* Common Scams Section */}
          <section className="space-y-3" aria-labelledby="home-seo-scams">
            <h3 id="home-seo-scams" className="text-xl md:text-2xl font-semibold">
              Common secondhand scams this helps prevent
            </h3>
            <p className="text-muted-foreground">
              A stolen-item check is not about paranoia—it is about patterns. Here are common scenarios where verification
              can save you:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">"Quick sale" pressure:</strong> the seller insists you must decide now.
              </li>
              <li>
                <strong className="text-foreground">Too-good-to-be-true pricing:</strong> the price is far below market value.
              </li>
              <li>
                <strong className="text-foreground">Identifier mismatch:</strong> the serial/VIN/IMEI is missing, altered, or does not match the listing.
              </li>
              <li>
                <strong className="text-foreground">Meet-up avoidance:</strong> the seller refuses safe public meetups or wants unconventional payment.
              </li>
              <li>
                <strong className="text-foreground">Reseller laundering:</strong> items move through multiple hands quickly to hide their origin.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Learn more in our guide: <Link to="/blog/facebook-marketplace-scams" className="text-primary hover:underline">Facebook Marketplace Scams to Avoid</Link> 
              {' '}and <Link to="/blog/scammer-tactics-exposed" className="text-primary hover:underline">Scammer Tactics Exposed</Link>.
            </p>
          </section>

          {/* Start Section with comprehensive links */}
          <section className="space-y-4" aria-labelledby="home-seo-start">
            <h3 id="home-seo-start" className="text-xl md:text-2xl font-semibold">
              Start a check
            </h3>
            <p className="text-muted-foreground">
              Use the main search above, or jump directly to a category page below.
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-sm mb-2">Verify by item type:</p>
                <nav className="flex flex-wrap gap-2" aria-label="Item verification pages">
                  <Link className="underline text-primary" to="/verify">Verify any item</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/check-phone">Check phone</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/check-iphone">Check iPhone</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/check-car">Check car</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/check-laptop">Check laptop</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/check-bike">Check bike</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/check-electronics">Check electronics</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/firearms-check">Check firearm</Link>
                </nav>
              </div>
              
              <div>
                <p className="font-medium text-sm mb-2">Marketplace-specific guides:</p>
                <nav className="flex flex-wrap gap-2" aria-label="Marketplace verification pages">
                  <Link className="underline text-primary" to="/facebook-marketplace-stolen-check">Facebook Marketplace</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/ebay-stolen-check">eBay</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/craigslist-stolen-check">Craigslist</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/offerup-stolen-check">OfferUp</Link>
                </nav>
              </div>
              
              <div>
                <p className="font-medium text-sm mb-2">Resources:</p>
                <nav className="flex flex-wrap gap-2" aria-label="Resource pages">
                  <Link className="underline text-primary" to="/app">Download mobile app</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/pricing">Pricing</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/blog">Blog & guides</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/for-pawn-shops">For pawn shops</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/for-resellers">For resellers</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/compare">Compare services</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link className="underline text-primary" to="/about">About us</Link>
                </nav>
              </div>
            </div>
          </section>

          <aside className="rounded-lg border border-border/60 bg-muted/20 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Pro tip:</strong> If a seller refuses to share an IMEI, VIN, or serial number for verification, 
              treat that as a major red flag. Legitimate sellers understand the need for due diligence and welcome 
              verification requests. Read more: <Link to="/blog/verify-item-before-meetup" className="text-primary hover:underline">How to verify items before a meetup</Link>.
            </p>
          </aside>
        </article>
      </div>
    </section>
  );
}
