import { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { MessageSquare, Shield, CheckCircle, Clock, Smartphone, AlertTriangle, Zap, ArrowRight, Bell, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';

const faqs = [
 {
 question: "How do I verify an item via SMS text message?",
 answer: "Simply text any IMEI number (15 digits), VIN (17 characters), or serial number to our verification number. Our system automatically detects the identifier type and checks it against SafeOrStolen's reports, public web results, and AI analysis. Guns are also checked against police theft reports from 34 states, bikes against a national stolen-bicycle registry, and paid phone checks search the phone blacklist. You'll receive a reply within seconds with the verification result: CLEAN, STOLEN, or UNKNOWN."
 },
 {
 question: "What types of items can I verify by text?",
 answer: "You can verify any item that has a unique identifier: phones (IMEI), vehicles (VIN), firearms (serial number), laptops, tablets, gaming consoles, bicycles, power tools, cameras, watches, jewelry, and more. Our SMS bot automatically detects whether you've sent an IMEI, VIN, or general serial number and routes it to the correct verification databases."
 },
 {
 question: "Is SMS verification free?",
 answer: "Your first 2 SMS verifications are free with a free account. After that, pay $3.99 per check or subscribe for $14.99/month unlimited. Standard carrier text messaging rates may apply from your phone provider."
 },
 {
 question: "How fast are SMS verification results?",
 answer: "Most SMS verification results are returned within 3-5 seconds. Our system checks multiple sources and compiles results quickly. You'll receive a text back with the verification status almost instantly."
 },
 {
 question: "Can I use SMS verify at a gun show or car lot?",
 answer: "Absolutely — this is exactly what SMS verification was designed for. At gun shows, car lots, flea markets, pawn shops, or any in-person transaction, you can quickly text a serial number, VIN, or IMEI to verify the item before handing over cash. No app download needed, no Wi-Fi required — just send a text."
 },
 {
 question: "What does the SMS verification result look like?",
 answer: "You'll receive a clear text message with one of three statuses: ✅ CLEAN (no stolen reports found across multiple sources), 🚨 STOLEN (item has been reported stolen — do not purchase), or ⚠️ UNKNOWN (not enough data to confirm — exercise caution). Each result includes the identifier you checked and a link to get the full detailed report on SafeOrStolen.com."
 },
 {
 question: "Is SMS verification secure and private?",
 answer: "Yes. We don't store your phone number or link it to any account. Verification queries are processed in real-time and search results are not permanently associated with your phone number. We use the same encrypted verification infrastructure as our web and mobile app."
 },
 {
 question: "What's the difference between SMS verify and the SafeOrStolen app?",
 answer: "SMS verification requires zero downloads — just send a text. It's perfect for quick checks when you don't have the app installed. The SafeOrStolen mobile app offers additional features: barcode/QR scanning, detailed verification reports, search history, saved items watchlist, and a verification badge you can share with buyers. Both use the same verification engine."
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

const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "SafeOrStolen SMS Verification",
 "url": "https://safeorstolen.com/sms-verify",
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com"
 },
 "serviceType": "SMS Stolen Item Verification",
 "areaServed": { "@type": "Country", "name": "United States" },
 "description": "Text any IMEI, VIN, or serial number to instantly verify if an item is stolen. No app needed. Results in 3 seconds from multiple sources.",
 "dateModified": "2026-03-08"
};

const howToSchema = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Verify an Item via SMS Text Message",
 "dateModified": "2026-03-08",
 "step": [
 { "@type": "HowToStep", "position": 1, "name": "Find the identifier", "text": "Locate the IMEI (15 digits), VIN (17 characters), or serial number on the item you want to verify." },
 { "@type": "HowToStep", "position": 2, "name": "Send a text message", "text": "Text the IMEI, VIN, or serial number to the SafeOrStolen verification number." },
 { "@type": "HowToStep", "position": 3, "name": "Receive instant results", "text": "Get a reply within 3-5 seconds showing CLEAN, STOLEN, or UNKNOWN status based on checks." },
 { "@type": "HowToStep", "position": 4, "name": "Make an informed decision", "text": "If CLEAN, proceed with confidence. If STOLEN, walk away and report. If UNKNOWN, exercise caution and get a full report." }
 ]
};

const breadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
 { "@type": "ListItem", "position": 2, "name": "SMS Verify", "item": "https://safeorstolen.com/sms-verify" }
 ]
};

