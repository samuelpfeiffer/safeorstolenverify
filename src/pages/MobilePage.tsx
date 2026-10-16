/**
 * Oct 8 2026: rewritten by hand for "stolen item checker app". SafeOrStolen has no App Store or
 * Google Play app; it is a free installable web app at safeorstolen.com/app. Removed "AI" source
 * claims, offline mode, iOS/Android download claims, "<3s" stat and a "title issues" claim.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Smartphone, Camera, Zap, Download, Wifi } from 'lucide-react';

export default function MobilePage() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen on Your Phone: Free Web App | SafeOrStolen"
        description="Install SafeOrStolen's free web app from your phone's browser. Scan or type an IMEI, VIN or serial number and check it for theft reports in a few seconds."
        keywords="stolen item checker app, IMEI checker app, VIN scanner, barcode scanner, install web app"
        canonical="https://safeorstolen.com/mobile"
      />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SafeOrStolen on Your Phone
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                SafeOrStolen is a free web app you install from your phone's browser, not from an app store. Use it to
                check phones, vehicles, license plates, electronics, tools, guns and bikes when you're standing with the seller.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/app">
                  <Download className="h-5 w-5" />
                  Install the free web app
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What it does on a phone</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Barcode scanner</h3>
                  <p className="text-muted-foreground">
                    Tap Scan and point your camera at the barcode on an IMEI label, VIN door sticker or serial tag. The
                    number fills in for you.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Results in a few seconds</h3>
                  <p className="text-muted-foreground">
                    You'll see reported stolen, possible match, or no report found in the records searched, with every
                    source listed and the check saved to your account.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Needs a connection</h3>
                  <p className="text-muted-foreground">
                    Checks run online. If the meetup spot has weak signal, run the number from the listing before you go
                    and match it to the item when you get there.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Who uses it</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">Marketplace buyers</h3>
                  <p className="text-muted-foreground">
                    Meeting someone from Facebook Marketplace or OfferUp? Dial *#06# on the phone or scan the box, and
                    check the number before you hand over cash.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">Pawn shop and resale staff</h3>
                  <p className="text-muted-foreground">
                    Check items at the counter, and keep a dated record of each check in your account. For many items at
                    once, use <Link to="/bulk-check" className="text-primary hover:underline">bulk checking</Link>.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">Car shoppers</h3>
                  <p className="text-muted-foreground">
                    Scan the VIN barcode on the driver's door sticker and compare it with the VIN on the dashboard. The
                    check decodes the year, make and model and lists open recalls.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">Estate sale and auction buyers</h3>
                  <p className="text-muted-foreground">
                    Check serial numbers on tools, cameras and electronics before you bid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How to install it</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                On an iPhone, open safeorstolen.com/app in Safari, tap the Share button, and choose Add to Home Screen.
                On Android, open it in Chrome and tap Install app when it appears, or choose Install app from the menu.
                The icon opens SafeOrStolen full screen, and it updates itself each time you open it.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Put it on your home screen</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The app is free. A free account includes 2 checks, then $0.99 a check or $10 a month for unlimited checks.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/app">
                <Download className="h-5 w-5" />
                Install the free web app
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
