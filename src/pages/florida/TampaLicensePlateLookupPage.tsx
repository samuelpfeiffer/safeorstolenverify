import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const FAQS = [
 {
 q: 'How do I check if a car is stolen in Tampa?',
 a: 'Enter the Florida plate or, better, the VIN on SafeOrStolen (safeorstolen.com/florida/tampa-license-plate-lookup). It searches theft reports owners have filed on the site and public web results, and a VIN check also decodes the year, make and model and lists open recalls. Your first 2 checks are free. For a stolen-car check against police records, call Tampa Police or the Hillsborough County Sheriff non-emergency line.',
 },
 {
 q: 'Does SafeOrStolen check Hillsborough County Sheriff or Tampa Police records?',
 a: 'No. SafeOrStolen does not have access to Hillsborough County Sheriff\'s Office, Tampa Police Department, FDLE or NCIC systems. For Florida vehicles it searches its own theft reports and public web results. If you think a car is stolen, call the local police non-emergency line with the VIN and plate.',
 },
 {
 q: 'Should I check for flood damage on Tampa vehicles?',
 a: 'Yes. After a hurricane, flood-damaged cars can show up for sale across Florida. SafeOrStolen does not check title brands. Get an NMVTIS title report, which shows brands like flood and salvage, and look for water lines, silt under the carpets, rust on seat rails and a musty smell before you buy.',
 },
 {
 q: 'Can I find out who owns a Tampa license plate?',
 a: 'Not through SafeOrStolen. Owner names and addresses in Florida registration records are protected by the federal Driver\'s Privacy Protection Act, and SafeOrStolen never shows owner names. Police, courts and a few other permitted users can request them from the state.',
 },
];

const TampaLicensePlateLookupPage = () => {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
 };

 return (
 <>
 <PageSEO
 title="Tampa FL License Plate Lookup: Check for Stolen Cars | SafeOrStolen"
 description="Tampa license plate lookup for used-car buyers: check a Florida plate or VIN against SafeOrStolen theft reports in a few seconds, plus what to check for flood damage."
 canonical="/florida/tampa-license-plate-lookup"
 structuredData={[faqSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold tracking-widest mb-3">
 <MapPin className="h-4 w-4" /> Hillsborough County, Florida
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4">Tampa License Plate Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Buying a used car in Tampa? Enter the Florida plate or VIN and SafeOrStolen searches its own theft reports and public web results in a few seconds. Your first 2 checks are free.
 </p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/verify?type=plate&state=FL">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check a Tampa Vehicle <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why Check Before Buying in Tampa</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Tampa sits where I-4 and I-75 meet, and private car sales move fast on Facebook Marketplace and Craigslist across Hillsborough, Pinellas and Pasco counties. A quick check on the plate and VIN before you meet the seller costs little and can save you from a car police later take back.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Match the VIN on the dashboard, the driver door jamb and the Florida title. Make sure the name on the title matches the seller's ID. If anything doesn't match, stop there.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 Tampa Bay also gets hurricanes, and flood-damaged cars can end up for sale after a storm. SafeOrStolen does not check title brands, so get an NMVTIS title report for flood and salvage brands and have a mechanic look for water damage.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What a SafeOrStolen Check Covers</h2>
 <ul className="space-y-3">
 {[
 { name: 'SafeOrStolen theft reports', desc: 'thefts owners have reported on the site' },
 { name: 'Public web results', desc: 'listings and posts that mention the plate or VIN' },
 { name: 'VIN decode and recalls', desc: 'year, make, model and open safety recalls when you check by VIN' },
 { name: 'Not included', desc: 'Tampa Police, HCSO, FDLE and NCIC records, owner names, and title brands' },
 ].map(db => (
 <li key={db.name} className="flex gap-3 bg-card/50 border border-border rounded-xl p-4">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 <div><strong className="text-foreground">{db.name}</strong><span className="text-muted-foreground"> — {db.desc}</span></div>
 </li>
 ))}
 </ul>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
 <div className="space-y-3">
 {FAQS.map((f) => (
 <details key={f.q} className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">{f.q}</summary>
 <p className="text-muted-foreground mt-2">{f.a}</p>
 </details>
 ))}
 </div>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4">Check Vehicles in Other Florida Cities</h2>
 <div className="flex flex-wrap gap-3">
 {[
 { name: 'Miami', href: '/florida/miami-license-plate-lookup' },
 { name: 'Jacksonville', href: '/florida/jacksonville-license-plate-lookup' },
 { name: 'Orlando', href: '/florida/orlando-license-plate-lookup' },
 { name: 'Destin', href: '/florida/destin-license-plate-lookup' },
 { name: 'All Florida', href: '/florida-license-plate-lookup' },
 ].map(city => (
 <Link key={city.name} to={city.href} className="text-primary hover:underline font-medium">{city.name}</Link>
 ))}
 </div>
 </section>
 </article>
 </div>
 </>
 );
};

export default TampaLicensePlateLookupPage;
