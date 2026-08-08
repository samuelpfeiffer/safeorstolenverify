import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, AlertTriangle, Search, ArrowRight, Scale, FileText } from 'lucide-react';

export default function CheckFirearmPage() {
  return (
    <>
      <PageSEO
        title="Check If Firearm Is Stolen - Free Gun Serial Number Lookup | SafeOrStolen"
 description="Verify if a gun is stolen before buying. Free firearm serial number check against stolen firearm reports from all 50 states and law enforcement databases. Protect yourself legally when purchasing firearms."
        keywords="check if gun stolen, firearm serial number lookup, stolen gun check, 50-state firearm theft reports search, verify firearm, gun serial lookup"
        canonical="https://safeorstolen.com/check-firearm"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Check If Firearm Is Stolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Verify any gun's serial number against stolen firearms databases before purchasing. Protect yourself from legal consequences.
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Verify Firearm Serial Numbers</h2>
            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Federal Crime: 18 U.S.C. § 922</h3>
                  <p className="text-muted-foreground">
                    Possessing a stolen firearm is a federal felony punishable by up to 10 years in prison—even if you didn't know it was stolen. Private party purchases don't require background checks in many states, making verification essential.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Scale className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Protection</h3>
                  <p className="text-muted-foreground">
                    A verification record proves you took reasonable steps to ensure the firearm wasn't stolen—critical if law enforcement later traces the gun.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Avoid Seizure</h3>
                  <p className="text-muted-foreground">
                    Stolen firearms are confiscated with no compensation. Lose a $1,500 handgun because you didn't spend 30 seconds checking.
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
              <h2 className="text-3xl font-bold text-center mb-12">Where to Find Firearm Serial Number</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Federal law (18 U.S.C. § 923) requires all firearms manufactured after 1968 to have serial numbers engraved on the frame/receiver.
                </p>
                <h3>Common Locations by Firearm Type</h3>
                <ul>
                  <li><strong>Handguns:</strong> Frame (usually near trigger guard), barrel, slide</li>
                  <li><strong>Rifles:</strong> Receiver (lower part where trigger mechanism is housed)</li>
                  <li><strong>Shotguns:</strong> Receiver, sometimes barrel</li>
                  <li><strong>AR-15 style:</strong> Lower receiver</li>
                </ul>
                <div className="bg-muted p-4 rounded-lg my-4">
                  <p className="mb-0"><strong>Warning:</strong> If the serial number appears scratched off, filed down, or altered, the firearm may have been used in a crime. Do not purchase—possession of a firearm with obliterated serial is a federal crime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Databases We Check</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Nationwide Stolen Firearms Database</h3>
                  <p className="text-sm text-muted-foreground">Community-maintained registry of roughly 32,000 stolen firearms reported by theft victims</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Serial Number Integrity Check</h3>
                  <p className="text-sm text-muted-foreground">Detects obliterated, altered, or placeholder serial numbers — a federal felony indicator</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Insurance Claims</h3>
                  <p className="text-sm text-muted-foreground">Firearms with theft claims paid by insurers</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Community Reports</h3>
                  <p className="text-sm text-muted-foreground">User-submitted stolen firearm reports (verified before inclusion)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Verification Process</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg">Get the Serial Number</h3>
                    <p className="text-muted-foreground">Ask the seller for the serial before meeting. Photograph it when inspecting the firearm.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg">Run the Check</h3>
                    <p className="text-muted-foreground">Enter the serial number in SafeOrStolen. Results in under 3 seconds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg">Save Your Receipt</h3>
                    <p className="text-muted-foreground">Keep the verification receipt as proof of due diligence. This is your legal protection.</p>
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
                <p className="text-muted-foreground">Yes—handguns, rifles, shotguns, and any firearm with a serial number can be verified.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-2">Is this a background check?</h3>
 <p className="text-muted-foreground">No. We check if the firearm is stolen, not the buyer's eligibility. For eligibility checks, contact an FFL dealer.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-2">What if the serial isn't in any database?</h3>
                <p className="text-muted-foreground">A "not found" result means it hasn't been reported stolen to databases we check. It's a good sign, but verify the seller's story and paperwork too.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Check Before You Buy or Sell</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Verify firearm serial numbers in seconds. Protect yourself from federal charges.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Check Firearm Serial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
