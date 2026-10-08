import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const HotGunzDatabaseGuide = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is HotGunz?",
        "acceptedAnswer": { "@type": "Answer", "text": "HotGunz is a free, community-run website where gun owners list stolen firearms by serial number, usually with the make, model and police report number. Anyone can search it. Everything in it comes from owners who chose to post there, so it only knows about thefts its users reported." }
      },
      {
        "@type": "Question",
        "name": "Is HotGunz enough to verify a firearm?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. HotGunz only holds guns its own users listed, and it gets no data from police. A gun can be reported stolen to police and never appear there. SafeOrStolen (safeorstolen.com/firearms-check) is a separate service: it searches police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, its own theft reports and public web results. Only police can run a serial through NCIC." }
      },
      {
        "@type": "Question",
        "name": "How do I search HotGunz?",
        "acceptedAnswer": { "@type": "Answer", "text": "Go to the HotGunz website and type the serial number into its search box. A match shows the owner's listing. No match only means nobody posted that serial there. For a second, separate check, SafeOrStolen (safeorstolen.com/firearms-check) searches police theft records from 33 states and DC plus live Ohio records in a few seconds." }
      },
      {
        "@type": "Question",
        "name": "Can I report my stolen gun on HotGunz?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. HotGunz lets owners list a stolen gun for free with the serial number, make, model and police report number. File the police report first, since that is what puts the gun into NCIC. You can also report it on SafeOrStolen at safeorstolen.com/report so it shows up when a buyer checks that serial there." }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HotGunz Database: What It Is and How to Search Stolen Firearms",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
    "datePublished": "2026-03-09",
    "dateModified": "2026-10-07",
    "mainEntityOfPage": "https://safeorstolen.com/blog/hotgunz-database-guide"
  };

  return (
    <>
      <PageSEO
        title="HotGunz Database: What It Is & How to Search It | SafeOrStolen"
        description="What the HotGunz stolen gun database is, how to search it, what it can miss, and which other checks to run on a serial number before you buy a used gun."
        canonical="/blog/hotgunz-database-guide"
        keywords="HotGunz, HotGunz database, stolen gun database, search stolen firearms, HotGunz stolen guns"
        structuredData={[faqSchema, articleSchema]}
      />
      <div className="min-h-screen bg-background pt-20">
        <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Firearms Database Guide</span>
            <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">HotGunz Database: What It Is and How to Search Stolen Firearms</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              HotGunz is a free website where gun owners post stolen firearms by serial number. It only knows about guns its users listed, so a clean result there tells you little. Here's what it does, what it can miss, and what else to check.
            </p>
            <p className="text-muted-foreground text-sm mt-3">Updated October 2026 · 5 min read</p>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <Link to="/firearms-check">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                Check a Gun Serial on SafeOrStolen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-3">Police theft records from 33 states and DC · 2 free checks</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 pb-16">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What is HotGunz?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HotGunz is a free, community-run website where gun owners list their stolen firearms by serial number. A listing usually includes the make and model, the police report number and a note about how the gun went missing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Anyone can search it. You type in a serial number and see whether someone has posted it. That makes it a quick first look before a private sale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It has limits you should know before you treat a clean result as an answer.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">HotGunz limitations: why one search isn't enough</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HotGunz only knows what its users tell it. Here's why that leaves gaps:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Reporting is voluntary:</strong> owners have to sign up and post the gun themselves. Most theft victims file a police report and stop there.</li>
              <li><strong className="text-foreground">No police feed:</strong> HotGunz doesn't get records from police departments, the ATF or the FBI. Every listing is user-submitted.</li>
              <li><strong className="text-foreground">Few people know about it:</strong> many gun owners have never heard of the site, so they never list their stolen guns there.</li>
              <li><strong className="text-foreground">No state records:</strong> it doesn't search state stolen-property records.</li>
            </ul>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
              <p className="text-foreground font-bold mb-2">Bottom line:</p>
              <p className="text-muted-foreground">A clean result on HotGunz does not mean a gun isn't stolen. It only means nobody posted that serial there. Run more than one check.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">HotGunz vs SafeOrStolen: what each one searches</h2>
            <ul className="space-y-3">
              {[
                { name: 'HotGunz', desc: 'stolen guns its own users chose to list on the site' },
                { name: 'SafeOrStolen', desc: 'police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, SafeOrStolen theft reports and public web results, plus a flag for serials that look altered or obliterated' },
                { name: 'NCIC (police only)', desc: 'the FBI stolen-gun file. Neither site can search it, so ask your local police non-emergency line to run the serial' },
                { name: 'ATF eTrace (police only)', desc: 'federal trace data, open only to law enforcement' },
              ].map(db => (
                <li key={db.name} className="flex gap-3 bg-card/50 border border-border rounded-xl p-4">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong className="text-foreground">{db.name}</strong><span className="text-muted-foreground"> — {db.desc}</span></div>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4">SafeOrStolen and HotGunz are separate services that search different records. A careful buyer checks both, and asks police to run the serial when the price or the story seems off.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">How to report a stolen gun</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">If your gun was stolen, report it in these places:</p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Local police department</strong> — file a report right away. Police enter the serial into NCIC.</li>
              <li><strong className="text-foreground">HotGunz</strong> — list the serial number, make, model and police report number on the site.</li>
              <li><strong className="text-foreground">SafeOrStolen</strong> — report it at safeorstolen.com/report so it shows up when a buyer checks that serial with us.</li>
              <li><strong className="text-foreground">Your insurance company</strong> — file a theft claim if your policy covers the gun.</li>
              <li><strong className="text-foreground">ATF</strong> — licensed dealers must report thefts to the ATF.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What is HotGunz?</summary>
                <p className="text-muted-foreground mt-2">A free, community-run website where gun owners list stolen firearms by serial number. Anyone can search it, and anyone can post a stolen gun.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is HotGunz enough to verify a firearm?</summary>
                <p className="text-muted-foreground mt-2">No. It only holds what its users posted and gets no police data. A clean result doesn't mean the gun isn't stolen. For the closest thing to a definitive check, ask your local police non-emergency line to run the serial through NCIC.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Does SafeOrStolen search HotGunz?</summary>
                <p className="text-muted-foreground mt-2">No, they are separate services. SafeOrStolen searches police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, its own theft reports and public web results. Search HotGunz on its own site.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Can I report my stolen gun on HotGunz?</summary>
                <p className="text-muted-foreground mt-2">Yes, for free on the HotGunz site. Also report it to police (which puts it into NCIC), to SafeOrStolen and to your insurance company.</p>
              </details>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Guides</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog/how-to-check-if-gun-is-stolen" className="text-primary hover:underline font-medium">How to Check if a Gun is Stolen</Link>
              <Link to="/blog/atf-gun-serial-number-check" className="text-primary hover:underline font-medium">ATF Serial Number Check</Link>
              <Link to="/blog/state-stolen-gun-database-guide" className="text-primary hover:underline font-medium">State-by-State Guide</Link>
              <Link to="/firearms-check" className="text-primary hover:underline font-medium">Gun Serial Lookup</Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default HotGunzDatabaseGuide;
