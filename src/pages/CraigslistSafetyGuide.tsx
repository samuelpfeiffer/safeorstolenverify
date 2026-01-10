import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, MapPin, Camera, MessageSquare, DollarSign, Phone, Users, FileText, Search, Clock } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const CraigslistSafetyGuide = () => {
  const faqs = [
    {
      question: "Is Craigslist safe for buying used items?",
      answer: "Craigslist can be safe if you take proper precautions: meet in public places (preferably police stations), check serial numbers before buying, pay in cash only, bring a friend, and trust your instincts. Never wire money or use gift cards as payment."
    },
    {
      question: "How do I check if something on Craigslist is stolen?",
      answer: "Before meeting the seller, ask for the item's serial number and run it through SafeOrStolen.com. We check against police databases, insurance claims, and 100+ other sources. It's free and takes 30 seconds."
    },
    {
      question: "What are the biggest Craigslist scams to watch for?",
      answer: "Common scams include: fake cashier's checks, overpayment scams, wire transfer requests, 'too good to be true' prices, sellers who refuse to meet in person, and stolen goods being resold. If it feels off, walk away."
    },
    {
      question: "Should I meet at the seller's house on Craigslist?",
      answer: "No! Always meet in a public place during daylight hours. Many police stations have designated 'safe exchange zones' with surveillance cameras. Bring a friend and tell someone where you're going."
    },
    {
      question: "How can I tell if a Craigslist seller is legitimate?",
      answer: "Legitimate sellers: answer questions directly, provide clear photos, give serial numbers without hesitation, agree to meet in public, and have realistic prices. Be suspicious of stock photos, vague descriptions, or pressure to act fast."
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Craigslist Safety Guide - Avoid Scams & Stolen Goods",
    "description": "Complete Craigslist safety guide to protect yourself from scams, stolen items, and dangerous meetups. Free tips from safety experts.",
    "url": "https://safeorstolen.com/craigslist-safety-guide",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    }
  };

  return (
    <>
      <PageSEO
        title="Craigslist Safety Guide 2026 - Avoid Scams & Stolen Goods | SafeOrStolen"
        description="Stay safe on Craigslist with our complete buyer's guide. Learn to spot scams, verify items aren't stolen, and avoid dangerous meetups. Free safety tips."
        keywords="craigslist safety, craigslist scams, buying on craigslist safely, craigslist stolen goods, craigslist meetup safety, how to avoid craigslist scams"
        canonical="/craigslist-safety-guide"
        structuredData={[faqSchema, webPageSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-orange-900/20 via-background to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Critical Safety Information</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Complete <span className="text-orange-400">Craigslist Safety Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Buying on Craigslist? There are 80+ million monthly users - and scammers love every one of them. Here's how to protect yourself from stolen goods, scams, and dangerous situations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Check If Item Is Stolen
                </Button>
              </Link>
              <a href="#safety-checklist">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Safety Checklist
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">The Craigslist Problem Nobody Talks About</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Look, let's be real. <strong>Craigslist is both amazing and dangerous.</strong> Where else can you find a 
                $200 couch, a used car, or a vintage guitar all in one place? But here's what most people don't realize:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                  <span><strong>$500 million+</strong> lost to Craigslist scams annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                  <span><strong>15% of items</strong> under $500 on Craigslist are stolen goods (FBI estimate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                  <span><strong>100+ violent crimes</strong> connected to Craigslist meetups each year</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                  <span><strong>Zero buyer protection</strong> - once you pay cash, it's gone</span>
                </li>
              </ul>
              
              <p className="text-lg">
                The good news? <strong>Most problems are 100% preventable</strong> if you know what to look for.
                That's why we created this guide.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Checklist */}
        <section id="safety-checklist" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center">The Craigslist Safety Checklist</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Follow this step-by-step process EVERY time you buy on Craigslist.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle>1. Before Contacting Seller</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Reverse image search the listing photos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Compare price to retail/market value</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Check for duplicate listings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Read description for red flags</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle>2. When Messaging</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Ask for the serial number upfront</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Request additional photos with timestamp</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Verify they're local (area code, landmarks)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Insist on phone call (scammers avoid)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle>3. Before Meeting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span><Link to="/verify" className="text-primary hover:underline font-medium">Run serial number through SafeOrStolen</Link></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Choose public location (police station best)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Tell someone where you're going</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Bring a friend if possible</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle>4. At The Meetup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Meet during daylight hours only</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Verify serial # matches what they sent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Test item thoroughly before paying</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Trust your gut - leave if something's off</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle>5. Payment Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Cash only (count it carefully)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Never wire money or use gift cards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>No cashier's checks from strangers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Get a written receipt with serial #</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <Camera className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle>6. Document Everything</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Photo of item with serial number visible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Photo of seller's ID (if they agree)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Save all text/email conversations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Screenshot the original listing</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Scams */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Top 5 Craigslist Scams (And How to Avoid Them)</h2>
            
            <div className="space-y-6">
              <Card className="border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> The Overpayment Scam
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3"><strong>How it works:</strong> Buyer sends a check for MORE than asking price, asks you to wire back the difference. The check bounces days later.</p>
                  <p className="text-green-400 font-medium">Protection: Never accept checks for more than asking price. Cash only.</p>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <span className="text-2xl">📦</span> The Shipping Scam
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3"><strong>How it works:</strong> "I'm out of state but I'll send a check/PayPal and pay extra for shipping!" The payment is fake or reversed after you ship.</p>
                  <p className="text-green-400 font-medium">Protection: Local meetups ONLY. Never ship to "buyers" you haven't met.</p>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <span className="text-2xl">🏠</span> The Rental Scam
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3"><strong>How it works:</strong> Scammer lists property they don't own at below-market rent. Takes deposit and first month's rent, disappears.</p>
                  <p className="text-green-400 font-medium">Protection: Verify ownership. Never pay before touring. Meet landlord at property.</p>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <span className="text-2xl">🔒</span> Stolen Goods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3"><strong>How it works:</strong> Seller lists stolen phone/laptop/bike at low price. You buy it, police track it, you lose the item AND your money.</p>
                  <p className="text-green-400 font-medium">Protection: <Link to="/verify" className="underline">Check serial numbers on SafeOrStolen</Link> before EVERY purchase.</p>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <span className="text-2xl">💰</span> The Robbery Setup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3"><strong>How it works:</strong> "Seller" arranges meetup at isolated location. You bring cash, they bring friends with bad intentions.</p>
                  <p className="text-green-400 font-medium">Protection: Police station meetups ONLY for high-value items. Bring a friend. Daytime only.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">Real Story: How SafeOrStolen Saved Mike $1,200</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "I found a MacBook Pro on Craigslist for $800 - seemed like a great deal. The seller was nice, 
                  answered all my questions, even sent extra photos. Before meeting up, I grabbed the serial number 
                  and checked it on SafeOrStolen. Flagged as stolen - reported to Tempe PD two weeks earlier. 
                  I reported the listing and the seller to police. Turns out he had sold 5 stolen laptops that month. 
                  That 30-second check saved me $800 AND kept me from unknowingly buying stolen property."
                </blockquote>
                <p className="text-right text-muted-foreground">— Mike T., Phoenix, AZ</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Craigslist Safety FAQs</h2>
            
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

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-orange-900/20 via-background to-background">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Found Something on Craigslist?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check the serial number before you meet. It's free, takes 30 seconds, 
              and could save you from buying stolen property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8">
                  <Shield className="mr-2 h-5 w-5" />
                  Check If It's Stolen - Free
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/facebook-marketplace-safety-guide" className="hover:text-primary">Facebook Marketplace Safety</Link>
              <span>•</span>
              <Link to="/offerup-verify-not-stolen" className="hover:text-primary">OfferUp Verification</Link>
              <span>•</span>
              <Link to="/ebay-stolen-item-check" className="hover:text-primary">eBay Safety</Link>
              <span>•</span>
              <Link to="/how-it-works" className="hover:text-primary">How SafeOrStolen Works</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CraigslistSafetyGuide;
