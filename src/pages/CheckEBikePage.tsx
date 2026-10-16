import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const CheckEBikePage = () => {
 return (
 <ItemLandingPageTemplate
 title="Check if an eBike Is Stolen - Electric Bike Serial Number Check"
 metaDescription="Check if an eBike or e-scooter is reported stolen before you buy. Search the frame, motor or battery serial for Rad Power, Trek, Specialized or Aventon. 2 free checks."
 h1="Check if Your eBike is Stolen Before Buying"
 itemType="eBikes & E-Scooters"
 searchType="bike"
 searchPlaceholder="Enter the frame or motor serial number"
 keywords={[
 'check if ebike stolen',
 'stolen ebike check',
 'electric bike serial number lookup',
 'verify ebike not stolen',
 'e-scooter stolen check'
 ]}
 content={{
 intro: "Check whether an eBike or e-scooter has been reported stolen in a few seconds. Enter the frame, motor, or battery serial for Rad Power, Trek, Specialized, Aventon, or any other brand. Do it before you buy from Facebook Marketplace, eBay, Craigslist, or a bike shop. eBikes cost a lot and are easy to resell, which makes them frequent theft targets.",
 whatIs: "Checking if an eBike is stolen means looking up its serial numbers in records of reported thefts. Electric bikes usually carry several: a frame serial, a motor serial and a battery serial, and it's worth checking each one. SafeOrStolen's eBike check searches its own theft reports, public web results and a national stolen-bicycle registry, for any brand. If an eBike turns out to be stolen after you buy it, police can take it back.",
 howItWorks: "Each serial you enter is searched against three sources: (1) a national stolen-bicycle registry, (2) SafeOrStolen's own theft reports, and (3) public web results such as listings and posts that mention the number. Check frame serial (bottom bracket), motor serial (motor casing), and battery serial (battery pack). In a few seconds you see reported stolen, possible match, or no report found in the records searched, with every source listed.",
 whyCheck: "If you buy a stolen eBike, police can take it back and return it to its owner, and you're left trying to get your money back from the seller. Some eBikes have a GPS tracker or a brand app the owner can still use to find the bike. Knowingly buying stolen property is a crime, and ignoring obvious warning signs can count against you. Stolen eBikes often turn up on Facebook Marketplace, Craigslist, and OfferUp priced well below what similar bikes sell for. Checking every serial before you pay is the simplest way to catch one that's been reported.",
 benefits: [
 "Check Rad Power Bikes - RadRunner, RadRover, RadCity, RadMission, RadWagon",
 "Verify Trek eBikes - Verve+, Allant+, Powerfly, Rail, Domane+",
 "Check Specialized eBikes - Turbo Vado, Turbo Levo, Turbo Creo, Como",
 "Verify Aventon eBikes - Level, Pace, Aventure, Soltera, Sinch",
 "Check any eBike brand - Giant, Cannondale, Pedego, Lectric, Super73",
 "Verify e-scooters - Segway, Xiaomi, Bird, Lime, unagi scooters",
 "Check frame, motor, and battery serial numbers",
 "Searches a national stolen-bicycle registry, SafeOrStolen theft reports and public web results",
 "2 free checks with a free account, then $0.99 a check or $10 a month unlimited"
 ],
 process: [
 "Locate all serial numbers: Frame serial (bottom bracket, head tube, or rear dropout), motor serial (on motor casing), battery serial (on battery pack). Check owner's manual for exact locations. Most eBikes have 2-3 separate serial numbers.",
 "Write down every serial exactly - frame, motor and battery. One wrong character can cause false results. Take photos of all serial number labels.",
 "Take photos of the entire eBike including any damage, modifications, or unique features",
 "Enter all serial numbers into our verification tool at SafeOrStolen.com/verify",
 "Read each result: reported stolen, possible match, or no report found in the records searched",
 "If any serial comes back reported stolen, don't buy the bike, and report the listing to police. If all are clean, still match the serials to the seller's receipt or paperwork"
 ],
 faqs: [
 {
 question: "What eBike brands can I check?",
 answer: "You can check any eBike brand on SafeOrStolen (safeorstolen.com/check-ebike), including: (1) Rad Power Bikes - RadRunner, RadRover, RadCity, RadMission, RadWagon, (2) Trek - Verve+, Allant+, Powerfly, Rail, Domane+, FX+, (3) Specialized - Turbo Vado, Turbo Levo, Turbo Creo, Como, Kenevo, (4) Aventon - Level, Pace, Aventure, Soltera, Sinch, (5) Giant - Explore E+, Stance E+, Trance E+, (6) Cannondale - Moterra, Tesoro, Quick Neo, (7) Pedego - Interceptor, City Commuter, Ridge Rider, (8) Lectric XP, Super73, Juiced Bikes, Ride1UP, and all other eBike brands. If it has a serial number, we can check it."
 },
 {
 question: "Where do I find the serial number on an eBike?",
 answer: "eBikes have multiple serial numbers you should check: (1) Frame serial number - usually on bottom bracket (where pedals connect), head tube (front), or rear dropout near rear wheel. Look for stamped or sticker label, (2) Motor serial number - on the motor casing (check left and right sides, top and bottom), (3) Battery serial number - on battery pack (remove battery to see label). Some eBikes also have a serial on the controller. Check your owner's manual or manufacturer's website for exact locations. If you can't find any serial numbers, or they've been scratched off, treat that as a serious warning sign and walk away."
 },
 {
 question: "Is the eBike stolen check really free?",
 answer: "Your first 2 checks on SafeOrStolen are free with a free account, and no credit card is needed. Each serial is one check, so with a frame, motor and battery serial you may want a third. After the free checks it's $0.99 a check or $10 a month for unlimited checks."
 },
 {
 question: "What should I do if my eBike check shows it's stolen?",
 answer: "If our check shows the eBike is reported stolen: (1) Don't buy it, (2) Walk away immediately without confronting the seller (could be dangerous), (3) Screenshot the listing and record seller information, (4) Report the listing to the platform (Facebook Marketplace, Craigslist, eBay), (5) File an anonymous tip with local police including the listing URL, all serial numbers, and seller details. Include any report number if available, (6) If you already bought it, contact police, keep your payment records, and ask your bank or payment app whether they can help."
 },
 {
 question: "Why are eBikes stolen so frequently?",
 answer: "eBikes are common theft targets because: (1) High value - they're worth a lot and resell quickly, (2) Easy to sell - huge demand on Facebook Marketplace, Craigslist, OfferUp, (3) Lightweight - electric bikes with carbon frames can be lifted easily, (4) Popular in cities - high density areas have more theft opportunities, (5) Often locked with a cable lock that's quick to cut, (6) Parts are valuable - batteries and motors sell on their own. Checking every serial before you pay is a simple way to catch one that's been reported."
 },
 {
 question: "Can eBike serial numbers be removed or faked?",
 answer: "Yes. Thieves sometimes grind off or replace serial numbers on stolen eBikes, and that alone is a serious warning sign. Signs of tampering: (1) Frame serial number area looks scratched, filed, polished, or re-stamped, (2) Serial sticker is obviously replaced, peeling, or doesn't match bike quality, (3) Serial numbers are partially illegible or incomplete, (4) Motor or battery serial numbers are missing entirely, (5) Seller can't or won't show you the serial numbers. If you see signs of tampering, walk away. SafeOrStolen doesn't judge whether a serial looks genuine; it only tells you whether that serial shows up in theft reports, public web results, or a national stolen-bicycle registry."
 },
 {
 question: "How long does an eBike serial number check take?",
 answer: "A few seconds per serial number. Enter the frame, motor, or battery serial and you get a result in a few seconds. Each check searches a national stolen-bicycle registry, SafeOrStolen's own theft reports, and public web results."
 },
 {
 question: "What are red flags when buying a used eBike?",
 answer: "Red flags for stolen eBikes: (1) Price is far below what the same model sells for elsewhere, (2) Seller won't provide serial numbers or won't let you examine the bike closely, (3) Serial number areas look scratched, filed, or tampered with, (4) No original box, manual, charger, or purchase receipt, (5) Battery or motor doesn't match the bike brand (swapped parts from different stolen bikes), (6) Meeting in public parking lot late at night instead of seller's home, (7) Seller is in a rush and won't answer basic questions about bike history, maintenance, or why they're selling, (8) Bike has fresh damage suggesting forced lock removal or theft (cut cables, broken lock mounts), (9) Seller has multiple high-end eBikes for sale (professional bike thief), (10) Asking for cash only with no electronic payment trail. If you see two or three of these together, walk away."
 }
 ]
 }}
 />
 );
};

export default CheckEBikePage;
