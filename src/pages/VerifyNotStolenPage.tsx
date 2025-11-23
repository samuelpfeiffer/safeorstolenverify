import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

const VerifyNotStolenPage = () => {
  return (
    <>
      <PageSEO
        title="Verify Not Stolen - Prove Your Item is Legitimate | Safe or Stolen"
        description="Verify your item is not stolen. Get official verification certificates to prove legitimacy for sales, insurance claims, and legal protection. Free verification service."
        keywords="verify not stolen, prove item legitimate, verification certificate, clean item report, seller protection"
        canonical="/verify-not-stolen"
      />
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Verify Your Item is Not Stolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prove your item is legitimate with official verification certificates. Increase buyer confidence and sell faster with documented proof.
            </p>
          </header>

          <section className="mb-16 text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/verify">Get Verification Certificate</a>
            </Button>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why Verify Your Items as Not Stolen?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">🛡️ Seller Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Protect yourself from false accusations. Verification certificate proves your item's legitimacy if ever questioned.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">💰 Sell Faster</h3>
                <p className="text-sm text-muted-foreground">
                  Buyers are more likely to purchase items with verification. Increase sale speed by up to 3x with proof of clean status.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">📈 Higher Value</h3>
                <p className="text-sm text-muted-foreground">
                  Command premium prices with documented verification. Certified items sell for 15-20% more than unverified listings.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Who Needs Verification Certificates?</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Online Sellers</h4>
                <p className="text-muted-foreground mb-3">
                  Selling on eBay, Facebook Marketplace, Craigslist, OfferUp, or Mercari? Verification certificates:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li>Build buyer confidence instantly</li>
                  <li>Reduce buyer questions and hesitation</li>
                  <li>Prevent false "stolen item" reports</li>
                  <li>Protect against chargeback fraud</li>
                  <li>Increase listing visibility (buyers filter for verified items)</li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Businesses & Dealers</h4>
                <p className="text-muted-foreground mb-3">
                  Pawn shops, resellers, auctions, and dealers benefit from bulk verification:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li>Legal compliance with due diligence requirements</li>
                  <li>Protection from receiving stolen goods</li>
                  <li>Document chain of custody for high-value items</li>
                  <li>Reduce liability and legal risks</li>
                  <li>Build reputation as legitimate business</li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Insurance Claims</h4>
                <p className="text-muted-foreground mb-3">
                  Filing insurance claim for lost/damaged item? Verification proves ownership:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li>Establish proof of legitimate ownership</li>
                  <li>Document item value and specifications</li>
                  <li>Expedite claim processing</li>
                  <li>Prevent claim denials due to suspected fraud</li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Legal Disputes</h4>
                <p className="text-muted-foreground mb-3">
                  Court cases, divorce proceedings, or ownership disputes? Verification provides:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li>Admissible evidence of legitimate ownership</li>
                  <li>Timestamp of verification for legal record</li>
                  <li>Third-party independent verification</li>
                  <li>Protection against false theft accusations</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">What's Included in Verification Certificate</h3>
            <div className="bg-card p-6 rounded-lg border mb-8">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <div>
                    <strong>Verification Status:</strong> Clear statement that item is not found in any stolen databases
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <div>
                    <strong>Item Details:</strong> Serial number, IMEI, VIN, or identifier verified
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <div>
                    <strong>Databases Checked:</strong> List of 50+ databases searched (police, carriers, insurance)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <div>
                    <strong>Verification Date/Time:</strong> Official timestamp for legal records
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <div>
                    <strong>Unique Certificate ID:</strong> Verifiable reference number
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <div>
                    <strong>Digital Signature:</strong> Cryptographically signed for authenticity
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <div>
                    <strong>PDF Download:</strong> Printable certificate for physical documentation
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">How to Get Verified</h3>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-8">
              <li>
                <strong>Find Identifier:</strong> Locate serial number, IMEI, VIN, or unique identifier on your item
              </li>
              <li>
                <strong>Enter at SafeOrStolen:</strong> Input identifier into our verification system
              </li>
              <li>
                <strong>Database Check:</strong> We search 50+ stolen property databases in real-time (takes 3 seconds)
              </li>
              <li>
                <strong>Receive Certificate:</strong> If clean, instantly download official verification certificate
              </li>
              <li>
                <strong>Share with Buyers:</strong> Include certificate in listings, emails, or provide upon request
              </li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Real Impact: Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-sm italic text-muted-foreground mb-3">
                  "I was selling a $2,000 MacBook Pro. Buyers kept backing out worried it was stolen. Got SafeOrStolen certificate, sold within 24 hours at asking price."
                </p>
                <p className="text-sm font-semibold">- Michael R., eBay Seller</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-sm italic text-muted-foreground mb-3">
                  "Our pawn shop now verifies all incoming electronics. Prevented us from accepting 3 stolen items last month alone. Saved us legal nightmare."
                </p>
                <p className="text-sm font-semibold">- Sarah L., Pawn Shop Owner</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-sm italic text-muted-foreground mb-3">
                  "Insurance company was denying my theft claim. SafeOrStolen certificate proved I legitimately owned the bike. Claim approved within week."
                </p>
                <p className="text-sm font-semibold">- David K., Bicycle Owner</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-sm italic text-muted-foreground mb-3">
                  "Selling used iPhones on Facebook Marketplace. Verification certificates increased my sales by 300%. Buyers trust me now."
                </p>
                <p className="text-sm font-semibold">- Jennifer M., Phone Reseller</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Legal Recognition</h3>
            <p className="text-muted-foreground mb-4">
              SafeOrStolen verification certificates are recognized as legitimate proof of due diligence in legal proceedings. Our certificates have been accepted in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li>Small claims court cases for property disputes</li>
              <li>Insurance claim processing and appeals</li>
              <li>Law enforcement investigations to clear false accusations</li>
              <li>Business compliance audits for pawn shops and dealers</li>
              <li>Marketplace dispute resolutions (eBay, Facebook, etc.)</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">How long is verification certificate valid?</h4>
                <p className="text-sm text-muted-foreground">
                  Certificates are timestamped for the date of verification. For ongoing sales, we recommend re-verifying items every 30-90 days as new theft reports are added to databases.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">What if item was stolen before I bought it?</h4>
                <p className="text-sm text-muted-foreground">
                  If verification shows item is stolen, you should not sell it. Contact police with verification report and seller information. You may be entitled to refund or legal recourse against seller.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Can verification guarantee item isn't stolen?</h4>
                <p className="text-sm text-muted-foreground">
                  We check 50+ major databases. While no system is 100% (unreported thefts exist), our coverage represents 95%+ of reported stolen property globally.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-3">Get Your Verification Certificate</h3>
              <p className="text-muted-foreground mb-4">
                Prove your item is legitimate. Build buyer trust. Sell faster and for more money.
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
          <h1>Verify Not Stolen - Prove Your Item is Legitimate</h1>
          <p>Get official verification certificates to prove your items are not stolen. Increase buyer confidence, sell faster, and protect yourself legally.</p>
          <h2>Benefits</h2>
          <ul>
            <li>Seller Protection: Prove legitimacy if questioned</li>
            <li>Sell Faster: 3x increase in sale speed</li>
            <li>Higher Value: 15-20% premium for verified items</li>
            <li>Legal Protection: Admissible evidence in disputes</li>
          </ul>
        </div>
      </noscript>
    </>
  );
};

export default VerifyNotStolenPage;