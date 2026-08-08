import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { 
  Smartphone, Database, Zap, Shield, Camera, Globe, 
  Clock, Lock, Users, FileText, ArrowRight, CheckCircle 
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <>
      <PageSEO
        title="Features - SafeOrStolen Verification Platform"
        description="Explore SafeOrStolen features: mobile app, 100+ databases, instant verification, barcode scanning, offline mode, API access. Free 2 checks included."
        keywords="SafeOrStolen features, stolen item checker features, IMEI checker features, VIN checker features, mobile app features"
        canonical="/features"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Platform Features
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to verify phones, vehicles, and electronics—whether you're a buyer, seller, or business.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Try It Free</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Smartphone className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Mobile App</h3>
                  <p className="text-muted-foreground mb-4">
                    The only stolen item verification service with a mobile app. Verify anywhere—marketplace meetups, pawn shops, car lots.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      iOS & Android
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Barcode scanner
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Offline mode
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Database className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">100+ Databases</h3>
                  <p className="text-muted-foreground mb-4">
                    Check against NCIC, GSMA, carrier blacklists, insurance claims, and international records simultaneously.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Law enforcement records
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Carrier blacklists
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Insurance claims
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Instant Results</h3>
                  <p className="text-muted-foreground mb-4">
                    Get verification results in under 3 seconds. No waiting, no callbacks—instant peace of mind.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      &lt;3 second response
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Real-time queries
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      99.9% uptime
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Verification Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What You Can Verify</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-2">📱</div>
                    <h3 className="font-bold">Phones</h3>
                    <p className="text-sm text-muted-foreground">IMEI verification</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-2">🚗</div>
                    <h3 className="font-bold">Vehicles</h3>
                    <p className="text-sm text-muted-foreground">VIN & plate lookup</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-2">💻</div>
                    <h3 className="font-bold">Electronics</h3>
                    <p className="text-sm text-muted-foreground">Serial number check</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-2">🔫</div>
                    <h3 className="font-bold">Firearms</h3>
                    <p className="text-sm text-muted-foreground">HotGunz stolen-firearms registry check</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Camera className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Barcode Scanner</h3>
                  <p className="text-muted-foreground">Point your camera at any barcode or QR code to instantly extract and verify the identifier.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Global Coverage</h3>
                  <p className="text-muted-foreground">Check against databases in 190+ countries. International stolen property coverage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Search History</h3>
                  <p className="text-muted-foreground">Access your verification history anytime. Great for businesses tracking compliance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">API Access</h3>
                  <p className="text-muted-foreground">Integrate verification into your platform, POS, or workflow with our REST API.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Team Accounts</h3>
                  <p className="text-muted-foreground">Multi-user access for businesses with role-based permissions and audit logs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Compliance Reports</h3>
                  <p className="text-muted-foreground">Automated monthly summaries for regulatory compliance (pawn shops, dealers).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try SafeOrStolen free. 2 verifications included, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">
                  Try Free Verification <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
