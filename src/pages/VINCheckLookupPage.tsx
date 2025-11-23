import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const VINCheckLookupPage = () => {
  return (
    <>
      <PageSEO
        title="VIN Check Lookup - Free Vehicle History Report | Safe or Stolen"
        description="Free VIN check lookup. Verify if a vehicle is stolen, salvage, or has liens. Instant VIN decoder and stolen car database search. Check any car history free."
        keywords="VIN check lookup, free VIN check, stolen car VIN, vehicle history report, VIN decoder, check VIN number"
        canonical="/vin-check-lookup"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Free VIN Check Lookup
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Check any Vehicle Identification Number (VIN) for theft, salvage, liens, and history. Free instant lookup.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify?type=vin">Check VIN Now - Free</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Complete VIN Check & Lookup Service</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our VIN check lookup service provides comprehensive vehicle history reports by searching police databases, DMV records, insurance claims, and salvage yards. Enter any 17-character VIN to verify a vehicle before purchase.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What Our VIN Lookup Reveals</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3 text-red-600">🚨 Theft Status</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Active stolen vehicle reports</li>
                  <li>• NCIC stolen vehicle database</li>
                  <li>• International theft records</li>
                  <li>• Recovery status if previously stolen</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3 text-orange-600">⚠️ Title Issues</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Salvage title history</li>
                  <li>• Rebuilt/reconstructed title</li>
                  <li>• Flood damage</li>
                  <li>• Lemon law buybacks</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3 text-blue-600">💰 Financial Issues</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Outstanding liens</li>
                  <li>• Bank ownership</li>
                  <li>• Repossession records</li>
                  <li>• Tax lien status</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3 text-green-600">📊 Vehicle History</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Accident reports</li>
                  <li>• Odometer readings</li>
                  <li>• Service records</li>
                  <li>• Ownership history</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How to Find Your VIN</h3>
            <p className="text-muted-foreground mb-4">
              The Vehicle Identification Number is a unique 17-character code. You can find it:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Dashboard:</strong> Look through windshield on driver's side (most common location)</li>
              <li><strong>Driver's Door Jamb:</strong> Sticker on the door frame with VIN and manufacturing date</li>
              <li><strong>Title & Registration:</strong> VIN printed on all ownership documents</li>
              <li><strong>Insurance Card:</strong> Listed on your auto insurance documents</li>
              <li><strong>Under Hood:</strong> Sometimes on a metal plate near the engine</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Why Check VIN Before Buying?</h3>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-3">Critical Protection for Buyers</h4>
              <p className="text-muted-foreground mb-3">
                Buying a stolen vehicle has serious consequences:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Legal Issues:</strong> Police can seize stolen vehicles without compensation</li>
                <li>• <strong>Financial Loss:</strong> You lose both the vehicle and your money</li>
                <li>• <strong>Criminal Liability:</strong> Potential charges for receiving stolen property</li>
                <li>• <strong>Title Problems:</strong> Cannot register or insure the vehicle legally</li>
                <li>• <strong>Resale Issues:</strong> Cannot legally sell a vehicle with problems</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">VIN Lookup vs Carfax/AutoCheck</h3>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Feature</th>
                    <th className="border p-3 text-center">SafeOrStolen</th>
                    <th className="border p-3 text-center">Carfax</th>
                    <th className="border p-3 text-center">AutoCheck</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border p-3">Theft Database Check</td>
                    <td className="border p-3 text-center text-green-600 font-bold">✓ Free</td>
                    <td className="border p-3 text-center text-yellow-600">✓ $39.99</td>
                    <td className="border p-3 text-center text-yellow-600">✓ $24.99</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border p-3">Police Database Access</td>
                    <td className="border p-3 text-center text-green-600 font-bold">✓</td>
                    <td className="border p-3 text-center">Limited</td>
                    <td className="border p-3 text-center">Limited</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Instant Results</td>
                    <td className="border p-3 text-center text-green-600 font-bold">✓ 3 seconds</td>
                    <td className="border p-3 text-center">✓</td>
                    <td className="border p-3 text-center">✓</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border p-3">Mobile App</td>
                    <td className="border p-3 text-center text-green-600 font-bold">✓ Yes</td>
                    <td className="border p-3 text-center text-red-600">✗ No</td>
                    <td className="border p-3 text-center text-red-600">✗ No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Understanding VIN Structure</h3>
            <p className="text-muted-foreground mb-4">
              Each section of the 17-character VIN reveals specific information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li><strong>Positions 1-3:</strong> World Manufacturer Identifier (country and manufacturer)</li>
              <li><strong>Positions 4-8:</strong> Vehicle descriptor (model, body type, engine)</li>
              <li><strong>Position 9:</strong> Check digit for VIN validation</li>
              <li><strong>Position 10:</strong> Model year</li>
              <li><strong>Position 11:</strong> Assembly plant</li>
              <li><strong>Positions 12-17:</strong> Sequential production number</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Common VIN Scams to Avoid</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚫 VIN Cloning</h4>
                <p className="text-sm text-muted-foreground">
                  Thieves copy VINs from legitimate vehicles and apply them to stolen cars. Always verify VIN matches title and vehicle.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚫 Altered VINs</h4>
                <p className="text-sm text-muted-foreground">
                  Physical tampering with VIN plates or etching. Check multiple VIN locations to ensure they all match.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚫 Salvage Title Washing</h4>
                <p className="text-sm text-muted-foreground">
                  Moving salvage vehicles across state lines to "clean" titles. Our database tracks title history across all states.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3">Check Any VIN Now - Free</h4>
              <p className="text-muted-foreground mb-4">
                Don't risk buying a stolen or salvaged vehicle. Get instant VIN check results.
              </p>
              <a href="/verify?type=vin" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Check VIN Now
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Free VIN Check Lookup - Vehicle History Report</h1>
          <p>Check any VIN for theft, salvage, liens, and history. Free instant lookup against police and DMV databases.</p>
          <h2>What We Check</h2>
          <ul>
            <li>Theft Status: NCIC stolen vehicle database, international records</li>
            <li>Title Issues: Salvage, rebuilt, flood damage, lemon law</li>
            <li>Financial: Outstanding liens, repossession records</li>
            <li>History: Accidents, odometer, service records</li>
          </ul>
          <p>Visit https://safeorstolen.com/verify to check any VIN now.</p>
        </div>
      </noscript>
    </>
  );
};

export default VINCheckLookupPage;