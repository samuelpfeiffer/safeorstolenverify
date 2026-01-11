import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Smartphone, Database, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckMendPage = () => {
  const comparisonData = [
    { feature: "Free Searches", safeorstolen: "2 free", checkmend: "None (paid only)" },
    { feature: "Mobile App", safeorstolen: true, checkmend: false },
    { feature: "Price Per Check", safeorstolen: "$0-2", checkmend: "$5-10" },
    { feature: "Item Types", safeorstolen: "All (phones, cars, bikes, guns)", checkmend: "Phones/electronics only" },
    { feature: "Databases", safeorstolen: "100+", checkmend: "Limited" },
    { feature: "Barcode Scanner", safeorstolen: true, checkmend: false },
    { feature: "Verification Speed", safeorstolen: "3 seconds", checkmend: "30+ seconds" },
    { feature: "Offline Mode", safeorstolen: true, checkmend: false }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs CheckMEND - IMEI Checker Comparison | SafeOrStolen"
        description="SafeOrStolen vs CheckMEND for IMEI checks. Free searches, mobile app, more databases. The better choice for phone verification."
        keywords="SafeOrStolen vs CheckMEND, CheckMEND alternative, free IMEI checker, IMEI check comparison"
        canonical="/vs/checkmend"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="destructive" className="mb-4">CheckMEND Has No App</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs CheckMEND
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Free searches. Mobile app. More databases. Better choice.
              </p>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Differences</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <DollarSign className="h-10 w-10 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">SafeOrStolen: Free Searches</h3>
                    <p className="text-muted-foreground">
                      Get 2 free IMEI checks with SafeOrStolen. No credit card required. 
                      CheckMEND is paid-only with no free tier.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-500/50 bg-red-50/50 dark:bg-red-950/20">
                  <CardContent className="p-6">
                    <X className="h-10 w-10 text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">CheckMEND: Paid Only</h3>
                    <p className="text-muted-foreground">
                      CheckMEND charges $5-10 per check with no free option. 
                      No way to try before you buy.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left py-4 px-6 font-semibold">Feature</th>
                          <th className="text-center py-4 px-6 font-semibold text-primary">SafeOrStolen</th>
                          <th className="text-center py-4 px-6 font-semibold">CheckMEND</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={index} className="border-t">
                            <td className="py-4 px-6 font-medium">{row.feature}</td>
                            <td className="py-4 px-6 text-center">
                              {typeof row.safeorstolen === 'boolean' ? (
                                row.safeorstolen ? (
                                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-6 w-6 text-red-500 mx-auto" />
                                )
                              ) : (
                                <span className="text-green-600 font-medium">{row.safeorstolen}</span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {typeof row.checkmend === 'boolean' ? (
                                row.checkmend ? (
                                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-6 w-6 text-red-500 mx-auto" />
                                )
                              ) : (
                                <span className="text-muted-foreground">{row.checkmend}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why SafeOrStolen */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why SafeOrStolen is Better</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Smartphone className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Mobile App</h3>
                    <p className="text-sm text-muted-foreground">
                      iOS & Android app with barcode scanning. CheckMEND has no app.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Database className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">More Than Phones</h3>
                    <p className="text-sm text-muted-foreground">
                      Check cars, bikes, guns, laptops. CheckMEND is phones only.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Zap className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">100+ Databases</h3>
                    <p className="text-sm text-muted-foreground">
                      More comprehensive search across more stolen property databases.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Check IMEI Free</h2>
              <p className="text-lg text-muted-foreground mb-8">
                2 free IMEI checks. No credit card. Mobile app included.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Check IMEI Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CheckMendPage;
