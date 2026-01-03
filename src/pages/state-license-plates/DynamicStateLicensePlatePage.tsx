import { useParams, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, MapPin, AlertTriangle, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import { STATE_LICENSE_PLATE_DATA, StateLicensePlateData } from '@/data/stateLicensePlateData';

interface DynamicStateLicensePlatePageProps {
  stateKey?: string;
}

const DynamicStateLicensePlatePage = ({ stateKey }: DynamicStateLicensePlatePageProps) => {
  const params = useParams();
  
  // Get state from props or URL params
  const key = stateKey || params.state;
  
  if (!key || !STATE_LICENSE_PLATE_DATA[key]) {
    return <Navigate to="/license-plate-lookup" replace />;
  }
  
  const stateData = STATE_LICENSE_PLATE_DATA[key];
  const { state, stateCode, slug, dmvName, dmvLink, topCities, theftStats, uniqueConcerns, requiresFrontPlate } = stateData;

  const title = `${state} License Plate Lookup - Check ${stateCode} Vehicle Theft Status | SafeOrStolen`;
  const metaDescription = `${state} license plate lookup to verify if a vehicle is stolen. Check ${stateCode} plates against ${dmvName} and law enforcement databases. Covers ${topCities.slice(0, 3).join(', ')}. Instant results.`;
  const h1 = `${state} License Plate Lookup - Verify ${stateCode} Vehicles`;
  const breadcrumbName = `${state} License Plate Lookup`;

  // Generate FAQs specific to this state
  const faqs = [
    {
      question: `Can I check if a car is stolen in ${state} using the license plate?`,
      answer: `Yes, our ${state} license plate lookup checks the plate against ${dmvName} records and law enforcement databases to verify theft status. For complete verification, we recommend also checking the VIN.`
    },
    {
      question: `Does this work in ${topCities.slice(0, 3).join(', ')}?`,
      answer: `Yes, our ${state} license plate lookup covers all cities statewide including ${topCities.join(', ')} and every other ${stateCode} municipality.`
    },
    {
      question: `What databases do you check for ${stateCode} plates?`,
      answer: `We check ${dmvName} records, ${state} law enforcement databases, NICB (National Insurance Crime Bureau), and national stolen vehicle registries for comprehensive coverage.`
    },
    {
      question: `Is ${state} license plate lookup legal?`,
      answer: `Yes, checking publicly available vehicle information is legal. We aggregate data from authorized sources to help buyers verify vehicles aren't stolen before purchase.`
    },
    {
      question: `Does ${state} require front and rear license plates?`,
      answer: requiresFrontPlate 
        ? `Yes, ${state} requires both front and rear license plates. Vehicles missing a front plate may indicate tampering or out-of-state registration.`
        : `No, ${state} only requires a rear license plate. This is important to know when inspecting vehicles for sale.`
    }
  ];

  // Schema data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "License Plate Lookup", "item": "https://safeorstolen.com/license-plate-lookup" },
      { "@type": "ListItem", "position": 3, "name": breadcrumbName, "item": `https://safeorstolen.com/${slug}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${state} License Plate Verification`,
        "url": `https://safeorstolen.com/${slug}`,
        "provider": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
        "serviceType": "Vehicle Theft Verification",
        "areaServed": { "@type": "State", "name": state },
        "description": metaDescription
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords={`${state.toLowerCase()} license plate lookup, ${stateCode} license plate search, check ${state.toLowerCase()} license plate stolen, ${state.toLowerCase()} stolen vehicle plate lookup, ${topCities.map(c => c.toLowerCase()).join(' ')}`}
        canonical={`/${slug}`}
        structuredData={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{metaDescription}</p>
          <p>Visit safeorstolen.com/verify to check any vehicle.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "License Plate Lookup", href: "/license-plate-lookup" },
            { name: breadcrumbName, href: `/${slug}` }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <MapPin className="w-4 h-4" />
                {state} ({stateCode})
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Verify {state} vehicles using license plate numbers in 3 seconds. Check against {dmvName} databases and law enforcement records. Serving {topCities.slice(0, 4).join(', ')}, and all {stateCode} cities.
              </p>
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check {stateCode} License Plate Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">{stateCode} DMV Data</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Statewide Coverage</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Law Enforcement Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Signals */}
        <aside className="py-4 px-4 border-y border-border/50 bg-muted/20">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Written by</span>
              <Link to="/about" className="font-medium text-foreground hover:text-primary">SafeOrStolen Research Team</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Last updated: January 2025</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How we verify</Link>
            </div>
          </div>
        </aside>

        <SitewideCredibilityBar />

        {/* State-Specific Stats */}
        {theftStats && (
          <section className="py-12 px-4 bg-destructive/5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                {state} Vehicle Theft Statistics
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {theftStats.annualThefts && (
                  <div className="bg-card p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">{theftStats.annualThefts}</div>
                    <div className="text-muted-foreground">Annual Vehicle Thefts</div>
                  </div>
                )}
                {theftStats.recoveryRate && (
                  <div className="bg-card p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{theftStats.recoveryRate}</div>
                    <div className="text-muted-foreground">Recovery Rate</div>
                  </div>
                )}
                {theftStats.ranking && (
                  <div className="bg-card p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">{theftStats.ranking}</div>
                    <div className="text-muted-foreground">National Ranking</div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* What We Check */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What We Check for {stateCode} License Plates</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our {state} license plate lookup verifies vehicles against multiple authoritative databases including {dmvName}, state and local law enforcement records, NICB stolen vehicle database, and insurance claim records. We resolve the {stateCode} plate number to the VIN for comprehensive theft verification.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>{dmvName} ownership records</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>{state} law enforcement theft database</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>NICB stolen vehicle registry</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Insurance total loss records</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Vehicle registration status</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Lien and title information</span>
              </div>
            </div>
            <DataPartnerBadges variant="compact" />
          </div>
        </section>

        {/* State-Specific Concerns */}
        {uniqueConcerns.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{state}-Specific Vehicle Fraud Concerns</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Understanding local theft patterns helps you make safer buying decisions in {state}.
              </p>
              <div className="space-y-4">
                {uniqueConcerns.map((concern, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-card rounded-lg border-l-4 border-destructive">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium">{concern}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cities Coverage */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Cities We Cover in {state}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our {state} license plate lookup works for vehicles registered anywhere in the state, including:
            </p>
            <div className="flex flex-wrap gap-3">
              {topCities.map((city, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{city}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">+ All {stateCode} cities</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Check a {stateCode} License Plate</h2>
            <div className="space-y-6">
              {[
                `Record the ${state} license plate number from the vehicle`,
                `Enter the ${stateCode} plate into our verification tool`,
                `Review ownership and theft status results`,
                `Verify the registered owner matches the seller`,
                `Check the VIN for complete verification before purchase`
              ].map((step, index) => (
                <div key={index} className="flex gap-4 p-6 bg-card rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg flex items-center">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About {state} License Plate Lookup</h2>
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

        <AuthoritySignals variant="banner" className="mb-0" />

        {/* Related Links */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Link to="/check-car" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Check Car by VIN</h3>
                <p className="text-sm text-muted-foreground">Complete VIN verification for {state}</p>
              </Link>
              <Link to="/vin-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">VIN Checker</h3>
                <p className="text-sm text-muted-foreground">Decode and verify any VIN</p>
              </Link>
              <Link to="/license-plate-lookup" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">All States Lookup</h3>
                <p className="text-sm text-muted-foreground">Check plates from any US state</p>
              </Link>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Official {state} Resources</h3>
            <nav className="flex flex-wrap gap-3 text-sm">
              <a href={dmvLink} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                {dmvName} Official Site
              </a>
              <span className="text-muted-foreground">·</span>
              <Link to="/for-dealers" className="text-primary underline hover:text-primary/80">{state} Dealers</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/for-pawn-shops" className="text-primary underline hover:text-primary/80">{state} Pawn Shops</Link>
            </nav>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify a {state} Vehicle?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check any {stateCode} license plate in 3 seconds. Protect yourself from stolen vehicles.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start {stateCode} Plate Check <Search className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DynamicStateLicensePlatePage;
