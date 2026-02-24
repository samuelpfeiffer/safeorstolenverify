import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { Shield, Zap, Building2, Star, Check } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const PLANS = [
  {
    id: 'single',
    name: 'Single Check',
    price: 0.99,
    period: 'one-time',
    description: 'Perfect for a one-time purchase',
    color: 'border-gray-600',
    headerBg: 'bg-gray-800',
    icon: <Shield className="w-6 h-6" />,
    features: [
      { text: '1 full verification', included: true },
      { text: 'All 100+ databases', included: true },
      { text: 'PDF certificate', included: true },
      { text: 'Shareable result link', included: true },
      { text: 'Check history', included: false },
      { text: 'API access', included: false },
      { text: 'Bulk uploads', included: false },
    ],
    cta: 'Buy Single Check',
    stripePriceId: 'price_1T3nfCGxnZLw8J7OwqSRSPel',
    highlighted: false,
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 4.99,
    period: '/month',
    description: '50 checks/month for regular buyers',
    color: 'border-gray-600',
    headerBg: 'bg-gray-800',
    icon: <Star className="w-6 h-6" />,
    features: [
      { text: '50 verifications/month', included: true },
      { text: 'All 100+ databases', included: true },
      { text: 'PDF certificates', included: true },
      { text: 'Shareable result links', included: true },
      { text: 'Check history (30 days)', included: true },
      { text: 'API access', included: false },
      { text: 'Bulk uploads', included: false },
    ],
    cta: 'Start Basic Plan',
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    period: '/month',
    description: 'Unlimited for power users & resellers',
    color: 'border-blue-500',
    headerBg: 'bg-blue-600',
    icon: <Zap className="w-6 h-6" />,
    badge: '⭐ Most Popular',
    features: [
      { text: 'Unlimited verifications', included: true },
      { text: 'All 100+ databases', included: true },
      { text: 'PDF certificates', included: true },
      { text: 'Shareable result links', included: true },
      { text: 'Full check history', included: true },
      { text: 'API access (100 calls/mo)', included: true },
      { text: 'Bulk uploads', included: false },
    ],
    cta: 'Go Pro',
    stripePriceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 49.99,
    period: '/month',
    description: 'For pawn shops, dealers & compliance',
    color: 'border-gray-600',
    headerBg: 'bg-gray-800',
    icon: <Building2 className="w-6 h-6" />,
    features: [
      { text: 'Unlimited verifications', included: true },
      { text: 'All 100+ databases', included: true },
      { text: 'Compliance PDF certificates', included: true },
      { text: 'Shareable result links', included: true },
      { text: 'Full check history + export', included: true },
      { text: 'Full API access (unlimited)', included: true },
      { text: 'Bulk CSV upload', included: true },
    ],
    extras: ['5 staff user seats', 'Audit trail for law enforcement', 'Dedicated support line', 'Multi-location management'],
    cta: 'Get Business Plan',
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    highlighted: false,
  },
];

const COMPARISON_ROWS = [
  { feature: 'Verifications per month', single: '1', basic: '50', pro: 'Unlimited', business: 'Unlimited' },
  { feature: 'Gun serial database (HotGunz)', single: '✓', basic: '✓', pro: '✓', business: '✓' },
  { feature: 'GSMA + carrier blacklists', single: '✓', basic: '✓', pro: '✓', business: '✓' },
  { feature: 'NICB vehicle database', single: '✓', basic: '✓', pro: '✓', business: '✓' },
  { feature: 'All 50 state databases', single: '✓', basic: '✓', pro: '✓', business: '✓' },
  { feature: 'PDF certificate', single: '✓', basic: '✓', pro: '✓', business: '✓' },
  { feature: 'Check history', single: '—', basic: '30 days', pro: 'Full', business: 'Full + export' },
  { feature: 'API access', single: '—', basic: '—', pro: '100 calls/mo', business: 'Unlimited' },
  { feature: 'Bulk CSV upload', single: '—', basic: '—', pro: '—', business: '✓' },
  { feature: 'Compliance audit trail', single: '—', basic: '—', pro: '—', business: '✓' },
  { feature: 'Staff user seats', single: '1', basic: '1', pro: '1', business: '5' },
  { feature: 'Support', single: 'Email', basic: 'Email', pro: 'Priority email', business: 'Dedicated phone' },
];

