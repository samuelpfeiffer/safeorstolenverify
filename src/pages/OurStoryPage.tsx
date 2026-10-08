/**
 * Oct 7 2026: rewritten by hand for "SafeOrStolen founder story" / "why SafeOrStolen exists".
 * Kept the founder's own story as he wrote it, tightened. Removed market-size and crime-cost
 * figures, user targets and the funding ask, the "integrated with law enforcement nationwide"
 * claim (not true), "AI-powered"/"AI analysis" wording, and the outbound link.
 */
import React, { useEffect, useState } from 'react';
import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Shield, Heart, BookOpen } from 'lucide-react';

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    id: 'opening',
    title: 'Opening',
    body: (
      <>
        <p>
          I have a criminal record. Multiple felonies, prison time, and a trail of mistakes that covers the better part of two
          decades. I'm not going to explain it away or dress it up. It's real, it's mine, and I own every line of it.
        </p>
        <p>This is the story of what happened next, and why SafeOrStolen exists.</p>
      </>
    ),
  },
  {
    id: 'where-i-started',
    title: 'Where I Started',
    body: (
      <>
        <p>
          I was raised in a home built on faith. In 1991 my family, my father Edward, my mother Patricia, my sister April and I,
          began seven years of missionary work across seven countries. We carried Bibles, built friendships, and served
          communities on several continents. Those years were supposed to be the foundation of who I became.
        </p>
        <p>
          When I came home, I lost my way. The years between 2006 and 2020 hold the record of it: controlled substances, theft,
          and choices that put me in prison more than once. I've completed every sentence, every day of community custody, every
          fine. I won't pretend the record isn't there. For a long time the distance between the boy who crossed oceans to serve
          people and the man whose name was in court files felt too wide to cross.
        </p>
        <p>Then I met Glen.</p>
      </>
    ),
  },
  {
    id: 'glen',
    title: 'The Story That Changed Everything',
    body: (
      <>
        <p>
          Glen Thomure was a disabled man with a generous heart. Someone he trusted gave him a tablet as collateral, and he took
          it in good faith. He had no way of knowing it was stolen. When police ran the serial number, Glen was arrested, booked
          and charged. He lost his home. He lost his car. His relationship fell apart. His savings went to legal costs.
        </p>
        <p>
          Glen died in a nursing home in Shelton, Washington, without ever recovering from what followed that one moment.
        </p>
        <p>
          He wasn't a criminal. He was caught in a gap: ordinary people had no quick way to check whether something was stolen
          before they accepted it, bought it, or sold it. There was no check to run. There was just a record with his name on it.
        </p>
        <p>
          I knew that world. I'd lived on both sides of it. Glen's story settled on me, and I couldn't put it down.
        </p>
      </>
    ),
  },
  {
    id: 'crime-lesson',
    title: "What Glen's Story Taught Me About Stolen Goods",
    body: (
      <>
        <p>
          A stolen item that reaches the secondhand market doesn't stop at one victim. The buyer loses their money when police
          take it back. Someone like Glen ends up facing charges he never saw coming. Families take the hit. Trust between
          neighbors wears thin when nobody can tell what's legitimate.
        </p>
        <p>
          I'd been part of that chain. I finally understood that the most useful thing I could do with what I knew was help
          break it.
        </p>
        <p>
          SafeOrStolen is built on a simple idea: when buyers check before they pay, stolen goods get harder to sell. When an
          owner reports a theft on the site, the next person who checks that serial number sees it. Each check makes the market
          for stolen property a little smaller.
        </p>
      </>
    ),
  },
  {
    id: 'building',
    title: 'Building the Answer',
    body: (
      <>
        <p>
          I founded SafeOrStolen in 2017 to answer one question: what if anyone could find out, in a few seconds, whether
          something was reported stolen before they touched it?
        </p>
        <p>
          I spent four years learning to build it properly under the mentorship of Brian Haung, founder of CaSoft Seattle. I
          incorporated the company in Arizona in 2025 and launched the live site.
        </p>
        <p>
          Today you can enter a phone's IMEI, a car's VIN or plate, or the serial number on a gun, bike, laptop or tool. SafeOrStolen
          searches its own theft reports and public web results, plus police firearm theft records for guns, a national
          stolen-bicycle registry for bikes, and Arizona stolen-vehicle records for Arizona VINs and plates. The result tells you
          reported stolen, possible match, or no report found in the records searched, and lists every source. You can see the
          full list on the <Link to="/data-sources" className="text-primary hover:underline">data sources page</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'past-prepared',
    title: 'Why My Past Prepared Me for This',
    body: (
      <>
        <p>
          Most people who fight theft do it from the outside, reading reports and guessing what the problem looks like.
        </p>
        <p>I built SafeOrStolen from inside the wreckage.</p>
        <p>
          I know how stolen property moves. I know how easily someone without resources, someone exactly like Glen, can get
          tangled up in it through no fault of their own. I know the human cost because I contributed to it and then watched
          what it did. That isn't abstract for me. It's the reason this site exists.
        </p>
        <p>
          The irony isn't lost on me. A man once convicted of possessing stolen property is now building the check meant to stop
          that from happening to someone else. I don't run from that. It's the most honest thing I've done with my life.
        </p>
      </>
    ),
  },
  {
    id: 'today',
    title: 'Where I Stand Today',
    body: (
      <>
        <p>
          I'm the founder and CEO of SafeOrStolen. I live in Peoria, Arizona. I'm a Christian, a father, and someone who has
          buried people he loved: my father, my brother Matt, my friend Glen, and most recently my sister April, whose memory is
          in everything I'm still working toward.
        </p>
        <p>
          My background check is public. I've said so openly, and I'm dealing with every outstanding matter with full
          accountability. Being upfront isn't a slogan for me. It's what the product is supposed to do, and it's the standard I
          hold myself to.
        </p>
        <p>
          What I want is simple: checking a used item before you buy it should be as ordinary as checking the weather. Nobody
          should lose everything the way Glen did because a check didn't exist in time.
        </p>
        <p>
          Glen Thomure lost everything because this didn't exist. I've spent years building it, and I'll spend the rest of my
          working life making sure his story doesn't become anyone else's.
        </p>
        <p className="font-semibold">That's who I am now.</p>
      </>
    ),
  },
];

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (scrolled / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
};

