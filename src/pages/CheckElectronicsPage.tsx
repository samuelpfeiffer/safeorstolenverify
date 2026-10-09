import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const CheckElectronicsPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Check if Electronics Are Stolen - Serial Number Check"
      metaDescription="Check if a camera, tablet, console or drone is stolen by serial number. SafeOrStolen searches theft reports and public web results. 2 free checks."
      h1="Check if Electronics Are Stolen Before Buying"
      itemType="Electronics"
      keywords={[
        'check if electronics stolen',
        'stolen electronics check',
        'electronics serial number lookup',
        'verify electronics not stolen'
      ]}
      content={{
        intro: "Enter the device's serial number on SafeOrStolen and in a few seconds you'll see whether it matches a theft report filed on the site or shows up in public web results such as listings and posts. It works for cameras, tablets, game consoles, smartwatches, drones, TVs and anything else with a serial number. Check before you buy from Facebook Marketplace, eBay, Craigslist or a pawn shop.",
        whatIs: "Checking if electronics are stolen means looking up the device's serial number in records of reported thefts. SafeOrStolen searches theft reports that owners file on the site and public web results that mention the serial. The result says reported stolen, possible match, or no report found in the records searched, and lists every source. SafeOrStolen does not search pawn databases, manufacturer records or police systems like NCIC.",
        howItWorks: "Find the full serial number on the device, type or scan it into SafeOrStolen, and read the result a few seconds later. Then compare the serial on the device with the one on the box, receipt or the seller's documents. Your check is saved to your account with the date.",
        whyCheck: "If you buy a stolen device, police can take it back and return it to its owner, and you're usually left chasing the seller for your money. Some devices, like tablets and smartwatches, can also be locked remotely by the original owner's account. Cameras, tablets, game consoles and drones are easy to resell, so they turn up on marketplaces and at pawn shops. A quick serial check, plus a look at the warning signs below, catches many bad deals before money changes hands.",
        benefits: [
          "Check cameras: Canon, Nikon, Sony, Fujifilm, Panasonic DSLRs and mirrorless bodies",
          "Check tablets: iPad, Samsung Galaxy Tab, Microsoft Surface",
          "Check game consoles: PlayStation 5, Xbox Series X, Nintendo Switch",
          "Check smartwatches: Apple Watch, Samsung Galaxy Watch, Garmin",
          "Check drones: DJI, Autel, Skydio",
          "Check TVs and appliances by the serial on the back label",
          "Every check lists the sources searched and is saved to your account with the date",
          "2 free checks, then $0.99 a check or $10 a month unlimited"
        ],
        process: [
          "Find the serial number. Cameras: on the bottom plate near the tripod mount. Tablets: on the back panel or in Settings > About. Game consoles: on the back or bottom label, or in the system settings. Drones: in the battery bay or on the body label.",
          "Write down every character exactly. One wrong letter or number will search for a different device.",
          "Take a photo of the serial label and the device for your records.",
          "Enter the serial at safeorstolen.com/verify, or scan its barcode with the SafeOrStolen web app.",
          "Read the result: reported stolen, possible match, or no report found in the records searched.",
          "If it's reported stolen, don't buy it. If it's clean, still check that the serial matches the box or receipt before you pay."
        ],
        faqs: [
          {
            question: "What types of electronics can I check?",
            answer: "Any device with a serial number: cameras, lenses, tablets, game consoles, smartwatches, drones, TVs, audio gear, smart home devices and appliances. SafeOrStolen (safeorstolen.com/check-electronics) searches its own theft reports and public web results for that serial. Phones are best checked by IMEI, and laptops by serial on their own pages."
          },
          {
            question: "How do I find the serial number on electronics?",
            answer: "Cameras have it on the bottom near the tripod mount. Tablets show it on the back or in Settings > About. Game consoles have a label on the back or bottom and list it in the system settings. Drones usually have it in the battery bay. TVs and appliances have it on a label on the back or inside the door. A missing or scratched-off serial is a warning sign."
          },
          {
            question: "Is the electronics serial number check free?",
            answer: "Your first 2 checks on SafeOrStolen are free with a free account, and no credit card is needed. After that it's $0.99 for a single check or $10 a month for unlimited checks, which you can cancel anytime. An optional $1.99 verification certificate gives you a dated record showing you checked before the sale."
          },
          {
            question: "What should I do if the check shows the device is reported stolen?",
            answer: "Don't buy it, and don't confront the seller. Take screenshots of the listing and note the seller's details. Report the listing to the platform, then call your local police non-emergency line with the serial number and listing. If you already bought it, contact police and keep your payment records; your bank or payment app may also be able to help."
          },
          {
            question: "Does SafeOrStolen search pawn shop databases?",
            answer: "No. SafeOrStolen searches its own theft reports and public web results for electronics. It does not search pawn shop reporting systems, insurer records, manufacturer databases or NCIC. Those are only open to police or the businesses that use them. If you're worried an item was pawned, ask local police."
          },
          {
            question: "Can serial numbers on electronics be removed or faked?",
            answer: "Yes. Thieves sometimes scratch off, grind down or replace serial labels. Look for a serial area that's scuffed or polished, a sticker that's peeling or looks newer than the device, or a number that doesn't match the one in the device's settings menu. If anything looks tampered with, walk away."
          },
          {
            question: "How long does an electronics serial number check take?",
            answer: "A few seconds. SafeOrStolen searches its theft reports and public web results, then shows reported stolen, possible match, or no report found in the records searched, with every source listed. The result reflects the records available at that moment, so check again close to the sale if time passes."
          },
          {
            question: "What are red flags when buying used electronics?",
            answer: "A price far below similar listings, a seller who won't share the serial, a serial label that looks tampered with, several of the same high-value item for sale at once, no box or receipt, a seller in a hurry who dodges questions about where the device came from, and cash only. Two or three of these together is reason to walk away."
          }
        ]
      }}
    />
  );
};

export default CheckElectronicsPage;
