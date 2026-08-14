import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, Trophy, Users, Star, ArrowRight, CheckCircle, 
  Smartphone, Shield, Zap, Clock, Target, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductHuntPage = () => {
  const launchDate = new Date('2026-01-06');
  const today = new Date();
  const daysUntilLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const isLaunched = daysUntilLaunch <= 0;

  const features = [
    {
      icon: Smartphone,
      title: "Only Mobile App",
      description: "The ONLY stolen item verification app with barcode scanning"
    },
    {
      icon: Shield,
      title: "Universal Verification",
      description: "Phones, cars, bikes, firearms, electronics - we verify everything"
    },
    {
      icon: Zap,
      title: "3-Second Results",
      description: "Instant verification while competitors take 30+ seconds"
    },
    {
      icon: Clock,
      title: "2 Free Searches",
      description: "No credit card required - try before you buy"
    }
  ];

  const supportActions = [
    "Create a Product Hunt account if you don't have one",
    "Follow @safeorstolen on Product Hunt",
    "Set a reminder for launch day",
    "Share with friends who buy/sell secondhand items",
    "Upvote and leave a review on launch day"
  ];

  const competitorComparison = [
    { feature: "Mobile App", safeorstolen: true, checkmend: false, imeiinfo: false },
    { feature: "Barcode Scanning", safeorstolen: true, checkmend: false, imeiinfo: false },
    { feature: "Free Trial", safeorstolen: true, checkmend: false, imeiinfo: true },
    { feature: "Firearms Verification", safeorstolen: true, checkmend: false, imeiinfo: false },
    { feature: "Universal Coverage", safeorstolen: true, checkmend: false, imeiinfo: false },
    { feature: "3-Second Verification", safeorstolen: true, checkmend: false, imeiinfo: false }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen on Product Hunt | Support Our Launch"
        description="Support SafeOrStolen on Product Hunt! The only mobile app for stolen item verification. Upvote us and help protect millions of buyers and sellers."
        canonical="https://safeorstolen.com/product-hunt"
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-orange-500/10">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-orange-500 text-white text-lg px-4 py-2">
              <Rocket className="h-5 w-5 mr-2 inline" />
              {isLaunched ? "We're LIVE on Product Hunt!" : `Launching in ${daysUntilLaunch} days`}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help Us Reach <span className="text-primary">#1 Product of the Day</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              SafeOrStolen is the <strong>Carfax for Everything</strong> - the only mobile app 
              that verifies if secondhand items are stolen before you buy or sell.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white gap-2 text-lg px-8"
                onClick={() => window.open('https://www.producthunt.com/posts/safeorstolen', '_blank')}
              >
                <Trophy className="h-5 w-5" />
                {isLaunched ? "Upvote on Product Hunt" : "Get Notified"}
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
                <p className="text-3xl font-bold text-primary">5,000+</p>
                <p className="text-sm text-muted-foreground">Items Verified</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <p className="text-3xl font-bold text-primary">3 sec</p>
                <p className="text-sm text-muted-foreground">Verification Speed</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <p className="text-3xl font-bold text-primary">$500B+</p>
                <p className="text-sm text-muted-foreground">Stolen Goods Market</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">States Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why SafeOrStolen Deserves Your Vote
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

        {/* Competitor Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              The Competition Has No Mobile App
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              SafeOrStolen is the only solution with a mobile app, barcode scanning, 
              and universal coverage. Here's how we compare:
            </p>
            
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Feature</th>
                    <th className="p-4 text-center bg-primary/10">
                      <span className="font-bold text-primary">SafeOrStolen</span>
                    </th>
                    <th className="p-4 text-center">CheckMEND</th>
                    <th className="p-4 text-center">IMEI.info</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center bg-primary/5">
                        {row.safeorstolen ? (
                          <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.checkmend ? (
                          <CheckCircle className="h-6 w-6 text-muted-foreground mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.imeiinfo ? (
                          <CheckCircle className="h-6 w-6 text-muted-foreground mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to Support */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/30">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                    <Heart className="h-6 w-6 text-primary" />
                    How You Can Help Us Win
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportActions.map((action, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="font-bold text-primary">{index + 1}</span>
                        </div>
                        <p className="text-lg pt-1">{action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Button 
                      size="lg" 
                      className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
                      onClick={() => window.open('https://www.producthunt.com/posts/safeorstolen', '_blank')}
                    >
                      <Rocket className="h-5 w-5" />
                      Support SafeOrStolen Now
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
              Your vote on Product Hunt helps us reach more people and 
              <span className="text-primary font-bold"> reduce stolen goods crime globally</span>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/20 via-background to-orange-500/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Support SafeOrStolen?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white gap-2 text-lg px-8"
                onClick={() => window.open('https://www.producthunt.com/posts/safeorstolen', '_blank')}
              >
                <Trophy className="h-5 w-5" />
                Upvote on Product Hunt
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
