import React from 'react';

/**
 * Oct 18 2026: the three real reviews on SafeOrStolen's Trustpilot page, quoted word for word
 * (spelling lightly cleaned). Samuel confirmed Carrie is a friend, so her review carries a
 * disclosure, as the FTC requires for reviews from people connected to the business.
 * Trustpilot's own TrustScore is 4.0 from 3 reviews; show that number, not a rounded-up one.
 */
export const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/safeorstolen.com';

const REVIEWS = [
  {
    name: 'Kalighta R.',
    title: 'This is my favorite app by a landslide!',
    text: "I was really surprised at how easy this app was to use, and the results really are instant. I am part owner of a little pawn shop, so after discovering this app, I have to call it my absolute favorite. It makes my job a thousand times easier!",
    note: '',
  },
  {
    name: 'Lucille B.',
    title: 'I really enjoy this app',
    text: "I love to bargain hunt, I love going to auctions. I use this app all the time. It's really easy to navigate, plus they give you free searches. I recommend it to anybody working with used items, especially high-value, big-ticket items.",
    note: '',
  },
  {
    name: 'Carrie A.',
    title: 'Very helpful with some rings',
    text: 'They were very helpful with some rings I was thinking about buying. They put my mind at ease knowing I was buying something that was not stolen.',
    note: 'Friend of the founder',
  },
];

const Stars = () => (
  <span aria-label="5 out of 5 stars" className="text-[#00b67a] tracking-tight">★★★★★</span>
);

export const TrustpilotReviews: React.FC<{ heading?: string }> = ({ heading = 'What people say on Trustpilot' }) => (
  <section className="py-12 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Rated 4.0 out of 5 on Trustpilot from 3 reviews.{' '}
          <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            See them on Trustpilot
          </a>
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-xl border border-border bg-card p-5 flex flex-col">
            <Stars />
            <p className="font-semibold text-foreground mt-2">{r.title}</p>
            <blockquote className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">“{r.text}”</blockquote>
            <figcaption className="mt-3 text-xs text-muted-foreground">
              {r.name} · Trustpilot{r.note ? ` · ${r.note}` : ''}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default TrustpilotReviews;
