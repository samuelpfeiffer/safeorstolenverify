import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Heart, DollarSign, Car, Clock, MapPin, Phone } from 'lucide-react';

const WomanSavedFromStolenCar = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Woman Saves $8,000 by Checking VIN Before Buying Used Car",
    "description": "Sarah M. from Phoenix almost lost $8,000 on a stolen Honda Accord. One free VIN check saved her from financial disaster and potential legal trouble.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-10"
  };

  return (
    <>
      <Helmet>
        <title>Woman Saves $8,000 by Checking VIN Before Buying - True Story | SafeOrStolen</title>
        <meta name="description" content="Real story: Sarah almost lost $8,000 on a stolen car. A free 30-second VIN check revealed the truth. Read how she avoided financial disaster." />
        <meta name="keywords" content="stolen car story, vin check saved money, buying stolen car story, used car scam story, safeorstolen success story" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safeorstolen.com/stories/woman-saved-from-stolen-car" />
        <meta property="og:title" content="Woman Saves $8,000 by Checking VIN Before Buying Used Car" />
        <meta property="og:description" content="A free VIN check saved Sarah from buying a stolen Honda Accord. Read her story." />
        <meta property="og:url" content="https://safeorstolen.com/stories/woman-saved-from-stolen-car" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-green-900/20 via-background to-background">
          <div className="container mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Real User Story</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              "That Free VIN Check Saved Me <span className="text-green-400">$8,000</span> and Probably Kept Me Out of Jail"
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>Sarah M.</span>
              <span>•</span>
              <span>Phoenix, AZ</span>
              <span>•</span>
              <span>December 2024</span>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-primary" />
                The "Perfect" Deal
              </h2>
              
              <p className="text-lg leading-relaxed">
                I'd been saving for two years. My old Corolla finally died, and I had exactly $9,000 to spend 
                on a reliable used car. Nothing fancy – just something to get me to work and back.
              </p>
              
              <p className="text-lg leading-relaxed">
                Then I found it on Facebook Marketplace: a 2019 Honda Accord with 42,000 miles for $8,000. 
                Clean interior, new-looking tires, and the seller said he had all the maintenance records. 
                The price was great – about $2,000 under market value – but the seller explained he was 
                relocating for work and needed it gone fast.
              </p>
              
              <Card className="my-8 border-yellow-500/30 bg-yellow-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-yellow-400 shrink-0" />
                    <div>
                      <p className="font-bold text-yellow-400 mb-2">🚩 Red Flag I Almost Ignored</p>
                      <p className="text-muted-foreground">
                        The seller wanted to meet at a grocery store parking lot, not his home. 
                        He said he "didn't want strangers knowing where he lived." Made sense at the time...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Phone className="w-6 h-6 text-primary" />
                My Mom's Voice in My Head
              </h2>
              
              <p className="text-lg leading-relaxed">
                I was literally on my way to meet the seller – cash in my purse – when I remembered something 
                my mom always said: <em>"If it seems too good to be true, it probably is."</em>
              </p>
              
              <p className="text-lg leading-relaxed">
                I pulled over and Googled "how to check if a car is stolen." The first result was about 
                checking the VIN number. The second was SafeOrStolen. I grabbed the VIN from the listing 
                photos (it was visible on the dashboard) and typed it in.
              </p>
              
              <p className="text-lg leading-relaxed font-bold text-center text-xl my-8">
                30 seconds later, my heart stopped.
              </p>

              <Card className="my-8 border-red-500/50 bg-red-500/10">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <p className="text-xl font-bold text-red-400 mb-2">⚠️ REPORTED STOLEN</p>
                    <p className="text-muted-foreground">
                      This vehicle was reported stolen in Tucson, AZ on November 14, 2024
                    </p>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                What Would Have Happened
              </h2>
              
              <p className="text-lg leading-relaxed">
                I sat in my car shaking. If I had bought that Honda, here's what would have happened:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Police would have recovered the car eventually – it's in the national database</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>I would have lost the car AND my $8,000 (you can't keep stolen property)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>I might have been investigated for receiving stolen property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>In Arizona, that's a Class 6 felony – up to 2 years in prison</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Shield className="w-6 h-6 text-green-400" />
                What I Did Instead
              </h2>
              
              <p className="text-lg leading-relaxed">
                I didn't confront the seller – that could have been dangerous. Instead, I:
              </p>
              
              <ol className="space-y-3 my-6 list-decimal list-inside">
                <li>Screenshotted everything – the listing, our messages, the VIN check result</li>
                <li>Called Phoenix PD non-emergency line and filed a report</li>
                <li>Texted the seller saying I had a family emergency and couldn't make it</li>
                <li>Never heard from him again (the listing disappeared the next day)</li>
              </ol>
              
              <p className="text-lg leading-relaxed">
                Two weeks later, a detective called me. They had found the car and were building a case. 
                My screenshots were part of the evidence. <strong>Turns out this guy had sold at least 
                4 stolen cars in the Phoenix area.</strong>
              </p>

              <Card className="my-12 border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <p className="text-xl font-bold text-green-400 mb-4">Happy Ending</p>
                    <p className="text-lg text-muted-foreground">
                      I ended up buying a 2018 Civic from a dealership. More expensive, but I check 
                      EVERYTHING now. And you bet I ran that VIN through SafeOrStolen before signing 
                      anything – clean as a whistle.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold mb-4 mt-12">My Advice to Everyone</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Look, I know not everyone has the luxury of buying from a dealership. Most of us are 
                looking for deals on Craigslist, Facebook Marketplace, or from private sellers. 
                That's fine – but please:
              </p>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Always check the VIN</strong> – it takes literally 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Be suspicious of "great deals"</strong> – thieves price to sell fast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Meet at police stations</strong> – honest sellers won't mind</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Trust your gut</strong> – if something feels off, walk away</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg leading-relaxed mt-8 font-medium text-center">
                That free VIN check didn't just save me $8,000. It saved me from a nightmare.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Don't Take the Risk</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Before you buy ANY used car, run the VIN through SafeOrStolen. 
              It's free, takes 30 seconds, and could save you everything.
            </p>
            <Link to="/verify">
              <Button size="lg" className="text-lg px-8">
                <Car className="mr-2 h-5 w-5" />
                Check a VIN Now - Free
              </Button>
            </Link>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/vin-check-complete" className="hover:text-primary">Complete VIN Check Guide</Link>
              <span>•</span>
              <Link to="/stolen-vehicle-check" className="hover:text-primary">Stolen Vehicle Check</Link>
              <span>•</span>
              <Link to="/facebook-marketplace-safety-guide" className="hover:text-primary">Marketplace Safety</Link>
            </div>
          </div>
        </section>

        {/* More Stories */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">More Real Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/stories/pawn-shop-stolen-laptop">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Pawn Shop Owner Avoids $15K Lawsuit</h3>
                    <p className="text-sm text-muted-foreground">
                      How implementing serial number checks saved a family pawn shop from buying stolen merchandise.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/stories/recovered-stolen-bike">
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">College Student Recovers Stolen Bike</h3>
                    <p className="text-sm text-muted-foreground">
                      A SafeOrStolen search alert helped reunite a student with their $2,000 mountain bike.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WomanSavedFromStolenCar;
