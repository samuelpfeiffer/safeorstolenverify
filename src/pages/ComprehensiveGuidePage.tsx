import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { BookOpen, Phone, Car, Laptop, Shield, CheckCircle, AlertTriangle, ArrowRight, FileText } from 'lucide-react';

export default function ComprehensiveGuidePage() {
  return (
    <>
      <PageSEO
        title="Comprehensive Guide to Stolen Item Verification | SafeOrStolen"
        description="The complete guide to verifying phones, vehicles, electronics, and more before buying. Learn IMEI, VIN, and serial number verification methods. Protect yourself from fraud."
        keywords="stolen item guide, verification guide, IMEI guide, VIN guide, how to check stolen, buy secondhand safely"
        canonical="https://safeorstolen.com/comprehensive-guide"
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Verification Guide
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about verifying secondhand items before buying. Protect yourself from stolen goods, fraud, and legal trouble.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">In This Guide</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li><a href="#why-verify" className="text-primary hover:underline">1. Why Verification Matters</a></li>
                  <li><a href="#phones" className="text-primary hover:underline">2. Verifying Phones (IMEI Check)</a></li>
                  <li><a href="#vehicles" className="text-primary hover:underline">3. Verifying Vehicles (VIN Check)</a></li>
                  <li><a href="#electronics" className="text-primary hover:underline">4. Verifying Electronics & Other Items</a></li>
                  <li><a href="#red-flags" className="text-primary hover:underline">5. Red Flags to Watch For</a></li>
                  <li><a href="#legal" className="text-primary hover:underline">6. Legal Consequences of Buying Stolen Goods</a></li>
                  <li><a href="#resources" className="text-primary hover:underline">7. Additional Resources</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 1 */}
        <section id="why-verify" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>1. Why Verification Matters</h2>
              <p>
                The secondhand market is booming—over $200 billion annually in the US alone. But so is theft. An estimated $50 billion in stolen goods enters the resale market each year through platforms like Facebook Marketplace, Craigslist, OfferUp, and pawn shops.
              </p>
              <p>
                When you buy stolen property—even without knowing—you face:
              </p>
              <ul>
                <li><strong>Loss of the item:</strong> Police can seize it with no refund</li>
                <li><strong>Loss of money:</strong> Your payment goes to the thief, not recoverable</li>
                <li><strong>Criminal charges:</strong> Possession of stolen property is illegal in all states</li>
                <li><strong>Legal fees:</strong> Defending yourself costs thousands even if charges are dropped</li>
              </ul>
              <p>
                A 30-second verification check can prevent all of this.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="phones" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="flex items-center gap-4 not-prose mb-6">
                <Phone className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">2. Verifying Phones (IMEI Check)</h2>
              </div>
              <p>
                Every phone has a unique 15-digit IMEI (International Mobile Equipment Identity). This number is registered with carriers worldwide and tracked in stolen property databases.
              </p>
              <h3>How to Find the IMEI</h3>
              <ul>
                <li>Dial <code>*#06#</code> on the phone's keypad</li>
                <li>Go to Settings → About Phone → IMEI</li>
                <li>Check the SIM tray or original box</li>
                <li>For iPhones: Settings → General → About → IMEI</li>
              </ul>
              <h3>What an IMEI Check Reveals</h3>
              <ul>
                <li>Carrier blacklist status (reported stolen/unpaid balance)</li>
                <li>Insurance claims (theft claim paid)</li>
                <li>Law enforcement reports</li>
                <li>Activation lock status</li>
              </ul>
              <div className="not-prose mt-6">
                <Button asChild>
                  <Link to="/imei-checker">Check Phone IMEI</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="vehicles" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="flex items-center gap-4 not-prose mb-6">
                <Car className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">3. Verifying Vehicles (VIN Check)</h2>
              </div>
              <p>
                The 17-character VIN (Vehicle Identification Number) is a vehicle's fingerprint. It reveals ownership history, title status, and theft records.
              </p>
              <h3>Where to Find the VIN</h3>
              <ul>
                <li>Dashboard (driver's side, visible through windshield)</li>
                <li>Driver's door jamb sticker</li>
                <li>Vehicle title and registration</li>
                <li>Insurance documents</li>
              </ul>
              <h3>What a VIN Check Reveals</h3>
              <ul>
                <li>Theft history (stolen property reports from all 50 states, state databases)</li>
                <li>Title status (clean, salvage, rebuilt, flood)</li>
                <li>Lien status (money owed on vehicle)</li>
                <li>Odometer rollback</li>
                <li>Accident history</li>
              </ul>
              <div className="not-prose mt-6">
                <Button asChild>
                  <Link to="/vin-checker">Check Vehicle VIN</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="electronics" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="flex items-center gap-4 not-prose mb-6">
                <Laptop className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">4. Verifying Electronics & Other Items</h2>
              </div>
              <p>
                Most electronics have serial numbers that can be checked against stolen property databases. While coverage isn't as comprehensive as phones/vehicles, verification still catches many stolen items.
              </p>
              <h3>Common Items with Checkable Serials</h3>
              <ul>
                <li><strong>Laptops:</strong> Bottom of device, BIOS/System Information</li>
                <li><strong>Gaming Consoles:</strong> Back of console, Settings menu</li>
                <li><strong>Cameras:</strong> Bottom plate, battery compartment</li>
                <li><strong>Power Tools:</strong> Near motor housing, product label</li>
                <li><strong>Bicycles:</strong> Under bottom bracket, head tube</li>
                <li><strong>Watches:</strong> Case back, between lugs</li>
                <li><strong>Firearms:</strong> Frame/receiver (legally required)</li>
              </ul>
              <div className="not-prose mt-6">
                <Button asChild>
                  <Link to="/serial-number-checker">Check Serial Number</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="red-flags" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="h-10 w-10 text-destructive" />
                <h2 className="text-3xl font-bold">5. Red Flags to Watch For</h2>
              </div>
              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <span>Price significantly below market value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <span>Seller refuses to provide serial/IMEI/VIN before meeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <span>Serial numbers scratched off or tampered with</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <span>No proof of purchase or original packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <span>Seller insists on cash only, quick sale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <span>Phone locked to account seller can't access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <span>Seller can't explain how they acquired item</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="legal" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="flex items-center gap-4 not-prose mb-6">
                <Shield className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">6. Legal Consequences</h2>
              </div>
              <p>
                Receiving stolen property is a crime in all 50 states. Penalties vary but can include:
              </p>
              <ul>
                <li><strong>Misdemeanor:</strong> Up to 1 year in jail for lower-value items</li>
                <li><strong>Felony:</strong> 1-10+ years for higher-value items (usually $500-$1000+)</li>
                <li><strong>Fines:</strong> Up to $10,000+ depending on value and state</li>
                <li><strong>Forfeiture:</strong> Item seized with no compensation</li>
                <li><strong>Criminal record:</strong> Affects employment, housing, credit</li>
              </ul>
              <p>
                <strong>Key legal concept:</strong> "Knowingly or should have known" — If a reasonable person would suspect the item is stolen (price too good, suspicious circumstances), you can be charged even if you didn't explicitly know.
              </p>
              <p>
                Verification creates a defense: showing you took reasonable steps to verify legitimacy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="resources" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <FileText className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">7. Additional Resources</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <Link to="/how-to-check-if-item-stolen" className="text-primary hover:underline font-medium">
                      How to Check If Item Is Stolen
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Link to="/blog/how-to-check-if-phone-stolen" className="text-primary hover:underline font-medium">
                      Phone Verification Guide
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Link to="/blog/complete-vin-guide" className="text-primary hover:underline font-medium">
                      Complete VIN Guide
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Link to="/faq" className="text-primary hover:underline font-medium">
                      Frequently Asked Questions
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Verifying Now</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check phones, vehicles, and electronics in seconds. 2 free verifications, no credit card required.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Verify an Item <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
