import { Shield, ShoppingCart, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from '@/lib/router-compat';

export const MarketplaceSafetySection = () => {
  const navigate = useNavigate();

  const marketplaces = [
    { name: "eBay", color: "text-blue-600" },
    { name: "Facebook Marketplace", color: "text-blue-500" },
    { name: "OfferUp", color: "text-green-600" },
    { name: "Craigslist", color: "text-purple-600" },
    { name: "Auctions", color: "text-orange-600" },
    { name: "Pawn Shops", color: "text-yellow-700" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop Safely on <span className="text-primary">Every Marketplace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Buying on eBay, Facebook Marketplace, OfferUp, or at auctions? Verify items before you buy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Marketplace Verification */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <ShoppingCart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Marketplace Safety</h3>
              <p className="text-muted-foreground mb-4">
                Protect yourself when buying on eBay, Facebook Marketplace, OfferUp, or Craigslist. Verify phones, electronics, and items instantly.
              </p>
              <Button variant="outline" onClick={() => navigate('/app/ebay-verification')}>
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Vehicle Verification - Carfax Alternative */}
          <Card className="border-2 border-primary/50 bg-primary/5 hover:border-primary transition-all">
            <CardContent className="pt-6">
              <Car className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Carfax Alternative</h3>
              <p className="text-muted-foreground mb-4">
                Don't pay $39.99 for Carfax. Check VIN numbers and stolen vehicle status starting at $3.99/check. Download our app or verify online.
              </p>
              <Button onClick={() => navigate('/carfax-alternative')}>
                Try Now
              </Button>
            </CardContent>
          </Card>

          {/* Auction & Pawn Shop Safety */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Auction & Pawn Shop Protection</h3>
              <p className="text-muted-foreground mb-4">
                Buying at auctions or pawn shops? Verify items on-site with our mobile app. Instant stolen goods verification.
              </p>
              <Button variant="outline" onClick={() => navigate('/app')}>
                Download App
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Marketplace Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted for verification on:</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {marketplaces.map((marketplace) => (
              <span key={marketplace.name} className={`text-lg font-semibold ${marketplace.color}`}>
                {marketplace.name}
              </span>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">2</div>
            <div className="text-sm text-muted-foreground">Free checks to start</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">$0</div>
            <div className="text-sm text-muted-foreground">Starting cost per check</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">Major marketplaces</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">Seconds</div>
            <div className="text-sm text-muted-foreground">To get a result</div>
          </div>
        </div>
      </div>
    </section>
  );
};
