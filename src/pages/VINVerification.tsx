import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Car, Shield, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TwoSidedSearchForm } from '@/components/hero/TwoSidedSearchForm';
import { useNavigate } from 'react-router-dom';

const VINVerification = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free VIN Stolen Check",
    "description": "Free VIN checker to verify if vehicles are stolen. Check car VIN numbers against stolen vehicle databases and police reports.",
    "url": "https://safeorstolen.com/vin-verification",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Car VIN stolen check",
      "Vehicle theft verification",
      "Stolen car lookup", 
      "VIN history check",
      "Auto theft prevention"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Free VIN Stolen Check - Verify Car VIN Numbers | SafeOrStolen</title>
        <meta 
          name="description" 
          content="Free VIN checker to verify if cars are stolen. Check vehicle VIN numbers against police databases and stolen car reports. Protect yourself when buying used cars." 
        />
        <meta 
          name="keywords" 
          content="VIN stolen check, car VIN verification, vehicle theft lookup, stolen car check, VIN number verification, check car stolen VIN, auto theft prevention" 
        />
        <link rel="canonical" href="https://safeorstolen.com/vin-verification" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-sos-orange/5">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-sos-dark to-sos-orange text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-sos-lime text-sos-dark">
                Free VIN Checker
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free VIN Stolen Verification
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Verify if any vehicle is stolen by checking its VIN number against police databases 
                and stolen car registries. Protect yourself when buying used cars, trucks, or motorcycles.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="border-white text-white">
                  🚗 Car VIN Check
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🏍️ Motorcycle VIN
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🚚 Truck Verification
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  ⚡ Instant Results
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* VIN Check Form */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-sos-dark flex items-center justify-center gap-2">
                    <Car className="h-6 w-6" />
                    Check VIN for Stolen Vehicle
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Enter 17-character VIN number to verify if vehicle is stolen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TwoSidedSearchForm 
                    onOpenQrScanner={() => navigate('/qr-scanner')}
                  />
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Find your VIN on the dashboard near windshield, driver door jamb, or vehicle registration
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vehicle Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Check Any Vehicle VIN for Theft
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our VIN checker works with all vehicle types and manufacturers
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { type: "Cars", examples: ["Sedans", "SUVs", "Hatchbacks", "Coupes"] },
                  { type: "Trucks", examples: ["Pickup trucks", "Delivery trucks", "Semi-trucks", "Box trucks"] },
                  { type: "Motorcycles", examples: ["Sport bikes", "Cruisers", "Touring bikes", "Scooters"] },
                  { type: "Other Vehicles", examples: ["RVs", "Boats", "ATVs", "Trailers"] }
                ].map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-sos-lime/10 rounded-full w-fit">
                        <Car className="h-8 w-8 text-sos-lime" />
                      </div>
                      <CardTitle className="text-lg">{category.type}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {category.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-sos-lime" />
                            <span className="text-xs">{example}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Check VIN */}
        <section className="py-16 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Check VIN Before Buying Used Vehicles?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-red-100 rounded-full w-fit">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Legal Protection</h3>
                  <p className="text-muted-foreground">
                    Avoid serious legal issues from unknowingly purchasing stolen vehicles
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Financial Security</h3>
                  <p className="text-muted-foreground">
                    Protect your investment from vehicles that could be confiscated
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Insurance Issues</h3>
                  <p className="text-muted-foreground">
                    Avoid insurance complications and ensure proper coverage
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Start Your VIN Check Now</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Don't risk buying a stolen vehicle. Verify any VIN in seconds - completely free.
                </p>
                <Button 
                  size="lg" 
                  className="bg-sos-orange hover:bg-sos-orange/90"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Check VIN Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VINVerification;