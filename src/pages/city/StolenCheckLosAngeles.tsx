/** Oct 8 2026: audited by hand for "los angeles stolen item check". Removed invented theft stats and rankings, unverified station list, AI-as-source, offline/barcode app claims, "3 seconds". */
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, AlertTriangle, Phone, Car, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const StolenCheckLosAngeles = () => {
 const faqs = [
 {
 question: "How do I check if a used car in Los Angeles is stolen?",
 answer: "Type the 17-character VIN into SafeOrStolen (safeorstolen.com/stolen-check-los-angeles links to the checker). It decodes the year, make and model, lists open recalls, and searches SafeOrStolen theft reports and public web results. Then match the VIN on the dashboard, driver's door sticker and title, and make sure the title name matches the seller's ID."
 },
 {
 question: "Where should I meet sellers in LA to buy used items?",
 answer: "Pick a busy, well-lit public place with cameras, such as the lobby or parking lot of a police station. Call the station's non-emergency number first to ask whether they welcome exchanges there. Bring someone with you, check the item's number before you go, and don't carry more cash than the agreed price."
 },
 {
 question: "How do I check a used phone in Los Angeles before buying?",
 answer: "Ask the seller to dial *#06# and send you the IMEI before you meet. Run it through SafeOrStolen to see the make and model and any theft reports or public web mentions. At the meetup, confirm the number matches and that the phone isn't locked to the seller's Apple or Google account."
 },
 {
 question: "Can I use SafeOrStolen at swap meets in LA?",
 answer: "Yes. Add the free web app from safeorstolen.com/app to your phone's home screen, then type the serial, IMEI or VIN while you're standing at the booth. Checks need a data connection and come back in a few seconds. It is not an App Store or Google Play download."
 },
 {
 question: "What does a SafeOrStolen check cost?",
 answer: "You get 2 free checks with a free account, no credit card. After that a single check is $0.99, or $10 a month for unlimited checks, cancel anytime. An optional $1.99 certificate gives you a dated record with its own link showing you checked before the sale."
 }
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
 }))
 };

 const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "SafeOrStolen stolen-item check for Los Angeles buyers",
 "description": "Check a phone, car, plate, gun, bike or serial-numbered item for theft reports before buying in Los Angeles",
 "areaServed": {
 "@type": "City",
 "name": "Los Angeles",
 "containedInPlace": { "@type": "State", "name": "California" }
 },
 "provider": { "@type": "Organization", "name": "SafeOrStolen" }
 };

 return (
 <>
 <PageSEO
 title="Los Angeles Stolen Item Check: Verify Before Buying in LA | SafeOrStolen"
 description="Buying used in Los Angeles? Check an IMEI, VIN, plate or serial for theft reports before you meet a seller from Facebook Marketplace, OfferUp or Craigslist."
 keywords="los angeles stolen item check, LA stolen car check, check IMEI los angeles, VIN check LA, stolen phone los angeles"
 canonical="/stolen-check-los-angeles"
 structuredData={[faqSchema, localBusinessSchema]}
 />

 <div className="min-h-screen bg-background">
 {/* Hero */}
 <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
 <MapPin className="w-5 h-5 text-primary" />
 <span className="text-sm font-medium">Los Angeles, California</span>
 </div>

 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Los Angeles stolen item check
 </h1>

 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 Before you meet a seller from Facebook Marketplace, OfferUp, Craigslist or a swap meet, get the item's IMEI, VIN or serial number and check it for theft reports. It takes a few seconds and you get 2 free checks.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 <Shield className="w-5 h-5" />
 Run a free check
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/app">
 <Download className="w-5 h-5" />
 Get the free web app
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* What to check */}
 <section className="py-16 px-4 bg-destructive/5">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">
 What to check before you pay
 </h2>

 <div className="grid md:grid-cols-3 gap-6">
 <Card className="border-destructive/20">
 <CardContent className="pt-6">
 <Car className="w-12 h-12 text-destructive mx-auto mb-4" />
 <h3 className="font-bold text-center mb-2">Cars and motorcycles</h3>
 <p className="text-muted-foreground text-sm">Match the VIN on the dashboard, driver's door sticker and title. Run it for theft reports and open recalls, and compare the title name to the seller's ID.</p>
 </CardContent>
 </Card>

 <Card className="border-destructive/20">
 <CardContent className="pt-6">
 <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
 <h3 className="font-bold text-center mb-2">Phones</h3>
 <p className="text-muted-foreground text-sm">Get the IMEI with *#06#, run it, and make sure the phone isn't locked to someone's Apple or Google account before you hand over cash.</p>
 </CardContent>
 </Card>

 <Card className="border-destructive/20">
 <CardContent className="pt-6">
 <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
 <h3 className="font-bold text-center mb-2">Bikes, tools and electronics</h3>
 <p className="text-muted-foreground text-sm">Find the serial number, photograph it, and check it. A scratched-off or missing serial is a reason to walk away.</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* Meeting safely */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">
 Meeting a seller in LA
 </h2>
 <div className="grid md:grid-cols-2 gap-4">
 {[
 "Ask for the IMEI, VIN or serial before you agree to meet, and check it at home",
 "Meet in a busy public place; some police stations let people use their lobby or lot, so call the non-emergency line to ask",
 "Bring a friend and keep your phone charged",
 "Confirm the number on the item matches what the seller sent",
 "Walk away if the seller rushes you, won't show the number, or the price is far below other listings",
 "Save your check with the date; add a $1.99 certificate if you want a shareable record"
 ].map((tip, i) => (
 <Card key={i}>
 <CardContent className="flex items-center gap-3 py-4">
 <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
 <span className="text-sm">{tip}</span>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">
 Los Angeles questions
 </h2>

 <div className="space-y-6">
 {faqs.map((faq, i) => (
 <Card key={i}>
 <CardHeader>
 <CardTitle className="text-lg">{faq.question}</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">{faq.answer}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 px-4 bg-primary text-primary-foreground">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">
 Check before you buy in LA
 </h2>
 <p className="text-lg opacity-90 mb-8">
 2 free checks with a free account. Results in a few seconds, with every source listed.
 </p>
 <Button asChild size="lg" variant="secondary">
 <Link to="/verify">Run a free check</Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default StolenCheckLosAngeles;
