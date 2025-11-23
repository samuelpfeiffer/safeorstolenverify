import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const AvoidBuyingStolenGoodsPage = () => {
  return (
    <>
      <PageSEO
        title="How to Avoid Buying Stolen Goods - Complete Guide | Safe or Stolen"
        description="Learn how to avoid buying stolen goods online and in-person. Expert tips for verifying items on eBay, Craigslist, Facebook Marketplace, and more."
        keywords="avoid stolen goods, avoid buying stolen items, verify used items, marketplace safety, stolen goods prevention"
        canonical="/avoid-buying-stolen-goods"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How to Avoid Buying Stolen Goods
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete guide to protecting yourself when buying used items. Learn warning signs, verification methods, and safe purchasing practices.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify">Verify Any Item - Free</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why This Matters</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Legal & Financial Risks</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Criminal Liability:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Felony charges for possession of stolen property</li>
                    <li>• "Ignorance is no defense" in most jurisdictions</li>
                    <li>• Permanent criminal record</li>
                    <li>• Jail time in serious cases</li>
                    <li>• Fines up to $10,000+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Financial Loss:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Police seize stolen goods with zero compensation</li>
                    <li>• Lose both the item AND your money</li>
                    <li>• No legal recourse against seller (they disappear)</li>
                    <li>• Cannot resell or return item</li>
                    <li>• Attorney fees if prosecuted</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">10 Essential Steps to Avoid Stolen Goods</h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">1. Always Verify Serial Numbers</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Most Important Step:</strong> Check serial numbers, IMEI, or VIN against stolen databases BEFORE purchasing.
                </p>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="text-sm font-semibold mb-2">How to Verify:</p>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Find serial number on item (don't trust seller's word)</li>
                    <li>2. Enter at SafeOrStolen.com for instant verification</li>
                    <li>3. Check results against 50+ stolen property databases</li>
                    <li>4. Only proceed if result is "clean"</li>
                  </ol>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">2. Meet Seller at Their Home</h3>
                <p className="text-muted-foreground mb-4">
                  Thieves avoid showing their real address. Legitimate sellers have no problem meeting at home.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 p-4 rounded">
                    <p className="font-semibold text-green-600 mb-2">✓ Good Signs:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Invites you to their residence</li>
                      <li>• Shows ID matching address</li>
                      <li>• Introduces you to family</li>
                      <li>• Has receipts/documentation at home</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 p-4 rounded">
                    <p className="font-semibold text-red-600 mb-2">✗ Red Flags:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Only meets in parking lots</li>
                      <li>• Refuses to give home address</li>
                      <li>• Changes meeting location repeatedly</li>
                      <li>• Wants to meet late at night</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">3. Demand Proof of Ownership</h3>
                <p className="text-muted-foreground mb-4">
                  Legitimate sellers can provide documentation. Thieves cannot.
                </p>
                <div className="bg-muted p-4 rounded">
                  <p className="font-semibold mb-2">Required Documentation:</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Original Receipt:</strong> From retailer showing purchase date and price</li>
                    <li>• <strong>ID Match:</strong> Name on receipt matches seller's ID</li>
                    <li>• <strong>Warranty/Registration:</strong> Papers in seller's name</li>
                    <li>• <strong>Photos:</strong> Pictures of item in their home/use (with timestamp)</li>
                    <li>• <strong>Title (vehicles):</strong> Clean title with seller's name</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">4. Check for Altered Serial Numbers</h3>
                <p className="text-muted-foreground mb-4">
                  Thieves often file off, scratch out, or damage serial numbers to prevent tracking.
                </p>
                <div className="space-y-3">
                  <div className="bg-red-500/10 p-4 rounded">
                    <p className="font-semibold text-red-600 mb-2">Immediate Walk Away Signs:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Serial number scratched, filed, or ground off</li>
                      <li>• Area around serial number damaged or tampered</li>
                      <li>• Different serial on multiple parts (VIN cloning)</li>
                      <li>• Stickers covering serial number locations</li>
                      <li>• Serial doesn't match format for brand/model</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Possession of item with altered serial numbers is illegal even if you didn't do it.
                  </p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">5. Research Fair Market Value</h3>
                <p className="text-muted-foreground mb-4">
                  If price seems too good to be true, it probably is. Thieves sell stolen goods at 30-70% below market value.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded">
                  <p className="font-semibold mb-2">Price Research Steps:</p>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Check eBay sold listings for actual selling prices</li>
                    <li>2. Compare to retailer prices (Amazon, Best Buy, etc.)</li>
                    <li>3. Account for condition (used items typically 40-60% of retail)</li>
                    <li>4. Be suspicious of prices below 30% of retail</li>
                    <li>5. Ask yourself: "Why would they sell this so cheap?"</li>
                  </ol>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">6. Ask Detailed Questions</h3>
                <p className="text-muted-foreground mb-4">
                  Legitimate owners can answer detailed questions. Thieves give vague or inconsistent answers.
                </p>
                <div className="bg-muted p-4 rounded">
                  <p className="font-semibold mb-2">Key Questions to Ask:</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>"When and where did you buy this?"</strong> (Check if story consistent)</li>
                    <li>• <strong>"Why are you selling?"</strong> (Vague answers suspicious)</li>
                    <li>• <strong>"What's the serial number?"</strong> (Before meeting—verify it)</li>
                    <li>• <strong>"Can I see the original box/papers?"</strong></li>
                    <li>• <strong>"Can you show me purchase receipt?"</strong></li>
                    <li>• <strong>"How long have you owned it?"</strong> (New items being resold immediately = red flag)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">7. Check Activation Locks</h3>
                <p className="text-muted-foreground mb-4">
                  For electronics: iCloud Lock (Apple), Google Account Lock (Android), or Microsoft Account Lock make devices unusable.
                </p>
                <div className="space-y-3">
                  <div className="bg-primary/10 p-4 rounded">
                    <p className="font-semibold mb-2">Before Buying - Test These:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• iPhone/iPad: Settings → [Name] → Sign Out (seller must do this)</li>
                      <li>• Android: Settings → Accounts → Remove all accounts</li>
                      <li>• Windows PC: Settings → Accounts → verify not organization-owned</li>
                      <li>• Mac: System Preferences → Apple ID → Sign Out</li>
                    </ul>
                  </div>
                  <p className="text-sm font-semibold text-red-600">
                    NEVER buy device that's activation locked—it's worthless and likely stolen.
                  </p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">8. Use Secure Payment Methods</h3>
                <p className="text-muted-foreground mb-4">
                  Payment method affects your ability to recover money if item is stolen.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 p-4 rounded">
                    <p className="font-semibold text-green-600 mb-2">✓ Safe Payment Methods:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• PayPal Goods & Services (buyer protection)</li>
                      <li>• Credit card (chargeback rights)</li>
                      <li>• Cash AFTER verification and documentation</li>
                      <li>• Escrow services for high-value items</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 p-4 rounded">
                    <p className="font-semibold text-red-600 mb-2">✗ Risky Payment Methods:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Wire transfer (no recovery)</li>
                      <li>• PayPal Friends & Family (no protection)</li>
                      <li>• Cryptocurrency (untraceable)</li>
                      <li>• Cash App/Venmo (minimal protection)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">9. Trust Your Instincts</h3>
                <p className="text-muted-foreground mb-4">
                  If something feels wrong, it probably is. Don't let "good deal" override caution.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded">
                  <p className="font-semibold mb-2">Warning Signs - Walk Away:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Seller is pushy or aggressive</li>
                    <li>• Story changes or doesn't make sense</li>
                    <li>• Selling multiple high-value items at once</li>
                    <li>• No online presence or brand new account</li>
                    <li>• Refuses any of your reasonable requests</li>
                    <li>• Your gut says "this seems off"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">10. Get Written Bill of Sale</h3>
                <p className="text-muted-foreground mb-4">
                  Always document the transaction with seller's information.
                </p>
                <div className="bg-muted p-4 rounded">
                  <p className="font-semibold mb-2">Bill of Sale Must Include:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Date and location of sale</li>
                    <li>• Seller's full name, address, phone, and ID number</li>
                    <li>• Your full name and contact info</li>
                    <li>• Complete item description with serial number</li>
                    <li>• Purchase price</li>
                    <li>• Both signatures</li>
                    <li>• "Seller warrants item is not stolen" clause</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Marketplace-Specific Tips</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Facebook Marketplace</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Check seller's profile age and activity</li>
                  <li>• Read reviews from previous buyers</li>
                  <li>• Use Facebook's built-in messaging (creates record)</li>
                  <li>• Report suspicious listings to Facebook</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Craigslist</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Meet in police station parking lot (many have safe zones)</li>
                  <li>• Bring a friend</li>
                  <li>• No profile to check—extra verification crucial</li>
                  <li>• Flag suspicious posts</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">eBay</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Check seller rating and history</li>
                  <li>• Read all return policy details</li>
                  <li>• Use eBay's buyer protection</li>
                  <li>• Report stolen items through eBay's VeRO program</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">OfferUp</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Check TruYou verification badge</li>
                  <li>• Read community reviews</li>
                  <li>• Use OfferUp's payment protection when available</li>
                  <li>• Meet in public OfferUp Community MeetUp Spot</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">What If You Already Bought Stolen Goods?</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li><strong>Stop Using Item Immediately:</strong> Further use can complicate legal situation</li>
                <li><strong>Verify Stolen Status:</strong> Confirm with SafeOrStolen or police department</li>
                <li><strong>Report to Police:</strong> File report with all seller information and documentation</li>
                <li><strong>Cooperate with Investigation:</strong> Provide everything requested by authorities</li>
                <li><strong>Contact Attorney:</strong> Get legal advice on your specific situation</li>
                <li><strong>Don't Try to Sell It:</strong> Attempting to resell makes legal situation worse</li>
              </ol>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-3">Verify Before You Buy - Always</h3>
              <p className="text-muted-foreground mb-4">
                Don't risk legal trouble and financial loss. Check any item against stolen databases free.
              </p>
              <a href="/verify" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Verify Item Now - Free
              </a>
            </div>
          </section>
        </main>
      </div>

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>How to Avoid Buying Stolen Goods - Complete Guide</h1>
          <p>10 essential steps: 1) Verify serial numbers 2) Meet at seller's home 3) Demand proof of ownership 4) Check altered serials 5) Research prices 6) Ask detailed questions 7) Check activation locks 8) Use secure payment 9) Trust instincts 10) Get bill of sale</p>
          <p>Possession of stolen property is criminal offense even if unknowing. Protect yourself with verification.</p>
        </div>
      </noscript>
    </>
  );
};

export default AvoidBuyingStolenGoodsPage;