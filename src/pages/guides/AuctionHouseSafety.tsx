import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Gavel, AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function AuctionHouseSafety() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Auction House Buying Guide: How to Avoid Stolen Goods (2025)"
        description="Complete guide to buying safely at auction houses. Learn how to verify items aren't stolen, spot warning signs, and protect yourself at estate sales, storage auctions, and online auctions."
        canonical="https://safeorstolen.com/guides/auction-house-safety"
        image="https://safeorstolen.com/og-auction-guide.png"
        keywords="auction house safety, buying at auctions, stolen auction items, estate sale verification, storage unit auction safety"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Auction House Buyer's Safety Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Auctions can have great deals, but they're also a common outlet for stolen goods. Here's how to protect yourself.
            </p>
          </div>

          {/* Risk Assessment */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-orange-500 flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold mb-3">The Auction House Stolen Goods Problem</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Storage unit auctions may contain abandoned stolen property</li>
                  <li>• Estate sales sometimes unknowingly sell items that victims left at the deceased's home</li>
                  <li>• "As-is" sales provide legal cover for auction houses</li>
                  <li>• Limited time to inspect items before bidding</li>
                  <li>• Provenance (ownership history) is often undocumented</li>
                </ul>
                <p className="mt-4 font-semibold text-primary">
                  ⚠️ Industry estimates: 5-10% of high-value auction items may have questionable origins
                </p>
              </div>
            </div>
          </Card>

          {/* Types of Auctions */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Risk Levels by Auction Type</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-red-500">
                <h3 className="font-semibold text-red-500 mb-2">HIGH RISK: Storage Unit Auctions</h3>
                <p className="text-sm text-muted-foreground">
                  Often contain items from people who disappeared, were evicted, or worse. No way to verify original ownership. Minimal documentation.
                </p>
              </div>
              <div className="p-4 border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-500 mb-2">MEDIUM-HIGH RISK: Online Auctions (GovDeals, Police Auctions)</h3>
                <p className="text-sm text-muted-foreground">
                  May include seized property where ownership was never established. Government surplus can be safer, but verify everything.
                </p>
              </div>
              <div className="p-4 border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-500 mb-2">MEDIUM RISK: Estate Sales</h3>
                <p className="text-sm text-muted-foreground">
                  Usually legitimate, but deceased may have acquired items questionably. Professionals generally vet items, but not always.
                </p>
              </div>
              <div className="p-4 border-l-4 border-green-500">
                <h3 className="font-semibold text-green-500 mb-2">LOW-MEDIUM RISK: Reputable Auction Houses (Christie's, Sotheby's)</h3>
                <p className="text-sm text-muted-foreground">
                  Professional provenance research, but even major houses occasionally sell stolen art/antiques. Always verify serial numbers.
                </p>
              </div>
            </div>
          </Card>

          {/* Before You Bid */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Gavel className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Before You Bid: 8 Essential Steps</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold mb-2">Research the Auction House</h3>
                  <p className="text-sm text-muted-foreground">Check BBB ratings, reviews, and how long they've been in business. Avoid fly-by-night operations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold mb-2">Read the Terms & Conditions</h3>
                  <p className="text-sm text-muted-foreground">Look for "as-is" clauses and understand what protections (if any) you have. Most auctions have zero buyer protection.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold mb-2">Attend Preview Days</h3>
                  <p className="text-sm text-muted-foreground">Inspect items thoroughly. Take photos of serial numbers. Note any damage or signs of tampering.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">4</div>
                <div>
                  <h3 className="font-semibold mb-2">Verify Serial Numbers</h3>
                  <p className="text-sm text-muted-foreground">Use SafeOrStolen to check IMEI, VIN, or serial numbers before bidding. Don't wait until after you win.</p>
                  <Button 
                    size="sm" 
                    onClick={() => navigate('/verify')}
                    className="mt-2 bg-primary/10 hover:bg-primary/20 text-primary"
                  >
                    Check Serial Numbers
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">5</div>
                <div>
                  <h3 className="font-semibold mb-2">Ask for Provenance Documentation</h3>
                  <p className="text-sm text-muted-foreground">Request receipts, previous ownership records, or estate documentation. Legitimate auction houses should provide some history.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">6</div>
                <div>
                  <h3 className="font-semibold mb-2">Check Market Value</h3>
                  <p className="text-sm text-muted-foreground">If a $2,000 laptop starts at $100, ask why. Suspiciously low starting bids may indicate questionable origins.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">7</div>
                <div>
                  <h3 className="font-semibold mb-2">Be Wary of Lots with Multiple High-Value Items</h3>
                  <p className="text-sm text-muted-foreground">Boxes containing 5 iPhones, 3 laptops, and 10 watches? That's a red flag for bulk stolen goods.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">8</div>
                <div>
                  <h3 className="font-semibold mb-2">Talk to the Auctioneer</h3>
                  <p className="text-sm text-muted-foreground">Ask direct questions about item origins. Reputable auctioneers will be transparent. Evasive answers = walk away.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Warning Signs */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-red-500" size={24} />
              <h2 className="text-2xl font-bold">Red Flags at Auctions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 No Provenance Available</p>
                <p className="text-sm text-muted-foreground">"We don't know where it came from" is unacceptable for high-value items.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Serial Numbers Removed/Scratched</p>
                <p className="text-sm text-muted-foreground">Obvious sign of theft. Never bid on items with tampered serial numbers.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Items Still in Retail Packaging</p>
                <p className="text-sm text-muted-foreground">Sealed, new items at auctions? May be shoplifted goods or retail theft.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Auctioneer Won't Answer Questions</p>
                <p className="text-sm text-muted-foreground">Evasive or hostile responses to origin questions indicate problems.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Bulk Lots of Electronics</p>
                <p className="text-sm text-muted-foreground">Pallets of phones, laptops, or gaming consoles without documentation.</p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="font-semibold text-red-500 mb-1">🚩 Cash-Only Auctions</p>
                <p className="text-sm text-muted-foreground">Refusing credit cards or checks creates no paper trail. Major red flag.</p>
              </div>
            </div>
          </Card>

          {/* After Winning */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="text-green-500" size={24} />
              <h2 className="text-2xl font-bold">After Winning a Bid</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Get Detailed Receipt</p>
                  <p className="text-sm text-muted-foreground">Include: auction house name, date, item description, serial number, price paid, and lot number.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Re-Verify Serial Number</p>
                  <p className="text-sm text-muted-foreground">Check it again after pickup. Make sure the item you got matches what you inspected.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Document Everything</p>
                  <p className="text-sm text-muted-foreground">Take photos of the item, receipt, and serial numbers. Save auction listing screenshots.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Consider Resale Carefully</p>
                  <p className="text-sm text-muted-foreground">If you plan to resell, having auction documentation helps prove you're not the thief.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Legal Protection */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Your Legal Position</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Important:</strong> Buying stolen goods - even unknowingly at an auction - is illegal in most jurisdictions.
              </p>
              <p>
                <strong>Good Faith Purchase:</strong> Some states have "good faith purchaser" laws that may protect you IF you can prove:
              </p>
              <ul className="ml-6 space-y-1">
                <li>• You didn't know the item was stolen</li>
                <li>• You paid fair market value</li>
                <li>• You have documentation (receipts, auction records)</li>
                <li>• You took reasonable steps to verify legitimacy</li>
              </ul>
              <p>
                <strong>Reality:</strong> Even with protection, the item will likely be seized and returned to the original owner. You'll lose your money.
              </p>
              <div className="p-4 bg-primary/10 rounded-lg mt-4">
                <p className="text-primary font-semibold">
                  💡 Prevention is cheaper than legal defense. Always verify before bidding.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 text-center">
            <Gavel className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-2xl font-bold mb-4">Verify Before You Bid</h2>
            <p className="text-muted-foreground mb-6">
              Don't risk buying stolen goods at auction. Check serial numbers during preview days before committing to a bid.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/verify')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Check Item Now - 2 Free Searches
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Instant verification • 50M+ stolen records • Protect your investment
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
