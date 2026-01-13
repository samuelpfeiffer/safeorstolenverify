/**
 * Complete US State Data for License Plate Lookup Pages
 * All 50 states with relevant metadata for SEO and content
 */

export interface StateData {
  name: string;
  abbrev: string;
  capital: string;
  majorCities: string[];
  hasTheftDatabase: boolean;
  theftDatabaseName: string | null;
  theftDatabaseUrl: string | null;
  slug: string; // URL slug like "alabama-license-plate-lookup"
  neighboringStates: string[]; // Slugs of neighboring states
  theftNote: string; // State-specific theft context
}

export const ALL_STATES: StateData[] = [
  {
    name: 'Alabama',
    abbrev: 'AL',
    capital: 'Montgomery',
    majorCities: ['Birmingham', 'Huntsville', 'Mobile', 'Montgomery'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'alabama-license-plate-lookup',
    neighboringStates: ['florida', 'georgia', 'tennessee', 'mississippi'],
    theftNote: 'Alabama sees significant vehicle theft along I-65 and I-20 corridors connecting to larger metropolitan areas.'
  },
  {
    name: 'Alaska',
    abbrev: 'AK',
    capital: 'Juneau',
    majorCities: ['Anchorage', 'Fairbanks', 'Juneau'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'alaska-license-plate-lookup',
    neighboringStates: [],
    theftNote: 'Alaska has lower vehicle theft rates but verification is still important for used vehicle purchases in Anchorage and Fairbanks.'
  },
  {
    name: 'Arizona',
    abbrev: 'AZ',
    capital: 'Phoenix',
    majorCities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale'],
    hasTheftDatabase: true,
    theftDatabaseName: 'TheftAZ',
    theftDatabaseUrl: 'https://theftaz.azag.gov',
    slug: 'arizona-license-plate-lookup',
    neighboringStates: ['california', 'nevada', 'utah', 'colorado', 'new-mexico'],
    theftNote: 'Arizona has one of the highest vehicle theft rates due to proximity to California and the Mexico border. TheftAZ tracks stolen property statewide.'
  },
  {
    name: 'Arkansas',
    abbrev: 'AR',
    capital: 'Little Rock',
    majorCities: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'arkansas-license-plate-lookup',
    neighboringStates: ['missouri', 'tennessee', 'mississippi', 'louisiana', 'texas', 'oklahoma'],
    theftNote: 'Arkansas serves as a corridor state with I-40 connecting Memphis to Oklahoma City, making verification important.'
  },
  {
    name: 'California',
    abbrev: 'CA',
    capital: 'Sacramento',
    majorCities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Fresno'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'california-license-plate-lookup',
    neighboringStates: ['oregon', 'nevada', 'arizona'],
    theftNote: 'California has the highest vehicle theft count in the US. Los Angeles, San Francisco Bay Area, and Central Valley are hotspots.'
  },
  {
    name: 'Colorado',
    abbrev: 'CO',
    capital: 'Denver',
    majorCities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'colorado-license-plate-lookup',
    neighboringStates: ['wyoming', 'nebraska', 'kansas', 'oklahoma', 'new-mexico', 'utah'],
    theftNote: 'Colorado has seen rising vehicle theft rates, especially in the Denver metro area. Always verify before purchasing.'
  },
  {
    name: 'Connecticut',
    abbrev: 'CT',
    capital: 'Hartford',
    majorCities: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'connecticut-license-plate-lookup',
    neighboringStates: ['new-york', 'massachusetts', 'rhode-island'],
    theftNote: 'Connecticut experiences vehicle theft in urban areas like Hartford and Bridgeport. Proximity to New York increases risk.'
  },
  {
    name: 'Delaware',
    abbrev: 'DE',
    capital: 'Dover',
    majorCities: ['Wilmington', 'Dover', 'Newark'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'delaware-license-plate-lookup',
    neighboringStates: ['maryland', 'new-jersey', 'pennsylvania'],
    theftNote: 'Delaware\'s small size and proximity to Philadelphia and Baltimore creates a market for stolen vehicles.'
  },
  {
    name: 'Florida',
    abbrev: 'FL',
    capital: 'Tallahassee',
    majorCities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    hasTheftDatabase: true,
    theftDatabaseName: 'FDLE',
    theftDatabaseUrl: null,
    slug: 'florida-license-plate-lookup',
    neighboringStates: ['georgia', 'alabama'],
    theftNote: 'Florida has high vehicle theft rates, especially in Miami-Dade, Broward, and Hillsborough counties. FDLE maintains state records.'
  },
  {
    name: 'Georgia',
    abbrev: 'GA',
    capital: 'Atlanta',
    majorCities: ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'georgia-license-plate-lookup',
    neighboringStates: ['florida', 'alabama', 'tennessee', 'north-carolina', 'south-carolina'],
    theftNote: 'Atlanta metro area has significant vehicle theft. Georgia serves as a major hub for I-75 and I-95 traffic.'
  },
  {
    name: 'Hawaii',
    abbrev: 'HI',
    capital: 'Honolulu',
    majorCities: ['Honolulu', 'Pearl City', 'Hilo', 'Kailua'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'hawaii-license-plate-lookup',
    neighboringStates: [],
    theftNote: 'Hawaii\'s isolation means stolen vehicles stay on-island. Verification is important for Oahu and Big Island purchases.'
  },
  {
    name: 'Idaho',
    abbrev: 'ID',
    capital: 'Boise',
    majorCities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'idaho-license-plate-lookup',
    neighboringStates: ['washington', 'oregon', 'nevada', 'utah', 'wyoming', 'montana'],
    theftNote: 'Idaho has growing population and vehicle market. Boise area sees most activity.'
  },
  {
    name: 'Illinois',
    abbrev: 'IL',
    capital: 'Springfield',
    majorCities: ['Chicago', 'Aurora', 'Naperville', 'Rockford', 'Springfield'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'illinois-license-plate-lookup',
    neighboringStates: ['wisconsin', 'iowa', 'missouri', 'kentucky', 'indiana'],
    theftNote: 'Chicago has one of the highest vehicle theft rates in the Midwest. Cook County and surrounding areas are hotspots.'
  },
  {
    name: 'Indiana',
    abbrev: 'IN',
    capital: 'Indianapolis',
    majorCities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'indiana-license-plate-lookup',
    neighboringStates: ['michigan', 'ohio', 'kentucky', 'illinois'],
    theftNote: 'Indianapolis and Gary see significant vehicle theft. I-70 and I-65 corridors are common transport routes.'
  },
  {
    name: 'Iowa',
    abbrev: 'IA',
    capital: 'Des Moines',
    majorCities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'iowa-license-plate-lookup',
    neighboringStates: ['minnesota', 'wisconsin', 'illinois', 'missouri', 'nebraska', 'south-dakota'],
    theftNote: 'Iowa has lower theft rates but Des Moines and border cities see some activity.'
  },
  {
    name: 'Kansas',
    abbrev: 'KS',
    capital: 'Topeka',
    majorCities: ['Wichita', 'Kansas City', 'Topeka', 'Overland Park'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'kansas-license-plate-lookup',
    neighboringStates: ['nebraska', 'missouri', 'oklahoma', 'colorado'],
    theftNote: 'Kansas City metro area spans Kansas and Missouri, with vehicle theft on both sides of the state line.'
  },
  {
    name: 'Kentucky',
    abbrev: 'KY',
    capital: 'Frankfort',
    majorCities: ['Louisville', 'Lexington', 'Bowling Green', 'Frankfort'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'kentucky-license-plate-lookup',
    neighboringStates: ['ohio', 'west-virginia', 'virginia', 'tennessee', 'indiana', 'illinois', 'missouri'],
    theftNote: 'Louisville and Lexington metro areas see most vehicle theft. I-75 corridor is a key transport route.'
  },
  {
    name: 'Louisiana',
    abbrev: 'LA',
    capital: 'Baton Rouge',
    majorCities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'louisiana-license-plate-lookup',
    neighboringStates: ['texas', 'arkansas', 'mississippi'],
    theftNote: 'New Orleans and Baton Rouge have elevated vehicle theft rates. Port access creates export risks for stolen vehicles.'
  },
  {
    name: 'Maine',
    abbrev: 'ME',
    capital: 'Augusta',
    majorCities: ['Portland', 'Lewiston', 'Bangor', 'Augusta'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'maine-license-plate-lookup',
    neighboringStates: ['new-hampshire'],
    theftNote: 'Maine has low vehicle theft rates but verification is still recommended for peace of mind.'
  },
  {
    name: 'Maryland',
    abbrev: 'MD',
    capital: 'Annapolis',
    majorCities: ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'maryland-license-plate-lookup',
    neighboringStates: ['pennsylvania', 'delaware', 'virginia', 'west-virginia'],
    theftNote: 'Baltimore has high vehicle theft rates. Proximity to DC creates a large used vehicle market.'
  },
  {
    name: 'Massachusetts',
    abbrev: 'MA',
    capital: 'Boston',
    majorCities: ['Boston', 'Worcester', 'Springfield', 'Cambridge'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'massachusetts-license-plate-lookup',
    neighboringStates: ['new-hampshire', 'rhode-island', 'connecticut', 'new-york', 'vermont'],
    theftNote: 'Boston and Springfield see vehicle theft. Large student population creates active used vehicle market.'
  },
  {
    name: 'Michigan',
    abbrev: 'MI',
    capital: 'Lansing',
    majorCities: ['Detroit', 'Grand Rapids', 'Warren', 'Ann Arbor', 'Lansing'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'michigan-license-plate-lookup',
    neighboringStates: ['ohio', 'indiana', 'wisconsin'],
    theftNote: 'Detroit has one of the highest vehicle theft rates in the country. Wayne County is a major hotspot.'
  },
  {
    name: 'Minnesota',
    abbrev: 'MN',
    capital: 'Saint Paul',
    majorCities: ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'minnesota-license-plate-lookup',
    neighboringStates: ['wisconsin', 'iowa', 'south-dakota', 'north-dakota'],
    theftNote: 'Twin Cities metro area sees most vehicle theft in Minnesota. Verification is important for used purchases.'
  },
  {
    name: 'Mississippi',
    abbrev: 'MS',
    capital: 'Jackson',
    majorCities: ['Jackson', 'Gulfport', 'Southaven', 'Biloxi'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'mississippi-license-plate-lookup',
    neighboringStates: ['tennessee', 'alabama', 'louisiana', 'arkansas'],
    theftNote: 'Jackson and Gulf Coast areas see vehicle theft. I-55 corridor connects to Memphis and New Orleans.'
  },
  {
    name: 'Missouri',
    abbrev: 'MO',
    capital: 'Jefferson City',
    majorCities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'missouri-license-plate-lookup',
    neighboringStates: ['iowa', 'illinois', 'kentucky', 'tennessee', 'arkansas', 'oklahoma', 'kansas', 'nebraska'],
    theftNote: 'St. Louis and Kansas City have elevated vehicle theft rates. Central location makes Missouri a transport hub.'
  },
  {
    name: 'Montana',
    abbrev: 'MT',
    capital: 'Helena',
    majorCities: ['Billings', 'Missoula', 'Great Falls', 'Helena'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'montana-license-plate-lookup',
    neighboringStates: ['north-dakota', 'south-dakota', 'wyoming', 'idaho'],
    theftNote: 'Montana has lower vehicle theft but Billings and Missoula see some activity.'
  },
  {
    name: 'Nebraska',
    abbrev: 'NE',
    capital: 'Lincoln',
    majorCities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'nebraska-license-plate-lookup',
    neighboringStates: ['south-dakota', 'iowa', 'missouri', 'kansas', 'colorado', 'wyoming'],
    theftNote: 'Omaha metro area sees most vehicle theft in Nebraska. I-80 corridor is a major transport route.'
  },
  {
    name: 'Nevada',
    abbrev: 'NV',
    capital: 'Carson City',
    majorCities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'nevada-license-plate-lookup',
    neighboringStates: ['california', 'oregon', 'idaho', 'utah', 'arizona'],
    theftNote: 'Las Vegas has high vehicle theft rates. Tourist traffic and proximity to California increase risk.'
  },
  {
    name: 'New Hampshire',
    abbrev: 'NH',
    capital: 'Concord',
    majorCities: ['Manchester', 'Nashua', 'Concord', 'Derry'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'new-hampshire-license-plate-lookup',
    neighboringStates: ['maine', 'massachusetts', 'vermont'],
    theftNote: 'New Hampshire has low vehicle theft but borders Massachusetts, so verification is recommended.'
  },
  {
    name: 'New Jersey',
    abbrev: 'NJ',
    capital: 'Trenton',
    majorCities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Trenton'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'new-jersey-license-plate-lookup',
    neighboringStates: ['new-york', 'pennsylvania', 'delaware'],
    theftNote: 'New Jersey has high vehicle theft, especially in Newark and Jersey City. Port access creates export risks.'
  },
  {
    name: 'New Mexico',
    abbrev: 'NM',
    capital: 'Santa Fe',
    majorCities: ['Albuquerque', 'Las Cruces', 'Santa Fe', 'Rio Rancho'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'new-mexico-license-plate-lookup',
    neighboringStates: ['colorado', 'oklahoma', 'texas', 'arizona', 'utah'],
    theftNote: 'Albuquerque has high vehicle theft rates. Border proximity to Mexico increases risk for stolen vehicle trafficking.'
  },
  {
    name: 'New York',
    abbrev: 'NY',
    capital: 'Albany',
    majorCities: ['New York City', 'Buffalo', 'Rochester', 'Syracuse', 'Albany'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'new-york-license-plate-lookup',
    neighboringStates: ['new-jersey', 'pennsylvania', 'connecticut', 'massachusetts', 'vermont'],
    theftNote: 'New York City has significant vehicle theft. The massive used vehicle market requires verification.'
  },
  {
    name: 'North Carolina',
    abbrev: 'NC',
    capital: 'Raleigh',
    majorCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'north-carolina-license-plate-lookup',
    neighboringStates: ['virginia', 'tennessee', 'georgia', 'south-carolina'],
    theftNote: 'Charlotte and Raleigh see vehicle theft. I-85 and I-95 are major transport corridors.'
  },
  {
    name: 'North Dakota',
    abbrev: 'ND',
    capital: 'Bismarck',
    majorCities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'north-dakota-license-plate-lookup',
    neighboringStates: ['minnesota', 'south-dakota', 'montana'],
    theftNote: 'North Dakota has low vehicle theft rates, but oil boom areas like Williston see increased activity.'
  },
  {
    name: 'Ohio',
    abbrev: 'OH',
    capital: 'Columbus',
    majorCities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    hasTheftDatabase: true,
    theftDatabaseName: 'Ohio AG Database',
    theftDatabaseUrl: null,
    slug: 'ohio-license-plate-lookup',
    neighboringStates: ['michigan', 'indiana', 'kentucky', 'west-virginia', 'pennsylvania'],
    theftNote: 'Cleveland, Columbus, and Cincinnati have elevated vehicle theft. Ohio AG maintains stolen property records.'
  },
  {
    name: 'Oklahoma',
    abbrev: 'OK',
    capital: 'Oklahoma City',
    majorCities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'oklahoma-license-plate-lookup',
    neighboringStates: ['kansas', 'missouri', 'arkansas', 'texas', 'new-mexico', 'colorado'],
    theftNote: 'Oklahoma City and Tulsa have notable vehicle theft rates. I-35 and I-40 are major corridors.'
  },
  {
    name: 'Oregon',
    abbrev: 'OR',
    capital: 'Salem',
    majorCities: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'oregon-license-plate-lookup',
    neighboringStates: ['washington', 'idaho', 'nevada', 'california'],
    theftNote: 'Portland has high vehicle theft rates. Catalytic converter theft is also prevalent.'
  },
  {
    name: 'Pennsylvania',
    abbrev: 'PA',
    capital: 'Harrisburg',
    majorCities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Reading', 'Harrisburg'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'pennsylvania-license-plate-lookup',
    neighboringStates: ['new-york', 'new-jersey', 'delaware', 'maryland', 'west-virginia', 'ohio'],
    theftNote: 'Philadelphia has high vehicle theft. Pittsburgh and I-76/I-80 corridors also see activity.'
  },
  {
    name: 'Rhode Island',
    abbrev: 'RI',
    capital: 'Providence',
    majorCities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'rhode-island-license-plate-lookup',
    neighboringStates: ['massachusetts', 'connecticut'],
    theftNote: 'Providence sees vehicle theft. Small state but active used vehicle market with Boston proximity.'
  },
  {
    name: 'South Carolina',
    abbrev: 'SC',
    capital: 'Columbia',
    majorCities: ['Charleston', 'Columbia', 'North Charleston', 'Greenville'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'south-carolina-license-plate-lookup',
    neighboringStates: ['north-carolina', 'georgia'],
    theftNote: 'Charleston and Columbia see vehicle theft. Port of Charleston creates export risk for stolen vehicles.'
  },
  {
    name: 'South Dakota',
    abbrev: 'SD',
    capital: 'Pierre',
    majorCities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Pierre'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'south-dakota-license-plate-lookup',
    neighboringStates: ['north-dakota', 'minnesota', 'iowa', 'nebraska', 'wyoming', 'montana'],
    theftNote: 'South Dakota has low vehicle theft. Sioux Falls is the main market for used vehicles.'
  },
  {
    name: 'Tennessee',
    abbrev: 'TN',
    capital: 'Nashville',
    majorCities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'tennessee-license-plate-lookup',
    neighboringStates: ['kentucky', 'virginia', 'north-carolina', 'georgia', 'alabama', 'mississippi', 'arkansas', 'missouri'],
    theftNote: 'Memphis and Nashville have high vehicle theft rates. Tennessee is a crossroads state with major interstates.'
  },
  {
    name: 'Texas',
    abbrev: 'TX',
    capital: 'Austin',
    majorCities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'texas-license-plate-lookup',
    neighboringStates: ['oklahoma', 'arkansas', 'louisiana', 'new-mexico'],
    theftNote: 'Texas has very high vehicle theft, especially in Houston, Dallas, and San Antonio. Border proximity increases trafficking risk.'
  },
  {
    name: 'Utah',
    abbrev: 'UT',
    capital: 'Salt Lake City',
    majorCities: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'utah-license-plate-lookup',
    neighboringStates: ['idaho', 'wyoming', 'colorado', 'arizona', 'nevada'],
    theftNote: 'Salt Lake City metro area sees most vehicle theft. I-15 and I-80 are major transport routes.'
  },
  {
    name: 'Vermont',
    abbrev: 'VT',
    capital: 'Montpelier',
    majorCities: ['Burlington', 'South Burlington', 'Rutland', 'Montpelier'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'vermont-license-plate-lookup',
    neighboringStates: ['new-hampshire', 'massachusetts', 'new-york'],
    theftNote: 'Vermont has very low vehicle theft rates but verification is still recommended for peace of mind.'
  },
  {
    name: 'Virginia',
    abbrev: 'VA',
    capital: 'Richmond',
    majorCities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Arlington'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'virginia-license-plate-lookup',
    neighboringStates: ['maryland', 'west-virginia', 'kentucky', 'tennessee', 'north-carolina'],
    theftNote: 'Northern Virginia (DC suburbs) and Hampton Roads see vehicle theft. Large military presence creates active market.'
  },
  {
    name: 'Washington',
    abbrev: 'WA',
    capital: 'Olympia',
    majorCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'washington-license-plate-lookup',
    neighboringStates: ['oregon', 'idaho'],
    theftNote: 'Seattle and Tacoma have very high vehicle theft rates. Washington consistently ranks among top states for auto theft.'
  },
  {
    name: 'West Virginia',
    abbrev: 'WV',
    capital: 'Charleston',
    majorCities: ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'west-virginia-license-plate-lookup',
    neighboringStates: ['ohio', 'pennsylvania', 'maryland', 'virginia', 'kentucky'],
    theftNote: 'West Virginia has lower vehicle theft but Charleston and border cities see some activity.'
  },
  {
    name: 'Wisconsin',
    abbrev: 'WI',
    capital: 'Madison',
    majorCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'wisconsin-license-plate-lookup',
    neighboringStates: ['michigan', 'minnesota', 'iowa', 'illinois'],
    theftNote: 'Milwaukee has significant vehicle theft. Madison and Green Bay see less activity.'
  },
  {
    name: 'Wyoming',
    abbrev: 'WY',
    capital: 'Cheyenne',
    majorCities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette'],
    hasTheftDatabase: false,
    theftDatabaseName: null,
    theftDatabaseUrl: null,
    slug: 'wyoming-license-plate-lookup',
    neighboringStates: ['montana', 'south-dakota', 'nebraska', 'colorado', 'utah', 'idaho'],
    theftNote: 'Wyoming has low vehicle theft but I-80 corridor sees some transit of stolen vehicles.'
  }
];

/**
 * Get state by slug
 */
export const getStateBySlug = (slug: string): StateData | undefined => {
  return ALL_STATES.find(state => state.slug === slug);
};

/**
 * Get states with theft databases
 */
export const getStatesWithTheftDatabases = (): StateData[] => {
  return ALL_STATES.filter(state => state.hasTheftDatabase);
};

/**
 * Get neighboring states data
 */
export const getNeighboringStates = (stateSlug: string): StateData[] => {
  const state = getStateBySlug(stateSlug);
  if (!state) return [];
  
  return state.neighboringStates
    .map(slug => ALL_STATES.find(s => s.slug.startsWith(slug)))
    .filter((s): s is StateData => s !== undefined);
};

/**
 * Generate all state license plate page routes
 */
export const getAllStateLicensePlateRoutes = (): string[] => {
  return ALL_STATES.map(state => `/${state.slug}`);
};
