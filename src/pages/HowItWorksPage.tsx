import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Search, Shield, CheckCircle, Database, Zap, Lock, Globe, Clock } from 'lucide-react';
import { SmartAdPlacement } from '@/components/advertising/ContextualAdPlacement';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Search,
      title: 'Enter Your Item Details',
      description: 'Input the IMEI, VIN, or serial number of the item you want to verify. Our system accepts all major formats.',
      detail: 'Works with phones, vehicles, laptops, cameras, power tools, and more.'
    },
    {
      icon: Database,
      title: 'We Scan Multiple Databases',
      description: 'Our system instantly checks your item against international stolen goods databases, law enforcement records, and insurance claims.',
      detail: 'Over 50 million records checked in under 30 seconds.'
    },
    {
      icon: Shield,
      title: 'Get Instant Results',
      description: 'Receive a comprehensive report showing if the item is stolen, lost, or safe to purchase.',
      detail: 'Clear status with detailed information and next steps.'
    },
    {
      icon: CheckCircle,
      title: 'Buy with Confidence',
      description: 'Armed with verification results, make informed purchasing decisions and protect yourself from financial loss.',
      detail: 'Save thousands by avoiding stolen goods and legal issues.'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Results in under 30 seconds',
      stat: '<30s'
    },
    {
      icon: Database,
      title: 'Comprehensive Coverage',
      description: '50M+ stolen item records',
      stat: '50M+'
    },
    {
      icon: Globe,
      title: 'Worldwide Database',
      description: 'International coverage',
      stat: '195+'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Bank-level encryption',
      stat: '256-bit'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Verify if an Item is Stolen",
    "description": "Step-by-step guide to checking IMEI, VIN, and serial numbers against stolen goods databases",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "itemListElement": {
        "@type": "HowToDirection",
        "text": step.detail
      }
    })),
    "totalTime": "PT30S"
  };

  return (
    <>
      <PageSEO
        title="How It Works: Verify IMEI, VIN & Serial Numbers in 30 Seconds"
        description="Learn how Safe or Stolen instantly verifies if items are stolen by checking IMEI, VIN, and serial numbers against 50M+ records worldwide."
        keywords="how to check IMEI, how to verify VIN, serial number lookup process, stolen goods verification, item verification steps"
        canonical="/how-it-works"
        structuredData={[structuredData]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              How Safe or Stolen Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our advanced verification system checks your item against millions of stolen goods records 
              in seconds, protecting you from costly mistakes.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/auth?tab=signup">Try It Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-2">{feature.stat}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Verification Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Four simple steps to verify any item in under 30 seconds
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex gap-6 items-start">
                      <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                            Step {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-2">{step.description}</p>
                        <p className="text-sm text-primary font-medium">{step.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Data Sources</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Database className="h-5 w-5 text-primary" />
                        Law Enforcement Databases
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• FBI National Crime Database</li>
                        <li>• Interpol Stolen Property Database</li>
                        <li>• Local Police Department Records</li>
                        <li>• International Law Enforcement Networks</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Insurance & Industry Records
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Insurance Company Claim Records</li>
                        <li>• Manufacturer Stolen Item Reports</li>
                        <li>• Carrier Blacklist Databases</li>
                        <li>• Industry Anti-Theft Networks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategic Ad Placement */}
        <SmartAdPlacement placement="banner" />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-orange-500/10">
              <CardContent className="p-12">
                <Clock className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl font-bold mb-4">
                  Start Verifying Items in 30 Seconds
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join 25,000+ smart buyers who verify before they buy. 
                  Get 4 free verifications to start.
                </p>
                <Button size="lg" asChild>
                  <Link to="/auth?tab=signup">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksPage;
