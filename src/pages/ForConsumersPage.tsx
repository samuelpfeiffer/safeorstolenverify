/**
 * Oct 7 2026: rewritten by hand for "how to avoid buying stolen goods" / "stolen item check for
 * consumers". This is the hub for individuals: buying used, selling your own things, and what to do
 * if yours was stolen, with links to the item pages. The buyer's step-by-step lives at
 * /how-to-verify-a-used-item. Removed: "average loss $500-$5,000", "3-second results", "AI
 * analysis", "insurance won't cover stolen property claims", "zero legal recourse", the "34 states"
 * gun figure, a "PWA app with barcode scanning", "Download Mobile App" wording (it is a web app),
 * "buy with confidence knowing the item is clean", and the duplicated noscript copy.
 */
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from '@/components/ui/accordion';

const ITEMS: { title: string; text: string; link: string }[] = [
 { title: 'Used phone', text: 'Check the IMEI (dial *#06#). A paid check adds the carrier blacklist. Watch the seller sign out of their Apple ID or Google account.', link: '/imei-checker' },
 { title: 'Used car or motorcycle', text: 'Check the VIN from the windshield and door jamb. You also get the year, make, model and open recalls. Read the title against the seller\'s ID.', link: '/vin-checker' },
 { title: 'Laptop', text: 'Check the serial from the bottom label and the About screen. Make sure Find My or the Microsoft account is removed.', link: '/check-laptop-stolen' },
 { title: 'Bike or e-bike', text: 'Check the frame serial under the bottom bracket. Bike checks include a national stolen-bicycle registry.', link: '/check-bike' },
 { title: 'Game console', text: 'Check the serial on the console sticker and in the system settings, and have the seller sign out.', link: '/check-gaming-console-stolen' },
 { title: 'Power tools', text: 'Check the nameplate serial on the tool and each battery. Walk away from scrubbed nameplates.', link: '/check-tools' },
];

const consumerFaqs: { question: string; answer: string }[] = [
 {
 question: 'How do I avoid buying stolen goods?',
 answer:
 'Get the item\'s serial number, IMEI or VIN from the seller as a photo and check it on SafeOrStolen (safeorstolen.com/for-consumers) before you meet. At the meetup, read the number off the item and make sure it matches. Have the seller sign out of any account on the device. Walk away from scratched-off serials, prices far below market and sellers in a hurry.',
 },
 {
 question: 'What happens if I buy something that turns out to be stolen?',
 answer:
 'Police can take the item and return it to the owner, and you usually lose what you paid unless you can recover it from the seller or your payment provider. Laws on receiving stolen property generally turn on whether you knew or should have known. A dated receipt with the serial number, the listing, your messages and a record of your check show you bought in good faith.',
 },
 {
 question: 'How much does SafeOrStolen cost?',
 answer:
 'A free account comes with 2 checks and no credit card. After that, a single check is $0.99, or unlimited checks are $10 a month with up to 20 phone blacklist checks, cancel anytime, and a 30-day refund. An optional $1.99 verification certificate gives you a dated record with its own link; it is free for monthly members.',
 },
 {
 question: 'I am selling something. How can I show the buyer it is not stolen?',
 answer:
 'Run a check on your own item, then add a $1.99 verification certificate: a dated record with its own link that shows the item was checked. Put the link in your listing or send it to the buyer. Also keep the original receipt or box with the serial number on it. Those two together answer most buyers\' questions before they ask.',
 },
 {
 question: 'My phone, bike or laptop was stolen. What should I do?',
 answer:
 'File a police report and give them the serial number, IMEI or VIN. Mark the device as lost in Find My or Google Find My Device, and call your carrier to blacklist a phone. Then report it free on SafeOrStolen at safeorstolen.com/report-stolen, so anyone who checks that number before buying sees your report.',
 },
 {
 question: 'Is there a SafeOrStolen app?',
 answer:
 'Yes, a free installable web app at safeorstolen.com/app. Open it in your phone\'s browser and add it to your home screen, and it opens like an app so you can check a number at a meetup. It is not in the App Store or Google Play, and you don\'t need one: it runs the same checks as the website.',
 },
];

