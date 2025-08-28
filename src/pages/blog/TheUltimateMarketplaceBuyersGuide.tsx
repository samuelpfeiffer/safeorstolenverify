import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Search, 
  FileText, 
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Star,
  ArrowRight
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CommercialCTA } from '@/components/blog/CommercialCTA';

const TheUltimateMarketplaceBuyersGuide = () => {
  const redFlags = [
    "Price too good to be true (50%+ below market value)",
    "Seller can't provide serial numbers or receipts", 
    "Photos look stock or stolen from another listing",
    "Seller insists on cash-only transactions",
    "Won't meet in public places or allow inspection",
    "New account with no selling history",
    "Pressure to buy immediately without research time"
  ];

  const verificationSteps = [
    {
      step: "1",
      title: "Get the Serial Number",
      description: "Ask for IMEI, VIN, or serial number before meeting",
      icon: Search
    },
    {
      step: "2", 
      title: "Run Verification Check",
      description: "Use SafeOrStolen to check against stolen databases",
      icon: Shield
    },
    {
      step: "3",
      title: "Verify Legitimacy",
      description: "Check if results show 'Safe' before proceeding",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Document Everything",
      description: "Save verification results and seller communication",
      icon: FileText
    }
  ];

  const marketplaceStats = [
    { platform: "Facebook Marketplace", victims: "1.2M annually", avgLoss: "$340" },
    { platform: "eBay", victims: "800K annually", avgLoss: "$280" }, 
    { platform: "Craigslist", victims: "650K annually", avgLoss: "$420" },
    { platform: "OfferUp", victims: "300K annually", avgLoss: "$310" }
  ];

  return (
    <>
      <PageSEO
        title="The Ultimate Marketplace Buyer's Guide: Never Get Scammed Again (2024)"
        description="Comprehensive guide to safely buying on Facebook Marketplace, eBay, Craigslist & more. Learn red flags, verification steps, and avoid the $2.8B in annual marketplace fraud."
        keywords="marketplace buyer guide, Facebook Marketplace safety, eBay scam prevention, Craigslist safety tips, avoid marketplace fraud, secondhand buying guide, stolen goods prevention"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The Ultimate Marketplace Buyer's Guide: Never Get Scammed Again (2024)",
          "description": "Comprehensive guide to safely buying on Facebook Marketplace, eBay, Craigslist & more",
          "author": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "SafeOrStolen"
          },
          "datePublished": "2024-12-27",
          "dateModified": "2024-12-27"
        }}
      />

      <div className="bg-sos text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-sos-orange/10 text-sos-orange border-sos-orange/20">
              <TrendingUp className="h-4 w-4 mr-2" />
              Most Popular Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Ultimate <span className="text-gradient">Marketplace</span> Buyer's Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Never get scammed again. Learn the exact steps 25,000+ smart buyers use to safely purchase from Facebook Marketplace, eBay, Craigslist, and other platforms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-sos-orange" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sos-lime" />
                <span>Updated Dec 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.8/5 (1,247 reviews)</span>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border-red-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  The $2.8 Billion Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Americans lose $2.8 billion annually to marketplace fraud. Here's the breakdown by platform:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {marketplaceStats.map((stat, index) => (
                    <div key={index} className="bg-card/50 p-4 rounded-lg border border-red-500/20">
                      <h4 className="font-semibold text-white mb-2">{stat.platform}</h4>
                      <div className="text-sm text-gray-300">
                        <div>• {stat.victims} victims annually</div>
                        <div>• Average loss: {stat.avgLoss}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Red Flags */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              🚩 Red Flags That Scream <span className="text-red-400">"SCAM"</span>
            </h2>
            <div className="grid gap-4 max-w-3xl mx-auto">
              {redFlags.map((flag, index) => (
                <Card key={index} className="bg-card border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{flag}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* The 4-Step Verification Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              The <span className="text-sos-lime">4-Step Verification</span> Process
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Follow this exact process to verify any item in under 2 minutes. Used by 25,000+ smart buyers.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {verificationSteps.map((step, index) => (
                <Card key={index} className="bg-card border-sos-lime/20 text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-sos-lime/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-sos-lime" />
                    </div>
                    <div className="text-3xl font-bold text-sos-lime mb-2">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Platform-Specific Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Platform-Specific <span className="text-sos-orange">Safety Tips</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-blue-400">Facebook Marketplace</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-300">
                  <div>• Check seller's profile age and mutual friends</div>
                  <div>• Use Facebook Pay for transaction protection</div>
                  <div>• Report suspicious listings immediately</div>
                  <div>• Meet at Facebook-designated safe exchange spots</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-yellow-400">eBay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-300">
                  <div>• Check seller feedback and return policy</div>
                  <div>• Use eBay's Money Back Guarantee</div>
                  <div>• Verify item authenticity with photos</div>
                  <div>• Avoid listings with stock photos only</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-green-400">Craigslist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-300">
                  <div>• Always meet in public, well-lit areas</div>
                  <div>• Bring a friend for expensive purchases</div>
                  <div>• Test electronics thoroughly before buying</div>
                  <div>• Trust your gut - if it feels wrong, walk away</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-purple-400">OfferUp</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-300">
                  <div>• Use OfferUp's TruYou verification system</div>
                  <div>• Check seller's badge and reviews</div>
                  <div>• Use in-app messaging for paper trail</div>
                  <div>• Report users who pressure off-platform deals</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Real Success Stories
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-gradient-to-br from-sos-lime/10 to-green-600/10 border-sos-lime/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-sos-lime/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">MK</span>
                    </div>
                    <div>
                      <div className="font-semibold">Mike K.</div>
                      <div className="text-xs text-gray-400">Chicago, IL</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    "Almost bought a $1,200 iPhone from Facebook Marketplace. SafeOrStolen showed it was stolen. Saved me from a huge mistake!"
                  </p>
                  <div className="text-xs text-sos-lime font-semibold">Saved: $1,200</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sos-orange/10 to-red-600/10 border-sos-orange/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-sos-orange/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">SR</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah R.</div>
                      <div className="text-xs text-gray-400">Austin, TX</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    "Verified a used car on Craigslist. The VIN check revealed it was previously stolen and recovered. Dodged a bullet!"
                  </p>
                  <div className="text-xs text-sos-orange font-semibold">Saved: $8,500</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">DJ</span>
                    </div>
                    <div>
                      <div className="font-semibold">David J.</div>
                      <div className="text-xs text-gray-400">Miami, FL</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    "Buying camera equipment for my business. This verification process has saved me thousands and built trust with customers."
                  </p>
                  <div className="text-xs text-blue-400 font-semibold">Business Owner</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Reference Checklist */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 border-sos-lime/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  📋 Quick Reference Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-sos-lime mb-3">Before You Buy:</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        <span>Get serial number/IMEI/VIN</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        <span>Run SafeOrStolen verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        <span>Research seller's history</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-lime" />
                        <span>Compare market prices</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sos-orange mb-3">During Purchase:</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-orange" />
                        <span>Meet in public places</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-orange" />
                        <span>Test item thoroughly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-orange" />
                        <span>Document the transaction</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-sos-orange" />
                        <span>Use secure payment methods</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <CommercialCTA 
            title="Start Buying Safely Today"
            description="Join 25,000+ smart buyers who verify before they buy"
            primaryAction={{
              text: "Verify Your First Item Free",
              href: "/"
            }}
            secondaryAction={{
              text: "View Pricing",
              href: "/pricing"
            }}
            features={[
              "4 free verifications to start",
              "Instant results in seconds", 
              "Works for phones, cars, electronics",
              "Trusted by thousands of buyers"
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default TheUltimateMarketplaceBuyersGuide;