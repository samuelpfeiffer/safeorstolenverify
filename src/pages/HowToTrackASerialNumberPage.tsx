import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 31 2026: new page for searches no SafeOrStolen page answered (Search Console, Aug–Oct 2026):
 * "how to track a serial number" (319 impressions, avg position 72), "serial number tracker" (134, 67),
 * "track serial number" (100, 12), "track a serial number" (61, 77), "find item by serial number",
 * "find product by serial number". Honest answer first: a serial number is an ID, not a GPS signal.
 */
export default function HowToTrackASerialNumberPage() {
  return (
    <ItemLandingPageTemplate
      title="How to Track a Serial Number: Find Out if an Item Is Stolen | SafeOrStolen"
      metaDescription="Can you track a serial number? Not on a map, but you can trace its history. Check any serial number against theft reports in seconds and learn what owners and police can do."
      h1="How to Track a Serial Number"
      itemType="Item"
      dateModified="2026-10-31"
      searchPlaceholder="Enter any serial number"
      keywords={[
        'how to track a serial number',
        'serial number tracker',
        'track serial number',
        'track a serial number',
        'find item by serial number',
        'find product by serial number',
        'can you track a stolen item by serial number',
        'serial number lookup',
      ]}
      quickAnswer={{
        question: 'Can you track a serial number?',
        answer:
          "Not to a location. A serial number is an ID printed on the item, not a GPS signal, so no website can show where an item is from its serial number alone. What you can track is the serial number's history: whether it has been reported stolen. Enter it on SafeOrStolen (safeorstolen.com/how-to-track-a-serial-number) to check it against theft reports in a few seconds, with the first check free. To find a lost or stolen item's location, use the maker's own tracking feature, such as Find My on Apple devices, if it was turned on before the item went missing, and give the serial number to the police.",
      }}
      sections={[
        {
          heading: 'What a serial number can and can\'t tell you',
          paragraphs: [
            'A serial number identifies one specific item. That makes it the best way to prove an item is yours and to match it to a theft report, but it does not broadcast anything. Sites that promise to show where an item is from its serial number alone cannot do it.',
          ],
          table: {
            columns: ['What you want to know', 'Can a serial number do it?', 'How'],
            rows: [
              ['Whether the item is reported stolen', 'Yes', 'Check the serial number on SafeOrStolen before you buy or sell.'],
              ['Where the item is right now', 'No, not by itself', "Only a built-in tracking feature can do that, such as Find My on Apple devices or a tool brand's app, and only if it was turned on before the item went missing."],
              ['Who owns it now', 'No', 'Ownership records are private. Police can contact the owner when a stolen item is found.'],
              ['When and where it was made', 'Often', "Many makers build the date or factory into the serial number, or show it on their support site."],
              ['Whether it is under warranty', 'Often', "Enter the serial number on the maker's warranty or support page."],
            ],
          },
        },
        {
          heading: 'How to track a stolen item with its serial number',
          list: [
            'Report the theft to your local police and give them the serial number, make and model. Police keep stolen-property records that are searched when items turn up.',
            'Report it on SafeOrStolen too, so anyone who checks that serial number before buying sees the warning.',
            'Turn on the maker\'s tracking or lock feature if the item has one, and mark it as lost there.',
            'Tell your insurer and give them the serial number.',
            'Watch local listings and pawn shops for the item, and compare serial numbers if you find a match. Don\'t confront the seller: give the details to the police.',
          ],
        },
        {
          heading: 'Where to find the serial number',
          table: {
            columns: ['Item', 'Where the serial number usually is'],
            rows: [
              ['Phones and tablets', 'In Settings under About, and on the original box. Phones also have an IMEI number (dial *#06#).'],
              ['Laptops', 'On a label on the bottom, and in the system information screen'],
              ['Game consoles', 'On a label on the console and the box, and in the console settings'],
              ['Power tools', 'On the nameplate on the motor housing, near the model number'],
              ['Bikes', 'Stamped under the bottom bracket, where the pedals meet the frame'],
              ['Guns', 'Stamped on the frame or receiver'],
              ['Cars and motorcycles', 'The VIN, on the dashboard, door jamb or steering head'],
            ],
          },
        },
      ]}
      content={{
        intro:
          'Want to track a serial number? Here is what a serial number can actually tell you, how to check whether an item is reported stolen in seconds, and what to do if your own item was stolen.',
        whatIs:
          "Tracking a serial number means following an item's record, not its location. The record that matters most to a buyer is whether the serial number appears in a theft report. When something is stolen, the owner gives its serial number to the police and their insurer, which is what ties that one item to the theft.",
        howItWorks:
          'Type the serial number into the search box. SafeOrStolen searches its own theft reports, the police stolen records it holds for that kind of item and public web results, then shows one of three results: reported stolen, possible match, or no report found in the records searched. Every source searched is listed.',
        whyCheck:
          'If you buy an item that turns out to be stolen, police can return it to the owner and you lose what you paid. Checking the serial number first takes seconds, and the record of your check helps show you bought it in good faith.',
        benefits: [
          'Check any serial number: phones, laptops, consoles, tools, bikes, guns and more',
          'Results in a few seconds, with every source listed',
          'Works for buyers checking an item and sellers proving theirs is clean',
          '1 free check with no credit card',
        ],
        process: [
          'Find the serial number on the item, not just in the listing.',
          'Enter it on SafeOrStolen and read the result.',
          'Make sure the number on the item matches the box, receipt or settings screen.',
          'If it comes back reported stolen, don\'t buy it, and give the details to your local police.',
        ],
        faqs: [
          {
            question: 'Can you track an item by its serial number?',
            answer:
              "You can track its history, not its location. A serial number can show whether an item is reported stolen, and police use it to return stolen property to its owner. To see where an item is, it needs a built-in tracking feature that was turned on before it went missing.",
          },
          {
            question: 'Is there a free serial number tracker?',
            answer:
              'SafeOrStolen checks any serial number against theft reports, and your first check is free. No free site can show an item\'s location from its serial number alone.',
          },
          {
            question: 'How do I find an item by its serial number?',
            answer:
              "Report it to the police with the serial number, report it on SafeOrStolen, mark it lost in the maker's tracking app if it has one, and watch local listings and pawn shops. If you find it, give the details to the police instead of confronting the seller.",
          },
          {
            question: 'Can police track a stolen item by serial number?',
            answer:
              'Police record stolen items by serial number, so when an item is recovered or checked, it can be matched to your report and returned to you. That is why giving the serial number with your report matters.',
          },
          {
            question: 'Can I track a stolen phone with its serial number or IMEI?',
            answer:
              "Not to a location yourself. Use the phone maker's tracking feature, such as Find My on an iPhone, and ask your carrier to block the IMEI so the phone can't be used on its network. Give the IMEI to the police with your report.",
          },
          {
            question: 'What should I do if a serial number comes back as stolen?',
            answer:
              "Don't buy the item and don't confront the seller. Save the listing and the seller's details, leave if you are meeting in person, and give the information to your local police.",
          },
        ],
      }}
    />
  );
}
