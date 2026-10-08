/**
 * Oct 7 2026: rewritten by hand for "how to check if something is stolen from your phone" /
 * "stolen verification app". No Search Console data for this URL. Written as the meetup-day guide
 * (what to check on the spot, item by item); install steps live on /app. Removed: invented
 * testimonials (named people and businesses), competitor claims, "only app"/"first app" claims,
 * "10x faster", "$200 billion" market figure, offline mode (checks need a connection), iOS/Android
 * store app claims, "14-day trial", boats/ATVs coverage claims, emoji.
 */
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { BlogFAQSchema } from '@/components/seo/BlogFAQSchema';
import { Link } from '@/lib/router-compat';
import { Smartphone, Shield } from 'lucide-react';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const FAQS = [
  {
    question: 'How can I check if something is stolen from my phone?',
    answer:
      'Get the identifying number off the item: the IMEI for a phone, the VIN for a car, the serial for a gun, bike, laptop or tool. Type it into SafeOrStolen (safeorstolen.com) in your phone browser or the installed app, and in a few seconds it shows whether the item is reported stolen in the records it searches. The first 2 checks are free.',
  },
  {
    question: 'Is there a free app to check if an item is stolen?',
    answer:
      "SafeOrStolen is free to install from safeorstolen.com/app and comes with 2 free checks on a free account, no credit card. It's an installable web app, not an App Store or Google Play download. After the free checks, a single check is $0.99 or unlimited checks are $10 a month.",
  },
  {
    question: 'What should I check at a meetup before buying a used phone?',
    answer:
      "Dial *#06# to see the IMEI and run it on SafeOrStolen. Then open Settings and confirm the seller's Apple ID or Google account is signed out, and watch them erase the phone. A phone that's still locked to someone else's account can be useless to you even if it isn't reported stolen.",
  },
  {
    question: "What does 'no report found' mean on a stolen check?",
    answer:
      "It means the number didn't match anything in the records that check searched, which are listed on the result. It doesn't prove the item is clean, because many thefts are only reported to local police. Weigh it with the other signs: a matching title or receipt, an untouched serial, and a seller who can unlock the device.",
  },
  {
    question: 'Can a stolen check app search police databases?',
    answer:
      "Not the FBI's NCIC system, which is only open to law enforcement. SafeOrStolen searches its own theft reports and public web results, plus police firearm theft and loss reports from 33 states and DC for guns, live Ohio records, and Arizona stolen-vehicle records for Arizona VINs and plates. Each result lists what was searched.",
  },
  {
    question: 'What if the check says the item is reported stolen?',
    answer:
      "Don't buy it and don't argue with the seller. Make an excuse, leave somewhere safe, and keep the listing, messages and the seller's profile. Call your local police's non-emergency line with the number you checked. Police can return the item to its owner, and you'd lose your money if you'd already paid.",
  },
];

