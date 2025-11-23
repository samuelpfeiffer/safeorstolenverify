import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const StolenPropertyCheckPage = () => {
  return (
    <>
      <PageSEO
        title="Stolen Property Check - Free Verification Service | Safe or Stolen"
        description="Check stolen property database free. Verify any personal property, equipment, or valuables before purchase. Search police reports and insurance claims."
        keywords="stolen property check, check stolen property, property verification, personal property database"
        canonical="/stolen-property-check"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Stolen Property Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Free verification for any personal property, equipment, or valuables. Check against police reports, insurance claims, and theft databases before you buy.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify">Check Property Now - Free</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Property Verification</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our stolen property check service verifies items across multiple categories including personal property, business equipment, tools, jewelry, collectibles, and more. Access 50+ databases to ensure items haven't been reported stolen.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What Property Can Be Checked?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🏠 Personal Property</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Furniture and home appliances</li>
                  <li>• Art and collectibles</li>
                  <li>• Jewelry and watches</li>
                  <li>• Musical instruments</li>
                  <li>• Sporting equipment</li>
                  <li>• Household electronics</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">🔧 Tools & Equipment</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Power tools (drills, saws, etc.)</li>
                  <li>• Construction equipment</li>
                  <li>• Lawn and garden equipment</li>
                  <li>• Professional tools</li>
                  <li>• Workshop machinery</li>
                  <li>• Hand tools and tool sets</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">💼 Business Property</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Office equipment</li>
                  <li>• Point-of-sale systems</li>
                  <li>• Industrial machinery</li>
                  <li>• Restaurant equipment</li>
                  <li>• Medical equipment</li>
                  <li>• Retail inventory</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">💎 Valuables</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Designer handbags</li>
                  <li>• Luxury watches</li>
                  <li>• Fine jewelry</li>
                  <li>• Precious metals/coins</li>
                  <li>• Antiques</li>
                  <li>• Rare collectibles</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Property Theft Statistics</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">$3B</div>
                <div className="text-sm text-muted-foreground">Tools stolen annually in US</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Construction site theft rate</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">$1.5B</div>
                <div className="text-sm text-muted-foreground">Jewelry/watch theft value</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Property never recovered</div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How Property Verification Works</h3>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
              <li>
                <strong>Identify Property:</strong> Locate serial number, model number, or unique identifying features (engraving, markings, etc.)
              </li>
              <li>
                <strong>Document Details:</strong> Note make, model, color, condition, and any distinguishing characteristics
              </li>
              <li>
                <strong>Search Database:</strong> Enter information into SafeOrStolen verification system
              </li>
              <li>
                <strong>Cross-Reference:</strong> We check police reports, insurance claims, pawn shop databases, and theft registries
              </li>
              <li>
                <strong>Review Results:</strong> Receive comprehensive report on property status (clean, stolen, or requires further investigation)
              </li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Common Stolen Property Scenarios</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">⚠️ Construction Site Theft</h4>
                <p className="text-muted-foreground mb-3">
                  Construction sites lose $3 billion in tools/equipment annually. Common targets:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Power tools (cordless drills, impact drivers, saws)</li>
                  <li>• Heavy equipment (generators, compressors, welders)</li>
                  <li>• Copper wire and building materials</li>
                  <li>• Hand tools in organized sets</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Tip:</strong> Contractors should verify tools before purchasing from online marketplaces or tool resellers.
                </p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">⚠️ Jewelry Theft</h4>
                <p className="text-muted-foreground mb-3">
                  Jewelry stores, homes, and individuals targeted by organized theft rings:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• High-value diamonds and gemstones</li>
                  <li>• Designer watches (Rolex, Patek Philippe, Audemars Piguet)</li>
                  <li>• Gold and precious metal jewelry</li>
                  <li>• Estate jewelry and antiques</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Tip:</strong> Always verify expensive jewelry purchases. Check serial numbers on luxury watches against stolen databases.
                </p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">⚠️ Residential Burglary</h4>
                <p className="text-muted-foreground mb-3">
                  Home burglaries target portable, valuable items:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Electronics (TVs, laptops, tablets, gaming consoles)</li>
                  <li>• Jewelry and watches</li>
                  <li>• Musical instruments (guitars, violins, brass instruments)</li>
                  <li>• Power tools from garages</li>
                  <li>• Bicycles and outdoor equipment</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Tip:</strong> If buying high-value used items, ask seller for proof of ownership and verify serial numbers.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">For Pawn Shops & Second-Hand Dealers</h3>
            <div className="bg-primary/10 border border-primary/20 p-6 mb-8">
              <p className="text-muted-foreground mb-4">
                Pawn shops and second-hand dealers have legal obligations to check property against stolen databases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Legal Compliance:</strong> Many states require verification before accepting high-value items</li>
                <li><strong>Liability Protection:</strong> Avoid receiving stolen property charges and asset seizure</li>
                <li><strong>Holding Periods:</strong> Some jurisdictions require hold periods for property that can be checked</li>
                <li><strong>Police Reporting:</strong> Document all verifications for law enforcement cooperation</li>
                <li><strong>Customer Trust:</strong> Build reputation as legitimate business that checks property</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>API Available:</strong> Bulk verification API for automated property checks at point-of-sale.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Red Flags: Stolen Property</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 No Serial Numbers</h4>
                <p className="text-sm text-muted-foreground">
                  Serial numbers removed, filed off, or damaged—clear sign of stolen property
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Bulk High-Value Items</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple expensive tools or valuables from same seller suggests theft
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Below Market Value</h4>
                <p className="text-sm text-muted-foreground">
                  New/like-new items at fraction of retail price—thieves sell fast
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 No Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Can't provide receipt, warranty card, or ownership proof
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">What to Do If Property is Stolen</h3>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Do Not Purchase:</strong> Immediately stop the transaction</li>
              <li><strong>Report to Police:</strong> Provide all seller information, listing details, meeting location</li>
              <li><strong>Document Everything:</strong> Screenshot listings, take photos, save communications</li>
              <li><strong>Contact Owner:</strong> If database shows owner info, help facilitate recovery</li>
              <li><strong>Flag Listing:</strong> Report to platform (Craigslist, OfferUp, Facebook, etc.)</li>
            </ol>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-3">Check Property Status Free</h3>
              <p className="text-muted-foreground mb-4">
                Verify any property before purchase. Protect yourself from legal issues and financial loss.
              </p>
              <a href="/verify" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Check Property Now
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Stolen Property Check - Free Verification Service</h1>
          <p>Check any personal property, tools, equipment, jewelry, or valuables against stolen property databases before purchase.</p>
          <h2>Property Types</h2>
          <ul>
            <li>Personal Property: Furniture, appliances, collectibles, jewelry</li>
            <li>Tools: Power tools, construction equipment, machinery</li>
            <li>Business: Office equipment, POS systems, industrial machinery</li>
            <li>Valuables: Designer items, luxury watches, antiques</li>
          </ul>
          <p>$3B in tools stolen annually. $1.5B in jewelry theft. 85% never recovered. Always verify.</p>
        </div>
      </noscript>
    </>
  );
};

export default StolenPropertyCheckPage;