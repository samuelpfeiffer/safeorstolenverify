import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

export default function PhoneVerificationGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Phone Verification Guide: IMEI Check and Stolen Phone Lookup",
    "description": "How to check a used phone's IMEI before you buy it, what an IMEI check can and can't tell you, and the warning signs of a stolen phone.",
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
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-10-07"
  };

  return (
    <>
      <PageSEO
        title="Phone Verification Guide: IMEI Check & Stolen Phone Lookup | SafeOrStolen"
        description="How to check a used phone's IMEI before you buy: where to find it, what an IMEI check shows, the signs a phone is stolen, and what to do at the meetup."
        keywords="phone verification, IMEI check, stolen phone lookup, verify phone, check IMEI number, phone fraud protection"
        canonical="/blog/phone-verification-guide"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6">Phone Verification Guide: IMEI Check and Stolen Phone Lookup</h1>

            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <time dateTime="2026-10-07">Updated October 7, 2026</time>
              <span>•</span>
              <span>10 min read</span>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Check a Phone Before You Buy</h2>
              <p className="text-lg mb-4">
                A stolen phone can be blacklisted by a carrier, locked to its owner's account, or taken by police as evidence. If that happens after you've paid, you usually lose the phone and the money.
              </p>
              <p className="text-lg mb-4">
                The fix is simple: get the phone's IMEI number from the seller before you meet, check it, and then confirm at the meetup that the IMEI on the phone matches the one you checked. This guide walks through each step.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What Is an IMEI Number?</h2>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="text-lg mb-4">
                  <strong>IMEI (International Mobile Equipment Identity)</strong> is a 15-digit number that identifies one specific phone. Carriers use it to block a phone that's been reported lost or stolen.
                </p>
                <p className="text-lg">
                  Format: <code className="bg-background px-2 py-1 rounded-[0.25rem]">123456789012345</code>
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-3">How to Find the IMEI</h3>
              <div className="grid gap-4 mb-6">
                <Card className="p-4">
                  <h4 className="font-bold mb-2">Method 1: Dial *#06#</h4>
                  <p>Open the phone app and dial <code className="bg-muted px-2 py-1 rounded-[0.25rem]">*#06#</code>. The IMEI shows on screen right away. Phones with two SIM slots show two IMEIs.</p>
                </Card>

                <Card className="p-4">
                  <h4 className="font-bold mb-2">Method 2: Settings</h4>
                  <p><strong>iPhone:</strong> Settings → General → About → IMEI</p>
                  <p><strong>Android:</strong> Settings → About phone → IMEI (on some models, under Status)</p>
                </Card>

                <Card className="p-4">
                  <h4 className="font-bold mb-2">Method 3: SIM tray, box or label</h4>
                  <p>Many iPhones print the IMEI on the SIM tray. Older phones have it under the battery. The original box has it on a sticker. The box is useful, but always compare it with the number the phone itself shows.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Check a Phone Before Buying</h2>

              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Checking an IMEI on SafeOrStolen
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Ask the seller for the IMEI before you agree to meet</li>
                  <li>Enter it on SafeOrStolen; the result comes back in a few seconds</li>
                  <li>Read the result: reported stolen, possible match, or no report found in the records searched</li>
                  <li>Check that the make and model shown for the IMEI match the phone in the listing</li>
                  <li>If anything is flagged or doesn't match, don't buy it</li>
                </ol>
                <Button asChild size="lg" className="w-full">
                  <Link to="/verify">Check a Phone IMEI</Link>
                </Button>
              </div>

              <h3 className="text-2xl font-bold mb-3">What SafeOrStolen Checks</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li><strong>Theft reports:</strong> phones that owners have reported stolen on SafeOrStolen.</li>
                <li><strong>Public web results:</strong> listings and posts that mention the IMEI.</li>
                <li><strong>Make and model:</strong> the phone's make and model, read from the IMEI, so you can spot a listing that doesn't match.</li>
                <li><strong>Carrier blacklist (paid add-on):</strong> a separate lost/stolen blacklist check. Monthly members get up to 20 a month.</li>
              </ul>
              <p className="text-lg mb-6">
                SafeOrStolen does not see Apple or Google account status, so it can't tell you whether Activation Lock or Find My is on. You check that yourself at the meetup (step 3 below). It also doesn't check whether the seller still owes money on the phone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Red Flags When Buying a Used Phone</h2>

              <div className="grid gap-4">
                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Seller won't give the IMEI</h3>
                      <p>An honest seller can read it off the phone in a few seconds. If they refuse or stall, assume there's a reason and walk away.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Price far below similar listings</h3>
                      <p>Compare a few listings for the same model and storage. A recent phone priced well under all of them, with no clear reason, deserves a hard look.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Find My or Activation Lock still on</h3>
                      <p>If the phone is still signed in to someone's Apple or Google account, that person can lock or erase it, and you may not be able to set it up at all.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">No box, no receipt, vague story</h3>
                      <p>Plenty of honest sellers lose the box. But no box, no receipt and a story that changes when you ask questions is a pattern to take seriously.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Several of the same phone for sale</h3>
                      <p>A private seller with three or four of the same new-ish iPhone listed at once is not a normal private seller.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Cash only, and in a hurry</h3>
                      <p>Pressure to hand over cash before you can check anything is how bad sales happen. Slow down and check first.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Step by Step: Buying a Used Phone</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Get the IMEI before you meet</h3>
                    <p>Ask the seller to message you the IMEI or a screenshot of the About screen. Check it on SafeOrStolen before you set a time.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Meet somewhere public and recheck</h3>
                    <p>Meet at a police safe-exchange spot, a bank lobby or a busy store. Dial *#06# on the phone and make sure the IMEI matches the one you checked. The free SafeOrStolen web app (safeorstolen.com/app) can scan the IMEI barcode on the box with your camera.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Make sure Find My is off</h3>
                    <p><strong>iPhone:</strong> Settings → [name] → Find My → Find My iPhone should be off.<br/>
                    <strong>Android:</strong> Settings → Security (or Google) → Find My Device should be off, and the Google account removed.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Watch the reset, then test it</h3>
                    <p>Have the seller erase the phone in front of you. When it restarts to the Hello screen, put in your SIM and make sure it gets a signal and lets you set it up without asking for someone else's password.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Write a simple receipt</h3>
                    <p>Write down the IMEI, date, price and the seller's name, and have them sign it. Keep it with your SafeOrStolen check, which is saved to your account with the date.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What Happens If You Buy a Stolen Phone?</h2>
              <p className="text-lg mb-4">
                Even if you didn't know, you can end up worse off:
              </p>

              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-[0.25rem] mb-6">
                <ul className="space-y-3">
                  <li><strong>Blacklisting:</strong> once the owner reports it, the carrier can block the IMEI, so the phone won't connect to that network.</li>
                  <li><strong>Remote lock:</strong> if it's still tied to the owner's account, they can lock or erase it.</li>
                  <li><strong>Police recovery:</strong> police can take a stolen phone back and return it to the owner.</li>
                  <li><strong>Lost money:</strong> getting your money back from a private seller is often hard.</li>
                  <li><strong>Legal questions:</strong> knowingly buying stolen property is a crime. Checking first and keeping a record shows you acted in good faith.</li>
                </ul>
              </div>

              <p className="text-lg font-bold mb-3">If a check says the phone is reported stolen:</p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Don't buy it, and don't confront the seller</li>
                <li>Save the listing, messages and the seller's details</li>
                <li>Report it to your local police non-emergency line</li>
                <li>Report the listing to the marketplace</li>
                <li>If you already paid, contact your bank or payment app as well as the police</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Checking a Phone From Your Own Phone</h2>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">The SafeOrStolen web app</h3>
                <p className="mb-4">There's no App Store or Google Play app. SafeOrStolen is a free installable web app: open safeorstolen.com/app and add it to your home screen. It needs a data connection to run a check.</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Camera scanner</p>
                      <p className="text-muted-foreground">Scan the IMEI barcode on the box instead of typing 15 digits</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Saved history</p>
                      <p className="text-muted-foreground">Every check is saved to your account with the date</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Results in a few seconds</p>
                      <p className="text-muted-foreground">Fast enough to run while you're standing with the seller</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">2 free checks</p>
                      <p className="text-muted-foreground">With a free account and no credit card. After that, $0.99 a check or $10 a month for unlimited checks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/app">Open the Web App</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/verify">Check an IMEI</Link>
                </Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Can a stolen phone's IMEI be changed?</h3>
                  <p>Changing an IMEI is illegal in many countries and takes specialist tools, but it does happen. That's why you should compare the IMEI from *#06# with the one in Settings, on the SIM tray and on the box. If they don't all match, don't buy the phone.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Are free IMEI checkers reliable?</h3>
                  <p>Each checker only knows what's in the records it searches. SafeOrStolen (safeorstolen.com) searches its own theft reports and public web results, shows the make and model, and offers a paid carrier blacklist check. A clean result means no report was found in those records, not that the phone is guaranteed clean.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">How long does a check take?</h3>
                  <p>A SafeOrStolen IMEI check comes back in a few seconds. The result lists every source it searched and is saved to your account with the date.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">What if the seller won't give me the IMEI?</h3>
                  <p>Walk away. An honest seller can dial *#06# and send you the number in under a minute. Refusing to share it is one of the clearest warning signs you'll get.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Check First, Then Pay</h2>
              <p className="text-lg mb-4">
                Most bad phone purchases happen when the buyer skips the check because the seller seemed nice or the deal was moving fast. Getting the IMEI, checking it and confirming it at the meetup takes a few minutes.
              </p>
              <p className="text-lg mb-6">
                SafeOrStolen gives you 2 free checks with a free account. After that it's $0.99 a check or $10 a month for unlimited checks.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-lg font-bold mb-4">Check a phone now:</p>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/verify">Check an IMEI</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/app">Open the Web App</Link>
                  </Button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/phone-verification-guide" currentCategory="blog" maxLinks={5} />
    </>
  );
}
