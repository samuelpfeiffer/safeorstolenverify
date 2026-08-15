import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Scan, Shield, Smartphone, Zap, Download, CheckCircle, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
const BarcodeScanner = () => {
  return (
    <>
      <PageSEO
        title="Barcode Scanner Stolen Checker App | SafeOrStolen"
        description="Free barcode scanner app to check if items are stolen. Scan any IMEI, VIN, or serial number barcode for instant verification."
        keywords="barcode scanner stolen checker, scan serial number stolen, barcode stolen checker app, scan IMEI app, scan VIN app, item scanner stolen check"
        canonical="/app/barcode-scanner"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "SafeOrStolen - Barcode Scanner Stolen Checker",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": ["Android", "iOS"],
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Free barcode scanner app to check if items are stolen. Point camera at any barcode for instant verification.",
          "downloadUrl": "https://safeorstolen.com/app",
          "featureList": [
            "Instant barcode scanning",
            "IMEI barcode recognition",
            "VIN plate scanning",
            "Serial number OCR",
            "Works offline",
            "3-second results"
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
              Scan Any Barcode - Instantly Check if Stolen
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Point your camera at any IMEI barcode, VIN plate, or serial number. 
              Get instant stolen verification in 3 seconds. No typing required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Download Scanner App
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/verify">
                  Try Manual Check
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              The ONLY stolen verification app with built-in barcode scanning
            </p>
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
                    Open the app and point your camera at any barcode, 
                    IMEI label, VIN plate, or serial number.
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
                    The app automatically recognizes and reads the code. 
                    Works with 1D barcodes, QR codes, and OCR for text.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-bold mb-2">3. Instant Results</h3>
                  <p className="text-muted-foreground text-sm">
                    See immediately if the item is clean, stolen, or flagged. 
                    Results in 3 seconds or less.
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
                "Phone IMEI barcodes (all smartphones)",
                "Vehicle VIN plates and stickers",
                "Electronics serial number labels",
                "Laptop/computer asset tags",
                "Power tool barcodes",
                "Bicycle serial number plates",
                "Camera serial numbers",
                "Any item with a barcode or serial"
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
                        IMEI numbers are 15 digits. VINs are 17 characters. 
                        Scanning takes 1 second vs 30+ seconds of typing.
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
                      <h3 className="font-bold mb-2">No Typing Errors</h3>
                      <p className="text-muted-foreground text-sm">
                        Manual entry leads to mistakes. Scanning ensures 
                        100% accuracy every time.
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
                      <h3 className="font-bold mb-2">Works Offline</h3>
                      <p className="text-muted-foreground text-sm">
                        No WiFi needed. Scan and verify items even without 
                        internet connection.
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
              Competitors like CheckMEND and IMEI.info have NO mobile apps at all.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/app">
                <Download className="w-5 h-5 mr-2" />
                Download FREE App
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BarcodeScanner;
