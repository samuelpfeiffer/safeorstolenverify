import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { createBreadcrumbSchema, createFAQSchema } from '@/utils/seo/structuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, CheckCircle, Database } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Enter Item Details",
      description: "Input the serial number, IMEI, or unique identifier of the item you want to verify.",
      icon: Search,
      color: "text-blue-500"
    },
    {
      step: 2,
      title: "Database Search",
      description: "Our system searches through records in real-time across multiple databases.",
      icon: Database,
      color: "text-sos-orange"
    },
    {
      step: 3,
      title: "Get Results",
      description: "Receive instant verification results with information about the item's status.",
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
          title="How SafeOrStolen Works | Stolen Item Checker"
          description="See how SafeOrStolen verifies IMEI, VIN and serial numbers in real time to detect stolen items."
          keywords="how it works, stolen item checker, IMEI verification, VIN check, serial number lookup"
          canonical="/how-it-works"
          additionalSchemas={[breadcrumbSchema, faqSchema]}
        />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Safe or Stolen Works
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our verification system checks multiple databases to help protect you from stolen goods.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                Try It Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <Card key={step.step} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800`}>
                        <step.icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-sm">
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

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">How it works — FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How does verification work?</h3>
                <p className="text-muted-foreground">We check IMEI, VIN, and serial numbers against trusted databases from law enforcement, insurers, and registries to see if an item was reported lost or stolen.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What items can I check?</h3>
                <p className="text-muted-foreground">Phones, cars, bikes, electronics, tools, firearms, and more—anything with a unique identifier.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is it free?</h3>
                <p className="text-muted-foreground">Yes—get daily free checks with optional upgrades for power users and businesses.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How fast are results?</h3>
                <p className="text-muted-foreground">Instant. You’ll see a clear Safe, Lost, or Stolen status along with useful guidance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sos-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands who use Safe or Stolen every day.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                <Shield className="mr-2 h-5 w-5" />
                Start Verification
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksPage;