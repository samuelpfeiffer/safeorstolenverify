import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { Shield, Zap, Building2, Star, Check, Users, Store, Briefcase, BadgeCheck, Crown, Rocket } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/* ─── plan definitions ─── */

const BUYER_PLANS = [
  {
    id: 'single',
    name: 'Single Check',
    price: 0.99,
    period: 'one-time',
    description: 'Perfect for a one-time purchase',
    icon: <Shield className="w-6 h-6" />,
    features: [
      '1 full verification',
      'All 100+ databases',
      'PDF certificate',
      'Shareable result link',
    ],
    cta: 'Buy Single Check',
    planName: 'Single Verification',
    stripePriceId: 'price_1T3nfCGxnZLw8J7OwqSRSPel',
    isSubscription: false,
    highlighted: false,
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 4.99,
    period: '/month',
    description: '50 checks/month for regular buyers',
    icon: <Star className="w-6 h-6" />,
    features: [
      '50 verifications/month',
      'All 100+ databases',
      'PDF certificates',
      '30-day check history',
    ],
    cta: 'Start Basic Plan',
    planName: 'Starter Plan',
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    isSubscription: true,
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    period: '/month',
    description: 'Unlimited for power users & resellers',
    icon: <Zap className="w-6 h-6" />,
    badge: '⭐ Most Popular',
    features: [
      'Unlimited verifications',
      'All 100+ databases',
      'PDF certificates',
      'Full check history',
      'API access (100 calls/mo)',
    ],
    cta: 'Go Pro',
    planName: 'Personal Plan',
    stripePriceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
    isSubscription: true,
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 49.99,
    period: '/month',
    description: 'For pawn shops, dealers & compliance',
    icon: <Building2 className="w-6 h-6" />,
    features: [
      'Unlimited verifications',
      'Compliance PDF certificates',
      'Full API access (unlimited)',
      'Bulk CSV upload',
      '5 staff seats',
      'Audit trail',
    ],
    cta: 'Get Business Plan',
    planName: 'Professional Plan',
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    isSubscription: true,
    highlighted: false,
  },
];

const SELLER_PLANS = [
  {
    id: 'seller-listing',
    name: 'Per-Listing',
    price: 2.99,
    period: 'per listing',
    description: 'Verify one item & get a shareable badge',
    icon: <BadgeCheck className="w-6 h-6" />,
    features: [
      '1 verified badge',
      'Shareable verification report',
      'QR code for in-person sales',
      'Valid for 90 days',
    ],
    cta: 'Get Verified Badge — $2.99',
    planName: 'Seller Per-Listing',
    stripePriceId: undefined,
    isSubscription: false,
    highlighted: false,
  },
  {
    id: 'seller-monthly',
    name: 'Verified Seller',
    price: 19.99,
    period: '/month',
    description: 'Unlimited badges + sell faster',
    icon: <Crown className="w-6 h-6" />,
    badge: '💰 Best Value',
    features: [
      'Unlimited verified badges',
      'Unlimited verifications',
      'Shareable reports',
      'QR codes for in-person',
      'Seller profile page',
      'Cancel anytime',
    ],
    cta: 'Start Verified Seller — $19.99/mo',
    planName: 'Verified Seller',
    stripePriceId: undefined,
    isSubscription: true,
    highlighted: true,
  },
  {
    id: 'seller-premium',
    name: 'Premium Seller',
    price: 29.99,
    period: '/month',
    description: 'Featured badges + seller directory',
    icon: <Rocket className="w-6 h-6" />,
    features: [
      'Everything in Verified Seller',
      'Featured badge (gold)',
      'Seller directory listing',
      'Priority in search results',
      'Bulk verification tools',
    ],
    cta: 'Go Premium — $29.99/mo',
    planName: 'Premium Seller',
    stripePriceId: undefined,
    isSubscription: true,
    highlighted: false,
  },
];

const BUSINESS_PLANS = [
  {
    id: 'biz-starter',
    name: 'Starter',
    price: 49,
    period: '/month',
    description: 'Single location, unlimited checks',
    icon: <Store className="w-6 h-6" />,
    features: [
      'Unlimited verifications',
      'Basic embeddable widget',
      'Compliance reports (PDF)',
      'Email support',
      '1 staff seat',
    ],
    cta: 'Start Free Trial',
    planName: 'Professional Plan',
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    isSubscription: true,
    highlighted: false,
  },
  {
    id: 'biz-pro',
    name: 'Professional',
    price: 99,
    period: '/month',
    description: 'Multi-location + custom branding',
    icon: <Briefcase className="w-6 h-6" />,
    badge: '🏆 Most Popular',
    features: [
      'Everything in Starter',
      'Custom-branded widget',
      'Multi-location support',
      'Priority support',
      '10 staff seats',
      'API access',
    ],
    cta: 'Start Free Trial',
    planName: 'Business Professional',
    stripePriceId: undefined,
    isSubscription: true,
    highlighted: true,
  },
  {
    id: 'biz-enterprise',
    name: 'Enterprise',
    price: 499,
    period: '/month',
    description: 'White-label + dedicated support',
    icon: <Building2 className="w-6 h-6" />,
    features: [
      'Everything in Professional',
      'White-label solution',
      'Full API (unlimited)',
      '99.9% SLA',
      'Dedicated account manager',
      'Unlimited staff seats',
    ],
    cta: 'Contact Sales',
    planName: 'Enterprise Plan',
    stripePriceId: undefined,
    isSubscription: true,
    highlighted: false,
  },
];

