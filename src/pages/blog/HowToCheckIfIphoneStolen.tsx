import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand as an iPhone-only page. It used to reuse most of the general
 * phone guide, and Search Console listed it as "Crawled - currently not indexed". Searchers
 * reach it with "how to check if an iPhone is stolen" and "how to tell if iPhone is stolen",
 * so it answers that first and covers the iPhone-specific checks (Activation Lock, Stolen
 * Device Protection, Remote Management, Carrier Lock, parts history). No outbound links.
 */
export default function HowToCheckIfIphoneStolen() {
  return (
    <ItemLandingPageTemplate
      title="How to Check if an iPhone Is Stolen Before You Buy (2026) | SafeOrStolen"
      metaDescription="How to tell if a used iPhone is stolen: check the IMEI free, make sure Activation Lock is off, spot Lost Mode, Remote Management and carrier locks, and what to ask the seller before you pay."
      h1="How to Check if an iPhone Is Stolen"
      itemType="iPhone"
      dateModified="2026-10-07"
      searchType="imei"
      searchPlaceholder="Enter the iPhone's 15-digit IMEI"
      keywords={[
        'how to check if an iphone is stolen',
        'how to check if iphone is stolen',
        'how to tell if iphone is stolen',
        'how do i know if an iphone is stolen',
        'check if iphone is stolen',
        'stolen iphone check',
        'check iphone imei stolen',
        'iphone activation lock check',
        'is this iphone stolen',
      ]}
      quickAnswer={{
        question: 'How do I check if an iPhone is stolen?',
        answer:
          "Get the IMEI from Settings > General > About (or dial *#06#) and check it on SafeOrStolen (safeorstolen.com/blog/how-to-check-if-iphone-stolen), which searches its theft reports and public web results. Then, with the seller there, have them turn off Find My, sign out of their Apple Account and erase the iPhone, and start setup yourself: if it stops at 'iPhone Locked to Owner', it is still tied to someone else's account, so don't buy it. Finally, confirm in Settings > General > About that Carrier Lock says 'No SIM restrictions'.",
      }}
      sections={[
        {
          heading: 'The 5 signs a used iPhone is stolen',
          list: [
            "It stops at 'iPhone Locked to Owner' during setup. That is Activation Lock, and only the owner can remove it.",
            "The lock screen shows a message and phone number from the owner. That is Lost Mode: the iPhone has been reported lost.",
            "The seller can't turn off Find My, says they 'forgot' the Apple Account password, or tells you it can be removed later.",
            "Setup shows a 'Remote Management' screen. The iPhone belongs to a company or school and is still controlled by it.",
            'The IMEI in Settings does not match the box or the receipt, or the seller will not tell you the IMEI before you meet.',
          ],
        },
        {
          heading: 'What each check tells you',
          table: {
            columns: ['Check', 'What it tells you', 'How'],
            rows: [
              ['IMEI check on SafeOrStolen', 'Whether the IMEI appears in SafeOrStolen theft reports or public web results, plus the model', 'Settings > General > About, or dial *#06#, then use the search box on this page'],
              ['Activation Lock', "Whether the iPhone is still tied to someone else's Apple Account", "Watch the seller erase it, then start setup. 'iPhone Locked to Owner' means walk away."],
              ['Carrier Lock', 'Whether the iPhone works on any carrier or only on one', "Settings > General > About > Carrier Lock should say 'No SIM restrictions'"],
              ['Remote Management', 'Whether a company or school still controls the iPhone', "A 'Remote Management' screen during setup means it is managed. Don't buy it."],
              ['Parts and Service History', 'Whether the screen, battery or camera was replaced, and with what', 'Settings > General > About, under Parts and Service History'],
            ],
          },
        },
        {
          heading: 'Why Activation Lock is the check that matters most',
          paragraphs: [
            "Activation Lock turns on with Find My and ties the iPhone to the owner's Apple Account. After an erase, the iPhone asks for that account before it can be used. A thief can wipe a stolen iPhone, but they can't get past Activation Lock without the owner's password, so a locked iPhone can't be activated and used as an ordinary phone.",
            'Apple no longer offers a public page to check Activation Lock status from a serial number or IMEI. The only reliable way for a buyer to check is to watch the seller erase the iPhone and to start setup yourself before you pay.',
          ],
        },
        {
          heading: 'Stolen Device Protection: why turning off Find My can take an hour',
          paragraphs: [
            "Newer iPhones have Stolen Device Protection. When it is on and the iPhone is away from places the owner uses often, such as home or work, turning off Find My needs Face ID or Touch ID and then a one-hour security delay. That protects owners from thieves, but it also means an honest seller meeting you somewhere else may not be able to remove Find My on the spot.",
            "The fix is simple: ask the seller to turn off Find My, sign out and erase the iPhone at home before you meet, then start setup yourself at the meetup. A seller who refuses, or can't get past Face ID on their own phone, is a red flag.",
          ],
        },
      ]}
      content={{
        intro:
          'Before you buy a used iPhone, check three things: the IMEI, Activation Lock and the carrier lock. This guide shows how to do each one in a few minutes, what the warning signs look like, and what to do if the iPhone turns out to be stolen.',
        whatIs:
          "Every iPhone has an IMEI, a 15-digit number that identifies the phone on cellular networks, and a serial number. When an iPhone is stolen, the owner can report the IMEI to their carrier and the police, put the iPhone in Lost Mode, and leave Activation Lock on so no one else can use it. Checking an iPhone means looking for each of those signs before you hand over money.",
        howItWorks:
          "Enter the IMEI in the search box. SafeOrStolen searches its own theft reports and public web results for that IMEI and shows the phone's model, so you can confirm it matches what you are buying. It cannot see Activation Lock or Apple's records, so do the Activation Lock and Carrier Lock checks on the iPhone itself.",
        whyCheck:
          "A stolen iPhone is often Activation Locked, so it may never work for you, and police can return it to the owner without paying you back. Thieves also sell iPhones that look fine at the meetup and get blocked later. Checking first, and buying only an erased iPhone you have set up yourself, avoids both.",
        benefits: [
          'Free IMEI check against SafeOrStolen theft reports and public web results',
          'Shows the model so you can spot a mismatched IMEI',
          'Works for every iPhone model with an IMEI',
          'Explains the Activation Lock, Carrier Lock and Remote Management checks Apple does not offer as a public lookup',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for the IMEI before you agree to meet, and check it here.',
          'At the meetup, open Settings > General > About and confirm the IMEI and model match.',
          "Check that Carrier Lock says 'No SIM restrictions', or that it is locked to the carrier you use.",
          'Have the seller turn off Find My, sign out of their Apple Account, and erase the iPhone (Settings > General > Transfer or Reset iPhone > Erase All Content and Settings).',
          "Start setup yourself and connect to Wi-Fi. If it asks for the previous owner's Apple Account or shows Remote Management, don't buy it.",
          'Pay only once the iPhone reaches the Home Screen on your own account.',
        ],
        faqs: [
          {
            question: 'Can you check if an iPhone is stolen by IMEI?',
            answer:
              "Yes. Check the IMEI on SafeOrStolen (safeorstolen.com/blog/how-to-check-if-iphone-stolen) for theft reports and public web results. Also do the Activation Lock check on the iPhone itself, because Apple's Activation Lock status is not available as a public IMEI lookup.",
          },
          {
            question: 'How do I find the IMEI on an iPhone?',
            answer:
              'Open Settings > General > About and scroll to IMEI, or dial *#06#. It is also on the original box. If the iPhone is locked, the IMEI on the box is a start, but confirm it in Settings once it is unlocked.',
          },
          {
            question: 'Can I check Activation Lock with the serial number?',
            answer:
              'Not anymore. Apple removed its public Activation Lock status page. The reliable check is to watch the seller erase the iPhone and to start setup yourself before you pay.',
          },
          {
            question: "What does 'iPhone Locked to Owner' mean?",
            answer:
              "The iPhone is protected by Activation Lock and is still tied to the previous owner's Apple Account. Only that owner can remove it. Don't buy an iPhone that shows this screen, whatever the seller promises.",
          },
          {
            question: 'Can a stolen iPhone be unlocked?',
            answer:
              "Not legitimately. Activation Lock can only be removed by the owner, or by Apple with the original proof of purchase. Services that offer to 'remove iCloud' for a fee are not something to rely on, and the iPhone may still be reported stolen.",
          },
          {
            question: 'What is Lost Mode on an iPhone?',
            answer:
              "Lost Mode is turned on by the owner through Find My when an iPhone is lost or stolen. It locks the iPhone and can show a message and phone number on the lock screen. An iPhone in Lost Mode belongs to someone who is looking for it.",
          },
          {
            question: 'Is a carrier-locked iPhone stolen?',
            answer:
              "Not necessarily. Many iPhones are locked to a carrier while they are being paid off. It means the iPhone works only on that carrier until the carrier unlocks it, so check Carrier Lock in Settings > General > About and make sure it fits the carrier you use.",
          },
          {
            question: 'What should I do if I bought a stolen iPhone?',
            answer:
              "Stop using it, keep the listing, messages and payment record, and contact your local police. If you paid through a platform or card, report it to them as well. Our guide to buying a stolen phone covers the steps in detail.",
          },
        ],
      }}
    />
  );
}
