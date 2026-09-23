import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const TheftAZPage = () => {
 return (
 <ItemLandingPageTemplate
 title="TheftAZ Stolen Property Search — Arizona Alternative | SafeOrStolen"
 metaDescription="Search Arizona stolen property records plus multiple sources. Check phones, vehicles, license plates, serial numbers, firearms and bicycles in one place. 2 free checks."
 h1="TheftAZ - Arizona Stolen Property Search"
 itemType="Arizona Stolen Property"
 keywords={[
 'theftaz',
 'theftaz.azag.gov',
 'arizona stolen property database',
 'arizona attorney general stolen property',
 'theftaz search',
 'arizona stolen vehicle database',
 'az stolen gun search'
 ]}
 content={{
 intro: "TheftAZ is the Arizona Attorney General's official stolen property database. SafeOrStolen searches TheftAZ as one of multiple sources we check, giving you comprehensive stolen property verification for Arizona. Free instant search for vehicles, firearms, electronics, and tools.",
 
 whatIs: "TheftAZ (theftaz.azag.gov) is the official stolen property database maintained by the Arizona Attorney General's Office. It contains records of vehicles, firearms, electronics, tools, and other property reported stolen throughout Arizona. Law enforcement agencies, pawn shops, and the public can search TheftAZ to verify if items are stolen. SafeOrStolen integrates TheftAZ data with multiple sources for comprehensive verification.",
 
 howItWorks: "When you search through SafeOrStolen, we check TheftAZ, our internal reports, and public web results. For bicycles, we also check BikeIndex, and for firearms, HotGunz. If you provide an IMEI, we will also lookup phone model details. This gives you comprehensive results from Arizona's official stolen property registry PLUS additional sources in one instant search. Enter any identifier (VIN, serial number, IMEI) and we'll check all relevant sources automatically.",
 
 whyCheck: "Arizona has significant stolen property issues due to its proximity to California (source of many stolen vehicles) and the Mexico border (trafficking route). TheftAZ helps Arizonans verify items before buying. Whether you're in Phoenix, Tucson, Mesa, or anywhere in AZ, checking TheftAZ protects you from unknowingly buying stolen goods and the legal consequences that follow.",
 
 benefits: [
 "Search Arizona's official TheftAZ database",
 "Quickly check official records and multiple sources",
 "Arizona stolen vehicle verification",
 "Arizona stolen firearm search",
 "Electronics and tools verification",
 "Free instant results in 3 seconds",
 "Phoenix, Tucson, Mesa statewide coverage",
 "Mobile app for on-the-go verification"
 ],
 
 process: [
 "Get the identifier: VIN for vehicles, serial number for guns/electronics",
 "Enter the identifier into SafeOrStolen's verification tool",
 "We search TheftAZ and multiple sources simultaneously",
 "Review results showing Arizona and nationwide stolen status",
 "Verify clean status before purchasing"
 ],
 
 faqs: [
 {
 question: "What is TheftAZ and who runs it?",
 answer: "TheftAZ (theftaz.azag.gov) is the official stolen property database operated by the Arizona Attorney General's Office. It contains records of stolen vehicles, firearms, electronics, tools, and other property reported to Arizona law enforcement agencies. It's one of the most comprehensive state-level stolen property databases in the US."
 },
 {
 question: "What types of property does TheftAZ track?",
 answer: "TheftAZ tracks: Vehicles (cars, trucks, motorcycles, trailers, boats), Firearms (all types), Electronics (phones, laptops, tablets, gaming consoles), Power tools, Construction equipment, Bicycles, Jewelry and watches, Musical instruments, and other valuable property reported stolen in Arizona."
 },
 {
 question: "Can I search TheftAZ directly?",
 answer: "Yes, TheftAZ is publicly accessible at theftaz.azag.gov. However, SafeOrStolen checks more sources by searching TheftAZ PLUS our internal reports, public web results, and AI analysis in one search. For bicycles, we also check BikeIndex, and for firearms, HotGunz. If you provide an IMEI, we will also lookup phone model details. This ensures you're checking both Arizona records AND other relevant sources for a comprehensive view."
 },
 {
 question: "Should I check TheftAZ before buying a used car in Arizona?",
 answer: "Absolutely. Arizona has high rates of vehicle theft and receives many stolen vehicles from neighboring California. Always verify through TheftAZ and other databases before purchasing. SafeOrStolen makes this easy with our free Arizona license plate lookup and VIN checker."
 },
 {
 question: "Does TheftAZ work for checking stolen guns in Arizona?",
 answer: "Yes, TheftAZ contains firearm theft records from Arizona law enforcement."
 }
 ]
 }}
 />
 );
};

export default TheftAZPage;
