import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Search, Shield, CheckCircle, AlertTriangle, Phone, Car, Laptop, ArrowRight, FileText, Scale } from 'lucide-react';

export default function HowToCheckIfItemStolenPage() {
  return (
    <>
      <PageSEO
        title="How to Check If an Item Is Stolen - Complete Guide 2026 | SafeOrStolen"
        description="Learn how to verify if phones, cars, laptops, and electronics are stolen before buying. Step-by-step guide to checking IMEI, VIN, and serial numbers. Free verification methods."
        keywords="how to check if item stolen, verify stolen property, check IMEI stolen, VIN stolen check, serial number lookup, stolen goods verification"
        canonical="https://safeorstolen.com/how-to-check-if-item-stolen"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How to Check If an Item Is Stolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The complete guide to verifying phones, vehicles, electronics, and more before purchasing. Protect yourself from unknowingly buying stolen property.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Check an Item Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Why Checking Matters</h2>
            <p>
              Buying stolen property—even unknowingly—carries serious consequences. You could lose the item without refund when police seize it, face criminal charges for possession of stolen goods, and lose thousands of dollars. The secondhand market is filled with legitimate sellers, but criminals actively use platforms like Facebook Marketplace, Craigslist, and OfferUp to fence stolen goods.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg my-6 not-prose">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Legal Consequences</h3>
                  <p className="text-muted-foreground">In most states, receiving stolen property is a crime punishable by fines and imprisonment—even if you had no idea the item was stolen. The only defense is proving you took reasonable steps to verify the item's legitimacy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Item Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Check Different Item Types</h2>
              
              <div className="space-y-12">
                {/* Phones */}
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Phone className="h-10 w-10 text-primary" />
                      <h3 className="text-2xl font-bold">Phones & Tablets (IMEI Check)</h3>
                    </div>
                    <div className="prose max-w-none">
                      <p>Every phone has a unique 15-digit IMEI (International Mobile Equipment Identity) number. This is the most reliable way to check if a phone is stolen or blacklisted.</p>
                      <h4>How to find the IMEI:</h4>
                      <ul>
                        <li><strong>Dial *#06#</strong> on the phone's keypad</li>
                        <li>Check <strong>Settings &gt; About Phone &gt; IMEI</strong></li>
                        <li>Look on the <strong>original box</strong> or <strong>SIM tray</strong></li>
                        <li><strong>Compare all locations</strong>—they should match exactly</li>
                      </ul>
                      <h4>What we check:</h4>
                      <ul>
                        <li>GSMA blacklist (global carrier database)</li>
                        <li>Carrier-specific blacklists (AT&T, Verizon, T-Mobile)</li>
                        <li>Insurance claim records</li>
                        <li>Law enforcement stolen property files</li>
                      </ul>
                    </div>
                    <Button className="mt-4" asChild>
                      <Link to="/imei-checker">Check Phone IMEI</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Vehicles */}
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Car className="h-10 w-10 text-primary" />
                      <h3 className="text-2xl font-bold">Vehicles (VIN Check)</h3>
                    </div>
                    <div className="prose max-w-none">
                      <p>The 17-character VIN (Vehicle Identification Number) identifies every car, truck, motorcycle, and RV. A VIN check reveals theft history, title status, and more.</p>
                      <h4>Where to find the VIN:</h4>
                      <ul>
                        <li><strong>Dashboard</strong> (driver's side, visible through windshield)</li>
                        <li><strong>Driver's door jamb</strong> sticker</li>
                        <li><strong>Vehicle title</strong> and <strong>registration</strong></li>
                        <li><strong>Insurance documents</strong></li>
                      </ul>
                      <h4>Red flags to watch for:</h4>
                      <ul>
                        <li>VIN plate looks tampered with or replaced</li>
                        <li>VIN doesn't match on title vs. vehicle</li>
                        <li>Seller reluctant to provide VIN before meeting</li>
                        <li>Price significantly below market value</li>
                      </ul>
                    </div>
                    <Button className="mt-4" asChild>
                      <Link to="/vin-checker">Check Vehicle VIN</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Electronics */}
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Laptop className="h-10 w-10 text-primary" />
                      <h3 className="text-2xl font-bold">Electronics & Other Items (Serial Number)</h3>
                    </div>
                    <div className="prose max-w-none">
                      <p>Laptops, gaming consoles, power tools, cameras, and other electronics have serial numbers that can be checked against stolen property databases.</p>
                      <h4>Common serial number locations:</h4>
                      <ul>
                        <li><strong>Laptops:</strong> Bottom of device, BIOS/System Information</li>
                        <li><strong>Gaming consoles:</strong> Back of console, Settings menu</li>
                        <li><strong>Cameras:</strong> Bottom plate, battery compartment</li>
                        <li><strong>Power tools:</strong> Near motor housing, product label</li>
                        <li><strong>Bicycles:</strong> Under bottom bracket, head tube</li>
                      </ul>
                      <h4>What to verify:</h4>
                      <ul>
                        <li>Serial number matches original packaging (if available)</li>
                        <li>Serial number hasn't been scratched off or altered</li>
                        <li>Item isn't listed in stolen property databases</li>
                      </ul>
                    </div>
                    <Button className="mt-4" asChild>
                      <Link to="/serial-number-checker">Check Serial Number</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">5-Step Verification Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg">Get the identifier before meeting</h3>
                  <p className="text-muted-foreground">Ask the seller for the IMEI, VIN, or serial number via message. Legitimate sellers provide this readily. Scammers often refuse or make excuses.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg">Run the check on SafeOrStolen</h3>
                  <p className="text-muted-foreground">Enter the identifier in our verification tool. Results show in under 3 seconds with clear Safe/Stolen status.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg">Verify identifier matches physical item</h3>
                  <p className="text-muted-foreground">When you meet, confirm the identifier on the actual device matches what you checked. Scammers sometimes use stolen identifiers from different devices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-lg">Check for physical tampering</h3>
                  <p className="text-muted-foreground">Look for scratched-off serial numbers, replaced VIN plates, or signs the device has been opened/modified to hide its identity.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-lg">Request proof of purchase</h3>
                  <p className="text-muted-foreground">Ask for original receipt, box with matching serial, or account transfer documentation. This provides additional protection and evidence of legitimate ownership.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-2">Is it really free to check?</h3>
                  <p className="text-muted-foreground">Yes. SafeOrStolen offers 2 free verifications with no credit card required. Then $0.99/check or $2.99/month unlimited.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-2">What if the item comes back as stolen?</h3>
                  <p className="text-muted-foreground">Do not purchase the item. You can report the listing to the platform (Facebook, Craigslist, etc.) and optionally contact local police with the information.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-2">Can sellers fake verification results?</h3>
                  <p className="text-muted-foreground">Run your own check. Never trust screenshots or PDFs provided by sellers. Verification takes seconds and should always be done on your device.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-2">What if the item isn't in any database?</h3>
                  <p className="text-muted-foreground">A "not found" result means the item hasn't been reported stolen to the databases we check. It's a good sign, but not a guarantee. Use additional verification steps like proof of purchase.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify an Item?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check phones, vehicles, laptops, and more in seconds. 2 free verifications included.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Start Verification <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
