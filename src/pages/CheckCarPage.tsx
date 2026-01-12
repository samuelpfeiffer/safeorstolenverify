import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const CheckCarPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Check if Car is Stolen - Free VIN Verification | SafeOrStolen"
      metaDescription="Check if a car is stolen before buying. Free VIN verification from NICB, DMV, and law enforcement databases. Safer alternative to Carfax for theft checks."
      h1="Check if Car is Stolen Before Buying"
      itemType="Car"
      keywords={[
        'check if car stolen',
        'check car stolen',
        'stolen car check',
        'verify car not stolen',
        'VIN stolen check',
        'stolen vehicle lookup'
      ]}
      content={{
        intro: "Verify if any car, truck, or SUV is stolen in 3 seconds. Free VIN verification from NICB, state DMV databases, and law enforcement. Check before buying from Craigslist, Facebook Marketplace, or used car dealers. Looking for Carfax alternatives? Read our <a href='/blog/carfax-vs-free-vin-alternatives'>Carfax vs Free VIN Alternatives guide</a>.",
        whatIs: "Checking if a car is stolen means verifying the vehicle's VIN (Vehicle Identification Number) against national and state stolen vehicle databases. Every car has a unique 17-character VIN that serves as its permanent identifier. SafeOrStolen's car checker instantly searches the National Insurance Crime Bureau (NICB) database, all 50 state DMV title records, FBI's National Crime Information Center (NCIC), insurance theft claims, and salvage auction records to determine if a vehicle has been reported stolen, salvaged, or has title issues. This protects buyers from purchasing stolen cars, trucks, SUVs, or motorcycles. For detailed pricing comparisons, see our <a href='/blog/carfax-vs-free-vin-alternatives'>free VIN check alternatives</a>.",
        howItWorks: "Our car verification system queries authoritative databases in real-time. We check: (1) NICB VINCheck - the official FBI-partnered stolen vehicle database, (2) NMVTIS - National Motor Vehicle Title Information System with all state DMV records, (3) Law enforcement stolen vehicle reports from local, state, and federal agencies, (4) Insurance total loss and theft claim databases, (5) Salvage auction records (Copart, IAAI), (6) Title history showing previous owners, liens, and brand history. Within 3 seconds, you receive a comprehensive report showing whether the car is clean, reported stolen, has a salvage title, has outstanding liens, or has been in major accidents. We also verify the VIN hasn't been altered or cloned.",
        whyCheck: "Buying a stolen car will financially devastate you and could land you in jail. Here's what happens: (1) Police will confiscate the vehicle with ZERO compensation to you, (2) You could face criminal charges for receiving stolen property, (3) You lose your entire purchase price with no legal recourse, (4) Your state DMV will reject the title application making registration impossible, (5) Insurance won't cover a stolen vehicle, (6) Banks won't finance stolen vehicles. In 2024, over 1 million vehicles were reported stolen in the United States (one every 32 seconds). Stolen cars frequently appear on Craigslist, Facebook Marketplace, and even legitimate-looking used car lots. Thieves often use fake titles, VIN cloning, and title washing to make stolen vehicles appear legitimate. Our free car checker protects you from this $7.5 billion annual crime.",
        benefits: [
          "Check cars, trucks, SUVs, vans, and motorcycles",
          "Verify VIN against NICB and FBI stolen vehicle databases",
          "Check all 50 state DMV title records and lien information",
          "Detect VIN cloning and title washing fraud",
          "Verify salvage, rebuilt, and flood damage history",
          "Free VIN check - 2 free verifications (Carfax charges $44.99)",
          "Instant 3-second verification from multiple databases",
          "Protect yourself from legal consequences of buying stolen property"
        ],
        process: [
          "Locate the VIN: Check the dashboard near the windshield (driver's side), the driver's door jamb sticker, the vehicle title, or the insurance card",
          "Verify it's exactly 17 characters (letters and numbers) - if shorter, the vehicle is pre-1981",
          "Physically verify the VIN in multiple locations (dashboard, door jamb, engine block) - they must all match",
          "Enter the VIN into our verification tool at SafeOrStolen.com/verify",
          "Review the instant report showing theft status, title history, salvage status, and any red flags",
          "If the report shows CLEAN with matching VIN, proceed with purchase. If STOLEN, SALVAGE, or MISMATCHED VIN, walk away immediately and report to police"
        ],
        faqs: [
          {
            question: "How do I check if a car is stolen for free?",
            answer: "To check if a car is stolen for free: (1) Get the VIN from the dashboard (visible through windshield) or door jamb, (2) Use SafeOrStolen's free VIN checker at safeorstolen.com/verify - we search NICB, DMV, and law enforcement databases, (3) Also check NICB's VINCheck at nicb.org (limited data), (4) Check your state DMV's title search (if available), (5) Ask the seller for the title and verify it's not branded as salvage/rebuilt. SafeOrStolen offers the most comprehensive free check with 2 free verifications. Carfax charges $44.99 and focuses on history rather than theft."
          },
          {
            question: "What is a VIN and where do I find it?",
            answer: "VIN (Vehicle Identification Number) is a unique 17-character code assigned to every vehicle manufactured since 1981. It's the car's permanent fingerprint. Find it at: (1) Dashboard near windshield (driver's side, visible from outside), (2) Driver's door jamb sticker, (3) Vehicle title document, (4) Insurance card, (5) Under the hood on the engine block. IMPORTANT: Always verify the VIN matches in ALL locations - if they don't match, the car has been tampered with (VIN cloning). Walk away immediately."
          },
          {
            question: "What's the difference between SafeOrStolen and Carfax?",
            answer: "SafeOrStolen focuses on THEFT VERIFICATION and stolen vehicle checks using real-time law enforcement and NICB databases. Carfax focuses on VEHICLE HISTORY (accidents, service records, ownership changes). SafeOrStolen offers 2 free checks; Carfax charges $44.99 per report. For best protection, use SafeOrStolen to verify the car isn't stolen (free), then use Carfax for maintenance history (paid). SafeOrStolen checks: NICB, FBI, DMV, law enforcement. Carfax checks: service records, accidents, ownership. Different tools, different purposes."
          },
          {
            question: "Can I check if a car is stolen using just the license plate?",
            answer: "License plates alone are not reliable for theft checks because they can be easily swapped or faked. Always use the VIN instead. However, you can: (1) Use the plate to get the VIN through your insurance agent or DMV, (2) Run the plate through SafeOrStolen (we'll try to find the VIN), (3) Ask the seller directly for the VIN - if they refuse, massive red flag. Never buy a car without verifying the VIN against theft databases. Plates can be stolen, but VINs are permanently etched into the vehicle."
          },
          {
            question: "What is VIN cloning and how do I detect it?",
            answer: "VIN cloning is when thieves steal a legitimate VIN from a similar vehicle (same make, model, year) and apply it to a stolen vehicle. This makes the stolen car appear legitimate in databases. Detect VIN cloning by: (1) Physically checking the VIN in multiple locations (dashboard, door jamb, engine block) - they must ALL match exactly, (2) Look for signs of tampering (scratches, new rivets, misaligned numbers), (3) Verify the VIN on the title matches the physical VIN, (4) Use SafeOrStolen to verify the VIN matches the vehicle's make, model, and year specifications, (5) Be suspicious if the seller only has a photo of the VIN or won't let you inspect it. If anything looks off, walk away."
          },
          {
            question: "What if the car check shows the vehicle is stolen?",
            answer: "If our check shows the car is reported stolen: (1) Do NOT buy it under any circumstances - you will lose 100% of your money, (2) Walk away immediately without confronting the seller (they may be dangerous), (3) Screenshot the listing and seller information, (4) Report the listing to the platform (Craigslist, Facebook Marketplace), (5) File a report with NICB at 800-TEL-NICB and your local police department (include VIN and seller info), (6) If you've already purchased it, contact police immediately - you may be a fraud victim rather than a criminal. Do NOT drive the stolen vehicle."
          },
          {
            question: "How long does a car check take?",
            answer: "Our car verification takes only 3 seconds. Enter the 17-character VIN, click verify, and receive instant results showing theft status, title history, salvage status, and any red flags from NICB, DMV, and law enforcement databases."
          },
          {
            question: "Can a salvage or rebuilt title car be safe to buy?",
            answer: "Salvage/rebuilt titles mean the vehicle was declared a total loss by insurance (usually from major accident, flood, or theft recovery). These vehicles CAN be safe IF properly repaired and inspected, but be very cautious: (1) Have a trusted mechanic inspect it thoroughly, (2) Get a detailed repair history, (3) Be aware salvage vehicles are worth 20-50% less than clean title vehicles, (4) Some insurance companies won't cover salvage vehicles, (5) Financing is difficult. Our checker flags salvage titles so you know what you're buying. Never pay clean title prices for salvage vehicles."
          }
        ]
      }}
    />
  );
};

export default CheckCarPage;
