import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Heart, Store, Laptop, Scale, FileText } from 'lucide-react';

const PawnShopStolenLaptop = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pawn Shop Owner Avoids $15,000 Lawsuit by Checking Serial Numbers",
    "description": "How implementing serial number checks saved Rodriguez Family Pawn from buying stolen merchandise and facing a civil lawsuit.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "datePublished": "2025-01-05",
    "dateModified": "2025-01-10"
  };

  return (
    <>
      <PageSEO
        title="Pawn Shop Owner Avoids $15K Lawsuit - Serial Number Check Story | SafeOrStolen"
        description="Real story: Rodriguez Family Pawn implemented serial number checks after almost buying stolen laptops. Now they use SafeOrStolen for every transaction."
        keywords="pawn shop stolen items, serial number check pawn shop, pawn shop liability, stolen laptop pawn, safeorstolen pawn shop"
        canonical="/stories/pawn-shop-stolen-laptop"
        structuredData={[articleSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-amber-900/20 via-background to-background">
          <div className="container mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full mb-6">
              <Store className="w-4 h-4" />
              <span className="text-sm font-medium">Business Success Story</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              "We Almost Lost Our Family Business Over <span className="text-amber-400">3 Stolen Laptops</span>"
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>Marco Rodriguez</span>
              <span>•</span>
              <span>Rodriguez Family Pawn, Tucson, AZ</span>
              <span>•</span>
              <span>November 2024</span>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <Store className="w-6 h-6 text-amber-400" />
                45 Years of Family Business
              </h2>
              
              <p className="text-lg leading-relaxed">
                My grandfather started Rodriguez Family Pawn in 1979. My dad ran it for 30 years. 
                When I took over in 2018, we had a reputation as one of the most trusted pawn shops 
                in Tucson. Good relationships with local police. Fair prices. Clean operation.
              </p>
              
              <p className="text-lg leading-relaxed">
                Then came the laptops.
              </p>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Laptop className="w-6 h-6 text-primary" />
                The "College Student" with 3 MacBooks
              </h2>
              
              <p className="text-lg leading-relaxed">
                September 2024. A young guy comes in – clean cut, well dressed, college-age. Says he's 
                selling his old laptops because he just graduated and got a job that provides equipment. 
                He had three MacBook Pros, all in great condition.
              </p>
              
              <p className="text-lg leading-relaxed">
                His story made sense. His ID checked out. The serial numbers weren't in the police 
                database we had access to (the county system). We paid him $2,400 for all three.
              </p>
              
              <Card className="my-8 border-red-500/30 bg-red-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-400 shrink-0" />
                    <div>
                      <p className="font-bold text-red-400 mb-2">Two Weeks Later: The Knock on the Door</p>
                      <p className="text-muted-foreground">
                        Tucson PD showed up with a warrant. Those three laptops? Stolen from an architecture 
                        firm in Scottsdale. The "college student" was a professional thief who targeted 
                        businesses and sold across state lines to avoid detection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Scale className="w-6 h-6 text-red-400" />
                The Nightmare Begins
              </h2>
              
              <p className="text-lg leading-relaxed">
                Here's what we didn't know: The Pima County database we were checking only had 
                <strong> local</strong> reports. Those laptops were stolen in Maricopa County – 
                different database, different jurisdiction.
              </p>
              
              <p className="text-lg leading-relaxed">
                Police took all three laptops. We lost $2,400 immediately. Then came the civil lawsuit.
              </p>
              
              <Card className="my-8 border-orange-500/30 bg-orange-500/5">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-orange-400 mb-3">The Legal Reality</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Architecture firm sued us for $15,000 (value of laptops + legal fees)</li>
                    <li>• Our insurance didn't cover "knowingly receiving stolen goods" – even though we didn't know</li>
                    <li>• We had to hire a lawyer to prove we did "due diligence"</li>
                    <li>• 6 months of legal back-and-forth</li>
                  </ul>
                </CardContent>
              </Card>
              
              <p className="text-lg leading-relaxed">
                We eventually settled for $8,000 plus legal fees. Total cost: about $12,000. 
                And we could have lost our pawn license.
              </p>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <Shield className="w-6 h-6 text-green-400" />
                What We Changed
              </h2>
              
              <p className="text-lg leading-relaxed">
                After that, I became obsessed with finding a better way. The county database wasn't enough. 
                We needed something that checked everywhere – not just our county, not just Arizona, 
                but nationwide.
              </p>
              
              <p className="text-lg leading-relaxed">
                That's when I found SafeOrStolen. Their database checks:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>All 50 states' police databases</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>FBI NCIC (National Crime Information Center)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Insurance company claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Corporate theft reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>100+ other sources we never would have found</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 mt-12">
                <FileText className="w-6 h-6 text-primary" />
                Now It's Standard Procedure
              </h2>
              
              <p className="text-lg leading-relaxed">
                Every single item with a serial number gets checked before we pay a dime. 
                We run it right in front of the customer. Most people don't mind – legitimate sellers 
                appreciate that we're careful.
              </p>
              
              <p className="text-lg leading-relaxed">
                The ones who get nervous? They usually make an excuse and leave. Fine by us.
              </p>
              
              <Card className="my-8 border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-green-400 mb-4">Results Since Implementation (8 months)</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Stolen items flagged</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">$18,400</p>
                      <p className="text-sm text-muted-foreground">Loss prevented</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">0</p>
                      <p className="text-sm text-muted-foreground">Police issues</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">0</p>
                      <p className="text-sm text-muted-foreground">Lawsuits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <blockquote className="border-l-4 border-amber-400 pl-6 my-8 italic text-lg">
                "The $99/month for unlimited checks is nothing compared to the $12,000 we lost that one time. 
                It's just good business sense. And honestly? It's the right thing to do. We don't want 
                stolen merchandise in our shop. We never did."
              </blockquote>
              
              <p className="text-lg leading-relaxed font-medium">
                If you run a pawn shop, resale business, or buy secondhand for any reason – 
                check the serial numbers. Every. Single. Time. The one time you skip it will be 
                the one that bites you.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Your Business</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you run a pawn shop or just buy used items occasionally, 
              a 30-second check can save you thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="text-lg px-8">
                  <Shield className="mr-2 h-5 w-5" />
                  Check Serial Numbers Free
                </Button>
              </Link>
              <Link to="/for-pawn-shops">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Store className="mr-2 h-5 w-5" />
                  Business Solutions
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
      </div>
    </>
  );
};

export default PawnShopStolenLaptop;
