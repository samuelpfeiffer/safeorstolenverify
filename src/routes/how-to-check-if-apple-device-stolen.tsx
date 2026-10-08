import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "how to check if an Apple device is stolen", aimed at iPad,
 * Apple Watch and AirPods buyers. No Search Console rows for this URL yet. It used to render
 * APPLE_DEVICE_GUIDE from src/data/moreGuides; it is now self-contained. Removed the outbound
 * Apple links (Check Coverage and Activation Lock support pages) and the "AI analysis" claim.
 * iPhones are covered on /blog/how-to-check-if-iphone-stolen and Macs on
 * /how-to-check-if-laptop-stolen; this page links to both.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="How to Check if an iPad, Apple Watch or AirPods Are Stolen | SafeOrStolen"
      metaDescription="How to check if a used Apple device is stolen: find the serial on an iPad, Apple Watch or AirPods, check it, and make sure Activation Lock and Find My are off."
      h1="How to Check if an Apple Device Is Stolen: iPad, Apple Watch, AirPods"
      itemType="Apple Device"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the iPad, Apple Watch or AirPods serial number"
      keywords={[
        "how to check if apple device is stolen",
        "how to check if an ipad is stolen",
        "check if apple watch is stolen",
        "how to check if airpods are stolen",
        "apple serial number stolen check",
        "apple watch activation lock",
        "ipad activation lock check",
        "used airpods linked to another apple account",
      ]}
      quickAnswer={{
        question: "How do I check if an Apple device is stolen?",
        answer:
          "Find the serial number in the device's settings, match it with the box, and check it on SafeOrStolen (safeorstolen.com/how-to-check-if-apple-device-stolen) for theft reports and public web results. Then make sure the seller removes it from their Apple Account: an iPad should be erased and set up by you, an Apple Watch unpaired and paired to your iPhone, and AirPods paired to your iPhone without an 'another Apple Account' warning.",
      }}
      sections={[
        {
          heading: "Where to find the serial number",
          table: {
            columns: ["Device", "In settings", "On the device or box"],
            rows: [
              ["iPad", "Settings > General > About (cellular models also show an IMEI)", "Back of the iPad and the box label"],
              ["Apple Watch", "On the watch: Settings > General > About. Or on the paired iPhone: Watch app > General > About", "Inside the band slot on many models, and the box label"],
              ["AirPods", "On the paired iPhone: Settings > [AirPods name], scroll to Serial Number", "Underside of the case lid, and the box label"],
              ["Mac", "Apple menu > About This Mac", "Underside of the case. See our laptop guide for the full Mac check"],
            ],
          },
        },
        {
          heading: "The account check for each device",
          table: {
            columns: ["Device", "What the seller does", "Red flag"],
            rows: [
              ["iPad", "Turns off Find My, signs out of their Apple Account, then Settings > General > Transfer or Reset iPad > Erase All Content and Settings", "Setup shows 'iPad Locked to Owner' or Remote Management"],
              ["Apple Watch", "Unpairs it in the Watch app on their iPhone (My Watch > All Watches > the info button > Unpair Apple Watch), which turns off Activation Lock", "When you pair it, your iPhone asks for the previous owner's Apple Account password"],
              ["AirPods", "Removes them from their Apple Account in Find My, or in Bluetooth settings with Forget This Device", "Your iPhone says they're linked to another Apple Account, or the seller won't let you pair them"],
            ],
          },
          paragraphs: [
            "Apple doesn't offer a public lookup for Activation Lock status from a serial number, so these on-device checks are the only way to know before you pay.",
          ],
        },
        {
          heading: "Signs a used Apple device is stolen",
          list: [
            "The serial in Settings doesn't match the box, the receipt or (for AirPods) the case.",
            "AirPods sold without their case, or a case whose serial doesn't match the earbuds' settings.",
            "An Apple Watch sold 'factory reset' that the seller can't unpair from their own iPhone.",
            "An iPad already erased before you arrive, with a seller who doesn't want you to start setup.",
            "A lock screen showing someone else's message and phone number. That's Lost Mode.",
            "A recent model priced far below other listings, with a push for cash right now.",
          ],
        },
      ]}
      content={{
        intro:
          'Check a used iPad, Apple Watch or AirPods in two parts: look up the serial number, then make sure it\'s off the seller\'s Apple Account. Buying an iPhone? Use <a href="/blog/how-to-check-if-iphone-stolen">how to check if an iPhone is stolen</a>. Buying a MacBook? See <a href="/how-to-check-if-laptop-stolen">how to check if a laptop is stolen</a>.',
        whatIs:
          'When an Apple device is stolen, the owner usually leaves it on their Apple Account and marks it lost in Find My, and may report the serial number to police. A check looks for both: a theft report on the serial, and an account the seller can\'t remove. If the iPad has cellular, you can also run its IMEI on the <a href="/imei-checker">IMEI check</a>.',
        howItWorks:
          "Enter the serial number in the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with the sources listed. SafeOrStolen can't see Apple Account or Activation Lock status, so do those checks on the device.",
        whyCheck:
          "A stolen iPad or Apple Watch that's still Activation Locked can't be set up by you at all, and police can return any stolen device to its owner without paying you back. AirPods still on the owner's account can show up in their Find My. A few minutes with the seller avoids all of that.",
        benefits: [
          "Free serial check against SafeOrStolen theft reports and public web results",
          "Works for iPad, Apple Watch, AirPods, Mac and other Apple devices",
          "Device-by-device account checks Apple doesn't offer as a public lookup",
          "Every check saved to your account with the date",
          "2 free checks with no credit card",
        ],
        process: [
          "Ask the seller for a screenshot of the serial number in Settings before you meet.",
          "Check the serial here.",
          "At the meetup, match the serial on the device, the box and (for AirPods) the case.",
          "Watch the seller remove the device from their Apple Account: erase the iPad, unpair the Apple Watch, or remove the AirPods.",
          "Set it up or pair it with your own iPhone before you pay.",
        ],
        faqs: [
          {
            question: "Can you check if an Apple device is stolen by serial number?",
            answer:
              "Yes, for theft reports. Enter the serial on SafeOrStolen (safeorstolen.com/how-to-check-if-apple-device-stolen), which searches its theft reports and public web results. Apple doesn't offer a public Activation Lock lookup by serial, so also have the seller remove the device from their Apple Account before you pay.",
          },
          {
            question: "How do I check if an Apple Watch is stolen?",
            answer:
              "Check the serial from Settings > General > About, then have the seller unpair the watch from their iPhone in the Watch app. Unpairing turns off Activation Lock. Pair it with your own iPhone before you pay. If it asks for the previous owner's Apple Account password, don't buy it.",
          },
          {
            question: "How do I check if AirPods are stolen?",
            answer:
              "Match the serial in the case lid with the one in the iPhone's AirPods settings, check it for theft reports, and pair the AirPods with your own iPhone at the meetup. If your iPhone says they're linked to another Apple Account, the seller hasn't removed them, and the owner may still see them in Find My.",
          },
          {
            question: "How do I know if an iPad is iCloud locked?",
            answer:
              "Watch the seller erase it in Settings > General > Transfer or Reset iPad, then start setup yourself. If it shows 'iPad Locked to Owner' and asks for someone's Apple Account, Activation Lock is on and only that owner can remove it. Our guide to what iCloud locked means explains the lock in detail.",
          },
          {
            question: "Does SafeOrStolen check Apple's records?",
            answer:
              "No. SafeOrStolen searches its own theft reports and public web results. It can't see Apple Account, Find My or Activation Lock status, and Apple doesn't make those available as a public lookup. That's why the account checks have to be done on the device with the seller.",
          },
          {
            question: "What should I do if an Apple device comes back stolen?",
            answer:
              "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and pass the details to your local police. If you already paid, stop using the device and follow our steps for what to do if you bought something stolen.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/how-to-check-if-apple-device-stolen")({
  component: GuidePage,
});
