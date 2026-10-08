import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "check if a gaming console is stolen" / "console serial number
 * lookup" (no Search Console data yet). This is the hub: Nintendo Switch and handhelds are covered
 * here, PS5 and Xbox get one-line pointers to /check-ps5 and /check-xbox. Removed "500K+ consoles
 * stolen annually", "3 sec" timing, and false claims that we check PlayStation Network, Xbox and
 * Nintendo ban records and "stolen device databases".
 */
const GamingConsoleCheck = () => (
  <ItemLandingPageTemplate
    title="Check if a Gaming Console Is Stolen: Console Serial Lookup | SafeOrStolen"
    metaDescription="Check if a used Nintendo Switch, PlayStation, Xbox or handheld is stolen. Where each console's serial number is, what to have the seller reset, and a free serial check."
    h1="Check if a Gaming Console Is Stolen"
    itemType="Gaming Console"
    dateModified="2026-10-07"
    searchPlaceholder="Enter the console's serial number"
    keywords={[
      'check if gaming console is stolen',
      'console serial number lookup',
      'gaming console serial number check',
      'check if nintendo switch is stolen',
      'nintendo switch serial number check',
      'where is the serial number on a nintendo switch',
      'stolen console check',
      'buying used console',
    ]}
    quickAnswer={{
      question: 'How do I check if a gaming console is stolen?',
      answer:
        "Read the serial number on screen in the console's system settings and make sure it matches the sticker on the console. Enter it on SafeOrStolen (safeorstolen.com/check-gaming-console-stolen), which searches theft reports and public web results in a few seconds; the first 2 checks are free. Then watch the seller sign out of their account and reset the console before you pay. A seller who can't do that may not own it.",
    }}
    sections={[
      {
        heading: 'Where to find the serial number on each console',
        table: {
          columns: ['Console', 'On screen', 'On the hardware'],
          rows: [
            ['Nintendo Switch, Switch OLED, Switch Lite', 'System Settings > System > Serial Information', 'A sticker on the bottom edge of the console, next to the USB-C port'],
            ['Nintendo Switch 2', 'In System Settings, under System', 'A label on the console and on the box'],
            ['PlayStation 5', 'Settings > System > System Software > Console Information', 'A sticker on the back or base. Full guide: safeorstolen.com/check-ps5'],
            ['Xbox Series X|S, Xbox One', 'Settings > System > Console info', 'A barcode sticker on the back or bottom. Full guide: safeorstolen.com/check-xbox'],
            ['Handheld gaming PCs (Steam Deck and others)', 'In the system or settings menu, where the device has one', 'A label on the back of the device and on the box'],
          ],
        },
      },
      {
        heading: 'Nintendo Switch: what to have the seller do',
        list: [
          'Open System Settings > System > Serial Information and compare the number with the sticker by the USB-C port.',
          'Open the eShop or a game that needs their account, to show the Nintendo Account belongs to them.',
          'Remove their user and Nintendo Account from the console.',
          'Reset it: System Settings > System > Formatting Options > Initialize Console. The console restarts to the language-selection screen.',
          'Test both Joy-Con, the dock and a game cartridge before you pay.',
        ],
      },
      {
        heading: 'Signs a used console may be stolen',
        list: [
          'The serial sticker is missing or scratched, or doesn\'t match the number in settings',
          'The seller won\'t power it on, sign in, or reset it in front of you',
          'A "sealed" console from a private seller well below the store price',
          'Several consoles for sale from one person, with no receipts',
          'Personal items left on it (someone else\'s user profile, a name on the case) that the seller can\'t explain',
        ],
      },
    ]}
    content={{
      intro:
        'Check a used Nintendo Switch, PlayStation, Xbox or handheld gaming PC before you buy it. Find the serial number, match it on screen, and check it for theft reports in a few seconds.',
      whatIs:
        'A console stolen check looks for theft reports tied to the console\'s serial number. Owners give the serial to the police when a console is stolen. Buying a PlayStation? The <a href="/check-ps5">PS5 serial number check</a> covers it step by step. Buying an Xbox? Use the <a href="/check-xbox">Xbox serial number check</a>.',
      howItWorks:
        "Type the serial number into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It does not search Sony, Microsoft or Nintendo records; none of them offer a public stolen-console lookup.",
      whyCheck:
        "Consoles are small, valuable and quick to resell, and a stolen one can be taken back by the police and returned to the owner. The serial check covers theft reports. The on-screen match and the account reset show you whether the seller actually controls the console.",
      benefits: [
        'Works for Nintendo, PlayStation, Xbox and handheld gaming PCs',
        'Searches SafeOrStolen theft reports and public web results',
        'Results in a few seconds with every source listed',
        'A dated record of the check is saved to your account',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for a photo of the serial sticker or the settings screen showing it.',
        'Check the serial on SafeOrStolen.',
        'At the meetup, power the console on and match the serial in settings to the sticker.',
        'Watch the seller remove their account and reset the console.',
        "If the serial is reported stolen or doesn't match, don't buy it, and give the listing to your local police.",
      ],
      faqs: [
        {
          question: 'Where is the serial number on a Nintendo Switch?',
          answer:
            'On the Switch, Switch OLED and Switch Lite, go to System Settings > System > Serial Information. It is also on a sticker on the bottom edge of the console next to the USB-C port, and on the box. The dock has its own separate serial, so use the one from the console.',
        },
        {
          question: 'Can I check a console serial number for free?',
          answer:
            'Yes. SafeOrStolen (safeorstolen.com/check-gaming-console-stolen) checks a console serial against its theft reports and public web results for free for your first 2 checks, with no credit card. After that, a single check is $0.99 or unlimited checks are $10 a month.',
        },
        {
          question: 'Can Nintendo, Sony or Microsoft tell me if a console is stolen?',
          answer:
            "None of them offer a public stolen-console lookup, and they won't tell a buyer who owns a console. Theft reports go to the police. What you can check is whether the seller can sign in, remove their account and reset the console while you watch.",
        },
        {
          question: 'How do I reset a Nintendo Switch before buying it?',
          answer:
            'Have the seller go to System Settings > System > Formatting Options > Initialize Console and confirm. That deletes their users, saves and settings, and the Switch restarts to the first-time setup screen. Do it after they have shown you their Nintendo Account works on it.',
        },
        {
          question: 'Is a sealed console from a private seller safe to buy?',
          answer:
            "Not automatically. Boxed consoles are a common target of package and store theft, and a box can be resealed. Ask for the receipt, check the serial on the box label, and be wary of a price well below what stores charge.",
        },
        {
          question: 'What should I do if a console comes back reported stolen?',
          answer:
            "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the serial number and listing to your local police on their non-emergency line.",
        },
      ],
    }}
  />
);

export default GamingConsoleCheck;
