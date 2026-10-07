import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { OtherStatesModule } from '@/components/seo/StateLinksGrid';

/**
 * Oct 7 2026: rewritten by hand. Search Console listed this page as "Crawled - currently not
 * indexed" while it was the shared state template. People reach it searching "fdle vin check",
 * "florida stolen vehicle check" and "vin lookup florida", so it now answers those directly.
 * SafeOrStolen does not query FLHSMV or FDLE; the page says where each Florida search lives.
 */
const FloridaVinLookup = () => (
  <>
    <ItemLandingPageTemplate
      title="Florida VIN Lookup & FDLE Stolen Vehicle Check (Free) | SafeOrStolen"
      metaDescription="Free Florida VIN lookup: check if a car is stolen, run the FDLE stolen vehicle search, check the Florida title by VIN, and get the HSMV 82042 VIN verification done before you buy."
      h1="Florida VIN Lookup: Stolen Check, FDLE Search and Title"
      itemType="Vehicle"
      dateModified="2026-10-07"
      searchType="vin"
      searchPlaceholder="Enter the 17-character VIN"
      keywords={[
        'florida vin lookup',
        'vin lookup florida',
        'fdle vin check',
        'fdle vin search',
        'florida stolen vehicle check',
        'florida stolen vehicle search',
        'free vin check florida',
        'state of florida vin check',
        'vin search by state in florida',
        'florida vin verification',
      ]}
      quickAnswer={{
        question: 'How do I check if a car is stolen in Florida?',
        answer:
          "Get the 17-character VIN from the dashboard and the driver's door jamb, and make sure they match. Check it on SafeOrStolen (safeorstolen.com/florida-vin-lookup), which searches its theft reports and decodes the year, make and model, then run the same VIN through FDLE's free Public Access System, which lists vehicles reported stolen to Florida police. Before you pay, check the Florida title by VIN with FLHSMV's Motor Vehicle Information Check and make sure the name on the title matches the seller's ID.",
      }}
      sections={[
        {
          heading: 'Every free Florida VIN check, and what each one tells you',
          paragraphs: [
            'No single search covers everything. A buyer in Florida needs three answers: is the car reported stolen, is the title clean, and is the seller the owner. Here is where each one comes from.',
          ],
          table: {
            columns: ['Check', 'What it tells you', 'Where'],
            rows: [
              ['SafeOrStolen VIN check', 'Theft reports SafeOrStolen holds, public web results for the VIN, and the decoded year, make and model', 'The search box on this page'],
              ['FDLE stolen vehicle search', 'Whether the VIN is reported stolen to Florida law enforcement', "FDLE's Public Access System, under Stolen Vehicles"],
              ['FLHSMV Motor Vehicle Information Check', 'Florida title status and brands such as salvage or rebuilt, and the last recorded odometer reading', "Florida's Department of Highway Safety and Motor Vehicles"],
              ['Title and ID match', 'Whether the seller is the owner', 'Look at the paper title and compare the name with the seller\'s photo ID'],
            ],
          },
        },
        {
          heading: 'How the FDLE VIN check works',
          paragraphs: [
            "Florida police enter stolen vehicles into the Florida Crime Information Center. The Florida Department of Law Enforcement (FDLE) lets anyone search those entries for free through its Public Access System. Choose the stolen vehicles search and enter the full VIN. Search the license plate there too, because plates are reported separately.",
            "A result there means a Florida agency has an active stolen report on that VIN. No result means no active Florida report, not that the car was never stolen: a car stolen in another state is reported there, and a recent theft may not be entered yet. That is why the SafeOrStolen check and the title check still matter.",
          ],
        },
        {
          heading: 'Florida VIN verification (form HSMV 82042)',
          paragraphs: [
            "Florida's VIN verification is a different thing from a stolen check. If you title a used vehicle in Florida that was last titled in another state, the VIN and odometer have to be physically inspected and recorded on form HSMV 82042. A law enforcement officer, a Florida licensed dealer, a notary public or an FLHSMV inspector can sign it. Bring the vehicle and the out-of-state title when you get it done.",
          ],
        },
        {
          heading: 'Florida red flags',
          list: [
            'Water lines, silt under the carpet, a musty smell or corrosion under the dash: flood cars are resold after every hurricane season',
            'A title from another state on a car that has always been in Florida, which can hide a salvage or flood brand',
            'A seller whose name is not on the title, or who wants to meet away from where they live',
            'A VIN plate on the dashboard that is scratched, loose, or does not match the door-jamb sticker',
            'A price well below similar cars and pressure to pay in cash today',
          ],
        },
      ]}
      content={{
        intro:
          'Check a Florida car, truck or motorcycle by VIN before you buy it. Search the VIN on SafeOrStolen, run the free FDLE stolen vehicle search, and check the Florida title by VIN. This page walks through all three.',
        whatIs:
          "A VIN lookup uses the vehicle's 17-character identification number to find what is on record about it. For a buyer, the useful records are theft reports, which say whether the car is stolen, and title records, which say whether it has been branded salvage, rebuilt or flood, and who owns it. In Florida, stolen reports are searchable through FDLE and title records through FLHSMV.",
        howItWorks:
          "Enter the VIN on this page. SafeOrStolen decodes the year, make and model, searches its own theft reports and public web results for that VIN, and shows open safety recalls. It does not search FDLE or FLHSMV, so run those two Florida searches as well. If any of them shows a problem, don't buy the car.",
        whyCheck:
          "In Florida, a stolen car goes back to its owner, and the buyer usually loses what they paid. Florida also sees flood-damaged cars resold after hurricanes and titles moved through other states to hide a salvage or flood brand. A few minutes of checking before you pay protects you from both.",
        benefits: [
          'Free check against SafeOrStolen theft reports and public web results',
          'Decodes the year, make and model so you can spot a swapped VIN',
          'Shows open safety recalls for the vehicle',
          'Explains where to run the free FDLE and FLHSMV searches',
          '2 free checks with no credit card',
        ],
        process: [
          "Find the VIN on the dashboard, through the windshield on the driver's side, and on the driver's door jamb. They must match.",
          'Check the VIN on SafeOrStolen and confirm the decoded year, make and model match the car.',
          "Search the VIN and the plate in FDLE's Public Access System.",
          "Check the title by VIN with FLHSMV's Motor Vehicle Information Check.",
          "Look at the paper title: the VIN must match and the seller's name must match their photo ID.",
          'Complete the sale at the county tax collector\'s office if you can. Florida requires the title transfer within 30 days.',
        ],
        faqs: [
          {
            question: 'Is there a free Florida VIN check?',
            answer:
              "Yes. SafeOrStolen's VIN check is free for your first 2 checks. FDLE's stolen vehicle search and FLHSMV's Motor Vehicle Information Check are free state services.",
          },
          {
            question: 'What is an FDLE VIN check?',
            answer:
              "It is a search of FDLE's Public Access System for vehicles reported stolen to Florida law enforcement. It only covers Florida reports, so also check the VIN on SafeOrStolen and check the title.",
          },
          {
            question: 'Can I find the owner of a car in Florida from the VIN?',
            answer:
              "No. Owner names and addresses are protected by the federal Driver's Privacy Protection Act. When you buy, ask to see the title and compare the name with the seller's photo ID.",
          },
          {
            question: 'Who can do a VIN verification in Florida?',
            answer:
              'Form HSMV 82042 can be completed by a law enforcement officer, a Florida licensed dealer, a notary public or an FLHSMV inspector. You need it to title a used vehicle in Florida that was last titled in another state.',
          },
          {
            question: 'How do I check a Florida title for flood damage?',
            answer:
              "Check the title by VIN with FLHSMV's Motor Vehicle Information Check, which shows brands such as salvage and rebuilt. A brand can be lost if the car was retitled in another state, so also inspect for water lines, silt, rust and a musty smell, and have a mechanic look at it.",
          },
          {
            question: 'Where is the VIN on a car?',
            answer:
              "On the dashboard, visible through the windshield on the driver's side, and on a sticker in the driver's door jamb. It is also on the title, the registration and the insurance card.",
          },
          {
            question: 'What should I do if the VIN comes back stolen?',
            answer:
              "Don't buy the car and don't confront the seller. Leave, keep the listing and messages, and give the details to your local police or sheriff's office.",
          },
        ],
      }}
    />
    <OtherStatesModule kind="vin" currentPath="/florida-vin-lookup" />
  </>
);

export default FloridaVinLookup;
