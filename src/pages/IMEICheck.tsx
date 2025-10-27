import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Shield, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UnifiedSearchForm } from '@/components/search/UnifiedSearchForm';
import { useNavigate } from 'react-router-dom';
import { ComprehensiveFAQ } from '@/components/seo/ComprehensiveFAQ';
import { HighImpactFAQ } from '@/components/seo/HighImpactFAQ';
import { CompetitiveMetaTags } from '@/components/seo/CompetitiveMetaTags';

const IMEICheck = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free IMEI Stolen Check",
    "description": "Free IMEI checker to verify if phones are stolen.",
    "url": "https://safeorstolen.com/imei-check",
    "applicationCategory": "SecurityApplication"
  };

  const phoneTypes = [
    {
      brand: "iPhone",
      models: ["iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE"],
      description: "Check any iPhone IMEI against stolen phone databases"
    },
    {
      brand: "Samsung",
      models: ["Galaxy S24", "Galaxy S23", "Galaxy Note", "Galaxy A Series"],
      description: "Verify Samsung Android phone IMEI numbers for theft"
    },
    {
      brand: "Google",
      models: ["Pixel 8", "Pixel 7", "Pixel 6", "Pixel Fold"],
      description: "Google Pixel IMEI verification and stolen check"
    },
    {
      brand: "Other Brands",
      models: ["Xiaomi", "OnePlus", "Huawei", "LG", "Motorola"],
      description: "IMEI check for all major phone brands and models"
    }
  ];

  const imeiTips = [
    {
      title: "Find IMEI on iPhone",
      steps: ["Go to Settings > General > About", "Scroll down to find IMEI", "Or dial *#06# to display IMEI"]
    },
    {
      title: "Find IMEI on Android",
      steps: ["Go to Settings > About Phone", "Look for IMEI information", "Or dial *#06# for instant display"]
    },
    {
      title: "Physical Location",
      steps: ["Check SIM card tray", "Look under battery (removable)", "Check phone's original box"]
    }
  ];

  return (
    <>
      <CompetitiveMetaTags page="imei" />
      <Helmet>
        <title>Check If Phone is Stolen – Free IMEI Checker App | Instant Stolen Phone Lookup</title>
        <meta 
          name="description" 
          content="Instantly check if a phone is stolen with our free IMEI checker app. Verify iPhone & Android devices against global stolen phone databases. Get results in 3 seconds!" 
        />
        <meta 
          name="keywords" 
          content="check if phone is stolen, IMEI checker app, stolen phone lookup, IMEI verification, stolen electronics verification, mobile device history report, free IMEI check, iPhone stolen check, Android IMEI verification" 
        />
        <link rel="canonical" href="https://safeorstolen.com/imei-check" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-sos-orange/5">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-[#6B4423] via-[#8B5A3C] to-sos-orange text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-sos-lime text-sos-dark">
                Free IMEI Checker
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IMEI Check - Verify Phone Not Stolen in 30 Seconds
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Free IMEI verification - check iPhone, Android phones against stolen device databases instantly. $2.3M in scams prevented.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="border-white text-white">
                  📱 iPhone IMEI Check
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🤖 Android IMEI Lookup
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🚫 Blacklist Verification
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  ⚡ Instant Results
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* IMEI Check Form */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-2xl border border-border/50 bg-card/50 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Phone className="h-6 w-6" />
                    Check IMEI for Stolen Phone
                  </CardTitle>
                  <p className="text-lg text-foreground/90 font-medium mt-2">
                    Enter 15-digit IMEI number to verify if phone is stolen
                  </p>
                </CardHeader>
                <CardContent>
                  <UnifiedSearchForm 
                    variant="simple"
                    onOpenQrScanner={() => navigate('/qr-scanner')}
                  />
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Find your IMEI by dialing *#06# or check Settings → About Phone
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Supported Phones */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Check Any Phone IMEI for Theft
                </h2>
                <p className="text-xl text-foreground/80">
                  Our IMEI checker works with all major phone brands and models
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {phoneTypes.map((phoneType, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-sos-lime/10 rounded-full w-fit">
                        <Phone className="h-8 w-8 text-sos-lime" />
                      </div>
                      <CardTitle className="text-lg">{phoneType.brand}</CardTitle>
                      <p className="text-sm text-foreground/70 mt-2">
                        {phoneType.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {phoneType.models.map((model, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-sos-lime" />
                            <span className="text-xs">{model}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Find IMEI */}
        <section className="py-16 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How to Find Your Phone's IMEI Number
                </h2>
                <p className="text-xl text-foreground/80">
                  Multiple ways to locate the IMEI on any phone
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {imeiTips.map((tip, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-sos-orange/10 rounded-full w-fit">
                        <span className="text-2xl font-bold text-sos-orange">{index + 1}</span>
                      </div>
                      <CardTitle className="text-xl">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {tip.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-sos-lime rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sos-dark text-xs font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <ComprehensiveFAQ pageType="imei" maxItems={6} showCategories={false} />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Check IMEI Before Buying Used Phones?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-red-100 rounded-full w-fit">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Avoid Legal Issues</h3>
                  <p className="text-foreground/80">
                    Possession of stolen phones can lead to legal consequences and confiscation by police
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Financial Protection</h3>
                  <p className="text-foreground/80">
                    Don't lose money on phones that might be blocked or blacklisted by carriers
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
                  <p className="text-foreground/80">
                    Buy used phones with confidence knowing they're legitimate and safe to use
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Start Your IMEI Check Now</h3>
                <p className="text-lg text-foreground/90 mb-6">
                  Protect yourself from buying stolen phones. Check any IMEI in seconds - completely free.
                </p>
                <Button 
                  size="lg" 
                  className="bg-sos-orange hover:bg-sos-orange/90"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Check IMEI Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 container mx-auto px-4">
          <HighImpactFAQ />
        </section>
      </div>
    </>
  );
};

export default IMEICheck;