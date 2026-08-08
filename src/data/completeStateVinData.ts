// COMPLETE 50-STATE VIN DATA - ALL US STATES FOR NATIONWIDE SEO
import { StateVinData, ALL_STATE_VIN_DATA } from './allStateVinData';
import { ALL_STATE_VIN_DATA_PART2 } from './allStateVinData2';
import { ALL_STATE_VIN_DATA_PART3 } from './allStateVinData3';
import { ALL_STATE_VIN_DATA_PART4 } from './allStateVinData4';
import { STATE_VIN_DATA_PART5 } from './allStateVinData5';
import { STATE_VIN_DATA_PART6 } from './allStateVinData6';
import { STATE_VIN_DATA_PART7 } from './allStateVinData7';
import { STATE_VIN_DATA_PART8 } from './allStateVinData8';
import { STATE_VIN_DATA_PART9 } from './allStateVinData9';
import { STATE_VIN_DATA_PART10 } from './allStateVinData10';

// Helper to convert old format (with theftStats) to new format (with topCities)
const convertToNewFormat = (data: Record<string, any>): Record<string, StateVinData> => {
  const converted: Record<string, StateVinData> = {};
  for (const [key, value] of Object.entries(data)) {
    const { theftStats, ...rest } = value;
    // Extract topCities from theftStats, remove fabricated statistics
    const topCities = theftStats?.topCities || [];
    // Clean intro text - remove specific numbers
    const cleanIntro = rest.content?.intro
      ?.replace(/over \d+[,\d]* vehicle thefts annually/gi, 'vehicle theft activity')
      ?.replace(/reports over \d+[,\d]+/gi, 'has')
      ?.replace(/experiences over \d+[,\d]+/gi, 'has significant')
      ?.replace(/\d+[,\d]*\+ vehicle thefts/gi, 'vehicle theft')
      ?.replace(/\d+% of cases/gi, 'many cases')
      || rest.content?.intro;
    converted[key] = {
      ...rest,
      topCities,
      content: {
        ...rest.content,
        intro: cleanIntro
      }
    };
  }
  return converted;
};

