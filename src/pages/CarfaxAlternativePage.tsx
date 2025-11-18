import { Shield, Zap, DollarSign, Check, Download, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { useNavigate } from 'react-router-dom';

export default function CarfaxAlternativePage() {
  const navigate = useNavigate();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Carfax Alternative - SafeOrStolen Vehicle Verification",
    "description": "Free Carfax alternative. Check VIN numbers, stolen vehicle status, and vehicle history without paying for Carfax. Download free app or verify online instantly.",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Vehicle Checker",
      "applicationCategory": "UtilitiesApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  const comparison = [
    { feature: "VIN Verification", carfax: "✓ ($39.99)", safeorstolen: "✓ FREE" },
    { feature: "Stolen Vehicle Check", carfax: "✓ ($39.99)", safeorstolen: "✓ FREE" },
    { feature: "Mobile App", carfax: "✓ (Paid)", safeorstolen: "✓ FREE" },
    { feature: "Instant Results", carfax: "✓", safeorstolen: "✓" },
    { feature: "No Registration Required", carfax: "✗", safeorstolen: "✓" },
    { feature: "Unlimited Checks", carfax: "✗ (Pay per report)", safeorstolen: "✓ FREE" },
  ];

  return (
    <>
      <PageSEO
        title="Free Carfax Alternative - Vehicle VIN Check | SafeOrStolen"
        description="Free Carfax alternative for VIN verification and stolen vehicle checks. No subscription, no fees. Download free app or check online instantly. Better than Carfax for stolen vehicle verification."
        keywords="carfax alternative, free carfax, carfax alternative free, vin check free, stolen vehicle check, free vin lookup, carfax free alternative, vehicle history free"
        canonical="/carfax-alternative"
        structuredData={schema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <Car className="w-16 h-16 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Free Carfax Alternative</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't pay $39.99 for Carfax. Get FREE VIN verification, stolen vehicle checks, and vehicle history instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/verify')}>
              Check VIN Free Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/mobile-app')}>
              <Download className="w-5 h-5 mr-2" />
              Download Free App
            </Button>
          </div>
        </section>

        {/* Why Choose SafeOrStolen */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why SafeOrStolen Over Carfax?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">100% FREE Forever</h3>
                <p className="text-muted-foreground">
                  Carfax charges $39.99+ per report. SafeOrStolen is completely free - no hidden fees, no subscriptions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Stolen Vehicle Focus</h3>
                <p className="text-muted-foreground">
                  We specialize in stolen vehicle verification - checking 100+ police databases that Carfax doesn't access.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                <p className="text-muted-foreground">
                  Get results in seconds. No account required, no waiting, no email verification. Just instant verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Carfax vs SafeOrStolen Comparison</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4">Feature</th>
                        <th className="text-center py-4 px-4">Carfax</th>
                        <th className="text-center py-4 px-4 bg-primary/10">SafeOrStolen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-4 px-4 font-medium">{row.feature}</td>
                          <td className="text-center py-4 px-4">{row.carfax}</td>
                          <td className="text-center py-4 px-4 bg-primary/5 font-bold text-primary">{row.safeorstolen}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What You Get */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">What SafeOrStolen Checks</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Stolen vehicle databases (100+ sources)",
              "Police theft reports (US & Canada)",
              "Insurance theft claims",
              "VIN verification & validation",
              "Real-time law enforcement databases",
              "International stolen vehicle registries",
              "State DMV stolen records",
              "FBI National Crime Database"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16 bg-muted/50 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">How to Check VIN for Free</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-xl mb-2">Enter VIN Number</h3>
              <p className="text-muted-foreground">Visit SafeOrStolen.com or download our free app. Enter the 17-digit VIN number.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-xl mb-2">Instant Verification</h3>
              <p className="text-muted-foreground">Our system checks 100+ stolen vehicle databases in real-time.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-xl mb-2">Get Results</h3>
              <p className="text-muted-foreground">See if the vehicle is stolen, salvaged, or safe to buy - all 100% free.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Stop Paying for Carfax. Start Using SafeOrStolen FREE.</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 100,000+ users who switched from Carfax to SafeOrStolen and saved thousands of dollars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/verify')}>
              Check Vehicle VIN Free
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/mobile-app')}>
              <Download className="w-5 h-5 mr-2" />
              Download Free Mobile App
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
