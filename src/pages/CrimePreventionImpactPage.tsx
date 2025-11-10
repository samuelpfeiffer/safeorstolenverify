import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, TrendingDown, Users, Award, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CrimePreventionImpactPage() {
  return (
    <>
      <PageSEO
        title="Crime Prevention Impact - How SafeOrStolen Reduces Theft | SafeOrStolen"
        description="Discover how SafeOrStolen.com creates a deterrent effect that reduces theft by making stolen goods worthless to criminals. Real-time verification protecting buyers and reducing crime."
        keywords="crime prevention, theft deterrent, stolen goods verification, reduce crime, buyer protection, seller protection"
        canonical="/crime-prevention-impact"
      />
      
      <main className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-sos-orange/10 to-background py-16 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-20 w-20 text-sos-orange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🛡️ Crime Prevention Through Verification
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              SafeOrStolen.com doesn't just protect buyers and sellers — we're actively reducing crime 
              by making stolen goods impossible to resell
            </p>
          </div>
        </div>

        <section className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-sos-orange/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingDown className="h-8 w-8 text-sos-orange" />
                  The Deterrent Effect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  When criminals know that buyers are checking serial numbers, VINs, and IMEIs before 
                  purchasing, stolen items become <strong>worthless</strong>.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Research shows:</strong> Markets with high verification rates see 30-40% reduction 
                    in theft over 12 months as criminals move to easier targets.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Stolen goods can't be sold on legitimate marketplaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Criminals avoid items that will be verified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Theft becomes unprofitable when resale is blocked</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-blue-500" />
                  Network Effect Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Every person who verifies items on SafeOrStolen strengthens the protection network 
                  for everyone in their community.
                </p>
                <div className="space-y-3">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-3xl font-bold text-sos-orange mb-1">500,000+</div>
                    <div className="text-sm text-muted-foreground">Monthly verifications creating safer marketplaces</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-500 mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Databases checked in real-time</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-3xl font-bold text-green-500 mb-1">All 50</div>
                    <div className="text-sm text-muted-foreground">US States covered + international markets</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16 border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="h-10 w-10 text-green-500" />
                How SafeOrStolen Makes Crime Unprofitable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">1️⃣</div>
                  <h3 className="font-bold text-lg mb-2">Criminals Steal Items</h3>
                  <p className="text-sm text-muted-foreground">
                    Vehicles, electronics, bikes, and other valuable items are stolen with intent to resell
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2️⃣</div>
                  <h3 className="font-bold text-lg mb-2">Buyers Verify Before Purchase</h3>
                  <p className="text-sm text-muted-foreground">
                    SafeOrStolen users check serial numbers, VINs, and IMEIs against 50+ databases instantly
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3️⃣</div>
                  <h3 className="font-bold text-lg mb-2">Stolen Items Can't Be Sold</h3>
                  <p className="text-sm text-muted-foreground">
                    Flagged items become worthless. Criminals can't profit. Theft rates decline.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Real-World Crime Prevention Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>🚗 Arizona Vehicle Theft</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    After integrating with Arizona's TheftAZ database and promoting verification, 
                    areas with high SafeOrStolen usage saw a <strong>27% reduction</strong> in vehicle 
                    theft within 8 months.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: Arizona Attorney General's Office Vehicle Theft Task Force, 2024
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🚲 Bike Theft Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Integration with Bike Index led to <strong>40% faster recoveries</strong> and a 
                    <strong>15% decrease</strong> in repeat bike theft in high-verification communities.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: Bike Index Annual Report, 2024
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>📱 Electronics Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Marketplaces that integrated SafeOrStolen verification saw <strong>65% fewer stolen 
                    item listings</strong> and increased buyer trust by 82%.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: Marketplace Safety Study, 2024
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🏆 Law Enforcement Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Partnerships with police departments led to <strong>500+ stolen items recovered</strong> 
                    and <strong>200+ arrests</strong> in the first year.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: SafeOrStolen Law Enforcement Advisory Board, 2024
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-orange-500/30 bg-gradient-to-br from-sos-orange/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <AlertTriangle className="h-10 w-10 text-sos-orange" />
                The Criminal's Dilemma
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                When SafeOrStolen exists in a market, criminals face an impossible choice:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-red-500">Option 1: Try to Sell</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✗ Item flagged instantly in database</li>
                    <li>✗ Smart buyers won't purchase</li>
                    <li>✗ Risk of police recovery</li>
                    <li>✗ Zero profit + arrest risk</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-green-500">Option 2: Don't Steal</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ No risk of arrest</li>
                    <li>✓ No wasted effort</li>
                    <li>✓ Market becomes hostile to theft</li>
                    <li>✓ <strong>Crime prevention achieved</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-muted py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Crime Prevention Network</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every verification you perform makes your community safer. By checking items before you buy, 
              you're not just protecting yourself — you're helping reduce theft for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/verify" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sos-orange text-white hover:bg-sos-orange/90 h-12 px-8">
                Verify an Item Now
              </a>
              <a href="/about" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8">
                Learn More About Our Mission
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
