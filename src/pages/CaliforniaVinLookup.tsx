import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';

const CaliforniaVinLookup = () => {
 return (
 <StateVinPageTemplate
 state="California"
 stateCode="CA"
 title="California VIN Lookup - Free CA Stolen Vehicle Check | SafeOrStolen"
 metaDescription="Free California VIN lookup. Check if a CA vehicle is stolen from DMV and community theft registries. Instant verification for cars, trucks, and motorcycles."
 topCities={["Los Angeles", "Oakland", "San Francisco"]}
 dmvLink="https://www.dmv.ca.gov"
 content={{
 intro: "California has a significant vehicle theft problem. Verify any CA vehicle's VIN against available databases before buying.",
 whyCheck: "California is known for high vehicle theft rates, particularly in major metropolitan areas like Los Angeles, Oakland, and San Francisco. Stolen vehicles are sometimes title washed through other states and resold. Always verify VIN records before purchase.",
 localLaws: "Under California Penal Code 496, possession of stolen property (including vehicles) is a crime punishable by up to 1 year in jail even if you didn't know it was stolen. California DMV requires thorough title verification and will reject stolen vehicle registrations."
 }}
 faqs={[
 {
 question: "How do I check if a California car is stolen?",
 answer: "Use SafeOrStolen's free VIN checker to search available databases. Also verify the California title certificate is genuine and matches the VIN on the vehicle."
 },
 {
 question: "What is California's title washing problem?",
 answer: "Thieves steal California vehicles, transport them out of state, obtain clean titles in states with different requirements, then bring them back to California to sell. Always check vehicle theft and title databases to see title history across states."
 }
 ]}
 />
 );
};

export default CaliforniaVinLookup;