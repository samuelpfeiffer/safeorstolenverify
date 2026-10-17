// COMPLETE 50-STATE VIN DATA - ALL US STATES
// Oct 2026 audit: the five states below were rewritten by hand, and the automatic
// regex that used to strip theft numbers out of intros was removed. Every state file
// (allStateVinData*.ts) now has hand-written copy with no invented statistics, so the
// converter only moves topCities out of the legacy theftStats object.
// dmvLink is left empty on purpose (no outbound links).
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

// Convert the legacy format (topCities inside theftStats) to the StateVinData shape.
const convertToNewFormat = (data: Record<string, any>): Record<string, StateVinData> => {
 const converted: Record<string, StateVinData> = {};
 for (const [key, value] of Object.entries(data)) {
 const { theftStats, ...rest } = value;
 converted[key] = {
 ...rest,
 dmvLink: "",
 topCities: theftStats?.topCities || rest.topCities || [],
 };
 }
 return converted;
};

// Merge all state data (50 states total)
export const COMPLETE_STATE_VIN_DATA: Record<string, StateVinData> = {
 california: {
 state: "California", stateCode: "CA", slug: "california-vin-lookup",
 title: "California VIN Lookup - Free CA Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free California VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 topCities: ["Los Angeles", "Oakland", "San Francisco"],
 dmvLink: "",
 content: {
 intro: "Enter a California car's 17-character VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its own theft reports and public web results for that VIN.",
 whyCheck: "Most California private sales start on Marketplace, Craigslist or OfferUp and end in a parking lot. If the seller has no title in their name, the VIN sticker on the door jamb is missing, or the price is far under market, check the VIN before you go.",
 localLaws: "California Penal Code 496 makes it a crime to buy or keep property you know is stolen. A stolen car can be returned to its owner even if you paid for it. The California DMV handles titles and registration."
 },
 faqs: [
 { question: "How do I check if a California car is stolen?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com). In a few seconds you see the decoded vehicle, open recalls, and whether the VIN appears in SafeOrStolen theft reports or public web results. Then match the VIN on the dash, door jamb and title, and check the seller's ID against the title." },
 { question: "Does SafeOrStolen search California DMV records?", answer: "No. SafeOrStolen searches its own theft reports and public web results and decodes the VIN. For title, lien or registration status, contact the California DMV. Out-of-state cars also need a VIN verification before California will register them." }
 ]
 },
 texas: {
 state: "Texas", stateCode: "TX", slug: "texas-vin-lookup",
 title: "Texas VIN Lookup - Free TX Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Texas VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 topCities: ["Houston", "Dallas", "San Antonio"],
 dmvLink: "",
 content: {
 intro: "Type a Texas vehicle's VIN into SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results for that VIN.",
 whyCheck: "Pickups sell privately all over Texas, often for cash. Houston, Dallas and San Antonio buyers see cars from every neighboring state. A seller without a title in their name, or a truck with a damaged ignition, is the time to check the VIN.",
 localLaws: "Texas Penal Code 31.03 covers theft, including keeping property you know is stolen. A stolen vehicle can be returned to its owner even if you paid for it. Titles go through your county tax assessor-collector for the Texas DMV."
 },
 faqs: [
 { question: "How do I verify a Texas title?", answer: "Check that the VIN on the title matches the dash plate and door sticker, and that the seller's name matches their ID. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports and recalls. Ask your county tax office about liens and title status." },
 { question: "What should I check when buying a used truck in Texas?", answer: "Match the VIN on the truck and title, look for a punched ignition, mismatched keys or fresh paint over VIN stickers, and run the VIN on SafeOrStolen before you pay. Near the Gulf Coast, also check for flood damage under the carpets." }
 ]
 },
 florida: {
 state: "Florida", stateCode: "FL", slug: "florida-vin-lookup",
 title: "Florida VIN Lookup - Free FL Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Florida VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 topCities: ["Miami", "Jacksonville", "Tampa"],
 dmvLink: "",
 content: {
 intro: "Enter a Florida vehicle's VIN and SafeOrStolen decodes the year, make and model, lists open safety recalls, and checks its theft reports and public web results for that VIN.",
 whyCheck: "After every hurricane season, water-damaged cars get dried out and resold, sometimes far from where they flooded. A VIN check tells you if the car has a theft report or online listings with a different story. Check the car itself for silt, rust on seat bolts and a musty smell.",
 localLaws: "Florida Statutes 812.014 covers theft, and dealing in stolen property is a separate crime. A stolen car can be returned to its owner even after you paid. FLHSMV handles titles through county tax collector offices."
 },
 faqs: [
 { question: "How do I check a Florida car for flood damage?", answer: "Look at the car: silt or water lines under the carpet and in the trunk, rusty seat bolts, fogged lights and a musty smell. Buy a vehicle history report for title brands, and run the VIN on SafeOrStolen (safeorstolen.com) for theft reports." },
 { question: "How do I check if a car is stolen in Miami?", answer: "Run the VIN on SafeOrStolen to decode it, see open recalls, and search SafeOrStolen theft reports and public web results. Match the VIN on the dash, door jamb and title, and check the seller's ID against the title before you pay." }
 ]
 },
 newyork: {
 state: "New York", stateCode: "NY", slug: "new-york-vin-lookup",
 title: "New York VIN Lookup - Free NY Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free New York VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before buying.",
 topCities: ["New York City", "Buffalo", "Rochester"],
 dmvLink: "",
 content: {
 intro: "Run a New York vehicle's VIN on SafeOrStolen to decode the year, make and model, see open safety recalls, and search SafeOrStolen theft reports and public web results.",
 whyCheck: "Cars sold around New York City often come from New Jersey, Connecticut or Pennsylvania, and luxury SUVs are frequent theft targets. Check the VIN and make sure the seller's name is on the title before you meet.",
 localLaws: "New York Penal Law treats possessing stolen property as a crime, graded by value. A stolen car can be returned to its owner even if you paid for it. The New York DMV handles titles and registration."
 },
 faqs: [
 { question: "How do I check if a car is stolen in New York?", answer: "Run the VIN on SafeOrStolen (safeorstolen.com). In a few seconds you see the decoded vehicle, open recalls, and whether the VIN shows up in SafeOrStolen theft reports or public web results. Then match the VIN on the car and title and check the seller's ID." },
 { question: "Does SafeOrStolen search New York DMV records?", answer: "No. SafeOrStolen searches its own theft reports and public web results and decodes the VIN. For title, lien or registration questions, contact the New York DMV before you pay." }
 ]
 },
 pennsylvania: {
 state: "Pennsylvania", stateCode: "PA", slug: "pennsylvania-vin-lookup",
 title: "Pennsylvania VIN Lookup - Free PA Stolen Vehicle Check | SafeOrStolen",
 metaDescription: "Free Pennsylvania VIN lookup. Decode the vehicle, see open recalls, and check SafeOrStolen theft reports and public web results in a few seconds before you buy.",
 topCities: ["Philadelphia", "Pittsburgh", "Allentown"],
 dmvLink: "",
 content: {
 intro: "Type a Pennsylvania car's VIN and SafeOrStolen decodes the year, make and model, shows open safety recalls, and searches its theft reports and public web results for that VIN.",
 whyCheck: "Philadelphia buyers see cars from New Jersey and Delaware, and Pittsburgh buyers see cars from Ohio and West Virginia. Pennsylvania title transfers are done at a notary or tag service, so a seller who won't go there with you is a red flag.",
 localLaws: "Pennsylvania law (18 Pa. C.S. 3925) makes receiving stolen property a crime. A stolen car can be returned to its owner even if you paid for it. PennDOT handles titles, usually through an authorized tag and title service."
 },
 faqs: [
 { question: "How do I verify a Pennsylvania title?", answer: "Check that the VIN on the title matches the dash plate and door sticker, and that the seller's name matches their ID. Complete the transfer at a notary or tag service. Run the VIN on SafeOrStolen (safeorstolen.com) for theft reports. For title questions, contact PennDOT." },
 { question: "What should I check when buying a used car in Philadelphia?", answer: "Run the VIN on SafeOrStolen for theft reports and recalls, match it on the dash and door jamb, and look underneath for rust from road salt. Ask PennDOT about liens, and buy a history report if you want accident or title-brand records." }
 ]
 },
 // Remaining states from the hand-written state files
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
