import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ReportStolenForm } from '@/components/reports/ReportStolenForm';
import { Link } from '@/lib/router-compat';
import { ShieldCheck, FileText, Search, EyeOff, Bell } from 'lucide-react';

/**
 * Nov 19 2026: new page for gun owners to add a stolen gun to SafeOrStolen.
 * Answer-first copy for search engines and AI assistants. Every claim matches how
 * /reports-api works: free account required, police report number required for
 * guns, owner details and the police number are never shown, flagged reports are
 * reviewed before going live, and checks of that serial show it was reported stolen.
 */

const PAGE_URL = 'https://safeorstolen.com/report-stolen-gun';

const faqs = [
  {
    q: 'How do I report a stolen gun online?',
    a: 'First report the theft to your local police and get a police report (case) number. Then use the form on this page: enter the gun’s serial number, make and model, the date and city it was stolen, and your police report number. It is free with a SafeOrStolen account.',
  },
  {
    q: 'Do I need a police report to add my stolen gun to SafeOrStolen?',
    a: 'Yes. SafeOrStolen only accepts stolen gun reports that include a police report number. The number is kept private and is never shown to people who check the gun.',
  },
  {
    q: 'What happens after I add my stolen gun?',
    a: 'Most reports go live right away. Reports that need a closer look are reviewed first to protect people from false accusations. Once live, anyone who checks that serial number on SafeOrStolen sees that the gun was reported stolen, without your name or contact details. You can choose to get an email if someone checks it.',
  },
  {
    q: 'Is it free to report a stolen gun?',
    a: 'Yes. Reporting a stolen gun on SafeOrStolen is free. You only need a free account so the report can be tied to you and updated if the gun is recovered.',
  },
  {
    q: 'Where can I find my gun’s serial number?',
    a: 'Check your purchase receipt, the gun box, a dealer transfer form, an insurance list or photos you took of the gun. The police report you filed may also list it.',
  },
  {
    q: 'What if my gun is recovered?',
    a: 'Mark the report as recovered from your My Items page. It then stops showing as stolen when people check that serial number.',
  },
  {
    q: 'Does SafeOrStolen replace reporting to the police?',
    a: 'No. Always report a stolen gun to your local police first. Some states also require gun owners to report a lost or stolen gun within a set number of days. SafeOrStolen adds a second layer: it warns private buyers who check the serial number before they buy.',
  },
];

const ReportStolenGunPage = () => {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Report a Stolen Gun',
      description:
        'Add your stolen gun to SafeOrStolen with your police report number so anyone who checks the serial number before buying is warned.',
      isPartOf: { '@type': 'WebSite', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      publisher: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      dateModified: '2026-11-19',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to report a stolen gun so buyers are warned',
      description: 'Report the theft to police, then add the gun to SafeOrStolen with the police report number.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Report the theft to police', text: 'Call your local police non-emergency line or file a report online and get the police report (case) number.' },
        { '@type': 'HowToStep', position: 2, name: 'Find the serial number', text: 'Look on your receipt, the gun box, a dealer transfer form, insurance records or photos of the gun.' },
        { '@type': 'HowToStep', position: 3, name: 'Add the gun to SafeOrStolen', text: 'Sign in for free and enter the serial number, make, model, date and city stolen, and the police report number.' },
        { '@type': 'HowToStep', position: 4, name: 'Keep it up to date', text: 'If the gun is recovered, mark it recovered from your My Items page.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
        { '@type': 'ListItem', position: 2, name: 'Report a Stolen Gun', item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <PageSEO
        title="Report a Stolen Gun Online Free (Police Report Required) | SafeOrStolen"
        description="Gun stolen? Add it to SafeOrStolen free with your police report number. Anyone who checks the serial number before buying will see it was reported stolen."
        keywords="report stolen gun, report a stolen firearm, stolen gun registry, add stolen gun to database, stolen gun report online, my gun was stolen what do I do"
        canonical="/report-stolen-gun"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Report a Stolen Gun</h1>
            <p className="text-lg text-muted-foreground">
              If your gun was stolen, report it to your local police first. Then add it here with your police report
              number. Once it’s live, anyone who checks that serial number on SafeOrStolen before buying a used gun
              will see it was reported stolen. It’s free, and your name and contact details are never shown.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex gap-2"><FileText className="h-5 w-5 text-primary shrink-0" />Police report number required</li>
              <li className="flex gap-2"><EyeOff className="h-5 w-5 text-primary shrink-0" />Your name and police number stay private</li>
              <li className="flex gap-2"><Search className="h-5 w-5 text-primary shrink-0" />Shows up when buyers check the serial</li>
              <li className="flex gap-2"><Bell className="h-5 w-5 text-primary shrink-0" />Optional email if someone checks it</li>
            </ul>
          </header>

          <section aria-labelledby="form-heading" className="space-y-3">
            <h2 id="form-heading" className="text-2xl font-semibold">Add your stolen gun</h2>
            <p className="text-sm text-muted-foreground">You’ll need a free account. Sign in when you submit.</p>
            <ReportStolenForm defaultItemType="firearm" lockItemType />
          </section>

          <section aria-labelledby="steps-heading" className="space-y-4">
            <h2 id="steps-heading" className="text-2xl font-semibold">What to do when your gun is stolen</h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li><strong>Report it to police.</strong> Call your local police non-emergency number or file online, and write down the police report (case) number. Some states require gun owners to report a lost or stolen gun within a set number of days.</li>
              <li><strong>Find the serial number.</strong> Check your receipt, the gun box, dealer transfer paperwork, insurance records or photos.</li>
              <li><strong>Add it to SafeOrStolen.</strong> Use the form above so private buyers are warned if someone tries to sell it.</li>
              <li><strong>Tell your insurer.</strong> Homeowner’s or renter’s insurance may cover the loss, and they will ask for the police report number.</li>
              <li><strong>Update it if it’s found.</strong> Mark the gun recovered from <Link to="/my-items" className="text-primary hover:underline">My Items</Link>.</li>
            </ol>
          </section>

          <section aria-labelledby="why-heading" className="space-y-3">
            <h2 id="why-heading" className="text-2xl font-semibold">Why add your gun to SafeOrStolen?</h2>
            <p>
              Private buyers can’t search the FBI’s stolen gun list, which is limited to police. SafeOrStolen gives them a
              place to check. Gun checks on SafeOrStolen already search more than 220,000 police reports of stolen and lost
              guns from 33 states and DC, plus live Ohio records. Your report adds your gun to what buyers see when they
              check a serial number before they pay.
            </p>
            <p className="flex gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              Reports that need a closer look are reviewed before they go live, to protect people from false accusations.
            </p>
          </section>

          <section aria-labelledby="faq-heading" className="space-y-4">
            <h2 id="faq-heading" className="text-2xl font-semibold">Frequently asked questions</h2>
            {faqs.map((f) => (
              <div key={f.q} className="space-y-1">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </section>

          <nav aria-label="Related" className="flex flex-wrap gap-x-4 gap-y-2 text-sm border-t border-border pt-6">
            <Link to="/firearms-check" className="text-primary hover:underline">Check a gun serial number</Link>
            <Link to="/stolen-gun-database" className="text-primary hover:underline">Stolen gun database</Link>
            <Link to="/what-to-do-if-your-gun-is-stolen" className="text-primary hover:underline">What to do if your gun is stolen</Link>
            <Link to="/report-stolen" className="text-primary hover:underline">Report another stolen item</Link>
            <Link to="/blog/state-stolen-gun-database-guide" className="text-primary hover:underline">Stolen gun databases by state</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ReportStolenGunPage;
