import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Check, X, Shield, Smartphone, Car, Bike, ArrowRight, Star, Award, Crown, Laptop } from 'lucide-react';
const BestStolenItemCheckers2026 = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Stolen Item Checkers 2026 - Compare Top Verification Tools",
    "description": "Compare the best stolen item verification tools in 2026. IMEI checkers, VIN lookup, bike registry, firearm database comparison.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-01-31"
  };

  const tools = [
    {
      rank: 1,
      name: 'SafeOrStolen',
      url: '/verify',
      rating: 4.9,
      pros: ['All item types in one place', 'Free installable web app', 'Marketplace URL analysis', '2 free checks', 'Every source searched is listed'],
      cons: ['Newer platform', 'Premium for unlimited'],
      categories: ['phones', 'vehicles', 'bikes', 'electronics', 'firearms'],
      winner: true
    },
    {
      rank: 2,
      name: 'IMEI.info',
      url: '',
      rating: 4.5,
      pros: ['Free IMEI lookup', 'Brand-specific checks', 'Warranty info'],
      cons: ['Phones only', 'Paid for detailed reports'],
      categories: ['phones']
    },
    {
      rank: 3,
      name: 'Swappa IMEI Check',
      url: '',
      rating: 4.4,
      pros: ['Free basic check', 'Trusted marketplace', 'Fast results'],
      cons: ['Phones only', 'Part of marketplace ecosystem', 'Limited databases'],
      categories: ['phones']
    },
    {
      rank: 4,
      name: 'NICB VINCheck',
      url: '',
      rating: 4.3,
      pros: ['Official insurance data', 'Free unlimited', 'Trusted source'],
      cons: ['Vehicles only', 'US theft claims only', 'No other item types'],
      categories: ['vehicles']
    },
    {
      rank: 5,
      name: 'VinCheck.info',
      url: '',
      rating: 4.2,
      pros: ['Free VIN decode', 'License plate lookup'],
      cons: ['Vehicles only', 'Ads on site', 'Upsells for reports'],
      categories: ['vehicles']
    },
    {
      rank: 6,
      name: 'Bike Index',
      url: '',
      rating: 4.1,
      pros: ['Free registration', 'Community-driven', 'Free to search'],
      cons: ['Bikes only', 'Relies on user reports', 'Limited to registered bikes'],
      categories: ['bikes']
    },
    {
      rank: 7,
      name: 'HotGunz',
      url: '',
      rating: 3.9,
      pros: ['Free stolen gun database', 'Simple search'],
      cons: ['Firearms only', 'User-submitted', 'Outdated interface'],
      categories: ['firearms']
    },
    {
      rank: 8,
      name: 'CheckMEND',
      url: '',
      rating: 3.8,
      pros: ['Detailed device reports', 'Long-running UK service'],
      cons: ['Paid service', 'Account required'],
      categories: ['phones', 'electronics']
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'phones': return <Smartphone className="h-4 w-4" />;
      case 'vehicles': return <Car className="h-4 w-4" />;
      case 'bikes': return <Bike className="h-4 w-4" />;
      case 'electronics': return <Laptop className="h-4 w-4" />;
      case 'firearms': return <Shield className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
      <PageSEO
        title="Best Stolen Item Checkers 2026 - Compare Top Verification Tools"
        description="Compare the best stolen item verification tools in 2026. IMEI checkers, VIN lookup, bike registry, firearm database - find the right tool for your needs."
        keywords="best stolen item checker, IMEI check comparison, VIN lookup tools, stolen phone checker, stolen car verification, bike serial check"
        canonical="/best-stolen-item-checkers-2026"
        structuredData={articleSchema}
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Updated January 2026
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best Stolen Item Checkers 2026
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Compare the top stolen item verification tools. From IMEI checkers to VIN lookup services — find the right tool to protect yourself from stolen goods.
          </p>
        </section>

        {/* Quick Summary */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="h-8 w-8 text-yellow-500" />
                <h2 className="text-2xl font-bold">Our Top Pick: SafeOrStolen</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                SafeOrStolen covers <strong>all item types</strong> — phones, vehicles, bikes, electronics, and firearms — in one place. With an installable web app, marketplace URL analysis, and 2 free searches, it's a single place for marketplace buyers and sellers to check before they pay.
              </p>
              <Button asChild size="lg">
                <Link to="/verify">
                  Try SafeOrStolen Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Rankings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2026 Rankings</h2>
          
          <div className="space-y-6">
            {tools.map((tool) => (
              <Card key={tool.rank} className={tool.winner ? 'border-primary border-2' : ''}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Rank & Name */}
                    <div className="flex items-center gap-4 lg:w-48">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                        tool.rank === 1 ? 'bg-yellow-500 text-white' :
                        tool.rank === 2 ? 'bg-gray-400 text-white' :
                        tool.rank === 3 ? 'bg-orange-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        #{tool.rank}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{tool.name}</h3>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="lg:w-48">
                      <p className="text-sm text-muted-foreground mb-2">Categories:</p>
                      <div className="flex flex-wrap gap-2">
                        {tool.categories.map((cat) => (
                          <span key={cat} className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-[0.25rem] text-xs">
                            {getCategoryIcon(cat)}
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-2">Pros:</p>
                        <ul className="space-y-1">
                          {tool.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-red-600 mb-2">Cons:</p>
                        <ul className="space-y-1">
                          {tool.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    {tool.url.startsWith('/') && (
                      <div className="lg:w-32 flex items-center">
                        <Button asChild variant={tool.winner ? 'default' : 'outline'} className="w-full">
                          <Link to={tool.url}>
                            {tool.winner ? 'Try Free' : 'Visit'}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison by Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Best Tools by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Best for Phones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Winner: SafeOrStolen</strong> — Checks IMEI against global databases plus offers other item types in one app.
                </p>
                <p className="text-sm text-muted-foreground">
                  Runners-up: IMEI.info, Swappa IMEI Check
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Car className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Best for Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Winner: SafeOrStolen</strong> — VIN check plus the ability to verify the phone the seller is using.
                </p>
                <p className="text-sm text-muted-foreground">
                  Runners-up: NICB VINCheck, VinCheck.info
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bike className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Best for Bikes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Winner: Bike Index</strong> — A dedicated bike registry you can search yourself for free. SafeOrStolen is a close second for multi-category needs, and its bike check searches a national stolen-bicycle registry along with its own theft reports.
                </p>
                <p className="text-sm text-muted-foreground">
                  Runners-up: SafeOrStolen, BikeRegister
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Laptop className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Best for Electronics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Winner: SafeOrStolen</strong> — Only platform that checks laptops, gaming consoles, cameras in addition to phones.
                </p>
                <p className="text-sm text-muted-foreground">
                  Runner-up: Ask Your Carrier (free)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Best for Firearms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Winner: SafeOrStolen</strong> — Consumer-friendly firearm check plus all other item types.
                </p>
                <p className="text-sm text-muted-foreground">
                  Runners-up:  (firearms only)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Best Overall</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Winner: SafeOrStolen</strong> — SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.
                </p>
                <p className="text-sm text-muted-foreground">
                  Why: Universal verification in one place
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Verify?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of smart buyers who verify before purchasing. 2 free searches — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Start Free Verification</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get Mobile App</Link>
            </Button>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default BestStolenItemCheckers2026;
