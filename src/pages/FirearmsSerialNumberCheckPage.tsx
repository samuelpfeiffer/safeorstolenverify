/**
 * Firearm Serial Number Check Hub Page
 * Landing page for firearm serial number checks
 * URL: /firearms-serial-number-check
 */

import { Link } from '@/lib/router-compat';
import { Shield, Search, AlertTriangle, CheckCircle, FileText, Scale, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEOHead } from '@/components/seo/SEOHead';
import { useState } from 'react';

const FirearmsSerialNumberCheckPage = () => {
 const [serialInput, setSerialInput] = useState('');

 const handleSearch = () => {
 if (serialInput.trim()) {
 window.location.href = `/verify?q=${encodeURIComponent(serialInput.trim())}&type=firearm`;
 }
 };

 const faqs = [
 {
 question: "Is there a free way to check if a gun is stolen?",
 answer: "Yes. SafeOrStolen (safeorstolen.com/firearms-serial-number-check) gives you 2 free checks with a free account and no credit card. A gun check searches SafeOrStolen theft reports, public web results, 242,839 police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records. After the free checks it's $0.99 a check or $10 a month."
 },
 {
 question: "Can I check a gun serial number online from my phone?",
 answer: "Yes. Open safeorstolen.com/verify in your phone's browser, type the serial exactly as it's stamped, and you'll have a result in a few seconds. You can also add the free SafeOrStolen web app to your home screen from safeorstolen.com/app. There's no App Store or Google Play app."
 },
 {
 question: "What if my gun's serial number was removed or altered?",
 answer: "A removed, obliterated, or altered serial number is a federal crime under 18 U.S.C. § 922(k). If you encounter a firearm with a defaced serial number, don't buy it and call your local police non-emergency line. SafeOrStolen also flags serials that look altered or obliterated, but a missing serial can't be checked at all."
 },
 {
 question: "Will this tell me the registered owner of a gun?",
 answer: "No. SafeOrStolen never shows owner names or personal details. It tells you whether the serial appears in the theft records it searches. There's no public gun registry to look up an owner; for a private sale, many buyers run the transfer through a licensed dealer (FFL), who does a background check on the buyer."
 },
 {
 question: "Do I still need to contact police if a gun comes back suspicious?",
 answer: "Yes. If the result says reported stolen or possible match, don't buy the gun and call your local police non-emergency line with the serial and make. Police can check NCIC, which SafeOrStolen does not search. Your saved SafeOrStolen check shows what you looked up and when."
 }
 ];

 const schema = [
 {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "Firearm Serial Number Check",
 "url": "https://safeorstolen.com/firearms-serial-number-check",
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen"
 },
 "serviceType": "Stolen Firearm Verification",
 "areaServed": "US",
 "description": "Check a gun serial number for theft reports before buying or selling. Searches SafeOrStolen theft reports, public web results, 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017), and live Ohio law-enforcement records."
 },
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Check If a Gun Is Stolen",
 "description": "A step-by-step guide to verify a firearm's theft status before purchase.",
 "step": [
 {
 "@type": "HowToStep",
 "position": 1,
 "name": "Find the serial number on the firearm",
 "text": "Locate the serial number, typically found on the frame/receiver, barrel, or slide of the firearm. Most modern firearms have the serial number engraved on the frame."
 },
 {
 "@type": "HowToStep",
 "position": 2,
 "name": "Enter the serial number into SafeOrStolen",
 "text": "Go to safeorstolen.com/verify and enter the complete serial number. Make sure to include all letters and numbers exactly as they appear."
 },
 {
 "@type": "HowToStep",
 "position": 3,
 "name": "Review risk signals before you buy or sell",
 "text": "The result says reported stolen, possible match, or no report found in the records searched, and lists every source. If it's anything but no report found, don't go ahead and call local police."
 }
 ]
 },
 {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 }
 ];

 return (
 <>
 <SEOHead
 title="Free Stolen Gun Serial Number Check | SafeOrStolen"
 description="Check if a gun is stolen by serial number. SafeOrStolen searches police theft reports from 33 states and DC, live Ohio records and its own reports in seconds."
 canonical="/firearms-serial-number-check"
 keywords="stolen gun check, firearm serial number lookup, check if gun is stolen, gun serial number database, stolen firearm verification, stolen firearms databases gun check alternative"
 schemaJson={schema}
 />
 <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
 {/* Hero Section */}
 <section className="pt-24 pb-16 px-4">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
 <Shield className="h-5 w-5" />
 <span className="font-semibold">Free Firearm Verification</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
 Free Stolen Gun & Firearm Serial Number Check
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 Enter a gun's serial number and see in a few seconds whether it appears in police theft and loss
 reports from 33 states and Washington, DC, live Ohio law-enforcement records, SafeOrStolen theft
 reports or public web results.
 </p>

 {/* Search Input */}
 <div className="max-w-xl mx-auto space-y-4 mb-8">
 <div className="relative">
 <Input 
 type="text"
 placeholder="Enter firearm serial number..."
 className="text-lg py-6 pr-40"
 value={serialInput}
 onChange={(e) => setSerialInput(e.target.value.toUpperCase())}
 onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
 />
 <Button 
 size="lg" 
 className="absolute right-1 top-1 bottom-1"
 onClick={handleSearch}
 >
 <Search className="mr-2 h-4 w-4" />
 Check Now
 </Button>
 </div>
 <p className="text-sm text-muted-foreground">
 2 free checks with a free account • Results in a few seconds
 </p>
 </div>

 {/* Trust Indicators */}
 <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
 <div className="flex items-center gap-2">
 <CheckCircle className="h-5 w-5 text-primary" />
 <span>Police reports from 33 states + DC</span>
 </div>
 <div className="flex items-center gap-2">
 <Shield className="h-5 w-5 text-primary" />
 <span>Flags altered serials</span>
 </div>
 <div className="flex items-center gap-2">
 <FileText className="h-5 w-5 text-primary" />
 <span>Optional $1.99 certificate</span>
 </div>
 </div>
 </div>
 </section>

 {/* How to Check Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">How to Check If a Gun Is Stolen in 3 Steps</h2>
 
 <div className="space-y-8">
 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 1 – Find the serial number on the firearm</h3>
 <p className="text-muted-foreground">
 The serial number is typically engraved on the frame or receiver of the firearm. For handguns, check the frame near the trigger guard or on the slide. For rifles and shotguns, look on the receiver. Some guns repeat the serial on the barrel or slide. If you're buying, ask the seller for clear photos of the serial number before meeting.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 2 – Enter the serial number into SafeOrStolen</h3>
 <p className="text-muted-foreground">
 Enter the complete serial number exactly as it appears on the firearm. Include all letters, numbers, and hyphens. SafeOrStolen searches its own theft reports, public web results, 242,839 police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records. Results take a few seconds.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 3 – Review risk signals before you buy or sell</h3>
 <p className="text-muted-foreground">
 You'll see one of three results: reported stolen, possible match, or no report found in the records searched, with every source listed. The check is saved to your account with the date, and you can add a $1.99 verification certificate with its own link. If the gun comes back reported stolen or a possible match, don't buy it and call your local police non-emergency line.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Where Data Comes From */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">Where Does Stolen Gun Data Come From?</h2>
 
 <div className="space-y-8">
 <div>
 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
 <FileText className="h-5 w-5 text-primary" />
 SafeOrStolen theft reports and public web results
 </h3>
 <p className="text-muted-foreground">
 Owners report stolen guns on SafeOrStolen, and some post serial numbers online after a theft. Every SafeOrStolen check searches both.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
 <Shield className="h-5 w-5 text-primary" />
 Police firearm theft and loss reports
 </h3>
 <p className="text-muted-foreground">
 Gun checks also search 242,839 police firearm theft and loss reports from 33 states and Washington, DC. These were filed through 2017, and the years covered vary by state. Ohio serials are also checked against live Ohio law-enforcement records.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
 <AlertTriangle className="h-5 w-5 text-destructive" />
 What a serial number check can and cannot show
 </h3>
 <p className="text-muted-foreground">
 Not every theft is reported, and the multi-state police reports stop at 2017. A result of "no report found in the records searched" means exactly that: nothing matched in the sources listed. It doesn't prove the gun was never stolen. SafeOrStolen does not search NCIC or ATF eTrace.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* NCIC explanation */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Can a Civilian Search the National Stolen Gun File?</h2>
 
 <p className="text-lg text-muted-foreground mb-6">
 The FBI's NCIC system holds the stolen-gun file that police use. <strong>It is not open to the public.</strong> Only law enforcement and other authorized agencies can search it.
 </p>
 
 <p className="text-lg text-muted-foreground mb-6">
 When a website promises a "national stolen gun database lookup," it's usually doing one of these instead:
 </p>
 <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
 <li>Searching records it can legally reach, such as owner theft reports and published police reports (this is what SafeOrStolen does, and it lists every source)</li>
 <li>Offering to connect you with an FFL dealer who can run the check</li>
 </ul>
 
 <Card className="border-l-4 border-primary">
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">What SafeOrStolen Can and Cannot Show</h3>
 <p className="text-muted-foreground">
 <strong>It can show:</strong> matches in SafeOrStolen theft reports, public web results, police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records, plus a flag if the serial looks altered or obliterated. <strong>It can't show:</strong> NCIC or ATF eTrace results, or who owns the gun.
 </p>
 <p className="text-muted-foreground mt-2">
 For an NCIC check, ask your local police department.
 </p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Red Flags for Buyers */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
 <AlertTriangle className="h-8 w-8 text-destructive" />
 Buying a Used Gun? Red Flags to Watch For
 </h2>
 
 <div className="grid md:grid-cols-3 gap-6">
 <Card className="border-destructive/30">
 <CardContent className="p-6">
 <h3 className="font-bold mb-3 text-destructive">No bill of sale or unwilling to show ID</h3>
 <p className="text-sm text-muted-foreground">
 Legitimate sellers have no problem providing identification or signing a bill of sale. Refusal is a major red flag that the firearm may be stolen or the seller has something to hide.
 </p>
 </CardContent>
 </Card>
 
 <Card className="border-destructive/30">
 <CardContent className="p-6">
 <h3 className="font-bold mb-3 text-destructive">Price far below market value</h3>
 <p className="text-sm text-muted-foreground">
 If a pistol is priced far below what the same model sells for at local shops, ask why. Thieves often sell stolen firearms quickly at steep discounts. Research market prices before meeting any seller.
 </p>
 </CardContent>
 </Card>
 
 <Card className="border-destructive/30">
 <CardContent className="p-6">
 <h3 className="font-bold mb-3 text-destructive">Serial number scratched, altered, or removed</h3>
 <p className="text-sm text-muted-foreground">
 A defaced serial number is a federal crime. If the serial number appears scratched, ground down, or otherwise altered, do not purchase the firearm and contact the relevant authorities immediately.
 </p>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* For Sellers */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
 <Scale className="h-8 w-8 text-primary" />
 Selling a Gun? Protect Yourself With a Verification Trail
 </h2>
 
 <p className="text-lg text-muted-foreground mb-8">
 If you're selling a gun, a saved check and a bill of sale give you a record of what you sold and when:
 </p>
 
 <div className="space-y-6">
 <div className="flex gap-4 p-4 bg-background rounded-lg">
 <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-semibold mb-1">Run and save a pre-sale check</h3>
 <p className="text-muted-foreground">
 Before selling, run your own serial so you know what a buyer will see. The check is saved to your account with the date, and the optional $1.99 certificate gives you a dated record with its own link to share.
 </p>
 </div>
 </div>
 
 <div className="flex gap-4 p-4 bg-background rounded-lg">
 <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-semibold mb-1">Include serial, date, and buyer details in your records</h3>
 <p className="text-muted-foreground">
 Keep a bill of sale with the serial number, sale date, price and buyer information. Private-sale rules differ by state, and some require the transfer to go through a licensed dealer.
 </p>
 </div>
 </div>
 
 <div className="flex gap-4 p-4 bg-background rounded-lg">
 <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-semibold mb-1">Why this helps if a gun is later traced</h3>
 <p className="text-muted-foreground">
 If police ever trace a gun you sold, your bill of sale and dated check show who you transferred it to and when. That record is far better than trying to remember a parking-lot sale years later.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">FAQ: Firearm Serial Number Checks</h2>
 
 <Accordion type="single" collapsible className="space-y-4">
 {faqs.map((faq, index) => (
 <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg">
 <AccordionTrigger className="text-left font-semibold">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </section>

 {/* Related Links */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
 <div className="grid md:grid-cols-3 gap-4">
 <Link to="/gun-serial-number-lookup" className="p-4 bg-background rounded-lg hover:border-primary/50 border transition-colors">
 <h3 className="font-semibold mb-2">Gun Serial Number Lookup</h3>
 <p className="text-sm text-muted-foreground">Where to find the serial and how to check it</p>
 </Link>
 <Link to="/stolen-gun-database" className="p-4 bg-background rounded-lg hover:border-primary/50 border transition-colors">
 <h3 className="font-semibold mb-2">Stolen Gun Database</h3>
 <p className="text-sm text-muted-foreground">Search reported stolen firearms</p>
 </Link>
 <Link to="/how-to-check-if-gun-is-stolen" className="p-4 bg-background rounded-lg hover:border-primary/50 border transition-colors">
 <h3 className="font-semibold mb-2">How to Check If a Gun Is Stolen</h3>
 <p className="text-sm text-muted-foreground">Step-by-step guide before you buy</p>
 </Link>
 </div>
 </div>
 </section>

 {/* Final CTA */}
 <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Check Any Firearm Serial Number Free</h2>
 <p className="text-lg text-muted-foreground mb-8">
 Check before you buy or sell. 2 free checks, results in a few seconds.
 </p>
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Start Free Firearm Check <ArrowRight className="w-4 h-4" />
 </Button>
 </Link>
 </div>
 </section>
 </div>
 </>
 );
};

export default FirearmsSerialNumberCheckPage;
