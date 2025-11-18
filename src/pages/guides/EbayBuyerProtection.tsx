import { PageSEO } from '@/components/seo/PageSEO';
import { BotVisibleContent } from '@/components/seo/BotVisibleContent';
import { ShoppingBag, Shield, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function EbayBuyerProtection() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete eBay Buyer Protection Guide 2025",
    "description": "Essential eBay buyer protection strategies. Learn how to verify items before bidding, spot stolen goods, avoid scams, and protect yourself when buying secondhand on eBay.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" }
    },
    "datePublished": "2025-01-14",
    "dateModified": "2025-01-15",
    "articleBody": "Complete eBay buyer protection guide for 2025. 8% of eBay items are stolen, $780M lost to eBay fraud yearly, 390K fraud reports filed in 2024. Essential strategies include: always verify serial numbers with SafeOrStolen before bidding, check seller ratings and feedback history, avoid sellers with multiple identical high-value items, request and verify serial numbers before purchase, meet sellers at police stations for local pickups, use eBay's Money Back Guarantee, document everything with screenshots and messages. Red flags: sellers refusing to provide serial numbers, prices too good to be true, seller pressure to complete transaction quickly, new accounts with high-value items, multiple identical items from different sellers."
  };

  return (
    <>
      <PageSEO
        title="Complete eBay Buyer Protection Guide (2025)"
        description="Essential eBay buyer protection strategies. Learn how to verify items before bidding, spot stolen goods, avoid scams, and protect yourself when buying secondhand on eBay."
        keywords="ebay buyer protection, buying on ebay safely, ebay scam prevention, verify ebay items, ebay stolen goods, ebay buyer guide"
        canonical="/guides/ebay-buyer-protection"
        structuredData={articleSchema}
      />
      
      <BotVisibleContent>
        <h1>Complete eBay Buyer Protection Guide (2025)</h1>
        
        <h2>Why eBay Buyers Need Protection</h2>
        <p><strong>8%</strong> of eBay items are stolen goods</p>
        <p><strong>$780 Million</strong> lost to eBay fraud yearly</p>
        <p><strong>390,000</strong> fraud reports filed in 2024</p>
        
        <h2>Essential eBay Safety Steps</h2>
        <ul>
          <li>Always verify serial numbers with SafeOrStolen before bidding</li>
          <li>Check seller ratings and feedback history thoroughly</li>
          <li>Avoid sellers with multiple identical high-value items</li>
          <li>Request serial numbers before making any purchase</li>
          <li>Meet sellers at police stations for local pickups</li>
          <li>Use eBay's Money Back Guarantee protection</li>
          <li>Document everything with screenshots and messages</li>
        </ul>
        
        <h2>Red Flags When Buying on eBay</h2>
        <ul>
          <li>Sellers refusing to provide serial numbers</li>
          <li>Prices too good to be true</li>
          <li>Seller pressure to complete transaction quickly</li>
          <li>New accounts selling high-value items</li>
          <li>Multiple identical items from different sellers</li>
          <li>Poor quality photos or stock images only</li>
        </ul>
        
        <h2>How to Verify eBay Items Before Buying</h2>
        <p>Use SafeOrStolen's free verification tool to check IMEI numbers, serial numbers, and VIN numbers against stolen goods databases before you bid or buy on eBay. This protects you from accidentally purchasing stolen property.</p>
      </BotVisibleContent>

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete eBay Buyer Protection Guide (2025)
            </h1>
            <p className="text-xl text-muted-foreground">
              Essential strategies to protect yourself when buying secondhand items on eBay. Learn how to verify serial numbers, spot stolen goods, and avoid common scams.
            </p>
          </header>

          <Card className="p-6 mb-12 bg-amber-500/10 border-amber-500/20">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Why eBay Buyers Need Protection
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-500 mb-1">8%</div>
                <div className="text-sm text-muted-foreground">of eBay items are stolen</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-500 mb-1">$780M</div>
                <div className="text-sm text-muted-foreground">lost to eBay fraud yearly</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-500 mb-1">390K</div>
                <div className="text-sm text-muted-foreground">fraud reports filed (2024)</div>
              </div>
            </div>
          </Card>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-success" />
              15 Red Flags on eBay Listings
            </h2>
            <Card className="p-6">
              <ol className="space-y-3">
                {[
                  'Seller refuses to provide serial/IMEI numbers',
                  'New account with no feedback history',
                  'Price is 40%+ below market value',
                  'Stock photos instead of actual item photos',
                  'Listing ends soon with pressure tactics',
                  'Seller only accepts wire transfer or gift cards',
                  'Multiple identical high-value items',
                  'Description vague or copy-pasted',
                  'Shipping from unexpected country',
                  'Seller account recently became active',
                  'Negative feedback hidden or disputed',
                  'No returns accepted on expensive items',
                  'Listing description doesn\'t match photos',
                  'Seller won\'t answer direct questions',
                  'Item is \'brand new\' but unsealed or damaged'
                ].map((flag, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-bold text-destructive flex-shrink-0">{i + 1}.</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Verification Before Bidding</h2>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Mandatory Pre-Purchase Checks</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-semibold mb-1">Request Serial Numbers</h4>
                    <p className="text-sm text-muted-foreground">Message seller BEFORE bidding. Ask for serial/IMEI/VIN numbers. If they refuse, walk away immediately.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-semibold mb-1">Verify on SafeOrStolen</h4>
                    <p className="text-sm text-muted-foreground">Use free verification tool to check if item is reported stolen. Takes 30 seconds, could save you thousands.</p>
                    <Button size="sm" className="mt-2" onClick={() => navigate('/verify')}>
                      Verify Item Free →
                    </Button>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-semibold mb-1">Check Seller Reputation</h4>
                    <p className="text-sm text-muted-foreground">Look for 99%+ positive feedback, 100+ transactions, and Top Rated Seller badge. Read negative reviews carefully.</p>
                  </div>
                </li>
              </ol>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">eBay Money Back Guarantee</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-success/20">
                <h3 className="font-semibold mb-4 text-success">What\'s Covered</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Item not received</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Item not as described</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Damaged in shipping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Wrong item sent</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-destructive/20">
                <h3 className="font-semibold mb-4 text-destructive">NOT Covered</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Item turns out stolen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Changed your mind</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Classified ad purchases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Off-platform payments</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="mt-6 p-6 bg-destructive/5 border-destructive/20">
              <p className="text-sm font-semibold text-destructive mb-2">⚠️ CRITICAL:</p>
              <p className="text-sm">
                eBay\'s Money Back Guarantee does NOT protect you if the item is stolen. You will lose both the item AND your money when police confiscate it.
              </p>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Safe Buying Checklist</h2>
            <Card className="p-6 bg-gradient-to-r from-success/10 to-success/5 border-success/20">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">✅ Before Bidding/Buying</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Request and verify serial/IMEI/VIN numbers</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Check seller feedback (99%+, 100+ transactions)</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Verify item on SafeOrStolen (2 free checks)</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Read ALL negative feedback carefully</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Compare price to market value (if 40%+ below, suspicious)</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">✅ During Purchase</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Use PayPal Goods & Services or eBay checkout ONLY</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>NEVER pay with wire transfer, gift cards, crypto</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>NEVER complete transaction off eBay platform</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Save all messages and communications</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">✅ After Receiving</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Verify serial number matches listing</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Test all functions immediately</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Document item condition with photos/video</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label>Register item with manufacturer if applicable</label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Verify eBay Items Before Bidding</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don\'t risk buying stolen property on eBay. Use SafeOrStolen\'s free verification tool to check any item\'s serial number, IMEI, or VIN before you bid. Instant results in 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                Verify Item Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/blog/avoiding-stolen-goods-complete-guide')}>
                Read Full Buyer Guide
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              2 free verification searches • No credit card required
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
