/**
 * Oct 7 2026: rewritten by hand for "what to do if your car is stolen" (no Search Console rows for
 * this page; "find stolen car" and "find stolen car by vin number" reach other pages at positions
 * 38 to 84). Was the shared STOLEN_CAR_VICTIM_GUIDE data; now self-contained, written for the owner
 * in the first hours after the theft, with a link to /report-stolen.
 */
import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="What to Do if Your Car Is Stolen: Steps for the First Hour | SafeOrStolen"
      metaDescription="Car stolen? Rule out a tow, report it to police with your VIN and plate, call your insurer and lender, and give police any tracker location. Steps in order."
      h1="What to Do if Your Car Is Stolen"
      itemType="Stolen Car"
      dateModified="2026-10-07"
      searchType="vin"
      searchPlaceholder="Enter your car's VIN"
      keywords={[
        "what to do if your car is stolen",
        "car stolen what to do",
        "my car was stolen what do i do",
        "how to report a stolen car",
        "find stolen car",
        "find stolen car by vin number",
        "stolen car insurance claim",
      ]}
      quickAnswer={{
        question: "What should I do if my car is stolen?",
        answer:
          "First call the police non-emergency line and ask whether the car was towed; if you have a loan, ask the lender about repossession. If it wasn't, report it stolen to the police with the VIN, plate, color and where you last parked it, and get the report number. Then call your insurer and lender, give police any tracker or connected-car location, and report it on SafeOrStolen (safeorstolen.com/report-stolen) so buyers who check the VIN see it.",
      }}
      sections={[
        {
          heading: "The first hour, in order",
          list: [
            "Check you're in the right spot and that no one in your household took it",
            "Look for tow-away signs and call the police non-emergency line: towed cars are logged with the police in most areas",
            "If the car is financed or leased, call the lender and ask whether it was repossessed",
            "Report it stolen to the police. Call 911 if you saw it happen or someone was hurt; otherwise the non-emergency line or online report",
            "Give the officer any location from the maker's app, a subscription tracking service or a tracking tag. Don't go there yourself",
            "Write down the report number and the officer's name. Your insurer and lender will ask for both",
          ],
        },
        {
          heading: "Who to call, and what they'll ask for",
          table: {
            columns: ["Who", "Why", "Have ready"],
            rows: [
              ["Police", "A stolen report puts the VIN and plate into the systems every officer checks, including the FBI's NCIC file", "VIN, plate and state, year, make, model, color, dents or stickers, where and when you last saw it"],
              ["Your insurer", "Theft is usually covered by comprehensive coverage, not liability-only", "Police report number, policy number, keys (insurers often ask how many you have), what was inside"],
              ["Lender or leasing company", "They own part of the car and are part of the claim", "Account number and the police report number"],
              ["Toll account and parking apps", "Stop charges and get a record of where the car has been", "Plate and transponder number"],
              ["Your state DMV, if required", "Some states want stolen plates reported so they can be replaced", "Police report and registration"],
              ["SafeOrStolen", "Your report shows up when a buyer checks the VIN or plate", "VIN, plate, description and police report number"],
            ],
          },
        },
        {
          heading: "Where your VIN is when the car isn't there",
          paragraphs: [
            "You need the VIN for every call, and the car isn't there to read it from. It's on your insurance card and in your insurer's app, on the registration card and title, on loan or lease paperwork and the lender's website, and on service receipts. If you keep any of those in the glove box, look in the others first.",
          ],
        },
        {
          heading: "What not to do",
          list: [
            "Don't go to where a tracker shows the car, and don't confront anyone driving it. Give the location to police",
            "Don't pay anyone who messages you offering to return the car for a fee",
            "Don't wait a day to report it; a late report can slow the insurance claim",
            "Don't stop loan or lease payments unless your lender says so in writing",
          ],
        },
        {
          heading: "If the car is found",
          paragraphs: [
            "Police will contact you, usually because an officer ran the plate or VIN. Recovered cars are often towed to an impound lot, and the lot may charge towing and storage fees that grow each day, so go quickly and ask your insurer whether they cover those fees. Bring your ID, registration and the report number. Photograph the damage before you move the car, check for items left by the thief, and tell police and your insurer so the stolen report is cleared.",
          ],
        },
      ]}
      content={{
        intro:
          "Your car is gone. Rule out a tow, report it to the police with your VIN and plate, then call your insurer and lender. This page lists the calls in order and what each one needs from you.",
        whatIs:
          "A stolen-car report is the police record that tells every officer, and later your insurer, that the car was taken without your permission. It is what gets the VIN and plate flagged when the car is stopped, parked or offered for sale. Reporting it on SafeOrStolen as well adds it to the theft reports that buyers search before they pay.",
        howItWorks:
          "After the police report, add the theft on SafeOrStolen's <a href=\"/report-stolen\">report a stolen item</a> page with your VIN, plate and description. Every VIN or plate check on SafeOrStolen searches those reports, so a buyer checking your car sees it was reported stolen. You can also check your own VIN in the box above: it searches SafeOrStolen theft reports and public web results, which can turn up a listing that mentions the VIN.",
        whyCheck:
          "Stolen cars are often sold quickly, sometimes with a swapped plate. The sooner your report is out, the more likely an officer, a buyer or a dealer stops it. Keep checking marketplace listings for your make, model and color in your area, and send any match to the police rather than going to see it.",
        benefits: [
          "Your report is searched in every SafeOrStolen VIN and plate check",
          "Checks public web results for listings that mention your VIN",
          "Keeps a dated record of your report",
          "Free to report a theft",
        ],
        process: [
          "Confirm the car wasn't towed or repossessed.",
          "Report it to the police and get the report number.",
          "Call your insurer, then your lender or leasing company.",
          "Give police any tracker or connected-car location.",
          "Report it on SafeOrStolen with the VIN and plate.",
          "Watch local listings for your car and pass any match to the police.",
        ],
        faqs: [
          {
            question: "Who do I call first if my car is stolen?",
            answer:
              "Call the police non-emergency line first, unless you saw the theft or anyone is in danger, in which case call 911. The non-emergency line can usually tell you whether the car was towed. If it wasn't, file the stolen report then and get the report number. Call your insurer next, then your lender or leasing company.",
          },
          {
            question: "How do I know if my car was towed or stolen?",
            answer:
              "Look for tow-away or permit signs where you parked, then call the local police non-emergency line, since towing companies in most areas report tows to the police. If you parked on private property, ask the property manager which company they use. If the car is financed, call the lender to rule out a repossession.",
          },
          {
            question: "Does insurance cover a stolen car?",
            answer:
              "Usually, if you carry comprehensive coverage. A liability-only policy generally does not pay for theft of your own car. Your insurer will want the police report number, your keys and ownership papers. Personal items stolen from inside the car are often covered by renters or homeowners insurance instead. Check your policy or ask your agent.",
          },
          {
            question: "Can I track my stolen car?",
            answer:
              "If your car has a manufacturer app, a tracking subscription or a tracking tag in it, it may show the last location. Give that location to the police and let them recover the car. Don't go there yourself: people driving stolen cars may be armed, and confronting them puts you at risk.",
          },
          {
            question: "How do I report my stolen car so buyers see it?",
            answer:
              "After filing a police report, add it on SafeOrStolen (safeorstolen.com/report-stolen) with your VIN, plate and description. Every VIN and plate check on SafeOrStolen searches those owner reports, so anyone checking your car before they buy it sees it was reported stolen. Reporting is free.",
          },
          {
            question: "What happens when police find my stolen car?",
            answer:
              "Police will contact you, often after an officer runs the plate or VIN. The car is usually towed to an impound lot, which may charge towing and storage fees by the day, so pick it up quickly with your ID, registration and report number. Photograph any damage, then tell your insurer it was recovered.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/what-to-do-if-your-car-is-stolen")({
  component: GuidePage,
});
