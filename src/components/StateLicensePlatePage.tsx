import { Link, useLocation } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, Scale } from 'lucide-react';
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
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { StateData, getNeighboringStates } from '@/config/stateData';
import { getStateUniqueContent, hasUniqueContent } from '@/config/stateUniqueContent';
import { useState } from 'react';

interface StateLicensePlatePageProps {
  stateData: StateData;
}

export const StateLicensePlatePage = ({ stateData }: StateLicensePlatePageProps) => {
  const location = useLocation();
  const [plateInput, setPlateInput] = useState('');
  const neighboringStates = getNeighboringStates(stateData.slug);
  const uniqueContent = getStateUniqueContent(stateData.slug);

  const handleSearch = () => {
    if (plateInput.trim()) {
      window.location.href = `/verify?plate=${encodeURIComponent(plateInput.trim())}&state=${stateData.abbrev}`;
    }
  };

  const title = `Free ${stateData.name} License Plate Lookup | SafeOrStolen`;
  const metaDescription = `Free ${stateData.name} license plate lookup. Check if any ${stateData.abbrev} vehicle is stolen. ${stateData.hasTheftDatabase ? `Search ${stateData.theftDatabaseName} and ` : 'Search '}NICB databases instantly.`;
  
  const keywords = [
    `${stateData.name.toLowerCase()} license plate lookup`,
    `${stateData.abbrev.toLowerCase()} license plate search`,
    `${stateData.name.toLowerCase()} stolen vehicle check`,
    `check ${stateData.abbrev.toLowerCase()} license plate stolen`,
    `free ${stateData.name.toLowerCase()} plate search`,
    ...(stateData.hasTheftDatabase ? [`${stateData.theftDatabaseName?.toLowerCase()} lookup`] : [])
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": `${stateData.name} License Plate Lookup`,
          "url": `https://safeorstolen.com/${stateData.slug}`,
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "url": "https://safeorstolen.com"
          },
          "serviceType": "Vehicle Theft Verification",
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
          "name": `How to Check ${stateData.name} License Plate`,
          "step": [
            { "@type": "HowToStep", "position": 1, "name": `Record the ${stateData.abbrev} license plate number` },
            { "@type": "HowToStep", "position": 2, "name": "Enter plate into verification tool" },
            { "@type": "HowToStep", "position": 3, "name": "Review theft status and registration" },
            { "@type": "HowToStep", "position": 4, "name": "Verify VIN before purchase" }
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
          "name": `Is this ${stateData.name} license plate lookup free?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, SafeOrStolen offers free ${stateData.name} license plate lookups with 2 free searches. Check any ${stateData.abbrev} vehicle against NICB and 100+ databases.`
          }
        },
        {
          "@type": "Question",
          "name": `Can I check if a car is stolen in ${stateData.majorCities[0]} using the license plate?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, our ${stateData.name} license plate lookup works statewide including ${stateData.majorCities.slice(0, 3).join(', ')} and all ${stateData.name} cities.`
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
                Free {stateData.name} License Plate Lookup
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Search {stateData.hasTheftDatabase ? `${stateData.theftDatabaseName} and ` : ''}100+ databases instantly. 
                Verify any {stateData.abbrev} vehicle isn't stolen before buying. Free license plate lookup for 
                {stateData.majorCities.slice(0, 3).join(', ')} and all of {stateData.name}.
              </p>

              {/* Search Input */}
              <div className="max-w-xl mx-auto space-y-4">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder={`Enter ${stateData.abbrev} license plate (e.g., ABC1234)`}
                    className="text-lg py-6 pr-40"
                    value={plateInput}
                    onChange={(e) => setPlateInput(e.target.value.toUpperCase())}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button 
                    size="lg" 
                    className="absolute right-1 top-1 bottom-1"
                    onClick={handleSearch}
                  >
                    Check {stateData.abbrev} Plate
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">
                  {stateData.hasTheftDatabase ? stateData.theftDatabaseName : 'NICB'}
                </span>
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

        {/* What We Search */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What We Search</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {stateData.hasTheftDatabase && (
                <div className="flex gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base">{stateData.theftDatabaseName} ({stateData.name} stolen property database)</span>
                </div>
              )}
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">NICB (National Insurance Crime Bureau)</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">{stateData.name} DMV records</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">Police databases</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">Insurance claims records</span>
              </div>
              <div className="flex gap-3 p-4 bg-background rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base">NCIC stolen vehicle database</span>
              </div>
            </div>
            <DataPartnerBadges variant="compact" />
          </div>
        </section>

        {/* Why Check in This State */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Verify Vehicles in {stateData.name}?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {stateData.theftNote} Always verify any used vehicle before purchasing in {stateData.majorCities[0]}, {stateData.majorCities[1]}, 
              or anywhere in {stateData.name}. A quick license plate lookup protects you from unknowingly buying stolen property.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Avoid legal trouble from stolen property</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Protect your investment</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Verify before meeting seller</span>
              </div>
              <div className="flex gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Free {stateData.name} license plate check</span>
              </div>
            </div>
          </div>
        </section>

        {/* UNIQUE CONTENT: Vehicle Market - Only shown if unique content exists */}
        {uniqueContent && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{stateData.name} Vehicle Market Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {uniqueContent.vehicleMarketParagraph}
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Vehicle Theft Patterns in {stateData.name}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {uniqueContent.theftPatternsParagraph}
              </p>

              {/* Common Targets */}
              <div className="bg-card rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Most Commonly Targeted Vehicles in {stateData.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {uniqueContent.commonTargets.map((vehicle, idx) => (
                    <span key={idx} className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
                      {vehicle}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* UNIQUE CONTENT: Legal Consequences */}
        {uniqueContent && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-primary" />
                {stateData.name} Laws on Stolen Vehicles
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {uniqueContent.legalConsequencesParagraph}
              </p>

              {/* Buying Tips */}
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{stateData.name} Vehicle Buying Tips</h3>
                <ul className="space-y-3">
                  {uniqueContent.buyingTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verification Advice */}
              <div className="mt-8 p-6 bg-card border-l-4 border-primary rounded-lg">
                <h4 className="font-semibold mb-2">Expert Verification Advice</h4>
                <p className="text-muted-foreground">{uniqueContent.verificationAdvice}</p>
              </div>
            </div>
          </section>
        )}

        {/* For Buyers AND Sellers */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">For Buyers</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Verify vehicle isn't stolen before purchase</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Avoid legal trouble and financial loss</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Check before meeting any seller</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Get instant peace of mind</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">For Sellers</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Prove your vehicle is legitimate</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Build buyer trust instantly</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Sell faster with verification</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Share certificate with buyers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="space-y-6">
              {[
                `Enter ${stateData.name} license plate above`,
                `We search ${stateData.hasTheftDatabase ? stateData.theftDatabaseName + ' + ' : ''}100 databases in 3 seconds`,
                "Get instant results - Safe or Stolen"
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
            <h2 className="text-3xl font-bold mb-8 text-center">{stateData.name} Vehicle Verification FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-0" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Is this {stateData.name} license plate lookup free?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, SafeOrStolen offers free {stateData.name} license plate lookups with 2 free searches. 
                  Check any {stateData.abbrev} vehicle against {stateData.hasTheftDatabase ? `${stateData.theftDatabaseName}, ` : ''}NICB and 100+ databases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Can I check if a car is stolen in {stateData.majorCities[0]} using the license plate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, our {stateData.name} license plate lookup works statewide including {stateData.majorCities.join(', ')} and all {stateData.name} cities. Enter the {stateData.abbrev} plate and we'll search instantly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Should I also run a VIN check for {stateData.name} vehicles?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we recommend running both a license plate lookup AND a VIN check before purchasing. 
                  License plate lookup provides quick screening, while VIN check gives complete history. 
                  <Link to="/check-car" className="text-primary hover:underline ml-1">Use our free VIN checker →</Link>
                </AccordionContent>
              </AccordionItem>
              {stateData.hasTheftDatabase && (
                <AccordionItem value="item-3" className="bg-background px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold">
                    What is {stateData.theftDatabaseName}?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {stateData.theftDatabaseName} is {stateData.name}'s official stolen property database. 
                    SafeOrStolen searches {stateData.theftDatabaseName} along with 100+ other databases in one search.
                  </AccordionContent>
                </AccordionItem>
              )}
              {/* UNIQUE STATE FAQs */}
              {uniqueContent?.uniqueFaqs.map((faq, idx) => (
                <AccordionItem key={`unique-${idx}`} value={`unique-item-${idx}`} className="bg-background px-6 rounded-lg">
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

        {/* Related Searches */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Related Searches</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link to="/check-car" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">VIN Lookup</h3>
                <p className="text-sm text-muted-foreground">Full vehicle history by VIN</p>
              </Link>
              <Link to="/firearms-check" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Firearm Check</h3>
                <p className="text-sm text-muted-foreground">Verify firearm serial numbers</p>
              </Link>
              {stateData.hasTheftDatabase && stateData.slug.includes('arizona') && (
                <Link to="/theftaz" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">TheftAZ Search</h3>
                  <p className="text-sm text-muted-foreground">Arizona stolen property database</p>
                </Link>
              )}
              <Link to="/check-if-stolen" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Universal Check</h3>
                <p className="text-sm text-muted-foreground">Check any item type</p>
              </Link>
            </div>

            {neighboringStates.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-4">Neighboring State Lookups</h3>
                <div className="flex flex-wrap gap-2">
                  {neighboringStates.slice(0, 6).map(neighbor => (
                    <Link 
                      key={neighbor.slug}
                      to={`/${neighbor.slug}`}
                      className="px-4 py-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {neighbor.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <AuthoritySignals variant="banner" className="mb-0" />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Check a {stateData.name} Vehicle?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get instant verification results in 3 seconds. Protect yourself from stolen vehicles.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start Free Check <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default StateLicensePlatePage;
