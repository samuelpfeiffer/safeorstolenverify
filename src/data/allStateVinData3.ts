// CONTINUED: States Minnesota through North Carolina
// Note: theftStats will be converted to topCities in completeStateVinData.ts
// Oct 2026 audit: copy rewritten by hand. Removed invented theft counts, recovery rates,
// city rankings, penalty figures we could not confirm, "instant" claims, claims that
// state agencies or SafeOrStolen search "national databases", and off-site DMV links
// (dmvLink is left empty on purpose). These states are overridden by allStateVinData7.ts
// and allStateVinData8.ts but are kept accurate here too.
export const ALL_STATE_VIN_DATA_PART3 = {
 minnesota: {
 state: "Minnesota", stateCode: "MN", slug: "minnesota-vin-lookup",
 title: "Minnesota VIN Lookup - Free MN Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Minnesota VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Minneapolis", "St. Paul", "Rochester"] },
 dmvLink: "",
 content: {
 intro: "Enter a Minnesota car's 17-character VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its own theft reports and public web results for that VIN.",
 whyCheck: "Twin Cities buyers often find cars on Marketplace or Craigslist and meet in a parking lot. If the seller can't show a title in their own name, or the VIN sticker on the door jamb is missing or looks peeled, check the VIN before you hand over cash. Look underneath too: road salt is hard on frames and brake lines.",
 localLaws: "Minnesota treats receiving or keeping property you know or have reason to know is stolen as theft. A stolen car can be returned to its owner even if you paid for it. Driver and Vehicle Services (DVS) handles titles."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Minnesota?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com). In a few seconds you see the decoded vehicle, open recalls, and whether the VIN appears in SafeOrStolen theft reports or public web results. Then match the VIN on the dash, door jamb and title, and check the seller's ID against the title." },
 { question: "How does Minnesota DVS handle title transfers?", answer: "The seller signs the title over to you and you apply to transfer it through a deputy registrar office. That happens after you've paid, so do your own checks first. Ask DVS directly about liens or title brands." }
 ]
 },
 mississippi: {
 state: "Mississippi", stateCode: "MS", slug: "mississippi-vin-lookup",
 title: "Mississippi VIN Lookup - Free MS Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Mississippi VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Jackson", "Gulfport", "Southaven"] },
 dmvLink: "",
 content: {
 intro: "Type a Mississippi vehicle's VIN into SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results for that VIN.",
 whyCheck: "I-55 and I-20 cross at Jackson, and Southaven sits right on the Memphis line, so cars sold in Mississippi often came from another state. A seller with an out-of-state title in someone else's name, or a pickup priced well under market, is the time to check.",
 localLaws: "Receiving or keeping property you know is stolen is a crime in Mississippi. A stolen vehicle can be returned to its owner even after you bought it. Titles go through the Mississippi Department of Revenue via your county tax collector."
 },
 faqs: [
 { question: "How do I verify a Mississippi title?", answer: "Check that the VIN on the title matches the dash plate and door sticker, and that the seller's name matches their ID. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls. Ask your county tax collector about liens and title status." },
 { question: "What should I check when buying a used truck in Mississippi?", answer: "Match the VIN on the truck and title, check the seller's ID, and run the VIN on SafeOrStolen. For flood damage after a Gulf storm, look at the truck itself: silt under the carpet, rust on seat bolts, fogged lights and a musty smell. Buy a history report for title brands." }
 ]
 },
 missouri: {
 state: "Missouri", stateCode: "MO", slug: "missouri-vin-lookup",
 title: "Missouri VIN Lookup - Free MO Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Missouri VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Kansas City", "St. Louis", "Springfield"] },
 dmvLink: "",
 content: {
 intro: "Enter a Missouri vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "Kansas City and St. Louis both straddle state lines, so a car listed in Missouri may be titled in Kansas or Illinois. Ask whose name is on the title, compare it to the seller's ID, and check the VIN before you meet.",
 localLaws: "Missouri's stealing law covers receiving property you know or believe is stolen. A stolen car can be returned to its owner even if you paid for it. The Missouri Department of Revenue handles titles through license offices."
 },
 faqs: [
 { question: "How do I check a car for theft in Kansas City or St. Louis?", answer: "Enter the VIN on SafeOrStolen (safeorstolen.com) to decode it, see open recalls, and search SafeOrStolen theft reports and public web results. Then check that the VIN on the dash, door jamb and title match, and that the seller's name matches the title." },
 { question: "Does Missouri inspect out-of-state vehicles?", answer: "Vehicles coming from another state generally need a VIN and odometer check before Missouri will title them. That happens after the sale, so run your own check first and confirm the VIN on the car matches the paperwork." }
 ]
 },
 montana: {
 state: "Montana", stateCode: "MT", slug: "montana-vin-lookup",
 title: "Montana VIN Lookup - Free MT Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Montana VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Billings", "Missoula", "Great Falls"] },
 dmvLink: "",
 content: {
 intro: "Run a Montana vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Many Montana sales are pickups, trailers and RVs sold privately across long distances. Montana also registers many out-of-state owners' vehicles through Montana LLCs, so the name on the paperwork may be a company. Ask who actually owns it and check the VIN.",
 localLaws: "Montana's theft law covers buying or keeping property you know is stolen. A stolen vehicle can be returned to its owner even after a sale. The Montana Motor Vehicle Division and county treasurers handle titles."
 },
 faqs: [
 { question: "How do I check a used truck in Montana?", answer: "Match the VIN on the dash, door jamb and title, look for a damaged ignition or mismatched keys, and run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and open recalls. Ask the seller how long they've owned it and why it's for sale." },
 { question: "How do I verify a Montana title held by an LLC?", answer: "Ask for proof the seller can sign for the LLC, such as the company's records naming them. Check that the VIN on the title matches the vehicle. Ask the Montana MVD about liens and title status." }
 ]
 },
 nebraska: {
 state: "Nebraska", stateCode: "NE", slug: "nebraska-vin-lookup",
 title: "Nebraska VIN Lookup - Free NE Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Nebraska VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Omaha", "Lincoln", "Bellevue"] },
 dmvLink: "",
 content: {
 intro: "Type a Nebraska car's VIN and SafeOrStolen decodes the year, make and model, shows open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "Omaha and Council Bluffs work as one market, so a car for sale in Omaha may carry an Iowa title. I-80 also brings cars from both coasts. Check the VIN and the name on the title before you pay.",
 localLaws: "Nebraska's theft law covers receiving stolen property. A stolen car can be returned to its owner even if you paid for it. County treasurers handle titles for the Nebraska DMV."
 },
 faqs: [
 { question: "How do I verify a Nebraska title?", answer: "Check that the VIN on the title matches the car and that the seller's name matches their ID. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls. Ask your county treasurer about liens and title status." },
 { question: "What should I check when buying a used car in Omaha?", answer: "Match the VIN on dash, door jamb and title, check the seller's ID, and run a stolen check on SafeOrStolen. Look for hail repairs and rust from road salt. If you want accident or title-brand history, buy a separate vehicle history report." }
 ]
 },
 nevada: {
 state: "Nevada", stateCode: "NV", slug: "nevada-vin-lookup",
 title: "Nevada VIN Lookup - Free NV Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Nevada VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Las Vegas", "Henderson", "Reno"] },
 dmvLink: "",
 content: {
 intro: "Enter a Nevada vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and searches its theft reports and public web results for that VIN.",
 whyCheck: "Las Vegas has a lot of people moving in and out, and many cars sold there were titled in California, Arizona or Utah first. A seller who just moved, has no title yet, or wants to meet at a casino garage is the time to check the VIN.",
 localLaws: "Possessing stolen property is a crime in Nevada, and a stolen car can be returned to its owner even if you paid for it. The Nevada DMV handles titles."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Las Vegas?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com) to decode it, see open recalls, and search SafeOrStolen theft reports and public web results. Match the VIN on the dash, door jamb and title, and make sure the seller's ID matches the title." },
 { question: "Does Nevada inspect out-of-state cars?", answer: "Cars coming from another state generally need a VIN inspection before Nevada DMV will title them. That inspection happens after you buy, so run the VIN on SafeOrStolen first." }
 ]
 },
 newhampshire: {
 state: "New Hampshire", stateCode: "NH", slug: "new-hampshire-vin-lookup",
 title: "New Hampshire VIN Lookup - Free NH Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free New Hampshire VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Manchester", "Nashua", "Concord"] },
 dmvLink: "",
 content: {
 intro: "Run a New Hampshire vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "New Hampshire has no sales tax, so buyers come up from Massachusetts and cars cross the border both ways. Manchester and Nashua sales often involve a Massachusetts title. Match the name and VIN on the title to the seller and the car.",
 localLaws: "Receiving stolen property is a crime in New Hampshire, and a stolen car can be returned to its owner even after a sale. You register at your town or city clerk and the Division of Motor Vehicles issues titles; older vehicles may not have a title at all, so ask for the registration and a bill of sale."
 },
 faqs: [
 { question: "How do I check a used car in New Hampshire?", answer: "Enter the VIN on SafeOrStolen (safeorstolen.com) for theft reports, public web results and open recalls. Match the VIN on the dash, door jamb and title or registration, and check the seller's ID. Inspect underneath for rust from road salt." },
 { question: "What if a New Hampshire car has no title?", answer: "Some older vehicles aren't titled in New Hampshire. Get a bill of sale and the current registration, confirm the VIN on both matches the car, and run the VIN on SafeOrStolen. Ask the Division of Motor Vehicles what you'll need to register it." }
 ]
 },
 newjersey: {
 state: "New Jersey", stateCode: "NJ", slug: "new-jersey-vin-lookup",
 title: "New Jersey VIN Lookup - Free NJ Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free New Jersey VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Newark", "Jersey City", "Paterson"] },
 dmvLink: "",
 content: {
 intro: "Type a New Jersey car's VIN into SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "North Jersey is part of the New York market and South Jersey is part of Philadelphia's, so cars move across state lines all the time. Luxury SUVs in particular get stolen and resold. Check the VIN and the seller's ID against the title before you pay.",
 localLaws: "New Jersey grades theft and receiving stolen property by value, and most cars are worth enough for a serious charge. A stolen car can be returned to its owner even if you paid for it. The Motor Vehicle Commission (MVC) handles titles."
 },
 faqs: [
 { question: "How do I check if a car is stolen in New Jersey?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com). In a few seconds you see the decoded vehicle, open recalls, and whether the VIN shows up in SafeOrStolen theft reports or public web results. Then match the VIN on the car and title and check the seller's ID." },
 { question: "How does a title transfer work at the NJ MVC?", answer: "The seller signs the back of the title over to you, and you take it to an MVC agency to put it in your name. That happens after the sale, so do your checks first, including a VIN check on SafeOrStolen." }
 ]
 },
 newmexico: {
 state: "New Mexico", stateCode: "NM", slug: "new-mexico-vin-lookup",
 title: "New Mexico VIN Lookup - Free NM Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free New Mexico VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Albuquerque", "Las Cruces", "Rio Rancho"] },
 dmvLink: "",
 content: {
 intro: "Enter a New Mexico vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "Albuquerque sits where I-40 and I-25 meet, so cars for sale there come from Texas, Arizona and Colorado as well as in-state. A missing title, a temporary tag with no paperwork, or a seller who won't meet at their home is a reason to check the VIN.",
 localLaws: "New Mexico law makes it a crime to receive or keep a vehicle you know is stolen. A stolen car can be returned to its owner even if you paid for it. The Motor Vehicle Division (MVD) handles titles."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Albuquerque?", answer: "Enter the VIN on SafeOrStolen (safeorstolen.com) to decode it, see open recalls, and search SafeOrStolen theft reports and public web results. Match the VIN on the dash, door jamb and title, and check the seller's ID against the title." },
 { question: "Does New Mexico MVD inspect out-of-state cars?", answer: "Vehicles coming from another state generally need a VIN inspection before New Mexico will title them. It happens after the sale, so run the VIN on SafeOrStolen first." }
 ]
 },
 northcarolina: {
 state: "North Carolina", stateCode: "NC", slug: "north-carolina-vin-lookup",
 title: "North Carolina VIN Lookup - Free NC Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free North Carolina VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Charlotte", "Raleigh", "Greensboro"] },
 dmvLink: "",
 content: {
 intro: "Run a North Carolina vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Charlotte and the Triangle draw people from all over the country, so many cars for sale there were titled in another state first. North Carolina requires the seller's signature on the title to be notarized, so a seller who won't go to a notary with you is a red flag.",
 localLaws: "Receiving or possessing stolen goods is a crime in North Carolina, and a stolen car can be returned to its owner even after a sale. NCDMV handles titles through license plate agencies."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Charlotte?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com) to decode it, see open recalls, and search SafeOrStolen theft reports and public web results. Then match the VIN on the car and title, and meet the seller at a notary so the title signature is done properly." },
 { question: "Why does North Carolina require a notarized title?", answer: "The notary confirms the identity of the person signing the title over to you. Bring your ID, have the seller sign in front of the notary, and check that their ID matches the name on the title. Run the VIN on SafeOrStolen before you meet." }
 ]
 }
};
