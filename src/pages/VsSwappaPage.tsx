import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Smartphone, Zap, Shield, Download, Globe, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const VsSwappaPage = () => {
  const comparisonFeatures = [
    {
      feature: "Marketplace vs Tool",
      safeorstolen: { has: true, detail: "Universal verification tool - works on ANY marketplace" },
      swappa: { has: false, detail: "Swappa's own marketplace only" }
    },
    {
      feature: "Barcode Scanning",
      safeorstolen: { has: true, detail: "3-second barcode scanner in mobile app" },
      swappa: { has: false, detail: "No scanning - manual entry only" }
    },
    {
      feature: "Item Coverage",
      safeorstolen: { has: true, detail: "Phones, cars, firearms, electronics, boats, bikes, appliances" },
      swappa: { has: false, detail: "Phones and tech only - no cars/firearms" }
    },
    {
      feature: "VIN Verification",
      safeorstolen: { has: true, detail: "Full VIN + stolen vehicle database" },
      swappa: { has: false, detail: "Not supported" }
    },
    {
      feature: "Firearms Verification",
      safeorstolen: { has: true, detail: "Serial number + NCIC checks" },
      swappa: { has: false, detail: "Not supported" }
    },
    {
      feature: "Works on Facebook Marketplace",
      safeorstolen: { has: true, detail: "Verify items from ANY platform" },
      swappa: { has: false, detail: "Swappa listings only" }
    },
    {
      feature: "Works on OfferUp/Craigslist",
      safeorstolen: { has: true, detail: "Universal tool for all marketplaces" },
      swappa: { has: false, detail: "Swappa listings only" }
    },
    {
      feature: "Offline Mode",
      safeorstolen: { has: true, detail: "Works without internet" },
      swappa: { has: false, detail: "Online only" }
    },
    {
      feature: "License Plate Lookup",
      safeorstolen: { has: true, detail: "All 50 US states + international" },
      swappa: { has: false, detail: "Not supported" }
    },
    {
      feature: "Free Checks",
      safeorstolen: { has: true, detail: "2 free verifications (14-day trial)" },
      swappa: { has: true, detail: "Free for Swappa listings" }
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Swappa: Universal Verification Tool | Works on ANY Marketplace 2025"
        description="Swappa alternative that works on Facebook Marketplace, OfferUp, Craigslist, eBay, and everywhere else. Verify phones, cars, firearms, electronics from any seller. Mobile app with barcode scanning. 2 free checks."
        keywords="swappa alternative, better than swappa, universal verification tool, verify any marketplace, facebook marketplace verification, offerup stolen check, craigslist verification app"
        canonical="/vs-swappa"
      />

      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Swappa Alternative for ANY Marketplace | SafeOrStolen vs Swappa</h1>
          <p>
            Swappa only checks items sold on Swappa.com. SafeOrStolen verifies items from Facebook Marketplace, 
            OfferUp, Craigslist, eBay, pawn shops, and any secondhand source. Plus, SafeOrStolen checks cars (VIN), 
            firearms, and 7+ item types - not just phones like Swappa.
          </p>
          
          <h2>Why SafeOrStolen Beats Swappa for Most Buyers</h2>
          <p>
            Swappa is a marketplace with built-in verification for its own listings. SafeOrStolen is a universal 
            verification tool that works everywhere. If you buy from Facebook Marketplace, OfferUp, Craigslist, 
            or local sellers - Swappa can't help you. SafeOrStolen can.
          </p>
          
          <h2>SafeOrStolen vs Swappa: Key Differences</h2>
          <ul>
            <li><strong>Works Everywhere:</strong> SafeOrStolen verifies items from ANY source. Swappa only checks Swappa listings.</li>
            <li><strong>More Item Types:</strong> SafeOrStolen verifies phones, cars, firearms, electronics. Swappa only checks tech.</li>
            <li><strong>Barcode Scanning:</strong> SafeOrStolen has 3-second mobile scanning. Swappa requires manual entry.</li>
            <li><strong>VIN Verification:</strong> SafeOrStolen checks stolen vehicles. Swappa doesn't support VINs.</li>
            <li><strong>Firearms:</strong> SafeOrStolen verifies firearms. Swappa doesn't support firearms.</li>
            <li><strong>Offline Mode:</strong> SafeOrStolen works without internet. Swappa is online only.</li>
          </ul>
          
          <h2>When to Use SafeOrStolen Instead of Swappa</h2>
          <ul>
            <li><strong>Facebook Marketplace Buyers:</strong> Swappa can't verify Facebook listings. SafeOrStolen can.</li>
            <li><strong>OfferUp/Craigslist Users:</strong> Need to verify items from these platforms? Swappa won't help.</li>
            <li><strong>Car Buyers:</strong> Buying a used vehicle? Swappa doesn't check VINs. SafeOrStolen does.</li>
            <li><strong>Gun Owners:</strong> Verifying firearms? Swappa doesn't support this. SafeOrStolen specializes in it.</li>
            <li><strong>Multi-Platform Buyers:</strong> Shop across multiple marketplaces? One tool (SafeOrStolen) beats one marketplace (Swappa).</li>
          </ul>
          
          <h2>Download SafeOrStolen - The Universal Verification App</h2>
          <p>
            Install SafeOrStolen for free on iOS and Android. Verify items from Facebook Marketplace, OfferUp, 
            Craigslist, eBay, pawn shops, or any secondhand source. The universal tool Swappa isn't.
          </p>
        </div>
      </noscript>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sos via-sos-dark to-sos text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-sos-orange/20 border border-sos-orange/40 rounded-full px-6 py-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-semibold">Works on ANY Marketplace - Not Just One Like Swappa</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Universal Verification Tool vs <span className="text-sos-orange">Swappa's Single Marketplace</span>
              </h1>
              
              <p className="text-xl text-sos-light max-w-3xl mx-auto">
                Swappa only checks <strong>Swappa.com listings</strong>. SafeOrStolen verifies items from 
                <strong> Facebook Marketplace, OfferUp, Craigslist, eBay, pawn shops</strong> - anywhere you buy secondhand.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg" asChild className="bg-sos-orange hover:bg-sos-orange/90">
                  <Link to="/app">
                    <Download className="w-5 h-5 mr-2" />
                    Download Free App
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <Link to="/verify">
                    Try 2 Free Checks
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Swappa Problem */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-center">
                    The Swappa Limitation: One Marketplace Only
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p>
                    <strong>Swappa is a marketplace, not a verification tool.</strong> While Swappa has great verification 
                    for items sold on Swappa.com, it <strong>can't help with items from other sources:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-red-600 font-medium">
                    <li>❌ Facebook Marketplace listings</li>
                    <li>❌ OfferUp sellers</li>
                    <li>❌ Craigslist ads</li>
                    <li>❌ eBay auctions</li>
                    <li>❌ Pawn shop items</li>
                    <li>❌ Local meetups</li>
                  </ul>
                  <p className="pt-4">
                    <strong>SafeOrStolen is the universal solution:</strong> Verify ANY item from ANY source. 
                    One app for Facebook, OfferUp, Craigslist, eBay, pawn shops, and everywhere else.
                  </p>
                  <div className="bg-sos-orange/10 border border-sos-orange/30 rounded-lg p-6 mt-6">
                    <p className="text-center text-xl font-semibold text-sos-orange">
                      <Zap className="w-6 h-6 inline mr-2" />
                      Verify Items From Anywhere - Not Just One Marketplace
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              SafeOrStolen vs Swappa: Complete Comparison
            </h2>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left font-semibold border">Feature</th>
                    <th className="p-4 text-center font-semibold border bg-sos-orange/10">
                      <div className="flex items-center justify-center gap-2">
                        <Shield className="w-5 h-5 text-sos-orange" />
                        SafeOrStolen
                      </div>
                    </th>
                    <th className="p-4 text-center font-semibold border">Swappa</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="border-b hover:bg-muted/50">
                      <td className="p-4 font-medium border">{row.feature}</td>
                      <td className="p-4 text-center border bg-sos-orange/5">
                        <div className="flex flex-col items-center gap-2">
                          {row.safeorstolen.has ? (
                            <Check className="w-6 h-6 text-green-500" />
                          ) : (
                            <X className="w-6 h-6 text-red-500" />
                          )}
                          <span className="text-sm text-muted-foreground">{row.safeorstolen.detail}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center border">
                        <div className="flex flex-col items-center gap-2">
                          {row.swappa.has ? (
                            <Check className="w-6 h-6 text-green-500" />
                          ) : (
                            <X className="w-6 h-6 text-red-500" />
                          )}
                          <span className="text-sm text-muted-foreground">{row.swappa.detail}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Real-World Scenarios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              When SafeOrStolen Beats Swappa
            </h2>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {[
                {
                  icon: Smartphone,
                  scenario: "You find a great deal on Facebook Marketplace",
                  swappa: "❌ Swappa: Can't verify Facebook listings",
                  safeorstolen: "✅ SafeOrStolen: Instant verification with barcode scanning"
                },
                {
                  icon: DollarSign,
                  scenario: "Buying a used car from OfferUp",
                  swappa: "❌ Swappa: No VIN checks, tech only",
                  safeorstolen: "✅ SafeOrStolen: Full VIN + stolen vehicle database"
                },
                {
                  icon: Shield,
                  scenario: "Purchasing a firearm from a private seller",
                  swappa: "❌ Swappa: No firearm support",
                  safeorstolen: "✅ SafeOrStolen: Firearm serial number + NCIC checks"
                },
                {
                  icon: Globe,
                  scenario: "Meeting someone from Craigslist",
                  swappa: "❌ Swappa: Can't verify Craigslist items",
                  safeorstolen: "✅ SafeOrStolen: Verify before you meet up"
                },
                {
                  icon: Zap,
                  scenario: "Shopping across multiple marketplaces",
                  swappa: "❌ Swappa: Only works on Swappa.com",
                  safeorstolen: "✅ SafeOrStolen: One tool for ALL marketplaces"
                }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <item.icon className="w-6 h-6 text-sos-orange" />
                      {item.scenario}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-red-600 font-medium">{item.swappa}</p>
                    <p className="text-green-600 font-medium">{item.safeorstolen}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-sos via-sos-dark to-sos text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Get The Universal Verification Tool Swappa Isn't
            </h2>
            <p className="text-xl text-sos-light mb-8 max-w-3xl mx-auto">
              Stop being limited to one marketplace. Verify items from Facebook, OfferUp, Craigslist, eBay, 
              pawn shops, or anywhere you buy secondhand. Mobile app with barcode scanning included.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-sos hover:bg-white/90" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Download Free App
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/verify">
                  Verify From Any Marketplace
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VsSwappaPage;
