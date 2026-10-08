import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "partial serial number search" (no Search Console data yet;
 * plain phrase people type: "search partial serial number", "serial number worn off"). The old page
 * promised wildcard "fuzzy matching across all databases", a bike-registry count and firearm partial
 * matching. In the product, a fragment is matched against SafeOrStolen's own theft reports (any report
 * whose number contains the characters); the other sources need the full number. Copy now says that.
 */
const PartialSerialNumberSearchPage = () => (
  <ItemLandingPageTemplate
    title="Partial Serial Number Search: Check a Worn or Incomplete Serial | SafeOrStolen"
    metaDescription="Partial serial number search: what you can find with only part of a serial, how to read a worn or scratched number, and what a missing serial tells a buyer."
    h1="Partial Serial Number Search: Checking a Worn or Incomplete Serial"
    itemType="Partial Serial Number"
    dateModified="2026-10-07"
    searchPlaceholder="Enter the characters you can read"
    keywords={[
      'partial serial number search',
      'partial serial number lookup',
      'search with part of a serial number',
      'incomplete serial number lookup',
      'serial number worn off',
      'serial number scratched off',
      'how to read a faded serial number',
      'missing serial number stolen',
    ]}
    quickAnswer={{
      question: 'Can I search for a stolen item with only part of the serial number?',
      answer:
        "Yes, with limits. Enter the longest run of characters you can read for certain on SafeOrStolen (safeorstolen.com/partial-serial-number-search). Its own theft reports are matched on any report whose serial contains those characters, so a fragment can still surface a match. The other sources it searches need the full number. If the serial was deliberately scratched or ground off, treat that as a warning sign, not a reading problem.",
    }}
    sections={[
      {
        heading: 'What a fragment can and cannot find',
        table: {
          columns: ['Source', 'Partial serial works?', 'What to do'],
          rows: [
            ['SafeOrStolen theft reports', 'Yes. Any report whose serial contains your characters, in that order, is returned.', 'Enter 5 or more characters you are sure of, then compare the full serial on the report with the item.'],
            ['Public web results', 'Rarely. Listings and posts mention full serials, so a fragment seldom matches.', 'Try again once you have recovered more of the number.'],
            ['Stolen-bicycle registry and police firearm reports', 'No. These need the full serial.', 'Recover the full number from paperwork or the item before you rely on a no-match.'],
            ['Police', 'Sometimes. Officers can search police records the public can\'t see.', 'Call the non-emergency line if the item matters, especially for a gun.'],
          ],
        },
      },
      {
        heading: 'How to read a worn, faded or scratched serial',
        list: [
          'Shine a flashlight across the plate from a low angle instead of straight on. Stamped and engraved characters cast shadows that show up when the surface is worn flat.',
          'Take a photo with the flash on at an angle, then zoom in on your phone. A camera often picks up characters your eye skips.',
          'For a stamped metal number, lay thin paper over it and rub lightly with a soft pencil.',
          'Clean the area with a damp cloth. Don\'t sand, file or use chemicals; that destroys what is left.',
          'Look for the number somewhere else: the box label, receipt, warranty card, insurance list, the device\'s settings menu, or (for cameras) the photo file\'s data.',
        ],
      },
      {
        heading: 'Characters people misread',
        table: {
          columns: ['Looks like', 'Could be', 'Tip'],
          rows: [
            ['0', 'O or D', 'VINs never use O; most serials mix letters and numbers, so check the brand\'s format.'],
            ['1', 'I or L', 'VINs never use I. On worn stamps, a 1 often has a small flag at the top.'],
            ['5', 'S', 'Search both if you are unsure, as two separate checks.'],
            ['8', 'B or 3', 'A worn 8 can look like a 3 when the left side is rubbed away.'],
            ['2', 'Z', 'A stamped Z has a straight top; a 2 is curved.'],
          ],
        },
      },
      {
        heading: 'When a missing serial is the answer',
        paragraphs: [
          "A serial that has faded on an old sticker is normal. A serial that has been ground off, drilled out, painted over or covered with a new sticker is not. On a bike, tool, phone or laptop, that is one of the clearest signs the item is stolen, and you should walk away.",
          "On a gun, it is more serious: possessing a firearm with an obliterated or altered serial number is a federal crime under 18 U.S.C. § 922(k). Don't buy it and don't try to restore the number yourself. Tell the police, who can send it to a lab that recovers stamped numbers.",
        ],
      },
    ]}
    content={{
      intro:
        'Have only part of a serial number? Enter the characters you can read and check them against SafeOrStolen theft reports. This page also shows how to recover more of a worn number and when a missing serial means you should walk away.',
      whatIs:
        'A partial serial number search looks for theft reports using only the characters you can still read. It helps when a label has faded, a plate is scratched, or you only wrote down part of the number. For a full serial, use the <a href="/serial-number-checker">serial number checker</a>; for a bike frame, use the <a href="/check-bike">bike serial lookup</a>.',
      howItWorks:
        "Type the characters you are sure of, with no spaces, dashes or wildcard symbols. SafeOrStolen returns any theft report in its own records whose serial contains that run of characters, and lists every source it searched. If something comes back, compare the full serial on the report, the item type and the brand with the item in front of you before you draw a conclusion.",
      whyCheck:
        "A partial match is a lead, not proof, and a partial no-match proves even less. The point of checking is to catch the obvious case before you pay, and to know when to stop and get the full number from the seller's paperwork or the police.",
      benefits: [
        'Matches a fragment against SafeOrStolen theft reports',
        'Every source searched is listed, so you know what a no-match covers',
        'Works for any item type: electronics, tools, bikes, cameras, guns',
        'Each check is saved to your account with the date',
        '2 free checks with a free account, no credit card',
      ],
      process: [
        'Write down every character you can read, in order, and mark where the gaps are.',
        'Try the low-angle flashlight and pencil-rubbing tricks to recover more characters.',
        'Search the longest unbroken run you are sure of, 5 characters or more.',
        'If a character could be two things (5 or S, 0 or O), run a second check with the other reading.',
        'If a report comes back, compare its full serial, brand and item type with the item. If the serial was removed on purpose, walk away and tell the police.',
      ],
      faqs: [
        {
          question: 'Can I look up a serial number if I only have part of it?',
          answer:
            "Yes. SafeOrStolen (safeorstolen.com/partial-serial-number-search) matches the characters you enter against its own theft reports and returns any report whose serial contains them. Enter at least 5 characters you are sure of. The bike registry, police firearm reports and web results need the full number, so a no-match on a fragment tells you little.",
        },
        {
          question: 'Should I use * or ? for the characters I can\'t read?',
          answer:
            "No. Enter only the longest unbroken run of characters you are sure of, with no symbols, spaces or dashes. The search already finds reports whose serial contains that run anywhere, so you don't need to mark the missing characters at the start or end.",
        },
        {
          question: 'How do I read a serial number that has worn off?',
          answer:
            'Shine a flashlight across the surface from a low angle so the stamped characters cast shadows, and photograph it with the flash on at an angle. For stamped metal, rub a soft pencil over thin paper laid on top. Then check the box, receipt, warranty card or device settings for the full number.',
        },
        {
          question: 'Is it illegal to buy something with the serial number scratched off?',
          answer:
            "For guns, yes: possessing a firearm with an obliterated or altered serial is a federal crime under 18 U.S.C. § 922(k). For other items it depends on the state and the item, but a deliberately removed serial is a strong sign of theft. Don't buy it.",
        },
        {
          question: 'Can police find a stolen item with a partial serial number?',
          answer:
            "Sometimes. Police can search records the public can't, and an officer can tell you whether your fragment is enough to work with. If you have a partial serial from a gun or a high-value item you think is stolen, call your local police non-emergency line and give them the characters you have.",
        },
        {
          question: 'Why might two different reports match my partial serial?',
          answer:
            "Short fragments appear inside many serial numbers. Four or five characters can match items from different brands. Compare the full serial on each report, the brand and the item type with what you are holding. Adding even one or two more characters usually narrows it to one report or none.",
        },
      ],
    }}
  />
);

export default PartialSerialNumberSearchPage;
