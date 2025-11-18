import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Store, Shield, AlertTriangle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function PawnshopBuyingTips() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pawn Shop Buying Guide: How to Avoid Stolen Goods 2025",
    "description": "Complete guide to buying safely at pawn shops. Learn how pawn shops work, your legal rights, how to verify items aren't stolen, and essential tips for smart pawn shop purchases.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" }
    },
    "datePublished": "2025-01-14",
    "dateModified": "2025-01-15",
    "articleBody": "Pawn shop buying guide 2025. Estimates suggest 10-20% of pawn shop electronics may have questionable origins. Pawn shops are required by law to hold items for waiting period (30-90 days) before selling for police checks. However, not all police departments actively check inventories, thieves use fake IDs, serial numbers aren't always verified. Your legal protection: you're protected as innocent buyer IF pawn shop followed all laws, original owner can still reclaim if stolen, you may lose money even if legal, document everything for protection. Essential safety steps: always ask for serial number and verify with SafeOrStolen before purchase, request pawn shop's holding certificate or police clearance, inspect items thoroughly, ask about return policy, photograph serial number and receipt, shop at reputable established pawn shops only. Red flags: pawn shop refuses to provide serial number, pressure to buy immediately, price too good to be true, items look new but sold as used."
  };

  return (
    <>
      <PageSEO
        title="Pawn Shop Buying Guide: How to Avoid Stolen Goods (2025)"
        description="Complete guide to buying safely at pawn shops. Learn how pawn shops work, your legal rights, how to verify items aren't stolen, and essential tips for smart pawn shop purchases."
        canonical="https://safeorstolen.com/guides/pawnshop-buying-tips"
        image="https://safeorstolen.com/og-pawnshop-guide.png"
        keywords="pawn shop buying guide, pawn shop stolen goods, buying at pawn shops, pawn shop verification, pawn shop safety"
        structuredData={articleSchema}
      />
      
      <noscript>
        <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Pawn Shop Buying Guide: How to Avoid Stolen Goods</h1>
          <h2>The Pawn Shop Stolen Goods Reality</h2>
          <p>10-20% of pawn shop electronics may have questionable origins</p>
          <p>Not all police departments actively check pawn shop inventories</p>
          <p>Serial numbers aren't always verified against stolen databases</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Pawn Shop Buying Guide: How to Shop Smart & Safe
            </h1>
            <p className="text-xl text-muted-foreground">
              Pawn shops can have great deals, but they're also a major outlet for stolen goods. Here's what you need to know.
            </p>
          </div>

          {/* The Reality */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold mb-3">The Pawn Shop Stolen Goods Reality</h2>
                <p className="text-muted-foreground mb-4">
                  Pawn shops are <strong>required by law</strong> to hold items for a waiting period (usually 30-90 days) before selling, during which police can check for stolen goods. However:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Not all police departments actively check pawn shop inventories</li>
                  <li>• Thieves use fake IDs when pawning items</li>
                  <li>• Serial numbers aren't always verified against stolen databases</li>
                  <li>• Some pawn shops are more diligent than others</li>
                  <li>• Stolen goods slip through the system regularly</li>
                </ul>
                <p className="mt-4 font-semibold text-primary">
                  ⚠️ Estimates suggest 10-20% of pawn shop electronics may have questionable origins
                </p>
              </div>
            </div>
          </Card>

          {/* How Pawn Shops Work */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Store className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">How Pawn Shops Work (What Buyers Need to Know)</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">The Loan Process</h3>
                <p className="text-sm">Someone brings in an item, gets a loan (typically 30-60% of item value), and has 30-90 days to repay. If they don't repay, the shop sells the item.</p>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-foreground mb-2">Direct Purchases</h3>
                <p className="text-sm">Pawn shops also buy items outright. These bypass the waiting period and hit shelves faster - higher risk for stolen goods.</p>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-foreground mb-2">Police Hold Period</h3>
                <p className="text-sm">Most states require 30-90 day hold before resale. During this time, police can check against stolen property databases. In theory.</p>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-foreground mb-2">The Reality</h3>
                <p className="text-sm">Many jurisdictions lack resources to systematically check all pawn shop items. Small shops in rural areas get less oversight.</p>
              </div>
            </div>
          </Card>

          {/* Your Legal Rights */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Your Legal Rights & Protections</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                <h3 className="font-semibold text-green-500 mb-2">✅ What You CAN Expect</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Receipt showing serial number and description</li>
                  <li>• "As-is" sales (no warranty in most cases)</li>
                  <li>• Reasonable time to test items before leaving</li>
                  <li>• Proof the shop followed state holding requirements</li>
                </ul>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-500 mb-2">❌ What You CAN'T Expect</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Guarantee the item isn't stolen</li>
                  <li>• Return policy if it turns out to be stolen</li>
                  <li>• Legal protection from seizure by police</li>
                  <li>• Refund if original owner claims the item</li>
                </ul>
              </div>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm font-semibold text-primary">
                  ⚖️ Important: If you buy a stolen item from a pawn shop, police can seize it without compensating you, even if you have a receipt. The original owner has superior rights.
                </p>
              </div>
            </div>
          </Card>

          {/* 10 Tips for Safe Buying */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">10 Essential Tips for Pawn Shop Buyers</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold mb-2">Choose Reputable Pawn Shops</h3>
                  <p className="text-sm text-muted-foreground">Look for established shops with good BBB ratings. Avoid shops with reputations for shady dealings.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold mb-2">Always Get the Serial Number</h3>
                  <p className="text-sm text-muted-foreground">Before paying, write down the IMEI, VIN, or serial number. Check it yourself - don't just trust the shop.</p>
                  <Button 
                    size="sm" 
                    onClick={() => navigate('/verify')}
                    className="mt-2 bg-primary/10 hover:bg-primary/20 text-primary"
                  >
                    Verify Serial Number
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold mb-2">Ask About the Waiting Period</h3>
                  <p className="text-sm text-muted-foreground">Confirm the item completed the required police hold period. If not, it's higher risk.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold mb-2">Inspect for Signs of Theft</h3>
                  <p className="text-sm text-muted-foreground">Look for scratched-off serial numbers, removed identifying stickers, or forced-open battery compartments.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">5</div>
                <div>
                  <h3 className="font-semibold mb-2">Test Everything Thoroughly</h3>
                  <p className="text-sm text-muted-foreground">Power on, test all functions, check for activation locks (iPhones), verify not carrier-blacklisted.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">6</div>
                <div>
                  <h3 className="font-semibold mb-2">Get a Detailed Receipt</h3>
                  <p className="text-sm text-muted-foreground">Must include: shop name, date, item description, serial number, price paid, and employee name.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">7</div>
                <div>
                  <h3 className="font-semibold mb-2">Ask Where They Got It</h3>
                  <p className="text-sm text-muted-foreground">Was it pawned or purchased? How long has it been in inventory? Evasive answers = red flag.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">8</div>
                <div>
                  <h3 className="font-semibold mb-2">Compare Prices to Market Value</h3>
                  <p className="text-sm text-muted-foreground">If it's 50-70% below market value, ask why. Unrealistically low prices may indicate stolen goods.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">9</div>
                <div>
                  <h3 className="font-semibold mb-2">Avoid Shops That Don't ID Check</h3>
                  <p className="text-sm text-muted-foreground">Shops that don't verify IDs when buying items are more likely to accept stolen goods.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">10</div>
                <div>
                  <h3 className="font-semibold mb-2">Trust Your Instincts</h3>
                  <p className="text-sm text-muted-foreground">If the shop feels sketchy, the staff is defensive, or something seems off - walk away.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Red Flags */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-red-500" size={24} />
              <h2 className="text-2xl font-bold">Major Red Flags at Pawn Shops</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Won't Provide Serial Number</p>
                <p className="text-sm text-muted-foreground">This should never happen. Walk out immediately.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Serial Number Scratched/Altered</p>
                <p className="text-sm text-muted-foreground">Clear sign of stolen goods. Don't touch it.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Still Has Personal Data</p>
                <p className="text-sm text-muted-foreground">Phones with photos, contacts, logged-in accounts = likely stolen.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Activation Lock Enabled (iPhone)</p>
                <p className="text-sm text-muted-foreground">If Find My iPhone is locked, it's either stolen or useless.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 No Receipt or "Cash Only"</p>
                <p className="text-sm text-muted-foreground">Legitimate pawn shops provide receipts and accept cards.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 High Inventory of One Item Type</p>
                <p className="text-sm text-muted-foreground">50 iPhones on the shelf? Possible fence operation.</p>
              </div>
            </div>
          </Card>

          {/* What If You Buy Stolen */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">What Happens If You Unknowingly Buy Stolen Goods</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Even with a receipt from a legitimate pawn shop, you're not fully protected:
              </p>
              <ol className="space-y-2 ml-6 list-decimal">
                <li><strong>Police can seize the item</strong> if reported stolen, usually without compensating you</li>
                <li><strong>Original owner has superior claim</strong> - they get their property back</li>
                <li><strong>You may lose your money</strong> unless you can sue the pawn shop (difficult and expensive)</li>
                <li><strong>You could face questioning</strong> as part of the theft investigation</li>
              </ol>
              <div className="p-4 bg-primary/10 rounded-lg mt-4">
                <p className="font-semibold text-primary">
                  💰 Bottom Line: Verification costs $0.50. Losing a $500 phone costs $500. Always verify.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 text-center">
            <Shield className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-2xl font-bold mb-4">Verify Before You Buy</h2>
            <p className="text-muted-foreground mb-6">
              Don't risk buying stolen goods from pawn shops. Check serial numbers before making any purchase.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/verify')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Check Item Now - 2 Free Searches
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Instant results • 50M+ stolen records • Protect yourself legally
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
