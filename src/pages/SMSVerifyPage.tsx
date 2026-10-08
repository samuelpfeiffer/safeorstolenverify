/**
 * Oct 7 2026: rewritten by hand for "text to check if stolen" / "sms imei check". No Search Console
 * data for this URL. SMS checking does not exist yet, so the page says that plainly and shows what to
 * use instead. Removed: the FAQ/HowTo/Service schema describing SMS checks as working, "results in
 * 3-5 seconds", "works on any phone, no data", "we don't store your phone number", the
 * "34 states" figure, the waitlist form (it showed "You're on the list" but saved nothing), the
 * shared trust/partner badge sections, emoji.
 */
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const FAQS = [
  {
    q: 'Can I text a serial number or IMEI to check if it is stolen?',
    a: "Not yet. SafeOrStolen's text-message check is coming soon but isn't available today, and there is no number to text. For now, open safeorstolen.com/verify in your phone's browser, or install the free web app from safeorstolen.com/app, and type the serial, IMEI or VIN there. The first 2 checks are free with an account.",
  },
  {
    q: 'When will SMS checks be available?',
    a: "There's no launch date yet. This page will change when it's live, and the number to text will be published here and nowhere else. Until then, treat any message or site claiming to be a SafeOrStolen text-check number as not from SafeOrStolen.",
  },
  {
    q: 'How do I check an item at a meetup with weak signal?',
    a: "Ask the seller to text you the serial, IMEI or VIN before you meet, and run the check at home where you have a good connection. At the meetup, read the number off the item yourself and make sure it matches. A check on the website or app needs a data connection; a text-based check doesn't exist yet.",
  },
];

const ALTERNATIVES: { title: string; body: string; to: string; cta: string }[] = [
  {
    title: 'Check in your browser',
    body: 'Works on any smartphone or computer with a data connection. Type the number and get a result in a few seconds.',
    to: '/verify',
    cta: 'Run a check',
  },
  {
    title: 'Install the web app',
    body: 'Add SafeOrStolen to your home screen from Safari or Chrome. Same checks, opens full screen. Free.',
    to: '/app',
    cta: 'How to install',
  },
  {
    title: 'Checking a lot of items?',
    body: 'Pawn shops and dealers can check many serial numbers at once from a computer.',
    to: '/bulk-check',
    cta: 'Bulk check',
  },
];

const SMSVerifyPage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <PageSEO
        title="Text to Check if Stolen: SMS Check Coming Soon"
        description="SafeOrStolen's text-message stolen check isn't live yet. Here's how to check a serial, IMEI or VIN from your phone today, free for your first 2 checks."
        keywords="text to check if stolen, sms imei check, text serial number stolen check, sms vin check, SafeOrStolen sms"
        canonical="/sms-verify"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-16">
        <section className="py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="inline-block bg-muted text-foreground text-sm font-semibold px-3 py-1 rounded-full mb-4">Coming soon, not available yet</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">Text to Check if Something Is Stolen</h1>
            <p className="text-sm text-muted-foreground mb-6">Updated October 7, 2026</p>
            <p className="text-lg text-foreground leading-relaxed">
              You can't check an item by text message yet. SafeOrStolen plans to let you text a serial number, IMEI or VIN and get
              the result back by SMS, but it isn't working today and there's no number to text. To check something now, use
              safeorstolen.com on your phone's browser or the free installable app. Your first 2 checks are free.
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-foreground">What to use instead, today</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ALTERNATIVES.map((a) => (
                <Card key={a.title}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-bold text-lg mb-2 text-foreground">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{a.body}</p>
                    <Button variant="outline" asChild>
                      <Link to={a.to}>{a.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Where to find the number to check</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg bg-background">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-3">Item</th>
                    <th className="p-3">Number</th>
                    <th className="p-3">Where it is</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">Phone</td><td className="p-3">IMEI</td><td className="p-3">Dial *#06#</td></tr>
                  <tr className="border-b"><td className="p-3">Car or motorcycle</td><td className="p-3">VIN</td><td className="p-3">Driver's side dashboard, door jamb sticker, title</td></tr>
                  <tr className="border-b"><td className="p-3">Gun</td><td className="p-3">Serial</td><td className="p-3">Frame or receiver</td></tr>
                  <tr className="border-b"><td className="p-3">Bike</td><td className="p-3">Frame serial</td><td className="p-3">Under the bottom bracket</td></tr>
                  <tr><td className="p-3">Laptop, tool, camera</td><td className="p-3">Serial</td><td className="p-3">Label or nameplate on the case</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Questions</h2>
            <div className="space-y-6">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/verify">Check an item now</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SMSVerifyPage;
