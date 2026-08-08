import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const FirearmSerialCheck = () => {
 return (
 <SEOLandingPageTemplate
 title="Check if Firearm is Stolen - Gun Serial Number Lookup | SafeOrStolen"
 metaDescription="Verify any firearm isn't stolen before buying. Free gun serial number check against stolen firearms database. Protect yourself legally. Instant results."
 h1="Check if Firearm is Stolen - Free Serial Number Lookup"
 keywords={[
 'check if gun is stolen',
 'firearm serial number lookup',
 'stolen gun database',
 'gun serial check',
 'verify firearm not stolen',
 'stolen firearms check',
 'pistol stolen check',
 'rifle serial number lookup',
 'handgun verification',
 'firearm theft check'
 ]}
 canonical="/check-firearm-stolen"
 itemType="Firearm"
 identifierType="Serial Number"
 heroBadge="Firearm Verification"
 heroSubtitle="Buying a stolen firearm has serious legal consequences. Before any private sale, verify the serial number isn't in stolen firearms databases. Free instant check."
 stats={[
 { value: "380K+", label: "Guns Stolen Yearly" },
 { value: "3 sec", label: "Verification Time" },
 { value: "50M+", label: "Records Searched" },
 { value: "Free", label: "First 2 Checks" }
 ]}
 whatIsTitle="What is Firearm Serial Number Verification?"
 whatIsContent="Every firearm manufactured after 1968 has a unique serial number. When stolen, firearms are reported by police to the FBI' Buying a stolen firearm, even unknowingly, can result in federal charges. Our check queries stolen firearms databases and analyzes the serial number for signs of alteration or obliteration."
 howItWorksSteps={[
 "Find the serial number: Usually on the frame/receiver, often on the right side or under the barrel",
 "Enter the serial number into our free verification tool",
 "Our system searches available stolen firearm databases and law enforcement records",
 "Get instant results - know if the firearm has been reported stolen"
 ]}
 whyVerifyTitle="Why Verify Firearms Before Buying?"
 whyVerifyContent="Over 380,000 firearms are stolen annually in the US. Possessing a stolen firearm is a federal crime, even if you didn't know it was stolen. The legal consequences are severe."
 whyVerifyBenefits={[
 "Federal crime to possess a stolen firearm - up to 10 years in prison",
 "Law enforcement traces all recovered firearms by serial number",
 "Stolen firearms are NEVER returned to buyers - confiscated permanently",
 "Criminal charges even if you didn't know it was stolen",
 "No legal recourse to recover your money",
 "Firearms used in crimes are traced back to current possessor",
  "Private sales carry the highest risk of stolen firearms"
 ]}
 faqs={[
 {
 question: "Where is the serial number on a firearm?",
 answer: "Serial numbers are typically on the frame/receiver. For pistols, check the frame near the trigger guard. For rifles/shotguns, check the receiver. Some have it on the barrel as well."
 },
 {
 question: "Is it illegal to buy a stolen gun?",
 answer: "Yes! Under federal law (18 U.S.C. § 922(j)), possessing a stolen firearm is a crime punishable by up to 10 years in prison, even if you didn't know it was stolen."
 },
 {
 question: "What happens if I'm caught with a stolen gun?",
 answer: "The firearm will be confiscated. You may face federal charges. You'll lose your money with no legal recourse. It can affect your ability to legally own firearms."
 },
 {
 question: "Should I verify at gun shows?",
 answer: "Absolutely. Private sales at gun shows carry risk. Always verify the serial number before completing any firearm purchase outside a licensed dealer."
 }
 ]}
 ctaTitle="Protect Yourself Legally - Verify Before Buying"
 ctaDescription="A free serial number check takes 3 seconds and could save you from federal charges."
 relatedLinks={[
 { title: "Firearms Check Main", href: "/firearms-check" },
 { title: "Serial Number Checker", href: "/serial-number-checker" },
 { title: "Facebook Marketplace", href: "/facebook-marketplace-stolen-check" }
 ]}
 />
 );
};

export default FirearmSerialCheck;
