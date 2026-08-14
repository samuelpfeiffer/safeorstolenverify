/**
 * Serial Number Stolen Check Hub Page
 * SEO-optimized comprehensive landing page for serial number verification
 * URL: /serial-number-stolen-check
 */

import { Link } from 'react-router-dom';
import { Shield, Search, AlertTriangle, CheckCircle, FileText, Smartphone, Laptop, Wrench, Bike, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEOHead } from '@/components/seo/SEOHead';
import { useState } from 'react';

const SerialNumberStolenCheckPage = () => {
 const [serialInput, setSerialInput] = useState('');

 const handleSearch = () => {
 if (serialInput.trim()) {
 window.location.href = `/verify?q=${encodeURIComponent(serialInput.trim())}`;
 }
 };

 const itemTypes = [
 {
 icon: Wrench,
 title: "Power tools and construction equipment",
 description: "DeWalt, Milwaukee, Makita, and other power tools are commonly stolen from job sites. Serial numbers are typically on the motor housing or battery compartment.",
 link: "/serial-number-checker"
 },
 {
 icon: Laptop,
 title: "Laptops, game consoles, and consumer electronics",
 description: "MacBooks, gaming PCs, PlayStation, Xbox, Nintendo Switch—all have serial numbers. Check bottom labels, system settings, or original packaging.",
 link: "/check-laptop"
 },
 {
 icon: Bike,
 title: "Bicycles and e-bikes",
 description: "Bike serial numbers are usually stamped on the bottom bracket (under the pedals). E-bikes often have additional serial numbers on the motor and battery.",
 link: "/check-bike"
 },
 {
 icon: Shield,
 title: "Firearms",
 description: "Gun serial numbers are legally required on all manufactured firearms. Find them on the frame/receiver. See our dedicated firearm verification page.",
 link: "/firearms-serial-number-check"
 }
 ];

 const faqs = [
 {
 question: "Can I check if something is stolen with just a serial number?",
 answer: "Yes. SafeOrStolen searches 100+ databases for theft indicators associated with serial numbers. We check insurance theft claims, salvage records, and available public theft reports. Enter any serial number to see if there are theft flags associated with it. Note that not all stolen items are reported, so a clean result means no records found—not a guarantee the item was never stolen."
 },
 {
 question: "What if I only have a partial serial?",
 answer: "Partial serial numbers can still return results, but accuracy decreases. Try to get the complete serial—ask the seller for clear photos of the serial number plate before meeting. If you can only read part of the serial due to wear, enter what you can see. Some results may be returned, but we recommend verifying items with complete serials whenever possible."
 },
 {
 question: "Can I find the owner of an item from the serial number?",
 answer: "No. SafeOrStolen does not provide owner information, personal data, or contact details. We only show theft risk indicators. If you believe you've found your own stolen property, contact local law enforcement with the serial number and your proof of ownership (receipts, registration, photos)."
 },
 {
 question: "What should I do if my own stolen item appears in a check?",
 answer: "If you're checking a serial and it shows as reported stolen, and that stolen item is actually yours: 1) Don't confront the current holder, 2) Document the location and any seller information, 3) Contact local police with your proof of ownership (receipts, original packaging with serial), 4) Provide police with the seller's information so they can investigate."
 },
 {
 question: "Is there a national stolen property database?",
 answer: "SafeOrStolen aggregates multiple available databases—insurance claims, salvage records, and public theft reports—to provide the most comprehensive theft check available to consumers and businesses."
 }
 ];

 const schema = [
 {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "Serial Number Stolen Check",
 "url": "https://safeorstolen.com/serial-number-stolen-check",
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen"
 },
 "serviceType": "Stolen Property Verification",
 "areaServed": "US",
 "description": "Check any item's serial number for theft risk. Verify phones, laptops, tools, bikes, firearms and more before buying used."
 },
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Run a Stolen-Item Serial Check",
 "description": "Step-by-step guide to verify any item isn't stolen using its serial number.",
 "step": [
 {
 "@type": "HowToStep",
 "position": 1,
 "name": "Ask the seller for clear photos of serials",
 "text": "Before meeting in person, request photos of the item's serial number. Legitimate sellers should have no problem providing this. Look for signs of tampering or scratching."
 },
 {
 "@type": "HowToStep",
 "position": 2,
 "name": "Enter the serial into SafeOrStolen",
 "text": "Go to safeorstolen.com/verify and enter the complete serial number. Include all letters, numbers, and special characters exactly as they appear."
 },
 {
 "@type": "HowToStep",
 "position": 3,
 "name": "Save or share results as proof",
 "text": "Download your verification certificate as proof of due diligence. Share with sellers to demonstrate you're a serious buyer, or keep for your records in case issues arise later."
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
 title="Check If an Item Is Stolen by Serial Number | SafeOrStolen"
 description="Use SafeOrStolen to check any item's serial number for theft risk. Protect yourself when buying used phones, tools, bikes, laptops, firearms and more in seconds."
 canonical="/serial-number-stolen-check"
 keywords="serial number stolen check, check if item is stolen, stolen property lookup, serial number database, is my item stolen, stolen goods check, serial number verification"
 schemaJson={schema}
 />
 <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
 {/* Hero Section */}
 <section className="pt-24 pb-16 px-4">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
 <Search className="h-5 w-5" />
 <span className="font-semibold">Universal Serial Number Check</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
 Check If an Item Is Stolen by Serial Number
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 Buying used? Check any serial number for theft risk before you pay. 
 Search 100+ databases for phones, laptops, tools, bikes, firearms, electronics, and more.
 </p>

 {/* Search Input */}
 <div className="max-w-xl mx-auto space-y-4 mb-8">
 <div className="relative">
 <Input 
 type="text"
 placeholder="Enter any serial number, IMEI, or VIN..."
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
 2 free searches • Works for any item type • Results in 3 seconds
 </p>
 </div>

 {/* Item Type Icons */}
 <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
 <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg">
 <Smartphone className="h-4 w-4 text-primary" />
 <span>Phones</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg">
 <Laptop className="h-4 w-4 text-primary" />
 <span>Laptops</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg">
 <Wrench className="h-4 w-4 text-primary" />
 <span>Tools</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg">
 <Bike className="h-4 w-4 text-primary" />
 <span>Bikes</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg">
 <Shield className="h-4 w-4 text-primary" />
 <span>Firearms</span>
 </div>
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">How Serial Number Stolen Checks Work</h2>
 
 <div className="space-y-8 mb-12">
 <div>
 <h3 className="text-xl font-semibold mb-3">What is a serial number and where to find it</h3>
 <p className="text-muted-foreground">
 A serial number is a unique identifier assigned to an individual item by the manufacturer. It's like a fingerprint for products. Serial numbers are typically found on:
 </p>
 <ul className="mt-3 space-y-2 text-muted-foreground">
 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> <strong>Phones:</strong> In Settings → About Phone, or dial *#06# for IMEI</li>
 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> <strong>Laptops:</strong> Bottom sticker, or in System Information</li>
 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> <strong>Power tools:</strong> Motor housing or battery compartment label</li>
 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> <strong>Bikes:</strong> Bottom bracket (under pedal area), head tube, or seat post</li>
 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> <strong>Electronics:</strong> Back panel, original box, or settings menu</li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-semibold mb-3">Types of items you can check</h3>
 <p className="text-muted-foreground">
 SafeOrStolen supports serial number checks for virtually any serialized product: smartphones (IMEI), vehicles (VIN), laptops, tablets, power tools, construction equipment, bicycles, e-bikes, motorcycles, firearms, cameras, musical instruments, watches, game consoles, and more. If it has a serial number, we can search for theft indicators.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-semibold mb-3">How SafeOrStolen combines multiple risk signals</h3>
 <p className="text-muted-foreground">
 We don't rely on a single database. Our verification engine searches 100+ sources including insurance theft claim databases, salvage records, public theft reports, carrier and theft databases (for phones), and industry-specific registries. Results are aggregated into a clear risk assessment: Safe (no flags), Caution (some concerns), or Alert (theft indicators detected).
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Step by Step */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step: Run a Stolen-Item Serial Check</h2>
 
 <div className="space-y-8">
 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 1 – Ask the seller for clear photos of serials</h3>
 <p className="text-muted-foreground">
 Before meeting in person, request photos of the serial number. Legitimate sellers have no reason to refuse. Look for signs of tampering—scratches, re-engraving, or stickers covering the serial are red flags. For phones, ask for a screenshot of Settings → About Phone showing the IMEI.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 2 – Enter the serial into SafeOrStolen</h3>
 <p className="text-muted-foreground">
 Go to our verification tool and enter the complete serial number exactly as it appears. Include all letters, numbers, hyphens, and spaces. Our system automatically detects the item type based on serial format and routes to the appropriate databases.
 </p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Step 3 – Save or share results as proof</h3>
 <p className="text-muted-foreground">
 Download your verification certificate. This serves as proof of due diligence—documentation that you checked before buying. Share with sellers to show you're serious, or keep for your records. If issues arise later, this certificate shows you acted in good faith.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Use Cases by Item Type */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">Use Cases by Item Type</h2>
 
 <div className="grid md:grid-cols-2 gap-6">
 {itemTypes.map((item, index) => (
 <Link key={index} to={item.link} className="block group">
 <Card className="h-full hover:border-primary/50 transition-colors">
 <CardContent className="p-6">
 <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
 <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
 <p className="text-sm text-muted-foreground">{item.description}</p>
 </CardContent>
 </Card>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Marketplaces and Pawn Shops */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">Buying Used Items From Marketplaces and Pawn Shops</h2>
 
 <div className="space-y-6">
 <div className="p-6 bg-card rounded-lg">
 <h3 className="text-xl font-semibold mb-3">How to handle partial serials</h3>
 <p className="text-muted-foreground">
 Sometimes serial numbers are worn, partially covered, or hard to read. Enter what you can see—partial matches may still return useful results. However, treat partial serial items with extra caution. Ask yourself: why is the serial hard to read? Natural wear is different from intentional damage.
 </p>
 </div>
 
 <div className="p-6 bg-card rounded-lg">
 <h3 className="text-xl font-semibold mb-3">What to do if the seller refuses to share a serial number</h3>
 <p className="text-muted-foreground">
 Walk away. Legitimate sellers have no reason to hide serial numbers. A refusal to share the serial—especially for high-value items—is a major red flag. This applies to Facebook Marketplace, Craigslist, OfferUp, pawn shops, and anywhere else you buy used goods.
 </p>
 </div>
 
 <div className="p-6 bg-destructive/5 rounded-lg border-l-4 border-destructive">
 <h3 className="text-lg font-semibold mb-2 text-destructive">When you should walk away from a deal</h3>
 <ul className="space-y-2 text-muted-foreground">
 <li>• Seller refuses to provide serial number</li>
 <li>• Serial number appears tampered with or scratched off</li>
 <li>• Price is significantly below market value</li>
 <li>• Seller wants to meet in unusual locations</li>
 <li>• Seller can't explain where they got the item</li>
 <li>• Your SafeOrStolen check returns any theft indicators</li>
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">FAQ: Serial Number Stolen Checks</h2>
 
 <Accordion type="single" collapsible className="space-y-4">
 {faqs.map((faq, index) => (
 <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg">
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

 {/* Related Tools */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
 <div className="grid md:grid-cols-4 gap-4">
 <Link to="/imei-checker" className="p-4 bg-card rounded-lg hover:border-primary/50 border transition-colors text-center">
 <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
 <h3 className="font-semibold mb-1">IMEI Checker</h3>
 <p className="text-xs text-muted-foreground">Phone verification</p>
 </Link>
 <Link to="/vin-checker" className="p-4 bg-card rounded-lg hover:border-primary/50 border transition-colors text-center">
 <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
 <h3 className="font-semibold mb-1">VIN Checker</h3>
 <p className="text-xs text-muted-foreground">Vehicle verification</p>
 </Link>
 <Link to="/check-laptop" className="p-4 bg-card rounded-lg hover:border-primary/50 border transition-colors text-center">
 <Laptop className="h-8 w-8 text-primary mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Laptop Check</h3>
 <p className="text-xs text-muted-foreground">Computer verification</p>
 </Link>
 <Link to="/check-bike" className="p-4 bg-card rounded-lg hover:border-primary/50 border transition-colors text-center">
 <Bike className="h-8 w-8 text-primary mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Bike Check</h3>
 <p className="text-xs text-muted-foreground">Bicycle verification</p>
 </Link>
 </div>
 </div>
 </section>

 {/* Final CTA */}
 <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Check Any Serial Number Free</h2>
 <p className="text-lg text-muted-foreground mb-8">
 Phones, laptops, tools, bikes, firearms, and more. 2 free searches. Results in seconds.
 </p>
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Start Free Serial Check <ArrowRight className="w-4 h-4" />
 </Button>
 </Link>
 </div>
 </section>
 </div>
 </>
 );
};

export default SerialNumberStolenCheckPage;
