import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const SearchStolenFirearmsPage = () => {
  return (
    <>
      <PageSEO
        title="Search Stolen Firearms Database - Gun Serial Lookup | Safe or Stolen"
        description="Search stolen firearms database by serial number. Check if guns are stolen before purchase. Access NCIC stolen gun registry and ATF trace databases."
        keywords="search stolen firearms, stolen gun database, firearm serial lookup, check stolen gun, ATF trace"
        canonical="/search-stolen-firearms"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Search Stolen Firearms Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verify firearms serial numbers against stolen gun databases, NCIC records, and ATF trace systems before purchase or transfer.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify?type=firearm">Check Firearm Serial Number</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Stolen Firearms Verification Service</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our firearms database search checks serial numbers against the National Crime Information Center (NCIC), ATF trace databases, state registries, and insurance claims to verify if firearms have been reported stolen.
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-3">⚖️ Legal Notice</h4>
              <p className="text-sm text-muted-foreground">
                This service is for legal firearm verification only. Users must comply with all federal, state, and local firearms laws. We do not facilitate illegal firearms transactions. Always complete transfers through licensed FFLs (Federal Firearms Licensees) where required by law.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Databases We Search</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🚓 NCIC Stolen Gun File</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• FBI National Crime Information Center</li>
                  <li>• All 50 states' stolen firearm reports</li>
                  <li>• Federal law enforcement records</li>
                  <li>• Cross-border theft tracking</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏛️ ATF Trace System</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bureau of Alcohol, Tobacco, Firearms</li>
                  <li>• Recovered firearms database</li>
                  <li>• Crime gun traces</li>
                  <li>• Manufacturing records verification</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">📋 State Registries</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• State firearms registrations</li>
                  <li>• Concealed carry permit databases</li>
                  <li>• Prohibited persons lists</li>
                  <li>• Local police stolen property</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">💼 Insurance & Private</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Insurance theft claims</li>
                  <li>• Gun shop burglary reports</li>
                  <li>• Private registry reports</li>
                  <li>• Manufacturer theft records</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How to Find Firearm Serial Number</h3>
            <p className="text-muted-foreground mb-4">Serial number locations vary by firearm type:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Handguns:</strong> Frame, slide, or barrel (often near trigger guard)</li>
              <li><strong>Rifles:</strong> Receiver, barrel near chamber, or bolt</li>
              <li><strong>Shotguns:</strong> Receiver or barrel</li>
              <li><strong>AR-15/Modern Rifles:</strong> Lower receiver, upper receiver</li>
              <li><strong>Always verify:</strong> Check multiple locations as some firearms have matching serials on multiple parts</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Why Verify Firearms?</h3>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-3 text-red-600">Critical Legal Risks</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Federal Felony:</strong> Possession of stolen firearms is a serious federal crime (18 U.S.C. § 922)</li>
                <li>• <strong>ATF Investigation:</strong> Stolen firearms trigger federal investigations</li>
                <li>• <strong>Immediate Seizure:</strong> Law enforcement will confiscate stolen firearms without compensation</li>
                <li>• <strong>Criminal Liability:</strong> Even unknowing possession can result in prosecution</li>
                <li>• <strong>Lifetime Ban:</strong> Federal firearms ban for felony convictions</li>
                <li>• <strong>Civil Liability:</strong> If stolen firearm is used in crime, owner may face lawsuits</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Legal Purchase Requirements</h3>
            <p className="text-muted-foreground mb-4">Ensure legal compliance when purchasing firearms:</p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Use Licensed FFL:</strong> Federal Firearms License dealer for all interstate transfers</li>
              <li><strong>Background Check:</strong> Mandatory NICS (National Instant Criminal Background Check System)</li>
              <li><strong>Verify Serial:</strong> Check stolen database before finalizing purchase</li>
              <li><strong>Bill of Sale:</strong> Document seller, buyer, firearm details, serial number</li>
              <li><strong>State Requirements:</strong> Comply with state-specific registration, permits, waiting periods</li>
              <li><strong>ATF Form 4473:</strong> Complete federal firearms transaction record</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Red Flags: Stolen Firearms</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Defaced/Altered Serial Numbers</h4>
                <p className="text-sm text-muted-foreground">
                  Scratched, ground, or altered serials are clear indicators of stolen firearms. Possession is illegal under federal law.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Seller Refuses FFL Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Legitimate sellers will complete transfers through FFLs. Refusal suggests stolen property or prohibited person.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 No Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Absence of original purchase paperwork, bill of sale, or registration documents raises suspicion.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Below Market Price</h4>
                <p className="text-sm text-muted-foreground">
                  Firearms significantly below market value often indicate theft or legal issues.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Firearms Theft Statistics</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">380K</div>
                <div className="text-sm text-muted-foreground">Firearms stolen annually in US</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">8,000</div>
                <div className="text-sm text-muted-foreground">Gun shop burglaries per year</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">23%</div>
                <div className="text-sm text-muted-foreground">Stolen guns used in crimes</div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">For FFLs & Dealers</h3>
            <p className="text-muted-foreground mb-4">
              Federal Firearms Licensees can use our API for automated inventory checks, consignment verification, and compliance with ATF regulations requiring due diligence against knowingly accepting stolen firearms.
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3">Check Firearm Serial Number</h4>
              <p className="text-muted-foreground mb-4">
                Verify firearms against stolen databases. Protect yourself legally and financially.
              </p>
              <a href="/verify?type=firearm" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Search Firearm Database
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Search Stolen Firearms Database - Gun Serial Lookup</h1>
          <p>Verify firearms serial numbers against NCIC stolen gun file, ATF trace system, state registries, and insurance databases.</p>
          <h2>Legal Risks of Stolen Firearms</h2>
          <ul>
            <li>Federal Felony: Possession is serious federal crime</li>
            <li>ATF Investigation: Triggers federal investigations</li>
            <li>Immediate Seizure: No compensation for stolen firearms</li>
            <li>Lifetime Ban: Federal firearms prohibition</li>
          </ul>
          <p>380K firearms stolen annually in US. Always verify before purchase.</p>
        </div>
      </noscript>
    </>
  );
};

export default SearchStolenFirearmsPage;