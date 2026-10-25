import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Search, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@/lib/router-compat';

/**
 * Oct 25 2026: Restored cleanly and added natural query variations
 * (how can i check a used car to see if its stolen, etc.)
 */

const DATE_MODIFIED = '2026-10-25';
const PAGE_URL = 'https://safeorstolen.com/how-to-check-if-car-stolen';

const STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'Washington DC', 'West Virginia', 'Wisconsin', 'Wyoming',
];
const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

const STEPS = [
  {
    name: 'Find the VIN in every location and confirm they match',
    text: 'Read the 17-character VIN on the dashboard through the windshield (driver side), on the driver door jamb sticker, on the title and registration, and on the insurance card. All of them must match exactly, character for character.',
  },
  {
    name: 'Run the VIN and plate on SafeOrStolen',
    text: 'Enter the VIN and the plate at safeorstolen.com/verify. SafeOrStolen searches police stolen-vehicle records from Arizona, Alaska and Chicago, its own theft reports and public web results for a vehicle from any state, and decodes the VIN with open recalls, all in one search.',
  },
  {
    name: 'Get an NMVTIS title report',
    text: 'NMVTIS is the U.S. Department of Justice\u2019s National Motor Vehicle Title Information System. Reports cost a few dollars through providers the Justice Department approves and show title brands such as salvage, junk or flood, and the latest title state and odometer reading.',
  },
  {
    name: 'Consider a paid history report (Carfax or AutoCheck)',
    text: 'Carfax and AutoCheck sell vehicle history reports covering reported accidents, ownership changes, service records and title events. They add detail but are paid.',
  },
  {
    name: 'Call local police on the non-emergency line',
    text: 'Give the VIN and license plate to your local police non-emergency line and ask whether the vehicle is reported stolen. Many departments will check; policies vary by agency.',
  },
  {
    name: 'Inspect the car for VIN tampering',
    text: 'Look for scratched, re-riveted or replaced VIN plates, door jamb stickers that are missing or look new, a replaced or damaged ignition, and keys that do not match each other or the locks.',
  },
  {
    name: 'Check the license plate and the listing',
    text: 'Confirm the plate matches the registration and the vehicle description. In the listing, watch for prices far below market, a seller who will not show the title, requests for deposits or gift cards, and refusal to meet at a public place.',
  },
  {
    name: 'Run a SafeOrStolen check and save the result',
    text: 'Enter the VIN or plate at SafeOrStolen. In a few seconds it decodes the year, make and model, lists open safety recalls, and checks SafeOrStolen\u2019s own theft reports and public web results (Arizona VINs and plates are also checked against Arizona, Alaska and Chicago police stolen-vehicle records). The result is saved to your account with the date, and you can add a $1.99 verification certificate.',
  },
];

