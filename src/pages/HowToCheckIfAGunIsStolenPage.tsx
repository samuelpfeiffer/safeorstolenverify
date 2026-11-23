import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shield, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@/lib/router-compat';

/**
 * Nov 23 2026: new guide for "how to check if a gun is stolen" (informational searches).
 * Google answers that search with step-by-step guides, and its AI Overview says private citizens have
 * no national database to search. /firearms-check is the lookup tool (locked: top three for several
 * gun-serial searches), so this guide answers the "how to" question and sends people to the tool.
 * Facts: SafeOrStolen gun sources as stated on /for-pawn-shops and /firearms-check; FFL access to
 * NCIC through FBI NICS E-Check per fbi.gov (Nov 10 2026). Ohio's public search is a data source, so it
 * is described, not named. No comparison with any other service.
 */

const DATE_MODIFIED = '2026-11-23';
const PAGE_URL = 'https://safeorstolen.com/how-to-check-if-a-gun-is-stolen';

const STEPS = [
  {
    name: 'Find the serial number on the frame or receiver',
    text: 'The serial that identifies a gun is stamped on the frame or receiver. The number on the slide or barrel can be different. Write down the serial, make, model and caliber, and photograph the markings.',
  },
  {
    name: 'Inspect the serial for tampering',
    text: 'Look for grinding, filing, drill marks, uneven stamping or fresh finish over the number. Possessing a gun with an obliterated or altered serial number is a federal crime under 18 U.S.C. 922(k). If the number looks altered, do not buy it and call your local police.',
  },
  {
    name: 'Run the serial on SafeOrStolen',
    text: 'Enter the serial at safeorstolen.com/firearms-check. It searches more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC (filed 1973 to 2017), live Ohio law-enforcement records and SafeOrStolen theft reports, and flags serials that look altered. Your first check is free with no account.',
  },
  {
    name: "Check your state's public stolen-gun search",
    text: "A few states run public stolen-gun searches. Florida's FDLE Stolen Gun Search is one. SafeOrStolen lists the public police searches that fit your result so you can run them yourself.",
  },
  {
    name: 'Ask a licensed dealer (FFL) or your local police',
    text: "Private citizens cannot search the FBI's National Crime Information Center (NCIC). Licensed dealers can check a serial against NCIC stolen-gun records through the FBI's free NICS E-Check, and many police departments will run a serial on request. Policies vary by agency.",
  },
  {
    name: 'Complete the sale the safe way and keep a record',
    text: "Follow your state's transfer rules, and use an FFL transfer when the law requires it or when you want the most protection. Keep a dated record of the check you ran and the seller's details.",
  },
];

