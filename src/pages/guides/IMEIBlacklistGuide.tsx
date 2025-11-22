import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Shield, AlertTriangle, CheckCircle, Search, Ban, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UnifiedSearchForm } from '@/components/search/UnifiedSearchForm';
import { useNavigate } from 'react-router-dom';

const IMEIBlacklistGuide = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IMEI Blacklists Explained: Complete Guide to Phone Blacklist Check",
    "description": "Complete guide to IMEI blacklists, how to check IMEI block status, and what to do if your phone is blacklisted",
    "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
  };

  const blacklistReasons = [
    {
      icon: Ban,
      title: "Reported Stolen",
      description: "Phone was reported stolen to police or carrier",
      impact: "Cannot be activated on any network"
    },
    {
      icon: AlertTriangle,
      title: "Insurance Fraud",
      description: "Used in fraudulent insurance claims",
      impact: "Permanently blocked from all carriers"
    },
    {
      icon: Shield,
      title: "Unpaid Bills",
      description: "Original owner stopped paying carrier bills",
      impact: "May be unblocked if bills are paid"
    },
    {
      icon: Phone,
      title: "Lost Device",
      description: "Reported lost and later found by someone else",
      impact: "Requires original owner to unblock"
    }
  ];

  const checkingSteps = [
    {
      step: "1",
      title: "Find Your IMEI Number",
      description: "Dial *#06# or check Settings > About Phone",
      tip: "IMEI is 15 digits long - write it down exactly"
    },
    {
      step: "2", 
      title: "Use Our IMEI Blacklist Check",
      description: "Enter IMEI in our free verification tool",
      tip: "We check multiple carrier blacklists instantly"
    },
    {
      step: "3",
      title: "Review Block Status Results",
      description: "See if phone is clear or blacklisted",
      tip: "Clear = safe to use, Blocked = cannot activate"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IMEI Blacklists Explained | Free Phone Blacklist Check Guide</title>
        <meta 
          name="description" 
          content="Complete guide to IMEI blacklists: what they are, how to check IMEI block status, and what to do if your phone is blacklisted. Free IMEI blacklist checker." 
        />
        <meta 
          name="keywords" 
          content="IMEI blacklist check, IMEI block status, phone blacklist check, what is IMEI blacklist, check if phone blocked, carrier blacklist lookup" 
        />
        <link rel="canonical" href="https://safeorstolen.com/guides/imei-blacklist-explained" />
        {/* Canonical tag handled by PageSEO component to prevent duplicates */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-sos-orange/5">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-sos-dark to-sos-orange text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-sos-lime text-sos-dark">
                Expert Guide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IMEI Blacklists Explained
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Complete guide to phone blacklists, IMEI block status, and how to check if your device is blacklisted. 
                Protect yourself from buying blocked phones with our free IMEI blacklist checker.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="border-white text-white">
                  📱 IMEI Block Status
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  🚫 Blacklist Registry
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  📶 Carrier Check
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  ✅ Free Verification
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Quick IMEI Check */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-sos-dark">
                    Check IMEI Block Status
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Verify if your phone is blacklisted by carriers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <UnifiedSearchForm 
                    variant="simple"
                    onOpenQrScanner={() => navigate('/qr-scanner')}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is IMEI Blacklist */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What is an IMEI Blacklist?
                </h2>
                <div className="prose prose-lg mx-auto text-left">
                  <p className="text-xl text-muted-foreground mb-6">
                    An IMEI blacklist is a database maintained by mobile carriers to block phones from connecting to their networks. 
                    When a phone's IMEI is blacklisted, it cannot make calls, send texts, or use mobile data on any carrier network.
                  </p>
                  <div className="bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Key Facts About IMEI Blacklists:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                        <span>Shared across all major carriers (Verizon, AT&T, T-Mobile, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                        <span>Blocks phone from any cellular network activation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                        <span>WiFi and offline features may still work</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                        <span>Can affect resale value significantly</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Phones Get Blacklisted */}
        <section className="py-16 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Do Phones Get Blacklisted?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Understanding the main reasons phones end up on carrier blacklists
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blacklistReasons.map((reason, index) => {
                  const IconComponent = reason.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-sos-orange/10 rounded-full">
                            <IconComponent className="h-6 w-6 text-sos-orange" />
                          </div>
                          <CardTitle className="text-xl">{reason.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {reason.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="p-4 bg-red-50 rounded-lg">
                          <p className="text-sm font-semibold text-red-800">
                            Impact: {reason.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How to Check */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How to Check IMEI Block Status
                </h2>
                <p className="text-xl text-muted-foreground">
                  Simple 3-step process to verify if your phone is blacklisted
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {checkingSteps.map((step, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-sos-lime rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-sos-dark">{step.step}</span>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          💡 <strong>Tip:</strong> {step.tip}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Results Mean */}
        <section className="py-16 bg-gradient-to-r from-sos-dark/5 to-sos-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Understanding Your IMEI Check Results
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <CardTitle className="text-xl text-green-800">Clean IMEI</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>✅ Not reported stolen or lost</li>
                      <li>✅ Not on carrier blacklists</li>
                      <li>✅ Can be activated on any network</li>
                      <li>✅ Safe to buy and use</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Ban className="h-8 w-8 text-red-600" />
                      <CardTitle className="text-xl text-red-800">Blacklisted IMEI</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-red-700">
                      <li>❌ Cannot activate on any carrier</li>
                      <li>❌ May be reported stolen/lost</li>
                      <li>❌ Limited resale value</li>
                      <li>❌ Only WiFi features work</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sos-lime/10 to-sos-orange/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Check Your Phone's IMEI Status Now
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don't buy a blacklisted phone or wonder about your device's status. Get instant IMEI verification with our free checker.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-sos-orange hover:bg-sos-orange/90"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Check IMEI Block Status
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/imei-check')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Learn More About IMEI Check
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IMEIBlacklistGuide;