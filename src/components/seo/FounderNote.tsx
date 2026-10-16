import { Link } from '@/lib/router-compat';

// A short, first-person note from the founder, written by hand for each page.
// It ties the page to the real reason SafeOrStolen exists (Glen Thomure's story
// on /our-story) so the page carries first-hand experience, not just instructions.
export const FOUNDER_PERSON_SCHEMA = {
  '@type': 'Person',
  name: 'Samuel Pfeiffer',
  jobTitle: 'Founder and CEO, SafeOrStolen',
  url: 'https://safeorstolen.com/our-story',
};

interface FounderNoteProps {
  paragraphs: string[];
  heading?: string;
}

export const FounderNote = ({ paragraphs, heading = 'Why this check exists' }: FounderNoteProps) => (
  <section className="py-10 px-4" aria-labelledby="founder-note-heading">
    <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-8">
      <h2 id="founder-note-heading" className="text-xl md:text-2xl font-bold mb-4">
        {heading}
      </h2>
      {paragraphs.map((t, i) => (
        <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-4">
          {t}
        </p>
      ))}
      <p className="text-sm text-foreground font-semibold mt-2">
        Sam Pfeiffer, founder of SafeOrStolen, Peoria, Arizona
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        <Link to="/our-story" className="text-primary hover:underline">
          Read the full story
        </Link>
      </p>
    </div>
  </section>
);
