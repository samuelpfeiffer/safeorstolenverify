import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { OtherStatesModule } from '@/components/seo/StateLinksGrid';

const CaliforniaLicensePlateLookupPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="California License Plate Lookup - Check CA Stolen Vehicle by Plate"
 metaDescription="Free California license plate lookup. Check if a CA vehicle is reported stolen using SafeOrStolen reports, public web results, and AI analysis."
 h1="California License Plate Lookup - Check CA Vehicles"
 itemType="Vehicle"
 searchType="plate"
 searchPlaceholder="Enter the license plate number"
 keywords={[
 'california license plate lookup',
 'CA license plate search',
 'check california license plate stolen',
 'california stolen vehicle plate lookup'
 ]}
 content={{
 intro: "Verify California vehicles using license plate number in 3 seconds. Free California license plate lookup from SafeOrStolen reports, public web results, and AI analysis. Check vehicles in Los Angeles, San Francisco, San Diego.",
 whatIs: "California license plate lookup verifies whether a vehicle registered in California is reported stolen by checking the CA license plate number against SafeOrStolen's own reports, public web results, and AI analysis.",
 howItWorks: "Query SafeOrStolen's own reports, public web results, and AI analysis to determine a vehicle's stolen status. Receive results in 3 seconds.",
 whyCheck: "California has the largest used vehicle market. Screen vehicles quickly in LA, SF, SD. Verify seller is CA DMV registered owner.",
 benefits: [
 "Quick California vehicle screening",
 "Verify CA DMV registered owner",
 "Check California registration status",
 "Los Angeles, San Francisco, San Diego coverage",
 "Free California license plate lookup",
 "Instant 3-second results"
 ],
 process: [
 "Record California license plate number",
 "Enter CA plate into verification tool",
 "Review registered owner and theft status",
 "Verify owner matches seller",
 "Check VIN before purchase"
 ],
 faqs: [
 {
 question: "Can I check if a car is stolen in California using the license plate?",
 answer: "Yes, for initial screening in CA markets. Always verify VIN before final purchase."
 },
 {
 question: "Does this work in Los Angeles, San Francisco, and San Diego?",
 answer: "Yes, our California license plate lookup covers all cities statewide including LA, SF, SD."
 }
 ]
 }}
 />
 <OtherStatesModule kind="plate" currentPath="/california-license-plate-lookup" />
 </>
 );
};

export default CaliforniaLicensePlateLookupPage;