import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to check if laptop is stolen" (5 impressions, position 4) and
 * "check if laptop is stolen" (10 impressions, position 5.2), plus "can you track a computer by serial
 * number" and "find stolen laptop". This is the step-by-step meetup guide; the serial lookup itself
 * lives on /check-laptop-stolen and is linked rather than repeated. Now self-contained instead of
 * reading LAPTOP_GUIDE from the shared data file.
 */
export default function HowToCheckIfLaptopStolenPage() {
  return (
    <ItemLandingPageTemplate
      title="How to Check if a Laptop Is Stolen: 6 Checks Before You Buy | SafeOrStolen"
      metaDescription="How to check if a laptop is stolen before you buy: find the serial on a Mac or Windows PC, spot Activation Lock and company management, and watch the seller reset it."
      h1="How to Check if a Laptop Is Stolen"
      itemType="Laptop"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the laptop's serial number"
      keywords={[
        'how to check if laptop is stolen',
        'check if laptop is stolen',
        'how to check if a laptop is stolen or not',
        'can you track a computer by serial number',
        'find stolen laptop',
        'check if macbook is stolen',
        'laptop activation lock',
        'buying used laptop stolen',
      ]}
      quickAnswer={{
        question: 'How do I check if a laptop is stolen?',
        answer:
          "Read the serial number from the operating system, not just the sticker: on a Mac, Apple menu > About This Mac; on Windows, run a short command in PowerShell (below). Check it on SafeOrStolen (safeorstolen.com/how-to-check-if-laptop-stolen) for theft reports. Then watch the seller sign out and erase it. If setup shows Activation Lock, a \"Remote Management\" screen or a company sign-in page, the laptop still belongs to someone else.",
      }}
      sections={[
        {
          heading: 'Step 1: Read the serial number from the system',
          paragraphs: [
            'A sticker can be swapped; the serial the laptop reports about itself is harder to fake. Compare the two.',
          ],
          table: {
            columns: ['Laptop', 'Where to read the serial', 'Also on'],
            rows: [
              ['MacBook (macOS Ventura and later)', 'Apple menu > About This Mac, or System Settings > General > About', 'Printed on the underside of the case'],
              ['MacBook (older macOS)', 'Apple menu > About This Mac > Overview', 'The underside of the case'],
              ['Windows laptop', 'Open PowerShell and type: Get-CimInstance Win32_BIOS | Select-Object SerialNumber', 'A sticker on the bottom or under the battery'],
              ['Lenovo, Dell, HP', 'The same PowerShell command; the brand\'s support app also shows it', 'Bottom sticker. Dell calls it the Service Tag.'],
              ['Chromebook', 'The label on the bottom of the case', 'The box label and the receipt'],
            ],
          },
        },
        {
          heading: 'Steps 2 to 6: what to check at the meetup',
          list: [
            'Check the serial on SafeOrStolen for theft reports, ideally before you travel to see it.',
            'Mac: open System Information (hold Option and choose Apple menu > System Information). On the Hardware page, "Activation Lock Status" should say Disabled once the seller has signed out of Find My.',
            'Look for company or school control: an asset tag, an engraved name, a "Remote Management" screen during Mac setup, or a Windows setup page with an organization\'s name and sign-in. That laptop is still managed by its owner.',
            'Watch the seller sign out of their Apple Account or Microsoft account, then erase the laptop: on a Mac, System Settings > General > Transfer or Reset > Erase All Content and Settings; on Windows, Settings > System > Recovery > Reset this PC > Remove everything.',
            'Start setup yourself. It should not ask for the previous owner\'s password, a BitLocker recovery key, or a firmware password.',
          ],
        },
        {
          heading: 'Can you track a computer by serial number?',
          paragraphs: [
            "No. A serial number identifies a laptop, but it doesn't report a location. Only the owner can locate a laptop, and only if they turned on Find My (Mac) or Find my device (Windows, under Settings > Privacy & security) before it was stolen, and only while it is online. What a serial number does is tie a recovered laptop to the owner's police report, which is why buyers should check it.",
          ],
        },
      ]}
      content={{
        intro:
          'Six checks to run before you pay for a used laptop: read the serial from the system, check it for theft reports, and make sure no Apple, Microsoft or company account still controls it.',
        whatIs:
          'Checking if a laptop is stolen means two things: looking for a theft report on its serial number, and making sure the laptop is free of the owner\'s locks. For the serial lookup and brand-by-brand serial formats, go straight to the <a href="/check-laptop-stolen">laptop serial number check</a>. This page walks through the in-person checks.',
      howItWorks:
        "Type the serial number into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It doesn't see Apple Activation Lock or company device management, so do those checks on the laptop itself.",
      whyCheck:
        "A stolen laptop can be taken back by the police and returned to the owner. A laptop that is still locked to an Apple account, BitLocker or a company's management can't be set up at all. Both cost you the money you paid, and both are easy to catch before you hand it over.",
      benefits: [
        'Works for MacBook, Dell, HP, Lenovo, ASUS, Acer, Microsoft Surface and Chromebooks',
        'Searches SafeOrStolen theft reports and public web results',
        'Results in a few seconds with every source listed',
        'Optional $1.99 verification certificate showing you checked before the sale',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for a screenshot of About This Mac, or of the PowerShell serial command, before you meet.',
        'Check the serial on SafeOrStolen.',
        'At the meetup, read the serial on the laptop yourself and compare it with the bottom sticker.',
        'On a Mac, confirm Activation Lock Status says Disabled; on any laptop, look for company or school management.',
        'Watch the seller sign out and erase it, then start setup yourself before paying.',
      ],
      faqs: [
        {
          question: 'How do I check if a laptop is stolen?',
          answer:
            "Read the serial number from the system (Apple menu > About This Mac, or a PowerShell command on Windows) and check it on SafeOrStolen (safeorstolen.com/how-to-check-if-laptop-stolen). Then confirm the laptop isn't locked: no Activation Lock on a Mac, no company management, and the seller signs out and erases it in front of you.",
        },
        {
          question: 'Can you track a computer by serial number?',
          answer:
            "No. A serial number doesn't broadcast a location, and neither the public nor the manufacturer can look up where a laptop is from its serial. The owner can locate it only if Find My (Mac) or Find my device (Windows) was turned on and the laptop is online. Police use the serial to match a recovered laptop to a theft report.",
        },
        {
          question: 'How do I find the serial number on a Windows laptop?',
          answer:
            'Open PowerShell and type Get-CimInstance Win32_BIOS | Select-Object SerialNumber, then press Enter. The serial it shows comes from the laptop\'s firmware. Compare it with the sticker on the bottom. Dell laptops call it the Service Tag; Lenovo and HP print it on the bottom label.',
        },
        {
          question: 'How do I check if a MacBook is stolen?',
          answer:
            'Check the serial from Apple menu > About This Mac on SafeOrStolen. Then open System Information and look for "Activation Lock Status" on the Hardware page: it should say Disabled. Watch the seller erase the Mac and make sure setup doesn\'t show Activation Lock or a "Remote Management" screen.',
        },
        {
          question: 'What does a Remote Management screen mean on a used Mac?',
          answer:
            "It means the Mac is enrolled in a company's or school's device management, so that organization can still lock or erase it. Unless the seller is the organization or has a written release from it, treat the Mac as someone else's property and don't buy it.",
        },
        {
          question: 'How do I find my stolen laptop?',
          answer:
            "Sign in to Find My (Apple) or your Microsoft account's device list (Windows) from another device and see if it shows a location. Report the theft to police with the serial number, and report it on SafeOrStolen so a buyer who checks the serial sees it. Search local listings for your model too.",
        },
      ],
    }}
  />
  );
}
