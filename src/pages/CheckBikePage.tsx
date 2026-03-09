import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const CheckBikePage = () => {
  return (
    <ItemLandingPageTemplate
      title="Free Stolen Bike Check — Bicycle Serial Number Lookup | SafeOrStolen"
      metaDescription="Check if a bike is stolen free. Search BikeIndex (700K+ bikes), 529 Garage, and police databases by serial number. Works for road bikes, mountain bikes, and eBikes. Results in 3 seconds."
      h1="Free Stolen Bike Check — Bicycle Serial Number Lookup"
      itemType="Bicycle"
      keywords={[
        'check if bike stolen',
        'stolen bike check',
        'bicycle serial number lookup',
        'verify bike not stolen',
        'stolen bicycle database'
      ]}
      content={{
        intro: "Verify if any bicycle is stolen in 3 seconds. Free serial number verification for road bikes, mountain bikes, BMX, e-bikes, and electric scooters. Check before buying from Craigslist, Facebook Marketplace, or bike shops.",
        whatIs: "Checking if a bicycle is stolen means verifying the bike's serial number against national bike registries, local law enforcement databases, and crowdsourced theft reports. Most bicycles have a unique serial number stamped on the frame (usually on the bottom bracket). SafeOrStolen's bike checker instantly searches BikeIndex.org (the largest open-source bike registry), local police stolen bike databases, 529 Garage registry, manufacturer records, and user-reported theft databases to determine if a bicycle has been reported stolen. This works for all bikes: road bikes, mountain bikes, BMX, cruisers, e-bikes, and electric scooters.",
        howItWorks: "Our bicycle verification system searches multiple bike-specific databases simultaneously. We query: (1) BikeIndex.org - the world's largest open-source stolen bike registry with over 500,000 listings, (2) 529 Garage - community-based bike registration system used by 3,000+ police departments, (3) Local law enforcement stolen property databases, (4) Project 529 Shield database, (5) Manufacturer warranty and registration records (Trek, Specialized, Giant, Cannondale), (6) User-reported theft databases and social media reports. Within 3 seconds, you receive a report showing whether the bicycle has been reported stolen, the original owner's contact information (if available), when and where it was stolen, and identifying features (color, modifications, damage) that can help confirm it's the same bike.",
        whyCheck: "Buying a stolen bicycle may seem like a minor issue, but it has serious consequences. (1) The bike can be confiscated by police with zero compensation, (2) You could face charges for receiving stolen property, (3) You lose your entire purchase price with no recourse, (4) Bike shops may refuse to service obviously stolen bikes, (5) The cycling community will ostracize you if discovered. In 2024, over 1.5 million bicycles were reported stolen in the United States, with an average value of $600 (high-end bikes worth $3,000-$10,000+). Stolen bikes frequently appear on Craigslist, Facebook Marketplace, OfferUp, and even at bike swaps and flea markets. Thieves target expensive road bikes, mountain bikes, and e-bikes, often selling them for 30-50% below market value. Our free bike checker protects you from unknowingly purchasing stolen property.",
        benefits: [
          "Check road bikes, mountain bikes, BMX, and cruisers",
          "Verify e-bikes and electric scooters",
          "Search BikeIndex.org, 529 Garage, and police databases",
          "Check high-end bikes (Trek, Specialized, Giant, Cannondale, Santa Cruz)",
          "Verify vintage and custom bikes",
          "Unlimited serial number checks — $1/month",
          "Instant 3-second verification from multiple databases",
          "Contact original owner if bike is reported stolen"
        ],
        process: [
          "Locate the serial number: Usually stamped on the bottom bracket (under the pedals), rear dropout (near rear wheel), head tube (below handlebars), or seat tube. Bring a flashlight - serial numbers can be hard to see",
          "Record the complete serial number including all letters and numbers - even one wrong character will cause false results",
          "Also note the bike's make, model, color, and any unique features (modifications, scratches, stickers)",
          "Enter the serial number into our verification tool at SafeOrStolen.com/verify",
          "Review the report showing whether the bike has been reported stolen, and compare photos/features if available",
          "If CLEAN, proceed with purchase. If STOLEN, walk away and contact the original owner listed in the database"
        ],
        faqs: [
          {
            question: "Where do I find a bicycle's serial number?",
            answer: "Bicycle serial numbers are usually stamped on the frame in one of these locations: (1) Bottom bracket - under the pedals where the crank arms attach (most common), (2) Rear dropout - near where the rear wheel attaches to the frame, (3) Head tube - below the handlebars near the fork, (4) Seat tube - near where the seat post inserts, (5) Chainstay - underside of the frame near the pedals. You may need a flashlight and to clean dirt/grease. If you can't find it, check the original receipt or manufacturer documentation. No serial number is a major red flag - high-quality bikes always have serial numbers."
          },
          {
            question: "How much does checking a bike's serial number cost?",
            answer: "SafeOrStolen offers unlimited bike serial number checks for $1/month. Our tool searches multiple databases simultaneously in 3 seconds versus manually checking each site separately. Cancel anytime."
          },
          {
            question: "What should I do if the bike is reported stolen?",
            answer: "If our check shows the bike is reported stolen: (1) Do NOT buy it, (2) Don't accuse the seller - they may not know it's stolen, (3) Screenshot the listing and record seller information, (4) Report the listing to the marketplace platform, (5) Contact the original owner listed in the database (BikeIndex or 529 Garage usually provides contact info), (6) File a tip with local police including the listing URL, seller information, and location where the bike is being sold, (7) If you already bought it, return the bike to the police or original owner - you'll likely lose your money but avoid criminal charges."
          },
          {
            question: "Why are so many bikes stolen?",
            answer: "Bicycles are the #5 most stolen item in America because: (1) Easy to steal - bolt cutters defeat most locks in seconds, (2) High resale value - a $3,000 bike sells for $500-$800 cash immediately, (3) Low risk - police rarely investigate bike thefts, (4) Hard to trace - bikes don't have VINs or GPS like cars, (5) High demand - many buyers don't check serial numbers. Professional thieves target high-end bikes (Trek, Specialized, Cannondale, Santa Cruz) worth $2,000-$10,000+. Our checker helps stop this cycle by making stolen bikes harder to sell."
          },
          {
            question: "Can bike serial numbers be removed or altered?",
            answer: "Yes, sophisticated thieves sometimes grind off or alter serial numbers on stolen bikes. This is a federal crime and a MAJOR red flag. Signs of tampering: (1) Serial number area looks scratched, ground, or polished, (2) Serial number is illegible or partially removed, (3) Seller can't provide the serial number or won't let you check it, (4) Stickers or tape covering the usual serial number locations. If you suspect tampering, walk away immediately - this is almost certainly a stolen bike. Report it to police."
          },
          {
            question: "What if the bike has no serial number?",
            answer: "Most modern bikes manufactured after 1970 have serial numbers. If there's no serial number: (1) It's likely a very cheap bike (under $100), (2) It's a custom-built bike using individual frame components, (3) It's extremely old (pre-1970), OR (4) The serial number has been ground off (stolen). For valuable bikes without serial numbers, ask for: (1) Original receipt showing purchase, (2) Photos of the buyer with the bike over time, (3) Service records from bike shops, (4) Registration documents if applicable. Be very cautious buying valuable bikes without serial numbers."
          },
          {
            question: "How long does a bike serial number check take?",
            answer: "Our bicycle verification takes only 3 seconds. Enter the serial number, click verify, and receive instant results showing whether the bike has been reported stolen, the original owner's information (if available), and theft details from BikeIndex, 529 Garage, and law enforcement databases."
          },
          {
            question: "What are red flags when buying a used bike?",
            answer: "Major red flags for stolen bikes: (1) Price is 50%+ below market value (a $2,000 bike selling for $800), (2) Seller won't provide serial number or won't let you check it, (3) Seller has multiple high-end bikes for sale, (4) No receipt, no documentation, no photos of them riding it, (5) Meeting in parking lot late at night (not at their home), (6) Seller is in a rush and won't answer basic questions, (7) Serial number area looks tampered with, (8) Bike has fresh scratches/damage near lock mount points, (9) Components don't match (expensive parts on cheap frame = stripped stolen bike). Trust your gut - if something feels off, walk away."
          }
        ]
      }}
    />
  );
};

export default CheckBikePage;
