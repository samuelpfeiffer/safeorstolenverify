export interface StateData {
 code: string;
 name: string;
 slug: string;
 population: number;
 topCities: string[];
 theftStatistics: {
 vehicleThefts: number;
 propertyThefts: number;
 theftRate: number; // per 100k residents
 };
 databaseAccess: {
 hasDirectAccess: boolean;
 databases: string[];
 };
 lawEnforcement: {
 statePolice: string;
 reportingUrl?: string;
 };
 dmv: {
 name: string;
 url?: string;
 };
}

export const US_STATES: StateData[] = [
 {
 code: 'AZ',
 name: 'Arizona',
 slug: 'arizona',
 population: 7279000,
 topCities: ['Phoenix', 'Tucson'],
 theftStatistics: { vehicleThefts: 24000, propertyThefts: 180000, theftRate: 2470 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Arizona Department of Public Safety' },
 dmv: { name: 'Arizona MVD' }
 },
 {
 code: 'FL',
 name: 'Florida',
 slug: 'florida',
 population: 21480000,
 topCities: ['Miami', 'Tampa'],
 theftStatistics: { vehicleThefts: 42000, propertyThefts: 320000, theftRate: 1980 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Florida Highway Patrol' },
 dmv: { name: 'Florida DHSMV' }
 },
 {
 code: 'TX',
 name: 'Texas',
 slug: 'texas',
 population: 29000000,
 topCities: ['Houston', 'Dallas'],
 theftStatistics: { vehicleThefts: 78000, propertyThefts: 580000, theftRate: 2680 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Texas Department of Public Safety' },
 dmv: { name: 'Texas DMV' }
 },
 {
 code: 'CA',
 name: 'California',
 slug: 'california',
 population: 39510000,
 topCities: ['Los Angeles', 'San Francisco'],
 theftStatistics: { vehicleThefts: 187000, propertyThefts: 890000, theftRate: 2250 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'California Highway Patrol' },
 dmv: { name: 'California DMV' }
 },
 {
 code: 'NY',
 name: 'New York',
 slug: 'new-york',
 population: 19450000,
 topCities: ['New York City', 'Buffalo'],
 theftStatistics: { vehicleThefts: 15000, propertyThefts: 210000, theftRate: 1080 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'New York State Police' },
 dmv: { name: 'New York DMV' }
 },
 {
 code: 'AL',
 name: 'Alabama',
 slug: 'alabama',
 population: 4900000,
 topCities: ['Birmingham', 'Montgomery'],
 theftStatistics: { vehicleThefts: 8500, propertyThefts: 95000, theftRate: 2520 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Alabama Law Enforcement Agency' },
 dmv: { name: 'Alabama Law Enforcement Agency' }
 },
 {
 code: 'AK',
 name: 'Alaska',
 slug: 'alaska',
 population: 731000,
 topCities: ['Anchorage', 'Fairbanks'],
 theftStatistics: { vehicleThefts: 1200, propertyThefts: 12000, theftRate: 3180 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Alaska State Troopers' },
 dmv: { name: 'Alaska DMV' }
 },
 {
 code: 'AR',
 name: 'Arkansas',
 slug: 'arkansas',
 population: 3020000,
 topCities: ['Little Rock', 'Fort Smith'],
 theftStatistics: { vehicleThefts: 5800, propertyThefts: 72000, theftRate: 2780 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Arkansas State Police' },
 dmv: { name: 'Arkansas DMV' }
 },
 {
 code: 'CO',
 name: 'Colorado',
 slug: 'colorado',
 population: 5760000,
 topCities: ['Denver', 'Colorado Springs'],
 theftStatistics: { vehicleThefts: 32000, propertyThefts: 145000, theftRate: 2520 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Colorado State Patrol' },
 dmv: { name: 'Colorado DMV' }
 },
 {
 code: 'CT',
 name: 'Connecticut',
 slug: 'connecticut',
 population: 3570000,
 topCities: ['Hartford', 'New Haven'],
 theftStatistics: { vehicleThefts: 4200, propertyThefts: 45000, theftRate: 1260 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Connecticut State Police' },
 dmv: { name: 'Connecticut DMV' }
 },
 {
 code: 'DE',
 name: 'Delaware',
 slug: 'delaware',
 population: 990000,
 topCities: ['Wilmington', 'Dover'],
 theftStatistics: { vehicleThefts: 1100, propertyThefts: 18000, theftRate: 1820 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Delaware State Police' },
 dmv: { name: 'Delaware DMV' }
 },
 {
 code: 'GA',
 name: 'Georgia',
 slug: 'georgia',
 population: 10620000,
 topCities: ['Atlanta', 'Augusta'],
 theftStatistics: { vehicleThefts: 32000, propertyThefts: 240000, theftRate: 2260 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Georgia State Patrol' },
 dmv: { name: 'Georgia DDS' }
 },
 {
 code: 'HI',
 name: 'Hawaii',
 slug: 'hawaii',
 population: 1420000,
 topCities: ['Honolulu', 'Hilo'],
 theftStatistics: { vehicleThefts: 3200, propertyThefts: 28000, theftRate: 1970 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Hawaii Department of Public Safety' },
 dmv: { name: 'Hawaii DMV' }
 },
 {
 code: 'ID',
 name: 'Idaho',
 slug: 'idaho',
 population: 1840000,
 topCities: ['Boise', 'Meridian'],
 theftStatistics: { vehicleThefts: 2100, propertyThefts: 22000, theftRate: 1200 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Idaho State Police' },
 dmv: { name: 'Idaho DMV' }
 },
 {
 code: 'IL',
 name: 'Illinois',
 slug: 'illinois',
 population: 12670000,
 topCities: ['Chicago', 'Aurora'],
 theftStatistics: { vehicleThefts: 28000, propertyThefts: 210000, theftRate: 1660 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Illinois State Police' },
 dmv: { name: 'Illinois DMV' }
 },
 {
 code: 'IN',
 name: 'Indiana',
 slug: 'indiana',
 population: 6730000,
 topCities: ['Indianapolis', 'Fort Wayne'],
 theftStatistics: { vehicleThefts: 12000, propertyThefts: 135000, theftRate: 2010 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Indiana State Police' },
 dmv: { name: 'Indiana BMV' }
 },
 {
 code: 'IA',
 name: 'Iowa',
 slug: 'iowa',
 population: 3160000,
 topCities: ['Des Moines', 'Cedar Rapids'],
 theftStatistics: { vehicleThefts: 4200, propertyThefts: 48000, theftRate: 1520 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Iowa State Patrol' },
 dmv: { name: 'Iowa DOT' }
 },
 {
 code: 'KS',
 name: 'Kansas',
 slug: 'kansas',
 population: 2910000,
 topCities: ['Wichita', 'Overland Park'],
 theftStatistics: { vehicleThefts: 6800, propertyThefts: 62000, theftRate: 2130 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Kansas Highway Patrol' },
 dmv: { name: 'Kansas DMV' }
 },
 {
 code: 'KY',
 name: 'Kentucky',
 slug: 'kentucky',
 population: 4470000,
 topCities: ['Louisville', 'Lexington'],
 theftStatistics: { vehicleThefts: 7200, propertyThefts: 88000, theftRate: 1970 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Kentucky State Police' },
 dmv: { name: 'Kentucky Transportation Cabinet' }
 },
 {
 code: 'LA',
 name: 'Louisiana',
 slug: 'louisiana',
 population: 4650000,
 topCities: ['New Orleans', 'Baton Rouge'],
 theftStatistics: { vehicleThefts: 12000, propertyThefts: 125000, theftRate: 2690 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Louisiana State Police' },
 dmv: { name: 'Louisiana OMV' }
 },
 {
 code: 'ME',
 name: 'Maine',
 slug: 'maine',
 population: 1360000,
 topCities: ['Portland', 'Lewiston'],
 theftStatistics: { vehicleThefts: 850, propertyThefts: 16000, theftRate: 1180 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Maine State Police' },
 dmv: { name: 'Maine BMV' }
 },
 {
 code: 'MD',
 name: 'Maryland',
 slug: 'maryland',
 population: 6050000,
 topCities: ['Baltimore', 'Columbia'],
 theftStatistics: { vehicleThefts: 16000, propertyThefts: 110000, theftRate: 1820 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Maryland State Police' },
 dmv: { name: 'Maryland MVA' }
 },
 {
 code: 'MA',
 name: 'Massachusetts',
 slug: 'massachusetts',
 population: 6900000,
 topCities: ['Boston', 'Worcester'],
 theftStatistics: { vehicleThefts: 7800, propertyThefts: 82000, theftRate: 1190 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Massachusetts State Police' },
 dmv: { name: 'Massachusetts RMV' }
 },
 {
 code: 'MI',
 name: 'Michigan',
 slug: 'michigan',
 population: 9990000,
 topCities: ['Detroit', 'Grand Rapids'],
 theftStatistics: { vehicleThefts: 22000, propertyThefts: 165000, theftRate: 1650 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Michigan State Police' },
 dmv: { name: 'Michigan SOS' }
 },
 {
 code: 'MN',
 name: 'Minnesota',
 slug: 'minnesota',
 population: 5640000,
 topCities: ['Minneapolis', 'Saint Paul'],
 theftStatistics: { vehicleThefts: 13000, propertyThefts: 98000, theftRate: 1740 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Minnesota State Patrol' },
 dmv: { name: 'Minnesota DVS' }
 },
 {
 code: 'MS',
 name: 'Mississippi',
 slug: 'mississippi',
 population: 2980000,
 topCities: ['Jackson', 'Gulfport'],
 theftStatistics: { vehicleThefts: 5200, propertyThefts: 68000, theftRate: 2280 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Mississippi Highway Patrol' },
 dmv: { name: 'Mississippi DPS' }
 },
 {
 code: 'MO',
 name: 'Missouri',
 slug: 'missouri',
 population: 6140000,
 topCities: ['Kansas City', 'St. Louis'],
 theftStatistics: { vehicleThefts: 16000, propertyThefts: 145000, theftRate: 2360 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Missouri State Highway Patrol' },
 dmv: { name: 'Missouri DOR' }
 },
 {
 code: 'MT',
 name: 'Montana',
 slug: 'montana',
 population: 1080000,
 topCities: ['Billings', 'Missoula'],
 theftStatistics: { vehicleThefts: 1600, propertyThefts: 18000, theftRate: 1670 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Montana Highway Patrol' },
 dmv: { name: 'Montana MVD' }
 },
 {
 code: 'NE',
 name: 'Nebraska',
 slug: 'nebraska',
 population: 1930000,
 topCities: ['Omaha', 'Lincoln'],
 theftStatistics: { vehicleThefts: 4200, propertyThefts: 38000, theftRate: 1970 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Nebraska State Patrol' },
 dmv: { name: 'Nebraska DMV' }
 },
 {
 code: 'NV',
 name: 'Nevada',
 slug: 'nevada',
 population: 3080000,
 topCities: ['Las Vegas', 'Reno'],
 theftStatistics: { vehicleThefts: 11000, propertyThefts: 72000, theftRate: 2340 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Nevada Highway Patrol' },
 dmv: { name: 'Nevada DMV' }
 },
 {
 code: 'NH',
 name: 'New Hampshire',
 slug: 'new-hampshire',
 population: 1360000,
 topCities: ['Manchester', 'Nashua'],
 theftStatistics: { vehicleThefts: 900, propertyThefts: 14000, theftRate: 1030 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'New Hampshire State Police' },
 dmv: { name: 'New Hampshire DMV' }
 },
 {
 code: 'NJ',
 name: 'New Jersey',
 slug: 'new-jersey',
 population: 8880000,
 topCities: ['Newark', 'Jersey City'],
 theftStatistics: { vehicleThefts: 13000, propertyThefts: 115000, theftRate: 1300 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'New Jersey State Police' },
 dmv: { name: 'New Jersey MVC' }
 },
 {
 code: 'NM',
 name: 'New Mexico',
 slug: 'new-mexico',
 population: 2100000,
 topCities: ['Albuquerque', 'Las Cruces'],
 theftStatistics: { vehicleThefts: 9500, propertyThefts: 58000, theftRate: 2760 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'New Mexico State Police' },
 dmv: { name: 'New Mexico MVD' }
 },
 {
 code: 'NC',
 name: 'North Carolina',
 slug: 'north-carolina',
 population: 10490000,
 topCities: ['Charlotte', 'Raleigh'],
 theftStatistics: { vehicleThefts: 18000, propertyThefts: 220000, theftRate: 2100 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'North Carolina State Highway Patrol' },
 dmv: { name: 'North Carolina DMV' }
 },
 {
 code: 'ND',
 name: 'North Dakota',
 slug: 'north-dakota',
 population: 760000,
 topCities: ['Fargo', 'Bismarck'],
 theftStatistics: { vehicleThefts: 850, propertyThefts: 9800, theftRate: 1290 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'North Dakota Highway Patrol' },
 dmv: { name: 'North Dakota DOT' }
 },
 {
 code: 'OH',
 name: 'Ohio',
 slug: 'ohio',
 population: 11690000,
 topCities: ['Columbus', 'Cleveland'],
 theftStatistics: { vehicleThefts: 24000, propertyThefts: 210000, theftRate: 1800 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Ohio State Highway Patrol' },
 dmv: { name: 'Ohio BMV' }
 },
 {
 code: 'OK',
 name: 'Oklahoma',
 slug: 'oklahoma',
 population: 3960000,
 topCities: ['Oklahoma City', 'Tulsa'],
 theftStatistics: { vehicleThefts: 11000, propertyThefts: 96000, theftRate: 2420 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Oklahoma Highway Patrol' },
 dmv: { name: 'Oklahoma DPS' }
 },
 {
 code: 'OR',
 name: 'Oregon',
 slug: 'oregon',
 population: 4220000,
 topCities: ['Portland', 'Salem'],
 theftStatistics: { vehicleThefts: 14000, propertyThefts: 98000, theftRate: 2320 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Oregon State Police' },
 dmv: { name: 'Oregon DMV' }
 },
 {
 code: 'PA',
 name: 'Pennsylvania',
 slug: 'pennsylvania',
 population: 12800000,
 topCities: ['Philadelphia', 'Pittsburgh'],
 theftStatistics: { vehicleThefts: 16000, propertyThefts: 165000, theftRate: 1290 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Pennsylvania State Police' },
 dmv: { name: 'PennDOT' }
 },
 {
 code: 'RI',
 name: 'Rhode Island',
 slug: 'rhode-island',
 population: 1060000,
 topCities: ['Providence', 'Warwick'],
 theftStatistics: { vehicleThefts: 1400, propertyThefts: 16000, theftRate: 1510 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Rhode Island State Police' },
 dmv: { name: 'Rhode Island DMV' }
 },
 {
 code: 'SC',
 name: 'South Carolina',
 slug: 'south-carolina',
 population: 5150000,
 topCities: ['Charleston', 'Columbia'],
 theftStatistics: { vehicleThefts: 10000, propertyThefts: 120000, theftRate: 2330 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'South Carolina Highway Patrol' },
 dmv: { name: 'South Carolina DMV' }
 },
 {
 code: 'SD',
 name: 'South Dakota',
 slug: 'south-dakota',
 population: 890000,
 topCities: ['Sioux Falls', 'Rapid City'],
 theftStatistics: { vehicleThefts: 1100, propertyThefts: 11000, theftRate: 1240 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'South Dakota Highway Patrol' },
 dmv: { name: 'South Dakota DPS' }
 },
 {
 code: 'TN',
 name: 'Tennessee',
 slug: 'tennessee',
 population: 6830000,
 topCities: ['Nashville', 'Memphis'],
 theftStatistics: { vehicleThefts: 16000, propertyThefts: 155000, theftRate: 2270 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Tennessee Highway Patrol' },
 dmv: { name: 'Tennessee DOS' }
 },
 {
 code: 'UT',
 name: 'Utah',
 slug: 'utah',
 population: 3270000,
 topCities: ['Salt Lake City', 'Provo'],
 theftStatistics: { vehicleThefts: 7800, propertyThefts: 58000, theftRate: 1770 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Utah Highway Patrol' },
 dmv: { name: 'Utah DMV' }
 },
 {
 code: 'VT',
 name: 'Vermont',
 slug: 'vermont',
 population: 624000,
 topCities: ['Burlington', 'South Burlington'],
 theftStatistics: { vehicleThefts: 450, propertyThefts: 8500, theftRate: 1360 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Vermont State Police' },
 dmv: { name: 'Vermont DMV' }
 },
 {
 code: 'VA',
 name: 'Virginia',
 slug: 'virginia',
 population: 8540000,
 topCities: ['Virginia Beach', 'Norfolk'],
 theftStatistics: { vehicleThefts: 9500, propertyThefts: 125000, theftRate: 1460 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Virginia State Police' },
 dmv: { name: 'Virginia DMV' }
 },
 {
 code: 'WA',
 name: 'Washington',
 slug: 'washington',
 population: 7690000,
 topCities: ['Seattle', 'Spokane'],
 theftStatistics: { vehicleThefts: 32000, propertyThefts: 185000, theftRate: 2410 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Washington State Patrol' },
 dmv: { name: 'Washington DOL' }
 },
 {
 code: 'WV',
 name: 'West Virginia',
 slug: 'west-virginia',
 population: 1790000,
 topCities: ['Charleston', 'Huntington'],
 theftStatistics: { vehicleThefts: 1900, propertyThefts: 28000, theftRate: 1560 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'West Virginia State Police' },
 dmv: { name: 'West Virginia DMV' }
 },
 {
 code: 'WI',
 name: 'Wisconsin',
 slug: 'wisconsin',
 population: 5830000,
 topCities: ['Milwaukee', 'Madison'],
 theftStatistics: { vehicleThefts: 11000, propertyThefts: 92000, theftRate: 1580 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Wisconsin State Patrol' },
 dmv: { name: 'Wisconsin DMV' }
 },
 {
 code: 'WY',
 name: 'Wyoming',
 slug: 'wyoming',
 population: 580000,
 topCities: ['Cheyenne', 'Casper'],
 theftStatistics: { vehicleThefts: 750, propertyThefts: 7800, theftRate: 1340 },
 databaseAccess: { hasDirectAccess: false, databases: [] },
 lawEnforcement: { statePolice: 'Wyoming Highway Patrol' },
 dmv: { name: 'Wyoming DOT' }
 }
];

export const getStateBySlug = (slug: string): StateData | undefined => {
 return US_STATES.find(state => state.slug === slug);
};

export const getStateByCode = (code: string): StateData | undefined => {
 return US_STATES.find(state => state.code === code);
};
