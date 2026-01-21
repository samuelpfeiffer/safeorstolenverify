import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { BookOpen, FileText, Video, Download, HelpCircle, Shield, Phone, Car, ArrowRight } from 'lucide-react';

export default function ResourceCenterPage() {
  return (
    <>
      <PageSEO
        title="Resource Center - Guides, Tools & Help | SafeOrStolen"
        description="Free resources for verifying phones, vehicles, and electronics. Guides, tutorials, FAQs, and tools to protect yourself from stolen goods."
        keywords="resource center, verification guides, how to guides, stolen item help, IMEI guide, VIN guide, tutorials"
        canonical="https://safeorstolen.com/resource-center"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Resource Center
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to buy and sell secondhand items safely. Guides, tools, FAQs, and expert tips.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Guides */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Guides</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/comprehensive-guide" className="text-primary hover:underline">
                        Comprehensive Verification Guide
                      </Link>
                    </li>
                    <li>
                      <Link to="/how-to-check-if-item-stolen" className="text-primary hover:underline">
                        How to Check If Item Is Stolen
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/how-to-check-if-phone-stolen" className="text-primary hover:underline">
                        Phone Verification Guide
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/complete-vin-guide" className="text-primary hover:underline">
                        Complete VIN Guide
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/complete-imei-guide-protect-yourself" className="text-primary hover:underline">
                        Complete IMEI Guide
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Tools */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Verification Tools</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/imei-checker" className="text-primary hover:underline">
                        IMEI Checker (Phones)
                      </Link>
                    </li>
                    <li>
                      <Link to="/vin-checker" className="text-primary hover:underline">
                        VIN Checker (Vehicles)
                      </Link>
                    </li>
                    <li>
                      <Link to="/serial-number-checker" className="text-primary hover:underline">
                        Serial Number Checker
                      </Link>
                    </li>
                    <li>
                      <Link to="/license-plate-lookup" className="text-primary hover:underline">
                        License Plate Lookup
                      </Link>
                    </li>
                    <li>
                      <Link to="/free-tools" className="text-primary hover:underline">
                        Free Tools
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Help */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <HelpCircle className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Help & Support</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/faq" className="text-primary hover:underline">
                        Frequently Asked Questions
                      </Link>
                    </li>
                    <li>
                      <Link to="/how-it-works" className="text-primary hover:underline">
                        How It Works
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="text-primary hover:underline">
                        Pricing & Plans
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-primary hover:underline">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:support@safeorstolen.com" className="text-primary hover:underline">
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Item-Specific Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Item-Specific Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Phones</h3>
                    <ul className="text-sm space-y-1">
                      <li><Link to="/check-phone" className="text-muted-foreground hover:text-primary">Check Phone</Link></li>
                      <li><Link to="/check-iphone-stolen" className="text-muted-foreground hover:text-primary">iPhone Check</Link></li>
                      <li><Link to="/check-android" className="text-muted-foreground hover:text-primary">Android Check</Link></li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Car className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Vehicles</h3>
                    <ul className="text-sm space-y-1">
                      <li><Link to="/check-car" className="text-muted-foreground hover:text-primary">Check Car</Link></li>
                      <li><Link to="/vin-checker" className="text-muted-foreground hover:text-primary">VIN Checker</Link></li>
                      <li><Link to="/license-plate-lookup" className="text-muted-foreground hover:text-primary">License Plate</Link></li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Firearms</h3>
                    <ul className="text-sm space-y-1">
                      <li><Link to="/check-firearm" className="text-muted-foreground hover:text-primary">Check Firearm</Link></li>
                      <li><Link to="/gun-serial-number-lookup" className="text-muted-foreground hover:text-primary">Gun Serial Lookup</Link></li>
                      <li><Link to="/stolen-gun-database" className="text-muted-foreground hover:text-primary">Stolen Gun Database</Link></li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Download className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Electronics</h3>
                    <ul className="text-sm space-y-1">
                      <li><Link to="/check-laptop" className="text-muted-foreground hover:text-primary">Laptops</Link></li>
                      <li><Link to="/check-electronics" className="text-muted-foreground hover:text-primary">Electronics</Link></li>
                      <li><Link to="/check-ps5" className="text-muted-foreground hover:text-primary">Gaming Consoles</Link></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Latest from the Blog</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/blog/facebook-marketplace-scams" className="hover:text-primary">
                      Facebook Marketplace Scams to Avoid in 2026
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">Learn the latest scam tactics and how to protect yourself.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/blog/pawn-shop-stolen-item-verification" className="hover:text-primary">
                      Pawn Shop Verification Guide
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">How pawn shops can protect themselves from stolen goods.</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check phones, vehicles, and electronics in seconds. 2 free verifications included.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Start Verification <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
