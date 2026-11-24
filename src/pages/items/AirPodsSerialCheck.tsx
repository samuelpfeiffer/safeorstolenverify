import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

// Nov 24 2026: new page (addition only). Serial locations verified against Apple Support
// ("Find the serial number of your AirPods", support.apple.com/108041).
// Describes only what the check actually searches: SafeOrStolen's own stolen-item reports.
const AirPodsSerialCheck = () => {
  return (
    <ItemLandingPageTemplate
      title="AirPods Serial Number Check: Are Used AirPods Stolen?"
      metaDescription="Check a used AirPods, AirPods Pro or AirPods Max serial number for theft reports before you buy. Where to find the serial, how to spot stolen AirPods, first check free."
      h1="AirPods Serial Number Check"
      itemType="AirPods"
      dateModified="2026-11-24"
      searchPlaceholder="Enter the AirPods serial number"
      keywords={[
        'airpods serial number check',
        'airpods serial number lookup',
        'check if airpods are stolen',
        'airpods pro serial number check',
        'airpods max serial number',
        'used airpods stolen check'
      ]}
      quickAnswer={{
        question: "How do I check if AirPods are stolen?",
        answer: "Find the serial number on the underside of the charging case lid, on the box next to the barcode, or on a paired iPhone under Settings > [AirPods name]. On AirPods Max, detach the left ear cushion. Enter it at SafeOrStolen to check it against SafeOrStolen's stolen-item reports. The first check is free. Then pair the AirPods with your own iPhone before you pay and make sure the serial shown in Settings matches the case."
      }}
      sections={[
        {
          heading: "Where to find the AirPods serial number",
          paragraphs: [
            "Apple says AirPods and their charging case share one serial number. The number shown in your iPhone's Settings after pairing is the one to trust, because cases can be swapped."
          ],
          table: {
            columns: ["Where", "How to find it"],
            rows: [
              ["Charging case", "Printed on the underside of the case lid"],
              ["AirPods Max", "Detach the left magnetic ear cushion to see the serial number"],
              ["Paired iPhone or iPad", "Settings > tap your AirPods (or the More Info button next to them) to see the serial number"],
              ["Paired Mac", "Apple menu > System Settings > Bluetooth > More Info next to the AirPods"],
              ["Box or receipt", "Next to the barcode on the original packaging, or on the original receipt"]
            ]
          }
        },
        {
          heading: "Warning signs used AirPods may be stolen",
          list: [
            "The price is far below other used AirPods listed near you",
            "The seller won't share the serial number before you meet",
            "The serial in your iPhone's Settings doesn't match the case lid or the box",
            "Your iPhone says the AirPods are linked to someone else's Apple Account",
            "The seller has several pairs of AirPods or other new electronics for sale",
            "They want a fast cash deal and won't let you pair the AirPods first"
          ]
        },
        {
          heading: "Checklist for buying used AirPods",
          list: [
            "Ask for the serial number before you meet, and check it here",
            "At the meetup, pair the AirPods with your own iPhone",
            "Compare the serial in Settings with the case lid and the box",
            "If your iPhone shows they are linked to another Apple Account, ask the seller to remove them in Find My before you pay",
            "Test both earbuds, charging and noise control if the model has it",
            "Pay in a way that leaves a record, and keep the listing and messages"
          ]
        }
      ]}
      content={{
        intro: "Check an AirPods serial number before you buy used AirPods, AirPods Pro or AirPods Max. Results in a few seconds, 1 free check, no credit card.",
        whatIs: "An AirPods serial number check looks for that exact pair in theft reports. When AirPods are stolen, the owner can give the serial number to the police and report it on SafeOrStolen. SafeOrStolen searches its own stolen-item reports for the serial number. Apple does not offer a public stolen-AirPods lookup, so check the serial here and pair the AirPods with your own iPhone before you pay.",
        howItWorks: "Type the serial number into the search box. SafeOrStolen searches its stolen-item reports and returns one of three results: reported stolen, possible match, or no report found in the records searched. Each result lists the sources it searched and is saved to your account with the date.",
        whyCheck: "AirPods are small, valuable and easy to resell, which makes them a common target for theft. If you buy stolen AirPods, they can be returned to the owner and you lose what you paid. A serial check plus a pairing test at the meetup takes a few minutes.",
        benefits: [
          "Works for AirPods, AirPods Pro and AirPods Max",
          "1 free check, no account or credit card needed",
          "Searches SafeOrStolen's stolen-item reports",
          "Every result lists the sources searched",
          "Dated record of each check saved to your account",
          "Works on your phone at the meetup"
        ],
        process: [
          "Ask the seller for the serial number from the case lid or box",
          "Enter the serial number on SafeOrStolen",
          "Read the result and the sources that were searched",
          "At the meetup, pair the AirPods with your iPhone and match the serial in Settings",
          "Make sure they aren't linked to someone else's Apple Account before you pay"
        ],
        faqs: [
          {
            question: "Where is the serial number on AirPods?",
            answer: "On the underside of the charging case lid, on the box next to the barcode, and in Settings on a paired iPhone or iPad. On AirPods Max, detach the left ear cushion. Apple says the AirPods and the case share one serial number."
          },
          {
            question: "Is the AirPods serial number check free?",
            answer: "Yes. SafeOrStolen gives you 1 free check with no account or credit card. After that it is $4.99 for 1 check or $10 a month for unlimited checks."
          },
          {
            question: "Can Apple tell me if AirPods are stolen?",
            answer: "Apple does not offer a public stolen-AirPods lookup. Check the serial number here, then pair the AirPods with your own iPhone. If your iPhone shows they are linked to another Apple Account, ask the seller to remove them in Find My before you pay."
          },
          {
            question: "Do both AirPods have the same serial number as the case?",
            answer: "Apple's support page says AirPods and their charging case share a serial number. The serial your iPhone shows after pairing is the most reliable one to check."
          },
          {
            question: "What if the AirPods come back as reported stolen?",
            answer: "Don't buy them and don't confront the seller. Leave, report the listing to the marketplace, and give the listing details to your local police on their non-emergency line."
          }
        ]
      }}
    />
  );
};

export default AirPodsSerialCheck;
