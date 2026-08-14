import React, { useState, useCallback } from 'react';
import { Shield, Search, AlertTriangle, CheckCircle, DollarSign, MessageSquare, Camera, MapPin, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { PageSEO } from '@/components/seo/PageSEO';
import { ScamAnalysisResultCard } from '@/components/scam/ScamAnalysisResult';
import { analyzeListingForScams, type ListingData, type ScamAnalysisResult } from '@/lib/scamAnalyzer';
import { Link } from 'react-router-dom';

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "SafeOrStolen AI Marketplace Scam Checker",
  "url": "https://safeorstolen.com/scam-checker",
  "description": "AI-powered scam detector for marketplace listings. Analyzes price, seller signals, listing text, and 15+ fraud patterns to produce a scam risk score.",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I tell if a Facebook Marketplace listing is a scam?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use SafeOrStolen's free AI Scam Checker at safeorstolen.com/scam-checker. It analyzes the listing price, seller behavior, description text, and 15+ fraud signals to produce a scam risk score from 0-100. Common scam signals include prices far below market value, cash-only payment demands, urgency pressure, refusing to let buyers test items, and suggesting meetings in isolated locations." }
    },
    {
      "@type": "Question",
      "name": "How does SafeOrStolen's AI scam detector work?",
      "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen's AI scam detector analyzes marketplace listings across 15+ fraud signal categories including price analysis against market values, payment method red flags, seller behavior patterns, listing text manipulation tactics, photo verification, and platform-specific risk factors. Each signal is scored by severity and combined into a 0-100 Scam Risk Score." }
    },
    {
      "@type": "Question",
      "name": "What are the most common Facebook Marketplace scams in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common Facebook Marketplace scams in 2026 include fake listings with stolen photos and prices 50-70% below market value, sellers demanding Zelle or Venmo Friends and Family payments, bait-and-switch scams, phishing links disguised as payment pages, shipping scams, and overpayment scams." }
    },
    {
      "@type": "Question",
      "name": "Is the SafeOrStolen scam checker free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, SafeOrStolen's AI scam checker is completely free with unlimited use. It can also be combined with stolen item verification (2 free checks, then $0.99/check or $10/month unlimited) for complete protection." }
    }
  ]
};

const SIGNAL_CATEGORIES = [
  { icon: DollarSign, title: "Price Manipulation", desc: "Prices far below market value" },
  { icon: AlertTriangle, title: "Payment Red Flags", desc: "Wire transfer, gift cards, crypto demands" },
  { icon: MessageSquare, title: "Urgency Tactics", desc: "Must sell today, moving, desperate" },
  { icon: Users, title: "Seller Behavior", desc: "Avoiding platform messaging, third-party sellers" },
  { icon: FileText, title: "Listing Quality", desc: "No photos, minimal description, excessive caps" },
  { icon: MapPin, title: "Meeting Safety", desc: "Unsafe locations, refusing public meetups" },
  { icon: Shield, title: "Platform Risks", desc: "Platform-specific scam patterns" },
  { icon: Camera, title: "Ownership Signals", desc: "No receipt, selling for someone else" },
];

