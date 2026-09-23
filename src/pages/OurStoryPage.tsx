import React, { useEffect, useState } from 'react';
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
 I have a criminal record. Multiple felonies, prison time, and a trail of mistakes that
 spans the better part of two decades. I'm not going to explain it away or dress it up.
 It is real, it is mine, and I own every line of it.
 </p>
 <p>What I'm going to tell you is the story of what happened next.</p>
 </>
 ),
 },
 {
 id: 'where-i-started',
 title: 'Where I Started',
 body: (
 <>
 <p>
 I was raised in a home built on faith. In 1991, my family — my father Edward, my mother
 Patricia, my sister April, and I — began seven years of missionary work across seven
 countries. We carried Bibles, built relationships, and served communities on multiple
 continents. Those years formed the bedrock of who I was supposed to become.
 </p>
 <p>
 When I came home, I lost my way. The years between 2006 and 2020 hold the record of that
 loss — controlled substances, theft, and choices that put me in prison more than once. I
 have completed every sentence, every day of community custody, every fine. But I won't
 pretend the record isn't there. What I will say is that for a long time, the gap between
 the boy who crossed oceans to serve others and the man whose name appeared in court
 documents felt impossible to bridge.
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
 Glen Thomure was a disabled man with a generous heart. Someone he trusted handed him a
 tablet as collateral — a gesture he accepted in good faith. He had no way of knowing it
 was stolen. When law enforcement ran the serial number, Glen was arrested, booked, and
 charged. He lost his home. He lost his car. His relationship collapsed. His savings
 vanished into legal costs.
 </p>
 <p>
 Glen died in a nursing home in Shelton, Washington, having never recovered from the
 cascading consequences of that single moment.
 </p>
 <p>
 He was not a criminal. He was a victim of a gap in the system — a world where ordinary
 people have no fast, reliable way to verify whether something is stolen before they
 accept it, buy it, or sell it. There was no tool. There was no check. There was just a
 record with his name on it and a life that unraveled from there.
 </p>
 <p>
 I knew that world. I had lived on both sides of it. And the weight of Glen's story
 settled on me in a way I couldn't set down.
 </p>
 </>
 ),
 },
 {
 id: 'crime-lesson',
 title: "What Glen's Story Taught Me About Crime",
 body: (
 <>
 <p>Glen's situation isn't rare. It's the rule.</p>
 <p>
 Every stolen item that enters the secondhand market doesn't just hurt the original
 victim — it creates new ones. Buyers defrauded. Innocent people like Glen swept into
 legal consequences they never saw coming. Families destabilized. Neighborhoods where
 trust erodes because no one can tell what's legitimate anymore. The stolen goods economy
 is not a victimless undercurrent of the resale market. It is a chain of harm that keeps
 producing new casualties long after the original theft.
 </p>
 <p>
 I knew that too, from experience. I had been part of that chain. And I finally understood
 that the most meaningful thing I could do with that knowledge was break it.
 </p>
 <p>
 SafeOrStolen exists to interrupt that cycle — not just to protect individual
 transactions, but to reduce the volume of crime that feeds off an unverified market in
 the first place. When people can check before they buy, sellers of stolen goods lose
 their market. When our theft reporting system is connected directly to the consumer's
 fingertips, the pipeline that moves stolen property from crime scenes into living rooms
 gets narrower. Safer transactions mean safer communities. That is the mission, and it is
 bigger than any one app.
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
 I founded SafeOrStolen in 2017 — not as a business plan, but as an answer to a question
 no one had built a solution for yet: What if anyone could verify, in seconds, whether
 something was stolen before they touched it?
 </p>
 <p>
 I spent four years learning to build it properly, through an intensive mentorship under
 Brian Haung, founder of CaSoft Seattle, who taught me web development, product
 architecture, and what it actually takes to build software that works. I incorporated
 the company in Arizona in 2025, and launched the live platform with a mission to
 provide real-time legitimacy
 verification for secondhand merchandise across U.S. and international markets.
 </p>
 <p>
 The platform is real. Users scan IMEI numbers, VIN numbers, serial numbers, and license
 plates to check items against SafeOrStolen's reports, public web results, and AI analysis —,
 and specialized data for bicycles and firearms — covering smartphones,
 laptops, vehicles, firearms, bicycles, jewelry, and electronics. The system returns a
 result in seconds. Safe or Stolen. That simple.
 </p>
 <p>
 The global secondhand market is projected to reach $367 billion by 2029. Organized
 retail crime alone costs the economy $70 billion every year. Behind every one of those
 billions is a real person, a real loss, and a transaction that didn't have to go wrong.
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
 Most people who fight crime do it from the outside looking in. They read reports, they
 study statistics, they build features based on what they imagine the problem looks like.
 </p>
 <p>I built SafeOrStolen from inside the wreckage.</p>
 <p>
 I understand how stolen property moves. I know how easily someone without resources —
 someone exactly like Glen — can become entangled in it through no fault of their own. I
 know the human cost, because I have personally contributed to it and personally
 witnessed its aftermath. That knowledge isn't abstract for me. It is the entire reason
 this platform exists.
 </p>
 <p>
 The irony is not lost on me. A man once convicted of possessing stolen property is now
 building the tool designed to stop that from happening to others. That is not a
 contradiction I run from. It is the most honest thing I have ever done with my life.
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
 I am the Founder, CEO, and technical lead of SafeOrStolen.com. I am based in Peoria,
 Arizona. I am a Christian, a father, and a person who has buried people he loved — my
 father, my brother Matt, my friend Glen, and most recently my sister April, whose memory
 is woven into everything I'm still reaching for.
 </p>
 <p>
 My background check is public. I have acknowledged it transparently and I am actively
 addressing every outstanding matter with full accountability. Transparency is not a
 marketing line for me — it is literally the product I sell and the standard I hold
 myself to.
 </p>
 <p>
 Our long-term vision is a world where verifying secondhand goods is as normal as
 checking the weather — routine, instant, and universally trusted. A world where the
 Glen Thomures of this country don't lose everything because a tool like this didn't
 exist in time.
 </p>
 <p>
 We are building that world. We are targeting 350,000 to 500,000 users in year one, over
 one million globally by year two, and we are actively seeking $500,000 in growth funding
 to accelerate product development, expand our reach, and deepen our law enforcement
 partnerships.
 </p>
 <p>
 Glen Thomure lost everything because this tool didn't exist. I've spent years building
 it. I will spend the rest of my working life making sure his story doesn't become
 anyone else's.
 </p>
 <p className="font-semibold">That's who I am now. And I'm just getting started.</p>
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
 name: "Our Story — Founder's Note | SafeOrStolen",
 description:
 "From the wrong side of the record to building SafeOrStolen — Samuel Edward Joseph Pfeiffer's founder's note on accountability, loss, and the platform he was meant to build.",
 url: 'https://safeorstolen.com/our-story',
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
 title="Our Story — A Founder's Note | SafeOrStolen"
 description="Samuel Edward Joseph Pfeiffer's founder's note on accountability, loss, and the platform he was meant to build. The story behind SafeOrStolen."
 keywords="SafeOrStolen story, founder story, Samuel Pfeiffer, Glen Thomure, stolen goods, redemption, AI verification, Peoria Arizona"
 canonical="/our-story"
 structuredData={structuredData}
 />

 {/* Scroll progress indicator */}
 <div
 className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60] pointer-events-none"
 aria-hidden="true"
 >
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
 <p className="text-base md:text-lg text-muted-foreground italic">
 A founder's note on accountability, loss, and the platform I was meant to build.
 </p>
 </div>
 </section>

 {/* Section jump nav (TOC) */}
 <nav
 aria-label="Story sections"
 className="sticky top-16 z-30 bg-background/85 backdrop-blur border-b border-border"
 >
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
 <Accordion
 type="multiple"
 defaultValue={defaultOpen}
 className="w-full"
 >
 {sections.map((s, i) => (
 <AccordionItem
 key={s.id}
 value={s.id}
 id={s.id}
 className="scroll-mt-32 border-border"
 >
 <AccordionTrigger className="text-left hover:no-underline py-5">
 <div className="flex items-start gap-3 pr-2">
 <span className="flex-shrink-0 text-xs font-mono text-primary mt-1 w-6">
 {String(i + 1).padStart(2, '0')}
 </span>
 <h2 className="text-lg md:text-2xl font-bold text-foreground leading-snug">
 {s.title}
 </h2>
 </div>
 </AccordionTrigger>
 <AccordionContent>
 <div className="space-y-4 text-foreground/90 leading-relaxed text-base md:text-lg pl-9">
 {s.body}
 </div>
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>

 <div className="border-t border-border mt-8 pt-6 flex items-start gap-3 text-sm text-muted-foreground italic">
 <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
 <p>
 Samuel Edward Joseph Pfeiffer is the Founder and CEO of SafeOrStolen.com, an
 AI-powered stolen-item verification platform incorporated in Arizona and
 integrated with law enforcement nationwide. The platform
 is live at{' '}
 <a href="https://safeorstolen.com" className="text-primary hover:underline">
 safeorstolen.com
 </a>
 .
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
