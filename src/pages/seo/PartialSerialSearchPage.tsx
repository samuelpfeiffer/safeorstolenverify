import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Search, Shield, Database, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PartialSerialSearchPage = () => {
  return (
    <>
      <PageSEO
        title="Partial Serial Number Search - Find Stolen Items by Incomplete Serial | SafeOrStolen"
        description="Search stolen property databases with partial serial numbers. SafeOrStolen checks StolenLostFound, Stolen-Property.com, and 150+ databases even with incomplete serial numbers."
        keywords="partial serial number search, incomplete serial lookup, stolen property search serial number, sndeep lostolen database, stolen-property.com search by serial number"
        canonical="https://safeorstolen.com/partial-serial-number-search"
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Partial Serial Number Search for Stolen Items
            </h1>
            <p className="text-xl text-muted-foreground">
              Find stolen property even with incomplete or partial serial numbers across 150+ databases
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" />
              How Partial Serial Number Search Works
            </h2>
            <p className="text-muted-foreground mb-4">
              SafeOrStolen's advanced verification system can search stolen property databases even when you only have part of a serial number. Our technology checks:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>StolenLostFound Database</strong> - Community-reported stolen items with partial matching</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Stolen-Property.com</strong> - Law enforcement and public reports searchable by incomplete serials</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Stolen Register</strong> - UK and international stolen goods registry</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Stolen911</strong> - North American stolen property database</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>150+ Additional Sources</strong> - Global theft registries and law enforcement databases</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              When You Need Partial Serial Search
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Serial Number Worn or Damaged:</strong> When the serial number on electronics, tools, or equipment is partially scratched, faded, or illegible, you can still verify the item's status.
              </p>
              <p>
                <strong>Seller Provides Incomplete Information:</strong> Marketplace sellers on Facebook, OfferUp, Craigslist, or eBay sometimes only provide partial serial numbers in photos or descriptions.
              </p>
              <p>
                <strong>Photo Quality Issues:</strong> When buying online and the serial number photo is blurry or partially obscured, you can verify what's visible.
              </p>
              <p>
                <strong>Quick Verification:</strong> When you need to quickly check an item but only have access to part of the serial number sticker.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Items You Can Verify with Partial Serials
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Electronics</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Laptops (Dell, HP, Lenovo, Apple MacBook)</li>
                  <li>• Tablets and iPads</li>
                  <li>• Gaming Consoles (PS5, Xbox, Nintendo)</li>
                  <li>• Cameras and Photography Equipment</li>
                  <li>• Monitors and TVs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Equipment</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Power Tools (DeWalt, Milwaukee, Makita)</li>
                  <li>• Musical Instruments (Guitars, Keyboards)</li>
                  <li>• Bicycles and E-bikes</li>
                  <li>• Outdoor Equipment</li>
                  <li>• Industrial Machinery</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Try Partial Serial Number Search Now</h2>
            <p className="text-muted-foreground mb-4">
              Enter whatever portion of the serial number you can read. Our system will search all major stolen property databases including StolenLostFound, Stolen-Property.com, and 150+ other sources.
            </p>
            <Link to="/verify">
              <Button size="lg" className="w-full md:w-auto">
                Search Partial Serial Number
              </Button>
            </Link>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Comparison with Other Services</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2">Feature</th>
                    <th className="text-center py-3 px-2">SafeOrStolen</th>
                    <th className="text-center py-3 px-2">StolenLostFound</th>
                    <th className="text-center py-3 px-2">Stolen-Property.com</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 px-2">Partial Serial Search</td>
                    <td className="text-center py-3 px-2">✅ Yes</td>
                    <td className="text-center py-3 px-2">⚠️ Limited</td>
                    <td className="text-center py-3 px-2">⚠️ Limited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2">Multiple Database Search</td>
                    <td className="text-center py-3 px-2">✅ 150+</td>
                    <td className="text-center py-3 px-2">❌ Single</td>
                    <td className="text-center py-3 px-2">❌ Single</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2">Speed</td>
                    <td className="text-center py-3 px-2">✅ 3 seconds</td>
                    <td className="text-center py-3 px-2">⚠️ Minutes</td>
                    <td className="text-center py-3 px-2">⚠️ Minutes</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2">Mobile App</td>
                    <td className="text-center py-3 px-2">✅ Yes</td>
                    <td className="text-center py-3 px-2">❌ No</td>
                    <td className="text-center py-3 px-2">❌ No</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2">Free Basic Checks</td>
                    <td className="text-center py-3 px-2">✅ Yes</td>
                    <td className="text-center py-3 px-2">❌ Paid Only</td>
                    <td className="text-center py-3 px-2">⚠️ Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <noscript>
            <div className="bg-card border border-border rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Partial Serial Number Search - Stolen Property Verification</h2>
              <p className="mb-4">
                SafeOrStolen.com provides advanced partial serial number search capabilities to verify stolen items across 150+ databases including StolenLostFound database, Stolen-Property.com, Stolen Register, and Stolen911. Even with incomplete or damaged serial numbers, you can check if electronics, tools, bicycles, or equipment have been reported stolen.
              </p>
              <p className="mb-4">
                <strong>Search Capabilities:</strong> Our system searches sndeep lostolen database with partial serial number search, American Alarm websites to help you find stolen items, stolen-property search by serial number, and all major theft registries. Works with worn serials, blurry photos, or incomplete information from marketplace sellers.
              </p>
              <p className="mb-4">
                <strong>Items Verified:</strong> Laptops, gaming consoles, power tools, cameras, tablets, bicycles, musical instruments, and more. Compare prices and features against StolenLostFound.com and Stolen-Property.com - we search all databases simultaneously in 3 seconds.
              </p>
              <p>
                <strong>Free Trial:</strong> Start with 2 free verification searches. Mobile app available for on-the-go partial serial number lookups at garage sales, pawn shops, and marketplace meetups.
              </p>
            </div>
          </noscript>
        </div>
      </div>
    </>
  );
};

export default PartialSerialSearchPage;
