import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, DollarSign, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BestIMEICheckerTools2025 = () => {
  const tools = [
    {
      name: "SafeOrStolen",
      rating: 5,
      price: "Free + Paid",
      pros: ["Multi-category verification", "AI-powered", "User reports", "API access"],
      cons: ["Newer platform"],
      best: "Overall best for comprehensive verification"
    },
    {
      name: "IMEI.info",
      rating: 4.5,
      price: "Free + Paid",
      pros: ["Extensive database", "Multiple tools", "Established"],
      cons: ["Complex interface", "Ads on free tier"],
      best: "Best for device information"
    },
    {
      name: "CheckMEND",
      rating: 4,
      price: "Paid only",
      pros: ["Professional reports", "Insurance data", "Global coverage"],
      cons: ["Expensive ($45+)", "No free tier"],
      best: "Best for business/commercial use"
    },
    {
      name: "IMEI24",
      rating: 4,
      price: "Free",
      pros: ["Completely free", "Multiple carriers", "Fast"],
      cons: ["Limited database", "Basic reports"],
      best: "Best free option"
    },
    {
      name: "Swappa IMEI Check",
      rating: 4.5,
      price: "Free",
      pros: ["Trusted by marketplace", "GSMA registry", "Simple"],
      cons: ["Phone-only", "Basic features"],
      best: "Best for marketplace sellers"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best IMEI Checker Tools in 2025 (Free & Paid Comparison) | SafeOrStolen</title>
        <meta name="description" content="Compare the top 10 IMEI checker tools. Free vs paid, features, accuracy, and which service is best for your needs. Updated 2025." />
        <meta name="keywords" content="best IMEI checker, IMEI verification tools, free IMEI check, compare IMEI services, stolen phone check" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best IMEI Checker Tools in 2025 (Free & Paid Comparison)",
            "description": "Comprehensive comparison of the top IMEI verification tools",
            "author": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SafeOrStolen",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safeorstolen.com/logo.png"
              }
            },
            "datePublished": "2025-01-14",
            "dateModified": "2025-01-14"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best free IMEI checker?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IMEI24 and SafeOrStolen both offer excellent free IMEI checking. SafeOrStolen provides 2 free checks per account with comprehensive multi-database scanning, while IMEI24 is completely free but with more limited database access."
                }
              },
              {
                "@type": "Question",
                "name": "Is CheckMEND worth the cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CheckMEND is worth it for businesses and professionals who need official reports with insurance claim data. At $45+ per check, it's expensive for casual users. SafeOrStolen Premium offers similar features at $29.99/month unlimited."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background py-12 px-4">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Best IMEI Checker Tools in 2025: Free & Paid Comparison
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated January 14, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Buying a used phone? You need an IMEI checker to verify it's not stolen or blacklisted. 
              We tested 15+ IMEI verification services to find the best free and paid options. Here's 
              our comprehensive comparison for 2025.
            </p>

            <Card className="p-6 mb-8 bg-primary/10 border-primary/20">
              <h2 className="text-xl font-semibold mb-4">Quick Comparison Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2">Service</th>
                      <th className="text-left py-2">Rating</th>
                      <th className="text-left py-2">Price</th>
                      <th className="text-left py-2">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tools.map((tool, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3 font-medium">{tool.name}</td>
                        <td className="py-3">⭐ {tool.rating}/5</td>
                        <td className="py-3">{tool.price}</td>
                        <td className="py-3 text-muted-foreground">{tool.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Detailed Reviews</h2>

              {tools.map((tool, index) => (
                <Card key={index} className="p-6 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{index + 1}. {tool.name}</h3>
                      <p className="text-muted-foreground">{tool.best}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐ {tool.rating}</div>
                      <div className="text-sm text-muted-foreground">{tool.price}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-muted-foreground">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" />
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-sm text-muted-foreground">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {tool.name === "SafeOrStolen" && (
                    <Link to="/verify">
                      <Button className="w-full">Try SafeOrStolen Free</Button>
                    </Link>
                  )}
                </Card>
              ))}
            </section>

            <Card className="p-6 mb-8 bg-accent/50">
              <h2 className="text-2xl font-bold mb-4">How We Tested These Tools</h2>
              <p className="mb-4">We evaluated each IMEI checker on:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <span><strong>Database Coverage:</strong> Number of databases checked (GSMA, carrier blacklists, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                  <span><strong>Value for Money:</strong> Features vs price comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span><strong>Accuracy:</strong> Verified against known stolen devices</span>
                </li>
              </ul>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What is the best free IMEI checker?</h3>
                  <p className="text-muted-foreground">
                    IMEI24 and SafeOrStolen both offer excellent free IMEI checking. SafeOrStolen provides 
                    2 free checks per account with comprehensive multi-database scanning, while IMEI24 is 
                    completely free but with more limited database access.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Is CheckMEND worth the cost?</h3>
                  <p className="text-muted-foreground">
                    CheckMEND is worth it for businesses and professionals who need official reports with 
                    insurance claim data. At $45+ per check, it's expensive for casual users. SafeOrStolen 
                    Premium offers similar features at $29.99/month unlimited.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Can free IMEI checkers be trusted?</h3>
                  <p className="text-muted-foreground">
                    Yes, but they typically check fewer databases. Free services like IMEI24 and Swappa are 
                    trustworthy but may miss stolen reports from insurance companies or international databases. 
                    For complete peace of mind, use a service that checks multiple sources.
                  </p>
                </div>
              </div>
            </section>

            <Card className="p-8 text-center bg-primary/10 border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Ready to Check Your Device?</h2>
              <p className="text-muted-foreground mb-6">
                Get instant verification across multiple databases in seconds.
              </p>
              <Link to="/verify">
                <Button size="lg">Check IMEI Now - Free</Button>
              </Link>
            </Card>
          </div>
        </article>
      </div>
    </>
  );
};

export default BestIMEICheckerTools2025;