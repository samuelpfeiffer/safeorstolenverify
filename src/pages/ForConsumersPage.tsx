import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, ShoppingCart, AlertTriangle, Phone, Car, Laptop, Bike, DollarSign, Scale, ArrowRight } from 'lucide-react';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";

const ForConsumersPage = () => {
 const useCases = [
 { icon: Phone, title: "Buying Used Phones", description: "Verify IMEI before buying from Facebook Marketplace, OfferUp, Craigslist, or local sellers", link: "/check-phone" },
 { icon: Car, title: "Buying Used Cars", description: "Check VIN against stolen vehicle databases before purchasing any vehicle", link: "/check-car" },
 { icon: Laptop, title: "Buying Electronics", description: "Verify laptops, gaming consoles, cameras aren't stolen before buying", link: "/check-electronics" },
 { icon: Bike, title: "Buying Bikes & E-Bikes", description: "Check serial numbers against bicycle theft registries", link: "/check-bike" }
 ];

 const risks = [
 "The item gets confiscated by police — you lose it and your money",
 "You could face criminal charges for possession of stolen property",
 "The original owner can remotely lock phones and laptops",
 "Carriers will blacklist stolen phones making them unusable",
 "You have zero legal recourse to get your money back",
 "Insurance won't cover stolen property claims"
 ];

 const consumerFaqs = [
 {
 question: "How do I protect myself when buying used items?",
 answer: "Always verify the IMEI, VIN, or serial number before purchasing. Use SafeOrStolen's free verification tool to check against 100+ stolen item databases. Meet in public places, never pay in cash before verification, and trust your instincts if something feels wrong."
 },
 {
 question: "What happens if I accidentally buy a stolen item?",
 answer: "If you unknowingly purchase stolen property, law enforcement can confiscate it and return it to the rightful owner. You lose both the item and your money with no legal recourse. In some cases, you could face criminal charges for receiving stolen property under state and federal law."
 },
 {
 question: "How much does SafeOrStolen cost for consumers?",
 answer: "SafeOrStolen offers 2 free verification checks with a free account. After that, $0.99 per check or $10/month unlimited. No hidden costs. Cancel anytime."
 },
 {
 question: "What items can I verify with SafeOrStolen?",
 answer: "SafeOrStolen verifies phones (IMEI), vehicles (VIN), electronics (serial number), bicycles (frame serial), firearms (serial number), and license plates. The platform checks 100+ databases including carrier and theft databases, vehicle theft and title databases, carrier and theft databases, and stolen property reports from all 50 states."
 },
 {
 question: "Is there a SafeOrStolen mobile app?",
 answer: "Yes. Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. The PWA app includes barcode scanning for instant on-the-spot verification when meeting sellers. Download at safeorstolen.com/app."
 }
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": consumerFaqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
 }))
 };

 const breadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
 { "@type": "ListItem", "position": 2, "name": "For Consumers", "item": "https://safeorstolen.com/for-consumers" }
 ]
 };

 return (
 <>
 <PageSEO
 title="For Consumers - Protect Yourself When Buying Used Items | SafeOrStolen"
 description="Free verification for secondhand buyers. Check if phones, cars, electronics, and bikes are stolen before buying on Facebook Marketplace, OfferUp, Craigslist. 2 free checks, then $0.99/check or $10/month unlimited."
 keywords="buying used items safely, avoid stolen goods, secondhand buyer protection, verify before buying, stolen item checker for consumers, IMEI check free"
 canonical="/for-consumers"
 structuredData={[faqSchema, breadcrumbSchema]}
 />

 {/* Comprehensive noscript for crawlers */}
 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
 <header>
 <nav><a href="/">SafeOrStolen</a> &gt; For Consumers</nav>
 </header>
 <div>
 <h1>Buy Secondhand with Confidence</h1>
 <p>Protect yourself when buying used phones, cars, electronics, and more. Free verification against 100+ stolen item databases before you hand over cash. SafeOrStolen checks carrier and theft databases, vehicle theft and title databases, carrier and theft databases, and stolen property reports from all 50 states in 3 seconds.</p>
 
 <h2>What Can You Verify?</h2>
 <ul>
 <li><a href="/check-phone">Used Phones</a> — Verify IMEI before buying from Facebook Marketplace, OfferUp, Craigslist</li>
 <li><a href="/check-car">Used Cars</a> — Check VIN against stolen vehicle databases</li>
 <li><a href="/check-electronics">Electronics</a> — Verify laptops, gaming consoles, cameras</li>
 <li><a href="/check-bike">Bikes & E-Bikes</a> — Check serial numbers against theft registries</li>
 </ul>
 
 <h2>Risks of Buying Stolen Items</h2>
 <ul>
 {risks.map((risk, i) => <li key={i}>{risk}</li>)}
 </ul>
 
 <h2>How SafeOrStolen Protects You</h2>
 <ol>
 <li>Get the identifier — Ask the seller for IMEI (phones), VIN (vehicles), or serial number (electronics)</li>
 <li>Run the verification — Enter the number in SafeOrStolen. We check 100+ databases.</li>
 <li>Make an informed decision — If CLEAN, proceed. If flagged, walk away.</li>
 </ol>
 
 <h2>Frequently Asked Questions</h2>
 {consumerFaqs.map((faq, i) => (
 <div key={i}>
 <h3>{faq.question}</h3>
 <p>{faq.answer}</p>
 </div>
 ))}
 
 <h2>Related Resources</h2>
 <ul>
 <li><a href="/verify">Verify Any Item Free</a></li>
 <li><a href="/imei-checker">IMEI Checker</a></li>
 <li><a href="/vin-checker">VIN Checker</a></li>
 <li><a href="/app">Download Mobile App</a></li>
 <li><a href="/pricing">Pricing - $10/mo Unlimited</a></li>
 <li><a href="/facebook-marketplace-safety">Facebook Marketplace Safety Guide</a></li>
 </ul>
 
 <p>Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. <a href="/verify">Verify now</a> — 2 free checks, then $0.99/check or $10/month unlimited.</p>
 </div>
 </div>
 </noscript>
 <div className="min-h-screen bg-background pt-20">
 {/* Hero */}
 <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
 <ShoppingCart className="w-5 h-5 text-primary" />
 <span className="text-sm font-medium">For Consumers</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Buy Secondhand with Confidence
 </h1>
 
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 Protect yourself when buying used phones, cars, electronics, and more. 
 Free verification against 100+ stolen item databases before you hand over cash.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 <Shield className="w-5 h-5" />
 Verify Item Free
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/app">
 Get Mobile App
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* What We Verify */}
 <section className="py-16 px-4">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-4">What Can You Verify?</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Before buying anything secondhand, check it against our databases of reported stolen items.
 </p>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {useCases.map((useCase, index) => (
 <Link key={index} to={useCase.link}>
 <Card className="hover:border-primary transition-colors h-full">
 <CardHeader>
 <useCase.icon className="w-10 h-10 text-primary mb-2" />
 <CardTitle className="text-lg">{useCase.title}</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground mb-4">{useCase.description}</p>
 <span className="text-primary text-sm font-medium">Learn more →</span>
 </CardContent>
 </Card>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Risks Section */}
 <section className="py-16 px-4 bg-destructive/5">
 <div className="max-w-4xl mx-auto">
 <div className="flex items-center justify-center gap-3 mb-6">
 <AlertTriangle className="w-8 h-8 text-destructive" />
 <h2 className="text-3xl font-bold">Risks of Buying Stolen Items</h2>
 </div>
 
 <p className="text-center text-muted-foreground mb-8">
 Even if you buy in good faith, purchasing stolen property has serious consequences:
 </p>
 
 <div className="grid md:grid-cols-2 gap-4">
 {risks.map((risk, index) => (
 <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-destructive/20">
 <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
 <p>{risk}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">How SafeOrStolen Protects You</h2>
 
 <div className="space-y-8">
 {[
 { step: 1, title: "Get the Identifier", desc: "Ask the seller for the IMEI number (phones), VIN (vehicles), or serial number (electronics) before meeting. If they refuse, that's a red flag." },
 { step: 2, title: "Run the Verification", desc: "Enter the number in SafeOrStolen's free verification tool. We check against stolen property reports from all 50 states, carrier and theft databases, vehicle theft and title databases, and 100+ community theft registries." },
 { step: 3, title: "Make an Informed Decision", desc: "If the status is CLEAN, proceed with confidence. If there are any red flags, walk away from the deal." }
 ].map(({ step, title, desc }) => (
 <div key={step} className="flex items-start gap-6">
 <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">{step}</div>
 <div>
 <h3 className="font-semibold text-xl mb-2">{title}</h3>
 <p className="text-muted-foreground">{desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Benefits */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Benefits for Consumers</h2>
 
 <div className="grid md:grid-cols-3 gap-8">
 <div className="text-center">
 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
 <DollarSign className="w-8 h-8 text-primary" />
 </div>
 <h3 className="font-semibold text-lg mb-2">Protect Your Money</h3>
 <p className="text-muted-foreground">Average loss from buying stolen property: $500–$5,000. Verification costs: $0 (2 free checks).</p>
 </div>

 <div className="text-center">
 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
 <Scale className="w-8 h-8 text-primary" />
 </div>
 <h3 className="font-semibold text-lg mb-2">Stay Legal</h3>
 <p className="text-muted-foreground">Avoid potential criminal charges for possession of stolen property under state and federal law.</p>
 </div>

 <div className="text-center">
 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
 <Shield className="w-8 h-8 text-primary" />
 </div>
 <h3 className="font-semibold text-lg mb-2">Peace of Mind</h3>
 <p className="text-muted-foreground">Buy with confidence knowing the item is legitimate and clean. 3-second results from 100+ databases.</p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
 <Accordion type="single" collapsible className="space-y-4">
 {consumerFaqs.map((faq, index) => (
 <AccordionItem key={index} value={`faq-${index}`} className="bg-card px-6 rounded-lg">
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

 {/* Related Resources */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
 <div className="grid md:grid-cols-3 gap-4">
 <Link to="/facebook-marketplace-safety" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Marketplace Safety Guide</h3>
 <p className="text-sm text-muted-foreground">Red flags and safety tips</p>
 </Link>
 <Link to="/imei-checker" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">IMEI Checker</h3>
 <p className="text-sm text-muted-foreground">Verify phones before buying</p>
 </Link>
 <Link to="/vin-checker" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">VIN Checker</h3>
 <p className="text-sm text-muted-foreground">Check vehicles before purchase</p>
 </Link>
 <Link to="/app" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Mobile App</h3>
 <p className="text-sm text-muted-foreground">Scan barcodes on the go</p>
 </Link>
 <Link to="/pricing" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Pricing</h3>
 <p className="text-sm text-muted-foreground">$10/mo unlimited verifications</p>
 </Link>
 <Link to="/how-it-works" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">How It Works</h3>
 <p className="text-sm text-muted-foreground">Step-by-step verification process</p>
 </Link>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Ready to Buy Safely?</h2>
 <p className="text-xl text-muted-foreground mb-8">
 Don't take chances with your hard-earned money. Verify any item in 3 seconds.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 <Shield className="w-5 h-5" />
 Verify Now — Free
 </Link>
 </Button>
 <Button asChild size="lg" variant="outline">
 <Link to="/pricing">
 $10/mo Unlimited
 </Link>
 </Button>
 </div>
 </div>
 </section>
 </div>
 </>
 );
};

export default ForConsumersPage;