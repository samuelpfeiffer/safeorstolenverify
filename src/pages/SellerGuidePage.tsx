import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Award, TrendingUp, Users, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SellerGuidePage = () => {
  const navigate = useNavigate();

  const sellerBenefits = [
    {
      icon: TrendingUp,
      title: "Sell Faster",
      description: "Verified items sell 3x faster than unverified ones. Build buyer confidence instantly."
    },
    {
      icon: Award,
      title: "Higher Prices",
      description: "Get 15-25% more for verified items. Buyers pay premium for peace of mind."
    },
    {
      icon: Shield,
      title: "Avoid Disputes",
      description: "Prevent chargebacks, refunds, and legal issues. Proof of legitimacy protects you."
    },
    {
      icon: Users,
      title: "Build Trust",
      description: "Stand out from competitors. Verification badges attract serious buyers."
    }
  ];

  const sellerGuideSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Seller's Guide: How to Prove Your Items Are Legitimate",
    "description": "Complete guide for sellers in the secondhand market. Learn how to verify your items, build buyer trust, and sell faster with verification certificates.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Get Verification Certificate",
        "text": "Verify your item with SafeOrStolen to get an official certificate proving it's not stolen."
      },
      {
        "@type": "HowToStep",
        "name": "Include Certificate in Listing",
        "text": "Add the verification certificate to your marketplace listing. This builds instant trust."
      },
      {
        "@type": "HowToStep",
        "name": "Highlight in Title",
        "text": "Use 'Verified Not Stolen' in your listing title to attract more views."
      },
      {
        "@type": "HowToStep",
        "name": "Show Documentation",
        "text": "Provide original receipts and proof of purchase alongside verification."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Seller's Guide: Prove Your Items Are Legitimate & Sell Faster in 2025</title>
        <meta name="description" content="Essential guide for secondhand sellers. Learn how to verify your items, build buyer trust, and sell 3x faster with verification certificates. Protect yourself from false accusations." />
        <meta name="keywords" content="seller guide secondhand, prove item legitimate, verification certificate seller, sell faster verified items, secondhand marketplace seller tips, avoid selling stolen goods" />
        {/* Canonical tag handled by PageSEO component to prevent duplicates */}
        <script type="application/ld+json">{JSON.stringify(sellerGuideSchema)}</script>
      </Helmet>
      
      <PageSEO
        title="Seller's Guide: Prove Your Items Are Legitimate & Sell Faster | SafeOrStolen"
        description="Essential guide for secondhand sellers. Learn how to verify your items, build buyer trust, and sell 3x faster with verification certificates."
        keywords="seller guide secondhand, prove item legitimate, verification certificate seller, sell faster verified items"
        canonical="/seller-guide"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[
            { name: 'Guides', href: '/guides' },
            { name: 'Seller Guide', href: '/seller-guide' }
          ]} />
        </div>
        
        <div className="container mx-auto px-4 py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 mb-6">
              <Award className="h-4 w-4" />
              <span className="font-semibold">For Sellers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Seller's Guide:
              <span className="block text-green-400 mt-2">Prove Legitimacy, Sell Faster</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stand out from the competition. Get verification certificates that prove your items 
              are legitimate and sell up to 3x faster in the secondhand market.
            </p>
            
            <Button
              size="lg"
              onClick={() => navigate('/auth?tab=signup')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Verify Your Items Free
            </Button>
          </div>

          {/* Why Sellers Need Verification */}
          <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 mb-12">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Why Smart Sellers Verify Their Items
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {sellerBenefits.map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <benefit.icon className="h-12 w-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="py-8">
                <div className="text-4xl font-bold text-green-500 mb-2">3x</div>
                <p className="text-gray-300">Faster Sales with Verification</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="py-8">
                <div className="text-4xl font-bold text-green-500 mb-2">25%</div>
                <p className="text-gray-300">Higher Sale Prices on Average</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="py-8">
                <div className="text-4xl font-bold text-green-500 mb-2">87%</div>
                <p className="text-gray-300">Fewer Disputes & Returns</p>
              </CardContent>
            </Card>
          </div>

          {/* How to Verify */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              How to Verify Your Items (It's Free!)
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Sign Up', description: 'Create free account in 30 seconds' },
                { step: 2, title: 'Enter Details', description: 'Input serial number, IMEI, or VIN' },
                { step: 3, title: 'Get Certificate', description: 'Download verification certificate instantly' },
                { step: 4, title: 'Share with Buyers', description: 'Add to your listings for instant trust' }
              ].map((item, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xl mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Best Practices for Verified Sellers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Highlight Verification in Title:</strong> Use phrases like "Verified Not Stolen" or "Includes Verification Certificate" in your listing title
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Upload Certificate Images:</strong> Add screenshots of your verification certificate to listing photos
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Provide Original Documentation:</strong> Keep receipts, warranties, and proof of purchase ready to share
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Link to Verification:</strong> Include SafeOrStolen verification link in your listing description
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Verify Before Listing:</strong> Get verification certificate before creating your listing - it takes under 3 seconds
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Items to Verify */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What Items Should Sellers Verify?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'High Priority',
                  items: ['Smartphones & tablets', 'Laptops & computers', 'Vehicles (cars, motorcycles)', 'High-end electronics', 'Luxury watches', 'Power tools'],
                  color: 'red'
                },
                {
                  category: 'Medium Priority',
                  items: ['Gaming consoles', 'Cameras & lenses', 'Bikes & e-bikes', 'Musical instruments', 'Designer bags', 'Jewelry'],
                  color: 'yellow'
                },
                {
                  category: 'Low Priority (But Recommended)',
                  items: ['Small electronics', 'Home appliances', 'Sports equipment', 'Collectibles', 'Furniture', 'Books & media'],
                  color: 'green'
                }
              ].map((priority, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{priority.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {priority.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-gray-300">
                          <FileCheck className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Story */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/30 mb-12">
            <CardContent className="py-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Success Story: Electronics Reseller</h3>
                  <p className="text-gray-300 italic mb-4">
                    "After I started verifying all my items with SafeOrStolen, my sales increased by 2.5x. 
                    Buyers trust me more, I get fewer questions, and I can charge premium prices. 
                    The verification certificate is like a seal of approval."
                  </p>
                  <p className="text-blue-400 font-semibold">- Mike T., eBay Power Seller</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-green-500/20 to-green-600/10 border-green-500/30">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Start Selling with Confidence Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get your first 4 verification certificates FREE. 
                Prove your items are legitimate and start selling faster.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/auth?tab=signup')}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8"
              >
                Get 4 Free Verifications
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SellerGuidePage;