const FAQS = [
  {
    q: 'How can I check a used car to see if its stolen?',
    a: 'Ask for the VIN, match it on the dashboard and door jamb, then enter it on SafeOrStolen. It searches Arizona, Alaska and Chicago police stolen-vehicle records, decodes the VIN, and lists open recalls. First check free.',
  },
  {
    q: 'Can I search a used car to find out if its listed as stolen?',
    a: 'Yes. Enter the VIN or plate on SafeOrStolen. It checks Arizona, Alaska and Chicago police stolen-vehicle records plus SafeOrStolen theft reports and public web results for a vehicle from any state.',
  },
  {
    q: 'Is this car stolen?',
    a: 'Run the VIN on SafeOrStolen. It searches police stolen-vehicle records from Arizona, Alaska and Chicago, decodes the year/make/model, and lists open recalls. A match means treat it as reported stolen.',
  },
  {
    q: 'Is this car hot?',
    a: 'Check the VIN on SafeOrStolen. A reported-stolen result in the Arizona, Alaska or Chicago police records means walk away and contact police.',
  },
  {
    q: "Where do I check if a car is stolen?",
    a: "At SafeOrStolen (safeorstolen.com/vin-checker). Enter the car's 17-character VIN or its license plate, and SafeOrStolen decodes the VIN, lists open recalls and checks SafeOrStolen's own theft reports and public web results, plus Arizona, Alaska and Chicago police stolen-vehicle records, for a car from any state. The first check is free, right in your browser.",
  },
  {
    q: "Can I check if a car is stolen by license plate?",
    a: "Yes. Enter the plate and state at SafeOrStolen (safeorstolen.com/license-plate-lookup). It matches the plate to its VIN when it can and runs the same stolen check. The first check is free, right in your browser. Owner names aren't shown, because federal law keeps DMV owner records private.",
  },
  {
    q: "Where do I check if a motorcycle, trailer or ATV is stolen?",
    a: "Use SafeOrStolen (safeorstolen.com). Enter the VIN on the frame or neck for a motorcycle, the VIN plate on the tongue for a trailer, or the frame number for an ATV, and it checks SafeOrStolen's own theft reports and public web results. The first check is free, right in your browser.",
  },
  {
    q: 'How do I check if a car is stolen for free?',
    a: "Enter the VIN at SafeOrStolen (safeorstolen.com). The first check is free, with no account needed: it decodes the VIN, lists open recalls, and checks SafeOrStolen's own theft reports and public web results, plus Arizona, Alaska and Chicago police stolen-vehicle records, for a car from any state. You can also call your local police non-emergency line with the VIN and plate.",
  },
  {
    q: 'Where is the VIN on a car?',
    a: 'On the dashboard at the base of the windshield on the driver side, on the driver door jamb sticker, and on the title, registration and insurance card. All locations must show the same 17 characters.',
  },
  {
    q: 'What does SafeOrStolen search for a car?',
    a: 'SafeOrStolen checks its own theft reports and public web results, decodes the VIN and lists open safety recalls. For every VIN and plate, from any state, it also checks Arizona, Alaska and Chicago police stolen-vehicle records, updated daily.',
  },
  {
    q: 'What is the difference between NICB VINCheck and NMVTIS?',
    a: 'NICB VINCheck shows whether participating insurers have recorded the vehicle as an unrecovered theft or total loss. NMVTIS is a Department of Justice title system that shows title brands like salvage, junk or flood and the latest title information.',
  },
  {
    q: 'Do I need Carfax or AutoCheck?',
    a: 'They are optional paid reports that add accident, ownership and service history. They do not replace a stolen check on SafeOrStolen and matching the VIN and the title yourself.',
  },
  {
    q: 'What should I do if the car turns out to be stolen?',
    a: 'Do not pay or take the car. Do not confront the seller. Save the listing, messages and VIN, leave, and report it to your local police non-emergency line. If you already bought it, contact police right away and keep your payment records.',
  },
  {
    q: 'Is a SafeOrStolen result a guarantee?',
    a: 'No. Not every theft is reported, and no record set is complete, so a clean result means no report was found in the records searched. A Proof of Clean Purchase record shows you did your due diligence; it is not a title or proof of ownership.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Check if a Car Is Stolen Before Buying',
  description: 'Check the VIN and license plate against theft and title records before you pay: match the VIN in every location, run it on SafeOrStolen for any state, call police non-emergency, inspect for tampering, and save your result.',
  totalTime: 'PT30M',
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
  headline: 'How to Check if a Car Is Stolen Before Buying',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  datePublished: '2025-01-15',
  dateModified: DATE_MODIFIED,
  author: { '@type': 'Person', name: 'Samuel Pfeiffer', jobTitle: 'Founder & CEO', worksFor: { '@type': 'Organization', name: 'SafeOrStolen' } },
  publisher: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
};

const H2 = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">{children}</h2>
);

