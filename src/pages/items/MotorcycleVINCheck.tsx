import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const MotorcycleVINCheck = () => {
 return (
 <SEOLandingPageTemplate
 title="Check if Motorcycle is Stolen by VIN - Free Verification | SafeOrStolen"
 metaDescription="Verify any motorcycle isn't stolen before buying. Free VIN check for Harley-Davidson, Honda, Yamaha, Kawasaki. Search stolen motorcycle database instantly."
 h1="Check if Motorcycle is Stolen - Free VIN Verification"
 keywords={[
 'motorcycle stolen check',
 'motorcycle vin lookup',
 'stolen motorcycle database',
 'harley davidson vin check',
 'honda motorcycle stolen',
 'yamaha vin verification',
 'kawasaki stolen check',
 'used motorcycle verification',
 'check if bike is stolen',
 'motorcycle theft check'
 ]}
 canonical="/check-motorcycle-stolen"
 itemType="Motorcycle"
 identifierType="VIN"
 heroBadge="Motorcycle Theft Verification"
 heroSubtitle="Before buying a used Harley-Davidson, Honda, Yamaha, or any motorcycle, verify the VIN isn't linked to stolen property. Motorcycles are stolen at 2x the rate of cars. Free instant check."
 stats={[
 { value: "40K+", label: "Motorcycles Stolen Yearly" },
 { value: "3 sec", label: "VIN Check Time" },
 { value: "100+", label: "Records Searched" },
 { value: "Free", label: "First 2 Checks" }
 ]}
 whatIsTitle="What is Motorcycle VIN Verification?"
 whatIsContent="Every motorcycle has a 17-character VIN (Vehicle Identification Number) stamped on the frame. When stolen, this VIN is reported to vehicle theft and title databases, and community theft registries. Motorcycles are stolen at nearly twice the rate of cars, making verification essential. Our service checks these databases to ensure you're not buying stolen property."
 howItWorksSteps={[
 "Find the VIN: Usually on the steering neck (right side), frame near the engine, or on registration documents",
 "Enter the 17-character VIN into our free verification tool",
 "Our system searches vehicle theft and title databases, and community theft registries instantly",
 "Get results in 3 seconds - see if the motorcycle is CLEAR or STOLEN"
 ]}
 whyVerifyTitle="Why Check Motorcycles Before Buying?"
 whyVerifyContent="Motorcycles are stolen at nearly 2x the rate of cars. Their portability makes them easy targets. A $15,000+ Harley can be loaded into a van in under 2 minutes. Protect yourself before purchase."
 whyVerifyBenefits={[
 "Motorcycles are stolen at nearly 2x the rate of cars",
 "Stolen bikes will be seized by police - you lose everything",
 "VIN cloning is common with motorcycles",
 "No legal claim to stolen property regardless of what you paid",
 "Title washing hides stolen motorcycle history",
 "Insurance won't cover stolen vehicles",
 "Private sellers offer no refunds",
 "Criminal charges for possession of stolen property"
 ]}
 faqs={[
 {
 question: "Where is the VIN on a motorcycle?",
 answer: "Usually on the steering neck (right side of the headstock), on the frame near the engine, on a sticker on the frame, or on registration documents. The VIN should match in all locations."
 },
 {
 question: "What motorcycle brands can I verify?",
 answer: "All brands: Harley-Davidson, Honda, Yamaha, Kawasaki, Suzuki, Ducati, BMW, Triumph, Indian, KTM, and any motorcycle with a VIN."
 },
 {
 question: "Are motorcycles stolen more often than cars?",
 answer: "Yes! Motorcycles are stolen at nearly twice the rate of cars per capita. Their portability and high value make them attractive targets."
 },
 {
 question: "What if the VIN shows stolen?",
 answer: "Do NOT purchase. Walk away immediately, report to police and the marketplace. Never confront the seller."
 }
 ]}
 ctaTitle="Don't Risk Buying a Stolen Motorcycle"
 ctaDescription="A free VIN check takes 3 seconds and could save you from losing your bike to police recovery."
 relatedLinks={[
 { title: "Car VIN Check", href: "/vin-checker" },
 { title: "VIN Checker", href: "/vin-checker" },
 { title: "Craigslist Safety", href: "/craigslist-safety-verification" }
 ]}
 />
 );
};

export default MotorcycleVINCheck;
