import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "scammer tactics" / "how scammers sell stolen goods online"
 * (Search Console: "expose scammer", 3 impressions, position 26). Removed: a "40-60% below market"
 * statistic, a "billions of dollars" claim, a "SAFE or STOLEN status with confidence score" result
 * that doesn't exist, an app barcode claim, and the false line that using an item you didn't know
 * was stolen is itself illegal. "What to do if you bought something stolen" now links to its own page.
 */
export default function ScammerTacticsExposed() {
  return (
    <ItemLandingPageTemplate
      title="Scammer Tactics: How Stolen Goods Are Sold Online | SafeOrStolen"
      metaDescription="The tricks used to sell stolen phones, bikes, tools and electronics on Facebook Marketplace, OfferUp and Craigslist, what each one looks like in a listing, and how to call it out."
      h1="Scammer Tactics: How Stolen Goods Are Sold Online"
      itemType="Stolen Goods"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the serial number, IMEI or VIN"
      keywords={[
        'scammer tactics',
        'how scammers sell stolen goods',
        'how to expose a scammer',
        'how thieves sell stolen items online',
        'stolen goods on facebook marketplace',
        'marketplace scammer tricks',
        'fencing stolen goods online',
        'red flags stolen items for sale',
      ]}
      quickAnswer={{
        question: 'How do scammers sell stolen goods online?',
        answer:
          "They list stolen items fast and cheap on Facebook Marketplace, OfferUp and Craigslist, hide or crop the serial numbers out of the photos, explain away missing receipts and locked accounts with a story (\"it was my late uncle's\", \"selling for a friend\"), and push for cash right now. The fastest way to call it out is to ask for the serial number before meeting and check it on SafeOrStolen (safeorstolen.com/blog/scammer-tactics-exposed).",
      }}
      sections={[
        {
          heading: 'The tactics, and what they look like',
          table: {
            columns: ['Tactic', 'What you see', 'How to call it out'],
            rows: [
              ['Hiding the serial number', 'Photos cropped above the label, a sticker over the nameplate, "I\'ll show you at pickup"', 'Ask for a photo of the label before meeting. No photo, no meetup.'],
              ['Scratching or replacing the number', 'Ground-off metal, fresh paint, a new label that looks too clean', "Don't buy. A tampered number is one of the strongest signs of theft."],
              ['The borrowed story', '"Selling for my brother", "my ex left it", "estate sale"', 'Ask questions only an owner would know: where it was bought, what\'s wrong with it, the passcode.'],
              ['Locked to someone else', 'A phone still on a lock screen, a laptop with someone else\'s login, "you can just reset it"', 'Have the seller unlock it and sign out in front of you. Nobody else can remove Activation Lock.'],
              ['Speed and pressure', '"Three people want it", "cash only, today", "I\'m moving tomorrow"', 'Slow down. Anyone honest can wait the few seconds a serial check takes.'],
              ['Many of the same thing', 'Several new-in-box phones, tools or e-bikes from one new profile', 'Ask where they came from. A business with stock can show invoices.'],
              ['Quiet meeting spots', 'A side street at night, a last-minute change of location', 'Insist on a police station lobby or a busy store.'],
              ['Fresh accounts', 'Profile created this month, no friends or ratings, no other listings', 'Look at the profile before you reply.'],
            ],
          },
        },
        {
          heading: 'Why stolen goods end up on marketplaces',
          paragraphs: [
            "Marketplaces are local, free to list on, and mostly paid in cash, so a thief can turn a stolen item into money the same day without a pawn shop asking for ID. That's also why the buyer carries the risk: if police find the item, it goes back to the owner, and the money you handed over is gone.",
          ],
        },
        {
          heading: 'Scams that are not about stolen goods',
          list: [
            'Fake listings using copied photos, asking for a deposit before you see anything',
            'Overpayment: a "buyer" sends too much and asks you to refund the difference',
            'Verification-code scams: someone asks you to read back a code sent to your phone',
            'Fake payment emails that look like they come from a payment app',
          ],
        },
      ]}
      content={{
        intro:
          'People who sell stolen goods online use the same handful of tricks over and over. Once you know them, most stolen-item listings give themselves away before you ever meet. For payment scams that have nothing to do with stolen goods, paste the listing or message into the <a href="/scam-checker">scam checker</a>.',
        whatIs:
          "Every one of these tactics exists to stop you from doing two things: checking the serial number, and seeing whether the seller controls the item. Ask for the number early, and insist on watching them unlock and sign out of it. If you already bought something that turned out to be stolen, read <a href=\"/what-to-do-if-you-bought-something-stolen\">what to do if you bought something stolen</a>.",
        howItWorks:
          'Enter the serial number, IMEI or VIN in the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the number, plus extra sources for guns, bikes, phones and Arizona vehicles. You see "reported stolen", "possible match" or "no report found in the records searched", with every source listed.',
        whyCheck:
          "Each tactic above is a story. The serial number check is a fact. A seller who has a good answer for everything but won't share the number has told you what you need to know.",
        benefits: [
          'Checks SafeOrStolen theft reports and public web results',
          'Works for phones, cars, bikes, laptops, tools, consoles and guns',
          'Every source listed with the result',
          'Dated record of the check saved to your account',
          '2 free checks with no credit card',
        ],
        process: [
          'Look at the seller\'s profile before you reply.',
          'Ask for a photo of the serial number, IMEI or VIN on the item.',
          'Check the number on SafeOrStolen.',
          'Meet in a public, watched place and match the number on the item.',
          'Watch the seller unlock the item and sign out of their accounts.',
          "If anything doesn't fit, leave and report the listing.",
        ],
        faqs: [
          {
            question: 'How can you tell if a seller is selling stolen goods?',
            answer:
              "Watch for a hidden or damaged serial number, a seller who can't unlock or sign out of the item, a story that explains why they don't know much about it, several of the same new item, and pressure to pay cash now. Any one can be innocent. Two or three together, especially a refused serial number, is the pattern.",
          },
          {
            question: 'How do I expose a scammer on Facebook Marketplace?',
            answer:
              "Don't confront them. Save screenshots of the listing, the profile and the chat, then use the Report option on the listing and on the profile. If you think the goods are stolen, give the screenshots to your local police. If the serial number is reported stolen on SafeOrStolen (safeorstolen.com), include the result page in what you hand over.",
          },
          {
            question: 'Why do sellers of stolen items want cash?',
            answer:
              "Cash leaves no record of who was paid. Payment apps and card payments tie the money to an account that police can trace. A seller who refuses anything but cash isn't proof of theft, as lots of people prefer cash, but combined with a hidden serial number it's a strong warning.",
          },
          {
            question: 'Is "selling it for a friend" a red flag?',
            answer:
              "Often, yes. It lets the seller avoid questions they can't answer, like where it was bought or what the passcode is. Ask them to bring the friend, or to have the friend unlock the item on a video call. Someone legitimately helping a friend usually can.",
          },
          {
            question: 'What should I do if I think a listing is stolen goods?',
            answer:
              "Don't buy it and don't warn the seller. Save the listing and chat, check the serial number if you have it, and pass everything to your local police on the non-emergency line. If you know the owner, for example from a stolen-bike post, tell them too, and let police handle the recovery.",
          },
        ],
      }}
    />
  );
}
