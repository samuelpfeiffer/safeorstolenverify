import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, Smartphone, CheckCircle, AlertTriangle, Package, Monitor, RefreshCw, TrendingUp } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const ForResellers = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com/" },
      { "@type": "ListItem", "position": 2, "name": "For Electronics Resellers", "item": "https://safeorstolen.com/for-resellers" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Electronics Reseller Verification Service",
    "provider": { "@type": "Organization", "name": "SafeOrStolen" },
    "description": "Comprehensive IMEI and serial number verification for electronics resellers. Protect your business from stolen phones, laptops, and electronics.",
    "areaServed": "United States",
    "audience": { "@type": "Audience", "audienceType": "Electronics Resellers and Refurbishers" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do electronics resellers need to verify IMEI numbers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IMEI verification protects you from purchasing stolen phones that will be blacklisted, remotely locked, or confiscated. A blacklisted phone is worthless - carriers won't activate it. Without verification, you're gambling on every phone you buy."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I sell a stolen phone to a customer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You face customer chargebacks and refund demands, potential criminal liability for trafficking stolen goods, permanent suspension from platforms like eBay and Amazon, negative reviews that destroy your reputation, and civil lawsuits from original owners."
        }
      },
      {
        "@type": "Question",
        "name": "Does SafeOrStolen check iCloud lock and Google FRP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen checks iCloud Activation Lock status for iPhones and Google Factory Reset Protection for Android devices. These locks make phones unusable even if they're not officially blacklisted, so checking them is critical for resellers."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Electronics Reseller Verification - IMEI Check for Phone Resellers | SafeOrStolen"
        description="Protect your resale business from stolen electronics. Verify IMEI, serial numbers, iCloud lock before buying inventory. Volume pricing for resellers. Avoid chargebacks and platform bans."
        keywords="electronics reseller verification, phone reseller IMEI check, reseller stolen phone check, refurbisher verification, electronics buyback verification, phone wholesale verification"
        canonical="/for-resellers"
        structuredData={[breadcrumbSchema, serviceSchema, faqSchema]}
      />
      
      <TopNavigation />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'For Electronics Resellers', href: '/for-resellers' }]} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
                <Package className="h-5 w-5" />
                <span className="font-semibold">For Electronics Resellers & Refurbishers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Stop Buying{' '}
                <span className="text-destructive">Stolen Electronics</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Verify every IMEI, serial number, and activation lock before purchasing inventory. 
                Protect your business from chargebacks, platform bans, and criminal liability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/pricing">Get Reseller Pricing</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/verify">Try Free Check</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Section */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              The Hidden Risks of Electronics Reselling
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-destructive/20">
                <CardHeader>
                  <AlertTriangle className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>Blacklisted Devices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Carriers blacklist stolen phones, making them worthless. You can't activate them, 
                    can't sell them, and lose your entire investment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardHeader>
                  <RefreshCw className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>Activation Locks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    iCloud Lock (iPhone) and FRP Lock (Android) make devices unusable. 
                    There's no legitimate way to remove these locks on stolen devices.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>Chargebacks & Bans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Selling stolen devices leads to chargebacks, refund demands, and permanent 
                    suspension from eBay, Amazon, Swappa, and other platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Complete Verification for Resellers</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              One check covers everything that matters for your business
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Smartphone, title: 'IMEI Blacklist Check', desc: 'AT&T, Verizon, T-Mobile, Sprint carrier blacklists' },
                { icon: Shield, title: 'Stolen Status', desc: 'GSMA registry, law enforcement, user reports' },
                { icon: RefreshCw, title: 'iCloud Lock Status', desc: 'Check Find My iPhone activation lock' },
                { icon: Monitor, title: 'Google FRP Check', desc: 'Verify Android Factory Reset Protection' },
                { icon: CheckCircle, title: 'Insurance Claims', desc: 'Outstanding insurance or finance claims' },
                { icon: TrendingUp, title: 'Network Compatibility', desc: 'Verify carrier compatibility' },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <item.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Built for Your Workflow</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Buyback Programs</h3>
                  <p className="text-muted-foreground mb-4">
                    Verify devices before accepting them in your buyback kiosk or mail-in program. 
                    Reject stolen devices automatically.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Instant IMEI verification</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> API integration available</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Automated rejection workflow</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Wholesale Purchasing</h3>
                  <p className="text-muted-foreground mb-4">
                    Verify entire pallets before purchasing. Bulk upload IMEIs and get results instantly.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Bulk IMEI upload</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> CSV export of results</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Pre-purchase verification</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Refurbishment Operations</h3>
                  <p className="text-muted-foreground mb-4">
                    Verify every device before investing in repairs and refurbishment.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Pre-refurb verification</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Lock status confirmation</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Verification certificates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Why do electronics resellers need to verify IMEI numbers?</h3>
                <p className="text-muted-foreground">
                  IMEI verification protects you from purchasing stolen phones that will be blacklisted, 
                  remotely locked, or confiscated. A blacklisted phone is worthless - carriers won't activate it. 
                  Without verification, you're gambling on every phone you buy.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">What happens if I sell a stolen phone to a customer?</h3>
                <p className="text-muted-foreground">
                  You face customer chargebacks and refund demands, potential criminal liability for trafficking 
                  stolen goods, permanent suspension from platforms like eBay and Amazon, negative reviews that 
                  destroy your reputation, and civil lawsuits from original owners.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Does SafeOrStolen check iCloud lock and Google FRP?</h3>
                <p className="text-muted-foreground">
                  Yes, SafeOrStolen checks iCloud Activation Lock status for iPhones and Google Factory Reset 
                  Protection for Android devices. These locks make phones unusable even if they're not officially 
                  blacklisted, so checking them is critical for resellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Resale Business Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of resellers using SafeOrStolen to verify inventory.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/pricing">View Reseller Pricing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ForResellers;
