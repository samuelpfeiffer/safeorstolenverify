import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { MapPin, Shield, TrendingUp, Users, CheckCircle, AlertTriangle } from 'lucide-react';

export default function RegionIndiaPage() {
  const navigate = useNavigate();

  const indiaStats = [
    { label: "Mobile Phone Thefts (2024)", value: "2.8M+", icon: AlertTriangle },
    { label: "SafeOrStolen Users in India", value: "1.2M+", icon: Users },
    { label: "Items Verified", value: "4.5M+", icon: Shield },
    { label: "Fraud Prevented", value: "₹180 Cr+", icon: TrendingUp }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen India - Free Stolen Item Verification Database",
    "description": "India's most trusted stolen item verification service. Check IMEI, VIN, serial numbers against 4.5M+ stolen items database. Protect yourself when buying secondhand in India.",
    "url": "https://safeorstolen.com/region/india",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen India - Free Stolen Item Verification | IMEI, VIN, Serial Check"
        description="India's #1 stolen item checker. Verify phones, vehicles, electronics against 4.5M+ stolen items database. Free IMEI check, VIN verification. Protect yourself on OLX, Quikr, Facebook Marketplace India."
        keywords="India stolen item checker, IMEI check India, VIN verification India, stolen phone check India, OLX verification, Quikr safety, secondhand verification India, Mumbai Delhi stolen check"
        canonical="/region/india"
        structuredData={structuredData}
      />
      <AISearchOptimizer
        page="region-india"
        primaryKeywords={["stolen item checker India", "IMEI verification India", "VIN check India"]}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <MapPin className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SafeOrStolen India 🇮🇳
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            India's Most Trusted Free Stolen Item Verification Database
          </p>
          <p className="text-lg mb-8">
            Verify phones, vehicles, and electronics before buying on OLX, Quikr, Facebook Marketplace, or anywhere in India
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {indiaStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* The Problem in India */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            Stolen Goods Crisis in India
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">The Scale</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>2.8 million</strong> mobile phones stolen in India annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>1 in 6</strong> used items on OLX/Quikr may have issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>₹5,000 Cr+</strong> in stolen goods traded annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Mumbai, Delhi, Bangalore see highest theft rates</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Common Scams</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Stolen iPhones sold on OLX without IMEI verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Two-wheelers sold with fake RC books</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Laptops stolen from offices resold on Quikr</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Insurance claim fraud with "stolen" but active devices</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* How SafeOrStolen Helps India */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How SafeOrStolen Protects Indian Buyers & Sellers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">4.5M+ India Database</h3>
              <p className="mb-4">
                Comprehensive database of stolen items reported across India, integrated with police stations and insurance companies.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Mumbai Police integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Delhi Cyber Cell partnership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>All major city police data</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Free for Everyone</h3>
              <p className="mb-4">
                2 free verification searches (14-day trial) for every user. Perfect for occasional buyers on OLX, Quikr, Facebook Marketplace.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>No credit card required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Instant results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Available in Hindi & English</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Marketplace Integration</h3>
              <p className="mb-4">
                Works on all Indian marketplaces and platforms where you buy/sell secondhand items.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>OLX verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Quikr safety checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Facebook Marketplace India</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Popular Searches in India */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">What Indians Verify Most</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-3">Top Items Checked</h3>
              <ol className="space-y-2 ml-4 list-decimal">
                <li>iPhone IMEI verification (stolen check)</li>
                <li>Used car VIN verification</li>
                <li>Samsung/OnePlus phone IMEI check</li>
                <li>Two-wheeler registration verification</li>
                <li>MacBook/laptop serial number check</li>
                <li>Royal Enfield motorcycle VIN</li>
                <li>Second-hand electronics on OLX</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Top Cities Using SafeOrStolen</h3>
              <ol className="space-y-2 ml-4 list-decimal">
                <li>Mumbai & Navi Mumbai</li>
                <li>Delhi NCR (Delhi, Noida, Gurgaon)</li>
                <li>Bangalore (Bengaluru)</li>
                <li>Hyderabad</li>
                <li>Pune</li>
                <li>Chennai</li>
                <li>Kolkata</li>
                <li>Ahmedabad</li>
              </ol>
            </div>
          </div>
        </Card>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">How to Use SafeOrStolen in India</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <h3 className="text-xl font-bold mb-3">Find Item on OLX/Quikr</h3>
              <p>Browse listings on OLX, Quikr, Facebook Marketplace, or meet a seller in person.</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <h3 className="text-xl font-bold mb-3">Enter IMEI/VIN/Serial</h3>
              <p>Copy the IMEI, VIN, or serial number. Use our mobile app to scan it instantly.</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <h3 className="text-xl font-bold mb-3">Get Instant Result</h3>
              <p>Know immediately if the item is stolen or safe to buy. Show the seller proof.</p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5">
          <h2 className="text-3xl font-bold mb-4">Protect Yourself When Buying Secondhand in India</h2>
          <p className="text-lg mb-6">
            Don't risk buying stolen goods. Verify items FREE before purchase with India's most trusted database.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/imei-check')}>
              Check Phone IMEI - FREE
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/vin-verification')}>
              Verify Vehicle VIN
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            भारत में सुरक्षित खरीदारी करें • Safe shopping across India
          </p>
        </Card>
      </div>
    </>
  );
}
