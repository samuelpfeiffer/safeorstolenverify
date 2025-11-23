import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const StolenItemsListPage = () => {
  return (
    <>
      <PageSEO
        title="Stolen Items List & Database Search | Safe or Stolen"
        description="Search our comprehensive stolen items list and database. Check if electronics, vehicles, phones, and property have been reported stolen. Free database access."
        keywords="stolen items list, stolen property database, lost items search, stolen goods registry, police stolen items"
        canonical="/stolen-items-list"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Stolen Items List & Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Search our comprehensive database of stolen items reported by police departments, individuals, and businesses worldwide.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify">Search Database Now - Free</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Access Global Stolen Items Database</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our stolen items list aggregates reports from law enforcement agencies, insurance companies, carrier blacklists, and user reports across 150+ countries. Search by serial number, IMEI, VIN, or description to verify items before purchase.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What's in Our Database</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">📱 Electronics (15M+ Items)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Smartphones & Tablets</li>
                  <li>• Laptops & Computers</li>
                  <li>• Cameras & Video Equipment</li>
                  <li>• Gaming Consoles & Devices</li>
                  <li>• Smart Watches & Wearables</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🚗 Vehicles (8M+ Records)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cars, Trucks, SUVs</li>
                  <li>• Motorcycles & Scooters</li>
                  <li>• Boats & Watercraft</li>
                  <li>• RVs & Trailers</li>
                  <li>• ATVs & Off-Road Vehicles</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🔧 Tools & Equipment (5M+ Items)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Power Tools & Machinery</li>
                  <li>• Construction Equipment</li>
                  <li>• Musical Instruments</li>
                  <li>• Sports Equipment</li>
                  <li>• Professional Tools</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏠 Property & Valuables (3M+ Items)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Jewelry & Watches</li>
                  <li>• Art & Collectibles</li>
                  <li>• Bicycles & E-Bikes</li>
                  <li>• Firearms (where legal)</li>
                  <li>• Home Appliances</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How to Search the Database</h3>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Locate the Identifier:</strong> Find the serial number, IMEI (dial *#06# on phones), VIN (dashboard or door jamb), or model number</li>
              <li><strong>Enter in Search Tool:</strong> Input the identifier in our search tool above</li>
              <li><strong>Review Results:</strong> Instantly see if the item appears in our stolen items list</li>
              <li><strong>Get Details:</strong> View when it was reported, by whom, and related information</li>
              <li><strong>Take Action:</strong> If stolen, report to police. If clean, proceed with confidence</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Database Sources</h3>
            <p className="text-muted-foreground mb-4">We aggregate data from multiple trusted sources:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Law Enforcement:</strong> Police department stolen property reports across the US, UK, Canada, Australia</li>
              <li><strong>Carrier Blacklists:</strong> Mobile network operator IMEI blacklists (AT&T, Verizon, T-Mobile, etc.)</li>
              <li><strong>Insurance Claims:</strong> Items reported stolen to insurance companies</li>
              <li><strong>Manufacturer Databases:</strong> Items reported directly to manufacturers (Apple, Samsung, etc.)</li>
              <li><strong>User Reports:</strong> Verified theft reports from individuals and businesses</li>
              <li><strong>Marketplace Flags:</strong> Items flagged on eBay, Craigslist, Facebook Marketplace</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Report a Stolen Item</h3>
            <p className="text-muted-foreground mb-4">
              If your item has been stolen, you can add it to our database after filing a police report. This increases chances of recovery and prevents others from unknowingly buying your stolen property.
            </p>

            <h3 className="text-2xl font-semibold mb-4">For Businesses & Sellers</h3>
            <p className="text-muted-foreground mb-4">
              Pawn shops, auction houses, resellers, and dealers can use our bulk verification API to check entire inventories against the stolen items list. Protect your business from liability and maintain compliance with local laws.
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3">Search the Database Now</h4>
              <p className="text-muted-foreground mb-4">
                Access our comprehensive stolen items list free. Verify any item in seconds.
              </p>
              <a href="/verify" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Search Database
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Stolen Items List & Database Search</h1>
          <p>Search our comprehensive database of 30+ million stolen items including electronics, vehicles, tools, and property.</p>
          <h2>Database Contents</h2>
          <ul>
            <li>Electronics: 15M+ smartphones, laptops, tablets, cameras</li>
            <li>Vehicles: 8M+ cars, motorcycles, boats, RVs</li>
            <li>Tools: 5M+ power tools, equipment, instruments</li>
            <li>Property: 3M+ jewelry, bicycles, collectibles</li>
          </ul>
          <p>Visit https://safeorstolen.com/verify to search the database now.</p>
        </div>
      </noscript>
    </>
  );
};

export default StolenItemsListPage;