import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

// Nov 24 2026: new page (addition only). Serial locations verified against Nintendo Support
// ("How to Find the Serial Number on Nintendo Switch 2 and Nintendo Switch consoles").
// Describes only what the check actually searches: SafeOrStolen's own stolen-item reports.
const NintendoSwitchSerialCheck = () => {
  return (
    <ItemLandingPageTemplate
      title="Nintendo Switch Serial Number Check: Is It Stolen?"
      metaDescription="Check a used Nintendo Switch, Switch OLED, Switch Lite or Switch 2 serial number for theft reports before you buy. Where to find the serial, warning signs, first check free."
      h1="Nintendo Switch Serial Number Check"
      itemType="Nintendo Switch"
      dateModified="2026-11-24"
      searchPlaceholder="Enter the Nintendo Switch serial number"
      keywords={[
        'nintendo switch serial number check',
        'switch serial number lookup',
        'check if nintendo switch is stolen',
        'switch 2 serial number check',
        'switch oled serial number',
        'switch lite serial number check',
        'used nintendo switch stolen check'
      ]}
      quickAnswer={{
        question: "How do I check if a Nintendo Switch is stolen?",
        answer: "Get the serial number from the white sticker on the console (bottom edge on the original Switch and Switch Lite, under the kickstand on the Switch OLED and Switch 2) or on screen under HOME Menu > System Settings > System > Serial Information. Enter it at SafeOrStolen to check it against SafeOrStolen's stolen-item reports. The first check is free. At the meetup, make sure the on-screen serial matches the sticker and the box."
      }}
      sections={[
        {
          heading: "Where to find the serial number on every Nintendo Switch",
          paragraphs: [
            "Every Switch shows its serial number on a white sticker on the console and on screen in System Settings. The on-screen number can't be peeled off or swapped, so it is the one to trust."
          ],
          table: {
            columns: ["Model", "Where the serial number is"],
            rows: [
              ["Nintendo Switch (original)", "White sticker on the bottom edge of the console"],
              ["Nintendo Switch Lite", "White sticker on the bottom edge of the console"],
              ["Nintendo Switch OLED Model", "White sticker on the underside of the adjustable stand"],
              ["Nintendo Switch 2", "Fully open the adjustable stand on the back and look under it for the white sticker"],
              ["Any Switch, on screen", "HOME Menu > System Settings > System > Serial Information (shown at the top of the list)"],
              ["Box", "Sticker visible in the window on the bottom of the original package"]
            ]
          }
        },
        {
          heading: "Warning signs a used Switch may be stolen",
          list: [
            "The price is far below other used Switch consoles listed near you",
            "The seller won't send a photo of the serial number before you meet",
            "The serial sticker is missing, scratched off or doesn't match Serial Information",
            "The console is still signed in to someone else's Nintendo Account",
            "The seller has several consoles or new electronics for sale at once",
            "They want a fast cash deal and won't meet somewhere public"
          ]
        },
        {
          heading: "Checklist for buying a used Nintendo Switch",
          list: [
            "Ask for a photo of the serial number before you agree to meet, and check it here",
            "At the meetup, compare the sticker, the box and Serial Information; they should all match",
            "Have the seller remove their Nintendo Account from the console in front of you",
            "Test both Joy-Con, the dock if included, and that a game card loads",
            "Pay in a way that leaves a record, and keep the listing and messages"
          ]
        }
      ]}
      content={{
        intro: "Check a Nintendo Switch serial number before you buy a used console. Works for the original Switch, Switch Lite, Switch OLED and Switch 2. Results in a few seconds, 1 free check, no credit card.",
        whatIs: "A Switch serial number check looks for that exact console in theft reports. When a Switch is stolen, the owner gives its serial number to the police and can report it on SafeOrStolen. SafeOrStolen searches its own stolen-item reports for the serial number. Nintendo does not offer a public stolen-console lookup, so check the serial here and inspect the console in person.",
        howItWorks: "Type the serial number into the search box. SafeOrStolen searches its stolen-item reports and returns one of three results: reported stolen, possible match, or no report found in the records searched. Each result lists the sources it searched and is saved to your account with the date.",
        whyCheck: "Game consoles are easy to carry and quick to resell, which makes them a common target for theft. If you buy a stolen Switch, police can return it to its owner and you lose what you paid. Checking the serial and matching it on screen takes a few minutes.",
        benefits: [
          "Works for Switch, Switch Lite, Switch OLED and Switch 2",
          "1 free check, no account or credit card needed",
          "Searches SafeOrStolen's stolen-item reports",
          "Every result lists the sources searched",
          "Dated record of each check saved to your account",
          "Works on your phone at the meetup"
        ],
        process: [
          "Ask the seller for a photo of the serial number sticker",
          "Enter the serial number on SafeOrStolen",
          "Read the result and the sources that were searched",
          "At the meetup, match the sticker, the box and Serial Information on screen",
          "Have the seller remove their Nintendo Account before you pay"
        ],
        faqs: [
          {
            question: "Where is the serial number on a Nintendo Switch?",
            answer: "On a white sticker on the console: the bottom edge of the original Switch and Switch Lite, the underside of the kickstand on the Switch OLED, and under the fully opened stand on the Switch 2. It is also on screen under HOME Menu > System Settings > System > Serial Information, and on the box."
          },
          {
            question: "Is the Nintendo Switch serial number check free?",
            answer: "Yes. SafeOrStolen gives you 1 free check with no account or credit card. After that it is $4.99 for 1 check or $10 a month for unlimited checks."
          },
          {
            question: "Can Nintendo tell me if a Switch is stolen?",
            answer: "Nintendo does not offer a public stolen-console lookup. Owners report thefts to the police. As a buyer, check the serial number here, match it on screen, and make sure the seller removes their Nintendo Account in front of you."
          },
          {
            question: "Can I check a Joy-Con serial number?",
            answer: "Yes. Each attached Joy-Con's serial number appears on the same Serial Information screen, marked (L) or (R). You can enter it on SafeOrStolen the same way."
          },
          {
            question: "What if the Switch comes back as reported stolen?",
            answer: "Don't buy it and don't confront the seller. Leave, report the listing to the marketplace, and give the listing details to your local police on their non-emergency line."
          }
        ]
      }}
    />
  );
};

export default NintendoSwitchSerialCheck;