const FAQS = [
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime from your account dashboard. Your plan continues until the end of the billing period with no cancellation fees.' },
  { q: 'What counts as one verification?', a: 'Each time you submit a single IMEI, VIN, serial number, license plate, or firearm serial for checking counts as one verification. Viewing the same result again does not count.' },
  { q: 'Does the Single Check expire?', a: 'No — your single check credit never expires. Use it whenever you need it.' },
  { q: 'Is the Business plan right for my pawn shop?', a: "Yes. The Business plan is built for pawn shops, dealers, and resellers who need compliance-ready PDF certificates, unlimited checks, bulk processing, and a full audit trail for law enforcement requests." },
  { q: 'How accurate are the results?', a: 'We aggregate data from 100+ sources including FBI NCIC (via authorized partners), GSMA, NICB, HotGunz, BikeIndex, all 50 state databases, and carrier blacklists. Accuracy is approximately 99.2% for items currently in our aggregated databases.' },
  { q: 'Do you offer a free trial?', a: 'All new users get 2 completely free verifications — no credit card required. This lets you experience the full result quality before committing to a plan.' },
  { q: 'Can I upgrade or downgrade my plan?', a: "Yes. Upgrade takes effect immediately (you're charged the prorated difference). Downgrade takes effect at your next billing cycle." },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, AmEx, Discover) via Stripe. All payments are encrypted and PCI-compliant.' },
];