const FAQS = [
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime from your account dashboard. Your plan continues until the end of the billing period with no cancellation fees.' },
  { q: 'What counts as one verification?', a: 'Each time you submit a single IMEI, VIN, serial number, license plate, or firearm serial for checking counts as one verification. Viewing the same result again does not count.' },
  { q: 'Do you offer a free trial?', a: 'All new users get 2 completely free verifications — no credit card required. Business plans include a 30-day free trial.' },
  { q: 'How accurate are the results?', a: 'We aggregate data from 100+ sources including FBI NCIC, GSMA, NICB, ATF, and all 50 state databases. Accuracy is approximately 99.2% for items in our databases.' },
  { q: 'Can I upgrade or downgrade?', a: "Yes. Upgrade takes effect immediately (prorated). Downgrade takes effect at your next billing cycle." },
  { q: "What's the Verified Seller badge?", a: "A digital certificate proving your item was checked against 100+ databases and found clean. Add the badge link to your marketplace listings to build buyer trust and sell 3x faster." },
  { q: 'Do you offer a money-back guarantee?', a: 'Yes — 30-day full refund on all plans, no questions asked.' },
  { q: 'What payment methods do you accept?', a: 'All major credit/debit cards (Visa, Mastercard, AmEx, Discover), Apple Pay, and Google Pay via Stripe. All payments are encrypted and PCI-compliant.' },
];

/* ─── component ─── */

