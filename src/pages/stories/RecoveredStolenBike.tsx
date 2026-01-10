import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Heart, Bike, Bell, MapPin, Clock, Search } from 'lucide-react';

const RecoveredStolenBike = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "College Student Recovers Stolen Bike Thanks to SafeOrStolen Alert",
    "description": "How a stolen bike alert helped Emily get her $2,000 mountain bike back after it was listed for sale on Craigslist.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "datePublished": "2024-12-15",
    "dateModified": "2025-01-10"
  };

  return (
    <>
      <PageSEO
        title="College Student Recovers Stolen Bike - Alert System Success | SafeOrStolen"
        description="Emily's $2,000 mountain bike was stolen from ASU campus. 3 weeks later, a SafeOrStolen user tried to verify it - and she got it back. Read her story."
        keywords="stolen bike recovered, bicycle theft recovery, safeorstolen alert, stolen bike found, mountain bike stolen"
        canonical="/stories/recovered-stolen-bike"
        structuredData={[articleSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-blue-900/20 via-background to-background">
          <div className="container mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Recovery Success Story</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              "They Stole My Bike. <span className="text-blue-400">SafeOrStolen Helped Me Get It Back.</span>"
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>Emily K.</span>
              <span>•</span>
              <span>ASU Student, Tempe, AZ</span>
              <span>•</span>
              <span>October 2024</span>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <Bike className="w-6 h-6 text-blue-400" />
                The Worst Day of Sophomore Year
              </h2>
              
              <p className="text-lg leading-relaxed">
                I saved up for two years to buy my Trek Fuel EX 8. It was my everything – I used it to 
                commute to class, hit the trails on weekends, and honestly just decompress from the stress 
                of engineering school. $2,200 of birthday money, summer job savings, and a small contribution 
                from my parents.
              </p>
              
              <p className="text-lg leading-relaxed">
                October 3rd, I locked it up outside the library. Same spot I always used. Kryptonite U-lock. 
                When I came out 2 hours later, someone had cut through the lock and it was gone.
              </p>
              
              <Card className="my-8 border-red-500/30 bg-red-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-400 shrink-0" />
                    <div>
                      <p className="font-bold text-red-400 mb-2">The Statistics Are Brutal</p>
                      <p className="text-muted-foreground">
                        Over 2 million bikes are stolen in the US every year. Less than 5% are ever recovered. 
                        I knew the odds were terrible, but I wasn't ready to give up.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Search className="w-6 h-6 text-primary" />
                Filing the Report (And Doing More)
              </h2>
              
              <p className="text-lg leading-relaxed">
                I filed a police report – not that I expected much. Campus security basically said 
                "sorry, check Craigslist." So I did. Every day for three weeks. Craigslist, Facebook 
                Marketplace, OfferUp, Pinkbike... nothing.
              </p>
              
              <p className="text-lg leading-relaxed">
                Then a friend told me about SafeOrStolen. She said I should report my bike there too, 
                with the serial number. When I asked why, she explained:
              </p>
              
              <blockquote className="border-l-4 border-blue-400 pl-4 italic my-6">
                "People use SafeOrStolen to check if something is stolen BEFORE they buy it. 
                If someone tries to check your bike's serial number, you'll get an alert."
              </blockquote>
              
              <p className="text-lg leading-relaxed">
                I had my serial number written down (my dad taught me to do this for any expensive item). 
                I reported it stolen on SafeOrStolen and went back to waiting.
              </p>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Bell className="w-6 h-6 text-green-400" />
                The Alert That Changed Everything
              </h2>
              
              <p className="text-lg leading-relaxed">
                Three weeks later. October 24th. I was in my dorm studying for a midterm when my phone 
                buzzed with an email:
              </p>
              
              <Card className="my-8 border-green-500/50 bg-green-500/10">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Bell className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <p className="text-lg font-bold text-green-400 mb-2">🔔 SAFEORSTOLEN ALERT</p>
                    <p className="text-muted-foreground">
                      Someone just searched for serial number W28XXXXX. This matches your reported stolen Trek Fuel EX 8.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      General location: Phoenix metro area
                    </p>
                  </div>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                My heart was POUNDING. Someone had my bike. Someone was trying to verify if it was stolen – 
                which meant they were probably trying to BUY it, not sell it. A potential buyer was doing 
                their homework.
              </p>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <MapPin className="w-6 h-6 text-primary" />
                Finding It on Craigslist
              </h2>
              
              <p className="text-lg leading-relaxed">
                I immediately searched Craigslist Phoenix for Trek Fuel EX bikes. Third listing down – 
                there it was. MY bike. Same color, same accessories, even my water bottle cage was still on it. 
                Listed for $900 – about 40% of what I paid.
              </p>
              
              <p className="text-lg leading-relaxed">
                I screenshotted everything and called Tempe PD. Gave them my case number, showed them the 
                listing, explained the SafeOrStolen alert. The detective was actually impressed – he said 
                most stolen bike cases never get this far.
              </p>
              
              <p className="text-lg leading-relaxed font-bold">
                Two days later, I had my bike back.
              </p>

              <Card className="my-8 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-blue-400 mb-4">How It Went Down</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Police set up a sting with a "buyer"</li>
                    <li>• Seller showed up at a public location</li>
                    <li>• Verified serial number matched my report</li>
                    <li>• Seller arrested (had 2 other stolen bikes in his car)</li>
                    <li>• I got my Trek back the next day</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Heart className="w-6 h-6 text-red-400" />
                What Made the Difference
              </h2>
              
              <p className="text-lg leading-relaxed">
                The detective told me that without the SafeOrStolen alert, they would have never found it. 
                The thief was selling in Phoenix – I was searching Tempe. Different cities, different 
                Craigslist sections. I might have found it eventually, but probably not in time.
              </p>
              
              <p className="text-lg leading-relaxed">
                What really made it work was that <strong>someone tried to be a responsible buyer</strong>. 
                Whoever searched that serial number – thank you. You probably didn't end up buying it 
                (once they saw it was stolen), but that search triggered the alert that got my bike back.
              </p>
              
              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="font-bold mb-4">My Advice for Bike Owners:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Write down your serial number NOW</strong> – don't wait until it's stolen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Take photos of your bike</strong> – with serial number visible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>If stolen, report everywhere</strong> – police, SafeOrStolen, Bike Index</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Don't give up</strong> – most stolen bikes are sold quickly, but recoveries happen</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg leading-relaxed font-medium text-center mt-8">
                My Trek is back in my dorm room now. Better lock, never leaving it outside overnight. 
                But more than that – I know that if it ever happens again, there's a community of 
                people checking serial numbers. That makes all the difference.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Your Bike</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Register your bike's serial number now – before anything happens. 
              If it's ever stolen, you'll be ready. If you're buying, check first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="text-lg px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Check a Bike Serial Number
                </Button>
              </Link>
              <Link to="/report-stolen">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Report a Stolen Item
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* More Stories */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">More Real Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/stories/woman-saved-from-stolen-car">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Woman Saves $8,000 on Stolen Car</h3>
                    <p className="text-sm text-muted-foreground">
                      A free VIN check saved Sarah from buying a stolen Honda Accord on Facebook Marketplace.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/stories/pawn-shop-stolen-laptop">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Pawn Shop Avoids $15K Lawsuit</h3>
                    <p className="text-sm text-muted-foreground">
                      How implementing serial number checks saved a family pawn shop from buying stolen merchandise.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RecoveredStolenBike;
