import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Search, Gamepad2, HelpCircle } from 'lucide-react';

const SteamDeckStolenCheck = () => {
  const faqs = [
    {
      question: "Where is the serial number on a Steam Deck?",
      answer: "The Steam Deck serial number is located on a sticker on the back of the device, near the bottom. It's also visible in Settings > System > Serial Number. The serial starts with a letter followed by numbers."
    },
    {
      question: "How do I check if a Steam Deck is stolen before buying?",
      answer: "Get the serial number from the seller before meeting. Enter it into SafeOrStolen's verification tool - we check against police databases, insurance claims, and our user-reported database. If it's flagged, don't buy it."
    },
    {
      question: "Can a stolen Steam Deck be locked remotely?",
      answer: "Unlike phones, Steam Decks don't have a remote lock feature. However, if the previous owner's Steam account is still logged in, they could potentially access their account. Always factory reset any used Steam Deck you buy."
    },
    {
      question: "What's a fair price for a used Steam Deck?",
      answer: "In 2025, used Steam Decks typically sell for: 64GB LCD: $250-300, 256GB LCD: $300-350, 512GB LCD: $350-400, Steam Deck OLED: $400-500. Prices significantly below these ranges may indicate stolen property."
    },
    {
      question: "What should I check besides the serial number?",
      answer: "Ask for proof of purchase, check the physical condition for signs of damage, verify it's not banned from Steam services, ensure the seller can demonstrate it powers on and connects to WiFi, and verify no Steam account is still logged in."
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
      <Helmet>
        <title>Steam Deck Stolen Check - Free Serial Number Verification | SafeOrStolen</title>
        <meta name="description" content="Check if a Steam Deck is stolen before buying used. Free serial number lookup against police databases. Find serial number location and verify authenticity." />
        <meta name="keywords" content="steam deck stolen check, steam deck serial number, is my steam deck stolen, used steam deck verification, steam deck serial lookup" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safeorstolen.com/steam-deck-stolen-check" />
        <meta property="og:title" content="Steam Deck Stolen Check - Free Serial Number Verification" />
        <meta property="og:description" content="Verify a Steam Deck isn't stolen before buying. Free serial number check against police databases." />
        <meta property="og:url" content="https://safeorstolen.com/steam-deck-stolen-check" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-indigo-900/20 via-background to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full mb-6">
              <Gamepad2 className="w-4 h-4" />
              <span className="text-sm font-medium">Gaming Console Verification</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Steam Deck <span className="text-indigo-400">Stolen Check</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Buying a used Steam Deck? Enter the serial number and find out in seconds 
              if it's been reported stolen. Free, fast, and could save you hundreds.
            </p>

            <Link to="/verify">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-lg px-8">
                <Search className="mr-2 h-5 w-5" />
                Check Steam Deck Serial Number
              </Button>
            </Link>
          </div>
        </section>

        {/* Why Check */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Check Before Buying?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle>High Theft Target</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Steam Decks are prime theft targets - portable, valuable, and easy to sell. 
                    College campuses and gaming conventions see especially high theft rates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle>No Remote Lock</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Unlike iPhones, Steam Decks can't be remotely locked or bricked. 
                    This makes them attractive to thieves - and makes verification crucial.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle>Protect Yourself</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A 30-second check protects you from buying stolen property - 
                    losing your money AND potentially facing legal consequences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Where to Find Serial */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Where to Find Steam Deck Serial Number</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Back of the Device
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Look at the back of the Steam Deck, near the bottom edge. There's a sticker with 
                  a barcode and serial number. It starts with a letter (like "F" or "N") followed by numbers.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  In System Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Power on the Steam Deck, go to <strong>Settings → System</strong>. 
                  The serial number is displayed under system information.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Before Meeting (Preferred)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ask the seller for the serial number BEFORE meeting. A photo of the back with 
                  serial visible is ideal. This lets you verify before wasting time traveling.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link to="/verify">
                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600">
                  <Search className="mr-2 h-5 w-5" />
                  Check Serial Number Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-center">2025 Used Steam Deck Price Guide</h2>
            <p className="text-center text-muted-foreground mb-8">
              If the price is significantly below these ranges, be suspicious.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">64GB LCD</p>
                  <p className="text-2xl font-bold">$250-300</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">256GB LCD</p>
                  <p className="text-2xl font-bold">$300-350</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">512GB LCD</p>
                  <p className="text-2xl font-bold">$350-400</p>
                </CardContent>
              </Card>
              <Card className="text-center border-indigo-500/30">
                <CardContent className="pt-6">
                  <p className="text-sm text-indigo-400 mb-2">OLED (Any)</p>
                  <p className="text-2xl font-bold">$400-500</p>
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
                    <CardTitle className="text-lg flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                      {faq.question}
                    </CardTitle>
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
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-900/20 via-background to-background">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Check a Steam Deck?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Enter the serial number and get instant verification. 
              Free, fast, and could save you from a costly mistake.
            </p>
            <Link to="/verify">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-lg px-8">
                <Shield className="mr-2 h-5 w-5" />
                Check Steam Deck Serial Number
              </Button>
            </Link>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/ps5-stolen-check" className="hover:text-primary">PS5 Check</Link>
              <span>•</span>
              <Link to="/xbox-series-x-stolen-check" className="hover:text-primary">Xbox Check</Link>
              <span>•</span>
              <Link to="/nintendo-switch-stolen-check" className="hover:text-primary">Switch Check</Link>
              <span>•</span>
              <Link to="/gaming-console-check" className="hover:text-primary">All Gaming Consoles</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SteamDeckStolenCheck;
