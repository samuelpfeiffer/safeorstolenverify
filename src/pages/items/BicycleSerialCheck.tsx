import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const BicycleSerialCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Is This Bike Stolen? Check Before Buying | SafeOrStolen"
      metaDescription="Buying a used bicycle or e-bike? Check if it's stolen before you pay. Free verification for Trek, Specialized, Giant. Works on Facebook Marketplace, Craigslist."
      h1="Is This Bike Stolen? Check Before You Buy"
      keywords={[
        'is this bike stolen',
        'how to check if bike is stolen',
        'check bike before buying',
        'is my bike stolen',
        'how to tell if bike is stolen',
        'stolen bike check',
        'e-bike stolen check',
        'trek stolen check',
        'bicycle serial number lookup',
        'facebook marketplace bike stolen'
      ]}
      canonical="/check-bicycle-stolen"
      itemType="Bicycle"
      identifierType="Serial Number"
      heroBadge="Protect Yourself Before Buying"
      heroSubtitle="A bike is stolen every 30 seconds in the US. That $500 'barely used' Trek on Craigslist could be someone's stolen property. Check the serial number before you meet - it takes 2 seconds."
      stats={[
        { value: "2M+", label: "Bikes Stolen Yearly" },
        { value: "2 sec", label: "To Check" },
        { value: "Free", label: "First 2 Checks" },
        { value: "$1,500+", label: "Average E-Bike Loss" }
      ]}
      whatIsTitle="How Do I Know If a Bike Is Stolen?"
      whatIsContent="Every bicycle has a serial number stamped by the manufacturer - usually under the pedal area (bottom bracket). When bikes are stolen, owners report them to Bike Index, police, and insurance companies. Our free checker searches these databases so you know if a bike is stolen before you hand over your money. This is especially important for expensive road bikes, mountain bikes, and e-bikes worth $2,000-$10,000+."
      howItWorksSteps={[
        "Ask the seller for the serial number (found under the bottom bracket where pedals attach)",
        "Enter the number above - takes 2 seconds",
        "See if it's CLEAR ✅ or STOLEN ❌",
        "If clear, proceed with the purchase. If stolen, walk away and report it."
      ]}
      howItWorksDescription="We search Bike Index (the largest stolen bike registry), 529 Garage, police databases, and insurance claims. For e-bikes, we also check motor and battery serial numbers when available."
      whyVerifyTitle="What Happens If I Buy a Stolen Bike?"
      whyVerifyContent="Bikes are one of the most commonly stolen items in America - and only 5% are ever recovered. Here's what happens if you unknowingly buy one:"
      whyVerifyBenefits={[
        "Police seizure - cops check serial numbers regularly and WILL confiscate stolen bikes",
        "Criminal charges - receiving stolen property is illegal in all 50 states",
        "No legal recourse - you have zero claim to stolen property, even if you paid for it",
        "Total loss - your money is gone, the seller blocked you",
        "Original owner may find you - Bike Index helps owners search for their stolen bikes online",
        "Can't resell - you'll be reported if you try to sell a stolen bike",
        "No insurance - your policy won't cover stolen property you bought",
        "Community harm - buying stolen bikes funds bike theft operations"
      ]}
      useCases={[
        {
          title: "Road Bike on Craigslist",
          description: "Carbon road bikes from Trek, Specialized, and Cervelo are theft magnets. Always check the serial."
        },
        {
          title: "E-Bike Deal on Facebook",
          description: "E-bikes cost $2,000-$8,000 new. That 'great deal' is worth verifying before you drive to meet the seller."
        },
        {
          title: "Mountain Bike from OfferUp",
          description: "High-end MTBs get stolen from trailhead parking lots constantly. A 2-second check protects you."
        }
      ]}
      testimonial={{
        quote: "Found a 'barely used' Specialized Turbo Levo e-bike for $2,000 on Craigslist. Checked here and it was reported stolen in Portland. The seller ghosted the moment I asked about the serial number.",
        author: "Marcus J.",
        role: "Denver"
      }}
      faqs={[
        {
          question: "Where is the serial number on a bicycle?",
          answer: "Most common location: under the bottom bracket (where the pedals and cranks connect). Look for 6-12 characters stamped into the metal. Also check the head tube, seat tube, or rear dropouts."
        },
        {
          question: "Can I check e-bike serial numbers?",
          answer: "Yes! E-bikes often have multiple serials - frame, motor, and battery. Check the frame serial first, as that's what's typically in stolen bike databases."
        },
        {
          question: "What if the bike has no serial number?",
          answer: "MAJOR red flag. All manufacturers stamp serial numbers. A missing or filed-off serial number almost certainly means stolen. Don't buy it."
        },
        {
          question: "What bike brands can I verify?",
          answer: "All of them: Trek, Specialized, Giant, Cannondale, Santa Cruz, Yeti, Scott, Canyon, Cervelo, Pinarello, BMC, and any bike with a serial number."
        },
        {
          question: "What databases do you check?",
          answer: "Bike Index (500,000+ registered bikes), 529 Garage, local and national police databases, insurance claims, and manufacturer registries."
        },
        {
          question: "What if the seller won't give me the serial number?",
          answer: "Walk away. They're either lazy or hiding something. Legitimate sellers provide serial numbers without hesitation."
        },
        {
          question: "What if the bike shows as stolen?",
          answer: "Don't buy it. Report the listing to Bike Index and the marketplace. The original owner is probably actively looking for their bike."
        },
        {
          question: "Should I register my own bike?",
          answer: "Yes! Register on Bike Index (it's free). If your bike is ever stolen, registration dramatically increases recovery chances."
        }
      ]}
      ctaTitle="Check Before You Pay"
      ctaDescription="Someone's stolen bike becomes your criminal problem. Enter the serial number and know in 2 seconds. It's free."
      relatedLinks={[
        { title: "E-Bike Verification", href: "/check-ebike" },
        { title: "Craigslist Safety Tips", href: "/craigslist-safety-verification" },
        { title: "Facebook Marketplace Safety", href: "/facebook-marketplace-stolen-check" }
      ]}
    />
  );
};

export default BicycleSerialCheck;
