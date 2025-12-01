import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Smartphone, Zap, DollarSign, Globe, Shield, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';

const VsCheckMendPage = () => {
  const comparisonFeatures = [
    {
      feature: "Mobile App",
      safeorstolen: { has: true, detail: "iOS & Android with barcode scanning" },
      checkmend: { has: false, detail: "No mobile app available" }
    },
    {
      feature: "Verification Speed",
      safeorstolen: { has: true, detail: "3 seconds with barcode scan" },
      checkmend: { has: true, detail: "30+ seconds manual typing" }
    },
    {
      feature: "Free Checks",
      safeorstolen: { has: true, detail: "2 free verifications (14-day trial)" },
      checkmend: { has: false, detail: "$3.99 per check (£1.99 UK)" }
    },
    {
      feature: "Firearms Verification",
      safeorstolen: { has: true, detail: "Serial number + NCIC checks" },
      checkmend: { has: false, detail: "Not supported" }
    },
    {
      feature: "License Plate Lookup",
      safeorstolen: { has: true, detail: "All 50 US states + international" },
      checkmend: { has: false, detail: "Not supported" }
    },
    {
      feature: "Offline Mode",
      safeorstolen: { has: true, detail: "Works without internet" },
      checkmend: { has: false, detail: "Online only" }
    },
    {
      feature: "Barcode Scanner",
      safeorstolen: { has: true, detail: "Built-in camera scanner" },
      checkmend: { has: false, detail: "Manual entry only" }
    },
    {
      feature: "Consumer Focus",
      safeorstolen: { has: true, detail: "Built for everyday buyers" },
      checkmend: { has: true, detail: "Mixed B2B/B2C focus" }
    },
    {
      feature: "Global Coverage",
      safeorstolen: { has: true, detail: "150+ countries, 50M+ records" },
      checkmend: { has: true, detail: "Global (£13.8B checked)" }
    },
    {
      feature: "Item Types",
      safeorstolen: { has: true, detail: "Phones, cars, firearms, electronics, boats, appliances" },
      checkmend: { has: true, detail: "Phones, cars, electronics, bikes" }
    }
  ];

  const pricingComparison = [
    {
      plan: "Free Trial",
      safeorstolen: "$0 - 2 checks",
      checkmend: "No free tier"
    },
    {
      plan: "Single Check",
      safeorstolen: "$2.99",
      checkmend: "$3.99 (£1.99 UK)"
    },
    {
      plan: "Monthly Plan",
      safeorstolen: "$9 - 25 checks",
      checkmend: "$50+ (business only)"
    },
    {
      plan: "Unlimited",
      safeorstolen: "$99/month",
      checkmend: "Contact sales"
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs CheckMEND: Why We Have The Mobile App They Don't | Free Alternative 2025"
        description="CheckMEND alternative with FREE mobile app for iOS & Android. Get 2 free checks vs CheckMEND's $3.99/check. Barcode scanning, firearms verification, offline mode. The only stolen verification app CheckMEND lacks."
        keywords="checkmend alternative, checkmend app, free checkmend, checkmend vs safeorstolen, stolen item checker app, checkmend mobile app, better than checkmend, checkmend free trial, imei checker app"
        canonical="/vs-checkmend"
      />

      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>CheckMEND Alternative with Free Mobile App | SafeOrStolen vs CheckMEND</h1>
          <p>
            Looking for a CheckMEND alternative? SafeOrStolen is the only stolen verification service with a mobile app. 
            CheckMEND has no iOS or Android app despite processing £13.8 billion in checks. Get 2 free verifications 
            vs CheckMEND's $3.99 per check.
          </p>
          
          <h2>Why Doesn't CheckMEND Have a Mobile App?</h2>
          <p>
            Despite being a major player in stolen item verification, CheckMEND has never released a mobile app. 
            This means users must manually type IMEI numbers, VINs, and serial numbers on their website every time. 
            SafeOrStolen offers instant barcode scanning on iOS and Android, making verification 10x faster.
          </p>
          
          <h2>SafeOrStolen vs CheckMEND: Key Differences</h2>
          <ul>
            <li><strong>Mobile App:</strong> SafeOrStolen has iOS/Android apps with barcode scanning. CheckMEND has no app.</li>
            <li><strong>Free Checks:</strong> SafeOrStolen gives 2 free verifications. CheckMEND charges $3.99 immediately.</li>
            <li><strong>Verification Speed:</strong> SafeOrStolen takes 3 seconds with barcode scan. CheckMEND requires manual typing (30+ seconds).</li>
            <li><strong>Firearms:</strong> SafeOrStolen verifies firearms. CheckMEND doesn't support firearms.</li>
            <li><strong>License Plates:</strong> SafeOrStolen checks license plates across all 50 states. CheckMEND doesn't.</li>
            <li><strong>Offline Mode:</strong> SafeOrStolen works without internet. CheckMEND is online only.</li>
          </ul>
          
          <h2>Pricing: SafeOrStolen vs CheckMEND</h2>
          <p>
            SafeOrStolen is more affordable than CheckMEND. Get 2 free checks to start (no credit card required). 
            Single checks cost $2.99 vs CheckMEND's $3.99. Monthly plans start at $9 for 25 checks. 
            CheckMEND's business plans start at $50+/month.
          </p>
          
          <h2>Who Should Use SafeOrStolen Instead of CheckMEND?</h2>
          <ul>
            <li><strong>Mobile Users:</strong> If you want to scan barcodes instead of typing, use SafeOrStolen's app.</li>
            <li><strong>Budget Buyers:</strong> If you want free checks before committing, SafeOrStolen gives 2 free.</li>
            <li><strong>Gun Owners:</strong> If you buy/sell firearms, CheckMEND can't help. SafeOrStolen verifies firearms.</li>
            <li><strong>Casual Buyers:</strong> If you buy from Facebook Marketplace, OfferUp, Craigslist - SafeOrStolen is faster.</li>
          </ul>
          
          <h2>Download SafeOrStolen Mobile App (Not Available on CheckMEND)</h2>
          <p>
            Install SafeOrStolen for free on iOS and Android. Scan barcodes, verify items offline, 
            and get instant results. The mobile app CheckMEND should have built years ago.
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
                <span className="text-sm font-semibold">The Mobile App CheckMEND Doesn't Have</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                CheckMEND Alternative with <span className="text-sos-orange">Free Mobile App</span>
              </h1>
              
              <p className="text-xl text-sos-light max-w-3xl mx-auto">
                CheckMEND has processed <strong>£13.8 billion</strong> in checks but still has <strong>no mobile app</strong>. 
                SafeOrStolen gives you iOS & Android apps with barcode scanning, 2 free checks, and faster verification.
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

        {/* Why No CheckMEND App? */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-center">
                    Why Doesn't CheckMEND Have a Mobile App?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p>
                    Despite being a major player in stolen item verification (processing billions in checks annually), 
                    <strong> CheckMEND has never released a mobile app</strong> for iOS or Android.
                  </p>
                  <p>
                    This means users must manually type IMEI numbers, VIN numbers, and serial numbers on their website 
                    every single time—a tedious process that takes 30+ seconds per check.
                  </p>
                  <p>
                    <strong>SafeOrStolen solved this problem</strong> by building the first mobile app with built-in barcode scanning. 
                    Verification now takes just 3 seconds instead of 30+ seconds with manual typing.
                  </p>
                  <div className="bg-sos-orange/10 border border-sos-orange/30 rounded-lg p-6 mt-6">
                    <p className="text-center text-xl font-semibold text-sos-orange">
                      <Zap className="w-6 h-6 inline mr-2" />
                      10x Faster: Barcode Scanning vs Manual Typing
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
              SafeOrStolen vs CheckMEND: Complete Comparison
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
                    <th className="p-4 text-center font-semibold border">CheckMEND</th>
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
                          {row.checkmend.has ? (
                            <Check className="w-6 h-6 text-green-500" />
                          ) : (
                            <X className="w-6 h-6 text-red-500" />
                          )}
                          <span className="text-sm text-muted-foreground">{row.checkmend.detail}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Pricing: SafeOrStolen vs CheckMEND
            </h2>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* SafeOrStolen Pricing */}
              <Card className="border-2 border-sos-orange">
                <CardHeader className="bg-sos-orange/10">
                  <CardTitle className="text-2xl text-center">
                    <Shield className="w-6 h-6 inline mr-2 text-sos-orange" />
                    SafeOrStolen
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {pricingComparison.map((tier, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b pb-3">
                      <span className="font-medium">{tier.plan}</span>
                      <span className="text-sos-orange font-bold">{tier.safeorstolen}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6 bg-sos-orange hover:bg-sos-orange/90" asChild>
                    <Link to="/pricing">View All Plans</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* CheckMEND Pricing */}
              <Card>
                <CardHeader className="bg-muted">
                  <CardTitle className="text-2xl text-center">CheckMEND</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {pricingComparison.map((tier, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b pb-3">
                      <span className="font-medium">{tier.plan}</span>
                      <span className="font-bold">{tier.checkmend}</span>
                    </div>
                  ))}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6 text-center">
                    <p className="text-sm text-red-700 font-medium">No mobile app available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Should Switch? */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Who Should Use SafeOrStolen Instead of CheckMEND?
            </h2>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile Users",
                  description: "If you want to scan barcodes instead of typing, SafeOrStolen's mobile app is the only option. CheckMEND has no app."
                },
                {
                  icon: DollarSign,
                  title: "Budget Buyers",
                  description: "Get 2 free checks with SafeOrStolen (no credit card required). CheckMEND charges $3.99 from the first check."
                },
                {
                  icon: Shield,
                  title: "Gun Owners & Dealers",
                  description: "CheckMEND doesn't verify firearms. SafeOrStolen checks firearm serial numbers against NCIC and ATF databases."
                },
                {
                  icon: Zap,
                  title: "Casual Marketplace Buyers",
                  description: "Buying from Facebook Marketplace, OfferUp, Craigslist? SafeOrStolen's 3-second barcode scanning is 10x faster than CheckMEND's manual typing."
                },
                {
                  icon: Globe,
                  title: "International Users",
                  description: "SafeOrStolen works in 150+ countries with offline mode. CheckMEND requires constant internet connection."
                },
                {
                  icon: Download,
                  title: "Anyone Who Values Convenience",
                  description: "CheckMEND forces you to visit their website every time. SafeOrStolen's app lives on your phone—always ready."
                }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <item.icon className="w-6 h-6 text-sos-orange" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
              Download The Mobile App CheckMEND Doesn't Have
            </h2>
            <p className="text-xl text-sos-light mb-8 max-w-3xl mx-auto">
              Install SafeOrStolen for free on iOS and Android. Scan barcodes, verify items offline, 
              and get instant results in 3 seconds. Try 2 free checks—no credit card required.
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
                  Try 2 Free Checks
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VsCheckMendPage;
