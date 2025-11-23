import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Search, AlertTriangle, FileText, Lock, Info } from 'lucide-react';

const CheckFirearmPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Check Firearm Serial Number - Verify Gun Ownership",
    "description": "Verify firearm serial numbers to check if a gun is stolen, lost, or legally transferable. Essential for private gun sales and FFL dealers.",
    "url": "https://safeorstolen.com/check-firearm",
    "mainEntity": {
      "@type": "Service",
      "name": "Firearm Verification Service",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      }
    }
  };

  return (
    <>
      <PageSEO
        title="Check Firearm Serial Number - Verify Gun is Not Stolen | SafeOrStolen"
        description="Verify firearm serial numbers instantly. Check if a gun is stolen, lost, or has legal issues before purchase. Essential for private sales, FFL dealers, and gun safety."
        keywords="check firearm serial number, verify gun not stolen, firearm verification, gun serial lookup, stolen gun database"
        canonical="/check-firearm"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Firearm Serial Number Verification
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Verify any firearm's serial number against stolen gun databases. Protect yourself legally and ensure safe, legal firearm transfers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Verify Firearm Now
                </Button>
              </Link>
              <Link to="/legal-guide">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Legal Requirements
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why Check Firearm Serial Numbers?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Federal Crime to Possess Stolen Firearms</h3>
                  <p className="text-muted-foreground">
                    Under 18 U.S.C. § 922, possessing a stolen firearm is a federal felony punishable by up to 10 years in prison. Even if you didn't know the gun was stolen, you can face serious criminal charges and lose your gun ownership rights permanently.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">ATF Trace Database</h3>
                  <p className="text-muted-foreground">
                    All recovered crime guns are traced by the ATF. If you unknowingly purchase a stolen firearm, it will be confiscated if discovered during any interaction with law enforcement, and you'll lose your money with no legal recourse.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Due Diligence Documentation</h3>
                  <p className="text-muted-foreground">
                    Our verification certificate provides legal proof that you took reasonable steps to verify the firearm's legitimacy. This documentation can protect you in legal proceedings and demonstrate good faith efforts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Protect Gun Rights</h3>
                  <p className="text-muted-foreground">
                    A felony conviction for possessing stolen firearms results in lifetime ban on gun ownership under federal law. Verify before you buy to protect your Second Amendment rights and avoid legal nightmares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">How to Find Your Firearm Serial Number</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Every firearm manufactured after 1968 must have a unique serial number engraved on the frame or receiver. The location varies by manufacturer and firearm type:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Handguns</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Frame under the barrel</li>
                    <li>• Slide (top portion)</li>
                    <li>• Inside the frame near trigger guard</li>
                    <li>• Cylinder for revolvers</li>
                    <li>• Check owner's manual for specific location</li>
                  </ul>
                </div>
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Rifles & Shotguns</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Receiver (lower or upper depending on model)</li>
                    <li>• Barrel near the chamber</li>
                    <li>• Inside the ejection port</li>
                    <li>• Bottom of the barrel</li>
                    <li>• Consult manufacturer documentation</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Important:</strong> Always handle firearms safely. Ensure the firearm is unloaded before inspecting the serial number. Never point a firearm at yourself or others while checking the serial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">What Our Firearm Verification Checks</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">NCIC Stolen Gun Database</h3>
                <p className="text-muted-foreground">
                  We cross-reference the FBI's National Crime Information Center (NCIC) database, which contains all firearms reported stolen to law enforcement agencies nationwide. This is the primary database used by police during firearm traces.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">ATF Trace Records</h3>
                <p className="text-muted-foreground">
                  The Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) maintains comprehensive trace data on firearms used in crimes. We verify if the serial number appears in known crime gun traces, even if not formally reported stolen.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">State & Local Databases</h3>
                <p className="text-muted-foreground">
                  Many states maintain additional stolen firearm registries beyond federal databases. We check state-level records in all 50 states, including California's Armed Prohibited Persons System (APPS) and other regional databases.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Insurance & Private Databases</h3>
                <p className="text-muted-foreground">
                  We scan private insurance company theft databases and manufacturer records to identify firearms reported stolen but not yet entered into law enforcement systems. This provides earlier detection of stolen firearms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Firearm Purchase Scenarios</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Private Party Sales</h3>
                <p className="text-muted-foreground mb-3">
                  Private firearm sales (person-to-person) in most states don't require background checks or FFL involvement. However, buyers are still legally responsible if the firearm is stolen.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Best practice:</strong> Before meeting, request the serial number and verify it. Refuse to complete the sale if the seller won't provide the serial in advance. Get written documentation of the sale including date, buyer/seller information, and verification results.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Gun Shows & Flea Markets</h3>
                <p className="text-muted-foreground mb-3">
                  Gun shows attract both legitimate dealers and private sellers. While licensed FFLs conduct background checks, private sellers at gun shows often don't, making these venues common sources for stolen firearms.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Best practice:</strong> Always verify the serial number before purchase, even from seemingly reputable sellers. If buying from a table without an FFL, treat it as a private sale and conduct full due diligence.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Online Marketplaces</h3>
                <p className="text-muted-foreground mb-3">
                  Sites like Armslist, GunBroker, and classified ads facilitate private firearm sales. Buyers and sellers must comply with federal and state laws, but theft verification is solely the buyer's responsibility.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Best practice:</strong> Request serial number verification before agreeing to meet or transfer payment. Insist on completing the transaction through a local FFL who can conduct additional checks. Never ship firearms directly between private parties.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Inherited Firearms</h3>
                <p className="text-muted-foreground mb-3">
                  When inheriting firearms, you may not know their complete history. Previous owners may have purchased stolen guns unknowingly, creating liability for heirs.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Best practice:</strong> Verify all inherited firearms immediately. If any show as stolen, contact local law enforcement and an attorney. Voluntary surrender protects you from criminal liability and helps return property to rightful owners.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="flex gap-4 mb-4">
                <Info className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Legal Disclaimer & Important Notice</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Firearm verification is a tool, not legal advice:</strong> While our service helps identify stolen firearms, it does not replace compliance with federal, state, and local firearms laws. Always consult with legal counsel regarding firearm transactions.
                    </p>
                    <p>
                      <strong className="text-foreground">Private sale responsibilities:</strong> In private sales, both buyer and seller are responsible for ensuring legal transfer. Some states require background checks, waiting periods, or permits even for private sales. Verify your state's requirements.
                    </p>
                    <p>
                      <strong className="text-foreground">FFL dealers:</strong> Licensed dealers must follow all ATF regulations including Form 4473, background checks, and record keeping. Our verification service is supplemental to, not a replacement for, required federal procedures.
                    </p>
                    <p>
                      <strong className="text-foreground">If you find a stolen firearm:</strong> Do not take possession. Contact local law enforcement immediately. In some states, failing to report known stolen property is a crime. Our service provides reporting information with verification results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Is firearm verification legal?</h3>
                <p className="text-muted-foreground">
                  Yes, verifying firearm serial numbers is completely legal and encouraged. It's not a background check on a person, but rather a check on the item's status. Responsible firearm owners and dealers commonly verify serial numbers before transactions.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Do I need to be an FFL to verify firearms?</h3>
                <p className="text-muted-foreground">
                  No, anyone can verify a firearm's serial number. Our service is available to private individuals, FFL dealers, law enforcement, pawnshops, and anyone involved in firearm transactions.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What if the firearm has no serial number?</h3>
                <p className="text-muted-foreground">
                  Firearms manufactured after 1968 must have serial numbers. If a serial is missing or has been removed/defaced, this is a federal crime indicator. Do not purchase or possess such firearms, as they are likely stolen or illegally modified. Report to ATF immediately.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">How quickly are databases updated?</h3>
                <p className="text-muted-foreground">
                  NCIC and ATF databases are updated in real-time as reports are filed. However, there can be delays if theft reports aren't filed immediately. We recommend verifying firearms at the time of purchase and keeping certificates for your records.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Does verification guarantee the firearm is legal?</h3>
                <p className="text-muted-foreground">
                  Our verification checks stolen status against available databases. It does not verify if the firearm is otherwise legal (e.g., NFA compliance, state restrictions, etc.). Consult local laws and an attorney for complete legal compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Verify Firearm Serial Numbers Now</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Protect yourself legally and ensure safe firearm transfers. Verify any firearm's serial number in seconds.
            </p>
            <Link to="/verify">
              <Button size="lg">
                <Search className="w-5 h-5 mr-2" />
                Start Firearm Verification
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CheckFirearmPage;
