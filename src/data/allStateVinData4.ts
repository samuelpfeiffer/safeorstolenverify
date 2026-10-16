// FINAL: States North Dakota through Wyoming
// Note: theftStats will be converted to topCities in completeStateVinData.ts
// Oct 2026 audit: copy rewritten by hand. Removed invented theft counts, recovery rates,
// city rankings, penalty figures we could not confirm, "instant" claims, claims that
// agencies or SafeOrStolen search "national databases", and off-site DMV links
// (dmvLink is left empty on purpose). These states are overridden by allStateVinData9.ts
// and allStateVinData10.ts but are kept accurate here too.
export const ALL_STATE_VIN_DATA_PART4 = {
 northdakota: {
 state: "North Dakota", stateCode: "ND", slug: "north-dakota-vin-lookup",
 title: "North Dakota VIN Lookup - Free ND Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free North Dakota VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Fargo", "Bismarck", "Grand Forks"] },
 dmvLink: "",
 content: {
 intro: "Enter a North Dakota vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its own theft reports and public web results for that VIN.",
 whyCheck: "Oil-field work brought trucks into western North Dakota from all over the country, and many have been resold since. Fargo buyers also shop across the river in Minnesota. Check whose name is on the title and run the VIN before you pay.",
 localLaws: "North Dakota's theft law covers receiving or keeping stolen property. A stolen vehicle can be returned to its owner even if you paid for it. The NDDOT Motor Vehicle Division handles titles."
 },
 faqs: [
 { question: "How do I check a used work truck in North Dakota?", answer: "Match the VIN on the dash, door jamb and title, look for a damaged ignition or mismatched keys, and run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and open recalls. High-mileage oil-field trucks are common, so get a mechanic's inspection too." },
 { question: "How do I verify a North Dakota title?", answer: "Check that the VIN on the title matches the vehicle and that the seller's name matches their ID. Run the VIN on SafeOrStolen for theft reports. Ask the NDDOT Motor Vehicle Division about liens, since SafeOrStolen does not search state title records." }
 ]
 },
 ohio: {
 state: "Ohio", stateCode: "OH", slug: "ohio-vin-lookup",
 title: "Ohio VIN Lookup - Free OH Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Ohio VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Columbus", "Cleveland", "Cincinnati"] },
 dmvLink: "",
 content: {
 intro: "Type an Ohio car's VIN into SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results for that VIN.",
 whyCheck: "Ohio titles are issued by the county clerk of courts, and the seller's signature on the title has to be notarized. A seller who wants to skip the notary or hands you an open title signed by someone else is a warning sign.",
 localLaws: "Receiving stolen property is a crime in Ohio, and a stolen car can be returned to its owner even if you paid for it. Titles go through county clerk of courts title offices; the BMV handles registration."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Ohio?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com). In a few seconds you see the decoded vehicle, open recalls, and whether the VIN appears in SafeOrStolen theft reports or public web results. Then match the VIN on the car and title and meet at a notary for the signature." },
 { question: "Do Ohio out-of-state vehicles need an inspection?", answer: "Yes, a vehicle titled in another state generally needs a VIN inspection before Ohio will title it. That happens after you've paid, so check the VIN yourself first. SafeOrStolen does not search BMV or clerk of courts records." }
 ]
 },
 oklahoma: {
 state: "Oklahoma", stateCode: "OK", slug: "oklahoma-vin-lookup",
 title: "Oklahoma VIN Lookup - Free OK Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Oklahoma VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Oklahoma City", "Tulsa", "Norman"] },
 dmvLink: "",
 content: {
 intro: "Run an Oklahoma vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Pickups change hands constantly in Oklahoma, often for cash and often across the Texas line. Hail and storm damage is also common, and repaired storm cars get resold. Check the VIN, the title and the body panels before you pay.",
 localLaws: "Oklahoma law makes receiving or keeping stolen property a crime. A stolen vehicle can be returned to its owner even after a sale. Titles are handled by Service Oklahoma through local tag agencies."
 },
 faqs: [
 { question: "How do I check a used pickup in Oklahoma?", answer: "Compare the VIN on the dash, driver's door and title. Look for a damaged steering column, mismatched keys and fresh paint over VIN stickers. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls before you pay." },
 { question: "How do I verify an Oklahoma title?", answer: "Check that the VIN on the title matches the truck and that the seller's name matches their ID. Run the VIN on SafeOrStolen. Ask a tag agency about liens, since SafeOrStolen does not search state title records." }
 ]
 },
 oregon: {
 state: "Oregon", stateCode: "OR", slug: "oregon-vin-lookup",
 title: "Oregon VIN Lookup - Free OR Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Oregon VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Portland", "Eugene", "Salem"] },
 dmvLink: "",
 content: {
 intro: "Enter an Oregon vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "Car theft in Portland gets steady local news coverage, and stolen cars often get relisted online quickly. Oregon has no sales tax, so Washington buyers shop there too. Check the VIN and make sure the title is in the seller's name.",
 localLaws: "Oregon law covers both unauthorized use of a vehicle and possessing a stolen vehicle. A stolen car can be returned to its owner even if you paid for it. Oregon DMV handles titles."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Portland?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com) to decode it, see open recalls, and search SafeOrStolen theft reports and public web results. Match the VIN on the dash, door jamb and title, and check the seller's ID against the title." },
 { question: "Does Oregon inspect out-of-state cars?", answer: "Vehicles coming from another state generally need a VIN inspection before Oregon DMV will title them. That happens after the sale, so check the VIN yourself first. SafeOrStolen does not search Oregon DMV records." }
 ]
 },
 rhodeisland: {
 state: "Rhode Island", stateCode: "RI", slug: "rhode-island-vin-lookup",
 title: "Rhode Island VIN Lookup - Free RI Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Rhode Island VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Providence", "Warwick", "Cranston"] },
 dmvLink: "",
 content: {
 intro: "Type a Rhode Island car's VIN and SafeOrStolen decodes the year, make and model, shows open safety recalls, and searches its theft reports and public web results for that VIN.",
 whyCheck: "Rhode Island is small, and many cars for sale in Providence were registered in Massachusetts or Connecticut. Older vehicles may not have a Rhode Island title at all. Match the VIN and the seller's name on whatever paperwork they have.",
 localLaws: "Receiving stolen goods is a crime in Rhode Island, and a stolen car can be returned to its owner even after a sale. The Rhode Island DMV handles titles and registration."
 },
 faqs: [
 { question: "How do I check a used car in Providence?", answer: "Enter the VIN on SafeOrStolen (safeorstolen.com) for theft reports, public web results and open recalls. Match the VIN on the dash, door jamb and title or registration, and check the seller's ID. Inspect underneath for rust from road salt." },
 { question: "How do I verify a Rhode Island title?", answer: "Check that the VIN on the title or registration matches the car and that the seller's name matches their ID. Run the VIN on SafeOrStolen. Ask the RI DMV about liens; SafeOrStolen does not search state title records." }
 ]
 },
 southcarolina: {
 state: "South Carolina", stateCode: "SC", slug: "south-carolina-vin-lookup",
 title: "South Carolina VIN Lookup - Free SC Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free South Carolina VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Columbia", "Charleston", "North Charleston"] },
 dmvLink: "",
 content: {
 intro: "Run a South Carolina vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "I-95 and I-26 carry cars into South Carolina from Georgia, Florida and North Carolina, and coastal storms leave flood-damaged cars behind. Check the VIN for theft reports and check the car itself for water damage.",
 localLaws: "Receiving stolen goods is a crime in South Carolina, and a stolen car can be returned to its owner even if you paid for it. SCDMV handles titles."
 },
 faqs: [
 { question: "What should I check when buying a used car in South Carolina?", answer: "Match the VIN on dash, door jamb and title, check the seller's ID, and run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls. Near the coast, look for silt under carpets, rusty seat bolts and a musty smell." },
 { question: "How does a title transfer work at SCDMV?", answer: "The seller signs the title over to you and you apply for a new title at SCDMV. That happens after the sale, so check the VIN and seller first. SafeOrStolen does not search SCDMV records; ask SCDMV directly about liens." }
 ]
 },
 southdakota: {
 state: "South Dakota", stateCode: "SD", slug: "south-dakota-vin-lookup",
 title: "South Dakota VIN Lookup - Free SD Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free South Dakota VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Sioux Falls", "Rapid City", "Aberdeen"] },
 dmvLink: "",
 content: {
 intro: "Enter a South Dakota vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "Sioux Falls sits near the Iowa and Minnesota lines, and many vehicles are registered in South Dakota by people living elsewhere. Pickups, trailers and motorcycles sell privately for cash. Confirm the title and check the VIN first.",
 localLaws: "South Dakota's theft law covers receiving stolen property. A stolen vehicle can be returned to its owner even if you paid for it. County treasurers handle titles for the Department of Revenue's Motor Vehicle Division."
 },
 faqs: [
 { question: "How do I check a used truck in South Dakota?", answer: "Compare the VIN on the dash, door jamb and title, and check the seller's ID. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls. South Dakota has no routine safety inspection, so have a mechanic look it over." },
 { question: "How do I verify a South Dakota title?", answer: "Check that the VIN on the title matches the vehicle and the seller's name matches their ID. Run the VIN on SafeOrStolen. Ask your county treasurer about liens; SafeOrStolen does not search state title records." }
 ]
 },
 tennessee: {
 state: "Tennessee", stateCode: "TN", slug: "tennessee-vin-lookup",
 title: "Tennessee VIN Lookup - Free TN Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Tennessee VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Nashville", "Memphis", "Knoxville"] },
 dmvLink: "",
 content: {
 intro: "Type a Tennessee car's VIN into SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Car theft in Memphis gets heavy local news coverage, and Nashville's growth means many cars for sale there came from other states. A seller with no title, a title in someone else's name, or a rushed parking-lot deal is the time to check.",
 localLaws: "Tennessee's theft law covers knowingly obtaining or keeping stolen property. A stolen car can be returned to its owner even if you paid for it. County clerks handle titles for the Department of Revenue."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Memphis or Nashville?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com). In a few seconds you see the decoded vehicle, open recalls, and whether the VIN shows up in SafeOrStolen theft reports or public web results. Then match the VIN on the car and title and check the seller's ID." },
 { question: "How do I verify a Tennessee title?", answer: "Check that the VIN on the title matches the dash plate and door sticker, and that the seller's name matches their ID. Run the VIN on SafeOrStolen. Ask your county clerk about liens; SafeOrStolen does not search state title records." }
 ]
 },
 utah: {
 state: "Utah", stateCode: "UT", slug: "utah-vin-lookup",
 title: "Utah VIN Lookup - Free UT Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Utah VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Salt Lake City", "West Valley City", "Provo"] },
 dmvLink: "",
 content: {
 intro: "Run a Utah vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Utah has grown fast, and many trucks and SUVs on the Wasatch Front were titled in California or Nevada first. Ask how long the seller has owned the vehicle and check the VIN before you meet.",
 localLaws: "Receiving stolen property is a crime in Utah, and a stolen vehicle can be returned to its owner even after a sale. The Utah Division of Motor Vehicles handles titles."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Salt Lake City?", answer: "Enter the VIN on SafeOrStolen (safeorstolen.com) to decode it, see open recalls, and search SafeOrStolen theft reports and public web results. Match the VIN on the dash, door jamb and title, and check the seller's ID." },
 { question: "Does Utah inspect out-of-state vehicles?", answer: "Vehicles coming from another state generally need a VIN inspection before Utah will title them. That happens after you buy, so run your own check first. SafeOrStolen does not search Utah DMV records." }
 ]
 },
 vermont: {
 state: "Vermont", stateCode: "VT", slug: "vermont-vin-lookup",
 title: "Vermont VIN Lookup - Free VT Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Vermont VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Burlington", "South Burlington", "Rutland"] },
 dmvLink: "",
 content: {
 intro: "Enter a Vermont vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "Vermont doesn't issue titles for older vehicles, so many sales come with only a registration and a bill of sale. That makes the VIN on the car your main check. Match it to the paperwork and run it before you pay.",
 localLaws: "Receiving stolen property is a crime in Vermont, and a stolen vehicle can be returned to its owner even if you paid for it. The Vermont DMV handles titles and registration."
 },
 faqs: [
 { question: "How do I check a used car in Vermont?", answer: "Enter the VIN on SafeOrStolen (safeorstolen.com) for theft reports, public web results and open recalls. Match the VIN on the dash, door jamb and title or registration, and check the seller's ID. Inspect underneath for rust from road salt." },
 { question: "What if a Vermont car has no title?", answer: "Older vehicles in Vermont may be sold with a registration and bill of sale instead of a title. Confirm the VIN on both matches the car, run it on SafeOrStolen, and ask the DMV what your home state will need to register it." }
 ]
 },
 virginia: {
 state: "Virginia", stateCode: "VA", slug: "virginia-vin-lookup",
 title: "Virginia VIN Lookup - Free VA Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Virginia VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Virginia Beach", "Norfolk", "Richmond"] },
 dmvLink: "",
 content: {
 intro: "Type a Virginia car's VIN and SafeOrStolen decodes the year, make and model, shows open safety recalls, and searches its theft reports and public web results for that VIN.",
 whyCheck: "Hampton Roads has a large military population, and service members sell cars quickly when they get orders. Northern Virginia cars may be titled in Maryland or DC. A fast sale is usually innocent, but check the VIN and title name anyway.",
 localLaws: "Receiving stolen goods is treated as larceny in Virginia, and a stolen car can be returned to its owner even after a sale. The Virginia DMV handles titles."
 },
 faqs: [
 { question: "How do I check a car bought from a service member in Virginia?", answer: "Make sure the name on the title matches the seller's ID, and if a spouse or relative is selling, ask for a power of attorney. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls, and ask the lender about any lien." },
 { question: "How does a Virginia title transfer work?", answer: "The seller signs the title over to you and you apply for a new title at the Virginia DMV. That happens after the sale, so check the VIN and seller first. SafeOrStolen does not search Virginia DMV records." }
 ]
 },
 washington: {
 state: "Washington", stateCode: "WA", slug: "washington-vin-lookup",
 title: "Washington VIN Lookup - Free WA Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Washington VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Seattle", "Spokane", "Tacoma"] },
 dmvLink: "",
 content: {
 intro: "Run a Washington vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Car theft in the Seattle and Tacoma area gets steady local news coverage, and stolen cars often get relisted on Marketplace. Washington buyers also shop in Oregon for the lack of sales tax. Check the VIN and title name before you meet.",
 localLaws: "Washington has specific crimes for theft of a motor vehicle and possessing a stolen vehicle. A stolen car can be returned to its owner even if you paid for it. The Department of Licensing handles titles."
 },
 faqs: [
 { question: "How do I check if a car is stolen in Seattle?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com). In a few seconds you see the decoded vehicle, open recalls, and whether the VIN appears in SafeOrStolen theft reports or public web results. Then match the VIN on the car and title and check the seller's ID." },
 { question: "How does a Washington title transfer work?", answer: "The seller signs the title over to you and files a report of sale; you apply for a new title through a vehicle licensing office. That happens after you've paid, so check first. SafeOrStolen does not search Department of Licensing records." }
 ]
 },
 westvirginia: {
 state: "West Virginia", stateCode: "WV", slug: "west-virginia-vin-lookup",
 title: "West Virginia VIN Lookup - Free WV Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free West Virginia VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Charleston", "Huntington", "Morgantown"] },
 dmvLink: "",
 content: {
 intro: "Enter a West Virginia vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "Huntington, Wheeling and Morgantown sit near the Ohio, Kentucky and Pennsylvania lines, so many cars for sale there are titled in another state. Pickups sell privately for cash. Check the title name and the VIN first.",
 localLaws: "Receiving stolen property is a crime in West Virginia, and a stolen vehicle can be returned to its owner even if you paid for it. The West Virginia DMV handles titles."
 },
 faqs: [
 { question: "How do I check a used truck in West Virginia?", answer: "Compare the VIN on the dash, door jamb and title, look for a damaged ignition or mismatched keys, and run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls. Check underneath for rust and damage from rough roads." },
 { question: "How do I verify a West Virginia title?", answer: "Check that the VIN on the title matches the vehicle and that the seller's name matches their ID. Run the VIN on SafeOrStolen. Ask the WV DMV about liens; SafeOrStolen does not search state title records." }
 ]
 },
 wisconsin: {
 state: "Wisconsin", stateCode: "WI", slug: "wisconsin-vin-lookup",
 title: "Wisconsin VIN Lookup - Free WI Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Wisconsin VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 theftStats: { topCities: ["Milwaukee", "Madison", "Green Bay"] },
 dmvLink: "",
 content: {
 intro: "Type a Wisconsin car's VIN into SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Thefts of some Kia and Hyundai models without engine immobilizers got wide news coverage in Milwaukee. If you're looking at one, check for a cracked steering column cover or a damaged ignition, and run the VIN before you pay.",
 localLaws: "Wisconsin law covers both taking a vehicle without the owner's consent and receiving stolen property. A stolen car can be returned to its owner even if you paid for it. The Wisconsin DMV handles titles."
 },
 faqs: [
 { question: "How do I check a used Kia or Hyundai in Milwaukee?", answer: "Look at the steering column and ignition for cracks, loose trim or a punched lock. Ask whether the anti-theft software update was done. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and open recalls, and match it to the title." },
 { question: "How does a Wisconsin title transfer work?", answer: "The seller signs the title over to you and you apply for a new title with the Wisconsin DMV. That happens after the sale, so check the VIN and seller first. SafeOrStolen does not search Wisconsin DMV records." }
 ]
 },
 wyoming: {
 state: "Wyoming", stateCode: "WY", slug: "wyoming-vin-lookup",
 title: "Wyoming VIN Lookup - Free WY Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Wyoming VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 theftStats: { topCities: ["Cheyenne", "Casper", "Laramie"] },
 dmvLink: "",
 content: {
 intro: "Run a Wyoming vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Energy jobs bring workers and trucks into Wyoming from other states, and those trucks get resold when the work moves on. Cheyenne is also close to the Colorado line. Check the title name and the VIN before you hand over cash.",
 localLaws: "Wyoming law makes it a crime to buy, receive or keep property you know or believe is stolen. A stolen vehicle can be returned to its owner even if you paid for it. County clerks handle titles."
 },
 faqs: [
 { question: "How do I check a used truck in Wyoming?", answer: "Compare the VIN on the dash, door jamb and title, and check the seller's ID. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls. High-mileage work trucks are common, so get a mechanic's inspection too." },
 { question: "How do I verify a Wyoming title?", answer: "Check that the VIN on the title matches the vehicle and that the seller's name matches their ID. Run the VIN on SafeOrStolen. Ask your county clerk about liens; SafeOrStolen does not search state title records." }
 ]
 }
};
