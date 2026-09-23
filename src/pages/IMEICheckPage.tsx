import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * IMEI Check Page - Real page for /imei-check URL
 * This is a separate page from /imei-checker with slightly different focus
 */
const IMEICheckPage = () => {
 return (
 <ItemLandingPageTemplate
 title="IMEI Check - Free Phone Stolen Status Verification | SafeOrStolen"
 metaDescription="Free IMEI check to verify if any phone is stolen, blacklisted, or safe to buy. Check IMEI number instantly against global databases. Works for iPhone, Samsung, all phones."
 h1="Free IMEI Check - Verify Phone Status Instantly"
 itemType="Phone"
 keywords={[
 'IMEI check',
 'check IMEI',
 'IMEI lookup',
 'free IMEI check',
 'IMEI verification',
 'check phone IMEI',
 'IMEI stolen check',
 'phone IMEI lookup',
 'verify IMEI number',
 'IMEI blacklist check'
 ]}
 content={{
 intro: "Check any phone's IMEI number instantly to verify its model and details. Our free IMEI lookup provides details about the device to help you make an informed decision.",
 whatIs: "An IMEI check is a verification process that uses a phone's unique 15-digit identifier to determine its status. Every mobile phone has a unique IMEI (International Mobile Equipment Identity) number that can be checked against global databases to see if the device has been reported stolen, lost, blacklisted by carriers, or has outstanding finance. Running an IMEI check before buying a used phone protects you from purchasing a device that could be remotely disabled, confiscated, or unusable.",
 howItWorks: "Our IMEI lookup works instantly by querying publicly available device information. Enter the 15-digit IMEI number and within seconds, we'll provide device details, potential alerts from our stolen-item reports, and public web results. You'll receive a comprehensive report showing exactly what we found.",
 whyCheck: "In 2024, over 2.4 million smartphones were reported stolen in the US alone. Many of these end up on secondhand marketplaces. Buying a stolen phone means: the original owner can remotely lock or wipe it, carriers will blacklist it making it unusable, the relevant authorities can confiscate it, and you could face criminal possession charges. A quick IMEI check before purchase prevents all these problems.",
 benefits: [
 "Free IMEI check with a free account",
 "Results in under 3 seconds",
 "Checks SafeOrStolen's reports and public web results",
 "Verifies blacklist and stolen status",
 "Shows finance/lease obligations",
 "Works for iPhone, Samsung, Google, and all phones",
 "Available 24/7 on web and installable web app",
 "Protects against buying stolen property"
 ],
 process: [
 "Find the IMEI: Dial *#06# on the phone, or go to Settings > About Phone > IMEI",
 "Enter the 15-digit IMEI number in our verification tool",
 "Wait 3 seconds while we check global databases",
 "Review your comprehensive status report",
 "Only proceed with purchase if status shows CLEAN"
 ],
 faqs: [
 {
 question: "How do I find a phone's IMEI number?",
 answer: "Dial *#06# on any phone to display the IMEI. Alternatively, check Settings > About Phone > IMEI. On iPhone, go to Settings > General > About. The IMEI is also printed on the original box and on the SIM tray."
 },
 {
 question: "Is this IMEI check really free?",
 answer: "Yes, SafeOrStolen offers a free IMEI check with basic verification. This shows stolen/blacklist status and gives you essential information to make a safe purchase decision."
 },
 {
 question: "What databases does the IMEI check search?",
 answer: "We check SafeOrStolen's own stolen-item reports and public web results for comprehensive coverage."
 },
 {
 question: "What if the IMEI shows blacklisted?",
 answer: "Do not purchase the phone. A blacklisted IMEI means the phone has been reported stolen, lost, or has unpaid finance. It will be unusable on carrier networks and could be confiscated by police."
 },
 {
 question: "Can I check IMEI before meeting a seller?",
 answer: "Yes! Ask the seller for the IMEI number before meeting. Run our free IMEI check first. If they refuse to provide the IMEI, that's a major red flag - walk away from the deal."
 }
 ]
 }}
 />
 );
};

export default IMEICheckPage;
