import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { createBreadcrumbSchema, createFAQSchema } from '@/utils/seo/structuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, CheckCircle, Database } from 'lucide-react';
import stolenLaptopImage from '@/assets/stolen-laptop-chase.png';
import { HighImpactFAQ } from '@/components/seo/HighImpactFAQ';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Enter Item Details",
      description: "Input the serial number, IMEI, VIN, or unique identifier of the item you want to verify.",
      icon: Search,
      color: "text-blue-500"
    },
    {
      step: 2,
      title: "Database Search",
      description: "Our system searches through records in real-time across multiple trusted databases including law enforcement and insurance companies.",
      icon: Database,
      color: "text-sos-orange"
    },
    {
      step: 3,
      title: "Get Results",
      description: "Receive instant verification results with clear Safe, Lost, or Stolen status plus detailed information about the item.",
      icon: CheckCircle,
      color: "text-green-500"
    }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'How It Works', url: '/how-it-works' }
  ]);
  const faqSchema = createFAQSchema();

  return (
    <>
      <EnhancedSEOHead 
        title="How the SafeOrStolen Mobile App Works - Instant IMEI & VIN Verification"
        description="Download the SafeOrStolen app for iOS & Android to instantly check if items are stolen. Our mobile app verifies IMEI, VIN, and serial numbers in under 3 seconds. Learn how our instant verification protects buyers and sellers."
        keywords="how stolen checker app works, IMEI verification app, VIN check mobile app, instant verification process, stolen item checker app, mobile verification guide, download safeorstolen app"
        canonical="/how-it-works"
        additionalSchemas={[breadcrumbSchema, faqSchema]}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos relative overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Full Width Title */}
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
                How It Works
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-wide">
                How the <span className="text-sos-orange">SafeOrStolen App</span> Works
              </h1>
            </div>
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <p className="text-xl text-gray-300 mb-8">
                  Download the SafeOrStolen mobile app for iOS & Android to instantly verify IMEI, VIN, and serial numbers. Our app checks multiple databases in under 3 seconds, protecting buyers and sellers from stolen goods. Here's exactly how our mobile verification works.
                </p>
                <div className="text-lg text-gray-300 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p>✓ Real-time database searches</p>
                  <p>✓ Multiple law enforcement databases</p>
                  <p>✓ Insurance company records</p>
                  <p>✓ Instant verification results</p>
                </div>
                <Link to="/dashboard">
                  <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                    Try Verification Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={stolenLaptopImage} 
                    alt="Person running with stolen laptop being chased - illustrating the problem Safe or Stolen prevents"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sos-dark/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      Don't let this happen to you. Verify before you buy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                3 Simple Steps to Verify Any Item
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our verification process is designed to be fast, accurate, and user-friendly. 
                Get instant results for IMEI, VIN, and serial number checks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <Card key={step.step} className="relative overflow-hidden border-2 hover:border-sos-orange transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800`}>
                        <step.icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-sm bg-sos-orange text-white">
                        Step {step.step}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Process Details */}
        <section className="py-20 bg-sos">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                How Our Verification Process Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Our advanced AI technology cross-references multiple databases to give you instant peace of mind when buying secondhand items.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <span>✓ Police Databases</span>
                <span>✓ Insurance Claims</span>
                <span>✓ Manufacturer Reports</span>
                <span>✓ International Networks</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Enter Details</h3>
                  <p className="text-sm text-gray-300">Input IMEI, VIN, or serial number</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">AI Analysis</h3>
                  <p className="text-sm text-gray-300">Cross-reference multiple databases</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Verification</h3>
                  <p className="text-sm text-gray-300">Check against law enforcement data</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Results</h3>
                  <p className="text-sm text-gray-300">Get instant Safe/Stolen status</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Database Information Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Verification Database Sources
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We search across multiple trusted databases to provide the most comprehensive stolen item verification available.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Law Enforcement</h3>
                  <p className="text-sm text-muted-foreground">Official police and FBI databases</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Insurance Records</h3>
                  <p className="text-sm text-muted-foreground">Insurance company theft reports</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Registry Data</h3>
                  <p className="text-sm text-muted-foreground">Vehicle and device registries</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">User Reports</h3>
                  <p className="text-sm text-muted-foreground">Community-verified reports</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <HighImpactFAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sos-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Verify Your Next Purchase?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands who use Safe or Stolen every day to avoid purchasing stolen goods. 
              Start with a free verification now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                  <Shield className="mr-2 h-5 w-5" />
                  Start Free Verification
                </Button>
              </Link>
              <Link to="/subscriptions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sos-dark">
                  View Subscription Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksPage;