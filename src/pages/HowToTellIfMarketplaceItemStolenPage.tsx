import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to tell if a marketplace item is stolen" (also "how to
 * tell if something is stolen on facebook marketplace"). No Search Console data for this page yet.
 * Now self-contained (no longer reads MARKETPLACE_GUIDE from src/data/definitiveGuides.ts).
 * Facebook-specific steps live on /facebook-marketplace-stolen-check and are linked, not repeated.
 */
export default function HowToTellIfMarketplaceItemStolenPage() {
  return (
    <ItemLandingPageTemplate
      title="How to Tell if a Marketplace Item Is Stolen Before You Buy | SafeOrStolen"
      metaDescription="How to tell if an item on Facebook Marketplace, OfferUp or Craigslist is stolen: which number to ask for, how to check it, the seller red flags, and what to do at the meetup."
      h1="How to Tell if a Marketplace Item Is Stolen"
      itemType="Marketplace Item"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the serial number, IMEI or VIN"
      keywords={[
        'how to tell if a marketplace item is stolen',
        'how to tell if something is stolen on facebook marketplace',
        'how to know if an item is stolen',
        'is this item stolen',
        'check if item is stolen before buying',
        'offerup stolen items',
        'craigslist stolen items',
        'buying used stolen check',
        'signs an item is stolen',
      ]}
      quickAnswer={{
        question: 'How can you tell if a marketplace item is stolen?',
        answer:
          "Ask the seller for the item's serial number, IMEI or VIN in the marketplace chat before you meet, and check it on SafeOrStolen (safeorstolen.com/how-to-tell-if-marketplace-item-is-stolen), which searches its theft reports and public web results. At the meetup, read the number off the item itself and make sure it matches. Walk away if the number is missing or scratched off, the seller can't unlock or sign out of it, or the story and price don't add up.",
      }}
      sections={[
        {
          heading: 'Which number to ask for',
          paragraphs: [
            "The serial number is the only thing that ties a specific item to a theft report. Ask for it in the marketplace's own chat so the request and the answer stay on record.",
          ],
          table: {
            columns: ['Item', 'Number to ask for', 'Where the seller finds it'],
            rows: [
              ['Phone or tablet', '15-digit IMEI', 'Dial *#06#, or Settings > General > About (iPhone) or Settings > About phone (Android)'],
              ['Car, truck or motorcycle', '17-character VIN', 'Bottom of the windshield on the driver side, the driver door jamb, and the title'],
              ['Bike or e-bike', 'Frame serial number', 'Under the bottom bracket where the pedal cranks meet the frame'],
              ['Laptop', 'Serial number', 'Label on the bottom, or in the system settings'],
              ['Game console', 'Serial number', 'Sticker on the back or bottom, and in the console settings'],
              ['Power tools', 'Serial number', 'Nameplate on the motor housing; batteries have their own'],
              ['Gun', 'Serial number', 'Stamped on the frame or receiver. Follow your state\'s transfer laws.'],
            ],
          },
        },
        {
          heading: 'Signs a marketplace item is stolen',
          list: [
            "The seller won't share the serial number, or sends a photo with it cropped or blurred",
            'The number is scratched off, sanded, painted over or covered with a sticker',
            "A phone or laptop is still signed in to someone else's account, or the seller can't unlock it in front of you",
            'Several of the same expensive item for sale at once, often new in box, with no receipts',
            'A price far below what the same model has sold for, plus a "must sell today" story',
            '"I\'m selling it for my cousin" or any reason the seller can\'t answer basic questions about it',
            'A meetup in a parking lot at night, or a seller who changes the location at the last minute',
            'Missing parts that would normally stay with the owner: the charger, keys, the bike\'s lock key, the e-bike battery key',
          ],
        },
        {
          heading: 'What each check tells you',
          table: {
            columns: ['Check', 'What it can tell you', 'What it can\'t'],
            rows: [
              ['SafeOrStolen serial, IMEI or VIN check', 'Whether the number appears in SafeOrStolen theft reports or public web posts, plus extra sources for guns, bikes, phones and Arizona vehicles', 'Thefts never reported anywhere, or reported only to a police department'],
              ['Reading the number off the item', 'That the item in front of you is the one you checked', 'Anything about its history'],
              ['Watching the seller unlock and sign out', 'That the seller controls the account the item is tied to', 'Whether it was stolen and resold before them'],
              ['Receipt or title in the seller\'s name', 'A paper trail back to a purchase', 'Receipts can be faked; match the serial on it to the item'],
              ['Listing scam checkers', 'Payment and pressure warning signs in the listing text', 'Whether the item itself is stolen'],
            ],
          },
        },
        {
          heading: 'Facebook Marketplace, OfferUp and Craigslist',
          paragraphs: [
            'The steps are the same on every site. On Facebook, open the seller\'s profile and look at when they joined and what else they have listed. On OfferUp, look at their ratings and whether their identity is verified. Craigslist has neither, so the serial check and the in-person match carry more weight there.',
          ],
        },
      ]}
      content={{
        intro:
          'Stolen goods turn up on Facebook Marketplace, OfferUp, Craigslist and eBay because they sell fast and for cash. Here is how to tell before you pay. If you have the listing link, the <a href="/marketplace-url-checker">Facebook Marketplace scam checker</a> reads it for you and pulls out any serial number in it.',
        whatIs:
          'Telling whether a marketplace item is stolen comes down to two things: checking its serial number against theft reports, and confirming the seller actually controls it. Neither one alone is enough. A number that comes back clean only means no report was found in the records searched, and a seller who can unlock a phone may still be passing on something stolen. For the Facebook-specific steps, see <a href="/facebook-marketplace-stolen-check">how to check a Facebook Marketplace item for theft</a>.',
        howItWorks:
          'Get the number from the seller and type it into the search box. SafeOrStolen searches its own theft reports and public web results, plus police firearm theft records for guns, a national stolen-bicycle registry for bikes, and Arizona law-enforcement records for Arizona vehicles. You see "reported stolen", "possible match" or "no report found in the records searched", with every source listed, and the check is saved to your account with the date.',
        whyCheck:
          'If you buy something stolen, police can take it back and return it to the owner, and you usually lose what you paid. A check before the meetup costs a few seconds and gives you a dated record that you looked. The first 2 checks are free with a free account.',
        benefits: [
          'One search box for serial numbers, IMEIs and VINs',
          'Checks SafeOrStolen theft reports and public web results, with every source listed',
          'Extra sources for guns, bikes, phones and Arizona vehicles',
          'Each check saved to your account with the date',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for the serial number, IMEI or VIN in the marketplace chat.',
          'Check it on SafeOrStolen before you agree to meet.',
          'Meet somewhere public, ideally a police station lobby or parking lot.',
          'Read the number off the item and make sure it matches what you checked.',
          'Have the seller unlock the item and sign out of their accounts while you watch.',
          'Pay only after all of that, and keep the listing, chat and receipt.',
        ],
        faqs: [
          {
            question: 'How do you know if something is stolen on Facebook Marketplace?',
            answer:
              "You can't tell from the listing alone. Ask for the serial number or IMEI in Messenger, check it on SafeOrStolen (safeorstolen.com), and match it on the item at the meetup. Then look at the seller's profile age and other listings. A new profile selling several new-in-box phones or tools with no receipts, and wanting cash fast, fits the pattern of stolen goods.",
          },
          {
            question: 'What if the seller won\'t give me the serial number?',
            answer:
              "Don't buy it. Without the number you can't check the item, and you can't confirm the thing you're handed is the thing you researched. An honest seller has no reason to hide it: the serial number alone doesn't let anyone take over the item. Saying \"I'll show you when we meet\" is a reason to cancel.",
          },
          {
            question: 'Can I get in trouble for buying something stolen on Marketplace?',
            answer:
              "If you didn't know it was stolen, you usually won't be charged, but police can still take the item back for its owner and you'd lose the money. Buying something you knew or should have suspected was stolen can be a crime. Checking the serial number and keeping a record of the check helps show you bought in good faith.",
          },
          {
            question: 'Does a clean serial check mean the item is not stolen?',
            answer:
              "No. It means no report was found in the records searched. Many owners never write down their serial numbers, and some thefts are reported only to the local police. That's why the in-person checks matter: the number on the item matches, the seller unlocks it and signs out, and their story holds up.",
          },
          {
            question: 'Is it a red flag if the seller has no receipt?',
            answer:
              "On its own, not really. Lots of people lose receipts. It becomes a red flag alongside other signs: a new account, several of the same item, a very low price, or a seller who can't unlock the device. For expensive items, ask how they bought it; an order confirmation in their email works as well as paper.",
          },
          {
            question: 'What should I do if the item comes back reported stolen?',
            answer:
              "Don't buy it and don't confront the seller. Cancel politely, save the listing link, screenshots and the chat, and give them to your local police on the non-emergency line. Report the listing through the marketplace too. If you already bought it, see SafeOrStolen's guide to what to do if you bought something stolen.",
          },
          {
            question: 'Where is the safest place to meet a marketplace seller?',
            answer:
              'A police station lobby or its parking lot, if your local department allows it. Many do, and a seller with stolen goods will usually find a reason not to come. Otherwise pick a busy store during the day, bring someone with you, and leave your own valuables at home.',
          },
        ],
      }}
    />
  );
}
