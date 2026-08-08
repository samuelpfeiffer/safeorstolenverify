import React from 'react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, Search, Smartphone, ArrowRight } from 'lucide-react';

const EbayBuyerProtection = () => {
 const structuredData = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Verify eBay Items Before Buying",
 "description": "Step-by-step guide to protect yourself from stolen items on eBay using SafeOrStolen verification.",
 "step": [
 {
 "@type": "HowToStep",
 "name": "Ask for the serial number or IMEI",
 "text": "Before bidding or buying, message the seller and ask for the item's unique identifier (IMEI for phones, VIN for vehicles, serial number for electronics)."
 },
 {
 "@type": "HowToStep",
 "name": "Verify with SafeOrStolen",
 "text": "Enter the identifier into SafeOrStolen's free checker to search 100+ databases for stolen reports."
 },
 {
 "@type": "HowToStep",
 "name": "Check seller history",
 "text": "Review the seller's feedback score, history, and any red flags in their listing."
 },
 {
 "@type": "HowToStep",
 "name": "Use eBay's secure payment",
 "text": "Always pay through eBay's official checkout for buyer protection."
 }
 ]
 };

 return (
 <>
 <PageSEO
 title="eBay Buyer Protection Guide - Avoid Stolen Items | SafeOrStolen"
 description="Complete guide to protecting yourself from stolen items on eBay. Learn how to verify electronics, phones, and vehicles before bidding. Free IMEI and serial number checks."
 keywords="eBay buyer protection, eBay scam protection, verify eBay items, eBay stolen phone, eBay IMEI check, eBay serial number verification"
 structuredData={structuredData}
 />
 <TopNavigation />
 
 <main className="min-h-screen bg-background">
 {/* Hero Section */}
 <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted">
 <div className="container mx-auto max-w-4xl text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
 <Shield className="w-4 h-4" />
 eBay Buyer Protection Guide
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
 How to Verify eBay Items Before Buying
 </h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Protect yourself from purchasing stolen goods on eBay. Use SafeOrStolen's free verification tools to check any item's history before you bid.
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

 {/* Why Verify Section */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
 Why You Should Verify eBay Purchases
 </h2>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="p-6 bg-card rounded-xl border">
 <AlertTriangle className="w-10 h-10 text-destructive mb-4" />
 <h3 className="text-lg font-semibold mb-2">Stolen Goods Risk</h3>
 <p className="text-muted-foreground">eBay's massive marketplace makes it a target for fencing stolen items, especially electronics and phones.</p>
 </div>
 <div className="p-6 bg-card rounded-xl border">
 <Shield className="w-10 h-10 text-primary mb-4" />
 <h3 className="text-lg font-semibold mb-2">Legal Protection</h3>
 <p className="text-muted-foreground">Unknowingly buying stolen property can result in the item being seized with no refund.</p>
 </div>
 <div className="p-6 bg-card rounded-xl border">
 <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
 <h3 className="text-lg font-semibold mb-2">Peace of Mind</h3>
 <p className="text-muted-foreground">Verification takes 3 seconds and gives you confidence in your purchase.</p>
 </div>
 </div>
 </div>
 </section>

 {/* Step by Step Guide */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
 Step-by-Step Verification Guide
 </h2>
 <div className="space-y-8">
 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Ask the Seller for the Identifier</h3>
 <p className="text-muted-foreground mb-4">Before bidding, message the seller and request:</p>
 <ul className="list-disc list-inside text-muted-foreground space-y-2">
 <li><strong>Phones:</strong> IMEI number (dial *#06# on the device)</li>
 <li><strong>Vehicles:</strong> VIN (17-character code on dashboard or door)</li>
 <li><strong>Electronics:</strong> Serial number (usually on bottom or in settings)</li>
 <li><strong>Bikes:</strong> Serial number (under bottom bracket)</li>
 </ul>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Verify with SafeOrStolen</h3>
 <p className="text-muted-foreground mb-4">Enter the identifier into our free verification tool. We check 100+ databases including:</p>
 <ul className="list-disc list-inside text-muted-foreground space-y-2">
 <li>Stolen property reports from all 50 states (FBI stolen property database)</li>
 <li>vehicle theft and title databases</li>
 <li>Carrier blacklists (AT&T, Verizon, T-Mobile)</li>
 <li>International stolen databases</li>
 </ul>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Check for Red Flags</h3>
 <p className="text-muted-foreground mb-4">Be wary of:</p>
 <ul className="list-disc list-inside text-muted-foreground space-y-2">
 <li>Prices significantly below market value</li>
 <li>Sellers who refuse to provide identifiers</li>
 <li>Stock photos instead of actual item photos</li>
 <li>New accounts with no feedback</li>
 <li>Pressure to complete sale quickly or outside eBay</li>
 </ul>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
 <div>
 <h3 className="text-xl font-semibold mb-2">Use eBay's Secure Payment</h3>
 <p className="text-muted-foreground">Always pay through eBay's official checkout for buyer protection. Never pay via wire transfer, gift cards, or outside eBay.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 px-4 bg-primary/10">
 <div className="container mx-auto max-w-3xl text-center">
 <h2 className="text-3xl font-bold text-foreground mb-4">
 Ready to Verify Your eBay Purchase?
 </h2>
 <p className="text-lg text-muted-foreground mb-8">
 Get instant results in 3 seconds. Your first 2 checks are free.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 Verify an Item Now
 <ArrowRight className="w-5 h-5" />
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Related Links */}
 <section className="py-16 px-4">
 <div className="container mx-auto max-w-4xl">
 <h2 className="text-2xl font-bold text-foreground mb-6">Related Guides</h2>
 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
 <Link to="/guides/verify-craigslist-items" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
 <h3 className="font-semibold mb-2">Craigslist Verification</h3>
 <p className="text-sm text-muted-foreground">How to verify items on Craigslist</p>
 </Link>
 <Link to="/guides/offerup-scam-protection" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
 <h3 className="font-semibold mb-2">OfferUp Safety</h3>
 <p className="text-sm text-muted-foreground">Avoid scams on OfferUp</p>
 </Link>
 <Link to="/imei-checker" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
 <h3 className="font-semibold mb-2">IMEI Checker</h3>
 <p className="text-sm text-muted-foreground">Check phone IMEI numbers</p>
 </Link>
 </div>
 </div>
 </section>
 </main>
 
 <Footer />
 </>
 );
};

export default EbayBuyerProtection;
