import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "check if ipad is stolen" / "tablet serial number check" (no
 * Search Console data yet). Removed "500K+ tablets stolen yearly", the "3 sec" timing, and false
 * claims that we check manufacturer and Samsung databases. We don't see Activation Lock or Google
 * account status, so the page tells buyers how to see it themselves on the device.
 */
const TabletCheck = () => (
  <ItemLandingPageTemplate
    title="Check if an iPad or Tablet Is Stolen: Serial & Lock Check | SafeOrStolen"
    metaDescription="Check if a used iPad or Android tablet is stolen: where the serial number and IMEI are, how to spot Activation Lock or a Google account lock, and a free serial check."
    h1="Check if an iPad or Tablet Is Stolen"
    itemType="Tablet"
    dateModified="2026-10-07"
    searchPlaceholder="Enter the tablet's serial number or IMEI"
    keywords={[
      'check if ipad is stolen',
      'how to check if an ipad is stolen',
      'tablet serial number check',
      'ipad serial number lookup',
      'check if samsung tablet is stolen',
      'ipad activation lock check',
      'ipad locked to owner',
      'used tablet stolen check',
    ]}
    quickAnswer={{
      question: 'How do I check if an iPad is stolen?',
      answer:
        "Open Settings > General > About on the iPad and enter the serial number on SafeOrStolen (safeorstolen.com/check-tablet-stolen), which searches theft reports and public web results in a few seconds. Cellular iPads also show an IMEI there. Then have the seller sign out of their Apple Account and erase the iPad in front of you. If setup shows \"iPad Locked to Owner\", it is still tied to someone's account. Don't buy it.",
    }}
    sections={[
      {
        heading: 'Where to find the serial number and IMEI',
        table: {
          columns: ['Tablet', 'Serial number', 'IMEI (cellular models only)'],
          rows: [
            ['iPad', 'Settings > General > About. Also printed in small text on the back of many models, and on the box.', 'Settings > General > About, below the serial'],
            ['Samsung Galaxy Tab', 'Settings > About tablet (on some versions under Status information)', 'Settings > About tablet'],
            ['Other Android tablets', 'Settings > About tablet, or a label on the back or the box', 'Settings > About tablet'],
            ['Amazon Fire tablets', 'Settings > Device Options > About Fire Tablet', 'Most Fire tablets are Wi-Fi only'],
          ],
        },
      },
      {
        heading: 'Account locks: the check that matters most on a tablet',
        paragraphs: [
          "An iPad with Find My turned on is protected by Apple's Activation Lock. After it is erased, the setup screen says \"iPad Locked to Owner\" and asks for the owner's Apple Account password. Without it, the iPad can't be set up. Apple doesn't offer a public lookup for Activation Lock, and SafeOrStolen doesn't check it either, so you have to see it on the device.",
          "Android tablets have a similar lock. If a tablet is reset without removing the Google account, setup asks you to sign in with a Google account that was previously synced on the device. Samsung tablets can also be tied to the owner's Samsung account.",
        ],
        list: [
          'iPad: have the seller go to Settings > [their name] > Sign Out, then Settings > General > Transfer or Reset iPad > Erase All Content and Settings. Wait for the Hello screen and start setup yourself.',
          'Android: have the seller remove their Google and Samsung accounts in Settings > Accounts, then do a factory reset. Start setup yourself and make sure it doesn\'t ask for a previous account.',
        ],
      },
      {
        heading: 'Signs a used tablet may be stolen',
        list: [
          'The seller can\'t get past the lock screen, or says they "forgot the passcode"',
          'Setup shows "iPad Locked to Owner" or asks for a previously synced Google account',
          'A school or company asset sticker, an engraved name, or a "Remote Management" screen during setup',
          'The serial in Settings doesn\'t match the box or the receipt',
          'A low price with a story about a "locked" or "iCloud" iPad that only needs a simple fix',
        ],
      },
    ]}
    content={{
      intro:
        'Check a used iPad, Samsung Galaxy Tab or other tablet before you buy it. Look up the serial number for theft reports, then make sure it is free of the owner\'s account locks.',
      whatIs:
        'A tablet stolen check has two parts: a serial or IMEI check for theft reports, and a check that the tablet is not still locked to someone\'s Apple or Google account. For a cellular iPad you can also check the IMEI with the <a href="/imei-check">IMEI check</a>, which includes an optional paid carrier blacklist check.',
      howItWorks:
        "Type the serial number or IMEI into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the number, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It doesn't see Apple or Google account status, so do the account steps above with the seller.",
      whyCheck:
        "A tablet that is still locked to the owner's account can't be set up, and a stolen one can be taken back by the police. The serial check catches reported thefts; watching the seller sign out and erase it catches the locked tablets that a serial check can't.",
      benefits: [
        'Works for iPad, Samsung Galaxy Tab, Amazon Fire and other tablets',
        'Checks serial numbers and IMEIs against SafeOrStolen theft reports and public web results',
        'Results in a few seconds with every source listed',
        'A dated record of the check is saved to your account',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for a screenshot of Settings > General > About (iPad) or About tablet (Android).',
        'Check the serial number, and the IMEI on a cellular model, on SafeOrStolen.',
        'At the meetup, match the serial on screen to the screenshot and the box.',
        'Watch the seller sign out of their account and erase the tablet, then start setup yourself.',
        "If it comes back reported stolen or setup asks for the owner's account, don't buy it, and give the listing to your local police.",
      ],
      faqs: [
        {
          question: 'Where is the serial number on an iPad?',
          answer:
            "Go to Settings > General > About; the serial number is listed there, along with the IMEI on cellular models. Many iPads also have the serial printed in small text on the back, and it is on the box label. If the iPad is locked, the serial is on the back or the box.",
        },
        {
          question: 'Can I check an iPad serial number for free?',
          answer:
            'Yes. SafeOrStolen (safeorstolen.com/check-tablet-stolen) checks an iPad or tablet serial against its theft reports and public web results for free for your first 2 checks, with no credit card. It does not show Activation Lock status, which you check by having the seller erase the iPad in front of you.',
        },
        {
          question: 'How do I know if an iPad has Activation Lock?',
          answer:
            'Erase it and start setup. If the setup screen says "iPad Locked to Owner" and asks for an Apple Account password, Activation Lock is on. Before it is erased, you can check Settings > [name] > Find My: if Find My iPad is on, the seller needs to sign out of their Apple Account first.',
        },
        {
          question: 'Can you remove Activation Lock without the owner?',
          answer:
            "No. Only the owner can remove it with their Apple Account password, or Apple can remove it for the original owner with proof of purchase. Sellers who offer a locked iPad cheap with a \"simple fix\" story are selling a device you won't be able to use.",
        },
        {
          question: 'How do I check if a Samsung tablet is stolen?',
          answer:
            "Find the serial in Settings > About tablet and check it on SafeOrStolen. Then have the seller remove their Google and Samsung accounts and factory reset the tablet. If setup asks for a Google account that was previously synced on the device, it is still locked to someone. Don't buy it.",
        },
        {
          question: 'What does "Remote Management" mean on an iPad?',
          answer:
            "It means the iPad is enrolled in a school's or company's device management. The organization still controls it, and it can be locked or erased by them. Unless the seller is that organization, or can show a release, treat it as someone else's property.",
        },
      ],
    }}
  />
);

export default TabletCheck;
