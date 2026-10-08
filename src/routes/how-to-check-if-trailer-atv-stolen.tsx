/**
 * Oct 7 2026: rewritten by hand for "free atv vin check stolen" (Search Console: 16 impressions,
 * landing on /check-car and /vin-check at positions 59 to 65; "check atv vin to see if stolen" and
 * "free trailer vin check" also land on generic VIN pages). This page now answers those directly.
 * Was the shared TRAILER_ATV_GUIDE data; now self-contained. Removed the claim that the check
 * searches "federal vehicle records" for theft.
 */
import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="Free ATV VIN Check: Is This ATV, Trailer or Dirt Bike Stolen? | SafeOrStolen"
      metaDescription="Free ATV VIN check for stolen ATVs, UTVs, dirt bikes and trailers: where the VIN is on each, what paperwork a real seller has, and signs of a stolen machine."
      h1="Free ATV and Trailer VIN Check: Is It Stolen?"
      itemType="ATV or Trailer"
      dateModified="2026-10-07"
      searchType="vin"
      searchPlaceholder="Enter the VIN from the frame"
      keywords={[
        "free atv vin check stolen",
        "atv vin check stolen",
        "check atv vin to see if stolen",
        "free trailer vin check",
        "check if trailer is stolen",
        "utv vin check",
        "dirt bike vin check",
        "stolen side by side check",
      ]}
      quickAnswer={{
        question: "How do I check if an ATV or trailer is stolen?",
        answer:
          "Find the VIN on the frame (front frame tube or under the seat on an ATV, the tongue on a trailer, the steering neck on a dirt bike) and match it to a title, registration or certificate of origin in the seller's name. Check it on SafeOrStolen (safeorstolen.com/how-to-check-if-trailer-atv-stolen), which searches its theft reports and public web results. A missing or ground-off VIN, or no paperwork at all, means don't buy.",
      }}
      sections={[
        {
          heading: "Where the VIN is on ATVs, UTVs, dirt bikes and trailers",
          paragraphs: [
            "Most modern machines carry a 17-character VIN. Some older, small or homemade units have a shorter manufacturer serial, or a number the state assigned when it was first titled. Either way, the number lives on the frame, and the paperwork should repeat it exactly.",
          ],
          table: {
            columns: ["Vehicle", "Where to look on the frame", "Paperwork that should match"],
            rows: [
              ["ATV / quad", "Stamped on the frame tube, often low on the front left near the wheel, or under the seat. Some also have a frame sticker.", "Title or registration where your state requires it; otherwise the manufacturer's certificate of origin and a bill of sale"],
              ["UTV / side-by-side", "Stamped on the frame near a front wheel or under the seat or bed; often a sticker inside the cab", "Title or off-highway registration, or the certificate of origin"],
              ["Dirt bike", "Stamped on the steering neck where the forks meet the frame", "Title or off-highway registration, or the certificate of origin"],
              ["Utility or cargo trailer", "A VIN plate or sticker on the tongue or front frame rail, sometimes stamped into the tongue itself", "Title or registration and the trailer plate"],
              ["Homemade trailer", "A state-assigned number on a plate the state issued", "Title or registration showing that assigned number"],
            ],
          },
        },
        {
          heading: "Signs an ATV, UTV or trailer is stolen",
          list: [
            "The VIN area on the frame is ground smooth, freshly painted, or has a new sticker over it",
            "An ATV or UTV that starts without a key, or has a bypassed or spliced ignition",
            "A trailer with no VIN plate, a plate held on with new screws, or welding and grinding on the tongue",
            "New plastics or fenders on an older machine, which can hide frame damage or a swapped body",
            "No title, registration or certificate of origin, and a story about why",
            "A trailer plate or off-highway sticker from a different state than the seller",
            "The seller brings it to a gas station or parking lot rather than showing it where it's kept",
          ],
        },
        {
          heading: "What paperwork a real seller has",
          paragraphs: [
            "Title rules differ by state and by vehicle type. Some states title ATVs and trailers, some register them, and some only want a bill of sale for small trailers. Ask your state's DMV, or the agency that registers off-highway vehicles, what a legal sale needs before you pay.",
            "Whatever the state, an honest seller can usually show something with the VIN on it in their name: a title, a registration card, the original certificate of origin, or a dealer sales receipt. Match the VIN on that paper to the frame, and the name to their photo ID.",
          ],
        },
      ]}
      content={{
        intro:
          "Check an ATV, UTV, dirt bike or trailer by VIN before you buy it. Find the number on the frame, run it here free, and match it to the seller's paperwork. Here is where the VIN is on each type, and what a stolen machine usually looks like.",
        whatIs:
          "An ATV or trailer VIN check looks up the frame number in records of reported thefts and confirms what the machine is. Off-road vehicles and trailers often change hands for cash with little or no paperwork, so the frame number is usually the only link back to the owner. For a road motorcycle, see the <a href=\"/check-motorcycle-stolen-vin\">motorcycle VIN check</a>.",
        howItWorks:
          "Enter the VIN. SafeOrStolen searches its own theft reports, which owners file on the site, and public web results that mention the VIN, such as old listings or stolen-equipment posts. For a standard 17-character VIN it also decodes the year, make and model where the VIN can be decoded. Arizona VINs are searched against Arizona law-enforcement stolen-vehicle records too. It does not search NCIC or DMV records.",
        whyCheck:
          "ATVs, side-by-sides and trailers are easy to load or hitch up and drive away, and many sit outside on farms, job sites and driveways. If a stolen machine is recovered from you, it goes back to the owner and you usually lose your money. A frame-number check and a look at the paperwork take ten minutes.",
        benefits: [
          "Works with ATV, UTV, dirt bike and trailer VINs",
          "Searches SafeOrStolen theft reports and public web results",
          "Decodes standard 17-character VINs so you can spot a mismatch",
          "Each check saved to your account with the date",
          "2 free checks with no credit card",
        ],
        process: [
          "Ask the seller for the VIN before you drive out, and check it here.",
          "At the sale, read the VIN off the frame yourself and compare it with the paperwork.",
          "Check the seller's photo ID against the name on the title, registration or certificate of origin.",
          "Look for grinding, fresh paint or a new sticker where the VIN is, and check the ignition on an ATV or UTV.",
          "If your state titles that vehicle, plan to transfer the title before you pay in full.",
          "If the VIN comes back reported stolen, don't buy. Leave and give the details to the police.",
        ],
        faqs: [
          {
            question: "Is there a free ATV VIN check for stolen ATVs?",
            answer:
              "Yes. SafeOrStolen (safeorstolen.com/how-to-check-if-trailer-atv-stolen) checks an ATV VIN free twice with a free account and no credit card. It searches SafeOrStolen theft reports and public web results, and Arizona law-enforcement records for Arizona VINs. Your local police can also run the VIN through systems the public can't search; call the non-emergency line and ask.",
          },
          {
            question: "Where is the VIN on an ATV?",
            answer:
              "On most ATVs the VIN is stamped into the frame tube, commonly low on the front left side near the wheel, or under the seat. Some models also have a VIN sticker on the frame. If you can't find it, the owner's manual for that model shows the exact spot. The VIN on the frame should match the title or certificate of origin.",
          },
          {
            question: "Where is the VIN on a trailer?",
            answer:
              "Look at the tongue, the bar that runs to the hitch, and the front of the frame rails. Most trailers have a VIN plate or sticker there, and some have the VIN stamped into the metal. A homemade trailer that has been titled usually carries a state-issued VIN plate instead.",
          },
          {
            question: "Do ATVs and trailers have titles?",
            answer:
              "It depends on the state. Some states title ATVs, UTVs and trailers like cars, some only register them, and some leave small trailers or off-road machines with just a certificate of origin and bill of sale. Ask your state DMV or off-highway vehicle agency what the sale needs before you pay.",
          },
          {
            question: "Can I check a dirt bike VIN?",
            answer:
              "Yes. A dirt bike's VIN is stamped on the steering neck, where the front forks meet the frame. Enter it on SafeOrStolen to search theft reports and public web results, then compare it with the title, registration or certificate of origin, and make sure the seller's ID matches the name on it.",
          },
          {
            question: "What should I do if an ATV or trailer comes back stolen?",
            answer:
              "Don't buy it, and don't try to hold onto it or confront the seller. Leave, keep the listing, messages and the seller's details, and call your local police or sheriff's office with the VIN. If you already paid, tell the police what happened and keep your receipt and any bill of sale.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/how-to-check-if-trailer-atv-stolen")({
  component: GuidePage,
});
