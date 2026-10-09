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

 // Oct 7 2026: fixed by hand. The blacklist check is a paid add-on, so "free blacklist check",
 // "instantly", "3 seconds", the unverified carrier list and "40+ carriers" were removed.
 const faqs = [
 {
 q: "What is a phone blacklist?",
 a: "A phone blacklist is a shared list of IMEI numbers that carriers have flagged as lost or stolen. A phone on it usually can't be activated on participating carrier networks, even with a new SIM. Phones can also be blocked by a carrier over an unpaid balance, which is a separate issue from theft."
 },
 {
 q: "How do I check if a phone is blacklisted?",
 a: "Get the IMEI by dialing *#06#, then enter it at SafeOrStolen (safeorstolen.com/phone-blacklist-check). The basic check shows the make and model and searches SafeOrStolen theft reports and public web results. The lost/stolen carrier blacklist check is a paid add-on; monthly members get up to 20 a month. Results come back in a few seconds."
 },
 {
 q: "Can a blacklisted phone be fixed?",
 a: "Only by the person or carrier who flagged it. If the block is over an unpaid balance, the account holder can pay it off and ask the carrier to clear it. If the phone was reported lost or stolen, only the original owner can ask their carrier to remove it. A buyer can't clear it."
 },
 {
 q: "What happens if I buy a blacklisted phone?",
 a: "It usually won't activate on participating carrier networks, so you can't use it for calls or data even with your own SIM, and the seller is rarely reachable afterward. Check the IMEI before you pay, and make sure the IMEI on the box, the SIM tray and the *#06# screen all match."
 }
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(f => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a }
 }))
 };

 return (
 <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
 <PageSEO
 title="Phone Blacklist Check - IMEI Lookup Before You Buy"
 description="Phone blacklist check by IMEI: see make and model, search theft reports, and run a paid lost/stolen carrier blacklist check in a few seconds before you buy."
 keywords="phone blacklist check, IMEI blacklist checker, check if phone blacklisted, carrier blacklist check, phone blacklist status, blacklisted phone checker"
 canonical="/phone-blacklist-check"
 structuredData={faqSchema}
 />

 <div className="container mx-auto px-4 py-12 max-w-6xl">
 {/* Hero Section */}
 <section className="text-center mb-16">
 <Badge variant="secondary" className="mb-4">
 <Ban className="w-4 h-4 mr-2 inline" />
 IMEI Blacklist Check
 </Badge>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
 Phone Blacklist Check
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 Enter the IMEI before you pay. You'll see the make and model and any match in SafeOrStolen theft reports and public web results, and you can add a paid lost/stolen carrier blacklist check. A blacklisted phone usually won't activate on participating networks.
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
 Check This IMEI
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
 If you buy a blacklisted phone, it <strong>cannot be activated</strong> on most carrier networks. Your SIM won't connect it, and the seller is usually gone by the time you find out.
 </p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* What each check covers */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">What You Get</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <Card>
 <CardContent className="pt-6">
 <h3 className="font-semibold text-lg mb-2">Basic IMEI check</h3>
 <p className="text-muted-foreground">Part of every check: the phone's make and model from the IMEI, plus any match in SafeOrStolen theft reports and public web results. 2 free checks, then $0.99 a check or $10 a month unlimited.</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6">
 <h3 className="font-semibold text-lg mb-2">Carrier blacklist check (paid)</h3>
 <p className="text-muted-foreground">Searches the lost/stolen carrier blacklist for the IMEI. Monthly members get up to 20 blacklist checks a month. It doesn't show Activation Lock or Google account lock, so have the seller sign out in front of you.</p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Blacklist Status Results */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Understanding Blacklist Results</h2>
 <div className="grid md:grid-cols-3 gap-6">
 <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
 <CardContent className="pt-6 text-center">
 <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
 <h3 className="font-semibold text-lg mb-2">No report found</h3>
 <p className="text-sm text-muted-foreground">Nothing turned up in the records searched, which are listed on the result. It's not a guarantee, so still check the account lock in person.</p>
 </CardContent>
 </Card>
 <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
 <CardContent className="pt-6 text-center">
 <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
 <h3 className="font-semibold text-lg mb-2">Reported stolen or blacklisted</h3>
 <p className="text-sm text-muted-foreground">The IMEI matches a theft report or is on the lost/stolen blacklist. Don't buy it.</p>
 </CardContent>
 </Card>
 <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
 <CardContent className="pt-6 text-center">
 <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
 <h3 className="font-semibold text-lg mb-2">Possible match</h3>
 <p className="text-sm text-muted-foreground">Something close turned up, such as a web post mentioning the IMEI. Read the listed source and ask the seller for a receipt.</p>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="mb-16">
 <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
 <div className="space-y-4 max-w-3xl mx-auto">
 {faqs.map((faq, i) => (
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
 <p className="text-muted-foreground mb-6">Check the IMEI before money changes hands. Your first 2 checks are free.</p>
 <Button asChild size="lg">
 <a href="#top">Check a Phone</a>
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
 <Link to="/app" className="text-primary hover:underline">Web App</Link>
 </div>
 </section>
 </div>
 </div>
 );
};

export default PhoneBlacklistCheckPage;
