import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Smartphone, Shield, Scan, Search, Download, CheckCircle, XCircle } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const StolenPhoneCheckerApp = () => {
 return (
 <>
 <PageSEO
 title="Stolen Phone Checker App: Check an IMEI Before Buying | SafeOrStolen"
 description="Free stolen phone checker web app. Scan or type a phone's IMEI at the meetup and see the model, theft reports and public web results in a few seconds."
 keywords="stolen phone checker app, IMEI checker app free, check if phone is stolen app, phone blacklist checker app, stolen iPhone checker, stolen Samsung checker"
 canonical="/app/stolen-phone-checker"
 structuredData={{
 "@context": "https://schema.org",
 "@type": "WebApplication",
 "name": "SafeOrStolen - Stolen Phone Checker App",
 "applicationCategory": "SecurityApplication",
          "browserRequirements": "Requires a modern web browser",
 "offers": {
 "@type": "Offer",
 "price": "0",
 "priceCurrency": "USD"
 },
 "description": "Free installable web app for checking whether a used phone has been reported stolen. Enter or scan the IMEI and see the result in a few seconds.",
 "featureList": [
 "IMEI check with make and model",
 "Works for iPhone, Samsung, Google Pixel and OnePlus",
 "Paid lost and stolen blacklist check",
 "Camera scanner for IMEI barcodes",
 "Saved, dated check history"
 ]
 }}
 />

 <div className="min-h-screen bg-background">
 {/* Hero */}
 <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
 <div className="container mx-auto max-w-4xl text-center">
 <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
 <Smartphone className="w-4 h-4" />
 Free Stolen Phone Checker Web App
 </div>

 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Stolen Phone Checker App: Check Before You Buy
 </h1>

 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Dial *#06# on the phone you're buying, enter the IMEI, and see in a few seconds whether it's been reported stolen.
 It runs in your browser and installs from safeorstolen.com/app, with no app store download.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Button size="lg" className="text-lg px-8" asChild>
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Install the Free Web App
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/verify">
 Check a Phone Now
 </Link>
 </Button>
 </div>

 <p className="text-sm text-muted-foreground">
 Works for iPhone, Samsung, Google Pixel, OnePlus and other phones with an IMEI
 </p>
 </div>
 </section>

 {/* Why Check */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Why use a stolen phone checker app?
 </h2>

 <div className="grid md:grid-cols-2 gap-8">
 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <Smartphone className="w-5 h-5 text-red-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">Stolen phones get resold online</h3>
 <p className="text-muted-foreground text-sm">
 Stolen phones turn up on Facebook Marketplace, OfferUp and Craigslist. A blacklisted or locked phone may never work for you.
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
 <h3 className="font-bold mb-2">For buyers and sellers</h3>
 <p className="text-muted-foreground text-sm">
 Buyers check before paying. Sellers can add a $1.99 verification certificate with its own link to show they checked first.
 </p>
 </div>
 </div>
 </CardContent>
 </Card>

 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <Search className="w-5 h-5 text-green-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">Results in a few seconds</h3>
 <p className="text-muted-foreground text-sm">
 Check the phone in your hand at the meetup, before any money changes hands.
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
 <h3 className="font-bold mb-2">Camera scanner</h3>
 <p className="text-muted-foreground text-sm">
 Point your camera at the IMEI barcode on the box instead of typing 15 digits.
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
 What the phone check covers
 </h2>

 <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
 <div>
 <h3 className="font-semibold mb-3">Checked</h3>
 <div className="space-y-3">
 {[
 "The phone's make and model from the IMEI",
 "Theft reports owners filed on SafeOrStolen",
 "Public web results that mention the IMEI",
 "Lost and stolen carrier blacklist (paid check; up to 20 a month for monthly members)"
 ].map((item, index) => (
 <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
 <span className="text-sm">{item}</span>
 </div>
 ))}
 </div>
 </div>
 <div>
 <h3 className="font-semibold mb-3">Check these on the phone yourself</h3>
 <div className="space-y-3">
 {[
 "iCloud Activation Lock (iPhone)",
 "Google Factory Reset Protection (Android)",
 "Unpaid financing (ask the carrier)",
 "Insurance claims"
 ].map((item, index) => (
 <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
 <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
 <span className="text-sm">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 px-4">
 <div className="container mx-auto max-w-2xl text-center">
 <h2 className="text-3xl font-bold mb-4">
 Get the free stolen phone checker
 </h2>
 <p className="text-muted-foreground mb-8">
 The same account also checks vehicles, license plates, electronics, power tools, firearms and bicycles.
 Your first 2 checks are free, then $0.99 a check or $10 a month for unlimited checks.
 </p>
 <Button size="lg" className="text-lg px-8" asChild>
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Install the Web App
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default StolenPhoneCheckerApp;
