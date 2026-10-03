import { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { Shield, Zap, Check, ArrowRight, Star, CreditCard } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { redirectToStripe } from '@/utils/stripeRedirect';
import { UNLIMITED_PRICE_ID, PAY_PER_CHECK_PRICE_ID } from '@/features/pricing/constants';

const FAQS = [
 { q: 'Do I get any free checks?', a: 'Yes! Every new user gets 2 free verifications — no credit card required. A free phone check confirms the IMEI is real; the lost and stolen phone blacklist search is part of a paid check. After that, pay $3.99 per check or go unlimited for $14.99/month.' },
  { q: 'Is anything limited on the unlimited plan?', a: 'Only one thing: phone blacklist searches. The $10 plan includes 20 a month, because each one costs us to run. Every other check — cars, guns, bikes, electronics, serial numbers, and anything else used — is unlimited. Need more phone searches in a month? Run a single check for $3.99.' },
 { q: 'Can I cancel the unlimited plan anytime?', a: 'Yes. Cancel from your dashboard with one click. Your plan continues until the end of the billing period — no fees, no hassle.' },
 { q: 'What counts as one verification?', a: 'Each IMEI, VIN, serial number, plate, or firearm serial submitted counts as one check. Viewing the same result again is free.' },
 { q: 'How accurate are the results?', a: 'We analyze web results, SafeOrStolen reports, and use AI to evaluate item history. We also integrate with specialized sources like Bike Index for bicycles and HotGunz for firearms.' },
 { q: 'Do you offer a money-back guarantee?', a: 'Yes — 30-day full refund on the unlimited plan, no questions asked.' },
 { q: 'Do I need an account for pay-per-check?', a: 'Yes — a free account is required for every check. Create one in seconds, pay $3.99, and get instant results with no recurring charges.' },
 { q: 'How do seller verification badges work?', a: 'Seller badges are included free with the $14.99/month unlimited plan. Verify your item, generate a badge, and paste it into your marketplace listing. Buyers click it to see the verified result.' },
 { q: 'Which plan should I choose?', a: 'If you\'re checking one item before buying, use a free check or pay $3.99. If you buy and sell secondhand items regularly (3+ times per month), the $14.99/month unlimited plan saves you money.' },
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
 alert('Something went wrong. Please try again or email support@safeorstolen.com');
 } finally {
 setLoading(null);
 }
 }

 return (
 <>
 <div className="min-h-screen bg-background text-foreground pt-20">
 <PageSEO
 title="Pricing — Free Stolen Item Checks, $3.99/Check, or $10/Month Unlimited | SafeOrStolen"
  description="SafeOrStolen pricing: 2 free checks, $3.99 per single check, or $14.99/month for unlimited verifications across six supported item categories."
 canonical="/pricing"
 />

 {/* Hero */}
 <div className="text-center pt-16 pb-10 px-4">
 <h1 className="text-4xl md:text-5xl font-black mb-4">
 Simple, Honest Pricing
 </h1>
 <p className="text-muted-foreground text-lg max-w-xl mx-auto">
 Start with 2 free checks. Then pay per check or go unlimited. No tricks, no hidden fees.
 </p>
 </div>

 {/* Three Pricing Cards */}
 <div className="max-w-5xl mx-auto px-4 mb-16">
 <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
 Choose Your Verification Plan
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Card 1 — Free */}
 <div className="rounded-2xl border border-border bg-card flex flex-col p-6">
 <div className="inline-flex self-start items-center gap-1 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
 Start Here
 </div>
 <h3 className="text-xl font-bold mb-1">Free</h3>
 <div className="mb-1 flex items-baseline gap-1">
 <span className="text-4xl font-black">$0</span>
 </div>
 <p className="text-muted-foreground text-sm mb-6">2 verifications</p>

 <ul className="space-y-2 flex-1 mb-6">
 {[
 '2 free checks — no credit card required',
 'All item types (phones, cars, bikes, guns, electronics)',
  'SafeOrStolen reports, public web results, and AI analysis',
 '3-second results',
 'Scam risk analysis included',
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
 Try 2 Free Checks
 </Link>
 <p className="text-center text-xs text-muted-foreground mt-2">
 No credit card. Free account required.
 </p>
 </div>

 {/* Card 2 — Pay Per Check */}
 <div className="rounded-2xl border border-border bg-card flex flex-col p-6">
 <div className="inline-flex self-start items-center gap-1 bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
 Most Flexible
 </div>
 <h3 className="text-xl font-bold mb-1">Pay Per Check</h3>
 <div className="mb-1 flex items-baseline gap-1">
 <span className="text-4xl font-black">$3.99</span>
 </div>
 <p className="text-muted-foreground text-sm mb-6">per check</p>

 <ul className="space-y-2 flex-1 mb-6">
 {[
 'Single verification — pay only when you need it',
  'All 6 supported item categories',
 '3-second results',
 'Scam risk analysis included',
  'Proof of Clean Purchase record after a clean check',
 'Shareable verification link',
 'No subscription — no recurring charges',
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
 {loading === PAY_PER_CHECK_PRICE_ID ? 'Loading...' : 'Buy a Single Check — $3.99'}
 </button>
 <p className="text-center text-xs text-muted-foreground mt-2">
 Perfect for occasional buyers. One item, one check, one payment.
 </p>
 </div>

 {/* Card 3 — Unlimited (highlighted) */}
 <div className="relative rounded-2xl border-2 border-primary bg-card shadow-2xl shadow-primary/20 flex flex-col p-6">
 <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap flex items-center gap-1">
 <Star className="w-3 h-3 fill-current" /> Best Value
 </div>
 <div className="mt-2" />
 <h3 className="text-xl font-bold mb-1">Unlimited</h3>
 <div className="mb-1 flex items-baseline gap-1">
 <span className="text-4xl font-black">$10</span>
 <span className="text-muted-foreground">/month</span>
 </div>
 <p className="text-muted-foreground text-sm mb-6">unlimited verifications</p>

 <ul className="space-y-2 flex-1 mb-6">
 {[
 'Unlimited verifications (includes 20 phone blacklist searches a month)',
  'All 6 supported item categories',
 '3-second results',
 'Scam risk analysis included',
  'Proof of Clean Purchase records after clean checks',
 'Shareable verification links',
 'Seller verification badges included free',
 'Bulk CSV upload',
 'Priority support',
 'Cancel anytime — 30-day money-back guarantee',
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
 {loading === UNLIMITED_PRICE_ID ? 'Loading...' : 'Go Unlimited — $14.99/month'}
 </button>
 <p className="text-center text-xs text-muted-foreground mt-2">
 Saves money after just 3 checks per month. Cancel anytime.
 </p>
 </div>
 </div>
 </div>

 {/* Audience links */}
 <div className="max-w-3xl mx-auto px-4 mb-16">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <Link to="/for-sellers" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
 <h3 className="font-black text-lg text-foreground mb-2">🏷️ Selling Items?</h3>
 <p className="text-muted-foreground text-sm mb-3">
  Get verification records that help buyers review your listing with more context.
 </p>
 <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
 Seller badges included in $14.99/mo plan <ArrowRight className="w-4 h-4" />
 </span>
 </Link>
 <Link to="/for-businesses" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
 <h3 className="font-black text-lg text-foreground mb-2">🏢 Pawn Shop or Dealer?</h3>
 <p className="text-muted-foreground text-sm mb-3">
 Automate compliance with embeddable widget, API access, and audit-ready reports.
 </p>
 <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
 Contact us for enterprise plans <ArrowRight className="w-4 h-4" />
 </span>
 </Link>
 </div>
 </div>

 {/* FAQ */}
 <div className="max-w-3xl mx-auto px-4 mb-16">
 <h2 className="text-2xl font-black text-foreground mb-8 text-center">Pricing FAQ</h2>
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
 <p className="text-muted-foreground mb-4">2 free checks. Then $3.99/check or $14.99/month unlimited.</p>
 <div className="flex flex-col sm:flex-row gap-3 justify-center">
 <Link
 to="/verify"
 className="inline-flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-bold px-8 py-4 rounded-2xl text-lg transition-all"
 >
 Try Free
 </Link>
 <button
 onClick={() => handleCheckout(UNLIMITED_PRICE_ID, 'Unlimited', true)}
 disabled={loading === UNLIMITED_PRICE_ID}
 className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-2xl text-lg transition-all disabled:opacity-60"
 >
 <Shield className="w-5 h-5" />
 {loading === UNLIMITED_PRICE_ID ? 'Loading...' : 'Go Unlimited — $14.99/month'}
 </button>
 </div>
 <p className="text-muted-foreground/50 text-xs mt-3">🔒 Payments secured by Stripe · Cancel anytime</p>
 </div>

 {/* JSON-LD */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Product",
 "name": "SafeOrStolen Verification",
  "description": "2 free checks, then $3.99 per check or $14.99/month unlimited verification across six supported item categories.",
 "brand": { "@type": "Brand", "name": "SafeOrStolen" },
 "offers": [
 { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "USD", "description": "2 free verifications, no credit card required" },
 { "@type": "Offer", "name": "Pay Per Check", "price": "3.99", "priceCurrency": "USD", "description": "$3.99 per check, no subscription" },
 { "@type": "Offer", "name": "Unlimited", "price": "14.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing", "description": "$14.99/month unlimited, seller badges included, cancel anytime" },
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
