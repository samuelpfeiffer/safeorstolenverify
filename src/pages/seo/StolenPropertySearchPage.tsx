import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Search, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StolenPropertySearchPage = () => {
  return (
    <>
      <PageSEO
        title="Stolen Property Search by Serial Number - Check 150+ Databases | SafeOrStolen"
        description="Search stolen property by serial number across 150+ databases. Verify items from American Alarm, Stolen-Property.com, StolenLostFound, and law enforcement registries in seconds."
        keywords="stolen-property search by serial number, american alarm websites to help find stolen items, stolen-property.com search serial number, stolen property serial number lookup"
        canonical="/stolen-property-search-serial-number"
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Stolen Property Search by Serial Number
            </h1>
            <p className="text-xl text-muted-foreground">
              Instantly search 150+ stolen property databases including American Alarm, Stolen-Property.com, and StolenLostFound
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Why Search Stolen Property Databases?</h3>
                <p className="text-muted-foreground">
                  Every year, <strong>$15 billion</strong> in stolen property is sold online. Buyers face financial loss, legal trouble, and property seizure. Sellers need to prove legitimacy. SafeOrStolen searches all major databases instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" />
              Databases We Search for Stolen Property
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">American Alarm & Stolen Property Registries</strong>
                  <span className="text-sm text-muted-foreground">Websites to help you find stolen items including commercial security system databases and alarm company theft reports</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Stolen-Property.com Database</strong>
                  <span className="text-sm text-muted-foreground">Search by serial number across law enforcement reports and public stolen property listings</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">StolenLostFound.com Database</strong>
                  <span className="text-sm text-muted-foreground">Community-reported stolen items with serial number search and partial matching</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Stolen Register (UK & International)</strong>
                  <span className="text-sm text-muted-foreground">European and global stolen goods registry with serial number verification</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Stolen911 Database</strong>
                  <span className="text-sm text-muted-foreground">North American stolen property reports searchable by serial, IMEI, and VIN</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">145+ Additional Sources</strong>
                  <span className="text-sm text-muted-foreground">Law enforcement databases, insurance claims, pawn shop registries, and international theft reports</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              How to Search Stolen Property by Serial Number
            </h2>
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <div>
                  <strong className="text-foreground">Find the Serial Number:</strong> Located on the item, original box, or purchase receipt. Check the back, bottom, or battery compartment of electronics.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <div>
                  <strong className="text-foreground">Enter Serial in SafeOrStolen:</strong> Type or scan the serial number into our verification tool. Works with partial or damaged serials.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <div>
                  <strong className="text-foreground">Instant Multi-Database Search:</strong> Our AI searches American Alarm databases, Stolen-Property.com, StolenLostFound, and 150+ other sources in 3 seconds.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <div>
                  <strong className="text-foreground">Get Your Results:</strong> See if the item is reported stolen, lost, or safe. Download verification certificate for legal protection.
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Stolen Property by Serial Number Now</h2>
            <p className="text-muted-foreground mb-4">
              Protect yourself from buying stolen goods. Verify serial numbers across American Alarm networks, Stolen-Property.com, and all major theft registries in seconds.
            </p>
            <Link to="/verify">
              <Button size="lg" className="w-full md:w-auto">
                Search Serial Number
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">For Buyers</h3>
              <p className="text-sm text-muted-foreground">
                Verify items before purchase on Facebook Marketplace, OfferUp, Craigslist, eBay, or at pawn shops. Avoid legal trouble and financial loss.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">For Sellers</h3>
              <p className="text-sm text-muted-foreground">
                Prove your item is legitimate. Generate verification certificates to build trust with buyers and sell faster at better prices.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">For Businesses</h3>
              <p className="text-sm text-muted-foreground">
                Pawn shops, dealers, and repair shops can verify serial numbers in bulk to comply with regulations and reduce theft-related risk.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold mb-4">Items You Can Verify by Serial Number</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Electronics & Tech</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Laptops (Apple MacBook, Dell, HP, Lenovo)</li>
                  <li>✓ Tablets and iPads</li>
                  <li>✓ Gaming Consoles (PS5, Xbox Series X, Nintendo Switch)</li>
                  <li>✓ Cameras and Lenses (Canon, Nikon, Sony)</li>
                  <li>✓ Monitors, TVs, and Projectors</li>
                  <li>✓ Drones and RC Equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Tools & Equipment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Power Tools (DeWalt, Milwaukee, Makita, Bosch)</li>
                  <li>✓ Bicycles and E-bikes</li>
                  <li>✓ Musical Instruments (Guitars, Keyboards, Drums)</li>
                  <li>✓ Outdoor Equipment (Generators, Compressors)</li>
                  <li>✓ Industrial Machinery</li>
                  <li>✓ Medical Equipment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Why Choose SafeOrStolen Over Individual Databases?</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Save Time:</strong> Instead of manually searching Stolen-Property.com, StolenLostFound, American Alarm registries, and dozens of other databases individually, get results from 150+ sources in 3 seconds.
              </p>
              <p>
                <strong className="text-foreground">Better Coverage:</strong> Single databases miss stolen items reported elsewhere. We search law enforcement databases, international registries, and community reports simultaneously.
              </p>
              <p>
                <strong className="text-foreground">Mobile App:</strong> Only verification service with a dedicated mobile app. Scan serial numbers on-the-go at garage sales, meetups, and shops.
              </p>
              <p>
                <strong className="text-foreground">Legal Protection:</strong> Generate verification certificates accepted by law enforcement and marketplaces as proof of due diligence.
              </p>
            </div>
          </div>

          <noscript>
            <div className="bg-card border border-border rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Stolen Property Search by Serial Number - Complete Guide</h2>
              <p className="mb-4">
                SafeOrStolen.com provides comprehensive stolen property search by serial number across 150+ databases including American Alarm websites to help you find stolen items, Stolen-Property.com serial number search, StolenLostFound database, Stolen Register, Stolen911, and law enforcement theft registries worldwide.
              </p>
              <p className="mb-4">
                <strong>Search Capabilities:</strong> Instantly verify if electronics, tools, bicycles, or equipment are stolen by searching serial numbers across all major theft databases. Our system checks stolen-property.com search by serial number, stolen-property search items by serial number, and stolen-property serial number search simultaneously in 3 seconds.
              </p>
              <p className="mb-4">
                <strong>Who Uses This Service:</strong> Buyers on Facebook Marketplace, OfferUp, Craigslist, eBay, and at pawn shops to avoid purchasing stolen goods. Sellers proving item legitimacy. Businesses including pawn shops, used electronics dealers, and repair shops for compliance and risk reduction.
              </p>
              <p>
                <strong>Get Started:</strong> 2 free stolen property searches by serial number. Download mobile app for scanning serial numbers at meetups and garage sales. Generate legal verification certificates showing due diligence if questioned by law enforcement.
              </p>
            </div>
          </noscript>
        </div>
      </div>
    </>
  );
};

export default StolenPropertySearchPage;
