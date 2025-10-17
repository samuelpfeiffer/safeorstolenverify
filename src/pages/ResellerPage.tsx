import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ResellerPage = () => {
  return (
    <>
      <PageSEO
        title="For Resellers | Bulk Verification & Marketplace Protection Tools"
        description="Protect your marketplace business with bulk verification tools. Check inventory authenticity, avoid stolen goods, and build customer trust. API integration available."
        keywords="reseller verification, bulk item check, marketplace seller tools, inventory verification, secondhand reseller protection"
        canonical="/resellers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              For Marketplace Resellers
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Protect Your Business<br />
              <span className="text-primary">Verify Every Item</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bulk verification tools for marketplace sellers. Check inventory authenticity, 
              avoid stolen goods, and build trust with your customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  View Plans <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Bulk Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check multiple items at once with our bulk verification API. Perfect for high-volume resellers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Build Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Show customers you verify authenticity. Reduce returns and increase buyer confidence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamlessly integrate verification into your existing marketplace workflows and tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4 py-16 bg-muted/30 rounded-3xl my-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Resellers Choose Us</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Avoid Legal Issues', desc: 'Stay compliant by verifying items before selling' },
                { title: 'Protect Reputation', desc: 'Build credibility with verified listings' },
                { title: 'Reduce Returns', desc: 'Fewer disputes from stolen item claims' },
                { title: 'Save Time', desc: 'Automated bulk checks instead of manual verification' },
                { title: 'Marketplace Integration', desc: 'Works with eBay, Poshmark, Mercari, and more' },
                { title: 'Real-time Reports', desc: 'Instant verification certificates for customers' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of resellers using SafeOrStolen to verify authenticity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/pricing">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/api-docs">API Docs</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResellerPage;
