import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Search, CheckCircle, Shield, Car, AlertTriangle, Database, FileText, Lock } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NCICVehicleCheckPage = () => {
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
      question: "What is NCIC?",
      answer: "NCIC (National Crime Information Center) is the FBI's centralized criminal justice database containing records of stolen vehicles, wanted persons, and other criminal justice information. It's the primary database used by law enforcement to check stolen vehicles during traffic stops and investigations."
    },
    {
      question: "Can the public access NCIC directly?",
      answer: "No. NCIC is restricted to law enforcement and authorized criminal justice agencies. The public cannot directly query NCIC. SafeOrStolen provides an alternative by searching 100+ other databases that include similar information from insurance companies, state agencies, and other sources."
    },
    {
      question: "Does SafeOrStolen have NCIC access?",
      answer: "No private company has direct NCIC access. However, SafeOrStolen searches 100+ alternative databases including NICB (National Insurance Crime Bureau), state stolen vehicle databases, insurance claims, and user-reported stolen vehicles to provide comprehensive verification."
    },
    {
      question: "How accurate is SafeOrStolen compared to NCIC?",
      answer: "While NCIC is the most comprehensive law enforcement database, SafeOrStolen provides excellent coverage by aggregating 100+ sources. We catch the vast majority of stolen vehicles, especially those reported to insurance companies or state databases. For complete peace of mind, ask police to run an NCIC check during the sale."
    },
    {
      question: "What databases does SafeOrStolen actually search?",
      answer: "We search: NICB (insurance theft records), state databases (TheftAZ, FDLE, Ohio AG, etc.), DMV records, salvage/total loss records, title history, insurance claims, user-reported stolen vehicles, and many more. Together, these provide comprehensive stolen vehicle detection."
    },
    {
      question: "Should I still ask police to check NCIC?",
      answer: "For high-value vehicle purchases, it's wise to request a police VIN check in addition to using SafeOrStolen. Some police departments offer this service for vehicle sales. SafeOrStolen gives you instant verification before meeting the seller, and police can verify through NCIC at the point of sale."
    }
  ];

  const databasesSources = [
    { icon: Database, title: 'NICB', description: 'National Insurance Crime Bureau stolen vehicle records' },
    { icon: Shield, title: 'State Databases', description: 'TheftAZ, FDLE, Ohio AG, and other state registries' },
    { icon: FileText, title: 'Insurance Records', description: 'Theft claims from major insurance companies' },
    { icon: Lock, title: 'Title Records', description: 'Salvage, flood, and title washing detection' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "NCIC-Level Stolen Vehicle Check",
        "url": "https://safeorstolen.com/ncic-vehicle-check",
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com"
        },
        "serviceType": "Vehicle Verification",
        "areaServed": "United States",
        "description": "Comprehensive stolen vehicle check searching 100+ databases. While NCIC is law enforcement only, SafeOrStolen provides public access to extensive vehicle verification."
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
        title="NCIC Stolen Vehicle Check - Free VIN Lookup | SafeOrStolen"
        description="Check vehicles against NCIC-level databases for free. While direct NCIC access is law enforcement only, SafeOrStolen searches 100+ databases including stolen vehicle records."
        keywords="ncic vehicle check, ncic vin lookup, ncic stolen car check, fbi stolen vehicle database, check stolen car ncic, national crime information center vehicle check"
        canonical="/ncic-vehicle-check"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NCIC-Level Stolen Vehicle Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              While NCIC is restricted to law enforcement, SafeOrStolen provides the public with 
              comprehensive stolen vehicle verification through 100+ alternative databases.
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
                  Check Vehicle Free
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Search 100+ databases instantly. 2 free checks included.
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
                Public Access
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Instant Results
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free Mobile App
              </span>
            </div>
          </div>
        </section>

        {/* What is NCIC Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is NCIC?</h2>
            <Card className="border-primary/30">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  The <strong>National Crime Information Center (NCIC)</strong> is the FBI's centralized 
                  database of criminal justice information. It contains records of stolen vehicles, 
                  wanted persons, missing persons, and other criminal justice data used by law 
                  enforcement across the country.
                </p>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">NCIC is Law Enforcement Only</h3>
                      <p className="text-muted-foreground">
                        Direct NCIC access is restricted to law enforcement and authorized criminal 
                        justice agencies. No private company or website can directly query NCIC. 
                        However, SafeOrStolen provides comprehensive alternative verification.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Search */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What SafeOrStolen Searches</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              While we can't access NCIC, we search 100+ alternative databases that provide 
              comprehensive stolen vehicle detection for the public.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {databasesSources.map((source) => (
                <div key={source.title} className="text-center p-6 bg-card rounded-lg">
                  <source.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{source.title}</h3>
                  <p className="text-sm text-muted-foreground">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use SafeOrStolen */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Use SafeOrStolen?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">No Law Enforcement Needed</h3>
                    <p className="text-muted-foreground">Verify vehicles instantly without visiting a police station or waiting for callbacks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Free Searches Available</h3>
                    <p className="text-muted-foreground">2 free VIN checks with no signup or credit card required.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Mobile App for On-Site Checks</h3>
                    <p className="text-muted-foreground">The only verification service with a mobile app. Check vehicles before meeting sellers.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">100+ Database Sources</h3>
                    <p className="text-muted-foreground">Comprehensive coverage from NICB, state databases, insurance companies, and more.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Instant Results</h3>
                    <p className="text-muted-foreground">Get verification results in 3 seconds, not hours or days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Beyond Theft Status</h3>
                    <p className="text-muted-foreground">Also reveals salvage titles, flood damage, and title issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Recommendation for High-Value Purchases</h2>
                    <p className="text-muted-foreground mb-4">
                      For expensive vehicle purchases, we recommend a two-step verification approach:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                      <li><strong>Before meeting the seller:</strong> Run a SafeOrStolen check to screen the vehicle</li>
                      <li><strong>At the point of sale:</strong> Ask local police to run an NCIC check</li>
                    </ol>
                    <p className="text-muted-foreground">
                      SafeOrStolen catches the vast majority of issues and saves you from wasted trips. 
                      Police NCIC verification provides additional assurance for the final purchase.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            <h2 className="text-3xl font-bold mb-4">Check Any Vehicle Now</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get instant verification against 100+ databases. Protect yourself from stolen vehicles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  <Car className="w-4 h-4" />
                  Check Vehicle Free
                </Button>
              </Link>
              <Link to="/free-vin-check">
                <Button size="lg" variant="outline">
                  Learn About Free VIN Check
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
              <Link to="/free-vin-check" className="text-primary hover:underline">Free VIN Check</Link>
              <Link to="/vin-checker" className="text-primary hover:underline">VIN Checker</Link>
              <Link to="/theftaz" className="text-primary hover:underline">TheftAZ Search</Link>
              <Link to="/check-car" className="text-primary hover:underline">Stolen Car Check</Link>
              <Link to="/license-plate-lookup" className="text-primary hover:underline">License Plate Lookup</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NCICVehicleCheckPage;
