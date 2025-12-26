import { Link } from 'react-router-dom';

/**
 * Homepage SEO body content
 * - Visible to users (not hidden) to avoid cloaking
 * - Pure static text (no async rendering) to help Google evaluate page quality
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
              SafeOrStolen helps you reduce the risk of buying stolen property by checking identifiers like
              IMEI (phones), VIN (vehicles), and serial numbers (electronics and equipment). If you are shopping
              on marketplaces, meeting a stranger in a parking lot, or buying inventory for resale, a quick check
              can protect you from financial loss and legal headaches.
            </p>
          </header>

          <section className="space-y-3" aria-labelledby="home-seo-why">
            <h3 id="home-seo-why" className="text-xl md:text-2xl font-semibold">
              Why this matters (and why “I didn’t know” doesn’t help)
            </h3>
            <p className="text-muted-foreground">
              Stolen goods move fast online. According to the{' '}
              <a 
                href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/ucr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                FBI's Uniform Crime Reporting Program
              </a>
              , property crimes result in billions of dollars in losses annually. Listings can look legitimate, 
              sellers can provide convincing stories, and receipts can be fake or unrelated. If an item is later 
              recovered, you can lose the item even if you paid for it—a principle established under{' '}
              <a 
                href="https://www.law.cornell.edu/wex/stolen_property" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                U.S. stolen property law
              </a>
              . That means the real cost is the purchase price, the time you spent, and the stress of dealing
              with a bad situation.
            </p>
            <p className="text-muted-foreground">
              Verification is the simplest due-diligence step you can take. Think of it like running a quick identity check
              on the item itself. When you check an identifier, you are looking for high-risk signals such as theft reports,
              blacklists, or mismatches that suggest the item is not safe to buy.
            </p>
          </section>

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
                <p className="font-medium">Phones & tablets (IMEI)</p>
                <p className="text-sm text-muted-foreground">
                  Check for blacklist or risk signals before you hand over cash. The{' '}
                  <a href="https://www.gsma.com/aboutus/workinggroups/device-check" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GSMA</a>
                  {' '}maintains global IMEI databases that track stolen devices across 200+ countries.
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">Cars & vehicles (VIN)</p>
                <p className="text-sm text-muted-foreground">
                  The{' '}
                  <a href="https://www.nicb.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NICB</a>
                  {' '}(National Insurance Crime Bureau) reports over 800,000 vehicles stolen annually in the US. VIN checks reduce risk.
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">Bikes & e-bikes (serial)</p>
                <p className="text-sm text-muted-foreground">
                  According to{' '}
                  <a href="https://bikeindex.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bike Index</a>
                  , a bike is stolen every 30 seconds in the US. Serial verification is the fastest way to spot red flags.
                </p>
              </li>
              <li className="rounded-lg border border-border/60 p-4">
                <p className="font-medium">Laptops, cameras, consoles & electronics (serial)</p>
                <p className="text-sm text-muted-foreground">
                  High-value electronics are common in resale scams. Serial verification helps you buy with confidence.
                </p>
              </li>
            </ul>
          </section>

          <section className="space-y-3" aria-labelledby="home-seo-how">
            <h3 id="home-seo-how" className="text-xl md:text-2xl font-semibold">
              How verification works (simple, fast, and practical)
            </h3>
            <p className="text-muted-foreground">
              The workflow is designed for real-world buying situations where you need clarity quickly.
              First, get the identifier directly from the item (or packaging). Second, enter it into SafeOrStolen (or scan it
              with the mobile app when available). Third, review the result and decide whether to proceed.
            </p>
            <p className="text-muted-foreground">
              If you are meeting a seller, do the check before paying. If you are a seller, you can use verification as a trust
              signal to reassure serious buyers. For businesses, it can be part of your intake process so you avoid purchasing
              questionable inventory.
            </p>
          </section>

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
                <strong className="text-foreground">“Quick sale” pressure:</strong> the seller insists you must decide now.
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
          </section>

          <section className="space-y-3" aria-labelledby="home-seo-business">
            <h3 id="home-seo-business" className="text-xl md:text-2xl font-semibold">
              Built for individuals and for businesses
            </h3>
            <p className="text-muted-foreground">
              SafeOrStolen is used by everyday buyers and sellers, and it is also designed for pawn shops and resale businesses.
              Businesses need repeatable processes: consistent checks, clear documentation, and a workflow that fits intake.
              If you process multiple items per day, verification can reduce risk and help your team make better purchasing decisions.
            </p>
            <p className="text-muted-foreground">
              If you are evaluating SafeOrStolen for business use, start with the verification flow and then explore the business
              pages for category-specific guidance.
            </p>
          </section>

          <section className="space-y-4" aria-labelledby="home-seo-start">
            <h3 id="home-seo-start" className="text-xl md:text-2xl font-semibold">
              Start a check
            </h3>
            <p className="text-muted-foreground">
              Use the main search above, or jump directly to a category page below. Each route includes SEO-friendly information,
              plain-language steps, and a clear call-to-action to verify.
            </p>
            <nav className="flex flex-wrap gap-2" aria-label="Popular verification pages">
              <Link className="underline text-primary" to="/verify">Verify any item</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/check-phone">Check phone IMEI</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/check-car">Check car VIN</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/check-bike">Check bike</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/check-laptop">Check laptop</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/check-electronics">Check electronics</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/app">Download the app</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/pricing">Pricing</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/blog">Guides</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/for-pawn-shops">For pawn shops</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/for-resellers">For resellers</Link>
              <span className="text-muted-foreground">·</span>
              <Link className="underline text-primary" to="/compare">Compare</Link>
            </nav>
          </section>

          <aside className="rounded-lg border border-border/60 bg-muted/20 p-4">
            <p className="text-sm text-muted-foreground">
              Tip: If a seller refuses to share an IMEI/VIN/serial number for verification, treat that as a red flag.
              Legitimate sellers usually understand the need for due diligence.
            </p>
          </aside>
        </article>
      </div>
    </section>
  );
}
