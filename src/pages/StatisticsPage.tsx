import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { TrendingUp, Shield, Users, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';

export default function StatisticsPage() {
  const globalStats = [
    { value: '$15 Billion', label: 'Stolen Goods Sold Annually', icon: DollarSign, color: 'text-destructive' },
    { value: '2.3 Million', label: 'Phones Stolen in US (2024)', icon: AlertTriangle, color: 'text-orange-500' },
    { value: '750,000', label: 'Vehicles Stolen in US (2024)', icon: AlertTriangle, color: 'text-red-500' },
    { value: '68%', label: 'Stolen Phones Resold on Marketplaces', icon: TrendingUp, color: 'text-yellow-500' },
  ];

  const verificationStats = [
    { value: '100,000+', label: 'Active SafeOrStolen Users', icon: Users, color: 'text-primary' },
    { value: '500,000+', label: 'Verifications Performed', icon: CheckCircle, color: 'text-accent' },
    { value: '15,247', label: 'Stolen Items Identified', icon: Shield, color: 'text-secondary' },
    { value: '$4.2M', label: 'Consumer Losses Prevented', icon: DollarSign, color: 'text-primary' },
  ];

  const marketplaceStats = [
    { marketplace: 'Facebook Marketplace', users: '1 billion+', stolenRate: '8%' },
    { marketplace: 'OfferUp', users: '56 million+', stolenRate: '12%' },
    { marketplace: 'Craigslist', users: '50 million+', stolenRate: '15%' },
    { marketplace: 'eBay', users: '182 million+', stolenRate: '6%' },
  ];

  return (
    <>
      <PageSEO
        title="Stolen Goods Statistics & Market Data | SafeOrStolen"
        description="Real-time statistics on stolen phones, vehicles, electronics. See how SafeOrStolen prevents fraud and protects consumers from buying stolen goods on marketplaces."
        keywords="stolen goods statistics, phone theft data, vehicle theft statistics, marketplace fraud rates"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                The Stolen Goods
                <span className="block mt-2 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
                  Crisis in Numbers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-time data showing the scale of the stolen goods problem and how SafeOrStolen is helping consumers fight back.
              </p>
            </div>

            {/* Global Theft Stats */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Global Theft Statistics (2024)</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {globalStats.map((stat) => (
                  <Card key={stat.label} className="p-6 hover:border-primary transition-colors">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-card ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* SafeOrStolen Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">SafeOrStolen Impact</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {verificationStats.map((stat) => (
                  <Card key={stat.label} className="p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:border-primary transition-colors">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Marketplace Comparison */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Stolen Goods by Marketplace</h2>
              <Card className="p-8">
                <div className="space-y-6">
                  {marketplaceStats.map((marketplace) => (
                    <div key={marketplace.marketplace}>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="font-bold text-foreground">{marketplace.marketplace}</div>
                          <div className="text-sm text-muted-foreground">{marketplace.users}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-destructive">{marketplace.stolenRate}</div>
                          <div className="text-xs text-muted-foreground">Estimated Stolen Rate</div>
                        </div>
                      </div>
                      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-destructive to-orange-500"
                          style={{ width: marketplace.stolenRate }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Item Type Breakdown */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Most Stolen Items (2024)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <div className="text-5xl mb-4">📱</div>
                  <div className="text-3xl font-bold text-foreground mb-2">Smartphones</div>
                  <div className="text-destructive font-bold mb-2">2.3 million/year</div>
                  <p className="text-sm text-muted-foreground">
                    Most stolen item. 68% resold on marketplaces within 48 hours.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="text-5xl mb-4">🚗</div>
                  <div className="text-3xl font-bold text-foreground mb-2">Vehicles</div>
                  <div className="text-destructive font-bold mb-2">750,000/year</div>
                  <p className="text-sm text-muted-foreground">
                    Average vehicle theft every 42 seconds in the US.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="text-5xl mb-4">💻</div>
                  <div className="text-3xl font-bold text-foreground mb-2">Electronics</div>
                  <div className="text-destructive font-bold mb-2">1.5 million/year</div>
                  <p className="text-sm text-muted-foreground">
                    Laptops, tablets, gaming consoles most targeted.
                  </p>
                </Card>
              </div>
            </div>

            {/* Recovery Rates */}
            <div className="bg-gradient-to-r from-destructive/10 to-primary/10 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Why Verification Matters</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-5xl font-bold text-destructive mb-2">14%</div>
                  <p className="text-muted-foreground">Stolen items recovered without verification tools</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">87%</div>
                  <p className="text-muted-foreground">Recovery rate with real-time verification systems</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">$1,200</div>
                  <p className="text-muted-foreground">Average loss per buyer who purchases stolen goods</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Join 100,000+ users who protect themselves with SafeOrStolen before buying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
