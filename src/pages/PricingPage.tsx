/**
 * Oct 7 2026: rewritten by hand for "safeorstolen pricing" / "how much does a stolen item check
 * cost". Checkout buttons and handleCheckout are unchanged. Fixed: the title said "$10/Month" and
 * the unlimited card showed "$10" (the plan is $10 a month); "saves money after 3 checks" (it
 * takes 4 single checks to pass $10); the support email (now safeorstolenmail@gmail.com).
 * Removed claims not backed by the product facts: "AI analysis", "scam risk analysis", "3-second
 * results", "34 states", seller badges, bulk CSV upload, priority support, embeddable widget/API,
 * "no questions asked" refunds, and emoji.
 */
import { useRef, useState } from 'react';
import { Link } from '@/lib/router-compat';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { Shield, ArrowRight } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { redirectToStripe } from '@/utils/stripeRedirect';
import { UNLIMITED_PRICE_ID, PAY_PER_CHECK_PRICE_ID } from '@/features/pricing/constants';

const FAQS = [
 { q: 'How much does SafeOrStolen cost?', a: 'Your first check is free. After that, one verification check costs $4.99, or unlimited checks cost $10 per month. Applicable tax is calculated at checkout.' },
 { q: 'Do firearms or other categories cost extra?', a: 'No. One chat handles every supported item type. The same price applies to phones, vehicles, firearms, bikes, electronics, tools and other serial-numbered items.' },
 { q: 'What does a paid check include?', a: 'One item identifier is checked against the sources available for its category, with the sources listed in the result. The paid check includes a verification certificate and one phone blacklist search if the item is a phone. A no-match result is not proof of ownership or a guarantee.' },
 { q: 'What does unlimited mean?', a: 'The $10 monthly plan includes unlimited standard item checks and certificates. Phone carrier blacklist searches are limited to 20 per month. The plan renews monthly; cancel anytime.' },
 { q: 'When is monthly better value?', a: 'Three separate paid checks cost $14.97. If you need three or more checks in a month, the $10 monthly plan costs less, before applicable tax.' },
 { q: 'What happens to checks I already purchased?', a: 'Existing two-check packs keep their original allowance. Existing subscriptions keep their current billing terms. The $4.99 price applies to new one-check purchases.' },
 { q: 'Do I need an account?', a: 'No account is required for your first free check or a one-time purchase. Use the same browser to access a guest purchase. A signed-in account saves your history across devices.' },
 { q: 'Can I cancel or request a refund?', a: 'Cancel monthly billing from your account. Access continues until the end of the paid period. For the monthly plan’s 30-day refund, contact safeorstolenmail@gmail.com. One-time checks do not renew.' },
];

