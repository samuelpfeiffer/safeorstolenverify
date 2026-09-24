import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Users, MessageCircle, Shield, Heart, Trophy, Star, ArrowRight, ExternalLink } from 'lucide-react';

export default function CommunityPage() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen Community - Join the Movement Against Stolen Goods"
        description="Join the SafeOrStolen community. Share experiences, report stolen items, help others avoid fraud. Together we're making secondhand markets safer."
        keywords="community, stolen item reporting, fraud prevention community, marketplace safety, share experiences, help others"
        canonical="https://safeorstolen.com/community"
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SafeOrStolen Community
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Thousands of buyers, sellers, and businesses working together to keep secondhand markets safe. Join us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/report-stolen">Report a Stolen Item</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.trustpilot.com/review/safeorstolen.com" target="_blank" rel="noopener noreferrer">
                    Share Your Story
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">6</div>
                  <p className="text-sm text-muted-foreground">Item Categories</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
  <div className="text-4xl font-bold text-primary mb-2">AI</div>
  <p className="text-sm text-muted-foreground">Plain-Language Analysis</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <p className="text-sm text-muted-foreground">Free Checks to Start</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">~3s</div>
                  <p className="text-sm text-muted-foreground">Average Result Time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ways to Participate */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Get Involved</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Report Stolen Items</h3>
                    <p className="text-muted-foreground mb-4">
                      Had something stolen? Report it to our database and help prevent others from unknowingly buying it.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/report-stolen">Report Now</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Share Your Story</h3>
                    <p className="text-muted-foreground mb-4">
                      Did SafeOrStolen save you from buying stolen goods? Share your experience to help others.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="https://www.trustpilot.com/review/safeorstolen.com" target="_blank" rel="noopener noreferrer">
                        Leave Review
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Spread the Word</h3>
                    <p className="text-muted-foreground mb-4">
                      Tell friends and family about SafeOrStolen. Every person who verifies before buying makes markets safer.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/app">Share the App</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Community Stories</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">
                    "Was about to buy a 'great deal' MacBook on Facebook Marketplace. Ran the serial through SafeOrStolen—turns out it was reported stolen 3 months ago. Saved me $800 and potential legal trouble."
                  </p>
                  <p className="text-sm text-muted-foreground">— Mike T., San Diego</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">
                    "I run a pawn shop in Texas. Before SafeOrStolen, we had 3-4 seizures a year from accepting stolen goods. Now we verify everything—zero seizures in 18 months. Essential for our business."
                  </p>
                  <p className="text-sm text-muted-foreground">— Sarah L., Dallas Pawn Shop Owner</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">
                    "My bike was stolen. I reported it through SafeOrStolen, and two weeks later someone ran a check on it at a pawn shop across town. Got my bike back!"
                  </p>
                  <p className="text-sm text-muted-foreground">— Alex R., Portland</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="https://www.trustpilot.com/review/safeorstolen.com" target="_blank" rel="noopener noreferrer">
                    Trustpilot <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://twitter.com/safeorstolen" target="_blank" rel="noopener noreferrer">
                    Twitter <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.youtube.com/@safeorstolen" target="_blank" rel="noopener noreferrer">
                    YouTube <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start verifying items today and be part of the solution to stolen goods fraud.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
