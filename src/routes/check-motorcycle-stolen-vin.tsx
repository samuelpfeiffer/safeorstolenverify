/**
 * Oct 7 2026: rewritten by hand for "motorcycle vin check" / "check if a motorcycle is stolen"
 * (Search Console: "free stolen motorcycle vin check" and "free motorcycle check" reach other pages
 * at positions 33 to 47; this page had no data). Was the shared MOTORCYCLE_GUIDE data; now
 * self-contained. Removed the claim that the check searches "federal vehicle records" for theft.
 */
import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="Motorcycle VIN Check: How to Tell if a Motorcycle Is Stolen | SafeOrStolen"
      metaDescription="Free motorcycle VIN check: where the VIN is on the frame, how to spot a stolen bike (ignition, fork lock, title), and what to do if it comes back stolen."
      h1="Motorcycle VIN Check: Is This Motorcycle Stolen?"
      itemType="Motorcycle"
      dateModified="2026-10-07"
      searchType="vin"
      searchPlaceholder="Enter the 17-character motorcycle VIN"
      keywords={[
        "motorcycle vin check",
        "free stolen motorcycle vin check",
        "check if motorcycle is stolen",
        "stolen motorcycle check",
        "motorcycle vin lookup",
        "how to tell if a motorcycle is stolen",
        "free motorcycle check",
      ]}
      quickAnswer={{
        question: "How do I check if a motorcycle is stolen?",
        answer:
          "Read the 17-character VIN stamped on the steering neck, where the handlebars meet the frame, and make sure it matches the title and registration. Check it on SafeOrStolen (safeorstolen.com/check-motorcycle-stolen-vin), which searches its theft reports and public web results and decodes the year, make and model. Then look at the bike itself: a damaged ignition, a broken fork lock or a ground-down VIN means walk away.",
      }}
      sections={[
        {
          heading: "Where the VIN is on a motorcycle",
          paragraphs: [
            "Street motorcycles built since the 1981 model year carry a 17-character VIN. You'll usually find it in two or three places, and every one of them should read the same.",
          ],
          table: {
            columns: ["Location", "What to look for"],
            rows: [
              ["Steering neck (frame head)", "The VIN is stamped into the metal on the side of the tube the forks turn in. Turn the bars full lock to see it."],
              ["Frame sticker or plate", "A manufacturer label near the steering neck or on a frame rail, with the VIN and build date. It should be intact, not peeled or painted over."],
              ["Engine case", "A separate engine number, stamped on the crankcase. It is not the VIN, but if the title or a service record lists it, compare."],
              ["Paperwork", "Title, registration, insurance card and any service receipts. The VIN must match the frame character for character."],
            ],
          },
        },
        {
          heading: "Signs a motorcycle is stolen",
          paragraphs: [
            "Most motorcycle thieves don't use the key. They break the steering lock, pull the ignition or lift the bike into a van. That leaves marks a buyer can see in two minutes.",
          ],
          list: [
            "The ignition switch is loose, cracked or has wires hanging below it, or the seller starts the bike without the key",
            "The fork lock won't engage with the key, or the steering snaps past where the lock should catch",
            "Only one key, a key that doesn't fit the seat or tank lock, or a 'lost the other keys' story",
            "Scratches, grinding marks, fresh paint or a new sticker over the steering neck where the VIN is stamped",
            "No title, a title in someone else's name, or a 'title is in the mail' excuse",
            "A plate that's missing or doesn't match the registration",
            "The seller wants to meet in a parking lot instead of where the bike is kept",
          ],
        },
        {
          heading: "What each check tells you",
          table: {
            columns: ["Check", "What it tells you", "Cost"],
            rows: [
              ["SafeOrStolen VIN check", "Whether the VIN is in SafeOrStolen theft reports or public web results; the decoded year, make and model; open safety recalls", "2 free checks"],
              ["Frame vs. title", "Whether the paperwork belongs to this bike", "Free"],
              ["Seller ID vs. title", "Whether the seller is the owner", "Free"],
              ["Police VIN check", "Some departments will run the VIN through systems the public can't search. Call the non-emergency line and ask.", "Usually free"],
              ["State title check by VIN", "Title brands such as salvage or rebuilt, where your state's DMV offers one", "Varies by state"],
            ],
          },
        },
      ]}
      content={{
        intro:
          "Check a used motorcycle by VIN before you pay. Find the number on the steering neck, run it here, and look over the ignition, fork lock and title. This page shows where to look and what a stolen bike looks like up close.",
        whatIs:
          "A motorcycle VIN check uses the 17-character number stamped on the frame to look for theft reports and confirm what the bike is. If the decoded year, make and model don't match the bike in front of you, the VIN or the paperwork has been swapped. Owners who report a theft to SafeOrStolen add the VIN to the records every check searches.",
        howItWorks:
          "Enter the VIN in the box. SafeOrStolen decodes the year, make and model, lists open safety recalls, and searches its own theft reports and public web results for that VIN. Arizona VINs are also searched against Arizona law-enforcement stolen-vehicle records, updated twice a day. The result reads reported stolen, possible match, or no report found in the records searched, with each source listed. It does not search NCIC or DMV records.",
        whyCheck:
          "Motorcycles are easy to steal, quick to strip and often sold for cash with no paperwork. If police recover a stolen bike from you, it goes back to the owner and you usually lose what you paid. A few minutes with the VIN and the paperwork protects you.",
        benefits: [
          "Works with any 17-character motorcycle VIN",
          "Decodes year, make and model so you can spot a swapped frame or title",
          "Lists open safety recalls on the bike",
          "Each check is saved to your account with the date",
          "2 free checks with no credit card",
        ],
        process: [
          "Ask the seller for the VIN before you go, and check it here first.",
          "At the bike, read the VIN on the steering neck and compare it with the title, one character at a time.",
          "Ask to see the seller's photo ID. The name must match the title.",
          "Have the seller start the bike with the key, then lock the forks with it. Look under the ignition for cut or spliced wires.",
          "Check the plate against the registration.",
          "If anything is off, don't buy. If the VIN comes back reported stolen, leave and call the police non-emergency line.",
        ],
        faqs: [
          {
            question: "Can I check a motorcycle VIN for free?",
            answer:
              "Yes. SafeOrStolen (safeorstolen.com/check-motorcycle-stolen-vin) gives you 2 free VIN checks with a free account and no credit card. Each check searches SafeOrStolen's theft reports and public web results, decodes the year, make and model, and lists open safety recalls. After that a single check costs $0.99, or $10 a month for unlimited.",
          },
          {
            question: "Where is the VIN on a motorcycle?",
            answer:
              "On almost every street motorcycle the VIN is stamped on the steering neck, the part of the frame the front forks turn in. Turn the handlebars to one side to read it. Many bikes also have a VIN sticker on the frame near the steering neck. The same VIN appears on the title, registration and insurance card.",
          },
          {
            question: "How can you tell if a motorcycle is stolen?",
            answer:
              "Look at the ignition and steering lock first: a loose or cracked ignition, loose wires underneath, or a fork lock that won't engage are the most common signs. Then check the VIN on the frame for grinding or fresh paint, and match it to a title in the seller's name. Run the VIN on a stolen check before you pay.",
          },
          {
            question: "Is the engine number the same as the VIN?",
            answer:
              "No. The engine number is a separate serial stamped on the crankcase. Some manufacturers make part of it match the VIN, others don't. It matters when the title or service records list it, and when it looks ground off or restamped, which is a reason to walk away. Always check the frame VIN, since that's what the title follows.",
          },
          {
            question: "What if a used motorcycle has no title?",
            answer:
              "Treat it as a serious warning. Without a title in the seller's name you can't prove the bike was theirs to sell, and you may not be able to register it. Ask your state's DMV what it takes to title a bike with no paperwork before you pay anything, and expect a VIN inspection.",
          },
          {
            question: "Do older motorcycles have a 17-digit VIN?",
            answer:
              "Bikes built before the 1981 model year use shorter frame serial numbers, so most online VIN tools can't decode them. For an older bike, match the frame number to the title, look for tampering around the stamping, and ask your local police non-emergency line whether they'll run the number for you.",
          },
          {
            question: "What should I do if the motorcycle comes back stolen?",
            answer:
              "Don't buy it and don't argue with the seller. Leave, keep the listing, messages and the seller's phone number, and give the VIN and details to your local police. If you already bought it, call the police, tell them what you have, and keep your receipt and the seller's details.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/check-motorcycle-stolen-vin")({
  component: GuidePage,
});
