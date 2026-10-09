/** Oct 8 2026: audited by hand for "free carfax alternative". Removed NICB claim, AI-as-source, invented Carfax price, "3-second", "legal protection", "peace of mind". */
import { Link, useLocation } from '@/lib/router-compat';
import { Shield, Check, X, ArrowRight, Clock, Award, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const FreeCarfaxAlternativePage = () => {
  const location = useLocation();

  const faqs = [
    {
      q: "Is there a free alternative to Carfax?",
      a: "For the theft question, yes. SafeOrStolen (safeorstolen.com/carfax-alternative-free) gives you 2 free checks with a free account. A VIN check decodes the year, make and model, lists open safety recalls, and searches SafeOrStolen theft reports and public web results, plus Arizona law-enforcement records for Arizona VINs. It is not a full history report: it doesn't show accidents, service or ownership history.",
    },
    {
      q: "What's the difference between SafeOrStolen and Carfax?",
      a: "Carfax sells vehicle history reports covering things like accidents, service records and ownership. SafeOrStolen checks whether a vehicle, phone, gun, bike or other item has been reported stolen. They answer different questions, so many buyers run a SafeOrStolen theft check first and buy a history report once they've settled on one car.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Free Carfax Alternative for Stolen Car Checks",
      "description": "Use SafeOrStolen's free checks to see if a car has been reported stolen, then decide whether you need a paid history report.",
      "url": "https://safeorstolen.com/carfax-alternative-free",
      "dateModified": "2026-10-07"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <>
      <PageSEO
        title="Free Carfax Alternative for Stolen Car Checks | SafeOrStolen"
        description="Looking for a free Carfax alternative? Check a VIN for theft reports and open recalls with 2 free SafeOrStolen checks, then decide if you need a history report."
        keywords="carfax alternative, free carfax, carfax alternative free, free vin check, stolen car check free"
        canonical={location.pathname}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              Free Carfax alternative for stolen car checks
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              If your question is "has this car been reported stolen?", you don't need a paid history report to start. SafeOrStolen gives you <strong>2 free checks</strong> with a free account: type the VIN and see theft reports, the decoded year, make and model, and open recalls in a few seconds.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Check a VIN free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Important Distinction */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Two different questions</h2>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-bold text-lg mb-2">SafeOrStolen: is it reported stolen?</h3>
                  <p className="text-muted-foreground">Searches SafeOrStolen's own theft reports and public web results that mention the VIN, plus Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates. Also decodes the VIN and lists open recalls.</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Carfax: what's its history?</h3>
                  <p className="text-muted-foreground">A paid vehicle <strong>history</strong> report: accidents, service records, ownership and odometer readings. See Carfax's own site for current prices.</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                <strong>A sensible order:</strong> run the free theft check on every car you're considering, then buy a history report for the one you're serious about.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What each one covers</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">SafeOrStolen</th>
                    <th className="p-4 text-center">Carfax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Price</td>
                    <td className="p-4 text-center font-bold text-primary">2 free checks, then $0.99 or $10/month</td>
                    <td className="p-4 text-center">Paid reports</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Theft reports and public web mentions</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Not its focus</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Open safety recalls</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">See Carfax</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Accident history</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Service records</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Checks phones, guns, bikes too</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">When to use each</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-xl mb-4">Use SafeOrStolen when:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> You want to know if the car has been reported stolen</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> You're buying from Facebook Marketplace or Craigslist</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> You're meeting a private seller</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> You want a quick check before going to see the car</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> You're screening several cars ($10 a month covers unlimited checks)</li>
                </ul>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-muted">
                <h3 className="font-bold text-xl mb-4">Consider Carfax when:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You want accident history</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You want service and maintenance records</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You want ownership history</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You want to compare odometer readings over time</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You've narrowed it down to one car</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Theft Check First */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why the theft check comes first</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Don't pay for a report on a stolen car</h3>
                  <p className="text-sm text-muted-foreground">Rule out theft reports before you spend money on history.</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">A few seconds per car</h3>
                  <p className="text-sm text-muted-foreground">Type the VIN and read the result before you drive across town.</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Stolen cars get taken back</h3>
                  <p className="text-sm text-muted-foreground">If police recover a stolen car from you, you usually lose what you paid.</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">A dated record</h3>
                  <p className="text-sm text-muted-foreground">Each check is saved to your account with the date, and a $1.99 certificate gives you a shareable record.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-lg mb-2">{f.q}</h3>
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start with a free stolen check</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check the VIN for theft reports before you pay for anything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Free stolen check <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/vin-checker">
                <Button size="lg" variant="outline" className="gap-2">
                  VIN checker
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeCarfaxAlternativePage;
