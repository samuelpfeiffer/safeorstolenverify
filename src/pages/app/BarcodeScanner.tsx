import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Scan, Shield, Smartphone, Zap, Download, CheckCircle, Camera } from 'lucide-react';
import { Link } from '@/lib/router-compat';

/** Oct 8 2026: audited by hand for "barcode scanner stolen checker". Removed offline, OCR, "3-second" and "100% accuracy" claims. */
const BarcodeScanner = () => {
  return (
    <>
      <PageSEO
        title="Barcode Scanner Stolen Checker App | SafeOrStolen"
        description="Scan an IMEI, VIN or serial-number barcode with your phone camera in SafeOrStolen's free web app and check it for theft reports in a few seconds."
        keywords="barcode scanner stolen checker, scan serial number stolen, barcode stolen checker app, scan IMEI app, scan VIN app, item scanner stolen check"
        canonical="/app/barcode-scanner"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "SafeOrStolen - Barcode Scanner Stolen Checker",
          "applicationCategory": "SecurityApplication",
          "browserRequirements": "Requires a modern web browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Scan an IMEI, VIN or serial-number barcode with your phone camera and check it for theft reports.",
          "featureList": [
            "Camera barcode and QR code scanning",
            "IMEI barcode recognition",
            "VIN door-sticker barcode scanning",
            "Serial number barcode scanning"
          ]
        }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scan className="w-4 h-4" />
              Barcode Scanner for Stolen Items
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Scan a Barcode and Check if It's Stolen
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Point your phone camera at the IMEI barcode on a phone box, the VIN barcode on a door sticker, or a
              serial-number label. SafeOrStolen reads the code and checks it in a few seconds, so you don't have to type it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Install the free web app
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/verify">
                  Try Manual Check
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place</p>
          </div>
        </section>

        {/* How Scanner Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              How the Barcode Scanner Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">1. Point Camera</h3>
                  <p className="text-muted-foreground text-sm">
                    Tap Scan next to the search box and point your camera at the
                    barcode on the IMEI label, VIN sticker, or serial-number tag.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scan className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">2. Auto-Scan</h3>
                  <p className="text-muted-foreground text-sm">
                    The scanner reads standard barcodes and QR codes and fills in the
                    number. Check it against the number on the item before you search.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-bold mb-2">3. Read the Result</h3>
                  <p className="text-muted-foreground text-sm">
                    In a few seconds you'll see reported stolen, possible match, or
                    no report found in the records searched, with every source listed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You Can Scan */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You Can Scan
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Phone IMEI barcodes on the box or SIM tray label",
                "VIN barcodes on the driver's door sticker",
                "Electronics serial number labels",
                "Laptop/computer asset tags",
                "Power tool barcodes",
                "Camera serial number labels",
                "Other items with a printed barcode"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <Scan className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Barcode Scanner */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Use Barcode Scanning?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Faster Than Typing</h3>
                      <p className="text-muted-foreground text-sm">
                        IMEI numbers are 15 digits and VINs are 17 characters.
                        Scanning saves you typing them on a small screen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Fewer Typing Errors</h3>
                      <p className="text-muted-foreground text-sm">
                        One wrong digit means you checked the wrong item. Scanning
                        avoids most typos; still compare the number on screen to the label.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Perfect for Meetups</h3>
                      <p className="text-muted-foreground text-sm">
                        Meeting a seller? Quick scan before handing over cash. 
                        Works in parking lots, garages, anywhere.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Smartphone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Installs From Your Browser</h3>
                      <p className="text-muted-foreground text-sm">
                        No app store needed. Add it to your home screen from
                        safeorstolen.com/app. Checks need a data connection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get the Barcode Scanner Stolen Checker
            </h2>
            <p className="text-muted-foreground mb-8">
              Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/app">
                <Download className="w-5 h-5 mr-2" />
                Install the free web app
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BarcodeScanner;
