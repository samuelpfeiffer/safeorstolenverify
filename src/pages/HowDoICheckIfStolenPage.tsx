import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const HowDoICheckIfStolenPage = () => {
  return (
    <>
      <PageSEO
        title="How Do I Check If Something Is Stolen? Complete Guide | Safe or Stolen"
        description="Learn how to check if anything is stolen. Step-by-step guide to verify electronics, vehicles, phones, bikes, and property before buying. Free database access."
        keywords="how to check if stolen, verify stolen goods, check serial number, IMEI check, VIN lookup"
        canonical="/how-do-i-check-if-stolen"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How Do I Check If Something Is Stolen?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete step-by-step guide to verify any item before purchase. Learn what to check, where to look, and how to protect yourself.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify">Check Any Item Now - Free</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Quick Answer: 3-Step Verification Process</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-3">1</div>
                <h3 className="text-xl font-semibold mb-2">Find Identifier</h3>
                <p className="text-sm text-muted-foreground">
                  Locate serial number, IMEI, VIN, or unique identifier on the item
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-3">2</div>
                <h3 className="text-xl font-semibold mb-2">Search Database</h3>
                <p className="text-sm text-muted-foreground">
                  Enter identifier into SafeOrStolen to check 50+ stolen item databases
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-3">3</div>
                <h3 className="text-xl font-semibold mb-2">Review Results</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant verification: Clean, Stolen, or Caution status
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">How to Check Different Items</h2>
            
            <h3 className="text-2xl font-semibold mb-4">📱 Phones & Smartphones</h3>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h4 className="font-semibold mb-3">Step 1: Find IMEI Number</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-4">
                <li>Dial <code className="bg-muted px-2 py-1 rounded">*#06#</code> on the phone</li>
                <li>iPhone: Settings → General → About → IMEI</li>
                <li>Android: Settings → About Phone → Status → IMEI</li>
                <li>Check original box or SIM tray</li>
              </ul>
              <h4 className="font-semibold mb-3">Step 2: Verify IMEI</h4>
              <p className="text-sm text-muted-foreground mb-2">Enter IMEI at SafeOrStolen.com to check:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>Carrier blacklist status (AT&T, Verizon, T-Mobile, etc.)</li>
                <li>Police stolen phone databases</li>
                <li>Apple Find My / Samsung Find My Mobile reports</li>
                <li>Insurance theft claims</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">🚗 Vehicles (Cars, Trucks, Motorcycles)</h3>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h4 className="font-semibold mb-3">Step 1: Find VIN (Vehicle Identification Number)</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-4">
                <li>Dashboard (driver's side, visible through windshield)</li>
                <li>Driver's door jamb sticker</li>
                <li>Title, registration, or insurance documents</li>
                <li>Under the hood on metal plate</li>
              </ul>
              <h4 className="font-semibold mb-3">Step 2: Check VIN</h4>
              <p className="text-sm text-muted-foreground mb-2">Enter 17-character VIN to verify:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>NCIC stolen vehicle database</li>
                <li>Salvage/rebuilt title status</li>
                <li>Accident history and damage reports</li>
                <li>Outstanding liens or repossession records</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">💻 Electronics (Laptops, Tablets, Cameras)</h3>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h4 className="font-semibold mb-3">Step 1: Locate Serial Number</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-4">
                <li><strong>Laptops:</strong> Bottom case, battery compartment, or "About This Computer"</li>
                <li><strong>Tablets:</strong> Back case, Settings → About, or original packaging</li>
                <li><strong>Cameras:</strong> Bottom, battery compartment, or menu system</li>
                <li><strong>Gaming Consoles:</strong> Back/bottom case or system settings</li>
              </ul>
              <h4 className="font-semibold mb-3">Step 2: Verify Serial Number</h4>
              <p className="text-sm text-muted-foreground">Check against police property databases, manufacturer theft reports, and insurance claims</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">🚴 Bicycles & E-Bikes</h3>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h4 className="font-semibold mb-3">Step 1: Find Frame Serial Number</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-4">
                <li>Bottom bracket (underside where pedals attach) - most common</li>
                <li>Head tube (front where fork connects)</li>
                <li>Seat tube or rear dropout</li>
                <li>Check original receipt</li>
              </ul>
              <h4 className="font-semibold mb-3">Step 2: Search Bike Registries</h4>
              <p className="text-sm text-muted-foreground">Verify against BikeIndex, Project 529, police databases, and insurance records</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">🔫 Firearms</h3>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h4 className="font-semibold mb-3">Step 1: Locate Firearm Serial Number</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-4">
                <li><strong>Handguns:</strong> Frame near trigger guard, slide, or barrel</li>
                <li><strong>Rifles:</strong> Receiver or barrel near chamber</li>
                <li><strong>Shotguns:</strong> Receiver or barrel</li>
              </ul>
              <h4 className="font-semibold mb-3">Step 2: Verify Against NCIC</h4>
              <p className="text-sm text-muted-foreground">Check FBI NCIC stolen gun file, ATF trace system, and state registries. <strong>Note:</strong> Federal law requires FFL transfers for most transactions.</p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Why Checking is Critical</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Legal & Financial Consequences</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Legal Risks:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Criminal charges (receiving stolen property)</li>
                    <li>• Police seizure without compensation</li>
                    <li>• Court appearances and legal fees</li>
                    <li>• Potential criminal record</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Financial Loss:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Lose both item and purchase money</li>
                    <li>• Cannot resell or return item</li>
                    <li>• No warranty or manufacturer support</li>
                    <li>• Cannot insure stolen property</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">What If Item Shows as Stolen?</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Do Not Purchase:</strong> Walk away from the deal immediately</li>
              <li><strong>Report to Police:</strong> Provide seller information, listing URL, meeting details</li>
              <li><strong>Contact Rightful Owner:</strong> If registry shows owner info, notify them of recovery opportunity</li>
              <li><strong>Flag Online Listing:</strong> Report to Craigslist, Facebook, eBay, OfferUp</li>
              <li><strong>Document Everything:</strong> Save screenshots, photos, communications with seller</li>
              <li><strong>Warn Community:</strong> Post in local buy/sell groups to prevent others from being victimized</li>
            </ol>

            <h2 className="text-3xl font-bold mb-6">Red Flags: Likely Stolen</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Missing/Altered Serial Numbers</h4>
                <p className="text-sm text-muted-foreground">Serial filed off, scratched out, or damaged area</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 No Documentation</h4>
                <p className="text-sm text-muted-foreground">Can't provide receipt, registration, or proof of ownership</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Too Good to Be True Price</h4>
                <p className="text-sm text-muted-foreground">Significantly below market value</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Suspicious Meeting Location</h4>
                <p className="text-sm text-muted-foreground">Parking lot only, refuses home viewing</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Multiple High-Value Items</h4>
                <p className="text-sm text-muted-foreground">Selling many expensive items at once</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚩 Vague Story</h4>
                <p className="text-sm text-muted-foreground">"Friend's item," "moving sale," inconsistent details</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Statistics: Stolen Goods Crisis</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-2">$15B</div>
                <div className="text-xs text-muted-foreground">Annual stolen goods market in US</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-2">40%</div>
                <div className="text-xs text-muted-foreground">Online marketplace listings are stolen</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-2">85%</div>
                <div className="text-xs text-muted-foreground">Buyers don't verify before purchase</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-2">15%</div>
                <div className="text-xs text-muted-foreground">Stolen items ever recovered</div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-3">Check Any Item Now - Free</h3>
              <p className="text-muted-foreground mb-4">
                Don't risk legal trouble or financial loss. Verify anything in 3 seconds before you buy.
              </p>
              <a href="/verify" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Free Verification
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>How Do I Check If Something Is Stolen? Complete Guide</h1>
          <p>3-step process: 1) Find identifier (serial, IMEI, VIN) 2) Search database 3) Review results</p>
          <h2>What to Check</h2>
          <ul>
            <li>Phones: Dial *#06# for IMEI, check carrier blacklists</li>
            <li>Vehicles: Find VIN on dashboard, verify NCIC database</li>
            <li>Electronics: Locate serial number, check police databases</li>
            <li>Bikes: Frame serial at bottom bracket, search BikeIndex</li>
            <li>Firearms: Serial on frame/receiver, verify NCIC gun file</li>
          </ul>
          <p>$15B annual stolen goods market. 85% of buyers don't verify. Protect yourself.</p>
        </div>
      </noscript>
    </>
  );
};

export default HowDoICheckIfStolenPage;