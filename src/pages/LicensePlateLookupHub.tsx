import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Car, MapPin, Shield, Search, CheckCircle2, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';

const LicensePlateLookupHub = () => {
  const states = [
    { name: 'Alabama', code: 'AL', theftRate: 'Medium', slug: 'alabama' },
    { name: 'Alaska', code: 'AK', theftRate: 'Low', slug: 'alaska' },
    { name: 'Arizona', code: 'AZ', theftRate: 'High', slug: 'arizona' },
    { name: 'Arkansas', code: 'AR', theftRate: 'Medium', slug: 'arkansas' },
    { name: 'California', code: 'CA', theftRate: 'Very High', slug: 'california' },
    { name: 'Colorado', code: 'CO', theftRate: 'High', slug: 'colorado' },
    { name: 'Connecticut', code: 'CT', theftRate: 'Medium', slug: 'connecticut' },
    { name: 'Delaware', code: 'DE', theftRate: 'Medium', slug: 'delaware' },
    { name: 'Florida', code: 'FL', theftRate: 'Very High', slug: 'florida' },
    { name: 'Georgia', code: 'GA', theftRate: 'High', slug: 'georgia' },
    { name: 'Hawaii', code: 'HI', theftRate: 'Low', slug: 'hawaii' },
    { name: 'Idaho', code: 'ID', theftRate: 'Low', slug: 'idaho' },
    { name: 'Illinois', code: 'IL', theftRate: 'High', slug: 'illinois' },
    { name: 'Indiana', code: 'IN', theftRate: 'Medium', slug: 'indiana' },
    { name: 'Iowa', code: 'IA', theftRate: 'Low', slug: 'iowa' },
    { name: 'Kansas', code: 'KS', theftRate: 'Medium', slug: 'kansas' },
    { name: 'Kentucky', code: 'KY', theftRate: 'Medium', slug: 'kentucky' },
    { name: 'Louisiana', code: 'LA', theftRate: 'High', slug: 'louisiana' },
    { name: 'Maine', code: 'ME', theftRate: 'Low', slug: 'maine' },
    { name: 'Maryland', code: 'MD', theftRate: 'High', slug: 'maryland' },
    { name: 'Massachusetts', code: 'MA', theftRate: 'Medium', slug: 'massachusetts' },
    { name: 'Michigan', code: 'MI', theftRate: 'High', slug: 'michigan' },
    { name: 'Minnesota', code: 'MN', theftRate: 'Medium', slug: 'minnesota' },
    { name: 'Mississippi', code: 'MS', theftRate: 'Medium', slug: 'mississippi' },
    { name: 'Missouri', code: 'MO', theftRate: 'High', slug: 'missouri' },
    { name: 'Montana', code: 'MT', theftRate: 'Low', slug: 'montana' },
    { name: 'Nebraska', code: 'NE', theftRate: 'Low', slug: 'nebraska' },
    { name: 'Nevada', code: 'NV', theftRate: 'High', slug: 'nevada' },
    { name: 'New Hampshire', code: 'NH', theftRate: 'Low', slug: 'new-hampshire' },
    { name: 'New Jersey', code: 'NJ', theftRate: 'High', slug: 'new-jersey' },
    { name: 'New Mexico', code: 'NM', theftRate: 'High', slug: 'new-mexico' },
    { name: 'New York', code: 'NY', theftRate: 'High', slug: 'new-york' },
    { name: 'North Carolina', code: 'NC', theftRate: 'Medium', slug: 'north-carolina' },
    { name: 'North Dakota', code: 'ND', theftRate: 'Low', slug: 'north-dakota' },
    { name: 'Ohio', code: 'OH', theftRate: 'High', slug: 'ohio' },
    { name: 'Oklahoma', code: 'OK', theftRate: 'High', slug: 'oklahoma' },
    { name: 'Oregon', code: 'OR', theftRate: 'High', slug: 'oregon' },
    { name: 'Pennsylvania', code: 'PA', theftRate: 'Medium', slug: 'pennsylvania' },
    { name: 'Rhode Island', code: 'RI', theftRate: 'Medium', slug: 'rhode-island' },
    { name: 'South Carolina', code: 'SC', theftRate: 'Medium', slug: 'south-carolina' },
    { name: 'South Dakota', code: 'SD', theftRate: 'Low', slug: 'south-dakota' },
    { name: 'Tennessee', code: 'TN', theftRate: 'High', slug: 'tennessee' },
    { name: 'Texas', code: 'TX', theftRate: 'Very High', slug: 'texas' },
    { name: 'Utah', code: 'UT', theftRate: 'Medium', slug: 'utah' },
    { name: 'Vermont', code: 'VT', theftRate: 'Low', slug: 'vermont' },
    { name: 'Virginia', code: 'VA', theftRate: 'Medium', slug: 'virginia' },
    { name: 'Washington', code: 'WA', theftRate: 'High', slug: 'washington' },
    { name: 'West Virginia', code: 'WV', theftRate: 'Low', slug: 'west-virginia' },
    { name: 'Wisconsin', code: 'WI', theftRate: 'Medium', slug: 'wisconsin' },
    { name: 'Wyoming', code: 'WY', theftRate: 'Low', slug: 'wyoming' },
  ];

  const highTheftStates = states.filter(s => s.theftRate === 'Very High' || s.theftRate === 'High');

  const faqs = [
    {
      question: "How do I look up a license plate for free?",
      answer: "SafeOrStolen offers free license plate lookup for all 50 states. Enter the plate number and state, and we search DMV records and stolen vehicle databases. You get 2 free lookups, then affordable unlimited access."
    },
    {
      question: "Can I find out who owns a vehicle from the license plate?",
      answer: "License plate lookup reveals the registered owner's name, vehicle make/model/year, VIN, and registration status. This helps verify the seller is the legal owner before you buy."
    },
    {
      question: "What states have the highest car theft rates?",
      answer: "California, Texas, Florida, Colorado, and Washington have the highest vehicle theft rates. In these states, verifying any used vehicle before purchase is critical."
    },
    {
      question: "Is it legal to look up license plates?",
      answer: "Yes, looking up publicly available vehicle registration information for legitimate purposes like buying a used car is legal. SafeOrStolen complies with DPPA regulations."
    },
    {
      question: "Should I check license plate or VIN?",
      answer: "Check BOTH. License plates can be swapped between vehicles. Always verify the license plate first to get the VIN, then verify the VIN directly. SafeOrStolen checks both."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const getTheftBadge = (rate: string) => {
    switch(rate) {
      case 'Very High':
        return <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">Very High Theft</span>;
      case 'High':
        return <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">High Theft</span>;
      case 'Medium':
        return <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Medium</span>;
      default:
        return <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Low Theft</span>;
    }
  };

  return (
    <>
      <PageSEO
        title="License Plate Lookup by State - Free Vehicle Verification | SafeOrStolen"
        description="Free license plate lookup for all 50 states. Check vehicle ownership, stolen status, registration. California, Texas, Florida, and more. DMV records + police databases."
        keywords="license plate lookup, license plate lookup free, pa license plate lookup, texas license plate lookup, california plate lookup, florida plate search, free plate lookup"
        canonical="/license-plate-lookup-by-state"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">All 50 States Covered</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                License Plate Lookup by State
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Free license plate lookup for every U.S. state. Verify vehicle ownership, check if a car is stolen, 
                and search DMV records before you buy. <strong>The only service with a mobile app.</strong>
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button asChild size="lg">
                  <Link to="/license-plate-lookup">
                    <Search className="mr-2 h-5 w-5" />
                    Look Up Any Plate
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/vin-checker">
                    <Car className="mr-2 h-5 w-5" />
                    VIN Check
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  DMV Records
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Stolen Vehicle Databases
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Instant Results
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Mobile App
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* High Theft States Warning */}
        <section className="py-8 bg-red-50 dark:bg-red-900/10 border-y border-red-200 dark:border-red-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-bold text-red-800 dark:text-red-200 mb-2">
                    High Vehicle Theft Alert: These States Require Extra Verification
                  </h2>
                  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                    In 2024, over 1 million vehicles were stolen in the US. These states have the highest theft rates - 
                    always verify before buying:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {highTheftStates.map(state => (
                      <Link 
                        key={state.code}
                        to={`/${state.slug}-license-plate-lookup`}
                        className="text-xs bg-red-100 dark:bg-red-900/50 px-3 py-1 rounded hover:bg-red-200 dark:hover:bg-red-800 transition-colors text-red-800 dark:text-red-200"
                      >
                        {state.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All 50 States Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              License Plate Lookup - All 50 States
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Select your state for specialized lookup. Each state page includes DMV contact info, 
              theft statistics, and state-specific verification guidance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {states.map(state => (
                <Link
                  key={state.code}
                  to={`/${state.slug}-license-plate-lookup`}
                  className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {state.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{state.code}</span>
                  </div>
                  {getTheftBadge(state.theftRate)}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">What Our License Plate Lookup Reveals</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Theft Status</h3>
                  <p className="text-sm text-muted-foreground">
                    Check if the vehicle has been reported stolen to police, NCIC, or insurance databases.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Car className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Vehicle Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Make, model, year, VIN, and registration status from DMV records.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Owner Info</h3>
                  <p className="text-sm text-muted-foreground">
                    Registered owner name to verify the seller has authority to sell.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8">License Plate Lookup FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Why License Plate Lookup Matters</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                When buying a used car, license plate lookup is your first line of defense against fraud. 
                Our free license plate lookup service searches DMV records across all 50 states, 
                cross-referencing with stolen vehicle databases, NICB records, and police reports.
              </p>
              
              <h3>The Problem with License Plates</h3>
              <p>
                Unlike VIN numbers which are stamped into the vehicle frame, license plates can be easily 
                removed and swapped. Criminals often steal plates from one vehicle and attach them to another 
                stolen car to avoid detection. This is why we always recommend checking BOTH the license plate 
                AND the VIN before completing any purchase.
              </p>
              
              <h3>State-by-State Differences</h3>
              <p>
                Each state has different DMV systems, plate formats, and theft rates. California, Texas, and 
                Florida account for nearly 40% of all vehicle thefts in the United States. If you're buying 
                a vehicle in or from these states, extra verification is essential. Our state-specific pages 
                provide theft statistics, DMV contact information, and localized guidance.
              </p>

              <h3>What Makes SafeOrStolen Different</h3>
              <p>
                We're the only license plate lookup service with a <strong>mobile app</strong>. Check plates 
                while you're at the dealership, meeting a private seller, or browsing a car lot. Our app 
                lets you scan plates, verify VINs, and get instant results - all from your phone.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Don't risk buying a stolen vehicle. Free license plate lookup takes 30 seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/license-plate-lookup">
                  <Search className="mr-2 h-5 w-5" />
                  Look Up License Plate
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/app">
                  Download Mobile App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 text-center">Related Verification Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link to="/vin-checker" className="p-4 rounded-lg border bg-card hover:border-primary/50 text-center">
                <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">VIN Checker</span>
              </Link>
              <Link to="/firearms-check" className="p-4 rounded-lg border bg-card hover:border-primary/50 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Gun Serial Lookup</span>
              </Link>
              <Link to="/imei-checker" className="p-4 rounded-lg border bg-card hover:border-primary/50 text-center">
                <Search className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">IMEI Checker</span>
              </Link>
              <Link to="/verify" className="p-4 rounded-lg border bg-card hover:border-primary/50 text-center">
                <CheckCircle2 className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Verify Any Item</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LicensePlateLookupHub;
