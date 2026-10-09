import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const BicycleSerialCheck = () => {
 return (
 <SEOLandingPageTemplate
 title="Check if Bicycle is Stolen - Serial Number Lookup | SafeOrStolen"
 metaDescription="Verify any bike isn't stolen before buying. Bicycle serial number check for Trek, Specialized, Giant, e-bikes. 2 free checks, then $0.99 a check. Results in a few seconds."
 h1="Check if Bicycle is Stolen - Serial Number Verification"
 keywords={[
 'check if bike is stolen',
 'bicycle serial number lookup',
 'stolen bike database',
 'bike serial number check',
 'is my bike stolen',
 'verify bike not stolen',
 'e-bike stolen check',
 'trek bike serial lookup',
 'specialized stolen check',
 'stolen bicycle registry'
 ]}
 canonical="/check-bicycle-stolen"
 itemType="Bicycle"
 identifierType="Serial Number"
 heroBadge="Bicycle Theft Verification"
 heroSubtitle="Before buying a used bicycle or e-bike, search the serial number against our theft reports, public web results, and a national stolen-bicycle registry. 2 free checks, then $0.99 a check or $10 a month unlimited."
 stats={[
 { value: "2", label: "Free Checks" },
 { value: "Seconds", label: "To a Result" },
 { value: "$0.99", label: "Single Check" },
 { value: "$10/mo", label: "Unlimited Checks" }
 ]}
 whatIsTitle="What is Bicycle Serial Number Verification?"
 whatIsContent="Every bicycle has a unique serial number stamped by the manufacturer, usually on the bottom bracket (where the pedal cranks meet). When a bike is reported stolen, this serial number is often recorded. A SafeOrStolen bike check searches our own theft reports, public web results, and a national stolen-bicycle registry for that serial. It matters most on expensive bikes: high-end road bikes, mountain bikes, and e-bikes."
 howItWorksSteps={[
 "Find the serial number: Usually stamped under the bottom bracket (where the pedals connect), on the head tube, or rear dropout",
 "Enter the serial number into our verification tool",
 "We search SafeOrStolen theft reports, public web results, and a national stolen-bicycle registry in a few seconds",
 "Read the result: reported stolen, possible match, or no report found in the records searched"
 ]}
 howItWorksDescription="Besides our own reports and public web results, we search a national stolen-bicycle registry. We don't search manufacturer registries or police systems. For e-bikes, run the frame serial; you can also run the motor or battery serial as a separate check."
 whyVerifyTitle="Why Check Before Buying a Used Bike?"
 whyVerifyContent="Stolen bikes often end up for sale on the used market. Here's why a check is worth it:"
 whyVerifyBenefits={[
 "High-end bikes (Trek, Specialized, Giant, Cannondale) are prime targets",
 "E-bikes are expensive, which makes them frequent targets",
 "Police can take a stolen bike back and return it to its owner, even if you paid for it",
 "Knowingly buying stolen property is a crime, and ignoring obvious warning signs can count against you",
 "A dated check saved to your account shows you looked before you paid",
 "Owners often register stolen bikes with a national stolen-bicycle registry, so a serial can come back as reported",
 "Getting your money back from a private seller after the fact is often hard"
 ]}
 useCases={[
 {
 title: "Road Bike Purchases",
 description: "Carbon road bikes from brands like Trek Madone, Specialized Tarmac, and Cervelo are theft targets. Always verify."
 },
 {
 title: "E-Bike Verification",
 description: "Electric bikes are expensive and easy to steal. Verify the serial number on both the frame and motor."
 },
 {
 title: "Mountain Bike Buyers",
 description: "High-end mountain bikes are frequently stolen from trailheads. Verify before buying used."
 }
 ]}
 faqs={[
 {
 question: "Where is the serial number on a bicycle?",
 answer: "The most common location is under the bottom bracket (the part where the pedals and cranks connect to the frame). Other locations include: head tube (front of frame where handlebars connect), rear dropouts (where the rear wheel attaches), or on a sticker on the seat tube. Serial numbers are usually 6-12 characters of letters and numbers."
 },
 {
 question: "Can I check e-bike serial numbers?",
 answer: "Yes. E-bikes often have multiple serial numbers - one on the frame, one on the motor, and one on the battery. We recommend checking the frame serial number first, as this is what's typically registered in theft databases."
 },
 {
 question: "What brands of bikes can I verify?",
 answer: "Our verification works for all bicycle brands including Trek, Specialized, Giant, Cannondale, Santa Cruz, Yeti, Scott, Canyon, Cervelo, Pinarello, BMC, and all other manufacturers. Any bike with a serial number can be checked."
 },
 {
 question: "How do I know if a bike serial number is legit?",
 answer: "Legitimate serial numbers are stamped or engraved (not stickers). They should be on the frame, not components. Be wary if the serial number area appears scratched, filed, or covered. Some thieves attempt to remove or alter serial numbers."
 },
 {
 question: "What if the bike has no serial number?",
 answer: "This is a major red flag. All major manufacturers stamp serial numbers on their frames. A missing serial number could mean it was removed to hide the bike's stolen status. We recommend not purchasing bikes without serial numbers."
 },
 {
 question: "What databases does SafeOrStolen check for bikes?",
 answer: "We search SafeOrStolen's own theft reports, public web results, and a national stolen-bicycle registry. The result reads reported stolen, possible match, or no report found in the records searched, with every source listed."
 },
 {
 question: "What if the bike is reported stolen?",
 answer: "Don't buy the bicycle. Walk away immediately. You can report the listing to the marketplace. Consider notifying local police. The original owner may be actively looking for their bike."
 },
 {
 question: "Should I register my own bike?",
 answer: "Yes. Write down your serial number, take photos of the bike, and register it with a free stolen-bike registry. If it's stolen, report it to police and on SafeOrStolen so a buyer who checks the serial sees the report."
 }
 ]}
 ctaTitle="Don't Buy a Stolen Bicycle"
 ctaDescription="A serial number check takes a few seconds, and your first 2 checks are free."
 relatedLinks={[
 { title: "E-Bike Verification", href: "/check-ebike" },
 { title: "Craigslist Safety", href: "/craigslist-safety-verification" },
 { title: "Facebook Marketplace Check", href: "/facebook-marketplace-stolen-check" }
 ]}
 />
 );
};

export default BicycleSerialCheck;
