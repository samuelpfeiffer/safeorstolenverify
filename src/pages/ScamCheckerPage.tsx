/**
 * Oct 7 2026: rewritten by hand for "scam checker" / "is this listing a scam". No Search Console
 * data for this page yet. The tool is a fixed set of rules that runs in the visitor's browser, so
 * the copy no longer calls it AI. Removed: "15+ fraud signals" and other counts, an FTC loss
 * figure, a "50-70% below market" statistic and an outbound FTC link.
 */
import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { PageSEO } from '@/components/seo/PageSEO';
import { ScamAnalysisResultCard } from '@/components/scam/ScamAnalysisResult';
import { analyzeListingForScams, type ListingData, type ScamAnalysisResult } from '@/lib/scamAnalyzer';
import { Link } from '@/lib/router-compat';

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'How can I tell if a listing is a scam?',
    answer:
      "Look at how the seller wants to be paid and how fast they want it. Gift cards, wire transfers, crypto, or Zelle and Venmo friends-and-family payments before you've seen the item are the clearest signs. So are \"must sell today\" stories, a seller who wants to leave the app for WhatsApp or text, and a price far below similar items. SafeOrStolen's free scam checker (safeorstolen.com/scam-checker) flags these in the text you paste.",
  },
  {
    question: 'How does the SafeOrStolen scam checker work?',
    answer:
      'You paste the listing title and description and add the price, platform, item type and number of photos. A fixed set of rules then looks for payment, urgency, ownership and wording warning signs, compares the price with a low-price line for that kind of item, and adds points for each warning. You get a score from 0 to 100, a risk level and the list of signals it found.',
  },
  {
    question: 'Is the scam checker free?',
    answer:
      "Yes. It's free, has no limit, and you don't need an account. It runs in your browser, so the text you paste isn't sent to SafeOrStolen. Checking whether the item itself is reported stolen is separate: that uses the serial number, IMEI or VIN, and comes with 2 free checks on a free account.",
  },
  {
    question: 'What do the scam risk levels mean?',
    answer:
      'Low is a score of 0 to 15, Medium is 16 to 40, High is 41 to 70 and Critical is 71 to 100. Strong warnings, such as a gift card or crypto payment request or a seller who says "no paperwork", add 25 points each. Medium warnings like "cash only" or "selling for a friend" add 10. Minor ones, like a very short description, add 3.',
  },
  {
    question: 'Can the scam checker tell me if an item is stolen?',
    answer:
      "No. It reads the listing, not the item. Some of the same signs point to stolen goods, like \"selling for my friend\" or no receipt, but only the serial number, IMEI or VIN can tie an item to a theft report. Ask the seller for the number and check it on SafeOrStolen's verify page before you meet.",
  },
  {
    question: 'What should I do if I think a listing is a scam?',
    answer:
      "Stop replying and don't send money or codes sent to your phone. Report the listing from the marketplace's own report button. If you already paid, call your bank or card company the same day and ask about a dispute, then report it to the FTC and your local police. Keep screenshots of the listing and the whole chat.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SafeOrStolen scam checker',
  url: 'https://safeorstolen.com/scam-checker',
  description:
    'Free scam checker for online listings. Paste a listing title and description to get a 0 to 100 scam risk score and the warning signs found. Runs in the browser.',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  dateModified: '2026-10-07',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const SIGNALS: [string, string, string][] = [
  ['Gift cards, wire transfer, Western Union, crypto, bitcoin', 'Strong', 'These payments are hard or impossible to get back.'],
  ['Zelle or Venmo with "friends and family"', 'Strong', 'No purchase protection on those payments.'],
  ['"No paperwork", "off the books", "no cops"', 'Strong', 'A seller avoiding any record of the sale.'],
  ['A price below the low-price line for the item type', 'Strong or medium', 'Priced to sell before anyone asks questions.'],
  ['"Must sell today", "moving", "need gone ASAP"', 'Medium', 'Pressure so you skip the checks.'],
  ['"Cash only" or "Cash App"', 'Medium', 'No way to dispute the payment later.'],
  ['"No test", "as is", "no refunds"', 'Medium', "You can't confirm it works before paying."],
  ['"Selling for a friend", "my ex\'s", "not the original owner"', 'Medium', "The seller can't vouch for where it came from."],
  ['"Call only", "WhatsApp only", "Telegram", or an email address', 'Medium', 'Moves the conversation off the marketplace.'],
  ['Meeting at a parking lot, gas station or Walmart', 'Medium', 'Suggests a police station lobby or lot instead.'],
  ['Only one photo, or none', 'Medium or strong', 'You should see the actual item from several sides.'],
  ['"No receipt", "no box", very short text, lots of capitals or exclamation marks', 'Minor', 'Not proof of anything, but worth a question.'],
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
        title="Scam Checker: Is This Listing a Scam? Free Check | SafeOrStolen"
        description="Free scam checker for online listings. Paste the title and description from Facebook Marketplace, Craigslist, OfferUp or any site and see the warning signs and a 0–100 risk score."
        keywords="scam checker, is this listing a scam, listing scam checker, online scam checker, facebook marketplace scam check, craigslist scam checker, offerup scam check, free scam checker, check if a seller is a scammer"
        canonical="/scam-checker"
        structuredData={[webAppSchema, faqSchema]}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Is This Listing a Scam? Free Scam Checker</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto speakable-summary">
            Paste the title and description of any for-sale listing, add the price, and press Analyze. The checker looks for
            the warning signs that show up in marketplace scams, such as gift card or crypto payment requests, "must sell
            today" pressure, "selling for a friend" and prices far below normal, and gives the listing a score from 0 to
            100. It's free, needs no account, and runs in your browser.
          </p>
          <p className="text-sm text-muted-foreground">
            Have the listing link instead?{' '}
            <Link to="/marketplace-url-checker" className="text-primary hover:underline font-medium">
              Paste it into the Facebook Marketplace scam checker
            </Link>
            , which reads the listing for you and finds any serial number in it.
          </p>
          <p className="text-xs text-muted-foreground">Updated October 7, 2026</p>
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

        <section aria-label="How to use the scam checker">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to use it</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Open the listing and copy its title and full description. If the seller sent details by message, paste those in too: the chat is often where the payment request shows up.</li>
            <li>Pick the platform and item type, and type the price and the number of photos. The item type sets the low-price line, so a $60 phone gets flagged and a $60 bike lock doesn't.</li>
            <li>Press Analyze for Scams. You'll see the score, the risk level and each signal it found, marked as info, warning or danger.</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Tip: leaving "Number of Photos" blank counts as five photos. Type 0 or 1 if that's all the listing has.
          </p>
        </section>

        <section aria-label="What the scam checker looks for">
          <h2 className="text-2xl font-bold text-foreground mb-4">What the scam checker looks for</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-3 font-semibold">Words or details in the listing</th>
                  <th className="p-3 font-semibold">Weight</th>
                  <th className="p-3 font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {SIGNALS.map(([a, b, c]) => (
                  <tr key={a} className="border-b border-border/50 align-top">
                    <td className="p-3">{a}</td>
                    <td className="p-3 whitespace-nowrap">{b}</td>
                    <td className="p-3 text-muted-foreground">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            It also adds a note for Craigslist (no buyer protection), for Facebook listings that offer shipping, and for very
            cheap electronics on OfferUp.
          </p>
        </section>

        <section aria-label="Limits of the scam checker">
          <h2 className="text-2xl font-bold text-foreground mb-4">What it can't tell you</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>It reads words, not people. A scammer who writes a calm, detailed listing and asks for a gift card only in the chat will score low unless you paste the chat in.</li>
            <li>It can't look at photos, check whether they were copied from another listing, or see the seller's profile.</li>
            <li>Its price check is a simple low-price line per item type, not a market value for your exact model.</li>
            <li>It can't tell you whether the item is stolen. For that, check the serial number, IMEI or VIN on the <Link to="/verify" className="text-primary hover:underline">verify page</Link>.</li>
          </ul>
        </section>

        <section aria-label="Frequently asked questions about listing scams">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions people ask</h2>
          <div className="space-y-2">
            {FAQS.map((f) => (
              <details key={f.question} className="border border-border rounded-lg p-4 bg-card">
                <summary className="font-medium text-foreground cursor-pointer">{f.question}</summary>
                <p className="text-sm text-muted-foreground mt-2">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section aria-label="Check the item too" className="text-center bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Then check the item itself</h2>
          <p className="text-muted-foreground mb-4">
            A clean-looking listing can still be selling a stolen phone or bike. Ask for the serial number, IMEI or VIN and
            check it. SafeOrStolen searches its theft reports and public web results and lists every source it searched.
            The first 2 checks are free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Check a serial number, IMEI or VIN</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-to-tell-if-marketplace-item-is-stolen">How to tell if an item is stolen</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScamCheckerPage;
