import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Smartphone, Database, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const StolenRegisterPage = () => {
  const comparisonData = [
    { feature: "Mobile App", safeorstolen: true, stolenregister: false },
    { feature: "Number of Databases", safeorstolen: "100+", stolenregister: "Limited" },
    { feature: "Verification Speed", safeorstolen: "3 seconds", stolenregister: "Slower" },
    { feature: "All Item Types", safeorstolen: true, stolenregister: false },
    { feature: "Barcode Scanner", safeorstolen: true, stolenregister: false },
    { feature: "Free Searches", safeorstolen: "2 free", stolenregister: "Unknown" },
    { feature: "NCIC Access", safeorstolen: true, stolenregister: false },
    { feature: "Real-time Results", safeorstolen: true, stolenregister: "Varies" }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Stolen Register - Complete Comparison | SafeOrStolen"
        description="SafeOrStolen vs Stolen Register. More databases, mobile app, faster results. See why SafeOrStolen is the better stolen item checker."
        keywords="SafeOrStolen vs Stolen Register, Stolen Register alternative, best stolen item checker, stolen property database"
        canonical="/vs/stolen-register"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Comparison</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs Stolen Register
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                More databases. Faster results. Mobile app included.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left py-4 px-6 font-semibold">Feature</th>
                          <th className="text-center py-4 px-6 font-semibold text-primary">SafeOrStolen</th>
                          <th className="text-center py-4 px-6 font-semibold">Stolen Register</th>
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
                              {typeof row.stolenregister === 'boolean' ? (
                                row.stolenregister ? (
                                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-6 w-6 text-red-500 mx-auto" />
                                )
                              ) : (
                                <span className="text-muted-foreground">{row.stolenregister}</span>
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

        {/* Key Differentiators */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose SafeOrStolen</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Database className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">100+ Databases</h3>
                    <p className="text-muted-foreground">
                      We search more databases than any competitor, including NCIC, GSMA, 
                      insurance databases, and state police records.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Smartphone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                    <p className="text-muted-foreground">
                      The only stolen item checker with a full mobile app. 
                      Scan barcodes, check items on the go, work offline.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Real-time 3-Second Results</h3>
                    <p className="text-muted-foreground">
                      Get verification results in 3 seconds. Fast enough to check 
                      items discreetly while standing in front of the seller.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">All Item Types</h3>
                    <p className="text-muted-foreground">
                      Verify phones, cars, bikes, laptops, firearms, electronics, 
                      and more. One platform for everything.
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
              <h2 className="text-3xl font-bold mb-6">Search Serial Numbers Now</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get 2 free verifications. 100+ databases. 3-second results. Mobile app included.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Search Serial Numbers Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenRegisterPage;
