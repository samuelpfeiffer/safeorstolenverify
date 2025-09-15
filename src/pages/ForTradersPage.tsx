import React from 'react';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { DefaultSEO } from '@/components/seo/DefaultSEO';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, RefreshCw, Shield, CheckCircle, Users, Heart, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export const ForTradersPage = () => {
  const navigate = useNavigate();

  const traderStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Trading Verification Service",
    "description": "Secure trading platform verification for collectors, enthusiasts, and barter systems. Ensure fair exchanges with verified item authenticity and legitimacy checks.",
    "provider": {
      "@type": "Organization",
      "name": "Safe Or Stolen"
    },
    "serviceType": "Item Verification for Traders",
    "areaServed": "Worldwide"
  };

  return (
    <>
      <DefaultSEO />
      <MasterSEO
        title="SafeOrStolen for Traders - Secure Trading & Fair Exchanges"
        description="Collectors, enthusiasts, and barter systems: Ensure fair trades with verified item authenticity. Build community trust and protect all parties in trading exchanges."
        keywords="trading second hand items, collector trading, barter system verification, trading community trust, fair exchanges, verified trades, collector protection"
        structuredData={traderStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/for-traders">For Traders</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <RefreshCw className="h-5 w-5 text-purple-500" />
              <span className="text-purple-500 font-semibold">For Trading Communities</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Trade with Trust, Exchange with Confidence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Collectors, enthusiasts, and barter communities—ensure fair exchanges with verified authenticity. 
              Build trust in your trading community and protect all parties involved in exchanges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-purple-500 hover:bg-purple-500/90 text-white font-semibold px-8"
                onClick={() => navigate('/dashboard')}
              >
                <Shield className="mr-2 h-5 w-5" />
                Start Verified Trading
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                onClick={() => navigate('/community')}
              >
                Join Trading Community
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fair Exchanges</h3>
                <p className="text-muted-foreground">
                  Verify both sides of trades to ensure fair exchanges. No more disputes over item authenticity 
                  or legitimacy after trades are completed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Trust</h3>
                <p className="text-muted-foreground">
                  Build reputation in trading communities with verified transactions. Trusted traders get access 
                  to premium exchanges and exclusive items.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Protected Passion</h3>
                <p className="text-muted-foreground">
                  Protect your collecting passion from fraudulent items. Ensure every trade adds legitimate 
                  value to your collection, not stolen goods.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trading Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect for Every Trading Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Collectors",
                  description: "Trading cards, comics, memorabilia, and collectible items",
                  examples: ["Pokemon cards", "Vintage electronics", "Sports memorabilia", "Rare books"]
                },
                {
                  title: "Electronics Enthusiasts",
                  description: "Trading and swapping electronic devices and components",
                  examples: ["Smartphones", "Gaming consoles", "Audio equipment", "Computer parts"]
                },
                {
                  title: "Hobbyist Communities",
                  description: "Specialized hobby groups with trading components",
                  examples: ["Model trains", "Camera equipment", "Musical instruments", "Art supplies"]
                },
                {
                  title: "Barter Networks",
                  description: "Local and online barter systems for goods exchange",
                  examples: ["Local swap meets", "Online barter sites", "Community exchanges", "Skill trades"]
                }
              ].map((type, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="space-y-1">
                      {type.examples.map((example, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Star className="h-3 w-3 text-purple-500" />
                          <span className="text-muted-foreground">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How Trading Verification Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How Verified Trading Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Pre-Trade Verification",
                  description: "Both parties verify their items before proposing trades",
                  icon: <Shield className="h-8 w-8" />
                },
                {
                  step: 2,
                  title: "Share Verification",
                  description: "Exchange verification reports to confirm item legitimacy",
                  icon: <CheckCircle className="h-8 w-8" />
                },
                {
                  step: 3,
                  title: "Confident Exchange",
                  description: "Complete the trade knowing both items are verified authentic",
                  icon: <RefreshCw className="h-8 w-8" />
                },
                {
                  step: 4,
                  title: "Build Reputation",
                  description: "Earn community trust through verified trading history",
                  icon: <Star className="h-8 w-8" />
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 border-2 border-purple-500 rounded-full mb-4">
                    <span className="text-purple-500">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trading Risks */}
          <section className="mb-16">
            <Card className="max-w-4xl mx-auto border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Protect Your Trades from These Common Risks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Stolen Goods</h4>
                    <p className="text-muted-foreground mb-4">
                      Unknowingly trading for stolen items can result in legal trouble and loss of your legitimate items 
                      when law enforcement recovers stolen property.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Counterfeit Items</h4>
                    <p className="text-muted-foreground mb-4">
                      Fake collectibles, reproductions passed as originals, and counterfeit electronics can 
                      significantly devalue your collection.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Community Reputation</h4>
                    <p className="text-muted-foreground mb-4">
                      Being associated with questionable trades can damage your reputation in collecting communities 
                      and limit future trading opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Financial Loss</h4>
                    <p className="text-muted-foreground mb-4">
                      Trading legitimate items for stolen or fake goods results in immediate financial loss and 
                      potential legal complications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Community Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Build Trust in Your Trading Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Verified Trader Badge</h3>
                  <p className="text-muted-foreground">
                    Earn a verified trader badge to show your commitment to legitimate trading practices 
                    and build trust with other community members.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Trading History</h3>
                  <p className="text-muted-foreground">
                    Maintain a verified trading history that showcases your reliability and attracts 
                    premium trading partners and exclusive opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Instant Verification</h3>
                  <p className="text-muted-foreground">
                    Get instant verification results during trade negotiations, allowing for real-time 
                    confidence in your trading decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Trader Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex K.",
                  type: "Pokemon Card Collector",
                  story: "\"Verification helped me avoid a $500 fake Charizard trade. Now I verify everything before trading!\"",
                  metric: "Avoided $500 loss"
                },
                {
                  name: "RetroGaming Community",
                  type: "Gaming Enthusiasts",
                  story: "\"Our whole community uses verification now. Trust levels are at an all-time high.\"",
                  metric: "200+ verified traders"
                },
                {
                  name: "Sarah's Collectibles",
                  type: "Vintage Trader",
                  story: "\"My verified trader badge gets me access to exclusive trades other collectors won't share.\"",
                  metric: "Premium trade access"
                }
              ].map((story, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 italic">{story.story}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{story.name}</p>
                        <p className="text-sm text-muted-foreground">{story.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-purple-500">{story.metric}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="max-w-3xl mx-auto border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-transparent">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Start Verified Trading Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join trading communities that prioritize trust, authenticity, and fair exchanges. 
                  Protect your passion and build lasting trading relationships.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button 
                    size="lg" 
                    className="bg-purple-500 hover:bg-purple-500/90 text-white font-semibold px-8"
                    onClick={() => navigate('/dashboard')}
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Start Trading Safely
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                    onClick={() => navigate('/community')}
                  >
                    Find Trading Groups
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  4 free verifications included • Join verified trader community • Build lasting reputation
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default ForTradersPage;