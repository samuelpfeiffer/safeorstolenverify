/**
 * Firearm Serial Number Check Hub Page
 * SEO-optimized comprehensive landing page for firearm verification
 * URL: /firearms-serial-number-check
 */

import { Link } from 'react-router-dom';
import { Shield, Search, AlertTriangle, CheckCircle, FileText, Scale, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEOHead } from '@/components/seo/SEOHead';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
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
 answer: "Yes, SafeOrStolen offers free firearm serial number checks. While the FBI' We offer 2 free searches to get started."
 },
 {
 question: "Can I check a gun serial number online from my phone?",
 answer: "Absolutely. SafeOrStolen works on any mobile device with a web browser. Simply visit safeorstolen.com/verify, enter the firearm's serial number, and get instant results. Our mobile app also offers barcode scanning for faster entry."
 },
 {
 question: "What if my gun's serial number was removed or altered?",
 answer: "A removed, obliterated, or altered serial number is a federal crime under 18 U.S.C. § 922(k). If you encounter a firearm with a defaced serial number, do not purchase it and contact local law enforcement immediately. This is a major red flag indicating the weapon may be stolen."
 },
 {
 question: "Will this tell me the registered owner of a gun?",
 answer: "No. SafeOrStolen does not provide ownership information, registered owner names, or personal details. We only provide theft risk indicators based on available databases. For ownership verification, contact local law enforcement or a licensed firearms dealer."
 },
 {
 question: "Do I still need to contact police if a gun comes back suspicious?",
 answer: "Yes. If our check returns any theft indicators or risk flags, you should not proceed with the purchase and should contact local law enforcement. SafeOrStolen is a due diligence tool, not a replacement for proper legal verification through official channels."
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
 "description": "Free firearm serial number verification service. Check if a gun is reported stolen before buying or selling."
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
 "text": "Review the verification results for any theft indicators, insurance claims, or risk flags. If any concerns arise, do not proceed with the transaction."
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
 description="Enter a firearm serial number and instantly check if a gun is reported stolen. SafeOrStolen searches multiple theft signals so buyers and sellers avoid legal trouble before a transfer."
 canonical="/firearms-serial-number-check"
 keywords="stolen gun check, firearm serial number lookup, check if gun is stolen, gun serial number database, stolen firearm verification, stolen firearms databases gun check alternative"
 schemaJson={schema}
 />

 <TopNavigation />

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
 Verify any firearm's theft status before buying or selling. Search available theft databases, 
 insurance claims, and public records in seconds. Protect yourself from legal trouble.
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
 2 free searches • Results in 3 seconds • No registration required
 </p>
 </div>

 {/* Trust Indicators */}
 <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
 <div className="flex items-center gap-2">
 <CheckCircle className="h-5 w-5 text-primary" />
 <span>100+ Databases Searched</span>
 </div>
 <div className="flex items-center gap-2">
 <Shield className="h-5 w-5 text-primary" />
 <span>Legal Protection</span>
 </div>
 <div className="flex items-center gap-2">
 <FileText className="h-5 w-5 text-primary" />
 <span>Verification Certificate</span>
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
 The serial number is typically engraved on the frame or receiver of the firearm. For handguns, check the frame near the trigger guard or on the slide. For rifles and shotguns, look on the receiver. The serial number usually contains 6-17 alphanumeric characters. If you're buying, ask the seller for clear photos of the serial number before meeting.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 2 – Enter the serial number into SafeOrStolen</h3>
 <p className="text-muted-foreground">
 Enter the complete serial number exactly as it appears on the firearm. Include all letters, numbers, and hyphens. Our system searches available databases including insurance theft claims, salvage records, and public theft reports. Results are returned within 3 seconds.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 3 – Review risk signals before you buy or sell</h3>
 <p className="text-muted-foreground">
 Review the verification results carefully. If any theft indicators, insurance claims, or risk flags appear, do not proceed with the transaction. You can download a verification certificate as proof of due diligence for your records. If the firearm shows as potentially stolen, contact local law enforcement.
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
 Insurance theft claims and salvage records
 </h3>
 <p className="text-muted-foreground">
 When a firearm is reported stolen to an insurance company, the serial number is logged in insurance claim databases. SafeOrStolen accesses these records to identify firearms that may have been reported as stolen property. Salvage records also help identify firearms that were involved in incidents or claims.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
 <Shield className="h-5 w-5 text-primary" />
 Law-enforcement and public theft reports where available
 </h3>
 <p className="text-muted-foreground">
 Some jurisdictions make theft reports publicly accessible. We aggregate these public records to provide additional theft indicators.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
 <AlertTriangle className="h-5 w-5 text-destructive" />
 Why no tool (including NCIC) can guarantee 100% coverage
 </h3>
 <p className="text-muted-foreground">
 Even the FBI' Not all thefts are reported. Some agencies don't enter data promptly. International databases aren't connected. Private sales often aren't tracked. This is why SafeOrStolen provides "risk indicators" rather than absolute guarantees—we show you what's available in searchable databases, but a clean result doesn't guarantee a firearm was never stolen.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* stolen firearms databases Explanation */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Can Civilians Use stolen firearms databases or "National Stolen Gun Databases"?</h2>
 
 <p className="text-lg text-muted-foreground mb-6">
 The National Crime Information Center (stolen firearms databases) is the FBI's nationwide database used by law enforcement agencies to track stolen property, including firearms. <strong>Stolen firearm reports from all 50 states is not accessible to the general public.</strong> Only authorized law enforcement officers, certain government agencies, and licensed firearms dealers (through stolen firearms databases) can query stolen firearms databases.
 </p>
 
 <p className="text-lg text-muted-foreground mb-6">
 When you see websites claiming "Stolen firearm reports from all 50 states" or "national stolen gun database lookup," they're either:
 </p>
 <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
 <li>Misleading—they don't actually have NCIC access</li>
 <li>Aggregating other available databases (like SafeOrStolen does honestly)</li>
 <li>Offering to connect you with an FFL dealer who can run the check</li>
 </ul>
 
 <Card className="border-l-4 border-primary">
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">What SafeOrStolen Can and Cannot Show</h3>
 <p className="text-muted-foreground">
 <strong>We can show:</strong> Insurance theft claims, public theft reports, salvage records, and risk indicators from available databases.
 </p>
 <p className="text-muted-foreground mt-2">
For official verification, visit your local police department or licensed firearms dealer.
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
 If a $600 pistol is being offered for $200, ask why. Thieves often sell stolen firearms quickly at steep discounts. Research market prices before meeting any seller.
 </p>
 </CardContent>
 </Card>
 
 <Card className="border-destructive/30">
 <CardContent className="p-6">
 <h3 className="font-bold mb-3 text-destructive">Serial number scratched, altered, or removed</h3>
 <p className="text-sm text-muted-foreground">
 A defaced serial number is a federal crime. If the serial number appears scratched, ground down, or otherwise altered, do not purchase the firearm and contact law enforcement immediately.
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
 If you're selling a firearm, running a verification check protects you legally. Here's why:
 </p>
 
 <div className="space-y-6">
 <div className="flex gap-4 p-4 bg-background rounded-lg">
 <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-semibold mb-1">Run and save a pre-sale check</h3>
 <p className="text-muted-foreground">
 Before selling, verify your own firearm isn't falsely flagged in any database. Download the verification certificate as proof the firearm was verified clean at time of sale.
 </p>
 </div>
 </div>
 
 <div className="flex gap-4 p-4 bg-background rounded-lg">
 <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-semibold mb-1">Include serial, date, and buyer details in your records</h3>
 <p className="text-muted-foreground">
 Keep a bill of sale with the serial number, sale date, sale price, and buyer information. Many states recommend or require this documentation for private sales.
 </p>
 </div>
 </div>
 
 <div className="flex gap-4 p-4 bg-background rounded-lg">
 <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-semibold mb-1">Why this helps if a gun is later traced</h3>
 <p className="text-muted-foreground">
 If a firearm you sold is ever used in a crime, your documentation proves you conducted due diligence, sold it legally, and transferred it to a specific person on a specific date. This paper trail can protect you from legal liability.
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
 <p className="text-sm text-muted-foreground">Detailed gun verification with manufacturer info</p>
 </Link>
 <Link to="/stolen-gun-database" className="p-4 bg-background rounded-lg hover:border-primary/50 border transition-colors">
 <h3 className="font-semibold mb-2">Stolen Gun Database</h3>
 <p className="text-sm text-muted-foreground">Search reported stolen firearms</p>
 </Link>
 <Link to="/hotgunz-alternative" className="p-4 bg-background rounded-lg hover:border-primary/50 border transition-colors">
 <h3 className="font-semibold mb-2">Firearm Check Comparison</h3>
 <p className="text-sm text-muted-foreground">Compare firearm verification options</p>
 </Link>
 </div>
 </div>
 </section>

 {/* Final CTA */}
 <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Check Any Firearm Serial Number Free</h2>
 <p className="text-lg text-muted-foreground mb-8">
 Don't risk legal trouble. Verify before you buy or sell. 2 free searches, instant results.
 </p>
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Start Free Firearm Check <ArrowRight className="w-4 h-4" />
 </Button>
 </Link>
 </div>
 </section>
 </div>

 <Footer />
 </>
 );
};

export default FirearmsSerialNumberCheckPage;
