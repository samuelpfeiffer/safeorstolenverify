import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Database, Shield, Globe, Building2, FileCheck, Clock, ArrowRight } from 'lucide-react';

export default function DataSourcesPage() {
  return (
    <>
      <PageSEO
        title="Data Sources - Where SafeOrStolen Gets Verification Data"
        description="Learn about SafeOrStolen's 100+ data sources for stolen item verification. We check NCIC, GSMA, carrier blacklists, insurance databases, and more."
        keywords="data sources, verification databases, NCIC, GSMA, stolen property database, carrier blacklist, insurance claims"
        canonical="https://safeorstolen.com/data-sources"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Database className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Data Sources
              </h1>
              <p className="text-xl text-muted-foreground">
                SafeOrStolen checks 100+ databases worldwide to verify if items are stolen. Here's where our data comes from.
              </p>
            </div>
          </div>
        </section>

        {/* Data Categories */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Law Enforcement */}
              <Card>
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Law Enforcement Databases</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">NCIC (National Crime Information Center)</strong>
                        <p className="text-sm">FBI's central database for stolen property, vehicles, and firearms</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">State Law Enforcement Systems</strong>
                        <p className="text-sm">Direct connections to 50 state police databases</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Interpol Stolen Property</strong>
                        <p className="text-sm">International police stolen vehicle and art database</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Industry Databases */}
              <Card>
                <CardContent className="p-8">
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Industry Databases</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">GSMA IMEI Database</strong>
                        <p className="text-sm">Global mobile carrier blacklist with 15B+ device records</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">NICB (National Insurance Crime Bureau)</strong>
                        <p className="text-sm">Insurance company stolen vehicle records</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">NMVTIS (National Motor Vehicle Title)</strong>
                        <p className="text-sm">Vehicle title history and branded titles</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Carrier Databases */}
              <Card>
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Carrier Blacklists</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">US Carrier Blacklists</strong>
                        <p className="text-sm">AT&T, Verizon, T-Mobile, Sprint device blacklists</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">International Carriers</strong>
                        <p className="text-sm">200+ carriers across 190 countries</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Manufacturer Activation Lock</strong>
                        <p className="text-sm">Apple, Samsung, Google device lock status</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Community Reports */}
              <Card>
                <CardContent className="p-8">
                  <Database className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Community & Partner Data</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">SafeOrStolen Community</strong>
                        <p className="text-sm">User-reported stolen items (verified before inclusion)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Pawn Shop Networks</strong>
                        <p className="text-sm">Partner pawn shop transaction records</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Insurance Claims</strong>
                        <p className="text-sm">Paid theft claims from major insurers</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Update Frequency */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Real-Time Updates</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our databases sync every 15 minutes with source systems. When an item is reported stolen, it typically appears in our system within 1-4 hours depending on the reporting agency.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">15 min</div>
                    <p className="text-sm text-muted-foreground">Database sync frequency</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
                    <p className="text-sm text-muted-foreground">Verification accuracy</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <p className="text-sm text-muted-foreground">Databases checked</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Verify Against Our Databases</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check any IMEI, VIN, or serial number against our comprehensive database network.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Start Verification <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
