import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Smartphone, Download, Shield, Camera, Zap, Check, Star, Wifi } from 'lucide-react';

/**
 * IMEI Checker App Page - Real page for /imei-checker-app URL
 * Dedicated landing page for the IMEI checking feature of the app
 */
const IMEICheckerAppPage = () => {
 const features = [
 {
 icon: Camera,
 title: "Scan IMEI Barcode",
 description: "Point your camera at the IMEI barcode on the box or phone and get instant verification"
 },
 {
 icon: Zap,
 title: "3-Second Results",
 description: "Get complete stolen/blacklist status in under 3 seconds from our verification databases"
 },
 {
 icon: Shield,
 title: "Comprehensive Check",
 description: "Checks carrier and theft databases, carriers, community theft registries, and reported theft history"
 },
 {
 icon: Wifi,
 title: "Works Offline",
 description: "Download the database to check IMEIs even without cell service"
 }
 ];

 const competitors = [
 { name: "CheckMEND", hasApp: false, note: "Phones only" },
 { name: "IMEI.info", hasApp: false, note: "Website only" },
 { name: "Swappa", hasApp: false, note: "No standalone IMEI app" },
 { name: "SafeOrStolen", hasApp: true, note: "Full installable web app with barcode scanning" }
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Is there an app to check IMEI for stolen phones?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes! Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. You can scan IMEI barcodes, check against our verification databases, and get results in 3 seconds. The app works on both iOS and Android." }
 },
 {
 "@type": "Question",
 "name": "Does CheckMEND have a installable web app?",
 "acceptedAnswer": { "@type": "Answer", "text": "No, CheckMEND is website-only. Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place." }
 },
 {
 "@type": "Question",
 "name": "Can I scan IMEI barcodes with my phone?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes! The SafeOrStolen app includes a barcode scanner. Simply open the app, tap scan, and point your camera at the IMEI barcode on the phone's box or settings screen. The app reads the barcode and runs verification automatically." }
 },
 {
 "@type": "Question",
 "name": "Is the IMEI checker app free?",
 "acceptedAnswer": { "@type": "Answer", "text": "The SafeOrStolen app is free to download. 2 free checks, then $0.99/check or $10/month unlimited. Cancel anytime." }
 }
 ]
 };

 const appSchema = {
 "@context": "https://schema.org",
 "@type": "SoftwareApplication",
 "name": "SafeOrStolen IMEI Checker",
 "applicationCategory": "UtilitiesApplication",
 "operatingSystem": "iOS, Android",
 "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
 };

 return (
 <>
 <PageSEO
 title="IMEI Checker App - Free Phone Stolen Check App | SafeOrStolen"
 description="SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Scan IMEI barcodes, check stolen status, verify phones before buying. Free app with barcode scanner."
 keywords="IMEI checker app, IMEI scanner app, stolen phone app, check IMEI app, phone verification app, barcode IMEI scanner"
 canonical="/imei-checker-app"
 structuredData={[faqSchema, appSchema]}
 />

 <div className="min-h-screen bg-background">
 {/* Hero */}
 <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
 <div className="max-w-6xl mx-auto">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
 <Star className="w-4 h-4 text-green-500 fill-green-500" />
 <span className="text-sm font-medium">All Six Item Categories, One Place</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 IMEI Checker App
 </h1>
 
 <p className="text-xl text-muted-foreground mb-6">
 Check if any phone is stolen right from your mobile device. 
 Scan IMEI barcodes, get instant results. Works on iOS and Android.
 </p>

 <p className="text-lg text-muted-foreground mb-8">
 <strong></strong> 
 SafeOrStolen is the <strong>only</strong> IMEI verification service with a real installable web app.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <Button asChild size="lg" className="gap-2">
 <Link to="/app">
 <Download className="w-5 h-5" />
 Get the App Free
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/imei-checker">
 <Smartphone className="w-5 h-5" />
 Check IMEI on Web
 </Link>
 </Button>
 </div>
 </div>

 <div className="flex justify-center">
 <div className="relative">
 <div className="w-64 h-[500px] bg-gradient-to-b from-primary/20 to-primary/5 rounded-[3rem] border-4 border-primary/30 flex items-center justify-center">
 <div className="text-center p-6">
 <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
 <p className="font-semibold">Scan IMEI</p>
 <p className="text-sm text-muted-foreground">Point camera at barcode</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Features */}
 <section className="py-16 px-4">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">App Features</h2>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {features.map((feature, index) => (
 <Card key={index}>
 <CardHeader>
 <feature.icon className="w-10 h-10 text-primary mb-2" />
 <CardTitle className="text-lg">{feature.title}</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">{feature.description}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Competitor Comparison */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Why Multi-Category Verification Matters</h2>
 
 <div className="overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="border-b">
 <th className="text-left py-4 px-4">Service</th>
 <th className="text-center py-4 px-4">Mobile App</th>
 <th className="text-left py-4 px-4">Note</th>
 </tr>
 </thead>
 <tbody>
 {competitors.map((comp, index) => (
 <tr key={index} className={`border-b ${comp.hasApp ? 'bg-green-50 dark:bg-green-900/20' : ''}`}>
 <td className="py-4 px-4 font-medium">{comp.name}</td>
 <td className="py-4 px-4 text-center">
 {comp.hasApp ? (
 <Check className="w-6 h-6 text-green-500 mx-auto" />
 ) : (
 <span className="text-destructive">✕</span>
 )}
 </td>
 <td className="py-4 px-4 text-muted-foreground">{comp.note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* How to Use */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">How to Use the IMEI Checker App</h2>
 
 <div className="space-y-8">
 <div className="flex items-start gap-6">
 <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">1</div>
 <div>
 <h3 className="font-semibold text-xl mb-2">Install the App</h3>
 <p className="text-muted-foreground">Visit safeorstolen.com on your phone and tap "Add to Home Screen". No app store download needed.</p>
 </div>
 </div>

 <div className="flex items-start gap-6">
 <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">2</div>
 <div>
 <h3 className="font-semibold text-xl mb-2">Scan the IMEI</h3>
 <p className="text-muted-foreground">Open the app and tap the camera icon. Point at the IMEI barcode on the phone's box or dial *#06# and scan the screen.</p>
 </div>
 </div>

 <div className="flex items-start gap-6">
 <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">3</div>
 <div>
 <h3 className="font-semibold text-xl mb-2">Get Instant Results</h3>
 <p className="text-muted-foreground">Within 3 seconds, see if the phone is stolen, blacklisted, or safe to buy. Make your decision on the spot.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 px-4 bg-primary/5">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Get the IMEI Checker App</h2>
 <p className="text-xl text-muted-foreground mb-8">
 SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Free to download, free checks included.
 </p>
 <Button asChild size="lg" className="gap-2">
 <Link to="/app">
 <Download className="w-5 h-5" />
 Download Free App
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default IMEICheckerAppPage;
