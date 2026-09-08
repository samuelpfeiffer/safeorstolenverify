import { PageSEO } from '@/components/seo/PageSEO';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

export default function CompleteImeiGuide() {
  const navigate = useNavigate();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete IMEI Guide 2026: How to Check if Your Phone is Stolen',
    description: 'Ultimate guide to IMEI numbers, how to find your IMEI, check if a phone is stolen or blacklisted, and protect yourself when buying used smartphones in 2026.',
    author: {
      '@type': 'Organization',
      name: 'SafeOrStolen'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      logo: {
        '@type': 'ImageObject',
        url: 'https://safeorstolen.com/logo.png'
      }
    },
    datePublished: '2026-01-15',
    dateModified: '2026-01-15'
  };

  return (
    <>
      <PageSEO
        title="Complete IMEI Guide 2026: Check if Phone is Stolen | SafeOrStolen"
        description="Ultimate guide to IMEI numbers, how to find your IMEI, check if a phone is stolen or blacklisted, and protect yourself when buying used smartphones in 2026."
        keywords="IMEI check, IMEI number lookup, check if phone stolen, IMEI blacklist check, phone verification guide"
        canonical="/blog/complete-imei-guide-protect-yourself"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-4">
              ← Back to Blog
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Complete IMEI Guide: Protect Yourself When Buying Phones
            </h1>
            <p className="text-lg text-muted-foreground">
              Published January 15, 2026 • 9 min read
            </p>
          </div>

          <BlogHeroImage src={blogImages.imeiChecker} alt="iPhone showing IMEI settings with verification shield - complete IMEI guide" />

          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Smartphone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Why IMEI Verification Matters</h3>
                  <p className="text-muted-foreground">
                    Over 2.1 million smartphones were reported stolen in the U.S. in 2026. IMEI verification is your 
                    first line of defense against buying stolen or blacklisted phones.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What is an IMEI Number?</h2>
            <p className="text-muted-foreground mb-4">
              IMEI stands for International Mobile Equipment Identity. It's a unique 15-digit code assigned to every 
              smartphone and cellular-enabled device manufactured worldwide. Think of it as your phone's fingerprint—no 
              two devices share the same IMEI.
            </p>
            <p className="text-muted-foreground mb-6">
              IMEI numbers were created by the carrier and manufacturer blacklists (Global System for Mobile Communications Association) to track 
              devices across cellular networks, prevent phone cloning, and enable law enforcement to identify stolen 
              phones. In 2026, IMEI tracking is the global standard used by all major carriers.
            </p>

            <div className="bg-card border rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">IMEI Format Breakdown</h3>
              <p className="text-muted-foreground mb-3">
                Example IMEI: <code className="bg-muted px-2 py-1 rounded-[0.25rem]">356938035643809</code>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>First 8 digits (TAC):</strong> Type Allocation Code identifying manufacturer and model</li>
                <li><strong>Next 6 digits (SNR):</strong> Serial Number unique to this specific device</li>
                <li><strong>Last digit:</strong> Check digit for validation (sometimes omitted)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">How to Find Your IMEI Number</h2>
            <p className="text-muted-foreground mb-6">
              There are multiple ways to locate your phone's IMEI. All methods retrieve the same number.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Method 1: Dial *#06#</h3>
                <p className="text-muted-foreground mb-3">
                  Universal method that works on all smartphones (iPhone, Android, any carrier). Open your phone dialer 
                  and type <code className="bg-muted px-2 py-1 rounded-[0.25rem]">*#06#</code>. Your IMEI will instantly display 
                  on screen. No call is made.
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Note:</strong> Dual-SIM phones may display two IMEIs (one for each SIM slot).
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Method 2: Settings Menu</h3>
                <p className="text-muted-foreground mb-3">
                  <strong>iPhone:</strong> Settings → General → About → scroll down to IMEI
                </p>
                <p className="text-muted-foreground mb-3">
                  <strong>Android:</strong> Settings → About Phone → Status → IMEI Information
                </p>
                <p className="text-muted-foreground text-sm">
                  Exact path varies by manufacturer (Samsung, Google Pixel, etc.), but always under About Phone or Device Information.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Method 3: Physical Label</h3>
                <p className="text-muted-foreground mb-3">
                  Check the original box your phone came in—IMEI is printed on the barcode label. Also printed on 
                  the SIM card tray slot on most iPhones, or under the battery on older Android phones with removable batteries.
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Warning:</strong> If the IMEI on the box doesn't match the IMEI displayed by dialing *#06#, 
                  the phone may be counterfeit or the box is from a different device.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Method 4: Account Portal</h3>
                <p className="text-muted-foreground">
                  Log into your carrier account (AT&T, Verizon, T-Mobile) online. Navigate to your device details—IMEI 
                  will be listed under device information. Useful if your phone is lost or stolen and you can't physically access it.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What Does IMEI Blacklisting Mean?</h2>
            <p className="text-muted-foreground mb-4">
              When a phone is reported stolen to a carrier or law enforcement, its IMEI is added to a global blacklist 
              database shared across carriers worldwide. Blacklisted phones cannot activate on cellular networks, 
              rendering them worthless for normal use.
            </p>
            <p className="text-muted-foreground mb-6">
              In 2026, the carrier and manufacturer blacklists Device Check database connects 800+ carriers across 100+ countries. When an IMEI is 
              blacklisted in the U.S., it's automatically blacklisted globally within 24 hours. Thieves cannot simply 
              sell stolen phones overseas to bypass blacklists.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Critical Buyer Warning</h3>
                  <p className="text-muted-foreground">
                    A phone can be blacklisted AFTER you buy it. If the seller fraudulently reports the phone stolen 
                    to their carrier after receiving your payment, your phone will be blacklisted and unusable. 
                    Always verify IMEI through SafeOrStolen BEFORE buying.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">How to Check if an IMEI is Blacklisted</h2>
            <p className="text-muted-foreground mb-6">
              Before buying any used phone, ALWAYS verify its IMEI status. This takes 3 seconds and can save you 
              hundreds of dollars and legal trouble.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Recommended: SafeOrStolen</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  SafeOrStolen checks 100+ databases simultaneously including carrier and manufacturer blacklists global blacklist, stolen property reports from all 50 states, all major 
                  U.S. carriers, manufacturer records, and community theft registries. Results in 3 seconds.
                </p>
                <Button onClick={() => navigate('/verify')} className="gap-2">
                  <Shield className="h-4 w-4" />
                  Check IMEI Now (Free)
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Alternative: Carrier Direct Check</h3>
                <p className="text-muted-foreground mb-3">
                  Major carriers offer free IMEI checks on their websites:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>AT&T:</strong> att.com/deviceunlock</li>
                  <li><strong>Verizon:</strong> verizon.com/bring-your-own-device</li>
                  <li><strong>T-Mobile:</strong> t-mobile.com/verifyIMEI</li>
                </ul>
                <p className="text-muted-foreground mt-3 text-sm">
                  <strong>Limitation:</strong> Carrier checks only show blacklist status for THEIR network. 
                  Phone may be blacklisted on other carriers or internationally. SafeOrStolen checks all carriers globally.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What to Avoid</h3>
                <p className="text-muted-foreground mb-3">
                  <strong>❌ Free IMEI check websites (IMEI24, IMEIpro, etc.):</strong> These sites scrape limited 
                  data, show inaccurate results, and harvest IMEIs for fraud. Many sell your IMEI to criminals.
                </p>
                <p className="text-muted-foreground">
                  <strong>❌ Trusting seller's word:</strong> Sellers have zero incentive to reveal blacklist status. 
                  Always verify independently.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Red Flags When Buying Used Phones</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Seller Refuses to Provide IMEI</h3>
                <p className="text-muted-foreground">
                  Legitimate sellers have nothing to hide. If seller won't provide IMEI before meetup, phone is likely 
                  stolen or blacklisted. Walk away immediately.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">iCloud/Google Lock Still Active</h3>
                <p className="text-muted-foreground">
                  If Find My iPhone or Factory Reset Protection is still enabled and linked to seller's account, phone 
                  may be stolen. Seller must fully remove their account before sale.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Price 40%+ Below Market Value</h3>
                <p className="text-muted-foreground">
                  Thieves want quick cash and price stolen phones well below market. If a 3-month-old iPhone 15 Pro 
                  is $500 when market value is $900, it's almost certainly stolen.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">IMEI Sticker Removed or Tampered</h3>
                <p className="text-muted-foreground">
                  Check the IMEI sticker on the box or SIM tray. If it's scratched off, replaced, or doesn't match 
                  the phone's internal IMEI (*#06#), phone is likely stolen or counterfeit.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What If You Already Bought a Blacklisted Phone?</h2>
            <p className="text-muted-foreground mb-4">
              Unfortunately, you have limited legal recourse. Blacklisted phones cannot be unlocked or unblacklisted 
              except by the original owner who reported them stolen. Your options are:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
              <li>
                <strong>Contact the seller and demand refund</strong> (unlikely to work if they're a thief)
              </li>
              <li>
                <strong>File a police report</strong> (they may seize the phone and return it to original owner)
              </li>
              <li>
                <strong>Sell for parts only</strong> (screen, battery, camera components still have value)
              </li>
              <li>
                <strong>Accept the loss</strong> (most common outcome for buyers who didn't verify IMEI)
              </li>
            </ol>
            <p className="text-muted-foreground mb-8">
              This is why pre-purchase IMEI verification is absolutely critical. It's the ONLY way to protect yourself.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">SafeOrStolen Mobile App Advantage</h2>
            <p className="text-muted-foreground mb-4">
              Unlike competitors (CheckMEND, IMEI.info) that only offer web-based lookups requiring manual IMEI typing, 
              SafeOrStolen provides a free mobile app with instant barcode scanning. During in-person meetups, you can 
              verify the phone in 3 seconds by scanning the barcode on the box or SIM tray.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Download SafeOrStolen Mobile App
              </h3>
              <p className="text-muted-foreground mb-4">
                Instantly scan phone barcodes, verify IMEI status offline, and protect yourself during transactions. 
                Free to download, no competitor offers this feature.
              </p>
              <Button onClick={() => navigate('/app')} size="lg" className="gap-2">
                Download Free App
              </Button>
            </div>

            <div className="bg-card border-2 border-primary rounded-lg p-8 text-center mt-12">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Verify IMEI Before Buying</h3>
              <p className="text-muted-foreground mb-6">
                Check any phone's IMEI against 50+ global databases in 3 seconds. Free verification available.
              </p>
              <Button onClick={() => navigate('/verify')} size="lg" className="gap-2">
                <Shield className="h-5 w-5" />
                Check IMEI Now
              </Button>
            </div>
          </div>
        </article>

        <div className="container mx-auto px-4 py-12">
          <AppDownloadCTA variant="default" showBenefits={true} />
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/complete-imei-guide-protect-yourself" currentCategory="blog" maxLinks={5} />
    </>
  );
}
