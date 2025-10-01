import { Shield, Smartphone, Car, Laptop, Search, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SEOContentSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main SEO Content */}
          <article>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Free Stolen Item Checker: Mobile App for Phones, Cars, Guns & Everything
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Looking for a <strong>free alternative to CheckMend</strong> or <strong>IMEIinfo with mobile app</strong>? SafeOrStolen is the ONLY service with 
              dedicated iOS & Android apps that verify <strong>phones (IMEI)</strong>, <strong>cars (VIN)</strong>, <strong>electronics</strong>, and <strong>firearms (gun serial numbers)</strong>. 
              Get 4 FREE searches - no credit card required. Whether you're at a gun show, car lot, or checking Facebook Marketplace listings, 
              verify items instantly from your phone - something CheckMend, IMEIinfo, and Stolen Register simply cannot offer.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3">🏆 Why SafeOrStolen Beats the Competition</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>vs CheckMend:</strong> Get 4 free searches vs their paid-only service PLUS mobile app with firearms checking (they have neither!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>vs IMEIinfo:</strong> Beyond just IMEI - verify ALL device types including firearms with our exclusive iOS & Android app</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>vs Stolen Register:</strong> Real-time mobile verification for phones, cars, electronics & firearms - they're stuck with desktop-only access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>🔫 FIREARMS VERIFICATION:</strong> Only verification mobile app that checks gun serial numbers against HotGunz, ATF & NCIC databases!</span>
                </li>
              </ul>
            </div>

            {/* Verification Types */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">IMEI Number Check</h3>
                    <p className="text-muted-foreground mb-4">
                      Verify smartphones and tablets using their unique 15-digit IMEI number. Our IMEI checker 
                      searches carrier blacklists and stolen phone databases instantly.
                    </p>
                    <Link to="/imei-check" className="text-primary hover:underline font-medium">
                      Check IMEI Number →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">VIN Verification</h3>
                    <p className="text-muted-foreground mb-4">
                      Check vehicle history reports using the 17-character VIN (Vehicle Identification Number). 
                      Verify cars, motorcycles, and trucks for theft records.
                    </p>
                    <Link to="/vin-verification" className="text-secondary hover:underline font-medium">
                      Verify VIN Number →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Laptop className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Serial Number Lookup</h3>
                    <p className="text-muted-foreground mb-4">
                      Verify laptops, cameras, gaming consoles, and electronics using manufacturer serial numbers 
                      against stolen property databases.
                    </p>
                    <Link to="/serial-number-checker" className="text-accent hover:underline font-medium">
                      Lookup Serial Number →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Stolen Goods Database</h3>
                    <p className="text-muted-foreground mb-4">
                      Access our comprehensive stolen items database covering phones, vehicles, electronics, 
                      jewelry, bikes, and more from law enforcement reports.
                    </p>
                    <Link to="/stolen-items-database" className="text-primary hover:underline font-medium">
                      Search Database →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Why Checking for Stolen Items Matters
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Legal Protection:</strong> Unknowingly buying stolen goods can result in criminal charges, 
                    even if you purchased them in good faith from online marketplaces.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Financial Loss:</strong> Police can confiscate stolen property without compensation, 
                    leaving you out the purchase price plus the item.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Identity Safety:</strong> Stolen phones and laptops may contain previous owner data, 
                    creating privacy and security risks.
                  </span>
                </li>
              </ul>
            </div>

            {/* How It Works */}
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              How Our Stolen Item Checker Works
            </h3>
            <div className="space-y-4 mb-12">
              <p className="text-muted-foreground leading-relaxed">
                Our verification system searches multiple databases including NCIC (National Crime Information Center), 
                police reports, carrier blacklists, manufacturer databases, and international stolen goods registries. 
                Simply enter the IMEI, VIN, or serial number and receive instant results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We check items against stolen property databases updated daily from law enforcement agencies nationwide. 
                For smartphones, we verify IMEI numbers against carrier blacklists from AT&T, Verizon, T-Mobile, and Sprint. 
                Vehicle VIN checks include NICB (National Insurance Crime Bureau) and DMV theft records.
              </p>
            </div>

            {/* Target Keywords Section */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Popular Verification Searches</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/check-phone" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Check if phone is stolen
                </Link>
                <Link to="/check-car" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Verify car is not stolen
                </Link>
                <Link to="/check-laptop-stolen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Laptop serial number check
                </Link>
                <Link to="/imei-check" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Free IMEI checker
                </Link>
                <Link to="/vin-verification" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  VIN stolen check
                </Link>
                <Link to="/stolen-goods-checker" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Stolen goods database
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};