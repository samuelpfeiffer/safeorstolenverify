import { Shield, Smartphone, MapPin, TrendingUp, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageSEO } from "@/components/seo/PageSEO";
import { useNavigate } from "react-router-dom";

const RegionPhilippinesPage = () => {
  const navigate = useNavigate();

  const majorCities = [
    { name: "Manila", theftRate: "High", marketplaces: ["Carousell", "Facebook Marketplace", "OLX"] },
    { name: "Quezon City", theftRate: "High", marketplaces: ["Carousell", "Facebook", "Lazada"] },
    { name: "Cebu City", theftRate: "Medium-High", marketplaces: ["Carousell", "Facebook", "OLX"] },
    { name: "Davao City", theftRate: "Medium", marketplaces: ["Carousell", "Facebook"] },
    { name: "Makati", theftRate: "Medium-High", marketplaces: ["Carousell", "Facebook", "Shopee"] }
  ];

  return (
    <>
      <PageSEO
        title="Check Stolen Items in the Philippines | SafeOrStolen"
        description="Verify phones, vehicles, and stolen items in the Philippines. Full coverage of Manila, Cebu, Davao. Integration with Carousell and Facebook Marketplace."
        keywords="stolen items Philippines, IMEI check Philippines, Carousell safety, stolen phone Manila, verify before buying Philippines"
        canonical="/region/philippines"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">🇵🇭 Service in the Philippines</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Verify Stolen Items in the Philippines<br />
              <span className="text-primary">Before You Buy or Sell</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Protect yourself from theft with our mobile app. Verify phones, vehicles, 
              electronics and more across Metro Manila, Cebu, Davao, and all Philippine cities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                Verify Now - Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/download-app')}>
                Download Mobile App
              </Button>
            </div>
          </div>
        </section>

        {/* Philippines Stats */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">850K+</div>
              <div className="text-sm text-muted-foreground">Theft reports yearly</div>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">320K+</div>
              <div className="text-sm text-muted-foreground">Phones stolen/year</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">95K+</div>
              <div className="text-sm text-muted-foreground">Vehicles stolen/year</div>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">18K+</div>
              <div className="text-sm text-muted-foreground">Users verifying</div>
            </Card>
          </div>
        </section>

        {/* Major Cities Coverage */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Coverage Across Major Philippine Cities
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {majorCities.map((city, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Theft Rate: {city.theftRate}
                      </span>
                      <span>Marketplaces: {city.marketplaces.join(", ")}</span>
                    </div>
                  </div>
                  <Button onClick={() => navigate(`/city/${city.name.toLowerCase().replace(/\s+/g, '-')}`)}>
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Marketplace Integration */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Integration with Carousell, Facebook Marketplace & More
            </h2>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">For Buyers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Verify IMEI before buying on Carousell</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Scan serial numbers with your phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Instant results on Facebook Marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Protect yourself from scams on OLX</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">For Sellers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Certify your item is not stolen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Increase buyer trust on Carousell</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sell faster with verification certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Legal protection when selling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Mobile App CTA */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Download the SafeOrStolen Mobile App
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Available for iOS and Android. Verify items anywhere in the Philippines 
              by simply scanning the barcode or serial number.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/download-app')}>
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/download-app')}>
                Download for Android
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">How does SafeOrStolen work in the Philippines?</h3>
                <p className="text-muted-foreground">
                  SafeOrStolen verifies items against theft databases in the Philippines and globally. 
                  Simply scan the IMEI, VIN, or serial number with our mobile app.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Is SafeOrStolen legal in the Philippines?</h3>
                <p className="text-muted-foreground">
                  Yes, it's completely legal. We help reduce theft and protect buyers and sellers 
                  on Philippine marketplaces in compliance with local laws.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Does it work with Carousell and Facebook Marketplace?</h3>
                <p className="text-muted-foreground">
                  Yes, our verification works with all marketplaces in the Philippines including 
                  Carousell, Facebook, OLX, Lazada, Shopee and more.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Can I report stolen items?</h3>
                <p className="text-muted-foreground">
                  Yes! You can report stolen items through our app, and we'll add them to our database 
                  and coordinate with local authorities when possible.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegionPhilippinesPage;
