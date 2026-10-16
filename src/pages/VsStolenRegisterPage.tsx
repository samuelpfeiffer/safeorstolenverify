/** Oct 8 2026: copy fixed by hand. Removed mobile-app claims, invented source counts and response times, the competitor's price, the API row and "thousands have switched". */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { CheckCircle, X, Smartphone, Globe, Zap, Shield, ArrowRight } from 'lucide-react';

export default function VsStolenRegisterPage() {
  return (
    <>
      <PageSEO
        title="StolenRegister Alternative for US Buyers | SafeOrStolen"
        description="SafeOrStolen vs StolenRegister: what each one checks, what it costs, and which fits a US buyer checking a phone, car, bike or gun before paying."
        keywords="StolenRegister alternative, stolen register alternative, compare stolen item checkers, best stolen property database"
        canonical="https://safeorstolen.com/vs-stolenregister"
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                StolenRegister Alternative: SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                StolenRegister is a UK-based register of stolen property. SafeOrStolen is a US service that checks phones, cars, bikes, guns and electronics. Here's how they compare.
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
                        <td className="p-4 font-medium">Free installable web app</td>
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
                          <span className="text-muted-foreground">See their site</span>
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
                      <tr>
                        <td className="p-4 font-medium">Paid plan</td>
                        <td className="text-center p-4 bg-primary/5">
                          <span className="font-bold text-primary">$0.99 a check or $10/mo unlimited</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-muted-foreground">See their site</span>
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
              <h2 className="text-3xl font-bold text-center mb-12">How SafeOrStolen differs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Smartphone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Free web app</h3>
                    <p className="text-muted-foreground">
                      Install SafeOrStolen from safeorstolen.com/app on iPhone or Android and scan an IMEI or serial barcode at the meetup. It isn't an App Store download; it runs in your browser.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">What a check searches</h3>
                    <p className="text-muted-foreground">
                      Every check searches our own community theft reports and public web results. Bike checks add a national stolen-bicycle registry, gun checks add police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records, and Arizona VINs and plates are searched against Arizona law-enforcement stolen-vehicle records.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">VIN Verification</h3>
                    <p className="text-muted-foreground">
                      A SafeOrStolen VIN check decodes the year, make and model, lists open safety recalls and searches theft reports for the VIN.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Based in Arizona</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen is based in Peoria, Arizona. Questions go to safeorstolenmail@gmail.com. StolenRegister is UK-based.
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
              2 free checks with a free account, no credit card required. Then $0.99 a check or $10 a month for unlimited checks.
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
