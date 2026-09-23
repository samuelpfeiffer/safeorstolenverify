import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, AlertTriangle, Phone, Car, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckMiami = () => {
  const cityStats = {
    name: "Miami",
    state: "Florida",
    population: "6.1 million (metro)",
    vehicleThefts: "32,000+ annually in Miami-Dade",
    phoneThefts: "Very High - tourist areas especially targeted",
    hotspots: ["South Beach", "Downtown Miami", "Wynwood", "Brickell", "Miami Airport area"]
  };

  const faqs = [
    {
      question: "How do I check if a used car in Miami is stolen?",
      answer: "Use SafeOrStolen's free VIN checker. Enter the 17-digit VIN to verify against Florida DMV, Miami-Dade Police, and community theft reports. Florida has one of the highest vehicle theft rates in the nation."
    },
    {
      question: "Where should I meet sellers in Miami to buy used items?",
      answer: "Miami-Dade Police offers Safe Exchange Zones at police stations. Popular locations include Miami Beach Police Station, Coral Gables Police, and Doral Station. Always verify items with SafeOrStolen before meeting."
    },
    {
      question: "Is phone theft common in Miami?",
      answer: "Yes. Miami ranks among the top US cities for smartphone theft, especially in tourist areas like South Beach, Wynwood, and Brickell. Always check IMEI before buying a used phone."
    },
    {
      question: "What vehicles are most stolen in Miami?",
      answer: "Honda Accord, Toyota Camry, Ford pickups, and Kia/Hyundai vehicles are top targets. Luxury vehicles like BMWs and Mercedes are also frequently stolen for parts export to Latin America."
    },
    {
      question: "Can I use SafeOrStolen at Miami flea markets?",
      answer: "Yes! Download the SafeOrStolen app to verify items at Opa-Locka Hialeah Flea Market, The Flea Market, or any Miami-area market. The app works offline with barcode scanning."
    },
    {
      question: "Why is vehicle theft high in Miami?",
      answer: "Miami's port proximity makes it a hub for stolen vehicle export to Caribbean and Latin American countries. Vehicles can be on a ship within hours of theft. Always VIN check before buying."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Miami Stolen Item Verification",
    "description": "Free stolen item verification service for Miami buyers and sellers",
    "areaServed": {
      "@type": "City",
      "name": "Miami",
      "containedInPlace": { "@type": "State", "name": "Florida" }
    },
    "provider": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  return (
    <>
      <PageSEO
        title="Miami Stolen Item Check - Verify Before Buying in Miami FL | SafeOrStolen"
        description="Check if items are stolen in Miami, Florida. Free IMEI, VIN, and serial number verification for Miami buyers. Verify before meeting sellers on Facebook Marketplace, OfferUp, or Craigslist."
        keywords="miami stolen item check, miami stolen car check, verify stolen miami, check IMEI miami, VIN check miami fl, stolen phone miami florida"
        canonical="/stolen-check-miami"
        structuredData={[faqSchema, localBusinessSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Miami, Florida</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Miami Stolen Item Check
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Miami-Dade County has over {cityStats.vehicleThefts} vehicle thefts annually. 
              Verify any used item before buying on Facebook Marketplace, OfferUp, Craigslist, or at local flea markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Item in Miami - Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Download className="w-5 h-5" />
                  Get Mobile App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Car className="w-10 h-10 text-destructive mb-2" />
                  <CardTitle className="text-lg">Vehicle Theft</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-destructive">{cityStats.vehicleThefts}</p>
                  <p className="text-muted-foreground">in Miami-Dade County yearly. Port proximity enables rapid export.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="w-10 h-10 text-destructive mb-2" />
                  <CardTitle className="text-lg">Phone Theft</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-destructive">{cityStats.phoneThefts}</p>
                  <p className="text-muted-foreground">South Beach, Wynwood, and Brickell are hotspots.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="w-10 h-10 text-warning mb-2" />
                  <CardTitle className="text-lg">Theft Hotspots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {cityStats.hotspots.join(", ")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Verify in Miami */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Verify Items in Miami?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Miami's Unique Theft Risks</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Port of Miami:</strong> Stolen vehicles shipped to Caribbean/Latin America within hours</li>
                  <li>• <strong>International Tourists:</strong> High-value targets for phone and electronics theft</li>
                  <li>• <strong>Luxury Market:</strong> High-end vehicles targeted for parts or export</li>
                  <li>• <strong>Year-Round Tourism:</strong> Constant influx of sellers with potentially stolen goods</li>
                  <li>• <strong>Flea Market Culture:</strong> Large secondhand market attracts stolen merchandise</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Most Common Scams in Miami</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Stolen rental cars sold with fake paperwork</li>
                  <li>• Phones stolen from tourists sold same-day on marketplace</li>
                  <li>• VIN-swapped vehicles with tampered odometers</li>
                  <li>• Electronics stolen from port shipments</li>
                  <li>• Boat and jet ski theft (Miami has very high rates)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Miami Stolen Item FAQs</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Buying in Miami? Verify First</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't become another victim of Miami's stolen goods market. 
              Check any item's status in 3 seconds before meeting any seller.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/verify">
                <Shield className="w-5 h-5" />
                Verify Now - Free
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckMiami;
