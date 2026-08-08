import React from 'react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, Search, Smartphone, ArrowRight, MapPin, Camera } from 'lucide-react';

const VerifyCraigslistItems = () => {
 const structuredData = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Verify Craigslist Items Before Meeting",
 "description": "Complete guide to verifying items on Craigslist to avoid stolen goods and scams.",
 "step": [
 {
 "@type": "HowToStep",
 "name": "Get the serial number before meeting",
 "text": "Ask the seller to send you the IMEI, VIN, or serial number before agreeing to meet."
 },
 {
 "@type": "HowToStep",
 "name": "Verify with SafeOrStolen",
 "text": "Use SafeOrStolen's free verification tool to check if the item is reported stolen."
 },
 {
 "@type": "HowToStep",
 "name": "Meet in a safe location",
 "text": "Meet at a police station or public place. Many police departments offer 'safe exchange zones'."
 },
 {
 "@type": "HowToStep",
 "name": "Verify the number matches in person",
 "text": "Before paying, confirm the serial number matches what was provided and re-verify on your phone."
 }
 ]
 };

 return (
 <>
 <PageSEO
 title="Craigslist Item Verification Guide - Avoid Stolen Goods | SafeOrStolen"
 description="Learn how to verify Craigslist items before meeting sellers. Protect yourself from stolen electronics, phones, and vehicles. Free IMEI and VIN checks."
 keywords="Craigslist verification, Craigslist stolen items, verify Craigslist phones, Craigslist scam protection, Craigslist IMEI check"
 structuredData={structuredData}
 />
 <TopNavigation />
 
 <main className="min-h-screen bg-background">
 {/* Hero Section */}
 <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted">
 <div className="container mx-auto max-w-4xl text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
 <Shield className="w-4 h-4" />
 Craigslist Safety Guide
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
 How to Verify Craigslist Items Before Meeting
 </h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Craigslist is full of great deals—but also stolen goods. Learn how to protect yourself with free verification before every meetup.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 <Search className="w-5 h-5" />
 Verify an Item Now
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/app">
 <Smartphone className="w-5 h-5" />
 Get the Mobile App
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Why Craigslist is Risky */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
 Why Craigslist Verification Matters
 </h2>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="p-6 bg-card rounded-xl border">
 <AlertTriangle className="w-10 h-10 text-destructive mb-4" />
 <h3 className="text-lg font-semibold mb-2">No Buyer Protection</h3>
 <p className="text-muted-foreground">Unlike eBay, Craigslist has no buyer protection. Once you pay cash, it's gone.</p>
 </div>
 <div className="p-6 bg-card rounded-xl border">
 <Shield className="w-10 h-10 text-primary mb-4" />
 <h3 className="text-lg font-semibold mb-2">Anonymous Sellers</h3>
 <p className="text-muted-foreground">Sellers are anonymous, making it easy for thieves to fence stolen goods.</p>
 </div>
 <div className="p-6 bg-card rounded-xl border">
 <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
 <h3 className="text-lg font-semibold mb-2">Free Verification</h3>
 <p className="text-muted-foreground">SafeOrStolen lets you verify items for free before you meet—takes 3 seconds.</p>
 </div>
 </div>
 </div>
 </section>

 {/* Step by Step */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
 The Craigslist Verification Checklist
 </h2>
 <div className="space-y-8">
 <div className="flex gap-4 p-6 bg-card rounded-xl border">
 <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">1</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Ask for the Serial Number BEFORE Meeting</h3>
 <p className="text-muted-foreground mb-4">Text or email the seller and request the identifier. Legitimate sellers will provide it. If they refuse, walk away.</p>
 <div className="bg-muted p-4 rounded-lg">
 <p className="text-sm font-medium mb-2">What to ask for:</p>
 <ul className="text-sm text-muted-foreground space-y-1">
 <li>• <strong>Phones:</strong> "Can you send the IMEI? Just dial *#06#"</li>
 <li>• <strong>Cars:</strong> "What's the VIN? It's on the dashboard"</li>
 <li>• <strong>Laptops:</strong> "Can you send the serial number from System Settings?"</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="flex gap-4 p-6 bg-card rounded-xl border">
 <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">2</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Verify with SafeOrStolen</h3>
 <p className="text-muted-foreground mb-4">Enter the identifier into our free tool. We check 100+ databases including stolen property reports from all 50 states, vehicle theft and title databases, and carrier and theft databases.</p>
 <Button asChild className="gap-2">
 <Link to="/verify">
 <Search className="w-4 h-4" />
 Verify Now
 </Link>
 </Button>
 </div>
 </div>

 <div className="flex gap-4 p-6 bg-card rounded-xl border">
 <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">3</div>
 <div className="flex-1">
 <div className="flex items-start justify-between gap-4">
 <div>
 <h3 className="text-xl font-semibold mb-2">Meet at a Safe Location</h3>
 <p className="text-muted-foreground mb-4">Many police departments have "safe exchange zones" in their parking lots with cameras. Use them!</p>
 </div>
 <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
 </div>
 <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
 <p className="text-sm text-green-700 dark:text-green-400">
 <strong>Pro tip:</strong> Google "police safe exchange zone near me" to find one.
 </p>
 </div>
 </div>
 </div>

 <div className="flex gap-4 p-6 bg-card rounded-xl border">
 <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">4</div>
 <div className="flex-1">
 <div className="flex items-start justify-between gap-4">
 <div>
 <h3 className="text-xl font-semibold mb-2">Verify in Person with the App</h3>
 <p className="text-muted-foreground mb-4">At the meetup, use SafeOrStolen's mobile app to scan the item and confirm the serial number matches what was provided.</p>
 </div>
 <Camera className="w-8 h-8 text-primary flex-shrink-0" />
 </div>
 <Button asChild variant="outline" className="gap-2">
 <Link to="/app">
 <Smartphone className="w-4 h-4" />
 Download Free App
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 px-4 bg-primary/10">
 <div className="container mx-auto max-w-3xl text-center">
 <h2 className="text-3xl font-bold text-foreground mb-4">
 Don't Risk It—Verify Before You Meet
 </h2>
 <p className="text-lg text-muted-foreground mb-8">
 Your first 2 checks are free. Takes 3 seconds. Could save you thousands.
 </p>
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 Verify an Item Now
 <ArrowRight className="w-5 h-5" />
 </Link>
 </Button>
 </div>
 </section>

 {/* Related Guides */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-2xl font-bold text-foreground mb-6">Related Guides</h2>
 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
 <Link to="/guides/ebay-buyer-protection" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
 <h3 className="font-semibold mb-2">eBay Protection</h3>
 <p className="text-sm text-muted-foreground">Verify eBay purchases</p>
 </Link>
 <Link to="/guides/offerup-scam-protection" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
 <h3 className="font-semibold mb-2">OfferUp Safety</h3>
 <p className="text-sm text-muted-foreground">Avoid OfferUp scams</p>
 </Link>
 <Link to="/check-phone" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
 <h3 className="font-semibold mb-2">Phone Verification</h3>
 <p className="text-sm text-muted-foreground">Check if a phone is stolen</p>
 </Link>
 </div>
 </div>
 </section>
 </main>
 
 <Footer />
 </>
 );
};

export default VerifyCraigslistItems;
