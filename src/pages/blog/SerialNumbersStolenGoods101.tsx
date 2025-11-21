import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Hash, Search, Shield, AlertCircle, CheckCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SerialNumbersStolenGoods101 = () => {
  return (
    <>
      <PageSEO
        title="Serial Numbers & Stolen Goods 101 | Complete Beginner's Guide"
        description="Learn everything about serial numbers and stolen goods verification. How to find serial numbers, check if items are stolen, and protect yourself from buying stolen property."
        keywords="serial numbers stolen goods, how to find serial numbers, check serial number stolen, verify serial numbers, stolen property serial number"
        canonical="/blog/serial-numbers-stolen-goods-101"
        type="article"
      />

      <div className="min-h-screen bg-sos text-white py-24 px-4">
        <article className="container mx-auto max-w-4xl">
          <header className="mb-8">
            <Badge className="mb-4 bg-sos-orange text-white">Beginner's Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Serial Numbers & Stolen Goods 101
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about serial numbers and verifying stolen property
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>Updated: November 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </header>

          <noscript>
            <div className="space-y-6">
              <p className="text-lg">
                Serial numbers are your first line of defense against buying stolen goods. This comprehensive guide 
                teaches you everything you need to know about finding, reading, and verifying serial numbers to 
                protect yourself from financial loss and legal trouble.
              </p>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Hash className="h-8 w-8" />
                  What Are Serial Numbers?
                </h2>
                <p className="mb-4">
                  A serial number is a unique identifier assigned to a product by its manufacturer. Think of it as a 
                  product's fingerprint—no two items should have the same serial number (though counterfeiters sometimes try).
                </p>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">Why Serial Numbers Matter</h3>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Track ownership:</strong> Prove you're the rightful owner of an item</li>
                  <li>• <strong>Warranty claims:</strong> Required for most manufacturer warranties</li>
                  <li>• <strong>Theft recovery:</strong> Police use serial numbers to return stolen property</li>
                  <li>• <strong>Verify authenticity:</strong> Confirm a product isn't counterfeit</li>
                  <li>• <strong>Check stolen status:</strong> See if an item has been reported stolen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Search className="h-8 w-8" />
                  Where to Find Serial Numbers
                </h2>
                <p className="mb-4">
                  Serial number locations vary by product type. Here's where to look:
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Smartphones & Tablets</h3>
                <ul className="space-y-2 ml-6">
                  <li>• In device settings (Settings → About → Serial Number/IMEI)</li>
                  <li>• On original box label</li>
                  <li>• On SIM card tray (for iPhones)</li>
                  <li>• Under battery (older removable battery models)</li>
                  <li>• Dial *#06# to display IMEI on screen</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Laptops & Computers</h3>
                <ul className="space-y-2 ml-6">
                  <li>• Sticker on bottom of device</li>
                  <li>• Inside battery compartment</li>
                  <li>• On original packaging</li>
                  <li>• In BIOS settings (press F2 or DEL during boot)</li>
                  <li>• In operating system (System Information or About This Mac)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Gaming Consoles</h3>
                <ul className="space-y-2 ml-6">
                  <li>• Back or bottom of console</li>
                  <li>• In system settings menu</li>
                  <li>• On original retail box</li>
                  <li>• Near power supply connection</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Bicycles</h3>
                <ul className="space-y-2 ml-6">
                  <li>• Under bottom bracket (where pedals connect)</li>
                  <li>• On head tube (near handlebars)</li>
                  <li>• On rear dropout (near back wheel)</li>
                  <li>• Often starts with manufacturer code + production number</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Power Tools</h3>
                <ul className="space-y-2 ml-6">
                  <li>• Engraved on tool body</li>
                  <li>• On nameplate near handle</li>
                  <li>• Inside battery compartment</li>
                  <li>• On original case or packaging</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Cameras & Lenses</h3>
                <ul className="space-y-2 ml-6">
                  <li>• Bottom of camera body</li>
                  <li>• Inside battery compartment</li>
                  <li>• On lens barrel (for lenses)</li>
                  <li>• In camera settings menu</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Smartphone className="h-8 w-8" />
                  Understanding Serial Number Formats
                </h2>
                <p className="mb-4">
                  Serial numbers follow different formats depending on manufacturer:
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Apple Devices</h3>
                <p className="mb-2">
                  <strong>Format:</strong> Usually 12 alphanumeric characters (e.g., C02XG7HMJHD5)
                </p>
                <ul className="space-y-1 ml-6 text-sm">
                  <li>• First 3 characters = manufacturing location</li>
                  <li>• Next 2 = manufacturing week and year</li>
                  <li>• Remaining = unique identifier</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Samsung Devices</h3>
                <p className="mb-2">
                  <strong>Format:</strong> Typically 11 alphanumeric characters
                </p>
                <p className="text-sm">Also has IMEI (15 digits) for phones</p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Dell Computers</h3>
                <p className="mb-2">
                  <strong>Service Tag Format:</strong> 7 alphanumeric characters (e.g., 1AB2C34)
                </p>
                <p className="text-sm">Also includes Express Service Code (numeric)</p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">HP Computers</h3>
                <p className="mb-2">
                  <strong>Format:</strong> Typically 10 characters starting with model indicator
                </p>
                <p className="text-sm">Also has Product Number (P/N)</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Shield className="h-8 w-8" />
                  How to Verify Serial Numbers
                </h2>
                
                <h3 className="text-2xl font-semibold mb-3">Step 1: Record the Serial Number</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li>• Write it down carefully (zeros vs. O's, 1's vs. I's matter!)</li>
                  <li>• Take a photo of the serial number label</li>
                  <li>• Double-check your transcription</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3">Step 2: Use a Verification Service</h3>
                <p className="mb-4">
                  Services like SafeOrStolen check multiple databases simultaneously:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li>• Law enforcement stolen property databases</li>
                  <li>• Manufacturer blacklists</li>
                  <li>• Insurance company databases</li>
                  <li>• Pawn shop registry systems</li>
                  <li>• International theft databases (for vehicles)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3">Step 3: Verify Manufacturer Information</h3>
                <p className="mb-4">
                  Cross-reference the serial number with manufacturer records:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li>• Check warranty status on manufacturer website</li>
                  <li>• Verify production date matches seller's claims</li>
                  <li>• Confirm model number matches physical device</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3">Step 4: Look for Red Flags</h3>
                <ul className="space-y-2 ml-6">
                  <li>• Serial number scratched off, altered, or covered</li>
                  <li>• Serial number doesn't match original box</li>
                  <li>• Seller can't or won't provide serial number</li>
                  <li>• Price is significantly below market value</li>
                  <li>• Seller wants cash only with no receipt</li>
                  <li>• Serial number format doesn't match manufacturer standards</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <AlertCircle className="h-8 w-8" />
                  Common Serial Number Scams
                </h2>
                
                <h3 className="text-2xl font-semibold mb-3 mt-4">1. Altered Serial Numbers</h3>
                <p className="mb-4">
                  Thieves scratch off, paint over, or use stickers to hide or alter serial numbers. Always insist on 
                  seeing the original, unaltered serial number.
                </p>

                <h3 className="text-2xl font-semibold mb-3">2. Fake Serial Number Labels</h3>
                <p className="mb-4">
                  Counterfeiters create fake serial number stickers using genuine numbers from other products. 
                  Check that the serial number matches multiple locations (device settings + physical label).
                </p>

                <h3 className="text-2xl font-semibold mb-3">3. "I'll Get It Later" Excuse</h3>
                <p className="mb-4">
                  Sellers claiming they'll provide the serial number after payment are major red flags. Never complete 
                  a transaction without verifying the serial number first.
                </p>

                <h3 className="text-2xl font-semibold mb-3">4. Clone Serial Numbers</h3>
                <p className="mb-4">
                  Some thieves reprogram devices with legitimate serial numbers from other units. This is why checking 
                  against stolen databases is crucial—the real owner may have reported theirs stolen.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <CheckCircle className="h-8 w-8" />
                  Best Practices for Buyers
                </h2>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong>Always verify before buying:</strong> Check serial numbers against stolen databases before 
                    completing any secondhand transaction, no matter how trustworthy the seller seems.
                  </li>
                  <li>
                    <strong>Meet in safe locations:</strong> Police station parking lots often have designated "safe 
                    exchange zones" with cameras for online purchases.
                  </li>
                  <li>
                    <strong>Get written receipts:</strong> Include serial number, seller information, date, and price. 
                    This protects you if the item is later reported stolen.
                  </li>
                  <li>
                    <strong>Register your purchases:</strong> Register serial numbers with manufacturers and local 
                    police property databases to aid recovery if stolen.
                  </li>
                  <li>
                    <strong>Use escrow services:</strong> For high-value items, use services that hold payment until 
                    verification is complete.
                  </li>
                  <li>
                    <strong>Trust your instincts:</strong> If something feels wrong, walk away. No deal is worth legal 
                    trouble or loss of money.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange">What If You Unknowingly Buy Stolen Goods?</h2>
                <p className="mb-4">
                  If you later discover you've purchased stolen property:
                </p>
                <ol className="space-y-3 ml-6 list-decimal">
                  <li>
                    <strong>Report to police immediately:</strong> You won't be prosecuted if you cooperate and had no 
                    knowledge the item was stolen.
                  </li>
                  <li>
                    <strong>Provide all documentation:</strong> Give police your receipt, seller information, and any 
                    communication records.
                  </li>
                  <li>
                    <strong>Don't hide it:</strong> Attempting to keep or sell stolen property once you know its status 
                    is a crime.
                  </li>
                  <li>
                    <strong>Document your due diligence:</strong> Evidence that you checked the serial number before 
                    purchase strengthens your defense.
                  </li>
                  <li>
                    <strong>Contact the marketplace:</strong> Report the seller to the platform they used and help 
                    prevent future victims.
                  </li>
                </ol>
              </section>

              <section className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Quick Reference: Serial Number Verification</h2>
                <p className="mb-4"><strong>Before meeting a seller:</strong></p>
                <ul className="space-y-1 ml-6 mb-4">
                  <li>✓ Ask for serial number upfront</li>
                  <li>✓ Verify against stolen databases</li>
                  <li>✓ Check manufacturer warranty status</li>
                </ul>
                
                <p className="mb-4"><strong>During the transaction:</strong></p>
                <ul className="space-y-1 ml-6 mb-4">
                  <li>✓ Confirm serial number matches device and box</li>
                  <li>✓ Take photos of serial number and seller ID</li>
                  <li>✓ Get written receipt with all details</li>
                </ul>

                <p className="mb-4"><strong>After purchase:</strong></p>
                <ul className="space-y-1 ml-6">
                  <li>✓ Register with manufacturer</li>
                  <li>✓ Record in personal inventory</li>
                  <li>✓ Consider insurance with proof of ownership</li>
                </ul>
              </section>
            </div>
          </noscript>

          {/* Interactive Content */}
          <div className="space-y-8 mt-8">
            <Card className="bg-sos-orange/20 border-sos-orange">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Verify a Serial Number Now</h3>
                <p className="mb-4">
                  Check any serial number against stolen goods databases in under 3 seconds with SafeOrStolen's 
                  comprehensive verification service.
                </p>
                <Link to="/verify">
                  <Button className="bg-sos-orange hover:bg-sos-orange/90 text-white">
                    Check Serial Number
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Articles */}
          <aside className="mt-12 p-6 bg-white/5 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/serial-number-checker" className="block hover:text-sos-orange">
                → Serial Number Verification Tool
              </Link>
              <Link to="/blog/how-to-check-if-phone-stolen" className="block hover:text-sos-orange">
                → How to Check if a Phone is Stolen
              </Link>
              <Link to="/buyer-guide" className="block hover:text-sos-orange">
                → Complete Buyer Protection Guide
              </Link>
            </div>
          </aside>
        </article>
      </div>
    </>
  );
};

export default SerialNumbersStolenGoods101;
