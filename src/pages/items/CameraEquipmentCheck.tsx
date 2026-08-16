import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const CameraEquipmentCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Check if Camera is Stolen - DSLR, Mirrorless, Lenses | SafeOrStolen"
      metaDescription="Verify camera equipment isn't stolen before buying. Free serial number check for Canon, Nikon, Sony cameras and lenses. Search our verification databases."
      h1="Check if Camera Equipment is Stolen - Free Verification"
      keywords={[
        'check if camera is stolen',
        'camera serial number lookup',
        'stolen camera database',
        'canon camera stolen check',
        'nikon camera verification',
        'sony camera stolen',
        'camera lens serial check',
        'used camera verification',
        'dslr stolen check',
        'camera equipment stolen'
      ]}
      canonical="/check-camera-stolen"
      itemType="Camera"
      identifierType="Serial Number"
      heroBadge="Camera Equipment Verification"
      heroSubtitle="Professional cameras and lenses from Canon, Nikon, Sony are valuable theft targets. Before buying used, verify the serial number isn't linked to stolen equipment. Free instant check."
      stats={[
        { value: "$50K+", label: "Avg. Pro Gear Value" },
        { value: "3 sec", label: "Verification Time" },
        { value: "Instant", label: "Results" },
        { value: "Free", label: "First 2 Checks" }
      ]}
      whatIsTitle="What is Camera Serial Number Verification?"
      whatIsContent="Every camera body and lens has a unique serial number assigned by the manufacturer. Photographers and services like Lenstag and StolenCameraFinder track stolen camera equipment by serial number. When gear is stolen, these numbers are logged in databases. Our verification searches these sources to check if camera equipment has been reported stolen. With professional cameras costing $2,000-$6,000+ and lenses up to $10,000+, verification is essential."
      howItWorksSteps={[
        "Find the serial number: Check the bottom of the camera body, lens barrel, or in the camera's menu settings",
        "Enter the serial number into our free verification tool",
        "Our system searches Lenstag, StolenCameraFinder, and other theft-report databases instantly",
        "Get results in 3 seconds - know if the equipment is SAFE or REPORTED STOLEN"
      ]}
      howItWorksDescription="We search photographer community databases like Lenstag and StolenCameraFinder, plus manufacturer registries. Our comprehensive check helps protect you from purchasing stolen camera gear."
      whyVerifyTitle="Why Check Before Buying Used Camera Equipment?"
      whyVerifyContent="Camera equipment theft is rampant, especially targeting professional gear. Photographers often lose entire kits worth $20,000+ in a single theft. This stolen gear ends up on eBay, Craigslist, and Facebook Marketplace. Here's why verification matters:"
      whyVerifyBenefits={[
        "Professional camera bodies (Canon R5, Nikon Z9, Sony A1) cost $3,000-$6,500 each",
        "L-series, G-Master, and Nikkor Z lenses can cost $1,000-$10,000+",
        "Photographers actively search for their stolen gear and monitor online listings",
        "Cameras recovered as stolen can be lost by the buyer, even in good faith",
        "Possession of stolen property is a crime regardless of how you acquired it",
        "Stolen camera gear may be flagged during manufacturer service",
        "No warranty coverage for stolen equipment",
        "Legitimate sellers always provide serial numbers upfront"
      ]}
      useCases={[
        {
          title: "DSLR & Mirrorless Camera Buyers",
          description: "Canon, Nikon, Sony professional camera bodies are high-value theft targets. Always verify serial numbers."
        },
        {
          title: "Lens Purchases",
          description: "Professional lenses retain value and are frequently stolen. Check lens serial numbers before buying."
        },
        {
          title: "Video Equipment",
          description: "Blackmagic, RED, and Sony cine cameras are extremely valuable. Verify before purchasing used video gear."
        }
      ]}
      testimonial={{
        quote: "A photographer reached out to me after I verified a Canon 70-200mm lens - it was their stolen lens! Thanks to SafeOrStolen, they recovered $2,000 worth of equipment and I avoided buying stolen property.",
        author: "Amanda K.",
        role: "SafeOrStolen User, Portland"
      }}
      faqs={[
        {
          question: "Where do I find the serial number on a camera?",
          answer: "Camera body serial numbers are typically on the bottom plate or under the battery door. For Sony, it's also in Menu > Setup > Version. For Canon/Nikon, check Menu > Settings > Firmware. Lens serial numbers are usually printed on the lens barrel."
        },
        {
          question: "Can I check camera lenses too?",
          answer: "Yes! Every lens has a unique serial number. We can verify Canon, Nikon, Sony, Sigma, Tamron, and all other lens brands. Lens serial numbers are engraved on the barrel near the mount or on the front ring."
        },
        {
          question: "What is Lenstag and StolenCameraFinder?",
          answer: "Lenstag and StolenCameraFinder are photographer-created databases where stolen camera equipment is registered. We search these along with other verification databases to provide comprehensive verification."
        },
        {
          question: "What cameras are most commonly stolen?",
          answer: "Canon EOS R5/R6, Sony A7 series, Nikon Z6/Z7/Z9, and any camera with L-series, G-Master, or professional Nikkor lenses. Basically, any high-value professional equipment is targeted."
        },
        {
          question: "Can photos reveal stolen camera serial numbers?",
          answer: "Yes! Camera serial numbers are often embedded in photo EXIF data. Services like StolenCameraFinder can search photos online to find cameras. Photographers use this to track their stolen gear."
        },
        {
          question: "What if the camera shows as stolen?",
          answer: "Do NOT purchase the equipment. Report the listing to the marketplace. The original owner may be actively searching for their gear. Consider contacting local police - you may help reunite a photographer with thousands of dollars of equipment."
        },
        {
          question: "Should I check camera bodies and lenses separately?",
          answer: "Yes! Thieves sometimes sell camera bodies and lenses separately. Check each piece of equipment individually to ensure nothing in the kit is stolen."
        },
        {
          question: "Are there any red flags when buying used cameras?",
          answer: "Watch for: prices too good to be true, seller unwilling to provide serial numbers, no original box/papers, seller refuses to meet in person, rushed sales, or meeting in unusual locations."
        }
      ]}
      ctaTitle="Protect Yourself When Buying Camera Equipment"
      ctaDescription="A free serial number check takes 3 seconds and could save you from buying stolen gear."
      relatedLinks={[
        { title: "Electronics Verification", href: "/check-electronics" },
        { title: "eBay Camera Safety", href: "/ebay-stolen-item-check" },
        { title: "Craigslist Check", href: "/craigslist-safety-verification" }
      ]}
    />
  );
};

export default CameraEquipmentCheck;