const PricingPage = () => {
 const [loading, setLoading] = useState<string | null>(null);
 const checkoutInProgress = useRef(false);

 async function handleCheckout(priceId: string, planName: string, isSubscription: boolean) {
 if (checkoutInProgress.current) return;
 checkoutInProgress.current = true;
 setLoading(priceId);
 try {
 // Oct 21 2026: guests can pay right away (Stripe asks for their email). Forcing sign-up here lost buyers.
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
 if (typeof data?.url !== 'string' || !data.url.trim()) {
 throw new Error('Checkout did not return a payment link');
 }
 redirectToStripe(data.url);
 } catch {
 alert('Something went wrong. Please try again or email safeorstolenmail@gmail.com');
 } finally {
 checkoutInProgress.current = false;
 setLoading(null);
 }
 }

 return (
 <>
 <div className="min-h-screen bg-background text-foreground pt-20">
 <PageSEO
 title="SafeOrStolen Pricing: 1 Free Check, $4.99/Check, $10/Month"
 description="One chat for every item. Get 1 free check, then pay $4.99 per verification or $10/month for unlimited standard checks. Applicable tax calculated at checkout."
 keywords="safeorstolen pricing, how much does safeorstolen cost, stolen item check cost, imei check price, vin check price, free stolen check"
 canonical="/pricing"
 modifiedTime="2026-11-10"
 />

 <div className="max-w-5xl mx-auto px-4 py-14">
 <div className="text-center mb-10">
 <h1 className="text-4xl md:text-5xl font-black mb-4">One chat. Every item. Simple pricing.</h1>
 <p className="text-lg text-muted-foreground">1 free check. Then $4.99 per check or $10/month unlimited.</p>
 <p className="text-sm text-muted-foreground mt-3">Same pricing for firearms, vehicles, phones, bikes, electronics and tools. Applicable tax calculated at checkout.</p>
 </div>
 <div className="grid gap-6 md:grid-cols-3">
 <section className="rounded-2xl border border-border bg-card p-6 flex flex-col">
 <h2 className="text-xl font-bold">Try it free</h2><p className="text-4xl font-black my-4">$0</p>
 <p className="text-muted-foreground mb-6">1 free check. No account or credit card needed. Results list the sources searched.</p>
 <Link to="/verify" className="mt-auto block rounded-xl bg-muted px-4 py-3 text-center font-bold">Start my free check</Link>
 </section>
 <section className="rounded-2xl border-2 border-primary bg-card p-6 flex flex-col">
 <h2 className="text-xl font-bold">One verification check</h2><p className="text-4xl font-black my-4">$4.99</p>
 <p className="text-muted-foreground mb-4">One item. Any supported category. Paid once.</p>
 <ul className="space-y-2 text-sm mb-6"><li>Available records for your item type</li><li>Verification certificate included</li><li>One phone blacklist search for a phone</li><li>No subscription or category unlock fee</li></ul>
 <button onClick={() => handleCheckout(PAY_PER_CHECK_PRICE_ID, 'One verification check', false)} disabled={loading !== null} className="mt-auto rounded-xl bg-primary px-4 py-3 font-bold text-primary-foreground disabled:opacity-60">{loading === PAY_PER_CHECK_PRICE_ID ? 'Opening checkout…' : 'Check one item — $4.99'}</button>
 </section>
 <section className="rounded-2xl border border-border bg-card p-6 flex flex-col">
 <h2 className="text-xl font-bold">Unlimited</h2><p className="text-4xl font-black my-4">$10<span className="text-base font-normal">/month</span></p>
 <p className="text-muted-foreground mb-4">For people checking several items.</p>
 <ul className="space-y-2 text-sm mb-6"><li>Unlimited standard checks across all categories</li><li>Verification certificates included</li><li>Up to 20 phone blacklist searches per month</li><li>Renews monthly. Cancel anytime.</li></ul>
 <button onClick={() => handleCheckout(UNLIMITED_PRICE_ID, 'Unlimited', true)} disabled={loading !== null} className="mt-auto rounded-xl bg-muted px-4 py-3 font-bold disabled:opacity-60">{loading === UNLIMITED_PRICE_ID ? 'Opening checkout…' : 'Get unlimited — $10/month'}</button>
 </section>
 </div>
 <p className="text-center text-sm text-muted-foreground mt-6">Checking three or more items? Monthly costs less than three separate $4.99 checks.</p>
 <p className="text-center text-sm mt-3"><Link to="/data-sources" className="text-primary underline">See what each item check searches</Link></p>
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
 <p className="text-muted-foreground mb-4">1 free check, then $4.99 per check or $10/month. Same prices across all categories.</p>
 <div className="flex flex-col sm:flex-row gap-3 justify-center">
 <Link
 to="/verify"
 className="inline-flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-bold px-8 py-4 rounded-2xl text-lg transition-all"
 >
 Start free
 </Link>
 <button
 onClick={() => handleCheckout(UNLIMITED_PRICE_ID, 'Unlimited', true)}
 disabled={loading !== null}
 className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-2xl text-lg transition-all disabled:opacity-60"
 >
 <Shield className="w-5 h-5" />
 {loading === UNLIMITED_PRICE_ID ? 'Loading...' : 'Go unlimited: $10/month'}
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
 "@type": "Service",
 "name": "SafeOrStolen stolen item check",
 "description": "Check if a phone, vehicle, plate, gun, bike or serial-numbered item is reported stolen. 1 free check, then $4.99 per check or $10/month for unlimited standard checks.",
 "brand": { "@type": "Brand", "name": "SafeOrStolen" },
 "offers": [
 { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "USD", "description": "1 free check, no card required" },
 { "@type": "Offer", "name": "One verification check", "price": "4.99", "priceCurrency": "USD", "description": "One item, any supported category. One-time purchase. Applicable tax calculated at checkout." },
 { "@type": "Offer", "name": "Unlimited monthly", "price": "10.00", "priceCurrency": "USD", "description": "Unlimited standard checks; up to 20 phone blacklist searches per month. Renews monthly. Applicable tax calculated at checkout." },
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
