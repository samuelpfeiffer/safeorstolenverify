import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Search, CheckCircle, Shield, Car, Truck, Bike, Ship, Clock, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FreeVinCheckPage = () => {
  const [vin, setVin] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (vin.trim().length < 10) {
      toast.error('Please enter a valid VIN (17 characters)');
      return;
    }
    navigate(`/verify?serial=${encodeURIComponent(vin.trim())}&type=vehicle`);
  };

  const faqs = [
    {
      question: "Is this VIN check really free?",
      answer: "Yes, SafeOrStolen offers 2 free VIN checks with no credit card required. Unlike competitors that limit you to 1 search per day, we give you 2 free searches upfront. Additional checks require a paid plan starting at $9.99/month for unlimited searches."
    },
    {
      question: "What databases does SafeOrStolen check for VINs?",
      answer: "We search 100+ databases including NICB (National Insurance Crime Bureau), state stolen vehicle databases (TheftAZ, FDLE, etc.), insurance company records, salvage title databases, flood damage reports, and user-reported stolen vehicles. This is far more comprehensive than single-source alternatives."
    },
    {
      question: "How is this different from free VIN decoders?",
      answer: "Free VIN decoders only tell you the vehicle specifications (make, model, year). SafeOrStolen actually checks if the vehicle is stolen, has a salvage title, was in a flood, or has other issues. We verify theft status, not just decode the VIN."
    },
    {
      question: "Where do I find my car's VIN?",
      answer: "The VIN is typically located: 1) On the dashboard near the windshield (driver's side), 2) On the door jamb sticker (driver's side), 3) On your vehicle registration, 4) On your insurance documents. The VIN is always 17 characters with no letters I, O, or Q."
    },
    {
      question: "What vehicles can I check?",
      answer: "SafeOrStolen works for all vehicle types: cars, trucks, SUVs, motorcycles, RVs, boats, ATVs, trailers, and construction equipment. Any vehicle with a VIN can be verified."
    },
    {
      question: "What if the VIN comes back as stolen?",
      answer: "Do NOT purchase the vehicle. Walk away from the deal immediately. If you've already purchased it, contact your local police immediately - you're a victim of fraud. The vehicle may be confiscated with no compensation."
    }
  ];

  const vehicleTypes = [
    { icon: Car, name: 'Cars & SUVs', description: 'All makes and models' },
    { icon: Truck, name: 'Trucks', description: 'Pickup and commercial' },
    { icon: Bike, name: 'Motorcycles', description: 'Sport, cruiser, dirt bikes' },
    { icon: Ship, name: 'Boats & RVs', description: 'Watercraft and recreational' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Free VIN Check - Stolen Vehicle Lookup",
        "url": "https://safeorstolen.com/free-vin-check",
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com"
        },
        "serviceType": "Vehicle Verification",
        "areaServed": "United States",
        "description": "Free VIN check with no daily limits. Verify stolen status, salvage title, flood damage against 100+ databases."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Free VIN Check - Stolen Vehicle Lookup (No Limits) | SafeOrStolen"
        description="Free VIN check with no daily limits. Check if any car, truck, or motorcycle is stolen. Search 100+ databases including NICB, TheftAZ, and more. No signup required."
        keywords="free vin check, free vin lookup, stolen vehicle check free, vin verification free, car stolen check, nicb vin check free, vin number lookup free"
        canonical="/free-vin-check"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Free VIN Check - Stolen Vehicle Lookup
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Check any vehicle's stolen status for free. No daily limits. No signup required. 
              We search 100+ databases including NICB, insurance records, and state databases.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Enter VIN (17 characters)"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  className="text-lg py-6"
                  maxLength={17}
                />
                <Button type="submit" size="lg" className="gap-2">
                  <Search className="w-5 h-5" />
                  Check VIN Free
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                No signup required. 2 free checks included.
              </p>
            </form>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                100+ Databases
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No Daily Limits
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Instant Results
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Mobile App Available
              </span>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why SafeOrStolen for VIN Checks?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-muted">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Typical Free VIN Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      Limited to 1 search per day
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      Only check 1-2 databases
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      No mobile app
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      Vehicle VIN only
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">SafeOrStolen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      2 free searches, unlimited with subscription
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      100+ databases searched
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Free mobile app (only one that exists)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Phones, vehicles, electronics, and more
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What VIN Check Reveals */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our VIN Check Reveals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-lg">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Stolen Status</h3>
                <p className="text-sm text-muted-foreground">Checked against law enforcement and NICB records</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Salvage Title</h3>
                <p className="text-sm text-muted-foreground">Total loss or rebuilt title history</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <Ship className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Flood Damage</h3>
                <p className="text-sm text-muted-foreground">Insurance flood claims detected</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Title Issues</h3>
                <p className="text-sm text-muted-foreground">Title washing and jumps detected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Types */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Types We Check</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {vehicleTypes.map((vehicle) => (
                <div key={vehicle.name} className="text-center p-6 bg-background rounded-lg">
                  <vehicle.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-1">{vehicle.name}</h3>
                  <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Find VIN */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Where to Find Your VIN</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold">Dashboard</h3>
                    <p className="text-muted-foreground">Look at the base of the windshield on the driver's side. The VIN is visible through the glass.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold">Driver's Door Jamb</h3>
                    <p className="text-muted-foreground">Open the driver's door and look for a sticker on the door jamb with the VIN.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold">Registration</h3>
                    <p className="text-muted-foreground">Your vehicle registration document contains the VIN.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold">Insurance Card</h3>
                    <p className="text-muted-foreground">Most insurance documents list the VIN for the covered vehicle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Check Your Vehicle?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get instant verification results. Protect yourself from stolen vehicles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  <Search className="w-4 h-4" />
                  Check VIN Free
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline">
                  Download Mobile App
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-8 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Related Verification Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/vin-checker" className="text-primary hover:underline">VIN Checker</Link>
              <Link to="/check-car" className="text-primary hover:underline">Check If Car Is Stolen</Link>
              <Link to="/theftaz" className="text-primary hover:underline">TheftAZ Search</Link>
              <Link to="/ncic-vehicle-check" className="text-primary hover:underline">NCIC Vehicle Check</Link>
              <Link to="/license-plate-lookup" className="text-primary hover:underline">License Plate Lookup</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeVinCheckPage;
