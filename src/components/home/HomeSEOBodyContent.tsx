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
              How to Check If a Phone, Car, or Item Is Stolen Before Buying
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Buying a used iPhone on Facebook Marketplace? That $300 "great deal" could be a stolen phone. 
              Before you meet the seller and hand over cash, take 2 seconds to check if it's stolen. 
              SafeOrStolen verifies phones, cars, laptops, bikes, and more against police databases, 
              carrier blacklists, and insurance claims. Works for{' '}
              <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace</Link>,{' '}
              <Link to="/ebay-stolen-check" className="text-primary hover:underline">eBay</Link>,{' '}
              <Link to="/craigslist-stolen-check" className="text-primary hover:underline">Craigslist</Link>, 
              OfferUp, or any private sale.
            </p>
          </header>

          <section className="space-y-3" aria-labelledby="home-seo-problem">
            <h3 id="home-seo-problem" className="text-xl md:text-2xl font-semibold">
              What Happens If You Buy a Stolen Phone or Car?
            </h3>
            <p className="text-muted-foreground">
              Here's the scary truth: <strong>Even if you didn't know it was stolen, you're still in trouble.</strong> 
              Police can take the item back — you lose the phone AND your money. In many states, you can face 
              criminal charges for "receiving stolen property." The seller disappears, and you have no recourse. 
              If it's a phone, carriers will blacklist it — making it completely unusable.
            </p>
            <p className="text-muted-foreground">
              According to the{' '}
              <a 
                href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/ucr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                FBI's crime data
              </a>
              , property crimes result in over $15.8 billion in losses annually. Thousands of stolen phones, 
              cars, and electronics end up on Facebook Marketplace, Craigslist, and OfferUp every day. 
              The average loss for buyers of stolen phones? <strong>$800</strong>. For stolen cars? 
              <strong>$25,000+</strong>.
            </p>
          </section>

          {/* Solution Section */}
          <section className="space-y-3" aria-labelledby="home-seo-solution">
            <h3 id="home-seo-solution" className="text-xl md:text-2xl font-semibold">
              How to Protect Yourself When Buying Used
            </h3>
            <p className="text-muted-foreground">
              <strong>Step 1:</strong> Before meeting the seller, ask for the serial number (phones: dial *#06# for IMEI, 
              cars: VIN on dashboard). Enter it above — takes 2 seconds.
            </p>
            <p className="text-muted-foreground">
              <strong>Step 2:</strong> We check police databases, NICB stolen vehicle records, GSMA carrier blacklists, 
              insurance claims, and 100+ other sources in real-time.
            </p>
            <p className="text-muted-foreground">
              <strong>Step 3:</strong> Get your answer: <strong className="text-green-600">SAFE ✅</strong> means proceed with the purchase. 
              <strong className="text-red-600">STOLEN ❌</strong> means walk away immediately and report the listing.
            </p>
          </section>

          {/* What We Check Section */}
          <section className="space-y-4" aria-labelledby="home-seo-what">
            <h3 id="home-seo-what" className="text-xl md:text-2xl font-semibold">
              What Items Can You Check for Stolen Status?
            </h3>
            <p className="text-muted-foreground">
              Whether you're buying a used iPhone, a Craigslist car, or a Facebook Marketplace laptop — 
              we check it all. Just get the serial number from the seller and enter it above.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-phone" className="hover:text-primary">📱 iPhones & Phones</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  Is this iPhone stolen? Check before buying. Works for all iPhones, Samsung Galaxy, Android phones. 
                  Just dial *#06# on the phone to get the IMEI, then check it here.
                  <Link to="/check-iphone" className="block mt-1 text-primary hover:underline text-xs">→ How to check if an iPhone is stolen</Link>
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-car" className="hover:text-primary">🚗 Cars & Vehicles</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  Is this car stolen? Check the VIN before buying from Craigslist, Facebook Marketplace, or any private sale.
                  800,000+ vehicles are stolen annually in the US alone.
                  <Link to="/vin-checker" className="block mt-1 text-primary hover:underline text-xs">→ How to check if a car is stolen</Link>
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-bike" className="hover:text-primary">🚲 Bikes & E-bikes</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  Is this bike stolen? A bike is stolen every 30 seconds in the US. Check the serial number 
                  (under the bottom bracket) before buying from OfferUp, Facebook, or any seller.
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">
                  <Link to="/check-laptop" className="hover:text-primary">💻 Laptops & MacBooks</Link>
                </p>
                <p className="text-sm text-muted-foreground">
                  Is this MacBook stolen? Check before buying used laptops, gaming PCs, or tablets.
                  Find the serial number in System Settings or on the bottom of the device.
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
