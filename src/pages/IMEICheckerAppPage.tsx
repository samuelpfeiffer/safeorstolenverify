import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Smartphone, Download, Shield, Camera, Zap, Check, Wifi, X } from 'lucide-react';

/**
 * Oct 7 2026: copy fixed by hand for "imei checker app". Removed "AI analysis", "instant"/"3 seconds",
 * the "only service with an app" claim, "works on iOS and Android" app-store wording and "free to download".
 * The app is a free installable web app at safeorstolen.com/app, not an App Store or Google Play app.
 */
const IMEICheckerAppPage = () => {
 const features = [
 {
 icon: Camera,
 title: "Scan the IMEI Barcode",
 description: "Point your camera at the IMEI barcode on the box or the SIM tray label and the number fills in for you. No typing 15 digits at a meetup."
 },
 {
 icon: Zap,
 title: "Results in a Few Seconds",
 description: "See the phone's make and model from the IMEI, plus any match in SafeOrStolen theft reports and public web results."
 },
 {
 icon: Shield,
 title: "Carrier Blacklist Check",
 description: "A paid lost/stolen carrier blacklist check is available. Monthly members get up to 20 blacklist checks a month."
 },
 {
 icon: Wifi,
 title: "Installable Web App",
 description: "Add SafeOrStolen to your home screen from your phone's browser. It isn't in the App Store or Google Play, and checks need an internet connection."
 }
 ];

 const coverage = [
 { item: "Make and model from the IMEI", included: true },
 { item: "SafeOrStolen theft reports", included: true },
 { item: "Public web results that mention the IMEI", included: true },
 { item: "Lost/stolen carrier blacklist", included: true, note: "Paid add-on; up to 20 a month for monthly members" },
 { item: "Apple or Google account lock (Activation Lock, FRP)", included: false, note: "Ask the seller to sign out in front of you" },
 { item: "Carrier unlock or unpaid balance", included: false, note: "Ask the carrier" },
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Is there an app to check IMEI for stolen phones?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes. SafeOrStolen has a free installable web app at safeorstolen.com/app that you add to your home screen from the browser; it isn't in the App Store or Google Play. Scan or type the IMEI and in a few seconds you see the make and model and any match in SafeOrStolen theft reports and public web results. A carrier blacklist check is a paid add-on." }
 },
 {
 "@type": "Question",
 "name": "Can I scan IMEI barcodes with my phone?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open the SafeOrStolen web app, tap the camera icon and point it at the IMEI barcode on the phone's box or the label in the SIM tray. The number fills in and you tap check. If there's no barcode, dial *#06# on the phone you're buying and type the 15-digit IMEI." }
 },
 {
 "@type": "Question",
 "name": "Is the IMEI checker app free?",
 "acceptedAnswer": { "@type": "Answer", "text": "Installing the SafeOrStolen web app is free, and a free account comes with 2 checks, no credit card. After that it's $0.99 a check or $10 a month for unlimited checks, cancel anytime. The carrier blacklist check is a paid add-on; monthly members get up to 20 a month." }
 }
 ]
 };

 const appSchema = {
 "@context": "https://schema.org",
 "@type": "SoftwareApplication",
 "name": "SafeOrStolen IMEI Checker",
 "applicationCategory": "UtilitiesApplication",
 "operatingSystem": "Web",
 "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
 };

 return (
 <>
 <PageSEO
 title="IMEI Checker App - Scan and Check a Phone | SafeOrStolen"
 description="Free installable IMEI checker web app: scan the IMEI barcode, see make and model and any theft report in a few seconds. 2 free checks, no app store needed."
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
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 IMEI Checker App
 </h1>

 <p className="text-xl text-muted-foreground mb-6">
 Check a used phone at the meetup, before any money changes hands. Scan the IMEI barcode and see the result in a few seconds.
 </p>

 <p className="text-lg text-muted-foreground mb-8">
 SafeOrStolen is a free installable web app. Open safeorstolen.com/app in Safari or Chrome and add it to your home screen. There's nothing to download from an app store.
 </p>

 <div className="flex flex-col sm:flex-row gap-4">
 <Button asChild size="lg" className="gap-2">
 <Link to="/app">
 <Download className="w-5 h-5" />
 Install the Web App
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
 <h2 className="text-3xl font-bold text-center mb-12">What the App Does</h2>

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

 {/* What an IMEI check covers */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">What an IMEI Check Covers</h2>

 <div className="overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="border-b">
 <th className="text-left py-4 px-4">What you learn</th>
 <th className="text-center py-4 px-4">Included</th>
 <th className="text-left py-4 px-4">Note</th>
 </tr>
 </thead>
 <tbody>
 {coverage.map((row, index) => (
 <tr key={index} className="border-b">
 <td className="py-4 px-4 font-medium">{row.item}</td>
 <td className="py-4 px-4 text-center">
 {row.included ? (
 <Check className="w-6 h-6 text-green-500 mx-auto" />
 ) : (
 <X className="w-6 h-6 text-destructive mx-auto" />
 )}
 </td>
 <td className="py-4 px-4 text-muted-foreground">{row.note ?? ''}</td>
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
 <p className="text-muted-foreground">Open safeorstolen.com/app on your phone. On iPhone, tap Share, then "Add to Home Screen". On Android, tap the menu, then "Install app". No app store needed.</p>
 </div>
 </div>

 <div className="flex items-start gap-6">
 <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">2</div>
 <div>
 <h3 className="font-semibold text-xl mb-2">Scan the IMEI</h3>
 <p className="text-muted-foreground">Tap the camera icon and point it at the IMEI barcode on the box. No box? Have the seller dial *#06# on the phone and type the number shown. Make sure it matches the box and the SIM tray.</p>
 </div>
 </div>

 <div className="flex items-start gap-6">
 <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">3</div>
 <div>
 <h3 className="font-semibold text-xl mb-2">Read the Result</h3>
 <p className="text-muted-foreground">In a few seconds you see "reported stolen", "possible match" or "no report found in the records searched", with every source listed. The check is saved to your account with the date.</p>
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
 The same app also checks vehicles, plates, electronics, power tools, firearms and bicycles. Installing it is free, and a free account includes 2 checks.
 </p>
 <Button asChild size="lg" className="gap-2">
 <Link to="/app">
 <Download className="w-5 h-5" />
 Install the Free Web App
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default IMEICheckerAppPage;
