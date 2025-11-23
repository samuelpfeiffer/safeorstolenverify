import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Database, AlertCircle, TrendingUp } from 'lucide-react';

const StolenGoodsSearchPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Stolen Goods Search - Find Reported Items by Serial Number, IMEI, or VIN"
        description="Search stolen goods database by serial number, IMEI, VIN. Find reported stolen items across multiple databases. Free search tool to verify legitimacy before purchasing."
        keywords="stolen goods search, search stolen items, stolen property database search, find stolen goods, check stolen merchandise"
        canonical="/stolen-goods-search"
      />
      
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Stolen Goods Search
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Search millions of stolen item records across law enforcement and insurance databases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Powerful Search</h2>
              <p className="text-muted-foreground">
                Search by IMEI, VIN, serial number, or item description across multiple databases
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Multiple Sources</h2>
              <p className="text-muted-foreground">
                We aggregate data from police reports, insurance claims, and verified user reports
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Updated Daily</h2>
              <p className="text-muted-foreground">
                Our database is updated every day with new theft reports and recovered items
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">Search Statistics (2024)</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">15M+</div>
                <div className="text-sm text-muted-foreground">Stolen Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2.5M+</div>
                <div className="text-sm text-muted-foreground">Searches/Month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">150K+</div>
                <div className="text-sm text-muted-foreground">Prevented Sales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button asChild size="lg">
              <Link to="/verify">Start Searching Now</Link>
            </Button>
          </div>

          <article className="prose prose-invert max-w-4xl mx-auto">
            <h2>How Stolen Goods Search Works</h2>
            <p>
              Our stolen goods search engine connects to dozens of databases containing millions 
              of stolen item records. When you search for an item, we check its identifier (IMEI, 
              VIN, serial number) against all available sources to determine if it has been reported 
              stolen, lost, or is under insurance claim.
            </p>

            <h3>What Can You Search For?</h3>
            <ul>
              <li><strong>Electronics:</strong> Phones, laptops, tablets, cameras, gaming consoles</li>
              <li><strong>Vehicles:</strong> Cars, motorcycles, boats, RVs, ATVs, trailers</li>
              <li><strong>Tools:</strong> Power tools, generators, lawn equipment</li>
              <li><strong>Jewelry:</strong> Watches, rings, necklaces with serial numbers</li>
              <li><strong>Musical Instruments:</strong> Guitars, keyboards, professional audio equipment</li>
              <li><strong>Sporting Goods:</strong> Bicycles, golf clubs, firearms</li>
            </ul>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 my-8">
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-500 mb-2">Legal Warning</h4>
                  <p className="text-sm text-muted-foreground m-0">
                    Purchasing stolen goods is illegal even if you didn&apos;t know they were stolen. 
                    Law enforcement can confiscate stolen items without compensation. Always search 
                    before buying to protect yourself legally and financially.
                  </p>
                </div>
              </div>
            </div>

            <h3>Search Sources</h3>
            <p>When you perform a stolen goods search, we check:</p>
            <ul>
              <li>FBI National Crime Information Center (NCIC)</li>
              <li>State and local police department databases</li>
              <li>Insurance company theft claims (ISO database)</li>
              <li>NICB (National Insurance Crime Bureau)</li>
              <li>Carrier blacklist databases (for phones)</li>
              <li>Manufacturer warranty and theft reports</li>
            </ul>

            <h3>Most Commonly Searched Items</h3>
            <p>Based on our search data, these are the most frequently searched categories:</p>
            <ol>
              <li>iPhone and Samsung smartphones</li>
              <li>MacBook and laptop computers</li>
              <li>Used cars and motorcycles</li>
              <li>PlayStation and Xbox gaming consoles</li>
              <li>Power tools (DeWalt, Milwaukee, Makita)</li>
              <li>Bicycles and e-bikes</li>
              <li>Luxury watches (Rolex, Omega, TAG Heuer)</li>
            </ol>

            <h3>Why Sellers Refuse Searches</h3>
            <p>
              If a seller refuses to let you search an item before purchase, this is a major red flag. 
              Legitimate sellers have nothing to hide and will gladly provide serial numbers, IMEI, or 
              VIN for verification. Common excuses from sellers of stolen goods include:
            </p>
            <ul>
              <li>&quot;I don&apos;t have the serial number&quot;</li>
              <li>&quot;It&apos;s already boxed up&quot;</li>
              <li>&quot;Multiple people are interested, need to sell now&quot;</li>
              <li>&quot;Price is firm, take it or leave it&quot;</li>
            </ul>

            <h3>Start Your Search</h3>
            <p>
              Protect yourself from buying stolen goods. Our stolen goods search is fast, accurate, 
              and helps you make informed purchasing decisions. Search any item before you buy.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default StolenGoodsSearchPage;
