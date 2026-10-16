import { PageSEO } from '@/components/seo/PageSEO';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/lib/router-compat';
import { ShoppingCart, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';
import { SafeOrStolenVideo } from '@/components/video/SafeOrStolenVideo';

export default function UltimateMarketplaceBuyersGuide() {
  const navigate = useNavigate();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Marketplace Buyers Guide: Avoid Stolen Goods on Facebook, eBay & Craigslist',
    description: 'How to buy on Facebook Marketplace, eBay, Craigslist and OfferUp without ending up with stolen goods: seller red flags, payment rules, meetup tips and checking the serial number first.',
    author: {
      '@type': 'Organization',
      name: 'SafeOrStolen'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      logo: {
        '@type': 'ImageObject',
        url: 'https://safeorstolen.com/logo.png'
      }
    },
    datePublished: '2026-01-15',
    dateModified: '2026-01-15'
  };

  return (
    <>
      <PageSEO
        title="Ultimate Marketplace Buyers Guide 2026 | SafeOrStolen"
        description="How to buy on Facebook Marketplace, eBay, Craigslist and OfferUp without getting stolen goods or scammed: seller red flags, safe payment, meetups and serial checks."
        keywords="Facebook Marketplace safety, eBay buyer protection, Craigslist safety tips, avoid marketplace scams, secondhand buying guide"
        canonical="/blog/ultimate-marketplace-buyers-guide"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-4">
              ← Back to Blog
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ultimate Marketplace Buyers Guide: Avoid Stolen Goods
            </h1>
            <p className="text-lg text-muted-foreground">
              Published January 15, 2026 • 12 min read
            </p>
          </div>

          <BlogHeroImage src={blogImages.marketplace} alt="Two people meeting in parking lot exchanging verified item - marketplace buyers guide" />

          <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <SafeOrStolenVideo withSchema={false} caption="Verify any used item before you buy or sell." />
            
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <ShoppingCart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Why This Guide Matters</h3>
                  <p className="text-muted-foreground">
                    Stolen phones, bikes and tools get resold on the same apps you shop on. If you buy one, police can
                    take it back and you're out the money. This guide covers what to look for on each platform.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">The Current Marketplace Landscape</h2>
            <p className="text-muted-foreground mb-4">
              Marketplace apps make it easy to sell something the same day you list it. That speed is useful to
              honest sellers and to thieves alike.
            </p>
            <p className="text-muted-foreground mb-6">
              Each platform protects buyers differently, so the right precautions change depending on where you're shopping.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Facebook Marketplace: Biggest Platform, Biggest Risks</h2>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Facebook Marketplace Safety Tips</h3>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Check Seller Profile</h4>
                <p className="text-muted-foreground">
                  A brand-new account with no profile picture, few friends and no marketplace history is a warning sign.
                  Most honest sellers have a profile that's been around a while.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Review Other Listings</h4>
                <p className="text-muted-foreground">
                  A seller with a stack of the same high-value electronics, all priced low and all "new," deserves
                  questions. Ask where they came from and for the serial numbers.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Message Through Platform</h4>
                <p className="text-muted-foreground">
                  Sellers who immediately request you contact them via text, WhatsApp, or email are circumventing 
                  Facebook's fraud detection. Keep all communication in Messenger for buyer protection.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Enable Facebook Checkout</h4>
                <p className="text-muted-foreground">
                  When it's offered, paying through Facebook's checkout gives you access to its purchase protection.
                  Cash handed over in a parking lot can't be disputed.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Common Facebook Marketplace Scams (2026)</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-foreground">Bait-and-Switch</h4>
                <p className="text-muted-foreground text-sm">
                  Listing shows iPhone 15 Pro Max, but seller brings iPhone 12 or older model to meetup and claims 
                  "it's the same thing."
                </p>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-foreground">Fake Payment Confirmation</h4>
                <p className="text-muted-foreground text-sm">
                  Seller shows fake PayPal/Venmo/Zelle "payment received" screenshot, you hand over item, payment 
                  never actually sent.
                </p>
              </div>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-foreground">Counterfeit Electronics</h4>
                <p className="text-muted-foreground text-sm">
                  Fake AirPods, knock-off Apple Watches, and counterfeit designer items listed at "too good to be true" 
                  prices. These look legitimate in photos but are worthless fakes.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">eBay: Better Protection, Still Vulnerable</h2>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">eBay Safety Tips</h3>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Check Seller Ratings</h4>
                <p className="text-muted-foreground">
                  Review the seller's feedback history and completed transactions. Read negative reviews—patterns of "item not 
                  as described" or "counterfeit" are major red flags.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Use PayPal Goods & Services</h4>
                <p className="text-muted-foreground">
                  Never pay via Friends & Family, Venmo, or wire transfer. eBay's buyer protection only covers 
                  payments made through eBay/PayPal Goods & Services.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Request Serial Numbers</h4>
                <p className="text-muted-foreground">
                  Before bidding or buying, message seller requesting serial/IMEI number. Verify through SafeOrStolen 
                  before payment. Legitimate sellers provide this without hesitation.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Open Disputes Immediately</h4>
                <p className="text-muted-foreground">
                  If the item arrives counterfeit, damaged or not as described, open a return or dispute through eBay
                  right away. eBay's guarantee has a time limit, so don't wait.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Craigslist: Maximum Freedom, Maximum Risk</h2>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">Craigslist Safety Tips</h3>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-destructive pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">⚠ Never Pay Before Seeing Item</h4>
                <p className="text-muted-foreground">
                  No deposits, no wire transfers, no prepayment. If the seller wants money before you've seen the item,
                  walk away.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">⚠ Meet at Police Station</h4>
                <p className="text-muted-foreground">
                  Many police departments have a marked "safe exchange zone" in their lot, often on camera. A seller
                  who won't meet there is telling you something.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">⚠ Bring Someone With You</h4>
                <p className="text-muted-foreground">
                  Don't meet alone for anything expensive, especially if you're carrying cash. Bring a friend and tell
                  someone where you're going.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">⚠ Verify Serial Numbers On-Site</h4>
                <p className="text-muted-foreground">
                  Open the free SafeOrStolen web app on your phone, scan the barcode or type the serial number before
                  you hand over cash. It takes a few seconds. If the seller won't let you, end the deal.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">OfferUp: Growing Platform, Mixed Security</h2>

            <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">OfferUp Safety Tips</h3>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Prioritize TruYou Verified Sellers</h4>
                <p className="text-muted-foreground">
                  The TruYou badge means OfferUp verified the seller's identity. It isn't a guarantee the item is
                  theirs, but it's better than an anonymous account.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Use OfferUp Shipping</h4>
                <p className="text-muted-foreground">
                  When available, use OfferUp's shipping service with purchase protection. Avoid cash-only local 
                  pickups for high-value electronics.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2 text-foreground">✓ Check Seller Reviews</h4>
                <p className="text-muted-foreground">
                  Look for a history of positive reviews and no recent complaints. A brand-new seller with no reviews
                  offering something expensive deserves extra caution.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Universal Marketplace Safety Checklist</h2>
            <p className="text-muted-foreground mb-4">
              Whatever app you're on, run through this before every secondhand purchase:
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Ask for the serial number or IMEI before meeting</strong> - check it on SafeOrStolen
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Know the going price</strong> - a price far below similar listings is a reason to ask more questions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Meet in safe public location</strong> - Police stations, bank lobbies, busy coffee shops
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Inspect item thoroughly</strong> - Test all functions, check for physical damage or tampering
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Request proof of purchase</strong> - Receipt, order confirmation, or credit card statement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong>Trust your instincts</strong> - If something feels off, walk away. No deal is worth the risk
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-primary rounded-lg p-8 text-center mt-12">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Verify Before You Buy</h3>
              <p className="text-muted-foreground mb-6">
                SafeOrStolen searches its theft reports and public web results for phones, electronics, vehicles, bikes
                and tools in a few seconds. 2 free checks, and a free web app with barcode scanning at safeorstolen.com/app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/verify')} size="lg" className="gap-2">
                  <Shield className="h-5 w-5" />
                  Verify Item Now
                </Button>
                <Button onClick={() => navigate('/app')} size="lg" variant="outline" className="gap-2">
                  Get the Free Web App
                </Button>
              </div>
            </div>
          </div>
        </article>

        <div className="container mx-auto px-4 py-12">
          <AppDownloadCTA variant="default" showBenefits={true} />
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/ultimate-marketplace-buyers-guide" currentCategory="blog" maxLinks={5} />
    </>
  );
}
