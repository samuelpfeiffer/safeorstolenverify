import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, Trophy, Users, Star, ArrowRight, CheckCircle, 
  Smartphone, Shield, Zap, Clock, Target, Heart
} from 'lucide-react';
import { Link } from '@/lib/router-compat';

const ProductHuntPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Installable Web App",
      description: "SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place"
    },
    {
      icon: Shield,
      title: "Universal Verification",
      description: "Phones, cars, bikes, firearms, electronics - we verify everything"
    },
    {
      icon: Zap,
      title: "3-Second Results",
      description: "Results are usually available in about 3 seconds"
    },
    {
      icon: Clock,
      title: "2 Free Searches",
      description: "No credit card required - try before you buy"
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen on Product Hunt"
        description="View SafeOrStolen's Product Hunt listing and learn about its AI-powered checks for six categories of secondhand items."
        canonical="https://safeorstolen.com/product-hunt"
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-orange-500/10">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-orange-500 text-white text-lg px-4 py-2">
              <Rocket className="h-5 w-5 mr-2 inline" />
              Product Hunt Listing
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SafeOrStolen on <span className="text-primary">Product Hunt</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              SafeOrStolen covers phones, vehicles, license plates, serial-numbered electronics and power tools, firearms, and bicycles in one place.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white gap-2 text-lg px-8"
                onClick={() => window.open('https://www.producthunt.com/posts/safeorstolen', '_blank')}
              >
                <Trophy className="h-5 w-5" />
                View Product Hunt Listing
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/verify" className="gap-2 text-lg">
                  Try Free Now <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-card rounded-xl border">
                <p className="text-3xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Item Categories</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <p className="text-3xl font-bold text-primary">3 sec</p>
                <p className="text-sm text-muted-foreground">Verification Speed</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <p className="text-3xl font-bold text-primary">2</p>
                <p className="text-sm text-muted-foreground">Free Checks</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <p className="text-3xl font-bold text-primary">AI</p>
                <p className="text-sm text-muted-foreground">Plain-Language Analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What SafeOrStolen Offers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Hunt link */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/30">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                    <Heart className="h-6 w-6 text-primary" />
                    View the Listing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">Open the public Product Hunt page for SafeOrStolen.</p>

                  <div className="mt-8 text-center">
                    <Button 
                      size="lg" 
                      className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
                      onClick={() => window.open('https://www.producthunt.com/posts/safeorstolen', '_blank')}
                    >
                      <Rocket className="h-5 w-5" />
                      View Product Hunt Listing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every year, millions of people unknowingly buy stolen property. 
              This leads to financial loss, legal trouble, and supports organized crime. 
              <strong className="text-foreground"> We're building the infrastructure to end this.</strong>
            </p>
            <p className="text-lg">
               The Product Hunt listing provides another place to discover SafeOrStolen.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/20 via-background to-orange-500/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Explore SafeOrStolen
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white gap-2 text-lg px-8"
                onClick={() => window.open('https://www.producthunt.com/posts/safeorstolen', '_blank')}
              >
                <Trophy className="h-5 w-5" />
                View Product Hunt Listing
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/press-kit" className="gap-2">
                  View Press Kit
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductHuntPage;
