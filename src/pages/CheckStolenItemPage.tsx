import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const CheckStolenItemPage = () => {
  return (
    <>
      <PageSEO
        title="Check Stolen Item - Free Database Lookup | Safe or Stolen"
        description="Check if any item is stolen with our free database lookup. Verify electronics, vehicles, phones, and more before you buy. Instant results from global stolen item databases."
        keywords="check stolen item, stolen item database, verify stolen goods, item verification, stolen property check"
        canonical="/check-stolen-item"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Check if Any Item is Stolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Free instant verification against global stolen item databases. Enter serial numbers, IMEI, or VIN to verify before you buy.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify">Check Item Now - Free</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">How to Check if an Item is Stolen</h2>
            <p className="text-lg text-muted-foreground mb-6">
              SafeOrStolen provides instant verification for millions of items reported as lost or stolen worldwide. Our comprehensive database helps buyers protect themselves from purchasing stolen goods and assists law enforcement in recovering stolen property.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What You Can Check</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Electronics:</strong> Laptops, tablets, smartphones, cameras, gaming consoles</li>
              <li><strong>Vehicles:</strong> Cars, motorcycles, boats, RVs via VIN lookup</li>
              <li><strong>Mobile Phones:</strong> Check IMEI/ESN for carrier blacklist and stolen status</li>
              <li><strong>Bicycles:</strong> Frame serial numbers cross-referenced with police databases</li>
              <li><strong>Firearms:</strong> Serial number verification (where legally permitted)</li>
              <li><strong>Tools & Equipment:</strong> Power tools, construction equipment, machinery</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Why Check Before You Buy?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">Legal Protection</h4>
                <p className="text-muted-foreground">
                  Buying stolen goods is illegal in most jurisdictions, even if you didn't know they were stolen. Verification protects you from prosecution.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">Financial Safety</h4>
                <p className="text-muted-foreground">
                  Stolen items can be seized by law enforcement at any time without compensation. Don't lose your money and the item.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">Ethical Responsibility</h4>
                <p className="text-muted-foreground">
                  Purchasing stolen goods fuels theft rings and organized crime. Verification helps reduce demand for stolen property.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">Peace of Mind</h4>
                <p className="text-muted-foreground">
                  Buy with confidence knowing your item is legitimate. Get verification certificates for your records.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Our Verification Process</h3>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Enter Identifier:</strong> Input the serial number, IMEI, VIN, or other unique identifier</li>
              <li><strong>Database Search:</strong> We check across 50+ global databases including police reports, carrier blacklists, and manufacturer databases</li>
              <li><strong>Instant Results:</strong> Receive verification status in under 3 seconds</li>
              <li><strong>Detailed Report:</strong> Get comprehensive information about the item's history and status</li>
              <li><strong>Certificate:</strong> Download official verification certificates for your records</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Free vs Premium Checks</h3>
            <p className="text-muted-foreground mb-4">
              We offer limited free checks so everyone can verify critical purchases. Premium plans provide unlimited searches, advanced reporting, bulk verification for businesses, and priority support.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Mobile App Available</h3>
            <p className="text-muted-foreground mb-4">
              Unlike competitors, SafeOrStolen offers a full-featured mobile app. Scan barcodes, take photos of serial numbers, and verify items instantly while shopping in-person. Available as a Progressive Web App (PWA) on all devices.
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3">Start Your Free Check Now</h4>
              <p className="text-muted-foreground mb-4">
                Don't risk buying stolen property. Verify any item in seconds with SafeOrStolen's comprehensive database.
              </p>
              <a href="/verify" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Check Item Now
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Check if Any Item is Stolen - Free Database Lookup</h1>
          <p>SafeOrStolen provides instant verification against global stolen item databases. Check serial numbers, IMEI, or VIN before you buy.</p>
          <h2>What You Can Check</h2>
          <ul>
            <li>Electronics: Laptops, tablets, smartphones, cameras</li>
            <li>Vehicles: Cars, motorcycles via VIN lookup</li>
            <li>Mobile Phones: IMEI/ESN verification</li>
            <li>Bicycles: Frame serial numbers</li>
            <li>Firearms: Serial number verification</li>
          </ul>
          <p>Visit https://safeorstolen.com/verify to check any item now.</p>
        </div>
      </noscript>
    </>
  );
};

export default CheckStolenItemPage;