import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Crown, Shield, Star, Car, Database, DollarSign, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const TopVINCheckServices2025 = () => {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top VIN Check Services 2025",
    "description": "Comprehensive comparison of the best VIN check and vehicle history services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "SafeOrStolen",
          "description": "Best for stolen vehicle verification with free searches"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Carfax",
          "description": "Best for comprehensive vehicle history reports"
        }
      }
    ]
  };

  const vinServices = [
    {
      rank: 1,
      name: 'SafeOrStolen',
      rating: 4.8,
      badge: 'Best for Stolen Checks',
      badgeColor: 'bg-green-500',
      bestFor: 'Verifying if a vehicle is stolen before purchase',
      price: 'Free (2 checks)',
      fullReportPrice: 'Premium subscription',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: false,
      serviceRecords: false,
      ownerHistory: false,
      mobileApp: true,
      multipleItems: true,
      pros: [
        '2 free VIN checks, no credit card required',
        '50M+ database from law enforcement & insurers',
        'Checks more than cars (phones, bikes, tools)',
        'Mobile app for instant verification',
        'AI-powered risk analysis'
      ],
      cons: [
        'No detailed service history',
        'No accident damage estimates',
        'Full reports require subscription'
      ],
      cta: '/verify',
      ctaText: 'Check VIN Free'
    },
    {
      rank: 2,
      name: 'Carfax',
      rating: 4.6,
      badge: 'Most Comprehensive',
      badgeColor: 'bg-blue-500',
      bestFor: 'Complete vehicle history with service records',
      price: '$39.99/report',
      fullReportPrice: '$99.99 (6 reports)',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: true,
      serviceRecords: true,
      ownerHistory: true,
      mobileApp: true,
      multipleItems: false,
      pros: [
        'Most detailed vehicle history',
        'Service record tracking',
        'Accident and damage history',
        'Previous owner information',
        'Trusted brand name'
      ],
      cons: [
        'Expensive per report',
        'No free option',
        'Vehicles only',
        'Dealer data focused'
      ]
    },
    {
      rank: 3,
      name: 'AutoCheck (Experian)',
      rating: 4.4,
      badge: null,
      bestFor: 'Score-based vehicle assessment',
      price: '$24.99/report',
      fullReportPrice: '$49.99 (25 reports)',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: true,
      serviceRecords: false,
      ownerHistory: true,
      mobileApp: true,
      multipleItems: false,
      pros: [
        'AutoCheck Score for easy comparison',
        'Cheaper than Carfax',
        'Good auction data',
        'Experian backing'
      ],
      cons: [
        'Less service record data',
        'Fewer data sources than Carfax',
        'Still no free option'
      ]
    },
    {
      rank: 4,
      name: 'NICB VINCheck',
      rating: 4.0,
      badge: 'Best Free Basic',
      badgeColor: 'bg-amber-500',
      bestFor: 'Free basic theft and salvage check',
      price: 'Free',
      fullReportPrice: 'N/A',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: false,
      serviceRecords: false,
      ownerHistory: false,
      mobileApp: false,
      multipleItems: false,
      pros: [
        'Completely free',
        'Theft and salvage data',
        'Insurance company source'
      ],
      cons: [
        'Limited to 5 searches/day',
        'No detailed history',
        'No mobile app',
        'Vehicles only'
      ]
    },
    {
      rank: 5,
      name: 'VehicleHistory.com',
      rating: 3.8,
      badge: null,
      bestFor: 'Budget vehicle history reports',
      price: '$14.99/report',
      fullReportPrice: '$24.99 (3 reports)',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: true,
      serviceRecords: false,
      ownerHistory: true,
      mobileApp: false,
      multipleItems: false,
      pros: [
        'Affordable pricing',
        'Basic history included',
        'Recall information'
      ],
      cons: [
        'Less comprehensive data',
        'No service records',
        'Limited data sources'
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="Top 5 VIN Check Services Compared - Which is Best for You? (2025)"
        description="Compare the best VIN check services for 2025. We tested Carfax, AutoCheck, NICB VINCheck, and alternatives to find the best for stolen vehicle verification and history reports."
        keywords="best vin check service, vin check comparison, carfax vs autocheck, free vin check, stolen vehicle check"
        canonical="/comparisons/top-vin-check-services-2025"
        structuredData={listSchema}
      />
      <TopNavigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Updated December 2025
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Top 5 VIN Check Services Compared
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Not all VIN check services are created equal. We compared pricing, features, and 
                data sources to help you choose the right one for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/verify">Try Free VIN Check</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#comparison">See Full Comparison</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Cards */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Which Service is Right for You?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-green-500 border-2">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-10 h-10 mx-auto mb-3 text-green-500" />
                    <h3 className="font-bold mb-2">Buying Used Car</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Need to verify it's not stolen before meeting seller
                    </p>
                    <Badge className="bg-green-500 text-white">SafeOrStolen</Badge>
                    <p className="text-xs text-muted-foreground mt-2">Free stolen check</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <FileText className="w-10 h-10 mx-auto mb-3 text-blue-500" />
                    <h3 className="font-bold mb-2">Full History Needed</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Want service records, accidents, and ownership history
                    </p>
                    <Badge className="bg-blue-500 text-white">Carfax</Badge>
                    <p className="text-xs text-muted-foreground mt-2">$39.99/report</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-10 h-10 mx-auto mb-3 text-amber-500" />
                    <h3 className="font-bold mb-2">Basic Free Check</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Just need basic theft/salvage info, no budget
                    </p>
                    <Badge className="bg-amber-500 text-white">NICB VINCheck</Badge>
                    <p className="text-xs text-muted-foreground mt-2">Free (5/day limit)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Quick Feature Comparison</h2>
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left font-semibold border-b border-border text-sm">Service</th>
                    <th className="p-3 text-center font-semibold border-b border-border text-sm">Price</th>
                    <th className="p-3 text-center font-semibold border-b border-border text-sm">Stolen Check</th>
                    <th className="p-3 text-center font-semibold border-b border-border text-sm">Title History</th>
                    <th className="p-3 text-center font-semibold border-b border-border text-sm">Accidents</th>
                    <th className="p-3 text-center font-semibold border-b border-border text-sm">Service Records</th>
                    <th className="p-3 text-center font-semibold border-b border-border text-sm">Mobile App</th>
                  </tr>
                </thead>
                <tbody>
                  {vinServices.map((service, index) => (
                    <tr key={service.name} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}>
                      <td className="p-3 border-b border-border">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{service.name}</span>
                          {service.badge && (
                            <Badge className={`${service.badgeColor} text-white text-xs`}>{service.badge}</Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-center border-b border-border text-sm">{service.price}</td>
                      <td className="p-3 text-center border-b border-border">
                        {service.stolenCheck ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                      <td className="p-3 text-center border-b border-border">
                        {service.titleCheck ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                      <td className="p-3 text-center border-b border-border">
                        {service.accidentHistory ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                      <td className="p-3 text-center border-b border-border">
                        {service.serviceRecords ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                      <td className="p-3 text-center border-b border-border">
                        {service.mobileApp ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Rankings */}
        <section id="comparison" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Detailed Service Reviews</h2>
              
              <div className="space-y-6">
                {vinServices.map((service, index) => (
                  <Card 
                    key={service.name} 
                    className={`overflow-hidden ${index === 0 ? 'border-green-500 border-2 shadow-lg' : ''}`}
                  >
                    <CardHeader className={`${index === 0 ? 'bg-green-500/10' : 'bg-muted/50'}`}>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-bold text-muted-foreground">#{service.rank}</span>
                          <div>
                            <CardTitle className="flex items-center gap-2 flex-wrap">
                              {service.name}
                              {service.badge && (
                                <Badge className={`${service.badgeColor} text-white`}>{service.badge}</Badge>
                              )}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">Best for: {service.bestFor}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
                            />
                          ))}
                          <span className="ml-2 font-semibold">{service.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-500" />
                            Pricing
                          </h4>
                          <div className="space-y-1 text-sm mb-4">
                            <p><span className="text-muted-foreground">Per check:</span> {service.price}</p>
                            <p><span className="text-muted-foreground">Package:</span> {service.fullReportPrice}</p>
                          </div>
                          
                          <h4 className="font-semibold text-green-600 mb-2 text-sm">Pros</h4>
                          <ul className="space-y-1">
                            {service.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2 text-sm">Cons</h4>
                          <ul className="space-y-1 mb-4">
                            {service.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              {service.multipleItems ? <Check className="w-3 h-3 text-green-500" /> : <X className="w-3 h-3 text-red-500" />}
                              Multi-item support
                            </div>
                            <div className="flex items-center gap-1">
                              {service.mobileApp ? <Check className="w-3 h-3 text-green-500" /> : <X className="w-3 h-3 text-red-500" />}
                              Mobile app
                            </div>
                          </div>
                        </div>
                      </div>
                      {service.cta && (
                        <div className="mt-6 pt-4 border-t border-border">
                          <Button asChild className="font-semibold">
                            <Link to={service.cta}>{service.ctaText}</Link>
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

        {/* Our Recommendation */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Crown className="w-8 h-8 text-yellow-500" />
                <h2 className="text-3xl font-bold">Our Recommendation</h2>
              </div>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    <strong>Use a two-step approach for the best results:</strong>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        Before Meeting the Seller
                      </h3>
                      <p className="text-muted-foreground">
                        Use <strong>SafeOrStolen</strong> (free) to verify the vehicle isn't stolen. 
                        This protects you from wasting time on potentially fraudulent listings.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold flex items-center gap-2">
                        <span className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        Before Buying
                      </h3>
                      <p className="text-muted-foreground">
                        Get a full <strong>Carfax report</strong> for detailed history including 
                        accidents, service records, and previous owners.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4">
                    <Button asChild size="lg" className="font-semibold">
                      <Link to="/verify">Start Free VIN Check</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/vin-checker">Learn More About VIN Checks</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Check Any Vehicle for Free</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              SafeOrStolen offers 2 free VIN checks with no credit card required. 
              Verify if a car, motorcycle, or RV is stolen before you buy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/verify">Check VIN Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/app">Get Mobile App</Link>
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
                    <h3 className="font-semibold mb-2">Is a free VIN check reliable?</h3>
                    <p className="text-muted-foreground">
                      Free VIN checks from reputable sources like SafeOrStolen and NICB VINCheck are reliable 
                      for stolen vehicle verification. For complete history, paid reports are more comprehensive.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do I need both a stolen check and Carfax?</h3>
                    <p className="text-muted-foreground">
                      We recommend both. SafeOrStolen's free check verifies the car isn't stolen before you 
                      invest in a full Carfax report. It saves money and time on potentially fraudulent listings.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What can SafeOrStolen check that Carfax can't?</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen checks a 50M+ stolen item database from law enforcement and insurance companies. 
                      It also checks phones, bikes, tools, and other items - not just vehicles.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Where is the VIN located?</h3>
                    <p className="text-muted-foreground">
                      The VIN is typically on the driver's side dashboard (visible through windshield), 
                      the driver's door jamb, or the vehicle registration/title documents.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <RelatedPagesSection 
          currentPage="/comparisons/top-vin-check-services-2025" 
          currentCategory="comparison" 
          maxLinks={6}
        />
      </main>
      
      <Footer />
    </>
  );
};

export default TopVINCheckServices2025;
