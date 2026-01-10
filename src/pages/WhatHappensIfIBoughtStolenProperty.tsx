import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Scale, Phone, FileText, HelpCircle, DollarSign, Clock, Gavel } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const WhatHappensIfIBoughtStolenProperty = () => {
  const faqs = [
    {
      question: "Can I go to jail for accidentally buying stolen property?",
      answer: "It depends on your state and circumstances. If you can prove you had no knowledge the item was stolen AND you made reasonable efforts to verify (like checking serial numbers), you're usually protected. However, if you should have known (extremely low price, suspicious seller), you could face charges for receiving stolen property."
    },
    {
      question: "Will I get my money back if police take the stolen item?",
      answer: "Unfortunately, probably not from the police or original owner. Your recourse is against the seller who sold you stolen property. If you have their information, you can pursue them in small claims court. This is why documentation and meeting in public places is so important."
    },
    {
      question: "What should I do immediately if I discover I bought stolen property?",
      answer: "Don't panic. Document everything (receipts, messages, photos), then contact local police and report what happened. Being proactive shows good faith. Do NOT try to return the item to the seller or continue using it once you know it's stolen."
    },
    {
      question: "How long does it take for police to come looking for stolen property?",
      answer: "It varies widely. Some items are recovered within days, others take months or years, and many are never recovered. High-value items like cars are tracked more aggressively than electronics or tools."
    },
    {
      question: "Can I keep the stolen item if I bought it in good faith?",
      answer: "No. Legally, stolen property must be returned to its rightful owner regardless of how you obtained it. The legal principle is 'a thief cannot pass good title' – meaning even if you paid fair value, you don't actually own stolen property."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <PageSEO
        title="What Happens If I Bought Stolen Property? Legal Guide 2026 | SafeOrStolen"
        description="Accidentally bought something stolen? Here's exactly what happens, your legal rights, and step-by-step what to do next. Don't panic - read this first."
        keywords="bought stolen property what now, accidentally bought stolen goods, receiving stolen property laws, bought stolen item consequences, unknowingly bought stolen property"
        canonical="/what-happens-if-i-bought-stolen-property"
        structuredData={[faqSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-red-900/20 via-background to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              I Bought Stolen Property. <span className="text-red-400">Now What?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              First: take a breath. This happens more often than you'd think. 
              Here's exactly what happens next, your legal rights, and what you need to do.
            </p>
          </div>
        </section>

        {/* Don't Panic */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-yellow-500/30 bg-yellow-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-8 h-8 text-yellow-400 shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold mb-2">The Most Important Thing</h2>
                    <p className="text-muted-foreground">
                      <strong>If you genuinely didn't know the item was stolen, you're usually not criminally liable.</strong> 
                      The law distinguishes between innocent purchasers and people who knowingly buy stolen goods. 
                      Your behavior NOW matters a lot.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Happens */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What Actually Happens</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-red-400 font-bold">1</span>
                    </div>
                    The Item Will Be Taken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This is the hardest part. Legally, stolen property MUST be returned to its rightful owner. 
                    Even if you paid full price and had no idea it was stolen, you don't actually own it. 
                    The legal principle is called "nemo dat" – a thief can't transfer ownership they don't have.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <span className="text-orange-400 font-bold">2</span>
                    </div>
                    You'll Likely Lose Your Money
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The police won't reimburse you. The original owner won't reimburse you. 
                    Your only recourse is against the person who sold you the stolen item – 
                    which is why getting their real identity and documentation matters so much.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <span className="text-yellow-400 font-bold">3</span>
                    </div>
                    You May Be Questioned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Police will want to know how you got the item. Be honest and cooperative. 
                    Explain where you bought it, from whom, and what price you paid. 
                    If you have documentation (receipts, messages, photos), this helps prove you acted in good faith.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    Good News: Innocent Buyers Are Usually Protected
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you genuinely didn't know and couldn't have reasonably known the item was stolen, 
                    criminal charges are rare. The key factors are: did you pay a reasonable price? 
                    Did you get documentation? Was the sale conducted normally? Did you verify serial numbers?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What To Do Now */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What To Do Right Now</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>1. Gather All Documentation</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• Screenshot all messages with the seller</p>
                  <p>• Save the original listing (if still available)</p>
                  <p>• Keep any receipts or written agreements</p>
                  <p>• Note down where/when you met</p>
                  <p>• Record what you paid</p>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>2. Contact Police Proactively</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• Call the non-emergency line</p>
                  <p>• Explain you believe you may have purchased stolen property</p>
                  <p>• Being proactive shows good faith</p>
                  <p>• Provide all documentation</p>
                  <p>• Follow their instructions</p>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>3. Consider Legal Counsel</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• If the item is high-value ($5,000+)</p>
                  <p>• If police seem to suspect you</p>
                  <p>• If you want to pursue the seller</p>
                  <p>• Many lawyers offer free consultations</p>
                  <p>• Know your rights before speaking further</p>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle>4. What NOT To Do</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• DON'T try to return it to the seller</p>
                  <p>• DON'T sell it to someone else</p>
                  <p>• DON'T hide it or destroy evidence</p>
                  <p>• DON'T lie to police</p>
                  <p>• DON'T contact the original owner directly</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal By State */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-center">State-by-State: Receiving Stolen Property Laws</h2>
            <p className="text-center text-muted-foreground mb-8">
              Penalties vary significantly by state. Here are examples:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">California</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Under $950: Misdemeanor</p>
                  <p>Over $950: Felony (up to 3 years)</p>
                  <p>"Knowingly" is required</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Texas</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Under $2,500: Misdemeanor</p>
                  <p>Over $2,500: Felony (up to 10 years)</p>
                  <p>"Knowledge" element required</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Arizona</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Class 6 Felony baseline</p>
                  <p>Increases with value</p>
                  <p>Defense: reasonable belief of ownership</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              <em>This is general information, not legal advice. Consult a local attorney for your specific situation.</em>
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto max-w-3xl text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Avoid This Situation Entirely
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              The best way to handle stolen property is to never buy it in the first place. 
              Check serial numbers BEFORE you pay – it takes 30 seconds and it's free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="text-lg px-8">
                  <Shield className="mr-2 h-5 w-5" />
                  Check Before You Buy
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/did-i-buy-stolen-property" className="hover:text-primary">Did I Buy Stolen Property?</Link>
              <span>•</span>
              <Link to="/craigslist-safety-guide" className="hover:text-primary">Craigslist Safety Guide</Link>
              <span>•</span>
              <Link to="/facebook-marketplace-safety-guide" className="hover:text-primary">Facebook Marketplace Safety</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatHappensIfIBoughtStolenProperty;
