/**
 * Oct 7 2026: rewritten by hand for "facebook marketplace scam checker" (paste a listing link).
 * No Search Console data for this page yet. The copy now describes what the tool really does:
 * it reads the public listing, pulls out any IMEI/VIN/serial written in it (each with a Verify
 * button that runs a normal check), lists AI-written risk notes and adds the rule-based scam
 * score. Removed: a competitor comparison table with made-up figures, a named scraping vendor,
 * unsourced user and fraud-loss statistics, "only we can do this" claims and the "34 states" line.
 */
import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ArrowRight, AlertTriangle, Link2, ListChecks, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MarketplaceUrlAnalyzer } from '@/components/search/MarketplaceUrlAnalyzer';
import { useNavigate, Link } from '@/lib/router-compat';

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'How do I check if a Facebook Marketplace listing is a scam?',
    answer:
      "Open the listing, copy the link from the address bar or the Share button, and paste it into SafeOrStolen's listing checker (safeorstolen.com/marketplace-url-checker). It reads the listing, lists the warning signs it finds and gives a scam risk score from 0 to 100. Then do the human part: look at the seller's profile age, ask for the serial number or IMEI, and never pay a deposit before you've seen the item.",
  },
  {
    question: 'Can a listing link tell me if the item is stolen?',
    answer:
      "Only if the seller wrote the serial number, IMEI or VIN in the listing. When the checker finds one, it shows a Verify button that runs a normal SafeOrStolen stolen check on that number. Most listings don't include it, so ask the seller for the number and enter it on the verify page yourself. A listing link with no number can't be matched to a theft report.",
  },
  {
    question: 'Is the marketplace listing checker free?',
    answer:
      'Reading a listing and getting the scam score is free and needs no account. Running a stolen check on a number it finds is a regular SafeOrStolen check: 2 free checks with a free account and no credit card, then $0.99 for a single check or $10 a month for unlimited checks.',
  },
  {
    question: 'Which marketplaces does it work with?',
    answer:
      "Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari and Poshmark. Paste the listing's own link, not a search results page. Some listings, especially on Facebook, only show full details to people who are logged in. If the checker can't read the page or comes back with empty details, copy the title, price and description into the scam checker instead.",
  },
  {
    question: 'What is the difference between this and the SafeOrStolen scam checker?',
    answer:
      "This page starts from a link and reads the listing for you, then looks for serial numbers you can check for theft. The scam checker at safeorstolen.com/scam-checker starts from text you paste in, works on any site or a screenshot you've retyped, and runs entirely in your browser. Use the scam checker when a listing is behind a login.",
  },
  {
    question: 'Does a low scam score mean the listing is safe?',
    answer:
      "No. A low score means the listing text didn't trip the warning rules. Careful scammers write clean listings, and a stolen item can be listed honestly by someone who doesn't care where it came from. Treat the score as a reason to look harder, not a green light, and still match the serial number on the item in person.",
  },
  {
    question: 'What should I do if the score is high?',
    answer:
      "Don't send money, and don't move the conversation to text, WhatsApp or email. Report the listing to the marketplace from the listing page. If a number in the listing comes back reported stolen, keep the link and screenshots and give them to your local police on their non-emergency line rather than confronting the seller.",
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to check a Facebook Marketplace listing for scams and stolen items',
  dateModified: '2026-10-07',
  step: [
    { '@type': 'HowToStep', name: 'Copy the listing link', text: 'Open the listing and copy its link from the address bar or the Share button.' },
    { '@type': 'HowToStep', name: 'Paste it into the checker', text: 'Paste the link into the box on safeorstolen.com/marketplace-url-checker and press Analyze.' },
    { '@type': 'HowToStep', name: 'Read the warnings and score', text: 'Read the risk factors and the 0 to 100 scam risk score.' },
    { '@type': 'HowToStep', name: 'Check any serial number', text: 'If the checker found an IMEI, VIN or serial number, press Verify to run a stolen check on it. If not, ask the seller for the number.' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SafeOrStolen marketplace listing checker',
  url: 'https://safeorstolen.com/marketplace-url-checker',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description:
    'Paste a Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari or Poshmark listing link to get scam warning signs, a 0 to 100 scam risk score, and any serial number in the listing to check for theft.',
  dateModified: '2026-10-07',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const RESULT_ROWS: [string, string][] = [
  ['Listing details', 'The title, price and seller name as they appear on the listing.'],
  ['Identifiers found', 'Any IMEI, VIN or serial number written in the listing. Each has a Verify button that runs a SafeOrStolen stolen check on it.'],
  ['No identifiers found', "The listing doesn't show a number. Ask the seller for it before you agree to meet."],
  ['Risk factors', 'Short notes from an AI model that read the listing, such as a price well below similar items or a story that does not add up.'],
  ['Scam risk score', 'A number from 0 to 100 with a level of Low, Medium, High or Critical, built from fixed rules about payment, urgency and seller wording.'],
];

const SCORE_SIGNALS = [
  'Gift cards, wire transfers, crypto, or Zelle and Venmo "friends and family" in the text',
  '"Cash only", "no returns", "sold as is" or "no test"',
  '"Must sell today", "moving" or "need gone ASAP"',
  '"Selling for a friend", "my ex\'s" or "not the original owner"',
  '"Call only", "WhatsApp only" or an email address in the listing',
  '"No receipt" or "no box"',
  'A very short description, lots of capital letters or exclamation marks',
  'A price far below what that kind of item usually sells for',
];

const MarketplaceURLChecker: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Facebook Marketplace Scam Checker: Paste a Listing Link | SafeOrStolen"
        description="Paste a Facebook Marketplace, eBay, Craigslist or OfferUp link to see scam warning signs, a 0–100 risk score, and any serial number you can check for theft."
        keywords="facebook marketplace scam checker, marketplace listing checker, check facebook marketplace listing, is this facebook marketplace listing a scam, check marketplace listing stolen, paste listing link scam check, ebay listing checker, craigslist scam checker, offerup scam checker"
        canonical="/marketplace-url-checker"
        structuredData={[serviceSchema, howToSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background pt-16">
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Facebook Marketplace Scam Checker
                <span className="block text-primary mt-2 text-2xl md:text-3xl">Paste a listing link</span>
              </h1>
              <p className="text-lg text-muted-foreground speakable-summary">
                Copy the link to a Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari or Poshmark listing and paste it
                below. SafeOrStolen reads the listing, lists the warning signs it finds, gives it a scam risk score from 0 to
                100, and pulls out any IMEI, VIN or serial number the seller wrote in it so you can check whether the item is
                reported stolen. Reading a listing is free and needs no account.
              </p>
              <p className="text-xs text-muted-foreground mt-3">Updated October 7, 2026</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-card/80 backdrop-blur border-2 border-border">
                <CardContent className="p-6 md:p-8">
                  <MarketplaceUrlAnalyzer onIdentifierFound={(id) => navigate(`/verify?q=${encodeURIComponent(id)}`)} />
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Listing behind a login, or a seller who sent the details by message? Paste the text into the{' '}
                <Link to="/scam-checker" className="text-primary hover:underline">scam checker</Link> instead.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 border-t border-border/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">What you see after you paste a link</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 font-semibold">On the screen</th>
                    <th className="p-3 font-semibold">What it tells you</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULT_ROWS.map(([a, b]) => (
                    <tr key={a} className="border-b border-border/50 align-top">
                      <td className="p-3 font-medium whitespace-nowrap">{a}</td>
                      <td className="p-3 text-muted-foreground">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <ListChecks className="w-7 h-7 text-primary mb-3" />
                <h2 className="text-xl font-bold mb-3">What raises the scam score</h2>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {SCORE_SIGNALS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <AlertTriangle className="w-7 h-7 text-amber-500 mb-3" />
                <h2 className="text-xl font-bold mb-3">What it can't do</h2>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>It reads the listing's text, not its photos. The score adds a missing-photos warning to every pasted link for that reason, so judge the pictures yourself.</li>
                  <li>It can only check for theft when the listing shows a serial number, IMEI or VIN. Most don't.</li>
                  <li>It can't see the seller's profile age, ratings or other listings. Open the profile and look.</li>
                  <li>Some Facebook listings only load for logged-in users, so the checker may get little or nothing back.</li>
                  <li>A low score is not proof the listing is honest or the item is clean.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Before you meet the seller</h2>
            <ol className="space-y-4 text-muted-foreground">
              <li><strong className="text-foreground">1. Ask for the number in the marketplace chat.</strong> The IMEI for a phone (dial *#06#), the VIN for a car, the frame serial for a bike, the serial on the label for a laptop, console or tool. Keeping the request in the app's messages gives you a record.</li>
              <li><strong className="text-foreground">2. Check it.</strong> Enter it on the <Link to="/verify" className="text-primary hover:underline">verify page</Link>, or press Verify if the checker already found it. You'll see "reported stolen", "possible match" or "no report found in the records searched", with every source listed.</li>
              <li><strong className="text-foreground">3. Match it in person.</strong> At the meetup, read the number off the item itself and compare. A seller who brings a different unit, or whose number is scratched off, has answered your question.</li>
              <li><strong className="text-foreground">4. Pay last.</strong> No deposits to "hold" an item, no gift cards, no friends-and-family payments before you've seen and tested it.</li>
            </ol>
            <p className="text-muted-foreground mt-6">
              For the full Facebook walk-through, see{' '}
              <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">how to check a Facebook Marketplace item for theft</Link>
              {' '}and{' '}
              <Link to="/how-to-tell-if-marketplace-item-is-stolen" className="text-primary hover:underline">how to tell if a marketplace item is stolen</Link>.
            </p>
          </div>
        </section>

        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions people ask</h2>
            <div className="space-y-5">
              {FAQS.map((item) => (
                <Card key={item.question} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-muted-foreground text-sm">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Check the item by its number</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { to: '/imei-checker', label: 'Phone IMEI check', desc: 'Phones and tablets' },
                { to: '/vin-checker', label: 'VIN check', desc: 'Cars, trucks and motorcycles' },
                { to: '/check-bike', label: 'Bike serial check', desc: 'Bicycles and e-bikes' },
                { to: '/serial-number-checker', label: 'Serial number check', desc: 'Laptops, consoles, tools' },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block">
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm mb-1 flex items-center gap-1"><Search className="w-3.5 h-3.5" /> {l.label}</h3>
                      <p className="text-xs text-muted-foreground">{l.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button size="lg" className="font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Link2 className="mr-2 w-5 h-5" /> Paste a listing link
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketplaceURLChecker;
