import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Link } from 'react-router-dom';
import { Search, Shield, CheckCircle, Database, Zap, Lock, Globe, Clock } from 'lucide-react';

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
        title="How to Check if a Phone/Car is Stolen Before Buying | 3 Simple Steps"
        description="Step-by-step guide: How do I know if something is stolen? Enter IMEI/VIN/serial → We scan 50M+ stolen goods databases → Get instant Safe or Stolen status. Works for phones, cars, electronics."
        keywords="how do I check if phone is stolen, how to verify car not stolen, can I check if something is stolen, IMEI check tutorial, VIN verification guide, stolen goods database search, check before buying used items"
        canonical="/how-it-works"
        structuredData={[structuredData]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'How It Works', href: '/how-it-works' }]} />
        </div>
        
        {/* Simplified Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Check Any Item in 30 Seconds
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Enter a serial number, IMEI, or VIN. We instantly check 50M+ stolen goods records.
            </p>
            <Button size="lg" asChild>
              <Link to="/auth?tab=signup">Try Free Now</Link>
            </Button>
          </div>
        </section>

        {/* 3-Step Process (Simplified from 4) */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="bg-primary text-white text-lg font-bold px-4 py-2 rounded-full flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enter Item Details</h3>
                    <p className="text-muted-foreground">
                      Input IMEI, VIN, or serial number. Works with phones, vehicles, electronics, tools.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="bg-primary text-white text-lg font-bold px-4 py-2 rounded-full flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We Scan Databases</h3>
                    <p className="text-muted-foreground">
                      System checks 50+ databases including FBI, NCIC, and insurance records in under 30 seconds.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="bg-primary text-white text-lg font-bold px-4 py-2 rounded-full flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Get Clear Results</h3>
                    <p className="text-muted-foreground">
                      Receive Safe, Stolen, or Lost status with detailed report and next steps.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Stats (Simplified) */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">&lt;30s</div>
                  <p className="text-sm text-muted-foreground">Instant Results</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <p className="text-sm text-muted-foreground">Records Checked</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">99.7%</div>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-3">
                  Start Verifying Now
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get 2 free checks (14-day trial). No credit card required.
                </p>
                <Button size="lg" asChild>
                  <Link to="/auth?tab=signup">Try Free</Link>
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
