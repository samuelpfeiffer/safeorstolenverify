import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const SearchStolenPhonePage = () => {
  return (
    <>
      <PageSEO
        title="Search Stolen Phone Database - IMEI Lookup | Safe or Stolen"
        description="Search stolen phone database by IMEI. Check if your iPhone, Samsung, or Android is stolen. Free IMEI blacklist check across all carriers."
        keywords="search stolen phone, stolen phone database, IMEI lookup, check stolen iPhone, stolen phone checker"
        canonical="/search-stolen-phone"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Search Stolen Phone Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Check any phone's IMEI against stolen phone databases, carrier blacklists, and manufacturer reports worldwide.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify?type=imei">Search Phone Database Now</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Stolen Phone Search</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our stolen phone database aggregates reports from police departments, mobile carriers, insurance companies, and device manufacturers across 150+ countries. Search by IMEI number to instantly verify if a phone has been reported stolen.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What We Search</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">📱 Carrier Blacklists</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AT&T stolen phone database</li>
                  <li>• Verizon IMEI blacklist</li>
                  <li>• T-Mobile lost/stolen reports</li>
                  <li>• Sprint theft database</li>
                  <li>• International carrier blacklists (200+ carriers)</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🚓 Police Databases</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• National stolen property databases</li>
                  <li>• State and local police reports</li>
                  <li>• International law enforcement records</li>
                  <li>• Cross-border theft tracking</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏭 Manufacturer Reports</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Apple Find My iPhone reports</li>
                  <li>• Samsung Find My Mobile database</li>
                  <li>• Google Device Manager theft flags</li>
                  <li>• Factory activation lock status</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">💼 Insurance Claims</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Insurance company theft claims</li>
                  <li>• Warranty fraud prevention databases</li>
                  <li>• Device protection plan reports</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How to Find Your Phone's IMEI</h3>
            <p className="text-muted-foreground mb-4">The IMEI (International Mobile Equipment Identity) is a unique 15-digit number:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Dial *#06#</strong> - Works on all phones, displays IMEI instantly</li>
              <li><strong>iPhone:</strong> Settings → General → About → IMEI</li>
              <li><strong>Android:</strong> Settings → About Phone → Status → IMEI</li>
              <li><strong>Original Box:</strong> Printed on barcode sticker</li>
              <li><strong>SIM Tray:</strong> Sometimes engraved on the tray</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Why Search Before Buying?</h3>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-3 text-red-600">Critical Risks of Buying Stolen Phones</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Cannot Activate:</strong> Blacklisted phones won't work on any carrier network</li>
                <li>• <strong>Activation Lock:</strong> iCloud/Google locked phones are unusable without owner's credentials</li>
                <li>• <strong>Police Seizure:</strong> Law enforcement can confiscate stolen phones without compensation</li>
                <li>• <strong>No Resale Value:</strong> Impossible to sell a blacklisted phone legally</li>
                <li>• <strong>Legal Issues:</strong> Possession of stolen property is a criminal offense</li>
                <li>• <strong>No Warranty/Support:</strong> Manufacturers won't service stolen devices</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Common Phone Scams</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ "Clean IMEI" Scam</h4>
                <p className="text-sm text-muted-foreground">
                  Sellers claim phone has clean IMEI but it gets blacklisted days/weeks later. Always verify yourself before purchase.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ Fake IMEI Check Sites</h4>
                <p className="text-sm text-muted-foreground">
                  Some websites show fake "clean" results. Use trusted services like SafeOrStolen that check real carrier databases.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ Repaired/Refurbished Stolen Phones</h4>
                <p className="text-sm text-muted-foreground">
                  Thieves often "refurbish" stolen phones to make them look new. Always check IMEI regardless of condition.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">What Happens If Phone is Stolen?</h3>
            <p className="text-muted-foreground mb-4">If our search shows the phone is stolen:</p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Do Not Buy:</strong> Walk away from the transaction immediately</li>
              <li><strong>Report to Police:</strong> Provide seller information to local authorities if possible</li>
              <li><strong>Report to Platform:</strong> Flag the listing on eBay, Craigslist, Facebook Marketplace, etc.</li>
              <li><strong>Save Evidence:</strong> Screenshot the listing, seller info, and your verification results</li>
              <li><strong>Warn Others:</strong> Share information in local buy/sell groups to prevent others from being scammed</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Statistics: Phone Theft Epidemic</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">2.1M</div>
                <div className="text-sm text-muted-foreground">Phones stolen in US annually</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">68%</div>
                <div className="text-sm text-muted-foreground">Stolen phones sold within 24 hours</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">$30B</div>
                <div className="text-sm text-muted-foreground">Annual black market value</div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3">Search Phone Database - Free</h4>
              <p className="text-muted-foreground mb-4">
                Don't risk buying a stolen phone. Search our comprehensive database instantly.
              </p>
              <a href="/verify?type=imei" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Check Phone IMEI Now
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Search Stolen Phone Database - IMEI Lookup</h1>
          <p>Check any phone's IMEI against stolen databases, carrier blacklists, and manufacturer reports.</p>
          <h2>What We Search</h2>
          <ul>
            <li>Carrier Blacklists: AT&T, Verizon, T-Mobile, Sprint, 200+ international carriers</li>
            <li>Police Databases: National, state, local, and international records</li>
            <li>Manufacturers: Apple, Samsung, Google device reports</li>
            <li>Insurance: Theft claims and fraud prevention databases</li>
          </ul>
          <p>2.1M phones stolen annually in US. 68% sold within 24 hours. Verify before you buy.</p>
        </div>
      </noscript>
    </>
  );
};

export default SearchStolenPhonePage;