const OurStoryPage: React.FC = () => {
  const isMobile = useIsMobile();
  const progress = useScrollProgress();

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Our Story: Why SafeOrStolen Exists',
      description:
        'SafeOrStolen founder Samuel Edward Joseph Pfeiffer on his record, his friend Glen Thomure, and why he built a way to check if an item is stolen before you buy it.',
      url: 'https://safeorstolen.com/our-story',
      dateModified: '2026-10-07',
      mainEntity: {
        '@type': 'Person',
        name: 'Samuel Edward Joseph Pfeiffer',
        jobTitle: 'Founder & CEO',
        worksFor: {
          '@type': 'Organization',
          name: 'SafeOrStolen',
          url: 'https://safeorstolen.com',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Peoria',
          addressRegion: 'AZ',
          addressCountry: 'US',
        },
      },
    },
  ];

  // On mobile collapse all but first; on desktop open everything.
  const defaultOpen = isMobile ? ['opening'] : sections.map((s) => s.id);

  return (
    <>
      <PageSEO
        title="Our Story: Why SafeOrStolen Exists"
        description="Founder Samuel Pfeiffer on his criminal record, his friend Glen Thomure, arrested over a stolen tablet he didn't know was stolen, and why he built SafeOrStolen."
        keywords="SafeOrStolen story, SafeOrStolen founder, Samuel Pfeiffer, Glen Thomure, who owns SafeOrStolen"
        canonical="/our-story"
        modifiedTime="2026-10-07"
        structuredData={structuredData}
      />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60] pointer-events-none" aria-hidden="true">
        <div
          className="h-full bg-primary transition-[width] duration-100 ease-out shadow-[0_0_8px_hsl(var(--primary))]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 pt-20 md:pt-24 pb-2 max-w-4xl">
          <BreadcrumbNavigation items={[{ name: 'Our Story', href: '/our-story' }]} />
        </div>

        {/* Hero */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary" className="px-3 py-1">
                <BookOpen className="h-4 w-4 mr-2" />
                Founder's Note
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Heart className="h-4 w-4 mr-2" />
                Accountability
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground leading-tight">
              From the Wrong Side of the Record
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              SafeOrStolen started because a friend of mine, Glen Thomure, was arrested over a tablet he didn't know was stolen. There
              was no way for him to check. This is the founder's note on why I built one.
            </p>
            <p className="text-xs text-muted-foreground mt-3">Updated October 7, 2026</p>
          </div>
        </section>

        {/* Section jump nav (TOC) */}
        <nav aria-label="Story sections" className="sticky top-16 z-30 bg-background/85 backdrop-blur border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex-shrink-0 text-xs md:text-sm px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <span className="text-primary font-semibold mr-1">{i + 1}.</span>
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Body */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="p-4 md:p-10">
              <Accordion type="multiple" defaultValue={defaultOpen} className="w-full">
                {sections.map((s, i) => (
                  <AccordionItem key={s.id} value={s.id} id={s.id} className="scroll-mt-32 border-border">
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <div className="flex items-start gap-3 pr-2">
                        <span className="flex-shrink-0 text-xs font-mono text-primary mt-1 w-6">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-lg md:text-2xl font-bold text-foreground leading-snug">{s.title}</h2>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-foreground/90 leading-relaxed text-base md:text-lg pl-9">{s.body}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="border-t border-border mt-8 pt-6 flex items-start gap-3 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p>
                  Samuel Edward Joseph Pfeiffer is the founder and CEO of SafeOrStolen, which checks whether phones, vehicles, guns,
                  bikes and serial-numbered items have been reported stolen. Read{' '}
                  <Link to="/about" className="text-primary hover:underline">what SafeOrStolen searches and what it costs</Link>, or
                  run a check from the <Link to="/" className="text-primary hover:underline">homepage</Link>.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurStoryPage;
