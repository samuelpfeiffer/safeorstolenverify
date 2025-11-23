import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Shield, Database } from 'lucide-react';

const StolenItemLookupPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Stolen Item Lookup - Free Database Check for Phones, Cars & Electronics"
        description="Free stolen item lookup service. Check IMEI, VIN, serial numbers against police databases instantly. Verify phones, cars, electronics before buying. Protect yourself from stolen goods."
        keywords="stolen item lookup, stolen goods database, check stolen items, stolen property search, IMEI lookup, VIN lookup, stolen item checker"
        canonical="/stolen-item-lookup"
      />
      
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Stolen Item Lookup
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Search our comprehensive database to check if items are reported stolen before you buy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Comprehensive Database</h2>
              <p className="text-muted-foreground">
                Access millions of stolen item records from law enforcement, insurance companies, and verified reports
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Instant Results</h2>
              <p className="text-muted-foreground">
                Get verification results in seconds. Check IMEI, VIN, serial numbers, and more
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Buyer Protection</h2>
              <p className="text-muted-foreground">
                Protect yourself from legal trouble and financial loss when buying second-hand items
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button asChild size="lg">
              <Link to="/verify">Start Stolen Item Lookup</Link>
            </Button>
          </div>

          <article className="prose prose-invert max-w-4xl mx-auto">
            <h2>How to Use Our Stolen Item Lookup Service</h2>
            <p>
              Our stolen item lookup service provides instant access to comprehensive databases of reported stolen goods. 
              Whether you are buying a used phone, car, laptop, or any valuable item, checking its status can save you from 
              legal trouble and financial loss.
            </p>

            <h3>What You Can Check</h3>
            <ul>
              <li><strong>Mobile Phones:</strong> IMEI numbers for smartphones and tablets</li>
              <li><strong>Vehicles:</strong> VIN numbers for cars, motorcycles, boats, RVs</li>
              <li><strong>Electronics:</strong> Serial numbers for laptops, cameras, gaming consoles</li>
              <li><strong>Tools & Equipment:</strong> Serial numbers for power tools and machinery</li>
              <li><strong>Jewelry & Watches:</strong> Serial numbers and certification IDs</li>
            </ul>

            <h3>Why Use Stolen Item Lookup</h3>
            <p>
              Purchasing stolen goods, even unknowingly, can result in the item being confiscated by law enforcement 
              with no refund. You could also face legal consequences. Our lookup service helps you:
            </p>
            <ul>
              <li>Verify the legitimacy of second-hand purchases</li>
              <li>Check items before buying on Facebook Marketplace, eBay, Craigslist, OfferUp</li>
              <li>Protect your business from handling stolen merchandise</li>
              <li>Access police and insurance company databases instantly</li>
            </ul>

            <h3>Fast & Free Basic Checks</h3>
            <p>
              Get started with our free basic stolen item lookup. Enter any IMEI, VIN, or serial number to check 
              against our database of reported stolen items. Upgrade to premium for comprehensive checks across 
              multiple databases and detailed history reports.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default StolenItemLookupPage;
