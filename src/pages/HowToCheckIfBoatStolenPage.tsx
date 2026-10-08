import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to check if a boat is stolen" (no Search Console rows for
 * this page; "check if boat is stolen" and "stolen boat lookup" reach /check-boat at positions 6 to
 * 18, so this page goes deeper on the HIN and the buying steps and links there). Was the shared
 * BOAT_GUIDE data; now self-contained. Removed the "AI analysis" source claim.
 */
const HowToCheckIfBoatStolenPage = () => (
  <ItemLandingPageTemplate
    title="How to Check if a Boat Is Stolen: HIN Check Before You Buy | SafeOrStolen"
    metaDescription="How to check if a boat is stolen: read the 12-character HIN, check it free, match the hidden HIN, trailer VIN and outboard serial, and spot a tampered transom."
    h1="How to Check if a Boat Is Stolen"
    itemType="Boat"
    dateModified="2026-10-07"
    searchPlaceholder="Enter the 12-character HIN"
    keywords={[
      'how to check if a boat is stolen',
      'check if boat is stolen',
      'stolen boat lookup',
      'hin lookup',
      'boat hin check',
      'hull identification number lookup',
      'stolen jet ski check',
    ]}
    quickAnswer={{
      question: 'How do I check if a boat is stolen?',
      answer:
        "Read the 12-character Hull Identification Number (HIN) on the right side of the transom, near the top, and match it to the title and registration in the seller's name. Check it on SafeOrStolen (safeorstolen.com/how-to-check-if-boat-stolen), which searches its theft reports and public web results. Then check the trailer VIN and outboard serial too, and look for a HIN that's been sanded, painted over or re-riveted. Your state's boat titling agency and marine patrol can check official records.",
    }}
    sections={[
      {
        heading: 'Where to find the HIN, and the other numbers to check',
        paragraphs: [
          'Boats built for sale in the U.S. since November 1972 carry a 12-character HIN. A boat sale is often three sales in one: hull, motor and trailer each have their own number, and any one of them can be stolen.',
        ],
        table: {
          columns: ['Item', 'Where the number is', 'What it should match'],
          rows: [
            ['Hull (HIN)', 'Starboard (right) side of the transom, within a couple of inches of the top, molded or on a fixed plate', 'State title and registration, and the hidden HIN'],
            ['Hidden HIN', 'A second, unexposed spot chosen by the builder, on boats built since August 1984. Builders don\'t publish where.', 'The transom HIN exactly'],
            ['Outboard motor', 'A serial plate on the mounting bracket that clamps to the transom', "The motor's bill of sale or the title, where your state titles motors"],
            ['Trailer', 'A VIN plate or stamping on the tongue or front frame rail', "The trailer's title or registration and its plate"],
            ['Personal watercraft (jet ski)', 'HIN at the rear of the hull, usually near the stern', 'Title and registration'],
          ],
        },
      },
      {
        heading: 'How to read a HIN',
        paragraphs: [
          'The first three characters are the builder\'s manufacturer code. The next five are the hull serial. The last four give the month and year it was built and the model year. If the HIN says the boat was built in a different year from the one on the title, or the format is wrong (too many characters, letters where numbers belong), ask why before you go further.',
        ],
      },
      {
        heading: 'Signs a boat may be stolen',
        list: [
          'The transom HIN is sanded, painted over, glued on, or on a plate held with new rivets or screws',
          "The registration numbers on the bow are fresh vinyl over ghost marks of old ones, or don't match the paperwork",
          "The seller's name isn't on the title, or the title is \"being sent\" by the state",
          'The trailer has no VIN plate, no title or a plate from another state',
          'The outboard serial plate is missing or the bracket has been ground',
          'Only one key, a punched ignition, or cut wires behind the helm',
          'The seller wants to meet at a launch ramp or lot instead of where the boat is stored',
        ],
      },
    ]}
    content={{
      intro:
        "Buying a used boat, jet ski or outboard? Check the HIN, the trailer VIN and the motor serial before you pay. Here's where each number is, how to read a HIN, and what a tampered transom looks like.",
      whatIs:
        'A boat stolen check looks up the Hull Identification Number in records of reported thefts. The HIN works like a car\'s VIN: it is unique to the hull, it goes on the title, and police use it to identify recovered boats. For a single-item check on a boat you\'re about to see, our <a href="/check-boat">boat check page</a> has the search box and the short version.',
      howItWorks:
        "Enter the HIN in the box. SafeOrStolen searches its own theft reports, which owners file on the site, and public web results that mention the HIN, such as old listings or stolen-boat posts. You see reported stolen, possible match, or no report found in the records searched, with each source listed. SafeOrStolen has no marine-specific database and does not search state titling records, the Coast Guard or NCIC, so also ask your state boat agency and local marine patrol.",
      whyCheck:
        'Boats are often stored out of sight on trailers, which makes them easy to hook up and tow away, and they are commonly sold for cash. If a boat turns out to be stolen, police return it to the owner and the buyer usually loses the money. Checking three numbers before you pay takes less time than the sea trial.',
      benefits: [
        'Checks any HIN, trailer VIN or outboard serial against SafeOrStolen theft reports',
        'Shows public web results that mention the number',
        'Lists every source searched with the result',
        'Each check saved to your account with the date',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for the HIN, trailer VIN and motor serial before you go, and check each one here.',
        'At the boat, read the transom HIN and compare it with the title character for character.',
        "Check the seller's photo ID against the name on the boat title and the trailer title.",
        'Look at the transom, the motor bracket and the trailer tongue for grinding, fresh paint or new rivets.',
        "Call your state's boat titling agency, or ask local marine patrol, if anything doesn't add up.",
        "If a number comes back reported stolen, don't buy. Leave and give the details to the police.",
      ],
      faqs: [
        {
          question: 'How do I check a boat HIN for free?',
          answer:
            "Enter the 12-character HIN on SafeOrStolen (safeorstolen.com/how-to-check-if-boat-stolen). The first 2 checks are free with a free account and no credit card. It searches SafeOrStolen theft reports and public web results. For state title and lien information, contact the agency that titles boats in your state; depending on the state that may be the DMV or the wildlife department.",
        },
        {
          question: 'Where is the HIN on a boat?',
          answer:
            "On the starboard side of the transom, the flat back of the boat, within a couple of inches of the top. It is molded into the hull or on a permanently fixed plate. Boats built since August 1984 also have a second hidden HIN somewhere inside the hull, which should match the one on the transom.",
        },
        {
          question: 'Can I look up a boat owner by HIN?',
          answer:
            "Usually not as a member of the public. State boat registration records include owner details, and states limit who can see them. Larger boats documented with the U.S. Coast Guard are listed in its vessel documentation records. For a purchase, the useful step is matching the title in the seller's name to their photo ID.",
        },
        {
          question: 'Do I need to check the trailer and outboard separately?',
          answer:
            'Yes. The trailer has its own VIN and title or registration, and the outboard has its own serial number. Thieves sometimes put a stolen motor on an honest boat, or sell a legitimate boat on a stolen trailer. Check all three numbers and make sure each one matches its paperwork.',
        },
        {
          question: 'What if the HIN on the transom has been removed?',
          answer:
            "Don't buy the boat. A missing, sanded or replaced HIN is the most common sign of a stolen hull. Removing or altering a HIN is illegal under federal boating rules. If you want to report it, give the seller's details and the boat's location to your local police or marine patrol.",
        },
        {
          question: 'What if a used boat has no title?',
          answer:
            "Some states title boats and some only register them, and rules differ for small boats and for older boats. Ask your state's boat agency what a legal sale needs before you pay. A bill of sale alone doesn't prove the seller owned the boat, so treat a missing title as a reason to slow down.",
        },
      ],
    }}
  />
);

export default HowToCheckIfBoatStolenPage;
