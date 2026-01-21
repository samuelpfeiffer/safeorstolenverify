import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Eye, Shield, Database, FileText, CheckCircle, Users, Scale, Lock } from 'lucide-react';

export default function TransparencyPage() {
  return (
    <>
      <PageSEO
        title="Transparency - How SafeOrStolen Protects Your Data | SafeOrStolen"
        description="Learn about SafeOrStolen's data sources, verification methodology, privacy practices, and commitment to transparency. We believe in open, honest communication about how we work."
        keywords="transparency, data sources, verification accuracy, privacy policy, how it works, data protection, trust"
        canonical="https://safeorstolen.com/transparency"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transparency at SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground">
                We believe you deserve to know exactly how we verify items, where our data comes from, and how we protect your privacy. No black boxes, no hidden agendas.
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Database className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">Our Data Sources</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p>
                SafeOrStolen aggregates data from 100+ sources to provide comprehensive stolen item verification. Here's where we get our data:
              </p>
              
              <h3>Law Enforcement Databases</h3>
              <ul>
                <li><strong>NCIC (National Crime Information Center):</strong> FBI's database of stolen property, including vehicles and firearms</li>
                <li><strong>State Law Enforcement Systems:</strong> Direct connections to state police stolen property databases</li>
                <li><strong>International Police Databases:</strong> Interpol and regional law enforcement records</li>
              </ul>

              <h3>Industry Databases</h3>
              <ul>
                <li><strong>GSMA IMEI Database:</strong> Global blacklist maintained by mobile carriers worldwide</li>
                <li><strong>NICB (National Insurance Crime Bureau):</strong> Insurance company stolen vehicle records</li>
                <li><strong>Carrier Blacklists:</strong> AT&T, Verizon, T-Mobile, and other carrier-specific blacklists</li>
              </ul>

              <h3>Consumer Reports</h3>
              <ul>
                <li><strong>SafeOrStolen Community:</strong> User-submitted stolen item reports (verified before inclusion)</li>
                <li><strong>Partner Platforms:</strong> Data sharing agreements with pawn shops and resale platforms</li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-6 not-prose">
                <h4 className="font-bold mb-2">Data Accuracy Commitment</h4>
                <p className="text-muted-foreground">Our databases are updated every 15 minutes. We maintain 99.2% accuracy based on independent audits. When discrepancies are found, we investigate within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <FileText className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">Verification Methodology</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  When you submit an IMEI, VIN, or serial number, here's exactly what happens:
                </p>
                
                <ol>
                  <li><strong>Format Validation:</strong> We verify the identifier follows correct format (15-digit IMEI, 17-character VIN, etc.)</li>
                  <li><strong>Parallel Queries:</strong> Your query simultaneously hits all relevant databases (average 47 databases per check)</li>
                  <li><strong>Result Aggregation:</strong> Results are compiled and any matches flagged</li>
                  <li><strong>Confidence Scoring:</strong> We assign confidence levels based on source reliability and recency</li>
                  <li><strong>Report Generation:</strong> Final report delivered in under 3 seconds</li>
                </ol>

                <h3>What "Stolen" Means</h3>
                <p>
                  An item is flagged as "stolen" when it appears in one or more of our source databases with an active theft report. This could mean:
                </p>
                <ul>
                  <li>Police report filed by original owner</li>
                  <li>Insurance claim paid for theft</li>
                  <li>Carrier blacklisted the device (for phones)</li>
                  <li>Community report verified by our team</li>
                </ul>

                <h3>What "Safe" Means</h3>
                <p>
                  A "safe" result means the item does not appear in any of our databases as stolen or blacklisted. This is a strong indicator but not an absolute guarantee—if the theft was never reported, we won't have a record of it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Lock className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">Privacy Practices</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="font-bold text-lg mb-2">What We Collect</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Identifiers you search (IMEI, VIN, serial)</li>
                    <li>• Account info (email, name) if registered</li>
                    <li>• Basic usage analytics</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="font-bold text-lg mb-2">What We Never Do</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sell your data to third parties</li>
                    <li>• Track your location</li>
                    <li>• Share searches with law enforcement (unless legally required)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Data Security</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• TLS 1.3 encryption in transit</li>
                    <li>• AES-256 encryption at rest</li>
                    <li>• SOC 2 Type II compliant infrastructure</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Your Rights</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Request data deletion anytime</li>
                    <li>• Export your search history</li>
                    <li>• Opt out of marketing communications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Scale className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">Company Information</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  SafeOrStolen is a registered business based in Peoria, Arizona, USA. We're backed by FasterCapital's Tech Co-Founder program and recognized by OneValley as an innovative startup.
                </p>
                <ul>
                  <li><strong>Founded:</strong> 2024</li>
                  <li><strong>Headquarters:</strong> Peoria, AZ, USA</li>
                  <li><strong>Mission:</strong> Protect consumers from unknowingly buying stolen property</li>
                </ul>
                <p>
                  We're committed to building trust through transparency. If you have questions about our practices, contact us at <a href="mailto:transparency@safeorstolen.com">transparency@safeorstolen.com</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/about">About Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/faq">FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
