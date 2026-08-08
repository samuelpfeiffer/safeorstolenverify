import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Shield, Zap, CheckCircle, Code, Globe, Lock, Store, ArrowRight, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export default function MarketplaceIntegrationPage() {
  return (
    <>
      <PageSEO
        title="Marketplace Integration - SafeOrStolen API for E-Commerce Platforms"
        description="Integrate SafeOrStolen's stolen item verification into your marketplace. API documentation, webhooks, and enterprise solutions for eBay, Amazon, Facebook Marketplace integrations."
        keywords="marketplace integration, stolen item API, e-commerce verification, marketplace safety API, seller verification, buyer protection integration"
        canonical="https://safeorstolen.com/marketplace-integration"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Code className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">API & Integration Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Marketplace Integration
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Add stolen item verification to your marketplace, e-commerce platform, or application. Protect buyers, build trust, and reduce fraud with SafeOrStolen's enterprise API.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/pricing">View API Pricing</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:support@safeorstolen.com">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Integration Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">REST API</h3>
                  <p className="text-muted-foreground mb-4">
                    Full-featured RESTful API for custom integrations. Verify IMEI, VIN, and serial numbers programmatically with instant results.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      JSON responses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      99.9% uptime SLA
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Sandbox testing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow border-primary">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full w-fit mb-4">Most Popular</div>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Webhooks</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time notifications when stolen items are listed on your platform. Automatic flagging and seller alerts.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Real-time alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Auto-moderation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Retry logic
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Store className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Pre-Built Plugins</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready-to-install plugins for popular e-commerce platforms. No coding required for standard integrations.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Shopify
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      WooCommerce
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Magento
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Marketplace Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-lg border">
                  <ShoppingCart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Buyer Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    Give buyers confidence with verified listings. Display trust badges on items that have been checked against stolen property databases.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reduce buyer disputes and chargebacks</li>
                    <li>• Increase conversion rates on high-value items</li>
                    <li>• Build marketplace reputation for safety</li>
                  </ul>
                </div>
                <div className="bg-card p-8 rounded-lg border">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Seller Verification</h3>
                  <p className="text-muted-foreground mb-4">
                    Require sellers to verify high-value electronics, vehicles, and firearms before listing. Weed out bad actors automatically.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automated listing moderation</li>
                    <li>• Flag suspicious serial numbers</li>
                    <li>• Seller reputation scoring</li>
                  </ul>
                </div>
                <div className="bg-card p-8 rounded-lg border">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Compliance</h3>
                  <p className="text-muted-foreground mb-4">
                    Meet regulatory requirements for stolen goods prevention. Document verification for law enforcement cooperation.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• State pawn shop compliance</li>
                    <li>• eBay/Amazon seller requirements</li>
                    <li>• Law enforcement data sharing</li>
                  </ul>
                </div>
                <div className="bg-card p-8 rounded-lg border">
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Fraud Prevention</h3>
                  <p className="text-muted-foreground mb-4">
                    Detect and prevent stolen goods from being sold through your platform. Protect your marketplace from becoming a fencing operation.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-time fraud detection</li>
                    <li>• Pattern analysis for repeat offenders</li>
                    <li>• Integration with trust & safety teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">API Features</h2>
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Sub-Second Response</h4>
                      <p className="text-sm text-muted-foreground">Average response time under 500ms for real-time verification during checkout.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Enterprise Security</h4>
                      <p className="text-sm text-muted-foreground">TLS 1.3 encryption, API key rotation, IP whitelisting, audit logs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Global Coverage</h4>
                      <p className="text-sm text-muted-foreground">Check against 100+ databases worldwide including stolen property reports from all 50 states, carrier and manufacturer blacklists, and international registries.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Developer-Friendly</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive docs, SDKs for Python/Node/PHP, Postman collection, sandbox environment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Batch Verification</h4>
                      <p className="text-sm text-muted-foreground">Bulk check up to 1,000 items per request for inventory management.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">99.9% Uptime SLA</h4>
                      <p className="text-sm text-muted-foreground">Enterprise-grade infrastructure with redundant systems and 24/7 monitoring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our sales team for API access, custom pricing, and integration support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:support@safeorstolen.com">
                  Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
