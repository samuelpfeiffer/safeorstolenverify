import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, Smartphone, Car, Bike, Package, Database, CheckCircle, Search, AlertTriangle } from 'lucide-react';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Smartphone,
      title: "Phone & Mobile Device Verification",
      description: "Verify IMEI numbers against global stolen device databases. Check iPhones, Android phones, tablets, and smartwatches before purchasing.",
      features: ["IMEI verification", "GSMA database check", "Insurance claim verification", "Blacklist status"],
      cta: "Check Phone"
    },
    {
      icon: Car,
      title: "Vehicle VIN Verification",
      description: "Comprehensive VIN checks for cars, trucks, motorcycles, and RVs. Access NICB and insurance databases to verify vehicle history.",
      features: ["VIN validation", "Theft record check", "Insurance database", "Salvage title detection"],
      cta: "Check Vehicle"
    },
    {
      icon: Bike,
      title: "Bicycle Serial Number Check",
      description: "Verify bicycle serial numbers against stolen bike registries. Protect yourself when buying used bikes from online marketplaces.",
      features: ["Serial number lookup", "BikeIndex integration", "Local registry access", "Ownership verification"],
      cta: "Check Bike"
    },
    {
      icon: Package,
      title: "Electronics & Equipment",
      description: "Verify serial numbers for laptops, cameras, gaming consoles, tools, and other high-value electronics.",
      features: ["Multi-brand support", "Serial format validation", "Police report database", "Manufacturer verification"],
      cta: "Check Electronics"
    },
    {
      icon: Database,
      title: "Bulk Verification API",
      description: "Enterprise solution for marketplaces, retailers, and pawn shops. Verify multiple items simultaneously with our robust API.",
      features: ["RESTful API", "Batch processing", "Real-time results", "Custom integration"],
      cta: "View API Docs"
    },
    {
      icon: AlertTriangle,
      title: "Stolen Item Reporting",
      description: "Report stolen items to our database and increase the chances of recovery. Help protect the community from fraud.",
      features: ["Easy submission", "Police report linking", "Status tracking", "Alert notifications"],
      cta: "Report Item"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Enter Identifier",
      description: "Input the IMEI, VIN, or serial number of the item you want to verify.",
      icon: Search
    },
    {
      step: 2,
      title: "Database Scan",
      description: "We instantly check multiple global databases including NICB, GSMA, and insurance databases.",
      icon: Database
    },
    {
      step: 3,
      title: "Get Results",
      description: "Receive a comprehensive report showing if the item is safe, stolen, or flagged for caution.",
      icon: CheckCircle
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Verification Services",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "description": "Comprehensive stolen item verification services for phones, vehicles, bicycles, and electronics. Check IMEI, VIN, and serial numbers against global databases.",
    "serviceType": "Verification Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Verification Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of items can SafeOrStolen verify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen can verify phones, vehicles, bicycles, laptops, cameras, gaming consoles, and other electronics using IMEI numbers, VIN numbers, and serial numbers."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are the verification results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service checks multiple authoritative databases including NICB, GSMA, and insurance claim databases to provide the most accurate results possible. However, verification is only as accurate as the databases we access."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer an API for businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a robust API solution for businesses, marketplaces, and retailers who need to verify items at scale. Visit our API documentation for more details."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Verification Services - IMEI, VIN & Serial Number Checks | SafeOrStolen"
        description="Comprehensive verification services for phones, vehicles, bikes, and electronics. Check IMEI, VIN, and serial numbers against global stolen item databases."
        keywords="verification services, IMEI check, VIN verification, serial number lookup, stolen phone check, vehicle history"
        structuredData={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Verification Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Comprehensive Item Verification Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect yourself from fraud with our multi-database verification system. Check phones, vehicles, bikes, and electronics before you buy.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-primary/90"
            >
              Start Free Verification
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Verification Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer specialized verification services for different types of items, all backed by comprehensive database checks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/')}
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Verification Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our simple three-step process ensures you get accurate results in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Verify an Item?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free verification now and protect yourself from buying stolen goods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/')}>
              Start Free Verification
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