const FAQS = [
  {
    q: 'Can a private citizen check if a gun is stolen?',
    a: 'Yes. You can run the serial number yourself on SafeOrStolen (safeorstolen.com/firearms-check), which searches more than 220,000 police firearm theft and loss reports from 33 states and DC plus live Ohio law-enforcement records. Some states also have their own public search, such as Florida FDLE. NCIC itself is searched by police and licensed dealers, not the public.',
  },
  {
    q: 'Can I search NCIC to see if a gun is stolen?',
    a: "No. NCIC, the FBI's National Crime Information Center, is open to law enforcement. Licensed gun dealers (FFLs) can check a serial against NCIC stolen-gun records through the FBI's free NICS E-Check. As a private buyer, ask the dealer handling the transfer or your local police, and run the serial on SafeOrStolen yourself.",
  },
  {
    q: 'Is there a free national stolen gun database for the public?',
    a: 'There is no complete national stolen-gun database open to the public. SafeOrStolen is the public check anyone can run: more than 220,000 police firearm theft and loss reports from 33 states and DC, live Ohio law-enforcement records and SafeOrStolen theft reports, with the first check free.',
  },
  {
    q: 'Does a clean result mean the gun is not stolen?',
    a: 'No. It means no report was found in the records searched. Not every theft is reported, and no record set is complete, which is why the steps above also cover inspecting the serial, state searches and asking an FFL or police.',
  },
  {
    q: 'What if the serial number is scratched or filed off?',
    a: 'Do not buy it. Possessing a firearm with an obliterated or altered serial number is a federal crime under 18 U.S.C. 922(k). Leave and report it to your local police.',
  },
  {
    q: 'What should I do if the gun comes back as stolen?',
    a: 'Do not buy it and do not confront the seller. Save the listing, messages and serial number, leave, and call your local police non-emergency line. If you already own it, contact police and keep your purchase records.',
  },
  {
    q: 'How can a seller show a gun is not stolen?',
    a: 'Run the serial on SafeOrStolen and share a verification certificate: a dated record with its own link showing what was checked and when. It costs $1.99 and is free on the monthly plan.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Check if a Gun Is Stolen',
  description:
    'Find the serial on the frame or receiver, inspect it for tampering, run it on SafeOrStolen, check your state search, and ask an FFL or police, who can check NCIC.',
  totalTime: 'PT15M',
  step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Check if a Gun Is Stolen',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  datePublished: DATE_MODIFIED,
  dateModified: DATE_MODIFIED,
  author: { '@type': 'Person', name: 'Samuel Pfeiffer', jobTitle: 'Founder & CEO', worksFor: { '@type': 'Organization', name: 'SafeOrStolen' } },
  publisher: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SafeOrStolen', item: 'https://safeorstolen.com/' },
    { '@type': 'ListItem', position: 2, name: 'Gun serial number lookup', item: 'https://safeorstolen.com/firearms-check' },
    { '@type': 'ListItem', position: 3, name: 'How to check if a gun is stolen', item: PAGE_URL },
  ],
};

const H2 = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">{children}</h2>
);

