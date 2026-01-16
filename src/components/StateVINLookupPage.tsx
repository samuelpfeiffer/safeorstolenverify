import { Link, useLocation } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, Car, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { StateData, getNeighboringStates } from '@/config/stateData';
import { useState } from 'react';

interface StateVINLookupPageProps {
  stateData: StateData;
}

export const StateVINLookupPage = ({ stateData }: StateVINLookupPageProps) => {
  const location = useLocation();
  const [vinInput, setVinInput] = useState('');
  const neighboringStates = getNeighboringStates(stateData.slug);

  const handleSearch = () => {
    if (vinInput.trim() && vinInput.trim().length === 17) {
      window.location.href = `/verify?vin=${encodeURIComponent(vinInput.trim().toUpperCase())}`;
    }
  };

  const vinSlug = stateData.slug.replace('license-plate-lookup', 'vin-lookup');
  const title = `Free ${stateData.name} VIN Lookup - Stolen Vehicle Check | SafeOrStolen`;
  const metaDescription = `Free ${stateData.name} VIN lookup. Check if any ${stateData.abbrev} vehicle is stolen. Search NICB, ${stateData.name} DMV records and 100+ databases instantly.`;
  
  const keywords = [
    `${stateData.name.toLowerCase()} vin lookup`,
    `${stateData.abbrev.toLowerCase()} vin check`,
    `${stateData.name.toLowerCase()} stolen vehicle check`,
    `check ${stateData.abbrev.toLowerCase()} vin stolen`,
    `free ${stateData.name.toLowerCase()} vin search`,
    `${stateData.name.toLowerCase()} dmv vin check`
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": `${stateData.name} VIN Lookup`,
          "url": `https://safeorstolen.com/${vinSlug}`,
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "url": "https://safeorstolen.com"
          },
          "serviceType": "Vehicle Identification Number Verification",
          "areaServed": {
            "@type": "State",
            "name": stateData.name,
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
          },
          "description": metaDescription
        },
        {
          "@type": "HowTo",
          "name": `How to Check ${stateData.name} VIN`,
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Locate the 17-character VIN" },
            { "@type": "HowToStep", "position": 2, "name": "Enter VIN into verification tool" },
            { "@type": "HowToStep", "position": 3, "name": "Review theft status and history" },
            { "@type": "HowToStep", "position": 4, "name": "Verify before purchase" }
          ]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `Is this ${stateData.name} VIN lookup free?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, SafeOrStolen offers free ${stateData.name} VIN lookups with 2 free searches. Check any ${stateData.abbrev} vehicle against NICB and 100+ databases.`
          }
        },
        {
          "@type": "Question",
          "name": `Where do I find the VIN on a ${stateData.name} vehicle?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The VIN is located on the dashboard (visible through windshield), driver's door jamb, vehicle registration, and insurance documents."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords={keywords.join(', ')}
        canonical={location.pathname}
        structuredData={structuredData}
      />

      <TopNavigation />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                Free {stateData.name} VIN Lookup
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Verify any {stateData.abbrev} vehicle isn't stolen before buying. Search NICB, {stateData.name} DMV records 
                and 100+ databases in 3 seconds. Free VIN check for {stateData.majorCities.slice(0, 3).join(', ')} and all of {stateData.name}.
              </p>

              {/* Search Input */}
              <div className="max-w-xl mx-auto space-y-4">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Enter 17-character VIN"
                    className="text-lg py-6 pr-36 uppercase"
                    maxLength={17}
                    value={vinInput}
                    onChange={(e) => setVinInput(e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, ''))}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button 
                    size="lg" 
                    className="absolute right-1 top-1 bottom-1"
                    onClick={handleSearch}
                    disabled={vinInput.length !== 17}
                  >
                    Check VIN
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  VIN must be exactly 17 characters (letters and numbers)
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">NICB Database</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">100+ Databases</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Free App</span>
              </div>
            </div>
          </div>
        </section>

        <SitewideCredibilityBar />

        {/* What is a VIN */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is a VIN?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every vehicle. 
              It's like a fingerprint for your car, truck, or motorcycle. The VIN contains information about 
              the manufacturer, vehicle specifications, and production details.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Dashboard</span>
                  <p className="text-sm text-muted-foreground">Visible through windshield, driver's side</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Driver's Door Jamb</span>
                  <p className="text-sm text-muted-foreground">Sticker on door frame when door is open</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Registration</span>
                  <p className="text-sm text-muted-foreground">On {stateData.name} vehicle registration</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Insurance Documents</span>
                  <p className="text-sm text-muted-foreground">Listed on insurance card and policy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Search */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What We Search</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">NICB (National Insurance Crime Bureau)</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">{stateData.name} DMV records</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">NCIC stolen vehicle database</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">Insurance claims history</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">Salvage title records</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">Flood and accident history</span>
              </div>
            </div>
            <DataPartnerBadges variant="compact" />
          </div>
        </section>

        {/* Why Check VIN */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Check VIN in {stateData.name}?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {stateData.theftNote} A VIN check reveals more than theft status - it shows salvage titles, 
              flood damage, odometer rollbacks, and accident history. Always verify before purchasing any vehicle 
              in {stateData.majorCities[0]}, {stateData.majorCities[1]}, or anywhere in {stateData.name}.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span>Stolen vehicles can be seized by police</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span>Salvage titles affect resale value</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span>Flood damage causes hidden problems</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span>Odometer fraud is more common than you think</span>
              </div>
            </div>
          </div>
        </section>

        {/* For Buyers AND Sellers */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">For Buyers</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Verify vehicle isn't stolen before purchase</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Check for salvage or rebuilt title</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Reveal hidden accident history</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Verify odometer accuracy</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">For Sellers</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Prove your vehicle has clean history</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Build buyer confidence instantly</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Command higher sale price</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Share verification certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Covered */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{stateData.name} Cities Covered</h2>
            <p className="text-muted-foreground mb-4">
              Our {stateData.name} VIN lookup works statewide, including:
            </p>
            <div className="flex flex-wrap gap-2">
              {stateData.majorCities.map(city => (
                <span key={city} className="bg-background px-4 py-2 rounded-full text-sm">
                  {city}, {stateData.abbrev}
                </span>
              ))}
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                + All {stateData.name} Cities
              </span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-0" className="bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Is this {stateData.name} VIN lookup free?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, SafeOrStolen offers free {stateData.name} VIN lookups with 2 free searches. 
                  Check any {stateData.abbrev} vehicle against NICB and 100+ databases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Where do I find the VIN on a {stateData.name} vehicle?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The VIN is located on the dashboard (visible through windshield on driver's side), 
                  the driver's door jamb sticker, your {stateData.name} vehicle registration, and insurance documents.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  What's the difference between VIN check and license plate lookup?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  VIN checks provide complete vehicle history including theft status, salvage titles, 
                  and accident history. License plate lookups are faster for quick screening but VIN 
                  checks are more comprehensive. We recommend running both.
                  <Link to={`/${stateData.slug}`} className="text-primary hover:underline ml-1">
                    {stateData.name} License Plate Lookup →
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Is SafeOrStolen better than Carfax?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SafeOrStolen focuses on theft verification while Carfax focuses on vehicle history. 
                  We search 100+ databases specifically for stolen status, which Carfax doesn't prioritize. 
                  For theft verification, SafeOrStolen is more thorough.
                  <Link to="/vs-carfax" className="text-primary hover:underline ml-1">
                    Compare SafeOrStolen vs Carfax →
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Related Searches */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Related Searches</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link to={`/${stateData.slug}`} className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">{stateData.name} License Plates</h3>
                <p className="text-sm text-muted-foreground">Quick plate lookup</p>
              </Link>
              <Link to="/check-car" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Car Stolen Check</h3>
                <p className="text-sm text-muted-foreground">Full vehicle verification</p>
              </Link>
              <Link to="/free-stolen-vehicle-check" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Free Stolen Check</h3>
                <p className="text-sm text-muted-foreground">No daily limits</p>
              </Link>
            </div>

            {/* Neighboring States */}
            {neighboringStates.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-4">Check Other States</h3>
                <div className="flex flex-wrap gap-4">
                  {neighboringStates.map(state => (
                    <Link 
                      key={state.abbrev}
                      to={`/${state.slug.replace('license-plate-lookup', 'vin-lookup')}`}
                      className="text-primary hover:underline"
                    >
                      {state.name} VIN Lookup
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default StateVINLookupPage;
