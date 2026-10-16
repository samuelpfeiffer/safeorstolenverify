import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

export default function HowToCheckPhoneStolen() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check if a Phone Is Stolen Before Buying (2026 Guide)",
    "description": "How to check a used phone before you buy it: find the IMEI, check it for theft reports, check the carrier blacklist, and make sure Activation Lock is off.",
    "datePublished": "2026-01-15",
    "dateModified": "2026-10-07",
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
        title="How to Check if a Phone Is Stolen Before Buying (2026 Guide)"
        description="How to check a used phone before you buy: find the IMEI, check it for theft reports and the carrier blacklist, and make sure Activation Lock is off."
        keywords="check stolen phone, IMEI checker, phone blacklist lookup, verify used phone, stolen phone check"
        canonical="/blog/how-to-check-if-phone-stolen"
        structuredData={structuredData}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">How to Check if a Phone Is Stolen Before Buying (2026 Guide)</h1>
          <p className="text-lg text-muted-foreground">Get the IMEI, check it for theft reports and the carrier blacklist, and make sure the phone isn't locked to someone else's account before you pay.</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <time dateTime="2026-10-07">Updated October 7, 2026</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        <BlogHeroImage src={blogImages.imeiChecker} alt="iPhone settings screen showing the IMEI number, used to check whether a phone is stolen" />

        <div className="prose prose-lg max-w-none">
          <h2>Why Check a Phone's IMEI First</h2>
          <p>A stolen phone can look perfect at the meetup and stop working a week later. If you buy one, you risk:</p>
          <ul>
            <li>The carrier blocking it once the owner reports it, so it won't connect to that network</li>
            <li>The owner locking or erasing it if it's still tied to their Apple or Google account</li>
            <li>Police taking it back and returning it to the owner</li>
            <li>Losing the money you paid, because private sellers are hard to track down</li>
          </ul>

          <h2>What Is an IMEI Number?</h2>
          <p>The IMEI (International Mobile Equipment Identity) is a 15-digit number that identifies one specific phone. Carriers use it to block phones reported lost or stolen, and police use it to identify recovered phones.</p>

          <h3>How to Find a Phone's IMEI</h3>
          <ul>
            <li><strong>Dial *#06#</strong> - the IMEI shows on screen right away (two numbers on dual-SIM phones)</li>
            <li><strong>iPhone:</strong> Settings → General → About → scroll to IMEI</li>
            <li><strong>Android:</strong> Settings → About phone → IMEI (sometimes under Status)</li>
            <li><strong>SIM tray:</strong> many iPhones print it on the tray</li>
            <li><strong>Original box:</strong> on the label, but always compare it with the number the phone shows</li>
          </ul>

          <h2>Step by Step: How to Check if a Phone Is Stolen</h2>

          <h3>Method 1: Check the IMEI on SafeOrStolen</h3>
          <p>SafeOrStolen searches theft reports that owners have filed on the site and public web results such as listings and posts that mention the IMEI. It also shows the make and model the IMEI belongs to.</p>
          <ol>
            <li>Go to <Link to="/verify" className="text-primary hover:underline">safeorstolen.com/verify</Link></li>
            <li>Enter the 15-digit IMEI</li>
            <li>In a few seconds you'll see:
              <ul>
                <li>The result: reported stolen, possible match, or no report found in the records searched</li>
                <li>The make and model for that IMEI, so you can check it matches the listing</li>
                <li>Every source that was searched</li>
              </ul>
            </li>
            <li>For a lost/stolen carrier blacklist check, add the paid blacklist check (monthly members get up to 20 a month)</li>
          </ol>
          <p className="bg-muted p-4 rounded-lg my-6">
            <strong>Tip:</strong> The free <Link to="/app" className="text-primary hover:underline">SafeOrStolen web app</Link> can scan the IMEI barcode on the box with your camera, so you don't have to type 15 digits at the meetup. It needs a data connection.
          </p>

          <h3>Method 2: Ask the Carrier</h3>
          <p>Each carrier keeps its own records. Their bring-your-own-phone or unlock pages, or a call to customer service, will tell you whether they'll activate a given IMEI. The catch: each carrier only answers for its own network, and a carrier check doesn't tell you whether the phone was reported stolen to police.</p>

          <h2>Red Flags When Buying a Used Phone</h2>
          <p>Even before you check the IMEI, watch for these:</p>
          <ul>
            <li>The seller won't send the IMEI before you meet</li>
            <li>The price is far below other listings for the same model, with no reason given</li>
            <li>No box, no receipt, and a story that changes when you ask</li>
            <li>Cash only, and pressure to finish fast</li>
            <li>The phone asks for someone else's Apple ID or Google account after a reset</li>
            <li>The seller wants to meet somewhere out of sight</li>
          </ul>

          <h2>What to Do if the Check Flags the Phone</h2>
          <p>If SafeOrStolen or any other check shows the phone as reported stolen or blacklisted:</p>
          <ol>
            <li><strong>Don't buy it</strong> - walk away without confronting the seller</li>
            <li><strong>Report the listing</strong> - on Facebook Marketplace, OfferUp or wherever you found it</li>
            <li><strong>Contact local police</strong> - on the non-emergency line, with the IMEI, seller details and listing</li>
            <li><strong>Keep everything</strong> - screenshots, messages and phone numbers</li>
          </ol>
          <p className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg my-6">
            <strong>Warning:</strong> Services that promise to "clean" a blacklisted IMEI are a scam at best. Tampering with an IMEI is illegal in many places, and a phone with a changed IMEI is still stolen.
          </p>

          <h2>Tips for Each Marketplace</h2>

          <h3>Facebook Marketplace</h3>
          <ul>
            <li>Look at how old the seller's profile is and what else they've listed</li>
            <li>Ask for the IMEI in Messenger before you agree to meet</li>
            <li>Meet somewhere public, ideally a police safe-exchange spot</li>
          </ul>

          <h3>OfferUp</h3>
          <ul>
            <li>Favor sellers who have verified their identity on the platform</li>
            <li>Read the seller's ratings and reviews</li>
            <li>Pay through the platform when that option is offered</li>
          </ul>

          <h3>eBay</h3>
          <ul>
            <li>Read the seller's feedback, especially recent negative comments</li>
            <li>Read the return policy before you buy</li>
            <li>Keep all messages on eBay, never off-platform</li>
          </ul>

          <h3>Craigslist</h3>
          <ul>
            <li>Meet at a police station lot; many have a marked safe-exchange area</li>
            <li>Bring someone with you</li>
            <li>Test the phone fully before money changes hands</li>
          </ul>

          <h2>Checks to Do With the Phone in Your Hand</h2>
          <ol>
            <li><strong>Activation Lock / account lock</strong>
              <ul>
                <li>iPhone: after the seller erases it, it should start at the Hello screen and not ask for their Apple ID</li>
                <li>Android: after a reset, it should not ask for the previous owner's Google account</li>
              </ul>
            </li>
            <li><strong>Battery</strong>
              <ul>
                <li>iPhone: Settings → Battery → Battery Health</li>
                <li>Android: look in Settings → Battery or the device care section</li>
              </ul>
            </li>
            <li><strong>Physical condition</strong>
              <ul>
                <li>Look for corrosion in the charging port and SIM tray</li>
                <li>Test buttons, cameras, speakers and the microphone</li>
                <li>Make sure the IMEI on the phone matches the box</li>
              </ul>
            </li>
            <li><strong>Network</strong>
              <ul>
                <li>Put in your SIM and make a test call</li>
                <li>Turn on mobile data, Wi-Fi and Bluetooth</li>
              </ul>
            </li>
          </ol>

          <h2>Legal Side of Buying a Stolen Phone</h2>
          <p>Laws differ by state, but the basics are similar everywhere:</p>
          <ul>
            <li><strong>Knowingly buying stolen property is a crime.</strong> Ignoring obvious warning signs can count against you.</li>
            <li><strong>Police can take the phone back</strong> and return it to its owner, even if you paid for it.</li>
            <li><strong>A record helps.</strong> A dated check and a written receipt show you acted in good faith.</li>
          </ul>

          <h2>What SafeOrStolen Adds</h2>
          <p>Carrier checks only answer for one network. SafeOrStolen gives you:</p>
          <ul>
            <li>A search of its own theft reports and public web results in one check</li>
            <li>The make and model from the IMEI, so a mismatched listing stands out</li>
            <li>An optional paid carrier blacklist check</li>
            <li>A free installable web app with a camera barcode scanner</li>
            <li>Checks for other items too: laptops, bikes, cars, plates and guns</li>
            <li>2 free checks with a free account, no credit card; then $0.99 a check or $10 a month unlimited</li>
            <li>Each check saved to your account with the date, plus an optional $1.99 verification certificate</li>
          </ul>

          <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Check a Phone Now</h3>
            <p className="mb-4">Enter the IMEI and get a result in a few seconds.</p>
            <p className="text-sm text-muted-foreground">Check at <Link to="/verify" className="text-primary hover:underline font-semibold">safeorstolen.com/verify</Link>, or add the free web app to your home screen from <Link to="/app" className="text-primary hover:underline font-semibold">safeorstolen.com/app</Link>.</p>
          </div>

          <h2>Bottom Line</h2>
          <p>Get the IMEI before you meet, check it, and confirm at the meetup that the phone shows the same number and isn't locked to someone else's account. Those three steps take a few minutes and catch most bad deals.</p>
          <p>If anything doesn't line up, the IMEI, the account lock, or the seller's story, walk away. There will be another phone.</p>
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </footer>
      </article>
      <RelatedPagesSection currentPage="/blog/how-to-check-if-phone-stolen" currentCategory="blog" maxLinks={5} />
    </>
  );
}
