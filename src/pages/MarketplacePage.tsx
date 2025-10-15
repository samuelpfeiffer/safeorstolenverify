import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export default function MarketplacePage() {
  const navigate = useNavigate();

  const marketplaces = [
    { name: 'Facebook Marketplace', icon: '📱', users: '1 billion+' },
    { name: 'OfferUp', icon: '🛍️', users: '56 million+' },
    { name: 'Craigslist', icon: '📋', users: '50 million+' },
    { name: 'eBay', icon: '🔨', users: '182 million+' },
    { name: 'Letgo', icon: '📦', users: '100 million+' },
    { name: 'Poshmark', icon: '👗', users: '80 million+' },
  ];

  return (
    <>
      <PageSEO
        title="Marketplace Verification - Verify Items Before Buying | SafeOrStolen"
        description="Verify items from Facebook Marketplace, OfferUp, Craigslist, and eBay before buying. Check if phones, cars, and electronics are stolen. Essential buyer protection."
        keywords="facebook marketplace verification, offerup safety, craigslist buyer protection, ebay stolen goods check"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
                <AlertTriangle className="h-4 w-4" />
                <span>$15 Billion in Stolen Goods Sold Annually on Marketplaces</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Protect Yourself When Buying on
                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Online Marketplaces
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                SafeOrStolen is the ONLY mobile app that verifies items from Facebook Marketplace, OfferUp, Craigslist, and eBay BEFORE you meet the seller.
              </p>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-8 text-xl"
                onClick={() => navigate('/auth?tab=signup')}
              >
                📱 Download FREE App - Start Verifying
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                2 FREE verifications • 14-day trial • No credit card
              </p>
            </div>

            {/* Supported Marketplaces */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Supported Marketplaces</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {marketplaces.map((marketplace) => (
                  <div key={marketplace.name} className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors text-center">
                    <div className="text-5xl mb-3">{marketplace.icon}</div>
                    <h3 className="font-bold text-foreground mb-2">{marketplace.name}</h3>
                    <p className="text-sm text-muted-foreground">{marketplace.users}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">How SafeOrStolen Protects You</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">1. Find Item on Marketplace</h3>
                  <p className="text-muted-foreground">
                    Browse Facebook Marketplace, OfferUp, Craigslist, or eBay for phones, cars, electronics, etc.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">2. Verify BEFORE Meeting</h3>
                  <p className="text-muted-foreground">
                    Open SafeOrStolen app, enter IMEI/VIN/serial number, get instant verification results.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">3. Buy with Confidence</h3>
                  <p className="text-muted-foreground">
                    Only meet seller if item is clean. Avoid stolen goods, financial loss, and legal trouble.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-destructive/10 to-primary/10 rounded-2xl p-12 text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">The Marketplace Stolen Goods Crisis</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-bold text-destructive mb-2">$15B</div>
                  <p className="text-muted-foreground">Stolen goods sold annually on marketplaces</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">68%</div>
                  <p className="text-muted-foreground">Of stolen phones end up on marketplaces</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">1 in 10</div>
                  <p className="text-muted-foreground">Marketplace buyers unknowingly buy stolen goods</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-card rounded-2xl p-12 border-2 border-primary text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Meet Marketplace Sellers Without This App</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 50,000+ marketplace buyers who verify items with SafeOrStolen before handing over cash.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-xl"
                onClick={() => navigate('/auth?tab=signup')}
              >
                📱 Download FREE App Now
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Available on iOS App Store and Google Play Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
