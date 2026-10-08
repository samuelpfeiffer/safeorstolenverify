import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "stockx verification" / "does stockx check if items are
 * stolen". No Search Console data for this page yet. Moved from the shared marketplace template
 * to the item template so the page explains what StockX's verification does and doesn't cover
 * and where a serial-number check fits (consoles, GPUs, electronics bought off-platform).
 */
export default function StockXVerification() {
  return (
    <ItemLandingPageTemplate
      title="StockX Verification: Does StockX Check if Items Are Stolen? | SafeOrStolen"
      metaDescription="What StockX verification checks (authenticity and condition), what it doesn't (theft reports), and how to check a console or electronics serial number before you buy resale."
      h1="StockX Verification: What It Checks and What It Doesn't"
      itemType="Resale Electronics"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the console or device serial number"
      keywords={[
        'stockx verification',
        'does stockx check if items are stolen',
        'stockx verified meaning',
        'stockx authentication',
        'is stockx legit for electronics',
        'stockx ps5 stolen',
        'resale console serial number check',
        'check console serial number stolen',
      ]}
      quickAnswer={{
        question: 'Does StockX check if items are stolen?',
        answer:
          "StockX verification checks that an item is authentic, new and matches what was sold. It is not a stolen-property check, and StockX doesn't publish one. For anything with a serial number, such as a PS5, Xbox, Switch, graphics card or headphones, check the serial on SafeOrStolen (safeorstolen.com/stockx-verification), which searches its theft reports and public web results. Sneakers and clothing usually have no unique serial, so there is nothing to look up.",
      }}
      sections={[
        {
          heading: 'StockX verification vs. a stolen check',
          table: {
            columns: ['Question', 'StockX verification', 'SafeOrStolen serial check'],
            rows: [
              ['Is it real or a fake?', 'Yes, that is what it is for', 'No'],
              ['Is it new and in the condition listed?', 'Yes', 'No'],
              ['Is this exact unit reported stolen?', 'Not part of the process', 'Searches SafeOrStolen theft reports and public web results for the serial'],
              ['Works on sneakers and clothing?', 'Yes', 'Only if the item has a unique serial, which most don\'t'],
              ['Works on a console or GPU bought off-platform?', 'No', 'Yes, with the serial number'],
            ],
          },
        },
        {
          heading: 'Where to find the serial number',
          table: {
            columns: ['Item', 'Where it is'],
            rows: [
              ['PlayStation 5', 'Sticker on the back of the console, and on the label on the box; also in the console\'s system settings'],
              ['Xbox Series X|S', 'Sticker on the back or bottom, and on the box label; also in Settings > System > Console info'],
              ['Nintendo Switch', 'Sticker on the bottom edge of the console, and on the box'],
              ['Graphics cards', 'Sticker on the back plate or the edge of the card, and on the box'],
              ['Headphones and earbuds', 'Inside the band or on the case, and in the companion app'],
            ],
          },
        },
        {
          heading: 'Red flags when buying resale off-platform',
          list: [
            'Several sealed consoles or GPUs from one person, with no receipts, right after a release',
            'A box with the serial label cut off or covered',
            'A serial on the box that doesn\'t match the one on the console',
            'A price well under what the same item is selling for on StockX',
            '"Pay me directly and skip the fees" when you found them on a resale site',
          ],
        },
      ]}
      content={{
        intro:
          'StockX verification answers "is this real?" It doesn\'t answer "was this stolen?" Here is the difference, and how to check a console or electronics serial number when you buy resale.',
        whatIs:
          'StockX sends items through its own verification before they ship to the buyer, looking at authenticity, condition and whether the item matches the order. That protects you from fakes. A stolen-property check is different: it looks up one unit\'s serial number in theft reports. Sealed electronics stolen from a store or a delivery truck are still authentic, so they can pass an authenticity check.',
        howItWorks:
          'Type the serial number from the console, card or box label into the search box. SafeOrStolen searches its theft reports and public web results, including listings and posts that mention the number, and shows "reported stolen", "possible match" or "no report found in the records searched" with every source listed. The check is saved to your account with the date.',
        whyCheck:
          "Most of the risk is off-platform: a console from Facebook Marketplace, OfferUp or a local reseller with no verification step at all. If police recover a stolen item, it goes back to its owner and you lose what you paid. A serial check takes a few seconds and the first 2 are free.",
        benefits: [
          'Works on consoles, graphics cards, headphones and other electronics with a serial',
          'Checks SafeOrStolen theft reports and public web results',
          'Every source listed with the result',
          'Dated record of the check saved to your account',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for a photo of the serial label on the box and on the item.',
          'Check the serial on SafeOrStolen.',
          'Make sure the box serial and the item serial match.',
          'For a console, turn it on and compare the serial in the settings screen.',
          'Pay through a method with buyer protection, and keep the listing and messages.',
        ],
        faqs: [
          {
            question: 'What does StockX Verified mean?',
            answer:
              "It means the item went through StockX's own check before it was shipped to the buyer, looking at whether it's authentic, in the condition sold, and the item that was ordered. It's protection against fakes and wrong items. It isn't a check of theft reports, and StockX doesn't offer a public stolen-item lookup.",
          },
          {
            question: 'Can stolen items be sold on StockX?',
            answer:
              "An authenticity check can't tell whether a genuine, sealed item was stolen from a store or a delivery, so it's possible. StockX's process is built to catch fakes, not stolen goods. For electronics with serial numbers, a serial check on SafeOrStolen (safeorstolen.com) is the step that looks for theft reports.",
          },
          {
            question: 'How do I check if a PS5 or Xbox is stolen?',
            answer:
              "Get the serial number from the sticker on the back of the console or the label on the box, and check it on SafeOrStolen, which searches its theft reports and public web results. Make sure the box and console serials match, and for a used console, watch the seller sign out of their account and reset it.",
          },
          {
            question: 'Can I check if sneakers are stolen?',
            answer:
              "Usually not by number. Sneakers carry a style code and a size, which are the same on every pair of that model, not a unique serial. Your protection there is buying through a platform with verification and paying through the platform, not cash to a stranger with a pile of new pairs.",
          },
          {
            question: 'Is a console bought on Facebook Marketplace safer than one from StockX?',
            answer:
              "No, it's riskier. There is no verification step and usually no payment protection. Ask for the serial before you meet, check it, match it on the console and box, and have the seller sign out of their account and reset the console in front of you.",
          },
        ],
      }}
    />
  );
}
