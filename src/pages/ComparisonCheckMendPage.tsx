import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, ArrowRight, Shield, Smartphone, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComparisonCheckMendPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      category: "Coverage & Data Sources",
      safeorstolen: [
        "Global stolen property database access",
        "Real-time police database integration",
        "Insurance claims database",
        "International customs seizure data",
        "Marketplace fraud reports",
        "User-reported stolen items"
      ],
      checkmend: [
        "UK-focused database",
        "Limited international coverage",
        "CheckMEND proprietary database",
        "Some police databases",
        "Insurance claims (UK only)"
      ]
    },
    {
      category: "Pricing & Value",
      safeorstolen: [
        "4 FREE verification searches",
        "No hidden fees or subscriptions",
        "Free mobile app downloads",
        "Transparent pricing",
        "Pay-per-check options",
        "Volume discounts for businesses"
      ],
      checkmend: [
        "Pay-per-check only",
        "£2.99-£6.99 per check",
        "No free trials",
        "Subscription required for multiple checks"
      ]
    },
    {
      category: "Features & Technology",
      safeorstolen: [
        "Advanced AI verification algorithms",
        "Real-time instant results (<3 seconds)",
        "Mobile app for iOS & Android",
        "Barcode & QR code scanner",
        "Browser extensions",
        "API for business integration",
        "Bulk verification upload",
        "Downloadable verification certificates"
      ],
      checkmend: [
        "Basic web interface only",
        "No mobile app",
        "Manual entry only",
        "Limited API access",
        "No bulk verification"
      ]
    },
    {
      category: "Item Types Supported",
      safeorstolen: [
        "Smartphones (IMEI)",
        "Vehicles (VIN)",
        "Electronics (Serial)",
        "Bikes & motorcycles",
        "Tools & equipment",
        "Jewelry & watches",
        "Cameras & photography gear",
        "Musical instruments",
        "Firearms & weapons"
      ],
      checkmend: [
        "Primarily mobile phones",
        "Limited other electronics",
        "UK vehicles only"
      ]
    }
  ];

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ComparisonPage",
    "name": "SafeOrStolen vs CheckMEND: Complete Comparison 2025",
    "description": "Compare SafeOrStolen and CheckMEND stolen item verification services. See features, pricing, coverage, and why SafeOrStolen is the better choice.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen",
          "description": "Global stolen item verification platform with free searches and mobile apps",
          "serviceType": "Verification Service",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "areaServed": "Worldwide"
        },
        {
          "@type": "Service",
          "name": "CheckMEND",
          "description": "UK-focused stolen phone checker",
          "serviceType": "Verification Service",
          "provider": {
            "@type": "Organization",
            "name": "CheckMEND"
          },
          "areaServed": "United Kingdom"
        }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs CheckMEND: Which is Better for Verifying Stolen Items? | 2025 Comparison"
        description="Complete comparison of SafeOrStolen vs CheckMEND stolen item checkers. Compare global coverage, pricing, features, and mobile apps. See why SafeOrStolen is the #1 choice with 4 FREE searches."
        keywords="safeorstolen vs checkmend, checkmend alternative, better than checkmend, imei checker comparison, stolen phone checker comparison, free checkmend alternative"
        canonical="/vs/checkmend"
        structuredData={comparisonSchema}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SafeOrStolen vs CheckMEND
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive comparison of the world's leading stolen item verification platforms. See why SafeOrStolen is the smarter choice for global protection.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                onClick={() => navigate('/auth?tab=signup')}
                className="bg-sos-orange hover:bg-sos-orange/90 text-white"
              >
                Try SafeOrStolen Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Verdict */}
          <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-500" />
                Our Verdict: SafeOrStolen Wins
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                <strong>SafeOrStolen is the clear winner</strong> for anyone looking for comprehensive stolen item verification. 
                While CheckMEND serves UK users well for basic phone checks, SafeOrStolen offers:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span><strong>4 FREE searches</strong> vs CheckMEND's paid-only model</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span><strong>Global coverage</strong> vs UK-only focus</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span><strong>Mobile apps</strong> for iOS & Android vs web-only</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span><strong>More item types</strong> (vehicles, bikes, tools, etc.)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Detailed Comparison */}
          <div className="space-y-8">
            {features.map((section, idx) => (
              <Card key={idx} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* SafeOrStolen */}
                    <div>
                      <h3 className="text-lg font-semibold text-sos-orange mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        SafeOrStolen
                      </h3>
                      <ul className="space-y-2">
                        {section.safeorstolen.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CheckMEND */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-4">CheckMEND</h3>
                      <ul className="space-y-2">
                        {section.checkmend.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <div className="h-5 w-5 flex-shrink-0 mt-0.5">
                              {feature.includes("Limited") || feature.includes("No ") || feature.includes("only") ? 
                                <X className="h-5 w-5 text-red-500" /> : 
                                <Check className="h-5 w-5 text-gray-500" />
                              }
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* When to Use Each */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-sos-orange/10 to-sos-orange/5 border-sos-orange/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">Choose SafeOrStolen If:</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                  <span>You want <strong>free verification searches</strong></span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                  <span>You need <strong>global coverage</strong>, not just UK</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                  <span>You want to check <strong>vehicles, bikes, tools</strong>, not just phones</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                  <span>You prefer a <strong>mobile app</strong> for on-the-go verification</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                  <span>You need <strong>instant results</strong> (under 3 seconds)</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Choose CheckMEND If:</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>You only need <strong>UK phone verification</strong></span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>You don't mind paying <strong>£2.99-£6.99 per check</strong></span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>You're comfortable with <strong>web-only access</strong></span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-sos-orange/20 to-sos-orange/10 border-sos-orange/30">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Try the Better Alternative?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get started with SafeOrStolen today and enjoy 4 FREE verification searches. 
                  No credit card required.
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate('/auth?tab=signup')}
                  className="bg-sos-orange hover:bg-sos-orange/90 text-white text-lg px-8"
                >
                  Get 4 Free Searches Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonCheckMendPage;
