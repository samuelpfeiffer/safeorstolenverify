import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CalendlyWidget } from '@/components/CalendlyWidget';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building,
  Shield,
  Database,
  Zap,
  CheckCircle,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';

const EnterpriseDemoPage: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Reduce Liability",
      description: "Protect your business from unknowingly handling stolen goods with real-time verification"
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue", 
      description: "Build customer trust and attract quality inventory with verified legitimacy"
    },
    {
      icon: Database,
      title: "Seamless Integration",
      description: "RESTful API integrates with your existing workflow in hours, not weeks"
    },
    {
      icon: Users,
      title: "Scale Operations",
      description: "Handle thousands of verifications per day with enterprise-grade infrastructure"
    }
  ];

  const testimonials = [
    {
      company: "Premier Pawn Solutions",
      quote: "Reduced our stolen goods incidents by 94% and increased customer confidence significantly.",
      name: "Sarah Martinez",
      role: "Operations Director"
    },
    {
      company: "MarketPlace Pro",
      quote: "The API integration was seamless. We now verify every listing automatically.",
      name: "David Chen", 
      role: "CTO"
    }
  ];

  const currentDate = new Date().toISOString();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SafeOrStolen Enterprise API Demo",
      "description": "Schedule a personalized demo of our enterprise verification API for businesses and marketplaces",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "serviceType": "Enterprise Software Demo",
      "areaServed": "Worldwide"
    }
  ];

  return (
    <>
      <PageSEO
        title="Enterprise Demo - See SafeOrStolen API in Action | Schedule Free Demo"
        description="Schedule a personalized demo of SafeOrStolen's enterprise verification API. See how we help businesses reduce liability and build trust with real-time stolen goods verification."
        keywords="enterprise demo, business verification API, marketplace integration demo, stolen goods prevention for business, pawn shop software demo"
        canonical="/enterprise-demo"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-6">
                <Building className="h-4 w-4 mr-2" />
                Enterprise Solution Demo
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                See How We Protect Your <span className="text-primary">Business</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses using SafeOrStolen to eliminate liability, 
                build customer trust, and scale their verification processes.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$2.3M</div>
                  <div className="text-muted-foreground text-sm">Loss Prevention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">94%</div>
                  <div className="text-muted-foreground text-sm">Incident Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">&lt;2hrs</div>
                  <div className="text-muted-foreground text-sm">API Integration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Businesses Choose SafeOrStolen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Demo Scheduling */}
          <section className="mb-16">
            <CalendlyWidget url="https://calendly.com/safeorstolen-enterprise/30min" />
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trusted by Industry Leaders
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <CheckCircle key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What You'll See */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  What You'll See in Your Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Live API Demo</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time verification of serial numbers, IMEIs, and VINs
                    </p>
                  </div>
                  <div className="text-center">
                    <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Integration Examples</h3>
                    <p className="text-sm text-muted-foreground">
                      See how it integrates with popular platforms and systems
                    </p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">ROI Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom pricing and return on investment for your business
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default EnterpriseDemoPage;