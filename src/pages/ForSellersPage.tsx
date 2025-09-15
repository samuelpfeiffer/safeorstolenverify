import React from 'react';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { DefaultSEO } from '@/components/seo/DefaultSEO';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Store, Shield, CheckCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export const ForSellersPage = () => {
  const navigate = useNavigate();

  const sellerStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Seller Protection Service",
    "description": "Comprehensive verification service for sellers of second-hand goods. Protect your business, prove legitimacy, and sell faster with verified item reports.",
    "provider": {
      "@type": "Organization",
      "name": "Safe Or Stolen"
    },
    "serviceType": "Item Verification for Sellers",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "price": "9.99",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "9.99",
        "priceCurrency": "USD",
        "billingIncrement": "monthly"
      }
    }
  };

  return (
    <>
      <DefaultSEO />
      <MasterSEO
        title="SafeOrStolen for Sellers - Protect Your Business & Sell Faster"
        description="Individual sellers, retailers, and resellers: Verify your items before listing to avoid legal trouble, build buyer trust, and sell 40% faster. Protect your business with SafeOrStolen."
        keywords="sell second hand items, verify before selling, seller protection, reseller verification, retail stolen goods protection, selling legitimate items, proven authenticity, faster sales"
        structuredData={sellerStructuredData}
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
                <BreadcrumbLink href="/for-sellers">For Sellers</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sos-orange/10 border border-sos-orange/20 rounded-full mb-6">
              <Store className="h-5 w-5 text-sos-orange" />
              <span className="text-sos-orange font-semibold">For All Types of Sellers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sell Without Risk, Sell With Confidence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From individual sellers to major retailers—protect yourself from legal liability while building buyer trust. 
              Verified items sell 40% faster and command higher prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-8"
                onClick={() => navigate('/dashboard')}
              >
                <Shield className="mr-2 h-5 w-5" />
                Start Verifying Items
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-sos-orange text-sos-orange hover:bg-sos-orange hover:text-white"
                onClick={() => navigate('/subscriptions')}
              >
                View Pricing Plans
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-sos-orange/20 bg-gradient-to-br from-sos-orange/5 to-transparent">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Legal Protection</h3>
                <p className="text-muted-foreground">
                  Avoid liability for unknowingly selling stolen goods. Our verification provides legal documentation 
                  that you performed due diligence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sos-orange/20 bg-gradient-to-br from-sos-orange/5 to-transparent">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sell 40% Faster</h3>
                <p className="text-muted-foreground">
                  Verified items build instant buyer confidence and sell significantly faster than unverified listings. 
                  Reduce time on market and increase turnover.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sos-orange/20 bg-gradient-to-br from-sos-orange/5 to-transparent">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Prices</h3>
                <p className="text-muted-foreground">
                  Verified legitimate items command premium prices. Buyers pay more for peace of mind and 
                  proven authenticity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Seller Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect for Every Type of Seller</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Individual Sellers",
                  description: "Casual sellers on marketplaces like eBay, Facebook, Craigslist",
                  benefits: ["Personal protection", "Build reputation", "Faster sales"]
                },
                {
                  title: "Resellers & Flippers",
                  description: "Professional resellers who buy and flip items for profit",
                  benefits: ["Inventory verification", "Risk mitigation", "Bulk processing"]
                },
                {
                  title: "Retail Stores",
                  description: "Brick-and-mortar stores selling second-hand merchandise",
                  benefits: ["Business compliance", "Customer trust", "Legal protection"]
                },
                {
                  title: "Online Retailers",
                  description: "E-commerce sellers with online second-hand businesses",
                  benefits: ["API integration", "Automated checks", "Scale operations"]
                }
              ].map((type, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-sos-orange" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How It Works for Sellers */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Simple 3-Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Verify Before Listing",
                  description: "Check IMEI, VIN, or serial numbers of items before creating listings",
                  icon: <Shield className="h-8 w-8" />
                },
                {
                  step: 2,
                  title: "Get Verification Report",
                  description: "Receive instant results with detailed verification documentation",
                  icon: <CheckCircle className="h-8 w-8" />
                },
                {
                  step: 3,
                  title: "Share with Buyers",
                  description: "Include verification status in listings to build instant trust",
                  icon: <Users className="h-8 w-8" />
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sos-orange/10 border-2 border-sos-orange rounded-full mb-4">
                    <span className="text-sos-orange">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Step {item.step}: {item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Risk Protection */}
          <section className="mb-16">
            <Card className="max-w-4xl mx-auto border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Protect Yourself from These Real Risks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Legal Liability</h4>
                    <p className="text-muted-foreground mb-4">
                      Unknowingly selling stolen goods can result in criminal charges, even if you didn't know the items were stolen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Business Reputation</h4>
                    <p className="text-muted-foreground mb-4">
                      One incident of selling stolen merchandise can destroy years of reputation building and customer trust.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Financial Loss</h4>
                    <p className="text-muted-foreground mb-4">
                      Stolen items may be confiscated by law enforcement, resulting in total loss of investment and potential fines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-500">Platform Bans</h4>
                    <p className="text-muted-foreground mb-4">
                      Selling stolen goods can result in permanent bans from selling platforms like eBay, Amazon, or Facebook Marketplace.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  type: "eBay Seller",
                  story: "\"Verification reports helped me sell my electronics 50% faster. Buyers love the peace of mind!\"",
                  metric: "50% faster sales"
                },
                {
                  name: "Mike's Electronics",
                  type: "Retail Store",
                  story: "\"We avoid all liability issues now. Every item we sell has been verified legitimate.\"",
                  metric: "Zero liability issues"
                },
                {
                  name: "Tech Resellers LLC",
                  type: "Professional Reseller",
                  story: "\"The API integration streamlined our entire operation. We process 1000+ items monthly.\"",
                  metric: "1000+ items/month"
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
                        <p className="text-sm font-semibold text-sos-orange">{story.metric}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="max-w-3xl mx-auto border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-transparent">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Start Selling with Confidence Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of sellers who protect their business and build buyer trust with SafeOrStolen verification.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button 
                    size="lg" 
                    className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-8"
                    onClick={() => navigate('/dashboard')}
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-sos-orange text-sos-orange hover:bg-sos-orange hover:text-white"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Sales Team
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  4 free verifications included • No setup fees • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default ForSellersPage;