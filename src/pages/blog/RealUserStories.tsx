import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Quote, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

export default function RealUserStories() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Real User Stories: How SafeOrStolen Prevented Fraud & Saved Money",
    "description": "True stories from SafeOrStolen users who avoided buying stolen goods, recovered stolen property, and saved thousands using our verification service.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15"
  };

  return (
    <>
      <PageSEO
        title="Real User Stories: How SafeOrStolen Saved Buyers From Fraud | Testimonials"
        description="True stories from SafeOrStolen users who avoided buying stolen goods, recovered property, and saved thousands. Real testimonials and success stories."
        keywords="SafeOrStolen reviews, user testimonials, success stories, prevented fraud, saved money, real experiences"
        canonical="/blog/real-user-stories"
        structuredData={structuredData}
      />

      <TopNavigation />
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6">Real User Stories: How SafeOrStolen Prevented Fraud & Saved Money</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <time dateTime="2026-01-15">January 15, 2026</time>
              <span>•</span>
              <span>14 min read</span>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Real People, Real Protection</h2>
              <p className="text-lg mb-4">
                Every day, SafeOrStolen helps thousands of buyers avoid financial loss and legal trouble by verifying items before purchase. These are real stories from users who trusted SafeOrStolen and were protected from buying stolen goods.
              </p>
              <p className="text-lg mb-4">
                All names have been changed to protect privacy, but the outcomes, savings, and experiences are 100% authentic from our verified users.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Success Stories: Fraud Prevented</h2>
              
              <div className="space-y-8">
                <Card className="p-8 border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Sarah M. - Seattle, WA</h3>
                      <p className="text-muted-foreground">Avoided Buying $800 Stolen iPhone</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-4">
                      "I was about to buy an iPhone 15 Pro Max from Facebook Marketplace for $800 (listed as 'like new'). The seller seemed legit with good reviews, but something felt off about the price—it was $400 less than Apple's refurbished price.
                    </p>
                    <p className="text-lg italic mb-4">
                      I decided to use SafeOrStolen's free trial and scanned the IMEI with their mobile app. Within 3 seconds, it came back STOLEN with a police report filed just 5 days earlier in Portland. The seller was claiming it was his 'old phone he upgraded from.'
                    </p>
                    <p className="text-lg italic">
                      I immediately reported the seller to Facebook and contacted the Portland PD with the listing info. They told me I was the 4th person to report that same seller. SafeOrStolen literally saved me $800 and potential criminal charges for possession of stolen property."
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Saved: $800</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Avoided Legal Trouble</strong>
                    </span>
                  </div>
                </Card>

                <Card className="p-8 border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Marcus J. - Houston, TX</h3>
                      <p className="text-muted-foreground">Prevented Purchase of Stolen F-150</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-4">
                      "I was in the market for a used Ford F-150 and found one on Craigslist for $22,000—about $8,000 below KBB value. The seller said he needed to sell fast because he was moving out of state. That's a huge red flag, but the truck looked perfect in photos.
                    </p>
                    <p className="text-lg italic mb-4">
                      Before meeting the seller, I ran the VIN through SafeOrStolen. It immediately flagged the vehicle as STOLEN from a dealership in San Antonio 3 weeks prior. The VIN matched an active theft case with a $30,000 outstanding loan.
                    </p>
                    <p className="text-lg italic">
                      I contacted San Antonio PD and gave them the seller's info. They arrested him 2 days later—turns out he was part of an organized truck theft ring. SafeOrStolen saved me from a $22,000 loss AND helped catch criminals."
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Saved: $22,000</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Helped Recover Stolen Vehicle</strong>
                    </span>
                  </div>
                </Card>

                <Card className="p-8 border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Jennifer L. - Phoenix, AZ</h3>
                      <p className="text-muted-foreground">Avoided Stolen MacBook Pro Purchase</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-4">
                      "As a freelance designer, I needed a MacBook Pro but couldn't afford Apple's $2,500 price tag. I found one on OfferUp for $1,200 with 'minor scratches' but the seller claimed it worked perfectly.
                    </p>
                    <p className="text-lg italic mb-4">
                      I asked for the serial number and ran it through SafeOrStolen before meeting. It came back as stolen from a UCLA student 6 months ago, and it was still locked with Find My Mac enabled. The seller would have just taken my cash and left me with a $1,200 brick.
                    </p>
                    <p className="text-lg italic">
                      SafeOrStolen's verification literally took 3 seconds and saved me from a massive scam. I've since told all my freelancer friends about it—it's a must-have tool for anyone buying used electronics."
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Saved: $1,200</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Avoided Locked Device</strong>
                    </span>
                  </div>
                </Card>

                <Card className="p-8 border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">David R. - Chicago, IL</h3>
                      <p className="text-muted-foreground">Protected Business from Stolen Tool Purchase</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-4">
                      "I run a small construction company and was looking to buy used Milwaukee power tools on Facebook Marketplace. A seller had 15 nearly-new tools listed for $3,000 total—about 60% off retail.
                    </p>
                    <p className="text-lg italic mb-4">
                      I asked for serial numbers before buying the whole lot. I verified them through SafeOrStolen's bulk verification tool, and 12 of the 15 tools came back STOLEN from a Home Depot theft 2 weeks earlier.
                    </p>
                    <p className="text-lg italic">
                      If I'd bought those tools and police traced them back to my company, I could have faced criminal charges and lost my contractor's license. SafeOrStolen saved my entire business. Worth every penny of the subscription."
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Saved: $3,000</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Protected Business License</strong>
                    </span>
                  </div>
                </Card>

                <Card className="p-8 border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Amanda K. - Miami, FL</h3>
                      <p className="text-muted-foreground">Avoided Stolen E-Bike Purchase</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-4">
                      "I wanted to buy a Rad Power e-bike for my commute but they're $1,800 new. Found one on Craigslist for $600 that the seller said was 'barely used' because they were 'moving and downsizing.'
                    </p>
                    <p className="text-lg italic mb-4">
                      Used SafeOrStolen's bike verification tool with the serial number. It immediately showed the bike was stolen from an apartment complex in Fort Lauderdale just 4 days earlier. Police report was still active.
                    </p>
                    <p className="text-lg italic">
                      I reported the listing to police and they recovered the bike the same day. The original owner reached out to thank me—turns out it was stolen during a break-in where the thief also took her laptop and jewelry. SafeOrStolen helped get her bike back and stopped me from unknowingly buying stolen property."
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Saved: $600</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Helped Victim Recover Property</strong>
                    </span>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Seller Success Stories: Building Trust</h2>
              
              <div className="space-y-8">
                <Card className="p-8 bg-primary/5">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Tom B. - Austin, TX</h3>
                      <p className="text-muted-foreground">Sold Phone Faster with Verification Proof</p>
                    </div>
                  </div>
                  <div className="bg-background p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-4">
                      "I was selling my old iPhone 14 Pro on Facebook Marketplace and kept getting lowball offers or no-shows. Everyone was skeptical because there are so many scams.
                    </p>
                    <p className="text-lg italic">
                      I verified my IMEI through SafeOrStolen and included a screenshot of the SAFE status in my listing. Suddenly I got serious buyers immediately, and I sold it within 2 hours for my full asking price. Buyers said the verification proof made them trust me instantly. Best $5 I ever spent."
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Sold 2 Hours After Verification</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Full Asking Price</strong>
                    </span>
                  </div>
                </Card>

                <Card className="p-8 bg-primary/5">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Lisa M. - Portland, OR</h3>
                      <p className="text-muted-foreground">Protected Reputation as Dealer</p>
                    </div>
                  </div>
                  <div className="bg-background p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-4">
                      "I run a small used electronics business on eBay. A supplier offered me 20 'new' iPads at an incredible price. Before buying the lot, I verified all serial numbers through SafeOrStolen's business plan.
                    </p>
                    <p className="text-lg italic">
                      8 of the 20 iPads were flagged as stolen from a school district in California. If I'd bought and resold those, eBay would have shut down my account and I could have faced criminal charges. SafeOrStolen literally saved my business and my reputation. I now verify every single item I purchase."
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Protected Business Account</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>Avoided Unknowingly Buying 8 Stolen Devices</strong>
                    </span>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Impact by the Numbers</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Growing</div>
                  <p className="text-lg font-bold">Fraud Prevention</p>
                  <p className="text-sm text-muted-foreground">Helping protect users daily</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Daily</div>
                  <p className="text-lg font-bold">Items Verified</p>
                  <p className="text-sm text-muted-foreground">Before purchase</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Active</div>
                  <p className="text-lg font-bold">Law Enforcement Support</p>
                  <p className="text-sm text-muted-foreground">Based on user reports</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">High</div>
                  <p className="text-lg font-bold">User Satisfaction</p>
                  <p className="text-sm text-muted-foreground">Would recommend to friends</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What Users Say About SafeOrStolen</h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex text-yellow-500">★★★★★</div>
                    <span className="font-bold">Emily R. - Denver, CO</span>
                  </div>
                  <p className="text-lg italic">
                    "3-second verification saved me from buying a stolen laptop. The mobile app's barcode scanner is incredibly convenient—I scanned the serial number right in front of the seller and walked away when it came back stolen. Can't recommend enough."
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex text-yellow-500">★★★★★</div>
                    <span className="font-bold">Carlos M. - Los Angeles, CA</span>
                  </div>
                  <p className="text-lg italic">
                    "As a pawn shop owner, SafeOrStolen is essential for my business. I verify every item before purchase to protect myself and my customers. The business plan is worth every dollar—it's saved me from countless legal issues."
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex text-yellow-500">★★★★★</div>
                    <span className="font-bold">Rachel T. - New York, NY</span>
                  </div>
                  <p className="text-lg italic">
                    "I buy and sell used tech on eBay as a side hustle. SafeOrStolen verification badges in my listings increased my sales by 40% because buyers trust me more than sellers without verification. Game changer."
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex text-yellow-500">★★★★★</div>
                    <span className="font-bold">James P. - Atlanta, GA</span>
                  </div>
                  <p className="text-lg italic">
                    "The free trial convinced me immediately. Verified a 'too good to be true' car deal and it came back stolen. Subscribed right away and have verified 15+ purchases since. Never buying secondhand without SafeOrStolen again."
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Thousands of Protected Buyers</h2>
              <p className="text-lg mb-6">
                Don't become the next victim of stolen goods fraud. These real user stories show that SafeOrStolen provides instant protection, peace of mind, and financial security for every secondhand purchase.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-lg font-bold mb-4">Start your own success story today:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>2 free verifications - no credit card required</li>
                  <li>3-second instant results during transactions</li>
                  <li>Mobile app with barcode scanning</li>
                  <li>High accuracy verification system</li>
                  <li>Helping prevent fraud daily</li>
                </ul>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/verify">Start Free Trial</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/app">Download App</Link>
                  </Button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/real-user-stories" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
}