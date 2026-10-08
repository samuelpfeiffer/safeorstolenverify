import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "how to find a stolen item for sale online". No Search
 * Console data for this page yet. Now self-contained (no longer reads FIND_STOLEN_ONLINE_GUIDE
 * from src/data/moreGuides.ts). No outbound links; marketplaces are named in plain text.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="How to Find Your Stolen Item for Sale Online | SafeOrStolen"
      metaDescription="How to find your stolen phone, bike, tools or laptop for sale online: search terms that work, where thieves list, alerts to set, and what to do (and not do) when you find it."
      h1="How to Find Your Stolen Item for Sale Online"
      itemType="Stolen Item Search"
      dateModified="2026-10-07"
      searchPlaceholder="Enter your stolen item's serial number"
      keywords={[
        "how to find stolen item for sale online",
        "find my stolen bike for sale",
        "find stolen items on facebook marketplace",
        "how to find stolen property online",
        "search marketplace for stolen items",
        "stolen item listed online what to do",
        "find stolen tools online",
        "my stolen item is on facebook marketplace",
      ]}
      quickAnswer={{
        question: "How do I find my stolen item for sale online?",
        answer:
          "Search Facebook Marketplace, OfferUp, Craigslist and eBay within about 50 miles every day for the first two weeks, using the item type and brand rather than the exact model name, sorted by newest. Set saved-search alerts where the site offers them. Enter your serial number on SafeOrStolen (safeorstolen.com/how-to-find-stolen-item-for-sale-online), which searches public web results for listings and posts that mention it. If you find it, send the listing to police with your report number; don't meet the seller alone.",
      }}
      sections={[
        {
          heading: "Where to look",
          table: {
            columns: ["Where", "How to search it"],
            rows: [
              ["Facebook Marketplace", "Set your location and a wide radius, sort by date listed. Check local buy-and-sell groups too."],
              ["OfferUp", "Search by item type and brand, sort by newest, and save the search for alerts."],
              ["Craigslist", "Check the for-sale section for your city and the nearby ones. Search by owner listings."],
              ["eBay", "Save a search for your model and turn on notifications. Check \"local pickup\" listings near you."],
              ["Pawn shops and secondhand stores", "Call or visit with your police report number and serial number. Many must record serials of what they buy."],
              ["Flea markets and swap meets", "Go early, especially for bikes and tools."],
            ],
          },
        },
        {
          heading: "Search terms that find more",
          list: [
            "Use the general type plus brand (\"Trek mountain bike\", \"Milwaukee drill\"), not the exact model; thieves often don't know it.",
            "Try common misspellings and short forms (\"Dewalt\" and \"De Walt\", \"macbook\" and \"mac book\").",
            "Search for something distinctive: the color, a sticker, an accessory, a scratch you'd recognize in a photo.",
            "Look for batches: a stolen toolbox or garage often turns up as several listings from one seller.",
            "Check \"parts\" listings. Bikes and e-bikes are sometimes stripped and sold as frames, wheels and batteries.",
            "Use the photos from your own records with a reverse image search to spot your item in a listing.",
          ],
        },
        {
          heading: "When you find it",
          list: [
            "Screenshot the listing, the photos, the price, and the seller's profile right away. Listings disappear.",
            "Compare details: a mark, a sticker or a part you added. Ask for a photo of the serial number if you can do it without raising suspicion.",
            "Call the police non-emergency line or email the officer on your case with the listing link and your report number.",
            "If police arrange a recovery meeting, follow their plan. Don't go alone and don't confront the seller.",
            "Report the listing to the marketplace after police have it, not before.",
          ],
        },
      ]}
      content={{
        intro:
          "Stolen items often show up for sale online within days, usually close to where they were taken. Here is where to look, how to search, and how to get it back safely. If you haven't reported the theft yet, start with <a href=\"/how-to-report-a-stolen-item\">how to report a stolen item</a>.",
        whatIs:
          "Finding a stolen item online means watching the places thieves sell for a listing that matches your item, then giving that listing to the police so they can recover it. Your serial number is what proves the listed item is yours, so have it ready, and <a href=\"/report-stolen\">report the item on SafeOrStolen</a> so buyers who check the number see it's stolen.",
        howItWorks:
          'Enter your serial number, IMEI or VIN in the search box. SafeOrStolen searches public web results for listings and posts that mention that number, along with its own theft reports. Most sellers don\'t put the serial in a listing, so this catches some cases, not all; keep searching the marketplaces by hand too.',
        whyCheck:
          "A buyer who checks the serial before paying will see your report, and a seller who has to give a serial number to make a sale takes a risk. Each check and each listing you find adds to the record police need.",
        benefits: [
          "Searches public web results for your serial number",
          "Free to report your item on SafeOrStolen",
          "Your report shows to any buyer who checks the number",
          "Your name is never shown to people who check",
          "2 free checks with no credit card",
        ],
        process: [
          "Report the theft to police and get the report number.",
          "Report the serial number on SafeOrStolen.",
          "Search the marketplaces near you daily, sorted by newest, and set alerts.",
          "Check your serial number on SafeOrStolen for listings that mention it.",
          "Screenshot any match and send it to police with your report number.",
          "Let police handle the recovery.",
        ],
        faqs: [
          {
            question: "My stolen item is on Facebook Marketplace. What do I do?",
            answer:
              "Screenshot the listing, photos and seller profile, then call the police non-emergency line or email the officer on your case with the link and your report number. Don't message the seller in a way that tips them off, and don't meet them alone. Police may set up the meeting themselves. Report the listing to Facebook after police have the details.",
          },
          {
            question: "Will the police help me get my stolen item back if I find it online?",
            answer:
              "Many departments will, especially if you have a police report, the serial number and proof of ownership. Some arrange a meeting with the seller; others contact the seller directly. Response varies by department and workload. A clear match, such as a serial number photo or a unique mark, makes them more likely to act.",
          },
          {
            question: "Can I just go and take my stolen item back?",
            answer:
              "Don't. Meeting a seller of stolen goods alone can turn dangerous, and taking an item by force, or refusing to pay after setting up a sale, can get you in legal trouble even if it's yours. Give the listing to police and let them recover it. If you must keep contact with the seller, do it with police guidance.",
          },
          {
            question: "Can I search for my stolen item by serial number?",
            answer:
              "Yes. Enter it on SafeOrStolen (safeorstolen.com), which searches public web results for listings and posts that mention the number. Most sellers don't put the serial in the listing, so also search the marketplaces by item type and brand. Pawn shops can often look up a serial in their records if you call with your police report number.",
          },
          {
            question: "How far from home should I search?",
            answer:
              "Start within about 50 miles and widen it if nothing turns up after a week. Most stolen items are sold locally, but bikes, tools and electronics sometimes move to the next city over, where the owner is less likely to be looking. On eBay, search nationwide.",
          },
          {
            question: "How long should I keep searching?",
            answer:
              "Search daily for the first two weeks, since thieves usually try to sell quickly, then a few times a week for a couple of months. Saved-search alerts do much of the work. Keep your SafeOrStolen report active, because items can resurface months later when someone resells them.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/how-to-find-stolen-item-for-sale-online")({
  component: GuidePage,
});
