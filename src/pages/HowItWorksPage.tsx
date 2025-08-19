import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HowItWorks from '@/components/HowItWorks';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { createBreadcrumbSchema } from '@/utils/seo/structuredData';
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
      description: "Advanced algorithms verify legitimacy and cross-reference stolen goods databases.",
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

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'How It Works', url: '/how-it-works' }
  ]);

  const howToSchema = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Verify IMEI, Serial Numbers & VIN Codes",
          "description": "Step-by-step guide to verify items before purchase using Safe or Stolen verification system",
          "image": "https://safeorstolen.com/how-it-works-image.png",
          "totalTime": "PT2M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Item identifier (IMEI, Serial Number, or VIN)"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "Safe or Stolen Verification System"
            }
          ],
          "step": [
            {
              "@type": "HowToStep",
              "name": "Enter Item Details",
              "text": "Input the serial number, IMEI, or unique identifier of the item you want to verify.",
              "image": "https://safeorstolen.com/step1-enter-details.png",
              "url": "https://safeorstolen.com/how-it-works#step1"
            },
            {
              "@type": "HowToStep", 
              "name": "Database Search",
              "text": "Our system searches through millions of records in real-time across 50+ global law enforcement databases.",
              "image": "https://safeorstolen.com/step2-database-search.png",
              "url": "https://safeorstolen.com/how-it-works#step2"
            },
            {
              "@type": "HowToStep",
              "name": "Security Verification", 
              "text": "Advanced algorithms verify legitimacy and cross-reference stolen goods databases using multiple verification sources.",
              "image": "https://safeorstolen.com/step3-security-verification.png",
              "url": "https://safeorstolen.com/how-it-works#step3"
            },
            {
              "@type": "HowToStep",
              "name": "Get Results",
              "text": "Receive instant verification results with detailed information about the item's status and safety.",
              "image": "https://safeorstolen.com/step4-get-results.png", 
              "url": "https://safeorstolen.com/how-it-works#step4"
            }
          ],
          "about": {
            "@type": "Thing",
            "name": "Item Verification",
            "description": "Stolen goods verification and item authentication"
          }
        };

  return (
    <>
      <EnhancedSEOHead 
        title="How It Works - Check if Stolen: IMEI, VIN, Serial Number Verification | Safe or Stolen"
        description="Learn how Safe or Stolen verifies IMEI, serial numbers, and VIN codes across 50+ global databases in real-time. 4-step process to check if items are stolen."
        keywords="how to check if stolen, IMEI verification process, VIN check how it works, serial number verification steps, stolen goods database check, verify before buying process, check if something is stolen"
        canonical="/how-it-works"
        additionalSchemas={[howToSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Verify IMEI, Serial Numbers & VIN in <span className="text-sos-orange">4 Simple Steps</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our advanced verification system checks millions of records across 50+ global databases in real-time to protect you from unknowingly purchasing stolen phones, electronics, cars, and more.
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