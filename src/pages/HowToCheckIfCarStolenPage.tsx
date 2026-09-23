import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Search, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@/lib/router-compat';

/**
 * How to Check if a Car is Stolen — definitive guide ("how to" intent).
 * Companion tool page: /vin-checker ("run a check now" intent).
 * Honesty rule: official registries (NICB, NMVTIS, police) are described as
 * separate resources the reader checks themselves — SafeOrStolen does not search them.
 */

const DATE_MODIFIED = '2026-09-23';
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
    name: 'Run the VIN through NICB VINCheck',
    text: 'NICB VINCheck (nicb.org) is free and allows a limited number of lookups per day. It shows whether the VIN appears in participating insurers\u2019 records as an unrecovered theft or a total loss.',
  },
  {
    name: 'Get an NMVTIS title report',
    text: 'NMVTIS is the U.S. Department of Justice\u2019s National Motor Vehicle Title Information System (vehiclehistory.gov). Reports cost a few dollars through approved providers and show title brands such as salvage, junk or flood, and the latest title state and odometer reading.',
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
    text: 'Enter the VIN, plate or listing link at SafeOrStolen to check it against SafeOrStolen\u2019s own stolen-item reports, public web results and AI analysis in seconds, save the result to your account, and keep a Proof of Clean Purchase record of your due diligence.',
  },
];

