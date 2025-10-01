import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Laptop, Search, Shield, AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowToCheckLaptopStolenPage = () => {
  const navigate = useNavigate();

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check if a Laptop is Stolen Before Buying",
    "description": "Step-by-step guide to verify if a used laptop is stolen by checking the serial number against stolen property databases.",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Find the Serial Number",
        "text": "Locate the laptop serial number on the bottom of the device, inside the battery compartment, or in the BIOS/System Information.",
        "url": "https://safeorstolen.com/how-to-check-if-laptop-stolen#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Verify on SafeOrStolen",
        "text": "Enter the serial number on SafeOrStolen.com to check against global stolen laptop databases.",
        "url": "https://safeorstolen.com/how-to-check-if-laptop-stolen#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Review Results",
        "text": "Check the verification report for theft reports, police records, or insurance claims.",
        "url": "https://safeorstolen.com/how-to-check-if-laptop-stolen#step3"
      },
      {
        "@type": "HowToStep",
        "name": "Request Documentation",
        "text": "Ask the seller for original receipts, proof of purchase, and warranty information.",
        "url": "https://safeorstolen.com/how-to-check-if-laptop-stolen#step4"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>How to Check if a Laptop is Stolen Before Buying | Instant Serial Number Verification</title>
        <meta name="description" content="Learn how to instantly check if a used laptop is stolen. Find the serial number, verify against stolen property databases, and buy secondhand laptops safely. Free guide + verification tool." />
        <meta name="keywords" content="how to check if laptop stolen, laptop serial number check, used laptop verification, stolen electronics check, secondhand laptop safety, verify laptop not stolen" />
        <link rel="canonical" href="https://safeorstolen.com/how-to-check-if-laptop-stolen" />
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <Laptop className="h-16 w-16 text-sos-orange mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How to Check if a Laptop is Stolen
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete guide to verifying used laptops before purchase. Learn how to find serial numbers, 
              check stolen property databases, and protect yourself from buying stolen electronics.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/auth?tab=signup')}
              className="bg-sos-orange hover:bg-sos-orange/90 text-white"
            >
              <Search className="mr-2 h-5 w-5" />
              Check Laptop Serial Number Free
            </Button>
          </div>

          {/* Quick Answer */}
          <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Quick Answer: 3 Simple Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <p className="text-lg">
                <strong>1.</strong> Find the serial number (bottom of laptop or in BIOS)
              </p>
              <p className="text-lg">
                <strong>2.</strong> Enter it on SafeOrStolen.com (get 4 free checks)
              </p>
              <p className="text-lg">
                <strong>3.</strong> Get instant results in under 3 seconds - shows if laptop is reported stolen
              </p>
            </CardContent>
          </Card>

          {/* Step-by-Step Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Detailed Step-by-Step Guide
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  icon: Search,
                  title: "Find the Laptop Serial Number",
                  content: [
                    "Check the bottom/underside of the laptop for a sticker with serial number",
                    "Look inside the battery compartment (remove battery if possible)",
                    "On Windows: Press Win+R, type 'cmd', then run 'wmic bios get serialnumber'",
                    "On Mac: Click Apple menu → About This Mac → System Report → Hardware",
                    "Check the original box or purchase receipt if available"
                  ]
                },
                {
                  step: 2,
                  icon: Shield,
                  title: "Verify Serial Number on SafeOrStolen",
                  content: [
                    "Sign up for free account (takes 30 seconds)",
                    "Enter the laptop serial number in the verification tool",
                    "Our system checks 15+ stolen property databases globally",
                    "Results appear in under 3 seconds with detailed report",
                    "Get verification certificate as proof of legitimacy"
                  ]
                },
                {
                  step: 3,
                  icon: AlertTriangle,
                  title: "Review Verification Results",
                  content: [
                    "Check if laptop appears in police stolen property databases",
                    "Review any insurance theft claims associated with serial number",
                    "See manufacturer theft reports and recall notices",
                    "Check user-submitted stolen item reports",
                    "View risk assessment: Critical, High, Medium, or Low"
                  ]
                },
                {
                  step: 4,
                  icon: FileText,
                  title: "Request Seller Documentation",
                  content: [
                    "Ask for original purchase receipt or invoice",
                    "Request proof of ownership (warranty card, registration)",
                    "Check if seller's name matches documentation",
                    "Verify purchase date and retail store",
                    "Be suspicious if seller can't provide any documentation"
                  ]
                }
              ].map((item, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700" id={`step${item.step}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sos-orange/20 flex items-center justify-center text-sos-orange font-bold">
                        {item.step}
                      </div>
                      <item.icon className="h-6 w-6 text-sos-orange" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.content.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Red Flags */}
          <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Red Flags When Buying Used Laptops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                {[
                  "Price significantly below market value (50%+ discount)",
                  "Seller won't provide serial number before meeting",
                  "No original packaging, accessories, or documentation",
                  "Serial number sticker removed or tampered with",
                  "Seller pressures you to buy immediately",
                  "Meeting in unusual locations (parking lots, alleys)",
                  "Laptop has password lock that seller 'forgot'",
                  "Multiple laptops being sold at once by individual"
                ].map((flag, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{flag}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Laptop Brands */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Verify Any Laptop Brand
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { brand: 'Apple MacBook', models: 'MacBook Pro, MacBook Air' },
                { brand: 'Dell', models: 'XPS, Inspiron, Latitude' },
                { brand: 'HP', models: 'Pavilion, EliteBook, Omen' },
                { brand: 'Lenovo', models: 'ThinkPad, IdeaPad, Legion' },
                { brand: 'ASUS', models: 'ZenBook, ROG, VivoBook' },
                { brand: 'Acer', models: 'Aspire, Predator, Swift' },
                { brand: 'MSI', models: 'Gaming Series, Prestige' },
                { brand: 'Microsoft', models: 'Surface Laptop, Surface Book' }
              ].map((item, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-sos-orange/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.brand}</h3>
                    <p className="text-sm text-gray-400">{item.models}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-sos-orange/20 to-sos-orange/10 border-sos-orange/30">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Check Your Laptop Serial Number Now
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get 4 FREE laptop verifications when you sign up. Instant results in under 3 seconds.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/auth?tab=signup')}
                className="bg-sos-orange hover:bg-sos-orange/90 text-white text-lg px-8"
              >
                Verify Laptop Free
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HowToCheckLaptopStolenPage;
