import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Smartphone, Shield, Scan, Zap, Download, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const StolenPhoneCheckerApp = () => {
 return (
 <>
 <PageSEO
 title="Stolen Phone Checker App FREE | Check IMEI Before Buying - SafeOrStolen"
 description="FREE stolen phone checker app. Verify any phone's IMEI in 3 seconds before buying. Protects BOTH buyers AND sellers. Works offline. Download now at SafeOrStolen.com."
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
 "description": "Free app to check if any phone is stolen before buying. Verify IMEI instantly. Protects both buyers AND sellers.",
 "featureList": [
 "IMEI stolen check in 3 seconds",
 "Works for iPhone, Samsung, Google Pixel, OnePlus",
 "Carrier blacklist verification",
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
 <Smartphone className="w-4 h-4" />
 FREE Stolen Phone Checker App
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Stolen Phone Checker App - Verify Before You Buy
 </h1>
 
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Check if any phone is stolen in 3 seconds. Protects BOTH buyers AND sellers. 
 Every search makes stolen phones harder to sell - reducing crime globally.
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
 Check Phone Now
 </Link>
 </Button>
 </div>
 
 <p className="text-sm text-muted-foreground">
 Works on iPhone, Samsung, Google Pixel, OnePlus, and all smartphones
 </p>
 </div>
 </section>

 {/* Why Check */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Why Use a Stolen Phone Checker App?
 </h2>
 
 <div className="grid md:grid-cols-2 gap-8">
 <Card>
 <CardContent className="p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <AlertTriangle className="w-5 h-5 text-red-500" />
 </div>
 <div>
 <h3 className="font-bold mb-2">2.4 Million Phones Stolen Yearly</h3>
 <p className="text-muted-foreground text-sm">
 In the US alone, millions of stolen phones end up on Facebook Marketplace, 
 OfferUp, and Craigslist. Don't become a victim.
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
 Buyers avoid stolen phones. Sellers prove their phones are legitimate. 
 Everyone wins except criminals.
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
 <h3 className="font-bold mb-2">3-Second Verification</h3>
 <p className="text-muted-foreground text-sm">
 Scan or enter the IMEI and get instant results. 
 Perfect for marketplace meetups.
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
 <h3 className="font-bold mb-2">Barcode Scanner Built-In</h3>
 <p className="text-muted-foreground text-sm">
 Point your camera at the IMEI barcode. No typing required - 
 instant scan and verify.
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
 What Our Stolen Phone Checker Verifies
 </h2>
 
 <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
 {[
 "SafeOrStolen stolen-item reports, web results and AI analysis",
 "Carrier blacklist status (AT&T, Verizon, T-Mobile)",
 "SafeOrStolen reports and public web results",
 "Insurance claim fraud reports",
 "Outstanding finance/lease status",
 "iCloud Activation Lock (iPhone)",
 "Google FRP Lock (Android)",
 "International stolen reports"
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
 Download the FREE Stolen Phone Checker App
 </h2>
 <p className="text-muted-foreground mb-8">
 Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Other services may not offer an app.
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

export default StolenPhoneCheckerApp;
