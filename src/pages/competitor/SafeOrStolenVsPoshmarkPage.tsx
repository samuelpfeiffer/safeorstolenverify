import { ArrowRight, Check, X, Shield, Smartphone, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageSEO } from "@/components/seo/PageSEO";
import { useNavigate } from "react-router-dom";

const SafeOrStolenVsPoshmarkPage = () => {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Mobile App Verification",
      safeorstolen: true,
      poshmark: false,
      description: "Instant camera-based item verification"
    },
    {
      feature: "Stolen Item Database Access",
      safeorstolen: true,
      poshmark: false,
      description: "Check against millions of stolen records"
    },
    {
      feature: "Authentication Service",
      safeorstolen: true,
      poshmark: true,
      description: "Poshmark authenticates luxury items $500+, SafeOrStolen checks theft"
    },
    {
      feature: "IMEI/VIN Verification",
      safeorstolen: true,
      poshmark: false,
      description: "Comprehensive electronics and vehicle checks"
    },
    {
      feature: "Works Across All Platforms",
      safeorstolen: true,
      poshmark: false,
      description: "Verify items from any marketplace or in-person"
    },
    {
      feature: "Social Shopping Platform",
      safeorstolen: false,
      poshmark: true,
      description: "Poshmark is a fashion marketplace"
    },
    {
      feature: "Offline Verification",
      safeorstolen: true,
      poshmark: false,
      description: "Check items without internet on mobile app"
    },
    {
      feature: "Free Basic Checks",
      safeorstolen: true,
      poshmark: true,
      description: "Both offer free basic features"
    },
    {
      feature: "Law Enforcement Database",
      safeorstolen: true,
      poshmark: false,
      description: "Direct connection to police stolen item databases"
    },
    {
      feature: "Focus on Fashion",
      safeorstolen: false,
      poshmark: true,
      description: "Poshmark specializes in clothing and accessories"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ComparisonPage",
    "name": "SafeOrStolen vs Poshmark: Complete Comparison 2025",
    "description": "Compare SafeOrStolen's stolen item verification mobile app with Poshmark's authentication service. Understand the differences and why you might need both.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": comparisonData.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.feature,
        "description": item.description
      }))
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Poshmark: Verification vs Authentication | 2025 Comparison"
        description="Compare SafeOrStolen's stolen item verification with Poshmark's luxury authentication. Learn why both services protect buyers differently and when to use each mobile app."
        keywords="safeorstolen vs poshmark, poshmark authentication, stolen item verification, poshmark buyer protection, luxury authentication, mobile verification app"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Platform Comparison</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              SafeOrStolen vs Poshmark:<br />
              <span className="text-primary">Verification vs Authentication</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Poshmark authenticates luxury items for resale. SafeOrStolen's mobile app checks if items are stolen. 
              Different protections for different needs. Here's everything you need to know.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/mobile-app')} className="gap-2">
                <Smartphone className="h-5 w-5" />
                Get SafeOrStolen App
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/')}>
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Verdict */}
        <section className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto p-8 bg-primary/5">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Key Difference
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Poshmark</strong> verifies that luxury items are <em>authentic</em> (not fake), but doesn't check if they're <em>stolen</em>. 
              <strong className="text-primary"> SafeOrStolen's mobile app</strong> checks if items are <em>stolen or blacklisted</em>. 
              For complete protection when buying on Poshmark, use SafeOrStolen to verify the item isn't stolen before you purchase.
            </p>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Feature-by-Feature Comparison
            </h2>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold">SafeOrStolen</th>
                      <th className="px-6 py-4 text-center font-semibold">Poshmark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium">{row.feature}</div>
                            <div className="text-sm text-muted-foreground mt-1">{row.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.safeorstolen ? (
                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.poshmark ? (
                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              When to Use Each Service
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Use SafeOrStolen When:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Buying designer bags, watches, or jewelry on Poshmark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Verifying electronics with IMEI or serial numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Checking if any item has been reported stolen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Instant mobile verification while shopping anywhere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Avoiding legal issues from buying stolen goods</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Use Poshmark When:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Selling fashion items online with ease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Shopping for authenticated luxury items $500+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You want authenticity verification (real vs fake)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Looking for a social shopping experience</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Maximum Protection Strategy
              </h3>
              <p className="text-lg">
                For high-value luxury items on Poshmark: <strong>Use both services</strong>. Let Poshmark authenticate that your Gucci bag is real, 
                then use <strong>SafeOrStolen's mobile app to verify it's not stolen</strong>. This gives you complete protection against fakes AND theft.
              </p>
            </Card>
          </div>
        </section>

        {/* Mobile App Highlight */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="text-center space-y-6">
              <Smartphone className="h-16 w-16 mx-auto" />
              <h2 className="text-3xl font-bold">
                Verify Poshmark Purchases Instantly
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Download SafeOrStolen's mobile app to scan and verify items before buying on Poshmark. 
                Camera-based verification, offline mode, and instant results. Available for iOS and Android.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/mobile-app')}
                className="gap-2"
              >
                <Smartphone className="h-5 w-5" />
                Download Mobile App
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Does Poshmark check if items are stolen?",
                  a: "No, Poshmark's authentication service only verifies that luxury items are genuine (not counterfeit). They don't check stolen item databases. Use SafeOrStolen's mobile app to check if Poshmark purchases are stolen."
                },
                {
                  q: "Can I use SafeOrStolen for Poshmark purchases?",
                  a: "Yes! SafeOrStolen is perfect for verifying luxury items bought on Poshmark. If the item has a serial number, IMEI, or unique identifier, use our mobile app to check it before purchasing."
                },
                {
                  q: "What's the difference between authentication and verification?",
                  a: "Authentication (Poshmark) confirms an item is genuine, not fake. Verification (SafeOrStolen) confirms an item isn't stolen or blacklisted. Both are important for valuable purchases."
                },
                {
                  q: "Does SafeOrStolen have a mobile app?",
                  a: "Yes! SafeOrStolen offers iOS and Android apps with camera scanning, offline verification, and instant results. Perfect for checking items while shopping on Poshmark."
                },
                {
                  q: "What if I buy something stolen on Poshmark?",
                  a: "Even if Poshmark authenticated it as genuine, police can still seize stolen goods. You'd lose both the item and your money. Use SafeOrStolen's mobile app to prevent this."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Protect Your Poshmark Purchases Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Smart luxury shoppers use SafeOrStolen's mobile app to verify items aren't stolen before buying on Poshmark. 
              Get complete protection in seconds.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/mobile-app')} className="gap-2">
                <Smartphone className="h-5 w-5" />
                Download Mobile App
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/')}>
                Start Free Verification
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafeOrStolenVsPoshmarkPage;
