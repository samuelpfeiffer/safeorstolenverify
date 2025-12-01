import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Shield, Smartphone, Car, Laptop, Bike, Wrench, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CompleteVerificationGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Verification Guide: How to Check If Any Item Is Stolen",
    "description": "Master guide to verifying phones, vehicles, electronics, bikes, tools, and more. Learn how to protect yourself from buying stolen goods with SafeOrStolen.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15"
  };

  return (
    <>
      <PageSEO
        title="Complete Verification Guide: How to Check If Anything Is Stolen | SafeOrStolen"
        description="Master guide to verifying phones, vehicles, electronics, bikes, tools, and more. Comprehensive tutorial for protecting yourself from buying stolen goods."
        keywords="verification guide, check stolen items, how to verify, IMEI check, VIN check, serial number verification"
        canonical="/blog/complete-verification-guide"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6">Complete Verification Guide: How to Check If Any Item Is Stolen</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <time dateTime="2026-01-15">January 15, 2026</time>
              <span>•</span>
              <span>20 min read</span>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Ultimate Stolen Goods Protection Manual</h2>
              <p className="text-lg mb-4">
                With over $15 billion in stolen goods sold annually on secondhand marketplaces, every buyer needs to know how to verify items before purchase. This comprehensive guide covers verification methods for every category of item you might buy used—from smartphones to vehicles, electronics to tools.
              </p>
              <p className="text-lg mb-4">
                Whether you're shopping on eBay, Facebook Marketplace, Craigslist, or OfferUp, this guide will teach you how to protect yourself from buying stolen property and potentially facing criminal charges.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Universal Verification Principles</h2>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">3-Step Verification Process (Works for Any Item):</h3>
                <ol className="list-decimal list-inside space-y-3 text-lg">
                  <li><strong>Find the Unique Identifier:</strong> IMEI for phones, VIN for vehicles, serial number for electronics/tools</li>
                  <li><strong>Run Verification BEFORE Meeting Seller:</strong> Use SafeOrStolen to check against 50+ stolen goods databases</li>
                  <li><strong>Verify In-Person with Mobile App:</strong> Re-scan identifier during transaction using SafeOrStolen's barcode scanner</li>
                </ol>
              </div>

              <p className="text-lg mb-6">
                <strong>Golden Rule:</strong> If a seller refuses to provide identifiers or creates urgency to skip verification, walk away immediately. Legitimate sellers have nothing to hide.
              </p>

              <Button asChild size="lg" className="w-full mb-8">
                <Link to="/verify">Verify Any Item Now - Free Trial</Link>
              </Button>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Item-By-Item Verification Guide</h2>
              
              <div className="space-y-8">
                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Smartphone className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Smartphones & Tablets</h3>
                      <p className="text-muted-foreground">IMEI/Serial Number Verification</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3">How to Find IMEI Number:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong>Dial Code Method:</strong> Dial *#06# on any phone to display IMEI instantly</li>
                    <li><strong>Settings Method (iPhone):</strong> Settings → General → About → IMEI</li>
                    <li><strong>Settings Method (Android):</strong> Settings → About Phone → Status → IMEI</li>
                    <li><strong>Physical Label:</strong> Check SIM tray or under battery (older models)</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3">What to Verify:</h4>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <ul className="space-y-2">
                      <li>✓ Check if IMEI is reported stolen in police databases</li>
                      <li>✓ Verify carrier blacklist status (AT&T, Verizon, T-Mobile, Sprint)</li>
                      <li>✓ Confirm Find My iPhone/Android is disabled by seller</li>
                      <li>✓ Ensure activation lock is removed</li>
                      <li>✓ Check for outstanding finance balance</li>
                    </ul>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded">
                    <p className="font-bold mb-2">⚠️ Critical Warning:</p>
                    <p>If Find My iPhone or Android Device Protection is still enabled, the previous owner can remotely lock or erase the phone at any time—even after you've paid.</p>
                  </div>
                </Card>

                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Car className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Vehicles (Cars, Trucks, Motorcycles)</h3>
                      <p className="text-muted-foreground">VIN Verification & Title History</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3">How to Find VIN Number:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong>Driver's Side Dashboard:</strong> Visible through windshield (17 characters)</li>
                    <li><strong>Driver's Door Jamb:</strong> White sticker with VIN and vehicle info</li>
                    <li><strong>Vehicle Title/Registration:</strong> Listed on all official documents</li>
                    <li><strong>Insurance Documents:</strong> VIN appears on all insurance cards</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3">What to Verify:</h4>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <ul className="space-y-2">
                      <li>✓ Check if VIN is reported stolen (NICB, NMVTIS, state databases)</li>
                      <li>✓ Verify title is clean (not salvage, rebuilt, or branded)</li>
                      <li>✓ Confirm mileage matches odometer (detect rollback fraud)</li>
                      <li>✓ Check for outstanding liens or finance balance</li>
                      <li>✓ Verify accident history and flood damage</li>
                      <li>✓ Ensure VIN matches title and registration</li>
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/vin-checker">Verify VIN Number Now</Link>
                  </Button>
                </Card>

                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Laptop className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Laptops & Computers</h3>
                      <p className="text-muted-foreground">Serial Number & Hardware ID Verification</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3">How to Find Serial Number:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong>MacBook:</strong> Apple Menu → About This Mac → Serial Number</li>
                    <li><strong>Windows PC:</strong> Command Prompt → "wmic bios get serialnumber"</li>
                    <li><strong>Physical Label:</strong> Check bottom of laptop or inside battery compartment</li>
                    <li><strong>Original Box:</strong> Serial number printed on packaging barcode</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3">What to Verify:</h4>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <ul className="space-y-2">
                      <li>✓ Check if serial number is reported stolen</li>
                      <li>✓ Verify Find My Mac/Windows is disabled</li>
                      <li>✓ Confirm seller can provide admin password</li>
                      <li>✓ Ensure no firmware/BIOS password lock</li>
                      <li>✓ Check manufacturer warranty status</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Bike className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Bicycles & E-Bikes</h3>
                      <p className="text-muted-foreground">Frame Serial Number Verification</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3">How to Find Bike Serial Number:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong>Bottom Bracket:</strong> Most common location (underside of frame where pedals attach)</li>
                    <li><strong>Head Tube:</strong> Front of frame near handlebars</li>
                    <li><strong>Seat Tube:</strong> Where seat post inserts into frame</li>
                    <li><strong>Dropout:</strong> Rear wheel attachment points</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3">What to Verify:</h4>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <ul className="space-y-2">
                      <li>✓ Check Bike Index (largest stolen bike database)</li>
                      <li>✓ Verify local police stolen bike registries</li>
                      <li>✓ Confirm seller has original purchase receipt</li>
                      <li>✓ Request photos of serial number matching actual bike</li>
                      <li>✓ Ensure frame serial hasn't been filed off (major red flag)</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded">
                    <p className="font-bold mb-2">E-Bike Specific Tip:</p>
                    <p>High-end e-bikes ($3,000+) are prime theft targets. Always verify battery and motor serial numbers separately—thieves sometimes swap components.</p>
                  </div>
                </Card>

                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Wrench className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Power Tools & Equipment</h3>
                      <p className="text-muted-foreground">Serial Number & Model Verification</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3">How to Find Tool Serial Numbers:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong>Tool Body:</strong> Usually near battery compartment or motor housing</li>
                    <li><strong>Battery Pack:</strong> Separate serial number (often stolen with tool)</li>
                    <li><strong>Carrying Case:</strong> Some manufacturers print serial on case</li>
                    <li><strong>Original Box:</strong> Barcode label with serial and model info</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3">What to Verify:</h4>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <ul className="space-y-2">
                      <li>✓ Check if serial reported stolen (construction site thefts common)</li>
                      <li>✓ Verify seller has original case and all accessories</li>
                      <li>✓ Confirm purchase receipt available (especially for new tools)</li>
                      <li>✓ Ensure warranty is transferable and not voided</li>
                      <li>✓ Check seller isn't listing multiple identical tools (major red flag)</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Heart className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Jewelry & Watches</h3>
                      <p className="text-muted-foreground">Model Number & Certificate Verification</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3">How to Find Watch Serial Numbers:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong>Case Back:</strong> Engraved serial number (usually 6-8 digits)</li>
                    <li><strong>Between Lugs:</strong> Some brands hide serial where strap attaches</li>
                    <li><strong>Certificate of Authenticity:</strong> Should match watch serial exactly</li>
                    <li><strong>Warranty Card:</strong> Lists serial and purchase date</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3">What to Verify:</h4>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <ul className="space-y-2">
                      <li>✓ Check Art Loss Register for luxury watch theft reports</li>
                      <li>✓ Verify serial matches manufacturer database (Rolex, Patek Philippe)</li>
                      <li>✓ Confirm certificate of authenticity is genuine</li>
                      <li>✓ Ensure seller can provide original purchase receipt</li>
                      <li>✓ Verify watch hasn't been reported to insurance as lost/stolen</li>
                    </ul>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded">
                    <p className="font-bold mb-2">⚠️ Luxury Watch Warning:</p>
                    <p>Organized theft rings target luxury watches in violent robberies. Always meet in police station parking lots for high-value watch transactions and verify thoroughly.</p>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">How SafeOrStolen Makes Verification Easy</h2>
              
              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Universal Verification Platform:</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>One Search, 50+ Databases:</strong> Instantly checks FBI NCIC, state police, insurance claims, carrier blacklists, manufacturer registries</li>
                  <li><strong>Mobile App with Barcode Scanner:</strong> Scan any identifier in 3 seconds during transactions</li>
                  <li><strong>Real-Time Results:</strong> Immediate SAFE or STOLEN status with confidence scores</li>
                  <li><strong>Detailed Reports:</strong> See exact theft reports, police case numbers, recovery info</li>
                  <li><strong>Legal Protection:</strong> Get documentation if you unknowingly purchase stolen goods</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/verify">Start Free Verification</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/mobile-app">Download Mobile App</Link>
                </Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Safe Buying Checklist (Print & Save)</h2>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Before Every Purchase:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Request identifier BEFORE meeting:</strong> IMEI, VIN, or serial number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Run SafeOrStolen verification:</strong> Check against stolen databases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Meet in public with cameras:</strong> Police stations, banks, busy parking lots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Bring SafeOrStolen mobile app:</strong> Re-scan identifier in person</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Request original packaging:</strong> Box, receipt, warranty, accessories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Test functionality completely:</strong> Turn on, factory reset, reactivate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Check seller profile:</strong> Account age, ratings, previous sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Use traceable payments:</strong> Venmo, PayPal, Zelle (avoid cash for high-value)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Get written receipt:</strong> Include identifier, date, seller name, price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">☐</span>
                    <span><strong>Trust your instincts:</strong> Walk away if anything feels wrong</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Conclusion: Knowledge + Verification = Protection</h2>
              <p className="text-lg mb-4">
                Buying secondhand doesn't have to be risky. By following this comprehensive verification guide and using SafeOrStolen's instant verification tools, you can confidently shop marketplaces knowing you're protected from stolen goods fraud.
              </p>
              <p className="text-lg mb-6">
                Our mission is to make secondhand buying safe for everyone. With 97.3% accuracy and 3-second verification, SafeOrStolen gives you the power to protect yourself from financial loss and legal trouble.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-lg font-bold mb-4">Start protecting yourself today:</p>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/verify">Verify Any Item Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/mobile-app">Get Mobile App</Link>
                  </Button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}