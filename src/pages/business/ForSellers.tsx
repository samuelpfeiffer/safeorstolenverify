import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, ArrowRight, Star, DollarSign, Clock, FileText, Share2, BadgeCheck, TrendingUp, Users, Lock } from 'lucide-react';

const PRICING_TIERS = [
  {
    name: 'Per Listing',
    price: '$2.99',
    period: 'per item',
    description: 'Perfect for occasional sellers',
    features: [
      'One verified report',
      'Shareable verification link',
      'PDF certificate download',
      '90-day report validity',
      '"Verified Safe" badge',
    ],
    cta: 'Verify One Item',
    href: '/verify',
    highlighted: false,
  },
  {
    name: 'Seller Pro',
    price: '$19.99',
    period: '/month',
    description: 'For power sellers & resellers',
    features: [
      'Unlimited verifications',
      'Bulk CSV upload',
      'Custom branded reports',
      'Priority verification speed',
      'Seller analytics dashboard',
      '"Verified Seller" profile badge',
      'API access for automation',
    ],
    cta: 'Start Free Trial',
    href: '/pricing',
    highlighted: true,
  },
];

const SELLER_BENEFITS = [
  {
    icon: DollarSign,
    title: 'Command Higher Prices',
    description: 'Verified listings sell for 15–30% more than unverified ones. Buyers pay a premium for peace of mind.',
    stat: '+23%',
    statLabel: 'average price increase',
  },
  {
    icon: Clock,
    title: 'Sell 3x Faster',
    description: 'Buyers skip verified listings less. Fewer "is this stolen?" messages. More instant purchases.',
    stat: '3x',
    statLabel: 'faster sales',
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'A documented verification proves due diligence. If a buyer later claims the item was stolen, you have timestamped proof you checked.',
    stat: '100%',
    statLabel: 'documented diligence',
  },
  {
    icon: Users,
    title: 'Build Buyer Trust',
    description: 'Repeat buyers come back to sellers they trust. A "Verified Safe" badge tells them you\'re the real deal.',
    stat: '4.8★',
    statLabel: 'avg seller rating',
  },
];

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Verify Your Item',
    description: 'Enter the IMEI, VIN, or serial number of the item you\'re selling. Our AI auto-detects the identifier type.',
  },
  {
    step: '2',
    title: 'Get Your Certificate',
    description: 'We check 100+ databases in 3 seconds: FBI NCIC, GSMA, NICB, ATF, carrier blacklists, and all 50 state law enforcement systems.',
  },
  {
    step: '3',
    title: 'Share With Buyers',
    description: 'Download a PDF certificate or share a unique verification link. The last 4 digits of identifiers are shown for privacy.',
  },
  {
    step: '4',
    title: 'Close the Deal Faster',
    description: 'Buyers see verified proof, skip the interrogation, and pay full price. You sell faster with zero friction.',
  },
];

const MARKETPLACE_PLATFORMS = [
  'Facebook Marketplace', 'eBay', 'Craigslist', 'OfferUp', 'Mercari', 'Poshmark',
  'Swappa', 'Amazon Marketplace', 'Gun Broker', 'AutoTrader', 'CarGurus', 'BikeExchange'
];

const FAQS = [
  {
    q: 'How does the "Verified Safe" badge work?',
    a: 'After verification, you receive a unique link (e.g., safeorstolen.com/verify/abc123) and a downloadable PDF certificate. Add the link to your listing or include the badge image. Buyers can click to see the full verified report — no signup required.',
  },
  {
    q: 'What information does the buyer see?',
    a: 'Buyers see the verification result (CLEAN or FLAGGED), the Trust Score (0-100), which databases were checked, and the verification date. For privacy, only the last 4 digits of the identifier are shown. Your personal info is never shared.',
  },
  {
    q: 'Does verification guarantee my item isn\'t stolen?',
    a: 'No verification service can provide a 100% guarantee because not all thefts are reported to databases. However, checking 100+ databases provides the most comprehensive available verification and demonstrates documented due diligence.',
  },
  {
    q: 'Can I verify items in bulk?',
    a: 'Yes! Seller Pro members can upload a CSV file with multiple serial numbers and receive batch verification reports. Perfect for resellers, estate sale companies, and high-volume sellers.',
  },
  {
    q: 'How long are verification reports valid?',
    a: 'Reports are valid for 90 days from the verification date. After that, we recommend re-verifying to ensure databases haven\'t been updated with new theft reports.',
  },
  {
    q: 'What if my item comes back as FLAGGED?',
    a: 'Do not sell the item. Contact your local police with the verification report. If you purchased the item legitimately, file a police report and contact the original seller. Our report provides the evidence law enforcement needs.',
  },
];

