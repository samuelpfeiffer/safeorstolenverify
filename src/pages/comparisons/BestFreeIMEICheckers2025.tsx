import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Crown, Shield, Star, Smartphone, Database, DollarSign, Clock } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const BestFreeIMEICheckers2025 = () => {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Free IMEI Checkers 2026",
    "description": "Ranked list of the best free IMEI checker services for verifying stolen phones",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "SafeOrStolen",
          "description": "Best overall free IMEI checker with 100+ stolen item database"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "IMEI.info",
          "description": "Good for device specifications, paid for blacklist check"
        }
      }
    ]
  };

  const imeiCheckers = [
    {
      rank: 1,
      name: 'SafeOrStolen',
      rating: 4.9,
      badge: 'Best Overall',
      badgeColor: 'bg-green-500',
      description: 'The most comprehensive free IMEI checker with law enforcement data',
      freeChecks: '2 free (no card required)',
      blacklistCheck: 'Included free',
      database: '100+ stolen items',
      mobileApp: true,
      itemTypes: 'Phones, cars, bikes, tools, etc.',
      speed: 'Instant',
      pros: [
        'Free stolen/blacklist check included',
        '100+ database from law enforcement & insurers',
        'Checks more than just phones (VIN, serial numbers)',
        'Mobile apps for iOS and Android',
        'AI-powered risk analysis'
      ],
      cons: [
        'Limited to 2 free checks',
        'Full features require subscription'
      ],
      cta: '/verify',
      ctaText: 'Try Free'
    },
    {
      rank: 2,
      name: 'IMEI.info',
      rating: 4.2,
      badge: 'Best for Specs',
      badgeColor: 'bg-blue-500',
      description: 'Detailed device specifications, but blacklist check costs extra',
      freeChecks: 'Unlimited (basic info only)',
      blacklistCheck: '$10 per check (vs SafeOrStolen $10/mo unlimited)',
      database: 'Not disclosed',
      mobileApp: false,
      itemTypes: 'Phones only',
      speed: 'Fast',
      pros: [
        'Free device specifications',
        'Carrier information included',
        'Clean interface'
      ],
      cons: [
        'Blacklist check costs $10+ (SafeOrStolen: $10/mo unlimited)',
        'Phones only - no VIN support',
        'Database size unknown'
      ]
    },
    {
      rank: 3,
      name: 'IMEI24.com',
      rating: 3.8,
      badge: null,
      description: 'Basic IMEI lookup with limited free features',
      freeChecks: 'Limited',
      blacklistCheck: 'Paid',
      database: 'Limited',
      mobileApp: false,
      itemTypes: 'Phones only',
      speed: 'Moderate',
      pros: [
        'Multiple check options',
        'Unlock services available'
      ],
      cons: [
        'Most features are paid',
        'Confusing pricing',
        'No law enforcement data'
      ]
    },
    {
      rank: 4,
      name: 'CheckMEND',
      rating: 3.7,
      badge: null,
      description: 'UK-focused service with good coverage in specific regions',
      freeChecks: 'No free tier',
      blacklistCheck: 'Paid only',
      database: 'UK-focused',
      mobileApp: false,
      itemTypes: 'Phones, tablets',
      speed: 'Moderate',
      pros: [
        'Good UK coverage',
        'Insurance company partnerships'
      ],
      cons: [
        'No free searches',
        'UK-centric database',
        'Limited global coverage'
      ]
    },
    {
      rank: 5,
      name: 'Swappa ESN Check',
      rating: 3.6,
      badge: null,
      description: 'Good if buying on Swappa, but only works on their platform',
      freeChecks: 'Only for Swappa listings',
      blacklistCheck: 'Included (Swappa only)',
      database: 'Carrier data',
      mobileApp: true,
      itemTypes: 'Phones, tablets',
      speed: 'Fast',
      pros: [
        'Free for Swappa listings',
        'Integrated with marketplace',
        'Buyer protection included'
      ],
      cons: [
        'Only works on Swappa',
        "Can't check items from other platforms",
        'Not a standalone service'
      ]
    },
    {
      rank: 6,
      name: 'Doctor SIM',
      rating: 3.4,
      badge: null,
      description: 'Primarily unlock service with IMEI check as secondary feature',
      freeChecks: 'Very limited',
      blacklistCheck: 'Paid',
      database: 'Unknown',
      mobileApp: false,
      itemTypes: 'Phones only',
      speed: 'Slow',
      pros: [
        'Unlock services available',
        'Multiple carrier support'
      ],
      cons: [
        'Primarily unlock-focused',
        'Limited free features',
        'Slow results'
      ]
    },
    {
      rank: 7,
      name: 'IMEI Pro',
      rating: 3.2,
      badge: null,
      description: 'Basic IMEI lookup with outdated interface',
      freeChecks: 'Limited',
      blacklistCheck: 'Paid',
      database: 'Unknown',
      mobileApp: false,
      itemTypes: 'Phones only',
      speed: 'Slow',
      pros: [
        'Simple interface'
      ],
      cons: [
        'Outdated design',
        'Limited features',
        'Unreliable results reported'
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="7 Best Free IMEI Checkers 2026 - Ranked & Compared"
        description="Compare the best free IMEI checkers for 2026. Which offers free blacklist checks and stolen phone verification?"
        keywords="best free imei checker, imei checker 2026, free blacklist check, stolen phone checker, imei lookup free"
        canonical="/comparisons/best-free-imei-checkers-2025"
        structuredData={listSchema}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Updated February 2026
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                7 Best Free IMEI Checkers in 2026
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We tested and ranked the top IMEI checkers to find which ones actually offer 
                free stolen phone verification. Here's what we found.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/verify">Try #1 Pick Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#rankings">See Full Rankings</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Quick Summary: Top 3 Picks</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-green-500 border-2">
                  <CardContent className="p-6 text-center">
                    <Crown className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                    <Badge className="bg-green-500 text-white mb-2">Best Overall</Badge>
                    <h3 className="font-bold text-lg">SafeOrStolen</h3>
                    <p className="text-sm text-muted-foreground mb-4">Free blacklist check + 50M database</p>
                    <Button asChild size="sm" className="w-full">
                      <Link to="/verify">Try Free</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Badge className="bg-blue-500 text-white mb-2">Best for Specs</Badge>
                    <h3 className="font-bold text-lg mt-2">IMEI.info</h3>
                    <p className="text-sm text-muted-foreground mb-4">Free specs, paid blacklist</p>
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Visit Site
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Badge variant="secondary" className="mb-2">Marketplace</Badge>
                    <h3 className="font-bold text-lg mt-2">Swappa</h3>
                    <p className="text-sm text-muted-foreground mb-4">Free on Swappa listings only</p>
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Visit Site
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">What Makes a Good IMEI Checker?</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <DollarSign className="w-6 h-6 mx-auto mb-2 text-green-500" />
                    <h3 className="font-semibold text-sm">Free Blacklist Check</h3>
                    <p className="text-xs text-muted-foreground">Most charge $2-5 for this</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Database className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    <h3 className="font-semibold text-sm">Large Database</h3>
                    <p className="text-xs text-muted-foreground">More data = better results</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                    <h3 className="font-semibold text-sm">Law Enforcement Data</h3>
                    <p className="text-xs text-muted-foreground">Official stolen reports</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                    <h3 className="font-semibold text-sm">Instant Results</h3>
                    <p className="text-xs text-muted-foreground">No waiting around</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Full Rankings */}
        <section id="rankings" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Complete 2025 Rankings</h2>
              
              <div className="space-y-6">
                {imeiCheckers.map((checker, index) => (
                  <Card 
                    key={checker.name} 
                    className={`overflow-hidden ${index === 0 ? 'border-green-500 border-2 shadow-lg' : ''}`}
                  >
                    <CardHeader className={`${index === 0 ? 'bg-green-500/10' : 'bg-muted/50'}`}>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-bold text-muted-foreground">#{checker.rank}</span>
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {checker.name}
                              {checker.badge && (
                                <Badge className={`${checker.badgeColor} text-white`}>{checker.badge}</Badge>
                              )}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">{checker.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < Math.floor(checker.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
                            />
                          ))}
                          <span className="ml-2 font-semibold">{checker.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="text-muted-foreground">Free Checks:</div>
                            <div className="font-medium">{checker.freeChecks}</div>
                            <div className="text-muted-foreground">Blacklist Check:</div>
                            <div className="font-medium">{checker.blacklistCheck}</div>
                            <div className="text-muted-foreground">Database:</div>
                            <div className="font-medium">{checker.database}</div>
                            <div className="text-muted-foreground">Mobile App:</div>
                            <div className="font-medium">{checker.mobileApp ? 'Yes' : 'No'}</div>
                            <div className="text-muted-foreground">Item Types:</div>
                            <div className="font-medium">{checker.itemTypes}</div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2 text-sm">Pros</h4>
                            <ul className="space-y-1">
                              {checker.pros.map((pro, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-600 mb-2 text-sm">Cons</h4>
                            <ul className="space-y-1">
                              {checker.cons.map((con, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {checker.cta && (
                        <div className="mt-6 pt-4 border-t border-border">
                          <Button asChild className="font-semibold">
                            <Link to={checker.cta}>{checker.ctaText}</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Check an IMEI?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              SafeOrStolen offers 2 free IMEI checks with no credit card required. 
              Verify if a phone is stolen before you buy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/verify">Check IMEI Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/imei-checker">Learn About IMEI Checks</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Are free IMEI checkers reliable?</h3>
                    <p className="text-muted-foreground">
                      It depends on the service. SafeOrStolen offers genuinely free blacklist checks 
                      backed by law enforcement data. Many others charge for this feature or use limited databases.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What's the difference between blacklist and stolen check?</h3>
                    <p className="text-muted-foreground">
                      Blacklist refers to phones blocked by carriers (unpaid bills, fraud). 
                      Stolen check looks for devices reported to police or insurance. The best services check both.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">How do I find my IMEI number?</h3>
                    <p className="text-muted-foreground">
                      Dial *#06# on any phone to display the IMEI. You can also find it in Settings → About Phone, 
                      or printed on the original box.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Why do some services charge for blacklist checks?</h3>
                    <p className="text-muted-foreground">
                      Accessing carrier and community theft registries has costs. Some services pass this 
                      to users per-check, while others like SafeOrStolen include it free with limits.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <RelatedPagesSection 
          currentPage="/comparisons/best-free-imei-checkers-2025" 
          currentCategory="comparison" 
          maxLinks={6}
        />
      </div>
    </>
  );
};

export default BestFreeIMEICheckers2025;
