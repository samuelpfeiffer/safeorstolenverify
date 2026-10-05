import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { BulkVerification } from '@/components/premium/BulkVerification';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';

// Oct 5 2026: bulk serial checking for pawn shops, gun dealers and resellers. The checks go
// through /verify-api like any other, so the account's plan decides what runs.
const FAQS: { q: string; a: string }[] = [
  { q: 'Can I check a list of serial numbers at once?', a: 'Yes. Paste up to 100 serial numbers, or upload a spreadsheet, and SafeOrStolen checks them all and gives you a downloadable results file with the date and time of every check.' },
  { q: 'Does it work for guns?', a: 'Yes. Choose Guns, or put "gun" in a type column, and each serial is searched against police firearm theft and loss reports from 34 states, live Ohio law-enforcement records and SafeOrStolen theft reports.' },
  { q: 'What plan do I need?', a: 'Bulk checking is built for the $14.99/month plan, which includes unlimited serial, gun and vehicle checks and 20 phone blacklist checks a month. Every account gets 2 free checks to try it.' },
  { q: 'Is the results file a record of my due diligence?', a: 'It lists each item, the result, the sources searched and the exact time of the check, and every check is also saved to your account. For a shareable record of a single item, add a verification certificate, included free on the monthly plan.' },
];

export default function BulkCheckPage() {
  const { user } = useAuth();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <PageSEO
        title="Bulk Serial Number Check for Pawn Shops & Gun Dealers | SafeOrStolen"
        description="Check up to 100 serial numbers, gun serials, IMEIs or VINs at once against stolen reports. Paste a list or upload a spreadsheet and download a dated results file."
        canonical="/bulk-check"
        structuredData={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-4 pt-24 pb-10 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">For pawn shops, gun dealers and resellers</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Bulk Serial Number Check</h1>
            <p className="text-lg text-muted-foreground">
              Check up to 100 items at once: gun serials, phone IMEIs, VINs and any other serial number. Paste a list or
              upload a spreadsheet, then download a dated results file for your records.
            </p>
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="max-w-3xl mx-auto">
            {user ? (
              <BulkVerification />
            ) : (
              <div className="rounded-2xl border border-border bg-card p-6 text-center space-y-4">
                <p className="font-semibold">Sign in to run a bulk check</p>
                <p className="text-sm text-muted-foreground">
                  Bulk checks are saved to your account so you keep a record of every item. New accounts get 2 free checks.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button asChild><Link to="/auth?redirect=/bulk-check">Sign in or create an account</Link></Button>
                  <Button asChild variant="outline"><Link to="/pricing">See the $14.99/month plan</Link></Button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold mb-2">Questions</h2>
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-bold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
            <p className="text-sm text-muted-foreground pt-2">
              <Link to="/for-pawn-shops" className="text-primary hover:underline">SafeOrStolen for pawn shops</Link>
              {' · '}
              <Link to="/stolen-gun-statistics" className="text-primary hover:underline">Stolen gun statistics</Link>
              {' · '}
              <Link to="/firearms-check" className="text-primary hover:underline">Single gun serial lookup</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