const ForConsumersPage = () => {
 const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: consumerFaqs.map((faq) => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: { '@type': 'Answer', text: faq.answer },
 })),
 };

 const breadcrumbSchema = {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: [
 { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com' },
 { '@type': 'ListItem', position: 2, name: 'For Consumers', item: 'https://safeorstolen.com/for-consumers' },
 ],
 };

 return (
 <>
 <PageSEO
 title="How to Avoid Buying Stolen Goods: A Guide for Consumers"
 description="How to avoid buying stolen goods on Marketplace, OfferUp or Craigslist, how to show buyers your item isn't stolen, and what to do if yours was stolen. 2 free checks."
 keywords="how to avoid buying stolen goods, buying used items safely, stolen item check for consumers, avoid stolen goods marketplace, prove item is not stolen, report stolen item"
 canonical="/for-consumers"
 modifiedTime="2026-10-07"
 structuredData={[faqSchema, breadcrumbSchema]}
 />

 <div className="min-h-screen bg-background pt-20">
 <article className="container mx-auto px-4 py-16 max-w-4xl">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Avoid Buying Stolen Goods</h1>
 <p className="text-sm text-muted-foreground mb-6">
 Updated <time dateTime="2026-10-07">October 7, 2026</time>
 </p>
 <p className="text-lg mb-4">
 Before you pay for anything used, get its serial number, IMEI or VIN and check it on
 SafeOrStolen, make sure the number on the item matches the listing, and have the seller sign out
 of any account on it. Those three steps catch most stolen items. Your first 2 checks are free.
 </p>
 <p className="text-muted-foreground mb-6">
 This page covers the three times it matters to you: buying used, selling your own things, and
 when something of yours gets stolen.
 </p>
 <div className="flex flex-col sm:flex-row gap-3 mb-12">
 <Button asChild size="lg">
 <Link to="/check-if-stolen">Check an item</Link>
 </Button>
 <Button asChild variant="outline" size="lg">
 <Link to="/app">Get the free web app</Link>
 </Button>
 </div>

 <h2 className="text-2xl md:text-3xl font-bold mb-4">When you're buying</h2>
 <p className="text-muted-foreground mb-6">
 Each kind of item has a number to check and one thing to confirm in person. The full routine,
 from reading the listing to writing the receipt, is in{' '}
 <Link to="/how-to-verify-a-used-item" className="text-primary underline">how to verify a used item</Link>.
 </p>
 <div className="grid md:grid-cols-2 gap-4 mb-8">
 {ITEMS.map((i) => (
 <Link key={i.link} to={i.link} className="block rounded-xl border border-border p-5 hover:border-primary transition-colors">
 <h3 className="font-semibold text-lg mb-1">{i.title}</h3>
 <p className="text-sm text-muted-foreground">{i.text}</p>
 </Link>
 ))}
 </div>

 <h3 className="text-xl font-bold mb-3">Warning signs in a listing or at a meetup</h3>
 <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-8">
 <li>The seller won't send a photo of the serial number, IMEI or VIN before you meet</li>
 <li>The serial label is scratched, painted over, cut or covered with a new sticker</li>
 <li>The number on the item is different from the one in the photo</li>
 <li>A phone or laptop still signed in to an account the seller "will remove later"</li>
 <li>A price far below what the same thing sells for used, with a reason to sell today</li>
 <li>Several of the same new-looking item, no box, no receipt, cash only</li>
 </ul>

 <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">When you're selling</h2>
 <p className="text-muted-foreground mb-8">
 Buyers who have read this page will ask you for the serial number. Send a clear photo of it
 with the listing. If you want to go further, check your own item and add a $1.99 verification
 certificate, a dated record with its own link, and put the link in the listing. Signing out of
 your accounts and resetting the device before the buyer arrives saves everyone time. More on this
 for <Link to="/for-sellers" className="text-primary underline">sellers</Link>.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">When something of yours is stolen</h2>
 <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
 <li>Find the serial number, IMEI or VIN: on the box, the receipt, your Apple or Google account's device list, or your insurance paperwork.</li>
 <li>File a police report and make sure that number is written into it.</li>
 <li>For a phone, call your carrier to blacklist it and mark it lost in Find My or Find My Device.</li>
 <li><Link to="/report-stolen" className="text-primary underline">Report it on SafeOrStolen</Link>. It's free, and anyone who checks that number before buying sees your report.</li>
 <li>Search local listings for your item. If you find it, give the listing to the police rather than meeting the seller yourself.</li>
 </ol>
 <p className="text-muted-foreground mb-8">
 Write down the serial numbers of things you own now, while you still have them. Owners who can't
 give a number are the main reason stolen items never turn up in any check.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">What it costs</h2>
 <p className="text-muted-foreground mb-8">
 2 free checks with a free account, no credit card. Then $0.99 for a single check, or $10 a
 month for unlimited checks, cancel anytime, with a 30-day refund on the monthly plan. See{' '}
 <Link to="/pricing" className="text-primary underline">pricing</Link>.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Questions people ask</h2>
 <Accordion type="single" collapsible className="space-y-4">
 {consumerFaqs.map((faq, index) => (
 <AccordionItem key={index} value={`faq-${index}`} className="bg-card px-6 rounded-lg">
 <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
 <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </article>
 </div>
 </>
 );
};

export default ForConsumersPage;
