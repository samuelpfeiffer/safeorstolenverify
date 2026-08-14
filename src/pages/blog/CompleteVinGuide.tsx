import { PageSEO } from '@/components/seo/PageSEO';
import { AppStoreBadges } from '@/components/app/AppStoreBadges';
import { Link } from 'react-router-dom';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

export default function CompleteVinGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete VIN Check Guide: How to Verify Vehicle History (2026)",
    "description": "Comprehensive guide to VIN verification, decoding vehicle history, checking for stolen cars, and avoiding title washing fraud. Free alternatives to Carfax.",
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    }
  };

  return (
    <>
      <PageSEO
        title="Complete VIN Check Guide: How to Verify Vehicle History (2026)"
        description="Comprehensive guide to VIN verification, decoding vehicle history, checking for stolen cars, and avoiding title washing fraud. Free alternatives to Carfax."
        keywords="VIN check, vehicle history report, stolen car check, VIN decoder, Carfax alternative, title check"
        canonical="/blog/complete-vin-guide"
        structuredData={structuredData}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Complete VIN Check Guide: How to Verify Vehicle History (2026)</h1>
          <p className="text-lg text-muted-foreground">Comprehensive guide to VIN verification, decoding vehicle history, checking for stolen cars, and avoiding title washing fraud.</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <time dateTime="2026-01-15">January 15, 2026</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        <BlogHeroImage src={blogImages.vinCheck} alt="Person scanning VIN barcode on car dashboard with smartphone - VIN check guide" />

        <div className="prose prose-lg max-w-none">
          <h2>Why VIN Checks Are Non-Negotiable in 2026</h2>
          <p>Buying a used car without checking the VIN is like buying a house without an inspection. In 2026, stolen property reports from all 50 states recorded over 873,000 stolen vehicles—a 12% increase from 2025. Additionally:</p>
          <ul>
            <li>1 in 5 used cars has hidden damage from accidents</li>
            <li>Title washing fraud costs buyers $1 billion annually</li>
            <li>Odometer rollback scams affect 450,000+ vehicles per year</li>
            <li>Flood-damaged vehicles from hurricanes are resold nationwide</li>
          </ul>
          <p>A proper VIN check reveals all of this—and SafeOrStolen does it in 3 seconds for free.</p>

          <h2>What is a VIN (Vehicle Identification Number)?</h2>
          <p>The VIN is a unique 17-character code that identifies every vehicle manufactured since 1981. It's like a Social Security number for cars, encoding:</p>
          <ul>
            <li><strong>World Manufacturer Identifier (WMI):</strong> Characters 1-3 identify the country and manufacturer</li>
            <li><strong>Vehicle Descriptor Section (VDS):</strong> Characters 4-9 describe the model, body type, engine</li>
            <li><strong>Vehicle Identifier Section (VIS):</strong> Characters 10-17 include model year, plant code, serial number</li>
          </ul>

          <h3>Where to Find the VIN on Any Vehicle</h3>
          <ol>
            <li><strong>Dashboard (most common):</strong> Driver's side, visible through windshield at base of dashboard</li>
            <li><strong>Driver's door jamb:</strong> White sticker with VIN, tire pressure, manufacturing date</li>
            <li><strong>Vehicle title and registration:</strong> Top of document</li>
            <li><strong>Insurance documents:</strong> Policy and claims paperwork</li>
            <li><strong>Engine block:</strong> Stamped on the engine (match this to dashboard VIN to detect swaps)</li>
            <li><strong>Frame rail:</strong> Under the vehicle, on the chassis</li>
          </ol>
          <p className="bg-muted p-4 rounded-lg my-6">
            <strong>🚨 Red Flag:</strong> If the VIN on the dashboard doesn't match the door jamb or title, the vehicle may be stolen with a swapped VIN plate. Walk away immediately.
          </p>

          <h2>Step-by-Step: How to Run a Complete VIN Check</h2>

          <h3>Method 1: SafeOrStolen Free VIN Verification (Most Comprehensive)</h3>
          <p>SafeOrStolen checks 100+ databases instantly including stolen property reports from all 50 states, NHTSA vehicle records, insurance claims, and international theft databases:</p>
          <ol>
            <li>Go to <Link to="/verify" className="text-primary hover:underline">SafeOrStolen.com/verify</Link></li>
            <li>Enter the 17-character VIN or scan the barcode with the mobile app</li>
            <li>Receive instant results showing:
              <ul>
                <li>✅ Stolen status from community theft registries</li>
                <li>✅ Title status (clean, salvage, rebuilt, flood, junk)</li>
                <li>✅ Accident history from insurance claims</li>
                <li>✅ Odometer readings and rollback detection</li>
                <li>✅ Manufacturer recalls and safety issues</li>
                <li>✅ Lien and loan status</li>
              </ul>
            </li>
          </ol>

          <h3>Method 2: NICB VINCheck (Free, Theft & Total Loss Only)</h3>
          <p>The National Insurance Crime Bureau offers free VIN checks at nicb.org/vincheck, but only shows:</p>
          <ul>
            <li>Theft reports in the last 5 years</li>
            <li>Total loss insurance claims</li>
          </ul>
          <p><strong>Limitation:</strong> Does not show accident history, title status, odometer readings, or liens. Limited to 5 checks per day.</p>

          <h3>Method 3: State DMV VIN Verification</h3>
          <p>Each state's DMV provides title history, but only for vehicles registered in that state:</p>
          <ul>
            <li><strong>California:</strong> dmv.ca.gov - $20 vehicle history report</li>
            <li><strong>Texas:</strong> txdmv.gov - Free title verification online</li>
            <li><strong>Florida:</strong> flhsmv.gov - $10 title search</li>
            <li><strong>New York:</strong> dmv.ny.gov - $10 vehicle history report</li>
          </ul>
          <p><strong>Limitation:</strong> Only shows history within that state. A car titled in California may have prior issues from another state.</p>

          <h3>Method 4: Carfax ($39.99) and AutoCheck ($24.99)</h3>
          <p>Paid commercial services provide detailed reports but have drawbacks:</p>
          <ul>
            <li>✅ Show accident history from insurance claims</li>
            <li>✅ Service records from dealerships</li>
            <li>✅ Previous owners</li>
            <li>✅ Title history across multiple states</li>
            <li>❌ Expensive ($40 per report or $60 for 5 reports)</li>
            <li>❌ Don't check real-time community theft registries</li>
            <li>❌ May miss unreported accidents (40% of accidents aren't reported to insurance)</li>
          </ul>
          <p>SafeOrStolen checks the same databases Carfax uses, plus law enforcement records Carfax doesn't access—for free.</p>

          <h2>How to Decode a VIN Manually (2026 Method)</h2>
          <p>Understanding VIN structure helps you spot fake or tampered VINs:</p>
          
          <h3>Example VIN: 1HGCM82633A123456</h3>
          <ul>
            <li><strong>1:</strong> Country (1 = USA, J = Japan, W = Germany)</li>
            <li><strong>HG:</strong> Manufacturer (HG = Honda)</li>
            <li><strong>CM826:</strong> Vehicle attributes (model, body type, engine, trim)</li>
            <li><strong>3:</strong> Check digit (mathematical validation - if this doesn't compute, VIN is fake)</li>
            <li><strong>3:</strong> Model year (3 = 2003, D = 2013, L = 2020, M = 2021, N = 2022, P = 2023, R = 2024, S = 2025, T = 2026)</li>
            <li><strong>3:</strong> Assembly plant code</li>
            <li><strong>A123456:</strong> Serial number (unique to this specific vehicle)</li>
          </ul>

          <h3>Free VIN Decoders</h3>
          <ul>
            <li><strong>NHTSA VIN Decoder:</strong> vpic.nhtsa.dot.gov/decoder - Official government decoder</li>
            <li><strong>SafeOrStolen:</strong> Includes VIN decoding plus theft/title verification</li>
          </ul>

          <h2>What VIN Checks Reveal (And What They Don't)</h2>

          <h3>What You WILL Learn:</h3>
          <ul>
            <li>✅ Stolen status from community theft registries (stolen property reports from all 50 states, local police)</li>
            <li>✅ Title status: clean, salvage, rebuilt, junk, flood, fire, hail</li>
            <li>✅ Reported accidents with insurance claims</li>
            <li>✅ Odometer readings at various points in time</li>
            <li>✅ Number of previous owners</li>
            <li>✅ Manufacturer recalls and safety defects</li>
            <li>✅ Lien status and outstanding loans</li>
            <li>✅ State-to-state title transfers</li>
          </ul>

          <h3>What VIN Checks WON'T Show:</h3>
          <ul>
            <li>❌ Unreported accidents (no insurance claim filed)</li>
            <li>❌ Mechanical issues not tied to recalls</li>
            <li>❌ Maintenance history from independent mechanics</li>
            <li>❌ Cosmetic repairs (paint, dents, scratches)</li>
            <li>❌ Tire condition, brake wear, fluid leaks</li>
          </ul>
          <p><strong>Always pair VIN checks with professional pre-purchase inspections.</strong></p>

          <h2>Understanding Title Brands: What They Mean</h2>

          <h3>Clean Title</h3>
          <p>No damage, theft, or insurance claims. This is what you want.</p>

          <h3>Salvage Title</h3>
          <p>Vehicle declared a total loss by insurance after severe damage (typically 70-90% of value). Not street legal until repaired and inspected.</p>

          <h3>Rebuilt/Reconstructed Title</h3>
          <p>Previously salvage-titled vehicle that was repaired and passed state inspection. Street legal but worth 20-40% less than clean title equivalent. Harder to insure.</p>

          <h3>Flood/Water Damage Title</h3>
          <p>Vehicle submerged in flood waters. Extremely dangerous due to hidden electrical, mechanical, and mold issues. <strong>NEVER BUY</strong> flood-titled vehicles.</p>

          <h3>Junk Title</h3>
          <p>Vehicle fit only for parts or scrap. Cannot be titled or driven legally. If someone is selling a "junk title" car as drivable, it's a scam.</p>

          <h3>Lemon Law Buyback</h3>
          <p>Manufacturer repurchased vehicle due to unfixable defects. State law requires disclosure, but some sellers hide this by titling in another state.</p>

          <h2>Common VIN-Related Scams and How to Avoid Them</h2>

          <h3>1. Title Washing</h3>
          <p><strong>The scam:</strong> Seller moves salvage-titled car to a state with lax title laws, obtains a "clean" title, then sells at full price.</p>
          <p><strong>How to detect:</strong> Run VIN through SafeOrStolen (checks all 50 states' records) or NMVTIS (National Motor Vehicle Title Information System).</p>

          <h3>2. VIN Cloning</h3>
          <p><strong>The scam:</strong> Stolen vehicle's VIN is replaced with a VIN from a similar legitimate vehicle (often from salvage yards or total loss auctions).</p>
          <p><strong>How to detect:</strong> Verify VIN on dashboard matches door jamb, title, and engine block. Check federal VIN formatting rules—cloned VINs often have incorrect check digits.</p>

          <h3>3. Odometer Rollback</h3>
          <p><strong>The scam:</strong> Mileage is rolled back 50,000-100,000 miles to increase resale value.</p>
          <p><strong>How to detect:</strong> VIN checks show odometer readings from inspections, registrations, and service records. Look for:
            <ul>
              <li>Inconsistent mileage progression (145k miles in 2023, 87k miles in 2026)</li>
              <li>Excessive wear on pedals, seats, steering wheel compared to claimed mileage</li>
              <li>Service stickers showing higher mileage than odometer</li>
            </ul>
          </p>

          <h3>4. Curbstoning</h3>
          <p><strong>The scam:</strong> Unlicensed dealer buys damaged/stolen cars at auction, makes minimal repairs, sells on Craigslist/Facebook Marketplace as private party to avoid dealer regulations and warranty obligations.</p>
          <p><strong>How to detect:</strong>
            <ul>
              <li>Seller has multiple cars for sale</li>
              <li>Won't meet at their address</li>
              <li>Title isn't in their name</li>
              <li>Pressures you to skip VIN check</li>
            </ul>
          </p>

          <h2>State-Specific VIN Requirements</h2>
          <p>VIN verification requirements vary by state:</p>
          <ul>
            <li><strong>California:</strong> CHP VIN verification required for all out-of-state transfers and vehicles without CA title</li>
            <li><strong>Texas:</strong> VIN inspection required within 30 days of purchase</li>
            <li><strong>Florida:</strong> Physical VIN verification required for vehicles from out of state</li>
            <li><strong>New York:</strong> VIN verification required for salvage/rebuilt titles</li>
          </ul>
          <p>Check your state's DMV website or use SafeOrStolen's <Link to="/verify" className="text-primary hover:underline">state-specific VIN lookup</Link> for local requirements.</p>

          <h2>Red Flags When Buying Used Cars</h2>
          <p>Beyond VIN checks, watch for these warning signs:</p>
          <ul>
            <li>Seller refuses to provide VIN before meeting</li>
            <li>Price is 20%+ below market value (Kelly Blue Book/Edmunds)</li>
            <li>Title shows lien holder but seller claims it's paid off</li>
            <li>Out-of-state title from known title washing states (e.g., Georgia, Pennsylvania, New Jersey for flood cars)</li>
            <li>Mismatched VIN plates or rivets (signs of VIN swapping)</li>
            <li>Seller insists on meeting in parking lots, never at their address</li>
            <li>Pushes for cash payment before you can do a VIN check</li>
            <li>Won't allow pre-purchase inspection by your mechanic</li>
          </ul>

          <h2>The Pre-Purchase Inspection Checklist</h2>
          <p>After running a VIN check, perform a physical inspection:</p>
          <ol>
            <li><strong>Verify VIN consistency:</strong> Dashboard = Door jamb = Title = Engine block</li>
            <li><strong>Check for flood damage:</strong>
              <ul>
                <li>Musty smell or visible mold</li>
                <li>Water line stains under hood or in trunk</li>
                <li>Rust in unusual places (under carpets, in electronics)</li>
                <li>Fogging/moisture inside headlights or taillights</li>
              </ul>
            </li>
            <li><strong>Look for accident repair:</strong>
              <ul>
                <li>Paint overspray on moldings, glass, or engine</li>
                <li>Misaligned body panels (uneven gaps)</li>
                <li>Different paint texture/color between panels</li>
                <li>Welding marks on frame (frame damage)</li>
              </ul>
            </li>
            <li><strong>Test drive thoroughly:</strong>
              <ul>
                <li>Highway speeds (65+ mph) to check for vibrations</li>
                <li>All gears, including reverse</li>
                <li>Braking, acceleration, steering response</li>
                <li>Listen for unusual noises (grinding, squealing, clunking)</li>
              </ul>
            </li>
            <li><strong>Professional inspection:</strong> Pay $100-200 for a mechanic to inspect the vehicle on a lift. This catches issues VIN reports miss.</li>
          </ol>

          <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Start Your Free VIN Check Now</h3>
            <p className="mb-4">Verify any vehicle's history in 3 seconds. Check for stolen status, title issues, and accident history before you buy.</p>
            <AppStoreBadges size="sm" showPWA={false} />
            <p className="mt-4 text-sm text-muted-foreground">Or verify instantly at <Link to="/verify" className="text-primary hover:underline font-semibold">SafeOrStolen.com/verify</Link></p>
          </div>

          <h2>Why SafeOrStolen is the Best Carfax Alternative</h2>
          <ul>
            <li>✅ <strong>Free VIN checks:</strong> 2 free searches, no credit card required</li>
            <li>✅ <strong>Real-time law enforcement data:</strong> Checks stolen property reports from all 50 states Carfax doesn't access</li>
            <li>✅ <strong>3-second results:</strong> Instant verification vs. 30+ seconds with Carfax</li>
            <li>✅ <strong>Mobile app with barcode scanning:</strong> Scan VIN stickers at dealerships instantly</li>
            <li>✅ <strong>All 50 states covered:</strong> Comprehensive title history nationwide</li>
            <li>✅ <strong>Beyond vehicles:</strong> Also checks phones, laptops, bikes, firearms, boats</li>
          </ul>

          <h2>Conclusion</h2>
          <p>A comprehensive VIN check takes 3 seconds and can save you from losing thousands of dollars on a stolen, salvaged, or fraudulent vehicle. With 873,000+ stolen vehicles on the road and billions lost to title washing and odometer fraud, verifying every VIN before purchase is non-negotiable in 2026.</p>
          <p>SafeOrStolen provides the most complete VIN verification available—combining community theft registries, NHTSA vehicle records, insurance claims, and international theft databases into one instant report. Don't buy a car until you've verified the VIN.</p>
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </footer>
      </article>
      
      <RelatedPagesSection 
        currentPage="/blog/complete-vin-guide" 
        currentCategory="blog" 
        maxLinks={5}
      />
    </>
  );
}
