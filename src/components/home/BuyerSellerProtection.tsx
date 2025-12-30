import { ShieldCheck, BadgeCheck, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Both Buyer AND Seller Protection Section
 * Per audit: "Missing 'both sides' messaging" is HIGH priority
 */
export const BuyerSellerProtection = () => {
  return (
    <section className="py-16 bg-muted/30" aria-labelledby="both-sides-protection">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground mb-4">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">The Only Two-Sided Solution</span>
            </div>
            <h2 id="both-sides-protection" className="text-3xl md:text-4xl font-bold mb-4">
              Protect Both Buyers AND Sellers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlike other verification services that only help buyers, SafeOrStolen protects both sides 
              of every transaction. Whether you're buying or selling, we've got you covered.
            </p>
          </div>

          {/* Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Buyer Protection Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">For Buyers</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Don't lose money on stolen goods. Verify before you buy and protect yourself 
                  from financial loss and legal trouble.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Check IMEI, VIN, serial numbers in 3 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Scan marketplace listings directly (Facebook, eBay, Craigslist)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Mobile app for in-person meetup verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">100+ databases including NICB, GSMA, police records</span>
                  </li>
                </ul>

                <Button asChild variant="default" className="w-full">
                  <Link to="/verify">
                    Verify an Item
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Seller Protection Card */}
            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-secondary">
                    <BadgeCheck className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">For Sellers</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Stand out from scammers. Prove your items are legitimate and build trust 
                  with serious buyers.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-sm">Get a verified "Safe Badge" to share in listings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-sm">Differentiate yourself from scammers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-sm">Reduce buyer hesitation and close sales faster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-sm">Create verification records for dispute protection</span>
                  </li>
                </ul>

                <Button asChild variant="secondary" className="w-full">
                  <Link to="/verify">
                    Verify Your Item
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Also perfect for{' '}
              <Link to="/for-pawn-shops" className="text-primary hover:underline">pawn shops</Link>,{' '}
              <Link to="/for-resellers" className="text-primary hover:underline">resellers</Link>,{' '}
              <Link to="/for-dealers" className="text-primary hover:underline">dealers</Link>, and{' '}
              <Link to="/for-businesses" className="text-primary hover:underline">businesses</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
