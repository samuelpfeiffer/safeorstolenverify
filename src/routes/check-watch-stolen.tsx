import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "free stolen watch check by serial number" (a few impressions at
 * positions 29-82, landing on the homepage and /serial-number-checker; this page should own it). Now self-contained instead of
 * reading WATCH_GUIDE from the shared data file. Dropped the old FAQ that answered "What does
 * SafeOrStolen check for watches?" with "No." and the "AI analysis" source claim.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="Free Stolen Watch Check by Serial Number | SafeOrStolen"
      metaDescription="Free stolen watch check by serial number. Where the serial is on a Rolex, Omega or Apple Watch, how to match it to the box and papers, and the red flags to watch for."
      h1="Free Stolen Watch Check by Serial Number"
      itemType="Watch"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the watch's serial number"
      keywords={[
        'free stolen watch check by serial number',
        'stolen watch check',
        'how to check if a watch is stolen',
        'watch serial number lookup',
        'rolex serial number stolen check',
        'where is the serial number on a rolex',
        'stolen watch database',
        'check if apple watch is stolen',
      ]}
      quickAnswer={{
        question: 'How do I check if a watch is stolen by its serial number?',
        answer:
          "Get the serial from the watch itself (on most brands, the case back or between the lugs; on modern Rolex, the inner ring at 6 o'clock) and enter it on SafeOrStolen (safeorstolen.com/check-watch-stolen). It searches theft reports and public web results in a few seconds, and the first 2 checks are free. Then match the serial to the warranty card and box. Papers that don't match the watch are a reason to walk away.",
      }}
      sections={[
        {
          heading: 'Where to find the serial number on a watch',
          table: {
            columns: ['Watch', 'Where the serial is', 'What else to match'],
            rows: [
              ['Rolex (made from the late 2000s on)', "Engraved on the rehaut, the inner ring between the crystal and the dial, at 6 o'clock", 'The warranty card and the box label'],
              ['Older Rolex', "Between the lugs at 6 o'clock, under the bracelet end. A watchmaker should remove the bracelet.", 'The reference number between the lugs at 12 o\'clock'],
              ['Omega, TAG Heuer, Breitling and most Swiss brands', 'Engraved on the case back, or on the side or back of a lug', 'The warranty card, which carries the serial'],
              ['Apple Watch', 'On the watch: Settings > General > About. On the paired iPhone: Watch app > General > About.', 'The box label'],
              ['Other smartwatches', 'In the watch\'s settings under About, and on the case back', 'The box label and the companion app'],
              ['Fashion and quartz watches', 'Often only a case number on the case back, which may not be unique', 'The receipt'],
            ],
          },
        },
        {
          heading: 'Signs a watch may be stolen',
          list: [
            'The serial has been polished away, or the case back or lugs show fresh tool marks where it was',
            'The serial on the watch doesn\'t match the warranty card or the box',
            'Box and papers for a different watch, or "papers coming later"',
            'An engraving with someone else\'s name or a date on the case back that the seller can\'t explain',
            'A price well below what the same reference sells for, with a seller who wants cash or a wire today',
            'An Apple Watch that still asks for someone\'s Apple Account password after it is erased',
          ],
        },
        {
          heading: 'For an expensive watch, meet at a watchmaker',
          paragraphs: [
            "A watchmaker or an authorized dealer can open the case back, check that the movement is genuine and read a serial you can't see without removing the bracelet. Dealers also have access to trade registries of lost and stolen watches that the public can't search. Offer to meet the seller there. A real owner usually agrees; a seller with a stolen watch usually finds a reason not to.",
          ],
        },
      ]}
      content={{
        intro:
          'Check a watch serial number for free before you buy a used Rolex, Omega, Apple Watch or any other watch. Find the serial, check it for theft reports, and match it to the papers.',
        whatIs:
          'A stolen watch check looks for theft reports tied to the watch\'s serial number. Owners give the serial to the police and their insurer when a watch is stolen, and can report it on SafeOrStolen. For rings, diamonds and other jewelry without serial numbers, see the <a href="/check-jewelry">jewelry check guide</a>.',
        howItWorks:
          "Type the serial number into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It does not search the brands' records, insurer databases or dealer trade registries.",
        whyCheck:
          "A watch is small, valuable and easy to sell, and when police recover a stolen one it goes back to the owner. A buyer who paid for it loses the money. A serial check plus a papers match catches most of the cases a private buyer can catch.",
        benefits: [
          'Works for Rolex, Omega, TAG Heuer, Cartier, Apple Watch and any watch with a serial',
          'Searches SafeOrStolen theft reports and public web results',
          'Results in a few seconds with every source listed',
          'Optional $1.99 verification certificate showing you checked before the sale',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for photos of the serial on the watch and of the warranty card before you meet.',
          'Check the serial on SafeOrStolen.',
          'At the meetup, read the serial on the watch yourself and match it to the card and box.',
          'For an expensive watch, meet at a watchmaker or authorized dealer and have them inspect it.',
          "If it comes back reported stolen or the serial has been removed, don't buy it, and give the details to your local police.",
        ],
        faqs: [
          {
            question: 'Is there a free stolen watch check by serial number?',
            answer:
              'Yes. SafeOrStolen (safeorstolen.com/check-watch-stolen) checks a watch serial number against its theft reports and public web results for free for your first 2 checks, with no credit card. After that, a single check is $0.99 or unlimited checks are $10 a month.',
          },
          {
            question: 'Where is the serial number on a Rolex?',
            answer:
              "On Rolex watches made from the late 2000s on, the serial is engraved on the rehaut, the inner ring between the crystal and the dial, at the 6 o'clock position. On older Rolex watches it is between the lugs at 6 o'clock, hidden by the bracelet. It is also on the warranty card.",
          },
          {
            question: 'Is there a stolen watch database?',
            answer:
              "There is no single public database. Owners report thefts to the police and their insurer, and the watch trade keeps registries of lost and stolen watches that dealers can search. Buyers can check a serial on SafeOrStolen, which searches its theft reports and public web results, and ask a dealer to run a trade check.",
          },
          {
            question: 'Can I check if an Apple Watch is stolen?',
            answer:
              "Yes. Find the serial in Settings > General > About on the watch, or in the Watch app on the paired iPhone, and check it on SafeOrStolen. Then have the seller unpair it from their iPhone, which removes Activation Lock. If the watch still asks for someone's Apple Account password after that, don't buy it.",
          },
          {
            question: 'What if the watch has no serial number?',
            answer:
              "Many fashion and quartz watches carry only a case number shared by many watches. On a luxury watch, a missing serial usually means it was removed, which is a strong sign of theft. Without a serial, rely on the receipt, the papers and the seller's story.",
          },
          {
            question: 'What should I do if a watch comes back reported stolen?',
            answer:
              "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the serial number and the listing to your local police on their non-emergency line.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/check-watch-stolen")({
  component: GuidePage,
});