const ScamCheckerPage: React.FC = () => {
  const [platform, setPlatform] = useState('');
  const [itemType, setItemType] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageCount, setImageCount] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [result, setResult] = useState<ScamAnalysisResult | null>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const listing: ListingData = {
      title,
      description,
      price: price ? parseFloat(price) : null,
      sellerName: sellerName || null,
      platform: platform || 'other',
      listingUrl: '',
      imageCount: imageCount ? parseInt(imageCount) : 5,
      itemType: itemType || 'electronics',
    };
    setResult(analyzeListingForScams(listing));
  }, [title, description, price, sellerName, platform, imageCount, itemType]);

  return (
    <>
      <PageSEO
        title="AI Marketplace Scam Checker — Detect Fake Listings | SafeOrStolen"
        description="Free AI scam detector for Facebook Marketplace, eBay, Craigslist, OfferUp. Paste listing details and get an instant scam risk score. Detects price manipulation, fake sellers, and fraud signals."
        canonical="/scam-checker"
        structuredData={[webAppSchema, faqSchema]}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">AI Marketplace Scam Checker</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto speakable-summary">
            Free AI-powered scam detector for Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, and Poshmark. 
            Paste listing details and get a scam risk score in seconds. SafeOrStolen analyzes 15+ fraud signals including 
            price manipulation, fake seller patterns, and dangerous payment requests.
          </p>
          <p className="text-sm text-muted-foreground">
            Want to check BOTH stolen status AND scam risk at once?{' '}
            <Link to="/marketplace-url-checker" className="text-primary hover:underline font-medium">
              Paste any marketplace URL for automatic dual analysis →
            </Link>
          </p>
        </header>

        <section aria-label="Scam checker form" className="bg-card border border-border rounded-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger id="platform"><SelectValue placeholder="Select marketplace..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="facebook">Facebook Marketplace</SelectItem>
                    <SelectItem value="ebay">eBay</SelectItem>
                    <SelectItem value="craigslist">Craigslist</SelectItem>
                    <SelectItem value="offerup">OfferUp</SelectItem>
                    <SelectItem value="mercari">Mercari</SelectItem>
                    <SelectItem value="poshmark">Poshmark</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="itemType">Item Type</Label>
                <Select value={itemType} onValueChange={setItemType}>
                  <SelectTrigger id="itemType"><SelectValue placeholder="Select item type..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="vehicle">Vehicle</SelectItem>
                    <SelectItem value="bicycle">Bicycle</SelectItem>
                    <SelectItem value="ebike">eBike</SelectItem>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="firearm">Firearm</SelectItem>
                    <SelectItem value="appliance">Appliance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="listingTitle">Listing Title</Label>
              <Input id="listingTitle" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. iPhone 15 Pro Max 256GB unlocked" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Listing Price (optional)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input id="price" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="0" className="pl-7" min="0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageCount">Number of Photos</Label>
                <Input id="imageCount" type="number" value={imageCount} onChange={e => setImageCount(e.target.value)} placeholder="0" min="0" max="50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Listing Description</Label>
              <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Paste the listing description here..." rows={5} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sellerName">Seller Name (optional)</Label>
              <Input id="sellerName" value={sellerName} onChange={e => setSellerName(e.target.value)} placeholder="e.g. John D." />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto button-glow">
              <Search className="w-4 h-4 mr-2" /> Analyze for Scams
            </Button>
          </form>
        </section>

        {result && <ScamAnalysisResultCard result={result} />}

        <section aria-label="How the AI scam detector works">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Enter the listing details from any marketplace — Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark</li>
            <li>SafeOrStolen's AI analyzes 15+ scam signal categories including price analysis, seller behavior, listing text red flags, payment method risks, and photo verification</li>
            <li>Get a 0-100 Scam Risk Score with a clear recommendation and detailed breakdown of every signal detected</li>
          </ol>
        </section>

        <section aria-label="What scam signals we detect">
          <h2 className="text-2xl font-bold text-foreground mb-4">Scam Signals We Detect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SIGNAL_CATEGORIES.map(({ icon: Icon, title: t, desc }) => (
              <div key={t} className="p-4 rounded-lg border border-border bg-card">
                <Icon className="w-5 h-5 text-primary mb-2" />
                <h3 className="text-sm font-semibold text-foreground">{t}</h3>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Frequently asked questions about marketplace scams">
          <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">How can I tell if a Facebook Marketplace listing is a scam?</summary>
              <p className="text-sm text-muted-foreground mt-2">Look for these warning signs: prices significantly below market value, sellers demanding cash-only or Zelle/Venmo payments, urgency pressure ("must sell today"), refusal to let you test the item, only one photo or stock photos, newly created seller accounts, and suggestions to meet in isolated locations. SafeOrStolen's AI scam checker analyzes all of these signals automatically and gives you a 0-100 risk score.</p>
            </details>
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">What should I do if I think a listing is a scam?</summary>
              <p className="text-sm text-muted-foreground mt-2">Do not send any money or personal information. Report the listing to the platform. If you've already sent money, contact your bank immediately to dispute the charge. File a report with the FTC at reportfraud.ftc.gov and your local police department.</p>
            </details>
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">Is it safe to buy from Facebook Marketplace?</summary>
              <p className="text-sm text-muted-foreground mt-2">Facebook Marketplace can be safe if you take precautions: always meet in a public place, test items before paying, use Facebook's checkout system when available, verify the seller's profile age and history, and use SafeOrStolen to check both the item's stolen status and the listing's scam risk score.</p>
            </details>
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">How common are scams on Craigslist and OfferUp?</summary>
              <p className="text-sm text-muted-foreground mt-2">According to the FTC, Americans lost over $10 billion to fraud in 2023, with online marketplace scams among the fastest growing categories. Craigslist has no buyer protection system at all. Using SafeOrStolen's AI scam checker before any purchase reduces your risk significantly.</p>
            </details>
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">Does SafeOrStolen check if items are stolen AND if listings are scams?</summary>
              <p className="text-sm text-muted-foreground mt-2">Yes. SafeOrStolen is the only platform that does both. The stolen item check verifies IMEI, VIN, and serial numbers against 100+ databases. The AI scam checker analyzes the listing itself for fraud signals. Use the <a href="/marketplace-url-checker" className="text-primary hover:underline">Marketplace URL Analyzer</a> for BOTH checks simultaneously.</p>
            </details>
          </div>
        </section>

        <section aria-label="Call to action" className="text-center bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Also Check if Items Are Stolen</h2>
          <p className="text-muted-foreground mb-4">The scam checker analyzes the listing. The stolen checker verifies the actual item. Use both for complete protection.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Check if an Item is Stolen →</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/marketplace-url-checker">Paste a Marketplace URL for Both Checks →</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScamCheckerPage;
