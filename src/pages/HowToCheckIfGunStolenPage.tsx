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
    metaDescription="Check a gun serial before buying. Open official Florida, Ohio and Utah public searches, compare any matching report, and understand limited coverage."
    h1="How to Check if a Gun Is Stolen"
    itemType="Firearm"
    dateModified="2026-10-19"
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
        "Find the serial on the frame or receiver and run a SafeOrStolen check. Copy the serial and open the official Florida FDLE, Ohio Attorney General and Utah public searches below yourself. These links do not connect additional state databases to SafeOrStolen. Compare any report with the gun's make and model. A miss means not found in the records checked, not safe.",
    }}
    sections={[
      {
        heading: 'Separate checks and their coverage',
        table: {
          columns: ['Check', 'What it covers', 'Who can use it'],
          rows: [
            ['SafeOrStolen serial check', 'Owner theft reports, Ohio stolen-gun records and serial-integrity checks; the result names the sources actually checked', '2 free checks, no account needed, then $0.99 per check or $10/month unlimited'],
            ['Florida FDLE stolen gun', 'Florida public stolen-gun search', 'You open the link and enter the serial yourself'],
            ['Florida FDLE stolen vehicle', 'Florida public stolen-vehicle search, not a firearm check', 'You open the link and use the vehicle identifier'],
            ['Florida FDLE stolen article', 'Florida public stolen-article search', 'You open the link and enter the item details yourself'],
            ['Ohio Attorney General stolen gun', 'Ohio public stolen-gun search', 'You open the link and enter the serial yourself; existing SafeOrStolen Ohio checks are unchanged'],
            ['Utah serial search', 'Utah public serial search', 'You open the link and enter the serial yourself'],
            ['Local police or licensed dealer', 'Ask what checks and transfer procedures they can provide', 'Availability depends on agency policy and the dealer'],
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
          'A miss means "not found in the records checked", not safe or proof of ownership. A possible match is not a confirmed stolen verdict. Before you pay, also ask for the receipt or transfer paperwork, and ask local police or a licensed dealer what checks they can provide.',
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
        "Check a gun's serial number before you pay. Find it on the frame, run a SafeOrStolen check, then copy the serial for the official public searches below. Those searches are independent: you open them and enter the number yourself.",
      whatIs:
        "A serial check looks for reports matching the number on the firearm. Coverage depends on the records available to each search; there is no guarantee that every theft appears. The linked Florida, Ohio and Utah public searches are not additional connected databases. For the tool, use the <a href=\"/firearms-check\">gun serial number lookup</a>.",
      howItWorks:
        "Type the serial into the box for the existing SafeOrStolen check. Read the sources listed on the result. Use Copy serial to prepare the number for the official public search links, then enter it on the search page you opened. SafeOrStolen does not scrape these links. Its Arizona vehicle checks cover Arizona reports only, not vehicles reported stolen everywhere.",
      whyCheck:
        "If police find you with a stolen gun, they will take it so it can go back to its owner, and you lose what you paid. Possessing a gun with an obliterated or altered serial number is a federal crime under 18 U.S.C. § 922(k). A serial check, a bill of sale and, where possible, a dealer transfer protect you.",
      benefits: [
        'Own stolen-item reports and existing Ohio stolen-gun checks',
        'Separate official public searches you open yourself',
        'Flags altered or obliterated serial numbers',
        'Shows the make and model on any matching report so you can compare',
        'Each check saved to your account with the date; 2 free checks, no credit card',
      ],
      process: [
        'Ask the seller for the make, model and serial number before you meet, and check the serial here.',
        'At the sale, read the serial off the frame yourself and make sure it matches what you were sent.',
        'If a report comes back, compare its make and model with the gun.',
        'Copy the serial and open the Florida FDLE stolen-gun, Ohio Attorney General stolen-gun and Utah serial searches yourself. FDLE vehicle and article links are for those item types.',
        "Follow your state's transfer law and ask local police or a licensed dealer what checks they can provide.",
        "Get a bill of sale with the date, price, serial, make, model and both names. If anything is off, don't buy.",
      ],
      faqs: [
        {
          question: 'How can I check if a gun is stolen for free?',
          answer:
            "Use the official public searches linked above yourself. SafeOrStolen offers 2 free checks, no account needed, then $0.99 per check or $10/month unlimited. The external links do not add connected state databases to our check.",
        },
        {
          question: 'How do I use the public state searches?',
          answer:
            "Copy the serial from the field above, open the official search you want, and paste it there. Florida FDLE has separate gun, vehicle and article searches; Ohio has a stolen-gun search; Utah has a serial search. Read each site's coverage and instructions.",
        },
        {
          question: 'Can a gun store check if a gun is stolen?',
          answer:
            "Ask the dealer what checks they can provide before you go. A dealer transfer and a stolen-item check are separate steps; neither replaces reading the serial and comparing the seller's paperwork.",
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
          question: 'What should I do after a not-found result?',
          answer:
            "Not found means no matching report was found in the records checked at that time. It does not mean safe. Ask for the receipt or transfer paperwork, compare the make and model, and follow the required transfer procedures.",
        },
      ],
    }}
  />
);

export default HowToCheckIfGunStolenPage;