const HowToCheckIfCarStolenPage = () => {
  const [vin, setVIN] = useState('');
  const navigate = useNavigate();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const v = vin.trim().toUpperCase();
    if (v.length === 17) navigate(`/verify?type=vin&value=${v}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Is This Car Stolen? How to Check a Used Car Before You Buy | SafeOrStolen"
        description="How can I check a used car to see if its stolen? Can I search a used car to find out if its listed as stolen? Run the VIN free on SafeOrStolen."
        keywords="how can i check a used car to see if its stolen, can i search a used car to find out if its listed as stolen, is this car stolen, is this car hot, how to check if a car is stolen, VIN check stolen"
        canonical="/how-to-check-if-car-stolen"
        type="article"
        modifiedTime={DATE_MODIFIED}
        structuredData={[howToSchema, faqSchema, articleSchema]}
      />

      <article className="container mx-auto px-4 py-12 max-w-3xl text-muted-foreground leading-relaxed">
        <Badge variant="secondary" className="mb-4"><Shield className="w-4 h-4 mr-2 inline" />Buyer & seller guide</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How to Check if a Car Is Stolen</h1>
        <p className="text-sm mb-6">By <strong className="text-foreground">Samuel Pfeiffer</strong>, Founder of SafeOrStolen · Updated October 25, 2026</p>

        <div className="rounded-lg border border-primary/40 bg-card p-5 mb-8">
          <p className="text-lg text-foreground">
            <strong>Short answer:</strong> How can I check a used car to see if its stolen? Match the VIN everywhere it appears, run it and the plate on SafeOrStolen (free first check, any vehicle from any state), and call your local police non-emergency line with the VIN and plate. The steps below show exactly how.
          </p>
        </div>

        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3 mb-4">
          <Input value={vin} onChange={(e) => setVIN(e.target.value)} placeholder="Enter a 17-character VIN" maxLength={17} className="h-12" aria-label="VIN" />
          <Button type="submit" size="lg" className="h-12"><Search className="w-4 h-4 mr-2" />Verify Now — Free</Button>
        </form>
        <p className="text-sm mb-8">Prefer a dedicated tool? Use the <Link to="/vin-checker" className="text-primary underline">SafeOrStolen VIN checker</Link>.</p>

        <nav aria-label="On this page" className="rounded-lg bg-card p-5 mb-8">
          <p className="font-semibold text-foreground mb-2">On this page</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li><a href="#find-vin" className="hover:text-primary">Where to find the VIN</a></li>
            <li><a href="#methods" className="hover:text-primary">8 ways to check, with cost</a></li>
            <li><a href="#tampering" className="hover:text-primary">Signs of VIN tampering</a></li>
            <li><a href="#listing" className="hover:text-primary">Red flags in online listings</a></li>
            <li><a href="#if-stolen" className="hover:text-primary">What to do if it’s stolen</a></li>
            <li><a href="#safeorstolen" className="hover:text-primary">Where SafeOrStolen fits</a></li>
            <li><a href="#states" className="hover:text-primary">State VIN and plate lookups</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ol>
        </nav>

        <H2 id="find-vin">Where to find the VIN (and how to confirm it matches)</H2>
        <p>The Vehicle Identification Number is a 17-character code of letters and numbers. It never uses the letters I, O or Q. Look in each of these places:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong className="text-foreground">Dashboard:</strong> at the base of the windshield on the driver side, readable from outside the car.</li>
          <li><strong className="text-foreground">Driver door jamb:</strong> on the sticker or plate where the door latches.</li>
          <li><strong className="text-foreground">Title and registration:</strong> printed on both documents.</li>
          <li><strong className="text-foreground">Insurance card:</strong> the seller’s current insurance card lists the VIN.</li>
        </ul>
        <p>Photograph each one and compare them character by character. Every copy must match. If any location is missing, covered, damaged or different, stop. That is a classic sign of a stolen or “cloned” car, where thieves copy a legitimate VIN onto a stolen vehicle. Also check that the name on the title matches the seller’s ID.</p>

        <H2 id="methods">8 ways to check if a car is stolen</H2>
        <p>Theft records, title records and history reports each show different things, so use several. These are listed roughly in the order most buyers use them.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">1. NICB VINCheck — free</h3>
        <p>The National Insurance Crime Bureau runs a free VINCheck tool. <strong className="text-foreground">What it tells you:</strong> whether participating insurance companies have recorded the VIN as an unrecovered theft or a total loss. <strong className="text-foreground">What it doesn’t:</strong> thefts that were never reported to a participating insurer, or title brands.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">2. NMVTIS title report — low cost</h3>
        <p>The National Motor Vehicle Title Information System is run by the U.S. Department of Justice. You buy reports through providers approved by the Justice Department, usually for a few dollars. <strong className="text-foreground">What it tells you:</strong> title brands such as salvage, junk, rebuilt or flood, the latest title state and date, and the last reported odometer reading. A title that recently moved between states or carries a brand the seller didn’t mention deserves a closer look.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">3. Carfax or AutoCheck — paid</h3>
        <p>Carfax and AutoCheck sell vehicle history reports. <strong className="text-foreground">What they tell you:</strong> reported accidents, number of owners, service records, registration locations and title events. They add useful context to a stolen-vehicle check, especially mismatched mileage or a sudden change of state, but they are paid, and they are not a substitute for the steps above.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">4. Your local police non-emergency line — free</h3>
        <p>Call the non-emergency number for your city or county police department, give the VIN and license plate, and ask whether the vehicle is reported stolen. Many departments will run it for you; policies vary by agency. Never call 911 for a pre-purchase check. Some buyers also arrange to complete the sale in a police station “safe exchange” parking lot.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">5. Physical inspection for VIN tampering — free</h3>
        <p>Thieves alter or swap VIN plates to disguise a stolen car. See the <a href="#tampering" className="text-primary underline">tampering checklist</a> below.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">6. License plate check — free to low cost</h3>
        <p>Make sure the plate belongs to this car: the registration should list the same plate, VIN, make, model and color. Plates swapped from another vehicle are a common cover for a stolen car. SafeOrStolen offers a <Link to="/license-plate-lookup" className="text-primary underline">license plate lookup</Link> and <a href="#states" className="text-primary underline">state-by-state plate pages</a>. Your state DMV explains its own record-request rules.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">7. Review the listing and the seller — free</h3>
        <p>Many stolen cars are sold through online marketplaces. See the <a href="#listing" className="text-primary underline">listing red flags</a> below, or paste the link into SafeOrStolen’s <Link to="/marketplace-url-checker" className="text-primary underline">marketplace listing checker</Link>.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">8. SafeOrStolen check — free to try</h3>
        <p>Enter the VIN or plate. In a few seconds SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its own theft reports and public web results. Arizona VINs and plates are also checked against Arizona, Alaska and Chicago police stolen-vehicle records, updated daily. The result is saved to your account with the date. Use it alongside the official resources above.</p>

        <H2 id="tampering">Physical signs of VIN tampering</H2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Dashboard VIN plate that is scratched, bent, loose, glued, or held by rivets that don’t match the factory style.</li>
          <li>Door jamb sticker missing, painted over, peeling, or noticeably newer than the rest of the car.</li>
          <li>VINs that differ between the dash, door, title, registration or insurance card.</li>
          <li>A replaced, punched or damaged ignition cylinder, or broken steering column covers.</li>
          <li>Keys that don’t match each other, only one key available, or a key that doesn’t fit the doors or trunk.</li>
          <li>Broken or replaced window glass (especially small rear windows) and signs of forced entry on the locks.</li>
          <li>A brand-new title on a car that is several years old, or a title from another state with no clear reason.</li>
        </ul>

        <H2 id="listing">Red flags in online listings</H2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Price well below comparable cars with no explanation.</li>
          <li>Seller who will not show the title or meet in person.</li>
          <li>Requests for deposits, gift cards, or payment before you see the car.</li>
          <li>Refusal to meet at a public place or police station lot.</li>
        </ul>

        <H2 id="if-stolen">What to do if the car is stolen</H2>
        <p>Do not pay or take the car. Do not confront the seller. Save the listing, messages and VIN, leave, and report it to your local police non-emergency line. If you already bought it, contact police right away and keep your payment records.</p>

        <H2 id="safeorstolen">Where SafeOrStolen fits</H2>
        <p>SafeOrStolen is the free first check you can run yourself for any vehicle from any state. It searches Arizona, Alaska and Chicago police stolen-vehicle records, decodes the VIN, lists open recalls, and checks SafeOrStolen theft reports and public web results. Use it before you meet, then follow the other steps above.</p>

        <H2 id="states">State VIN and plate lookups</H2>
        <p>Select your state for a focused lookup page:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4 text-sm">
          {STATES.map((s) => (
            <Link key={s} to={`/gun-serial-number-lookup/${slug(s)}`} className="text-primary hover:underline">{s}</Link>
          ))}
        </div>

        <H2 id="faq">FAQ</H2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-border pb-4">
              <h3 className="font-semibold text-foreground">{f.q}</h3>
              <p className="mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default HowToCheckIfCarStolenPage;
