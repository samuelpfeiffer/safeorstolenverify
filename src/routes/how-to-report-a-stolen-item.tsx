import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "how to report a stolen item". No Search Console data for
 * this page yet. Now self-contained (no longer reads REPORT_STOLEN_HUB_GUIDE from
 * src/data/moreGuides.ts). Item-specific after-theft pages (phone, car, bike, gun) are linked
 * rather than repeated.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="How to Report a Stolen Item: Police, Carrier, Insurer and More | SafeOrStolen"
      metaDescription="How to report a stolen item: what to give the police, who else to tell for a phone, car, bike, laptop or gun, and how to flag the serial number so buyers see it's stolen."
      h1="How to Report a Stolen Item"
      itemType="Stolen Item Report"
      dateModified="2026-10-07"
      searchPlaceholder="Enter your item's serial number, IMEI or VIN"
      keywords={[
        "how to report a stolen item",
        "report stolen property",
        "how to file a police report for stolen property",
        "report stolen item online",
        "where to report stolen items",
        "report stolen serial number",
        "report stolen phone",
        "report stolen bike",
      ]}
      quickAnswer={{
        question: "How do I report a stolen item?",
        answer:
          "Report it to your local police first, on the non-emergency line or the department's online form, with the item's serial number, IMEI or VIN, a description and photos, and ask for the report number. Then tell whoever else can lock or track it: your carrier for a phone, your insurer, and the maker's app. Finally, report it on SafeOrStolen (safeorstolen.com/how-to-report-a-stolen-item) for free so anyone who checks the serial number sees it's stolen.",
      }}
      sections={[
        {
          heading: "What to have ready",
          list: [
            "The serial number, IMEI or VIN. Look on the box, the receipt, your online order history, your insurance policy, or the maker's account page.",
            "Make, model, color and any marks, stickers, engraving or damage",
            "Photos of the item, ideally with the serial visible",
            "When and where it was taken, and how (break-in, car, porch, bike rack)",
            "Proof you own it: receipt, order confirmation, registration or title",
          ],
        },
        {
          heading: "Who to tell, by item",
          table: {
            columns: ["Item", "Who to report it to", "Why"],
            rows: [
              ["Any item", "Local police, then SafeOrStolen", "The police report is the official record. A SafeOrStolen report shows up for buyers who check the serial."],
              ["Phone", "Police, your carrier, Find My (iPhone) or Find Hub (Android)", "The carrier can block the IMEI; marking it lost locks it and shows your message."],
              ["Car, truck or motorcycle", "Police right away, then your insurer", "Police enter the VIN as stolen; your insurer needs the report number for a claim."],
              ["Bike or e-bike", "Police, then SafeOrStolen", "SafeOrStolen bike checks also search a national stolen-bicycle registry."],
              ["Laptop", "Police, the maker's account (Apple, Microsoft, Google), your employer if it's a work laptop", "Marking it lost locks it; work laptops can be locked remotely by IT."],
              ["Gun", "Police right away", "Some states require it within a set time. Have the serial, make, model and caliber."],
              ["Items covered by insurance", "Your home, renters or car insurer", "Most claims need a police report number."],
            ],
          },
        },
        {
          heading: "After you report",
          list: [
            "Search Facebook Marketplace, OfferUp and Craigslist near you for the item every day for the first couple of weeks.",
            "If you find it listed, don't arrange to meet the seller yourself. Send the listing to the officer on your case with your report number.",
            "Keep the report number somewhere you can find it; you'll need it for insurers, carriers and any recovery.",
          ],
        },
      ]}
      content={{
        intro:
          "A theft report does two jobs: it creates the official record you need for insurance and recovery, and it puts the serial number where a buyer or pawn shop might see it. Here is how to do both. For item-specific steps, see what to do if your <a href=\"/what-to-do-if-your-phone-is-stolen\">phone</a>, <a href=\"/what-to-do-if-your-car-is-stolen\">car</a>, <a href=\"/what-to-do-if-your-bike-is-stolen\">bike</a> or <a href=\"/what-to-do-if-your-gun-is-stolen\">gun</a> is stolen.",
        whatIs:
          "Reporting a stolen item means filing a police report with the item's details and identifying number, then telling the companies that can lock, track or flag it. The serial number is what makes a report useful: without it, police and buyers have no way to match a recovered or listed item to you. You can <a href=\"/report-stolen\">report a stolen item on SafeOrStolen</a> with a free account.",
        howItWorks:
          'A SafeOrStolen report adds your item\'s serial number, IMEI or VIN to SafeOrStolen\'s theft reports. When anyone checks that number on SafeOrStolen, the result shows it as reported stolen. It never shows your name to the person checking. Use the search box above to see whether your number already shows up anywhere, such as in a listing or post online.',
        whyCheck:
          "Stolen items are often listed for sale within days. A buyer who checks the serial before paying is the person most likely to stop the sale and tell the police, and they can only do that if the item has been reported.",
        benefits: [
          "Free to report with a free account",
          "Your serial number shows as reported stolen to anyone who checks it",
          "Your name is never shown to people who check",
          "Add your police report number to the report",
          "Works for phones, cars, bikes, laptops, tools, consoles and guns",
        ],
        process: [
          "Find the serial number, IMEI or VIN and gather photos and proof of ownership.",
          "Report it to local police and get the report number.",
          "Tell your carrier, insurer and the maker's app or account, as fits the item.",
          "Report it on SafeOrStolen with the serial number and police report number.",
          "Watch local marketplaces and send any listing to police.",
        ],
        faqs: [
          {
            question: "Can I report a stolen item online?",
            answer:
              "Often, yes. Many police departments have an online form for thefts with no suspect and no one hurt, such as a stolen bike or package. Check your city or county police website. Car thefts and gun thefts usually need a call to the non-emergency line. You can also report the item on SafeOrStolen (safeorstolen.com/report-stolen) for free.",
          },
          {
            question: "Is it worth filing a police report for a stolen item?",
            answer:
              "Yes. Insurers usually need the report number for a claim, carriers may ask for it to block a phone, and police can only return a recovered item to you if they can match it to a report. Even if no one investigates, the report with the serial number is what links the item back to you.",
          },
          {
            question: "What if I don't know the serial number?",
            answer:
              "Look on the original box, the receipt, your online order history and your email for an order confirmation. Phones show the IMEI in your Apple or Google account's device list and on the carrier bill. Car VINs are on your insurance card and registration. Bikes may be on the shop's sales record. Report it anyway, with photos and a detailed description, and add the number later.",
          },
          {
            question: "Do I need to report a stolen phone to my carrier?",
            answer:
              "Yes. Call your carrier with the IMEI and ask them to suspend the line and block the phone as stolen. That stops someone using your number and makes the phone harder to resell. Also mark it lost in Find My or Find Hub, which locks it and shows a message on the screen.",
          },
          {
            question: "How long do I have to report a stolen item?",
            answer:
              "Report it as soon as you notice. Many insurers expect prompt notice and may question a late claim, and listings for stolen items often appear within days. Some states set a deadline for reporting a lost or stolen gun. There is no reason to wait to see if it turns up.",
          },
          {
            question: "Can I report a stolen item on SafeOrStolen?",
            answer:
              "Yes, for free with a free account at safeorstolen.com/report-stolen. Add the serial number, IMEI or VIN, a description and your police report number. Anyone who checks that number on SafeOrStolen will see it's reported stolen, without seeing your name. It works alongside a police report, not instead of one.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/how-to-report-a-stolen-item")({
  component: GuidePage,
});
