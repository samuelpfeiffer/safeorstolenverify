import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Car, Shield, CheckCircle, AlertTriangle, Database, Clock, Download, Search, FileText, MapPin, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

/**
 * How to Check if Car is Stolen Page
 * Target: "check if car is stolen" (22,200 monthly searches)
 */
const HowToCheckIfCarStolenPage = () => {
 const [vin, setVIN] = useState('');
 const navigate = useNavigate();

 const handleCheck = (e: React.FormEvent) => {
 e.preventDefault();
 if (vin.length === 17) {
 navigate(`/verify?type=vin&value=${vin}`);
 }
 };

 const howToSchema = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Check if a Car is Stolen Before Buying",
 "description": "Complete step-by-step guide to verify if a car is stolen using VIN numbers and SafeOrStolen's free verification tool.",
 "totalTime": "PT5M",
 "step": [
 {
 "@type": "HowToStep",
 "position": 1,
 "name": "Locate the VIN Number",
 "text": "Find the 17-character VIN on the dashboard (visible through windshield), driver's door jamb, or vehicle registration documents."
 },
 {
 "@type": "HowToStep",
 "position": 2,
 "name": "Enter VIN in SafeOrStolen",
 "text": "Enter the 17-character VIN into SafeOrStolen's free verification tool to check against theft databases."
 },
 {
 "@type": "HowToStep",
 "position": 3,
 "name": "Review Verification Results",
 "text": "SafeOrStolen checks vehicle theft and title databases, police databases, and insurance claims to show if the vehicle is stolen, salvage, or clean."
 },
 {
 "@type": "HowToStep",
 "position": 4,
 "name": "Verify Title Documents",
 "text": "Request to see the vehicle title. Check that the VIN on the title matches the VIN on the car exactly."
 },
 {
 "@type": "HowToStep",
 "position": 5,
 "name": "Meet at DMV",
 "text": "For added protection, complete the transaction at your local DMV where the title can be verified and transferred officially."
 }
 ]
 };

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I check if a car is stolen for free?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Use SafeOrStolen's free VIN checker. Enter the 17-character VIN and we verify against vehicle theft and title databases, police databases, and insurance records. Free checks available - no credit card required."
 }
 },
 {
 "@type": "Question",
 "name": "Where is the VIN number located on a car?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The VIN is a 17-character code found on the dashboard (visible through windshield on driver's side), driver's door jamb, vehicle registration, insurance card, and under the hood."
 }
 },
 {
 "@type": "Question",
 "name": "What happens if I accidentally buy a stolen car?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "If the car is reported stolen, police can seize it from you. You won't get your money back from the seller. The original owner or insurance company keeps the car. Always verify the VIN before buying."
 }
 },
 {
 "@type": "Question",
 "name": "Is SafeOrStolen better than vehicle theft and title databases?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "SafeOrStolen includes vehicle theft and title databases data plus 100+ additional databases including police records, insurance claims, and international registries. vehicle theft and title databases only shows their own theft data. SafeOrStolen is more comprehensive."
 }
 }
 ]
 };

 return (
 <>
 <TopNavigation />
 <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background pt-16">
 <PageSEO
 title="How to Check if a Car is Stolen Before Buying (2026 Guide) | SafeOrStolen"
 description="Complete guide to check if a car is stolen using VIN numbers. Free verification against vehicle theft and title databases, police databases, and insurance records. Protect yourself before buying."
 keywords="check if car is stolen, verify car not stolen, VIN check stolen, is my car stolen, stolen car check free, stolen vehicle check"
 canonical="/how-to-check-if-car-stolen"
 structuredData={[howToSchema, faqSchema]}
 />

 <div className="container mx-auto px-4 py-12 max-w-6xl">
 {/* Hero */}
 <section className="text-center mb-16">
 <Badge variant="secondary" className="mb-4">
 <Shield className="w-4 h-4 mr-2 inline" />
 Complete 2026 Vehicle Verification Guide
 </Badge>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
 How to Check if a Car is Stolen Before Buying
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 Verify any vehicle's VIN number in seconds with SafeOrStolen's free checker. We search vehicle theft and title databases, police databases, insurance records, and 100+ sources to protect you from buying a stolen car.
 </p>

 {/* Quick VIN Check Tool */}
 <Card className="max-w-xl mx-auto border-2 border-primary/20 shadow-lg mb-8">
 <CardHeader className="pb-2">
 <CardTitle className="flex items-center justify-center gap-2">
 <Car className="w-5 h-5 text-primary" />
 Quick VIN Check
 </CardTitle>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleCheck} className="space-y-4">
 <Input
 type="text"
 placeholder="Enter VIN (17 characters)"
 value={vin}
 onChange={(e) => setVIN(e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/gi, '').slice(0, 17))}
 className="text-center text-lg tracking-wider font-mono"
 maxLength={17}
 />
 <div className="text-sm text-muted-foreground">
 {vin.length}/17 characters
 </div>
 <Button type="submit" size="lg" className="w-full" disabled={vin.length !== 17}>
 <Search className="w-5 h-5 mr-2" />
 Check if Stolen - Free
 </Button>
 </form>
 </CardContent>
 </Card>
 </section>

 {/* Key Takeaways */}
 <section className="bg-card border rounded-xl p-8 mb-16">
 <h2 className="text-2xl font-bold mb-6 text-center">Key Takeaways</h2>
 <ul className="grid md:grid-cols-2 gap-4">
 <li className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
 <span>Always check the VIN before buying any used car - over 500,000 vehicles are stolen annually in the US</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
 <span>SafeOrStolen checks vehicle theft and title databases, police databases, insurance claims, and 100+ additional sources</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
 <span>If you buy a stolen car, police can seize it with no refund to you</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
 <span>Download the SafeOrStolen app to verify at the dealership or during meetups</span>
 </li>
 </ul>
 </section>

 {/* Step by Step */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Step-by-Step: Check if a Car is Stolen</h2>
 
 <div className="space-y-8">
 {/* Step 1 */}
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
 <div className="flex-1">
 <h3 className="text-xl font-semibold mb-3">Locate the VIN Number</h3>
 <p className="text-muted-foreground mb-4">
 The Vehicle Identification Number (VIN) is a unique 17-character code. Find it in these locations:
 </p>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
 <div className="bg-secondary/50 p-4 rounded-lg text-center">
 <Car className="w-6 h-6 text-primary mx-auto mb-2" />
 <p className="font-medium">Dashboard</p>
 <p className="text-xs text-muted-foreground">Driver's side, visible through windshield</p>
 </div>
 <div className="bg-secondary/50 p-4 rounded-lg text-center">
 <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
 <p className="font-medium">Door Jamb</p>
 <p className="text-xs text-muted-foreground">Driver's door pillar sticker</p>
 </div>
 <div className="bg-secondary/50 p-4 rounded-lg text-center">
 <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
 <p className="font-medium">Title/Registration</p>
 <p className="text-xs text-muted-foreground">Paper documents</p>
 </div>
 <div className="bg-secondary/50 p-4 rounded-lg text-center">
 <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
 <p className="font-medium">Insurance Card</p>
 <p className="text-xs text-muted-foreground">Insurance documents</p>
 </div>
 </div>
 <div className="mt-4 p-4 bg-primary/10 rounded-lg">
 <p className="text-sm"><strong>Important:</strong> The VIN should match in ALL locations. If any differ, this is a major red flag for VIN cloning (a stolen car disguised with a clean VIN).</p>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>

 {/* Step 2 */}
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
 <div className="flex-1">
 <h3 className="text-xl font-semibold mb-3">Enter VIN in SafeOrStolen</h3>
 <p className="text-muted-foreground mb-4">
 Enter the 17-character VIN into our free verification tool. We check more databases than vehicle theft and title databases alone:
 </p>
 <div className="grid md:grid-cols-3 gap-4">
 <div className="border rounded-lg p-4">
 <Database className="w-6 h-6 text-primary mb-2" />
 <p className="font-medium">vehicle theft and title databases Database</p>
 <p className="text-sm text-muted-foreground">vehicle theft and title databases theft records</p>
 </div>
 <div className="border rounded-lg p-4">
 <Shield className="w-6 h-6 text-primary mb-2" />
 <p className="font-medium">Police Records</p>
 <p className="text-sm text-muted-foreground">Stolen property reports from all 50 states</p>
 </div>
 <div className="border rounded-lg p-4">
 <FileText className="w-6 h-6 text-primary mb-2" />
 <p className="font-medium">Title History</p>
 <p className="text-sm text-muted-foreground">Salvage, flood, rebuilt title brands</p>
 </div>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>

 {/* Step 3 */}
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
 <div className="flex-1">
 <h3 className="text-xl font-semibold mb-3">Review Verification Results</h3>
 <p className="text-muted-foreground mb-4">
 SafeOrStolen returns results in seconds:
 </p>
 <div className="grid md:grid-cols-3 gap-4">
 <div className="bg-green-50 dark:bg-green-950/20 border-green-200 border rounded-lg p-4">
 <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
 <p className="font-medium text-green-700 dark:text-green-400">Clean Title</p>
 <p className="text-sm text-muted-foreground">Not reported stolen. Safe to buy.</p>
 </div>
 <div className="bg-red-50 dark:bg-red-950/20 border-red-200 border rounded-lg p-4">
 <XCircle className="w-8 h-8 text-red-500 mb-2" />
 <p className="font-medium text-red-700 dark:text-red-400">Stolen</p>
 <p className="text-sm text-muted-foreground">Vehicle reported stolen. DO NOT BUY.</p>
 </div>
 <div className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 border rounded-lg p-4">
 <AlertTriangle className="w-8 h-8 text-yellow-500 mb-2" />
 <p className="font-medium text-yellow-700 dark:text-yellow-400">Salvage/Branded</p>
 <p className="text-sm text-muted-foreground">Title issues. Proceed with caution.</p>
 </div>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>

 {/* Step 4 */}
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
 <div className="flex-1">
 <h3 className="text-xl font-semibold mb-3">Verify Title Documents</h3>
 <p className="text-muted-foreground mb-4">
 Always inspect the title before paying:
 </p>
 <ul className="space-y-2">
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>VIN on title matches VIN on car exactly</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>Seller's name matches the name on title</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>No liens listed (or lien release provided)</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>No signs of tampering or altered information</span>
 </li>
 </ul>
 </div>
 </div>
 </CardContent>
 </Card>

 {/* Step 5 */}
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
 <div className="flex-1">
 <h3 className="text-xl font-semibold mb-3">Complete Transaction at DMV</h3>
 <p className="text-muted-foreground mb-4">
 For maximum protection, meet at your local DMV to complete the sale:
 </p>
 <ul className="space-y-2">
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>Title can be verified as legitimate</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>Immediate title transfer in your name</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>Seller can't claim the car was never sold</span>
 </li>
 <li className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-500" />
 <span>Safe, public location for the transaction</span>
 </li>
 </ul>
 </div>
 </div>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* FAQ */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
 <div className="space-y-4 max-w-3xl mx-auto">
 {[
 { q: "How do I check if a car is stolen for free?", a: "Use SafeOrStolen's free VIN checker. Enter the 17-character VIN and we verify against vehicle theft and title databases, police databases, and insurance records. Free checks available - no credit card required." },
 { q: "Where is the VIN number located on a car?", a: "The VIN is found on the dashboard (visible through windshield on driver's side), driver's door jamb, vehicle registration, insurance card, and under the hood." },
 { q: "What happens if I accidentally buy a stolen car?", a: "If the car is reported stolen, police can seize it from you. You won't get your money back. The original owner or insurance company keeps the car. Always verify the VIN before buying." },
 { q: "Is SafeOrStolen better than vehicle theft and title databases?", a: "SafeOrStolen includes vehicle theft and title databases data plus 100+ additional databases including police records, insurance claims, and international registries. We're more comprehensive than vehicle theft and title databases alone." }
 ].map((faq, i) => (
 <Card key={i}>
 <CardContent className="pt-6">
 <h3 className="font-semibold mb-2">{faq.q}</h3>
 <p className="text-muted-foreground">{faq.a}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </section>

 {/* CTA */}
 <section className="text-center bg-primary/10 rounded-xl p-8">
 <h2 className="text-2xl font-bold mb-4">Ready to Check a Vehicle?</h2>
 <p className="text-muted-foreground mb-6">Protect yourself from buying stolen vehicles. Verify the VIN now.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg">
 <a href="#top">Check VIN Now - Free</a>
 </Button>
 <Button asChild variant="outline" size="lg">
 <Link to="/app">
 <Download className="w-5 h-5 mr-2" />
 Download App
 </Link>
 </Button>
 </div>
 </section>

 {/* Internal Links */}
 <section className="mt-16 pt-8 border-t">
 <h2 className="text-xl font-semibold mb-4">Related Guides</h2>
 <div className="flex flex-wrap gap-3">
 <Link to="/vin-checker" className="text-primary hover:underline">VIN Checker</Link>
 <span>•</span>
 <Link to="/check-car" className="text-primary hover:underline">Check Car</Link>
 <span>•</span>
 <Link to="/license-plate-lookup" className="text-primary hover:underline">License Plate Lookup</Link>
 <span>•</span>
 <Link to="/how-to-check-if-phone-stolen" className="text-primary hover:underline">How to Check if Phone is Stolen</Link>
 </div>
 </section>
 </div>
 </div>
 <Footer />
 </>
 );
};

export default HowToCheckIfCarStolenPage;
