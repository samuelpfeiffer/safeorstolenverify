import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, BadgeCheck, Smartphone, TrendingUp, FileCheck, Search, Star, ArrowRight, Share2 } from 'lucide-react';

const ForSellers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Seller Protection - Prove Your Items Are Legitimate | SafeOrStolen</title>
        <meta name="description" content="Build buyer trust by proving your items aren't stolen. Get verified seller badges. Share verification certificates. Sell faster on Facebook Marketplace, eBay, Craigslist." />
        <meta name="keywords" content="seller protection, prove item not stolen, verification certificate, verified seller, marketplace trust, sell faster, legitimate seller proof" />
        <link rel="canonical" href="https://safeorstolen.com/for-sellers" />
        <meta property="og:title" content="Seller Protection - Prove Your Items Are Legitimate | SafeOrStolen" />
        <meta property="og:description" content="Build buyer trust by proving your items aren't stolen. Get verification certificates and sell faster." />
        <meta property="og:url" content="https://safeorstolen.com/for-sellers" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-blue-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <BadgeCheck className="w-5 h-5 text-blue-500" />
              <span className="text-blue-400 font-medium">Seller Verification</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Prove Your Item is <span className="text-green-500">Legitimate</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Selling on Facebook Marketplace, eBay, or Craigslist? Serious buyers are skeptical. Verification certificates build instant trust and help you sell faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                <Link to="/verify">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Get Verification Certificate
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/app">Download App</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sellers Need Verification */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sellers Need Verification</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Sell Faster</h3>
              <p className="text-muted-foreground">
                Buyers on marketplaces are wary of scams. A verification certificate makes them confident to buy—reducing questions and speeding up sales.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Protect Yourself</h3>
              <p className="text-muted-foreground">
                Document that you verified the item before selling. If any disputes arise, you have proof you did your due diligence.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Star className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Stand Out</h3>
              <p className="text-muted-foreground">
                In a sea of unverified listings, a "Verified Clean" badge makes your listing premium. Buyers will choose verified items over mystery ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Sellers */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How to Get Verified as a Seller</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-500 font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Verify Your Item</h3>
                <p className="text-muted-foreground">Enter the IMEI, VIN, or serial number of the item you're selling. We check it against 100+ global databases.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-500 font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Get Your Certificate</h3>
                <p className="text-muted-foreground">If the item is clean, you receive a shareable verification certificate with a unique verification code.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-500 font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Share in Your Listing</h3>
                <p className="text-muted-foreground">Add the verification link or badge to your marketplace listing. Buyers can verify it themselves with one click.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shareable Certificate Feature */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 mb-4">
                <Share2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">Shareable Proof</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Share Your Verification</h2>
              <p className="text-muted-foreground mb-6">
                Every verification creates a unique shareable link. Include it in your listing description or send directly to interested buyers. They can verify the authenticity with one click.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Unique verification codes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Buyers can verify independently</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>PDF certificates for records</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Social sharing buttons</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/verify">
                  Verify & Get Certificate <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="bg-card border border-green-500/30 rounded-xl p-6 shadow-lg shadow-green-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-green-500">Verified Clean</p>
                    <p className="text-sm text-muted-foreground">SafeOrStolen Certificate</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Item:</span> iPhone 15 Pro Max</p>
                  <p><span className="text-muted-foreground">IMEI:</span> 35••••••••••••78</p>
                  <p><span className="text-muted-foreground">Status:</span> <span className="text-green-500 font-medium">Not Reported Stolen</span></p>
                  <p><span className="text-muted-foreground">Verified:</span> {new Date().toLocaleDateString()}</p>
                  <p><span className="text-muted-foreground">Code:</span> SOS-VRF-A7X9K2</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Verify this certificate at safeorstolen.com/verify
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Sell */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Works on All Marketplaces</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Facebook Marketplace',
              'eBay',
              'Craigslist',
              'OfferUp',
              'Mercari',
              'Poshmark',
              'Swappa',
              'Local Meetups',
            ].map((marketplace) => (
              <div key={marketplace} className="bg-background border border-border rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-medium">{marketplace}</h3>
              </div>
            ))}
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
              "I added the SafeOrStolen verification badge to my listings and noticed buyers stop asking 'is this stolen?' Started selling faster because people trust verified listings."
            </blockquote>
            <p className="text-muted-foreground">— Jennifer R., marketplace seller</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Start Selling With Confidence</h2>
          <p className="text-muted-foreground mb-8">Verify your items before listing. Build trust. Sell faster.</p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/verify">
              Verify Your Item Now <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForSellers;
