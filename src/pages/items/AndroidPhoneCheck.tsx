import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const AndroidPhoneCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Is This Android Phone Stolen? Check Before Buying | SafeOrStolen"
      metaDescription="Buying a used Android phone? Check if it's stolen before you pay. Free verification for Samsung, Google Pixel, OnePlus. Works on Facebook Marketplace, Craigslist."
      h1="Is This Android Phone Stolen? Check Before You Buy"
      keywords={[
        'is this phone stolen',
        'how to check if phone is stolen',
        'check android phone before buying',
        'is my phone stolen',
        'how to tell if phone is stolen',
        'google pixel stolen check',
        'samsung galaxy stolen check',
        'used android verification',
        'phone blacklist check free',
        'facebook marketplace phone stolen'
      ]}
      canonical="/check-android-stolen"
      itemType="Android Phone"
      identifierType="IMEI"
      heroBadge="Protect Yourself Before Buying"
      heroSubtitle="That discounted Samsung or Pixel could be stolen property. Check the serial number before you meet the seller - if the phone is blacklisted, it won't work on any carrier and you'll lose your money."
      stats={[
        { value: "2M+", label: "Phones Stolen Yearly" },
        { value: "2 sec", label: "To Check" },
        { value: "Free", label: "First 2 Checks" },
        { value: "$600+", label: "Average Loss Avoided" }
      ]}
      whatIsTitle="How Do I Know If an Android Phone Is Stolen?"
      whatIsContent="Every Android phone has a unique 15-digit serial number called an IMEI. When a phone is stolen, the owner reports it and carriers add it to a blacklist. A blacklisted phone won't connect to AT&T, Verizon, T-Mobile, or any other carrier - it's basically a WiFi-only tablet. Our free checker tells you if the phone is blacklisted or reported stolen before you waste your money."
      howItWorksSteps={[
        "Ask the seller for the serial number (or dial *#06# on the phone)",
        "Enter the 15-digit number above - takes 2 seconds",
        "See if it's SAFE ✅ or BLACKLISTED ❌",
        "If safe, proceed. If blacklisted, walk away and report the listing."
      ]}
      howItWorksDescription="We check carrier blacklists (AT&T, Verizon, T-Mobile, Sprint), police databases, Google's Find My Device reports, and insurance claims. Works for Samsung Galaxy, Google Pixel, OnePlus, Motorola, and all Android phones."
      whyVerifyTitle="What Happens If I Buy a Stolen Android Phone?"
      whyVerifyContent="A blacklisted Android phone is almost worthless. Here's what you're risking by not checking:"
      whyVerifyBenefits={[
        "Phone won't work - blacklisted phones can't connect to any carrier network",
        "Google lock - Factory Reset Protection (FRP) can permanently lock you out",
        "Police seizure - they can confiscate stolen property, no refund for you",
        "Criminal charges - receiving stolen property is illegal in all 50 states",
        "Seller vanishes - private sellers block you and disappear after the sale",
        "No warranty - manufacturers won't service stolen devices",
        "Can't resell - no one wants to buy a blacklisted phone",
        "Total loss - you paid for a phone that's essentially a paperweight"
      ]}
      useCases={[
        {
          title: "Buying a Samsung Galaxy",
          description: "Samsung phones are the second-most stolen brand. Always check the IMEI before meeting the seller."
        },
        {
          title: "Google Pixel Deal on Facebook",
          description: "That $200 Pixel 8 is probably too good to be true. Check before you drive to meet them."
        },
        {
          title: "OnePlus or Motorola from Craigslist",
          description: "All Android phones can be blacklisted. 2 seconds of checking beats losing $500."
        }
      ]}
      testimonial={{
        quote: "Found a Samsung S24 Ultra for $500 on OfferUp. Checked here and it was blacklisted by T-Mobile. The seller even had the original box. Would have been completely fooled.",
        author: "Marcus J.",
        role: "Phoenix"
      }}
      faqs={[
        {
          question: "How do I find the IMEI on an Android phone?",
          answer: "Dial *#06# from the phone's dialer - the number will appear on screen. Or go to Settings > About Phone > IMEI. You can also find it on the original box or SIM card tray."
        },
        {
          question: "What Android brands can I check?",
          answer: "All of them! Samsung Galaxy, Google Pixel, OnePlus, Motorola, LG, Xiaomi, Oppo, Vivo - any Android phone with an IMEI number."
        },
        {
          question: "What is Google FRP lock?",
          answer: "Factory Reset Protection is Google's anti-theft feature. If a stolen phone is reset without the owner signing out of their Google account, you'll be locked out permanently. Another reason to check before buying."
        },
        {
          question: "What if the seller won't give me the IMEI?",
          answer: "That's a huge red flag. Walk away. Legitimate sellers have nothing to hide and will happily provide the number. Refusal = stolen phone."
        },
        {
          question: "Can I check dual-SIM phones?",
          answer: "Yes! Dual-SIM phones have two IMEI numbers. Check both to make sure the device is completely clean."
        },
        {
          question: "What does 'blacklisted' mean?",
          answer: "A blacklisted phone has been reported to carriers as stolen, lost, or having unpaid bills. Carriers block it from connecting to their networks. It's basically a WiFi-only device at that point."
        },
        {
          question: "Is this check really free?",
          answer: "Yes! 2 free checks, no credit card. That's enough to verify before your next purchase."
        },
        {
          question: "What if the phone shows as stolen?",
          answer: "Don't buy it. Don't meet the seller. Report the listing to the marketplace and block them. Consider reporting to local police."
        }
      ]}
      ctaTitle="Check Before You Pay"
      ctaDescription="A blacklisted phone is a $500 paperweight. Enter the IMEI and know if it's stolen in 2 seconds. It's free."
      relatedLinks={[
        { title: "Is This iPhone Stolen?", href: "/check-iphone-stolen" },
        { title: "Is This Samsung Stolen?", href: "/check-samsung-stolen" },
        { title: "Facebook Marketplace Safety", href: "/facebook-marketplace-stolen-check" }
      ]}
    />
  );
};

export default AndroidPhoneCheck;
