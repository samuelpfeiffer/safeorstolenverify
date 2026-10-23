import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * VIN Check Page - Real page for /vin-check URL
 * This is a separate page from /vin-checker with slightly different focus
 */
const VINCheckPage = () => {
 return (
 <ItemLandingPageTemplate
 title="VIN Check - Free Stolen Vehicle Verification | SafeOrStolen"
 metaDescription="Free VIN check to verify if any car, truck, or motorcycle is stolen. Decode the VIN, see open recalls and search theft reports. Verify before buying."
 h1="Free VIN Check - Verify Vehicle Not Stolen"
 itemType="Car"
 searchType="vin"
 searchPlaceholder="Enter the 17-character VIN"
 keywords={[
 'VIN check',
 'check VIN',
 'VIN lookup',
 'free VIN check',
 'VIN verification',
 'stolen car check',
 'vehicle VIN check',
 'car VIN lookup',
 'verify VIN number',
 'stolen vehicle check'
 ]}
 content={{
 intro: "Check any vehicle's VIN instantly to see if it has been reported stolen. Our free VIN check analyzes our stolen-item reports, public web information, and uses AI analysis to help ensure the car, truck, or motorcycle you're buying is clean and safe.",
 whatIs: "A VIN check is a verification that uses a vehicle's 17-character Vehicle Identification Number to determine if it's been reported stolen, salvaged, or has title issues. Every vehicle manufactured since 1981 has a unique VIN that's registered in national databases. Running a VIN check before buying a used vehicle protects you from purchasing stolen property, salvage frauds, or vehicles with hidden liens.",
 howItWorks: "Our VIN check analyzes available public information and our own reported stolen items instantly. Enter the 17-character VIN and we'll search: SafeOrStolen reports, public web results, and apply AI analysis. Within seconds, you'll know if the vehicle has any theft reports or red flags.",
 whyCheck: "Over 800,000 vehicles are stolen in the US each year. Many are sold to unsuspecting buyers who lose their money and the vehicle when police recover it. A stolen vehicle will be seized by law enforcement regardless of whether you paid for it, and you have no legal recourse to recover your money from the seller. A 30-second VIN check prevents this nightmare scenario.",
 benefits: [
 "Free VIN check with a free account",
 "Results in under 3 seconds",
 "Analyzes SafeOrStolen reports, public web results, and AI analysis for stolen vehicles",
 "Decodes year, make and model and lists open safety recalls",
 "Checks Arizona VINs against Arizona, Alaska and Chicago police stolen-vehicle records",
 "Works for cars, trucks, motorcycles, RVs, and trailers",
 "Available 24/7 on web and mobile app",
 "Protects against buying stolen vehicles"
 ],
 process: [
 "Find the VIN: Check the dashboard (driver's side), door jamb, or vehicle registration",
 "Enter the 17-character VIN in our verification tool",
 "Wait a few seconds while SafeOrStolen searches theft reports and public web results",
 "Review the result and the list of sources searched",
 "Before you pay, match the VIN to the title and ask the seller for proof of ownership"
 ],
 faqs: [
 {
 question: "Where do I find the VIN on a vehicle?",
 answer: "The VIN is located on a metal plate on the dashboard (visible through windshield on driver's side), on the driver's door jamb sticker, on the vehicle registration and title, and sometimes on the engine block. Always verify the VIN matches across all locations."
 },
 {
 question: "Is this VIN check really free?",
 answer: "Yes, SafeOrStolen gives you 1 free check, no account needed. Each VIN check searches SafeOrStolen theft reports and public web results, plus Arizona, Alaska and Chicago police stolen-vehicle records, and lists every source it searched."
 },
 {
 question: "What databases does the VIN check search?",
 answer: "The check decodes the VIN's year, make and model, lists open safety recalls, and searches SafeOrStolen's own theft reports filed by owners and public web results. Arizona VINs are also checked against Arizona, Alaska and Chicago police stolen-vehicle records. For title, odometer and accident history, also get a vehicle history report."
 },
 {
 question: "Is this the same as Carfax?",
 answer: "No. Carfax focuses on accident history and service records. SafeOrStolen focuses specifically on theft verification - whether the vehicle has been reported stolen. For buying used vehicles, you should run both a Carfax report AND a SafeOrStolen VIN check."
 },
 {
 question: "What if the VIN shows the vehicle is stolen?",
 answer: "Do not purchase the vehicle under any circumstances. The vehicle will be seized by law enforcement when discovered, you'll lose all money paid, and you could face criminal charges. Report the listing to local police."
 }
 ]
 }}
 />
 );
};

export default VINCheckPage;
