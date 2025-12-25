import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle, Smartphone, DollarSign, Scale, Search, Star, ArrowRight } from 'lucide-react';

const ForBuyers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Buyer Protection - Check Items Before Purchase | SafeOrStolen</title>
        <meta name="description" content="Protect yourself from buying stolen goods. Verify IMEI, VIN, serial numbers before purchasing secondhand phones, cars, electronics. 2 free searches. Instant results." />
        <meta name="keywords" content="buyer protection, verify before buying, check if stolen, IMEI check buyer, VIN check before purchase, secondhand buyer safety, avoid stolen goods" />
        <link rel="canonical" href="https://safeorstolen.com/for-buyers" />
        <meta property="og:title" content="Buyer Protection - Check Items Before Purchase | SafeOrStolen" />
        <meta property="og:description" content="Protect yourself from buying stolen goods. Verify any item before purchase with instant database checks." />
        <meta property="og:url" content="https://safeorstolen.com/for-buyers" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-green-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-green-400 font-medium">Buyer Protection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Never Buy a <span className="text-destructive">Stolen</span> Item Again
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Whether you're buying from Facebook Marketplace, Craigslist, OfferUp, or meeting a stranger—verify the item isn't stolen before you hand over cash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
                <Link to="/verify">
                  <Search className="w-5 h-5 mr-2" />
                  Verify Now - Free
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/app">Download App</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Verify Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Buyers Need to Verify</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-xl font-bold mb-3">Legal Consequences</h3>
              <p className="text-muted-foreground">
                If police trace stolen property to you, you could face charges for receiving stolen goods—even if you bought it innocently. Verify first.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <DollarSign className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Financial Loss</h3>
              <p className="text-muted-foreground">
                When stolen items are recovered, you lose both the item AND your money. No refund. No recourse. A $5 verification beats a $1,000 loss.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Scale className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Peace of Mind</h3>
              <p className="text-muted-foreground">
                Know you're buying legitimately. No worries about police showing up months later. No ethical concerns. Just clean ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Check */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Buyers Can Check</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Phones', desc: 'iPhone, Samsung, Android' },
              { name: 'Vehicles', desc: 'Cars, motorcycles, boats' },
              { name: 'Laptops', desc: 'MacBook, Dell, HP, Lenovo' },
              { name: 'Bicycles', desc: 'Road bikes, mountain bikes' },
              { name: 'Electronics', desc: 'TVs, cameras, consoles' },
              { name: 'Power Tools', desc: 'DeWalt, Milwaukee, Makita' },
              { name: 'Jewelry', desc: 'Watches, rings, necklaces' },
              { name: 'Firearms', desc: 'Legal serial verification' },
            ].map((item) => (
              <div key={item.name} className="bg-background border border-border rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How to Verify Before Buying</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ask for the Serial/IMEI/VIN</h3>
                <p className="text-muted-foreground">Before meeting, ask the seller for the item's identifier. Legitimate sellers have nothing to hide. Refusal is a red flag.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enter It on SafeOrStolen</h3>
                <p className="text-muted-foreground">Use our website or mobile app to run the check. Takes 3 seconds. We search 100+ databases worldwide.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Get Instant Results</h3>
                <p className="text-muted-foreground">See if the item is reported stolen, lost, or clear. Make an informed decision before handing over money.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Advantage */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-green-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Mobile App</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Verify On the Spot</h2>
              <p className="text-muted-foreground mb-6">
                Meeting a seller in person? Use our mobile app to scan the barcode or manually enter the serial number right there. Don't complete the purchase until you see the green checkmark.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Camera barcode scanning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Works offline (saves for later sync)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Only app of its kind</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/app">
                  Download Free App <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[40px] border-4 border-gray-700 p-4 shadow-2xl">
                <div className="w-full h-full bg-background rounded-3xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="font-bold text-lg">CLEAR</p>
                    <p className="text-sm text-muted-foreground">Not reported stolen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
            </div>
            <blockquote className="text-xl italic mb-4">
              "Almost bought a stolen MacBook on Facebook Marketplace. Ran the serial number through SafeOrStolen first—it was reported stolen 2 months ago. Saved myself $800 and potential legal trouble."
            </blockquote>
            <p className="text-muted-foreground">— Marcus T., verified buyer</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Start Protecting Yourself Today</h2>
          <p className="text-muted-foreground mb-8">Get 2 free searches. No credit card required. Instant results.</p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/verify">
              Verify an Item Now <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForBuyers;