// Merge all state data (50 states total)
export const COMPLETE_STATE_VIN_DATA: Record<string, StateVinData> = {
  // Existing 5 states - manually include with slug
  california: { state: "California", stateCode: "CA", slug: "california-vin-lookup", title: "California VIN Lookup - Free CA Stolen Vehicle Check | SafeOrStolen", metaDescription: "Free California VIN lookup. Check if a CA vehicle is stolen from DMV and available databases. Instant verification for cars, trucks, and motorcycles.", topCities: ["Los Angeles", "Oakland", "San Francisco"], dmvLink: "https://www.dmv.ca.gov", content: { intro: "California has significant vehicle theft activity. Verify any CA vehicle's VIN against available databases before buying.", whyCheck: "California experiences high vehicle theft rates, particularly in Los Angeles, Oakland, and San Francisco metro areas. Stolen vehicles are sometimes title washed through other states and resold. Always verify VIN records before purchase.", localLaws: "Under California Penal Code 496, possession of stolen property (including vehicles) is a crime punishable by up to 1 year in jail even if you didn't know it was stolen. California DMV requires thorough title verification." }, faqs: [{ question: "How do I check if a California car is stolen?", answer: "Use SafeOrStolen's free VIN checker to search available databases. Also verify the California title certificate is genuine and matches the VIN on the vehicle." }, { question: "What is California's title washing problem?", answer: "Thieves steal California vehicles, transport them out of state, obtain clean titles in states with lax requirements, then bring them back to California to sell. Always check NMVTIS to see complete title history across all states." }] },
  texas: { state: "Texas", stateCode: "TX", slug: "texas-vin-lookup", title: "Texas VIN Lookup - Free TX Stolen Vehicle Check | SafeOrStolen", metaDescription: "Free Texas VIN lookup. Check if a TX vehicle is stolen from DMV and available databases. Instant verification for all Texas vehicles.", topCities: ["Houston", "Dallas", "San Antonio"], dmvLink: "https://www.txdmv.gov", content: { intro: "Texas has significant vehicle theft activity, with Houston, Dallas, and San Antonio being areas of concern. Verify any Texas vehicle's VIN before purchase.", whyCheck: "Texas's large size and border location make it a potential target for vehicle theft. Stolen vehicles may be transported to other states or across the border. Texas DMV requires thorough verification.", localLaws: "Under Texas Penal Code § 31.03, theft of property (including vehicles) is a felony with penalties up to 10 years in prison. Possession of stolen vehicles carries severe penalties even for unknowing buyers." }, faqs: [{ question: "How do I verify a Texas title?", answer: "Check the Texas DMV website for title verification, use SafeOrStolen's VIN checker, and physically inspect the title certificate for security features." }, { question: "What should I know about buying cars in Texas?", answer: "Texas requires a VIN inspection for out-of-state vehicles. Always verify the VIN matches the title, check for liens, and verify against stolen vehicle databases before purchase." }] },
  florida: { state: "Florida", stateCode: "FL", slug: "florida-vin-lookup", title: "Florida VIN Lookup - Free FL Stolen Vehicle Check | SafeOrStolen", metaDescription: "Free Florida VIN lookup. Check if a FL vehicle is stolen from DMV and available databases. Verify cars, trucks, boats, and RVs.", topCities: ["Miami", "Jacksonville", "Tampa"], dmvLink: "https://www.flhsmv.gov", content: { intro: "Florida has notable vehicle theft activity, with Miami leading in theft rates. Verify any Florida vehicle's VIN against DHSMV and available databases.", whyCheck: "Florida's extensive coastline and ports make it an area of concern for stolen vehicle export. Flood-damaged vehicles from hurricanes are also sometimes title-washed and resold. Always verify complete history.", localLaws: "Under Florida Statutes § 812.014, dealing in stolen property is a felony. Possession of a stolen vehicle, even unknowingly, can result in vehicle confiscation and criminal charges." }, faqs: [{ question: "How do I check for flood damage in Florida vehicles?", answer: "Use SafeOrStolen's VIN checker which searches insurance total loss databases. Check for flood/salvage history, especially after hurricane seasons." }, { question: "What is Florida's title washing problem?", answer: "Flood-damaged vehicles from hurricanes are sometimes title-washed through other states and resold in Florida with clean titles. Always check NMVTIS for complete title history across all states." }] },
  newyork: { state: "New York", stateCode: "NY", slug: "new-york-vin-lookup", title: "New York VIN Lookup - Free NY Stolen Vehicle Check | SafeOrStolen", metaDescription: "Free New York VIN lookup. Check if a NY vehicle is stolen from DMV and available databases. Instant NYC and statewide verification.", topCities: ["New York City", "Buffalo", "Rochester"], dmvLink: "https://dmv.ny.gov", content: { intro: "New York has vehicle theft activity, with NYC accounting for a significant portion. Verify any NY vehicle's VIN before purchase to avoid stolen property.", whyCheck: "NYC's dense population and proximity to international ports may attract organized vehicle theft operations. NY DMV has strict verification requirements.", localLaws: "Under NY Penal Law § 165.45, criminal possession of stolen property in the first degree (vehicles over $1,000) is a class D felony punishable by up to 7 years in prison." }, faqs: [{ question: "How strict is NY DMV on title verification?", answer: "New York DMV requires thorough documentation and will reject suspicious titles. Use SafeOrStolen to pre-verify before attempting registration." }, { question: "What are common vehicle theft concerns in NYC?", answer: "Professional thieves may target high-end vehicles. Always verify VIN against theft databases, especially for luxury vehicles." }] },
  pennsylvania: { state: "Pennsylvania", stateCode: "PA", slug: "pennsylvania-vin-lookup", title: "Pennsylvania VIN Lookup - Free PA Stolen Vehicle Check | SafeOrStolen", metaDescription: "Free Pennsylvania VIN lookup. Check if a PA vehicle is stolen from DMV and available databases. Verify all Pennsylvania vehicles.", topCities: ["Philadelphia", "Pittsburgh", "Allentown"], dmvLink: "https://www.dmv.pa.gov", content: { intro: "Pennsylvania has vehicle theft activity, concentrated in Philadelphia and Pittsburgh metro areas. Verify PA vehicle VINs before buying.", whyCheck: "Pennsylvania's location between major metropolitan areas makes it a potential transit point for stolen vehicles moving between states. PA DMV requires verification for all title transfers.", localLaws: "Under 18 Pa. C.S. § 3925, receiving stolen property (including vehicles) is a felony. Even unknowing possession can result in vehicle confiscation and prosecution." }, faqs: [{ question: "How do I verify a Pennsylvania title?", answer: "Check PA NHTSA vehicle records, use SafeOrStolen's VIN checker for theft verification, and inspect the title for security features. Pennsylvania titles have distinctive watermarks and security threads." }, { question: "What should I know about Pennsylvania salvage titles?", answer: "Pennsylvania requires salvage vehicles to pass safety inspections before receiving rebuilt titles. Always check vehicle history to verify salvage status." }] },
  // Convert remaining states from old format to new format
  ...convertToNewFormat(ALL_STATE_VIN_DATA),
  ...convertToNewFormat(ALL_STATE_VIN_DATA_PART2),
  ...convertToNewFormat(ALL_STATE_VIN_DATA_PART3),
  ...convertToNewFormat(ALL_STATE_VIN_DATA_PART4),
  ...convertToNewFormat(STATE_VIN_DATA_PART5),
  ...convertToNewFormat(STATE_VIN_DATA_PART6),
  ...convertToNewFormat(STATE_VIN_DATA_PART7),
  ...convertToNewFormat(STATE_VIN_DATA_PART8),
  ...convertToNewFormat(STATE_VIN_DATA_PART9),
  ...convertToNewFormat(STATE_VIN_DATA_PART10),
};

export const ALL_50_STATES = Object.keys(COMPLETE_STATE_VIN_DATA);
export type { StateVinData };