export default function ForSellers() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SafeOrStolen Seller Verification",
      "serviceType": "Item Verification for Sellers",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen LLC",
        "url": "https://safeorstolen.com"
      },
      "areaServed": "United States",
      "description": "Verify items before selling to prove legitimacy, build buyer trust, and command higher prices. Get shareable certificates and Verified Safe badges for marketplace listings.",
      "offers": [
        { "@type": "Offer", "price": "2.99", "priceCurrency": "USD", "description": "Per-listing verification" },
        { "@type": "Offer", "price": "19.99", "priceCurrency": "USD", "description": "Monthly unlimited seller plan" }
      ],
      "dateModified": "2026-03-02"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "For Sellers", "item": "https://safeorstolen.com/for-sellers" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify Items Before Selling",
      "description": "Step-by-step guide to verifying your items and creating shareable verification certificates for buyers.",
      "step": HOW_IT_WORKS.map((s, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": s.title,
        "text": s.description
      })),
      "totalTime": "PT30S"
    }
  ];

  return (
    <>
      <PageSEO
        title="For Sellers - Prove Items Are Legitimate, Sell Faster | SafeOrStolen"
        description="Verify your items before listing to prove they're not stolen. Get shareable certificates, Verified Safe badges, and command 15-30% higher prices on any marketplace. $2.99/item or $19.99/mo unlimited."
        keywords="seller verification, prove item not stolen, verified listing badge, sell faster marketplace, verified seller certificate, marketplace seller tools, secondhand seller verification"
        canonical="/for-sellers"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="pt-24 pb-20 px-4 text-center" style={{ background: 'linear-gradient(180deg, hsl(var(--primary) / 0.08), hsl(var(--background)))' }}>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm mb-6 font-medium">
              <BadgeCheck className="w-4 h-4" />
              For Marketplace Sellers
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              Prove It's Not Stolen.
              <br />
              <span className="text-primary">Sell Faster. Get More.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Buyers increasingly demand proof before paying. A SafeOrStolen "Verified Safe" certificate attached to your listing <strong className="text-foreground">eliminates doubt, prevents lowball offers, and closes deals faster</strong> — on any marketplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="gap-2 font-bold text-base px-8 py-6">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Your Item — Free
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 font-bold text-base px-8 py-6">
                <Link to="/pricing">
                  See Seller Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              2 free verifications · No credit card · Works on all marketplaces
            </p>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-card border-y border-border">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { v: '15-30%', l: 'Higher Sale Price' },
              { v: '3x', l: 'Faster Sales' },
              { v: '3 sec', l: 'Verification Time' },
              { v: '100+', l: 'Databases Checked' },
            ].map(s => (
              <div key={s.l} className="text-center py-5 px-4">
                <div className="text-2xl font-black text-primary">{s.v}</div>
                <div className="text-muted-foreground text-xs mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Sellers Need This */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black mb-3">Why Smart Sellers Verify First</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                In 2026, informed buyers check before they buy. Sellers who provide verification proof win the sale — every time.
              </p>
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
            <p className="text-muted-foreground mb-8">
              Share your verification link or PDF certificate on any platform where you sell.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {MARKETPLACE_PLATFORMS.map(p => (
                <span key={p} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">Seller Pricing</h2>
              <p className="text-muted-foreground">Start with 2 free verifications. No credit card required.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {PRICING_TIERS.map(tier => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 border-2 ${
                    tier.highlighted
                      ? 'border-primary bg-primary/5 relative'
                      : 'border-border bg-background'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-xl font-black text-foreground mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-primary">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant={tier.highlighted ? 'default' : 'outline'} className="w-full font-bold">
                    <Link to={tier.href}>{tier.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-8">Trusted Data Sources</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['FBI NCIC', 'GSMA', 'NICB', 'ATF eTrace', 'BikeIndex', 'HotGunz', '50 State Police', 'Carrier Blacklists'].map(src => (
                <div key={src} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
                  {src}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">Seller FAQ</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-foreground font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-4">
              Stop Leaving Money on the Table.
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Verified listings sell faster and for more. Your first 2 verifications are free — prove your items are legitimate and close deals with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-bold text-base px-8 py-6">
                <Link to="/verify">Verify Your Item Now — Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/pricing">See All Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Noscript */}
        <noscript>
          <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>SafeOrStolen for Sellers - Prove Items Are Legitimate, Sell Faster</h1>
            <p>Verify your items before listing on any marketplace. SafeOrStolen checks IMEI, VIN, and serial numbers against 100+ law enforcement databases including FBI NCIC, GSMA, NICB, and ATF. Get shareable "Verified Safe" certificates that command 15-30% higher prices. Buyers trust verified sellers — sell faster with documented proof your items are clean.</p>
            <p>Pricing: $2.99 per listing or $19.99/month unlimited. Start with 2 free verifications, no credit card required. Works on Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark, and all other platforms.</p>
            <p>How it works: (1) Enter IMEI, VIN, or serial number. (2) We check 100+ databases in 3 seconds. (3) Download PDF certificate or share verification link. (4) Buyers see proof, pay full price, and close faster.</p>
            <h2>FAQ</h2>
            <p><strong>How does the Verified Safe badge work?</strong> After verification, you receive a unique shareable link and downloadable PDF. Add it to your listing. Buyers click to see the verified report — no signup required.</p>
            <p><strong>What information does the buyer see?</strong> Buyers see the verification result (CLEAN/FLAGGED), Trust Score, databases checked, and date. Only last 4 digits of identifiers shown for privacy.</p>
            <p><strong>Does verification guarantee my item isn't stolen?</strong> No service provides 100% guarantee. Checking 100+ databases demonstrates documented due diligence and provides the most comprehensive verification available.</p>
          </div>
        </noscript>
      </div>
    </>
  );
}
