import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { HelpCircle, Shield, Clock, Database } from 'lucide-react';

const categories = [
  {
    title: 'How It Works', icon: HelpCircle, faqs: [
      { question: 'How do I check if something is stolen?', answer: "Enter the item's IMEI, VIN, plate, or serial number and review the result. Your first check is free. Every check searches SafeOrStolen's own theft reports and public web results. Gun checks also search police theft and loss reports from 33 states and DC plus live Ohio records, bike checks a national stolen-bicycle registry, and Arizona VINs and plates Arizona, Alaska and Chicago police stolen-vehicle records." },
      { question: 'What items can I verify?', answer: 'SafeOrStolen supports phones, vehicles, license plates, serial-numbered electronics and power tools, firearms, and bicycles.' },
      { question: 'Which police records does SafeOrStolen search?', answer: 'Gun checks search more than 220,000 police firearm theft and loss reports from 33 states and DC (filed 1973–2017) and live Ohio law-enforcement stolen-gun records. Arizona VINs and plates are searched against Arizona, Alaska and Chicago police stolen-vehicle records. Bike checks add a national stolen-bicycle registry, and a paid phone check searches the lost and stolen phone blacklist. Our item guides explain the next steps for each item.' },
      { question: 'How long does a check take?', answer: 'Most results come back in a few seconds, although network and source response times can vary.' },
      { question: 'Do I need an account?', answer: 'No. Your first check is free with no account and no credit card. After that, a check is $0.99, or $10 a month for unlimited checks. A free account saves each check with the date so you can find it later.' },
    ],
  },
  {
    title: 'Results and Records', icon: Clock, faqs: [
      { question: 'What do the result labels mean?', answer: 'Reported stolen means a source holds a theft report for that identifier. Possible match means something close was found and you should look at the details. No report found in the records searched means none of the listed sources had a report; every result lists the sources it searched.' },
      { question: 'What should I do after a no report found result?', answer: 'Before you pay, also ask for proof of ownership. Match the identifier on the physical item, review the seller’s records, and follow the item-specific steps in our guides.' },
      { question: 'What should I do if an item is shown as stolen?', answer: 'Do not buy, transfer, reset, or resell it. Preserve the listing, messages, identifier, and payment record, then contact local police and the marketplace.' },
      { question: 'What is a Proof of Clean Purchase?', answer: 'It is a dated record of a clean SafeOrStolen check, with its own link, that buyers and sellers can share. The verification certificate costs $1.99 and is free for monthly members. It is not a title, guarantee of ownership, or legal document.' },
      { question: 'What if I think a result is wrong?', answer: 'Email safeorstolenmail@gmail.com with the identifier and any documents you have so the result can be reviewed.' },
    ],
  },
  {
    title: 'Sources and Item Checks', icon: Database, faqs: [
      { question: 'How should I check a used phone?', answer: 'Match the IMEI, ask the original carrier about network and finance status, remove Apple or Google account locks, and test the phone. SafeOrStolen shows the make and model from the IMEI, and offers a paid carrier blacklist check (up to 20 a month for monthly members).' },
      { question: 'How should I check a vehicle?', answer: 'Match the VIN in every location and on the title, run it on SafeOrStolen (which decodes the VIN, lists open recalls, and checks Arizona law-enforcement records for Arizona VINs), then get a vehicle history report using the NICB and NMVTIS resources described in our vehicle guide.' },
      { question: 'How should I check a firearm?', answer: 'Run the serial on SafeOrStolen, which searches police theft and loss reports from 33 states and DC and live Ohio records, ask local police whether they will check the serial, and follow every required transfer step.' },
      { question: 'Can SafeOrStolen identify a plate owner?', answer: 'No. SafeOrStolen never shows owner names. Its plate check searches SafeOrStolen theft reports and public web results, and Arizona plates are also checked against Arizona, Alaska and Chicago police stolen-vehicle records. For title or registration questions, contact the state motor vehicle agency.' },
      { question: 'Where are the detailed checking guides?', answer: 'Visit /how-to-check-if-item-stolen for the definitive guide and matching tool for each supported item type.' },
    ],
  },
  {
    title: 'Account, Privacy, and Pricing', icon: Shield, faqs: [
      { question: 'How much does verification cost?', answer: 'Your first check is free, with no account or credit card needed. Additional checks cost $0.99 for 2, or the unlimited plan costs $10 per month (blacklist checks capped at 20 a month) with a 30-day refund.' },
      { question: 'Can I cancel the unlimited plan?', answer: 'Yes. You can cancel from your account, and access continues through the end of the current billing period.' },
      { question: 'Is there an app?', answer: 'SafeOrStolen is a free web app you can install from your browser at safeorstolen.com/app. It is not an App Store or Google Play download, and it needs a data connection to run checks.' },
      { question: 'Who can view my result?', answer: 'Your history is tied to your account. A result is public only when you deliberately create and share a public result link.' },
    ],
  },
];

export default function FAQPage() {
  const faqs = categories.flatMap((category) => category.faqs);
  return <div className="min-h-screen bg-background pt-20">
    <PageSEO title="SafeOrStolen FAQ: Stolen Item Checks, Prices and Results" description="Answers about SafeOrStolen checks, sources, result labels, accounts, pricing, privacy, and Proof of Clean Purchase records." keywords="SafeOrStolen FAQ, stolen item checker help" canonical="/faq" modifiedTime="2026-10-20" structuredData={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }} />
    <div className="container mx-auto px-4 pt-16"><BreadcrumbNavigation items={[{ name: 'FAQ', href: '/faq' }]} /></div>
    <header className="container mx-auto max-w-3xl px-4 py-12 text-center"><h1 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h1><p className="mt-4 text-lg text-muted-foreground">Plain answers about what SafeOrStolen checks and how to use a result.</p></header>
    <main className="container mx-auto max-w-4xl px-4 pb-20">
      {categories.map((category, categoryIndex) => <Card key={category.title} className="mb-8 p-6"><div className="mb-6 flex items-center gap-3"><category.icon className="h-7 w-7 text-primary" /><h2 className="text-2xl font-bold text-foreground">{category.title}</h2></div><Accordion type="single" collapsible>{category.faqs.map((faq, faqIndex) => <AccordionItem key={faq.question} value={`${categoryIndex}-${faqIndex}`}><AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></Card>)}
    </main>
  </div>;
}