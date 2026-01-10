import { PageSEO } from '@/components/seo/PageSEO';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Search, Shield, AlertTriangle, CheckCircle, ArrowRight, Scale, DollarSign, Heart } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const faqs = [
  {
    question: "What happens if I accidentally bought stolen property?",
    answer: "If you genuinely didn't know, you typically won't face criminal charges. However, you WILL lose the item - it legally belongs to the original owner. You also lose your money. That's why checking BEFORE buying is so important."
  },
  {
    question: "Can I get my money back if I bought something stolen?",
    answer: "From the seller? Good luck - they're probably long gone. Your best options: 1) Take the seller to small claims court if you can find them, 2) File a police report and provide seller info, 3) Check if your homeowner's/renter's insurance covers it."
  },
  {
    question: "Will I go to jail for buying stolen property?",
    answer: "Only if prosecutors can prove you KNEW it was stolen. Buying at a reasonable price, from a seemingly normal seller, with a receipt? You're likely fine legally. But buying a $2,000 iPhone for $100 cash from a guy in a parking lot? That might be harder to explain."
  },
  {
    question: "How do I know if something might be stolen?",
    answer: "Red flags: Price way below market value, seller is evasive about where they got it, no original packaging/receipt, meet in weird locations, won't let you verify serial numbers, cash only, rushing the sale."
  },
  {
    question: "Should I report that I bought stolen property?",
    answer: "Yes. Contact local police, explain you discovered it was stolen, and surrender the item. This protects you legally and might help the original owner recover their property. Keep any receipts/texts with the seller."
  },
  {
    question: "Can police track me if I check a serial number here?",
    answer: "No. Our searches are completely anonymous. We don't report searches to law enforcement or track what you check. This is a due diligence tool, not a surveillance system."
  }
];

const DidIBuyStolenPropertyPage = () => {
  return (
    <>
      <PageSEO
        title="Did I Buy Stolen Property? What to Do Right Now | SafeOrStolen"
        description="That sinking feeling when you realize your 'great deal' might be stolen goods. Don't panic - here's what you need to know and what to do next."
        keywords="did I buy stolen property, bought stolen goods, what to do if bought stolen, accidentally bought stolen, check if purchase stolen"
        canonical="/check-if-bought-stolen-property"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-amber-500/10 via-background to-red-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>Don't panic - you have options</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Did I Buy Stolen Property? What to Do Right Now
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              That sinking feeling when you realize your "great deal" might be stolen goods. 
              Don't panic - here's what you need to know.
            </p>

            <Card className="max-w-xl mx-auto bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-left text-muted-foreground mb-4">
                  <strong className="text-foreground">First, let's check if it's actually stolen.</strong> 
                  Enter the serial number, IMEI, or VIN below:
                </p>
                <HomeSearchFormWithURL />
              </CardContent>
            </Card>

            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-blue-500" /> Anonymous</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-500" /> Free</span>
              <span className="flex items-center gap-1"><Search className="h-4 w-4 text-primary" /> Instant</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Real Talk: Here's What Actually Happens
            </h2>
            
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                Look, nobody wants to be in this situation. You thought you got a great deal, 
                and now you're worried it might be too good to be true. Let me break down what 
                actually happens if you bought stolen property:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <AlertTriangle className="h-5 w-5" />
                      The Bad News
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>• You lose the item (it goes back to original owner)</p>
                    <p>• You lose your money (theft insurance rarely covers this)</p>
                    <p>• You wasted time dealing with police/paperwork</p>
                    <p>• Stress and hassle nobody needs</p>
                  </CardContent>
                </Card>

                <Card className="border-green-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-5 w-5" />
                      The Good News
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>• You probably won't face criminal charges</p>
                    <p>• "I didn't know" is usually a valid defense</p>
                    <p>• Cooperating with police looks good</p>
                    <p>• You can try to get money from the seller</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do If Stolen */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              If It IS Stolen: Your Step-by-Step Action Plan
            </h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Stay Calm and Don't Sell It</h3>
                      <p className="text-muted-foreground">
                        Don't try to get rid of it. Selling stolen property knowingly IS a crime. 
                        Just hold onto it while you figure this out.
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
                      <h3 className="font-semibold mb-2">Gather Your Evidence</h3>
                      <p className="text-muted-foreground">
                        Collect everything: texts with seller, payment receipts, listing screenshots, 
                        any ID you have for the seller. This proves you thought it was legit.
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
                      <h3 className="font-semibold mb-2">Contact Local Police</h3>
                      <p className="text-muted-foreground">
                        Call the non-emergency line. Tell them you believe you purchased stolen 
                        property and want to turn it in. They'll walk you through the process.
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
                      <h3 className="font-semibold mb-2">Consider Your Recovery Options</h3>
                      <p className="text-muted-foreground">
                        • Small claims court against the seller (if you can find them)<br />
                        • Check if your insurance covers theft-related losses<br />
                        • Report to the platform where you bought it (they may help)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Red Flags You Should Have Noticed (For Next Time)
            </h2>
            <p className="text-muted-foreground mb-8">
              Learn from this. Here are the warning signs that something might be stolen:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: DollarSign, title: "Price Way Too Low", desc: "If it seems too good to be true..." },
                { icon: AlertTriangle, title: "Cash Only, No Questions", desc: "Legit sellers don't mind normal payment methods" },
                { icon: Scale, title: "No Receipt or Original Box", desc: "Where did this come from exactly?" },
                { icon: Heart, title: "Rushing the Sale", desc: "\"I need to sell TODAY\" is suspicious" },
                { icon: Shield, title: "Won't Show Serial Number", desc: "What are they hiding?" },
                { icon: Search, title: "Vague About Origin", desc: "\"It was a gift\" or \"bought it a while ago\"" }
              ].map((flag, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <flag.icon className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{flag.title}</p>
                      <p className="text-sm text-muted-foreground">{flag.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

      {/* Prevention CTA */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Never Go Through This Again</h2>
            <p className="text-muted-foreground">
              Next time, check BEFORE you buy. It takes 30 seconds and it's free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Search className="mr-2 h-4 w-4" />
                  Check Before You Buy
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/app">
                  Download the App
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
              <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace Check</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/craigslist-safety-verification" className="text-primary hover:underline">Craigslist Verification</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/blog/scammer-tactics-exposed" className="text-primary hover:underline">Scammer Tactics Exposed</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How Verification Works</Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default DidIBuyStolenPropertyPage;
