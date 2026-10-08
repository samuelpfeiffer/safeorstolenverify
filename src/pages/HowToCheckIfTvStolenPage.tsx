import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to check if a tv is stolen" / "tv serial number lookup"
 * (no Search Console data yet). Now self-contained instead of reading TV_GUIDE from the shared data
 * file. The old guide said "no account needed" for free checks; the 2 free checks need a free account.
 */
export default function HowToCheckIfTvStolenPage() {
  return (
    <ItemLandingPageTemplate
      title="How to Check if a TV Is Stolen: TV Serial Number Check | SafeOrStolen"
      metaDescription="How to check if a used or new-in-box TV is stolen: where the serial number is on the back and in the menu, retail-theft red flags, and a free TV serial check."
      h1="How to Check if a TV Is Stolen"
      itemType="TV"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the TV's serial number"
      keywords={[
        'how to check if tv is stolen',
        'tv serial number lookup',
        'stolen tv check',
        'is this tv stolen',
        'where is the serial number on a tv',
        'samsung tv serial number check',
        'buying tv on marketplace stolen',
        'new in box tv stolen',
      ]}
      quickAnswer={{
        question: 'How do I check if a TV is stolen?',
        answer:
          "Find the serial number on the label on the back of the TV and in its settings menu (usually under Support or About), and make sure they match. Enter it on SafeOrStolen (safeorstolen.com/how-to-check-if-tv-stolen), which searches theft reports and public web results in a few seconds; the first 2 checks are free. Be most careful with new, boxed TVs sold well below the store price, a common sign of retail or delivery theft.",
      }}
      sections={[
        {
          heading: 'Where to find the serial number on a TV',
          table: {
            columns: ['Where', 'What to look for', 'Notes'],
            rows: [
              ['Label on the back', 'A sticker near the inputs or the stand mount listing the model and serial (S/N)', 'Photograph it. On a wall-mounted TV you may need the seller to take it down.'],
              ['Settings menu', 'Usually under Support, About This TV, or System Information. On Samsung TVs: Settings > Support > About This TV.', 'Should match the back label. Works even when the label is hard to reach.'],
              ['Box label', 'The end of the box, next to the barcode', 'Should match the TV, not just the model.'],
              ['Receipt', 'Many store receipts list the model; some list the serial', 'Check the date and store make sense.'],
            ],
          },
        },
        {
          heading: 'Signs a TV may be stolen',
          list: [
            'A new, sealed TV from a private seller well below the store price, with no receipt',
            'A shipping label for someone else\'s address, or a store\'s security tag still on the box',
            'Several new TVs of the same model from one person',
            'A label that has been peeled off or covered, or a serial in the menu that doesn\'t match the back',
            'Wall-mount brackets still attached with torn-out screws, or a missing stand and remote',
            'A hotel, school or business asset tag, or a TV that boots into a hotel or business mode',
            'Streaming apps still signed in to someone else\'s accounts that the seller can\'t explain',
          ],
        },
        {
          heading: 'What to do at the meetup',
          paragraphs: [
            "Ask to see the TV turned on. Open the settings menu and read the serial yourself, then compare it with the back label and the photo the seller sent. Have the seller do a factory reset from the settings menu, which signs out their apps and accounts. For a sealed TV, ask for the receipt and check that the store and date fit the seller's story.",
          ],
        },
      ]}
      content={{
        intro:
          'Check a used or new-in-box TV before you buy it. Find the serial number on the back and in the menu, check it for theft reports, and know the signs of a TV taken from a store or a delivery.',
        whatIs:
          'A TV stolen check looks for theft reports tied to the TV\'s serial number. Owners give the serial to the police when a TV is stolen, and can report it on SafeOrStolen. The model number is the same for every TV of that model, so make sure you check the serial. For other electronics, see the <a href="/check-electronics">electronics check</a>.',
        howItWorks:
          "Type the serial number into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It doesn't search manufacturer, retailer or insurer records.",
        whyCheck:
          "TVs are taken in burglaries, from stores and from delivery trucks and porches, then resold online. A stolen TV recovered by police goes back to the owner, and the buyer loses what they paid. Checking the serial and asking for the receipt takes a few minutes.",
        benefits: [
          'Works for Samsung, LG, Sony, TCL, Hisense, Vizio and any TV with a serial',
          'Searches SafeOrStolen theft reports and public web results',
          'Results in a few seconds with every source listed',
          'A dated record of the check is saved to your account',
          '2 free checks with a free account, no credit card',
        ],
        process: [
          'Ask the seller for a photo of the label on the back before you go.',
          'Check the serial on SafeOrStolen.',
          'At the meetup, turn the TV on and match the serial in the menu to the back label.',
          'For a new TV, ask for the receipt; for a used one, have the seller factory reset it.',
          "If it comes back reported stolen or the serial doesn't match, don't buy it, and give the listing to your local police.",
        ],
        faqs: [
          {
            question: 'Where is the serial number on a TV?',
            answer:
              'On a sticker on the back of the TV, usually near the inputs or the stand mount, labeled S/N or Serial. Most smart TVs also show it in the settings menu under Support, About This TV, or System Information; on Samsung TVs, Settings > Support > About This TV. It is also on the box label.',
          },
          {
            question: 'Can I look up a TV serial number to see if it is stolen?',
            answer:
              'Yes. SafeOrStolen (safeorstolen.com/how-to-check-if-tv-stolen) checks a TV serial against its theft reports and public web results for free for your first 2 checks, with a free account and no credit card. There is no public national database of stolen TVs; police can also check a serial against their own records.',
          },
          {
            question: 'Is a new TV in a sealed box on Marketplace stolen?',
            answer:
              "Not always; people sell gifts and returns they missed. It is a warning sign when the price is well below the store price, there is no receipt, the box has a store security tag or someone else's shipping label, or the seller has several of the same TV. Ask for the receipt before you go.",
          },
          {
            question: 'Can Samsung or LG tell me if a TV is stolen?',
            answer:
              "TV makers don't offer a public stolen-TV lookup. They can tell an owner about warranty and registration. Theft reports go to the police, and owners can also report a stolen TV on SafeOrStolen so a buyer who checks the serial sees it.",
          },
          {
            question: 'Can a stolen TV be tracked?',
            answer:
              "Not by the public, and a TV doesn't report its location by serial number. If a stolen TV is recovered, the serial number is what ties it back to the owner's police report, which is why checking it before you buy matters.",
          },
          {
            question: 'What should I do if a TV comes back reported stolen?',
            answer:
              "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the serial number and listing to your local police on their non-emergency line.",
          },
        ],
      }}
    />
  );
}