const StolenVerificationAppGuide = () => {
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How to Check if Something Is Stolen From Your Phone',
    description:
      'What to check on your phone at a meetup before you buy a used phone, car, gun, bike, laptop or tool, which number to look up for each, and what a stolen check can and cannot tell you.',
    author: { '@type': 'Organization', name: 'SafeOrStolen' },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/logo.png' },
    },
    datePublished: '2025-01-17',
    dateModified: '2026-10-07',
  };

  return (
    <>
      <PageSEO
        title="How to Check if Something Is Stolen From Your Phone"
        description="At a meetup and want to know if the item is stolen? Which number to look up for phones, cars, guns, bikes and laptops, how to run the check on your phone, and what it shows."
        keywords="how to check if something is stolen from your phone, stolen verification app, app to check if item is stolen, check if item is stolen at meetup, stolen item checker app"
        canonical="/blog/stolen-verification-app-guide"
        modifiedTime="2026-10-07"
        publishedTime="2025-01-17"
        structuredData={blogPostSchema}
      />
      <BlogFAQSchema faqs={FAQS} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation
            items={[
              { name: 'Blog', href: '/blog' },
              { name: 'Check if something is stolen from your phone', href: '/blog/stolen-verification-app-guide' },
            ]}
          />
        </div>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How to Check if Something Is Stolen From Your Phone</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>Updated October 7, 2026</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
            <p className="text-xl text-foreground">
              Find the item's identifying number, the IMEI on a phone, the VIN on a car, the serial on a gun, bike, laptop or tool,
              and enter it on SafeOrStolen in your phone's browser or the installed app. In a few seconds you'll see whether it's
              reported stolen in the records searched, with each source named. Then do the in-person checks no database can do for
              you: make sure the number hasn't been tampered with and the seller can unlock or title the item.
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Which number to look up, item by item</h2>
            <p>
              The single most useful thing you can do is get the right number off the item itself, not off the listing. Sellers
              sometimes post photos of a different item.
            </p>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border rounded-lg">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-3">Item</th>
                    <th className="p-3">Number</th>
                    <th className="p-3">Where to find it on the spot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b align-top">
                    <td className="p-3 font-medium">Phone</td>
                    <td className="p-3">IMEI</td>
                    <td className="p-3">Dial *#06#. On iPhone also Settings &gt; General &gt; About. Compare it with the SIM tray if it has one.</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="p-3 font-medium">Car, truck, motorcycle</td>
                    <td className="p-3">VIN (17 characters)</td>
                    <td className="p-3">Through the windshield on the driver's side dashboard, and on the driver's door jamb sticker. Both should match the title.</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="p-3 font-medium">Gun</td>
                    <td className="p-3">Serial number</td>
                    <td className="p-3">Stamped on the frame or receiver, often above the trigger guard or on the side of the frame.</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="p-3 font-medium">Bike</td>
                    <td className="p-3">Frame serial</td>
                    <td className="p-3">Turn the bike over; it's usually stamped under the bottom bracket where the pedal arms meet.</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="p-3 font-medium">Laptop or tablet</td>
                    <td className="p-3">Serial number</td>
                    <td className="p-3">Label on the bottom case. On a Mac, Apple menu &gt; About This Mac. On Windows, the label or the system information screen.</td>
                  </tr>
                  <tr className="align-top">
                    <td className="p-3 font-medium">Power tool</td>
                    <td className="p-3">Serial number</td>
                    <td className="p-3">Nameplate on the motor housing or handle. Batteries and chargers have their own.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Running the check on your phone</h2>
            <ol>
              <li>Open safeorstolen.com in your phone's browser, or tap the SafeOrStolen icon if you've installed the web app from <Link to="/app">safeorstolen.com/app</Link>.</li>
              <li>Sign in or create a free account. The first 2 checks are free and don't need a card.</li>
              <li>Type the number in the search box. Signed in, you can also scan a barcode, like the IMEI label on a phone box, with your camera.</li>
              <li>Read the result: reported stolen, possible match, or no report found in the records searched. The sources are listed underneath.</li>
              <li>The check is saved to your account with the date, so you can show later that you checked before buying.</li>
            </ol>
            <p>
              A check needs a phone signal. If the meetup spot has poor coverage, ask the seller to text the number ahead of time and
              run it before you leave home. If they won't share it, that tells you something.
            </p>

            <h2>What the check searches, and what it can't</h2>
            <Card className="not-prose p-6 my-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-foreground">
                    <Shield className="w-4 h-4 text-primary" /> Searched
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>SafeOrStolen's own theft reports, for every item</li>
                    <li>Public web results: listings and posts mentioning the number</li>
                    <li>Guns: 242,839 police theft and loss reports from 33 states and DC, plus live Ohio records</li>
                    <li>Bikes: a national stolen-bicycle registry</li>
                    <li>Arizona VINs and plates: Arizona law-enforcement stolen-vehicle records</li>
                    <li>Phones: make and model; carrier blacklist on a paid check</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-foreground">
                    <Smartphone className="w-4 h-4 text-primary" /> Not searched
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>NCIC or ATF eTrace</li>
                    <li>Activation Lock or Google account lock</li>
                    <li>DMV or MVD title records</li>
                    <li>Pawn, insurer or manufacturer databases</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    That's why the in-person checks below still matter.
                  </p>
                </div>
              </div>
            </Card>

            <h2>The in-person checks no app can do</h2>
            <ul>
              <li><strong>Phones:</strong> watch the seller sign out of their Apple ID (Settings &gt; their name &gt; Sign Out) or remove their Google account, then erase the phone. If they can't, walk away.</li>
              <li><strong>Cars:</strong> the name on the title should match the seller's ID, and the VIN on the title should match the dashboard and door jamb.</li>
              <li><strong>Guns:</strong> a ground, scratched or re-stamped serial is a hard stop. Possessing a gun with an obliterated serial is a federal crime under 18 U.S.C. § 922(k).</li>
              <li><strong>Bikes and tools:</strong> look for a scratched-off serial, a fresh sticker over the nameplate, or engraved initials that don't match the seller.</li>
              <li><strong>Any item:</strong> a price far under the going rate, a rush to close, cash only, and no receipt or box are the usual warning signs together.</li>
            </ul>

            <h2>Questions people ask</h2>
            {FAQS.map((f) => (
              <div key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}

            <div className="not-prose flex flex-col sm:flex-row gap-4 my-10">
              <Button asChild size="lg" className="flex-1">
                <Link to="/verify">Run a check</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1">
                <Link to="/app">Install the free app</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
      <RelatedPagesSection currentPage="/blog/stolen-verification-app-guide" currentCategory="blog" maxLinks={5} />
    </>
  );
};

export default StolenVerificationAppGuide;
