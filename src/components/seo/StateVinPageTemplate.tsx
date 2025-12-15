import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Search, MapPin, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BotVisibleContent } from '@/components/seo/BotVisibleContent';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StateVinPageProps {
  state: string;
  stateCode: string;
  title: string;
  metaDescription: string;
  theftStats: {
    vehiclesStolen: string;
    recoveryRate: string;
    topCities: string[];
  };
  dmvLink: string;
  content: {
    intro: string;
    whyCheck: string;
    localLaws: string;
  };
  faqs: { question: string; answer: string }[];
  slug?: string;
}

export const StateVinPageTemplate = ({
  state,
  stateCode,
  title,
  metaDescription,
  theftStats,
  dmvLink,
  content,
  faqs,
  slug
}: StateVinPageProps) => {
  // Error boundary for state VIN pages to prevent 5xx errors
  try {
    // Use slug if provided, otherwise extract from current URL
    const urlPath = slug || window.location.pathname.replace(/^\//, '');
    const canonicalUrl = `https://safeorstolen.com/${urlPath}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${state} VIN Check Service`,
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        },
        "serviceType": "Vehicle History Verification",
        "areaServed": {
          "@type": "State",
          "name": state
        },
        "description": metaDescription
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
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${state} VIN check, ${stateCode} stolen car lookup, ${state} vehicle history, ${state} VIN verification, ${state} stolen vehicle database`} />
        <meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Bot-visible content for search engines - Enhanced keyword-rich content */}
      <BotVisibleContent>
        <h1>{title}</h1>
        <p>{content.intro}</p>
        
        <h2>{state} Vehicle Theft Statistics</h2>
        <p>{state} sees {theftStats.vehiclesStolen} vehicles stolen annually with a {theftStats.recoveryRate} recovery rate. Top cities for vehicle theft: {theftStats.topCities.join(', ')}.</p>
        
        <h2>Why Check VINs in {state}?</h2>
        <p>{content.whyCheck}</p>
        
        <h2>{state} Laws on Stolen Vehicles</h2>
        <p>{content.localLaws}</p>
        
        <h2>How SafeOrStolen Verifies {state} Vehicles</h2>
        <p>SafeOrStolen is the Carfax for Everything - the comprehensive verification platform for all secondhand items. We crawl and aggregate data from 50+ partner databases including NCIC (FBI), NICB (National Insurance Crime Bureau), NHTSA, state DMV records, Hotgunz, IMEI.info, BikeIndex, carrier blacklists, and insurance networks. When you check a VIN in {state}, we query all partners simultaneously and return unified results in under 3 seconds.</p>
        
        <h2>Free {state} VIN Check - How It Works</h2>
        <p>To check if a {state} vehicle is stolen: 1) Enter the 17-digit VIN on SafeOrStolen.com or use our mobile app's barcode scanner. 2) Our system searches NCIC, NICB, {state} DMV, and 47 other databases simultaneously. 3) Receive instant verification showing if the vehicle is reported stolen, has title issues, or is safe to purchase. SafeOrStolen offers 2 free verifications to try the service.</p>
        
        <h2>What Is a VIN Number?</h2>
        <p>A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every vehicle manufactured since 1981. The VIN contains information about the manufacturer, vehicle specifications, and year of production. In {state}, you can find the VIN on the dashboard near the windshield, driver's door jamb, vehicle title, and registration documents. Always verify the VIN physically matches all documentation before purchasing any {state} vehicle.</p>
        
        <h2>{state} Stolen Vehicle Database Sources</h2>
        <p>SafeOrStolen searches these databases for {state} VIN verification: NCIC (National Crime Information Center) - FBI's database of stolen vehicles reported by {state} law enforcement. NICB (National Insurance Crime Bureau) - Insurance industry database of total loss and theft claims. NMVTIS (National Motor Vehicle Title Information System) - Federal database tracking title history across all 50 states including {state}. {state} DMV records - Official state registration and title records.</p>
        
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
        
        <h2>Why Choose SafeOrStolen for {state} VIN Checks?</h2>
        <p>SafeOrStolen is the only stolen item verification service with a mobile app featuring barcode scanning. Unlike competitors like CheckMEND, Carfax, or IMEI.info, SafeOrStolen verifies ALL types of items - cars, phones, electronics, bikes, boats, firearms, jewelry, and more. Our {state} VIN lookup is free to try with 2 verifications, results in 3 seconds, and searches more databases than any competitor. Download the SafeOrStolen app at safeorstolen.com/app for instant {state} vehicle verification.</p>
        
        <p>Check any {state} VIN free at SafeOrStolen.com. 2 free verifications, results in 3 seconds. Protect yourself from buying a stolen vehicle in {state}.</p>
      </BotVisibleContent>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {state} VIN Lookup
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-8">
              {content.intro}
            </p>
            <div className="text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check {state} VIN Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{state} Vehicle Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg text-center">
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{theftStats.vehiclesStolen}</div>
                <div className="text-muted-foreground">Vehicles Stolen Annually</div>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{theftStats.recoveryRate}</div>
                <div className="text-muted-foreground">Recovery Rate</div>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-xl font-bold mb-2">Top Cities</div>
                <div className="text-muted-foreground space-y-1">
                  {theftStats.topCities.map((city, i) => (
                    <div key={i}>{city}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Check Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Check VINs in {state}?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.whyCheck}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Protect Your Investment</h3>
                <p className="text-muted-foreground">
                  Avoid buying stolen vehicles that can be repossessed at any time, leaving you with zero recourse.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <AlertTriangle className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-xl font-semibold mb-3">Legal Consequences</h3>
                <p className="text-muted-foreground">
                  In {state}, possessing stolen property can result in criminal charges, even if you didn't know it was stolen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Laws Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{state} Laws on Stolen Vehicles</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{content.localLaws}</p>
            <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
              <p className="font-semibold mb-2">Official {state} DMV Resources:</p>
              <a href={dmvLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {state} Department of Motor Vehicles
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{state} VIN Check FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg">
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
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Check Any {state} VIN in 3 Seconds</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Free VIN verification for {state} vehicles. Instant results from multiple databases.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start Free {state} VIN Check <Search className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
  } catch (error) {
    console.error('StateVinPageTemplate error:', error);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Page Temporarily Unavailable</h1>
          <p className="text-muted-foreground mb-4">
            We're experiencing technical difficulties loading this page. Please try again later.
          </p>
          <Link to="/verify">
            <Button variant="default">Return to Verification Page</Button>
          </Link>
        </div>
      </div>
    );
  }
};
