/**
 * Oct 8 2026: rewritten by hand for "best free imei checker". Removed invented star ratings,
 * competitor prices and features we could not confirm, a "50M database" claim, "free blacklist
 * check" (it is paid), native mobile-app claims, "AI analysis" as a source, and supplier names.
 */
import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

type CheckerType = {
  name: string;
  description: string;
  freePart: string;
  blacklist: string;
  goodFor: string[];
  limits: string[];
  cta?: string;
  ctaText?: string;
};

const CHECKER_TYPES: CheckerType[] = [
  {
    name: 'SafeOrStolen',
    description:
      'Shows the make and model from the IMEI, then searches SafeOrStolen theft reports filed by owners and public web listings that mention the IMEI.',
    freePart: '2 free checks with a free account, no credit card',
    blacklist: 'Paid add-on; monthly members ($10/mo) get up to 20 blacklist checks a month',
    goodFor: [
      'Seeing whether an owner has reported the phone stolen on SafeOrStolen',
      'Finding old listings or posts that mention the same IMEI',
      'Confirming the IMEI matches the model the seller says it is',
      'Checking cars, bikes, guns and serial-numbered items with the same account',
      'A dated record of every check, saved to your account',
    ],
    limits: [
      'Only 2 free checks; after that $0.99 a check or $10 a month',
      'Does not show Apple or Google account lock status',
    ],
    cta: '/verify',
    ctaText: 'Check an IMEI',
  },
  {
    name: 'Free IMEI spec lookup sites',
    description:
      'Many sites decode an IMEI into the brand, model and sometimes the original specs for free, and charge separately for anything more.',
    freePart: 'Model and specs',
    blacklist: 'Usually sold as a separate paid report',
    goodFor: ['Confirming the model and storage size match the listing'],
    limits: [
      'A model lookup says nothing about whether the phone is stolen',
      'Paid add-ons and what they search vary a lot from site to site',
    ],
  },
  {
    name: 'Your carrier',
    description:
      'Carriers can tell you whether a phone is blocked on their own network, usually when you try to activate it or by asking customer service with the IMEI.',
    freePart: 'Free if you ask',
    blacklist: 'Their own network only',
    goodFor: ['Finding out if the phone will activate on the carrier you plan to use'],
    limits: [
      'You usually need the phone in hand or a customer account',
      "Doesn't tell you about other carriers or theft reports outside the blacklist",
    ],
  },
  {
    name: 'Marketplace device checks',
    description:
      'Some phone marketplaces, such as Swappa, check the IMEI or ESN of phones listed on their own site before the listing goes live.',
    freePart: 'Free for listings on that marketplace',
    blacklist: 'Checked for their own listings',
    goodFor: ['Buying a phone listed on that marketplace'],
    limits: ["Can't be used for a phone from Facebook Marketplace, Craigslist or an in-person sale"],
  },
];

const FAQS = [
  {
    q: 'What is the best free IMEI checker?',
    a: "It depends on what you need to know. A free spec lookup confirms the model. Your carrier can tell you if the phone is blocked on its network. SafeOrStolen (safeorstolen.com) gives you 2 free checks that show the make and model and search owner theft reports and public web listings for the IMEI, with a paid blacklist check if you want one.",
  },
  {
    q: 'Are free IMEI checkers reliable?',
    a: "A free check is only as good as the records it searches, and most free checks only decode the model. A clean model lookup doesn't mean the phone isn't stolen. Before you buy, make sure the check you use says what it searched, and also watch the seller sign out of Apple ID or Google and reset the phone.",
  },
  {
    q: "What's the difference between a blacklist check and a stolen check?",
    a: "A blacklist check asks whether carriers have blocked the IMEI, usually because it was reported lost or stolen or has unpaid bills. A stolen check looks for theft reports. SafeOrStolen searches its own theft reports and public web listings on every check, and offers the carrier blacklist check as a paid add-on.",
  },
  {
    q: 'How do I find my IMEI number?',
    a: 'Dial *#06# on any phone and the IMEI appears on screen. On an iPhone you can also find it in Settings > General > About. On Android, look in Settings > About phone. It is also printed on the original box and, on many iPhones, on the SIM tray.',
  },
  {
    q: 'Why do most sites charge for a blacklist check?',
    a: "Carrier blacklist data comes from paid sources, so most sites charge for each lookup. On SafeOrStolen, a blacklist check is a paid add-on; the $10 monthly plan includes up to 20 blacklist checks a month along with unlimited regular checks.",
  },
];

