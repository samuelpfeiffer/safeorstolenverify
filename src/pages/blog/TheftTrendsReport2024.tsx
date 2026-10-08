/**
 * Oct 7 2026: rewritten by hand for "most stolen items" / "what items are commonly stolen and
 * resold". No Search Console data for this URL. The old "2024 theft trends report" had no named
 * source for any figure, so every statistic was removed: dollar totals, recovery rates, theft counts
 * per category, the city theft-rate ranking, "record levels", "62% of gun thefts", "$15 billion",
 * "resold within 24 hours". Also removed: "API connections with eBay/Facebook", "law enforcement
 * coordination", "legal protection", "34 states", AI-processing claims. What's left is a short,
 * number-free guide to items commonly stolen and resold and how to check each one.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { BlogFAQSchema } from '@/components/seo/BlogFAQSchema';
import { blogImages } from '@/assets/blog';

const ITEMS: { item: string; why: string; number: string; check: string; link: string }[] = [
  {
    item: 'Phones and tablets',
    why: 'Small, valuable, easy to grab',
    number: 'IMEI: dial *#06#',
    check: 'Run the IMEI, then watch the seller sign out of their Apple ID or Google account and erase it',
    link: '/imei-checker',
  },
  {
    item: 'Cars, trucks and motorcycles',
    why: 'High value; parts sell too',
    number: 'VIN on dashboard and door jamb',
    check: 'Run the VIN, match it to the title, match the title name to the seller’s ID',
    link: '/vin-checker',
  },
  {
    item: 'Laptops',
    why: 'Taken from cars, bags and offices',
    number: 'Serial on the bottom case',
    check: 'Run the serial; make sure it boots to a fresh setup screen with no company or school login',
    link: '/serial-number-checker',
  },
  {
    item: 'Bikes and e-bikes',
    why: 'Quick to take, hard to trace without a serial',
    number: 'Frame serial under the bottom bracket',
    check: 'Run the serial (it’s also searched against a national stolen-bicycle registry)',
    link: '/check-bike',
  },
  {
    item: 'Power tools',
    why: 'Taken from job sites and trucks, sold in bulk',
    number: 'Nameplate on the motor housing',
    check: 'Run each tool, battery and charger; walk away from scratched nameplates',
    link: '/how-to-check-if-tools-stolen',
  },
  {
    item: 'Guns',
    why: 'Taken from cars and homes',
    number: 'Serial on the frame or receiver',
    check: 'Run the serial (searched against police firearm theft and loss reports from 33 states and DC, plus live Ohio records)',
    link: '/gun-serial-number-lookup',
  },
  {
    item: 'Game consoles, cameras and lenses',
    why: 'Popular, easy to resell online',
    number: 'Serial on the label or base',
    check: 'Run the serial; ask for the box, which usually carries the same serial',
    link: '/serial-number-checker',
  },
];

const FAQS = [
  {
    question: 'What are the most commonly stolen items that get resold?',
    answer:
      "Phones, tablets, laptops, cars and their parts, bikes and e-bikes, power tools, guns, game consoles, cameras and jewelry are the items that come up again and again in theft reports and resale listings. They share three traits: they're valuable, easy to carry, and easy to sell online or at a meetup without paperwork.",
  },
  {
    question: 'How can I tell if something for sale is stolen?',
    answer:
      "Get the serial number, IMEI or VIN off the item itself and check it on SafeOrStolen (safeorstolen.com), which searches theft reports and shows every source. Then look for the usual signs: a price far below the going rate, a scratched or covered serial, no receipt or box, a seller in a hurry, and a phone or laptop still locked to someone else's account.",
  },
  {
    question: 'Why are stolen items often sold without serial numbers?',
    answer:
      "Because the serial is what ties an item to a theft report. Thieves scratch, grind or cover the serial, or sell items like jewelry that don't have one. A missing or tampered serial on an item that should have one is one of the strongest warning signs. For guns, possessing one with an obliterated serial is a federal crime under 18 U.S.C. § 922(k).",
  },
  {
    question: 'Are there reliable statistics on the most stolen items?',
    answer:
      "Some exist for specific categories, such as the FBI's annual crime data for motor vehicle theft, but there's no single trustworthy count across all items, because many thefts are never reported. Be cautious with articles quoting exact national totals for things like phones or tools without naming where the number came from.",
  },
];

export default function TheftTrendsReport2024() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Most Stolen Items and How to Check Them Before You Buy',
    description:
      'The kinds of items most often stolen and resold, the number to look up on each, and how to check whether one is reported stolen before you buy it.',
    author: { '@type': 'Organization', name: 'SafeOrStolen' },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/logo.png' },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-10-07',
  };

  return (
    <>
      <PageSEO
        title="Most Stolen Items and How to Check Them Before You Buy"
        description="Phones, cars, laptops, bikes, tools and guns are stolen and resold most. The number to look up on each and how to check if one is reported stolen before you pay."
        keywords="most stolen items, commonly stolen items resold, what items are stolen most, how to tell if an item is stolen, theft trends"
        canonical="/blog/theft-trends-report-2024"
        modifiedTime="2026-10-07"
        publishedTime="2026-01-15"
        structuredData={structuredData}
      />
      <BlogFAQSchema faqs={FAQS} />
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold mb-4">Most Stolen Items and How to Check Them Before You Buy</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-8 text-sm">
              <time dateTime="2026-10-07">Updated October 7, 2026</time>
              <span>·</span>
              <span>5 min read</span>
            </div>

            <BlogHeroImage src={blogImages.theftTrends} alt="Tagged items on shelves in a property room" />

            <p className="text-xl">
              The items stolen and resold most often are the ones that are valuable, easy to carry and easy to sell without
              paperwork: phones, tablets, laptops, cars and car parts, bikes and e-bikes, power tools, guns, game consoles, cameras
              and jewelry. Almost all of them carry a serial number, IMEI or VIN, and that number is how you check one before you buy.
            </p>
            <p>
              This page used to be a "2024 theft trends report" full of national totals. We couldn't trace those numbers to a source
              we could name, so we took them out. What's here is what holds up: which items to be careful with, and how to check each.
            </p>

            <h2>Items commonly stolen and resold, and how to check each</h2>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border rounded-lg">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-3">Item</th>
                    <th className="p-3">Why it's targeted</th>
                    <th className="p-3">Number to look up</th>
                    <th className="p-3">How to check</th>
                  </tr>
                </thead>
                <tbody>
                  {ITEMS.map((r) => (
                    <tr key={r.item} className="border-b last:border-0 align-top">
                      <td className="p-3 font-medium text-foreground">
                        <Link to={r.link} className="text-primary hover:underline">{r.item}</Link>
                      </td>
                      <td className="p-3 text-muted-foreground">{r.why}</td>
                      <td className="p-3 text-muted-foreground">{r.number}</td>
                      <td className="p-3 text-muted-foreground">{r.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Jewelry and watches are the hard case. Most jewelry has no serial, so there's nothing to look up. Luxury watches do
              have serials, usually between the lugs or on the caseback; ask for the original papers and make sure the serial on
              them matches the watch.
            </p>

            <h2>Signs a listing may be stolen goods</h2>
            <ul>
              <li>The price is far under what the same item sells for used.</li>
              <li>The seller won't share the serial, IMEI or VIN before you meet.</li>
              <li>The serial is scratched, ground off, painted over or covered with a new sticker.</li>
              <li>Several new-in-box items, or a whole tool set, from one private seller with no receipts.</li>
              <li>A phone or laptop that's still signed in to someone else's account, or a seller who "forgot the passcode".</li>
              <li>Pressure to pay cash right now, or a meetup spot that keeps changing.</li>
            </ul>

            <h2>What a check covers</h2>
            <p>
              A SafeOrStolen check searches its own theft reports and public web results for any item, plus police firearm theft
              records for guns, a national stolen-bicycle registry for bikes, and Arizona law-enforcement records for Arizona VINs and
              plates. It can't see NCIC, DMV records or Activation Lock, which is why the in-person signs above still matter. More
              on that: <Link to="/data-sources">what SafeOrStolen searches</Link>.
            </p>

            <h2>Questions people ask</h2>
            {FAQS.map((f) => (
              <div key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}

            <div className="not-prose bg-primary/10 p-6 rounded-lg mt-10">
              <p className="text-lg font-bold mb-2">Check an item before you pay</p>
              <p className="text-muted-foreground mb-4">The first 2 checks are free with an account. No credit card.</p>
              <Button asChild size="lg">
                <Link to="/verify">Run a check</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/theft-trends-report-2024" currentCategory="blog" maxLinks={5} />
    </>
  );
}
