import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, AlertTriangle, Shield, Car, Smartphone, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarfaxPage = () => {
  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Carfax - Stolen Vehicle Check Comparison | SafeOrStolen"
        description="SafeOrStolen vs Carfax for vehicle theft checks. Free VIN lookup, instant results, mobile app. The smarter choice before buying a car."
        keywords="SafeOrStolen vs Carfax, Carfax alternative, free VIN check, stolen car check, VIN lookup free"
        canonical="/vs/carfax"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Different Tools, Different Purposes</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs Carfax
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Understanding when to use each service
              </p>
            </div>
          </div>
        </section>

        {/* Key Difference */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Different Tools for Different Needs</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/50">
                  <CardHeader>
                    <Shield className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>SafeOrStolen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold mb-4">Checks if vehicle is STOLEN</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        Theft status verification
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        Police reports
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        NICB stolen database
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        Insurance theft claims
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        FREE to check
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        Mobile app available
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Car className="h-10 w-10 text-muted-foreground mb-2" />
                    <CardTitle>Carfax</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold mb-4">Full vehicle history report</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-muted-foreground" />
                        Accident history
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-muted-foreground" />
                        Service records
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-muted-foreground" />
                        Ownership history
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-muted-foreground" />
                        Odometer readings
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        Paid reports ($40+)
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        No dedicated mobile app
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why SafeOrStolen First */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Use SafeOrStolen</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <CreditCard className="h-12 w-12 mx-auto text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Free Stolen Check</h3>
                    <p className="text-sm text-muted-foreground">
                      Check if a car is stolen for free. No credit card required. 
                      2 free VIN checks included.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Get theft status in 3 seconds. Know immediately if the 
                      vehicle has been reported stolen.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Smartphone className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Mobile App</h3>
                    <p className="text-sm text-muted-foreground">
                      Check vehicles on the spot at dealerships or private sales. 
                      Scan VIN with your phone.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-center">Our Recommendation</h2>
                  <p className="text-lg text-center mb-6">
                    <strong>Check if it's stolen with SafeOrStolen first</strong>, then decide if you 
                    need full history. Why pay $40+ for a Carfax report on a stolen car?
                  </p>
                  <div className="bg-background rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Smart buying process:</h3>
                    <ol className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <span>Use SafeOrStolen (FREE) to verify the car isn't stolen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <span>If clean, decide if you need full history (accidents, service records)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <span>Only then consider paying for a Carfax report</span>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Check VIN Now</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Free stolen vehicle check. Instant results. Mobile app available.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Check VIN Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarfaxPage;
