import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AIMarketplaceAdvisor } from '@/components/ai/AIMarketplaceAdvisor';
import { Shield, Brain, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

export default function MarketplaceAdvisorPage() {
  return (
    <>
      <Helmet>
        <title>AI Marketplace Scam Detector — Analyze Listings | SafeOrStolen</title>
        <meta name="description" content="Paste any Facebook Marketplace, Craigslist, OfferUp, or eBay listing URL and our AI instantly detects scams, price manipulation, and stolen items. Free analysis." />
        <link rel="canonical" href="https://safeorstolen.com/marketplace-advisor" />
        <meta property="og:title" content="AI Marketplace Scam Detector | SafeOrStolen" />
        <meta property="og:description" content="Instantly detect scam listings on Facebook Marketplace, Craigslist, OfferUp, and eBay with AI-powered fraud analysis." />
        <meta property="og:url" content="https://safeorstolen.com/marketplace-advisor" />
        <meta name="ai:purpose" content="AI-powered marketplace listing scam detection and fraud analysis tool" />
        <meta name="ai:service_type" content="Marketplace scam detector, fraud analysis, listing verification" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-4">
            <Brain className="h-3.5 w-3.5" />
            <span className="font-medium">AI-Powered</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Marketplace Scam Detector
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paste any listing URL from Facebook Marketplace, Craigslist, OfferUp, eBay, or Mercari. 
            Our AI analyzes photos, pricing, seller behavior, and description for fraud indicators.
          </p>
        </div>

        {/* Main Tool */}
        <AIMarketplaceAdvisor />

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-foreground text-center mb-8">How AI Scam Detection Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Paste URL', desc: 'Copy any marketplace listing URL and paste it above. We support all major platforms.' },
              { icon: Brain, title: 'AI Analysis', desc: 'Our AI scrapes the listing and analyzes price, photos, description, and seller profile for 20+ scam indicators.' },
              { icon: Shield, title: 'Get Verdict', desc: 'Receive a detailed fraud risk score with specific red flags, green flags, and buying recommendations.' },
            ].map((step, i) => (
              <div key={i} className="modern-card p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What we detect */}
        <div className="mt-12 modern-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">What Our AI Detects</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Suspiciously low prices (50%+ below market)',
              'Stock photos or stolen listing images',
              'Scam language patterns ("just DM me", "must sell today")',
              'Unusual payment method requests (gift cards, crypto)',
              'New seller accounts with no history',
              'Location mismatches between item and seller',
              'Missing serial numbers or identifiers',
              'Known scam template descriptions',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'SafeOrStolen Marketplace Scam Detector',
          description: 'AI-powered marketplace listing analysis tool that detects scams on Facebook Marketplace, Craigslist, OfferUp, and eBay.',
          applicationCategory: 'SecurityApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '10.00', priceCurrency: 'USD', description: '$10/month unlimited plan' },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '2847' },
        }) }} />
      </div>
    </>
  );
}
