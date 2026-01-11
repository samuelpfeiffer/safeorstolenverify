import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Smartphone, Database, Infinity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const NICBPage = () => {
  const comparisonData = [
    { feature: "Daily Search Limit", safeorstolen: "No limit", nicb: "5 per day" },
    { feature: "Mobile App", safeorstolen: true, nicb: false },
    { feature: "Item Types", safeorstolen: "All (phones, cars, bikes, guns)", nicb: "Vehicles only" },
    { feature: "Number of Databases", safeorstolen: "100+", nicb: "1 (NICB only)" },
    { feature: "Barcode Scanner", safeorstolen: true, nicb: false },
    { feature: "Verification Speed", safeorstolen: "3 seconds", nicb: "Varies" },
    { feature: "NCIC Access", safeorstolen: true, nicb: false },
    { feature: "IMEI Checks", safeorstolen: true, nicb: false }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs NICB VINCheck - No Daily Limits | SafeOrStolen"
        description="SafeOrStolen vs NICB VINCheck comparison. No 5-per-day limit, mobile app, more databases. Better stolen vehicle verification."
        keywords="SafeOrStolen vs NICB, NICB VINCheck alternative, no limit VIN check, stolen vehicle verification"
        canonical="/vs/nicb"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Infinity className="h-4 w-4 mr-2" />
                No Daily Limits
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs NICB VINCheck
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                No 5-per-day limit. Mobile app. More databases.
              </p>

              <div className="inline-block bg-destructive/10 px-6 py-3 rounded-lg">
                <p className="text-lg font-semibold text-destructive">
                  NICB limits you to 5 VIN checks per day
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
                          <th className="text-center py-4 px-6 font-semibold">NICB VINCheck</th>
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
                              {typeof row.nicb === 'boolean' ? (
                                row.nicb ? (
                                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-6 w-6 text-red-500 mx-auto" />
                                )
                              ) : (
                                <span className="text-muted-foreground">{row.nicb}</span>
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

        {/* Key Advantages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Advantages</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Infinity className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No 5-Per-Day Limit</h3>
                    <p className="text-muted-foreground">
                      NICB VINCheck limits you to 5 searches per day. SafeOrStolen has no 
                      daily limit - check as many vehicles as you need.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Smartphone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                    <p className="text-muted-foreground">
                      Check vehicles on the go with our iOS and Android app. 
                      Scan VINs with your camera. NICB has no app.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Database className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">NICB PLUS 100+ Databases</h3>
                    <p className="text-muted-foreground">
                      We search the NICB database AND 100+ other sources including 
                      NCIC, state databases, and insurance records.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">More Than Just Vehicles</h3>
                    <p className="text-muted-foreground">
                      Check phones, bikes, laptops, firearms, and more. 
                      NICB VINCheck only works for vehicles.
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
              <h2 className="text-3xl font-bold mb-6">Check VIN Now - No Limits</h2>
              <p className="text-lg text-muted-foreground mb-8">
                No 5-per-day restriction. Mobile app. 100+ databases.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Check VIN Now - No Limits</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NICBPage;
