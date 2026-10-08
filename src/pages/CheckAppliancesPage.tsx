import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to check if an appliance is stolen" / "appliance serial
 * number lookup" (no meaningful Search Console data for this page yet). Removed: "$1 billion stolen
 * in 2024", dollar-loss ranges, "40-60% below retail", the claim that we search pawn databases and
 * validate serials against manufacturer formats, a wrong statute (18 U.S.C. § 2320 is trademark
 * counterfeiting, not serial plates), and claims about warranties and remote disabling we can't back.
 */
const CheckAppliancesPage = () => (
  <ItemLandingPageTemplate
    title="Check if an Appliance Is Stolen: Washer, Fridge & Range Serial Check | SafeOrStolen"
    metaDescription="How to check if a used washer, dryer, fridge or range is stolen: where the serial plate is on each appliance, the signs of a jobsite theft, and a free serial check."
    h1="How to Check if an Appliance Is Stolen"
    itemType="Appliance"
    dateModified="2026-10-07"
    searchPlaceholder="Enter the appliance serial number"
    keywords={[
      'check if appliance is stolen',
      'appliance serial number lookup',
      'stolen appliance check',
      'washer serial number lookup',
      'refrigerator serial number stolen',
      'where is the serial number on a refrigerator',
      'where is the serial number on a washer',
      'stolen appliances new construction',
    ]}
    quickAnswer={{
      question: 'How do I check if an appliance is stolen?',
      answer:
        "Find the rating plate, the sticker with the model and serial number (inside a fridge on the side wall, around a washer's door opening, behind a range's bottom drawer), and enter the serial on SafeOrStolen (safeorstolen.com/check-appliances). It searches theft reports and public web results in a few seconds. Then look at the appliance itself: a new unit with no receipt, still on its shipping pallet, or with cut supply lines is a warning sign.",
    }}
    sections={[
      {
        heading: 'Where the serial number is on each appliance',
        paragraphs: [
          'The serial is on the rating plate, a sticker or metal tag that also lists the model number and electrical ratings. Photograph the whole plate.',
        ],
        table: {
          columns: ['Appliance', 'Where to look first', 'If it isn\'t there'],
          rows: [
            ['Refrigerator', 'Inside the fresh-food section, on the upper side wall or the ceiling', 'Behind the crisper drawers, or on the back'],
            ['Front-load washer', 'Around the door opening or on the inside of the door', 'On the back panel'],
            ['Top-load washer', 'Under the lid, on the rim of the cabinet', 'On the back of the control panel'],
            ['Dryer', 'Inside the door opening', 'On the back panel'],
            ['Range or oven', 'Behind the storage or warming drawer at the bottom', 'Inside the oven door frame'],
            ['Dishwasher', 'On the edge of the door or the tub frame, seen when the door is open', 'On the side of the tub (visible only when uninstalled)'],
            ['Microwave (over-the-range)', 'Inside the door frame', 'On the back'],
          ],
        },
      },
      {
        heading: 'Signs an appliance may be stolen',
        list: [
          'A brand-new unit with no receipt, often still on its shipping pallet or with the protective film on',
          'A builder or distributor label, a jobsite address written on the box, or a lot number sticker',
          'A matching set (fridge, range, dishwasher, microwave) of brand-new appliances sold by someone who isn\'t a dealer',
          'Water lines, gas lines or power cords that were cut instead of disconnected',
          'A rating plate that is peeled, scraped or missing',
          'A smart appliance that is still connected to someone else\'s app account and the seller can\'t remove it',
        ],
      },
      {
        heading: 'Why new appliances get stolen from homes being built',
        paragraphs: [
          "Builders often install appliances before a new home is finished and locked up. Those units are new, unregistered and have no receipt in anyone's hand, which makes them easy to resell. If someone is selling several new, matching appliances, ask where they came from and ask for the dealer's invoice. A real builder or installer with leftovers will have one.",
        ],
      },
    ]}
    content={{
      intro:
        'Check a used washer, dryer, refrigerator, range or dishwasher before you buy it. Find the serial on the rating plate, check it here, and look for the signs of a jobsite or delivery theft.',
      whatIs:
        "An appliance check looks for a theft report tied to the appliance's serial number. Owners, landlords and builders give the serial to the police when appliances are stolen. The serial number is unique to the unit; the model number is shared by every unit of that model, so make sure you check the serial.",
      howItWorks:
        "Type the serial number from the rating plate into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It doesn't search manufacturer, retailer or warranty records.",
      whyCheck:
        "Appliances are expensive, and a stolen one can be taken back by the police and returned to the owner, leaving you without the money or the appliance. A serial check takes a few seconds, and the questions about receipts and installation tell you a lot about who you are buying from.",
      benefits: [
        'Works for any brand: Samsung, LG, Whirlpool, GE, Maytag, Bosch, Frigidaire and others',
        'Searches SafeOrStolen theft reports and public web results',
        'Results in a few seconds with every source listed',
        'A dated record of the check is saved to your account',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for a photo of the rating plate before you go to see it.',
        'Check the serial number on SafeOrStolen.',
        'When you see it, match the plate to the photo and look at how it was disconnected.',
        'For a new unit, ask for the receipt or dealer invoice. For a smart appliance, have the seller remove it from their app.',
        "If it comes back reported stolen or the plate is missing, don't buy it and give the listing to your local police.",
      ],
      faqs: [
        {
          question: 'Where is the serial number on a refrigerator?',
          answer:
            'On most refrigerators, the rating plate with the serial number is inside the fresh-food section, on the upper side wall or the ceiling. On some models it is behind the crisper drawers or on the back. The serial is the one labeled "S/N" or "Serial", not the model number.',
        },
        {
          question: 'Where is the serial number on a washer or dryer?',
          answer:
            "On a front-load washer, look around the door opening or inside the door. On a top-load washer, lift the lid and check the rim, or the back of the control panel. On a dryer, look inside the door opening. If it isn't there, check the back panel.",
        },
        {
          question: 'Can I look up an appliance serial number for free?',
          answer:
            'Yes. SafeOrStolen (safeorstolen.com/check-appliances) checks an appliance serial against its theft reports and public web results for free for your first 2 checks, with no credit card. After that, a single check is $3.99.',
        },
        {
          question: 'Is it a red flag if a used appliance is brand new?',
          answer:
            "Not on its own; people sell gifts and duplicates. It is a red flag when there is no receipt, it is still on a shipping pallet, it has a builder or jobsite label, or the seller has several new matching units. New appliances are a common target in homes under construction.",
        },
        {
          question: "Can the manufacturer tell me if an appliance is stolen?",
          answer:
            "Manufacturers don't offer a public stolen-appliance lookup. They can tell an owner about warranty and registration for a serial number. Theft reports go to the police, and owners can also report a stolen appliance on SafeOrStolen so buyers who check the serial see it.",
        },
        {
          question: 'What should I do if an appliance I bought is stolen?',
          answer:
            "Stop using it if you can, keep the listing, messages and payment record, and call your local police non-emergency line with the serial number. If the appliance goes back to the owner, your records help any claim against the seller.",
        },
      ],
    }}
  />
);

export default CheckAppliancesPage;
