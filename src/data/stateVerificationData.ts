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
    reportingUrl: string;
  };
  dmv: {
    name: string;
    url: string;
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
    databaseAccess: { hasDirectAccess: true, databases: ['Arizona DOT', 'NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Arizona Department of Public Safety', reportingUrl: 'https://www.azdps.gov' },
    dmv: { name: 'Arizona MVD', url: 'https://azdot.gov/motor-vehicles' }
  },
  {
    code: 'FL',
    name: 'Florida',
    slug: 'florida',
    population: 21480000,
    topCities: ['Miami', 'Tampa'],
    theftStatistics: { vehicleThefts: 42000, propertyThefts: 320000, theftRate: 1980 },
    databaseAccess: { hasDirectAccess: true, databases: ['Florida DHSMV', 'NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Florida Highway Patrol', reportingUrl: 'https://www.flhsmv.gov/fhp' },
    dmv: { name: 'Florida DHSMV', url: 'https://www.flhsmv.gov' }
  },
  {
    code: 'TX',
    name: 'Texas',
    slug: 'texas',
    population: 29000000,
    topCities: ['Houston', 'Dallas'],
    theftStatistics: { vehicleThefts: 78000, propertyThefts: 580000, theftRate: 2680 },
    databaseAccess: { hasDirectAccess: true, databases: ['Texas DPS', 'NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Texas Department of Public Safety', reportingUrl: 'https://www.dps.texas.gov' },
    dmv: { name: 'Texas DMV', url: 'https://www.txdmv.gov' }
  },
  {
    code: 'CA',
    name: 'California',
    slug: 'california',
    population: 39510000,
    topCities: ['Los Angeles', 'San Francisco'],
    theftStatistics: { vehicleThefts: 187000, propertyThefts: 890000, theftRate: 2250 },
    databaseAccess: { hasDirectAccess: true, databases: ['California DMV', 'NICB VINCheck'] },
    lawEnforcement: { statePolice: 'California Highway Patrol', reportingUrl: 'https://www.chp.ca.gov' },
    dmv: { name: 'California DMV', url: 'https://www.dmv.ca.gov' }
  },
  {
    code: 'NY',
    name: 'New York',
    slug: 'new-york',
    population: 19450000,
    topCities: ['New York City', 'Buffalo'],
    theftStatistics: { vehicleThefts: 15000, propertyThefts: 210000, theftRate: 1080 },
    databaseAccess: { hasDirectAccess: true, databases: ['NY DMV', 'NICB VINCheck'] },
    lawEnforcement: { statePolice: 'New York State Police', reportingUrl: 'https://www.troopers.ny.gov' },
    dmv: { name: 'New York DMV', url: 'https://dmv.ny.gov' }
  },
  {
    code: 'AL',
    name: 'Alabama',
    slug: 'alabama',
    population: 4900000,
    topCities: ['Birmingham', 'Montgomery'],
    theftStatistics: { vehicleThefts: 8500, propertyThefts: 95000, theftRate: 2520 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Alabama Law Enforcement Agency', reportingUrl: 'https://www.alea.gov' },
    dmv: { name: 'Alabama Law Enforcement Agency', url: 'https://www.alea.gov/dps/driver-license' }
  },
  {
    code: 'AK',
    name: 'Alaska',
    slug: 'alaska',
    population: 731000,
    topCities: ['Anchorage', 'Fairbanks'],
    theftStatistics: { vehicleThefts: 1200, propertyThefts: 12000, theftRate: 3180 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Alaska State Troopers', reportingUrl: 'https://dps.alaska.gov/AST' },
    dmv: { name: 'Alaska DMV', url: 'https://doa.alaska.gov/dmv' }
  },
  {
    code: 'AR',
    name: 'Arkansas',
    slug: 'arkansas',
    population: 3020000,
    topCities: ['Little Rock', 'Fort Smith'],
    theftStatistics: { vehicleThefts: 5800, propertyThefts: 72000, theftRate: 2780 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Arkansas State Police', reportingUrl: 'https://www.asp.arkansas.gov' },
    dmv: { name: 'Arkansas DMV', url: 'https://www.dfa.arkansas.gov/driver-services' }
  },
  {
    code: 'CO',
    name: 'Colorado',
    slug: 'colorado',
    population: 5760000,
    topCities: ['Denver', 'Colorado Springs'],
    theftStatistics: { vehicleThefts: 32000, propertyThefts: 145000, theftRate: 2520 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Colorado State Patrol', reportingUrl: 'https://www.colorado.gov/csp' },
    dmv: { name: 'Colorado DMV', url: 'https://dmv.colorado.gov' }
  },
  {
    code: 'CT',
    name: 'Connecticut',
    slug: 'connecticut',
    population: 3570000,
    topCities: ['Hartford', 'New Haven'],
    theftStatistics: { vehicleThefts: 4200, propertyThefts: 45000, theftRate: 1260 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Connecticut State Police', reportingUrl: 'https://portal.ct.gov/despp' },
    dmv: { name: 'Connecticut DMV', url: 'https://portal.ct.gov/dmv' }
  },
  {
    code: 'DE',
    name: 'Delaware',
    slug: 'delaware',
    population: 990000,
    topCities: ['Wilmington', 'Dover'],
    theftStatistics: { vehicleThefts: 1100, propertyThefts: 18000, theftRate: 1820 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Delaware State Police', reportingUrl: 'https://dsp.delaware.gov' },
    dmv: { name: 'Delaware DMV', url: 'https://www.dmv.de.gov' }
  },
  {
    code: 'GA',
    name: 'Georgia',
    slug: 'georgia',
    population: 10620000,
    topCities: ['Atlanta', 'Augusta'],
    theftStatistics: { vehicleThefts: 32000, propertyThefts: 240000, theftRate: 2260 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Georgia State Patrol', reportingUrl: 'https://dps.georgia.gov/georgia-state-patrol' },
    dmv: { name: 'Georgia DDS', url: 'https://dds.georgia.gov' }
  },
  {
    code: 'HI',
    name: 'Hawaii',
    slug: 'hawaii',
    population: 1420000,
    topCities: ['Honolulu', 'Hilo'],
    theftStatistics: { vehicleThefts: 3200, propertyThefts: 28000, theftRate: 1970 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Hawaii Department of Public Safety', reportingUrl: 'https://dps.hawaii.gov' },
    dmv: { name: 'Hawaii DMV', url: 'https://www.honolulu.gov/cms-csd-menu/site-csd-sitearticles/644-categories/customer-services/19899-motor-vehicles.html' }
  },
  {
    code: 'ID',
    name: 'Idaho',
    slug: 'idaho',
    population: 1840000,
    topCities: ['Boise', 'Meridian'],
    theftStatistics: { vehicleThefts: 2100, propertyThefts: 22000, theftRate: 1200 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Idaho State Police', reportingUrl: 'https://isp.idaho.gov' },
    dmv: { name: 'Idaho DMV', url: 'https://itd.idaho.gov/dmv' }
  },
  {
    code: 'IL',
    name: 'Illinois',
    slug: 'illinois',
    population: 12670000,
    topCities: ['Chicago', 'Aurora'],
    theftStatistics: { vehicleThefts: 28000, propertyThefts: 210000, theftRate: 1660 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Illinois State Police', reportingUrl: 'https://isp.illinois.gov' },
    dmv: { name: 'Illinois DMV', url: 'https://www.ilsos.gov/departments/drivers/home.html' }
  },
  {
    code: 'IN',
    name: 'Indiana',
    slug: 'indiana',
    population: 6730000,
    topCities: ['Indianapolis', 'Fort Wayne'],
    theftStatistics: { vehicleThefts: 12000, propertyThefts: 135000, theftRate: 2010 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Indiana State Police', reportingUrl: 'https://www.in.gov/isp' },
    dmv: { name: 'Indiana BMV', url: 'https://www.in.gov/bmv' }
  },
  {
    code: 'IA',
    name: 'Iowa',
    slug: 'iowa',
    population: 3160000,
    topCities: ['Des Moines', 'Cedar Rapids'],
    theftStatistics: { vehicleThefts: 4200, propertyThefts: 48000, theftRate: 1520 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Iowa State Patrol', reportingUrl: 'https://iowadot.gov/mvd/driverslicense/Iowa-State-Patrol' },
    dmv: { name: 'Iowa DOT', url: 'https://iowadot.gov/mvd' }
  },
  {
    code: 'KS',
    name: 'Kansas',
    slug: 'kansas',
    population: 2910000,
    topCities: ['Wichita', 'Overland Park'],
    theftStatistics: { vehicleThefts: 6800, propertyThefts: 62000, theftRate: 2130 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Kansas Highway Patrol', reportingUrl: 'https://www.kansashighwaypatrol.org' },
    dmv: { name: 'Kansas DMV', url: 'https://www.ksrevenue.gov/dmv.html' }
  },
  {
    code: 'KY',
    name: 'Kentucky',
    slug: 'kentucky',
    population: 4470000,
    topCities: ['Louisville', 'Lexington'],
    theftStatistics: { vehicleThefts: 7200, propertyThefts: 88000, theftRate: 1970 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Kentucky State Police', reportingUrl: 'https://kentuckystatepolice.org' },
    dmv: { name: 'Kentucky Transportation Cabinet', url: 'https://drive.ky.gov' }
  },
  {
    code: 'LA',
    name: 'Louisiana',
    slug: 'louisiana',
    population: 4650000,
    topCities: ['New Orleans', 'Baton Rouge'],
    theftStatistics: { vehicleThefts: 12000, propertyThefts: 125000, theftRate: 2690 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Louisiana State Police', reportingUrl: 'https://lsp.org' },
    dmv: { name: 'Louisiana OMV', url: 'https://omv.dps.louisiana.gov' }
  },
  {
    code: 'ME',
    name: 'Maine',
    slug: 'maine',
    population: 1360000,
    topCities: ['Portland', 'Lewiston'],
    theftStatistics: { vehicleThefts: 850, propertyThefts: 16000, theftRate: 1180 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Maine State Police', reportingUrl: 'https://www.maine.gov/dps/msp' },
    dmv: { name: 'Maine BMV', url: 'https://www.maine.gov/sos/bmv' }
  },
  {
    code: 'MD',
    name: 'Maryland',
    slug: 'maryland',
    population: 6050000,
    topCities: ['Baltimore', 'Columbia'],
    theftStatistics: { vehicleThefts: 16000, propertyThefts: 110000, theftRate: 1820 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Maryland State Police', reportingUrl: 'https://mdsp.maryland.gov' },
    dmv: { name: 'Maryland MVA', url: 'https://mva.maryland.gov' }
  },
  {
    code: 'MA',
    name: 'Massachusetts',
    slug: 'massachusetts',
    population: 6900000,
    topCities: ['Boston', 'Worcester'],
    theftStatistics: { vehicleThefts: 7800, propertyThefts: 82000, theftRate: 1190 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Massachusetts State Police', reportingUrl: 'https://www.mass.gov/orgs/massachusetts-state-police' },
    dmv: { name: 'Massachusetts RMV', url: 'https://www.mass.gov/rmv' }
  },
  {
    code: 'MI',
    name: 'Michigan',
    slug: 'michigan',
    population: 9990000,
    topCities: ['Detroit', 'Grand Rapids'],
    theftStatistics: { vehicleThefts: 22000, propertyThefts: 165000, theftRate: 1650 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Michigan State Police', reportingUrl: 'https://www.michigan.gov/msp' },
    dmv: { name: 'Michigan SOS', url: 'https://www.michigan.gov/sos' }
  },
  {
    code: 'MN',
    name: 'Minnesota',
    slug: 'minnesota',
    population: 5640000,
    topCities: ['Minneapolis', 'Saint Paul'],
    theftStatistics: { vehicleThefts: 13000, propertyThefts: 98000, theftRate: 1740 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Minnesota State Patrol', reportingUrl: 'https://dps.mn.gov/divisions/msp/Pages/default.aspx' },
    dmv: { name: 'Minnesota DVS', url: 'https://dps.mn.gov/divisions/dvs/Pages/default.aspx' }
  },
  {
    code: 'MS',
    name: 'Mississippi',
    slug: 'mississippi',
    population: 2980000,
    topCities: ['Jackson', 'Gulfport'],
    theftStatistics: { vehicleThefts: 5200, propertyThefts: 68000, theftRate: 2280 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Mississippi Highway Patrol', reportingUrl: 'https://www.dps.ms.gov/highway-patrol' },
    dmv: { name: 'Mississippi DPS', url: 'https://www.dps.ms.gov' }
  },
  {
    code: 'MO',
    name: 'Missouri',
    slug: 'missouri',
    population: 6140000,
    topCities: ['Kansas City', 'St. Louis'],
    theftStatistics: { vehicleThefts: 16000, propertyThefts: 145000, theftRate: 2360 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Missouri State Highway Patrol', reportingUrl: 'https://www.mshp.dps.missouri.gov' },
    dmv: { name: 'Missouri DOR', url: 'https://dor.mo.gov/motor-vehicle' }
  },
  {
    code: 'MT',
    name: 'Montana',
    slug: 'montana',
    population: 1080000,
    topCities: ['Billings', 'Missoula'],
    theftStatistics: { vehicleThefts: 1600, propertyThefts: 18000, theftRate: 1670 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Montana Highway Patrol', reportingUrl: 'https://dojmt.gov/highway-patrol' },
    dmv: { name: 'Montana MVD', url: 'https://dojmt.gov/driving' }
  },
  {
    code: 'NE',
    name: 'Nebraska',
    slug: 'nebraska',
    population: 1930000,
    topCities: ['Omaha', 'Lincoln'],
    theftStatistics: { vehicleThefts: 4200, propertyThefts: 38000, theftRate: 1970 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Nebraska State Patrol', reportingUrl: 'https://statepatrol.nebraska.gov' },
    dmv: { name: 'Nebraska DMV', url: 'https://dmv.nebraska.gov' }
  },
  {
    code: 'NV',
    name: 'Nevada',
    slug: 'nevada',
    population: 3080000,
    topCities: ['Las Vegas', 'Reno'],
    theftStatistics: { vehicleThefts: 11000, propertyThefts: 72000, theftRate: 2340 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Nevada Highway Patrol', reportingUrl: 'https://dmvnv.com/nhp.htm' },
    dmv: { name: 'Nevada DMV', url: 'https://dmvnv.com' }
  },
  {
    code: 'NH',
    name: 'New Hampshire',
    slug: 'new-hampshire',
    population: 1360000,
    topCities: ['Manchester', 'Nashua'],
    theftStatistics: { vehicleThefts: 900, propertyThefts: 14000, theftRate: 1030 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'New Hampshire State Police', reportingUrl: 'https://www.nh.gov/safety/divisions/nhsp' },
    dmv: { name: 'New Hampshire DMV', url: 'https://www.nh.gov/safety/divisions/dmv' }
  },
  {
    code: 'NJ',
    name: 'New Jersey',
    slug: 'new-jersey',
    population: 8880000,
    topCities: ['Newark', 'Jersey City'],
    theftStatistics: { vehicleThefts: 13000, propertyThefts: 115000, theftRate: 1300 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'New Jersey State Police', reportingUrl: 'https://www.nj.gov/njsp' },
    dmv: { name: 'New Jersey MVC', url: 'https://www.nj.gov/mvc' }
  },
  {
    code: 'NM',
    name: 'New Mexico',
    slug: 'new-mexico',
    population: 2100000,
    topCities: ['Albuquerque', 'Las Cruces'],
    theftStatistics: { vehicleThefts: 9500, propertyThefts: 58000, theftRate: 2760 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'New Mexico State Police', reportingUrl: 'https://www.dps.nm.gov/state-police' },
    dmv: { name: 'New Mexico MVD', url: 'https://www.mvd.newmexico.gov' }
  },
  {
    code: 'NC',
    name: 'North Carolina',
    slug: 'north-carolina',
    population: 10490000,
    topCities: ['Charlotte', 'Raleigh'],
    theftStatistics: { vehicleThefts: 18000, propertyThefts: 220000, theftRate: 2100 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'North Carolina State Highway Patrol', reportingUrl: 'https://www.ncdps.gov/our-organization/state-highway-patrol' },
    dmv: { name: 'North Carolina DMV', url: 'https://www.ncdot.gov/dmv' }
  },
  {
    code: 'ND',
    name: 'North Dakota',
    slug: 'north-dakota',
    population: 760000,
    topCities: ['Fargo', 'Bismarck'],
    theftStatistics: { vehicleThefts: 850, propertyThefts: 9800, theftRate: 1290 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'North Dakota Highway Patrol', reportingUrl: 'https://www.nd.gov/ndhp' },
    dmv: { name: 'North Dakota DOT', url: 'https://www.dot.nd.gov/divisions/mv' }
  },
  {
    code: 'OH',
    name: 'Ohio',
    slug: 'ohio',
    population: 11690000,
    topCities: ['Columbus', 'Cleveland'],
    theftStatistics: { vehicleThefts: 24000, propertyThefts: 210000, theftRate: 1800 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Ohio State Highway Patrol', reportingUrl: 'https://www.statepatrol.ohio.gov' },
    dmv: { name: 'Ohio BMV', url: 'https://bmv.ohio.gov' }
  },
  {
    code: 'OK',
    name: 'Oklahoma',
    slug: 'oklahoma',
    population: 3960000,
    topCities: ['Oklahoma City', 'Tulsa'],
    theftStatistics: { vehicleThefts: 11000, propertyThefts: 96000, theftRate: 2420 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Oklahoma Highway Patrol', reportingUrl: 'https://dps.ok.gov/ohp' },
    dmv: { name: 'Oklahoma DPS', url: 'https://oklahoma.gov/dps.html' }
  },
  {
    code: 'OR',
    name: 'Oregon',
    slug: 'oregon',
    population: 4220000,
    topCities: ['Portland', 'Salem'],
    theftStatistics: { vehicleThefts: 14000, propertyThefts: 98000, theftRate: 2320 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Oregon State Police', reportingUrl: 'https://www.oregon.gov/osp' },
    dmv: { name: 'Oregon DMV', url: 'https://www.oregon.gov/odot/dmv' }
  },
  {
    code: 'PA',
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    population: 12800000,
    topCities: ['Philadelphia', 'Pittsburgh'],
    theftStatistics: { vehicleThefts: 16000, propertyThefts: 165000, theftRate: 1290 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Pennsylvania State Police', reportingUrl: 'https://www.psp.pa.gov' },
    dmv: { name: 'PennDOT', url: 'https://www.dmv.pa.gov' }
  },
  {
    code: 'RI',
    name: 'Rhode Island',
    slug: 'rhode-island',
    population: 1060000,
    topCities: ['Providence', 'Warwick'],
    theftStatistics: { vehicleThefts: 1400, propertyThefts: 16000, theftRate: 1510 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Rhode Island State Police', reportingUrl: 'https://risp.ri.gov' },
    dmv: { name: 'Rhode Island DMV', url: 'https://dmv.ri.gov' }
  },
  {
    code: 'SC',
    name: 'South Carolina',
    slug: 'south-carolina',
    population: 5150000,
    topCities: ['Charleston', 'Columbia'],
    theftStatistics: { vehicleThefts: 10000, propertyThefts: 120000, theftRate: 2330 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'South Carolina Highway Patrol', reportingUrl: 'https://scdps.sc.gov/schp' },
    dmv: { name: 'South Carolina DMV', url: 'https://scdmvonline.com' }
  },
  {
    code: 'SD',
    name: 'South Dakota',
    slug: 'south-dakota',
    population: 890000,
    topCities: ['Sioux Falls', 'Rapid City'],
    theftStatistics: { vehicleThefts: 1100, propertyThefts: 11000, theftRate: 1240 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'South Dakota Highway Patrol', reportingUrl: 'https://dps.sd.gov/highway-patrol' },
    dmv: { name: 'South Dakota DPS', url: 'https://dps.sd.gov/driver-licensing' }
  },
  {
    code: 'TN',
    name: 'Tennessee',
    slug: 'tennessee',
    population: 6830000,
    topCities: ['Nashville', 'Memphis'],
    theftStatistics: { vehicleThefts: 16000, propertyThefts: 155000, theftRate: 2270 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Tennessee Highway Patrol', reportingUrl: 'https://www.tn.gov/safety/driver-services/thp.html' },
    dmv: { name: 'Tennessee DOS', url: 'https://www.tn.gov/safety/driver-services.html' }
  },
  {
    code: 'UT',
    name: 'Utah',
    slug: 'utah',
    population: 3270000,
    topCities: ['Salt Lake City', 'Provo'],
    theftStatistics: { vehicleThefts: 7800, propertyThefts: 58000, theftRate: 1770 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Utah Highway Patrol', reportingUrl: 'https://highwaypatrol.utah.gov' },
    dmv: { name: 'Utah DMV', url: 'https://dmv.utah.gov' }
  },
  {
    code: 'VT',
    name: 'Vermont',
    slug: 'vermont',
    population: 624000,
    topCities: ['Burlington', 'South Burlington'],
    theftStatistics: { vehicleThefts: 450, propertyThefts: 8500, theftRate: 1360 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Vermont State Police', reportingUrl: 'https://vsp.vermont.gov' },
    dmv: { name: 'Vermont DMV', url: 'https://dmv.vermont.gov' }
  },
  {
    code: 'VA',
    name: 'Virginia',
    slug: 'virginia',
    population: 8540000,
    topCities: ['Virginia Beach', 'Norfolk'],
    theftStatistics: { vehicleThefts: 9500, propertyThefts: 125000, theftRate: 1460 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Virginia State Police', reportingUrl: 'https://www.vsp.virginia.gov' },
    dmv: { name: 'Virginia DMV', url: 'https://www.dmv.virginia.gov' }
  },
  {
    code: 'WA',
    name: 'Washington',
    slug: 'washington',
    population: 7690000,
    topCities: ['Seattle', 'Spokane'],
    theftStatistics: { vehicleThefts: 32000, propertyThefts: 185000, theftRate: 2410 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Washington State Patrol', reportingUrl: 'https://www.wsp.wa.gov' },
    dmv: { name: 'Washington DOL', url: 'https://www.dol.wa.gov' }
  },
  {
    code: 'WV',
    name: 'West Virginia',
    slug: 'west-virginia',
    population: 1790000,
    topCities: ['Charleston', 'Huntington'],
    theftStatistics: { vehicleThefts: 1900, propertyThefts: 28000, theftRate: 1560 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'West Virginia State Police', reportingUrl: 'https://www.wvsp.gov' },
    dmv: { name: 'West Virginia DMV', url: 'https://transportation.wv.gov/DMV' }
  },
  {
    code: 'WI',
    name: 'Wisconsin',
    slug: 'wisconsin',
    population: 5830000,
    topCities: ['Milwaukee', 'Madison'],
    theftStatistics: { vehicleThefts: 11000, propertyThefts: 92000, theftRate: 1580 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Wisconsin State Patrol', reportingUrl: 'https://wisconsindot.gov/Pages/about-wisdot/who-we-are/dtsd/dsp/default.aspx' },
    dmv: { name: 'Wisconsin DMV', url: 'https://wisconsindmv.gov' }
  },
  {
    code: 'WY',
    name: 'Wyoming',
    slug: 'wyoming',
    population: 580000,
    topCities: ['Cheyenne', 'Casper'],
    theftStatistics: { vehicleThefts: 750, propertyThefts: 7800, theftRate: 1340 },
    databaseAccess: { hasDirectAccess: false, databases: ['NICB VINCheck'] },
    lawEnforcement: { statePolice: 'Wyoming Highway Patrol', reportingUrl: 'https://www.whp.dot.state.wy.us' },
    dmv: { name: 'Wyoming DOT', url: 'https://www.dot.state.wy.us' }
  }
];

export const getStateBySlug = (slug: string): StateData | undefined => {
  return US_STATES.find(state => state.slug === slug);
};

export const getStateByCode = (code: string): StateData | undefined => {
  return US_STATES.find(state => state.code === code);
};
