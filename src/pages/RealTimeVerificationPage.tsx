import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Zap, Shield, Clock, Database, CheckCircle, ArrowRight, Globe, Lock, Activity } from 'lucide-react';

export default function RealTimeVerificationPage() {
  return (
    <>
      <PageSEO
        title="Real-Time Verification - Instant Stolen Item Checks | SafeOrStolen"
        description="Get instant stolen item verification in under 3 seconds. Real-time IMEI, VIN, and serial number checks against 100+ global databases. No waiting, immediate results."
        keywords="real-time verification, instant stolen check, fast IMEI lookup, quick VIN check, live serial number verification, immediate results"
        canonical="https://safeorstolen.com/real-time-verification"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Zap className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Under 3 Seconds</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Real-Time Verification
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Verify any item instantly. Our real-time system checks 100+ databases simultaneously, delivering results before you finish typing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/verify">Try Instant Verification</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Speed Stats */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">&lt;3s</div>
                  <p className="text-sm text-muted-foreground">Average Response</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Databases Checked</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">2.8M+</div>
                  <p className="text-sm text-muted-foreground">Items Verified</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Real-Time Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Real-Time Verification Works</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enter Identifier</h3>
                    <p className="text-muted-foreground">Type or scan the IMEI, VIN, or serial number. Our system auto-detects the identifier type and validates the format instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Parallel Database Queries</h3>
                    <p className="text-muted-foreground">Your query simultaneously hits 100+ databases worldwide—stolen property reports from all 50 states, GSMA, carrier blacklists, insurance claims, state registries, and international records.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                    <p className="text-muted-foreground">Results aggregate in under 3 seconds. You see a clear Safe ✅ or Stolen 🚨 status with details on any flags found.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Built for Speed and Accuracy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Global Edge Network</h3>
                  <p className="text-muted-foreground">Servers on 6 continents ensure low latency no matter where you're checking from. Average response under 500ms.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Database className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Unified Database Access</h3>
                  <p className="text-muted-foreground">Direct connections to law enforcement, carrier, and insurance databases. No middlemen, no delays.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Activity className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Smart Caching</h3>
                  <p className="text-muted-foreground">Recently checked items return instantly from cache. Database updates sync every 15 minutes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Real-Time Matters When</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <Clock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Meeting a Seller</h3>
                  <p className="text-sm text-muted-foreground">You're at a parking lot buying a phone. Check before handing over cash—results in seconds while the seller watches.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Pawn Shop Counter</h3>
                  <p className="text-sm text-muted-foreground">Customer at the counter. Verify the item before accepting it. No awkward waiting, no lost sales.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <Zap className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Auction Bidding</h3>
                  <p className="text-sm text-muted-foreground">Verify items before bidding ends. Real-time checks let you bid with confidence.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <Lock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Marketplace Checkout</h3>
                  <p className="text-sm text-muted-foreground">Integrated into checkout flow. Buyers see verification status before completing purchase.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Real-Time Verification</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try it yourself. 2 free verifications, instant results, no credit card required.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Verify Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