const SMSVerifyPage = () => {
 const [email, setEmail] = useState('');
 const [submitted, setSubmitted] = useState(false);

 const handleWaitlist = (e: React.FormEvent) => {
 e.preventDefault();
 if (email) setSubmitted(true);
 };

 return (
 <>
 <PageSEO
 title="SMS Verify — Coming Soon — Text to Check if Stolen | SafeOrStolen"
 description="Coming soon: text an IMEI, VIN, or serial to verify an item by SMS. No app needed. Meanwhile use our AI-powered web checker and barcode scanner."
 keywords="sms verify stolen, text imei check, sms vin check, text serial number lookup, verify item text message, stolen item sms, gun show verification sms"
 canonical="/sms-verify"
 structuredData={[faqSchema, serviceSchema, howToSchema, breadcrumbSchema]}
 aiPurpose="SMS text message verification service for checking stolen items without downloading an app"
 />

 <noscript>
 <header><h1>SMS Verify — Text Any IMEI, VIN, or Serial Number to Check if Stolen</h1></header>
 <div>
 <article>
 <p>SafeOrStolen SMS Verify lets you text any IMEI number, VIN, or serial number to instantly check if an item is stolen. No app download required — just send a text message. Results arrive in 3-5 seconds from SafeOrStolen's reports, public web results, AI analysis, police gun theft records from 34 states for guns, and a national stolen-bicycle registry for bikes.</p>
 <h2>How SMS Verification Works</h2>
 <p>Find the IMEI (15 digits), VIN (17 characters), or serial number on the item. Text it to our verification number. Receive instant results: CLEAN, STOLEN, or UNKNOWN. Perfect for gun shows, car lots, flea markets, pawn shops, and private sales where you need a quick answer before handing over cash.</p>
 <h2>What Can You Verify by Text?</h2>
 <p>Phones (IMEI), vehicles (VIN), firearms (serial number), laptops, tablets, gaming consoles, bicycles, power tools, cameras, watches, jewelry, and any item with a unique serial number. Our system auto-detects the identifier type and routes to the correct databases.</p>
 <h2>Why Use SMS Instead of an App?</h2>
 <p>No download required. No Wi-Fi needed. Works on any phone — even basic flip phones. Send a text and get verified. When you're at a gun show or meeting a seller in a parking lot, SMS is the fastest way to verify an item is safe to buy.</p>
 </article>
 </div>
 </noscript>
 <div className="min-h-screen bg-background pt-16">
 {/* Hero */}
 <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full mb-6">
 <Bell className="h-5 w-5" />
 <span className="font-semibold">Coming Soon — Join the Waitlist</span>
 </div>

 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
 Text to Verify — Stolen Item Check via SMS
 </h1>

 <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
 Soon you'll be able to text any IMEI, VIN, or serial number to instantly check multiple sources. 
 No app download. No Wi-Fi. Works on any phone.
 </p>

 <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
 We're setting up our SMS verification number now. Join the waitlist to be the first to know when it launches.
 </p>

 {/* How it will work preview */}
 <div className="max-w-md mx-auto mb-8">
 <Card className="border-2 border-muted">
 <CardContent className="p-6">
 <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wide">How it will work:</p>
 <div className="space-y-3 text-left font-mono text-sm">
 <div className="bg-muted rounded-lg p-3">
 <p className="text-muted-foreground text-xs mb-1">You'll text:</p>
 <p className="font-bold text-foreground">353456789012345</p>
 </div>
 <div className="bg-primary/10 rounded-lg p-3">
 <p className="text-muted-foreground text-xs mb-1">SafeOrStolen will reply:</p>
 <p className="text-foreground">✅ <strong>CLEAN</strong> — No stolen reports found.</p>
 <p className="text-xs text-muted-foreground mt-1">Checked: SafeOrStolen reports, public web, police gun theft records (34 states), stolen-bike registry</p>
 </div>
 </div>
 </CardContent>
 </Card>
 </div>

 {/* Waitlist signup */}
 <div className="max-w-md mx-auto mb-10">
 {submitted ? (
 <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
 <CardContent className="p-6 text-center">
 <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
 <p className="font-bold text-foreground">You're on the list!</p>
 <p className="text-sm text-muted-foreground">We'll notify you as soon as SMS verification launches.</p>
 </CardContent>
 </Card>
 ) : (
 <form onSubmit={handleWaitlist} className="flex gap-2">
 <Input
 type="email"
 placeholder="Enter your email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 className="flex-1"
 />
 <Button type="submit" size="lg">
 <Mail className="mr-2 h-4 w-4" />
 Notify Me
 </Button>
 </form>
 )}
 </div>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
 <Button asChild size="lg" className="text-lg h-14 px-8">
 <Link to="/verify">
 <Zap className="mr-2 h-5 w-5" />
 Verify Now on Web — Free
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8">
 <Link to="/barcode-scanner">
 <Smartphone className="mr-2 h-5 w-5" />
 Use Barcode Scanner Instead
 </Link>
 </Button>
 </div>

 <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
 <div className="flex items-center gap-2">
 <CheckCircle className="h-5 w-5 text-green-500" />
 <span>multiple sources</span>
 </div>
 <div className="flex items-center gap-2">
 <Clock className="h-5 w-5 text-yellow-500" />
 <span>3-Second Results</span>
 </div>
 <div className="flex items-center gap-2">
 <Shield className="h-5 w-5 text-primary" />
 <span>Launching Soon</span>
 </div>
 </div>
 </div>
 </div>
 </section>

 <SitewideCredibilityBar />

 {/* How It Works */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How SMS Verification Works</h2>
 <div className="grid md:grid-cols-4 gap-6">
 {[
 { icon: <MessageSquare className="h-10 w-10" />, title: "1. Find the ID", desc: "Locate the IMEI (15 digits), VIN (17 chars), or serial number on the item" },
 { icon: <Smartphone className="h-10 w-10" />, title: "2. Send a Text", desc: "Text the number to SafeOrStolen — works from any phone, no data needed" },
 { icon: <Zap className="h-10 w-10" />, title: "3. Instant Check", desc: "We analyze SafeOrStolen's reports, public web results, AI analysis, police gun theft records from 34 states, and a national stolen-bicycle registry" },
 { icon: <CheckCircle className="h-10 w-10" />, title: "4. Get Results", desc: "Receive CLEAN ✅, STOLEN 🚨, or UNKNOWN ⚠️ within 3-5 seconds" }
 ].map((step, i) => (
 <Card key={i} className="text-center">
 <CardContent className="p-6">
 <div className="text-primary mx-auto mb-4">{step.icon}</div>
 <h3 className="font-bold mb-2 text-foreground">{step.title}</h3>
 <p className="text-sm text-muted-foreground">{step.desc}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Use Cases */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Perfect for In-Person Transactions</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 When you're meeting a seller face-to-face, SMS verification gives you answers without needing an app or internet connection.
 </p>

 <div className="grid md:grid-cols-3 gap-6">
 {[
 { title: "🔫 Gun Shows", desc: "Text any firearm serial number to check stolen firearms databases and analyze the serial for signs of alteration. Handguns, rifles, shotguns — any caliber, any manufacturer.", link: "/gun-serial-number-lookup" },
 { title: "🚗 Car Lots & Private Sales", desc: "Text the VIN from any vehicle to check for stolen reports via SafeOrStolen and public web searches. Catch potentially stolen vehicles in seconds.", link: "/vin-checker" },
 { title: "📱 Phone Meetups", desc: "Text the IMEI to check SafeOrStolen's reports, public web results, and AI analysis for stolen indications, and to identify phone model details. Verify any iPhone, Samsung, Google Pixel before paying.", link: "/imei-checker" },
 { title: "🏪 Flea Markets & Swap Meets", desc: "Verify electronics, tools, bikes — anything with a serial number. Text it and know within seconds if it's been reported stolen anywhere in the US.", link: "/check-electronics" },
 { title: "🏚️ Pawn Shops", desc: "Pawn shop owners can text serial numbers to verify items before accepting them. Comply with state laws requiring stolen property checks.", link: "/for-pawn-shops" },
 { title: "💻 Craigslist & Facebook Meetups", desc: "Meeting a seller from an online listing? Text the serial number while inspecting the item. Get peace of mind before handing over cash.", link: "/facebook-marketplace-safety" }
 ].map((useCase, i) => (
 <Card key={i} className="hover:shadow-lg transition-shadow">
 <CardContent className="p-6">
 <h3 className="font-bold text-lg mb-2 text-foreground">{useCase.title}</h3>
 <p className="text-sm text-muted-foreground mb-3">{useCase.desc}</p>
 <Link to={useCase.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
 Learn more <ArrowRight className="h-3 w-3" />
 </Link>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* What You Can Verify */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What You Can Verify via Text</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { label: "Phones (IMEI)", link: "/imei-checker" },
 { label: "Vehicles (VIN)", link: "/vin-checker" },
 { label: "Firearms", link: "/firearms-check" },
 { label: "Laptops", link: "/check-laptop" },
 { label: "Bicycles", link: "/check-bike" },
 { label: "Tablets", link: "/check-tablet-stolen" },
 { label: "Gaming Consoles", link: "/check-gaming-console-stolen" },
 { label: "Power Tools", link: "/how-to-check-if-tools-stolen" },
 { label: "Cameras", link: "/check-camera-stolen" },
 { label: "Watches", link: "/check-watch-stolen" },
 { label: "Jewelry", link: "/check-jewelry" },
 { label: "License Plates", link: "/license-plate-lookup" }
 ].map((item, i) => (
 <Link key={i} to={item.link} className="bg-background border rounded-lg p-4 text-center hover:border-primary transition-colors">
 <span className="font-medium text-foreground">{item.label}</span>
 </Link>
 ))}
 </div>
 </div>
 </div>
 </section>

 <DataPartnerBadges />

 {/* SMS vs App vs Web comparison */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-foreground">SMS vs App vs Web — Choose Your Method</h2>
 <div className="grid md:grid-cols-3 gap-6">
 <Card className="border-2 border-primary">
 <CardContent className="p-6">
 <div className="text-center mb-4">
 <MessageSquare className="h-10 w-10 text-primary mx-auto" />
 <h3 className="font-bold text-lg mt-2 text-foreground">SMS Text</h3>
 <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Best for In-Person</span>
 </div>
 <ul className="space-y-2 text-sm text-muted-foreground">
 <li>✅ No app download needed</li>
 <li>✅ No Wi-Fi/data required</li>
 <li>✅ Works on any phone</li>
 <li>✅ 3-second results</li>
 <li>❌ No barcode scanning</li>
 <li>❌ Basic results only</li>
 </ul>
 </CardContent>
 </Card>

 <Card>
 <CardContent className="p-6">
 <div className="text-center mb-4">
 <Smartphone className="h-10 w-10 text-primary mx-auto" />
 <h3 className="font-bold text-lg mt-2 text-foreground">Mobile App</h3>
 <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Full Features</span>
 </div>
 <ul className="space-y-2 text-sm text-muted-foreground">
 <li>✅ Barcode/QR scanning</li>
 <li>✅ Detailed reports</li>
 <li>✅ Search history</li>
 <li>✅ Seller badges</li>
 <li>❌ Requires download</li>
 <li>❌ Needs smartphone</li>
 </ul>
 </CardContent>
 </Card>

 <Card>
 <CardContent className="p-6">
 <div className="text-center mb-4">
 <Shield className="h-10 w-10 text-primary mx-auto" />
 <h3 className="font-bold text-lg mt-2 text-foreground">Web Browser</h3>
 <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Most Detailed</span>
 </div>
 <ul className="space-y-2 text-sm text-muted-foreground">
 <li>✅ Full detailed reports</li>
 <li>✅ Certificate generation</li>
 <li>✅ AI scam analysis</li>
 <li>✅ Seller badge embed</li>
 <li>❌ Needs internet</li>
 <li>❌ Not instant at meetups</li>
 </ul>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* FAQs */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
 Frequently Asked Questions
 </h2>
 <Accordion type="single" collapsible className="w-full">
 {faqs.map((faq, index) => (
 <AccordionItem key={index} value={`faq-${index}`}>
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
 </div>
 </section>

 {/* Final CTA */}
 <section className="py-16 bg-primary text-primary-foreground">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-4">
 Verify Before You Buy — Text or Click
 </h2>
 <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
 Whether you text, scan, or type — SafeOrStolen checks multiple sources in 3 seconds. 
 Start with 2 free verifications today.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-10">
 <Link to="/verify">
 Verify Now — FREE
 </Link>
 </Button>
 <Button asChild size="lg" variant="outline" className="text-lg h-14 px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
 <Link to="/pricing">
 See Pricing
 </Link>
 </Button>
 </div>
 </div>
 </section>
 </div>
 </>
 );
};

export default SMSVerifyPage;
