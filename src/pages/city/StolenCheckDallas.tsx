import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Oct 8 2026: audited by hand. Removed unsourced DFW theft counts and rankings, the "AI analysis"
 * source, "3 seconds" wording, and unverified claims about specific Dallas safe exchange zones.
 */
const StolenCheckDallas = () => {
 const faqs = [
 {
 question: "How do I check if a used car in Dallas is stolen?",
 answer: "Get the 17-character VIN from the dashboard or driver's door jamb and enter it on SafeOrStolen (safeorstolen.com/stolen-check-dallas). It decodes the year, make and model, lists open safety recalls, and searches theft reports and public web results in a few seconds. Then make sure the VIN matches the Texas title and the seller's name matches their ID."
 },
 {
 question: "Where can I safely meet sellers in Dallas?",
 answer: "Meet somewhere public, busy and on camera, during the day. Many police departments in the DFW area welcome buyers and sellers in their lobbies or parking lots; call your local department's non-emergency line to ask. Never go to a private address to pick up a high-value item."
 },
 {
 question: "What items should I check before buying used in Dallas?",
 answer: "Anything with a serial number: cars and trucks (VIN), phones (IMEI), laptops, game consoles, bikes, power tools and construction equipment. Ask the seller for the number before you meet, check it, then confirm it on the item in person."
 },
 {
 question: "Should I worry about older Kia and Hyundai models?",
 answer: "Many 2011 to 2021 Kia and Hyundai models without push-button start lacked an engine immobilizer and became frequent theft targets nationwide. If you're buying one, check the VIN, look for a damaged steering column or ignition, and ask whether the anti-theft software update was installed."
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

 return (
 <>
 <PageSEO
 title="Dallas Stolen Item Check - Verify Before Buying | SafeOrStolen"
 description="Check if a car, phone, bike or tool is stolen before you buy in Dallas-Fort Worth. Enter the VIN, IMEI or serial and see the result in a few seconds."
 keywords="dallas stolen item check, stolen car check dallas, verify stolen dallas, VIN check dallas texas, DFW stolen vehicle"
 canonical="/stolen-check-dallas"
 structuredData={faqSchema}
 />

 <div className="min-h-screen bg-background">
 <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
 <MapPin className="w-5 h-5 text-primary" />
 <span className="text-sm font-medium">Dallas, Texas</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">Dallas Stolen Item Check</h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 Buying a used car, phone or tool in Dallas-Fort Worth? Check the VIN, IMEI or serial number before you pay.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify"><Shield className="w-5 h-5" />Check an Item - 2 Free Checks</Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/app"><Download className="w-5 h-5" />Get the Free Web App</Link>
 </Button>
 </div>
 </div>
 </section>

 <section className="py-12 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-6">What to check, by item</h2>
 <div className="grid md:grid-cols-3 gap-4 mb-8">
 <Card>
 <CardContent className="pt-6 text-center">
 <div className="text-2xl font-bold text-primary">VIN</div>
 <div className="text-sm text-muted-foreground">Cars and trucks: dashboard and door jamb</div>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <div className="text-2xl font-bold text-primary">IMEI</div>
 <div className="text-sm text-muted-foreground">Phones: dial *#06#</div>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <div className="text-2xl font-bold text-primary">Serial</div>
 <div className="text-sm text-muted-foreground">Laptops, bikes, tools: the label or stamp</div>
 </CardContent>
 </Card>
 </div>

 <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
 <h3>Why check before buying in Dallas?</h3>
 <p>
 DFW has a big secondhand market on Facebook Marketplace, OfferUp and Craigslist, and stolen goods get listed right next to honest sales.
 If police later identify something you bought as stolen, they can return it to its owner and you lose what you paid.
 </p>
 <p>
 For a car, match the VIN on the dash, the door jamb and the Texas title, and make sure the seller's name is on the title.
 For a phone, watch the seller sign out of their Apple or Google account before you pay.
 </p>
 <p>
 A SafeOrStolen check takes a few seconds. Every check searches theft reports filed on SafeOrStolen and public web results;
 VIN checks also decode the vehicle and list open recalls, and bike checks also search a national stolen-bicycle registry.
 </p>
 </div>
 </div>
 </section>

 <section className="py-12 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Dallas</h2>
 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <Card key={index}>
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

 <section className="py-16 px-4 bg-primary text-primary-foreground">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Check before you buy in Dallas</h2>
 <p className="mb-6 opacity-90">Your first 2 checks are free with a free account. Results come back in a few seconds.</p>
 <Button asChild size="lg" variant="secondary">
 <Link to="/verify">Start a Free Check</Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default StolenCheckDallas;
