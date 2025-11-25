import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { BotVisibleContent } from '@/components/seo/BotVisibleContent';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Link } from 'react-router-dom';
import { Search, Shield, CheckCircle, Database, Zap, AlertTriangle } from 'lucide-react';
import { HowSafeOrStolenWorksSection } from '@/components/home/HowSafeOrStolenWorksSection';
import { MarketplaceSafetySection } from '@/components/home/MarketplaceSafetySection';

const HowItWorksPage = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify if an Item is Stolen",
      "description": "Step-by-step guide to checking IMEI, VIN, and serial numbers against stolen goods databases",
      "totalTime": "PT30S",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Find Identifier",
          "text": "Locate IMEI (phones), VIN (vehicles), or serial number (electronics)"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Enter Number",
          "text": "Type or scan identifier into SafeOrStolen verification tool"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Get Results",
          "text": "Receive instant results showing stolen/safe status"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Make Decision",
          "text": "If safe, proceed with purchase. If stolen, report to police."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stolen Item Verification Methodology",
      "description": "Comprehensive verification service checking multiple databases",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Verification Methodology Service"
    }
  ];

  return (
    <>
      <PageSEO
        title="How to Check if a Phone/Car is Stolen Before Buying | 3 Simple Steps"
        description="Step-by-step guide: How do I know if something is stolen? Enter IMEI/VIN/serial → We scan 50M+ stolen goods databases → Get instant Safe or Stolen status. Works for phones, cars, electronics."
        keywords="how do I check if phone is stolen, how to verify car not stolen, can I check if something is stolen, IMEI check tutorial, VIN verification guide, stolen goods database search, check before buying used items"
        canonical="/how-it-works"
        structuredData={[structuredData]}
      />
      
      {/* Bot-visible content for search engines */}
      <BotVisibleContent>
        <h1>How SafeOrStolen Works</h1>
        <p>Verify items before you buy with our comprehensive multi-source verification system. Check IMEI, VIN, and serial numbers against stolen goods databases.</p>
        
        <h2>The Verification Process</h2>
        <p>Step 1: Enter Identifier - Input the IMEI, VIN, or serial number of the item you want to verify.</p>
        <p>Step 2: Multi-Source Check - We search our database plus BikeIndex, StolenRegister, and more.</p>
        <p>Step 3: Instant Results - Get comprehensive results in seconds from all sources.</p>
        <p>Step 4: Make Informed Decision - See clear status and details before completing your purchase.</p>
        
        <h2>What We Check</h2>
        <p>Phones & Tablets: Check IMEI numbers against stolen phone databases including iPhone, Samsung Galaxy, iPad, Android tablets.</p>
        <p>Vehicles: Verify VINs against motor vehicle theft databases including cars, trucks, motorcycles, RVs.</p>
        <p>Electronics: Validate serial numbers for laptops, cameras, gaming consoles, power tools.</p>
        <p>Bicycles: Check against BikeIndex and global bike registries including road bikes, mountain bikes, e-bikes.</p>
        
        <h2>Data Sources</h2>
        <p>We check multiple databases: Global theft reports from law enforcement agencies, manufacturer blacklist databases, insurance company stolen property records, verified community reports, and marketplace flagged items.</p>
        
        <h2>How to Use SafeOrStolen</h2>
        <p>Enter IMEI, VIN, or serial number. Our system searches across all data sources. Results show safe, stolen, or flagged status. View detailed information and make informed decisions.</p>
      </BotVisibleContent>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'How It Works', href: '/how-it-works' }]} />
        </div>
        
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How SafeOrStolen Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verify items before you buy with our comprehensive multi-source verification system
            </p>
          </div>
        </section>

        {/* Main Process */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">The Verification Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <ProcessStep
                icon={<Search className="h-8 w-8" />}
                number="1"
                title="Enter Identifier"
                description="Input the IMEI, VIN, or serial number of the item you want to verify"
              />
              <ProcessStep
                icon={<Database className="h-8 w-8" />}
                number="2"
                title="Multi-Source Check"
                description="We search our database plus BikeIndex, StolenRegister, and more"
              />
              <ProcessStep
                icon={<Zap className="h-8 w-8" />}
                number="3"
                title="Instant Results"
                description="Get comprehensive results in seconds from all sources"
              />
              <ProcessStep
                icon={<Shield className="h-8 w-8" />}
                number="4"
                title="Make Informed Decision"
                description="See clear status and details before completing your purchase"
              />
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What We Check</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ItemTypeCard
                icon="📱"
                title="Phones & Tablets"
                description="Check IMEI numbers against stolen phone databases"
                examples={['iPhone', 'Samsung Galaxy', 'iPad', 'Android tablets']}
              />
              <ItemTypeCard
                icon="🚗"
                title="Vehicles"
                description="Verify VIN numbers for cars, trucks, motorcycles"
                examples={['Cars', 'Trucks', 'Motorcycles', 'RVs']}
              />
              <ItemTypeCard
                icon="🚲"
                title="Bicycles"
                description="Search bike serial numbers in BikeIndex and our database"
                examples={['Road bikes', 'Mountain bikes', 'E-bikes', 'BMX']}
              />
              <ItemTypeCard
                icon="💻"
                title="Electronics"
                description="Check serial numbers for laptops, cameras, tools, and more"
                examples={['Laptops', 'Cameras', 'Gaming consoles', 'Power tools']}
              />
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Data Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <DataSourceCard
                title="SafeOrStolen Database"
                description="Our proprietary database of user-reported stolen items"
                icon="🏠"
              />
              <DataSourceCard
                title="BikeIndex.org"
                description="1.4M bikes cataloged, 159K stolen bikes registered"
                icon="🚴"
              />
              <DataSourceCard
                title="StolenRegister.com"
                description="Community-reported stolen property database"
                icon="🔍"
              />
              <DataSourceCard
                title="NHTSA Database"
                description="Official vehicle identification and specifications"
                icon="🚗"
              />
              <DataSourceCard
                title="Stolen911"
                description="Police detective-founded stolen property service"
                icon="🚨"
              />
              <DataSourceCard
                title="More Coming Soon"
                description="We're constantly adding new data sources"
                icon="➕"
              />
            </div>
          </div>
        </section>

        {/* How to Find Identifiers */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">How to Find Identifiers</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📱</span> IMEI (Phone/Tablet)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Dial *#06# on your phone</p>
                    <p><strong>Method 2:</strong> Settings → About Phone → IMEI</p>
                    <p><strong>Method 3:</strong> Check the original box or SIM tray</p>
                    <p className="text-sm text-muted-foreground">IMEI is 15 digits long</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🚗</span> VIN (Vehicle)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Dashboard near windshield (driver's side)</p>
                    <p><strong>Method 2:</strong> Driver's side door jamb sticker</p>
                    <p><strong>Method 3:</strong> Vehicle registration or insurance card</p>
                    <p className="text-sm text-muted-foreground">VIN is 17 characters long</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🔢</span> Serial Number (Electronics/Other)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Check device label or sticker</p>
                    <p><strong>Method 2:</strong> Settings → About → Serial Number</p>
                    <p><strong>Method 3:</strong> Original packaging or receipt</p>
                    <p className="text-sm text-muted-foreground">Serial numbers vary in length</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Free vs Premium */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Free vs Premium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 border-border">
                <CardHeader className="bg-muted/30">
                  <CardTitle>Free Plan</CardTitle>
                  <CardDescription>Great for occasional buyers</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>2 free searches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Valid for 1 week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Multi-source verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Basic search history</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <Link to="/auth">Get Started Free</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    Premium Plan
                    <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">Popular</span>
                  </CardTitle>
                  <CardDescription>For serious buyers & sellers</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span><strong>Unlimited searches</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Multi-source verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Full search history</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>API access (coming soon)</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why Verification Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="pt-6">
                  <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Avoid Legal Issues</h3>
                  <p className="text-muted-foreground">
                    Buying stolen property is illegal and you could lose both the item and your money
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/20">
                <CardContent className="pt-6">
                  <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Protect Your Investment</h3>
                  <p className="text-muted-foreground">
                    Stolen items can be remotely disabled, blacklisted, or confiscated by police
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Peace of Mind</h3>
                  <p className="text-muted-foreground">
                    Buy with confidence knowing you've checked all available databases
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How SafeOrStolen Works - Detailed Section */}
        <HowSafeOrStolenWorksSection />
        
        {/* Marketplace Safety Section */}
        <MarketplaceSafetySection />
        
        {/* Statistics */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">50,000+</div>
                  <div className="text-xl opacity-90">Items Verified</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">1,200+</div>
                  <div className="text-xl opacity-90">Stolen Items Identified</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">$2.5M+</div>
                  <div className="text-xl opacity-90">Fraud Prevented</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <FAQItem
                question="How accurate are the results?"
                answer="We search multiple databases and provide results from each source. While we strive for accuracy, we recommend verifying with the seller and local authorities for high-value items."
              />
              <FAQItem
                question="What if an item isn't in your database?"
                answer="A 'not found' result means the item doesn't appear in our databases at the time of search. This is generally a good sign, but always exercise caution and verify seller authenticity."
              />
              <FAQItem
                question="Can I report a stolen item?"
                answer="Yes! You can report stolen items through your dashboard, and we'll add them to our database to help others avoid buying stolen property."
              />
              <FAQItem
                question="Do you store my search history?"
                answer="For registered users, we store search history to help you track items you've verified. Free users have limited history access."
              />
              <FAQItem
                question="What if I find my stolen item on SafeOrStolen?"
                answer="Contact local law enforcement immediately with the verification report. We can provide supporting documentation to help with recovery."
              />
            </div>
          </div>
        </section>

        {/* What We Check - Item Types */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Data Sources We Check</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <DataSourceCard
                title="SafeOrStolen Database"
                description="Our proprietary database of user-reported stolen items"
                icon="🏠"
              />
              <DataSourceCard
                title="BikeIndex.org"
                description="1.4M bikes cataloged, 159K stolen bikes registered"
                icon="🚴"
              />
              <DataSourceCard
                title="StolenRegister.com"
                description="Community-reported stolen property database"
                icon="🔍"
              />
              <DataSourceCard
                title="NHTSA Database"
                description="Official vehicle identification and specifications"
                icon="🚗"
              />
              <DataSourceCard
                title="Stolen911"
                description="Police detective-founded stolen property service"
                icon="🚨"
              />
              <DataSourceCard
                title="More Coming Soon"
                description="We're constantly adding new data sources"
                icon="➕"
              />
            </div>
          </div>
        </section>

        {/* How to Find Identifiers */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">How to Find Identifiers</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📱</span> IMEI (Phone/Tablet)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Dial *#06# on your phone</p>
                    <p><strong>Method 2:</strong> Settings → About Phone → IMEI</p>
                    <p><strong>Method 3:</strong> Check the original box or SIM tray</p>
                    <p className="text-sm text-muted-foreground">IMEI is 15 digits long</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🚗</span> VIN (Vehicle)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Dashboard near windshield (driver's side)</p>
                    <p><strong>Method 2:</strong> Driver's side door jamb sticker</p>
                    <p><strong>Method 3:</strong> Vehicle registration or insurance card</p>
                    <p className="text-sm text-muted-foreground">VIN is 17 characters long</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🔢</span> Serial Number (Electronics/Other)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Check device label or sticker</p>
                    <p><strong>Method 2:</strong> Settings → About → Serial Number</p>
                    <p><strong>Method 3:</strong> Original packaging or receipt</p>
                    <p className="text-sm text-muted-foreground">Serial numbers vary in length</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Free vs Premium */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Free vs Premium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 border-border">
                <CardHeader className="bg-muted/30">
                  <CardTitle>Free Plan</CardTitle>
                  <CardDescription>Great for occasional buyers</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>2 free searches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Valid for 1 week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Multi-source verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Basic search history</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <Link to="/auth">Get Started Free</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    Premium Plan
                    <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">Popular</span>
                  </CardTitle>
                  <CardDescription>For serious buyers & sellers</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span><strong>Unlimited searches</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Multi-source verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Full search history</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>API access (coming soon)</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Start with 2 free searches today
            </p>
            <Button size="lg" asChild>
              <Link to="/dashboard">Start Verification</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

// Component Helpers
function ProcessStep({ icon, number, title, description }: { icon: React.ReactNode; number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
        {number}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ItemTypeCard({ icon, title, description, examples }: { icon: string; title: string; description: string; examples: string[] }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, idx) => (
            <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
              {example}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function DataSourceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Card>
      <CardContent className="pt-6 text-center">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setIsOpen(!isOpen)}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{question}</h3>
          <span className="text-2xl text-primary">{isOpen ? '−' : '+'}</span>
        </div>
        {isOpen && (
          <p className="text-muted-foreground mt-3">{answer}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default HowItWorksPage;