const BestFreeIMEICheckers2025 = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <PageSEO
        title="Best Free IMEI Checker: What Each Type Actually Checks"
        description="Compare free IMEI checkers by what they search: model lookups, carrier blacklist checks, marketplace checks and SafeOrStolen theft reports and web listings."
        keywords="best free imei checker, imei checker free, free blacklist check, stolen phone checker, imei lookup free"
        canonical="/comparisons/best-free-imei-checkers-2025"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background">
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Updated October 2026</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Best Free IMEI Checker: What Each One Checks</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Most free IMEI checkers only tell you the phone's model. That's useful, but it doesn't tell you whether
                the phone is stolen. Here's what each kind of checker searches, so you can pick the one that answers
                your question.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/verify">Try SafeOrStolen free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#types">Compare checker types</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">What a good IMEI checker tells you</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">What it searched</h3>
                    <p className="text-sm text-muted-foreground">
                      A result is only useful if you know which records were checked. Look for a list of sources.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">The model</h3>
                    <p className="text-sm text-muted-foreground">
                      If the IMEI decodes to a different model than the phone in your hand, stop there.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">Theft reports</h3>
                    <p className="text-sm text-muted-foreground">
                      Whether anyone has reported this IMEI stolen, and where.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">Blacklist status</h3>
                    <p className="text-sm text-muted-foreground">
                      Whether carriers have blocked the IMEI. This is almost always a paid lookup.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="types" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Free IMEI checkers compared</h2>
              <div className="space-y-6">
                {CHECKER_TYPES.map((checker, index) => (
                  <Card key={checker.name} className={`overflow-hidden ${index === 0 ? 'border-primary border-2' : ''}`}>
                    <CardHeader className="bg-muted/50">
                      <CardTitle>{checker.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{checker.description}</p>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="grid grid-cols-2 gap-2 text-sm content-start">
                          <div className="text-muted-foreground">Free:</div>
                          <div className="font-medium">{checker.freePart}</div>
                          <div className="text-muted-foreground">Blacklist check:</div>
                          <div className="font-medium">{checker.blacklist}</div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2 text-sm">Good for</h4>
                            <ul className="space-y-1">
                              {checker.goodFor.map((pro) => (
                                <li key={pro} className="flex items-start gap-2 text-sm">
                                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-600 mb-2 text-sm">Limits</h4>
                            <ul className="space-y-1">
                              {checker.limits.map((con) => (
                                <li key={con} className="flex items-start gap-2 text-sm">
                                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {checker.cta && (
                        <div className="mt-6 pt-4 border-t border-border">
                          <Button asChild className="font-semibold">
                            <Link to={checker.cta}>{checker.ctaText}</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to check an IMEI?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              SafeOrStolen gives you 2 free checks with no credit card. Enter the IMEI and you'll see the model, any
              theft reports, and web listings that mention it, with every source listed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/verify">Check an IMEI free</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/imei-checker">Learn about IMEI checks</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((f) => (
                  <Card key={f.q}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{f.q}</h3>
                      <p className="text-muted-foreground">{f.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RelatedPagesSection
          currentPage="/comparisons/best-free-imei-checkers-2025"
          currentCategory="comparison"
          maxLinks={6}
        />
      </div>
    </>
  );
};

export default BestFreeIMEICheckers2025;
