import { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, ArrowRight, DollarSign, Clock, BadgeCheck, Users, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { redirectToStripe } from '@/utils/stripeRedirect';
import { toast } from 'sonner';

const PRICING_TIERS = [
 {
 id: 'unlimited',
 name: 'Unlimited Plan',
 price: '$10',
 period: 'month',
 description: 'Unlimited verifications for buyers & sellers',
 features: [
 'Unlimited item verifications',
 'Shareable "Verified Safe" badges',
 'Public verification report URLs',
 'QR codes for in-person sales',
 'PDF certificate downloads',
 'Cancel anytime',
 ],
 cta: 'Subscribe — $10/month',
 priceId: 'price_1T77b7GxnZLw8J7OYB4jBGRB',
 planName: 'Unlimited Plan',
 isSub: true,
 highlighted: true,
 },
 {
 id: 'unlimited2',
 name: 'Unlimited Plan',
 price: '$10',
 period: '/month',
 description: 'Everything included — verify and sell with confidence',
 features: [
 'Unlimited verifications',
 'Unlimited verified badges',
 'Seller profile page',
 'Verification history',
 'PDF certificates',
 'Priority support',
 'Cancel anytime',
 ],
 cta: 'Subscribe — $10/mo',
 priceId: 'price_1T77b7GxnZLw8J7OYB4jBGRB',
 planName: 'Unlimited',
 isSub: true,
 highlighted: true,
 },
];

const SELLER_BENEFITS = [
 {
 icon: DollarSign,
  title: 'Give Buyers More Context',
  description: 'Share a dated verification record so buyers can review what was checked before they purchase.',
  stat: 'Proof',
  statLabel: 'shareable verification record',
 },
 {
 icon: Clock,
  title: 'Answer Questions Up Front',
  description: 'A verification link gives buyers a clear result and the date of the check before they message you.',
  stat: 'Clear',
  statLabel: 'buyer-facing result',
 },
 {
 icon: Shield,
  title: 'Keep a Dated Record',
  description: 'A Proof of Clean Purchase records when the identifier was checked and what the result showed at that time.',
  stat: 'Dated',
  statLabel: 'record of the check',
 },
 {
 icon: Users,
 title: 'Build Buyer Trust',
  description: 'A shareable result lets a buyer review the check directly instead of relying on a screenshot or sales claim.',
 stat: 'Proof',
 statLabel: 'shareable verification record',
 },
];

const HOW_IT_WORKS = [
 { step: '1', title: 'Verify Your Item', description: 'Enter the IMEI, VIN, or serial number of the item you\'re selling. Our AI auto-detects the identifier type.' },
 { step: '2', title: 'Get Your Certificate', description: 'We check SafeOrStolen reports, public web results, and analyze data using AI. Bikes are also checked against a national stolen-bicycle registry, guns against police theft reports from 34 states, and paid phone checks search the phone blacklist.' },
 { step: '3', title: 'Share With Buyers', description: 'Download a PDF certificate or share a unique verification link. The last 4 digits of identifiers are shown for privacy.' },
  { step: '4', title: 'Answer Buyer Questions', description: 'Invite buyers to review the dated result, compare the identifier in person, and run their own check before paying.' },
];

const MARKETPLACE_PLATFORMS = [
 'Facebook Marketplace', 'eBay', 'Craigslist', 'OfferUp', 'Mercari', 'Poshmark',
 'Swappa', 'Amazon Marketplace', 'Gun Broker', 'AutoTrader', 'CarGurus', 'BikeExchange'
];

const FAQS = [
 { q: 'How does the "Verified Safe" badge work?', a: 'After verification, you receive a unique link (e.g., safeorstolen.com/verify/abc123) and a downloadable PDF certificate. Add the link to your listing or include the badge image. Buyers can click to see the full verified report — no signup needed to view it.' },
 { q: 'What information does the buyer see?', a: 'Buyers see the verification result (CLEAN or FLAGGED), the Trust Score (0-100), which databases were checked, and the verification date. For privacy, only the last 4 digits of the identifier are shown. Your personal info is never shared.' },
 { q: 'Does verification guarantee my item isn\'t stolen?', a: 'No verification service can provide a 100% guarantee because not all thefts are reported to databases. However, checking multiple sources provides the most comprehensive available verification and demonstrates documented due diligence.' },
 { q: 'Can I verify items in bulk?', a: 'Yes! Verified Seller and Premium members can upload a CSV file with multiple serial numbers and receive batch verification reports. Perfect for resellers, estate sale companies, and high-volume sellers.' },
 { q: 'How long are verification reports valid?', a: 'Reports are valid for 90 days from the verification date. After that, we recommend re-verifying to ensure databases haven\'t been updated with new theft reports.' },
 { q: 'What if my item comes back as FLAGGED?', a: 'Do not sell the item. Contact your local police with the verification report. If you purchased the item legitimately, file a police report and contact the original seller. Our report provides the evidence law enforcement needs.' },
 { q: 'Where can I use the badge?', a: 'Anywhere you sell: Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark, Swappa, and any other platform. The badge is an image and the report is a URL — works everywhere.' },
 { q: 'What platforms accept verified badges?', a: 'All of them. The badge is a standard image file and the verification report is a URL. Any platform that allows images or links in listings supports SafeOrStolen badges.' },
 { q: 'What\'s included in the plan?', a: '$10/month gets you unlimited verifications, unlimited badges, seller profile, verification history, PDF certificates, and priority support. Cancel anytime.' },
 { q: 'Can I cancel anytime?', a: 'Yes. Cancel from your dashboard anytime. Your subscription continues until the end of the billing period. No cancellation fees.' },
];

export default function ForSellers() {
 const [loading, setLoading] = useState<string | null>(null);

 async function handleCheckout(tier: typeof PRICING_TIERS[0]) {
 setLoading(tier.id);
 try {
 const { data: { user } } = await supabase.auth.getUser();
 const { data, error } = await supabase.functions.invoke('create-checkout', {
 body: {
 priceId: tier.priceId,
 planName: tier.planName,
 isSubscription: tier.isSub,
 fingerprint: getOrCreateFingerprint(),
 },
 headers: user ? undefined : {},
 });
 if (error) throw new Error(error.message);
 if (data?.url) redirectToStripe(data.url);
 } catch {
 toast.error('Something went wrong. Please try again.');
 } finally {
 setLoading(null);
 }
 }

 const structuredData = [
 {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "SafeOrStolen Seller Verification",
 "serviceType": "Item Verification for Sellers",
 "provider": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
 "areaServed": "United States",
  "description": "Verify items before selling and share a dated result so buyers can review the check themselves.",
 "offers": [
 { "@type": "Offer", "price": "10.00", "priceCurrency": "USD", "description": "Unlimited monthly plan" },
 ],
 "dateModified": "2026-03-02"
 },
 {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
 },
 {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
 { "@type": "ListItem", "position": 2, "name": "For Sellers", "item": "https://safeorstolen.com/for-sellers" }
 ]
 },
 ];

 return (
 <>
 <PageSEO
 title="For Sellers - Prove Items Are Legitimate, Sell Faster | SafeOrStolen"
  description="Verify items before listing and share a dated result with buyers. Two free checks, then $0.99 per check or $10 per month unlimited."
 keywords="seller verification, prove item not stolen, verified listing badge, sell faster marketplace, verified seller certificate"
 canonical="/for-sellers"
 structuredData={structuredData}
 />
 <div className="min-h-screen bg-background text-foreground">
 {/* Hero */}
 <section className="pt-32 pb-20 px-4 text-center" style={{ background: 'linear-gradient(180deg, hsl(var(--primary) / 0.08), hsl(var(--background)))' }}>
 <div className="max-w-4xl mx-auto">
 <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm mb-6 font-medium">
 <BadgeCheck className="w-4 h-4" />
 For Marketplace Sellers
 </div>
 <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
  Build Buyer Trust with
 <br />
 <span className="text-primary">Verified Badges</span>
 </h1>
 <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
  Give buyers a dated verification result they can review before paying.
  A SafeOrStolen record <strong className="text-foreground">helps answer legitimacy questions without making promises a check cannot support</strong>.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
 <Button asChild size="lg" className="gap-2 font-bold text-base px-8 py-6">
 <Link to="/verify">
 <Shield className="w-5 h-5" />
 Verify Your Item — Free
 </Link>
 </Button>
 <Button size="lg" variant="outline" className="gap-2 font-bold text-base px-8 py-6" onClick={() => document.getElementById('seller-pricing')?.scrollIntoView({ behavior: 'smooth' })}>
 See Seller Pricing
 <ArrowRight className="w-4 h-4" />
 </Button>
 </div>
 <p className="text-sm text-muted-foreground">2 free verifications · No credit card · Works on all marketplaces</p>
 </div>
 </section>

 {/* Stats */}
 <div className="bg-card border-y border-border">
 <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
 {[
  { v: '6', l: 'Item Categories' },
  { v: '2', l: 'Free Checks to Start' },
 { v: '3 sec', l: 'Verification Time' },
  { v: 'AI', l: 'Plain-Language Analysis' },
 ].map(s => (
 <div key={s.l} className="text-center py-5 px-4">
 <div className="text-2xl font-black text-primary">{s.v}</div>
 <div className="text-muted-foreground text-xs mt-1">{s.l}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Problem Section */}
 <section className="py-20 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-black text-center mb-4">Why Buyers Don't Trust You (Yet)</h2>
  <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Used-item buyers often need more than a listing description before they feel ready to proceed.</p>
 <div className="grid md:grid-cols-3 gap-6 mb-10">
 {[
  { emoji: '❌', title: 'No identifier to review', desc: 'Buyers cannot independently check the exact item.' },
 { emoji: '😰', title: 'Could be a scam', desc: 'Especially on Facebook Marketplace and Craigslist.' },
 { emoji: '⚖️', title: 'Legal concerns', desc: 'Buying stolen property is a crime — buyers know this.' },
 ].map(p => (
 <div key={p.title} className="bg-card border border-border rounded-xl p-6 text-center">
 <div className="text-3xl mb-3">{p.emoji}</div>
 <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
 <p className="text-muted-foreground text-sm">{p.desc}</p>
 </div>
 ))}
 </div>
  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-center">
  <p className="text-foreground font-bold">Clear identifiers, honest condition details, and a dated check give buyers better information.</p>
 </div>
 </div>
 </section>

 {/* Why Sellers Need This */}
 <section className="py-20 px-4 bg-muted/30">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-14">
  <h2 className="text-3xl font-black mb-3">Why Sellers Verify Before Listing</h2>
  <p className="text-muted-foreground max-w-2xl mx-auto">A dated result gives buyers a concrete starting point for their own due diligence.</p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {SELLER_BENEFITS.map(b => (
 <div key={b.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
 <b.icon className="w-10 h-10 text-primary mb-4" />
 <div className="text-3xl font-black text-primary mb-1">{b.stat}</div>
 <div className="text-xs text-muted-foreground mb-3">{b.statLabel}</div>
 <h3 className="text-foreground font-bold mb-2">{b.title}</h3>
 <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="py-20 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-black text-center mb-14">How Seller Verification Works</h2>
 <div className="space-y-8">
 {HOW_IT_WORKS.map(s => (
 <div key={s.step} className="flex gap-5">
 <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 text-primary font-black text-lg flex items-center justify-center flex-shrink-0">
 {s.step}
 </div>
 <div>
 <h3 className="text-foreground font-bold text-lg mb-1">{s.title}</h3>
 <p className="text-muted-foreground leading-relaxed">{s.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Works On All Platforms */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-black mb-4">Works on Every Marketplace</h2>
 <p className="text-muted-foreground mb-8">Share your verification link or PDF certificate on any platform where you sell.</p>
 <div className="flex flex-wrap justify-center gap-3">
 {MARKETPLACE_PLATFORMS.map(p => (
 <span key={p} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">{p}</span>
 ))}
 </div>
 </div>
 </section>

 {/* Pricing - WIRED TO STRIPE */}
 <section id="seller-pricing" className="py-20 px-4 bg-card">
 <div className="max-w-5xl mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-black mb-3">Seller Pricing</h2>
 <p className="text-muted-foreground">Start with 2 free verifications. No credit card required.</p>
 </div>

 <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
 {PRICING_TIERS.map(tier => (
 <div
 key={tier.id}
 className={`rounded-2xl p-6 border-2 flex flex-col ${
 tier.highlighted
 ? 'border-primary bg-primary/5 relative shadow-xl shadow-primary/10 scale-[1.02]'
 : 'border-border bg-background'
 }`}
 >
 {tier.highlighted && (
 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
 ⭐ MOST POPULAR
 </div>
 )}
 <h3 className="text-lg font-black text-foreground mb-1 mt-1">{tier.name}</h3>
 <div className="flex items-baseline gap-1 mb-2">
 <span className="text-3xl font-black text-primary">{tier.price}</span>
 <span className="text-muted-foreground text-sm">{tier.period}</span>
 </div>
 <p className="text-muted-foreground text-sm mb-5">{tier.description}</p>
 <ul className="space-y-2.5 mb-6 flex-1">
 {tier.features.map(f => (
 <li key={f} className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
 <span className="text-foreground">{f}</span>
 </li>
 ))}
 </ul>
 <button
 onClick={() => handleCheckout(tier)}
 disabled={loading === tier.id}
 className={`w-full py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-60 ${
 tier.highlighted
 ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
 : 'bg-muted hover:bg-muted/80 text-foreground'
 }`}
 >
 {loading === tier.id ? (
 <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</span>
 ) : tier.cta}
 </button>
 </div>
 ))}
 </div>

 <div className="text-center mt-8 text-muted-foreground text-sm">
 🔒 Secured by Stripe · 30-day money-back guarantee · Cancel anytime
 </div>

 {/* Cross-links */}
 <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 text-sm">
 <Link to="/pricing" className="text-primary hover:underline flex items-center gap-1">
 Just buying? See buyer pricing <ArrowRight className="w-3 h-3" />
 </Link>
 <Link to="/for-businesses" className="text-primary hover:underline flex items-center gap-1">
 Need business verification? <ArrowRight className="w-3 h-3" />
 </Link>
 </div>
 </div>
 </section>

 {/* Trust Signals */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-2xl font-black mb-8">Trusted Data Sources</h2>
 <div className="flex flex-wrap justify-center gap-4">
 {['SafeOrStolen reports', 'public web results', 'AI analysis', 'National stolen-bicycle registry', 'Police gun theft records (34 states)', 'Phone blacklist (paid checks)'].map(src => (
 <div key={src} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">{src}</div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-20 px-4">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-3xl font-black text-center mb-12">Seller FAQ</h2>
 <div className="space-y-3">
 {FAQS.map((faq, i) => (
 <details key={i} className="bg-card border border-border rounded-xl group">
 <summary className="flex justify-between items-center p-5 cursor-pointer text-foreground font-semibold text-sm hover:text-primary transition-colors list-none">
 {faq.q}
 <span className="text-muted-foreground group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
 </summary>
 <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
 {faq.a}
 </div>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/* Final CTA */}
 <section className="py-20 px-4 bg-primary text-primary-foreground">
 <div className="max-w-3xl mx-auto text-center">
  <h2 className="text-3xl font-black mb-4">Give Buyers Something They Can Check.</h2>
 <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
  Share a dated verification record, disclose the identifier, and encourage buyers to confirm it in person. Your first 2 verifications are free.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" variant="secondary" className="font-bold text-base px-8 py-6">
 <Link to="/verify">Verify Your Item Now — Free</Link>
 </Button>
 <Button size="lg" variant="outline" className="font-bold text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
 onClick={() => document.getElementById('seller-pricing')?.scrollIntoView({ behavior: 'smooth' })}>
 See Seller Plans
 </Button>
 </div>
 </div>
 </section>

 {/* Noscript */}
 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
 <h1>SafeOrStolen for Sellers - Prove Items Are Legitimate, Sell Faster</h1>
 <p>Verify your items before listing on any marketplace. SafeOrStolen checks IMEI, VIN, and serial numbers against its own reports, public web results, and AI analysis. Get shareable "Verified Safe" certificates that instill buyer confidence.</p>
 <p>Pricing: $10/month unlimited — includes verifications, badges, seller profile, and PDF certificates. Cancel anytime.</p>
 </div>
 </noscript>
 </div>
 </>
 );
}
