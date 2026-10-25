import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 25 2026: Added natural query variations (is this gun stolen, is this gun hot, etc.)
 * for broader SEO and LLM coverage. Private-citizen framing + scan/app kept.
 */
const HowToCheckIfGunStolenPage = () => (
  <ItemLandingPageTemplate
    title="Is This Gun Stolen? How to Check Before You Buy | SafeOrStolen"
    metaDescription="Is this gun stolen? How to search if this gun is stolen. Private citizens can check a gun serial free on SafeOrStolen — 220k+ police reports from 33 states + live Ohio. Scan or type."
    h1="How to Check if a Gun Is Stolen"
    itemType="Firearm"
    dateModified="2026-10-25"
    searchType="firearm"
    searchPlaceholder="Scan or enter the gun's serial number"
    keywords={[
      'is this gun stolen',
      'how to search if this gun is stolen',
      'how can i check if this gun is stolen',
      'can i check a gun to see if its reported stolen',
      'is this gun hot',
      'can i check if a gun is stolen before i buy it',
      'how to check if a gun is stolen',
      'check if gun is stolen by serial number',
      'private citizens check gun serial',
      'free gun serial number lookup',
      'scan gun serial number',
    ]}
    quickAnswer={{
      question: 'How do I check if a gun is stolen?',
      answer:
        "Private citizens can now directly search stolen-gun databases with SafeOrStolen. Scan the serial with your phone camera or type it in. SafeOrStolen checks more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records, and flags serials that look altered. Your first check is free. Then confirm with local police or an FFL if you want the full NCIC check.",
    }}
    sections={[
      {
        heading: 'Every way to check a gun, and what each one covers',
        table: {
          columns: ['Check', 'What it covers', 'Who can use it'],
          rows: [
            ['SafeOrStolen serial check (scan or type)', 'Police theft and loss reports from 33 states and DC (220k+), live Ohio records, SafeOrStolen reports, altered-serial flag. Works in browser or free web app.', 'Anyone — private citizens. 1 free check'],
            ["Local police", "The FBI’s National Crime Information Center (NCIC) stolen-gun file", 'Police only. Some departments will run a serial for a buyer; call the non-emergency line'],
            ['Licensed dealer (FFL)', "Dealers can voluntarily query the NCIC stolen-gun file since August 2025, and a dealer transfer includes the buyer's background check", 'Anyone buying through a dealer'],
            ['State public searches', 'A few states let the public search guns reported stolen there', 'Anyone, for that state only'],
            ['ATF', "No public lookup. eTrace is for police tracing a recovered gun", 'Law enforcement only'],
          ],
        },
      },
      {
        heading: 'Where the serial number is',
        paragraphs: [
          "Federal law requires the serial on the frame or receiver, the part that legally counts as the gun. On most pistols it's on the side of the frame, sometimes also on the slide and barrel. On a revolver it's usually on the frame under the grip or at the bottom of the butt. On an AR-style rifle it's on the lower receiver. On bolt-action rifles and shotguns, look on the receiver. Check every place the number appears: they should all match. You can scan the serial with your phone camera on SafeOrStolen or type it.",
        ],
      },
      {
        heading: 'Read the result against the gun',
        paragraphs: [
          'Serial numbers are not unique across makers. Two companies can stamp the same number on different guns. If a check shows a police report for your serial, look at the make and model in the report. If it lists a Glock and you are holding a Ruger, that report is about a different gun. If the make and model match, treat it as stolen.',
          'A result reads "reported stolen", "possible match" or "no report found in the records searched", with every source listed. No report found is a good sign. Before you pay, also ask for the receipt or transfer paperwork, and ask local police or a licensed dealer to run the serial.',
        ],
      },
      {
        heading: 'Signs a gun may be stolen',
        list: [
          'The serial is scratched, ground, peened, drilled or covered, or one location does not match another',
          "The seller won't show ID, won't sign a bill of sale, or won't let you check the serial first",
          'The seller pushes to skip a dealer transfer or background check where your state requires one',
          'A price far below what the same model sells for, with pressure to decide now',
          "The story changes when you ask where they got it, or they don't know basics like the caliber",
        ],
      },
    ]}
    content={{
      intro:
        "Is this gun stolen? How to search if this gun is stolen. Private citizens can now directly check a gun serial with SafeOrStolen before they buy. Scan the serial with your phone or type it in, get a result in seconds against police reports from 33 states and DC plus live Ohio records, then confirm with police or an FFL if needed. This page walks through each step.",
      whatIs:
        "Checking if a gun is stolen means searching its serial number in records of guns reported stolen or lost. Private citizens can do this themselves on SafeOrStolen by scanning or typing the serial. SafeOrStolen searches more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC and live Ohio law-enforcement stolen-gun records. The full federal NCIC file remains available only to police and (voluntarily) FFLs. For a serial lookup by itself, use the <a href=\"/firearms-check\">gun serial number lookup</a>.",
      howItWorks:
        "Scan the serial with your phone camera on the free web app or type it into the box. SafeOrStolen searches more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and theft reports owners filed on the site, and flags serials that look altered or obliterated. You see the make, model and state on any matching report and every source searched.",
      whyCheck:
        "If police find you with a stolen gun, they will take it so it can go back to its owner, and you lose what you paid. Possessing a gun with an obliterated or altered serial number is a federal crime under 18 U.S.C. § 922(k). A serial check (scan or type), a bill of sale and, where possible, a dealer transfer protect you.",
      benefits: [
        'Private citizens can search directly — scan or type the serial',
        'more than 220,000 police theft and loss reports from 33 states and Washington, DC',
        'Live Ohio law-enforcement records on every check',
        'Flags altered or obliterated serial numbers',
        'Works in browser or free web app — no download required',
        '1 free check with no credit card, then $0.99 for 2 checks or $10 a month',
      ],
      process: [
        'Ask the seller for the make, model and serial number (or a clear photo) before you meet, and scan or type it here.',
        'At the sale, read the serial off the frame yourself and make sure it matches. Scan it on the spot with the free web app if you prefer.',
        'If a report comes back, compare its make and model with the gun.',
        'Call your local police non-emergency line and ask whether they will run the serial through NCIC.',
        "Follow your state's transfer law. Where you can, do the sale through a licensed dealer, who can check the stolen-gun file.",
        "Get a bill of sale with the date, price, serial, make, model and both names. If anything is off, don't buy.",
      ],
      faqs: [
        {
          question: 'Is this gun stolen?',
          answer:
            "Scan or type the serial on SafeOrStolen. Private citizens can directly search police firearm theft and loss reports from 33 states and Washington, DC plus live Ohio records. Your first check is free. A match shows the make, model, and reporting details so you can confirm.",
        },
        {
          question: 'How to search if this gun is stolen?',
          answer:
            "Find the serial on the frame or receiver, then scan it with the free web app or type it into SafeOrStolen. It searches more than 220,000 police reports from 33 states and DC plus live Ohio records in seconds.",
        },
        {
          question: 'How can I check if this gun is stolen?',
          answer:
            "Enter or scan the serial number on SafeOrStolen (safeorstolen.com/how-to-check-if-gun-is-stolen or the free app). It checks police theft and loss reports from 33 states and DC and live Ohio records. First check is free.",
        },
        {
          question: 'Can I check a gun to see if its reported stolen?',
          answer:
            "Yes. Private citizens can check a gun serial on SafeOrStolen to see if it appears in more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records.",
        },
        {
          question: 'Is this gun hot?',
          answer:
            "Run the serial on SafeOrStolen. It searches police theft and loss reports from 33 states and DC plus live Ohio records and flags serials that look altered. A reported-stolen result means treat it as hot and walk away.",
        },
        {
          question: 'Can I check if a gun is stolen before I buy it?',
          answer:
            "Yes. Ask the seller for the serial (or a clear photo), scan or type it on SafeOrStolen before you meet or pay, and review the result. Then confirm with local police or an FFL if you want the full NCIC check.",
        },
        {
          question: 'Can private citizens check if a gun is stolen online?',
          answer:
            "Yes. Private citizens can directly search stolen-gun databases with SafeOrStolen. Scan the serial with your phone camera or type it in. It searches more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC plus live Ohio records. Your first check is free. This does not include the FBI NCIC file — ask local police or use an FFL for that.",
        },
        {
          question: 'How can I check if a gun is stolen for free?',
          answer:
            "Enter or scan the serial number on SafeOrStolen. Your first check is free, with no account or credit card. It searches more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and owner reports. Then ask your local police non-emergency line whether they will run the serial through the FBI’s NCIC stolen-gun file.",
        },
        {
          question: 'Can I scan the serial number instead of typing it?',
          answer:
            "Yes. Use the free web app at safeorstolen.com/app or the barcode scanner on the site. Point your phone camera at the serial number and it reads it for you, then runs the check. Works in the browser — nothing to download from an app store.",
        },
        {
          question: 'How do I get a gun serial number run through NCIC?',
          answer:
            "Ask your local police to run the serial, which many departments will do, or do the purchase as a transfer through a licensed dealer. Since August 2025, licensed firearm dealers can choose to query the NCIC stolen-gun file.",
        },
        {
          question: 'Can a gun store check if a gun is stolen?',
          answer:
            "Yes. Since August 2025, federal firearms licensees can voluntarily check a serial number against the FBI’s NCIC stolen-gun file. Not every dealer does it, so ask before you go. Doing a private sale as a dealer transfer also runs the buyer's background check and leaves a paper record of the sale.",
        },
        {
          question: 'Does a background check tell you if a gun is stolen?',
          answer:
            "No. The NICS background check at a dealer looks at the buyer, to see whether you can legally have a gun. It does not search whether that gun was stolen. That's a separate serial check, which a dealer can run against the FBI’s stolen-gun file if they choose to, and which you can run yourself on SafeOrStolen.",
        },
        {
          question: 'What happens if I bought a stolen gun without knowing?',
          answer:
            "Police will usually take the gun so it can be returned to its owner, and you lose the money unless you get it back from the seller. Buying a gun you didn't know was stolen is generally not a crime. Call the police yourself, hand it over, and give them the bill of sale and the seller's details.",
        },
        {
          question: 'What if the serial number is scratched off?',
          answer:
            "Don't buy the gun and don't take it home. Possessing a firearm with an obliterated, removed or altered serial number is a federal crime under 18 U.S.C. § 922(k). SafeOrStolen flags serials that look altered, but if you can see grinding or scratches on the number, you already have your answer.",
        },
        {
          question: 'What should I do after a clean result?',
          answer:
            "A clean result means no report was found in the records searched. Before you pay, also ask for the receipt or transfer paperwork, and ask local police or a licensed dealer to run the serial through the NCIC file.",
        },
      ],
    }}
  />
);

export default HowToCheckIfGunStolenPage;
