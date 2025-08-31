
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { OptimizedHero } from '@/components/core/OptimizedHero';
import { SpeedOptimizer } from '@/components/optimization/SpeedOptimizer';
import { ConversionOptimizer } from '@/components/optimization/ConversionOptimizer';
import { CredibilityBooster } from '@/components/optimization/CredibilityBooster';
import { SEOBooster } from '@/components/optimization/SEOBooster';


const HomePage = () => {
  const navigate = useNavigate();
  const homePageStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen - Stolen Item Checker",
      "alternateName": "Safe or Stolen",
      "url": "https://safeorstolen.com",
      "description": "Free online stolen item checker tool to verify IMEI, VIN, and serial numbers against police databases before buying secondhand items",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://safeorstolen.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "SafeOrStolen Stolen Item Checker",
      "description": "Free online stolen item checker - verify IMEI, serial numbers, and VIN against stolen goods databases instantly",
      "url": "https://safeorstolen.com",
      "applicationCategory": "SecurityApplication",
      "applicationSubCategory": "Verification Tool",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Chrome, Firefox, Safari, Edge",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free stolen item checking service"
      },
      "featureList": [
        "Electronics verification (IMEI, serial numbers)",
        "Vehicle VIN stolen check", 
        "Firearms serial number lookup",
        "Art & collectibles verification",
        "Jewelry & watches authentication",
        "Tools & machinery checks",
        "Gaming equipment verification",
        "Real-time database searches",
        "Enterprise API integration",
        "Bulk verification processing"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stolen Item Checker Service",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "description": "Professional stolen item checking service for consumers buying secondhand goods",
      "serviceType": "Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ];

  return (
    <>
      <SpeedOptimizer />
      <SEOBooster page="home" />
      
      <div className="min-h-screen">
        <OptimizedHero />
        
        {/* Core Value Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Stop Buying Stolen Goods
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                AI-powered verification in under 3 seconds. 99.9% accuracy across 150+ countries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <div className="bg-sos-orange/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-sos-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                <p className="text-muted-foreground">Get verification results in under 3 seconds with our AI technology</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <div className="bg-sos-lime/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-sos-lime" />
                </div>
                <h3 className="text-xl font-bold mb-2">99.9% Accurate</h3>
                <p className="text-muted-foreground">Industry-leading accuracy powered by global databases and AI</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
                <div className="bg-blue-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">10M+ Users</h3>
                <p className="text-muted-foreground">Trusted by millions worldwide to verify items safely</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-sos-orange hover:bg-sos-orange/90 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/verify')}
              >
                Start Free Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="p-6 border-2 rounded-xl bg-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <div className="text-4xl font-bold mb-4">$0</div>
                  <p className="text-muted-foreground mb-6">Perfect for occasional checks</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>4 free verifications/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic verification reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Search history</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Get Started Free</Button>
              </div>
              
              {/* Premium Plan */}
              <div className="p-6 border-2 border-sos-lime rounded-xl bg-white relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-sos-lime text-sos-dark px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Smart Buyer</h3>
                  <div className="text-4xl font-bold mb-4">$7.99</div>
                  <p className="text-muted-foreground mb-6">For regular buyers</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sos-lime" />
                    <span>Unlimited verifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sos-lime" />
                    <span>Real-time database checks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sos-lime" />
                    <span>Advanced reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sos-lime" />
                    <span>7-day free trial</span>
                  </li>
                </ul>
                <Button className="w-full bg-sos-lime text-sos-dark hover:bg-sos-lime/90">
                  Start Free Trial
                </Button>
              </div>
              
              {/* Enterprise Plan */}
              <div className="p-6 border-2 rounded-xl bg-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Business Pro</h3>
                  <div className="text-4xl font-bold mb-4">$49.95</div>
                  <p className="text-muted-foreground mb-6">For businesses</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Everything in Smart Buyer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>White-label solution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Trusted by Millions Worldwide</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sos-orange">10M+</div>
                  <div className="text-sm text-muted-foreground">Verifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sos-lime">150+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">99.9%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">$50M+</div>
                  <div className="text-sm text-muted-foreground">Fraud Prevented</div>
                </div>
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <CredibilityBooster />
          </div>
        </section>

        {/* Conversion Optimization Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <ConversionOptimizer />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
