import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const SearchStolenBikesPage = () => {
  return (
    <>
      <PageSEO
        title="Search Stolen Bikes Database - Bicycle Serial Lookup | Safe or Stolen"
        description="Search stolen bike database by serial number. Check if bicycles and e-bikes are stolen before buying. Access police registries and BikeIndex database."
        keywords="search stolen bikes, stolen bicycle database, bike serial lookup, check stolen bike, bicycle registry"
        canonical="/search-stolen-bikes"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Search Stolen Bikes Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verify bicycle serial numbers against stolen bike databases, police registries, and global bike theft records before purchase.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify?type=bike">Check Bike Serial Number</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Stolen Bicycle Verification</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our stolen bike database aggregates reports from police departments, BikeIndex, Project 529, local registries, and insurance companies worldwide. Search by frame serial number to verify if a bicycle has been reported stolen.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Databases We Search</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🚴 BikeIndex (800K+ Bikes)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• World's largest bike registry</li>
                  <li>• Community-driven theft reports</li>
                  <li>• Police department integration</li>
                  <li>• Recovery success tracking</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏛️ Project 529 (2M+ Bikes)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bike protection shield program</li>
                  <li>• Law enforcement network</li>
                  <li>• Community watch system</li>
                  <li>• Lifetime registration</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🚓 Police Databases</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• National stolen property databases</li>
                  <li>• State and local police reports</li>
                  <li>• University campus security</li>
                  <li>• Transit authority records</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏪 Shop & Insurance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bike shop theft reports</li>
                  <li>• Insurance claim databases</li>
                  <li>• Manufacturer databases</li>
                  <li>• Rental company records</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How to Find Bike Serial Number</h3>
            <p className="text-muted-foreground mb-4">Most bike serial numbers are stamped on the frame:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Bottom Bracket:</strong> Most common location - underside of frame where pedals attach</li>
              <li><strong>Head Tube:</strong> Front of frame where fork connects</li>
              <li><strong>Seat Tube:</strong> Near where seat post enters frame</li>
              <li><strong>Rear Dropout:</strong> Where rear wheel attaches to frame</li>
              <li><strong>Top Tube/Down Tube:</strong> Less common but sometimes used</li>
              <li><strong>Original Receipt:</strong> Serial number listed on purchase documents</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Why Check Before Buying?</h3>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-3 text-red-600">Risks of Buying Stolen Bikes</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Legal Issues:</strong> Possession of stolen property, even unknowing, is illegal</li>
                <li>• <strong>Police Seizure:</strong> Bike can be confiscated without compensation</li>
                <li>• <strong>No Resale Value:</strong> Cannot legally sell a stolen bike</li>
                <li>• <strong>Ethical Concerns:</strong> Fuels bike theft epidemic</li>
                <li>• <strong>No Warranty:</strong> Manufacturers won't honor warranties on stolen bikes</li>
                <li>• <strong>Registration Issues:</strong> Cannot register for insurance or city programs</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Bike Theft Statistics</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Bikes stolen annually in US</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">5%</div>
                <div className="text-sm text-muted-foreground">Recovery rate (95% never recovered)</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">$460M</div>
                <div className="text-sm text-muted-foreground">Annual theft value in US</div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">High-Risk Bike Types</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">🚴 E-Bikes ($2,000-$10,000)</h4>
                <p className="text-sm text-muted-foreground">
                  Most targeted due to high value. 60% of stolen e-bikes sold within 24 hours on Craigslist/Facebook Marketplace.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">🏔️ Mountain Bikes ($1,500-$8,000)</h4>
                <p className="text-sm text-muted-foreground">
                  High-end components make these prime targets. Often stolen from garages and bike racks.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">🚴 Road Bikes ($1,000-$12,000)</h4>
                <p className="text-sm text-muted-foreground">
                  Carbon fiber and titanium models especially targeted. Thieves know valuable brands (Cervélo, Pinarello, etc.).
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Red Flags When Buying Used Bikes</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ No Serial Number</h4>
                <p className="text-sm text-muted-foreground">
                  Serial filed off or frame area damaged. Clear sign of stolen bike - walk away immediately.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ Seller Can't Provide Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  No receipt, registration, or proof of ownership for expensive bike is suspicious.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ Too Cheap For Quality</h4>
                <p className="text-sm text-muted-foreground">
                  $5,000 bike selling for $500? Likely stolen. Thieves sell quick at fraction of value.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ Meeting Location</h4>
                <p className="text-sm text-muted-foreground">
                  Seller insists on meeting in parking lot or won't let you come to their home - red flag.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">What to Do If Bike is Stolen</h3>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Don't Buy:</strong> Immediately end the transaction</li>
              <li><strong>Report to Police:</strong> Provide seller information, meeting location, listing details</li>
              <li><strong>Contact Owner:</strong> If possible through registry, notify rightful owner</li>
              <li><strong>Flag Listing:</strong> Report to Craigslist, Facebook, OfferUp moderators</li>
              <li><strong>Document Everything:</strong> Screenshots, photos, seller contact info</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">For Bike Shops</h3>
            <p className="text-muted-foreground mb-4">
              Bike shops can use our API to check consignment bikes, trade-ins, and used inventory against stolen databases. Protects your business from liability and helps recover stolen bikes for rightful owners.
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3">Check Bike Serial Number - Free</h4>
              <p className="text-muted-foreground mb-4">
                Don't risk buying a stolen bicycle. Verify against global stolen bike databases instantly.
              </p>
              <a href="/verify?type=bike" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Search Bike Database
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Search Stolen Bikes Database - Bicycle Serial Lookup</h1>
          <p>Verify bicycle serial numbers against BikeIndex (800K bikes), Project 529 (2M bikes), police databases, and insurance records.</p>
          <h2>Bike Theft Crisis</h2>
          <ul>
            <li>2M+ bikes stolen annually in US</li>
            <li>Only 5% recovery rate</li>
            <li>$460M annual theft value</li>
            <li>E-bikes and high-end mountain/road bikes most targeted</li>
          </ul>
          <p>Always verify bike serial number before purchase to avoid legal issues and financial loss.</p>
        </div>
      </noscript>
    </>
  );
};

export default SearchStolenBikesPage;