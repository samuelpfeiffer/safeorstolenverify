import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const CheckIfStolenPage = () => {
 return (
 <ItemLandingPageTemplate
 title="Check If Item Is Stolen - Instant Verification | SafeOrStolen"
 metaDescription="AI-powered stolen item checker. Verify phones, cars, bikes, electronics, and tools before buying. $0.99 per check or $10/month unlimited."
 h1="Check If An Item Is Stolen"
 itemType="Any Item"
 keywords={[
 'check if stolen',
 'is this stolen',
 'stolen item checker',
 'verify not stolen',
 'check stolen status',
 'free stolen check',
 'is it stolen'
 ]}
 content={{
 intro: "Enter any identifier to check against our verification databases. SafeOrStolen verifies phones, vehicles, license plates, bicycles, firearms, and serial-numbered goods including electronics, power tools, and appliances. Instant verification for buyers, sellers, and businesses - protect yourself before any secondhand transaction.",
 
 whatIs: "Checking if an item is stolen means verifying the item hasn't been reported as lost, stolen, or fraudulently obtained. Every valuable item has a unique identifier - IMEI for phones, VIN for vehicles, serial numbers for electronics, power tools, and appliances. SafeOrStolen checks these identifiers against community theft registries, carrier and theft databases, theft reports, and user-reported theft registries to determine if an item is safe to buy.",
 
 howItWorks: "Our universal stolen item checker works with any identifier: (1) Enter the serial number, IMEI, VIN, or license plate, (2) We automatically detect the identifier type and search the appropriate databases, (3) For phones: carrier and theft databases, activation locks, (4) For vehicles: community theft reports, vehicle theft and title databases, title history, (5) For electronics: manufacturer databases, user reports, police records, (6) You receive instant results showing clean status or any red flags.",
 
 whyCheck: "Buying stolen property can result in losing your money AND facing criminal charges. You have no legal ownership of stolen goods - they can be confiscated by police at any time with zero compensation. Phones get blacklisted and become useless. Cars get impounded. Electronics get seized. Protect yourself with a verification before any secondhand purchase. SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited.",
 
 benefits: [
 "Check phones - iPhone, Samsung, Android, any IMEI",
 "Check cars - VIN verification against and stolen property reports",
 "Check bikes - serial number lookup for bicycles",
 "Check laptops - MacBook, Dell, HP serial verification",
 "Check power tools - DeWalt, Milwaukee, Makita, Bosch",
 "Check appliances - washers, dryers, refrigerators",
 "Check electronics - gaming consoles, cameras, tablets",
 "Check firearms - serial number verification",
 "Check jewelry - designer watches, luxury items",
 "Unlimited verifications — $10/month",
 "Instant 3-second results"
 ],
 
 process: [
 "Find the identifier: IMEI (*#06# on phones), VIN (dashboard/door), serial number (label/settings)",
 "Enter any identifier into our verification tool",
 "We automatically detect the type and search appropriate databases",
 "Review the instant report showing stolen status and any red flags",
 "Only buy if the report shows CLEAN status"
 ],
 
 faqs: [
 {
 question: "What types of items can SafeOrStolen check?",
 answer: "SafeOrStolen can verify almost any valuable item: Phones (iPhone, Samsung, Android), Vehicles (cars, trucks, motorcycles, boats), Bicycles, Laptops and tablets, Gaming consoles (PS5, Xbox, Nintendo Switch), Cameras and equipment, Power tools, Firearms, Watches and jewelry. If it has a serial number, IMEI, or VIN, we can check it."
 },
 {
 question: "How do I find the serial number or identifier?",
 answer: "For phones: Dial *#06# or check Settings > About. For vehicles: VIN is on the dashboard (driver side) or door jamb. For electronics: Check the bottom, back, or Settings > About. For bikes: Serial number is under the bottom bracket. For firearms: Serial number is on the frame/receiver. We have specific guides for each item type."
 },
 {
 question: "How much does the stolen item check cost?",
 answer: "SafeOrStolen offers 2 free checks, then $0.99 per check or $10/month unlimited. This covers all item types — phones, cars, bikes, electronics, firearms, and more. Cancel anytime. 30-day money-back guarantee."
 },
 {
 question: "What should I do if an item shows as stolen?",
 answer: "Do NOT buy the item. Walk away immediately without confronting the seller. Report the listing to the platform (Facebook Marketplace, Craigslist, etc.). Consider reporting to local police. If you already purchased a stolen item, contact police immediately - you're a victim of fraud."
 }
 ]
 }}
 />
 );
};

export default CheckIfStolenPage;
