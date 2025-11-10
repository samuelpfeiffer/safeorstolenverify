import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Laptop, Shield, CheckCircle, AlertTriangle, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HighImpactFAQ } from '@/components/seo/HighImpactFAQ';

const BuyUsedElectronicsSafelyPage = () => {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Buy Used Electronics Safely: Complete Verification Guide 2025",
    "description": "Expert guide on buying used electronics safely. Learn how to verify serial numbers, check for stolen items, and protect yourself when buying secondhand devices.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const safetyChecklist = [
    "Verify serial number or IMEI against stolen databases",
    "Meet seller in public place (police station, busy store)",
    "Test all functions before purchasing",
    "Request original receipts and proof of purchase",
    "Check for physical damage or tampering",
    "Verify device can be activated (phones)",
    "Get verification certificate for protection",
    "Use secure payment methods (avoid cash only)"
  ];

  const electronicTypes = [
    {
      icon: Smartphone,
      title: 'Smartphones & Tablets',
      items: ['iPhone', 'Samsung Galaxy', 'iPad', 'Android tablets'],
      verification: 'Check IMEI number + carrier unlock status'
    },
    {
      icon: Laptop,
      title: 'Laptops & Computers',
      items: ['MacBook', 'Windows laptops', 'Gaming PCs', 'Chromebooks'],
      verification: 'Verify serial number + activation lock'
    },
    {
      icon: Shield,
      title: 'Gaming & Entertainment',
      items: ['PlayStation', 'Xbox', 'Nintendo Switch', 'VR headsets'],
      verification: 'Check serial number + account status'
    }
  ];

  return (
    <>
      <PageSEO
        title="Buy Used Electronics Safely: Complete Verification Guide 2025 | Avoid Stolen Devices"
        description="Expert guide on how to buy used electronics safely. Learn to verify serial numbers, check if items are stolen, and protect yourself when buying secondhand phones, laptops, and devices."
        keywords="buy used electronics safely, secondhand electronics verification, check if device stolen, safe way to buy used gadgets, verify used electronics, stolen device check, secondhand fraud prevention"
        canonical="/buy-used-electronics-safely"
        structuredData={articleSchema}
      />
      <AISearchOptimizer 
        page="buy-electronics-safely" 
        context="electronics-verification-guide"
        primaryKeywords={['buy used electronics safely', 'verify secondhand devices', 'avoid stolen electronics']}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 mb-6">
              <Shield className="h-4 w-4" />
              <span className="font-semibold">Safe Buying Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How to Buy Used Electronics
              <span className="block text-green-400 mt-2">Safely in 2025</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete expert guide on verifying secondhand electronics. Learn how to check serial numbers, 
              spot stolen devices, and protect yourself when buying used phones, laptops, and gadgets.
            </p>
            
            <Button
              size="lg"
              onClick={() => navigate('/auth?tab=signup')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <Search className="mr-2 h-5 w-5" />
              Verify Electronics Free
            </Button>
          </div>

          {/* Why Verification Matters */}
          <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Why You Must Verify Used Electronics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">$8.9B</div>
                  <p>Annual losses from stolen electronics sold secondhand</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">1 in 6</div>
                  <p>Used electronics transactions involve stolen devices</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">Legal Risk</div>
                  <p>Buying stolen electronics can result in criminal charges</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Checklist */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              8-Point Safety Checklist
            </h2>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="py-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {safetyChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Electronic Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              How to Verify Different Electronics
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {electronicTypes.map((type, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all">
                  <CardContent className="p-6">
                    <type.icon className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                    <ul className="space-y-2 mb-4">
                      {type.items.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm">• {item}</li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-slate-700">
                      <p className="text-xs font-semibold text-green-400">{type.verification}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Step-by-Step Verification Process
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Before Meeting the Seller',
                  content: [
                    'Request serial number, IMEI, or model number upfront',
                    'Run verification check on SafeOrStolen.com (2 free searches, 14-day trial)',
                    'Research average market price for the item',
                    'Check seller profile and reviews if on marketplace',
                    'Schedule meeting in public place (police station recommended)'
                  ]
                },
                {
                  step: 2,
                  title: 'During Inspection',
                  content: [
                    'Verify serial number matches what was provided',
                    'Check for physical damage, scratches, or tampering',
                    'Test all functions (buttons, ports, screen, camera)',
                    'For phones: Check if device can be activated',
                    'For laptops: Boot up and check specs match listing'
                  ]
                },
                {
                  step: 3,
                  title: 'Documentation Review',
                  content: [
                    'Ask for original receipt or proof of purchase',
                    'Verify seller name matches documentation',
                    'Check warranty card or registration',
                    'Request box and accessories if advertised',
                    'Take photos of serial number and documentation'
                  ]
                },
                {
                  step: 4,
                  title: 'Final Verification',
                  content: [
                    'Confirm verification certificate shows Not Stolen',
                    'Check seller ID matches their story',
                    'Use secure payment method (PayPal, escrow service)',
                    'Get written receipt with serial number',
                    'Save all communication and documentation'
                  ]
                }
              ].map((section, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
                        {section.step}
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <HighImpactFAQ />
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-green-500/20 to-green-600/10 border-green-500/30">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Start Buying Electronics Safely Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get 2 FREE verification searches (14-day trial) and check items before you buy.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/auth?tab=signup')}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8"
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

export default BuyUsedElectronicsSafelyPage;
