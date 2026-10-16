/** Oct 8 2026: audited by hand for "vin checker app". Removed invented theft stats, AI-as-source, offline/barcode claims, and false DMV/insurer/title/odometer/lien claims. */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Car, Shield, Smartphone, Zap, Download, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const VinCheckerApp = () => {
 return (
 <>
 <PageSEO
 title="VIN Checker App: Check If a Car Is Stolen From Your Phone | SafeOrStolen"
 description="Free VIN checker web app for your phone. Decode a VIN, see open recalls and theft reports in a few seconds. Add it from safeorstolen.com/app; no app store needed."
 keywords="VIN checker app free, stolen car checker app, vehicle theft check app, VIN lookup app, car stolen check app"
 canonical="/app/vin-checker"
 structuredData={{
 "@context": "https://schema.org",
 "@type": "WebApplication",
 "name": "SafeOrStolen VIN Checker",
 "applicationCategory": "SecurityApplication",
 "browserRequirements": "Requires a modern web browser",
 "operatingSystem": "Any (installable web app)",
 "offers": {
 "@type": "Offer",
 "price": "0",
 "priceCurrency": "USD",
 "description": "Free to install; 2 free checks with a free account"
 },
 "description": "Installable web app to check a VIN before buying a used car: year, make and model, open safety recalls, and theft reports.",
 "featureList": [
 "Decodes year, make and model from the VIN",
 "Lists open safety recalls",
 "Searches SafeOrStolen theft reports and public web results",
 "Arizona VINs and plates also searched against Arizona law-enforcement stolen-vehicle records",
 "Each check saved to your account with the date"
 ]
 }}
 />

 <div className="min-h-screen bg-background">
 {/* Hero */}
 <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
 <div className="container mx-auto max-w-4xl text-center">
 <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
 <Car className="w-4 h-4" />
 Free VIN checker web app
 </div>

 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 VIN checker app: check a car before you buy it
 </h1>

 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Type the 17-character VIN and in a few seconds you see the year, make and model, any open safety recalls, and whether the VIN turns up in SafeOrStolen theft reports or public web results. Add it to your phone's home screen from safeorstolen.com/app.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Button size="lg" className="text-lg px-8" asChild>
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Get the free web app
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/verify">
 Check a VIN now
 </Link>
 </Button>
 </div>

 <p className="text-sm text-muted-foreground">
 Works for cars, trucks, motorcycles and RVs with a 17-character VIN
 </p>
 </div>
 </section>

 {/* Why Use VIN Checker */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Why check the VIN on your phone
 </h2>

 <div className="grid md:grid-cols-2 gap-8">
 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <AlertTriangle className="w-5 h-5 text-red-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">Stolen cars get taken back</h3>
 <p className="text-muted-foreground text-sm">
 If police recover a stolen car from you, it goes back to the owner and you're usually out what you paid. Check before cash changes hands.
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
 <h3 className="font-bold mb-2">Useful for sellers too</h3>
 <p className="text-muted-foreground text-sm">
 Sellers can run their own VIN and share a $1.99 verification certificate, a dated record with its own link, so buyers see the check was done.
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
 <h3 className="font-bold mb-2">Pairs with a history report</h3>
 <p className="text-muted-foreground text-sm">
 A history report covers title and accident history. SafeOrStolen focuses on theft reports. Running both before you buy covers more ground.
 </p>
 </div>
 </div>
 </CardContent>
 </Card>

 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <Smartphone className="w-5 h-5 text-blue-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">Match the VIN in three places</h3>
 <p className="text-muted-foreground text-sm">
 Read the VIN through the windshield at the base of the dashboard, on the driver's door sticker, and on the title. Type it in at the car. If any of the three differ, walk away.
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
 What the VIN check shows
 </h2>

 <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
 {[
 "Year, make and model decoded from the VIN",
 "Open safety recalls",
 "SafeOrStolen theft reports filed by owners",
 "Public web results that mention the VIN",
 "Arizona law-enforcement stolen-vehicle records (Arizona VINs and plates)",
 "A saved, dated record of every check"
 ].map((item, index) => (
 <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
 <span className="text-sm">{item}</span>
 </div>
 ))}
 </div>
 <p className="text-sm text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
 It does not search DMV records, insurer databases or NCIC, and it does not report title brands, odometer readings or liens.
 </p>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 px-4">
 <div className="container mx-auto max-w-2xl text-center">
 <h2 className="text-3xl font-bold mb-4">
 Put the VIN checker on your home screen
 </h2>
 <p className="text-muted-foreground mb-8">
 It's a free installable web app, not an App Store or Google Play download. 2 free checks with a free account, then $0.99 a check or $10 a month unlimited.
 </p>
 <Button size="lg" className="text-lg px-8" asChild>
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Get the free web app
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default VinCheckerApp;
