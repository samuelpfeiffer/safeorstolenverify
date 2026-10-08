import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "how to prove an item is not stolen" when selling it. Removed:
 * a "$10" plan card (the plan is $14.99), "Verified Safe" badges and badge images, QR codes, PDF
 * certificates, seller profile pages, a "Trust Score (0-100)", "reports valid for 90 days",
 * priority support, bulk upload for "Verified Seller and Premium members", a list of 12 named
 * marketplaces the badge "works on", "3 sec", an "AI analysis" source, "34 states" (it's 33 plus
 * DC), a claim that our report "provides the evidence law enforcement needs", emoji, and a
 * checkout button wired to an unverified price.
 */

const UPDATED = 'October 7, 2026';

const CERT_ROWS: string[][] = [
  ['Check date', 'Shown in UTC and in the viewer\'s local time'],
  ['Category', 'Phone, vehicle, plate, serial, gun or bike'],
  ['Result', 'What the check returned on that date'],
  ['Identifier', 'Only the last four characters, so the full number isn\'t posted publicly'],
  ['Sources searched', 'Every source the check ran against'],
  ['Record ID and SHA-256 hash', 'So the record can\'t be quietly changed after the fact'],
  ['Disclaimer', 'That the record shows a search was run, not ownership or a guarantee'],
];

const FAQS = [
  {
    question: 'How do I prove an item I\'m selling is not stolen?',
    answer:
      "You can't prove it outright, but you can show what you did. Keep your receipt, run the serial number, IMEI or VIN on SafeOrStolen (safeorstolen.com/for-sellers), and add a $1.99 verification certificate. Post its link in your listing. Buyers see the check date, the result, the sources searched and the last four characters of the number, and can check the number themselves.",
  },
  {
    question: 'What does a buyer see when they open my certificate link?',
    answer:
      'A page titled Verification Record with the record ID, the check date in UTC and local time, the category, the result, the last four characters of the identifier, the sources searched and a SHA-256 record hash. It also shows a disclaimer that the record confirms a search was run, not ownership. Buyers don\'t need an account to open it.',
  },
  {
    question: 'How much does a verification certificate cost?',
    answer:
      'The check comes first: 2 free checks with a free account, then $3.99 per check or $14.99 a month for unlimited checks. The certificate is $1.99 on top, or free if you are on the monthly plan. You can add one up to 30 days after the check, and each check gets one certificate.',
  },
  {
    question: 'Does a clean check guarantee my item isn\'t stolen?',
    answer:
      'No. "No report found in the records searched" means nothing turned up in those sources on that date. Many thefts are never reported anywhere public, and SafeOrStolen does not search NCIC, DMV records or carrier records other than a paid blacklist check. The certificate shows you looked. Your receipt and the item\'s history show you own it.',
  },
  {
    question: 'What if my own item comes back reported stolen?',
    answer:
      "Don't sell it. If you bought it secondhand, keep your receipt and messages with the person who sold it to you, and call your local police non-emergency line. If it was stolen from you and later recovered, ask the police to close the report. A \"possible match\" means a source mentions a similar number, so open the result before you worry.",
  },
  {
    question: 'Should I post the full serial number or IMEI in my listing?',
    answer:
      "It's safer to post the certificate link, which shows only the last four characters, and give the full number to a serious buyer in a message so they can run their own check. Some scammers copy full IMEIs and serials from listings to make a stolen device look legitimate.",
  },
];

export default function ForSellers() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Verification certificate for sellers',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-sellers',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'Check an item before listing it and share a dated verification certificate link with buyers.',
      offers: [
        { '@type': 'Offer', price: '1.99', priceCurrency: 'USD', description: 'Verification certificate' },
        { '@type': 'Offer', price: '14.99', priceCurrency: 'USD', description: 'Unlimited checks per month, certificates included' },
      ],
      dateModified: '2026-10-07',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ];

  return (
    <>
      <PageSEO
        title="How to Prove an Item Isn't Stolen When Selling It | SafeOrStolen"
        description="Show buyers you checked an item before listing it: run the serial, IMEI or VIN, add a $1.99 dated verification certificate, and post its link. What buyers see and what it can't prove."
        keywords="how to prove an item is not stolen, prove item not stolen when selling, verification certificate for sellers, show buyer item is not stolen, seller stolen check"
        canonical="/for-sellers"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For sellers', url: '/for-sellers' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For people selling phones, bikes, tools, cars and more</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">How to Show Buyers an Item Isn't Stolen</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Run the item's serial number, IMEI or VIN on SafeOrStolen before you list it, then add a $1.99 verification
              certificate. The certificate is a dated record with its own link that shows the result, the sources searched
              and the last four characters of the number. Post that link in your listing, keep your receipt handy, and
              invite buyers to run the number themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/verify">Check your item</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/proof-of-purchase">About the certificate</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">2 free checks · No credit card · Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Step by step</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Find the number on the item: *#06# on a phone, the frame under the pedals on a bike, the nameplate on a tool, the VIN at the base of the windshield.</li>
              <li>Enter it at /verify. The result comes back in a few seconds and is saved to your account with the date.</li>
              <li>Under the result, click "Get my certificate" and pay $1.99 (free on the monthly plan). You have 30 days from the check to add it.</li>
              <li>Copy the certificate link and paste it into your listing description.</li>
              <li>When a buyer asks, send them the full number privately so they can check it too, and show your receipt at the meetup.</li>
            </ol>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What's on the certificate</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Field</th><th className="px-4 py-3 font-semibold">What it shows</th></tr>
                </thead>
                <tbody>
                  {CERT_ROWS.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              It doesn't show your name, address or the full number. You can delete a certificate from your account, and the
              link then says it was deleted by its holder.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Things buyers trust more than a badge</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>A photo of the serial plate or the IMEI screen next to today's date on a note.</li>
              <li>The original receipt or order email with the same serial number.</li>
              <li>On a phone, letting the buyer watch you sign out of your Apple ID or Google account and reset it.</li>
              <li>On a car, a title in your name that matches your ID and the VIN on the dash and door.</li>
              <li>Meeting somewhere public, like a police station's safe exchange spot if your town has one.</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from sellers</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.question} className="rounded-lg border border-border bg-background p-5">
                  <h3 className="font-semibold mb-2">{f.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Check before you list</h2>
            <p className="text-muted-foreground mb-6">
              Selling a lot of items? The $14.99 monthly plan covers unlimited checks and includes certificates, and the{' '}
              <Link to="/bulk-check" className="text-primary underline">bulk check</Link> runs up to 100 numbers at once. Cancel
              anytime; 30-day refund on the monthly plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><Link to="/verify">Check your item</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/pricing">See pricing</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
