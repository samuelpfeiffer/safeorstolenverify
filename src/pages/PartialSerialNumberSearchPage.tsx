import { Link, useLocation } from '@/lib/router-compat';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, HelpCircle } from 'lucide-react';
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
import { useState } from 'react';

const PartialSerialNumberSearchPage = () => {
  const location = useLocation();
  const [serialInput, setSerialInput] = useState('');

  const handleSearch = () => {
    if (serialInput.trim()) {
      window.location.href = `/verify?serial=${encodeURIComponent(serialInput.trim())}`;
    }
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Partial Serial Number Search",
      "url": "https://safeorstolen.com/partial-serial-number-search",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "serviceType": "Stolen Property Verification",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "description": "Search for stolen items with partial or incomplete serial numbers using fuzzy matching across 100+ databases."
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Search with Partial Serial Numbers",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Enter known characters", "text": "Enter the characters you can read" },
        { "@type": "HowToStep", "position": 2, "name": "Mark unknowns", "text": "Use * or ? for unknown characters" },
        { "@type": "HowToStep", "position": 3, "name": "Fuzzy search", "text": "We search using fuzzy matching algorithms" },
        { "@type": "HowToStep", "position": 4, "name": "Review matches", "text": "Review potential matches from results" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I search with only part of a serial number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SafeOrStolen supports partial serial number searches. Enter the characters you can read and use * for unknown characters."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is partial serial number search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Partial searches may return multiple potential matches. The more characters you provide, the more accurate the results."
          }
        },
        {
          "@type": "Question",
          "name": "What should I use for unknown characters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use * (asterisk) or ? (question mark) for unknown characters. For example: ABC*789 or ??12345."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="Partial Serial Number Search - Find Stolen Items | SafeOrStolen"
        description="Search for stolen items with partial or incomplete serial numbers. SafeOrStolen uses fuzzy matching across 100+ databases."
        keywords="partial serial number search, incomplete serial lookup, fuzzy serial search, find serial number, worn serial number check"
        canonical={location.pathname}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                Partial Serial Number Search
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Don't have the full serial? We can still help. Enter the characters you CAN read and use * for unknown characters. Our fuzzy matching searches across 100+ databases for potential matches.
              </p>
              
              {/* Search Input */}
              <div className="max-w-xl mx-auto space-y-4">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Enter partial serial (e.g., ABC*789 or ??12345)"
                    className="text-lg py-6 pr-32"
                    value={serialInput}
                    onChange={(e) => setSerialInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button 
                    size="lg" 
                    className="absolute right-1 top-1 bottom-1"
                    onClick={handleSearch}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Example: ABC*789 or ??12345 or PARTIAL*
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">100+ Databases</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Fuzzy Matching</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Partial Support</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Free to Try</span>
              </div>
            </div>
          </div>
        </section>

        <SitewideCredibilityBar />

        {/* How It Works */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How Partial Search Works</h2>
            <div className="space-y-6">
              {[
                "Enter the characters you CAN read from the serial number",
                "Use * or ? for unknown/unreadable characters",
                "We search using fuzzy matching algorithms across all databases",
                "Review potential matches and verify against the item"
              ].map((step, index) => (
                <div key={index} className="flex gap-4 p-6 bg-background rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg flex items-center">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When Partial Search Helps */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">When Partial Search Helps</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Worn or faded serial number labels",
                "Damaged or scratched engravings",
                "Inherited items with incomplete records",
                "Photos where serial is partially visible",
                "Items with missing plates or stickers",
                "Old equipment with degraded markings"
              ].map((item, index) => (
                <div key={index} className="flex gap-3 p-4 bg-card rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips for Better Results */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Tips for Better Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-2">✓ Enter at least 4-5 characters</h3>
                <p className="text-muted-foreground">More known characters = more accurate results</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-2">✓ Note where unknowns are</h3>
                <p className="text-muted-foreground">Beginning, middle, or end affects matching</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-2">✓ Include both letters AND numbers</h3>
                <p className="text-muted-foreground">Mixed characters help narrow results</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-2">✓ Try multiple variations</h3>
                <p className="text-muted-foreground">O vs 0, I vs 1, S vs 5 if unsure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Databases with Partial Support */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Databases with Partial Search Support</h2>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold">Bicycle Registries</h3>
                <p className="text-muted-foreground">Full fuzzy matching across 1M+ registered bikes</p>
              </div>
              <div className="p-4 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold">User-Reported Stolen Items</h3>
                <p className="text-muted-foreground">Pattern matching on community-reported stolen items</p>
              </div>
              <div className="p-4 bg-card rounded-lg border-l-4 border-primary">
                <h3 className="font-bold">Firearms Databases</h3>
                <p className="text-muted-foreground">Partial matching on firearm serial numbers</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              <strong>Note:</strong> Partial searches may return multiple potential matches. Full serial numbers always provide more accurate results. Some databases require complete serial numbers for verification.
            </p>
            <DataPartnerBadges variant="compact" className="mt-8" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-0" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Can I search with only part of a serial number?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, SafeOrStolen supports partial serial number searches. Enter the characters you can read and use * for unknown characters. We'll search using fuzzy matching algorithms across applicable databases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  How accurate is partial serial number search?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Partial searches may return multiple potential matches. The more characters you provide, the more accurate the results. At least 4-5 known characters are recommended for useful results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  What if I get multiple matches?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Review each potential match carefully. Compare additional details like item type, brand, model, and location to determine which match is relevant to your item.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/serial-number-checker" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Serial Number Checker</h3>
                <p className="text-sm text-muted-foreground">For complete serial numbers</p>
              </Link>
              <Link to="/check-if-stolen" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Universal Stolen Check</h3>
                <p className="text-sm text-muted-foreground">Check any item type</p>
              </Link>
              <Link to="/check-bike" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Bike Serial Lookup</h3>
                <p className="text-sm text-muted-foreground">National bicycle registry search</p>
              </Link>
            </div>
          </div>
        </section>

        <AuthoritySignals variant="banner" className="mb-0" />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Search?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enter your partial serial number above or use our full verification tool for complete serial numbers.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start Full Verification <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartialSerialNumberSearchPage;
