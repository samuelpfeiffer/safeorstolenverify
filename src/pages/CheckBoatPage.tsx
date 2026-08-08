import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const CheckBoatPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Check if Boat is Stolen - HIN Verification for Watercraft"
      metaDescription="Check if boats, jet skis, or yachts are stolen before buying. HIN (Hull Identification Number) verification from Coast Guard, state DNR, and law enforcement databases. $0.99/check or $10/month unlimited."
      h1="Check if Boat is Stolen Before Buying"
      itemType="Boat & Watercraft"
      keywords={[
        'check if boat stolen',
        'stolen boat check',
        'boat HIN lookup',
        'hull identification number verification',
        'verify boat not stolen',
        'jet ski stolen check'
      ]}
      content={{
        intro: "Verify if any boat, yacht, jet ski, or watercraft is stolen in 3 seconds. Free HIN (Hull Identification Number) verification from U.S. Coast Guard, state DNR (Department of Natural Resources), and law enforcement databases. Check before buying from private sellers, boat shows, or marinas. Boats are high-value targets ($15,000-$500,000+) with sophisticated theft rings.",
        whatIs: "Checking if a boat is stolen means verifying the Hull Identification Number (HIN) against federal and state databases. Every boat manufactured after 1972 has a unique 12-character HIN similar to a car's VIN. SafeOrStolen's boat checker instantly searches the U.S. Coast Guard vessel documentation database, NMVTIS (National Motor Vehicle Title Information System, which includes boats), state DNR stolen watercraft databases (all 50 states), law enforcement stolen property reports, insurance claim databases, and marina theft registries. This protects buyers from purchasing stolen boats, yachts, jet skis, sailboats, or personal watercraft that could be confiscated by authorities or the Coast Guard.",
        howItWorks: "Our boat verification system searches authoritative marine databases simultaneously. We check: (1) U.S. Coast Guard Vessel Documentation Database - tracks federally documented vessels and theft reports, (2) State DNR/Fish & Wildlife databases - all 50 state stolen watercraft registries, (3) NMVTIS - National Motor Vehicle Title Information System includes boats, (4) Law enforcement stolen property databases - federal, state, and local agencies, (5) Marine insurance claim databases - tracks boats reported stolen to insurance companies, (6) National Boat Owners Association registry, (7) BoatHistory.com reports (when available), (8) HIN format validation - verifies the HIN matches manufacturer specifications and wasn't altered. Within 3 seconds, you receive a comprehensive report showing whether the boat has been reported stolen, has outstanding liens, has salvage/total loss history, or has title issues.",
        whyCheck: "Buying a stolen boat will financially devastate you and potentially result in criminal charges. (1) Coast Guard or marine police will CONFISCATE the boat with ZERO compensation - you lose $20,000-$500,000+, (2) You could face criminal charges for receiving stolen property, (3) You lose your entire purchase price with no legal recourse, (4) You cannot register the boat with your state DNR or Coast Guard, (5) Insurance will NOT cover a stolen boat, (6) Banks will NOT finance stolen boats, (7) Marinas may refuse to dock stolen boats or report you to authorities. In 2024, over 8,000 boats were reported stolen in the United States with an average value of $42,000. High-end fishing boats, yachts, jet skis, and personal watercraft are prime targets. Stolen boats frequently appear on Craigslist, Facebook Marketplace, boat classifieds, and even boat shows. Thieves often transport stolen boats across state lines or to other countries (especially Mexico, Caribbean, Central America). Our free boat checker protects you from this multimillion-dollar marine theft industry.",
        benefits: [
          "Check boats, yachts, sailboats, and pontoon boats",
          "Verify jet skis, WaveRunners, and personal watercraft (PWC)",
          "Search U.S. Coast Guard and all 50 state DNR databases",
          "Check fishing boats, bass boats, center consoles, sportfish",
          "Verify cabin cruisers, bowriders, deck boats, ski boats",
          "Check houseboats, trawlers, and liveaboard yachts",
          "Detect HIN tampering and VIN cloning",
          "Instant HIN verification — $0.99/check or $10/month unlimited boat checks"
        ],
        process: [
          "Locate the HIN (Hull Identification Number): Usually on the transom (rear of boat) on the starboard (right) side near the waterline. Also check the hull's interior for duplicate HIN. Federal law requires HINs to be permanently affixed in two locations.",
          "Record the complete 12-character HIN exactly - HIN format is ABCDEFGH1234 where ABC=Manufacturer Code, DEFGH=Hull Serial Number, 1234=Build Date. One wrong character causes false results.",
          "Also record the boat's make, model, year, length, and engine serial numbers for verification",
          "Enter the HIN into our verification tool at SafeOrStolen.com/verify",
          "Review the comprehensive report showing theft status, liens, salvage history, and registration status",
          "For expensive boats ($50,000+), also get a professional marine survey. If STOLEN, walk away and report to Coast Guard at 1-800-368-5647 and local marine police"
        ],
        faqs: [
          {
            question: "What is a HIN and where do I find it on a boat?",
            answer: "HIN (Hull Identification Number) is a unique 12-character code assigned to every boat manufactured after 1972. It's the boat's permanent fingerprint, similar to a car's VIN. Find the HIN: (1) Transom (rear of boat) on starboard (right) side near the waterline - most common location, (2) Inside the hull (required duplicate location) - usually near the bow or under a hatch, (3) Federal law requires boats to have HINs in TWO permanent locations, (4) HIN format: ABC12345D404 where ABC=Manufacturer Identification Code, 12345=Hull Serial Number, D=Month/Year (D=April), 404=Year (2004). Always verify BOTH HINs match exactly - if they don't match, the boat has been tampered with (stolen). Walk away immediately."
          },
          {
            question: "Can I check if a jet ski or WaveRunner is stolen?",
            answer: "Yes, jet skis, WaveRunners, Sea-Doos, and all personal watercraft (PWC) manufactured after 1972 have HINs just like boats. Use SafeOrStolen to search the HIN against Coast Guard, state DNR, and law enforcement databases. Jet skis are EXTREMELY high theft targets because: (1) Easy to transport on trailers, (2) High value ($8,000-$20,000), (3) Popular on marketplaces, (4) Often not properly secured at docks/beaches. ALWAYS check jet ski HINs before buying - stolen jet skis are frequently sold on Craigslist and Facebook Marketplace at 40-60% below market value."
          },
          {
            question: "What if the boat has no HIN or the HIN looks tampered with?",
            answer: "RED FLAG! All boats manufactured after 1972 are required by federal law (33 CFR 181) to have permanent HINs. If there's no HIN or it looks tampered: (1) The boat may be pre-1972 (very old) - verify with documentation, (2) The boat may be homemade/custom built - require detailed build documentation, (3) THE HIN WAS REMOVED OR ALTERED - this is a federal crime (18 U.S. Code § 2312) and the boat is almost certainly stolen. Signs of HIN tampering: scratched/ground area, re-engraved numbers, replaced transom section, no interior duplicate HIN. If you suspect tampering, walk away immediately and report to Coast Guard Marine Safety at 1-800-368-5647. Do NOT buy boats without clear, untampered HINs."
          },
          {
            question: "Is checking a boat's HIN really free?",
            answer: "SafeOrStolen offers 2 free checks, then $0.99 per check or $10/month unlimited. Our tool searches ALL databases simultaneously (Coast Guard + 50 state DNRs + law enforcement + insurance) in 3 seconds versus spending hours checking each individually."
          },
          {
            question: "What should I do if the boat check shows it's stolen?",
            answer: "If our check shows the boat is reported stolen: (1) Do NOT buy or touch the boat under ANY circumstances, (2) Walk away immediately without confronting the seller (they may be dangerous or part of organized crime), (3) Do NOT board the boat or take control of it in any way, (4) Record the seller's information, boat location, and listing details (discreetly), (5) Report immediately to: U.S. Coast Guard Investigative Service at 1-800-368-5647 AND your state DNR AND local marine police, (6) Report to stolen property reports from all 50 states at 1-800-TEL-stolen property reports from all 50 states, (7) If you already purchased it, contact Coast Guard and local authorities IMMEDIATELY - you're a fraud victim. Voluntarily surrender the boat to avoid criminal charges for possessing stolen property."
          },
          {
            question: "Why are boats stolen so frequently?",
            answer: "Boats are prime theft targets because: (1) Extremely high value - average stolen boat worth $42,000, yachts worth $100,000-$5,000,000+, (2) Easy to transport across state lines and international borders (Mexico, Caribbean), (3) Lower security than cars - often left unattended at docks, marinas, boat ramps, (4) Marine title laws vary by state - easier to title wash, (5) Sophisticated theft rings operate boat 'chop shops' stripping valuable components (engines, electronics, trailers), (6) Insurance fraud - owners stage thefts to collect insurance payouts, (7) High demand, limited enforcement - marine police have fewer resources than car theft units. In 2024, over 8,000 boats were reported stolen with only 43% recovered. Always check HINs - this is the ONLY protection."
          },
          {
            question: "What are red flags when buying a used boat?",
            answer: "Major red flags for stolen boats: (1) Price is 50%+ below market value (a $40,000 boat selling for $18,000), (2) Seller won't provide HIN or won't let you inspect transom/hull, (3) HIN area looks scratched, ground, re-engraved, or transom replaced, (4) No matching interior duplicate HIN (federal requirement), (5) No title, registration, or bill of sale from previous owner, (6) Seller has multiple boats for sale (boat theft ring), (7) Meeting at remote location (not their home/marina), (8) Seller can't answer basic questions about boat history, usage, or why they're selling, (9) Boat has fresh damage to locks, hatches, or trailer hitch, (10) Title is from a different state and seller can't explain why, (11) Engine serial numbers don't match manufacturer records. If ANY red flags exist, walk away - stolen boats are not worth the risk."
          },
          {
            question: "How long does a boat HIN check take?",
            answer: "Our boat verification takes only 3 seconds. Enter the 12-character HIN, click verify, and receive instant results showing whether the boat has been reported stolen, has outstanding liens, has salvage history, or has title issues from Coast Guard, 50 state DNR databases, law enforcement, and insurance claim records."
          },
          {
            question: "Should I also check the trailer and engine serial numbers?",
            answer: "YES! Boat thieves often steal boats, trailers, and engines separately and reassemble mismatched components to avoid detection. Always check: (1) Boat HIN - transom and interior duplicate, (2) Trailer VIN - located on trailer tongue or frame, (3) Outboard motor serial number - on mounting bracket or cowling, (4) All three should have matching ownership documentation. If the trailer VIN or engine serial is stolen even though the boat HIN is clean, the entire package will be confiscated. Use SafeOrStolen to check all three components separately for complete protection."
          }
        ]
      }}
    />
  );
};

export default CheckBoatPage;
