import { PageSEO } from '@/components/seo/PageSEO';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/lib/router-compat';
import { Smartphone, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

/** Oct 8 2026: copy fixed by hand. Removed the stolen-phone count, GSMA carrier/country counts and 24-hour claim,
 * "SafeOrStolen checks all carriers globally", carrier website addresses, unverified claims about named IMEI sites,
 * price-percentage figures, all-caps warnings and emoji. */
export default function CompleteImeiGuide() {
  const navigate = useNavigate();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete IMEI Guide 2026: How to Check if Your Phone is Stolen',
    description: 'How to find a phone\'s IMEI, what blacklisting means, how to check if a phone is stolen or blacklisted, and the red flags to watch for when buying a used phone.',
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
        description="How to find a phone's IMEI, what blacklisting means, how to check if a used phone is stolen or blacklisted, and the red flags to watch for before you pay."
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
                    A stolen or blacklisted phone can stop working on a network after you've paid for it, and police can return
                    it to its owner. Checking the IMEI before you buy is the first thing to do.
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
              Carriers use the IMEI to identify a device on their network, and carrier blacklists use it to block phones
              reported lost or stolen. Police also use it to identify a stolen phone when they recover one.
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
                  and type <code className="bg-muted px-2 py-1 rounded-[0.25rem]">*#06#</code>. Your IMEI will appear 
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
              When an owner reports a phone lost or stolen to their carrier, the carrier adds its IMEI to a blacklist.
              US carriers share these lists, so a blacklisted phone usually can't be activated on another US network,
              which leaves it close to worthless for normal use.
            </p>
            <p className="text-muted-foreground mb-6">
              Many carriers outside the US also share blacklist data through the GSMA, the mobile industry association,
              though coverage varies by country and carrier.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">A phone can be blacklisted after you buy it</h3>
                  <p className="text-muted-foreground">
                    A seller can take your money and then report the phone lost to their carrier, and it gets blacklisted.
                    A check before you pay won't stop that, so also get a written receipt with the seller's name and the IMEI,
                    and pay in a way you can trace.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">How to Check if an IMEI is Blacklisted</h2>
            <p className="text-muted-foreground mb-6">
              Before buying any used phone, check its IMEI. It takes a few seconds and can save you the price of the phone
              and a visit from the police.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Recommended: SafeOrStolen</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  SafeOrStolen checks its own theft reports and public web results, and for phones it also shows the make and model from the IMEI.
                  To see whether a phone is on the lost/stolen carrier blacklist, you can buy a blacklist check on SafeOrStolen (monthly members get up to 20 a month) or ask the carrier. Results come back in a few seconds.
                </p>
                <Button onClick={() => navigate('/verify')} className="gap-2">
                  <Shield className="h-4 w-4" />
                  Check IMEI Now (Free)
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Alternative: Carrier Direct Check</h3>
                <p className="text-muted-foreground mb-3">
                  AT&T, Verizon and T-Mobile each have a bring-your-own-device or IMEI check page on their websites
                  where you can enter an IMEI and see whether it can be activated on that network.
                </p>
                <p className="text-muted-foreground mt-3 text-sm">
                  <strong>Limitation:</strong> a carrier's check tells you about its own network. It won't tell you whether the
                  phone was reported stolen to police or listed as stolen online.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What to Avoid</h3>
                <p className="text-muted-foreground mb-3">
                  <strong>Sites that don't say where their results come from:</strong> if a free IMEI checker doesn't list
                  its sources, you can't tell what a clean result means. Prefer a check that names every source it searched.
                </p>
                <p className="text-muted-foreground">
                  <strong>Taking the seller's word for it:</strong> a seller with a blacklisted phone has every reason not to
                  mention it. Check it yourself.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Red Flags When Buying Used Phones</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Seller Refuses to Provide IMEI</h3>
                <p className="text-muted-foreground">
                  An honest seller can send the IMEI in a minute. If a seller won't give it to you before the meetup,
                  treat that as a no and move on.
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">Price Far Below Market Value</h3>
                <p className="text-muted-foreground">
                  Thieves want quick cash and price stolen phones well below what similar phones sell for. Compare a few
                  listings for the same model and storage. If this one is far cheaper and the seller wants to meet today, be careful.
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
              That's why it's worth checking the IMEI, and seeing the seller sign out of their account, before you pay.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Check at the Meetup with the SafeOrStolen Web App</h2>
            <p className="text-muted-foreground mb-4">
              Some IMEI lookup sites, such as CheckMEND, expect you to type the IMEI by hand.
              SafeOrStolen has a free installable web app at safeorstolen.com/app that can scan the IMEI barcode. At an in-person meetup,
              you can scan the barcode on the box or SIM tray and get a result in a few seconds.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Install the Free SafeOrStolen Web App
              </h3>
              <p className="text-muted-foreground mb-4">
                Add SafeOrStolen to your home screen from safeorstolen.com/app, then scan the IMEI barcode on the box
                or SIM tray at the meetup. It's free and installs from your browser, not an app store.
              </p>
              <Button onClick={() => navigate('/app')} size="lg" className="gap-2">
                Get the Free Web App
              </Button>
            </div>

            <div className="bg-card border-2 border-primary rounded-lg p-8 text-center mt-12">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Verify IMEI Before Buying</h3>
              <p className="text-muted-foreground mb-6">
                Check any phone's IMEI against SafeOrStolen's theft reports and public web results in a few seconds. 2 free checks with a free account.
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
