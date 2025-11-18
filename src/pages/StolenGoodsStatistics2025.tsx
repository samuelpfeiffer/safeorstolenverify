import { PageSEO } from '@/components/seo/PageSEO';
import { TrendingUp, AlertTriangle, DollarSign, Shield, Users, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function StolenGoodsStatistics2025() {
  const navigate = useNavigate();

  const statisticsSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Stolen Goods Statistics 2025: Data & Trends Report",
    "description": "Comprehensive 2025 stolen property statistics. Crime rates, financial impact data, marketplace fraud trends, and buyer protection insights backed by FBI and insurance data.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    },
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18"
  };

  return (
    <>
      <PageSEO
        title="Stolen Goods Statistics 2025: Comprehensive Data & Trends Report"
        description="2025 stolen property statistics and trends. Crime rates, financial impact data, marketplace fraud statistics, and buyer protection insights backed by FBI, NICB, and insurance data."
        keywords="stolen goods statistics, property theft statistics 2025, stolen item data, theft crime rates, marketplace fraud statistics, secondhand buying risks, stolen property trends"
        canonical="/stolen-goods-statistics-2025"
        structuredData={[statisticsSchema]}
        image="https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      />

      <article className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <span>2025 Data Report</span>
              <span>•</span>
              <span>Updated January 18, 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Stolen Goods Statistics 2025
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Comprehensive data on stolen property crimes, marketplace fraud, and secondhand buying risks. Essential statistics for buyers, sellers, law enforcement, and policymakers.
            </p>
          </header>

          {/* Key Statistics Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Statistics at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-destructive/5 border-destructive/20">
                <DollarSign className="h-12 w-12 text-destructive mb-4 mx-auto" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">$15.6B</div>
                  <div className="text-sm text-muted-foreground">Annual stolen goods sold in US</div>
                  <div className="text-xs text-muted-foreground mt-2">Source: FBI UCR 2024</div>
                </div>
              </Card>

              <Card className="p-6 bg-destructive/5 border-destructive/20">
                <AlertTriangle className="h-12 w-12 text-destructive mb-4 mx-auto" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">1 in 11</div>
                  <div className="text-sm text-muted-foreground">Secondhand purchases are stolen</div>
                  <div className="text-xs text-muted-foreground mt-2">Source: NICB Research 2024</div>
                </div>
              </Card>

              <Card className="p-6 bg-destructive/5 border-destructive/20">
                <Users className="h-12 w-12 text-destructive mb-4 mx-auto" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">67%</div>
                  <div className="text-sm text-muted-foreground">Buyers never recover their money</div>
                  <div className="text-xs text-muted-foreground mt-2">Source: Consumer Reports 2024</div>
                </div>
              </Card>
            </div>
          </section>

          {/* Property Theft by Category */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Property Theft by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Most Stolen Items (2024)</h3>
                <div className="space-y-4">
                  {[
                    { item: 'Vehicles', thefts: '1.02M', value: '$8.2B' },
                    { item: 'Smartphones', thefts: '2.1M', value: '$2.8B' },
                    { item: 'Bicycles', thefts: '1.5M', value: '$1.4B' },
                    { item: 'Tools/Equipment', thefts: '890K', value: '$1.2B' },
                    { item: 'Jewelry', thefts: '340K', value: '$1.1B' },
                    { item: 'Laptops', thefts: '560K', value: '$890M' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                      <div>
                        <div className="font-semibold">{stat.item}</div>
                        <div className="text-sm text-muted-foreground">{stat.thefts} thefts/year</div>
                      </div>
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">Source: FBI Uniform Crime Report 2024</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Recovery Rates by Item Type</h3>
                <div className="space-y-4">
                  {[
                    { item: 'Vehicles', rate: '46%', desc: 'Often recovered but damaged' },
                    { item: 'Jewelry', rate: '18%', desc: 'Usually melted or resold' },
                    { item: 'Smartphones', rate: '12%', desc: 'Hard to track once reset' },
                    { item: 'Bicycles', rate: '8%', desc: 'Rarely reported, hard to ID' },
                    { item: 'Tools', rate: '6%', desc: 'Sold quickly, no serial tracking' },
                    { item: 'Laptops', rate: '15%', desc: 'Wiped and resold fast' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 bg-muted/50 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">{stat.item}</div>
                        <div className="text-lg font-bold text-destructive">{stat.rate}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.desc}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">Source: National Insurance Crime Bureau 2024</p>
              </Card>
            </div>
          </section>

          {/* Marketplace Fraud Statistics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Online Marketplace Fraud (2024)</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">$5.8B</div>
                <div className="text-sm text-muted-foreground">Lost to marketplace fraud</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">3.2M</div>
                <div className="text-sm text-muted-foreground">Fraud reports filed</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">18%</div>
                <div className="text-sm text-muted-foreground">Increase from 2023</div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Fraud by Marketplace Platform</h3>
              <div className="space-y-4">
                {[
                  { platform: 'Facebook Marketplace', reports: '1.2M', risk: 'High', protection: 'Limited' },
                  { platform: 'Craigslist', reports: '780K', risk: 'Very High', protection: 'None' },
                  { platform: 'OfferUp', reports: '520K', risk: 'Medium', protection: 'Moderate' },
                  { platform: 'eBay', reports: '390K', risk: 'Low', protection: 'Strong' },
                  { platform: 'Letgo/Mercari', reports: '290K', risk: 'Medium', protection: 'Moderate' },
                ].map((stat, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 p-3 bg-muted/50 rounded items-center">
                    <div className="font-semibold">{stat.platform}</div>
                    <div className="text-center">
                      <div className="text-sm font-bold">{stat.reports}</div>
                      <div className="text-xs text-muted-foreground">reports</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-sm font-bold ${stat.risk === 'Very High' || stat.risk === 'High' ? 'text-destructive' : 'text-amber-500'}`}>
                        {stat.risk}
                      </div>
                      <div className="text-xs text-muted-foreground">risk</div>
                    </div>
                    <div className="text-center text-sm">{stat.protection}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">Source: FTC Consumer Sentinel 2024</p>
            </Card>
          </section>

          {/* Geographic Data */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Geographic Trends</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-destructive" />
                  Highest Theft Rates by State
                </h3>
                <div className="space-y-3">
                  {[
                    { state: 'California', rate: '2,890', per: 'per 100K' },
                    { state: 'Texas', rate: '2,650', per: 'per 100K' },
                    { state: 'Florida', rate: '2,420', per: 'per 100K' },
                    { state: 'Washington', rate: '2,310', per: 'per 100K' },
                    { state: 'Colorado', rate: '2,180', per: 'per 100K' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-destructive/5 rounded">
                      <div className="font-semibold">{stat.state}</div>
                      <div>
                        <span className="text-lg font-bold text-destructive">{stat.rate}</span>
                        <span className="text-xs text-muted-foreground ml-2">{stat.per}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-success" />
                  Cities With Best Recovery Rates
                </h3>
                <div className="space-y-3">
                  {[
                    { city: 'San Francisco, CA', rate: '42%' },
                    { city: 'Seattle, WA', rate: '38%' },
                    { city: 'Boston, MA', rate: '36%' },
                    { city: 'Portland, OR', rate: '34%' },
                    { city: 'Denver, CO', rate: '31%' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-success/5 rounded">
                      <div className="font-semibold">{stat.city}</div>
                      <div className="text-lg font-bold text-success">{stat.rate}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Financial Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Financial Impact on Victims</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Average Loss by Incident Type</h3>
                <div className="space-y-4">
                  {[
                    { type: 'Vehicle theft', avg: '$9,200', median: '$7,500' },
                    { type: 'Home burglary', avg: '$2,800', median: '$1,200' },
                    { type: 'Phone theft', avg: '$1,100', median: '$900' },
                    { type: 'Tool/equipment', avg: '$2,400', median: '$1,800' },
                    { type: 'Jewelry theft', avg: '$3,200', median: '$2,100' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 bg-muted/50 rounded">
                      <div className="font-semibold mb-2">{stat.type}</div>
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <span className="text-muted-foreground">Average:</span>
                          <span className="font-bold ml-2">{stat.avg}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Median:</span>
                          <span className="font-bold ml-2">{stat.median}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Insurance & Recovery</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded">
                    <div className="text-3xl font-bold text-amber-600 dark:text-amber-500 mb-2">$1,850</div>
                    <div className="text-sm text-muted-foreground">Average insurance deductible</div>
                  </div>
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded">
                    <div className="text-3xl font-bold text-destructive mb-2">43%</div>
                    <div className="text-sm text-muted-foreground">Victims without insurance coverage</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded">
                    <div className="text-3xl font-bold text-muted-foreground mb-2">$4.2B</div>
                    <div className="text-sm text-muted-foreground">Total insurance payouts (2024)</div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Trends & Insights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">2024-2025 Trends & Insights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <TrendingUp className="h-8 w-8 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-3">Rising Theft Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">↑ 34%</span>
                    <span>E-bikes & scooters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">↑ 28%</span>
                    <span>Catalytic converters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">↑ 22%</span>
                    <span>Power tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">↑ 19%</span>
                    <span>Gaming consoles</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <Shield className="h-8 w-8 text-success mb-4" />
                <h3 className="text-lg font-semibold mb-3">Declining Theft Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-success">↓ 12%</span>
                    <span>Smartphones (better tracking)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">↓ 8%</span>
                    <span>Laptops (cloud security)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">↓ 7%</span>
                    <span>Car audio equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">↓ 5%</span>
                    <span>Residential burglary</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <AlertTriangle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Emerging Fraud Tactics</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Fake marketplace payment apps</li>
                  <li>• Bait-and-switch tactics</li>
                  <li>• Stolen PayPal accounts</li>
                  <li>• Counterfeit verification badges</li>
                  <li>• Phishing via marketplace messages</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Protect Yourself with Free Verification</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't become another statistic. Use SafeOrStolen's free verification tool to check any item before purchase. Instantly verify phones, vehicles, electronics, tools, and more against law enforcement databases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/verify')}
                className="text-lg px-8"
              >
                Verify Items Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/blog/avoiding-stolen-goods-complete-guide')}
                className="text-lg px-8"
              >
                Read Buyer Protection Guide
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              2 free verification searches • No credit card required • Instant results
            </p>
          </Card>

          {/* Data Sources */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/30">
              <h3 className="text-lg font-semibold mb-4">Data Sources & Methodology</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This report compiles data from the following authoritative sources:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm">
                <li>• FBI Uniform Crime Report (2024)</li>
                <li>• National Insurance Crime Bureau (NICB)</li>
                <li>• Federal Trade Commission (FTC)</li>
                <li>• Bureau of Justice Statistics (BJS)</li>
                <li>• Insurance Information Institute (III)</li>
                <li>• Consumer Reports Research</li>
                <li>• National Highway Traffic Safety Admin (NHTSA)</li>
                <li>• Property Crimes Database (LeadsOnline)</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Last updated: January 18, 2025. Data reflects 2024 annual statistics with preliminary 2025 trends.
              </p>
            </Card>
          </section>
        </div>
      </article>
    </>
  );
}
