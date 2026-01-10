import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Search, MessageSquare, MapPin, DollarSign, Camera, FileText, Eye, ThumbsDown } from 'lucide-react';

const HowToAvoidBuyingStolenGoods = () => {
  const faqs = [
    {
      question: "What's the easiest way to check if something is stolen?",
      answer: "Get the serial number from the seller and run it through SafeOrStolen.com before you meet. It takes 30 seconds, checks 100+ databases, and it's completely free. This single step catches most stolen items."
    },
    {
      question: "What are red flags that something might be stolen?",
      answer: "Price way below market value, seller who can't explain why they're selling, refusal to provide serial numbers, meeting in unusual locations, cash-only with urgency, no proof of ownership, and listings with stock photos instead of real pictures."
    },
    {
      question: "Can I still be in trouble if I didn't know it was stolen?",
      answer: "Potentially yes. If the price was suspiciously low or there were obvious red flags, courts may determine you 'should have known.' That's why checking serial numbers creates a legal paper trail showing you did your due diligence."
    },
    {
      question: "What items are most commonly stolen and resold?",
      answer: "Phones (especially iPhones), laptops, gaming consoles (PS5, Xbox), bicycles, power tools, vehicles, jewelry, and cameras. These items have high resale value and are easy to sell quickly on marketplaces."
    },
    {
      question: "Should I meet at the seller's home?",
      answer: "Never for high-value items. Many police stations have 'safe exchange zones' specifically for online purchases. If a seller refuses to meet in public, that's a major red flag."
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Avoid Buying Stolen Goods",
    "description": "A complete guide to protecting yourself from accidentally purchasing stolen property when buying used items.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check the Serial Number",
        "text": "Get the serial number from the seller and verify it through a stolen property database like SafeOrStolen.com before meeting."
      },
      {
        "@type": "HowToStep",
        "name": "Evaluate the Price",
        "text": "If the price is more than 30% below market value, be suspicious. Thieves price items low to sell quickly."
      },
      {
        "@type": "HowToStep",
        "name": "Meet in Public",
        "text": "Always meet at a police station safe exchange zone or other well-lit public place with surveillance."
      },
      {
        "@type": "HowToStep",
        "name": "Verify and Document",
        "text": "Match the serial number to what you checked, get a receipt with seller info, and photograph everything."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>How to Avoid Buying Stolen Goods - Complete 2025 Guide | SafeOrStolen</title>
        <meta name="description" content="Don't get stuck with stolen property. Learn the 10 red flags, how to verify serial numbers, and protect yourself when buying used items online." />
        <meta name="keywords" content="avoid buying stolen goods, how to tell if something is stolen, red flags stolen property, verify before buying, stolen item warning signs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safeorstolen.com/how-to-avoid-buying-stolen-goods" />
        <meta property="og:title" content="How to Avoid Buying Stolen Goods - Complete Guide" />
        <meta property="og:description" content="Learn the warning signs of stolen property and how to protect yourself when buying used items." />
        <meta property="og:url" content="https://safeorstolen.com/how-to-avoid-buying-stolen-goods" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-green-900/20 via-background to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Buyer Protection Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to <span className="text-green-400">Avoid Buying Stolen Goods</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              12% of items under $500 sold on online marketplaces are stolen. 
              Here's how to make sure you're not the one who ends up with them.
            </p>

            <Link to="/verify">
              <Button size="lg" className="text-lg px-8">
                <Search className="mr-2 h-5 w-5" />
                Check If Something's Stolen
              </Button>
            </Link>
          </div>
        </section>

        {/* The 10 Red Flags */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-center">The 10 Red Flags of Stolen Property</h2>
            <p className="text-center text-muted-foreground mb-12">
              If you see ANY of these, proceed with extreme caution.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <DollarSign className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">1. Price Too Good to Be True</h3>
                      <p className="text-sm text-muted-foreground">
                        30-50% below market value is a major red flag. Thieves price to sell fast.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">2. Vague or Inconsistent Story</h3>
                      <p className="text-sm text-muted-foreground">
                        "Selling for a friend" or constantly changing reasons why they're selling.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <ThumbsDown className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">3. Won't Provide Serial Number</h3>
                      <p className="text-sm text-muted-foreground">
                        Legitimate sellers have nothing to hide. Refusal is a dealbreaker.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <Camera className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">4. Stock Photos or Vague Images</h3>
                      <p className="text-sm text-muted-foreground">
                        Real sellers take real photos. Reverse image search to check.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">5. Unusual Meeting Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Parking lots, alleys, or refusal to meet at police station safe zones.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">6. Extreme Urgency</h3>
                      <p className="text-sm text-muted-foreground">
                        "Must sell today" or pressure tactics. Honest sellers aren't desperate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">7. No Proof of Ownership</h3>
                      <p className="text-sm text-muted-foreground">
                        No receipt, no original box, no paperwork, no warranty info.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <Eye className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">8. Item Shows Signs of Damage</h3>
                      <p className="text-sm text-muted-foreground">
                        Scratched serial numbers, removed labels, or unexplained damage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">9. Seller Has No History</h3>
                      <p className="text-sm text-muted-foreground">
                        New account, no reviews, no profile photo, no other listings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">10. Your Gut Says Something's Off</h3>
                      <p className="text-sm text-muted-foreground">
                        Trust your instincts. If it feels wrong, it probably is.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Protection Process */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">The 4-Step Protection Process</h2>
            
            <div className="space-y-8">
              <Card className="border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-green-400">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Before You Even Message: Check the Serial</h3>
                      <p className="text-muted-foreground mb-4">
                        If the listing shows a serial number (dashboard VIN, IMEI in description, etc.), 
                        run it through SafeOrStolen BEFORE contacting the seller. If it's stolen, you just 
                        saved yourself time and potential trouble.
                      </p>
                      <Link to="/verify" className="text-primary hover:underline font-medium">
                        Check Serial Number Now →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-blue-400">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">When Messaging: Ask the Right Questions</h3>
                      <p className="text-muted-foreground mb-4">
                        Request: serial number, reason for selling, how long they've owned it, 
                        original purchase location, any documentation. Legitimate sellers answer openly.
                      </p>
                      <p className="text-sm">
                        <strong>Pro tip:</strong> Ask for a photo of the serial number with a 
                        handwritten note showing today's date. Scammers won't do this.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-purple-400">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Before Meeting: Verify Everything</h3>
                      <p className="text-muted-foreground mb-4">
                        Run the serial number through SafeOrStolen. Choose a police station safe zone. 
                        Tell someone where you're going. Bring a friend for high-value items.
                      </p>
                      <p className="text-sm">
                        <strong>Many police stations</strong> have designated "Internet Purchase Exchange Zones" 
                        with cameras and good lighting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-orange-400">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">At the Meetup: Document Everything</h3>
                      <p className="text-muted-foreground mb-4">
                        Match the serial number on the item to what you verified. Test the item thoroughly. 
                        Get a written receipt with seller's name, date, price, and serial number. 
                        Photo the item and seller's ID if they agree.
                      </p>
                      <p className="text-sm">
                        <strong>If anything feels wrong:</strong> "Sorry, changed my mind" and leave. 
                        No deal is worth your safety or legal trouble.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-900/20 via-background to-background">
          <div className="container mx-auto max-w-3xl text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Found Something You Want to Buy?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check the serial number first. It takes 30 seconds and could save you 
              from losing your money AND facing legal trouble.
            </p>
            <Link to="/verify">
              <Button size="lg" className="text-lg px-8">
                <Shield className="mr-2 h-5 w-5" />
                Check If It's Stolen - Free
              </Button>
            </Link>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/facebook-marketplace-safety-guide" className="hover:text-primary">Facebook Marketplace Guide</Link>
              <span>•</span>
              <Link to="/craigslist-safety-guide" className="hover:text-primary">Craigslist Safety Guide</Link>
              <span>•</span>
              <Link to="/what-happens-if-i-bought-stolen-property" className="hover:text-primary">What If I Already Bought Something?</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HowToAvoidBuyingStolenGoods;
