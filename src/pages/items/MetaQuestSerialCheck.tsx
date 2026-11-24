import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

// Nov 24 2026: new page (addition only). Serial locations verified against Meta Help
// ("Find the serial number for your Meta Quest headset and controllers").
// Describes only what the check actually searches: SafeOrStolen's own stolen-item reports.
const MetaQuestSerialCheck = () => {
  return (
    <ItemLandingPageTemplate
      title="Meta Quest Serial Number Check: Is a Used Quest Stolen?"
      metaDescription="Check a used Meta Quest 3 or Quest 3S serial number for theft reports before you buy. Where to find the headset serial, warning signs, first check free."
      h1="Meta Quest Serial Number Check"
      itemType="Meta Quest headset"
      dateModified="2026-11-24"
      searchPlaceholder="Enter the Meta Quest serial number"
      keywords={[
        'meta quest serial number check',
        'quest 3 serial number lookup',
        'check if meta quest is stolen',
        'quest 3s serial number check',
        'used vr headset stolen check'
      ]}
      quickAnswer={{
        question: "How do I check if a Meta Quest is stolen?",
        answer: "Find the serial number printed on the inside of the headset's left arm (pivot the arm up and away from the headset to see it). Enter it at SafeOrStolen to check it against SafeOrStolen's stolen-item reports. The first check is free. Meta notes that the S/N on the box is different from the one on the headset, so check the headset's own number."
      }}
      sections={[
        {
          heading: "Where to find the Meta Quest serial number",
          paragraphs: [
            "Meta prints the headset's serial number on the device itself. The box carries a different number, so the one on the headset is the one to check."
          ],
          table: {
            columns: ["Where", "How to find it"],
            rows: [
              ["Headset (Quest 3 / 3S)", "Inside of the left headset arm: pivot the arm up and away from the headset"],
              ["Owner's Meta account", "Listed under the device model name in the owner's Meta account device settings"],
              ["Box", "S/N under the barcode on the white sticker; Meta says this differs from the number on the headset"],
              ["Touch controllers", "Each controller has its own serial number"]
            ]
          }
        },
        {
          heading: "Warning signs a used Quest may be stolen",
          list: [
            "The price is far below other used Quest headsets listed near you",
            "The seller won't share the headset serial number before you meet",
            "The headset is still signed in to someone else's Meta account and they won't remove it",
            "There's no box, controllers or charger, with no good explanation",
            "The seller has several headsets or new electronics for sale at once"
          ]
        },
        {
          heading: "Checklist for buying a used Meta Quest",
          list: [
            "Ask for a photo of the serial on the left arm before you meet, and check it here",
            "At the meetup, confirm the number on the headset matches the photo",
            "Have the seller remove the headset from their Meta account and factory reset it in front of you",
            "Test both controllers, tracking and charging",
            "Pay in a way that leaves a record, and keep the listing and messages"
          ]
        }
      ]}
      content={{
        intro: "Check a Meta Quest serial number before you buy a used VR headset. Results in a few seconds, 1 free check, no credit card.",
        whatIs: "A Meta Quest serial number check looks for that exact headset in theft reports. When a headset is stolen, the owner can give the serial number to the police and report it on SafeOrStolen. SafeOrStolen searches its own stolen-item reports for the serial number. Meta does not offer a public stolen-headset lookup, so check the serial here and inspect the headset in person.",
        howItWorks: "Type the serial number into the search box. SafeOrStolen searches its stolen-item reports and returns one of three results: reported stolen, possible match, or no report found in the records searched. Each result lists the sources it searched and is saved to your account with the date.",
        whyCheck: "VR headsets are valuable and easy to resell. If you buy a stolen headset, police can return it to its owner and you lose what you paid. Checking the serial and making sure the seller removes their account takes a few minutes.",
        benefits: [
          "Works for Meta Quest headsets and controllers",
          "1 free check, no account or credit card needed",
          "Searches SafeOrStolen's stolen-item reports",
          "Every result lists the sources searched",
          "Dated record of each check saved to your account",
          "Works on your phone at the meetup"
        ],
        process: [
          "Ask the seller for a photo of the serial on the headset's left arm",
          "Enter the serial number on SafeOrStolen",
          "Read the result and the sources that were searched",
          "At the meetup, confirm the number on the headset",
          "Have the seller remove their Meta account and factory reset the headset before you pay"
        ],
        faqs: [
          {
            question: "Where is the serial number on a Meta Quest 3?",
            answer: "Meta says it is printed on the inside of the left headset arm. Pivot the arm up and away from the headset to see it. The owner can also see it under the device model name in their Meta account."
          },
          {
            question: "Should I use the serial number on the Quest box?",
            answer: "Check the number on the headset. Meta says the S/N on the box is different from the serial number on the device itself."
          },
          {
            question: "Is the Meta Quest serial number check free?",
            answer: "Yes. SafeOrStolen gives you 1 free check with no account or credit card. After that it is $4.99 for 1 check or $10 a month for unlimited checks."
          },
          {
            question: "What if the headset comes back as reported stolen?",
            answer: "Don't buy it and don't confront the seller. Leave, report the listing to the marketplace, and give the listing details to your local police on their non-emergency line."
          }
        ]
      }}
    />
  );
};

export default MetaQuestSerialCheck;
