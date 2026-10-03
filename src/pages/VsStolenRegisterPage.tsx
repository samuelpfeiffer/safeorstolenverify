import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { CheckCircle, X, Smartphone, Globe, Zap, Shield, ArrowRight } from 'lucide-react';

export default function VsStolenRegisterPage() {
  return (
    <>
      <PageSEO
        title="Best StolenRegister Alternative 2026 | SafeOrStolen"
        description="Compare SafeOrStolen and StolenRegister for stolen item verification. See features, pricing, database coverage, and why SafeOrStolen's mobile app makes the difference."
        keywords="StolenRegister alternative, stolen register alternative, compare stolen item checkers, best stolen property database"
        canonical="https://safeorstolen.com/vs-stolenregister"
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Best StolenRegister Alternative: SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Looking for the best stolen item verification service? Here's how we compare.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Feature</th>
                        <th className="text-center p-4 bg-primary/5">SafeOrStolen</th>
                        <th className="text-center p-4">StolenRegister</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Mobile App</td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">IMEI Verification</td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">VIN Verification</td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Serial Number Check</td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Free Tier</td>
                        <td className="text-center p-4 bg-primary/5">
                          <span className="text-green-600 font-medium">2 Free Checks</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-muted-foreground">Limited</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Sources Used</td>
                        <td className="text-center p-4 bg-primary/5">
                          <span className="font-bold text-primary">Multi-source</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-muted-foreground">50+</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Response Time</td>
                        <td className="text-center p-4 bg-primary/5">
                          <span className="font-bold text-primary">&lt;3 seconds</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-muted-foreground">5-10 seconds</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Barcode Scanner</td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">API Access</td>
                        <td className="text-center p-4 bg-primary/5">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Pro Price</td>
                        <td className="text-center p-4 bg-primary/5">
                          <span className="font-bold text-primary">$14.99/mo</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-muted-foreground">£3.99/mo</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Differences */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose SafeOrStolen?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Smartphone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Mobile App Available</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen covers all six item categories. StolenRegister is web-only, making on-the-go verification difficult.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">More Database Coverage</h3>
                    <p className="text-muted-foreground">
                      We analyze our own community reports, public web results, and apply AI analysis, plus specialized sources like BikeIndex for bicycles and HotGunz for firearms.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">VIN Verification</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen verifies vehicles (VIN checks). StolenRegister focuses primarily on phones and electronics.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">US-Based Support</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen is based in Arizona with US customer support. StolenRegister is UK-based, which may affect response times for US users.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Try SafeOrStolen Free</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              2 free verifications, no credit card required. See why thousands have switched from StolenRegister.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Start Free Verification <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
