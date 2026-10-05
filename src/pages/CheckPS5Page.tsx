import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

// Oct 5 2026: rewritten by hand. The old copy claimed searches of police, pawn-shop and Sony
// databases that the check never runs. This version only describes what actually happens, and
// absorbs the two PS5 blog guides (now 301'd here) so Google sees one strong PS5 page.
const CheckPS5Page = () => {
  return (
    <ItemLandingPageTemplate
      title="Free PS5 Serial Number Check — Is This PS5 Stolen? | SafeOrStolen"
      metaDescription="Free PS5 serial number checker. Find the serial on any PS5, original, Slim or Pro, check it against stolen reports in seconds, and test for a PSN ban before you pay."
      h1="Free PS5 Serial Number Checker"
      itemType="PlayStation 5"
      dateModified="2026-10-05"
      searchPlaceholder="Enter the PS5 serial number"
      keywords={[
        'ps5 serial number check',
        'ps5 serial number checker',
        'ps5 serial number check free',
        'playstation 5 serial number check',
        'ps5 serial number lookup',
        'how to check if ps5 is stolen',
        'how to check if ps5 is banned before buying',
        'ps5 pro serial number check',
        'ps5 slim serial number check'
      ]}
      quickAnswer={{
        question: "How do I check a PS5 serial number?",
        answer: "Find the serial number on the label on the back of the console, or on the PS5 itself under Settings > System > System Software > Console Information. Enter it at SafeOrStolen (safeorstolen.com/check-ps5), which checks it against its stolen-item reports and public web results and gives you a result in a few seconds. The first 2 checks are free. Before you pay, also make sure the number on the console matches the box, then sign in to your own PlayStation account to test for a ban."
      }}
      sections={[
        {
          heading: "Where to find the serial number on every PS5 model",
          paragraphs: [
            "Every PS5 shows its serial number in two places: printed on a label on the console, and on screen in the system settings. The on-screen number is the one that can't be swapped, so it is the one to trust. If it doesn't match the label or the box, don't buy the console."
          ],
          table: {
            columns: ["Model", "Model numbers", "Where the serial number is"],
            rows: [
              ["PS5 (original, disc or digital)", "CFI-10xx, CFI-11xx, CFI-12xx", "Label on the back of the console near the ports, and on the box label"],
              ["PS5 Slim (disc or digital)", "CFI-20xx", "Label on the back of the console, and on the box label"],
              ["PS5 Pro", "CFI-70xx", "Label on the back of the console, and on the box label"],
              ["Any PS5, on screen", "All models", "Settings > System > System Software > Console Information"]
            ]
          }
        },
        {
          heading: "How to check if a PS5 is banned before buying",
          paragraphs: [
            "A serial number check tells you whether the console has been reported stolen. It can't tell you whether Sony has banned it from PlayStation Network, and a banned PS5 can't play online, use the PlayStation Store or download games. Test for that in person before you pay.",
            "Ask the seller to have the console set up and connected to the internet. Sign in with your own PlayStation account, open the PlayStation Store, and start an online game or a download. If the console says it can't connect to PlayStation Network while your phone works fine on the same Wi-Fi, walk away. Sign out of your account when you're done."
          ]
        },
        {
          heading: "Checklist for buying a used PS5",
          list: [
            "Ask for a photo of the serial number before you agree to meet, and check it here",
            "At the meetup, compare the serial on the label, the box and Console Information; all three should match",
            "Sign in to your own PlayStation account and test the Store and online play",
            "Have the seller sign out of their account and turn off Console Sharing and Offline Play under Settings > Users and Accounts > Other",
            "Watch the seller reset the console: Settings > System > System Software > Reset Options > Reset Your Console",
            "Check the controller pairs and charges, and the disc drive reads a disc if it has one",
            "Pay in a way that leaves a record, and keep the listing and messages"
          ]
        },
        {
          heading: "Xbox, Nintendo Switch and other consoles",
          paragraphs: [
            "The same check works for any console with a serial number. On an Xbox Series X or S the serial is under Settings > System > Console info and on the sticker on the back. On a Nintendo Switch it is on the bottom edge of the console and under System Settings > System > Serial Information. A Steam Deck or PS4 works the same way: find the serial on the console's label and check it on SafeOrStolen."
          ]
        }
      ]}
      content={{
        intro: "Check a PlayStation 5 serial number for free before you buy a used console. It works for the original PS5, the PS5 Slim and the PS5 Pro, disc or digital. Results in a few seconds, 2 free checks, no credit card.",

        whatIs: "A PS5 serial number check looks for that exact console in theft reports. When a PS5 is stolen, the owner gives its serial number to the police and their insurer, and can report it on SafeOrStolen. SafeOrStolen searches its own stolen-item reports and public web results for the serial number, including listings and posts that mention it. Sony does not offer a public lookup for stolen consoles, so checking here and inspecting the console in person are the two things a buyer can do.",

        howItWorks: "Type the serial number into the search box. SafeOrStolen searches its stolen-item reports and public web results at the same time and returns one of three results: reported stolen, possible match, or no report found in the records searched. Each result lists the sources it searched and is saved to your account with the date. After the check you can get a $1.99 verification certificate showing you checked the console before the sale.",

        whyCheck: "Game consoles are among the most commonly stolen and resold electronics, because they are easy to carry and sell quickly online. If you buy a stolen PS5, police can return it to the owner and you lose what you paid. A stolen or banned console can also be blocked from PlayStation Network. A few minutes of checking before you pay protects you.",

        benefits: [
          "Free PS5 serial number check, 2 free checks with no card",
          "Works for PS5, PS5 Slim and PS5 Pro, disc or digital",
          "Searches SafeOrStolen theft reports and public web results",
          "Results in a few seconds, with every source listed",
          "Dated record of every check saved to your account",
          "Also works for Xbox, Nintendo Switch, Steam Deck and PS4",
          "Optional $1.99 certificate to show you checked before buying",
          "Free web app for checking at the meetup"
        ],

        process: [
          "Ask the seller for a photo of the serial number on the back of the console",
          "Enter the serial number on SafeOrStolen",
          "Read the result and the sources that were searched",
          "At the meetup, match the serial on the label, the box and Console Information",
          "Sign in to your own PlayStation account to test for a PSN ban before you pay"
        ],

        faqs: [
          {
            question: "Where is the serial number on a PS5?",
            answer: "On a label on the back of the console, on the label on the box, and on screen under Settings > System > System Software > Console Information. The on-screen number is the one to trust, because labels and boxes can be swapped."
          },
          {
            question: "Is the PS5 serial number check free?",
            answer: "Yes. SafeOrStolen gives you 2 free checks with a free account and no credit card. After that it is $3.99 per check or $14.99 a month for unlimited checks."
          },
          {
            question: "How can I tell if a PS5 is stolen?",
            answer: "Check the serial number on SafeOrStolen, then look for the usual signs: a price far below other used PS5s, no box or a box with a different serial, a seller who won't share the serial before meeting, several consoles for sale at once, or a console still signed in to someone else's account."
          },
          {
            question: "Can Sony tell me if a PS5 is stolen?",
            answer: "Sony does not offer a public stolen-console lookup. Owners report thefts to the police, and the police can contact Sony. As a buyer, your options are to check the serial number here, inspect the console in person, and test that it can sign in to PlayStation Network."
          },
          {
            question: "Can I check a PS5 Pro or PS5 Slim serial number?",
            answer: "Yes. SafeOrStolen's check works the same way for every PS5 model. The PS5 Slim has model numbers starting CFI-20 and the PS5 Pro CFI-70, and both show the serial on the back label and in Console Information."
          },
          {
            question: "What should I do if the PS5 comes back as stolen?",
            answer: "Don't buy it, and don't confront the seller. Leave, report the listing to the marketplace, and give the listing details to your local police on their non-emergency line. If you already bought it, contact the police and keep your messages and payment record."
          },
          {
            question: "Should I ask the seller for the serial number?",
            answer: "Yes, before you agree to meet. An honest seller can send a photo in a minute. If they refuse, or the number at the meetup doesn't match, walk away."
          }
        ]
      }}
    />
  );
};

export default CheckPS5Page;
