import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, Car, AlertTriangle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckSanDiego = () => {
 const faqs = [
 {
 question: "How do I check if something is stolen in San Diego?",
 answer: "Get the serial number, IMEI or VIN from the item itself and enter it on SafeOrStolen (safeorstolen.com/stolen-check-san-diego). In a few seconds it searches SafeOrStolen theft reports and public web results and lists every source. Bikes are also checked against a national stolen-bicycle registry. The first 2 checks are free."
 },
 {
 question: "Where can I safely meet sellers in San Diego?",
 answer: "Meet in a busy, well-lit public place with cameras, such as a police station lobby or parking lot if your local SDPD division allows exchanges there. Call the division's non-emergency line to ask first. Bring someone with you and check the serial number before you hand over money."
 },
 {
 question: "Why check a used car's VIN in San Diego?",
 answer: "San Diego sits next to the border and on I-5 and I-15, so cars move in and out of the area quickly. A stolen car is usually seized and returned to its owner, leaving the buyer out the money. Run the VIN on SafeOrStolen for theft reports, year, make, model and open recalls, then match it on the car."
 },
 {
 question: "Should I check a used motorcycle or e-bike before buying in San Diego?",
 answer: "Yes. Motorcycles and bikes sell year-round here and are easy to move. Check a motorcycle's VIN and a bicycle's frame serial on SafeOrStolen before paying. Bike checks also search a national stolen-bicycle registry."
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
 title="San Diego Stolen Item Check - Verify Before Buying | SafeOrStolen"
 description="Check if a used car, phone, bike or tool is stolen before buying in San Diego. Enter the VIN, IMEI or serial and see theft reports in a few seconds. 2 free checks."
 keywords="san diego stolen item check, stolen car check san diego, verify stolen san diego, SDPD stolen vehicle, VIN check san diego"
 canonical="/stolen-check-san-diego"
 structuredData={faqSchema}
 />

 <div className="min-h-screen bg-background">
 <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
 <MapPin className="w-5 h-5 text-primary" />
 <span className="text-sm font-medium">San Diego, California</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">San Diego Stolen Item Check</h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 Buying a used car, phone, bike or tool in San Diego? Enter the VIN, IMEI or serial number and see in a few seconds whether it&apos;s been reported stolen.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify"><Shield className="w-5 h-5" />Verify Item - Free</Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/app"><Download className="w-5 h-5" />Get the Free Web App</Link>
 </Button>
 </div>
 </div>
 </section>

 <section className="py-12 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-6">What a San Diego Check Covers</h2>
 <div className="grid md:grid-cols-3 gap-4 mb-8">
 <Card>
 <CardContent className="pt-6 text-center">
 <Car className="w-10 h-10 text-primary mx-auto mb-3" />
 <div className="text-xl font-bold text-primary">Cars and trucks</div>
 <div className="text-sm text-muted-foreground">Theft reports, year, make, model and open recalls</div>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <AlertTriangle className="w-10 h-10 text-primary mx-auto mb-3" />
 <div className="text-xl font-bold text-primary">Phones</div>
 <div className="text-sm text-muted-foreground">Theft reports and make and model from the IMEI</div>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <div className="text-xl font-bold text-primary">Bikes and tools</div>
 <div className="text-sm text-muted-foreground">Bikes also checked against a national stolen-bicycle registry</div>
 </CardContent>
 </Card>
 </div>
 
 <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
 <h3>Why Verify Before Buying in San Diego?</h3>
 <p>
 San Diego sits on the U.S.-Mexico border with I-5, I-8 and I-15 running through it, so cars,
 bikes and electronics change hands and move out of town fast. Once a stolen item is gone,
 it&apos;s hard to get back, and a buyer who ends up with one usually loses it and the money.
 Watch for cloned VINs too: make sure the VIN on the dashboard, door jamb and title all match.
 </p>
 <p>
 SafeOrStolen searches its own theft reports and public web results, and lists every source
 with the result. A check takes a few seconds and is saved to your account with the date.
 </p>
 <h3>Meeting a Seller</h3>
 <p>
 Pick a busy public place with cameras. Some SDPD divisions allow exchanges at the station; call
 the non-emergency line to ask. Check the serial, IMEI or VIN on the item in front of you before
 you pay.
 </p>
 </div>
 </div>
 </section>

 <section className="py-12 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - San Diego</h2>
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
 <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in San Diego</h2>
 <p className="mb-6 opacity-90">2 free checks, results in a few seconds.</p>
 <Button asChild size="lg" variant="secondary">
 <Link to="/verify">Verify Item Free</Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default StolenCheckSanDiego;
