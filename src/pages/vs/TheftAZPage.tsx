import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Smartphone, Globe, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheftAZPage = () => {
  const comparisonData = [
    { feature: "Coverage", safeorstolen: "Nationwide + Global", theftaz: "Arizona Only" },
    { feature: "Mobile App", safeorstolen: true, theftaz: false },
    { feature: "Item Types", safeorstolen: "Phones, Cars, Bikes, Guns, Electronics, Jewelry", theftaz: "Limited" },
    { feature: "Databases", safeorstolen: "100+ including NCIC, GSMA, Insurance", theftaz: "Arizona state only" },
    { feature: "Real-time Results", safeorstolen: true, theftaz: "Limited" },
    { feature: "Barcode Scanner", safeorstolen: true, theftaz: false },
    { feature: "Verification Speed", safeorstolen: "3 seconds", theftaz: "Varies" },
    { feature: "Free Searches", safeorstolen: "2 free", theftaz: "Unknown" }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs TheftAZ - Why We're Better | SafeOrStolen"
        description="SafeOrStolen vs TheftAZ comparison. Nationwide coverage, mobile app, 100+ databases. See why SafeOrStolen is the better choice."
        keywords="SafeOrStolen vs TheftAZ, TheftAZ alternative, stolen item checker Arizona, nationwide stolen item check"
        canonical="/vs/theftaz"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Comparison</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs TheftAZ
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                The smarter choice for stolen item verification
              </p>

              <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg mb-8">
                <p className="text-lg font-semibold text-primary">
                  We're the ONLY stolen item checker with a mobile app
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left py-4 px-6 font-semibold">Feature</th>
                          <th className="text-center py-4 px-6 font-semibold text-primary">SafeOrStolen</th>
                          <th className="text-center py-4 px-6 font-semibold">TheftAZ</th>
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
                              {typeof row.theftaz === 'boolean' ? (
                                row.theftaz ? (
                                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-6 w-6 text-red-500 mx-auto" />
                                )
                              ) : (
                                <span className="text-muted-foreground">{row.theftaz}</span>
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

        {/* Why SafeOrStolen Wins */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why SafeOrStolen Wins</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
                    <p className="text-muted-foreground">
                      TheftAZ only covers Arizona. SafeOrStolen covers all 50 states plus global databases. 
                      Whether you're buying in Phoenix or Philadelphia, we've got you covered.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Smartphone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen has a full iOS and Android app with barcode scanning. 
                      Check items on the spot at pawn shops, garage sales, or marketplace meetups.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Database className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">100+ Databases</h3>
                    <p className="text-muted-foreground">
                      We search NCIC, GSMA, NICB, insurance claims, police reports, and more. 
                      TheftAZ is limited to Arizona state records only.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">3-Second Results</h3>
                    <p className="text-muted-foreground">
                      Get instant verification while standing in front of the seller. 
                      Fast enough to check discreetly without the seller knowing.
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
              <h2 className="text-3xl font-bold mb-6">Try SafeOrStolen Free</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get 2 free verifications. No credit card required. 
                Nationwide coverage, mobile app, instant results.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Try SafeOrStolen Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TheftAZPage;
