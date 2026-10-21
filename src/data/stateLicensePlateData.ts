// 50-STATE LICENSE PLATE DATA
// Oct 2026 audit: rewritten by hand. Removed invented theft counts, recovery rates and
// national rankings, "theft capital" style claims, "AI analysis" and "3 seconds" claims,
// and every claim that SafeOrStolen searches DMV registration records or shows the
// registered owner. dmvLink is left empty on purpose (no outbound links); the field is
// kept so the type stays the same. Front-plate flags corrected for AK, NV, NH, SD, TX, OH.

export interface StateLicensePlateData {
 state: string;
 stateCode: string;
 slug: string;
 dmvName: string;
 dmvLink: string;
 topCities: string[];
 uniqueConcerns: string[];
 requiresFrontPlate: boolean;
}

export const STATE_LICENSE_PLATE_DATA: Record<string, StateLicensePlateData> = {
 alabama: {
 state: "Alabama",
 stateCode: "AL",
 slug: "alabama-license-plate-lookup",
 dmvName: "Alabama Department of Revenue Motor Vehicle Division",
 dmvLink: "",
 topCities: ["Birmingham", "Mobile", "Montgomery", "Huntsville"],
 uniqueConcerns: ["Cars crossing in from Georgia and Florida on I-65 and I-10", "Private rural sales with missing titles"],
 requiresFrontPlate: false
 },
 alaska: {
 state: "Alaska",
 stateCode: "AK",
 slug: "alaska-license-plate-lookup",
 dmvName: "Alaska DMV",
 dmvLink: "",
 topCities: ["Anchorage", "Fairbanks", "Juneau"],
 uniqueConcerns: ["Long distances between buyer and seller in remote areas", "Trucks left running to warm up in winter"],
 requiresFrontPlate: true
 },
 arizona: {
 state: "Arizona",
 stateCode: "AZ",
 slug: "arizona-license-plate-lookup",
 dmvName: "Arizona MVD",
 dmvLink: "",
 topCities: ["Phoenix", "Tucson", "Mesa", "Chandler"],
 uniqueConcerns: ["Busy Marketplace and OfferUp private-sale market in Phoenix", "Many cars titled in California first", "Arizona plates are also checked against Arizona law-enforcement stolen-vehicle records"],
 requiresFrontPlate: false
 },
 arkansas: {
 state: "Arkansas",
 stateCode: "AR",
 slug: "arkansas-license-plate-lookup",
 dmvName: "Arkansas DFA",
 dmvLink: "",
 topCities: ["Little Rock", "Fort Smith", "Fayetteville"],
 uniqueConcerns: ["Cars crossing state lines on I-40 and I-30", "Cash pickup sales with missing titles"],
 requiresFrontPlate: false
 },
 california: {
 state: "California",
 stateCode: "CA",
 slug: "california-license-plate-lookup",
 dmvName: "California DMV",
 dmvLink: "",
 topCities: ["Los Angeles", "San Francisco", "San Diego", "Oakland", "Sacramento"],
 uniqueConcerns: ["Very large private-sale market", "VIN cloning, where a stolen car wears another car's VIN", "Out-of-state cars need a VIN verification before registration"],
 requiresFrontPlate: true
 },
 colorado: {
 state: "Colorado",
 stateCode: "CO",
 slug: "colorado-license-plate-lookup",
 dmvName: "Colorado DMV",
 dmvLink: "",
 topCities: ["Denver", "Colorado Springs", "Aurora", "Boulder"],
 uniqueConcerns: ["Catalytic converter theft", "Trucks and SUVs that sell fast", "Denver-area private sales"],
 requiresFrontPlate: false
 },
 connecticut: {
 state: "Connecticut",
 stateCode: "CT",
 slug: "connecticut-license-plate-lookup",
 dmvName: "Connecticut DMV",
 dmvLink: "",
 topCities: ["Hartford", "New Haven", "Bridgeport", "Stamford"],
 uniqueConcerns: ["Cars moving between New York and Boston on I-95", "Luxury SUVs stolen with key-fob relay"],
 requiresFrontPlate: true
 },
 delaware: {
 state: "Delaware",
 stateCode: "DE",
 slug: "delaware-license-plate-lookup",
 dmvName: "Delaware DMV",
 dmvLink: "",
 topCities: ["Wilmington", "Dover", "Newark"],
 uniqueConcerns: ["Out-of-state buyers drawn by no sales tax", "Cars from Philadelphia and Baltimore"],
 requiresFrontPlate: false
 },
 florida: {
 state: "Florida",
 stateCode: "FL",
 slug: "florida-license-plate-lookup",
 dmvName: "FLHSMV (Florida Highway Safety and Motor Vehicles)",
 dmvLink: "",
 topCities: ["Miami", "Tampa", "Jacksonville", "Orlando"],
 uniqueConcerns: ["Flood-damaged cars resold after hurricanes", "Curbstoners: unlicensed dealers posing as private sellers"],
 requiresFrontPlate: false
 },
 georgia: {
 state: "Georgia",
 stateCode: "GA",
 slug: "georgia-license-plate-lookup",
 dmvName: "Georgia DDS",
 dmvLink: "",
 topCities: ["Atlanta", "Savannah", "Augusta", "Columbus"],
 uniqueConcerns: ["Huge metro Atlanta private-sale market", "Cars arriving from Florida on I-75"],
 requiresFrontPlate: false
 },
 hawaii: {
 state: "Hawaii",
 stateCode: "HI",
 slug: "hawaii-license-plate-lookup",
 dmvName: "Hawaii DMV",
 dmvLink: "",
 topCities: ["Honolulu", "Pearl City", "Hilo"],
 uniqueConcerns: ["Cars shipped from the mainland", "Frequent military moves and quick sales"],
 requiresFrontPlate: true
 },
 idaho: {
 state: "Idaho",
 stateCode: "ID",
 slug: "idaho-license-plate-lookup",
 dmvName: "Idaho Transportation Department",
 dmvLink: "",
 topCities: ["Boise", "Nampa", "Meridian"],
 uniqueConcerns: ["Cars arriving from Washington, Oregon and Utah", "Fast-growing Treasure Valley market"],
 requiresFrontPlate: true
 },
 illinois: {
 state: "Illinois",
 stateCode: "IL",
 slug: "illinois-license-plate-lookup",
 dmvName: "Illinois Secretary of State",
 dmvLink: "",
 topCities: ["Chicago", "Aurora", "Rockford", "Naperville"],
 uniqueConcerns: ["Fast private-sale market in Chicago", "Cars crossing the Indiana and Wisconsin lines"],
 requiresFrontPlate: true
 },
 indiana: {
 state: "Indiana",
 stateCode: "IN",
 slug: "indiana-license-plate-lookup",
 dmvName: "Indiana BMV",
 dmvLink: "",
 topCities: ["Indianapolis", "Fort Wayne", "Evansville"],
 uniqueConcerns: ["Cars from the Chicago area in northwest Indiana", "Out-of-state titles in Indianapolis sales"],
 requiresFrontPlate: false
 },
 iowa: {
 state: "Iowa",
 stateCode: "IA",
 slug: "iowa-license-plate-lookup",
 dmvName: "Iowa DOT",
 dmvLink: "",
 topCities: ["Des Moines", "Cedar Rapids", "Davenport"],
 uniqueConcerns: ["Cash pickup and trailer sales", "Farm equipment with serial numbers instead of VINs"],
 requiresFrontPlate: true
 },
 kansas: {
 state: "Kansas",
 stateCode: "KS",
 slug: "kansas-license-plate-lookup",
 dmvName: "Kansas DOR",
 dmvLink: "",
 topCities: ["Wichita", "Kansas City", "Topeka"],
 uniqueConcerns: ["Kansas City sales that cross the Missouri line", "Cash pickup sales with missing titles"],
 requiresFrontPlate: false
 },
 kentucky: {
 state: "Kentucky",
 stateCode: "KY",
 slug: "kentucky-license-plate-lookup",
 dmvName: "Kentucky Transportation Cabinet",
 dmvLink: "",
 topCities: ["Louisville", "Lexington", "Bowling Green"],
 uniqueConcerns: ["Cars crossing from Indiana and Ohio", "Louisville-area private sales"],
 requiresFrontPlate: false
 },
 louisiana: {
 state: "Louisiana",
 stateCode: "LA",
 slug: "louisiana-license-plate-lookup",
 dmvName: "Louisiana OMV",
 dmvLink: "",
 topCities: ["New Orleans", "Baton Rouge", "Shreveport"],
 uniqueConcerns: ["Flood-damaged cars resold after hurricanes", "New Orleans-area private sales"],
 requiresFrontPlate: false
 },
 maine: {
 state: "Maine",
 stateCode: "ME",
 slug: "maine-license-plate-lookup",
 dmvName: "Maine BMV",
 dmvLink: "",
 topCities: ["Portland", "Lewiston", "Bangor"],
 uniqueConcerns: ["Rust from road salt", "Older cars that may sell without a title"],
 requiresFrontPlate: true
 },
 maryland: {
 state: "Maryland",
 stateCode: "MD",
 slug: "maryland-license-plate-lookup",
 dmvName: "Maryland MVA",
 dmvLink: "",
 topCities: ["Baltimore", "Silver Spring", "Columbia"],
 uniqueConcerns: ["Cars moving between Baltimore, DC and Virginia", "Kia and Hyundai models without immobilizers"],
 requiresFrontPlate: true
 },
 massachusetts: {
 state: "Massachusetts",
 stateCode: "MA",
 slug: "massachusetts-license-plate-lookup",
 dmvName: "Massachusetts RMV",
 dmvLink: "",
 topCities: ["Boston", "Worcester", "Springfield"],
 uniqueConcerns: ["Cars bought in New Hampshire for no sales tax", "Luxury SUVs stolen with key-fob relay"],
 requiresFrontPlate: true
 },
 michigan: {
 state: "Michigan",
 stateCode: "MI",
 slug: "michigan-license-plate-lookup",
 dmvName: "Michigan SOS",
 dmvLink: "",
 topCities: ["Detroit", "Grand Rapids", "Warren", "Flint"],
 uniqueConcerns: ["Detroit-area private sales", "Catalytic converter theft", "Rust from road salt"],
 requiresFrontPlate: false
 },
 minnesota: {
 state: "Minnesota",
 stateCode: "MN",
 slug: "minnesota-license-plate-lookup",
 dmvName: "Minnesota DVS",
 dmvLink: "",
 topCities: ["Minneapolis", "St. Paul", "Rochester"],
 uniqueConcerns: ["Kia and Hyundai models without immobilizers", "Cars left running in winter"],
 requiresFrontPlate: true
 },
 mississippi: {
 state: "Mississippi",
 stateCode: "MS",
 slug: "mississippi-license-plate-lookup",
 dmvName: "Mississippi DOR",
 dmvLink: "",
 topCities: ["Jackson", "Gulfport", "Hattiesburg"],
 uniqueConcerns: ["Flood-damaged cars from the Gulf Coast", "Cars crossing from Louisiana, Alabama and Tennessee"],
 requiresFrontPlate: false
 },
 missouri: {
 state: "Missouri",
 stateCode: "MO",
 slug: "missouri-license-plate-lookup",
 dmvName: "Missouri DOR",
 dmvLink: "",
 topCities: ["Kansas City", "St. Louis", "Springfield"],
 uniqueConcerns: ["Kansas City and St. Louis sales that cross state lines", "Kia and Hyundai models without immobilizers"],
 requiresFrontPlate: true
 },
 montana: {
 state: "Montana",
 stateCode: "MT",
 slug: "montana-license-plate-lookup",
 dmvName: "Montana MVD",
 dmvLink: "",
 topCities: ["Billings", "Missoula", "Great Falls"],
 uniqueConcerns: ["Vehicles registered to Montana LLCs", "RVs and trailers sold privately"],
 requiresFrontPlate: true
 },
 nebraska: {
 state: "Nebraska",
 stateCode: "NE",
 slug: "nebraska-license-plate-lookup",
 dmvName: "Nebraska DMV",
 dmvLink: "",
 topCities: ["Omaha", "Lincoln", "Bellevue"],
 uniqueConcerns: ["Omaha sales with Iowa titles", "Hail-repaired cars"],
 requiresFrontPlate: true
 },
 nevada: {
 state: "Nevada",
 stateCode: "NV",
 slug: "nevada-license-plate-lookup",
 dmvName: "Nevada DMV",
 dmvLink: "",
 topCities: ["Las Vegas", "Henderson", "Reno"],
 uniqueConcerns: ["Many cars titled in California first", "Sellers who just moved and have no title yet"],
 requiresFrontPlate: true
 },
 newhampshire: {
 state: "New Hampshire",
 stateCode: "NH",
 slug: "new-hampshire-license-plate-lookup",
 dmvName: "New Hampshire DMV",
 dmvLink: "",
 topCities: ["Manchester", "Nashua", "Concord"],
 uniqueConcerns: ["Buyers from Massachusetts", "Older cars that may sell without a title"],
 requiresFrontPlate: true
 },
 newjersey: {
 state: "New Jersey",
 stateCode: "NJ",
 slug: "new-jersey-license-plate-lookup",
 dmvName: "New Jersey MVC",
 dmvLink: "",
 topCities: ["Newark", "Jersey City", "Paterson"],
 uniqueConcerns: ["Cars moving between New York, New Jersey and Philadelphia", "Luxury SUVs stolen with key-fob relay"],
 requiresFrontPlate: true
 },
 newmexico: {
 state: "New Mexico",
 stateCode: "NM",
 slug: "new-mexico-license-plate-lookup",
 dmvName: "New Mexico MVD",
 dmvLink: "",
 topCities: ["Albuquerque", "Las Cruces", "Santa Fe"],
 uniqueConcerns: ["Cars arriving on I-40 and I-25", "Kia and Hyundai models without immobilizers"],
 requiresFrontPlate: false
 },
 newyork: {
 state: "New York",
 stateCode: "NY",
 slug: "new-york-license-plate-lookup",
 dmvName: "New York DMV",
 dmvLink: "",
 topCities: ["New York City", "Buffalo", "Rochester", "Yonkers"],
 uniqueConcerns: ["Cars from New Jersey, Connecticut and Pennsylvania", "Luxury SUVs stolen with key-fob relay"],
 requiresFrontPlate: true
 },
 northcarolina: {
 state: "North Carolina",
 stateCode: "NC",
 slug: "north-carolina-license-plate-lookup",
 dmvName: "NCDMV",
 dmvLink: "",
 topCities: ["Charlotte", "Raleigh", "Durham", "Greensboro"],
 uniqueConcerns: ["Many cars titled in other states", "Seller signature on the title must be notarized"],
 requiresFrontPlate: false
 },
 northdakota: {
 state: "North Dakota",
 stateCode: "ND",
 slug: "north-dakota-license-plate-lookup",
 dmvName: "North Dakota DOT",
 dmvLink: "",
 topCities: ["Fargo", "Bismarck", "Grand Forks"],
 uniqueConcerns: ["High-mileage oil-field trucks", "Cars left running in winter"],
 requiresFrontPlate: true
 },
 ohio: {
 state: "Ohio",
 stateCode: "OH",
 slug: "ohio-license-plate-lookup",
 dmvName: "Ohio BMV",
 dmvLink: "",
 topCities: ["Columbus", "Cleveland", "Cincinnati", "Toledo"],
 uniqueConcerns: ["Seller signature on the title must be notarized", "Kia and Hyundai models without immobilizers"],
 requiresFrontPlate: false
 },
 oklahoma: {
 state: "Oklahoma",
 stateCode: "OK",
 slug: "oklahoma-license-plate-lookup",
 dmvName: "Service Oklahoma",
 dmvLink: "",
 topCities: ["Oklahoma City", "Tulsa", "Norman"],
 uniqueConcerns: ["Hail and storm-damaged cars", "Pickups sold across the Texas line"],
 requiresFrontPlate: false
 },
 oregon: {
 state: "Oregon",
 stateCode: "OR",
 slug: "oregon-license-plate-lookup",
 dmvName: "Oregon DMV",
 dmvLink: "",
 topCities: ["Portland", "Eugene", "Salem"],
 uniqueConcerns: ["Kia and Hyundai models without immobilizers", "Catalytic converter theft from hybrids"],
 requiresFrontPlate: true
 },
 pennsylvania: {
 state: "Pennsylvania",
 stateCode: "PA",
 slug: "pennsylvania-license-plate-lookup",
 dmvName: "PennDOT",
 dmvLink: "",
 topCities: ["Philadelphia", "Pittsburgh", "Allentown"],
 uniqueConcerns: ["Cars from New Jersey and Delaware", "Title transfers done at a notary or tag service"],
 requiresFrontPlate: true
 },
 rhodeisland: {
 state: "Rhode Island",
 stateCode: "RI",
 slug: "rhode-island-license-plate-lookup",
 dmvName: "Rhode Island DMV",
 dmvLink: "",
 topCities: ["Providence", "Warwick", "Cranston"],
 uniqueConcerns: ["Cars registered in Massachusetts or Connecticut", "Older cars that may sell without a title"],
 requiresFrontPlate: true
 },
 southcarolina: {
 state: "South Carolina",
 stateCode: "SC",
 slug: "south-carolina-license-plate-lookup",
 dmvName: "SCDMV",
 dmvLink: "",
 topCities: ["Charleston", "Columbia", "Greenville"],
 uniqueConcerns: ["Flood-damaged cars after coastal storms", "Cars arriving on I-95 from Georgia and Florida"],
 requiresFrontPlate: false
 },
 southdakota: {
 state: "South Dakota",
 stateCode: "SD",
 slug: "south-dakota-license-plate-lookup",
 dmvName: "South Dakota Motor Vehicle Division",
 dmvLink: "",
 topCities: ["Sioux Falls", "Rapid City", "Aberdeen"],
 uniqueConcerns: ["No routine safety inspection", "Vehicles registered by people living elsewhere"],
 requiresFrontPlate: true
 },
 tennessee: {
 state: "Tennessee",
 stateCode: "TN",
 slug: "tennessee-license-plate-lookup",
 dmvName: "Tennessee DOR",
 dmvLink: "",
 topCities: ["Nashville", "Memphis", "Knoxville"],
 uniqueConcerns: ["Kia and Hyundai models without immobilizers in Memphis", "Many Nashville cars titled in other states"],
 requiresFrontPlate: false
 },
 texas: {
 state: "Texas",
 stateCode: "TX",
 slug: "texas-license-plate-lookup",
 dmvName: "Texas DMV",
 dmvLink: "",
 topCities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth"],
 uniqueConcerns: ["Cash pickup sales", "Flood-damaged cars after Gulf storms", "VIN cloning, where a stolen car wears another car's VIN"],
 requiresFrontPlate: true
 },
 utah: {
 state: "Utah",
 stateCode: "UT",
 slug: "utah-license-plate-lookup",
 dmvName: "Utah DMV",
 dmvLink: "",
 topCities: ["Salt Lake City", "West Valley City", "Provo"],
 uniqueConcerns: ["Many cars titled in California or Nevada first", "Kia and Hyundai models without immobilizers"],
 requiresFrontPlate: true
 },
 vermont: {
 state: "Vermont",
 stateCode: "VT",
 slug: "vermont-license-plate-lookup",
 dmvName: "Vermont DMV",
 dmvLink: "",
 topCities: ["Burlington", "Rutland", "South Burlington"],
 uniqueConcerns: ["Older cars sell without a title", "Out-of-state owners registering vehicles in Vermont"],
 requiresFrontPlate: true
 },
 virginia: {
 state: "Virginia",
 stateCode: "VA",
 slug: "virginia-license-plate-lookup",
 dmvName: "Virginia DMV",
 dmvLink: "",
 topCities: ["Virginia Beach", "Norfolk", "Richmond", "Arlington"],
 uniqueConcerns: ["Quick sales by service members with orders", "Northern Virginia cars titled in Maryland or DC"],
 requiresFrontPlate: true
 },
 washington: {
 state: "Washington",
 stateCode: "WA",
 slug: "washington-license-plate-lookup",
 dmvName: "Washington DOL",
 dmvLink: "",
 topCities: ["Seattle", "Spokane", "Tacoma", "Vancouver"],
 uniqueConcerns: ["Stolen cars relisted quickly on Marketplace", "Catalytic converter theft", "Buyers shopping in Oregon for no sales tax"],
 requiresFrontPlate: true
 },
 westvirginia: {
 state: "West Virginia",
 stateCode: "WV",
 slug: "west-virginia-license-plate-lookup",
 dmvName: "West Virginia DMV",
 dmvLink: "",
 topCities: ["Charleston", "Huntington", "Morgantown"],
 uniqueConcerns: ["Cars titled in Ohio, Kentucky or Pennsylvania", "Rust and rough-road wear"],
 requiresFrontPlate: false
 },
 wisconsin: {
 state: "Wisconsin",
 stateCode: "WI",
 slug: "wisconsin-license-plate-lookup",
 dmvName: "Wisconsin DMV",
 dmvLink: "",
 topCities: ["Milwaukee", "Madison", "Green Bay"],
 uniqueConcerns: ["Kia and Hyundai models without immobilizers", "Cars from the Chicago area"],
 requiresFrontPlate: true
 },
 wyoming: {
 state: "Wyoming",
 stateCode: "WY",
 slug: "wyoming-license-plate-lookup",
 dmvName: "Wyoming DOT",
 dmvLink: "",
 topCities: ["Cheyenne", "Casper", "Laramie"],
 uniqueConcerns: ["Work trucks from other states", "Long distances between buyer and seller"],
 requiresFrontPlate: true
 }
};

// Helper to generate full page content from state data
export const generateLicensePlatePageContent = (stateKey: string) => {
 const data = STATE_LICENSE_PLATE_DATA[stateKey];
 if (!data) return null;

 const { state, stateCode, dmvName, topCities, uniqueConcerns, requiresFrontPlate } = data;
 const isArizona = stateCode === 'AZ';
 const sources = isArizona
 ? 'SafeOrStolen theft reports and Arizona law-enforcement stolen-vehicle records (updated twice a day)'
 : 'SafeOrStolen theft reports';

 return {
 title: `${state} License Plate Lookup - Check a ${stateCode} Plate for Theft`,
 metaDescription: `${state} license plate lookup: check a ${stateCode} plate against ${isArizona ? 'Arizona law-enforcement records and ' : ''}SafeOrStolen theft reports in a few seconds. 1 free check. Never shows owner names.`,
 h1: `${state} License Plate Lookup - Check ${stateCode} Plates`,
 itemType: "Vehicle",
 keywords: [
 `${state.toLowerCase()} license plate lookup`,
 `${stateCode} license plate search`,
 `check ${state.toLowerCase()} license plate stolen`,
 `${state.toLowerCase()} stolen vehicle plate lookup`,
 ...topCities.map(city => `${city.toLowerCase()} license plate check`)
 ],
 content: {
 intro: `Enter a ${state} plate and SafeOrStolen checks it against ${sources} in a few seconds. You get one of three results: reported stolen, possible match, or no report found in the records searched, with every source listed. It never shows owner names. After the plate, run the VIN: plates can be swapped, the VIN on the dash can't easily be.`,

 whatIs: `A ${state} license plate lookup on SafeOrStolen tells you whether a ${stateCode} plate appears in ${sources}. It's a quick first screen before you meet a seller in ${topCities.slice(0, 3).join(', ')} or anywhere else in ${state}. It is not a registration lookup: ${dmvName} records, owner names and title status are not part of the check.`,

 howItWorks: `Type the plate exactly as shown, choose ${state}, and run the check. SafeOrStolen searches ${sources} and returns reported stolen, possible match, or no report found, with each source named. The check is saved to your account with the date. For registration or title questions, contact ${dmvName}.`,

 whyCheck: `A plate check before you drive out to see a car can save you a wasted trip. After a "no report found" result, also run the VIN, match it on the dash, door jamb and title, and check the seller's ID against the title.${uniqueConcerns.length > 0 ? ` Things to watch for in ${state}: ${uniqueConcerns.join('; ')}.` : ''}`,

 benefits: [
 `Screen a ${stateCode} plate before you meet the seller`,
 `Searches ${sources}`,
 `Clear result with every source listed`,
 `Never shows owner names or personal information`,
 `Each check saved to your account with the date`,
 `1 free check, no account or credit card needed`
 ],

 process: [
 `Write down the ${state} plate exactly, letters and numbers`,
 `Enter it on SafeOrStolen and choose ${state}`,
 `Read the result and the list of sources searched`,
 `Ask the seller for the VIN and run it too`,
 `At the meetup, match the VIN on the dash, door jamb and title, and check the seller's ID against the title`
 ],

 faqs: [
 {
 question: `Can I check if a car is stolen in ${state} by license plate?`,
 answer: `Yes. Enter the ${stateCode} plate on SafeOrStolen (safeorstolen.com) and it searches ${sources} in a few seconds. Plates can be swapped between cars, so treat it as a first screen and also run the VIN and match it on the car and title before you pay.`
 },
 {
 question: `Where is the plate on a ${state} vehicle?`,
 answer: requiresFrontPlate
 ? `${state} issues plates for both the front and rear of most passenger vehicles. Check that the front and rear plates match each other and the registration. A missing or mismatched plate is worth asking about.`
 : `${state} requires only a rear plate on most passenger vehicles. Check that the plate matches the registration the seller shows you. A temporary tag with no paperwork behind it is worth asking about.`
 },
 {
 question: `Does a ${state} plate lookup show the owner's name?`,
 answer: `No. SafeOrStolen never shows owner names or addresses. Federal privacy law limits who can get that information. To confirm ownership, ask to see the seller's ID and the title and check that the names match.`
 },
 {
 question: `Is a ${state} license plate lookup free?`,
 answer: `Your first check is free with a SafeOrStolen account, no credit card needed. After that it's $0.99 for 2 checks or $10 a month for unlimited checks, and you can cancel anytime.`
 },
 {
 question: `What does "no report found" mean?`,
 answer: `It means the ${stateCode} plate wasn't found in ${sources}. Before you pay, run the VIN, match it on the car and title, and check the seller's ID.`
 },
 {
 question: `What should I watch for when buying a used car in ${state}?`,
 answer: uniqueConcerns.length > 0
 ? `In ${state}, watch for: ${uniqueConcerns.join('; ')}. On any car, match the VIN on the dash, door jamb and title, check the seller's ID against the title, and run the plate and VIN on SafeOrStolen.`
 : `Match the VIN on the dash, door jamb and title, check the seller's ID against the title, and run the plate and VIN on SafeOrStolen before you pay.`
 }
 ]
 }
 };
};

export const ALL_50_STATE_CODES = Object.values(STATE_LICENSE_PLATE_DATA).map(s => s.stateCode);
