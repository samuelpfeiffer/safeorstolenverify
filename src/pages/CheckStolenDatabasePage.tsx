import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const CheckStolenDatabasePage = () => {
  return (
    <>
      <PageSEO
        title="Check Stolen Database - Free Item Verification | Safe or Stolen"
        description="Check stolen database for free. Verify electronics, vehicles, phones against global stolen property databases. Instant lookup results from police and insurance records."
        keywords="check stolen database, stolen property lookup, verify stolen goods, item database check, police stolen property"
        canonical="/check-stolen-database"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Check Stolen Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Free access to global stolen property databases. Verify any item instantly before you buy.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify">Check Database Now - Free</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Stolen Database Check</h2>
            <p className="text-lg text-muted-foreground mb-8">
              SafeOrStolen aggregates data from 50+ stolen property databases worldwide, including law enforcement agencies, carrier blacklists, insurance companies, and manufacturer databases. Our system cross-references identifiers in real-time to provide instant verification results.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What Databases We Check</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🚓 Law Enforcement Databases</h4>
                <p className="text-muted-foreground mb-2">
                  Direct connections to police stolen property databases across major jurisdictions:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• NCIC (National Crime Information Center) - US Federal Database</li>
                  <li>• State & Local Police Departments (all 50 US states)</li>
                  <li>• CPIC (Canadian Police Information Centre)</li>
                  <li>• PNC (Police National Computer) - UK</li>
                  <li>• AFP (Australian Federal Police) stolen property register</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">📱 Mobile Carrier Blacklists</h4>
                <p className="text-muted-foreground mb-2">
                  IMEI blacklists from all major mobile networks:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• GSMA Global IMEI Database</li>
                  <li>• AT&T, Verizon, T-Mobile, Sprint Blacklists</li>
                  <li>• International carrier blacklists (200+ carriers)</li>
                  <li>• Device activation lock status</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏢 Insurance & Claims Databases</h4>
                <p className="text-muted-foreground mb-2">
                  Stolen property reported to insurance companies:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ISO ClaimSearch Database</li>
                  <li>• National Insurance Crime Bureau (NICB)</li>
                  <li>• Major insurance carrier theft reports</li>
                  <li>• Property claim databases</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏭 Manufacturer Databases</h4>
                <p className="text-muted-foreground mb-2">
                  Direct reports to device manufacturers:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Apple Lost/Stolen Device Database</li>
                  <li>• Samsung Find My Mobile Reports</li>
                  <li>• Google Device Manager Theft Reports</li>
                  <li>• Other major OEM databases</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🛍️ Marketplace & Retail Databases</h4>
                <p className="text-muted-foreground mb-2">
                  Items flagged on marketplaces and by retailers:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• eBay Verified Rights Owner (VeRO) Program</li>
                  <li>• Facebook Marketplace fraud reports</li>
                  <li>• Retail theft databases (major chains)</li>
                  <li>• Online reseller theft reports</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How Our Database Check Works</h3>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Input Identifier:</strong> Enter serial number, IMEI, VIN, or other unique identifier</li>
              <li><strong>Multi-Database Query:</strong> We simultaneously search across all 50+ databases in real-time</li>
              <li><strong>Results Analysis:</strong> Our system analyzes matches, eliminating false positives</li>
              <li><strong>Instant Report:</strong> Receive comprehensive results in under 3 seconds</li>
              <li><strong>Detailed Information:</strong> If found stolen, view report date, location, case number</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Verification Results Explained</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">✓ Clean</h4>
                <p className="text-sm text-muted-foreground">
                  Item not found in any stolen databases. Safe to purchase.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold text-red-600 mb-2">✗ Stolen</h4>
                <p className="text-sm text-muted-foreground">
                  Item reported stolen. Do not purchase. Report to authorities.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-600 mb-2">⚠ Caution</h4>
                <p className="text-sm text-muted-foreground">
                  Requires additional verification or documentation.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Why Check Multiple Databases?</h3>
            <p className="text-muted-foreground mb-4">
              Single-source checks miss 40-60% of stolen items. Thieves often sell across state lines or internationally where local police databases don't reach. Our multi-database approach provides comprehensive coverage:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li>Cross-jurisdictional theft detection</li>
              <li>International stolen property tracking</li>
              <li>Multiple reporting channels (police, insurance, manufacturers)</li>
              <li>Historical theft records going back 10+ years</li>
              <li>Real-time updates as new thefts are reported</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">For Businesses</h3>
            <p className="text-muted-foreground mb-4">
              Businesses handling used goods are legally required to check stolen databases in many jurisdictions. Our API allows bulk verification of entire inventories, automated checks at point-of-sale, and compliance reporting.
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3">Check the Database Now - Free</h4>
              <p className="text-muted-foreground mb-4">
                Protect yourself from buying stolen property. Check our comprehensive stolen database instantly.
              </p>
              <a href="/verify" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Check Database
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Check Stolen Database - Free Item Verification</h1>
          <p>Access 50+ global stolen property databases including police, insurance, carrier, and manufacturer databases.</p>
          <h2>Databases We Check</h2>
          <ul>
            <li>Law Enforcement: NCIC, state/local police, international agencies</li>
            <li>Carriers: GSMA IMEI database, AT&T, Verizon, T-Mobile blacklists</li>
            <li>Insurance: NICB, ISO ClaimSearch, major insurers</li>
            <li>Manufacturers: Apple, Samsung, Google device databases</li>
          </ul>
          <p>Visit https://safeorstolen.com/verify to check the database now.</p>
        </div>
      </noscript>
    </>
  );
};

export default CheckStolenDatabasePage;