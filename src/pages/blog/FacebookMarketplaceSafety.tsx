import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, AlertTriangle, CheckCircle, DollarSign, MapPin, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function FacebookMarketplaceSafety() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Buying on Facebook Marketplace? Check if It's Stolen First (2025)",
    "description": "Complete safety guide for Facebook Marketplace buyers. Learn how to avoid scams, check if items are stolen, and protect yourself from fraud.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "datePublished": "2025-01-14"
  };

  return (
    <>
      <PageSEO
        title="Facebook Marketplace Safety: How to Avoid Buying Stolen Goods"
        description="Complete guide to buying safely on Facebook Marketplace. Learn how to check if items are stolen, avoid scams, and protect yourself from fraud in 2025."
        keywords="Facebook Marketplace safety, avoid stolen goods, marketplace scams, Facebook buying tips, check if stolen Facebook, marketplace fraud prevention, safe online buying"
        canonical="/blog/facebook-marketplace-safety"
        structuredData={[articleSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Buying on Facebook Marketplace? Check if It's Stolen First
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Complete 2025 safety guide for Facebook Marketplace. Learn how to avoid scams, verify items aren't stolen, 
            and protect yourself from fraud.
          </p>

          <Button onClick={() => navigate('/stolen-item-checker')} size="lg" className="mb-12">
            <Shield className="mr-2 h-5 w-5" />
            Verify Item Before You Buy
          </Button>

          {/* Warning Stats */}
          <Card className="p-6 mb-8 border-destructive bg-destructive/10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Facebook Marketplace Fraud is Exploding</h3>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• <strong>$256 million lost</strong> to marketplace scams in 2024</li>
                  <li>• <strong>1 in 6 electronics listings</strong> involve stolen goods</li>
                  <li>• <strong>73% of victims</strong> never recover their money</li>
                  <li>• <strong>Facebook provides NO buyer protection</strong> for local pickups</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Most Common Scams */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Most Common Facebook Marketplace Scams</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">1. Stolen Goods (Most Common)</h3>
                    <p className="text-muted-foreground mb-3">
                      Thieves sell stolen phones, electronics, and bikes on Facebook. Once you buy, the item gets:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Remotely locked by original owner (phones)</li>
                      <li>Blacklisted and unusable (phones, tablets)</li>
                      <li>Seized by police if reported</li>
                    </ul>
                    <div className="mt-3 p-3 bg-primary/10 border border-primary/20 rounded">
                      <p className="text-sm font-bold text-primary">
                        Protection: Always check IMEI, VIN, or serial number BEFORE meeting seller
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">2. Fake Payment Confirmations</h3>
                    <p className="text-muted-foreground mb-3">
                      Scammer sends fake Venmo/PayPal/Zelle screenshot showing "payment sent." They take the item, you get nothing.
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Protection: Only accept cash or verified in-app payment (check YOUR bank account, not screenshots)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">3. Bait-and-Switch</h3>
                    <p className="text-muted-foreground mb-3">
                      Listing shows brand new iPhone. When you meet, seller shows damaged phone or different model claiming "this is it."
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Protection: Verify exact item details (IMEI, model, condition) BEFORE meeting. Walk away if different.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Safety Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ultimate Facebook Marketplace Safety Checklist</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Before Contacting Seller
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Check if price is realistic (not 50%+ below market value)</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Review seller's profile (how long active, other listings, reviews)</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Look for stock photos vs. actual photos of the item</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Check if description is generic or AI-generated</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Before Meeting
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span><strong>CRITICAL:</strong> Ask for IMEI (phones), VIN (cars), or serial number and verify it on SafeOrStolen</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Request photos of item with today's date on paper next to it</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Ask for original receipt or proof of purchase</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Agree to meet in PUBLIC place (police station parking lot is ideal)</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Tell someone where you're going and share your location</span>
                  </li>
                </ul>
                <Button onClick={() => navigate('/stolen-item-checker')} className="mt-4">
                  Verify IMEI/Serial Number →
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  During Meetup
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Verify IMEI/serial on device matches what they sent you (dial *#06# for phones)</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Check that phone is NOT iCloud/Google locked (seller should remove account in front of you)</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Test all functions (screen, camera, buttons, charging)</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>Get seller's full name and ID (take photo for records)</span>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>If ANYTHING seems off, walk away. Trust your gut.</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Red Flags */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">🚨 Red Flags to Walk Away</h2>
            
            <Card className="p-6 bg-destructive/10 border-destructive">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>Seller refuses to provide IMEI/serial number</strong> - 99% chance it's stolen</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>Only wants to meet in sketchy area</strong> - safe sellers meet in public</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>Pressure tactics</strong> - "Someone else wants it, pay now or lose it"</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>Price too good to be true</strong> - iPhone 15 Pro for $300? It's stolen or fake</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>No proof of ownership</strong> - no receipt, no box, vague answers</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>Multiple phones/items</strong> - selling 10 iPhones? Likely stolen batch</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground"><strong>Brand new profile</strong> - created this week, no history, no reviews</span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Safe Meetup Locations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Safest Meetup Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6 border-green-500/50 bg-green-500/10">
                <MapPin className="h-6 w-6 text-green-600 mb-3" />
                <h3 className="font-bold mb-3 text-green-600">✅ SAFE Meetup Spots</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Police station parking lot (best)</li>
                  <li>• Bank lobby during business hours</li>
                  <li>• Shopping mall security desk</li>
                  <li>• Starbucks with security cameras</li>
                  <li>• Apple Store (for phone verification)</li>
                </ul>
              </Card>

              <Card className="p-6 border-destructive bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive mb-3" />
                <h3 className="font-bold mb-3 text-destructive">❌ AVOID These Spots</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seller's home or your home</li>
                  <li>• Empty parking lots at night</li>
                  <li>• Remote areas or alleys</li>
                  <li>• Anywhere seller insists on</li>
                  <li>• "Just meet me quick" locations</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* What to Do If Scammed */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What to Do If You Were Scammed</h2>
            
            <Card className="p-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Report to Police Immediately</h4>
                    <p className="text-sm text-muted-foreground">File report with seller's info, screenshots, and transaction details</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Report to Facebook</h4>
                    <p className="text-sm text-muted-foreground">Report listing and seller profile (unlikely to get money back but helps others)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Contact Your Bank/Payment App</h4>
                    <p className="text-sm text-muted-foreground">If paid via Venmo/PayPal, report fraud. Cash payments are not recoverable.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Report to IC3 (FBI)</h4>
                    <p className="text-sm text-muted-foreground">File complaint at ic3.gov for federal tracking</p>
                  </div>
                </li>
              </ol>
            </Card>
          </section>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Protect Yourself Before Every Purchase</h2>
            <p className="text-lg mb-6">
              Verify IMEI, VIN, and serial numbers BEFORE meeting sellers. Check stolen databases in under 30 seconds.
            </p>
            <Button onClick={() => navigate('/stolen-item-checker')} size="lg" variant="secondary">
              Verify Item Free (2 Searches)
            </Button>
            <p className="text-sm mt-4 opacity-80">
              Don't risk your money - verify first, buy safely
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
