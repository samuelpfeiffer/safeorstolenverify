import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { HelpCircle, Shield, Clock, Database } from 'lucide-react';

const categories = [
  {
    title: 'How It Works', icon: HelpCircle, faqs: [
      { question: 'How do I check if something is stolen?', answer: "Create a free account, enter the item's IMEI, VIN, plate, or serial number, and review the result. SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis; gun checks also search police theft reports from 34 states plus live Ohio records, and bike checks a national stolen-bicycle registry." },
      { question: 'What items can I verify?', answer: 'SafeOrStolen supports phones, vehicles, license plates, serial-numbered electronics and power tools, firearms, and bicycles.' },
      { question: 'Does SafeOrStolen search police, NCIC, DMV, NICB, NMVTIS, insurance, or carrier-blacklist systems?', answer: 'No. Those are separate resources. Our item guides explain when and how a buyer can use official public resources or ask an authorized agency for help.' },
      { question: 'How long does a check take?', answer: 'Most results return in about 3 seconds, although network and source response times can vary.' },
      { question: 'Do I need an account?', answer: 'Yes. A free account is required before running a check so results and verification history can be tied to you.' },
    ],
  },
  {
    title: 'Results and Records', icon: Clock, faqs: [
      { question: 'What do the result labels mean?', answer: 'STOLEN means the check found strong stolen evidence. CLEAR means the checked sources came back clean. NOT FOUND or UNKNOWN means the available information did not support either conclusion.' },
      { question: 'Does a clear result guarantee the item is not stolen?', answer: 'No. Not every theft is reported, sources can change, and an identifier can be altered. Match the physical item, review the seller’s records, and use the item-specific checks in our guides.' },
      { question: 'What should I do if an item is shown as stolen?', answer: 'Do not buy, transfer, reset, or resell it. Preserve the listing, messages, identifier, and payment record, then contact local police and the marketplace.' },
      { question: 'What is a Proof of Clean Purchase?', answer: 'It is a permanent, timestamped record of a clean SafeOrStolen check that buyers and sellers can share. It is not a title, guarantee of ownership, or legal document.' },
      { question: 'What if I think a result is wrong?', answer: 'Contact support with the identifier and relevant documentation so the result can be reviewed.' },
    ],
  },
  {
    title: 'Sources and Item Checks', icon: Database, faqs: [
      { question: 'How should I check a used phone?', answer: 'Match the IMEI, ask the original carrier about network and finance status, remove Apple or Google account locks, and test the phone. SafeOrStolen does not currently query carrier blacklists.' },
      { question: 'How should I check a vehicle?', answer: 'Match the VIN in every location and on the title, then use the separate NICB and NMVTIS resources described in our vehicle guide. SafeOrStolen does not query those systems.' },
      { question: 'How should I check a firearm?', answer: 'Private buyers cannot search NCIC. Run the serial on SafeOrStolen, which searches police theft and loss reports from 34 states and live Ohio records, ask local police whether they will check the serial, and follow every required transfer step.' },
      { question: 'Can SafeOrStolen identify a plate owner?', answer: 'No. SafeOrStolen does not access protected DMV owner records. Its plate check uses SafeOrStolen reports, public web results, and AI analysis.' },
      { question: 'Where are the detailed checking guides?', answer: 'Visit /how-to-check-if-item-stolen for the definitive guide and matching tool for each supported item type.' },
    ],
  },
  {
    title: 'Account, Privacy, and Pricing', icon: Shield, faqs: [
      { question: 'How much does verification cost?', answer: 'A free account includes 2 checks. Additional checks cost $0.99 each, or the unlimited plan costs $10 per month.' },
      { question: 'Can I cancel the unlimited plan?', answer: 'Yes. You can cancel from your account, and access continues through the end of the current billing period.' },
      { question: 'Is there an app?', answer: 'SafeOrStolen is a web app that can be installed from a supported browser. It is not a native App Store or Google Play download.' },
      { question: 'Who can view my result?', answer: 'Your history is tied to your account. A result is public only when you deliberately create and share a public result link.' },
    ],
  },
];

export default function FAQPage() {
  const faqs = categories.flatMap((category) => category.faqs);
  return <div className="min-h-screen bg-background pt-20">
    <PageSEO title="SafeOrStolen FAQ" description="Answers about SafeOrStolen checks, sources, result labels, accounts, pricing, privacy, and Proof of Clean Purchase records." keywords="SafeOrStolen FAQ, stolen item checker help" canonical="/faq" modifiedTime="2026-09-24" structuredData={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }} />
    <div className="container mx-auto px-4 pt-16"><BreadcrumbNavigation items={[{ name: 'FAQ', href: '/faq' }]} /></div>
    <header className="container mx-auto max-w-3xl px-4 py-12 text-center"><h1 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h1><p className="mt-4 text-lg text-muted-foreground">Plain answers about what SafeOrStolen checks, what it does not check, and how to use a result responsibly.</p></header>
    <main className="container mx-auto max-w-4xl px-4 pb-20">
      {categories.map((category, categoryIndex) => <Card key={category.title} className="mb-8 p-6"><div className="mb-6 flex items-center gap-3"><category.icon className="h-7 w-7 text-primary" /><h2 className="text-2xl font-bold text-foreground">{category.title}</h2></div><Accordion type="single" collapsible>{category.faqs.map((faq, faqIndex) => <AccordionItem key={faq.question} value={`${categoryIndex}-${faqIndex}`}><AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></Card>)}
    </main>
  </div>;
}