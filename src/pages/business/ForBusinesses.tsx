import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Shield, Building2, Smartphone, FileCheck, Users, BarChart3, Lock, Zap, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ForBusinesses() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SafeOrStolen Enterprise Verification',
    description: 'Enterprise stolen goods verification for retailers, repair shops, and businesses. API integration, bulk verification, multi-location support.',
    provider: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      url: 'https://safeorstolen.com'
    },
    serviceType: 'Business Verification Service',
    areaServed: 'United States',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'For Businesses', url: '/for-businesses' }
  ];

  const faqs = [
    {
      question: 'How does SafeOrStolen API integration work for businesses?',
      answer: 'Our RESTful API allows seamless integration with your existing point-of-sale, inventory management, or CRM system. We provide full documentation, SDKs for popular languages, sandbox testing environment, and dedicated developer support. Most integrations are completed within 24-48 hours.'
    },
    {
      question: 'Can multiple business locations use one SafeOrStolen account?',
      answer: 'Yes, our enterprise plans support unlimited locations with a centralized dashboard. Each location can have its own sub-account with location-specific reporting, employee permissions, and verification history. Perfect for franchise operations, multi-store retailers, and regional chains.'
    },
    {
      question: 'What compliance reporting does SafeOrStolen provide?',
      answer: 'Compliance reports include complete verification history, audit logs with timestamps, employee activity tracking, regulatory documentation for legal and insurance purposes, and exportable data for law enforcement requests. Reports can be customized for your specific compliance requirements.'
    },
    {
      question: 'How accurate is SafeOrStolen for business verification?',
      answer: 'SafeOrStolen aggregates data from 50+ databases including NCIC, manufacturer databases, insurance company records, and law enforcement reports. Our verification accuracy exceeds 99.7% for IMEI and VIN checks. Results are returned in under 3 seconds.'
    },
    {
      question: 'What types of items can businesses verify?',
      answer: 'Businesses can verify phones (IMEI), vehicles (VIN), electronics by serial number, firearms, boats, RVs, motorcycles, power tools, laptops, tablets, gaming consoles, cameras, musical instruments, and virtually any item with a serial number or unique identifier.'
    },
    {
      question: 'Is SafeOrStolen compliant with state and federal regulations?',
      answer: 'Yes. SafeOrStolen helps businesses comply with secondhand dealer laws, pawn shop regulations, and stolen property statutes in all 50 states. Our verification creates a documented record of due diligence that protects your business legally.'
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: 'Pawn Shops & Buy-Sell-Trade',
      description: 'Instant verification at point of purchase protects against unknowingly buying stolen goods. Create audit trails for compliance.',
      benefits: ['Avoid stolen property liability', 'Comply with state regulations', 'Build customer trust', 'Reduce insurance risk']
    },
    {
      icon: Smartphone,
      title: 'Phone & Electronics Retailers',
      description: 'Verify IMEI numbers on trade-ins, used device purchases, and refurbished inventory before accepting.',
      benefits: ['Check blacklist status', 'Verify device authenticity', 'Prevent insurance fraud', 'Protect resale value']
    },
    {
      icon: Shield,
      title: 'Auto Dealers & Car Lots',
      description: 'VIN verification for used vehicle inventory, trade-ins, and auction purchases. Full history reports.',
      benefits: ['Title washing detection', 'Odometer fraud alerts', 'Theft history check', 'Salvage title detection']
    },
    {
      icon: FileCheck,
      title: 'Insurance Companies',
      description: 'Verify items before issuing policies. Cross-reference claims against theft databases.',
      benefits: ['Reduce fraudulent claims', 'Verify declared values', 'Identify recovered items', 'Streamline claims processing']
    },
    {
      icon: Users,
      title: 'Property Management',
      description: 'Verify appliances, HVAC equipment, and fixtures in rental properties. Protect against tenant fraud.',
      benefits: ['Verify tenant belongings', 'Document property assets', 'Recover stolen items', 'Reduce liability']
    },
    {
      icon: Zap,
      title: 'Equipment Rental Companies',
      description: 'Verify tools, machinery, vehicles, and equipment before rental. Protect against renting stolen property.',
      benefits: ['Serial number tracking', 'Rental verification', 'Asset recovery', 'Fraud prevention']
    }
  ];

  const features = [
    { icon: BarChart3, title: 'Bulk Verification', description: 'Upload CSV files to verify hundreds of items at once' },
    { icon: Lock, title: 'API Access', description: 'RESTful API with 99.9% uptime SLA' },
    { icon: Users, title: 'Team Management', description: 'Unlimited employee accounts with role-based permissions' },
    { icon: FileCheck, title: 'Compliance Reports', description: 'Automated reports for legal and regulatory requirements' },
    { icon: Shield, title: 'White-Label', description: 'Custom branded reports for your customers' },
    { icon: Zap, title: '3-Second Results', description: 'Instant verification at point of sale' }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen for Businesses - Enterprise Stolen Goods Verification"
        description="Enterprise stolen goods verification for pawn shops, electronics retailers, auto dealers, and businesses. API integration, bulk verification, multi-location support, compliance reporting. Protect your business from stolen property liability."
        keywords="business verification service, enterprise stolen goods check, pawn shop verification software, retail verification API, secondhand dealer compliance, stolen property check business"
        canonical="/for-businesses"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise Stolen Goods Verification for Businesses
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Protect your business from unknowingly handling stolen property. SafeOrStolen provides instant verification for pawn shops, electronics retailers, auto dealers, and any business handling secondhand items.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/pricing">View Business Plans</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/verify">Try Free Verification</Link>
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>50+ Database Sources</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>99.7% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>3-Second Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>All 50 States</span>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Industries We Serve</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From pawn shops to auto dealers, SafeOrStolen provides specialized verification solutions for businesses that handle secondhand goods.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Enterprise Features</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything your business needs for comprehensive stolen goods verification and compliance.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg border bg-card">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">How Business Verification Works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer Brings Item</h3>
                  <p className="text-muted-foreground">When a customer wants to sell, trade, or pawn an item, locate the serial number, IMEI, or VIN.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Verification</h3>
                  <p className="text-muted-foreground">Enter the identifier in SafeOrStolen. Our system checks 50+ databases in under 3 seconds and returns a clear status.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Documented Decision</h3>
                  <p className="text-muted-foreground">Make an informed decision with confidence. All verifications are logged for compliance and audit purposes.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Protection</h3>
                  <p className="text-muted-foreground">Your verification record demonstrates due diligence, protecting your business from liability if an item is later found to be stolen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg p-6 bg-card">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses using SafeOrStolen to verify secondhand items and protect against stolen property liability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/pricing">View Business Plans</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/verify">Start Free Trial</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Questions? Email <a href="mailto:business@safeorstolen.com" className="text-primary hover:underline">business@safeorstolen.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
