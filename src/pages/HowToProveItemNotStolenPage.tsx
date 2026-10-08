import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to prove an item is not stolen". No Search Console data
 * for this page yet. Now self-contained (no longer reads SELLER_PROOF_GUIDE from
 * src/data/definitiveGuides.ts). Honest framing: nobody can prove a negative; a seller can show
 * ownership evidence, and the $1.99 certificate is a dated record of a check and its result.
 */
export default function HowToProveItemNotStolenPage() {
  return (
    <ItemLandingPageTemplate
      title="How to Prove an Item Is Not Stolen When You Sell It | SafeOrStolen"
      metaDescription="You can't prove a negative, but you can show a buyer you own the item: receipts, matching serials, account control, and a dated SafeOrStolen check. What works and what doesn't."
      h1="How to Prove an Item Is Not Stolen"
      itemType="Seller Proof"
      dateModified="2026-10-07"
      searchPlaceholder="Enter your item's serial number, IMEI or VIN"
      keywords={[
        'how to prove an item is not stolen',
        'how to prove something is not stolen',
        'prove i own an item',
        'proof of ownership without receipt',
        'how to show buyer item is not stolen',
        'seller proof item not stolen',
        'how to prove a phone is not stolen',
        'how to prove a bike is not stolen',
      ]}
      quickAnswer={{
        question: 'How do I prove an item is not stolen?',
        answer:
          "Strictly, no one can prove an item was never stolen, because there's no complete list of every theft. What you can do is show a buyer that you own it: a receipt or order confirmation whose serial number matches the item, the original box with the same serial, and unlocking and signing out of it in front of them. Add a check on SafeOrStolen (safeorstolen.com/how-to-prove-item-is-not-stolen) showing no report was found, and the optional $1.99 certificate gives that check a dated link you can share.",
      }}
      sections={[
        {
          heading: 'Evidence that convinces a buyer, from strongest to weakest',
          table: {
            columns: ['Evidence', 'Why it works', 'Weak spot'],
            rows: [
              ['Title or registration in your name (cars, motorcycles, some boats and guns)', 'An official ownership record tied to the VIN or serial', 'Only exists for some items'],
              ['Receipt or online order confirmation showing the serial number', 'Links the exact unit to a purchase', "Many receipts don't list the serial; screenshots can be faked, so show it live in your account"],
              ['Unlocking it and signing out of your Apple, Google, Microsoft or brand-app account while the buyer watches', 'Shows you control the device', 'Doesn\'t show how you came to have it'],
              ['Original box with a serial label that matches the item', 'Hard to fake for a casual thief', 'Boxes can be bought separately'],
              ['A SafeOrStolen check showing no report found', 'Shows the number isn\'t in the records searched, as of that date', 'Not every theft is reported; it is not proof of ownership'],
              ['Old photos of you with the item, warranty registration, repair invoices', 'History over time', 'Easy to dismiss on their own'],
            ],
          },
        },
        {
          heading: 'What the $1.99 verification certificate is, and isn\'t',
          paragraphs: [
            'After any SafeOrStolen check, you can get a verification certificate for $1.99 (free for monthly members). It is a page with its own link that shows the record ID, the date and time of the check, the item category, a masked identifier (only the last few characters), the records searched, the result, and a tamper-evident hash. You can paste the link into your listing or send it to a buyer.',
            "It is a dated record that you checked, and of what the check found. It is not proof of ownership, not a bill of sale, and not a guarantee the item wasn't stolen: many stolen items are never reported to any database. The certificate page says so, word for word.",
          ],
        },
        {
          heading: 'No receipt? What to do instead',
          list: [
            'Look up the order in your Amazon, Best Buy, Apple or other store account and show it on your phone.',
            "Find the device in your Apple or Google account's device list, which shows its serial or IMEI.",
            "Ask the shop that sold it: bike shops and phone stores can often reprint a sales record.",
            'Write a simple bill of sale with the serial number, both names, the date and the price, and both sign it.',
            'Offer to meet at a police station lobby. It tells the buyer you have nothing to hide.',
          ],
        },
      ]}
      content={{
        intro:
          "Buyers are right to be careful, and a seller who makes it easy sells faster. Here is what actually reassures a buyer, and what a SafeOrStolen check can and can't show. If you want a link to put in your listing, see the <a href=\"/seller-badge\">seller verification link</a> page.",
        whatIs:
          "Proving an item isn't stolen really means two things: showing you own it, and showing it isn't listed as stolen where buyers look. The first comes from your own records and from unlocking the item in front of the buyer. The second comes from a serial number check. Together they answer the questions an honest buyer asks.",
        howItWorks:
          'Enter your item\'s serial number, IMEI or VIN in the search box. SafeOrStolen searches its theft reports and public web results, plus extra sources for guns, bikes, phones and Arizona vehicles, and shows "reported stolen", "possible match" or "no report found in the records searched" with every source listed. The check is saved to your account with the date, and you can add the $1.99 certificate to get a shareable link.',
        whyCheck:
          "If your item was ever reported stolen, perhaps before you bought it used, you want to know before a buyer finds out at the meetup. And a buyer who sees you checked is more likely to show up and pay your asking price.",
        benefits: [
          'Find out what a buyer will see when they check your serial',
          'Every source listed with the result',
          'Optional $1.99 certificate with its own link to share (free for monthly members)',
          'Masked identifier on the certificate, so the full number stays private',
          '2 free checks with no credit card',
        ],
        process: [
          'Gather your receipt, order confirmation, title or registration.',
          'Check your serial number, IMEI or VIN on SafeOrStolen.',
          'If you want a shareable link, get the $1.99 certificate from the result.',
          'Put the serial (or the certificate link) in your listing and answer serial questions openly.',
          'At the meetup, unlock the item and sign out of your accounts while the buyer watches.',
          'Give the buyer a signed bill of sale with the serial number.',
        ],
        faqs: [
          {
            question: 'Can you prove that something is not stolen?',
            answer:
              "Not absolutely. There's no complete record of every theft, and many thefts are never reported, so no check can prove an item was never stolen. You can show strong evidence of ownership, like a receipt or title matching the serial, and show that the number isn't in the theft records searched, with a dated SafeOrStolen check. That's what reasonable buyers look for.",
          },
          {
            question: 'How do I prove I own something without a receipt?',
            answer:
              "Show the order in your online store account, the device in your Apple or Google account's device list, the original box with a matching serial label, warranty registration, or old photos of you with it. Unlock it and sign out in front of the buyer. A signed bill of sale with the serial number gives the buyer a record going forward.",
          },
          {
            question: 'Does a SafeOrStolen certificate prove an item is not stolen?',
            answer:
              "No. The $1.99 certificate is a dated record with its own link showing that a check was run, which records were searched and what the result was. It isn't proof of ownership or a guarantee the item wasn't stolen, since many stolen items are never reported. It shows a buyer you checked, and when.",
          },
          {
            question: 'Should I give a buyer my serial number or IMEI?',
            answer:
              "Yes. The serial number, IMEI or VIN alone doesn't let anyone take over your item or account, and refusing it is the first thing that makes buyers suspicious. Share it in the marketplace chat. If you'd rather not post the full number publicly in a listing, share a SafeOrStolen certificate link, which shows only a masked version.",
          },
          {
            question: 'What if my item shows up as reported stolen?',
            answer:
              "Don't sell it. If you bought it used, it may have been stolen before you got it. Contact your local police on the non-emergency line with your proof of purchase. If you think it's a mistake, for example an item you reported stolen and later recovered, contact SafeOrStolen at safeorstolenmail@gmail.com with the details.",
          },
        ],
      }}
    />
  );
}
