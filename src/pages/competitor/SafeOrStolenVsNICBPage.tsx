import { ArrowRight, Check, X, Shield, Database, Globe, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageSEO } from "@/components/seo/PageSEO";
import { useNavigate } from "react-router-dom";

const SafeOrStolenVsNICBPage = () => {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Mobile App Verification",
      safeorstolen: true,
      nicb: false,
      description: "Instant verification with camera scanning on iOS/Android"
    },
    {
      feature: "Real-Time Database Access",
      safeorstolen: true,
      nicb: true,
      description: "Access to stolen item databases"
    },
    {
      feature: "Multiple Item Types",
      safeorstolen: true,
      nicb: false,
      description: "Verify phones, electronics, bikes, tools, and more"
    },
    {
      feature: "Vehicle-Only Focus",
      safeorstolen: false,
      nicb: true,
      description: "NICB focuses exclusively on vehicles"
    },
    {
      feature: "Consumer Accessibility",
      safeorstolen: true,
      nicb: false,
      description: "Easy-to-use platform for everyday consumers"
    },
    {
      feature: "Global Coverage",
      safeorstolen: true,
      nicb: false,
      description: "International stolen item tracking"
    },
    {
      feature: "Instant Results",
      safeorstolen: true,
      nicb: false,
      description: "Get verification results in seconds"
    },
    {
      feature: "API Integration",
      safeorstolen: true,
      nicb: false,
      description: "Developer-friendly API for marketplace integration"
    },
    {
      feature: "Insurance Industry Focus",
      safeorstolen: false,
      nicb: true,
      description: "NICB primarily serves insurance companies"
    },
    {
      feature: "Free Verification",
      safeorstolen: true,
      nicb: true,
      description: "Basic verification available for free"
    }
  ];

  const useCases = [
    {
      scenario: "Buying a Used Phone on Facebook Marketplace",
      safeorstolen: "Scan IMEI instantly with mobile app, get comprehensive report",
      nicb: "Not applicable - NICB doesn't cover phones or electronics"
    },
    {
      scenario: "Purchasing a Used Vehicle",
      safeorstolen: "Verify VIN with multi-database check including NICB data",
      nicb: "VIN check through insurance industry database"
    },
    {
      scenario: "Checking Stolen Bike Serial Number",
      safeorstolen: "Instant verification with BikeIndex integration",
      nicb: "Not applicable - NICB focuses on vehicles only"
    },
    {
      scenario: "Marketplace Seller Verification",
      safeorstolen: "Prove your item isn't stolen with verification certificate",
      nicb: "Limited consumer-facing verification tools"
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs NICB: Complete Comparison 2025 | Which Service is Better?"
        description="Detailed comparison of SafeOrStolen and NICB (National Insurance Crime Bureau). Compare features, pricing, coverage, and find the best stolen item verification service for your needs."
        keywords="SafeOrStolen vs NICB, NICB alternative, stolen vehicle check, VIN verification comparison, NICB vs SafeOrStolen"
        canonical="/safeorstolen-vs-nicb"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Complete Service Comparison</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SafeOrStolen vs NICB:<br />
              <span className="text-primary">Which Verification Service Should You Choose?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive comparison of SafeOrStolen's multi-item verification platform 
              and NICB's insurance-focused vehicle database. Find the right solution for your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')} className="gap-2">
                Try SafeOrStolen Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">SafeOrStolen</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Best for:</strong> Consumers and businesses needing to verify multiple item types 
                (phones, electronics, bikes, tools, vehicles) with instant mobile app access
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Mobile app with camera scanning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Verifies all item types</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Consumer-friendly interface</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Global coverage</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">NICB</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Best for:</strong> Insurance professionals and industry partners needing 
                vehicle-specific fraud prevention and theft data
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Insurance industry database</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Vehicle-focused</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <X className="h-4 w-4 text-red-500" />
                  <span>No mobile app</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <X className="h-4 w-4 text-red-500" />
                  <span>Limited consumer access</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Detailed Feature Comparison */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Feature-by-Feature Comparison</h2>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4 bg-primary/5">SafeOrStolen</th>
                  <th className="text-center p-4">NICB</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-4">
                      <div className="font-medium">{item.feature}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </td>
                    <td className="text-center p-4 bg-primary/5">
                      {item.safeorstolen ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {item.nicb ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Case Scenarios */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <h2 className="text-3xl font-bold text-center mb-12">Real-World Use Cases</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4">{useCase.scenario}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">SafeOrStolen</div>
                    <p className="text-sm text-muted-foreground">{useCase.safeorstolen}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">NICB</div>
                    <p className="text-sm text-muted-foreground">{useCase.nicb}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose SafeOrStolen */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Consumers Choose SafeOrStolen Over NICB
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Mobile App</h3>
                <p className="text-sm text-muted-foreground">
                  Scan IMEI, serial numbers, and VINs instantly with your phone camera - no typing required
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">All Item Types</h3>
                <p className="text-sm text-muted-foreground">
                  Verify phones, laptops, bikes, tools, cameras, and vehicles - not just cars
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  Get verification results in seconds, not minutes - perfect for marketplace transactions
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Verify Items Beyond Just Vehicles?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of consumers using SafeOrStolen's mobile app to verify 
              phones, electronics, bikes, and more - all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')} className="gap-2">
                Start Free Verification <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/download-app')}>
                Download Mobile App
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
};

export default SafeOrStolenVsNICBPage;
