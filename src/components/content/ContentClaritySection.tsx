import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Database, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Globe,
  Users
} from 'lucide-react';

export const ContentClaritySection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Item Details",
      description: "Type in serial number, IMEI, VIN, or scan QR code",
      icon: Search,
      detail: "Works with phones, laptops, cars, bikes, electronics, and more"
    },
    {
      number: "02", 
      title: "Real-Time Database Check",
      description: "We search multiple databases instantly",
      icon: Database,
      detail: "Police records, insurance claims, manufacturer reports, international networks"
    },
    {
      number: "03",
      title: "Get Instant Results",
      description: "Receive verification status in under 3 seconds",
      icon: Shield,
      detail: "Clear status: Safe to buy, Stolen alert, or Needs investigation"
    }
  ];

  const protectionAreas = [
    {
      title: "Legal Protection",
      description: "Avoid unknowingly purchasing stolen goods and potential legal consequences",
      icon: Shield,
      stats: "Helps prevent stolen goods purchases"
    },
    {
      title: "Financial Security", 
      description: "Protect your money from scams and fraudulent sellers",
      icon: CheckCircle,
      stats: "Protects your investment"
    },
    {
      title: "Peace of Mind",
      description: "Buy with confidence knowing items are legitimate",
      icon: Users,
      stats: "Trusted verification service"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple 3-Step Verification Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI technology makes stolen goods verification as simple as entering a serial number. 
            Here's exactly how we protect you from the $13 billion stolen goods crisis.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-sos-orange to-sos-lime opacity-20 transform translate-x-4"></div>
              )}
              
              <Card className="hover:shadow-lg transition-shadow relative z-10">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-sos-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-sos-orange" />
                  </div>
                  <div className="text-4xl font-bold text-sos-orange mb-2">{step.number}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {step.detail}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* What We Protect Against */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              What We Protect You From
            </h3>
            <div className="space-y-6">
              {protectionAreas.map((area, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-sos-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="h-6 w-6 text-sos-orange" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                    <p className="text-muted-foreground mb-2">{area.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {area.stats}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-sos-orange/5 to-sos-lime/5">
            <CardHeader className="text-center">
              <h4 className="text-xl font-bold mb-4">The Hidden Costs of Stolen Goods</h4>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-sos-orange mb-2">$13 Billion</div>
                <p className="text-sm text-muted-foreground">Annual stolen goods market</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-sos-lime">1 in 7</div>
                  <p className="text-xs text-muted-foreground">Secondhand purchases are stolen</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-sos-lime">$2,400</div>
                  <p className="text-xs text-muted-foreground">Average loss per victim</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Link to="/verify" className="w-full">
                  <Button className="w-full bg-sos-orange hover:bg-sos-orange/90">
                    Protect Yourself Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Signals */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 text-sos-orange mx-auto mb-2" />
              <div className="font-semibold">24/7 Always Available</div>
              <div className="text-sm text-muted-foreground">Reliable service</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-sos-lime mx-auto mb-2" />
              <div className="font-semibold">Global Search</div>
              <div className="text-sm text-muted-foreground">International coverage</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-sos-orange mx-auto mb-2" />
              <div className="font-semibold">Growing User Base</div>
              <div className="text-sm text-muted-foreground">Protected daily</div>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-sos-lime mx-auto mb-2" />
              <div className="font-semibold">Reliable Results</div>
              <div className="text-sm text-muted-foreground">Comprehensive verification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};