import { PageSEO } from '@/components/seo/PageSEO';
import { MessageSquare, Shield, AlertTriangle, CheckCircle, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function FacebookMarketplaceSafety() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="15 Facebook Marketplace Safety Tips (2025)"
        description="Essential Facebook Marketplace safety guide. Learn how to verify items, spot scams, meet safely, and protect yourself when buying or selling secondhand items on Facebook."
        keywords="facebook marketplace safety, facebook marketplace scams, buying on facebook safely, facebook marketplace protection, fb marketplace tips"
        canonical="/guides/facebook-marketplace-safety"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              15 Facebook Marketplace Safety Tips
            </h1>
            <p className="text-xl text-muted-foreground">
              Essential safety strategies for buying and selling on Facebook Marketplace. Protect yourself from scams, stolen goods, and dangerous situations.
            </p>
          </header>

          <Card className="p-6 mb-12 bg-destructive/5 border-destructive/20">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Why Facebook Marketplace Is High Risk
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-destructive mb-1">1.2M</div>
                <div className="text-sm text-muted-foreground">fraud reports in 2024</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-destructive mb-1">$1.8B</div>
                <div className="text-sm text-muted-foreground">lost to FB scams yearly</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-destructive mb-1">Limited</div>
                <div className="text-sm text-muted-foreground">buyer protection</div>
              </div>
            </div>
          </Card>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">15 Critical Safety Tips</h2>
            <div className="space-y-4">
              {[
                {
                  number: 1,
                  title: 'Verify Serial Numbers BEFORE Meeting',
                  desc: 'Request serial/IMEI numbers via Facebook message. Check on SafeOrStolen immediately. If seller refuses, it\'s likely stolen.'
                },
                {
                  number: 2,
                  title: 'Check Seller Profile Thoroughly',
                  desc: 'Look for active profile (6+ months), real friends, consistent photos, and genuine interactions. Fake profiles have few friends and generic content.'
                },
                {
                  number: 3,
                  title: 'ALWAYS Meet in Public Police Station',
                  desc: 'Most police stations have designated safe exchange zones. Criminals won\'t meet there. NEVER go to private homes or isolated areas.'
                },
                {
                  number: 4,
                  title: 'Bring a Friend',
                  desc: 'Never meet sellers alone, especially for high-value items. Two people are much less likely to be targeted by criminals.'
                },
                {
                  number: 5,
                  title: 'Use Facebook Checkout (Not Cash)',
                  desc: 'Facebook\'s payment system offers purchase protection. Cash transactions have ZERO protection. Seller insists on cash = red flag.'
                },
                {
                  number: 6,
                  title: 'Test Items Completely Before Paying',
                  desc: 'Turn phones on, check all functions, verify serial numbers match. For vehicles, take for test drive. For electronics, test every feature.'
                },
                {
                  number: 7,
                  title: 'Watch for Price Red Flags',
                  desc: 'If price is 40%+ below market value with no valid reason (urgent sale, minor defect), it\'s probably stolen or a scam.'
                },
                {
                  number: 8,
                  title: 'Read ALL Comments on Listing',
                  desc: 'Other buyers often warn about scams in comments. Check seller\'s other listings and reviews from buyers.'
                },
                {
                  number: 9,
                  title: 'Never Send Money Before Seeing Item',
                  desc: 'Common scam: seller asks for deposit or full payment via Venmo/Zelle. They disappear after payment. ALWAYS see item first.'
                },
                {
                  number: 10,
                  title: 'Be Wary of Shipping Requests',
                  desc: 'Scammers prefer shipping to avoid meeting in person. If seller insists on shipping high-value items, extreme caution required.'
                },
                {
                  number: 11,
                  title: 'Trust Your Gut Feeling',
                  desc: 'If something feels wrong, walk away. No deal is worth your safety. Better to miss a good deal than become a victim.'
                },
                {
                  number: 12,
                  title: 'Document Everything',
                  desc: 'Screenshot conversations, seller profile, and listing. Take photos of seller\'s ID (with permission). Get written receipt with contact info.'
                },
                {
                  number: 13,
                  title: 'Report Suspicious Activity',
                  desc: 'Report scammers and stolen items to Facebook immediately. Help protect other buyers by leaving honest reviews.'
                },
                {
                  number: 14,
                  title: 'Verify Vehicle VINs Independently',
                  desc: 'For vehicles, check VIN on SafeOrStolen AND NICB. Cross-reference title with VIN. Stolen cars are common on FB Marketplace.'
                },
                {
                  number: 15,
                  title: 'Don\'t Share Personal Information',
                  desc: 'Keep conversations in Facebook Messenger. Don\'t give out your address, phone number, or email until meeting in person at safe location.'
                }
              ].map((tip) => (
                <Card key={tip.number} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {tip.number}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Facebook Marketplace Scams</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-destructive/20">
                <h3 className="font-semibold mb-4 text-destructive">Advance Payment Scam</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Seller asks for deposit or full payment via Venmo, Zelle, or gift cards before meeting. Once paid, seller disappears or provides fake tracking number.
                </p>
                <p className="text-xs font-semibold text-destructive">
                  Protection: NEVER pay before seeing item in person
                </p>
              </Card>

              <Card className="p-6 border-destructive/20">
                <h3 className="font-semibold mb-4 text-destructive">Fake Payment Confirmation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Buyer sends fake PayPal/Venmo screenshot showing payment sent. Asks you to ship before payment clears. Payment never actually sent.
                </p>
                <p className="text-xs font-semibold text-destructive">
                  Protection: Verify payment in YOUR actual account
                </p>
              </Card>

              <Card className="p-6 border-destructive/20">
                <h3 className="font-semibold mb-4 text-destructive">Stolen Item Sale</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Seller offers brand new high-value items at deep discounts. Claims won as prize or employer discount. Items are actually stolen.
                </p>
                <p className="text-xs font-semibold text-destructive">
                  Protection: Verify serial numbers on SafeOrStolen
                </p>
              </Card>

              <Card className="p-6 border-destructive/20">
                <h3 className="font-semibold mb-4 text-destructive">Bait and Switch</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Listing shows perfect item with stock photos. When you meet, actual item is damaged, different model, or doesn\'t work properly.
                </p>
                <p className="text-xs font-semibold text-destructive">
                  Protection: Insist on actual photos, test thoroughly
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Safe Meeting Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-success/20">
                <h3 className="font-semibold mb-4 text-success flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  SAFE Locations
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-success" />
                    <span>Police station parking lots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-success" />
                    <span>Bank lobbies (during business hours)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-success" />
                    <span>Busy shopping center parking lots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-success" />
                    <span>Coffee shops with cameras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-success" />
                    <span>Gas stations with good lighting</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-destructive/20">
                <h3 className="font-semibold mb-4 text-destructive flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  AVOID These Locations
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Seller\'s or buyer\'s home</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Dark or isolated parking lots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Side streets or alleys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Empty buildings or warehouses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Meeting late at night</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Verify Facebook Marketplace Items</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Before meeting any Facebook Marketplace seller, verify the item\'s serial number for free. SafeOrStolen checks law enforcement databases to ensure items aren\'t stolen. Instant results in 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                Verify Item Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/mobile-app')}>
                Download Mobile App
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
