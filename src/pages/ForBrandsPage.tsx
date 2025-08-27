import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ComprehensiveSEO } from '@/components/seo/ComprehensiveSEO';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Building,
  Database,
  Rocket,
  Target,
  Globe
} from 'lucide-react';

const ForBrandsPage: React.FC = () => {
  return (
    <>
      <ComprehensiveSEO
        title="Enterprise Verification API for Marketplaces - Safe or Stolen"
        description="Integrate our verification technology into your platform to protect users and reduce fraud. Enterprise-grade API for marketplace verification."
        keywords="marketplace verification API, enterprise fraud prevention, stolen goods API, marketplace integration"
        canonical="/for-brands"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-8">
                <Building className="h-4 w-4 mr-2" />
                Enterprise Solutions
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                Reduce Liability. Increase Trust. <span className="text-primary">Scale Your Business.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Protect your inventory, reputation, and bottom line with professional-grade stolen goods verification. 
                Integrate our API to eliminate liability and build customer trust.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$2.3M</div>
                  <div className="text-muted-foreground">Loss Prevention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.2%</div>
                  <div className="text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">&lt;2s</div>
                  <div className="text-muted-foreground">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg">
                    <Rocket className="h-5 w-5 mr-2" />
                    Request Demo
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    <Target className="h-5 w-5 mr-2" />
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Enterprise Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Powerful API and tools designed for high-volume marketplace integration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Real-Time API</h3>
                      <p className="text-muted-foreground">Fast, reliable verification API with enterprise-grade uptime.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Custom Integration</h3>
                      <p className="text-muted-foreground">Tailored solutions for your platform's specific needs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">
                Ready to <span className="text-primary-foreground/80">Integrate</span> with Us?
              </h2>
              
              <p className="text-xl mb-12 opacity-90">
                Protect your users and reduce fraud with our verification technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" variant="secondary">
                    <Rocket className="h-5 w-5 mr-2" />
                    Schedule Demo
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Globe className="h-5 w-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForBrandsPage;