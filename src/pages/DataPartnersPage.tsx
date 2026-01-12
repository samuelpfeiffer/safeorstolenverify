import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Database, 
  Car, 
  Smartphone, 
  Bike, 
  AlertTriangle,
  CheckCircle,
  Globe,
  Lock,
  Zap,
  ArrowRight
} from 'lucide-react';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';

const DataPartnersPage = () => {
  const lawEnforcementDatabases = [
    { name: 'NCIC (National Crime Information Center)', description: 'FBI-operated national stolen property database' },
    { name: 'State police stolen property databases', description: 'All 50 state law enforcement records' },
    { name: 'FBI records', description: 'Federal Bureau of Investigation theft reports' },
    { name: 'ATF firearm records', description: 'Bureau of Alcohol, Tobacco, Firearms and Explosives' },
  ];

  const vehicleDatabases = [
    { name: 'NICB (National Insurance Crime Bureau)', description: 'Insurance industry theft database' },
    { name: 'State DMV records', description: 'All 50 state Department of Motor Vehicles' },
    { name: 'License plate databases', description: 'All 50 states covered' },
    { name: 'VIN theft records', description: 'Vehicle identification number history' },
    { name: 'Carfax theft data', description: 'Vehicle history theft reports' },
  ];

  const phoneDatabases = [
    { name: 'GSMA Device Registry', description: 'Global mobile device database' },
    { name: 'IMEI blacklist databases', description: 'Carrier and international blacklists' },
    { name: 'Insurance claims records', description: 'Stolen device claims' },
    { name: 'Carrier blacklists', description: 'T-Mobile, AT&T, Verizon, etc.' },
  ];

  const specializedRegistries = [
    { name: 'Bike Index', description: 'Largest open-source bicycle registry' },
    { name: 'Stolen Register', description: 'International stolen goods database' },
    { name: 'CheckMEND', description: 'Due diligence database' },
    { name: 'TheftAZ', description: 'Arizona state-specific database' },
  ];

  const whatWeVerify = [
    { icon: Smartphone, name: 'Phones & Tablets', description: 'IMEI numbers' },
    { icon: Car, name: 'Cars, Trucks, Motorcycles', description: 'VIN numbers' },
    { icon: Shield, name: 'License Plates', description: 'All 50 states' },
    { icon: AlertTriangle, name: 'Guns & Firearms', description: 'Serial numbers' },
    { icon: Bike, name: 'Bicycles & E-Bikes', description: 'Serial numbers' },
    { icon: Database, name: 'Laptops & Computers', description: 'Serial numbers' },
    { icon: Shield, name: 'Tools & Equipment', description: 'Serial numbers' },
    { icon: Shield, name: 'Appliances', description: 'Serial numbers' },
    { icon: Shield, name: 'Jewelry & Watches', description: 'Serial numbers' },
    { icon: Shield, name: 'Electronics & Gaming', description: 'Serial numbers' },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Data Sources & Partners | SafeOrStolen",
    "description": "SafeOrStolen searches 100+ databases including NCIC, GSMA, NICB, Bike Index, and state DMV records. Trusted data for buyers and sellers.",
    "url": "https://safeorstolen.com/data-partners"
  };

  return (
    <>
      <PageSEO
        title="Our Data Sources & Partners | SafeOrStolen"
        description="SafeOrStolen searches 100+ databases including NCIC, GSMA, NICB, Bike Index, and state DMV records. Trusted data for buyers and sellers."
        canonical="/data-partners"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Data Partners", href: "/data-partners" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">100+ Databases</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Data Sources
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We search 100+ trusted databases to protect buyers and sellers
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start Verifying Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                <span className="font-medium">100+ Databases</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-medium">All 50 States</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-medium">Real-Time Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <span className="font-medium">Law Enforcement Grade</span>
              </div>
            </div>
          </div>
        </section>

        {/* Law Enforcement Databases */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Law Enforcement Databases
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {lawEnforcementDatabases.map((db, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{db.name}</h3>
                      <p className="text-sm text-muted-foreground">{db.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Databases */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Car className="w-8 h-8 text-primary" />
              Vehicle Databases
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vehicleDatabases.map((db, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{db.name}</h3>
                      <p className="text-sm text-muted-foreground">{db.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Phone & Electronics Databases */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-primary" />
              Phone & Electronics Databases
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {phoneDatabases.map((db, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{db.name}</h3>
                      <p className="text-sm text-muted-foreground">{db.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Registries */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              Specialized Registries
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {specializedRegistries.map((db, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{db.name}</h3>
                      <p className="text-sm text-muted-foreground">{db.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Verify */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Verify</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {whatWeVerify.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-4">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why This Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    More Databases = Better Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We aggregate data from 100+ sources so you don't have to check multiple websites. One search covers everything.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Real-Time Verification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Results in 3 seconds. Verify items on the spot at meetups, pawn shops, or dealerships.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Trusted by Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pawn shops, dealers, and law enforcement use our data for due diligence and compliance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Nationwide Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All 50 states covered. License plate lookup, VIN checks, and state-specific databases included.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-muted-foreground mb-8">
              Check any IMEI, VIN, license plate, or serial number against our comprehensive database network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg">
                  Start Verifying Now
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline">
                  Download Free App
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataPartnersPage;
