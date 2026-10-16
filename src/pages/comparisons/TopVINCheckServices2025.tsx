import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Crown, Shield, DollarSign, FileText } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const TopVINCheckServices2025 = () => {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top VIN Check Services 2026",
    "description": "Side-by-side comparison of VIN check and vehicle history services: what each one searches and what it costs",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "SafeOrStolen",
          "description": "Best for checking whether a vehicle is reported stolen: 2 free checks, then $0.99 a check or $10 a month unlimited"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Carfax",
          "description": "Best for full vehicle history reports"
        }
      }
    ]
  };

  // Oct 7 2026: removed invented star ratings, competitor prices and search limits we
  // couldn't confirm, the "mobile app" column, and the false "title history" tick for SafeOrStolen.
  const vinServices: Array<{
    rank: number;
    name: string;
    badge: string | null;
    badgeColor?: string;
    bestFor: string;
    price: string;
    fullReportPrice: string;
    stolenCheck: boolean;
    titleCheck: boolean;
    accidentHistory: boolean;
    serviceRecords: boolean;
    multipleItems: boolean;
    pros: string[];
    cons: string[];
    cta?: string;
    ctaText?: string;
  }> = [
    {
      rank: 1,
      name: 'SafeOrStolen',
      badge: 'Best for Stolen Checks',
      badgeColor: 'bg-green-500',
      bestFor: 'Checking whether a car is reported stolen before you meet the seller',
      price: '2 free, then $0.99 a check',
      fullReportPrice: '$10 a month for unlimited checks',
      stolenCheck: true,
      titleCheck: false,
      accidentHistory: false,
      serviceRecords: false,
      multipleItems: true,
      pros: [
        'Decodes year, make and model and lists open safety recalls',
        'Searches SafeOrStolen theft reports and public web results',
        'Arizona VINs also searched against Arizona law-enforcement stolen-vehicle records',
        'Also checks phones, bikes, guns and tools',
        'Free installable web app for checks at the meetup'
      ],
      cons: [
        'No title, accident or service history',
        'Outside Arizona, no state police records',
        'Does not search NCIC, DMV or insurer databases'
      ],
      cta: '/verify',
      ctaText: 'Run a VIN check'
    },
    {
      rank: 2,
      name: 'Carfax',
      badge: 'Full History',
      badgeColor: 'bg-blue-500',
      bestFor: 'Complete vehicle history with service records',
      price: 'Paid per report',
      fullReportPrice: 'Multi-report packages; see its site',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: true,
      serviceRecords: true,
      multipleItems: false,
      pros: [
        'Detailed vehicle history',
        'Service record tracking',
        'Accident and damage history',
        'Previous owner count',
        'Well-known name with dealers'
      ],
      cons: [
        'You pay for each report',
        'No free report',
        'Vehicles only'
      ]
    },
    {
      rank: 3,
      name: 'AutoCheck (Experian)',
      badge: null,
      bestFor: 'Score-based vehicle assessment',
      price: 'Paid per report',
      fullReportPrice: 'Multi-report packages; see its site',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: true,
      serviceRecords: false,
      multipleItems: false,
      pros: [
        'AutoCheck Score for comparing similar cars',
        'Strong auction records',
        'Run by Experian'
      ],
      cons: [
        'Less service record detail than Carfax',
        'No free report',
        'Vehicles only'
      ]
    },
    {
      rank: 4,
      name: 'NICB VINCheck',
      badge: 'Free Basic',
      badgeColor: 'bg-amber-500',
      bestFor: 'Free basic theft and salvage check',
      price: 'Free',
      fullReportPrice: 'N/A',
      stolenCheck: true,
      titleCheck: false,
      accidentHistory: false,
      serviceRecords: false,
      multipleItems: false,
      pros: [
        'Free',
        'Theft and salvage records from insurers'
      ],
      cons: [
        'Daily search limit',
        'Only thefts reported through insurance claims',
        'No history beyond theft and salvage'
      ]
    },
    {
      rank: 5,
      name: 'VehicleHistory.com',
      badge: null,
      bestFor: 'Budget vehicle history reports',
      price: 'Low-cost reports',
      fullReportPrice: 'See its site',
      stolenCheck: true,
      titleCheck: true,
      accidentHistory: true,
      serviceRecords: false,
      multipleItems: false,
      pros: [
        'Cheaper than the big names',
        'Basic history included',
        'Recall information'
      ],
      cons: [
        'Thinner records than Carfax or AutoCheck',
        'No service records'
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="Top 5 VIN Check Services 2026 - Carfax Alternatives"
        description="Compare the best VIN check services for 2026. Carfax, AutoCheck, NICB VINCheck alternatives ranked for stolen vehicle verification."
        keywords="best vin check service, vin check comparison, carfax autocheck comparison, vin check, stolen vehicle check"
        canonical="/comparisons/top-vin-check-services-2025"
        structuredData={listSchema}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Updated October 2026
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Top 5 VIN Check Services Compared
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A stolen-vehicle check and a vehicle history report answer different questions. 
                Here's what each service searches, what it costs, and when to use it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/pricing">Subscribe — $10/mo Unlimited</Link>
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
                    <p className="text-xs text-muted-foreground mt-2">2 free, then $0.99 a check</p>
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
                    <p className="text-xs text-muted-foreground mt-2">Paid per report</p>
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
                    <p className="text-xs text-muted-foreground mt-2">Free</p>
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
                        Run the VIN through <strong>SafeOrStolen</strong> (your first 2 checks are free) to see 
                        whether it's reported stolen and has open recalls. If it's flagged, you skip the trip.
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
                <Link to="/app">Get the Free Web App</Link>
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
                      A free check is fine for one question: is this car reported stolen in the records that 
                      service searches? Each one searches different records, so read what's covered. For accidents, 
                      title brands and service records, you need a paid history report.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do I need both a stolen check and Carfax?</h3>
                    <p className="text-muted-foreground">
                      On a car you're serious about, yes. Run the stolen check first, since it's cheap and takes a 
                      few seconds. If it's clean and you still want the car, then pay for the full history report.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What can SafeOrStolen check that Carfax can't?</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen searches its own theft reports and public web results that mention the VIN, and for Arizona VINs, Arizona law-enforcement stolen-vehicle records. It also checks phones, plates, serial-numbered electronics and power tools, firearms and bicycles, which Carfax doesn't.
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
      </div>
    </>
  );
};

export default TopVINCheckServices2025;
