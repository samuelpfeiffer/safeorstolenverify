import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
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
      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Enterprise Verification API for Marketplaces and Businesses</h1>
          <p>
            SafeOrStolen offers enterprise-grade verification technology for marketplaces, pawn shops, 
            auction houses, and e-commerce platforms. Integrate our stolen goods verification API to 
            protect your business, reduce liability, and build customer trust.
          </p>
          
          <h2>Why Businesses Choose SafeOrStolen</h2>
          <ul>
            <li><strong>Reduce Liability:</strong> Prevent unknowingly handling stolen merchandise</li>
            <li><strong>Build Trust:</strong> Show customers you verify item legitimacy</li>
            <li><strong>Increase Revenue:</strong> Attract quality sellers with verified platform</li>
            <li><strong>Scale Operations:</strong> Handle thousands of verifications per day</li>
            <li><strong>Fast Integration:</strong> RESTful API integrates in hours, not weeks</li>
          </ul>
          
          <h2>Enterprise Features</h2>
          <p>
            Real-time verification API with 99.2% accuracy, custom white-label solutions, bulk verification 
            tools, dedicated account management, priority support 24/7, and flexible pricing for high volume.
          </p>
          
          <h2>Industries We Serve</h2>
          <ul>
            <li><strong>Online Marketplaces:</strong> eBay, Facebook Marketplace, OfferUp competitors</li>
            <li><strong>Pawn Shops:</strong> Point-of-sale verification for inventory</li>
            <li><strong>Auction Houses:</strong> Pre-auction item legitimacy checks</li>
            <li><strong>E-commerce Platforms:</strong> Third-party seller verification</li>
            <li><strong>Rental Companies:</strong> Equipment and vehicle verification</li>
            <li><strong>Insurance Companies:</strong> Claims verification and fraud prevention</li>
          </ul>
          
          <h2>API Capabilities</h2>
          <p>
            Verify IMEI, VIN, serial numbers with single API call. Check multiple databases simultaneously. 
            Receive real-time results with confidence scores. Access historical verification data. Generate 
            detailed reports and certificates. Customize verification thresholds per your business needs.
          </p>
          
          <h2>Success Stories</h2>
          <p>
            Our enterprise clients have reduced stolen goods incidents by 94%, prevented $2.3M in potential 
            losses, and increased customer confidence scores significantly. Integration typically takes less 
            than 2 hours with our comprehensive documentation and developer support.
          </p>
          
          <h2>Schedule Enterprise Demo</h2>
          <p>
            See our API in action with a personalized demo. Learn how SafeOrStolen integrates with your 
            existing systems, review pricing options, and get custom ROI analysis for your business. 
            Contact our enterprise sales team: support@safeorstolen.com or call (206) 249-2203.
          </p>
        </div>
      </noscript>

      <PageSEO
        title="Enterprise Verification API for Marketplaces - Safe or Stolen"
        description="Integrate our verification technology into your platform to protect users and reduce fraud. Enterprise-grade API for marketplace verification."
        keywords="marketplace verification API, enterprise fraud prevention, stolen goods API, marketplace integration"
        canonical="/for-brands"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'For Brands', href: '/for-brands' }]} />
        </div>
        
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
                    Schedule Live Demo
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