import { PageSEO } from '@/components/seo/PageSEO';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Search, Shield, AlertTriangle, CheckCircle, ArrowRight, Store, Clock, DollarSign, FileText } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const faqs = [
  {
    question: "Do pawn shops actually check if items are stolen?",
    answer: "Yes - they're legally required to. Most pawn shops report every transaction to local police with serial numbers. But they use databases, and stolen items sometimes slip through. Checking yourself first saves everyone time."
  },
  {
    question: "Can I pawn something without them knowing it's stolen?",
    answer: "Not for long. Pawn shops submit serial numbers to police databases daily. If it's reported stolen, police will show up. You'll face criminal charges AND lose the item. Not worth it."
  },
  {
    question: "Why should I check before going to a pawn shop?",
    answer: "Saves embarrassment and time. If the item comes up flagged, the pawn shop will refuse it AND might report you to police. Better to know before you walk in the door."
  },
  {
    question: "Will pawn shops buy items without serial numbers?",
    answer: "Many won't touch them, especially for electronics and guns. Missing or scratched-off serial numbers are huge red flags that scream 'stolen property.'"
  },
  {
    question: "What databases do pawn shops use?",
    answer: "Most use LeadsOnline, NCIC (for guns), and local police databases. We check similar sources. If your item is flagged in our system, it'll likely be flagged in theirs too."
  },
  {
    question: "Can I check if a pawn shop item is stolen before buying?",
    answer: "Absolutely. Ask for the serial number before purchasing and run it through our free check. Pawn shops generally verify incoming items, but it doesn't hurt to double-check."
  }
];

const PawnShopSerialCheckPage = () => {
  return (
    <>
      <PageSEO
        title="Pawn Shop Serial Number Check - Verify Before Selling | SafeOrStolen"
        description="Pawn shops are REQUIRED to check serial numbers. Save time and avoid awkward situations - check yourself first. Free, instant results."
        keywords="pawn shop serial number check, pawn shop stolen check, verify item before pawn, sell to pawn shop, pawn shop database check"
        canonical="/pawn-shop-serial-number-check"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-amber-500/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
              <Store className="h-4 w-4" />
              <span>Check before you walk in</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Pawn Shop Serial Number Check — Verify Before Selling
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Pawn shops are REQUIRED to check serial numbers. Save time and avoid 
              awkward situations - check yourself first.
            </p>

            <div className="pt-4 max-w-xl mx-auto">
              <HomeSearchFormWithURL />
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-500" /> Free Check</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-blue-500" /> Instant Results</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> Same Databases</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Check Before Pawn */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Why Check Before Going to the Pawn Shop?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Save Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pawn shops run every serial number. If there's an issue, you'll find out 
                    after waiting in line, filling out paperwork, and then getting turned away. 
                    Check first - know before you go.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    Avoid Awkward Situations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If a pawn shop's check flags your item, they may refuse the sale AND 
                    call the police. Even if it's a mistake, that's a bad day. Better to 
                    sort it out privately first.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    Get Better Offers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Walk in with confidence. "I already verified it's clean" shows you're 
                    serious and legit. Some shops appreciate customers who do their homework.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-blue-500" />
                    Buying from Pawn Shops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Shopping at a pawn shop? Ask for the serial number and check it before 
                    buying. Pawn shops verify intake, but double-checking never hurts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Pawn Shops Work */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How Pawn Shop Verification Actually Works
            </h2>
            <p className="text-muted-foreground mb-8">
              Here's what happens behind the counter when you try to pawn or sell something:
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">They Record Your Info</h3>
                      <p className="text-muted-foreground">
                        Government ID required. Your name, address, and photo go on file. 
                        This is legally required and reported to police.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Serial Numbers Get Checked</h3>
                      <p className="text-muted-foreground">
                        Every item with a serial number is run through databases like LeadsOnline. 
                        For guns, NCIC is checked. Police can access these records.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Items Go on Hold</h3>
                      <p className="text-muted-foreground">
                        Most states require pawn shops to hold items for 10-30 days before 
                        selling. This gives police time to match them to theft reports.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">If Something's Flagged...</h3>
                      <p className="text-muted-foreground">
                        The shop stops the transaction. Police are notified. You may be 
                        detained for questioning. Even if you're innocent, it's a mess.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Check */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Items Should You Check?
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Firearms</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely critical. Stolen guns stay in NCIC forever. Federal offense to pawn a stolen firearm.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Electronics</h3>
                  <p className="text-sm text-muted-foreground">
                    Phones, laptops, gaming consoles. IMEI and serial numbers are tracked by carriers and police.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Power Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Common theft targets. DeWalt, Milwaukee, Makita - all have trackable serials.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Musical Instruments</h3>
                  <p className="text-sm text-muted-foreground">
                    Guitars, keyboards, brass instruments. Many have serial numbers that owners register.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Bicycles</h3>
                  <p className="text-sm text-muted-foreground">
                    High-value bikes are registered. BikeIndex and police databases track stolen bikes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Jewelry/Watches</h3>
                  <p className="text-sm text-muted-foreground">
                    Luxury watches have serial numbers. Rolex, Omega, etc. are tracked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-amber-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Check Before You Go</h2>
            <p className="text-muted-foreground">
              Know your item is clean before walking into the pawn shop. 
              Free check, instant results, no surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Search className="mr-2 h-4 w-4" />
                  Check Serial Number
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/for-pawn-shops">
                  Pawn Shop Business Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
            <nav className="flex flex-wrap gap-2">
              <Link to="/for-pawn-shops" className="text-primary hover:underline">For Pawn Shops</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/serial-number-checker" className="text-primary hover:underline">Serial Number Checker</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/blog/pawn-shop-stolen-item-verification" className="text-primary hover:underline">Pawn Shop Verification Guide</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/gun-serial-number-lookup" className="text-primary hover:underline">Gun Serial Lookup</Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default PawnShopSerialCheckPage;
