import { PageSEO } from '@/components/seo/PageSEO';
import { FreeIMEIValidator } from '@/components/tools/FreeIMEIValidator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Smartphone, Car, Shield, ArrowRight } from 'lucide-react';

const FreeTools = () => {
  return (
    <>
      <PageSEO
        title="Free IMEI Validator & VIN Checker Tools | SafeOrStolen"
        description="Free tools to validate IMEI numbers and VIN formats. Check if your IMEI is valid before buying a phone. No signup required. Part of SafeOrStolen's stolen item verification suite."
        keywords="free IMEI validator, IMEI checker free, validate IMEI number, VIN format checker, free phone checker, IMEI luhn check, is IMEI valid"
        canonical="/free-tools"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "SafeOrStolen Free Tools",
          "description": "Free IMEI and VIN validation tools",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Free IMEI Validator & VIN Checker Tools</h1>
          <p>Use our free tools to validate IMEI numbers and check VIN formats. No signup required.</p>
          
          <h2>Free IMEI Validator</h2>
          <p>Check if an IMEI number has valid format using the Luhn algorithm. This validates the structure - to check if stolen, use our full verification service.</p>
          
          <h2>How to Find Your IMEI</h2>
          <ul>
            <li>Dial *#06# on your phone</li>
            <li>Check Settings → About Phone</li>
            <li>Look on the box or receipt</li>
            <li>Check under the battery (older phones)</li>
          </ul>
          
          <h2>Need Full Stolen Check?</h2>
          <p>For complete stolen, lost, and blacklist verification, use SafeOrStolen's full verification service. 2 free checks included.</p>
        </div>
      </noscript>
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wrench className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Free Tools</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free validation tools for buyers, sellers, and businesses. No signup required.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* IMEI Validator */}
              <FreeIMEIValidator />

              {/* VIN Info Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Car className="h-6 w-6 text-primary" />
                    <CardTitle>VIN Decoder</CardTitle>
                  </div>
                  <CardDescription>
                    Decode any 17-character VIN to see manufacturer, year, and vehicle details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link to="/vin-checker">
                      Open VIN Checker
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Full Verification CTA */}
              <Card className="bg-primary/5 border-primary/30">
                <CardContent className="py-8 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Need Full Stolen Check?</h2>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Format validation only checks structure. For complete stolen, lost, and 
                    blacklist verification across multiple databases, use our full service.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                      <Link to="/verify">
                        Full Verification - 2 Free Checks
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/app">
                        Download Mobile App
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* How to Find IMEI */}
              <Card>
                <CardHeader>
                  <CardTitle>How to Find Your IMEI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold">On iPhone:</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dial <code className="bg-muted px-1 rounded">*#06#</code></li>
                        <li>• Settings → General → About</li>
                        <li>• Check the SIM tray</li>
                        <li>• Original box or receipt</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold">On Android:</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dial <code className="bg-muted px-1 rounded">*#06#</code></li>
                        <li>• Settings → About Phone → Status</li>
                        <li>• Under the battery (older models)</li>
                        <li>• Original box or receipt</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeTools;