const FAQS = [
  {
    q: 'How do I check if a car is stolen for free?',
    a: 'Use NICB VINCheck, which is free with a limited number of lookups per day, and call your local police non-emergency line with the VIN and plate. You can also run 2 free checks with a free SafeOrStolen account, which checks SafeOrStolen\u2019s own stolen-item reports, public web results and AI analysis.',
  },
  {
    q: 'Where is the VIN on a car?',
    a: 'On the dashboard at the base of the windshield on the driver side, on the driver door jamb sticker, and on the title, registration and insurance card. All locations must show the same 17 characters.',
  },
  {
    q: 'Does SafeOrStolen search NICB, NMVTIS or police databases?',
    a: 'No. SafeOrStolen checks its own stolen-item reports, public web results and AI analysis. NICB VINCheck, NMVTIS and your local police are separate official resources you should check yourself.',
  },
  {
    q: 'What is the difference between NICB VINCheck and NMVTIS?',
    a: 'NICB VINCheck shows whether participating insurers have recorded the vehicle as an unrecovered theft or total loss. NMVTIS is a Department of Justice title system that shows title brands like salvage, junk or flood and the latest title information.',
  },
  {
    q: 'Do I need Carfax or AutoCheck?',
    a: 'They are optional paid reports that add accident, ownership and service history. They do not replace checking the VIN locations, NICB, NMVTIS and the title yourself.',
  },
  {
    q: 'What should I do if the car turns out to be stolen?',
    a: 'Do not pay or take the car. Do not confront the seller. Save the listing, messages and VIN, leave, and report it to your local police non-emergency line. If you already bought it, contact police right away and keep your payment records.',
  },
  {
    q: 'Is a SafeOrStolen result a guarantee?',
    a: 'No. No service can guarantee 100% accuracy, and not every theft is reported. A Proof of Clean Purchase record shows you did your due diligence; it is not a title or proof of ownership.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Check if a Car Is Stolen Before Buying',
  description: 'Check the VIN and license plate against theft and title records before you pay: match the VIN in every location, use NICB VINCheck and NMVTIS, consider a history report, call police non-emergency, inspect for tampering, and save your result.',
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
        title="How to Check if a Car Is Stolen (2026 Guide) | SafeOrStolen"
        description="Check the VIN and plate before you pay: where to find the VIN, NICB VINCheck, NMVTIS, Carfax/AutoCheck, police, tampering signs, and what to do next."
        keywords="how to check if a car is stolen, check if car is stolen, stolen car check, NICB VINCheck, NMVTIS, VIN check stolen"
        canonical="/how-to-check-if-car-stolen"
        type="article"
        modifiedTime={DATE_MODIFIED}
        structuredData={[howToSchema, faqSchema, articleSchema]}
      />

      <article className="container mx-auto px-4 py-12 max-w-3xl text-muted-foreground leading-relaxed">
        <Badge variant="secondary" className="mb-4"><Shield className="w-4 h-4 mr-2 inline" />Buyer &amp; seller guide</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How to Check if a Car Is Stolen</h1>
        <p className="text-sm mb-6">By <strong className="text-foreground">Samuel Pfeiffer</strong>, Founder of SafeOrStolen · Updated September 23, 2026</p>

        <div className="rounded-lg border border-primary/40 bg-card p-5 mb-8">
          <p className="text-lg text-foreground">
            <strong>Short answer:</strong> before you pay, check the car’s VIN and license plate against theft and title records.
            Confirm the VIN matches everywhere it appears, run it through NICB VINCheck (free) and an NMVTIS title report (low cost),
            and call your local police non-emergency line with the VIN and plate. The steps below show exactly how, what each costs, and what each tells you.
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
        <p>Photograph each one and compare them character by character. Every copy must match. If any location is missing, covered, damaged or different, stop. That is the single most common sign of a stolen or “cloned” car, where thieves copy a legitimate VIN onto a stolen vehicle. Also check that the name on the title matches the seller’s ID.</p>

        <H2 id="methods">8 ways to check if a car is stolen</H2>
        <p>No single source catches everything. Theft records, title records and history reports each cover different things, so use several. These are listed roughly in the order most buyers use them.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">1. NICB VINCheck — free</h3>
        <p>The National Insurance Crime Bureau runs a free tool at <a href="https://www.nicb.org/vincheck" target="_blank" rel="noopener noreferrer" className="text-primary underline">nicb.org/vincheck<ExternalLink className="inline w-3 h-3 ml-1" /></a>. It allows a limited number of lookups per day. <strong className="text-foreground">What it tells you:</strong> whether participating insurance companies have recorded the VIN as an unrecovered theft or a total loss. <strong className="text-foreground">What it doesn’t:</strong> thefts that were never reported to a participating insurer, or title brands.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">2. NMVTIS title report — low cost</h3>
        <p>The National Motor Vehicle Title Information System is run by the U.S. Department of Justice. You buy reports through approved providers listed at <a href="https://vehiclehistory.bja.ojp.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">vehiclehistory.bja.ojp.gov<ExternalLink className="inline w-3 h-3 ml-1" /></a>, usually for a few dollars. <strong className="text-foreground">What it tells you:</strong> title brands such as salvage, junk, rebuilt or flood, the latest title state and date, and the last reported odometer reading. A title that recently moved between states or carries a brand the seller didn’t mention deserves a closer look.</p>

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

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">8. SafeOrStolen check — 2 free checks with a free account</h3>
        <p>Enter the VIN, plate or listing link to check it against SafeOrStolen’s own stolen-item reports, public web results and AI analysis in about 3 seconds, then save the result to your account. After a clean check you can keep a Proof of Clean Purchase record. SafeOrStolen does not search NICB, NMVTIS or police databases, so use it alongside the official resources above, not instead of them.</p>

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
          <li>The seller won’t share the VIN before meeting, or the listing photos hide the VIN and plate.</li>
          <li>No title, a “lost” title, a title in someone else’s name, or a bill of sale only.</li>
          <li>Pressure to decide fast, requests for a deposit, wire transfer, gift cards or crypto.</li>
          <li>A new or empty seller profile, or the same photos appearing in other listings.</li>
          <li>Refusal to meet at a public place, a police safe-exchange lot, or the DMV.</li>
        </ul>

        <H2 id="if-stolen">What to do if the car turns out to be stolen</H2>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong className="text-foreground">Don’t pay and don’t take the car.</strong> Do not confront the seller.</li>
          <li><strong className="text-foreground">Save evidence:</strong> the listing, messages, phone number, photos of the VIN and plate.</li>
          <li><strong className="text-foreground">Leave, then report it</strong> to your local police non-emergency line.</li>
          <li><strong className="text-foreground">If you already bought it,</strong> contact police right away, keep every payment record, and contact your bank or payment provider. A stolen car can be recovered by police and returned to its owner even if you paid for it.</li>
        </ol>

        <div className="rounded-lg border border-border bg-card p-4 my-6 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
          <p className="text-sm">No service can guarantee 100% accuracy, and not every theft is reported. For high-value purchases, also check with local law enforcement.</p>
        </div>

        <H2 id="safeorstolen">Where SafeOrStolen fits</H2>
        <p>SafeOrStolen is a stolen-item verification hub for buyers and sellers of used goods. It isn’t only for cars. In one place you can check:</p>
        <ul className="list-disc pl-6 space-y-1 my-4">
          <li>Phones, by IMEI</li>
          <li>Vehicles, by VIN and license plate</li>
          <li>Electronics, power tools and other serial-numbered items, by serial number (a boat’s hull ID, or HIN, can be run through the same general serial check)</li>
          <li>Firearms, by serial number</li>
          <li>Bicycles, by serial number</li>
        </ul>
        <p>Each check covers SafeOrStolen’s own stolen-item reports, public web results and AI analysis, and returns a result in seconds. You can also start from a marketplace listing link. Results save to your account. After a clean check, you can keep a Proof of Clean Purchase record, a timestamped record showing you did your due diligence. <strong className="text-foreground">Sellers</strong> can share that record with buyers to show an item checked clean. It works on the web or as an <Link to="/app" className="text-primary underline">installable web app</Link>. Pricing: 2 free checks with a free account (no card), $0.99 for a single check, or $10/month for unlimited checks.</p>
        <div className="flex flex-wrap gap-3 my-6">
          <Button asChild size="lg"><Link to="/vin-checker">Check a VIN now</Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/proof-of-purchase">About Proof of Clean Purchase</Link></Button>
        </div>

        <H2 id="states">State VIN and license plate lookups</H2>
        <p>Title, registration and record-request rules differ by state. Pick your state:</p>
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">VIN lookup by state</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm">
          {STATES.map((s) => (
            <li key={`vin-${s}`}><Link to={`/${slug(s)}-vin-lookup`} className="hover:text-primary">{s} VIN lookup</Link></li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">License plate lookup by state</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm">
          {STATES.map((s) => (
            <li key={`plate-${s}`}><Link to={`/${slug(s)}-license-plate-lookup`} className="hover:text-primary">{s} plate lookup</Link></li>
          ))}
        </ul>

        <H2 id="faq">Frequently asked questions</H2>
        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold text-foreground mb-1">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <H2>Related guides</H2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link to="/vin-checker" className="text-primary underline">VIN checker tool</Link></li>
          <li><Link to="/blog/complete-vin-guide" className="text-primary underline">Complete VIN guide</Link></li>
          <li><Link to="/license-plate-lookup" className="text-primary underline">License plate lookup</Link></li>
          <li><Link to="/marketplace-url-checker" className="text-primary underline">Marketplace listing checker</Link></li>
          <li><Link to="/check-if-stolen" className="text-primary underline">Check if any item is stolen</Link></li>
        </ul>
      </article>
    </div>
  );
};

export default HowToCheckIfCarStolenPage;
