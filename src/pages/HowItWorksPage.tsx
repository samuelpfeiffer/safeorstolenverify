import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HowItWorks from '@/components/HowItWorks';
import { SEOHead } from '@/components/seo/SEOHead';
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
      description: "Our system searches through millions of records in real-time across law enforcement databases.",
      icon: Database,
      color: "text-sos-orange"
    },
    {
      step: 3,
      title: "Security Verification",
      description: "Advanced algorithms verify the authenticity and cross-reference multiple security databases.",
      icon: Shield,
      color: "text-sos-lime"
    },
    {
      step: 4,
      title: "Get Results",
      description: "Receive instant verification results with detailed information about the item's status.",
      icon: CheckCircle,
      color: "text-green-500"
    }
  ];

  return (
    <>
      <SEOHead 
        title="How It Works - Safe or Stolen"
        description="Learn how our verification system works to protect you from stolen goods. Real-time database checks in seconds."
        keywords="how it works, verification process, stolen goods, database check"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Verify Items in <span className="text-sos-orange">4 Simple Steps</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our advanced verification system checks millions of records in real-time to protect you from unknowingly purchasing stolen goods.
            </p>
            <Link to="/verify">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  {step.step < 4 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block">
                      <ArrowRight className="h-6 w-6 text-sos-orange" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed How It Works */}
        <HowItWorks />

        {/* CTA Section */}
        <section className="py-20 bg-sos-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Verify Your Items?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who protect themselves from stolen goods every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                  Start Verification
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
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