import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 8 2026: audited by hand for "stolen laptop check". Removed claims that SafeOrStolen checks
 * iCloud/Microsoft lock status, manufacturer or pawn databases, the "AI analysis" source, invented
 * theft figures and prices, and the outdated advice that Apple's coverage page shows Activation Lock.
 */
const CheckLaptopPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Stolen Laptop Check: Look Up a Laptop Serial Number | SafeOrStolen"
      metaDescription="Check a laptop serial number before you buy. Where to find it on a MacBook, Dell, HP or Lenovo, what the check searches, and how to spot a locked or stolen laptop."
      h1="Stolen Laptop Check: Look Up a Serial Number Before You Buy"
      itemType="Laptop"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the laptop serial number"
      keywords={[
        'check if laptop stolen',
        'stolen laptop check',
        'MacBook stolen check',
        'laptop serial number lookup',
        'verify laptop not stolen',
        'is my laptop stolen',
        'Dell serial number lookup'
      ]}
      quickAnswer={{
        question: 'How do I check if a laptop is stolen?',
        answer:
          "Get the serial number from the sticker or engraving on the bottom and from the system settings, and make sure they match. Enter it on SafeOrStolen (safeorstolen.com/check-laptop), which searches theft reports filed on SafeOrStolen and public web results in a few seconds. Then have the seller sign out of their Apple or Microsoft account and erase the laptop in front of you. If it asks for someone else's login or a firmware password, don't buy it.",
      }}
      sections={[
        {
          heading: 'Where to find a laptop serial number',
          table: {
            columns: ['Laptop', 'Where to look'],
            rows: [
              ['MacBook', 'Apple menu > About This Mac, and printed on the bottom case near the hinge'],
              ['Windows laptop', 'Settings > System > About, or the sticker on the bottom. Dell calls it the Service Tag.'],
              ['Lenovo ThinkPad', 'The label on the bottom, or in the BIOS setup screen'],
              ['Any laptop', 'The original box label and the receipt should show the same serial'],
            ],
          },
        },
        {
          heading: 'What a SafeOrStolen laptop check searches, and what it doesn\'t',
          table: {
            columns: ['Searched', 'Not searched'],
            rows: [
              ['Theft reports owners filed on SafeOrStolen', 'Apple Activation Lock or Microsoft account status'],
              ['Public web results that mention the serial (listings, posts)', 'Manufacturer warranty or registration records'],
              ['Every source listed on the result, saved with the date', 'Police, pawn shop or insurance records'],
            ],
          },
        },
        {
          heading: 'Signs a used laptop is stolen',
          list: [
            'It asks for an Apple ID, Microsoft account or school/company login after a reset',
            'A firmware or BIOS password the seller says they "forgot"',
            'A "Remote Management" screen during Mac setup, or a company asset tag with no release paperwork',
            'The serial sticker is peeled off or the serial in settings doesn\'t match the case',
            'The seller won\'t reset it in front of you or has several laptops for sale with no receipts',
          ],
        },
      ]}
      content={{
        intro: "Check a laptop serial number before you buy from Facebook Marketplace, Craigslist, eBay or a pawn shop. SafeOrStolen searches theft reports and public web results in a few seconds; a reset in front of you shows whether the laptop is still locked to someone else.",
        whatIs: "A stolen laptop check looks up the laptop's serial number to see whether anyone has reported it stolen. Every laptop has a serial printed on the case and stored in its firmware. Owners give that number to police and to sites like SafeOrStolen when a laptop is stolen, so matching it is the most direct way to connect a laptop to a theft report.",
        howItWorks: "Type the serial into the search box. SafeOrStolen searches theft reports owners filed on SafeOrStolen and public web results that mention the serial, and shows one of three results: reported stolen, possible match, or no report found in the records searched. Every source is listed and the check is saved to your account with the date. Account locks have to be checked on the laptop itself.",
        whyCheck: "A stolen laptop can be locked by its owner through Find My Mac or a Microsoft account, which can leave it unusable. If police identify it, they can return it to the owner and you lose what you paid. Laptops are easy to carry off and resell quickly online, so a few minutes of checking at the meetup is worth it.",
        benefits: [
          "Works for MacBook, Dell, HP, Lenovo, ASUS, Acer, MSI and Razer laptops",
          "Searches SafeOrStolen theft reports and public web results",
          "Results in a few seconds, with every source listed",
          "Each check saved to your account with the date",
          "2 free checks with a free account, then $0.99 a check or $10 a month unlimited",
        ],
        process: [
          "Find the serial number: on a MacBook, Apple menu > About This Mac or the bottom case; on Windows, Settings > System > About or the bottom sticker.",
          "Check that the serial in settings matches the one on the case and on any receipt or box.",
          "Enter the serial on SafeOrStolen and read the result.",
          "Ask the seller to sign out of iCloud or their Microsoft account and erase the laptop while you watch.",
          "Start setup. If it asks for someone else's account, a firmware password or a company login, walk away.",
          "Pay with a method that leaves a record and keep the listing and messages.",
        ],
        faqs: [
          {
            question: "How do I check if a MacBook is stolen?",
            answer: "Match the serial in Apple menu > About This Mac with the one on the bottom case, then check it on SafeOrStolen (safeorstolen.com/check-laptop) for theft reports and public web results. Apple doesn't offer a public Activation Lock lookup, so have the seller sign out of their Apple ID, turn off Find My and erase the Mac in front of you. If setup asks for their Apple ID, don't buy it."
          },
          {
            question: "How do I check if a Windows laptop is stolen?",
            answer: "Get the serial from Settings > System > About or the bottom sticker and search it on SafeOrStolen for theft reports and public web results. Then have the seller reset the laptop while you watch. If setup asks for a Microsoft account you don't have, or the BIOS has a password the seller can't give you, walk away. Ask for the receipt too."
          },
          {
            question: "What is Activation Lock on a MacBook?",
            answer: "Activation Lock ties a Mac with Apple silicon or a T2 chip to the owner's Apple ID while Find My is on. After an erase, the Mac asks for that Apple ID before it can be set up. Without the owner's password you can't use it. The only fix is for the owner to remove it, so watch the seller sign out before you pay."
          },
          {
            question: "Can activation locks on laptops be removed or bypassed?",
            answer: "Not legitimately without the owner's credentials or proof of purchase sent to Apple or the manufacturer. Services that promise to bypass a lock are a red flag. If a laptop is locked to someone else's account and the seller can't sign out in front of you, don't buy it."
          },
          {
            question: "What are red flags when buying a used laptop?",
            answer: "A price far below what the model sells for used, a seller who won't share the serial, a firmware password they \"forgot\", a Remote Management or company login screen, a removed serial sticker, or several laptops for sale with no receipts. Any one of these is a reason to slow down; two or more is a reason to walk away."
          },
          {
            question: "How long does SafeOrStolen's laptop serial check take?",
            answer: "A few seconds. SafeOrStolen searches its own theft reports and public web results for the serial and lists every source it searched. Account locks aren't part of the check, so confirm them on the laptop before you buy."
          },
          {
            question: "What should I do if the laptop check shows it's stolen?",
            answer: "Don't buy it and don't confront the seller. Screenshot the listing, save the messages and note the serial, then report the listing to the marketplace and call your local police non-emergency line. If you already paid, keep the laptop as it is and contact police and your payment provider."
          }
        ]
      }}
    />
  );
};

export default CheckLaptopPage;
