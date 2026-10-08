import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to check if a gun is stolen" (no Search Console rows for
 * this page; "check if gun is stolen by serial number" reaches /firearms-check at position 24, and
 * "stolen gun search" at 22). Was the shared FIREARM_GUIDE data; now self-contained. Removed: the
 * "34 states" and "mostly 2010 to 2017" figures (now 33 states and DC, filed through 2017), the
 * wrong "since 2024" date for dealer NCIC access (August 2025), an invented $25-$75 transfer fee,
 * outbound links and an unverifiable list of state public searches. The serial lookup itself lives
 * on /firearms-check; this page is the how-to.
 */
const HowToCheckIfGunStolenPage = () => (
  <ItemLandingPageTemplate
    title="How to Check if a Gun Is Stolen Before You Buy It | SafeOrStolen"
    metaDescription="How to check if a gun is stolen: find the serial on the frame, search police theft reports free, ask police or a dealer to run it, and spot an altered serial."
    h1="How to Check if a Gun Is Stolen"
    itemType="Firearm"
    dateModified="2026-10-07"
    searchType="firearm"
    searchPlaceholder="Enter the gun's serial number"
    keywords={[
      'how to check if a gun is stolen',
      'check if gun is stolen by serial number',
      'how to tell if a gun is stolen',
      'stolen gun search',
      'is this gun stolen',
      'check gun serial number stolen',
      'how to check a gun before buying',
    ]}
    quickAnswer={{
      question: 'How do I check if a gun is stolen?',
      answer:
        "Find the serial number stamped on the frame or receiver and check it on SafeOrStolen (safeorstolen.com/how-to-check-if-gun-is-stolen), which searches 242,839 police theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and owner reports, and flags serials that look altered. Then ask your local police to run it, or do the sale through a licensed dealer: since August 2025 dealers can voluntarily check the FBI's stolen-gun file.",
    }}
    sections={[
      {
        heading: 'Every way to check a gun, and what each one covers',
        table: {
          columns: ['Check', 'What it covers', 'Who can use it'],
          rows: [
            ['SafeOrStolen serial check', '242,839 police theft and loss reports from 33 states and DC, filed through 2017 (the years covered vary by state); live Ohio law-enforcement records; owner theft reports; altered-serial flag', 'Anyone; 2 free checks'],
            ["Local police", "The FBI's National Crime Information Center (NCIC) stolen-gun file, nationwide and current", 'Police only. Some departments will run a serial for a buyer; call the non-emergency line'],
            ['Licensed dealer (FFL)', "Dealers can voluntarily query the NCIC stolen-gun file since August 2025, and a dealer transfer includes the buyer's background check", 'Anyone buying through a dealer'],
            ['State public searches', 'A few states let the public search guns reported stolen there', 'Anyone, for that state only. See our state stolen gun database guide'],
            ['ATF', "No public lookup. eTrace is for police tracing a recovered gun", 'Law enforcement only'],
          ],
        },
      },
      {
        heading: 'Where the serial number is',
        paragraphs: [
          "Federal law requires the serial on the frame or receiver, the part that legally counts as the gun. On most pistols it's on the side of the frame, sometimes also on the slide and barrel. On a revolver it's usually on the frame under the grip or at the bottom of the butt. On an AR-style rifle it's on the lower receiver. On bolt-action rifles and shotguns, look on the receiver. Check every place the number appears: they should all match.",
        ],
      },
      {
        heading: 'Read the result against the gun',
        paragraphs: [
          'Serial numbers are not unique across makers. Two companies can stamp the same number on different guns. If a check shows a police report for your serial, look at the make and model in the report. If it lists a Glock and you are holding a Ruger, that report is about a different gun. If the make and model match, treat it as stolen.',
          'A result reads "reported stolen", "possible match" or "no report found in the records searched", with every source listed. No report found is a good sign, not a guarantee: not every theft gets reported, and the police reports SafeOrStolen holds stop in 2017. A recent theft would show up only in owner reports, Ohio records or a police NCIC check.',
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
        "Check a used gun's serial number before you pay. Find it on the frame, run it here free, and then ask the police or a dealer to check the national stolen-gun file. This page walks through each step and what the results mean.",
      whatIs:
        "Checking if a gun is stolen means searching its serial number in records of guns reported stolen or lost. Owners report thefts to local police, who enter them in the FBI's NCIC file, which only police and, since August 2025, licensed dealers can search. SafeOrStolen gives the public a search of police theft reports it holds. For a serial lookup by itself, use the <a href=\"/firearms-check\">gun serial number lookup</a>.",
      howItWorks:
        "Type the serial into the box. SafeOrStolen searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and theft reports owners filed on the site, and flags serials that look altered or obliterated. You see the make, model and state on any matching report and every source searched. It does not query NCIC or ATF eTrace.",
      whyCheck:
        "If police find you with a stolen gun, they will take it so it can go back to its owner, and you lose what you paid. Possessing a gun with an obliterated or altered serial number is a federal crime under 18 U.S.C. § 922(k). A serial check, a bill of sale and, where possible, a dealer transfer protect you.",
      benefits: [
        '242,839 police theft and loss reports from 33 states and Washington, DC',
        'Live Ohio law-enforcement records on every check',
        'Flags altered or obliterated serial numbers',
        'Shows the make and model on any matching report so you can compare',
        'Each check saved to your account with the date; 2 free checks, no credit card',
      ],
      process: [
        'Ask the seller for the make, model and serial number before you meet, and check the serial here.',
        'At the sale, read the serial off the frame yourself and make sure it matches what you were sent.',
        'If a report comes back, compare its make and model with the gun.',
        'Call your local police non-emergency line and ask whether they will run the serial through NCIC.',
        "Follow your state's transfer law. Where you can, do the sale through a licensed dealer, who can check the stolen-gun file.",
        "Get a bill of sale with the date, price, serial, make, model and both names. If anything is off, don't buy.",
      ],
      faqs: [
        {
          question: 'How can I check if a gun is stolen for free?',
          answer:
            "Enter the serial number on SafeOrStolen (safeorstolen.com/how-to-check-if-gun-is-stolen). Your first 2 checks are free with no credit card. It searches 242,839 police theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and owner reports. Then ask your local police non-emergency line whether they will run the serial through the FBI's NCIC stolen-gun file.",
        },
        {
          question: 'Can I run a gun serial number through NCIC myself?',
          answer:
            "No. NCIC is open only to law enforcement and, since August 2025, to licensed firearm dealers who choose to query its stolen-gun file. A private buyer can ask the local police to run the serial, which many departments will do, or do the purchase as a transfer through a dealer.",
        },
        {
          question: 'Can a gun store check if a gun is stolen?',
          answer:
            "Yes. Since August 2025, federal firearms licensees can voluntarily check a serial number against the FBI's NCIC stolen-gun file. Not every dealer does it, so ask before you go. Doing a private sale as a dealer transfer also runs the buyer's background check and leaves a paper record of the sale.",
        },
        {
          question: 'Does a background check tell you if a gun is stolen?',
          answer:
            "No. The NICS background check at a dealer looks at the buyer, to see whether you can legally have a gun. It does not search whether that gun was stolen. That's a separate serial check, which a dealer can run against the FBI's stolen-gun file if they choose to, and which you can run yourself on SafeOrStolen.",
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
          question: 'Does a clean result mean the gun is not stolen?',
          answer:
            "No. It means no report was found in the records searched. Many thefts are never reported, and the police reports SafeOrStolen holds were filed through 2017, with the years covered varying by state. For a gun stolen recently, a police or dealer check of the NCIC file is the stronger check.",
        },
      ],
    }}
  />
);

export default HowToCheckIfGunStolenPage;
