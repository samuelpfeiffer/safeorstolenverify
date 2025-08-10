import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Building,
  Database,
  Lock
} from 'lucide-react';

const ForBrandsPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Protect your brand reputation by preventing stolen goods from circulating in secondary markets."
    },
    {
      icon: Database,
      title: "Real-time Integration",
      description: "Seamlessly integrate our API with your existing systems for instant verification capabilities."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Get insights into verification patterns and protect your brand with comprehensive analytics."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and enterprise-grade data protection."
    },
    {
      icon: Users,
      title: "Customer Trust",
      description: "Build customer confidence by providing verification tools that ensure legitimate purchases."
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Understand market trends and theft patterns affecting your products and industry."
    }
  ];

  const benefits = [
    "Reduce warranty fraud by up to 85%",
    "Increase customer trust and brand loyalty",
    "Access to real-time theft intelligence",
    "24/7 enterprise support",
    "Custom integration solutions",
    "Advanced reporting and analytics"
  ];

  return (
    <>
      <SEOHead 
        title="For Brands - Safe or Stolen Enterprise Solutions"
        description="Enterprise solutions for brands to protect against stolen goods, reduce fraud, and build customer trust with real-time verification."
        keywords="enterprise solutions, brand protection, anti-fraud, verification API, stolen goods prevention"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
                  Enterprise Solutions
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Protect Your <span className="text-sos-orange">Brand</span> from Stolen Goods
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Enterprise-grade verification solutions that protect your brand reputation, reduce fraud, and build customer trust through real-time stolen goods detection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                      Schedule Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" size="lg">
                      View Enterprise Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" 
                  alt="Enterprise Dashboard" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-sos-orange text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  <Building className="inline h-4 w-4 mr-2" />
                  Enterprise Ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Brand Protection
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our enterprise platform provides everything you need to protect your brand from the $13 billion stolen goods crisis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-sos-orange/10">
                        <feature.icon className="h-6 w-6 text-sos-orange" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Leading Brands Choose Us
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join hundreds of brands that trust our platform to protect their reputation and reduce fraud.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-sos-lime flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="p-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-4">Ready to Get Started?</CardTitle>
                  <p className="text-muted-foreground">
                    Schedule a personalized demo to see how our platform can protect your brand.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/contact">
                    <Button className="w-full bg-sos-orange hover:bg-sos-orange/80">
                      Schedule Enterprise Demo
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" className="w-full">
                      View Pricing Plans
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sos-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protect Your Brand Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let stolen goods damage your brand reputation. Get started with enterprise-grade protection.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                Contact Enterprise Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForBrandsPage;