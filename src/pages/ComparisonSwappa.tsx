/** Oct 8 2026: audited by hand. Removed iOS/Android app, offline, barcode and "3-second" claims; app is a free web app at /app. */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Download, Shield, Zap, Globe, BarChart3, Star, HelpCircle } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ComparisonSwappa = () => {
 const comparisonSchema = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "SafeOrStolen vs Swappa: what each one does",
 "description": "Swappa is a used phone and tech marketplace. SafeOrStolen is a stolen-item check for phones, vehicles, plates, guns, bikes and serial-numbered gear bought anywhere.",
 "specialty": "comparison",
 "mainEntity": {
 "@type": "ItemList",
 "itemListElement": [
 {
 "@type": "Service",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com",
 "description": "Stolen-item check for phones (IMEI), vehicles (VIN), plates, guns, bikes and serial numbers, with a free installable web app",
 "provider": { "@type": "Organization", "name": "SafeOrStolen" },
 "hasOfferCatalog": {
 "@type": "OfferCatalog",
 "name": "Plans",
 "itemListElement": [
 { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "2 free checks" },
 { "@type": "Offer", "price": "0.99", "priceCurrency": "USD", "description": "Single check" },
 { "@type": "Offer", "price": "10.00", "priceCurrency": "USD", "description": "Unlimited checks per month" }
 ]
 }
 },
 {
 "@type": "Service",
 "name": "Swappa",
 "description": "Used phone and tech marketplace that checks devices listed on its own site",
 "provider": { "@type": "Organization", "name": "Swappa" }
 }
 ]
 }
 };

 const faqs = [
 {
 value: 'app',
 q: "Does Swappa have a stolen-phone check I can use on any phone?",
 a: "Swappa checks devices listed for sale on its own marketplace. If you're buying a phone somewhere else, such as Facebook Marketplace or a pawn shop, you need a separate check. SafeOrStolen (safeorstolen.com/vs-swappa) checks any phone by IMEI, wherever you found it, and has a free installable web app at safeorstolen.com/app.",
 },
 {
 value: 'car',
 q: "Can Swappa check if a car or bike is stolen?",
 a: "No. Swappa deals in phones and tech. SafeOrStolen checks vehicles by VIN (year, make and model, open recalls, and Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates), guns (police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio records), and bikes (a national stolen-bicycle registry).",
 },
 {
 value: 'free',
 q: "Is SafeOrStolen free to use?",
 a: "You get 2 free checks with a free account, no credit card. After that a single check is $0.99, or $10 a month for unlimited checks, cancel anytime. Monthly members also get up to 20 phone blacklist checks a month.",
 },
 {
 value: 'databases',
 q: "What does a SafeOrStolen phone check search?",
 a: "Every SafeOrStolen check searches its own theft reports, filed by owners, and public web results that mention the number. A phone check also shows the make and model from the IMEI. A paid lost/stolen carrier blacklist check is available on top. Results read \"reported stolen\", \"possible match\", or \"no report found in the records searched\", with sources listed.",
 },
 {
 value: 'any-source',
 q: "Can I use SafeOrStolen for items not listed on Swappa?",
 a: "Yes. SafeOrStolen works for any item, wherever you found it: Facebook Marketplace, Craigslist, OfferUp, pawn shops, garage sales or a private seller. Type the IMEI, VIN or serial number and read the result in a few seconds. Each check is saved to your account with the date.",
 },
 {
 value: 'which-better',
 q: "Which is better for buying used phones, Swappa or SafeOrStolen?",
 a: "They do different jobs. Swappa is a place to buy and sell used phones, with seller feedback and listing prices. SafeOrStolen is a check you run on a phone from any source. If you're buying off Swappa, its own check covers that listing; if you're buying anywhere else, run the IMEI through SafeOrStolen before you pay.",
 },
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map((f) => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a },
 })),
 };

 const features = [
 { feature: 'Free installable web app (no app-store download)', safeorstolen: true, swappa: false },
 { feature: 'Checks phones bought anywhere', safeorstolen: true, swappa: false },
 { feature: 'Phones, vehicles, plates, guns and bikes', safeorstolen: true, swappa: false },
 { feature: 'VIN check for vehicles', safeorstolen: true, swappa: false },
 { feature: 'Firearm serial number check', safeorstolen: true, swappa: false },
 { feature: 'Owner theft reports and public web results', safeorstolen: true, swappa: false },
 { feature: 'Free checks available', safeorstolen: true, swappa: true },
 { feature: 'Buy/sell marketplace', safeorstolen: false, swappa: true },
 { feature: 'Listing prices to compare', safeorstolen: false, swappa: true },
 { feature: '$1.99 dated verification certificate', safeorstolen: true, swappa: false },
 { feature: 'Bulk checking for pawn shops and dealers', safeorstolen: true, swappa: false },
 ];

 return (
 <>
 <PageSEO
 title="SafeOrStolen vs Swappa: Stolen Phone Check Compared"
 description="Swappa is a used phone marketplace. SafeOrStolen checks any phone, car, plate, gun or bike for theft reports, wherever you buy it. Here's when to use each."
 keywords="Swappa alternative, Swappa IMEI check alternative, SafeOrStolen vs Swappa, Swappa stolen phone check"
 canonical="/vs-swappa"
 structuredData={[comparisonSchema, faqSchema]}
 />
 <noscript>
 <header style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
 <h1>SafeOrStolen vs Swappa</h1>
 <p>Swappa is a used phone marketplace. SafeOrStolen is a stolen-item check you can run on a phone, car, plate, gun or bike from any seller.</p>
 <h2>Key differences</h2>
 <ul>
 <li><strong>On your phone:</strong> SafeOrStolen has a free installable web app at safeorstolen.com/app (not an app-store download).</li>
 <li><strong>Item types:</strong> SafeOrStolen checks phones, vehicles, plates, guns, bikes and serial-numbered gear. Swappa deals in phones and tech.</li>
 <li><strong>Sources:</strong> SafeOrStolen searches its own theft reports and public web results, plus a stolen-bicycle registry for bikes, police theft records for guns, and Arizona law-enforcement records for Arizona vehicles.</li>
 <li><strong>Where it works:</strong> SafeOrStolen works on items from any seller. Swappa checks devices listed on Swappa.</li>
 <li><strong>Pricing:</strong> SafeOrStolen: 2 free checks, then $0.99 a check or $10 a month unlimited.</li>
 </ul>
 <h2>Frequently asked questions</h2>
 {faqs.map((f) => (
 <div key={f.value}>
 <h3>{f.q}</h3>
 <p>{f.a}</p>
 </div>
 ))}
 <nav>
 <a href="/verify">Run a free check</a> | <a href="/app">Get the web app</a> | <a href="/pricing">See pricing</a>
 </nav>
 </header>
 </noscript>

 <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
 <div className="container mx-auto px-4 py-12">
 <div className="max-w-6xl mx-auto">
 {/* Hero */}
 <div className="text-center mb-16">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 SafeOrStolen vs Swappa: what each one does
 </h1>
 <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
 Swappa is a marketplace for used phones and tech, and it checks devices listed on its own site. SafeOrStolen is a stolen-item check you run on a phone, car, plate, gun or bike from <strong>any seller</strong>.
 </p>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
 Buying on Swappa? Its own check covers that listing. Buying anywhere else? Type the IMEI, VIN or serial into SafeOrStolen before you hand over cash.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button size="lg" asChild>
 <Link to="/verify">
 <Shield className="w-5 h-5 mr-2" />
 Run a free check
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Get the web app
 </Link>
 </Button>
 </div>
 </div>

 {/* Side-by-Side Cards */}
 <div className="grid md:grid-cols-2 gap-8 mb-16">
 <Card className="border-2 border-green-200 bg-green-50/50 dark:bg-green-950/20">
 <CardHeader>
 <CardTitle className="flex items-center gap-2 text-2xl">
 <Smartphone className="w-8 h-8 text-green-600" />
 SafeOrStolen
 </CardTitle>
 <p className="text-sm text-muted-foreground">Stolen-item check for items from any seller</p>
 </CardHeader>
 <CardContent>
 <ul className="space-y-3">
 {[
 ['Free web app', 'Add safeorstolen.com/app to your home screen; no app-store download'],
 ['Many item types', 'Phones, vehicles, plates, guns, bikes, laptops, tools'],
 ['Sources', "SafeOrStolen theft reports, public web results, plus item-specific records for bikes, guns and Arizona vehicles"],
 ['Clear results', '"Reported stolen", "possible match", or "no report found in the records searched", with sources listed'],
 ['2 free checks', 'Then $0.99 a check or $10 a month unlimited'],
 ['Verification certificate', 'Optional $1.99 dated record with its own link'],
 ].map(([title, desc]) => (
 <li key={title} className="flex items-start gap-2">
 <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span><strong>{title}</strong>: {desc}</span>
 </li>
 ))}
 </ul>
 <Button className="w-full mt-6" size="lg" asChild>
 <Link to="/app">Get the free web app</Link>
 </Button>
 </CardContent>
 </Card>

 <Card className="border-2 border-muted bg-muted/20">
 <CardHeader>
 <CardTitle className="flex items-center gap-2 text-2xl">
 <Globe className="w-8 h-8 text-muted-foreground" />
 Swappa
 </CardTitle>
 <p className="text-sm text-muted-foreground">Used phone and tech marketplace</p>
 </CardHeader>
 <CardContent>
 <ul className="space-y-3">
 {[
 ['Phones and tech only', 'Not for cars, guns or bikes'],
 ['Checks its own listings', 'Not a check you run on a phone bought elsewhere'],
 ['Marketplace', 'Buy and sell on one platform'],
 ['Listing prices', 'Handy for judging a fair price'],
 ['Seller feedback', 'Ratings from past buyers'],
 ].map(([title, desc], i) => (
 <li key={title} className="flex items-start gap-2">
 {i < 2 ? (
 <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 ) : (
 <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 )}
 <span><strong>{title}</strong>: {desc}</span>
 </li>
 ))}
 </ul>
 </CardContent>
 </Card>
 </div>

 {/* Detailed Feature Comparison Table */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Feature by feature</h2>
 <div className="overflow-x-auto">
 <table className="w-full border-collapse">
 <thead>
 <tr className="bg-muted">
 <th className="text-left p-4 font-semibold">Feature</th>
 <th className="text-center p-4 font-semibold text-green-600">SafeOrStolen</th>
 <th className="text-center p-4 font-semibold text-muted-foreground">Swappa</th>
 </tr>
 </thead>
 <tbody>
 {features.map((row, i) => (
 <tr key={row.feature} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
 <td className="p-4 text-sm font-medium">{row.feature}</td>
 <td className="p-4 text-center">
 {row.safeorstolen ? (
 <Check className="w-5 h-5 text-green-600 mx-auto" />
 ) : (
 <X className="w-5 h-5 text-red-500 mx-auto" />
 )}
 </td>
 <td className="p-4 text-center">
 {row.swappa ? (
 <Check className="w-5 h-5 text-green-600 mx-auto" />
 ) : (
 <X className="w-5 h-5 text-red-500 mx-auto" />
 )}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 {/* When to Use Each */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">When to use each</h2>
 <div className="grid md:grid-cols-2 gap-8">
 <Card>
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <Shield className="w-6 h-6 text-primary" />
 Use SafeOrStolen when...
 </CardTitle>
 </CardHeader>
 <CardContent>
 <ul className="space-y-3 text-sm">
 <li className="flex items-start gap-2">
 <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
 <span>You're buying a used phone from <strong>any source</strong> (Facebook Marketplace, Craigslist, pawn shops, garage sales)</span>
 </li>
 <li className="flex items-start gap-2">
 <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
 <span>You want to check a <strong>car, motorcycle or truck</strong> by VIN</span>
 </li>
 <li className="flex items-start gap-2">
 <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
 <span>You're checking a <strong>firearm serial number</strong> against police theft and loss reports</span>
 </li>
 <li className="flex items-start gap-2">
 <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
 <span>You want a <strong>dated record</strong> showing you checked before the sale</span>
 </li>
 <li className="flex items-start gap-2">
 <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
 <span>You run a <strong>pawn shop or dealership</strong> and need to check many items (see /bulk-check)</span>
 </li>
 </ul>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <Globe className="w-6 h-6 text-muted-foreground" />
 Use Swappa when...
 </CardTitle>
 </CardHeader>
 <CardContent>
 <ul className="space-y-3 text-sm">
 <li className="flex items-start gap-2">
 <Star className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
 <span>You want to <strong>buy or sell</strong> a used phone on a marketplace</span>
 </li>
 <li className="flex items-start gap-2">
 <Star className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
 <span>You want to <strong>compare listing prices</strong> before you buy or sell</span>
 </li>
 <li className="flex items-start gap-2">
 <Star className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
 <span>You prefer buying from sellers with <strong>feedback</strong> on one platform</span>
 </li>
 </ul>
 <p className="text-xs text-muted-foreground mt-4">
 You can use both: find a phone on Swappa, then run its IMEI through SafeOrStolen too.
 </p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Database Sources */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">What a SafeOrStolen check searches</h2>
 <div className="grid md:grid-cols-2 gap-8">
 <Card className="border-green-200">
 <CardHeader>
 <CardTitle className="text-lg flex items-center gap-2">
 <BarChart3 className="w-5 h-5 text-green-600" />
 Every check
 </CardTitle>
 </CardHeader>
 <CardContent>
 <ul className="text-sm space-y-2">
 <li>SafeOrStolen's own theft reports, filed by owners</li>
 <li>Public web results: listings and posts that mention the number</li>
 </ul>
 </CardContent>
 </Card>

 <Card className="border-green-200">
 <CardHeader>
 <CardTitle className="text-lg flex items-center gap-2">
 <BarChart3 className="w-5 h-5 text-green-600" />
 Added by item type
 </CardTitle>
 </CardHeader>
 <CardContent>
 <ul className="text-sm space-y-2">
 <li>Phones: make and model from the IMEI; paid carrier blacklist check available</li>
 <li>Bikes: a national stolen-bicycle registry</li>
 <li>Guns: police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records</li>
 <li>Arizona VINs and plates: Arizona law-enforcement stolen-vehicle records</li>
 </ul>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* CTA */}
 <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 mb-16">
 <CardContent className="pt-8 text-center">
 <h2 className="text-3xl font-bold mb-4">Check a phone from any seller</h2>
 <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
 2 free checks with a free account, then $0.99 a check or $10 a month unlimited. Results come back in a few seconds.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button size="lg" asChild>
 <Link to="/verify">
 <Shield className="w-5 h-5 mr-2" />
 Run a free check
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/pricing">See pricing</Link>
 </Button>
 </div>
 </CardContent>
 </Card>

 {/* FAQ Section */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
 <HelpCircle className="w-8 h-8" />
 Frequently asked questions
 </h2>
 <div className="max-w-3xl mx-auto">
 <Accordion type="single" collapsible className="w-full">
 {faqs.map((f) => (
 <AccordionItem key={f.value} value={f.value}>
 <AccordionTrigger>{f.q}</AccordionTrigger>
 <AccordionContent>{f.a}</AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </section>

 {/* Internal Links */}
 <section className="text-center text-sm text-muted-foreground space-y-2 pb-8">
 <p className="font-medium text-foreground">More comparisons and tools</p>
 <div className="flex flex-wrap justify-center gap-3">
 <Link to="/vs-imeiinfo" className="text-primary hover:underline">SafeOrStolen vs IMEI.info</Link>
 <span>•</span>
 <Link to="/how-to-check-if-car-stolen" className="text-primary hover:underline">Vehicle checking guide</Link>
 <span>•</span>
 <Link to="/vs-autocheck" className="text-primary hover:underline">SafeOrStolen vs AutoCheck</Link>
 <span>•</span>
 <Link to="/imei-checker" className="text-primary hover:underline">IMEI checker</Link>
 <span>•</span>
 <Link to="/vin-checker" className="text-primary hover:underline">VIN checker</Link>
 <span>•</span>
 <Link to="/compare" className="text-primary hover:underline">All comparisons</Link>
 </div>
 </section>
 </div>
 </div>
 </div>
 </>
 );
};

export default ComparisonSwappa;
