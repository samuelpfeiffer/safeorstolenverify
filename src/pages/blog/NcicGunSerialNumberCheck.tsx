import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Nov 3 2026: answers "ncic gun serial number check", "ncic stolen gun database", "can civilians check ncic".
 * Owner-approved wording: only police can search NCIC; SafeOrStolen lets everyone search 220,000+ police reports.
 * Never claims access to NCIC or any link to it. Facts checked Nov 3 2026: since 2025, licensed dealers (FFLs)
 * can voluntarily query the NCIC Gun File through the FBI's NICS E-Check; private citizens cannot.
 */
export default function NcicGunSerialNumberCheck() {
  return (
    <>
    <ItemLandingPageTemplate
      title="NCIC Gun Serial Number Check: Can Private Citizens Search It? | SafeOrStolen"
      metaDescription="Only police can search NCIC, the FBI's national crime database that tracks stolen guns. Here's what private citizens can do instead, including a free check of 220,000+ police reports."
      h1="Can You Run a Gun Serial Number Through NCIC?"
      itemType="Firearm"
      searchType="firearm"
      dateModified="2026-11-10"
      searchPlaceholder="Enter the gun's serial number"
      keywords={[
        'ncic gun serial number check',
        'ncic stolen gun database',
        'can civilians check ncic',
        'can i run a gun serial number through ncic',
        'ncic gun file',
        'check if gun is stolen by serial number',
      ]}
      quickAnswer={{
        question: 'Can a private citizen check a gun serial number in NCIC?',
        answer:
          "Private citizens check guns on SafeOrStolen. Anyone can search more than 220,000 police reports of stolen and lost guns from 33 states and DC, plus live Ohio law-enforcement records, with the first check free at safeorstolen.com/firearms-check. NCIC, the FBI's national crime database that tracks stolen guns, is searched by police, and since 2025 licensed gun dealers can also check a serial number against its stolen-gun file.",
      }}
      sections={[
        {
          heading: 'Who can search NCIC for stolen guns',
          table: {
            columns: ['Who', 'Can they check a gun serial in NCIC?', 'How'],
            rows: [
              ['Police and sheriffs', 'Yes', 'Officers search NCIC as part of their work.'],
              ['Licensed gun dealers (FFLs)', 'Yes, since 2025, voluntarily', "Through the FBI's NICS E-Check, using only the gun's serial number."],
              ['Private citizens', 'No', 'Ask police to run it, buy through a licensed dealer, or check police theft reports on SafeOrStolen.'],
            ],
          },
        },
        {
          heading: 'What a private buyer or seller can do instead',
          list: [
            'Check the serial number on SafeOrStolen. It searches more than 220,000 police reports of stolen and lost guns from 33 states and DC, plus live Ohio law-enforcement records. Your first check is free.',
            "Do the sale through a licensed gun dealer. Dealers can now check the serial number against the FBI's stolen-gun file before they take the gun in.",
            "Call your local police or sheriff's non-emergency line and ask whether they will run the serial number. Ask how to bring the gun in safely before you do.",
            'Look at the serial number itself. A serial that has been scratched, ground or changed is a serious warning sign, and you should not buy that gun.',
          ],
        },
        {
          heading: 'What a match means',
          paragraphs: [
            "Gun serial numbers can repeat across manufacturers, so a match on SafeOrStolen is shown as a possible match with the make listed in the police report. If the make matches the gun in front of you, don't buy it, don't confront the seller, and give the serial number to local police. They can confirm it in NCIC.",
          ],
        },
      ]}
      content={{
        intro:
          "Yes, private citizens can check if a gun is stolen. SafeOrStolen lets anyone search more than 220,000 police reports of stolen and lost guns from 33 states and DC, plus live Ohio law-enforcement records. NCIC, the FBI's national crime database that tracks stolen guns, is searched by police.",
        whatIs:
          "NCIC, the National Crime Information Center, is the FBI's national crime database. Its gun file holds records of guns that police report as stolen, lost or recovered. Access is limited to law enforcement and, for stolen-gun checks, licensed dealers.",
        howItWorks:
          'Enter the serial number on SafeOrStolen. It searches police theft and loss reports from 33 states and DC, live Ohio law-enforcement records and SafeOrStolen reports, then shows any possible match with the make and the source. Every result lists the sources searched.',
        whyCheck:
          'Buying a stolen gun can cost you the gun and the money you paid, and federal law makes it a crime to keep a gun you know or have reason to believe is stolen. A serial number check takes seconds.',
        benefits: [
          'Search 220,000+ police reports of stolen and lost guns from 33 states and DC',
          'Live Ohio law-enforcement records on every gun check',
          'Every result lists the sources searched',
          'First check free, no account needed',
        ],
        process: [
          'Find the serial number stamped on the frame or receiver.',
          'Enter it on SafeOrStolen.',
          'If there is a possible match, compare the make.',
          'If it matches, walk away and give the serial number to local police.',
        ],
        faqs: [
          {
            question: 'Can I run a gun serial number through NCIC myself?',
            answer: "No. NCIC is open to police and, for stolen-gun checks, licensed gun dealers. You can search more than 220,000 police reports of stolen and lost guns on SafeOrStolen, and police can confirm any match in NCIC.",
          },
          {
            question: 'Can a gun store check if a gun is stolen?',
            answer: "Yes. Since 2025, licensed dealers can voluntarily check a gun's serial number against the FBI's stolen-gun file through NICS E-Check. Doing a private sale through a dealer is one way to get that check.",
          },
          {
            question: 'Is SafeOrStolen connected to NCIC?',
            answer: 'No. SafeOrStolen does not search NCIC. It searches police theft and loss reports from 33 states and DC, live Ohio law-enforcement records and its own reports, and lists every source it searched.',
          },
          {
            question: 'Will police run a serial number for me?',
            answer: "Many departments will. Call the non-emergency line, explain you are thinking of buying a used gun, and ask how they want you to handle it before bringing the gun in.",
          },
          {
            question: 'What if the serial number has been scratched off or changed?',
            answer: "Don't buy the gun. Federal law makes it illegal to possess a gun with an altered or removed serial number, and it is a common sign of theft.",
          },
        ],
      }}
    />
    <section className="max-w-4xl mx-auto px-4 py-8" aria-label="Sources and coverage">
      <h2 className="text-2xl font-bold mb-4">Official sources and coverage</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li><a className="text-primary underline" href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/nics/bipartisan-safer-communities-ncic-act-gun-file-faqs" target="_blank" rel="noopener noreferrer">FBI NCIC Gun File FAQs</a> explain dealer access through NICS E-Check.</li>
        <li><a className="text-primary underline" href="https://www.fbi.gov/file-repository/ncic-gun-file-correspondence_080625.pdf" target="_blank" rel="noopener noreferrer">FBI dealer correspondence, August 2025</a> confirms the function became available to all FFLs on August 4, 2025.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">SafeOrStolen’s historical police reports cover reports filed in 1973–2017. They are separate from the live Ohio search and do not provide access to NCIC. A no-match result covers only the sources searched.</p>
    </section>
    </>
  );
}
