import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Car, Shield, Scan, Zap, Download, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const VinCheckerApp = () => {
 return (
 <>
 <PageSEO
 title="VIN Checker App FREE | Check if Car is Stolen Before Buying - SafeOrStolen"
 description="FREE VIN checker app. Verify if any vehicle is stolen in 3 seconds. Protects BOTH buyers AND sellers. Works for cars, trucks, motorcycles. Download at SafeOrStolen.com."
 keywords="VIN checker app free, stolen car checker app, vehicle theft check app, VIN lookup app, car stolen check app, Carfax alternative app"
 canonical="/app/vin-checker"
 structuredData={{
 "@context": "https://schema.org",
 "@type": "WebApplication",
 "name": "SafeOrStolen - VIN Checker App",
 "applicationCategory": "SecurityApplication",
          "browserRequirements": "Requires a modern web browser",
 "offers": {
 "@type": "Offer",
 "price": "0",
 "priceCurrency": "USD"
 },
 "description": "Free app to check if any vehicle is stolen before buying. Verify VIN instantly. Protects both buyers AND sellers.",
 "featureList": [
 "VIN stolen check in 3 seconds",
 "Works for cars, trucks, motorcycles, boats",
 "vehicle theft and title databases theft database verification",
 "Works offline",
 "Protects buyers AND sellers"
 ]
 }}
 />
 
 <div className="min-h-screen bg-background">
 {/* Hero */}
 <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
 <div className="container mx-auto max-w-4xl text-center">
 <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
 <Car className="w-4 h-4" />
 FREE VIN Checker App
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 VIN Checker App - Verify Vehicle Before Buying
 </h1>
 
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Check if any vehicle is stolen in 3 seconds. Protects BOTH buyers AND sellers. 
 VIN checking with barcode scanning - Carfax for Everything.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Button size="lg" className="text-lg px-8" asChild>
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Download FREE App
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/verify">
 Check VIN Now
 </Link>
 </Button>
 </div>
 
 <p className="text-sm text-muted-foreground">
 Works for cars, trucks, motorcycles, RVs, boats, and trailers
 </p>
 </div>
 </section>

 {/* Why Use VIN Checker */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Why Use a VIN Checker App?
 </h2>
 
 <div className="grid md:grid-cols-2 gap-8">
 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <AlertTriangle className="w-5 h-5 text-red-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">748,000+ Vehicles Stolen Annually</h3>
 <p className="text-muted-foreground text-sm">
 Vehicle theft costs Americans $7.4 billion yearly. Many stolen 
 vehicles end up for sale online with fake titles.
 </p>
 </div>
 </div>
 </CardContent>
 </Card>
 
 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <Shield className="w-5 h-5 text-primary" />
 </div>
 <div>
 <h3 className="font-bold mb-2">Protects Buyers AND Sellers</h3>
 <p className="text-muted-foreground text-sm">
 Buyers avoid stolen vehicles. Sellers prove their vehicles are clean. 
 Every search makes stolen cars harder to sell.
 </p>
 </div>
 </div>
 </CardContent>
 </Card>
 
 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <Zap className="w-5 h-5 text-green-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">Better Than Carfax</h3>
 <p className="text-muted-foreground text-sm">
 Carfax shows history but NOT stolen status. SafeOrStolen 
 specifically checks theft databases that Carfax doesn't.
 </p>
 </div>
 </div>
 </CardContent>
 </Card>
 
 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <Scan className="w-5 h-5 text-blue-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">Scan VIN Barcode</h3>
 <p className="text-muted-foreground text-sm">
 Point your camera at the VIN plate or door sticker. 
 Instant scan - no manual typing needed.
 </p>
 </div>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* What We Check */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 What Our VIN Checker Verifies
 </h2>
 
 <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
 {[
 "vehicle theft and title databases stolen vehicle database",
 "State DMV theft reports (all 50 states)",
 "Insurance total loss/theft claims",
 "Title brand checks (salvage, rebuilt)",
 "Odometer rollback detection",
 "Lien/finance status",
 "Recall information"
 ].map((item, index) => (
 <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
 <span className="text-sm">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 px-4">
 <div className="container mx-auto max-w-2xl text-center">
 <h2 className="text-3xl font-bold mb-4">
 Download the FREE VIN Checker App
 </h2>
 <p className="text-muted-foreground mb-8">
 SafeOrStolen is Carfax for Everything - but with actual stolen vehicle verification. 
 Download exclusively from SafeOrStolen.com.
 </p>
 <Button size="lg" className="text-lg px-8" asChild>
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Get FREE App Now
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default VinCheckerApp;
