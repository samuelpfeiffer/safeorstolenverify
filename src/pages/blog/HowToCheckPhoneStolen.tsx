import { PageSEO } from '@/components/seo/PageSEO';
import { AppStoreBadges } from '@/components/app/AppStoreBadges';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

export default function HowToCheckPhoneStolen() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check if a Phone is Stolen Before Buying (2026 Guide)",
    "description": "Complete guide to verifying if a used phone is stolen using IMEI checker, carrier blacklist lookup, and other verification methods. Protect yourself from buying stolen phones.",
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
      <TopNavigation />
      <PageSEO
        title="How to Check if a Phone is Stolen Before Buying (2026 Guide)"
        description="Complete guide to verifying if a used phone is stolen using IMEI checker, carrier blacklist lookup, and other verification methods. Protect yourself from buying stolen phones."
        keywords="check stolen phone, IMEI checker, phone blacklist lookup, verify used phone, stolen phone check"
        canonical="/blog/how-to-check-if-phone-stolen"
        structuredData={structuredData}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">How to Check if a Phone is Stolen Before Buying (2026 Guide)</h1>
          <p className="text-lg text-muted-foreground">Complete guide to verifying if a used phone is stolen using IMEI checker, carrier blacklist lookup, and other verification methods.</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <time dateTime="2026-01-15">January 15, 2026</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        <BlogHeroImage src={blogImages.imeiChecker} alt="iPhone settings showing IMEI number with verification checkmark - phone stolen check guide" />

        <div className="prose prose-lg max-w-none">
          <h2>Why Checking a Phone's IMEI is Critical</h2>
          <p>Buying a stolen phone isn't just a bad deal—it's a legal nightmare. In 2026, over 2.1 million phones were reported stolen in the US alone. When you buy a stolen device, you risk:</p>
          <ul>
            <li>Having the phone blacklisted and rendered useless by carriers</li>
            <li>Legal consequences for possessing stolen property</li>
            <li>Complete loss of your purchase money with no recourse</li>
            <li>Identity theft if the previous owner's data remains on the device</li>
          </ul>

          <h2>What is an IMEI Number?</h2>
          <p>The International Mobile Equipment Identity (IMEI) is a unique 15-digit code that identifies every mobile device. It's like a fingerprint for your phone. Carriers, law enforcement, and verification services use IMEI numbers to track stolen devices.</p>
          
          <h3>How to Find Your Phone's IMEI</h3>
          <ul>
            <li><strong>Dial *#06#</strong> - Works on all phones, displays IMEI instantly</li>
            <li><strong>iPhone:</strong> Settings → General → About → scroll to IMEI</li>
            <li><strong>Android:</strong> Settings → About Phone → Status → IMEI</li>
            <li><strong>Physical device:</strong> Check the SIM tray or back of the phone</li>
            <li><strong>Original box:</strong> IMEI is printed on the box label</li>
          </ul>

          <h2>Step-by-Step: How to Check if a Phone is Stolen</h2>
          
          <h3>Method 1: Use SafeOrStolen's Free IMEI Checker (Fastest)</h3>
          <p>SafeOrStolen checks against 100+ databases instantly including carrier blacklists, police reports, and international theft databases.</p>
          <ol>
            <li>Go to <Link to="/verify" className="text-primary hover:underline">SafeOrStolen.com/verify</Link></li>
            <li>Enter the 15-digit IMEI number</li>
            <li>Get results in 3 seconds showing:
              <ul>
                <li>Stolen status from law enforcement databases</li>
                <li>Carrier blacklist status (AT&T, Verizon, T-Mobile, Sprint)</li>
                <li>International theft reports</li>
                <li>Finance/lease status</li>
              </ul>
            </li>
          </ol>
          <p className="bg-muted p-4 rounded-lg my-6">
            <strong>💡 Pro Tip:</strong> Download the <Link to="/app" className="text-primary hover:underline">SafeOrStolen mobile app</Link> to scan phone barcodes instantly at the point of sale. No typing required.
          </p>

          <h3>Method 2: Check Carrier Blacklists Directly</h3>
          <p>Each major carrier maintains its own blacklist, but this method is slower and only checks one carrier at a time:</p>
          <ul>
            <li><strong>AT&T:</strong> att.com/deviceunlock - Check unlock eligibility (blacklisted phones can't unlock)</li>
            <li><strong>Verizon:</strong> verizon.com/od/prepaid/bring-your-own-device - IMEI compatibility checker</li>
            <li><strong>T-Mobile:</strong> t-mobile.com/resources/bring-your-own-phone - Device eligibility check</li>
            <li><strong>Sprint (now T-Mobile):</strong> sprint.com/en/shop/bring-your-phone-to-sprint.html</li>
          </ul>
          <p><strong>Limitation:</strong> A phone clean on one carrier may still be blacklisted on others or reported stolen to police.</p>

          <h3>Method 3: CheckMEND (Paid Service)</h3>
          <p>CheckMEND charges $3.99 per check and only covers UK databases. Not recommended for US buyers. SafeOrStolen offers $0.99/check or $2.99/month unlimited.</p>

          <h3>Method 4: IMEI.info (Limited Free Checks)</h3>
          <p>Provides basic info but doesn't check police databases or comprehensive blacklists. Results are incomplete.</p>

          <h2>Red Flags When Buying Used Phones</h2>
          <p>Even before checking the IMEI, watch for these warning signs:</p>
          <ul>
            <li>Seller refuses to provide IMEI number before meeting</li>
            <li>Price significantly below market value (30%+ discount)</li>
            <li>No original box, receipts, or proof of purchase</li>
            <li>Seller insists on cash-only transactions</li>
            <li>Phone is activation locked (iCloud lock or Google FRP)</li>
            <li>Meeting location is unusual (parking lots, not public places)</li>
            <li>Seller pressure tactics or urgency to complete the sale</li>
          </ul>

          <h2>What to Do if the IMEI Check Fails</h2>
          <p>If SafeOrStolen or any checker shows the phone as stolen or blacklisted:</p>
          <ol>
            <li><strong>Do not complete the purchase</strong> - Walk away immediately</li>
            <li><strong>Report the seller</strong> - If on Facebook Marketplace/OfferUp, report the listing</li>
            <li><strong>Contact local police</strong> - Provide IMEI, seller info, and listing details</li>
            <li><strong>Document everything</strong> - Screenshots, messages, phone numbers</li>
          </ol>
          <p className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg my-6">
            <strong>⚠️ Warning:</strong> Attempting to "unlock" or "clean" a blacklisted IMEI is illegal and ineffective. Carriers share blacklists internationally through the GSMA database.
          </p>

          <h2>Buying from Marketplaces: Platform-Specific Tips</h2>
          
          <h3>Facebook Marketplace</h3>
          <ul>
            <li>Check seller's profile age and mutual friends</li>
            <li>Review seller's other listings and past sales</li>
            <li>Use Facebook's "Meet in a Safe Location" feature</li>
            <li>Enable Facebook Checkout protection when available</li>
          </ul>

          <h3>OfferUp</h3>
          <ul>
            <li>Only buy from "TruYou" verified sellers</li>
            <li>Check seller ratings and reviews</li>
            <li>Use OfferUp's in-app payment for buyer protection</li>
            <li>Meet at OfferUp Community MeetUp Spots</li>
          </ul>

          <h3>eBay</h3>
          <ul>
            <li>Check seller feedback score (95%+ minimum)</li>
            <li>Verify "Money Back Guarantee" badge is present</li>
            <li>Read return policy before purchasing</li>
            <li>Use eBay's messaging system (never go off-platform)</li>
          </ul>

          <h3>Craigslist</h3>
          <ul>
            <li>Meet at police station parking lots (many have designated safe trade zones)</li>
            <li>Bring someone with you</li>
            <li>Test phone thoroughly before exchanging money</li>
            <li>Get seller's ID and text a photo to a friend</li>
          </ul>

          <h2>Beyond IMEI: Additional Checks to Perform</h2>
          <ol>
            <li><strong>Activation Lock Status</strong>
              <ul>
                <li>iPhone: Settings → [Your Name] - Should show YOUR Apple ID, not seller's</li>
                <li>Android: Settings → Google → Should not show "Factory Reset Protection"</li>
              </ul>
            </li>
            <li><strong>Battery Health</strong>
              <ul>
                <li>iPhone: Settings → Battery → Battery Health (80%+ is acceptable)</li>
                <li>Android: Dial *#*#4636#*#* or use AccuBattery app</li>
              </ul>
            </li>
            <li><strong>Physical Inspection</strong>
              <ul>
                <li>Check for water damage (look in charging port, SIM tray)</li>
                <li>Test all buttons, cameras, speakers, microphone</li>
                <li>Verify serial number on phone matches box</li>
              </ul>
            </li>
            <li><strong>Network Functionality</strong>
              <ul>
                <li>Insert your SIM card and make a test call</li>
                <li>Test data connectivity (4G/5G)</li>
                <li>Verify Wi-Fi and Bluetooth work</li>
              </ul>
            </li>
          </ol>

          <h2>Legal Consequences of Buying Stolen Phones</h2>
          <p>Possessing stolen property is a criminal offense in all 50 states, even if you purchased it unknowingly:</p>
          <ul>
            <li><strong>Misdemeanor charges:</strong> Fines up to $1,000 and potential jail time</li>
            <li><strong>Asset seizure:</strong> Police can confiscate the phone without compensation</li>
            <li><strong>Civil liability:</strong> Original owner can sue for damages</li>
            <li><strong>Credit damage:</strong> Financed phones may affect your credit if seller defaults</li>
          </ul>

          <h2>The SafeOrStolen Advantage</h2>
          <p>While free carrier checks exist, SafeOrStolen provides the most comprehensive verification:</p>
          <ul>
            <li>✅ Checks 100+ databases simultaneously (carriers, police, international)</li>
            <li>✅ 3-second results vs 15+ minutes with manual checks</li>
            <li>✅ Mobile app with barcode scanning for instant verification</li>
            <li>✅ Covers all item types (phones, laptops, bikes, cars, firearms)</li>
            <li>✅ Free trial with 2 checks - no credit card required</li>
            <li>✅ Legal protection documentation if issues arise</li>
          </ul>

          <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Start Checking Phones Now</h3>
            <p className="mb-4">Protect yourself from buying stolen phones. Get instant verification results in 3 seconds.</p>
            <AppStoreBadges size="sm" showPWA={false} />
            <p className="mt-4 text-sm text-muted-foreground">Or verify instantly at <Link to="/verify" className="text-primary hover:underline font-semibold">SafeOrStolen.com/verify</Link></p>
          </div>

          <h2>Conclusion</h2>
          <p>Checking if a phone is stolen before buying takes less than 3 seconds with the right tools, but failing to check can cost you hundreds of dollars and potential legal trouble. Always verify the IMEI using SafeOrStolen's comprehensive database before completing any used phone purchase.</p>
          <p>The used phone market is booming, but so is phone theft. With over 2 million stolen phones reported annually, taking 3 seconds to verify can save you from financial loss and legal consequences. Don't become another statistic—verify every phone, every time.</p>
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </footer>
      </article>
      <RelatedPagesSection currentPage="/blog/how-to-check-if-phone-stolen" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
}
