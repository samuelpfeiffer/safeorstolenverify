import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { MapPin, Shield, TrendingUp, AlertTriangle, Phone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// City data for local SEO targeting
const cityData = {
  'los-angeles': {
    name: 'Los Angeles',
    state: 'California',
    population: '3.9 million',
    theftRate: '1 in 285 residents',
    topStolenItems: ['Vehicles', 'Electronics', 'Bicycles', 'Tools'],
    annualThefts: '45,000+',
    hotspots: ['Downtown LA', 'Hollywood', 'Venice Beach', 'Santa Monica'],
    description: 'Los Angeles faces significant property theft challenges with vehicle theft being the primary concern.',
    coordinates: { lat: 34.0522, lng: -118.2437 }
  },
  'new-york': {
    name: 'New York',
    state: 'New York', 
    population: '8.3 million',
    theftRate: '1 in 398 residents',
    topStolenItems: ['Electronics', 'Bicycles', 'Purses/Wallets', 'Phones'],
    annualThefts: '35,000+',
    hotspots: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx'],
    description: 'New York City has improved theft rates but electronics and bike theft remain significant issues.',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  'chicago': {
    name: 'Chicago',
    state: 'Illinois',
    population: '2.7 million', 
    theftRate: '1 in 312 residents',
    topStolenItems: ['Vehicles', 'Bicycles', 'Tools', 'Electronics'],
    annualThefts: '28,000+',
    hotspots: ['Loop', 'West Side', 'South Side', 'North Side'],
    description: 'Chicago experiences high rates of vehicle and bicycle theft, particularly in downtown areas.',
    coordinates: { lat: 41.8781, lng: -87.6298 }
  },
  'houston': {
    name: 'Houston',
    state: 'Texas',
    population: '2.3 million',
    theftRate: '1 in 267 residents', 
    topStolenItems: ['Vehicles', 'Tools', 'Construction Equipment', 'Electronics'],
    annualThefts: '32,000+',
    hotspots: ['Downtown', 'Montrose', 'Galleria', 'East End'],
    description: 'Houston has high theft rates for vehicles and construction equipment due to its industrial nature.',
    coordinates: { lat: 29.7604, lng: -95.3698 }
  },
  'phoenix': {
    name: 'Phoenix',
    state: 'Arizona',
    population: '1.6 million',
    theftRate: '1 in 243 residents',
    topStolenItems: ['Motorcycles', 'Vehicles', 'Tools', 'Electronics'],
    annualThefts: '22,000+',
    hotspots: ['Central Phoenix', 'South Phoenix', 'West Valley', 'Scottsdale'],
    description: 'Phoenix has one of the highest per-capita theft rates, with motorcycle theft being particularly common.',
    coordinates: { lat: 33.4484, lng: -112.0740 }
  },
  'miami': {
    name: 'Miami',
    state: 'Florida',
    population: '470,000',
    theftRate: '1 in 189 residents',
    topStolenItems: ['Electronics', 'Vehicles', 'Jewelry', 'Phones'],
    annualThefts: '8,500+',
    hotspots: ['South Beach', 'Downtown Miami', 'Wynwood', 'Little Havana'],
    description: 'Miami has the highest per-capita theft rate among major cities, with electronics being primary targets.',
    coordinates: { lat: 25.7617, lng: -80.1918 }
  }
};

const LocalSEOPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityInfo = city ? cityData[city as keyof typeof cityData] : null;

  if (!cityInfo) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">City Not Found</h1>
          <p>We don't have data for this location yet.</p>
          <Button className="mt-4" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Stolen Item Checker {cityInfo.name}, {cityInfo.state} - Verify Before You Buy | SafeOrStolen</title>
        <meta name="description" content={`Professional stolen item verification in ${cityInfo.name}, ${cityInfo.state}. Check ${cityInfo.topStolenItems.join(', ')} against theft databases. ${cityInfo.theftRate} theft risk.`} />
        <meta name="keywords" content={`stolen items ${cityInfo.name}, verify items ${cityInfo.state}, ${cityInfo.name} theft rates, stolen goods checker ${cityInfo.state}`} />
        <link rel="canonical" href={`https://safeorstolen.com/city/${city}`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `SafeOrStolen - ${cityInfo.name}`,
            "description": `Stolen item verification service for ${cityInfo.name}, ${cityInfo.state}`,
            "url": `https://safeorstolen.com/city/${city}`,
            "telephone": "+1-800-SAFE-CHECK",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityInfo.name,
              "addressRegion": cityInfo.state,
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": cityInfo.coordinates.lat,
              "longitude": cityInfo.coordinates.lng
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": cityInfo.coordinates.lat,
                "longitude": cityInfo.coordinates.lng
              },
              "geoRadius": "50000"
            },
            "areaServed": {
              "@type": "City",
              "name": cityInfo.name
            }
          })}
        </script>
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Stolen Item Checker for <span className="text-primary">{cityInfo.name}</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">{cityInfo.state} • Population: {cityInfo.population}</p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Protect yourself from purchasing stolen goods in {cityInfo.name}. {cityInfo.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-destructive/20 border-destructive/30">
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
                    <div className="text-lg font-bold">{cityInfo.theftRate}</div>
                    <div className="text-sm text-muted-foreground">Theft Risk</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/20 border-primary/30">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold">{cityInfo.annualThefts}</div>
                    <div className="text-sm text-muted-foreground">Annual Thefts</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-secondary/20 border-secondary/30">
                  <CardContent className="p-4 text-center">
                    <Shield className="h-8 w-8 text-secondary-foreground mx-auto mb-2" />
                    <div className="text-lg font-bold">Verified</div>
                    <div className="text-sm text-muted-foreground">Protection Available</div>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/dashboard">
                  <Shield className="mr-2 h-5 w-5" />
                  Check an Item in {cityInfo.name} Now
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Top Stolen Items */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Most Stolen Items in {cityInfo.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cityInfo.topStolenItems.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">#{index + 1}</div>
                    <div className="text-lg font-semibold">{item}</div>
                    <Button size="sm" className="mt-4" asChild>
                      <Link to={`/check-${item.toLowerCase()}`}>
                        Verify {item}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* High-Risk Areas */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              High-Risk Areas in {cityInfo.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cityInfo.hotspots.map((area, index) => (
                <Card key={index} className="bg-destructive/10 border-destructive/20">
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="h-6 w-6 text-destructive mx-auto mb-2" />
                    <div className="font-semibold">{area}</div>
                    <div className="text-sm text-muted-foreground mt-1">High Theft Area</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Be extra cautious when buying items from these areas. Always verify before purchasing.
              </p>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Local Resources in {cityInfo.name}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Report Stolen Items</h3>
                  <p className="text-muted-foreground mb-4">
                    If you've been a victim of theft in {cityInfo.name}, report it immediately to local authorities.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• {cityInfo.name} Police Department</li>
                    <li>• FBI Internet Crime Complaint Center</li>
                    <li>• National Insurance Crime Bureau</li>
                    <li>• {cityInfo.state} Attorney General's Office</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-secondary-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-4">Consumer Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    Know your rights when purchasing used items in {cityInfo.state}.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to inspect items before purchase</li>
                    <li>• Right to verify seller identification</li>
                    <li>• Right to request documentation</li>
                    <li>• Right to report suspicious activity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Yourself in {cityInfo.name}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't become a statistic. Verify any used item before you buy in {cityInfo.name}, {cityInfo.state}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/dashboard">
                  <Shield className="mr-2 h-5 w-5" />
                  Start Verification - Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10" asChild>
                <Link to="/comprehensive-guide">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LocalSEOPage;