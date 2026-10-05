import { BusinessLandingTemplate } from '@/components/landing/BusinessLandingTemplate';

const ForLawEnforcement = () => {
 return (
 <BusinessLandingTemplate
 title="Law Enforcement Property Verification | SafeOrStolen"
 metaDescription="Verify recovered property and track stolen items. IMEI, VIN, serial number lookup tools for police departments. Fast results."
 h1="Law Enforcement Property Verification Tools"
 keywords={[
 'law enforcement stolen property',
 'police imei lookup',
 'stolen property database',
 'law enforcement vin check',
 'police serial number lookup',
 'recovered property verification',
 'stolen goods tracking',
 'evidence verification'
 ]}
 canonical="/for-law-enforcement"
 businessType="Law Enforcement"
 industryName="Law Enforcement"
  heroSubtitle="Check recovered property against SafeOrStolen reports, public web results, and AI analysis. Results identify possible matches for further investigation."
 heroBadge="Law Enforcement Solutions"
 challenges={[
 {
 title: "Property Identification",
 description: "Recovered items without clear ownership indicators are difficult to return to victims."
 },
 {
 title: "Database Fragmentation",
 description: "Stolen property is reported to many different databases. Searching each is time-consuming."
 },
 {
 title: "Cross-Jurisdiction Cases",
 description: "Items stolen in one jurisdiction often surface in another, making tracking difficult."
 }
 ]}
 features={[
 {
 title: "Unified Database Search",
 description: "Search multiple stolen property databases simultaneously with one query."
 },
 {
 title: "Mobile-Friendly",
 description: "Officers can verify property in the field using our mobile app or responsive web interface."
 },
 {
 title: "Victim Notification",
 description: "When stolen property is verified, we can help connect with the registered owner."
 },
 {
 title: "Evidence Documentation",
 description: "Generate verification reports for case files and court documentation."
 },
 {
 title: "Batch Processing",
 description: "Verify multiple items from a seizure or recovery operation at once."
 },
 {
 title: "Historical Records",
 description: "Access verification history for ongoing investigations and audits."
 }
 ]}
 benefits={[
 {
 stat: "Instant",
 title: "Field Verification",
 description: "Officers can verify property status in seconds during traffic stops or investigations."
 },
 {
  stat: "6",
  title: "Item Categories",
  description: "Check phones, vehicles, plates, serial-numbered goods, firearms, and bicycles."
 },
 {
 stat: "24/7",
 title: "Availability",
 description: "System available around the clock for officers in the field."
 }
 ]}
 integrationInfo={{
 title: "Department Integration",
 description: "Connect to your records management system",
 features: [
 "CAD/RMS integration available",
 "Mobile app for field use",
 "Secure API access",
 "CJIS-compliant options",
 "Training and onboarding support",
 "Dedicated law enforcement liaison"
 ]
 }}
 pricingNote="Special pricing available for law enforcement agencies. Contact us for department rates and pilot programs."
 faqs={[
 {
 question: "What databases do you search?",
 answer: "We analyze information from publicly available web sources, user-reported theft incidents, and our own AI systems. Gun serials are also searched against police theft and loss reports from 34 states plus live Ohio records, and bikes against a national stolen-bicycle registry. SafeOrStolen does not access NCIC."
 },
 {
 question: "Can officers use this in the field?",
 answer: "Yes! Our mobile app and responsive website work on any smartphone or MDT, allowing instant verification during traffic stops or investigations."
 },
 {
 question: "How do you help return property to owners?",
 answer: "When property is registered with us and later recovered, we can facilitate connection between law enforcement and the rightful owner."
 },
 {
 question: "Is there special pricing for law enforcement?",
 answer: "Yes, we offer special rates for police departments and law enforcement agencies. Contact us for department pricing."
 }
 ]}
 ctaTitle="Equip Your Department"
 ctaDescription="Contact us for a demonstration and law enforcement pricing."
 />
 );
};

export default ForLawEnforcement;
