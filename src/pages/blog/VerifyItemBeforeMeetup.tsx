import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to verify an item before meeting a seller" (marketplace
 * meetup checklist). No Search Console data for this page yet. Removed false app claims (works
 * offline, "3-second" barcode scanning, "download" from a store) and the generic safety filler.
 */
export default function VerifyItemBeforeMeetup() {
  return (
    <ItemLandingPageTemplate
      title="How to Verify an Item Before Meeting a Seller: Meetup Checklist | SafeOrStolen"
      metaDescription="What to check before and at a Facebook Marketplace or OfferUp meetup: the number to ask for, what to test on a phone, laptop, bike or car, and when to walk away."
      h1="How to Verify an Item Before You Meet the Seller"
      itemType="Marketplace Meetup"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the serial number, IMEI or VIN the seller sent"
      keywords={[
        'verify item before meeting seller',
        'marketplace meetup checklist',
        'what to check before buying used',
        'facebook marketplace meetup safety',
        'how to check item at meetup',
        'what to ask seller before meeting',
        'safe exchange zone',
        'offerup meetup tips',
      ]}
      quickAnswer={{
        question: 'How do I verify an item before meeting a seller?',
        answer:
          "Before you agree to meet, ask in the marketplace chat for the serial number, IMEI or VIN and a photo of it on the item, then check it on SafeOrStolen (safeorstolen.com/blog/verify-item-before-meetup). At the meetup, read the number off the item and compare it with the photo, test the item fully, and have the seller unlock it and sign out of their accounts. Pay only once all of that matches.",
      }}
      sections={[
        {
          heading: 'Messages to send before you agree to meet',
          list: [
            '"Can you send a photo of the serial number (or IMEI / VIN) on the item?" A photo of the label beats a typed number, because it shows the seller has the item.',
            '"Is it signed out of your Apple, Google or Microsoft account and reset?" For phones, laptops and tablets, ask them to do it at the meetup in front of you if it isn\'t done yet.',
            '"Do you have the receipt or the box?" Not a deal-breaker, but the serial on the box or receipt should match.',
            '"Can we meet at the police station lobby on [street]?" Most honest sellers say yes.',
          ],
        },
        {
          heading: 'What to check at the meetup, by item',
          table: {
            columns: ['Item', 'Check in person'],
            rows: [
              ['iPhone', 'Dial *#06# and compare the IMEI. Settings > General > About: Carrier Lock should say "No SIM restrictions". Watch them turn off Find My, then start setup yourself; "iPhone Locked to Owner" means walk away.'],
              ['Android phone', 'Dial *#06#. Watch them remove their Google account in Settings > Accounts, then factory reset. Put your SIM in and make a call.'],
              ['Laptop', 'Compare the serial on the bottom label with the one in system settings. Make sure it boots past the login screen and has no "managed by your organization" message.'],
              ['Bike or e-bike', 'Turn it over and read the serial under the bottom bracket. For an e-bike, check the battery key works and the seller removes it from their app.'],
              ['Car or motorcycle', 'Match the VIN on the windshield, door jamb and title. The name on the title should match the seller\'s ID.'],
              ['Power tools and consoles', 'Match the serial on the nameplate or sticker. Look for scratched or relabeled plates.'],
            ],
          },
        },
        {
          heading: 'Walk away if',
          list: [
            'The number on the item differs from the one you checked, or from the photo',
            'The label is missing, scratched off, or a fresh sticker covers it',
            "The seller can't unlock the device or sign out of it",
            'They bring a different unit "in better condition"',
            'They push for payment before you have tested it, or ask for a deposit to "hold" it',
            'They change the meeting place at the last minute to somewhere quiet',
          ],
        },
      ]}
      content={{
        intro:
          'Most of the work of checking a used item happens in the chat, before you drive anywhere. Here is what to ask for, what to check at the meetup, and when to leave without buying.',
        whatIs:
          "Verifying an item before a meetup means confirming two things: that the item isn't reported stolen, and that the person selling it controls it. The serial number check covers the first. The in-person checks (matching the number, unlocking, signing out) cover the second. If you only have the listing link so far, paste it into the <a href=\"/marketplace-url-checker\">Facebook Marketplace scam checker</a> to see the warning signs first.",
        howItWorks:
          'Type the number the seller sent into the search box. SafeOrStolen searches its theft reports and public web results, plus extra sources for guns, bikes, phones and Arizona vehicles, and shows "reported stolen", "possible match" or "no report found in the records searched" with every source listed. The check is saved to your account with the date. You can run it again from your phone at the meetup on safeorstolen.com or the free web app at safeorstolen.com/app.',
        whyCheck:
          'Once you have paid in cash, there is no getting the money back if the item turns out to be stolen and police return it to its owner. Checking first, and matching the number in person, is the cheapest protection you have. It also gives you a dated record that you checked.',
        benefits: [
          'Check the number before you spend time driving to meet',
          'Run it again on your phone at the meetup',
          'Every source listed with the result',
          'Dated record saved to your account',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask for the serial number, IMEI or VIN and a photo of it on the item.',
          'Check it on SafeOrStolen before you agree to meet.',
          'Meet in a police station lobby or a busy store during the day, and bring someone.',
          'Read the number off the item and compare it with the photo.',
          'Test the item and have the seller unlock it and sign out of their accounts.',
          'Pay only when everything matches, and keep the chat and listing.',
        ],
        faqs: [
          {
            question: 'What should I ask a seller before meeting?',
            answer:
              'Ask for a photo of the serial number, IMEI or VIN on the item, whether it is signed out of their accounts, and whether they have the receipt or box. Ask to meet at a police station lobby. Keep it all in the marketplace chat so you have a record. A seller who dodges the serial number question is the one to skip.',
          },
          {
            question: 'Can I check if an item is stolen before I meet the seller?',
            answer:
              'Yes, as long as the seller gives you its serial number, IMEI or VIN. Enter it on SafeOrStolen (safeorstolen.com/verify), which searches its theft reports and public web results and lists every source. The first 2 checks are free. Then match the same number on the item at the meetup, so you know you checked the right one.',
          },
          {
            question: 'What if the seller says they will show the serial number at the meetup?',
            answer:
              "Ask again for a photo. If they still refuse, don't go. There's no good reason to hide a serial number, and you'd be checking it under pressure in a parking lot. Sellers of stolen goods often agree to everything except the number.",
          },
          {
            question: 'Where is the safest place for a marketplace meetup?',
            answer:
              "A police station lobby or parking lot, if your local department allows it; call the non-emergency line to ask. Otherwise choose a busy store with cameras during daylight. Avoid the seller's home, empty lots and anywhere after dark, and bring a friend.",
          },
          {
            question: 'Can I check the item on my phone at the meetup?',
            answer:
              'Yes. Open safeorstolen.com in your phone browser, or add the free web app from safeorstolen.com/app to your home screen. Sign in so your free checks and saved results come with you. It needs a data connection, so check the signal at the meetup spot.',
          },
          {
            question: 'Should I pay before or after testing the item?',
            answer:
              "After. Test it fully, match the serial number and watch the seller sign out of their accounts first. Don't send a deposit to \"hold\" an item, and don't pay with gift cards, crypto or friends-and-family transfers to someone you haven't met.",
          },
        ],
      }}
    />
  );
}
