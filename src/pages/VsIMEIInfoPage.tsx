import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Smartphone, Zap, Shield, Download, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const VsIMEIInfoPage = () => {
  const comparisonFeatures = [
    {
      feature: "Mobile App",
      safeorstolen: { has: true, detail: "iOS & Android with barcode scanning" },
      imeiinfo: { has: false, detail: "No mobile app - website only" }
    },
    {
      feature: "Item Coverage",
      safeorstolen: { has: true, detail: "Phones, cars, firearms, electronics, boats, bikes, appliances" },
      imeiinfo: { has: false, detail: "IMEI/phones only" }
    },
    {
      feature: "Barcode Scanner",
      safeorstolen: { has: true, detail: "3-second barcode scanning" },
      imeiinfo: { has: false, detail: "Manual typing required" }
    },
    {
      feature: "Free Checks",
      safeorstolen: { has: true, detail: "2 free verifications (14-day trial)" },
      imeiinfo: { has: true, detail: "Limited free checks" }
    },
    {
      feature: "VIN Verification",
      safeorstolen: { has: true, detail: "Full VIN + stolen vehicle database" },
      imeiinfo: { has: false, detail: "Not supported" }
    },
    {
      feature: "Firearms Verification",
      safeorstolen: { has: true, detail: "Serial number + NCIC checks" },
      imeiinfo: { has: false, detail: "Not supported" }
    },
    {
      feature: "License Plate Lookup",
      safeorstolen: { has: true, detail: "All 50 US states + international" },
      imeiinfo: { has: false, detail: "Not supported" }
    },
    {
      feature: "Offline Mode",
      safeorstolen: { has: true, detail: "Works without internet" },
      imeiinfo: { has: false, detail: "Online only" }
    },
    {
      feature: "Database Size",
      safeorstolen: { has: true, detail: "50M+ records across all item types" },
      imeiinfo: { has: true, detail: "Phone-focused database" }
    },
    {
      feature: "Verification Speed",
      safeorstolen: { has: true, detail: "3 seconds with app scanning" },
      imeiinfo: { has: true, detail: "30+ seconds manual entry" }
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs IMEI.info: Mobile App + Multi-Item Verification | Free Alternative 2025"
        description="IMEI.info alternative with FREE mobile app and multi-item verification. Check phones, cars, firearms, electronics vs IMEI.info's phone-only service. Get 2 free checks, barcode scanning, offline mode. The only verification app IMEI.info doesn't have."
        keywords="imei.info alternative, imei info app, imei checker app, imei.info vs safeorstolen, multi-item verification, phone verification app, vin checker app, better than imei.info"
        canonical="/vs-imeiinfo"
      />

      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>IMEI.info Alternative with Mobile App | SafeOrStolen vs IMEI.info</h1>
          <p>
            Looking for an IMEI.info alternative? SafeOrStolen is the only verification service with a mobile app 
            AND multi-item verification. IMEI.info only checks phones - SafeOrStolen verifies phones, cars, firearms, 
            electronics, boats, and more. Get 2 free checks with barcode scanning.
          </p>
          
          <h2>Why Choose SafeOrStolen Over IMEI.info?</h2>
          <p>
            IMEI.info is limited to phone verification only. SafeOrStolen goes beyond IMEI checks to verify 
            VIN numbers (cars), serial numbers (electronics), license plates, and firearms. Plus, SafeOrStolen 
            has iOS and Android apps with barcode scanning - IMEI.info has no app.
          </p>
          
          <h2>SafeOrStolen vs IMEI.info: Key Differences</h2>
          <ul>
            <li><strong>Mobile App:</strong> SafeOrStolen has iOS/Android apps with barcode scanning. IMEI.info is website-only.</li>
            <li><strong>Item Coverage:</strong> SafeOrStolen verifies 7+ item types. IMEI.info only checks phones.</li>
            <li><strong>VIN Verification:</strong> SafeOrStolen checks stolen vehicles. IMEI.info doesn't support VINs.</li>
            <li><strong>Firearms:</strong> SafeOrStolen verifies firearms. IMEI.info doesn't support firearms.</li>
            <li><strong>Barcode Scanning:</strong> SafeOrStolen's 3-second scanning vs IMEI.info's manual typing.</li>
            <li><strong>Offline Mode:</strong> SafeOrStolen works without internet. IMEI.info requires connection.</li>
          </ul>
          
          <h2>Who Should Use SafeOrStolen Instead of IMEI.info?</h2>
          <ul>
            <li><strong>Multi-Item Buyers:</strong> If you buy more than just phones, IMEI.info can't help with cars, electronics, or firearms.</li>
            <li><strong>Mobile Users:</strong> Get instant barcode scanning instead of typing IMEI numbers manually.</li>
            <li><strong>Car Buyers:</strong> Verify VIN numbers for stolen vehicles - IMEI.info doesn't support this.</li>
            <li><strong>Gun Owners:</strong> Check firearm serial numbers - IMEI.info doesn't verify firearms.</li>
            <li><strong>Marketplace Sellers:</strong> Verify any item type with one app instead of multiple services.</li>
          </ul>
          
          <h2>Download SafeOrStolen Mobile App (Not Available on IMEI.info)</h2>
          <p>
            Install SafeOrStolen for free on iOS and Android. Scan barcodes for phones, VINs for cars, 
            serial numbers for electronics, and more. The comprehensive verification app IMEI.info doesn't offer.
          </p>
        </div>
      </noscript>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sos via-sos-dark to-sos text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-sos-orange/20 border border-sos-orange/40 rounded-full px-6 py-2">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-semibold">Mobile App + Multi-Item Verification IMEI.info Doesn't Have</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                IMEI.info Alternative with <span className="text-sos-orange">Mobile App & 7+ Item Types</span>
              </h1>
              
              <p className="text-xl text-sos-light max-w-3xl mx-auto">
                IMEI.info <strong>only checks phones</strong>. SafeOrStolen verifies phones, cars, firearms, electronics, boats, bikes, 
                and appliances - all with a <strong>mobile app</strong> IMEI.info doesn't have.
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

        {/* Why Choose SafeOrStolen? */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-center">
                    Why SafeOrStolen Goes Beyond IMEI.info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p>
                    <strong>IMEI.info is limited to phone verification only.</strong> While it's great for checking IMEI numbers, 
                    it leaves you stranded when buying cars, electronics, firearms, or other secondhand items.
                  </p>
                  <p>
                    <strong>SafeOrStolen is the comprehensive solution:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>7+ Item Types:</strong> Phones (IMEI), vehicles (VIN), firearms, electronics, boats, bikes, appliances</li>
                    <li><strong>Mobile App:</strong> iOS & Android with barcode scanning - IMEI.info has no app</li>
                    <li><strong>3-Second Verification:</strong> Scan barcodes instead of typing 15-digit IMEI numbers</li>
                    <li><strong>Offline Mode:</strong> Works without internet connection</li>
                    <li><strong>One App for Everything:</strong> Stop juggling multiple verification services</li>
                  </ul>
                  <div className="bg-sos-orange/10 border border-sos-orange/30 rounded-lg p-6 mt-6">
                    <p className="text-center text-xl font-semibold text-sos-orange">
                      <Globe className="w-6 h-6 inline mr-2" />
                      Beyond Phones: Verify ANY Item with SafeOrStolen
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
              SafeOrStolen vs IMEI.info: Complete Comparison
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
                    <th className="p-4 text-center font-semibold border">IMEI.info</th>
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
                          {row.imeiinfo.has ? (
                            <Check className="w-6 h-6 text-green-500" />
                          ) : (
                            <X className="w-6 h-6 text-red-500" />
                          )}
                          <span className="text-sm text-muted-foreground">{row.imeiinfo.detail}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              When You Need More Than IMEI.info
            </h2>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Buying a Used Car",
                  problem: "IMEI.info: ❌ Can't check VIN numbers",
                  solution: "SafeOrStolen: ✅ Instant VIN verification + stolen vehicle database"
                },
                {
                  title: "Purchasing Firearms",
                  problem: "IMEI.info: ❌ No firearm support",
                  solution: "SafeOrStolen: ✅ Firearm serial number checks against NCIC/ATF"
                },
                {
                  title: "Verifying Electronics",
                  problem: "IMEI.info: ❌ Only phones, no laptops/cameras/tools",
                  solution: "SafeOrStolen: ✅ Check serial numbers for ANY electronics"
                },
                {
                  title: "License Plate Lookups",
                  problem: "IMEI.info: ❌ No license plate support",
                  solution: "SafeOrStolen: ✅ All 50 US states + international plates"
                },
                {
                  title: "Buying on Facebook Marketplace",
                  problem: "IMEI.info: ❌ Website only, manual typing",
                  solution: "SafeOrStolen: ✅ Mobile app with instant barcode scanning"
                },
                {
                  title: "Verifying Offline",
                  problem: "IMEI.info: ❌ Requires internet connection",
                  solution: "SafeOrStolen: ✅ Offline mode for remote locations"
                }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-red-600 font-medium">{item.problem}</p>
                    <p className="text-green-600 font-medium">{item.solution}</p>
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
              Get The Multi-Item Verification App IMEI.info Doesn't Offer
            </h2>
            <p className="text-xl text-sos-light mb-8 max-w-3xl mx-auto">
              Stop using separate services for phones, cars, and electronics. Verify ANY item with SafeOrStolen's 
              mobile app. 2 free checks, barcode scanning, offline mode included.
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
                  Verify Any Item Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VsIMEIInfoPage;
