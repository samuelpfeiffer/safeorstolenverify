import { Link } from "@/lib/router-compat";
import { PageSEO } from "@/components/seo/PageSEO";
import { InlineSerialCheck } from "@/components/seo/InlineSerialCheck";
import { GUN_NATIONAL, GUN_TOP_MODELS } from "@/data/gunTheftStats";

/**
 * Oct 20 2026: Tennessee is the top state for "gun serial number lookup free" searches, but it is
 * NOT one of the 33 states + DC in the police report data. This page says so plainly and still
 * gives a full answer: the check, what it covers, where the serial is, and what to do next.
 */
const fmt = (n: number) => n.toLocaleString("en-US");
const URL = "https://safeorstolen.com/gun-serial-number-lookup/tennessee";

const FAQS = [
  {
    q: "Can I look up a gun serial number for free in Tennessee?",
    a: `Yes. Enter the serial on this page. Your first check is free, with no credit card. The check searches ${fmt(GUN_NATIONAL.total)} police reports of stolen and lost guns from 33 states and Washington, DC, live Ohio records, and SafeOrStolen's own theft reports.`,
  },
  {
    q: "Are Tennessee police reports included?",
    a: "No. Tennessee is not one of the 33 states in the police report data. A gun stolen in another covered state and brought into Tennessee can still show up, and so can any theft reported to SafeOrStolen. For a gun stolen in Tennessee, also ask local police or buy through a licensed dealer.",
  },
  {
    q: "Who can check the FBI's stolen gun file?",
    a: "Only police and licensed gun dealers (FFLs). If you're buying from a private seller, you can ask to do the sale at a gun shop that offers transfers, or ask your local police department to run the serial.",
  },
  {
    q: "What if the serial comes back as a match?",
    a: "Don't buy the gun. Write down the serial and the result and call your local police non-emergency line. Under federal law (18 U.S.C. § 922(j)) it's a crime to receive a gun you know or have reason to believe is stolen.",
  },
];

export default function TennesseeGunLookupPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://safeorstolen.com" },
        { "@type": "ListItem", position: 2, name: "Gun serial number lookup", item: "https://safeorstolen.com/firearms-check" },
        { "@type": "ListItem", position: 3, name: "Tennessee", item: URL },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <PageSEO
        title="Gun Serial Number Lookup Free Tennessee"
        description={`Free gun serial number lookup in Tennessee. Check a serial against ${fmt(GUN_NATIONAL.total)} police reports of stolen and lost guns before you buy. 1 free check, no credit card.`}
        canonical="/gun-serial-number-lookup/tennessee"
        structuredData={schema}
        modifiedTime="2026-10-20"
      />
      <article className="container mx-auto max-w-3xl px-4 space-y-8">
        <header className="space-y-4 text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest">Tennessee · Stolen gun check</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight">Gun Serial Number Lookup Free Tennessee</h1>
          <p className="text-lg text-muted-foreground">
            Check a gun's serial number free before you buy it in Tennessee. One search covers {fmt(GUN_NATIONAL.total)} police
            reports of stolen and lost guns from 33 states and Washington, DC, plus live Ohio records and SafeOrStolen's own theft reports.
          </p>
          <InlineSerialCheck type="firearm" placeholder="Enter the gun's serial number" />
          <p className="text-sm text-muted-foreground">1 free check · No credit card · The seller is never told</p>
        </header>

        <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Quick answer</p>
          <p>
            To check if a gun is stolen in Tennessee, type its serial number into the box above. If it matches a police report of a
            stolen or lost gun, don't buy it. Tennessee police reports aren't in this data, so for a private sale it's also smart to
            do the transfer at a licensed gun shop or ask local police to run the serial.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">What the Tennessee check searches</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>{fmt(GUN_NATIONAL.total)} police firearm theft and loss reports from 33 states and Washington, DC (filed 1973–2017).</li>
            <li>Live Ohio law-enforcement stolen-gun records.</li>
            <li>Theft reports filed on SafeOrStolen by owners.</li>
          </ul>
          <p className="text-muted-foreground">
            Guns move across state lines, so a gun for sale in Tennessee can match a report from another state. Every result lists the
            records it searched.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Where to find the serial number</h2>
          <p className="text-muted-foreground">
            On most pistols the serial is on the frame, often on the side above the trigger or under the barrel. On rifles and shotguns
            it's usually on the receiver. Revolvers often have it on the bottom of the grip frame or under the cylinder crane. Check that
            the number hasn't been scratched or ground off. A removed serial is a serious warning sign.{" "}
            <Link to="/where-to-find-serial-number" className="text-primary hover:underline">See every item type</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Most reported stolen guns</h2>
          <p className="text-muted-foreground">
            In the police report data, the most reported models are{" "}
            {GUN_TOP_MODELS.slice(0, 5).map(([m, n]) => `${m} (${fmt(n)})`).join(", ")}.{" "}
            <Link to="/stolen-gun-statistics" className="text-primary hover:underline">Full stolen gun statistics</Link>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Questions about checking a gun in Tennessee</h2>
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-muted-foreground mt-1">{f.a}</p>
            </div>
          ))}
        </section>

        <nav className="text-sm text-muted-foreground">
          Nearby states with police report data:{" "}
          <Link to="/gun-serial-number-lookup/georgia" className="text-primary hover:underline">Georgia</Link>{" · "}
          <Link to="/gun-serial-number-lookup/missouri" className="text-primary hover:underline">Missouri</Link>{" · "}
          <Link to="/gun-serial-number-lookup/virginia" className="text-primary hover:underline">Virginia</Link>{" · "}
          <Link to="/gun-serial-number-lookup/north-carolina" className="text-primary hover:underline">North Carolina</Link>{" · "}
          <Link to="/firearms-check" className="text-primary hover:underline">Any state</Link>
        </nav>
      </article>
    </main>
  );
}