const PricingPage = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [annual, setAnnual] = useState(false);

  async function handleCheckout(plan: typeof PLANS[0]) {
    setLoading(plan.id);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: plan.stripePriceId,
          planName: plan.id,
          isSubscription: plan.id !== 'single',
          fingerprint: getOrCreateFingerprint(),
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <PageSEO
        title="Pricing - Stolen Item Verification Plans"
        description="CheckMEND charges $1.99+ per check. Carfax is $44.99/report. SafeOrStolen starts at $0.99 with 100+ databases. 2 free checks included."
        canonical="/pricing"
      />

      {/* Header */}
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Simple, Honest Pricing
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          CheckMEND charges $1.99+ per check. Carfax is $44.99/report.
          We give you 2 free checks and plans starting at $0.99 —
          with 100+ databases vs their single source.
        </p>

        {/* Annual toggle */}
        <div className="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-full px-4 py-2">
          <button
            onClick={() => setAnnual(false)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${!annual ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${annual ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Annual
            <span className="ml-2 bg-green-500 text-black text-xs font-black px-1.5 py-0.5 rounded-full">-20%</span>
          </button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {PLANS.map((plan) => {
          const displayPrice = annual && plan.period === '/month'
            ? (plan.price * 0.8).toFixed(2)
            : plan.price.toFixed(2);

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 ${plan.color} flex flex-col overflow-hidden ${plan.highlighted ? 'shadow-2xl shadow-blue-950/50 scale-[1.02]' : ''}`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 text-center bg-blue-600 text-white text-xs font-black py-1.5 uppercase tracking-wide">
                  {plan.badge}
                </div>
              )}

              <div className={`${plan.headerBg} ${plan.badge ? 'pt-8' : 'pt-5'} p-5 pb-4`}>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  {plan.icon}
                  <span className="font-bold">{plan.name}</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-white">${displayPrice}</span>
                  <span className="text-gray-400 text-sm ml-1">{plan.period}</span>
                </div>
                {annual && plan.period === '/month' && (
                  <div className="text-green-400 text-xs mt-1">
                    Save ${(plan.price * 0.2 * 12).toFixed(0)}/year
                  </div>
                )}
                <p className="text-gray-400 text-xs mt-2">{plan.description}</p>
              </div>

              <div className="p-5 flex-1 bg-gray-900/50 flex flex-col">
                <ul className="space-y-2.5 flex-1 mb-5">
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex items-start gap-2 text-xs ${f.included ? 'text-gray-200' : 'text-gray-600 line-through'}`}>
                      <span className={`mt-0.5 flex-shrink-0 ${f.included ? 'text-green-400' : 'text-gray-600'}`}>
                        {f.included ? '✓' : '✗'}
                      </span>
                      {f.text}
                    </li>
                  ))}
                  {plan.extras?.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-xs text-blue-300">
                      <span className="mt-0.5 text-blue-400 flex-shrink-0">+</span>
                      {e}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCheckout(plan)}
                  disabled={loading === plan.id}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-60 ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {loading === plan.id ? 'Loading...' : plan.cta}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Competitor comparison */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-black text-white mb-6 text-center">
            How We Compare to Alternatives
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 pr-4 text-gray-400 font-medium">Service</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">Cost</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">Databases</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">Asset Types</th>
                  <th className="text-center py-3 px-3 text-gray-400 font-medium">PDF Report</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'SafeOrStolen (Pro)', cost: '$9.99/mo unlimited', dbs: '100+', assets: 'All types', pdf: '✓', highlight: true },
                  { name: 'CheckMEND', cost: '$1.99–$4.99/check', dbs: 'Electronics only', assets: 'Phones/laptops', pdf: '✓', highlight: false },
                  { name: 'Carfax', cost: '$44.99/report', dbs: 'Vehicle only', assets: 'Cars/trucks', pdf: '✓', highlight: false },
                  { name: 'NICB VINCheck', cost: 'Free (limited)', dbs: '1 (NICB only)', assets: 'Vehicles only', pdf: '✗', highlight: false },
                  { name: 'BikeIndex', cost: 'Free (limited)', dbs: '1 (bikes only)', assets: 'Bicycles only', pdf: '✗', highlight: false },
                  { name: 'HotGunz', cost: 'Free (limited)', dbs: '1 (guns only)', assets: 'Firearms only', pdf: '✗', highlight: false },
                ].map((row) => (
                  <tr key={row.name} className={`border-b border-gray-800 ${row.highlight ? 'bg-blue-950/30' : ''}`}>
                    <td className={`py-3 pr-4 font-semibold ${row.highlight ? 'text-blue-400' : 'text-gray-300'}`}>
                      {row.name} {row.highlight && '← You'}
                    </td>
                    <td className="py-3 px-3 text-center text-gray-300">{row.cost}</td>
                    <td className="py-3 px-3 text-center text-gray-300">{row.dbs}</td>
                    <td className="py-3 px-3 text-center text-gray-300">{row.assets}</td>
                    <td className={`py-3 px-3 text-center font-bold ${row.pdf === '✓' ? 'text-green-400' : 'text-red-500'}`}>{row.pdf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Full comparison table */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-black text-white mb-6 text-center">Full Feature Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-700">
          <table className="w-full text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 text-gray-300 font-semibold">Feature</th>
                {['Single', 'Basic', 'Pro', 'Business'].map(h => (
                  <th key={h} className={`text-center py-3 px-3 font-semibold ${h === 'Pro' ? 'text-blue-400' : 'text-gray-300'}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-900/50'}>
                  <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                  {[row.single, row.basic, row.pro, row.business].map((val, j) => (
                    <td key={j} className={`py-3 px-3 text-center text-xs ${
                      val === '✓' ? 'text-green-400 font-bold text-base' :
                      val === '—' ? 'text-gray-600' :
                      j === 2 ? 'text-blue-300 font-semibold' : 'text-gray-300'
                    }`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-black text-white mb-8 text-center">Pricing FAQ</h2>
        <div className="space-y-3">
          {FAQS.map((item) => (
            <details key={item.q} className="bg-gray-900 border border-gray-700 rounded-xl group">
              <summary className="flex justify-between items-center p-5 cursor-pointer text-white font-semibold text-sm hover:text-blue-400 transition-colors list-none">
                {item.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed border-t border-gray-700 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pb-20 px-4">
        <p className="text-gray-400 mb-4">Not ready to commit? Start with 2 free verifications.</p>
        <Link
          to="/verify"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all"
        >
          <Shield className="w-5 h-5" />
          Start Free — No Credit Card
        </Link>
        <p className="text-gray-600 text-xs mt-3">🔒 Payments secured by Stripe · Cancel anytime · No hidden fees</p>
      </div>

      {/* JSON-LD Pricing Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "SafeOrStolen Verification Plans",
            "description": "Stolen item verification for guns, vehicles, phones, and more. Check IMEI, VIN, serial numbers and license plates against 100+ law enforcement databases.",
            "brand": { "@type": "Brand", "name": "SafeOrStolen" },
            "offers": [
              { "@type": "Offer", "name": "Single Check", "price": "0.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Basic Plan", "price": "4.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Pro Plan", "price": "9.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" },
              { "@type": "Offer", "name": "Business Plan", "price": "49.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://safeorstolen.com/pricing" }
            ]
          })
        }}
      />
    </div>
  );
};

export default PricingPage;
