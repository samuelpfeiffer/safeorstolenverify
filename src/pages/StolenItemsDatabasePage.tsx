import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Search, 
  Database, 
  AlertTriangle, 
  CheckCircle, 
  Smartphone, 
  Car, 
  Laptop, 
  Bike,
  Watch,
  Camera,
  Wrench,
  Gamepad2,
  Headphones,
  Tablet
} from 'lucide-react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { CanonicalUrl } from '@/components/seo/CanonicalUrl';
import { Link } from 'react-router-dom';

const StolenItemsDatabasePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const itemCategories = [
    { 
      name: 'Mobile Phones', 
      icon: <Smartphone className="h-6 w-6" />, 
      link: '/check-phone',
      description: 'Check IMEI numbers against stolen phone databases',
      examples: ['iPhone stolen check', 'Android IMEI stolen', 'Samsung phone stolen']
    },
    { 
      name: 'Vehicles', 
      icon: <Car className="h-6 w-6" />, 
      link: '/check-car',
      description: 'Verify VIN numbers for stolen cars and motorcycles', 
      examples: ['Stolen car VIN check', 'Motorcycle stolen lookup', 'Used car stolen history']
    },
    { 
      name: 'Laptops & Computers', 
      icon: <Laptop className="h-6 w-6" />, 
      link: '/check-electronics',
      description: 'Check computer serial numbers for theft reports',
      examples: ['MacBook stolen check', 'Dell laptop stolen', 'PC stolen serial number']
    },
    { 
      name: 'Bicycles', 
      icon: <Bike className="h-6 w-6" />, 
      link: '/check-bike',
      description: 'Verify bike frame numbers and registration',
      examples: ['Bike stolen check', 'Bicycle theft lookup', 'Frame number stolen']
    },
    { 
      name: 'Watches & Jewelry', 
      icon: <Watch className="h-6 w-6" />, 
      link: '/check-electronics',
      description: 'Luxury watch and jewelry theft verification',
      examples: ['Rolex stolen check', 'Watch stolen database', 'Jewelry theft lookup']
    },
    { 
      name: 'Electronics', 
      icon: <Camera className="h-6 w-6" />, 
      link: '/check-electronics',
      description: 'Cameras, tablets, gaming consoles and more',
      examples: ['Canon camera stolen', 'iPad stolen check', 'PS5 stolen lookup']
    },
    { 
      name: 'Tools & Equipment', 
      icon: <Wrench className="h-6 w-6" />, 
      link: '/check-electronics',
      description: 'Power tools and professional equipment',
      examples: ['DeWalt tools stolen', 'Milwaukee stolen check', 'Construction tools theft']
    },
    { 
      name: 'Gaming & Audio', 
      icon: <Gamepad2 className="h-6 w-6" />, 
      link: '/check-electronics',
      description: 'Gaming devices and audio equipment',
      examples: ['Xbox stolen check', 'PlayStation stolen', 'AirPods stolen lookup']
    }
  ];

  const commonSearches = [
    'How to check if phone is stolen',
    'Stolen car database lookup', 
    'Is my laptop stolen',
    'Check if bike is stolen',
    'Stolen property verification',
    'IMEI stolen check free',
    'VIN stolen car lookup',
    'Serial number stolen database',
    'Stolen electronics checker',
    'Police stolen items database',
    'How to avoid buying stolen goods',
    'Check if item is reported stolen',
    'Stolen merchandise database',
    'Free stolen item lookup',
    'Verify item not stolen before buying'
  ];

  const warningsSigns = [
    'Price significantly below market value',
    'Seller has no proof of purchase',
    'Multiple similar items for sale',
    'Pressure to buy immediately', 
    'Missing original packaging',
    'Altered or removed serial numbers',
    'Seller avoids meeting in public',
    'Cash only transactions required',
    'Item has signs of forced entry damage',
    'Seller knows little about the product'
  ];

  return (
    <>
      <CanonicalUrl url="https://safeorstolen.com/stolen-items-database" />
      <div className="min-h-screen bg-background">
        <EnhancedSEOHead
        title="Stolen Items Database - Check if Something is Stolen Before You Buy | Free Lookup"
        description="Free stolen items database checker. Verify IMEI, VIN, serial numbers instantly. Check phones, cars, electronics, bikes against police databases. Avoid buying stolen goods with our comprehensive stolen property lookup."
        keywords="stolen items database, stolen property lookup, check if stolen, stolen goods checker, IMEI stolen check, VIN stolen lookup, stolen electronics, stolen car database, police stolen property, stolen merchandise, avoid stolen goods, stolen item verification"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Stolen Items Database",
          "description": "Comprehensive database to check if items are stolen before purchase",
          "url": "https://safeorstolen.com/stolen-items-database",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "IMEI stolen phone check",
            "VIN stolen car lookup", 
            "Electronics serial number verification",
            "Bike theft database search",
            "Stolen property verification"
          ]
        })}
      </script>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Stolen Items Database
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Check if any item is stolen before you buy. Instant verification against multiple stolen property databases. 
            Protect yourself from buying stolen goods with our free comprehensive lookup service.
          </p>
          
          <Alert className="mb-8 bg-destructive/10 border-destructive max-w-4xl mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-left">
              <strong>Important:</strong> Always verify items before purchase. Buying stolen goods is illegal and can result in loss of money and legal consequences.
            </AlertDescription>
          </Alert>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                placeholder="Enter serial number, IMEI, or VIN to check if stolen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button asChild>
                <Link to={`/?search=${encodeURIComponent(searchQuery)}`}>
                  <Search className="h-4 w-4 mr-2" />
                  Check Now
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Item Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Check Any Stolen Item Type</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itemCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {category.examples.map((example, exIndex) => (
                      <div key={exIndex} className="text-sm text-muted-foreground">
                        • {example}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={category.link}>Check {category.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Searches */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Most Common Stolen Item Searches</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {commonSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start text-left h-auto py-3 px-4"
                    asChild
                  >
                    <Link to={`/?search=${encodeURIComponent(search)}`}>
                      <Search className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{search}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Check if Something is Stolen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Enter Item Details</h3>
                <p className="text-muted-foreground">
                  Input the serial number, IMEI, VIN, or other identifying information of the item you want to check.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Database Search</h3>
                <p className="text-muted-foreground">
                  Our system searches multiple stolen property databases including police records and insurance claims.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Results</h3>
                <p className="text-muted-foreground">
                  Receive instant results showing if the item is reported stolen, safe to buy, or requires further verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Warning Signs of Stolen Goods</h2>
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {warningsSigns.map((warning, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{warning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Database Sources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Stolen Property Database Sources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Law Enforcement Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    National Crime Information Center (NCIC)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Local Police Department Records
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    FBI Stolen Property Database
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    International Crime Databases
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Insurance & Industry Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    National Insurance Crime Bureau (NICB)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Manufacturer Theft Reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Carrier Blacklist Databases
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Registry Theft Networks
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Stolen Items FAQ</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                q: "How do I check if a phone is stolen?",
                a: "Enter the phone's IMEI number (found in Settings > About or dial *#06#) into our stolen phone checker. We'll search carrier blacklists and police databases instantly."
              },
              {
                q: "Can I check if a car is stolen for free?",
                a: "Yes! Use our free VIN checker to verify if a vehicle is reported stolen. We search NICB databases and law enforcement records."
              },
              {
                q: "What should I do if I bought something stolen?",
                a: "Contact law enforcement immediately. You may lose the item and money, but cooperating helps catch thieves and protects others."
              },
              {
                q: "How accurate are stolen item databases?",
                a: "Our databases are highly accurate but depend on items being reported. Always ask for proof of purchase and verify seller identity."
              },
              {
                q: "Can I check serial numbers for stolen electronics?",
                a: "Yes! Enter the serial number into our electronics checker. We verify against manufacturer theft reports and police databases."
              },
              {
                q: "Is it illegal to unknowingly buy stolen goods?",
                a: "While intent matters, you can still face legal issues and lose the item. Always verify legitimacy before purchasing."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Start Checking for Stolen Items Now</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't risk buying stolen goods. Our free database covers millions of stolen items across all categories. 
                Protect yourself and others by verifying before you buy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/">Check Any Item Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/how-to-check-if-item-stolen">Learn How It Works</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </>
  );
};

export default StolenItemsDatabasePage;