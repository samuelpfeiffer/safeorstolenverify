/**
 * Free Stolen Vehicle Check Hub Page
 * SEO-optimized comprehensive landing page for vehicle theft verification
 * URL: /free-stolen-vehicle-check
 */

import { Link } from '@/lib/router-compat';
import { Shield, Search, Car, AlertTriangle, CheckCircle, FileText, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEOHead } from '@/components/seo/SEOHead';
import { useState } from 'react';

const FreeStolenVehicleCheckPage = () => {
 const [vinInput, setVinInput] = useState('');

 const handleSearch = () => {
 if (vinInput.trim()) {
 window.location.href = `/verify?q=${encodeURIComponent(vinInput.trim())}&type=vehicle`;
 }
 };

 const stateLinks = [
 { name: 'California', slug: 'california-vin-lookup', note: 'Highest vehicle theft rate in the US' },
 { name: 'Texas', slug: 'texas-vin-lookup', note: 'Second highest theft volume' },
 { name: 'Florida', slug: 'florida-vin-lookup', note: 'Major port state for exported stolen vehicles' },
 { name: 'Arizona', slug: 'arizona-license-plate-lookup', note: 'Border state with high theft rates' },
 { name: 'Pennsylvania', slug: 'pennsylvania-license-plate-lookup', note: 'Dense urban areas = higher risk' },
 { name: 'Georgia', slug: 'georgia-vin-lookup', note: 'Growing theft problem in Atlanta metro' },
 { name: 'Illinois', slug: 'illinois-vin-lookup', note: 'Chicago is a major theft hub' },
 { name: 'Ohio', slug: 'ohio-vin-lookup', note: 'Central location for stolen vehicle transport' },
 ];

 const faqs = [
 {
 question: "Is there a free way to see if a car is stolen by VIN?",
 answer: "Yes. SafeOrStolen offers 2 free VIN checks. Enter any 17-character VIN to search our verification databases including reported theft history, salvage records, and available public theft reports. Results are returned in about 3 seconds."
 },
 {
 question: "Can I check a stolen vehicle by license plate only?",
 answer: "Yes, but with limitations. License plate lookups can reveal registration status and some theft indicators, but VIN checks are more reliable because plates can be swapped while VINs are permanently attached to the vehicle. For best results, verify both the VIN and license plate."
 },
 {
 question: "Will this tell me the owner's name and address?",
 answer: "No. SafeOrStolen does not provide personal information about vehicle owners. We only show theft risk indicators, salvage status, and reported theft history history. For ownership verification, contact your state DMV or use their official lookup services."
 },
 {
 question: "What should I do if a report suggests the car is stolen?",
 answer: "Do not complete the purchase. Leave the situation safely and contact community theft with the VIN, seller information, and meeting location. Do not confront the seller directly. Keep copies of any communications as evidence."
 },
 {
 question: "Does a clean check mean the car is 100% safe?",
 answer: "No database is 100% complete. A clean result means no theft indicators were found in the databases we search, but it doesn't guarantee the vehicle was never stolen. Some thefts aren't reported, or reports may be delayed. Always verify VIN plates match door stickers, get the title in hand before paying, and consider an independent inspection."
 }
 ];

 const schema = [
 {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "Free Stolen Vehicle Check",
 "url": "https://safeorstolen.com/free-stolen-vehicle-check",
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen"
 },
 "serviceType": "Vehicle Theft Verification",
 "areaServed": "US",
 "description": "Free VIN and license plate check to verify if a vehicle is reported stolen before buying."
 },
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to See If a Car Is Stolen (Free)",
 "description": "Step-by-step guide to verify a vehicle isn't stolen before purchase.",
 "step": [
 {
 "@type": "HowToStep",
 "position": 1,
 "name": "Locate the VIN or license plate",
 "text": "Find the 17-character VIN on the dashboard (driver's side, visible through windshield) or door jamb sticker. Alternatively, note the license plate number."
 },
 {
 "@type": "HowToStep",
 "position": 2,
 "name": "Enter details into SafeOrStolen",
 "text": "Visit safeorstolen.com/verify and enter the VIN or license plate. For best results, enter the complete VIN including all letters and numbers."
 },
 {
 "@type": "HowToStep",
 "position": 3,
 "name": "Understand stolen-status and risk indicators",
 "text": "Review the results for theft flags, salvage history, reported theft history, and other risk indicators. Download your verification certificate as proof of due diligence."
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
 title="Free Stolen Vehicle & VIN Check | SafeOrStolen"
 description="Run a free stolen vehicle check before you buy. Enter a VIN or plate to see theft and risk signals so you avoid buying a stolen or problematic car, truck or motorcycle."
 canonical="/vin-checker"
 keywords="free stolen vehicle check, VIN check stolen car, is my car stolen, free VIN lookup, stolen car reports, check if car is stolen free, public theft reports free check"
 schemaJson={schema}
 />
 <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
 {/* Hero Section */}
 <section className="pt-24 pb-16 px-4">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
 <Car className="h-5 w-5" />
 <span className="font-semibold">Free Vehicle Verification</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
 Free Stolen Vehicle Check by VIN or License Plate
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 Don't buy a stolen car, truck, or motorcycle. Enter a VIN or license plate to search our verification databases 
 including for theft indicators, salvage status, and reported theft history—free.
 </p>

 {/* Search Input */}
 <div className="max-w-xl mx-auto space-y-4 mb-8">
 <div className="relative">
 <Input 
 type="text"
 placeholder="Enter VIN (17 characters) or license plate..."
 className="text-lg py-6 pr-40"
 value={vinInput}
 onChange={(e) => setVinInput(e.target.value.toUpperCase())}
 onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
 />
 <Button 
 size="lg" 
 className="absolute right-1 top-1 bottom-1"
 onClick={handleSearch}
 >
 <Search className="mr-2 h-4 w-4" />
 Free Check
 </Button>
 </div>
 <p className="text-sm text-muted-foreground">
 2 free searches • our stolen item reports + public web results • Results in 3 seconds
 </p>
 </div>

 {/* Trust Indicators */}
 <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
 <div className="flex items-center gap-2">
 <CheckCircle className="h-5 w-5 text-primary" />
 <span>our stolen item reports Database</span>
 </div>
 <div className="flex items-center gap-2">
 <Shield className="h-5 w-5 text-primary" />
 <span>Theft Protection</span>
 </div>
 <div className="flex items-center gap-2">
 <FileText className="h-5 w-5 text-primary" />
 <span>Salvage Check</span>
 </div>
 </div>
 </div>
 </section>

 {/* How to Check Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">How to See If a Car Is Stolen (Free)</h2>
 
 <div className="space-y-8">
 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 1 – Locate the VIN or license plate</h3>
 <p className="text-muted-foreground">
 The 17-character VIN is located on the dashboard (driver's side, visible through the windshield), on the driver's door jamb sticker, and on the vehicle's registration and title documents. For online listings, ask the seller for the full VIN before meeting. The license plate can also be used but provides less comprehensive results than a VIN.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 2 – Enter details into SafeOrStolen</h3>
 <p className="text-muted-foreground">
 Go to our verification tool and enter the complete VIN or license plate. Make sure to include all 17 characters for VINs—even one wrong character can return incorrect results. Our system checks SafeOrStolen's existing reports, public web results, and applies AI analysis to identify potential theft.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 3 – Understand stolen-status and risk indicators</h3>
 <p className="text-muted-foreground">
 Review the verification results. Green indicators mean no theft flags found. Yellow means potential concerns requiring further investigation. Red means theft indicators detected—do not purchase. Download your verification certificate to show sellers you've done your due diligence, or keep it for your records.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* What Check Can Tell You */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">What a Stolen Vehicle Check Can and Can't Tell You</h2>
 
 <div className="grid md:grid-cols-2 gap-8 mb-8">
 <div>
 <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
 <CheckCircle className="h-5 w-5" />
 What We CAN Tell You
 </h3>
 <ul className="space-y-3">
 <li className="flex gap-3 text-muted-foreground">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 Theft indicators from our verification databases
 </li>
 <li className="flex gap-3 text-muted-foreground">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 Salvage, junk, or rebuilt title status
 </li>
 <li className="flex gap-3 text-muted-foreground">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 Insurance theft claims history
 </li>
 <li className="flex gap-3 text-muted-foreground">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 Unrecovered theft risk flags
 </li>
 </ul>
 </div>
 
 <div>
 <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-destructive">
 <AlertTriangle className="h-5 w-5" />
 What We CAN'T Tell You
 </h3>
 <ul className="space-y-3">
 <li className="flex gap-3 text-muted-foreground">
 <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
 Full accident history or damage details
 </li>
 <li className="flex gap-3 text-muted-foreground">
 <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
 Owner names or personal information
 </li>
 <li className="flex gap-3 text-muted-foreground">
 <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
 Mechanical condition or service history
 </li>
 <li className="flex gap-3 text-muted-foreground">
 <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
 Thefts not yet reported to databases
 </li>
 </ul>
 </div>
 </div>

 <Card className="border-l-4 border-primary">
 <CardContent className="p-6">
 <h4 className="font-semibold mb-2">Why you shouldn't rely on VIN alone without inspection</h4>
 <p className="text-muted-foreground">
 A clean VIN check is essential but not sufficient. Thieves can swap VIN plates from legitimate vehicles onto stolen ones ("VIN cloning"). Always verify the VIN matches the door jamb sticker, check that VINs aren't tampered with, get the title in hand, and consider an independent mechanical inspection before purchasing.
 </p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Free and Paid */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">Free Options and Paid Vehicle History Reports</h2>
 
 <div className="space-y-6">
 <div className="p-6 bg-background rounded-lg">
 <h3 className="text-xl font-semibold mb-3">Free Tools (Like SafeOrStolen & public theft checks)</h3>
 <p className="text-muted-foreground">
 Free checks focus on <strong>theft and fraud risk</strong>. SafeOrStolen's service lets you verify if a vehicle is flagged in our reports or public web results. This is the critical first step before buying—if a vehicle shows theft indicators, you shouldn't proceed regardless of other factors.
 </p>
 </div>
 
 <div className="p-6 bg-background rounded-lg">
 <h3 className="text-xl font-semibold mb-3">Paid Reports (Carfax, AutoCheck, etc.)</h3>
 <p className="text-muted-foreground">
 Paid reports provide <strong>comprehensive history</strong>: accident records, service history, odometer readings, number of owners, and more. These are valuable for understanding a vehicle's overall condition, but they're not always current on theft status. Many paid reports don't update theft flags as quickly as dedicated theft databases.
 </p>
 </div>
 
 <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
 <h3 className="text-lg font-semibold mb-2">Our Recommendation</h3>
 <p className="text-muted-foreground">
 <strong>Start with a free stolen vehicle check</strong> to rule out theft and salvage issues. If the vehicle passes, consider a paid history report for detailed condition information. Don't skip the theft check—it's the foundation of safe vehicle buying.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* State Links */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
 <MapPin className="h-8 w-8 text-primary" />
 License Plate Checks by State
 </h2>
 
 <p className="text-lg text-muted-foreground mb-8">
 Vehicle theft rates vary significantly by state. Use our state-specific verification tools for 
 localized results and information about regional theft patterns.
 </p>
 
 <div className="grid md:grid-cols-2 gap-4">
 {stateLinks.map((state) => (
 <Link 
 key={state.slug}
 to={`/${state.slug}`}
 className="flex items-center justify-between p-4 bg-card rounded-lg border hover:border-primary/50 transition-colors group"
 >
 <div>
 <span className="font-semibold group-hover:text-primary transition-colors">{state.name}</span>
 <p className="text-sm text-muted-foreground">{state.note}</p>
 </div>
 <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
 </Link>
 ))}
 </div>
 
 <div className="mt-6 text-center">
 <Link to="/license-plate-lookup" className="text-primary hover:underline">
 View all 50 state license plate lookup pages →
 </Link>
 </div>
 </div>
 </section>

 {/* Scams Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
 <AlertTriangle className="h-8 w-8 text-destructive" />
 Common Scams to Avoid When Buying Used Vehicles
 </h2>
 
 <div className="grid md:grid-cols-3 gap-6">
 <Card className="border-destructive/30">
 <CardContent className="p-6">
 <h3 className="font-bold mb-3 text-destructive">Fake titles and cloned VINs</h3>
 <p className="text-sm text-muted-foreground">
 Thieves copy VINs from legitimate vehicles onto stolen ones. Always verify the VIN matches the door jamb, engine block, and title. Look for signs of tampering on VIN plates.
 </p>
 </CardContent>
 </Card>
 
 <Card className="border-destructive/30">
 <CardContent className="p-6">
 <h3 className="font-bold mb-3 text-destructive">Sellers rushing the deal or demanding cash only</h3>
 <p className="text-sm text-muted-foreground">
 Legitimate sellers give you time to verify. High-pressure tactics ("another buyer is coming today") are red flags. Cash-only demands prevent tracing and suggest something is wrong.
 </p>
 </CardContent>
 </Card>
 
 <Card className="border-destructive/30">
 <CardContent className="p-6">
 <h3 className="font-bold mb-3 text-destructive">Suspicious marketplaces and parking-lot meetups</h3>
 <p className="text-sm text-muted-foreground">
 Meet at the seller's home or a police station. Verify their ID matches the title. Be wary of sellers who won't show you where they live or have vague explanations for why they're selling.
 </p>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">FAQ: Free Stolen Vehicle Checks</h2>
 
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

 {/* Final CTA */}
 <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Check Any Vehicle Free Before You Buy</h2>
 <p className="text-lg text-muted-foreground mb-8">
 2 free VIN or license plate checks. Search our stolen item reports + public web results. Instant results.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Free VIN Check <ArrowRight className="w-4 h-4" />
 </Button>
 </Link>
 <Link to="/vin-checker">
 <Button size="lg" variant="outline" className="gap-2">
 Learn More About VIN Checks
 </Button>
 </Link>
 </div>
 </div>
 </section>
 </div>
 </>
 );
};

export default FreeStolenVehicleCheckPage;
