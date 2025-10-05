import { PageSEO } from '@/components/seo/PageSEO';
import { Database, Search, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DatabasePage = () => {
  return (
    <>
      <PageSEO
        title="Free Stolen Items Database - Serial Number, IMEI, VIN Lookup | SafeOrStolen"
        description="Search our free database of stolen items. Check serial numbers, IMEI, VIN, and model numbers against millions of stolen property records. Protect yourself from buying stolen goods."
        keywords="stolen items database, stolen property lookup, serial number database, IMEI database, VIN database, stolen goods checker, property theft database"
        canonical="/database"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stolen Items Database
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access our comprehensive database of stolen property. Verify serial numbers, IMEI, VIN, and protect yourself from unknowingly buying stolen items.
            </p>
            <Link to="/stolen-item-checker">
              <Button size="lg" className="gap-2">
                <Search className="w-5 h-5" />
                Search Database Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Database Stats */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Stolen Items Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Daily Searches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Database Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* What's in Database */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's In Our Database</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg border p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Property Records</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Police-reported stolen items</li>
                  <li>• User-submitted theft reports</li>
                  <li>• Insurance company records</li>
                  <li>• Verified lost property databases</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-lg border p-6">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Searchable Identifiers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Serial numbers (all devices)</li>
                  <li>• IMEI numbers (phones/tablets)</li>
                  <li>• VIN numbers (vehicles)</li>
                  <li>• MAC addresses (electronics)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Yourself Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't risk buying stolen property. Search our database before making any secondhand purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/stolen-item-checker">
                <Button size="lg">Check An Item Now</Button>
              </Link>
              <Link to="/report-stolen">
                <Button size="lg" variant="outline">Report Stolen Item</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatabasePage;