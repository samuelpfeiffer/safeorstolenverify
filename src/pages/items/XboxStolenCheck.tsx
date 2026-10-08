import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "check if xbox is stolen" / "xbox serial number check" (no
 * Search Console data yet). Removed invented figures ("500K+ consoles stolen yearly", "60% home
 * burglaries" and the rest of that breakdown), false source claims (Microsoft ban lists, insurer
 * claims, pawn and GameStop databases), and claims that Microsoft bans reported-stolen consoles,
 * which we can't confirm. PS5 is covered on /check-ps5.
 */
const XboxStolenCheck = () => (
  <ItemLandingPageTemplate
    title="Check if an Xbox Is Stolen: Xbox Serial Number Check | SafeOrStolen"
    metaDescription="Check if a used Xbox Series X, Series S or Xbox One is stolen. Where the serial number is, how to match it in Console info, and what to have the seller do before you pay."
    h1="Check if an Xbox Is Stolen: Xbox Serial Number Check"
    itemType="Xbox"
    dateModified="2026-10-07"
    searchPlaceholder="Enter the 12-digit Xbox serial number"
    keywords={[
      'check if xbox is stolen',
      'xbox serial number check',
      'xbox serial number lookup',
      'stolen xbox check',
      'where is the serial number on xbox series x',
      'xbox series s serial number',
      'how to find xbox serial number',
      'buying used xbox',
    ]}
    quickAnswer={{
      question: 'How do I check if an Xbox is stolen?',
      answer:
        "Get the 12-digit serial number from the sticker on the console, then confirm it on screen in Settings > System > Console info. If the two don't match, walk away. Enter the serial on SafeOrStolen (safeorstolen.com/check-xbox), which searches theft reports and public web results in a few seconds; the first 2 checks are free. Before paying, watch the seller remove their account and reset the console.",
    }}
    sections={[
      {
        heading: 'Where to find the Xbox serial number',
        table: {
          columns: ['Where', 'How to get there', 'Notes'],
          rows: [
            ['On screen (all Xbox Series X|S and Xbox One models)', 'Press the Xbox button > Profile & system > Settings > System > Console info', 'Shows the serial number and the console ID. This is the one that can\'t be peeled off.'],
            ['Sticker on the console', 'A white barcode sticker on the back or bottom of the console', 'Should match Console info exactly.'],
            ['Original box', 'The barcode label on the side of the box', 'A box from a different console is a warning sign, not a reassurance.'],
            ['Owner\'s Microsoft account', 'The owner\'s device list in their Microsoft account', 'A real owner who registered the console can show it to you there.'],
          ],
        },
      },
      {
        heading: 'What to have the seller do before you pay',
        list: [
          'Turn the console on and open Settings > System > Console info so you can read the serial on screen and compare it with the sticker.',
          'Sign in to their profile. An owner gets into their own account without trouble; someone who says "I forgot the password" may not be the owner.',
          'Remove their account: Settings > Account > Remove accounts.',
          'Reset it: Settings > System > Console info > Reset console > Reset and remove everything. The console restarts to the first-time setup screen.',
          'Test the disc drive (Series X and disc-drive models), every controller and an online sign-in with your own account before handing over money.',
        ],
      },
      {
        heading: 'Signs a used Xbox may be stolen',
        list: [
          'The serial sticker is missing, scratched, or doesn\'t match Console info',
          'The seller won\'t turn the console on, or won\'t sign in or reset it in front of you',
          'A "sealed" Xbox from a private seller at a price well below the store price',
          'Several consoles for sale from the same person, with no receipts',
          'A listing that says the console is "banned" or "offline only" for a cheap price',
        ],
      },
    ]}
    content={{
      intro:
        'Check a used Xbox Series X, Xbox Series S or Xbox One before you buy it. Find the 12-digit serial, match it on screen, and check it for theft reports in a few seconds.',
      whatIs:
        'An Xbox stolen check looks for theft reports tied to the console\'s serial number. Owners give the serial to the police when a console is stolen, and can report it on SafeOrStolen. Buying a PlayStation instead? Use the <a href="/check-ps5">PS5 serial number check</a>. For Nintendo Switch and other consoles, see the <a href="/check-gaming-console-stolen">gaming console check</a>.',
      howItWorks:
        "Type the serial number into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It does not search Microsoft's records; Microsoft doesn't offer a public stolen-console lookup.",
      whyCheck:
        "Consoles are easy to resell, and a stolen one can be taken back by the police and returned to the owner. The serial check covers theft reports; the on-screen match and the account removal show you whether the person selling it actually controls the console.",
      benefits: [
        'Works for Xbox Series X, Xbox Series S, Xbox One, One S and One X',
        'Searches SafeOrStolen theft reports and public web results',
        'Results in a few seconds with every source listed',
        'A dated record of the check is saved to your account',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for a photo of the serial sticker, or of the Console info screen, before you meet.',
        'Check the serial on SafeOrStolen.',
        'At the meetup, open Settings > System > Console info and make sure the on-screen serial matches the sticker and the photo.',
        'Watch the seller remove their account and reset the console, then sign in with your own account.',
        "If the serial is reported stolen or doesn't match, don't buy, and give the listing to your local police.",
      ],
      faqs: [
        {
          question: 'Where is the serial number on an Xbox Series X or Series S?',
          answer:
            'On screen, go to Settings > System > Console info; the serial number is listed there. It is also on a white barcode sticker on the back or bottom of the console and on the label of the original box. Use the on-screen number, because a sticker can be swapped.',
        },
        {
          question: 'How many digits is an Xbox serial number?',
          answer:
            'An Xbox serial number is 12 digits, all numbers. If a seller gives you something with letters in it, it is probably the model number or console ID, not the serial. Read it from Settings > System > Console info to be sure.',
        },
        {
          question: 'Can I check an Xbox serial number for free?',
          answer:
            'Yes. SafeOrStolen (safeorstolen.com/check-xbox) checks an Xbox serial against its theft reports and public web results for free for your first 2 checks, with no credit card. After that, a single check is $0.99 or unlimited checks are $10 a month.',
        },
        {
          question: 'Can Microsoft tell me if an Xbox is stolen?',
          answer:
            "Microsoft doesn't offer a public lookup for stolen consoles, and it won't tell a buyer who owns one. Theft reports go to the police. What you can check yourself is whether the seller can sign in, remove their account and reset the console in front of you.",
        },
        {
          question: 'Can a stolen Xbox be tracked?',
          answer:
            "Not by the public. The owner can give police the serial number, and a console registered to their Microsoft account shows in their device list. If a stolen console is found, the serial is what ties it back to the owner, which is why buyers should check it before paying.",
        },
        {
          question: 'How do I factory reset an Xbox before buying it?',
          answer:
            'Have the seller go to Settings > System > Console info > Reset console and choose "Reset and remove everything". That removes their accounts, games and settings, and the console restarts to the setup screen. Then sign in with your own account before paying.',
        },
        {
          question: 'What should I do if an Xbox comes back reported stolen?',
          answer:
            "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the serial number and listing to your local police on their non-emergency line.",
        },
      ],
    }}
  />
);

export default XboxStolenCheck;
