import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "ebay buyer protection" / "ebay money back guarantee".
 * No Search Console data for this page yet. Removed: "3 seconds" result claims, the
 * "34 states" gun line, "AI analysis" as a data source and "peace of mind" copy. The
 * how-to-check-an-eBay-item-for-theft topic belongs to /ebay-stolen-item-check and is linked.
 */
export default function EbayBuyerProtection() {
  return (
    <ItemLandingPageTemplate
      title="eBay Buyer Protection: What the Money Back Guarantee Covers | SafeOrStolen"
      metaDescription="How eBay buyer protection works: what the Money Back Guarantee covers, the 30-day window, how to open a request, what is not covered, and how to check an item isn't stolen."
      h1="eBay Buyer Protection: How the Money Back Guarantee Works"
      itemType="eBay Purchase"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the item's serial number, IMEI or VIN"
      keywords={[
        'ebay buyer protection',
        'ebay money back guarantee',
        'how does ebay buyer protection work',
        'ebay item not received',
        'ebay item not as described',
        'what does ebay money back guarantee cover',
        'ebay buyer protection stolen item',
        'ebay open a request',
      ]}
      quickAnswer={{
        question: 'How does eBay buyer protection work?',
        answer:
          "eBay's Money Back Guarantee covers most items bought and paid for through eBay checkout when the item doesn't arrive, arrives damaged or faulty, or doesn't match the listing. You open a request from your Purchase history within 30 days of the latest estimated delivery date; if the seller doesn't fix it within 3 business days, you can ask eBay to step in. It doesn't cover payments made outside eBay, and it won't tell you whether an item is stolen, so check the serial number on SafeOrStolen (safeorstolen.com/guides/ebay-buyer-protection) before you buy.",
      }}
      sections={[
        {
          heading: 'What the Money Back Guarantee covers, and what it doesn\'t',
          table: {
            columns: ['Situation', 'Covered?'],
            rows: [
              ['Item never arrived', 'Yes, if you paid through eBay checkout and open a request in time'],
              ['Item arrived damaged, broken or not working', 'Yes, as "not as described"'],
              ['Wrong item, wrong model, or a fake of a branded item', 'Yes, as "not as described"'],
              ['You paid by bank transfer, Zelle, a payment app or cash outside eBay', 'No'],
              ['You changed your mind', 'Only if the seller accepts returns'],
              ['Cars, trucks and motorcycles', 'Not under the standard guarantee. eBay has a separate Vehicle Purchase Protection program with its own rules'],
              ['The item later turns out to be stolen', "Not one of the listed problems. Report it to police and contact eBay; don't count on an automatic refund"],
            ],
          },
        },
        {
          heading: 'How to open a request',
          list: [
            'Go to My eBay > Purchase history and find the order.',
            'Choose "I didn\'t receive it" for an item that never came, or "Return this item" for one that is broken or not as described.',
            'Explain what is wrong and add photos of the item, the label and any damage.',
            'Wait for the seller. They have 3 business days to respond.',
            'If it isn\'t fixed, open the request and choose to ask eBay to step in. Do this before the request window closes.',
          ],
        },
        {
          heading: 'Red flags in an eBay listing',
          list: [
            'Stock photos only, or photos with the serial number cropped out',
            'A new account with little or no feedback selling expensive electronics well below sold prices',
            'A seller who messages you to pay outside eBay "for a discount"',
            'Several of the same new-in-box item, listed without a business name or returns',
            '"Local pickup only, cash" on a small, easy-to-ship item like a phone',
          ],
        },
      ]}
      content={{
        intro:
          "eBay buyer protection is called the eBay Money Back Guarantee. Here is what it covers, how to use it, and the gap it leaves: whether the item was stolen. For the step-by-step theft check on an eBay listing, see <a href=\"/ebay-stolen-item-check\">how to check if an eBay item is stolen</a>.",
        whatIs:
          "The Money Back Guarantee is eBay's promise to refund you when an eligible purchase doesn't arrive or isn't what the listing described. It applies when you pay through eBay's own checkout. It is built around delivery and condition problems, not ownership, so a stolen item that arrives on time and works fine looks like a successful sale.",
        howItWorks:
          'Before you buy, message the seller through eBay and ask for the serial number, IMEI or VIN. Type it into the search box above. SafeOrStolen searches its theft reports and public web results, plus extra sources for guns, bikes, phones and Arizona vehicles, and shows "reported stolen", "possible match" or "no report found in the records searched" with every source listed.',
        whyCheck:
          "If police recover a stolen item from you, it goes back to its owner. Your only claim is against the seller, and an eBay seller who sold stolen goods may be gone by then. Checking the number before you pay is the protection the guarantee doesn't give you.",
        benefits: [
          'Check a serial number, IMEI or VIN before you bid or buy',
          'Searches SafeOrStolen theft reports and public web results',
          'Every source listed with the result',
          'Dated record of the check saved to your account',
          '2 free checks with no credit card',
        ],
        process: [
          'Read the listing for red flags and check the seller\'s feedback.',
          'Message the seller through eBay and ask for the serial number, IMEI or VIN.',
          'Check the number on SafeOrStolen.',
          'Pay only through eBay checkout, never outside it.',
          'When it arrives, compare the number on the item with the one you checked.',
          'If anything is wrong, open a request from Purchase history within 30 days of the latest estimated delivery date.',
        ],
        faqs: [
          {
            question: 'Does eBay protect buyers?',
            answer:
              "Yes. The eBay Money Back Guarantee refunds most purchases that don't arrive, arrive damaged or faulty, or don't match the listing, as long as you paid through eBay checkout and open a request in time. It doesn't cover payments made outside eBay, and vehicles fall under a separate program, Vehicle Purchase Protection.",
          },
          {
            question: 'How long do I have to file an eBay Money Back Guarantee claim?',
            answer:
              "Open a request within 30 days of the latest estimated delivery date shown on the order. Start it from My eBay > Purchase history. If the seller doesn't resolve it within 3 business days, you can ask eBay to step in. Don't wait until the last day: you still need time to escalate.",
          },
          {
            question: 'What if I bought a stolen item on eBay?',
            answer:
              "Stop using it, keep the listing, order page and messages, and report it to your local police with the order number. Contact eBay customer service too. The Money Back Guarantee is built for items that didn't arrive or aren't as described, so a refund isn't automatic. SafeOrStolen's guide to what to do if you bought something stolen covers the next steps.",
          },
          {
            question: 'Can I check if an eBay item is stolen before I buy?',
            answer:
              "Yes, if the seller gives you the serial number, IMEI or VIN. Ask through eBay messages, then check it on SafeOrStolen (safeorstolen.com/ebay-stolen-item-check), which searches its theft reports and public web results. The first 2 checks are free. When the item arrives, make sure the number on it matches what you checked.",
          },
          {
            question: 'Is paying outside eBay covered by buyer protection?',
            answer:
              "No. If you pay a seller directly by bank transfer, a payment app, a gift card or cash, eBay's Money Back Guarantee doesn't apply. Sellers who ask you to pay outside eBay for a discount are a common scam. Report the message and pay only through eBay checkout.",
          },
          {
            question: 'Does eBay buyer protection cover fake items?',
            answer:
              "Yes. A counterfeit of a branded item counts as \"not as described\", so you can open a return request from Purchase history and ask eBay to step in if the seller won't fix it. Keep the item, the packaging and photos of the labels, and don't send it anywhere except the return address eBay gives you.",
          },
        ],
      }}
    />
  );
}
