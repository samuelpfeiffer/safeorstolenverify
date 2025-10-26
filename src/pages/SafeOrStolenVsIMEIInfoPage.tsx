import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Smartphone, Zap, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const SafeOrStolenVsIMEIInfoPage = () => {
  const navigate = useNavigate();

  const comparisonData = [
    { feature: 'Mobile App', safeorstolen: 'iOS & Android apps', imeiinfo: 'Website only', winner: 'safeorstolen' },
    { feature: 'Free Searches', safeorstolen: '4 free per month', imeiinfo: 'Limited free lookups', winner: 'safeorstolen' },
    { feature: 'Real-time Verification', safeorstolen: '30 seconds', imeiinfo: '1-3 minutes', winner: 'safeorstolen' },
    { feature: 'Database Coverage', safeorstolen: '50M+ global records', imeiinfo: '~15M records', winner: 'safeorstolen' },
    { feature: 'Item Types', safeorstolen: 'Phones, Cars, Electronics, Bikes', imeiinfo: 'Phones only', winner: 'safeorstolen' },
    { feature: 'Offline Mode', safeorstolen: 'Yes (mobile app)', imeiinfo: 'No', winner: 'safeorstolen' },
    { feature: 'Barcode Scanning', safeorstolen: 'Yes (in-app)', imeiinfo: 'No', winner: 'safeorstolen' },
    { feature: 'Report Stolen Items', safeorstolen: 'Yes', imeiinfo: 'Limited', winner: 'safeorstolen' },
    { feature: 'API Access', safeorstolen: 'Full REST API', imeiinfo: 'Limited', winner: 'safeorstolen' },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "SafeOrStolen vs IMEIinfo Comparison",
    "description": "Compare SafeOrStolen and IMEIinfo for IMEI phone verification services"
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs IMEIinfo: Mobile App vs Website-Only IMEI Checker"
        description="SafeOrStolen offers iOS/Android apps with 4 FREE searches and multi-item verification. IMEIinfo is website-only with limited features. Compare and choose the best."
        keywords="SafeOrStolen vs IMEIinfo, IMEIinfo alternative, mobile IMEI checker, better than IMEIinfo, phone verification app"
        canonical="/safeorstolen-vs-imeiinfo"
        structuredData={structuredData}
      />
      <AISearchOptimizer 
        page="comparison" 
        context="mobile-imei-verification"
        primaryKeywords={['IMEIinfo alternative', 'mobile IMEI app', 'SafeOrStolen vs IMEIinfo']}
      />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 border-sos-orange text-sos-orange">
                <Smartphone className="mr-2 h-4 w-4" />
                Mobile vs Web Comparison
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                SafeOrStolen vs IMEIinfo
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                The only IMEI checker with native mobile apps. Verify phones on-the-go while IMEIinfo requires desktop browsing.
              </p>
              <Button onClick={() => navigate('/check-phone')} size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                Download Mobile App Free
              </Button>
            </div>
          </div>
        </section>

        {/* Mobile App Advantage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-sos-orange/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Smartphone className="h-6 w-6 text-sos-orange" />
                  SafeOrStolen's Mobile App Advantage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-sos-orange">✓ SafeOrStolen (Mobile App)</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Verify items instantly at marketplace meetups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Scan IMEI with phone camera (no typing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Offline mode for areas with poor signal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Push notifications for verification results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Save verification history to device</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-muted-foreground">✗ IMEIinfo (Website Only)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Must use desktop or mobile browser</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Manual IMEI typing required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Requires internet connection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>No mobile-optimized experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>History requires account login</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Detailed Feature Comparison</h2>
            <Card className="max-w-5xl mx-auto">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4">Feature</th>
                        <th className="text-center py-4 px-4">
                          <span className="font-bold text-sos-orange">SafeOrStolen</span>
                        </th>
                        <th className="text-center py-4 px-4">IMEIinfo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-4 px-4 font-medium">{row.feature}</td>
                          <td className="py-4 px-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <Check className="h-5 w-5 text-green-600" />
                              {row.safeorstolen}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center text-muted-foreground">
                            <div className="flex items-center justify-center gap-2">
                              <X className="h-5 w-5 text-red-500" />
                              {row.imeiinfo}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Mobile Matters</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-sos-orange mb-2" />
                  <CardTitle>Instant Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verify phones in 30 seconds at marketplace meetups. No need to go home and check on desktop like IMEIinfo users.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-sos-orange mb-2" />
                  <CardTitle>Camera Scanning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Point and scan IMEI numbers. No manual typing errors. IMEIinfo requires you to manually enter 15-digit codes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 text-sos-orange mb-2" />
                  <CardTitle>Works Anywhere</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Offline mode works without internet. Perfect for parking lot meetups with poor signal. IMEIinfo is useless without WiFi.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sos-dark to-sos text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Download the SafeOrStolen App</h2>
                <p className="text-xl mb-8 text-gray-300">
                  The only IMEI checker with native mobile apps. Get 4 FREE searches. Available on iOS and Android.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button onClick={() => navigate('/check-phone')} size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                    Download Now
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/app-download')}>
                    View App Features
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafeOrStolenVsIMEIInfoPage;
