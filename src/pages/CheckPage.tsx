import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Car, Laptop, Bike, Watch, Camera, 
  Gamepad2, Wrench, Gem, Ship, Shield, ArrowRight
} from 'lucide-react';

const CheckPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Check If Item Is Stolen - Free Verification | SafeOrStolen",
    "description": "Verify any item before buying. Check phones, cars, laptops, bikes, and more against stolen property databases. Free instant verification.",
    "url": "https://safeorstolen.com/check",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Item Verification Categories",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Phone IMEI Check" },
        { "@type": "ListItem", "position": 2, "name": "Car VIN Check" },
        { "@type": "ListItem", "position": 3, "name": "Laptop Serial Check" },
        { "@type": "ListItem", "position": 4, "name": "Bike Serial Check" },
        { "@type": "ListItem", "position": 5, "name": "Electronics Check" }
      ]
    }
  };

  const itemCategories = [
    {
      icon: Smartphone,
      title: "Check Phone",
      description: "Verify iPhone, Samsung, Android IMEI numbers against carrier blacklists and stolen databases.",
      link: "/check-phone",
      popular: true
    },
    {
      icon: Car,
      title: "Check Car",
      description: "VIN lookup for stolen status, title issues, accident history, and ownership records.",
      link: "/check-car",
      popular: true
    },
    {
      icon: Laptop,
      title: "Check Laptop",
      description: "Verify laptop serial numbers against insurance claims and theft reports.",
      link: "/check-laptop",
      popular: true
    },
    {
      icon: Bike,
      title: "Check Bike",
      description: "Bicycle frame number verification against national registries.",
      link: "/check-bike",
      popular: false
    },
    {
      icon: Gamepad2,
      title: "Check Gaming Console",
      description: "PS5, Xbox, Nintendo Switch serial number verification.",
      link: "/check-gaming-console-stolen",
      popular: false
    },
    {
      icon: Watch,
      title: "Check Watch",
      description: "Luxury watch serial number verification for authenticity and stolen status.",
      link: "/check-watch-stolen",
      popular: false
    },
    {
      icon: Camera,
      title: "Check Camera",
      description: "Camera and photography equipment serial number checks.",
      link: "/check-camera-stolen",
      popular: false
    },
    {
      icon: Wrench,
      title: "Check Power Tools",
      description: "Verify power tools and equipment serial numbers.",
      link: "/check-power-tools-stolen",
      popular: false
    },
    {
      icon: Gem,
      title: "Check Jewelry",
      description: "High-value jewelry and precious items verification.",
      link: "/check-jewelry",
      popular: false
    },
    {
      icon: Ship,
      title: "Check Boat",
      description: "Boat HIN (Hull Identification Number) stolen status verification.",
      link: "/check-boat",
      popular: false
    },
    {
      icon: Shield,
      title: "Check Firearm",
      description: "Firearm serial number verification against ATF databases.",
      link: "/firearms-check",
      popular: false
    },
    {
      icon: Laptop,
      title: "Check Electronics",
      description: "General electronics and appliances serial number checks.",
      link: "/check-electronics",
      popular: false
    }
  ];

  const popularItems = itemCategories.filter(item => item.popular);
  const otherItems = itemCategories.filter(item => !item.popular);

  return (
    <>
      <PageSEO
        title="Check If Item Is Stolen - Free IMEI, VIN & Serial Verification | SafeOrStolen"
        description="Verify any item before buying. Free stolen item check for phones, cars, laptops, bikes, electronics. 100+ databases, instant results in 3 seconds."
        keywords="check if stolen, verify item, imei check, vin lookup, serial number check, stolen phone check, stolen car check, is this stolen"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Check If Any Item Is Stolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Verify phones, cars, laptops, bikes, and more before you buy. 
                Our comprehensive database checks against 100+ sources in under 3 seconds.
              </p>
              <Button asChild size="lg" className="text-lg">
                <Link to="/verify">
                  Start Free Verification <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                2 free searches • No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Most Popular Checks
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {popularItems.map((item, index) => (
                <Link key={index} to={item.link} className="block">
                  <Card className="h-full hover:shadow-xl transition-all hover:border-primary hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              All Item Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {itemCategories.map((item, index) => (
                <Link key={index} to={item.link} className="block">
                  <Card className="h-full hover:border-primary transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Quick */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                How to Check an Item
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Enter Identifier</h3>
                  <p className="text-sm text-muted-foreground">
                    Type or scan the IMEI, VIN, or serial number of the item you want to check.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Instant Search</h3>
                  <p className="text-sm text-muted-foreground">
                    We check 100+ databases including police records, insurance claims, and carrier blacklists.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Get Results</h3>
                  <p className="text-sm text-muted-foreground">
                    See clear stolen status, risk assessment, and detailed item history in seconds.
                  </p>
                </div>
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg">
                  <Link to="/how-it-works">Learn More About Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Risk Buying Stolen Goods</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              A 3-second check can save you thousands of dollars and legal trouble. Start verifying now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/verify">Check an Item Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/download">Download Mobile App</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CheckPage;
