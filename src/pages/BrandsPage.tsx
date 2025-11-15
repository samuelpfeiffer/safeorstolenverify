import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Database, Globe, CheckCircle, Building2, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BrandsPage() {
  const navigate = useNavigate();

  const databasePartners = [
    {
      name: "NICB (National Insurance Crime Bureau)",
      type: "Vehicle Database",
      description: "Access to the largest vehicle theft database in North America. Verifies VIN numbers against reported stolen vehicles.",
      coverage: "United States & Canada",
      items: "Vehicles, Motorcycles, RVs"
    },
    {
      name: "GSMA Device Registry",
      type: "Mobile Device Database",
      description: "Global database for mobile device verification. Checks IMEI numbers against stolen and blacklisted devices worldwide.",
      coverage: "Worldwide",
      items: "Smartphones, Tablets, Smartwatches"
    },
    {
      name: "BikeIndex",
      type: "Bicycle Registry",
      description: "Largest open-source bike registry. Helps track and recover stolen bicycles through serial number verification.",
      coverage: "Global",
      items: "Bicycles, E-bikes"
    },
    {
      name: "Interpol Stolen Motor Vehicle Database",
      type: "International Vehicle Database",
      description: "International database for cross-border vehicle theft verification and recovery assistance.",
      coverage: "190+ Countries",
      items: "Vehicles, Heavy Equipment"
    },
    {
      name: "Insurance Claim Databases",
      type: "Multi-Industry",
      description: "Aggregated insurance claim data from major providers to identify items reported as lost or stolen.",
      coverage: "United States, UK, EU",
      items: "Electronics, Jewelry, Tools"
    },
    {
      name: "Local Law Enforcement Databases",
      type: "Regional Police Records",
      description: "Partnerships with local police departments for access to regional stolen property reports.",
      coverage: "Major US Cities",
      items: "All Categories"
    }
  ];

  const supportedBrands = {
    "Mobile Devices": ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Motorola", "LG", "Sony", "Huawei", "Nokia"],
    "Vehicles": ["Ford", "Chevrolet", "Toyota", "Honda", "BMW", "Mercedes-Benz", "Volkswagen", "Nissan", "Tesla", "Hyundai"],
    "Electronics": ["Dell", "HP", "Lenovo", "Apple", "Microsoft", "Canon", "Nikon", "Sony", "GoPro", "DJI"],
    "Bicycles": ["Trek", "Specialized", "Giant", "Cannondale", "Schwinn", "Scott", "Bianchi", "Brompton", "Rad Power", "VanMoof"]
  };

  const stats = [
    { icon: Database, value: "500M+", label: "Database Records" },
    { icon: Globe, value: "190+", label: "Countries Covered" },
    { icon: Shield, value: "99.8%", label: "Accuracy Rate" },
    { icon: CheckCircle, value: "1M+", label: "Items Verified" }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "description": "Global verification service partnered with leading databases to check if items are stolen",
    "url": "https://safeorstolen.com",
    "brand": {
      "@type": "Brand",
      "name": "SafeOrStolen"
    },
    "knowsAbout": supportedBrands
  };

  return (
    <>
      <PageSEO
        title="Database Partners & Supported Brands | SafeOrStolen"
        description="SafeOrStolen partners with NICB, GSMA, BikeIndex, and other leading databases. We support all major brands including Apple, Samsung, Ford, Toyota, and more."
        keywords="database partners, NICB, GSMA, BikeIndex, supported brands, verification databases"
        structuredData={organizationSchema}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Database Partners</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Global Database Network & Supported Brands
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We partner with the world's leading databases to provide comprehensive verification across 500+ million records.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Partners */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Database Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We connect to trusted databases worldwide to ensure comprehensive verification coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {databasePartners.map((partner, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs bg-secondary/50 px-2 py-1 rounded">{partner.type}</span>
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Coverage:</span>
                    <span className="font-medium">{partner.coverage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Items:</span>
                    <span className="font-medium">{partner.items}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported Brands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We support verification for thousands of brands across multiple categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {Object.entries(supportedBrands).map(([category, brands]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {brands.map((brand) => (
                      <li key={brand} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{brand}</span>
                      </li>
                    ))}
                    <li className="text-sm text-muted-foreground italic">+ Many more...</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your brand listed? We likely support it. Try our verification tool.
            </p>
            <Button onClick={() => navigate('/')}>
              Check Any Brand
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center border-primary/20">
            <CardHeader>
              <LinkIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Interested in Partnership?</CardTitle>
              <CardDescription className="text-base">
                We're always looking to expand our database network and brand partnerships to provide better coverage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" onClick={() => navigate('/contact')}>
                Contact Us About Partnership
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
