import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { OtherStatesModule } from '@/components/seo/StateLinksGrid';

const IllinoisLicensePlateLookupPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="Illinois License Plate Lookup - Check IL Stolen Vehicle by Plate"
 metaDescription="Free Illinois license plate lookup. Check an IL plate against SafeOrStolen theft reports and public web results in a few seconds before you buy. No owner names shown."
 h1="Illinois License Plate Lookup - Check IL Vehicles"
 itemType="Vehicle"
 searchType="plate"
 searchPlaceholder="Enter the license plate number"
 keywords={[
 'illinois license plate lookup',
 'IL license plate search',
 'check illinois license plate stolen',
 'illinois stolen vehicle plate lookup',
 'verify IL plate number',
 'illinois dmv plate lookup',
 'chicago vehicle check',
 'aurora stolen car check',
 'naperville plate lookup'
 ]}
 content={{
 intro: "Enter an Illinois plate and SafeOrStolen searches its own theft reports and public web results for it in a few seconds. Use it to screen a car from a Chicago, Aurora, Rockford or Naperville seller before you go see it, then run the VIN too. It never shows the owner's name.",
 whatIs: "An Illinois license plate lookup on SafeOrStolen tells you whether an IL plate appears in SafeOrStolen theft reports, filed by owners, or in public web results such as listings and posts. Every source is listed with the result, and owner names and addresses are never shown.",
 howItWorks: "Type the plate exactly as shown, letters and numbers only, and pick Illinois. SafeOrStolen searches its theft reports and public web results and returns reported stolen, possible match, or no report found in the records searched. The check is saved to your account with the date. For year, make, model and open recalls, run the VIN from the dashboard or driver's door jamb.",
 whyCheck: "Plates are easy to move from one car to another, so check the VIN as well as the plate. Chicago's used-car market moves fast, and cars cross into Indiana and Wisconsin easily. Check the plate before you drive out, check the VIN when you see the car, and make sure the name on the Illinois title matches the seller's ID.",
 benefits: [
 "1 free check, no account or credit card needed",
 "Searches SafeOrStolen theft reports and public web results",
 "Results in a few seconds, with every source listed",
 "Never shows owner names or addresses",
 "Each check saved to your account with the date",
 "Run the VIN next for year, make, model and open recalls",
 "Then $0.99 for 2 checks or $10 a month unlimited"
 ],
 process: [
 "Write down the plate exactly; Illinois issues front and rear plates, so make sure they match",
 "Enter the plate, choose Illinois, and run the check",
 "Read the result and the sources searched",
 "Ask the seller for the VIN and check it too",
 "At the car, match the VIN on the dashboard and door jamb to the title",
 "Confirm the name on the Illinois title matches the seller's ID before paying"
 ],
 faqs: [
 {
 question: "What is the most accurate license plate search in Illinois?",
 answer: "For a stolen check, SafeOrStolen: enter the plate and it searches SafeOrStolen's theft reports, police stolen-vehicle and stolen-plate records from Arizona, Alaska and Chicago, and public web results in seconds, for a plate from any state, with your first check free. No legitimate public site can show a plate owner's name or address, because federal privacy law keeps that private. Run the VIN too, since plates can be swapped between cars. Chicago Police stolen-vehicle and stolen-plate records are searched on every check. It works the same in Chicago, Aurora, Naperville, Rockford and every other Illinois city.",
 },
 {
 question: "Can I check if a car is stolen in Illinois using just the license plate?",
 answer: "You can screen it. SafeOrStolen (safeorstolen.com/illinois-license-plate-lookup) searches its theft reports and public web results for an Illinois plate in a few seconds. Plates can be moved between cars, though, so also check the VIN and make sure it matches the dashboard, door jamb and title before you buy."
 },
 {
 question: "How do I find a vehicle's Illinois license plate number?",
 answer: "Illinois issues plates for the front and rear of most passenger vehicles. Write down every letter and number and check that the front and rear plates match. If they don't match, or the seller won't share the plate before you meet, treat it as a warning sign."
 },
 {
 question: "What information can I get from an Illinois license plate lookup?",
 answer: "On SafeOrStolen, you see whether the plate appears in SafeOrStolen theft reports or public web results, with each source listed. Owner names, addresses and registration details are never shown; the Illinois Secretary of State keeps those, and access is restricted under the federal Driver's Privacy Protection Act."
 },
 {
 question: "How much does an Illinois license plate lookup cost?",
 answer: "Your first 2 SafeOrStolen checks are free with no account or credit card needed. After that it's $0.99 for 2 checks or $10 a month for unlimited checks, cancel anytime. The same account checks VINs, so you can run the plate and the VIN on the same car."
 },
 {
 question: "What does SafeOrStolen search for an Illinois plate?",
 answer: "SafeOrStolen searches its own theft reports and public web results, and lists every source with the result. For title or lien questions, contact the Illinois Secretary of State. To confirm a theft report, call local police."
 },
 {
 question: "What if the name on the title doesn't match the seller?",
 answer: "Ask why before going any further. Someone selling a car that isn't titled in their name may be flipping cars without registering as a dealer, or the car may not be theirs to sell. Ask for the title, a bill of sale from the previous owner and ID, and walk away if the story doesn't hold up."
 },
 {
 question: "Does SafeOrStolen work for plates from anywhere in Illinois?",
 answer: "Yes. You can check a plate from Chicago, Aurora, Rockford, Naperville, Joliet, Springfield, Peoria or anywhere else in the state. The sources are the same everywhere: SafeOrStolen theft reports and public web results."
 }
 ]
 }}
 />
 <OtherStatesModule kind="plate" currentPath="/illinois-license-plate-lookup" />
 </>
 );
};

export default IllinoisLicensePlateLookupPage;
