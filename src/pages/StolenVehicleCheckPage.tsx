import { PageSEO } from '@/components/seo/PageSEO';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Search, Shield, AlertTriangle, CheckCircle, ArrowRight, Car, DollarSign, FileWarning, MapPin } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const faqs = [
  {
    question: "Where do I find the VIN on a car?",
    answer: "Look through the windshield at the driver's side dashboard, or check the driver's door jamb sticker. It's a 17-character code. Also found on registration docs and insurance cards."
  },
  {
    question: "How much does a VIN check cost?",
    answer: "With SafeOrStolen, basic stolen vehicle checks are free. We check NICB, insurance databases, and police records. Carfax charges $40+ for similar info."
  },
  {
    question: "What if the VIN doesn't match the title?",
    answer: "WALK AWAY. This is a major red flag. Either the VIN was swapped (illegal), the title is forged, or it's a different car entirely. Report to police."
  },
  {
    question: "Can I check a VIN before seeing the car?",
    answer: "Absolutely. Ask the seller for the VIN upfront. If they refuse to share it, that's suspicious. Legitimate sellers have no reason to hide the VIN."
  },
  {
    question: "What if the car was stolen and recovered?",
    answer: "Recovered vehicles often have damage history. Insurance may have paid out, meaning the original owner gave up the title. Check the title status carefully."
  },
  {
    question: "How often are used cars stolen?",
    answer: "About 1 in 5 used car deals have some kind of title issue. Stolen vehicles specifically make up about 800,000 thefts per year in the US. Worth the 2-minute check."
  }
];

const StolenVehicleCheckPage = () => {
  return (
    <>
      <PageSEO
        title="Free Stolen Vehicle Check - VIN Lookup Before You Buy | SafeOrStolen"
        description="Buying a used car? That $5,000 deal could cost you everything if it's stolen. Check the VIN first - it's free and takes 2 minutes."
        keywords="stolen vehicle check, VIN lookup free, check if car stolen, used car stolen check, VIN verification, NICB VIN check, free VIN check"
        canonical="/stolen-vehicle-check"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <Car className="h-4 w-4" />
              <span>Takes 2 minutes · Saves thousands</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Free Stolen Vehicle Check — VIN Lookup Before You Buy
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Buying a used car? That $5,000 deal could cost you everything if it's stolen. 
              Check the VIN first - it's free and takes 2 minutes.
            </p>

            <div className="pt-4 max-w-xl mx-auto">
              <HomeSearchFormWithURL />
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-500" /> Free VIN Check</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-blue-500" /> NICB Database</span>
              <span className="flex items-center gap-1"><Search className="h-4 w-4 text-primary" /> Instant Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Check Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Why You Need to Check Before Buying
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="h-5 w-5 text-red-500" />
                    You Lose Everything
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If police recover a stolen car you bought, they take it. You get nothing back. 
                    Not the car, not your money. Gone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileWarning className="h-5 w-5 text-amber-500" />
                    Title Problems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stolen cars often have forged titles or salvage history. You won't be able 
                    to register, insure, or resell it legally.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Criminal Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Driving a stolen vehicle - even unknowingly - can lead to awkward traffic 
                    stops and police questions. Not fun.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-amber-500/10 rounded-lg">
              <p className="text-center">
                <strong className="text-foreground">Real stat:</strong>{' '}
                <span className="text-muted-foreground">
                  ~800,000 vehicles are stolen annually in the US. Many end up on Craigslist, 
                  Facebook Marketplace, and shady used car lots. A 2-minute VIN check is cheap insurance.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find VIN */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Where to Find the VIN (Takes 10 Seconds)
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">On the Vehicle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Dashboard:</strong> Look through windshield 
                      at driver's side corner. Metal plate with 17 characters.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Door Jamb:</strong> Open driver's door, 
                      look at the sticker on the frame. VIN is listed there.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Engine Block:</strong> For extra verification, 
                      some VINs are stamped on the engine.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">On Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FileWarning className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Title:</strong> VIN is prominently displayed 
                      on the vehicle title. Compare to physical VIN!
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileWarning className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Registration:</strong> Your state 
                      registration card shows the VIN.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileWarning className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Insurance Card:</strong> Your insurance 
                      documents include the VIN.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-red-500/30">
              <CardContent className="p-6">
                <p className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Red Flag Alert:</strong> If the VIN plate 
                    looks tampered with, has mismatched fonts, or the VIN on the dashboard doesn't 
                    match the door jamb or title - WALK AWAY. This is likely VIN cloning or a stolen vehicle.
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What We Check Against (For Free)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span><strong>NICB Database:</strong> Insurance industry theft records</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span><strong>Police Records:</strong> Active theft reports</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span><strong>Export Records:</strong> Vehicles reported for export</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span><strong>Insurance Claims:</strong> Total loss and salvage flags</span>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-6">
              Unlike Carfax ($40+), our basic stolen vehicle check is completely free.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Check the VIN Now</h2>
            <p className="text-muted-foreground">
              2 minutes could save you $5,000 or more. Don't skip this step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Search className="mr-2 h-4 w-4" />
                  Free VIN Check
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/vin-checker">
                  Full VIN Verification Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* State Pages Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">State-Specific VIN Lookups</h2>
            <nav className="flex flex-wrap gap-2 text-sm">
              <Link to="/california-vin-lookup" className="text-primary hover:underline">California</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/texas-vin-lookup" className="text-primary hover:underline">Texas</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/florida-vin-lookup" className="text-primary hover:underline">Florida</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/arizona-vin-lookup" className="text-primary hover:underline">Arizona</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/new-york-vin-lookup" className="text-primary hover:underline">New York</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/georgia-vin-lookup" className="text-primary hover:underline">Georgia</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/ohio-vin-lookup" className="text-primary hover:underline">Ohio</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/illinois-vin-lookup" className="text-primary hover:underline">Illinois</Link>
            </nav>

            <h2 className="text-xl font-semibold mb-4 mt-8">Related Resources</h2>
            <nav className="flex flex-wrap gap-2">
              <Link to="/vin-checker" className="text-primary hover:underline">VIN Checker</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/free-carfax-alternative" className="text-primary hover:underline">Free Carfax Alternative</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/blog/complete-vin-guide" className="text-primary hover:underline">Complete VIN Guide</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/check-car" className="text-primary hover:underline">Check Car</Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default StolenVehicleCheckPage;
