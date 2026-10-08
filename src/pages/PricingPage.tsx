/**
 * Oct 7 2026: rewritten by hand for "safeorstolen pricing" / "how much does a stolen item check
 * cost". Checkout buttons and handleCheckout are unchanged. Fixed: the title said "$10/Month" and
 * the unlimited card showed "$10" (the plan is $14.99 a month); "saves money after 3 checks" (it
 * takes 4 single checks to pass $14.99); the support email (now safeorstolenmail@gmail.com).
 * Removed claims not backed by the product facts: "AI analysis", "scam risk analysis", "3-second
 * results", "34 states", seller badges, bulk CSV upload, priority support, embeddable widget/API,
 * "no questions asked" refunds, and emoji.
 */
import { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { Shield, Zap, Check, ArrowRight, Star, CreditCard } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { redirectToStripe } from '@/utils/stripeRedirect';
import { UNLIMITED_PRICE_ID, PAY_PER_CHECK_PRICE_ID } from '@/features/pricing/constants';

const FAQS = [
 {
 q: 'How much does SafeOrStolen cost?',
 a: 'SafeOrStolen (safeorstolen.com/pricing) gives you 2 free checks when you create a free account, with no credit card. After that, a single check costs $3.99 with no subscription, or you can pay $14.99 a month for unlimited checks and cancel anytime. A verification certificate, a dated record with its own link showing you checked before a sale, is an optional $1.99, or free on the monthly plan.',
 },
 {
 q: 'What do the 2 free checks include?',
 a: 'Each free check searches SafeOrStolen theft reports and public web results for the number you enter. Gun checks also search police firearm theft and loss reports from 33 states and Washington, DC, bike checks search a national stolen-bicycle registry, and VIN checks decode the vehicle and list open recalls. A free phone check shows the make and model from the IMEI. The carrier blacklist search needs a paid check.',
 },
 {
 q: 'Is anything limited on the $14.99 unlimited plan?',
 a: 'Only phone blacklist searches. The monthly plan includes up to 20 lost/stolen carrier blacklist checks a month, because each one costs money to run. Every other check, for cars, plates, guns, bikes, laptops, tools and anything with a serial number, is unlimited. If you need another blacklist check after your 20, buy a single $3.99 check.',
 },
 {
 q: 'When is the monthly plan cheaper than single checks?',
 a: 'At 4 checks a month. Four single checks cost $15.96, more than the $14.99 monthly plan, and three cost $11.97, which is less. If you are checking one phone or one bike before a purchase, use your free checks or a $3.99 single check. If you buy and resell regularly, or are shopping around and checking several listings, the monthly plan costs less.',
 },
 {
 q: 'Can I cancel the monthly plan, and is there a refund?',
 a: 'Yes. Cancel anytime from your account dashboard and the plan stays active until the end of the period you paid for. The monthly plan also has a 30-day refund: if it isn\'t useful to you within 30 days of paying, email safeorstolenmail@gmail.com and ask for your money back. Single checks and certificates are one-time purchases.',
 },
 {
 q: 'What counts as one check?',
 a: 'Each IMEI, VIN, plate or serial number you submit counts as one check. Opening a result you already ran, from your account history, does not cost another check. If you mistype a number and run it again corrected, that is a second check, so compare the number with the photo from the seller before you search.',
 },
 {
 q: 'What is the $1.99 verification certificate?',
 a: 'It is an optional add-on to a check: a dated record with its own link that shows you checked the item before the sale. You can send the link to a buyer when you sell, or keep it in case questions come up after you buy. It costs $1.99 per certificate and is free for monthly members.',
 },
 {
 q: 'Do I need an account to buy a single check?',
 a: 'Yes. A free account is required for every check, free or paid, so the result can be saved to your history with the date. Sign up, then pay $3.99 for the check by card through Stripe. There is no recurring charge on a single check.',
 },
];

const PricingPage = () => {
 const [loading, setLoading] = useState<string | null>(null);

 async function handleCheckout(priceId: string, planName: string, isSubscription: boolean) {
 setLoading(priceId);
 try {
 const { data: { user } } = await supabase.auth.getUser();
 if (!user) {
 window.location.href = `/auth?redirect=/pricing`;
 return;
 }
 const { data, error } = await supabase.functions.invoke('create-checkout', {
 body: {
 priceId,
 planName,
 isSubscription,
 fingerprint: getOrCreateFingerprint(),
 redirectUrl: 'https://safeorstolen.com',
 },
 });
 if (error) throw new Error(error.message);
 if (data?.url) redirectToStripe(data.url);
 } catch {
 alert('Something went wrong. Please try again or email safeorstolenmail@gmail.com');
 } finally {
 setLoading(null);
 }
 }

 return (
 <>
 <div className="min-h-screen bg-background text-foreground pt-20">
 <PageSEO
 title="SafeOrStolen Pricing: 2 Free Checks, $3.99 or $14.99/Month"
 description="SafeOrStolen pricing: 2 free checks with no credit card, $3.99 for a single check, or $14.99 a month for unlimited checks with a 30-day refund. Cancel anytime."
 keywords="safeorstolen pricing, how much does safeorstolen cost, stolen item check cost, imei check price, vin check price, free stolen check"
 canonical="/pricing"
 modifiedTime="2026-10-07"
 />

 {/* Hero */}
 <div className="text-center pt-16 pb-10 px-4">
 <h1 className="text-4xl md:text-5xl font-black mb-4">
 SafeOrStolen Pricing
 </h1>
 <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
 Your first 2 checks are free with a free account, no credit card. After that, a single check is
 $3.99, or unlimited checks are $14.99 a month, cancel anytime, with a 30-day refund.
 </p>
 <p className="text-muted-foreground text-sm mt-3">
 Updated <time dateTime="2026-10-07">October 7, 2026</time>
 </p>
 </div>

 {/* Three Pricing Cards */}
 <div className="max-w-5xl mx-auto px-4 mb-16">
 <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
 Pick how you want to pay
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Card 1 — Free */}
 <div className="rounded-2xl border border-border bg-card flex flex-col p-6">
 <div className="inline-flex self-start items-center gap-1 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
 Start here
 </div>
 <h3 className="text-xl font-bold mb-1">Free</h3>
 <div className="mb-1 flex items-baseline gap-1">
 <span className="text-4xl font-black">$0</span>
 </div>
 <p className="text-muted-foreground text-sm mb-6">2 checks</p>

 <ul className="space-y-2 flex-1 mb-6">
 {[
 '2 checks, no credit card',
 'Phones, vehicles, plates, guns, bikes and serial numbers',
 'SafeOrStolen theft reports and public web results',
 'Police gun records for guns, stolen-bicycle registry for bikes',
 'Each check saved to your account with the date',
 ].map((f) => (
 <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
 <Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
 {f}
 </li>
 ))}
 </ul>

 <Link
 to="/verify"
 className="w-full py-3 rounded-xl font-bold text-center bg-muted hover:bg-muted/80 text-foreground transition-all block"
 >
 Use my 2 free checks
 </Link>
 <p className="text-center text-xs text-muted-foreground mt-2">
 Free account required. No card.
 </p>
 </div>

 {/* Card 2 — Pay Per Check */}
 <div className="rounded-2xl border border-border bg-card flex flex-col p-6">
 <div className="inline-flex self-start items-center gap-1 bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
 One item
 </div>
 <h3 className="text-xl font-bold mb-1">Single check</h3>
 <div className="mb-1 flex items-baseline gap-1">
 <span className="text-4xl font-black">$3.99</span>
 </div>
 <p className="text-muted-foreground text-sm mb-6">per check</p>

 <ul className="space-y-2 flex-1 mb-6">
 {[
 'One check, paid once',
 'Every source that applies to the item',
 'Includes the carrier blacklist search on a phone',
 'Saved to your account with the date',
 'Optional $1.99 verification certificate',
 'No subscription',
 ].map((f) => (
 <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
 <Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
 {f}
 </li>
 ))}
 </ul>

 <button
 onClick={() => handleCheckout(PAY_PER_CHECK_PRICE_ID, 'Pay Per Check', false)}
 disabled={loading === PAY_PER_CHECK_PRICE_ID}
 className="w-full py-3 rounded-xl font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all disabled:opacity-60 flex items-center justify-center gap-2"
 >
 <CreditCard className="w-4 h-4" />
 {loading === PAY_PER_CHECK_PRICE_ID ? 'Loading...' : 'Buy a single check: $3.99'}
 </button>
 <p className="text-center text-xs text-muted-foreground mt-2">
 Best when you're checking one item before you buy.
 </p>
 </div>

 {/* Card 3 — Unlimited (highlighted) */}
 <div className="relative rounded-2xl border-2 border-primary bg-card shadow-2xl shadow-primary/20 flex flex-col p-6">
 <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1">
 <Star className="w-3 h-3 fill-current" /> 4+ checks a month
 </div>
 <div className="mt-2" />
 <h3 className="text-xl font-bold mb-1">Unlimited</h3>
 <div className="mb-1 flex items-baseline gap-1">
 <span className="text-4xl font-black">$14.99</span>
 <span className="text-muted-foreground">/month</span>
 </div>
 <p className="text-muted-foreground text-sm mb-6">unlimited checks</p>

 <ul className="space-y-2 flex-1 mb-6">
 {[
 'Unlimited checks on every item type',
 'Up to 20 phone blacklist checks a month',
 'Verification certificates free',
 'Full check history with dates',
 'Cancel anytime',
 '30-day refund',
 ].map((f) => (
 <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
 <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
 {f}
 </li>
 ))}
 </ul>

 <button
 onClick={() => handleCheckout(UNLIMITED_PRICE_ID, 'Unlimited', true)}
 disabled={loading === UNLIMITED_PRICE_ID}
 className="w-full py-3 rounded-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all disabled:opacity-60 flex items-center justify-center gap-2"
 >
 <Zap className="w-4 h-4" />
 {loading === UNLIMITED_PRICE_ID ? 'Loading...' : 'Go unlimited: $14.99/month'}
 </button>
 <p className="text-center text-xs text-muted-foreground mt-2">
 Costs less than single checks once you run 4 in a month.
 </p>
 </div>
 </div>
 </div>

 {/* Comparison table */}
 <div className="max-w-3xl mx-auto px-4 mb-16">
 <h2 className="text-2xl font-black text-foreground mb-4 text-center">What each option gets you</h2>
 <div className="overflow-x-auto">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border"></th>
 <th className="text-left p-3 border-b border-border">Free</th>
 <th className="text-left p-3 border-b border-border">Single check</th>
 <th className="text-left p-3 border-b border-border">Unlimited</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Price', '$0', '$3.99 each', '$14.99 a month'],
 ['Checks', '2', '1 per purchase', 'Unlimited'],
 ['Theft reports and public web results', 'Yes', 'Yes', 'Yes'],
 ['Police gun records, bike registry, VIN decode and recalls', 'Yes', 'Yes', 'Yes'],
 ['Phone carrier blacklist search', 'No', 'Yes', 'Up to 20 a month'],
 ['$1.99 verification certificate', 'Optional', 'Optional', 'Free'],
 ['Refund', 'Not needed', 'One-time purchase', '30 days'],
 ].map((row) => (
 <tr key={row[0]} className="align-top">
 <td className="p-3 border-b border-border font-semibold">{row[0]}</td>
 <td className="p-3 border-b border-border">{row[1]}</td>
 <td className="p-3 border-b border-border">{row[2]}</td>
 <td className="p-3 border-b border-border">{row[3]}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <p className="text-sm text-muted-foreground mt-4">
 Want to know what each check searches before you pay? See{' '}
 <Link to="/how-it-works" className="text-primary underline">how it works</Link>.
 </p>
 </div>

 {/* Audience links */}
 <div className="max-w-3xl mx-auto px-4 mb-16">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <Link to="/for-sellers" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
 <h3 className="font-black text-lg text-foreground mb-2">Selling something?</h3>
 <p className="text-muted-foreground text-sm mb-3">
 Check your own item and send the buyer a $1.99 verification certificate link, so they can see
 you checked it and when.
 </p>
 <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
 For sellers <ArrowRight className="w-4 h-4" />
 </span>
 </Link>
 <Link to="/bulk-check" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
 <h3 className="font-black text-lg text-foreground mb-2">Pawn shop or dealer?</h3>
 <p className="text-muted-foreground text-sm mb-3">
 Check a list of serial numbers, IMEIs or VINs at once instead of one at a time.
 </p>
 <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
 Bulk check <ArrowRight className="w-4 h-4" />
 </span>
 </Link>
 </div>
 </div>

 {/* FAQ */}
 <div className="max-w-3xl mx-auto px-4 mb-16">
 <h2 className="text-2xl font-black text-foreground mb-8 text-center">Pricing questions</h2>
 <div className="space-y-3">
 {FAQS.map((item) => (
 <details key={item.q} className="bg-card border border-border rounded-xl group">
 <summary className="flex justify-between items-center p-5 cursor-pointer text-foreground font-semibold text-sm hover:text-primary transition-colors list-none">
 {item.q}
 <span className="text-muted-foreground group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
 </summary>
 <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
 {item.a}
 </div>
 </details>
 ))}
 </div>
 </div>

 {/* Bottom CTA */}
 <div className="text-center pb-20 px-4">
 <p className="text-muted-foreground mb-4">2 free checks. Then $3.99 a check or $14.99 a month for unlimited.</p>
 <div className="flex flex-col sm:flex-row gap-3 justify-center">
 <Link
 to="/verify"
 className="inline-flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-bold px-8 py-4 rounded-2xl text-lg transition-all"
 >
 Start free
 </Link>
 <button
 onClick={() => handleCheckout(UNLIMITED_PRICE_ID, 'Unlimited', true)}
 disabled={loading === UNLIMITED_PRICE_ID}
 className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-2xl text-lg transition-all disabled:opacity-60"
 >
 <Shield className="w-5 h-5" />
 {loading === UNLIMITED_PRICE_ID ? 'Loading...' : 'Go unlimited: $14.99/month'}
 </button>
 </div>
 <p className="text-muted-foreground/70 text-xs mt-3">Card payments are processed by Stripe. Cancel the monthly plan anytime.</p>
 </div>

 {/* JSON-LD */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Product",
 "name": "SafeOrStolen stolen item check",
 "description": "Check if a phone, vehicle, plate, gun, bike or serial-numbered item is reported stolen. 2 free checks, then $3.99 per check or $14.99 a month for unlimited checks.",
 "brand": { "@type": "Brand", "name": "SafeOrStolen" },
 "offers": [
 { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "USD", "description": "2 free checks with a free account, no credit card" },
 { "@type": "Offer", "name": "Single check", "price": "3.99", "priceCurrency": "USD", "description": "One check, no subscription" },
 { "@type": "Offer", "name": "Unlimited", "price": "14.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing", "description": "Unlimited checks a month, up to 20 phone blacklist checks, free verification certificates, cancel anytime, 30-day refund" },
 { "@type": "Offer", "name": "Verification certificate", "price": "1.99", "priceCurrency": "USD", "description": "Dated record with its own link showing you checked before the sale" },
 ]
 })
 }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQS.map(f => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a }
 }))
 })
 }}
 />
 </div>
 </>
 );
};

export default PricingPage;
