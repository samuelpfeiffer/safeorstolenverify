import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const LicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="License Plate Lookup - Free Stolen Vehicle Check by Plate Number"
      metaDescription="Check if a vehicle is stolen using license plate number. Free license plate lookup from DMV and law enforcement databases. Verify cars, trucks, and motorcycles instantly."
      h1="License Plate Lookup - Check if Vehicle is Stolen"
      itemType="Vehicle"
      keywords={[
        'license plate lookup',
        'check license plate stolen',
        'license plate search',
        'stolen car plate lookup',
        'verify plate number'
      ]}
      content={{
        intro: "Verify vehicles using license plate number in 3 seconds. Free license plate lookup from DMV and law enforcement databases. Check if cars, trucks, or motorcycles are stolen before buying from private sellers or used car lots.",
        whatIs: "License plate lookup is a service that verifies whether a vehicle is reported stolen by checking the license plate number against DMV registration databases and law enforcement stolen vehicle records. While license plates can be swapped or faked (making VIN verification more reliable), license plate lookups are useful for quick initial screenings, verifying seller information matches registration, and checking vehicles when you can't easily access the VIN. SafeOrStolen's license plate checker instantly searches state DMV registration records, NICB VINCheck database (after resolving plate to VIN), law enforcement stolen vehicle reports, and insurance databases to determine if a vehicle associated with that plate has been reported stolen, has title issues, or registration problems.",
        howItWorks: "Our license plate lookup system works in two steps. First, we query state DMV databases to resolve the license plate number to the vehicle's VIN and registration information. This tells us the registered owner, vehicle make/model/year, and registration status. Second, we search the resolved VIN against stolen vehicle databases including NICB VINCheck, FBI NCIC (when available), state law enforcement records, and insurance theft claims. Within 3 seconds, you receive a report showing: (1) Whether the vehicle is reported stolen, (2) Registered owner information (to verify seller is legitimate owner), (3) Vehicle make, model, year (to verify it matches what's being sold), (4) Registration status (expired, suspended, valid), (5) Title issues (salvage, rebuilt, flood damage). IMPORTANT: Always follow up with VIN verification for final purchase - license plates can be swapped but VINs cannot.",
        whyCheck: "License plate lookups help you quickly screen vehicles and detect red flags before committing to a purchase. (1) Verify the seller is the registered owner - if names don't match, it could be stolen or they don't have authority to sell, (2) Detect stolen plates - thieves often swap plates from similar vehicles to avoid detection, (3) Check registration status - expired or suspended registration suggests unpaid fines or legal issues, (4) Verify vehicle information - make sure the plate matches the actual vehicle (thieves put plates from clean cars onto stolen cars), (5) Quick screening tool - check multiple vehicles quickly before doing detailed VIN checks. However, license plates alone are NOT sufficient for final verification - always check the VIN before purchase because plates can be easily swapped. Use license plate lookup as Step 1, then verify VIN as Step 2 before buying.",
        benefits: [
          "Quick vehicle screening using license plate number",
          "Verify seller is the registered owner before viewing",
          "Check registration status (valid, expired, suspended)",
          "Resolve plate number to VIN for full verification",
          "Works for all 50 states and US territories",
          "Check cars, trucks, motorcycles, RVs, and trailers",
          "Free license plate lookup - 2 free searches",
          "Instant 3-second results from DMV databases"
        ],
        process: [
          "Record the license plate number including all letters, numbers, and the state/province",
          "Note the vehicle's make, model, color, and year for comparison",
          "Enter the plate number and state into our verification tool at SafeOrStolen.com/verify",
          "Review the report showing registered owner, vehicle information, and theft status",
          "Verify the registered owner name matches the seller's ID - if names don't match, MAJOR red flag",
          "After initial screening, ALWAYS verify the vehicle's VIN before final purchase - license plates can be swapped but VINs cannot be changed"
        ],
        faqs: [
          {
            question: "Can I check if a car is stolen using just the license plate?",
            answer: "Yes, you can do an initial check using the license plate number, but it's NOT sufficient for final verification. Here's why: (1) License plates can be easily swapped - thieves put plates from clean vehicles onto stolen vehicles, (2) Plates can be faked or cloned, (3) Registration may not be updated if recently stolen. Use license plate lookup as Step 1 to screen vehicles and verify the seller is the registered owner, but ALWAYS verify the VIN as Step 2 before purchase. SafeOrStolen's plate lookup will resolve the plate to the VIN and then check the VIN against stolen vehicle databases for comprehensive results."
          },
          {
            question: "How do I find a vehicle's license plate number?",
            answer: "License plates are located: (1) Rear of vehicle - back bumper (all vehicles), (2) Front of vehicle - front bumper (required in some states, not all). Simply record all letters and numbers on the plate along with the state. Example: California plate 7ABC123. If the seller won't provide the plate number or it's obscured in photos, that's a red flag. Also note: temporary plates (paper tags) are harder to verify - proceed with extra caution and always check VIN."
          },
          {
            question: "What information can I get from a license plate lookup?",
            answer: "A license plate lookup provides: (1) Registered owner name (to verify seller is legitimate owner), (2) Vehicle make, model, year (to verify it matches what's being sold), (3) VIN (after resolving plate number), (4) Registration status (valid, expired, suspended), (5) Title information (clean, salvage, rebuilt), (6) Theft status (whether vehicle is reported stolen), (7) State of registration. This information helps you quickly screen vehicles and detect fraud BEFORE scheduling a viewing or test drive."
          },
          {
            question: "Is license plate lookup really free?",
            answer: "Yes, SafeOrStolen offers 2 free license plate lookups. Some states also offer free online registration lookups through their DMV websites, but these usually don't check theft status. Our tool searches both DMV registration AND stolen vehicle databases simultaneously in 3 seconds. Additional lookups require a paid plan, but our free tier protects casual buyers checking one or two vehicles."
          },
          {
            question: "What if the registered owner doesn't match the seller?",
            answer: "If the registered owner name doesn't match the seller's name, this is a MAJOR red flag. Possible explanations: (1) Vehicle is stolen, (2) Seller doesn't have legal authority to sell (borrowed car, family member's car), (3) Seller is a dealer/flipper who hasn't transferred title yet (risky), (4) Registration is outdated (seller recently bought but hasn't updated DMV yet). ALWAYS ask why names don't match. Legitimate explanations include: recent purchase (ask for bill of sale), inherited vehicle (ask for estate documents), or power of attorney (ask for documentation). If the seller can't provide documentation proving authority to sell, walk away - it's likely stolen or there are liens."
          },
          {
            question: "Can license plates be faked or cloned?",
            answer: "Yes, license plate cloning is a common fraud tactic. Thieves: (1) Steal plates from similar vehicles (same make/model/color), (2) Make fake plates using online templates and printing, (3) Alter existing plates by changing numbers/letters. Signs of fake/cloned plates: (1) Plate looks new/pristine on an old vehicle, (2) Plate screws look fresh or mismatched, (3) Plate information doesn't match registration documents, (4) Seller has temporary/paper plates for an old vehicle, (5) Plate from a different state than seller's location. Always verify the plate physically matches the registration documents and check the VIN - VINs cannot be easily faked like plates."
          },
          {
            question: "How long does a license plate lookup take?",
            answer: "Our license plate lookup takes only 3 seconds. Enter the plate number and state, click verify, and receive instant results showing registered owner, vehicle information, registration status, and theft status from DMV and law enforcement databases."
          },
          {
            question: "What should I do if the plate lookup shows the vehicle is stolen?",
            answer: "If our plate lookup shows the vehicle is reported stolen: (1) Do NOT meet with the seller or view the vehicle, (2) Screenshot the listing and record seller information, (3) Report the listing to the platform (Craigslist, Facebook Marketplace, etc.), (4) File a tip with local police and NICB at 800-TEL-NICB (800-835-6422) including the license plate, VIN (if available), listing URL, and seller details, (5) Do NOT confront the seller - they may be dangerous. If you're already at a meeting, leave immediately without explanation. Your safety is more important than catching a thief."
          }
        ]
      }}
    />
  );
};

export default LicensePlateLookupPage;
