import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, AlertTriangle, Search, Shield, ArrowRight, Settings, Phone } from 'lucide-react';

export default function CheckAndroidPage() {
 return (
 <>
 <PageSEO
 title="Check If Android Phone Is Stolen - Free IMEI Verification | SafeOrStolen"
 description="Verify any Android phone before buying. Check Samsung, Google Pixel, OnePlus, Xiaomi IMEI numbers against stolen and blacklist databases. Free instant results."
 keywords="check android stolen, android IMEI check, Samsung stolen check, Google Pixel verification, OnePlus IMEI lookup, android blacklist check"
 canonical="https://safeorstolen.com/check-android"
 />
 <div className="min-h-screen bg-background pt-20">
 {/* Hero */}
 <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-600 mb-6">
 <Smartphone className="h-4 w-4 mr-2" />
 <span className="text-sm font-medium">Android Phone Verification</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Check If Android Phone Is Stolen
 </h1>
 <p className="text-xl text-muted-foreground mb-8">
 Verify Samsung, Google Pixel, OnePlus, Xiaomi, and any Android device before buying. Check IMEI against carrier and theft databases and stolen property databases.
 </p>
 <Button size="lg" asChild>
 <Link to="/verify">Check Android IMEI Now</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* How to Find IMEI */}
 <section className="py-16 container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">How to Find Android IMEI</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <Card>
 <CardContent className="p-6">
 <Phone className="h-10 w-10 text-primary mb-4" />
 <h3 className="text-xl font-bold mb-3">Method 1: Dial *#06#</h3>
 <p className="text-muted-foreground">
 Open the phone app and dial <code className="bg-muted px-2 py-1 rounded">*#06#</code>. The IMEI will display automatically—no need to press call.
 </p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="p-6">
 <Settings className="h-10 w-10 text-primary mb-4" />
 <h3 className="text-xl font-bold mb-3">Method 2: Settings Menu</h3>
 <p className="text-muted-foreground">
 Go to <strong>Settings → About Phone → IMEI</strong>. For dual-SIM phones, both IMEI numbers will be listed.
 </p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="p-6">
 <Search className="h-10 w-10 text-primary mb-4" />
 <h3 className="text-xl font-bold mb-3">Method 3: SIM Tray</h3>
 <p className="text-muted-foreground">
 Remove the SIM tray using the ejector tool. The IMEI is often printed on the tray or visible in the slot area.
 </p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="p-6">
 <CheckCircle className="h-10 w-10 text-primary mb-4" />
 <h3 className="text-xl font-bold mb-3">Method 4: Original Box</h3>
 <p className="text-muted-foreground">
 Check the barcode sticker on the original box. The IMEI should match the phone exactly—mismatches are a red flag.
 </p>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* What We Check */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">What We Verify</h2>
 <div className="space-y-4">
 <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
 <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-bold">Carrier Blacklist Status</h3>
 <p className="text-sm text-muted-foreground">Check if the phone is blacklisted by AT&T, Verizon, T-Mobile, or any US carrier</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
 <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-bold">carrier and theft databases Global Blacklist</h3>
 <p className="text-sm text-muted-foreground">Verify against the worldwide carrier database with 15B+ device records</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
 <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-bold">Stolen Property Reports</h3>
 <p className="text-sm text-muted-foreground">Check community theft registries for theft reports</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
 <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-bold">theft reports</h3>
 <p className="text-sm text-muted-foreground">Verify if insurance was paid out for theft or loss of this device</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
 <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-bold">Google FRP Lock</h3>
 <p className="text-sm text-muted-foreground">Check if Factory Reset Protection is active (indicates previous owner's Google account)</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Red Flags */}
 <section className="py-16 container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Red Flags When Buying Android</h2>
 <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg">
 <div className="flex items-start gap-4">
 <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
 <div>
 <h3 className="font-bold text-lg mb-4">Warning Signs of Stolen Android Phones</h3>
 <ul className="space-y-2 text-muted-foreground">
 <li>• Seller won't let you dial *#06# to check IMEI</li>
 <li>• IMEI on phone doesn't match box or SIM tray</li>
 <li>• Phone is stuck in FRP (Factory Reset Protection) lock</li>
 <li>• Price is significantly below market value</li>
 <li>• Seller insists on quick cash sale, no receipts</li>
 <li>• Original box, charger, or accessories missing</li>
 <li>• Seller can't demonstrate phone activation on any carrier</li>
 <li>• IMEI area shows signs of physical tampering</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Brands */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Supported Android Brands</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
 <Card><CardContent className="pt-6">Samsung</CardContent></Card>
 <Card><CardContent className="pt-6">Google Pixel</CardContent></Card>
 <Card><CardContent className="pt-6">OnePlus</CardContent></Card>
 <Card><CardContent className="pt-6">Xiaomi</CardContent></Card>
 <Card><CardContent className="pt-6">Motorola</CardContent></Card>
 <Card><CardContent className="pt-6">LG</CardContent></Card>
 <Card><CardContent className="pt-6">Sony</CardContent></Card>
 <Card><CardContent className="pt-6">All Android</CardContent></Card>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16">
 <div className="container mx-auto px-4 text-center">
 <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">Check Before You Buy or Sell</h2>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
 Verify any Android phone IMEI in seconds. Free check, instant results.
 </p>
 <Button size="lg" asChild>
 <Link to="/verify">
 Check Android IMEI <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
}