const PricingPage = () => {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(plan: { id: string; planName: string; stripePriceId?: string; isSubscription: boolean }) {
    if (plan.id === 'biz-enterprise') {
      window.location.href = 'mailto:business@safeorstolen.com?subject=Enterprise%20Plan%20Inquiry';
      return;
    }

    setLoading(plan.id);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: plan.stripePriceId || undefined,
          planName: plan.planName,
          isSubscription: plan.isSubscription,
          fingerprint: getOrCreateFingerprint(),
          redirectUrl: 'https://safeorstolen.com',
        },
        headers: user ? undefined : {},
      });

      if (error) throw new Error(error.message);
      if (data?.url) window.location.href = data.url;
    } catch (err: any) {
      alert('Something went wrong. Please try again or email support@safeorstolen.com');
    } finally {
      setLoading(null);
    }
  }

  function PlanCard({ plan }: { plan: typeof BUYER_PLANS[0] }) {
    const isHighlighted = plan.highlighted;
    return (
      <div className={`relative rounded-2xl border-2 flex flex-col overflow-hidden transition-all ${
        isHighlighted ? 'border-primary shadow-2xl shadow-primary/20 scale-[1.02]' : 'border-border'
      }`}>
        {plan.badge && (
          <div className="absolute top-0 left-0 right-0 text-center bg-primary text-primary-foreground text-xs font-black py-1.5 uppercase tracking-wide">
            {plan.badge}
          </div>
        )}

        <div className={`${plan.badge ? 'pt-8' : 'pt-5'} p-5 pb-4 ${isHighlighted ? 'bg-primary/5' : 'bg-card'}`}>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            {plan.icon}
            <span className="font-bold">{plan.name}</span>
          </div>
          <div>
            <span className="text-4xl font-black text-foreground">${plan.price % 1 === 0 ? plan.price : plan.price.toFixed(2)}</span>
            <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
          </div>
          <p className="text-muted-foreground text-xs mt-2">{plan.description}</p>
        </div>

        <div className="p-5 flex-1 bg-muted/30 flex flex-col">
          <ul className="space-y-2.5 flex-1 mb-5">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                <Check className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleCheckout(plan)}
            disabled={loading === plan.id}
            className={`w-full py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-60 ${
              isHighlighted
                ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                : 'bg-muted hover:bg-muted/80 text-foreground'
            }`}
          >
            {loading === plan.id ? 'Loading...' : plan.cta}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="Pricing - Plans for Buyers, Sellers & Businesses"
        description="SafeOrStolen pricing for everyone. Buyers: 2 free checks, $0.99/check, $4.99/mo. Sellers: Verified badges from $2.99. Businesses: $49/mo unlimited compliance. 30-day money-back guarantee."
        canonical="/pricing"
      />

      {/* Header */}
      <div className="text-center pt-16 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Simple, Honest Pricing
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
          Plans for buyers, sellers, and businesses. Start free, upgrade when you need more.
        </p>
        <p className="text-muted-foreground/70 text-sm">
          🔒 30-day money-back guarantee · Cancel anytime · No hidden fees
        </p>
      </div>

      {/* Audience Tabs */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <Tabs defaultValue="buyers" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-10 h-auto">
            <TabsTrigger value="buyers" className="flex items-center gap-2 py-3 text-sm font-bold">
              <Users className="w-4 h-4" />
              For Buyers
            </TabsTrigger>
            <TabsTrigger value="sellers" className="flex items-center gap-2 py-3 text-sm font-bold">
              <BadgeCheck className="w-4 h-4" />
              For Sellers
            </TabsTrigger>
            <TabsTrigger value="businesses" className="flex items-center gap-2 py-3 text-sm font-bold">
              <Building2 className="w-4 h-4" />
              For Businesses
            </TabsTrigger>
          </TabsList>

          {/* BUYERS */}
          <TabsContent value="buyers">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2">Verify Before You Buy</h2>
              <p className="text-muted-foreground">Check phones, cars, guns, bikes, electronics & more against 100+ databases in 3 seconds.</p>
              <p className="text-primary font-semibold text-sm mt-2">✨ 2 free checks included — no credit card required</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {BUYER_PLANS.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
            </div>
          </TabsContent>

          {/* SELLERS */}
          <TabsContent value="sellers">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2">Verified Items Sell 3x Faster</h2>
              <p className="text-muted-foreground">Prove your items aren't stolen. Get verified badges, shareable reports, and command higher prices.</p>
              <p className="text-primary font-semibold text-sm mt-2">🏷️ Add "✓ Verified Safe" to your marketplace listings</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {SELLER_PLANS.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
            </div>
            <div className="text-center mt-8">
              <Link to="/for-sellers" className="text-primary hover:underline font-semibold text-sm">
                Learn more about selling verified items →
              </Link>
            </div>
          </TabsContent>

          {/* BUSINESSES */}
          <TabsContent value="businesses">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2">Automate Compliance & Protect Your Business</h2>
              <p className="text-muted-foreground">For pawn shops, car dealers, electronics resellers, FFLs, and auction houses.</p>
              <p className="text-primary font-semibold text-sm mt-2">🛡️ 30-day free trial — no credit card required</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {BUSINESS_PLANS.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
            </div>
            <div className="text-center mt-8">
              <Link to="/for-businesses" className="text-primary hover:underline font-semibold text-sm">
                Learn more about business solutions →
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Competitor comparison */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-black text-foreground mb-6 text-center">
            How We Compare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-muted-foreground font-medium">Service</th>
                  <th className="text-center py-3 px-3 text-muted-foreground font-medium">Cost</th>
                  <th className="text-center py-3 px-3 text-muted-foreground font-medium">Databases</th>
                  <th className="text-center py-3 px-3 text-muted-foreground font-medium">Asset Types</th>
                  <th className="text-center py-3 px-3 text-muted-foreground font-medium">Mobile App</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'SafeOrStolen', cost: 'From $0.99', dbs: '100+', assets: 'All types', app: '✓', highlight: true },
                  { name: 'CheckMEND', cost: '£7/check', dbs: 'UK-focused', assets: 'Electronics', app: '✗', highlight: false },
                  { name: 'Carfax', cost: '$44.99/report', dbs: 'Vehicle only', assets: 'Cars', app: '✗', highlight: false },
                  { name: 'NICB VINCheck', cost: 'Free (5/day)', dbs: '1', assets: 'Vehicles', app: '✗', highlight: false },
                  { name: 'HotGunz', cost: 'Free (limited)', dbs: '1', assets: 'Firearms', app: '✗', highlight: false },
                ].map((row) => (
                  <tr key={row.name} className={`border-b border-border/50 ${row.highlight ? 'bg-primary/5' : ''}`}>
                    <td className={`py-3 pr-4 font-semibold ${row.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                      {row.name} {row.highlight && '← You'}
                    </td>
                    <td className="py-3 px-3 text-center text-muted-foreground">{row.cost}</td>
                    <td className="py-3 px-3 text-center text-muted-foreground">{row.dbs}</td>
                    <td className="py-3 px-3 text-center text-muted-foreground">{row.assets}</td>
                    <td className={`py-3 px-3 text-center font-bold ${row.app === '✓' ? 'text-primary' : 'text-destructive'}`}>{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          Start Free — No Credit Card
        </Link>
        <p className="text-muted-foreground/50 text-xs mt-3">🔒 Payments secured by Stripe · Cancel anytime · No hidden fees</p>
      </div>

      {/* JSON-LD Pricing Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "SafeOrStolen Verification Plans",
            "description": "Stolen item verification for buyers, sellers, and businesses. Check IMEI, VIN, serial numbers against 100+ databases.",
            "brand": { "@type": "Brand", "name": "SafeOrStolen" },
            "offers": [
              { "@type": "Offer", "name": "Single Check", "price": "0.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Basic Plan", "price": "4.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Pro Plan", "price": "9.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Business Plan", "price": "49.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Verified Seller Badge", "price": "2.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Verified Seller Plan", "price": "19.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Business Starter", "price": "49.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Business Professional", "price": "99.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
            ]
          })
        }}
      />

      {/* FAQPage Schema */}
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
