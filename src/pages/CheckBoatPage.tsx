import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Boats: SafeOrStolen has NO marine-specific data source. A HIN can only be run
 * through the general serial check. Official HIN resources are listed for the
 * reader to check themselves.
 */
const CheckBoatPage = () => {
 return (
 <ItemLandingPageTemplate
 title="How to Check if a Boat Is Stolen (HIN Guide) | SafeOrStolen"
 metaDescription="Check a boat's hull ID (HIN) before buying: where to find it, official places to check it yourself, tampering signs, and running it through SafeOrStolen's serial check."
 h1="How to Check if a Boat Is Stolen"
 itemType="Boat"
 dateModified="2026-09-23"
 keywords={[
 'check if boat is stolen',
 'boat HIN lookup',
 'hull identification number check',
 'stolen jet ski check',
 'used boat buying checklist'
 ]}
 content={{
 intro: "Before you buy a used boat, jet ski or other watercraft, find its Hull Identification Number (HIN), confirm it matches the paperwork, and check it with the official agencies listed below. SafeOrStolen has no marine-specific data source, but you can run the HIN through SafeOrStolen's general serial number check, which covers SafeOrStolen's own stolen-item reports, public web results and AI analysis.",
 whatIs: "A HIN is the 12-character code that identifies a boat, similar to a car's VIN. Checking whether a boat is stolen means confirming the HIN on the hull matches the title and registration, and asking the agencies that hold boat records. Those official resources include your state's boat registration and titling agency, the U.S. Coast Guard National Vessel Documentation Center (for federally documented vessels), and your local police or marine patrol. SafeOrStolen does not search Coast Guard, state registration or police records.",
 howItWorks: "Enter the HIN on the SafeOrStolen serial number checker. It checks SafeOrStolen's own stolen-item reports, runs a public web search for the HIN, and uses AI analysis to explain the result. You get a result — Stolen, Not stolen, or Not found in the sources we checked — and it's saved to your account. After a clean check you can keep a Proof of Clean Purchase record showing you did your due diligence. Because there is no marine-specific source behind this check, always also use the official resources above.",
 whyCheck: "A stolen boat can be recovered by authorities and returned to its owner even after you pay, and a boat with mismatched or altered HINs may not be registrable. Checking the HIN and paperwork before you pay — and keeping a record that you checked — protects buyers, and gives honest sellers a way to show they have nothing to hide. No service can guarantee 100% accuracy and not every theft is reported.",
 benefits: [
 "Run a HIN through SafeOrStolen's general serial check in seconds",
 "Checks SafeOrStolen's own stolen-item reports, public web results and AI analysis",
 "Result saved to your account; Proof of Clean Purchase record after a clean check",
 "2 free checks with a free account, then $0.99 per check or $10/month unlimited",
 "Same account checks phones, vehicles, electronics, power tools, firearms and bicycles"
 ],
 process: [
 "Find the HIN on the transom (starboard side, near the top) and the second, hidden location inside the hull; both must match",
 "Confirm the HIN matches the title and registration, and that the seller's name matches the title",
 "Contact your state's boat registration and titling agency about the HIN, and search the U.S. Coast Guard National Vessel Documentation Center if the vessel is federally documented",
 "Call your local police or marine patrol non-emergency line with the HIN and trailer plate",
 "Run the HIN through SafeOrStolen's serial number check and save the result",
 "If anything doesn't match or shows stolen, don't pay — leave and report it to police"
 ],
 faqs: [
 {
 question: "What is a HIN and where do I find it?",
 answer: "A Hull Identification Number is a 12-character code that identifies a boat. It's usually on the transom on the starboard side near the top, with a second copy in a less visible spot inside the hull. Both must match each other and the paperwork."
 },
 {
 question: "Does SafeOrStolen search Coast Guard or state boat records?",
 answer: "No. SafeOrStolen has no marine-specific data source. You can run a HIN through its general serial check (SafeOrStolen's own stolen-item reports, public web results and AI analysis). Check with your state's boat registration agency, the Coast Guard National Vessel Documentation Center for documented vessels, and local police yourself."
 },
 {
 question: "Where can I check a HIN myself?",
 answer: "Your state's boat registration and titling agency, the U.S. Coast Guard National Vessel Documentation Center (for federally documented vessels), and your local police or marine patrol non-emergency line."
 },
 {
 question: "What are signs a boat's HIN was tampered with?",
 answer: "A HIN plate that is scratched, re-riveted, glued on or painted over; the two HIN locations not matching; a HIN that doesn't match the title; or a seller who can't produce a title or registration in their name."
 },
 {
 question: "What about the trailer and outboard motor?",
 answer: "Trailers usually have their own VIN and plate, and outboard motors have their own serial numbers. Check each one against the paperwork. A trailer VIN can be checked with the SafeOrStolen VIN checker, and a motor serial with the serial number checker."
 },
 {
 question: "What should I do if the boat might be stolen?",
 answer: "Don't pay and don't confront the seller. Save the listing and messages, leave, and report it to your local police or marine patrol."
 }
 ]
 }}
 />
 );
};

export default CheckBoatPage;
