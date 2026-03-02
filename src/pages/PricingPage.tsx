import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { Shield, Zap, Check, ArrowRight } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { redirectToStripe } from '@/utils/stripeRedirect';

const FAQS = [
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel from your dashboard. Your plan continues until the end of the billing period — no fees.' },
  { q: 'What counts as one verification?', a: 'Each IMEI, VIN, serial number, plate, or firearm serial submitted counts as one check. Viewing the same result again is free.' },
  { q: 'How accurate are the results?', a: 'We check 100+ sources including FBI NCIC, GSMA, NICB, ATF, and all 50 US state databases. ~99.2% accuracy.' },
  { q: 'Do you offer a money-back guarantee?', a: 'Yes — 30-day full refund on all plans, no questions asked.' },
  { q: 'What payment methods do you accept?', a: 'Visa, Mastercard, AmEx, Discover, Apple Pay, and Google Pay via Stripe. All payments are encrypted and PCI-compliant.' },
  { q: 'Are you a seller or business?', a: 'We have specialized plans! Sellers can get verified badges from $2.99. Businesses get compliance tools from $49.99/mo. Visit /for-sellers or /for-businesses.' },
];

const PricingPage = () => {
  const [loading, setLoading] = useState(false);

  async function handleUpgrade() {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
          planName: 'Personal Plan',
          isSubscription: true,
          fingerprint: getOrCreateFingerprint(),
          redirectUrl: 'https://safeorstolen.com',
        },
        headers: user ? undefined : {},
      });
      if (error) throw new Error(error.message);
      if (data?.url) redirectToStripe(data.url);
    } catch {
      alert('Something went wrong. Please try again or email support@safeorstolen.com');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="Pricing — Free Stolen Item Checker | SafeOrStolen"
        description="Check if phones, cars, guns & electronics are stolen — free. 2 free verifications/month, then unlimited for $9.99/mo. 100+ databases. 3-second results. Cancel anytime."
        canonical="/pricing"
      />

      {/* Hero */}
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Simple, Honest Pricing
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Start free. Upgrade when you need unlimited. Cancel anytime.
        </p>
      </div>

      {/* Two cards */}
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* FREE */}
          <div className="rounded-2xl border-2 border-border bg-card flex flex-col p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Shield className="w-6 h-6" />
              <span className="font-bold text-lg">Free</span>
            </div>
            <div className="mb-1">
              <span className="text-5xl font-black text-foreground">$0</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">No credit card required</p>

            <ul className="space-y-3 flex-1 mb-6">
              {[
                '2 verifications/month',
                'All 6 item types',
                '100+ databases checked',
                '3-second results',
                'Basic support',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="/verify"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-center bg-muted hover:bg-muted/80 text-foreground transition-all block"
            >
              Start Free
            </Link>
          </div>

          {/* UNLIMITED */}
          <div className="relative rounded-2xl border-2 border-primary bg-card shadow-2xl shadow-primary/20 flex flex-col p-6 scale-[1.02]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
              ⭐ Most Popular
            </div>

            <div className="flex items-center gap-2 text-primary mb-4 mt-2">
              <Zap className="w-6 h-6" />
              <span className="font-bold text-lg">Unlimited</span>
            </div>
            <div className="mb-1">
              <span className="text-5xl font-black text-foreground">$9.99</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">7-day free trial included</p>

            <ul className="space-y-3 flex-1 mb-6">
              {[
                'Unlimited verifications',
                'All 6 item types',
                '100+ databases checked',
                '3-second results',
                'Save check history',
                'Share verification reports',
                'Verified seller badges',
                'Priority support',
                'Cancel anytime',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-primary hover:bg-primary/90 text-primary-foreground transition-all disabled:opacity-60"
            >
              {loading ? 'Loading...' : 'Try Free for 7 Days'}
            </button>
          </div>
        </div>

        {/* Value prop */}
        <div className="text-center mt-8 text-muted-foreground text-sm">
          🔒 30-day money-back guarantee · Secured by Stripe · No hidden fees
        </div>
      </div>

      {/* Competitor comparison */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-2xl font-black text-foreground mb-6 text-center">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-muted-foreground font-medium">Service</th>
                  <th className="text-center py-3 px-3 text-muted-foreground font-medium">Price</th>
                  <th className="text-center py-3 px-3 text-muted-foreground font-medium">Databases</th>
                  <th className="text-center py-3 px-3 text-muted-foreground font-medium">Item Types</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'SafeOrStolen', price: 'Free → $9.99/mo', dbs: '100+', types: 'All 6', hl: true },
                  { name: 'CheckMEND', price: '£7/check', dbs: 'UK only', types: 'Electronics', hl: false },
                  { name: 'Carfax', price: '$44.99/report', dbs: 'Vehicles', types: 'Cars only', hl: false },
                  { name: 'NICB VINCheck', price: 'Free (5/day)', dbs: '1', types: 'Vehicles', hl: false },
                  { name: 'HotGunz', price: 'Free (limited)', dbs: '1', types: 'Firearms', hl: false },
                ].map((r) => (
                  <tr key={r.name} className={`border-b border-border/50 ${r.hl ? 'bg-primary/5' : ''}`}>
                    <td className={`py-3 pr-4 font-semibold ${r.hl ? 'text-primary' : 'text-muted-foreground'}`}>
                      {r.name} {r.hl && '←'}
                    </td>
                    <td className="py-3 px-3 text-center text-muted-foreground">{r.price}</td>
                    <td className="py-3 px-3 text-center text-muted-foreground">{r.dbs}</td>
                    <td className="py-3 px-3 text-center text-muted-foreground">{r.types}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Audience links */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/for-sellers" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
            <h3 className="font-black text-lg text-foreground mb-2">🏷️ Selling Items?</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Get verified badges to prove items aren't stolen. Sell 3x faster and command higher prices.
            </p>
            <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Seller plans from $2.99 <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link to="/for-businesses" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
            <h3 className="font-black text-lg text-foreground mb-2">🏢 Pawn Shop or Dealer?</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Automate compliance with embeddable widget, API access, and audit-ready reports.
            </p>
            <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Business plans from $49.99/mo <ArrowRight className="w-4 h-4" />
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
        <p className="text-muted-foreground mb-4">Not ready to commit? Start with 2 free verifications.</p>
        <Link
          to="/verify"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-4 rounded-2xl text-lg transition-all"
        >
          <Shield className="w-5 h-5" />
          Verify Now — Free
        </Link>
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
            "description": "Check if phones, cars, guns & electronics are stolen. 100+ databases. 3-second results.",
            "brand": { "@type": "Brand", "name": "SafeOrStolen" },
            "offers": [
              { "@type": "Offer", "name": "Free Plan", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Unlimited Plan", "price": "9.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
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
  );
};

export default PricingPage;
