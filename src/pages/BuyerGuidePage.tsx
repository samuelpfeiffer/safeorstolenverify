import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, Search, FileText, DollarSign, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ContextualAdPlacement } from '@/components/advertising/ContextualAdPlacement';

const BuyerGuidePage = () => {
  const navigate = useNavigate();

  const buyerGuideSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Complete Buyer's Guide: How to Avoid Buying Stolen Goods",
    "description": "Comprehensive guide for buyers in the secondhand market. Learn how to verify items, spot red flags, and protect yourself from unknowingly purchasing stolen goods.",
    "totalTime": "PT10M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Verify the Serial Number",
        "text": "Always get the serial number, IMEI, or VIN before purchasing. Check it against stolen goods databases.",
        "url": "https://safeorstolen.com/buyer-guide#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Meet in Safe Public Locations",
        "text": "Meet sellers in well-lit public places like police station parking lots or busy shopping centers.",
        "url": "https://safeorstolen.com/buyer-guide#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Request Documentation",
        "text": "Ask for original receipts, proof of purchase, or warranty documents. Legitimate sellers will have these.",
        "url": "https://safeorstolen.com/buyer-guide#step3"
      },
      {
        "@type": "HowToStep",
        "name": "Check the Seller's Identity",
        "text": "Verify the seller's identity matches their story. Be wary of sellers who refuse to provide ID.",
        "url": "https://safeorstolen.com/buyer-guide#step4"
      },
      {
        "@type": "HowToStep",
        "name": "Trust Your Instincts",
        "text": "If a deal seems too good to be true, it probably is. Walk away from suspicious transactions.",
        "url": "https://safeorstolen.com/buyer-guide#step5"
      }
    ]
  };

  const redFlags = [
    {
      icon: DollarSign,
      title: "Price Too Good to Be True",
      description: "If the price is 50% or more below market value, investigate thoroughly. Stolen goods are often sold at deep discounts."
    },
    {
      icon: FileText,
      title: "No Documentation",
      description: "Seller can't provide receipts, proof of purchase, or warranty documents. Legitimate sellers keep these records."
    },
    {
      icon: AlertTriangle,
      title: "Pressure to Buy Quickly",
      description: "Seller rushes you or creates urgency. This is a common tactic to prevent due diligence."
    },
    {
      icon: Search,
      title: "Won't Allow Verification",
      description: "Seller refuses to let you check serial numbers or won't meet in public. Major red flag."
    }
  ];

  const itemSpecificTips = [
    {
      category: "Smartphones & Electronics",
      tips: [
        "Check IMEI number against blacklist databases",
        "Verify the device can be activated on your carrier",
        "Look for tampered serial numbers or missing labels",
        "Test all functions before purchasing",
        "Ask for original box and accessories"
      ]
    },
    {
      category: "Vehicles (Cars, Motorcycles)",
      tips: [
        "Run a full VIN check for theft and title history",
        "Verify VIN matches on dashboard, doorframe, and title",
        "Check for signs of VIN plate tampering",
        "Request vehicle history report (Carfax, AutoCheck)",
        "Inspect title for any red flags or irregularities"
      ]
    },
    {
      category: "Jewelry & Watches",
      tips: [
        "Get professional appraisal before purchase",
        "Check serial numbers on luxury watches",
        "Request certificates of authenticity",
        "Verify stones and metals with expert",
        "Be extremely cautious with high-value items"
      ]
    },
    {
      category: "Tools & Equipment",
      tips: [
        "Check for engraved owner marks or ID numbers",
        "Verify serial numbers on power tools",
        "Look for signs of heavy wear inconsistent with age",
        "Ask where and when item was purchased",
        "Be wary of bulk tool sales at low prices"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Complete Buyer's Guide: How to Avoid Buying Stolen Goods in 2025</title>
        <meta name="description" content="Essential guide for secondhand buyers. Learn how to verify items, spot stolen goods, and protect yourself when buying used electronics, vehicles, jewelry, and more. Free verification tools included." />
        <meta name="keywords" content="buyer guide stolen goods, how to avoid stolen goods, buying secondhand safely, verify before buying, check if item stolen, secondhand market tips, used item verification" />
        <link rel="canonical" href="https://safeorstolen.com/buyer-guide" />
        <script type="application/ld+json">{JSON.stringify(buyerGuideSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 mb-6">
              <Shield className="h-4 w-4" />
              <span className="font-semibold">For Buyers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Buyer's Guide:
              <span className="block text-blue-400 mt-2">Avoid Buying Stolen Goods</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect yourself when buying secondhand items. Learn how to verify authenticity, 
              spot red flags, and ensure you're not unknowingly purchasing stolen property.
            </p>
            
            <Button
              size="lg"
              onClick={() => navigate('/auth?tab=signup')}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Shield className="mr-2 h-5 w-5" />
              Start Verifying Items Free
            </Button>
          </div>

          {/* Why This Matters */}
          <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/30 mb-12">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Why Buyers Must Be Vigilant
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">$15.3B</div>
                  <p>Stolen property sold annually in secondhand markets</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">1 in 8</div>
                  <p>Secondhand transactions involve stolen goods unknowingly</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">Legal Risk</div>
                  <p>Buying stolen goods can result in criminal charges and property loss</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5-Step Verification Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              5-Step Buyer Protection Process
            </h2>
            
            <div className="space-y-6">
              {buyerGuideSchema.step.map((step, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700" id={`step${idx + 1}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                        {idx + 1}
                      </div>
                      {step.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg">{step.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Red Flags */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Major Red Flags to Watch For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {redFlags.map((flag, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-red-500/50 transition-all">
                  <CardContent className="p-6">
                    <flag.icon className="h-12 w-12 text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{flag.title}</h3>
                    <p className="text-gray-400">{flag.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Item-Specific Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Item-Specific Verification Tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {itemSpecificTips.map((category, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Legal Consequences */}
          <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Scale className="h-6 w-6 text-orange-500" />
                Legal Consequences of Buying Stolen Goods
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                <strong>Even if you didn't know an item was stolen,</strong> you can face serious consequences:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Property Seizure:</strong> Police can confiscate the item without refund</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Charges:</strong> Receiving stolen property is a crime in most jurisdictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Liability:</strong> Original owner may sue you for return or damages</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Financial Loss:</strong> You lose both the money you paid and the item itself</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Trust-Building Ad */}
          <div className="my-8">
            <ContextualAdPlacement context="verification" placement="banner" />
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 border-blue-500/30">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Protect Yourself with Free Verification
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Sign up for SafeOrStolen and get 2 FREE verification searches (14-day trial). 
                Check IMEIs, VINs, and serial numbers before you buy.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/auth?tab=signup')}
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8"
              >
                Get 2 Free Verifications
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BuyerGuidePage;
