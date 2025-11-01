import { ArrowRight, Check, X, Shield, Smartphone, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageSEO } from "@/components/seo/PageSEO";
import { useNavigate } from "react-router-dom";

const SafeOrStolenVsMercariPage = () => {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Mobile App Verification",
      safeorstolen: true,
      mercari: false,
      description: "Instant on-the-go verification with camera scanning"
    },
    {
      feature: "IMEI/VIN Checks",
      safeorstolen: true,
      mercari: false,
      description: "Comprehensive database access for all item types"
    },
    {
      feature: "Stolen Item Database",
      safeorstolen: true,
      mercari: false,
      description: "Check against millions of stolen item records"
    },
    {
      feature: "Free Basic Verification",
      safeorstolen: true,
      mercari: true,
      description: "Free listing, but no verification tools"
    },
    {
      feature: "Seller Protection", 
      safeorstolen: true,
      mercari: true,
      description: "Both offer seller protections, but different approaches"
    },
    {
      feature: "Buyer Protection",
      safeorstolen: true,
      mercari: true,
      description: "Mercari offers refunds, SafeOrStolen prevents issues"
    },
    {
      feature: "Offline Verification",
      safeorstolen: true,
      mercari: false,
      description: "Check items without internet on mobile app"
    },
    {
      feature: "Law Enforcement Integration",
      safeorstolen: true,
      mercari: false,
      description: "Direct connection to police databases"
    },
    {
      feature: "Real-time Alerts",
      safeorstolen: true,
      mercari: false,
      description: "Get notified if an item is reported stolen"
    },
    {
      feature: "Marketplace Platform",
      safeorstolen: false,
      mercari: true,
      description: "Mercari is a selling platform, not a verification service"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ComparisonPage",
    "name": "SafeOrStolen vs Mercari: Complete Comparison 2025",
    "description": "Comprehensive comparison of SafeOrStolen and Mercari. Why SafeOrStolen's mobile app provides better buyer protection through stolen item verification.",
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
        title="SafeOrStolen vs Mercari: Which Platform Protects Buyers Better? | 2025 Comparison"
        description="Compare SafeOrStolen's stolen item verification mobile app with Mercari. Discover why dedicated verification protects buyers better than marketplace protections alone."
        keywords="safeorstolen vs mercari, mercari alternative, mercari buyer protection, stolen item verification, mercari safety, mobile verification app"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Unbiased Comparison</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              SafeOrStolen vs Mercari:<br />
              <span className="text-primary">Which Platform Protects Buyers Better?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mercari is a popular selling platform, but SafeOrStolen's mobile app offers dedicated stolen item verification that goes beyond marketplace protections. Here's the complete comparison.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/mobile-app')} className="gap-2">
                <Smartphone className="h-5 w-5" />
                Try SafeOrStolen Mobile App
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
              The Verdict
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Mercari</strong> is excellent for <em>selling items</em>, but it's not a verification service. 
              <strong className="text-primary"> SafeOrStolen's mobile app</strong> specializes in <em>preventing fraud before it happens</em> by checking items against stolen databases. 
              Use SafeOrStolen to verify items you're buying on Mercari (or any other platform) for complete protection.
            </p>
          </Card>
        </section>

        {/* Detailed Comparison Table */}
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
                      <th className="px-6 py-4 text-center font-semibold">Mercari</th>
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
                          {row.mercari ? (
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
              When to Use Each Platform
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Use SafeOrStolen When:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Buying items on Mercari, Facebook, Craigslist, or any platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You need instant mobile verification while shopping in-store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Checking IMEI, VIN, or serial numbers for theft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You want offline verification without internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Preventing legal issues from buying stolen goods</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Use Mercari When:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Selling items online with built-in shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Browsing deals on fashion, electronics, home goods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You need payment protection and shipping labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Looking for a user-friendly selling experience</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Pro Tip: Use Both Together
              </h3>
              <p className="text-lg">
                Smart buyers use <strong>SafeOrStolen's mobile app to verify items</strong> they find on Mercari before purchasing. 
                This combination gives you the convenience of Mercari's marketplace with the security of professional stolen item verification.
              </p>
            </Card>
          </div>
        </section>

        {/* Mobile App CTA */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="text-center space-y-6">
              <Smartphone className="h-16 w-16 mx-auto" />
              <h2 className="text-3xl font-bold">
                Verify Mercari Purchases Instantly
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Download the SafeOrStolen mobile app and check items before you buy on Mercari or any other platform. 
                Available for iOS and Android with offline verification.
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

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Does Mercari verify that items aren't stolen?",
                  a: "No, Mercari does not verify items against stolen databases. They focus on payment protection and shipping. Use SafeOrStolen's mobile app to check items before purchasing on Mercari."
                },
                {
                  q: "Can I use SafeOrStolen to verify Mercari purchases?",
                  a: "Yes! SafeOrStolen is perfect for verifying items you're buying on Mercari. Use our mobile app to scan IMEI, VIN, or serial numbers before completing your purchase."
                },
                {
                  q: "Which is better for buyers: SafeOrStolen or Mercari?",
                  a: "They serve different purposes. Mercari is a marketplace platform for buying/selling. SafeOrStolen is a verification service. Use both together for maximum protection when buying on Mercari."
                },
                {
                  q: "Does SafeOrStolen have a mobile app?",
                  a: "Yes! SafeOrStolen has mobile apps for iOS and Android with camera scanning, offline verification, and instant results. Perfect for on-the-go checking while shopping."
                },
                {
                  q: "What if I buy something stolen on Mercari?",
                  a: "If you unknowingly buy stolen goods, you could lose the item and your money when police recover it. Use SafeOrStolen's mobile app BEFORE purchasing to avoid this situation."
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
              Start Protecting Your Mercari Purchases Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of smart buyers using SafeOrStolen's mobile app to verify items before purchasing on Mercari and other platforms.
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

export default SafeOrStolenVsMercariPage;
