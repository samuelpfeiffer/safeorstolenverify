import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const WatchSerialCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Check if Watch is Stolen - Rolex, Omega, Tag Heuer | SafeOrStolen"
      metaDescription="Verify luxury watches aren't stolen before buying. Free serial number check for Rolex, Omega, Tag Heuer, Breitling. Search our verification databases instantly."
      h1="Check if Watch is Stolen - Luxury Watch Verification"
      keywords={[
        'check if rolex is stolen',
        'watch serial number lookup',
        'stolen watch database',
        'verify watch not stolen',
        'rolex stolen check',
        'omega watch verification',
        'luxury watch stolen',
        'tag heuer serial check',
        'used rolex verification',
        'watch authentication'
      ]}
      canonical="/check-watch-stolen"
      itemType="Watch"
      identifierType="Serial Number"
      heroBadge="Luxury Watch Verification"
      heroSubtitle="Luxury watches from Rolex, Omega, and other brands are prime theft targets worth thousands. Before buying pre-owned, verify the serial number isn't linked to stolen property. Free instant check."
      stats={[
        { value: "$1B+", label: "Watch Theft Annually" },
        { value: "3 sec", label: "Verification Time" },
        { value: "Instant", label: "Results" },
        { value: "Free", label: "First 2 Checks" }
      ]}
      whatIsTitle="What is Watch Serial Number Verification?"
      whatIsContent="Every luxury watch has a unique serial number engraved by the manufacturer. When a Rolex, Omega, Patek Philippe, or other high-end watch is reported stolen, this serial number is logged in databases maintained by organizations like The Watch Register. Our verification searches these databases to check if a watch has been reported stolen. Given that luxury watches can cost $5,000 to $500,000+, verification is essential before any significant purchase."
      howItWorksSteps={[
        "Find the serial number: Usually between the lugs (where the strap connects), on the caseback, or on warranty papers",
        "Enter the serial number into our free verification tool",
        "Our system searches The Watch Register and other verification databases instantly",
        "Get results in 3 seconds - know if the watch is CLEAR or REPORTED STOLEN"
      ]}
      howItWorksDescription="We check SafeOrStolen's reports, public web results, and analyze findings using AI. Additionally, for watches, we reference The Watch Register, an industry-specific resource."
      whyVerifyTitle="Why Verify Watches Before Buying?"
      whyVerifyContent="Luxury watch theft is a billion-dollar problem. Rolex alone accounts for a significant portion of stolen timepieces. Criminals target watches for their high value, portability, and resale potential. Here's why verification is critical:"
      whyVerifyBenefits={[
        "Stolen Rolexes are actively tracked by The Watch Register used by dealers worldwide",
        "Police regularly recover stolen watches and arrest possessors",
        "Insurance companies pursue stolen watch recovery aggressively",
        "Possession of a stolen watch can lead to criminal charges",
        "Stolen watches may be seized during service at authorized dealers",
        "You have no legal claim to stolen property regardless of what you paid",
        "Many stolen watches have their papers and boxes - looks don't guarantee legitimacy",
        "International databases track stolen watches across borders"
      ]}
      useCases={[
        {
          title: "Rolex Buyers",
          description: "Rolex watches are the most commonly stolen luxury timepieces. Always verify before purchasing pre-owned."
        },
        {
          title: "Pre-Owned Dealer Verification",
          description: "Legitimate dealers check every watch they acquire. Use our service to match industry standards."
        },
        {
          title: "Private Sale Purchases",
          description: "Buying from individuals carries the highest risk. Never purchase a luxury watch without verification."
        }
      ]}
      testimonial={{
        quote: "Was about to wire $15,000 for a Rolex Submariner from an online seller. SafeOrStolen flagged it as stolen in Paris 6 months ago. The seller had all the papers and everything looked legit. This service is invaluable.",
        author: "Richard H.",
        role: "SafeOrStolen User, New York"
      }}
      faqs={[
        {
          question: "Where is the serial number on a Rolex?",
          answer: "Modern Rolex watches (post-2005) have the serial number engraved on the inner bezel ring at 6 o'clock. Older models have it engraved between the lugs at the 6 o'clock position (remove the bracelet to see). It's also on your warranty card and certificate."
        },
        {
          question: "Can I check Omega, Tag Heuer, and other brands?",
          answer: "Yes! Our verification works for all luxury watch brands including Rolex, Omega, Patek Philippe, Audemars Piguet, Tag Heuer, Breitling, IWC, Cartier, and more. Any watch with a serial number can be verified."
        },
        {
          question: "What is The Watch Register?",
          answer: "The Watch Register is a widely used database of lost and stolen watches. We search this database along with other sources to provide comprehensive verification."
        },
        {
          question: "What if my watch check shows stolen?",
          answer: "Do NOT purchase the watch. Walk away immediately. Report the listing to the marketplace and local police. You may be helping recover someone's valuable timepiece."
        },
        {
          question: "Can stolen watches still be serviced?",
          answer: "Authorized service centers often check serial numbers against stolen databases. If you bring a stolen Rolex to RSC (Rolex Service Center), it may be flagged and confiscated. This is another reason stolen watches have significantly reduced value."
        },
        {
          question: "Are papers and box a guarantee the watch isn't stolen?",
          answer: "No! Thieves often steal watches complete with boxes and papers. In fact, watches with full sets are worth more, making them more attractive to steal. Papers don't prove legitimate ownership - only a clean serial number check provides that assurance."
        },
        {
          question: "How do watches get reported stolen internationally?",
          answer: "The Watch Register helps track watches reported stolen. A Rolex reported stolen in London can be flagged if checked using this resource."
        },
        {
          question: "Should I verify even from authorized dealers?",
          answer: "Authorized dealers and reputable pre-owned dealers check their inventory. However, for grey market dealers, pawn shops, and private sellers, always verify yourself."
        }
      ]}
      ctaTitle="Protect Your Investment - Verify Before Buying"
      ctaDescription="A free serial number check takes 3 seconds and could save you thousands on a stolen luxury watch."
      relatedLinks={[
        { title: "Jewelry Verification", href: "/check-jewelry" },
        { title: "eBay Watch Safety", href: "/ebay-stolen-item-check" },
        { title: "Craigslist Verification", href: "/craigslist-safety-verification" }
      ]}
    />
  );
};

export default WatchSerialCheck;
