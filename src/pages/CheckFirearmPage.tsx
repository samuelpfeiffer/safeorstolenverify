import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Shield, CheckCircle, AlertTriangle, ArrowRight, Scale, XCircle } from 'lucide-react';

/** Oct 8 2026 audit: copy rewritten by hand. Removed the supplier name and "AI analysis" from the
 * meta description, the invented "32,000 firearms" registry and insurer-claims source, the "$1,500"
 * figure, "under 3 seconds", "legal protection" claims, and the wrong statement that 18 U.S.C. 922
 * applies even if you didn't know the gun was stolen. */
export default function CheckFirearmPage() {
  return (
    <>
      <PageSEO
        title="Check If a Gun Is Stolen - Free Gun Serial Number Lookup | SafeOrStolen"
        description="Check a gun's serial number before you buy: SafeOrStolen searches police firearm theft and loss reports from 33 states and DC, live Ohio records and its own theft reports."
        keywords="check if gun stolen, firearm serial number lookup, stolen gun check, verify firearm, gun serial lookup"
        canonical="https://safeorstolen.com/check-firearm"
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Check If a Gun Is Stolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Type the serial number from the frame or receiver. In a few seconds SafeOrStolen searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, its own theft reports and public web results, and flags serials that look altered.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Check Firearm Serial Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Check */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Check a Gun's Serial Number</h2>
            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Federal law: 18 U.S.C. § 922(j)</h3>
                  <p className="text-muted-foreground">
                    It is a federal crime to receive or possess a stolen firearm when you know, or have reasonable cause to believe, that it was stolen. A rock-bottom price, a seller with no story, or a scratched serial can be that reasonable cause. Many states don't require a background check on private sales, so the buyer is often the only one checking.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Scale className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">A Dated Record of Your Check</h3>
                  <p className="text-muted-foreground">
                    Every check is saved to your account with the date. It shows what you checked and what came back. It is not a legal defense and not a police clearance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Don't Lose the Gun and the Money</h3>
                  <p className="text-muted-foreground">
                    If a gun you bought turns out to be stolen, police can take it back for the owner and you are left chasing the seller for your money.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Where to Find Serial */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Where to Find a Gun's Serial Number</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Federal law requires licensed manufacturers and importers to put a serial number on the frame or receiver of every firearm they make or import.
                </p>
                <h3>Common Locations by Firearm Type</h3>
                <ul>
                  <li><strong>Handguns:</strong> on the frame, often near the trigger guard or under the slide; some makers repeat it on the slide and barrel</li>
                  <li><strong>Rifles:</strong> on the receiver, usually on the side or underneath</li>
                  <li><strong>Shotguns:</strong> on the receiver, sometimes on the barrel as well</li>
                  <li><strong>AR-15 style:</strong> on the lower receiver, near the magazine well</li>
                </ul>
                <div className="bg-muted p-4 rounded-lg my-4">
                  <p className="mb-0"><strong>Warning:</strong> If the serial looks scratched, ground off, or re-stamped, don't buy the gun. Possessing a firearm with an obliterated serial number is a federal crime under 18 U.S.C. § 922(k).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What a Gun Check Searches</h2>
            <div className="space-y-4">
              {[
                { name: 'Police firearm theft and loss reports', desc: '242,839 reports from 33 states and Washington, DC, filed through 2017; the years covered vary by state' },
                { name: 'Live Ohio law-enforcement records', desc: 'current stolen-gun records from Ohio' },
                { name: 'SafeOrStolen theft reports', desc: 'guns that owners have reported stolen on SafeOrStolen' },
                { name: 'Public web results', desc: 'listings and posts online that mention the serial' },
                { name: 'Serial number check', desc: 'flags serials that look altered, obliterated or like placeholders' },
              ].map(src => (
                <div key={src.name} className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">{src.name}</h3>
                    <p className="text-sm text-muted-foreground">{src.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <XCircle className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Not searched</h3>
                  <p className="text-sm text-muted-foreground">NCIC, ATF eTrace and pawn or insurer databases. For an official answer, ask a local police department or an FFL.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Check</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg">Get the Serial Number</h3>
                    <p className="text-muted-foreground">Ask the seller for a clear photo of the serial before you meet, then compare it to the gun in person.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg">Run the Check</h3>
                    <p className="text-muted-foreground">Enter the serial on SafeOrStolen. The result comes back in a few seconds as "reported stolen", "possible match" or "no report found in the records searched", with every source listed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg">Keep the Record</h3>
                    <p className="text-muted-foreground">The check is saved to your account with the date. If you want a link to share, add the optional $1.99 verification certificate, free for monthly members.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-2">Can I check any firearm type?</h3>
                <p className="text-muted-foreground">Yes. Handguns, rifles and shotguns can all be checked by serial number on SafeOrStolen (safeorstolen.com/check-firearm). Enter the serial exactly as stamped, including letters and dashes.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-2">Is this a background check?</h3>
                <p className="text-muted-foreground">No. It checks whether the gun turns up in theft records, not whether the buyer can legally own it. For a background check, do the transfer through an FFL dealer.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-2">What if the serial isn't found?</h3>
                <p className="text-muted-foreground">"No report found in the records searched" means the serial didn't appear in the sources listed with your result. Not every theft is reported, and the police reports cover 33 states and DC, so still check the seller's story and paperwork.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Check Before You Buy</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A gun serial check takes a few seconds. Your first 2 checks are free with a free account.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Check Firearm Serial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
