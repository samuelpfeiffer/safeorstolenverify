import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, AlertTriangle, CheckCircle, XCircle, ShoppingBag, Facebook, DollarSign, Lock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketplaceSafetyPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Guide to Secondhand Marketplace Safety',
    description: 'Complete safety guide for buying on Facebook Marketplace, Craigslist, eBay, OfferUp. Avoid scams and stolen goods.',
    author: {
      '@type': 'Organization',
      name: 'SafeOrStolen'
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0]
  };

  return (
    <>
      <PageSEO
        title="Marketplace Safety Guide - Facebook, Craigslist, eBay, OfferUp | SafeOrStolen"
        description="Complete guide to buying safely on secondhand marketplaces. Avoid scams, verify items, and protect yourself on Facebook Marketplace, Craigslist, eBay, OfferUp, and more."
        keywords="marketplace safety, Facebook Marketplace safety, Craigslist safety tips, eBay buyer protection, OfferUp scams, buying used items safely"
        canonical="/marketplace-safety"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <ShieldAlert className="h-3 w-3 mr-1" />
              Essential Safety Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ultimate Guide to Secondhand Marketplace Safety
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive safety guide for buying and selling on Facebook Marketplace, Craigslist, eBay, OfferUp, and other secondhand marketplaces. Avoid scams, verify items, and protect yourself from fraud and stolen goods.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <strong>Did you know?</strong> 60% of stolen goods are resold on online marketplaces within 24 hours. This guide shows you how to avoid becoming a victim.
            </p>
          </div>
        </section>

        {/* Facebook Marketplace Safety */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Facebook className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Facebook Marketplace Safety: Complete Protection Guide</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              Facebook Marketplace is the largest peer-to-peer marketplace with 1.2 billion active users monthly. While convenient, it's also a hotspot for scammers, stolen goods, and fraud. Here's how to protect yourself:
            </p>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Common Facebook Marketplace Scams</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">1. Fake Payment Confirmation Scam</h4>
                    <p className="text-muted-foreground mb-2">
                      <strong>How it works:</strong> Scammer sends fake screenshot showing "payment sent" via Zelle, Venmo, PayPal, or Cash App. They pressure you to ship the item immediately before payment "clears." The payment never existed.
                    </p>
                    <div className="bg-red-500/10 p-3 rounded-lg mt-2">
                      <p className="text-sm font-semibold text-red-500 mb-1">🚩 Warning Signs:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Buyer insists on shipping instead of local pickup</li>
                        <li>• Sends screenshot of payment instead of actual transaction</li>
                        <li>• Urgently needs item shipped "today" or "ASAP"</li>
                        <li>• Uses phone number instead of Facebook Messenger</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg mt-2">
                      <p className="text-sm font-semibold text-green-500 mb-1">✓ How to Protect Yourself:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Never trust payment screenshots - verify in your actual app</li>
                        <li>• Only accept local, in-person transactions</li>
                        <li>• Use "Hold for pickup" not "Mark as sold" until payment received</li>
                        <li>• If shipping is necessary, use Facebook's shipping protection</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">2. Overpayment Scam</h4>
                    <p className="text-muted-foreground mb-2">
                      <strong>How it works:</strong> Buyer sends payment for MORE than asking price, claims it was an "accident," and asks you to refund the difference. Their original payment was fraudulent and gets reversed, but your refund was real money.
                    </p>
                    <div className="bg-orange-500/10 p-3 rounded-lg mt-2">
                      <p className="text-sm font-semibold text-orange-500 mb-1">🚩 Red Flags:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Payment amount is higher than your asking price</li>
                        <li>• Buyer has excuse for overpayment ("My assistant made mistake")</li>
                        <li>• Asks you to send difference via different payment method</li>
                        <li>• Pressures you to refund quickly before you notice</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg mt-2">
                      <p className="text-sm font-semibold text-green-500 mb-1">✓ Protection Steps:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• NEVER accept more than your asking price</li>
                        <li>• If overpayment occurs, refund through SAME payment method</li>
                        <li>• Wait 7-10 days for payment to fully clear before refunding</li>
                        <li>• Better yet: Cancel transaction and start over with correct amount</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">3. Bait and Switch / Stolen Goods</h4>
                    <p className="text-muted-foreground mb-2">
                      <strong>How it works:</strong> Seller lists legitimate product photos but shows up with different, inferior, or stolen item. Or they provide real serial number for verification but bring different stolen device to meetup.
                    </p>
                    <div className="bg-purple-500/10 p-3 rounded-lg mt-2">
                      <p className="text-sm font-semibold text-purple-500 mb-1">🚩 Warning Signs:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Photos are stock images from manufacturer website</li>
                        <li>• Price is suspiciously low (50%+ below market value)</li>
                        <li>• Seller has multiple similar items for sale</li>
                        <li>• Won't provide serial number until meeting in person</li>
                        <li>• Serial number on device doesn't match what they texted you</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg mt-2">
                      <p className="text-sm font-semibold text-green-500 mb-1">✓ Protection Steps:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ask for actual photos WITH seller's handwritten note/date</li>
                        <li>• Get serial/IMEI/VIN number BEFORE meeting - verify on SafeOrStolen</li>
                        <li>• Physically verify serial number matches at meetup</li>
                        <li>• Check device isn't activation locked (iPhone: iCloud, Android: Google)</li>
                        <li>• If serial doesn't match or shows stolen - walk away immediately</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Meeting Safely for Facebook Marketplace Transactions</h3>
                <p className="text-muted-foreground mb-4">
                  Never underestimate the importance of a safe meeting location. Robberies, assaults, and worse have occurred at marketplace meetups. Follow these guidelines:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-500 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Safe Meeting Locations
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✓ <strong>Police Station Parking Lots:</strong> Many stations have designated "Safe Exchange Zones" with cameras</li>
                      <li>✓ <strong>Bank Lobbies:</strong> During business hours with security present</li>
                      <li>✓ <strong>Busy Shopping Centers:</strong> Well-lit, cameras, lots of foot traffic</li>
                      <li>✓ <strong>Coffee Shops:</strong> Public, busy, good for testing electronics (power outlets)</li>
                      <li>✓ <strong>Gas Stations:</strong> Brightly lit, cameras, staff present</li>
                    </ul>
                  </div>

                  <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                    <h4 className="font-semibold text-red-500 mb-3 flex items-center">
                      <XCircle className="h-5 w-5 mr-2" />
                      Avoid These Locations
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✗ <strong>Seller's/Buyer's Home:</strong> Never go to private residences</li>
                      <li>✗ <strong>Isolated Parking Lots:</strong> Empty lots, late at night</li>
                      <li>✗ <strong>Residential Streets:</strong> Low visibility, no public security</li>
                      <li>✗ <strong>Abandoned Areas:</strong> Closed businesses, construction sites</li>
                      <li>✗ <strong>Inside Vehicles:</strong> Never get in someone's car to "test" item</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Additional Safety Precautions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Bring a friend:</strong> Never meet alone for high-value items ($500+)</li>
                    <li>• <strong>Meet during daylight:</strong> Avoid night meetups when possible</li>
                    <li>• <strong>Tell someone:</strong> Share meeting location, time, seller info with friend/family</li>
                    <li>• <strong>Keep phone charged:</strong> Ensure you can call for help if needed</li>
                    <li>• <strong>Trust your instincts:</strong> If something feels off, leave immediately</li>
                    <li>• <strong>Cash in public:</strong> Don't flash large amounts of cash - count discreetly</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">SafeOrStolen Verification for Facebook Marketplace</h3>
                <p className="text-muted-foreground mb-4">
                  Before meeting any Facebook Marketplace seller, use SafeOrStolen to verify the item isn't stolen:
                </p>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-primary">1.</span>
                    <span>Ask seller for IMEI (phones), VIN (vehicles), or serial number (electronics) via Facebook Messenger</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-primary">2.</span>
                    <span>Check the number on SafeOrStolen.com - results in 3 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-primary">3.</span>
                    <span>If item shows as stolen/blacklisted - report seller to Facebook and police</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-primary">4.</span>
                    <span>If item is clear - at meetup, verify physical serial number matches what they gave you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-primary">5.</span>
                    <span>Download our verification certificate as proof you performed due diligence</span>
                  </li>
                </ol>
                <Button asChild className="mt-6">
                  <Link to="/verify">
                    <Search className="h-4 w-4 mr-2" />
                    Verify Item Before Facebook Marketplace Purchase
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Craigslist Safety */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Craigslist Safety Guide: Protecting Yourself Since 1995</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Craigslist has been around for 30 years and remains one of the most popular classifieds sites despite its bare-bones interface. Unfortunately, scammers have had 30 years to perfect their tactics. Here's how to stay safe:
            </p>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Top Craigslist Scams to Watch For</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Rental/Real Estate Scams</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Scammer posts fake rental listing with stolen photos, collects "deposit" and "first month rent," then disappears. Often the property isn't even for rent or doesn't exist.
                    </p>
                    <div className="bg-red-500/10 p-3 rounded-lg text-xs">
                      <p className="font-semibold mb-1">🚩 Signs: Price way below market, landlord is "overseas," wants money before showing property, asks for wire transfer/gift cards</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Vehicle Shipping Scams</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Fake car listing at incredible price. Seller claims they're military/moved and will ship vehicle after payment. Car doesn't exist or is stolen. You lose your money.
                    </p>
                    <div className="bg-red-500/10 p-3 rounded-lg text-xs">
                      <p className="font-semibold mb-1">🚩 Signs: Must sell urgently, price 40%+ below KBB value, will only accept payment through "eBay Motors" (fake site), refuses to meet in person</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Fake Check / Money Order Scam</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Buyer sends cashier's check or money order for more than your asking price, asks you to deposit it and wire back the difference. Check is fake and bounces after you've wired money.
                    </p>
                    <div className="bg-red-500/10 p-3 rounded-lg text-xs">
                      <p className="font-semibold mb-1">🚩 Signs: Overpayment, asks to wire difference, wants item shipped to different address, uses moving company excuse</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Craigslist Safety Rules (From Craigslist Themselves)</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Deal locally, face-to-face:</strong> Craigslist explicitly warns against long-distance transactions. Meet in person to inspect item before paying.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>NEVER wire money:</strong> Western Union, MoneyGram, wire transfer, gift cards = 100% scam. These payments are untraceable and unrecoverable.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't accept cashier/certified checks:</strong> These can be faked easily. Banks may accept them initially but reverse days later when they discover fraud.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't give out financial info:</strong> Never share bank account, SSN, credit card number. Legitimate buyers don't need this.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't rent/purchase sight-unseen:</strong> If you can't physically see the item/property in person, it's likely a scam.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Refuse background/credit checks:</strong> Scammers use fake "verification services" to steal your identity and money.</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-semibold mb-3">How to Spot Fake Craigslist Listings</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>🚩 <strong>Generic photos:</strong> Stock images from Google/manufacturer instead of actual photos</li>
                  <li>🚩 <strong>Poor grammar:</strong> Lots of typos, broken English, weird phrasing (often from overseas scammers)</li>
                  <li>🚩 <strong>Too perfect:</strong> Item description sounds like marketing copy instead of personal sale</li>
                  <li>🚩 <strong>Contact outside Craigslist:</strong> Wants you to email/text instead of using Craigslist anonymized email</li>
                  <li>🚩 <strong>Vague location:</strong> Doesn't list specific city/neighborhood</li>
                  <li>🚩 <strong>Duplicate listings:</strong> Same item posted in multiple cities with different emails</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* eBay Protection */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">eBay Buyer Protection: What's Covered (and What's Not)</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              eBay offers more buyer protection than Facebook Marketplace or Craigslist, but scammers have adapted. Here's what you need to know:
            </p>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  What eBay Money Back Guarantee Covers
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Item not received:</strong> Paid but never received item (seller must provide tracking)</li>
                  <li>• <strong>Not as described:</strong> Item significantly different from listing description</li>
                  <li>• <strong>Damaged in shipping:</strong> Item arrives broken (if seller didn't pack properly)</li>
                  <li>• <strong>Wrong item sent:</strong> Received different item than what you ordered</li>
                  <li>• <strong>Counterfeit items:</strong> Fake/replica when listing claimed authentic</li>
                </ul>
                <p className="text-sm mt-4 text-muted-foreground">
                  You have <strong>30 days</strong> from estimated delivery date to open a case. eBay typically sides with buyers.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-500 flex items-center">
                  <XCircle className="h-5 w-5 mr-2" />
                  What eBay DOESN'T Protect You From
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Buyer's remorse:</strong> Changed your mind after receiving item as described</li>
                  <li>• <strong>Damage you caused:</strong> Broke item after delivery</li>
                  <li>• <strong>Stolen goods:</strong> eBay doesn't verify items aren't stolen - that's YOUR responsibility</li>
                  <li>• <strong>Blacklisted devices:</strong> Phone/laptop works but is carrier blacklisted</li>
                  <li>• <strong>Items bought outside eBay:</strong> If seller moves transaction off platform</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Common eBay Scams Despite Buyer Protection</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-2">1. Blacklisted Phone Scam</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Seller lists phone that works fine when you receive it. Weeks later, original owner reports it stolen and carrier blacklists the IMEI. Your phone stops working. eBay case window has closed - you're stuck.
                    </p>
                    <div className="bg-green-500/10 p-3 rounded-lg mt-2 text-xs">
                      <p className="font-semibold text-green-500">✓ Protection: Check IMEI on SafeOrStolen BEFORE and AFTER receiving phone. Open eBay case immediately if it shows stolen/blacklisted.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2">2. Empty Box Scam (Seller Fraud)</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Seller ships empty box with tracking. Claims they sent item and you're lying about not receiving it. Tracking shows "delivered" so eBay may side with seller.
                    </p>
                    <div className="bg-green-500/10 p-3 rounded-lg mt-2 text-xs">
                      <p className="font-semibold text-green-500">✓ Protection: Video yourself opening package immediately upon delivery. Check seller feedback for similar complaints. Report to eBay with video evidence.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold mb-2">3. Moving Transaction Off eBay</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Seller contacts you to "save fees" by completing transaction via PayPal Friends & Family, Venmo, Zelle, etc. You lose ALL eBay buyer protection.
                    </p>
                    <div className="bg-green-500/10 p-3 rounded-lg mt-2 text-xs">
                      <p className="font-semibold text-green-500">✓ Protection: NEVER move transactions off eBay. Report seller immediately. Only pay through eBay checkout.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <h3 className="text-xl font-semibold mb-3">IMEI Verification for eBay Phone Purchases</h3>
                <p className="text-muted-foreground mb-4">
                  Even with eBay protection, checking IMEI before buying AND after receiving protects you from delayed blacklisting:
                </p>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>1.</strong> Ask seller for IMEI in eBay messages before bidding/buying</li>
                  <li><strong>2.</strong> Check IMEI on SafeOrStolen - if stolen/blacklisted, don't bid</li>
                  <li><strong>3.</strong> When phone arrives, verify IMEI matches what seller provided</li>
                  <li><strong>4.</strong> Check IMEI again on SafeOrStolen to confirm still clean</li>
                  <li><strong>5.</strong> If it shows stolen after purchase, open eBay case immediately (within 30 days)</li>
                </ol>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Marketplaces */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">OfferUp, Letgo, Mercari Safety Tips</h2>
            
            <p className="text-muted-foreground mb-6">
              These mobile-first marketplaces have grown rapidly but lack the buyer protections of eBay. Apply same safety principles as Facebook Marketplace:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">OfferUp Safety Features</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ TruYou verification (confirms phone number/ID)</li>
                  <li>✓ In-app payment protection for shipped items</li>
                  <li>✓ Community meetup spots partnerships</li>
                  <li>✗ No protection for in-person cash transactions</li>
                  <li>✗ No verification that items aren't stolen</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">Mercari Buyer Protection</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ All transactions go through Mercari (seller doesn't get paid until you confirm receipt)</li>
                  <li>✓ 3-day inspection period after delivery</li>
                  <li>✓ Refund if item not as described</li>
                  <li>✗ Local pickup not available (shipping only)</li>
                  <li>✗ Higher fees than person-to-person marketplaces</li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Universal Rules for ALL Marketplace Transactions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-500 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    DO These Things
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Check IMEI/VIN/serial number on SafeOrStolen</li>
                    <li>✓ Meet in public, daylight, with cameras</li>
                    <li>✓ Bring a friend for high-value items</li>
                    <li>✓ Test item thoroughly before paying</li>
                    <li>✓ Use platform's payment protection when available</li>
                    <li>✓ Report suspicious listings</li>
                    <li>✓ Trust your instincts - walk away if uncomfortable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-500 flex items-center">
                    <XCircle className="h-4 w-4 mr-2" />
                    NEVER Do These Things
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✗ Wire money or use gift cards</li>
                    <li>✗ Meet at private homes</li>
                    <li>✗ Buy without seeing item in person</li>
                    <li>✗ Ignore too-good-to-be-true prices</li>
                    <li>✗ Accept overpayment</li>
                    <li>✗ Share financial/personal info</li>
                    <li>✗ Buy items with tampered serial numbers</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Pawn Shop Section */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Buying from Pawn Shops: What You Need to Know</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Pawn shops are regulated businesses with legal obligations, making them safer than peer-to-peer marketplaces. However, stolen goods still sometimes slip through:
            </p>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">How Pawn Shops Verify Items (Usually)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Hold period:</strong> Most states require 30-90 day holding period before reselling pawned items, giving owners time to report theft</li>
                  <li>• <strong>Police reports:</strong> Pawn shops submit serial numbers to police databases to check against stolen property reports</li>
                  <li>• <strong>ID requirements:</strong> Sellers must provide government ID, which is recorded with item details</li>
                  <li>• <strong>Security cameras:</strong> Transactions are recorded to deter theft</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Your Rights as a Pawn Shop Buyer</h3>
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Important:</strong> Laws vary by state, but generally if police determine an item you bought from a pawn shop was stolen, they can confiscate it as evidence. The pawn shop may or may not refund you depending on local laws.
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Request verification:</strong> Ask to see documentation that serial number was checked against police databases</li>
                  <li>• <strong>Get receipt:</strong> Ensure receipt includes full serial number/IMEI</li>
                  <li>• <strong>Verify yourself:</strong> Check serial number on SafeOrStolen even when buying from pawn shop</li>
                  <li>• <strong>Return policy:</strong> Ask about return policy if item turns out to be stolen/blacklisted</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Yourself on Every Marketplace</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're buying on Facebook Marketplace, Craigslist, eBay, or OfferUp - always verify items aren't stolen before purchasing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">
                  <Search className="h-4 w-4 mr-2" />
                  Verify Item Now - Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/mobile-app">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Download Mobile App
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Used by 500,000+ marketplace buyers to avoid scams and stolen goods
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketplaceSafetyPage;
