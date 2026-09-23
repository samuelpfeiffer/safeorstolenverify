import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Shield, CheckCircle, XCircle, Database, AlertTriangle, ArrowRight, Ban, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@/lib/router-compat';

/**
 * Phone Blacklist Check Page - Target: "phone blacklist checker" (6,600 monthly searches)
 */
const PhoneBlacklistCheckPage = () => {
 const [imei, setIMEI] = useState('');
 const navigate = useNavigate();

 const handleCheck = (e: React.FormEvent) => {
 e.preventDefault();
 if (imei.length === 15) {
 navigate(`/verify?type=imei&value=${imei}`);
 }
 };

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "What is a phone blacklist?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "A phone blacklist is a database of IMEI numbers reported as stolen, lost, or with unpaid bills. Carriers share this data to prevent blacklisted phones from being activated on their networks. SafeOrStolen checks these blacklists instantly."
 }
 },
 {
 "@type": "Question",
 "name": "How do I check if a phone is blacklisted?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Enter the 15-digit IMEI number into SafeOrStolen's free lookup. We analyze public web results and our own reports, plus we tell you about the phone model and details. Results in 3 seconds."
 }
 },
 {
 "@type": "Question",
 "name": "Can a blacklisted phone be fixed?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "If the phone was blacklisted due to unpaid bills, paying the balance may remove it. If stolen, the original owner must file a police report to clear it. Some carriers allow appeals, but stolen devices rarely get unblacklisted."
 }
 },
 {
 "@type": "Question",
 "name": "What happens if I buy a blacklisted phone?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "A blacklisted phone cannot be activated on most carrier networks. You may be stuck with an expensive paperweight. Always verify the IMEI with SafeOrStolen before buying to avoid this."
 }
 }
 ]
 };

 return (
 <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
 <PageSEO
 title="Free Phone Blacklist Check - IMEI Verification"
 description="Look up a phone's IMEI before buying. Free IMEI lookup provides phone details and checks against SafeOrStolen's reports and public web results. Instant."
 keywords="phone blacklist check, IMEI blacklist checker, check if phone blacklisted, carrier blacklist check, phone blacklist status, blacklisted phone checker"
 canonical="/phone-blacklist-check"
 structuredData={faqSchema}
 />

 <div className="container mx-auto px-4 py-12 max-w-6xl">
 {/* Hero Section */}
 <section className="text-center mb-16">
 <Badge variant="secondary" className="mb-4">
 <Ban className="w-4 h-4 mr-2 inline" />
 Check Carrier Blacklists Instantly
 </Badge>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
 Free Phone Blacklist Check
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 Verify a phone's IMEI before buying. We check SafeOrStolen's reports and public web results, and provide phone details. If a phone is blacklisted by carriers, it cannot be activated!
 </p>

 {/* Blacklist Checker Tool */}
 <Card className="max-w-xl mx-auto border-2 border-primary/20 shadow-lg">
 <CardHeader className="pb-2">
 <CardTitle className="flex items-center justify-center gap-2">
 <Smartphone className="w-5 h-5 text-primary" />
 Check Blacklist Status
 </CardTitle>
 <CardDescription>Enter the 15-digit IMEI number</CardDescription>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleCheck} className="space-y-4">
 <Input
 type="text"
 placeholder="Enter IMEI (15 digits)"
 value={imei}
 onChange={(e) => setIMEI(e.target.value.replace(/\D/g, '').slice(0, 15))}
 className="text-center text-lg tracking-wider"
 maxLength={15}
 />
 <div className="text-sm text-muted-foreground">
 {imei.length}/15 digits
 </div>
 <Button type="submit" size="lg" className="w-full" disabled={imei.length !== 15}>
 <Search className="w-5 h-5 mr-2" />
 Check Blacklist Status - Free
 </Button>
 </form>
 </CardContent>
 </Card>
 </section>

 {/* What is a Blacklist */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">What is a Phone Blacklist?</h2>
 <div className="grid md:grid-cols-2 gap-8">
 <div>
 <p className="text-lg mb-4">
 A phone blacklist is a shared database of IMEI numbers that have been reported for:
 </p>
 <ul className="space-y-3">
 <li className="flex items-start gap-3">
 <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
 <span><strong>Theft</strong> - Reported stolen by the original owner</span>
 </li>
 <li className="flex items-start gap-3">
 <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
 <span><strong>Loss</strong> - Reported lost and potentially stolen</span>
 </li>
 <li className="flex items-start gap-3">
 <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
 <span><strong>Unpaid Bills</strong> - Carrier financed phone with unpaid balance</span>
 </li>
 <li className="flex items-start gap-3">
 <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
 <span><strong>Fraud</strong> - Obtained through fraudulent means</span>
 </li>
 </ul>
 </div>
 <Card className="bg-destructive/10 border-destructive/20">
 <CardContent className="pt-6">
 <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
 <h3 className="font-semibold text-lg mb-2">Why Blacklist Check Matters</h3>
 <p className="text-muted-foreground">
 If you buy a blacklisted phone, it <strong>cannot be activated</strong> on most carrier networks. You'll be stuck with an expensive paperweight. Some carriers share blacklist data globally, meaning the phone may be unusable anywhere.
 </p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Carriers We Check */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Carrier Blacklists We Verify</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {['AT&T', 'Verizon', 'T-Mobile', 'Sprint', 'Cricket', 'Metro', 'Boost', 'US Cellular', 'Vodafone', 'O2', 'EE', 'Three', 'Rogers', 'Bell', 'Telus', 'Telstra'].map((carrier) => (
 <Card key={carrier} className="text-center">
 <CardContent className="py-4">
 <p className="font-medium">{carrier}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 <p className="text-center text-muted-foreground mt-4">Plus 40+ additional international carriers</p>
 </section>

 {/* Blacklist Status Results */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Understanding Blacklist Results</h2>
 <div className="grid md:grid-cols-3 gap-6">
 <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
 <CardContent className="pt-6 text-center">
 <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
 <h3 className="font-semibold text-lg mb-2">Clean / Not Blacklisted</h3>
 <p className="text-sm text-muted-foreground">We found no stolen reports in our system or public web results for this phone. A carrier blacklist check would need to be done with the carrier.</p>
 </CardContent>
 </Card>
 <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
 <CardContent className="pt-6 text-center">
 <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
 <h3 className="font-semibold text-lg mb-2">Blacklisted</h3>
 <p className="text-sm text-muted-foreground">Phone is blocked. Cannot activate on carrier networks. DO NOT BUY.</p>
 </CardContent>
 </Card>
 <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
 <CardContent className="pt-6 text-center">
 <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
 <h3 className="font-semibold text-lg mb-2">Financed / Pending</h3>
 <p className="text-sm text-muted-foreground">Phone has outstanding balance. May be blacklisted if payments stop. Proceed with caution.</p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
 <div className="space-y-4 max-w-3xl mx-auto">
 {[
 {
 q: "What is a phone blacklist?",
 a: "A phone blacklist is a database of IMEI numbers reported as stolen, lost, or with unpaid bills. Carriers share this data to prevent blacklisted phones from being activated on their networks."
 },
 {
 q: "How do I check if a phone is blacklisted?",
 a: "Enter the 15-digit IMEI number into SafeOrStolen's free lookup above. We analyze public web results and our own reports, plus we tell you about the phone model and details. Results in 3 seconds."
 },
 {
 q: "Can a blacklisted phone be fixed?",
 a: "If blacklisted due to unpaid bills, paying the balance may remove it. If stolen, the original owner must file a police report. Some carriers allow appeals, but stolen devices rarely get unblacklisted."
 },
 {
 q: "What happens if I buy a blacklisted phone?",
 a: "A blacklisted phone cannot be activated on most carrier networks. You may be stuck with an expensive paperweight. Always verify the IMEI before buying."
 }
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
 <h2 className="text-2xl font-bold mb-4">Check Blacklist Status Now</h2>
 <p className="text-muted-foreground mb-6">Don't buy a phone that can't be activated. Verify the blacklist status first.</p>
 <Button asChild size="lg">
 <a href="#top">Check Phone Blacklist - Free</a>
 </Button>
 </section>

 {/* Internal Links */}
 <section className="mt-16 pt-8 border-t">
 <h2 className="text-xl font-semibold mb-4">Related Tools</h2>
 <div className="flex flex-wrap gap-3">
 <Link to="/stolen-phone-checker" className="text-primary hover:underline">Stolen Phone Checker</Link>
 <span>•</span>
 <Link to="/imei-checker" className="text-primary hover:underline">IMEI Checker</Link>
 <span>•</span>
 <Link to="/check-iphone-stolen" className="text-primary hover:underline">iPhone IMEI Check</Link>
 <span>•</span>
 <Link to="/app" className="text-primary hover:underline">Download App</Link>
 </div>
 </section>
 </div>
 </div>
 );
};

export default PhoneBlacklistCheckPage;
