import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "what to do if your bike is stolen" (also "my bike was
 * stolen what do i do", "how to find a stolen bike"). No Search Console data for this page yet.
 * Now self-contained (no longer reads STOLEN_BIKE_VICTIM_GUIDE from src/data/moreGuides.ts).
 * Supplier names removed; the buyer-side serial check lives on /check-bike and is linked.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="What to Do if Your Bike Is Stolen: First 24 Hours | SafeOrStolen"
      metaDescription="Bike stolen? Find the serial number, report it to police and online, set up searches for it on Marketplace and OfferUp, and what to do if you spot your bike for sale."
      h1="What to Do if Your Bike Is Stolen"
      itemType="Stolen Bicycle"
      dateModified="2026-10-07"
      searchType="bike"
      searchPlaceholder="Enter your bike's frame serial number"
      keywords={[
        "what to do if your bike is stolen",
        "my bike was stolen what do i do",
        "bike stolen what to do",
        "how to find a stolen bike",
        "report stolen bike",
        "stolen e-bike what to do",
        "find my bike serial number",
        "stolen bike on facebook marketplace",
      ]}
      quickAnswer={{
        question: "What should I do if my bike is stolen?",
        answer:
          "Find the frame serial number (on your receipt, the shop's sales record or old photos of the bottom bracket), report the theft to local police and get the report number, then report the bike on SafeOrStolen (safeorstolen.com/what-to-do-if-your-bike-is-stolen) so buyers who check the serial see it's stolen. Search Facebook Marketplace, OfferUp and Craigslist near you every day for two weeks. If you find it, send the listing to police instead of meeting the seller alone.",
      }}
      sections={[
        {
          heading: "The first 24 hours",
          list: [
            "Look around the area once, and ask nearby shops or building managers whether a camera covers where it was locked.",
            "Find your serial number (see the table below). Without it, police and buyers can't match the bike to you.",
            "Report it to police, online if your department offers it, and write down the report number.",
            "Report it on SafeOrStolen with the serial, photos and the police report number. It's free with a free account.",
            "If it's an e-bike with a GPS tracker or a tracking tag, check its location, but give it to police rather than going there yourself.",
            "Tell your renters, home or bike insurer. Most will want the police report number.",
            "Post in local cycling and neighborhood groups with a clear photo and any distinctive marks.",
          ],
        },
        {
          heading: "Where to find your bike's serial number",
          table: {
            columns: ["Place to look", "What you'll find"],
            rows: [
              ["Your receipt or order email", "Many bike shops and online stores print the frame serial on the receipt"],
              ["The bike shop that sold it", "Ask them to look up your sale; many keep the serial on file"],
              ["Old photos", "Zoom in on any photo of the bike upside down, or of the bottom bracket"],
              ["Warranty or registration card", "The serial is usually written on it"],
              ["Your insurance policy", "Some bike or renters policies list it"],
              ["E-bike app or account", "Some brands show the frame or battery number in the owner's app"],
            ],
          },
        },
        {
          heading: "If you spot your bike for sale",
          list: [
            "Screenshot the listing, photos and seller profile straight away.",
            "Compare details only you would know: a scratch, a sticker, a part you changed, a light or bag.",
            "Send the link and your report number to the police non-emergency line or the officer on your case.",
            "Don't meet the seller alone or try to take the bike back yourself. Let police set up the recovery.",
          ],
        },
      ]}
      content={{
        intro:
          "A stolen bike is usually resold quickly and close to where it was taken, so the first day matters. Here is what to do, in order. If you're buying a used bike and want to check it isn't stolen, use the <a href=\"/check-bike\">bike serial number lookup</a> instead.",
        whatIs:
          "The frame serial number is the key to getting a stolen bike back. It's what police enter in their report, what you <a href=\"/report-stolen\">report on SafeOrStolen</a>, and what a careful buyer checks before paying. Once your serial is reported, anyone who checks it on SafeOrStolen sees the bike is reported stolen, without seeing your name.",
        howItWorks:
          "Enter your bike's frame serial in the search box. SafeOrStolen searches a national stolen-bicycle registry, its own theft reports and public web results, including listings and posts that mention the serial. That shows you whether your report is showing up, and whether the serial appears in a listing somewhere online.",
        whyCheck:
          "Buyers who check a serial before paying are the people most likely to stop the sale and call the police. They can only do that if your bike has been reported, with the right serial number.",
        benefits: [
          "Free to report your bike on SafeOrStolen",
          "Bike checks search a national stolen-bicycle registry, SafeOrStolen theft reports and public web results",
          "Your report shows to any buyer who checks the serial",
          "Your name is never shown to people who check",
          "Works for road bikes, mountain bikes, kids' bikes and e-bikes",
        ],
        process: [
          "Find the frame serial number.",
          "Report the theft to police and get the report number.",
          "Report the bike on SafeOrStolen with the serial and photos.",
          "Tell your insurer and post in local groups.",
          "Search Facebook Marketplace, OfferUp and Craigslist daily, sorted by newest.",
          "Send any match to police and let them recover it.",
        ],
        faqs: [
          {
            question: "Is it worth reporting a stolen bike to the police?",
            answer:
              "Yes. Even if no one investigates, the report is what lets police return a recovered bike to you, and insurers need the report number. Many departments let you report a bike theft online. Include the frame serial number, make, model, color and photos. Then report it on SafeOrStolen (safeorstolen.com/report-stolen) so buyers who check the serial see it.",
          },
          {
            question: "How do I find my bike's serial number if I don't have it?",
            answer:
              "Check your receipt or order email, call the shop that sold it, and look through old photos for one that shows the bottom bracket. Warranty cards and insurance policies sometimes list it. If you can't find it anywhere, report the theft with a detailed description and photos, and add the serial later if it turns up.",
          },
          {
            question: "What are the chances of getting a stolen bike back?",
            answer:
              "Better if you act fast and have the serial number. Bikes with a reported serial can be matched when police recover them or when a buyer checks the number. Bikes without one are hard to return even when found. Searching local listings daily for the first two weeks gives you the best chance of spotting it yourself.",
          },
          {
            question: "My stolen bike is on Facebook Marketplace. What should I do?",
            answer:
              "Screenshot the listing and the seller's profile, then send the link and your police report number to your local police. Don't meet the seller alone or try to take the bike back. Police may arrange the meeting themselves. Once they have the details, report the listing to Facebook.",
          },
          {
            question: "Does renters or home insurance cover a stolen bike?",
            answer:
              "Often, yes, up to your policy's limits and minus your deductible, and some policies cover theft away from home. Expensive bikes and e-bikes may need extra coverage. Call your insurer, give them the police report number, and send your receipt and photos.",
          },
          {
            question: "How do I stop my next bike from being stolen?",
            answer:
              "Write down the frame serial and photograph it the day you buy the bike. Use a solid U-lock through the frame and rear wheel to something fixed, and don't leave it locked in the same spot overnight. A hidden tracking tag or GPS tracker helps police find it if it does go.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/what-to-do-if-your-bike-is-stolen")({
  component: GuidePage,
});