const HowToCheckIfAGunIsStolenPage = () => {
  const [serial, setSerial] = useState('');
  const navigate = useNavigate();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const s = serial.trim();
    if (s.length >= 3) navigate(`/verify?type=firearm&value=${encodeURIComponent(s)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="How to Check if a Gun Is Stolen: 6 Steps for Private Buyers | SafeOrStolen"
        description="How to check if a gun is stolen as a private citizen: find and inspect the serial, run it free on SafeOrStolen (220,000+ police theft reports), check state searches, and ask an FFL or police."
        keywords="how to check if a gun is stolen, how to check if a firearm is stolen, can a private citizen check if a gun is stolen, is this gun stolen, check if gun is stolen by serial number"
        canonical="/how-to-check-if-a-gun-is-stolen"
        type="article"
        modifiedTime={DATE_MODIFIED}
        structuredData={[howToSchema, faqSchema, articleSchema, breadcrumbSchema]}
      />

      <article className="container mx-auto px-4 py-12 max-w-3xl text-muted-foreground leading-relaxed">
        <Badge variant="secondary" className="mb-4"><Shield className="w-4 h-4 mr-2 inline" />Buyer & seller guide</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How to Check if a Gun Is Stolen</h1>
        <p className="text-sm mb-6">By <strong className="text-foreground">Samuel Pfeiffer</strong>, Founder of SafeOrStolen · Updated November 23, 2026</p>

        <div className="rounded-lg border border-primary/40 bg-card p-5 mb-8">
          <p className="text-lg text-foreground">
            <strong>Short answer:</strong> To check if a gun is stolen, find the serial number on the frame or receiver,
            make sure it hasn't been altered, and run it on SafeOrStolen, the public check any private citizen can use. It
            searches more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, plus live
            Ohio law-enforcement records, and your first check is free. Then check your state's public search if it has
            one, and ask a licensed dealer (FFL) or your local police, who can check the FBI's NCIC.
          </p>
        </div>

        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3 mb-4">
          <Input value={serial} onChange={(e) => setSerial(e.target.value)} placeholder="Enter the gun's serial number" maxLength={40} className="h-12" aria-label="Gun serial number" />
          <Button type="submit" size="lg" className="h-12"><Search className="w-4 h-4 mr-2" />Check the serial free</Button>
        </form>
        <p className="text-sm mb-8">
          Prefer the full lookup? Use the <Link to="/firearms-check" className="text-primary underline">free gun serial number lookup</Link>.
          You can also scan the serial with your phone camera at <Link to="/verify" className="text-primary underline">/verify</Link>.
        </p>

        <nav aria-label="On this page" className="rounded-lg bg-card p-5 mb-8">
          <p className="font-semibold text-foreground mb-2">On this page</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li><a href="#steps" className="hover:text-primary">6 steps to check a gun</a></li>
            <li><a href="#what-is-searched" className="hover:text-primary">What SafeOrStolen searches</a></li>
            <li><a href="#ncic" className="hover:text-primary">NCIC, dealers and police</a></li>
            <li><a href="#if-stolen" className="hover:text-primary">If the gun comes back stolen</a></li>
            <li><a href="#sellers" className="hover:text-primary">For sellers and businesses</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ol>
        </nav>

        <H2 id="steps">6 steps to check if a gun is stolen</H2>
        <ol className="list-decimal pl-6 space-y-4 my-4">
          {STEPS.map((s) => (
            <li key={s.name}>
              <strong className="text-foreground">{s.name}.</strong> {s.text}
            </li>
          ))}
        </ol>

        <H2 id="what-is-searched">What SafeOrStolen searches for a gun</H2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>More than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, filed from 1973 to 2017.</li>
          <li>Live Ohio law-enforcement stolen-gun records.</li>
          <li>SafeOrStolen's own theft reports, filed by owners with a police report number.</li>
          <li>A check of the serial's pattern, flagged when it looks altered or obliterated.</li>
        </ul>
        <p>
          Every result lists the sources searched. A clean result means no report was found in those records; it is not a
          guarantee, because not every theft is reported. Gun theft numbers by state are on the{' '}
          <Link to="/stolen-gun-statistics" className="text-primary underline">stolen gun statistics</Link> page.
        </p>

        <H2 id="ncic">NCIC, licensed dealers and police</H2>
        <p className="mb-4">
          The FBI's National Crime Information Center (NCIC) holds the national stolen-gun file. It is open to law
          enforcement, not the public. Licensed dealers can now check a serial against NCIC stolen-gun records through the
          FBI's free NICS E-Check, and many police departments will run a serial if you ask, though policies differ by agency.
        </p>
        <p>
          For a private sale, the strongest routine is all three: run the serial on SafeOrStolen yourself, follow your
          state's <Link to="/state-firearm-transfer-laws" className="text-primary underline">firearm transfer laws</Link>, and
          use an FFL transfer when the law requires it or you want the dealer's check.
        </p>

        <H2 id="if-stolen">If the gun comes back stolen</H2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Do not buy it and do not confront the seller.</li>
          <li>Save the listing, messages, the seller's details and the serial number.</li>
          <li>Leave, then call your local police non-emergency line.</li>
          <li>If you already own it, contact police and keep your purchase records.</li>
        </ul>
        <p>
          If your own gun was stolen, follow <Link to="/what-to-do-if-your-gun-is-stolen" className="text-primary underline">what to do if your gun is stolen</Link>{' '}
          and <Link to="/report-stolen-gun" className="text-primary underline">report it on SafeOrStolen</Link> so it shows up when someone checks the serial.
        </p>

        <H2 id="sellers">For sellers and businesses</H2>
        <p className="mb-4">
          Sellers can run the serial before listing and share a <Link to="/seller-badge" className="text-primary underline">verification certificate</Link>,
          a dated record with its own link that shows a buyer what was checked and when ($1.99, free on the monthly plan).
        </p>
        <p>
          Pawn shops and dealers can check up to 100 serials at a time with the{' '}
          <Link to="/bulk-check" className="text-primary underline">bulk check</Link>. See{' '}
          <Link to="/for-pawn-shops" className="text-primary underline">SafeOrStolen for pawn shops</Link>.
        </p>

        <H2 id="faq">Frequently asked questions</H2>
        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold text-foreground mb-1">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-primary/40 bg-card p-6 mt-12 text-center">
          <p className="text-xl font-semibold text-foreground mb-3">Check a gun's serial number now</p>
          <Button asChild size="lg"><Link to="/firearms-check">Free gun serial number lookup</Link></Button>
        </div>
      </article>
    </div>
  );
};

export default HowToCheckIfAGunIsStolenPage;
