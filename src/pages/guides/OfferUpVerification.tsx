import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function OfferUpVerification() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="OfferUp Safety Guide: How to Avoid Buying Stolen Items (2025)"
        description="Complete OfferUp buyer safety guide. Learn how to verify items aren't stolen, spot red flags, meet safely, and protect yourself when buying used goods on OfferUp."
        canonical="https://safeorstolen.com/guides/offerup-verification"
        image="https://safeorstolen.com/og-offerup-guide.png"
        keywords="OfferUp safety, OfferUp stolen items, OfferUp verification, buy safely on OfferUp, OfferUp red flags, OfferUp scams"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              OfferUp Safety Guide: How to Avoid Stolen Items
            </h1>
            <p className="text-xl text-muted-foreground">
              OfferUp is a popular local marketplace, but it's also a hotspot for stolen goods. Here's how to protect yourself.
            </p>
          </div>

          {/* Risk Overview */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold mb-3">Why OfferUp is High-Risk</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No mandatory ID verification for sellers</li>
                  <li>• Cash transactions leave no paper trail</li>
                  <li>• Local pickup means no shipping documentation</li>
                  <li>• Anonymous profiles are common</li>
                  <li>• Limited buyer protection compared to eBay</li>
                </ul>
                <p className="mt-4 font-semibold text-primary">
                  ⚠️ Studies show 15-25% of high-value electronics on local marketplaces may be stolen
                </p>
              </div>
            </div>
          </Card>

          {/* 10 Steps to Safe Buying */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">10 Steps to Buy Safely on OfferUp</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold mb-2">Check the Seller's Profile</h3>
                  <p className="text-sm text-muted-foreground">Look for verified badges, completed transactions, and reviews. Avoid brand new accounts or profiles with no history.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold mb-2">Read Reviews Carefully</h3>
                  <p className="text-sm text-muted-foreground">Check for patterns of negative feedback, complaints about authenticity, or mentions of "hot" goods. One bad review is a red flag.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold mb-2">Verify Serial Numbers BEFORE Meeting</h3>
                  <p className="text-sm text-muted-foreground">Ask the seller for the IMEI, VIN, or serial number in chat. Run it through SafeOrStolen before wasting time meeting.</p>
                  <Button 
                    size="sm" 
                    onClick={() => navigate('/verify')}
                    className="mt-2 bg-primary/10 hover:bg-primary/20 text-primary"
                  >
                    Check Serial Number
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold mb-2">Ask for Original Receipts/Packaging</h3>
                  <p className="text-sm text-muted-foreground">Legitimate sellers often have proof of purchase. Thieves rarely do. Original boxes with matching serial numbers are a good sign.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">5</div>
                <div>
                  <h3 className="font-semibold mb-2">Meet in Public, Safe Locations</h3>
                  <p className="text-sm text-muted-foreground">Use OfferUp's recommended Community MeetUp Spots - often police station parking lots. Never meet at their home or in isolated areas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">6</div>
                <div>
                  <h3 className="font-semibold mb-2">Inspect the Item Thoroughly</h3>
                  <p className="text-sm text-muted-foreground">Check serial numbers match what they sent. Test all functions. Look for signs of tampering, scratches near serial number areas, or removed stickers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">7</div>
                <div>
                  <h3 className="font-semibold mb-2">Use OfferUp's TruYou Verification</h3>
                  <p className="text-sm text-muted-foreground">Prioritize sellers who have completed TruYou identity verification. It's not perfect, but it adds a layer of accountability.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">8</div>
                <div>
                  <h3 className="font-semibold mb-2">Be Wary of "Too Good to Be True" Prices</h3>
                  <p className="text-sm text-muted-foreground">If an iPhone 15 Pro is listed for $300, it's likely stolen. Check current market value on eBay/Amazon before buying.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">9</div>
                <div>
                  <h3 className="font-semibold mb-2">Get a Written Receipt</h3>
                  <p className="text-sm text-muted-foreground">Even for cash deals, get a handwritten receipt with: date, item description, serial number, price, and both parties' names. Take a photo.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">10</div>
                <div>
                  <h3 className="font-semibold mb-2">Trust Your Gut</h3>
                  <p className="text-sm text-muted-foreground">If something feels off - they're pushy, won't provide serial numbers, or avoid questions - walk away. Better safe than sorry.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Red Flags */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-red-500" size={24} />
              <h2 className="text-2xl font-bold">Major Red Flags on OfferUp</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Refuses to Provide Serial Number</p>
                <p className="text-sm text-muted-foreground">Legitimate sellers have nothing to hide. No serial = no deal.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Selling Multiple High-Value Items</p>
                <p className="text-sm text-muted-foreground">Especially phones, laptops, or gaming consoles. Could indicate theft operation.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 No Original Packaging or Receipt</p>
                <p className="text-sm text-muted-foreground">"It's a gift" or "I threw away the box" are common excuses from thieves.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Insists on Cash Only</p>
                <p className="text-sm text-muted-foreground">While common on OfferUp, refusing ALL payment methods (PayPal, Venmo) is suspicious.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Profile Created Recently</p>
                <p className="text-sm text-muted-foreground">Account less than 1 month old selling expensive items = high risk.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Won't Meet in Public</p>
                <p className="text-sm text-muted-foreground">Insisting on meeting at their home or isolated areas. Always refuse.</p>
              </div>
            </div>
          </Card>

          {/* What to Check */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Physical Inspection Checklist</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Verify Serial Number Matches</p>
                  <p className="text-sm text-muted-foreground">Compare the physical serial to what they sent. Any mismatch = walk away immediately.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Check for Activation Lock (iPhones)</p>
                  <p className="text-sm text-muted-foreground">Have them sign out of iCloud in front of you. Locked phones are often stolen.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Look for Physical Damage</p>
                  <p className="text-sm text-muted-foreground">Scratches around serial number areas or removed stickers may indicate tampering.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Test All Functions</p>
                  <p className="text-sm text-muted-foreground">Power on, test buttons, camera, charging. Stolen phones may have hardware issues.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* OfferUp Protection */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">Understanding OfferUp's Protection</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Shipping Protection:</strong> OfferUp offers purchase protection for shipped items, but only if you pay through their app. Cash deals = zero protection.
              </p>
              <p>
                <strong>Local Pickup:</strong> No protection for in-person cash transactions. You're on your own if the item turns out to be stolen.
              </p>
              <p>
                <strong>TruYou Badge:</strong> Identity verification badge gives some accountability, but doesn't guarantee the item isn't stolen.
              </p>
              <div className="p-4 bg-primary/10 rounded-lg mt-4">
                <p className="text-primary font-semibold">
                  💡 Bottom Line: OfferUp's protection is limited. Always verify serial numbers yourself before buying.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 text-center">
            <Shield className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-2xl font-bold mb-4">Protect Yourself Before Buying</h2>
            <p className="text-muted-foreground mb-6">
              Don't risk buying stolen goods on OfferUp. Verify serial numbers before meeting sellers.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/verify')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Check Item Now - 2 Free Searches
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Instant verification • No credit card required • 50M+ stolen item records
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
