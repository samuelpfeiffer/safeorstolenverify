import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { AuthorByline, PrimarySources } from '@/components/seo/AuthorByline';

export default function GuitarSerialCheckGuide() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <PageSEO
        title="Check if a Guitar Is Stolen by Serial Number"
        description="How to check a used guitar before a Craigslist or Marketplace meetup: read the serial, run it, and know what a match means. 2 free checks."
        canonical="/blog/check-if-guitar-stolen"
      />
      <article className="container mx-auto max-w-3xl px-4 space-y-8">
        <header className="space-y-3">
          <AuthorByline />
          <h1 className="text-4xl font-black">How to check if a guitar is stolen before you buy it</h1>
          <p className="text-lg text-muted-foreground">
            To check if a used guitar is stolen, read the serial from the headstock or neck plate and enter it at safeorstolen.com/serial-number-checker. The check searches SafeOrStolen theft reports and public web results and lists every source. Meet in a public place, pay only after the check, and walk away if the serial does not match the guitar. The first 2 checks are free.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Where is the serial number on a guitar?</h2>
          <p className="text-muted-foreground">On most electric guitars the serial is on the back of the headstock or on the neck plate. On acoustics it is often inside the sound hole or on the neck block. Write every character. A listing that will not show the serial is a reason to pass.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">What should you do at a Craigslist meetup?</h2>
          <p className="text-muted-foreground">Meet in a busy public place. Check the serial before you hand over cash. Compare the serial, brand, and model on the guitar with the result. If the result shows a theft report, do not buy and do not confront the seller. Leave and give the listing to local police on the non-emergency line.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">What does a clean result mean?</h2>
          <p className="text-muted-foreground">No record found means that serial was not in the sources searched. It is not proof the guitar was never stolen. Use the check with the serial, the seller's ID, and your own look at the instrument.</p>
        </section>

        <PrimarySources />
        <Link to="/verify" className="inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground">Check a serial</Link>
      </article>
    </main>
  );
}
