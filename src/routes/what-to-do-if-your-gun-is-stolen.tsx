/**
 * Oct 7 2026: rewritten by hand for "what to do if your gun is stolen" / "how to report a stolen
 * gun" (no Search Console rows for this page). Was the shared STOLEN_GUN_VICTIM_GUIDE data; now
 * self-contained, with no outbound links (the eCFR link is replaced by the citation in plain text).
 */
import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="What to Do if Your Gun Is Stolen: How to Report It | SafeOrStolen"
      metaDescription="Gun stolen? Report it to police with the serial number, find the serial if you never wrote it down, check your state's deadline, and call your insurer."
      h1="What to Do if Your Gun Is Stolen"
      itemType="Stolen Firearm"
      dateModified="2026-10-07"
      searchType="firearm"
      searchPlaceholder="Enter your gun's serial number"
      keywords={[
        "what to do if your gun is stolen",
        "how to report a stolen gun",
        "report stolen firearm",
        "stolen gun report",
        "lost or stolen firearm reporting",
        "gun stolen from car what to do",
        "find serial number of my stolen gun",
      ]}
      quickAnswer={{
        question: "What should I do if my gun is stolen?",
        answer:
          "Report it to your local police right away, by phone or in person, with the make, model, caliber and serial number, and get the report number. Police enter it in the FBI's NCIC stolen-gun file so it's flagged if recovered or checked. Then find out whether your state sets a reporting deadline, call your insurer, and add it on SafeOrStolen (safeorstolen.com/report-stolen) so private buyers who check the serial see it.",
      }}
      sections={[
        {
          heading: "What to do, in order",
          list: [
            "Don't touch the scene more than you need to if it was a break-in; police may want to look for prints",
            "Call the police. Use 911 if the burglar may still be there; otherwise the non-emergency line",
            "Give the make, model, caliber, color or finish, serial number, and when and where it was taken",
            "Ask the officer to confirm the gun will be entered as stolen, and write down the report number",
            "Check your state's law on reporting lost or stolen guns, and any deadline it sets",
            "Call your homeowners or renters insurer, or your auto insurer if it was taken from a car",
            "Report it on SafeOrStolen so the serial comes up when a buyer checks it",
          ],
        },
        {
          heading: "Don't have the serial number? Where to find it",
          table: {
            columns: ["Where to look", "What you'll find"],
            rows: [
              ["The dealer that sold it", "Licensed dealers keep a record of every gun they sell, including the serial. Call them with the date and your name."],
              ["Original box or case", "Most makers print the serial on a label on the box end"],
              ["Receipt or bill of sale", "Dealer receipts and private bills of sale usually list it"],
              ["Your photos and email", "Search your phone for photos of the gun, and email for an order confirmation or shipping notice"],
              ["Insurance or permit records", "A scheduled insurance rider, or a permit or registration record in states that keep one"],
              ["Warranty or repair papers", "Factory service paperwork lists the serial"],
            ],
          },
        },
        {
          heading: "Rules that apply to the report",
          paragraphs: [
            "Many states require owners to report a lost or stolen firearm to police, some within a set number of hours or days, and others have no requirement. The officer taking your report can tell you your state's rule. Reporting right away is the safe choice everywhere, and it protects you if the gun is later used in a crime.",
            "Licensed dealers (FFLs) have a federal duty under 27 CFR 478.39a to report a theft or loss from their inventory or collection to the ATF and to local police within 48 hours of discovering it. Private owners report to local police, not the ATF.",
          ],
        },
        {
          heading: "Guns stolen from cars",
          paragraphs: [
            "Many guns are taken in car break-ins, often from a glove box, center console or under a seat. Report it exactly the same way, and tell both your auto insurer and your homeowners or renters insurer, since personal property in a car is often covered by the home policy rather than the auto policy. Check whether your state or city has rules on leaving a gun in an unattended car before you replace it.",
          ],
        },
      ]}
      content={{
        intro:
          "Your gun is missing. Report it to local police with the serial number, find the serial if you never wrote it down, and then deal with your insurer and your state's reporting rules. Here's each step.",
        whatIs:
          "A stolen gun report is the police record that flags your gun's serial number as stolen. Police enter it in the FBI's NCIC file, which officers check when they recover a gun, and licensed dealers can check when they take one in. Reporting it on SafeOrStolen adds the serial to the theft reports that private buyers search before they buy.",
        howItWorks:
          "After the police report, add the theft on SafeOrStolen's <a href=\"/report-stolen\">report a stolen item</a> page with the serial number, make and model. Every SafeOrStolen gun serial check searches those owner reports along with police theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records. Reporting on SafeOrStolen does not notify the police; file with them first.",
        whyCheck:
          "A stolen gun can be sold privately within days, used in another crime, or turn up at a pawn shop. A prompt police report means it can come back to you when it's recovered, and puts on record that it left your hands when it did.",
        benefits: [
          "Your serial shows up in every SafeOrStolen gun check",
          "Free to report a theft",
          "A dated record of when you reported it",
          "Check the serial yourself any time to see what a buyer would see",
        ],
        process: [
          "Call the police and report the theft with the serial number.",
          "Get the report number and confirm the gun will be entered as stolen.",
          "Find out your state's reporting rule and meet any deadline.",
          "Call your insurer with the report number.",
          "Report it on SafeOrStolen with the serial, make and model.",
          "Write down the serials of the guns you still own and keep the list somewhere other than your safe.",
        ],
        faqs: [
          {
            question: "How do I report a stolen gun?",
            answer:
              "Call your local police department or sheriff's office, using 911 if the theft is happening or the burglar may still be there and the non-emergency line otherwise. Give the make, model, caliber and serial number, and when and where it was taken. Ask for the report number and confirm the gun will be entered as stolen in the FBI's NCIC file.",
          },
          {
            question: "Do I have to report a stolen gun?",
            answer:
              "It depends on your state. Many states require owners to report a lost or stolen firearm to police, some within a set number of hours or days, and some have no requirement at all. Ask the officer taking your report or check your state's laws. Reporting promptly is the safe choice in every state.",
          },
          {
            question: "How do I find the serial number of my stolen gun?",
            answer:
              "Call the dealer that sold it: licensed dealers keep a record of every sale, including the serial. Also check the original box label, your receipt or bill of sale, photos on your phone, order confirmation emails, insurance riders and any factory repair paperwork. Give the police what you have even without the serial, then add it once you find it.",
          },
          {
            question: "Should I report my stolen gun to the ATF?",
            answer:
              "Private owners report to local police, who enter the gun in NCIC. The ATF reporting rule, 27 CFR 478.39a, applies to licensed dealers and collectors, who must report a theft or loss from their inventory or collection to the ATF and local police within 48 hours of discovering it.",
          },
          {
            question: "Does homeowners insurance cover a stolen gun?",
            answer:
              "Often, yes, as personal property, but many policies cap how much they pay for firearms unless the guns are listed on a separate rider. A gun stolen from your car is usually covered by the homeowners or renters policy, not the auto policy. Your insurer will want the police report number and proof of ownership.",
          },
          {
            question: "Can I report my stolen gun on SafeOrStolen?",
            answer:
              "Yes, for free at safeorstolen.com/report-stolen. Add the serial number, make and model. Anyone who checks that serial on SafeOrStolen will see it was reported stolen. SafeOrStolen does not pass reports to the police, so file a police report first; it's what gets the gun into the NCIC file.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/what-to-do-if-your-gun-is-stolen")({
  component: GuidePage,
});
