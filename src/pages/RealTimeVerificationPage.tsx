/**
 * Oct 7 2026: rewritten by hand for "real-time stolen check" / "how up to date is a stolen item
 * check". This page's job is to say honestly how current each source is (live, twice a day,
 * historical) and how to use a check in the moment at a meetup. The full buyer's checklist is at
 * /how-to-verify-a-used-item. Removed false claims: "servers on 6 continents", "under 500ms",
 * "direct connections to law enforcement and carriers", "database updates sync every 15 minutes",
 * "integrated into marketplace checkout", "<3s average", "24/7", the "34 states" gun figure (it is
 * 33 states plus DC) and emoji result labels.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';

const FRESHNESS: { source: string; usedFor: string; howCurrent: string }[] = [
 {
 source: 'SafeOrStolen theft reports',
 usedFor: 'Every check',
 howCurrent: 'Live. A report an owner files is searchable by the next person who checks that number.',
 },
 {
 source: 'Public web results',
 usedFor: 'Every check',
 howCurrent: 'Searched at the moment you run the check, so new listings and posts that mention the number can show up.',
 },
 {
 source: 'Ohio law-enforcement records',
 usedFor: 'Gun checks',
 howCurrent: 'Live.',
 },
 {
 source: 'Arizona law-enforcement stolen-vehicle records',
 usedFor: 'Arizona VINs and plates',
 howCurrent: 'Updated twice a day.',
 },
 {
 source: 'Police firearm theft and loss reports (242,839 reports, 33 states and Washington, DC)',
 usedFor: 'Gun checks',
 howCurrent: 'Historical. Filed through 2017; the years covered vary by state. Good for older thefts, not for a gun stolen last month.',
 },
 {
 source: 'National stolen-bicycle registry',
 usedFor: 'Bike checks',
 howCurrent: 'Searched when you run the check. Only as current as owners keep their reports.',
 },
 {
 source: 'Lost/stolen carrier blacklist',
 usedFor: 'Paid phone checks',
 howCurrent: 'Searched when you run the check.',
 },
];

const FAQS: { question: string; answer: string }[] = [
 {
 question: 'Is a stolen item check done in real time?',
 answer:
 'Yes. When you run a check on SafeOrStolen (safeorstolen.com/real-time-verification), the sources are searched at that moment and the result comes back in a few seconds. How current each source is varies: SafeOrStolen theft reports and Ohio law-enforcement gun records are live, Arizona stolen-vehicle records update twice a day, and the multi-state police gun dataset is historical: filed through 2017, with the years covered varying by state.',
 },
 {
 question: 'How soon does a stolen item show up after it is reported?',
 answer:
 'It depends where the owner reported it. A theft reported on SafeOrStolen is searchable right away. An Arizona vehicle theft entered by police shows up within the twice-daily update. A theft reported only to a local police department, and nowhere public, may never appear in any check the public can run. That is why a no-match result is not proof an item is clean.',
 },
 {
 question: 'Can I check if something is stolen while I am meeting the seller?',
 answer:
 'Yes. Open safeorstolen.com on your phone, or the free web app at safeorstolen.com/app, read the serial number, IMEI or VIN off the item, and type it in. The result takes a few seconds. Do it before any money changes hands, and check the number on the item itself, not the one the seller texted you.',
 },
 {
 question: 'Why run the check again at the meetup if I already checked the listing?',
 answer:
 'Two reasons. The item in front of you may not be the one in the photo: sellers sometimes send a clean serial from another unit. And new reports keep coming in, so a check from three days ago can be out of date. Re-checking the number on the actual item takes a few seconds and uses one check.',
 },
 {
 question: 'Does a real-time check include Apple Activation Lock or carrier status?',
 answer:
 'Activation Lock and Google account locks are not searched by any SafeOrStolen check; have the seller sign out of their account in front of you. The lost/stolen carrier blacklist is searched on a paid phone check, either a $0.99 single check or one of the 20 included each month on the $10 monthly plan.',
 },
];

const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: FAQS.map((f) => ({
 '@type': 'Question',
 name: f.question,
 acceptedAnswer: { '@type': 'Answer', text: f.answer },
 })),
};

export default function RealTimeVerificationPage() {
 return (
 <>
 <PageSEO
 title="Real-Time Stolen Item Check: How Current Each Source Is"
 description="A SafeOrStolen check searches its sources the moment you run it. See which records are live, which update twice a day, which are historical, and how to check at a meetup."
 keywords="real-time stolen check, real time stolen item check, live stolen item database, check if stolen at meetup, how up to date is a stolen check"
 canonical="/real-time-verification"
 modifiedTime="2026-10-07"
 structuredData={faqSchema}
 />
 <div className="min-h-screen bg-background pt-20">
 <article className="container mx-auto px-4 py-16 max-w-4xl">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">Real-Time Stolen Item Check</h1>
 <p className="text-sm text-muted-foreground mb-6">
 Updated <time dateTime="2026-10-07">October 7, 2026</time>
 </p>
 <p className="text-lg mb-4">
 A SafeOrStolen check searches its sources at the moment you run it and answers in a few
 seconds, so you can check an item while you're standing next to it. Not every source is equally
 fresh: SafeOrStolen theft reports and Ohio gun records are live, Arizona stolen-vehicle records
 update twice a day, and the multi-state police gun dataset is historical.
 </p>
 <p className="text-muted-foreground mb-8">
 Knowing which is which tells you how much weight to give a no-match result.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">How current each source is</h2>
 <div className="overflow-x-auto mb-6">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border">Source</th>
 <th className="text-left p-3 border-b border-border">Used for</th>
 <th className="text-left p-3 border-b border-border">How current</th>
 </tr>
 </thead>
 <tbody>
 {FRESHNESS.map((r) => (
 <tr key={r.source} className="align-top">
 <td className="p-3 border-b border-border font-semibold">{r.source}</td>
 <td className="p-3 border-b border-border">{r.usedFor}</td>
 <td className="p-3 border-b border-border">{r.howCurrent}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">What "real time" can't fix</h2>
 <p className="text-muted-foreground mb-4">
 A check can only find a theft someone reported, with the number, somewhere it can search. If an
 owner told their local police but never wrote down the serial, there's nothing to match. If a
 phone was taken this morning, the owner may not have reported it yet. A fast search of an empty
 record is still empty. So use the result alongside what you can see: the number on the item
 matches the listing, the label hasn't been tampered with, and the seller can unlock or sign out
 of the device.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">Checking at the meetup, in the moment</h2>
 <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
 <li>Before you go, open the <Link to="/app" className="text-primary underline">web app</Link> or safeorstolen.com on your phone and sign in, so you aren't creating an account in a parking lot.</li>
 <li>At the meetup, read the number off the item yourself: dial *#06# on a phone, look at the driver's side of the windshield for a VIN, turn a bike over for the frame serial.</li>
 <li>Type it in and wait for the result, a few seconds. Read the sources listed.</li>
 <li>If it says "reported stolen" or "possible match", don't pay. Say it's not for you and leave.</li>
 <li>If it says "no report found", finish your other checks, then pay.</li>
 </ol>
 <p className="text-muted-foreground mb-4">
 For the full routine from listing to handover, read{' '}
 <Link to="/how-to-verify-a-used-item" className="text-primary underline">how to verify a used item</Link>.
 For everything a check searches, see <Link to="/how-it-works" className="text-primary underline">how it works</Link>.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Questions people ask</h2>
 <div className="space-y-6">
 {FAQS.map((f) => (
 <div key={f.question}>
 <h3 className="font-semibold text-lg text-foreground mb-1">{f.question}</h3>
 <p className="text-muted-foreground">{f.answer}</p>
 </div>
 ))}
 </div>

 <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
 <h2 className="text-2xl font-bold mb-2">Check a number now</h2>
 <p className="text-muted-foreground mb-4">2 free checks with a free account. No credit card.</p>
 <Button size="lg" asChild>
 <Link to="/verify">
 Check an item <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 </div>
 </article>
 </div>
 </>
 );
}
