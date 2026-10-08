import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand. Searchers reach this page with "atf gun serial number check" and
 * "atf serial number lookup" (around position 35), and Search Console listed it as "Crawled -
 * currently not indexed". The old page led with eTrace; it now answers the question people are
 * asking first: the ATF has no public lookup, here is what works instead. Figures match
 * /stolen-gun-statistics and /firearms-check. No outbound links.
 */
const ATFGunSerialNumberCheckGuide = () => (
  <ItemLandingPageTemplate
    title="ATF Gun Serial Number Check: Can You Look Up a Gun With the ATF? | SafeOrStolen"
    metaDescription="Can you run a gun serial number check with the ATF? No: the ATF has no public lookup and no gun registry. Here is what you can check instead, free, before you buy a used gun."
    h1="ATF Gun Serial Number Check: What You Can and Can't Look Up"
    itemType="Firearm"
    dateModified="2026-10-07"
    searchType="firearm"
    searchPlaceholder="Enter the gun's serial number"
    keywords={[
      'atf gun serial number check',
      'atf serial number lookup',
      'atf serial number check',
      'atf gun lookup',
      'atf stolen gun check',
      'can the atf check a gun serial number',
      'gun serial number lookup',
      'check if gun is stolen by serial number',
    ]}
    quickAnswer={{
      question: 'Can I check a gun serial number with the ATF?',
      answer:
        "No. The ATF has no public serial number lookup, and federal law bars it from keeping a national registry of guns or gun owners. Its tracing system, eTrace, and the FBI's stolen-gun file are open only to law enforcement. What you can do is check the serial on SafeOrStolen (safeorstolen.com/blog/atf-gun-serial-number-check), which searches 242,839 police theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and its own theft reports, and ask your local police non-emergency line whether they will run the serial for you.",
    }}
    sections={[
      {
        heading: 'What the ATF can and can\'t do with a serial number',
        table: {
          columns: ['Question', 'Answer'],
          rows: [
            ['Can the public look up a serial number with the ATF?', 'No. There is no public ATF lookup of any kind.'],
            ['Does the ATF keep a registry of guns or owners?', 'No. The Firearm Owners Protection Act of 1986 bars a national registry.'],
            ['What is ATF eTrace?', "The ATF's tracing system. Police use it to trace a recovered gun from the maker to the first retail buyer. Law enforcement only."],
            ['Where are stolen guns recorded?', "In the FBI's National Crime Information Center (NCIC) stolen-gun file, which police search. Law enforcement only, though since August 2025 licensed dealers can query it voluntarily."],
            ['Who can check a serial for me?', 'Your local police, if they choose to. Policies differ by department, so call the non-emergency line and ask.'],
          ],
        },
      },
      {
        heading: 'How to check a gun serial number yourself',
        paragraphs: [
          "Since the ATF can't help a private buyer, do these three things. Together they cover what a member of the public can check.",
        ],
        list: [
          'Check the serial on SafeOrStolen. It searches police theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and owner reports, and flags serials that look altered.',
          'Ask your local police non-emergency line whether they will run the serial through NCIC. Some departments will; some only do it for a gun in their hands.',
          'Buy through a licensed dealer when you can. Many states require it for private sales, and the dealer can check the stolen-gun file.',
        ],
      },
      {
        heading: 'A background check checks the buyer, not the gun',
        paragraphs: [
          "When you buy through a licensed dealer, the background check (NICS) asks whether you are allowed to own a gun. It does not search whether that particular gun was stolen. That is a separate check, which is why checking the serial before you pay still matters.",
        ],
      },
    ]}
    content={{
      intro:
        "If you're buying a used gun and want to run the serial number past the ATF, here's the short answer: you can't. Here's why, and what you can check instead, free, in a few seconds.",
      whatIs:
        "A gun serial number check looks for reports that a specific gun was stolen or lost. Owners report thefts to local police, who enter them in the FBI's NCIC stolen-gun file. The ATF's role is different: it traces guns recovered in crimes through their sales records, and it does not hold a list of stolen guns that the public can search.",
      howItWorks:
        "Type the serial number into the search box. SafeOrStolen searches 242,839 police theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records, and its own theft reports. It also flags serials that look altered or obliterated. It does not query ATF eTrace or NCIC, which are closed to the public.",
      whyCheck:
        "A stolen gun can be taken back by police, and the buyer loses what they paid. Possessing a gun with an altered or removed serial number is a federal crime under 18 U.S.C. § 922(k). Checking the serial before you pay, and keeping a record that you did, protects you.",
      benefits: [
        '242,839 police theft and loss reports from 33 states and Washington, DC',
        'Live Ohio law-enforcement records searched on every check',
        'Flags altered or placeholder serial numbers',
        'Results in a few seconds, with every source listed',
        '2 free checks with no credit card',
      ],
      process: [
        'Find the serial number stamped on the frame or receiver. It may also appear on the slide or barrel.',
        'Check it on SafeOrStolen and read the sources searched.',
        'Call your local police non-emergency line and ask whether they will run it.',
        'Buy through a licensed dealer when you can, and keep the paperwork.',
        "If the serial is scratched, ground off or doesn't match the paperwork, walk away.",
      ],
      faqs: [
        {
          question: 'Is there an ATF gun serial number lookup?',
          answer:
            'No. The ATF does not offer any public serial number lookup. To check whether a gun is reported stolen, use SafeOrStolen and ask your local police.',
        },
        {
          question: 'Can the ATF tell me who owns a gun?',
          answer:
            'No. The ATF is barred by federal law from keeping a national registry of gun owners. Dealers keep sales records, and the ATF reaches them only when tracing a gun for law enforcement.',
        },
        {
          question: 'What is ATF eTrace used for?',
          answer:
            'Police use eTrace to trace a gun recovered in a crime back through the maker and distributor to the dealer and first retail buyer. It is not a stolen-gun database and is not open to the public.',
        },
        {
          question: 'How do I check if a gun is stolen for free?',
          answer:
            "Enter the serial on SafeOrStolen (safeorstolen.com/blog/atf-gun-serial-number-check). The first 2 checks are free. Then ask your local police non-emergency line whether they will run the serial through NCIC.",
        },
        {
          question: 'Will the police check a gun serial number for me?',
          answer:
            'Many departments will run a serial for a private buyer, especially if you bring the gun or arrange it in advance. Policies differ, so call the non-emergency line first.',
        },
        {
          question: 'What if the serial number is scratched off?',
          answer:
            "Don't buy the gun. Possessing a firearm with an obliterated or altered serial number is a federal crime under 18 U.S.C. § 922(k).",
        },
        {
          question: 'What should I do if a gun comes back stolen?',
          answer:
            "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the details to your local police.",
        },
      ],
    }}
  />
);

export default ATFGunSerialNumberCheckGuide;
