import React from 'react';
import { Shield, CheckCircle, Copy, Link as LinkIcon, ArrowRight, Star, Zap, Award, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';

const SellerBadgePage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Seller Verification Badge — Prove Items Are Legitimate | SafeOrStolen"
        description="Generate a free SafeOrStolen Verified badge for your marketplace listings. Prove your items are not stolen. Sell faster on Facebook Marketplace, eBay, Craigslist, OfferUp."
        canonical="/seller-badge"
      />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">SafeOrStolen Seller Verification Badge</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto speakable-summary">
            Prove your items are legitimate. Generate a free verification badge showing your item passed SafeOrStolen's 
            100+ database check. Add it to your Facebook Marketplace, eBay, Craigslist, or OfferUp listing. 
            Buyers trust verified sellers — sell faster and get full price.
          </p>
        </header>

        <section aria-label="How seller badges work">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Verify your item on SafeOrStolen (IMEI, VIN, serial number, or marketplace URL)</li>
            <li>If the item passes (CLEAN status), click "Generate Seller Badge"</li>
            <li>Get a shareable verification link and embeddable badge image</li>
            <li>Add the badge and link to your marketplace listing — buyers click to see the verified result</li>
          </ol>
        </section>

        <section aria-label="Badge preview" className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Badge Will Look Like This</h2>
          <div className="inline-block border-2 border-green-500 rounded-xl p-6 bg-card max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <p className="font-bold text-green-600 text-lg">✓ VERIFIED CLEAN</p>
                <p className="text-xs text-muted-foreground">by SafeOrStolen</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">This item was verified against SafeOrStolen's stolen-item reports, web results and AI analysis</p>
            <p className="text-xs text-muted-foreground">Checked: {new Date().toLocaleDateString()} | ID: vrf_a1b2c3d4</p>
            <p className="text-xs text-primary mt-2">Click to view full verification report →</p>
          </div>
        </section>

        <section aria-label="Badge benefits">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Sellers Use SafeOrStolen Badges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Sell 2x Faster", desc: "Verified listings get more responses because buyers trust them" },
              { icon: Star, title: "Get Full Price", desc: "Buyers lowball unverified sellers. A badge proves legitimacy and commands higher prices" },
              { icon: Award, title: "Stand Out", desc: "Most listings have zero verification. Your badge immediately differentiates you" },
              { icon: Scale, title: "Legal Protection", desc: "Documented proof you did due diligence before selling" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 p-4 rounded-lg border border-border bg-card">
                <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">Works on Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark, letgo, or any platform.</p>
        </section>

        <section aria-label="Call to action" className="text-center bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Get Your Badge Now</h2>
          <p className="text-muted-foreground mb-4">Verify your item first, then generate your badge instantly.</p>
          <Button asChild size="lg" className="button-glow">
            <Link to="/verify">Verify an Item → <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </section>

        <section aria-label="FAQ">
          <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">Is the seller badge free?</summary>
              <p className="text-sm text-muted-foreground mt-2">Your first 2 verifications are free, which includes badge generation. After that, $0.99/check or $10/month unlimited.</p>
            </details>
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">How do I add the badge to my listing?</summary>
              <p className="text-sm text-muted-foreground mt-2">After generating your badge, you'll get a shareable link (paste it in your listing description) and a badge image (download and add to your listing photos). Both link to your full verification report on SafeOrStolen.</p>
            </details>
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">Can buyers verify that my badge is real?</summary>
              <p className="text-sm text-muted-foreground mt-2">Yes. Every badge has a unique verification ID. When buyers click the badge or visit the link, they see the full verification report with timestamp, databases checked, and result — confirming the badge is authentic.</p>
            </details>
          </div>
        </section>
      </div>
    </>
  );
};

export default SellerBadgePage;
