/**
 * Unique Content for Each YouTube Video - Ensures No Duplicate Body Content
 * This file contains unique paragraphs, transcripts, tips, and FAQs for each video
 * to differentiate pages for SEO purposes.
 * 
 * Each video page should have 800+ words of unique content
 */

export interface VideoUniqueContent {
  /** Extended description (~200 words) about the video topic */
  extendedDescription: string;
  /** Key learning points from this video (5-8 items) */
  keyTakeaways: string[];
  /** Full transcript or detailed summary (~300+ words) */
  transcriptSummary: string;
  /** Who should watch this video */
  targetAudience: string[];
  /** Related resources and tools */
  relatedResources: { title: string; url: string }[];
  /** Expert tips section (~150 words) */
  expertTips: string;
  /** Unique FAQs for this video (5-6 items) */
  uniqueFaqs: { question: string; answer: string }[];
  /** Call-to-action text */
  ctaText: string;
  /** Statistics or data points mentioned */
  keyStatistics: string[];
}

export const VIDEO_UNIQUE_CONTENT: Record<string, VideoUniqueContent> = {
  'stolen-item-check': {
    extendedDescription: `This essential video reveals the staggering $13 billion problem of stolen goods circulating in the secondhand market. Every year, millions of buyers unknowingly purchase stolen items from Facebook Marketplace, Craigslist, OfferUp, and other platforms—losing their money when items are confiscated by police. SafeOrStolen's free verification tool changes everything by allowing buyers AND sellers to verify any item in just 30 seconds. Whether you're checking an IMEI number for a used iPhone, a VIN for a used car, or a serial number for tools and electronics, our multi-database search provides peace of mind before you hand over your hard-earned money. This video walks you through the simple process that protects both buyers from legal trouble and sellers from accusations.`,
    keyTakeaways: [
      'Stolen goods represent a $13+ billion annual problem in the US alone',
      'Buyers who unknowingly purchase stolen items lose both the item AND their money',
      'IMEI, VIN, and serial number verification takes just 30 seconds',
      'SafeOrStolen searches 100+ databases including NICB, law enforcement, and insurance records',
      'Sellers can prove their items are legitimate to build buyer trust',
      'Free verification is available with 2 searches at no cost',
      'The mobile app allows verification at point-of-sale for in-person meetups'
    ],
    transcriptSummary: `The video opens with a shocking statistic: over $13 billion in stolen property circulates through secondhand markets every year in the United States alone. This creates a massive problem for innocent buyers who think they're getting a deal, only to have police confiscate their purchase weeks or months later—with zero compensation. Kelly McEvoy, the founder of SafeOrStolen, explains how traditional buying advice like "meet in a public place" or "trust your gut" isn't enough. Thieves are sophisticated, using fake receipts and convincing stories. The only way to truly protect yourself is verification. The video demonstrates SafeOrStolen's simple three-step process: enter the identifier (IMEI for phones, VIN for vehicles, serial number for other items), wait 3 seconds while we search 100+ databases, and receive a clear Safe or Stolen result. Kelly emphasizes that verification protects sellers too—by running a check before listing, you prove your item is legitimate and build instant trust with buyers. The video concludes with a call to download the SafeOrStolen mobile app, which allows verification at the point of sale, right when you're meeting a seller.`,
    targetAudience: [
      'First-time secondhand buyers who want to avoid scams',
      'Regular Facebook Marketplace shoppers looking for protection',
      'Pawnshop owners who need to verify items before purchase',
      'Private sellers who want to prove item legitimacy',
      'Parents buying used electronics for their children'
    ],
    relatedResources: [
      { title: 'Start Free Verification', url: '/verify' },
      { title: 'Download Mobile App', url: '/app' },
      { title: 'How It Works', url: '/how-it-works' },
      { title: 'Facebook Marketplace Safety Guide', url: '/facebook-marketplace-safety' }
    ],
    expertTips: `Never complete a secondhand purchase without verification—even if the seller seems trustworthy or has great reviews. Sophisticated thieves cultivate fake profiles with positive feedback over months before selling stolen goods. Always verify the IMEI, VIN, or serial number BEFORE meeting the seller, not after. If a seller refuses to provide these numbers, walk away immediately. For high-value items like cars or electronics over $500, consider paying the small fee for a comprehensive report that includes insurance claims history and ownership verification.`,
    uniqueFaqs: [
      { question: 'How does SafeOrStolen know if an item is stolen?', answer: 'We search over 100 databases including NICB (National Insurance Crime Bureau), community theft registries, insurance claim records, carrier blacklists (for phones), and DMV records (for vehicles). When an item is reported stolen, it appears in these databases within 24-48 hours.' },
      { question: 'Is the stolen item check really free?', answer: 'Yes! You get 2 free searches with no credit card required. After that, we offer affordable single checks or subscription plans for frequent buyers. Pawnshops and businesses get volume pricing.' },
      { question: 'What happens if I already bought a stolen item?', answer: 'Unfortunately, if law enforcement identifies your purchase as stolen property, they will confiscate it and return it to the rightful owner. You receive no compensation—the only recourse is against the seller (if you can find them). This is why verification BEFORE purchase is essential.' },
      { question: 'Can sellers use SafeOrStolen too?', answer: 'Absolutely! Sellers can run verification on their own items before listing, then share the verification certificate with potential buyers. This builds instant trust and often helps items sell faster and at better prices.' },
 { question: 'What items can I check with SafeOrStolen?', answer: 'We verify phones (via IMEI), vehicles (via VIN or license plate), bikes, electronics, tools, jewelry, firearms, and anything with a serial number. If it has an identifier, we can likely check it.' }
    ],
    ctaText: 'Start your free stolen item check now and protect yourself from the $13 billion stolen goods problem.',
    keyStatistics: [
      '$13+ billion in stolen goods sold annually in the US',
      'Over 2 million vehicles stolen per year',
      '3-second verification time',
      '100+ databases searched',
      '2 free checks available'
    ]
  },
  
  'marketplace-safety': {
    extendedDescription: `Facebook Marketplace has become one of the largest venues for buying and selling used goods, but it's also a prime target for thieves looking to offload stolen merchandise. This video provides essential safety tips for anyone buying on Facebook Marketplace, focusing on verification as your primary protection. Unlike traditional advice that focuses on meeting in safe locations, this video addresses the real threat: purchasing stolen property that will eventually be confiscated. Learn how to get IMEI, VIN, and serial numbers BEFORE meeting sellers, what red flags indicate stolen goods, and how to use SafeOrStolen's verification to ensure every purchase is legitimate.`,
    keyTakeaways: [
      'Facebook Marketplace has become a major outlet for stolen goods',
      'Traditional safety tips (public meeting, bring a friend) don\'t protect against stolen items',
      'Always request IMEI, VIN, or serial number BEFORE agreeing to meet',
      'Red flags include: price too good to be true, seller won\'t meet at their home, no serial numbers visible',
      'Quick sale pressure often indicates seller wants to offload before item is reported stolen',
      'Use SafeOrStolen mobile app to verify at point of sale',
      'Legitimate sellers are happy to provide identifiers and wait for verification'
    ],
    transcriptSummary: `The video begins by acknowledging Facebook Marketplace's convenience—millions of local deals happening every day. But with that volume comes risk. Kelly explains that while most advice focuses on physical safety (meeting in public, bringing a friend), the bigger financial risk is buying stolen property. When you buy a stolen item, you become a victim twice: first losing your money, then losing the item when police identify it. The video walks through the common scenario: you see a great deal on an iPhone, meet the seller at a coffee shop, everything looks legitimate, you pay and leave happy—only to have police knock on your door three weeks later. Kelly then demonstrates the prevention strategy: before agreeing to meet, message the seller asking for the IMEI (for phones), VIN (for vehicles), or serial number. Run it through SafeOrStolen. If it comes back clean, proceed with the meetup. If the seller refuses to provide the number or makes excuses, that's your red flag to walk away. The video highlights specific warning signs: pricing 30%+ below market value, sellers who claim they don't know how to find the serial number, urgency to sell immediately, and unwillingness to meet anywhere near their home. It concludes by showing the SafeOrStolen mobile app, which allows buyers to run verification while standing next to the seller—no need to complete the transaction until you have peace of mind.`,
    targetAudience: [
      'Regular Facebook Marketplace buyers',
      'Parents buying phones and electronics for kids',
      'Small business owners sourcing inventory',
      'Anyone who has been scammed on Marketplace before',
      'Buyers looking at high-value items ($500+)'
    ],
    relatedResources: [
      { title: 'Facebook Marketplace Safety Guide', url: '/facebook-marketplace-safety' },
      { title: 'Check iPhone IMEI', url: '/check-phone' },
      { title: 'OfferUp Safety Tips', url: '/offerup-stolen-check' },
      { title: 'Download Verification App', url: '/app' }
    ],
    expertTips: `When messaging Facebook Marketplace sellers, use this script: "Hi! I'm interested in purchasing. Before we arrange a meetup, could you please send me the [IMEI/VIN/serial number]? I always verify items through SafeOrStolen before buying—it only takes 30 seconds and protects both of us." Legitimate sellers appreciate cautious buyers. If the seller becomes defensive, makes excuses, or ghosts you after this request, you've just avoided a potentially stolen item.`,
    uniqueFaqs: [
      { question: 'Why do sellers get defensive when asked for serial numbers?', answer: 'Legitimate sellers usually don\'t—they appreciate cautious buyers. If a seller becomes defensive or makes excuses when asked for an IMEI, VIN, or serial number, that\'s a major red flag indicating the item may be stolen or have other issues.' },
      { question: 'Can I check items at the meetup instead of beforehand?', answer: 'Yes! The SafeOrStolen mobile app allows verification at point-of-sale. However, checking beforehand saves you the trip if the item is flagged. For high-value items, we recommend checking BEFORE meeting to avoid wasted time.' },
      { question: 'What if the Facebook Marketplace seller has good reviews?', answer: 'Unfortunately, scammers and thieves often cultivate positive review profiles over months before selling stolen goods. Reviews are helpful but not sufficient protection—verification of the actual item is the only way to be sure.' },
      { question: 'Is it safe to buy phones on Facebook Marketplace?', answer: 'It can be, but phones are one of the most commonly stolen items. ALWAYS verify the IMEI before purchasing. A phone can look perfect but be carrier-blacklisted or reported stolen, making it useless when you try to activate it.' },
      { question: 'How do I find the IMEI on an iPhone before buying?', answer: 'Ask the seller to go to Settings > General > About and scroll to IMEI. They can also dial *#06# to display it. If the seller can\'t or won\'t provide the IMEI, do not buy the phone.' }
    ],
    ctaText: 'Download the SafeOrStolen app and verify every Facebook Marketplace purchase before you hand over your money.',
    keyStatistics: [
      'Facebook Marketplace has 1+ billion monthly users',
      'Phones are among the top 3 stolen items sold on Marketplace',
      'Over 40% of online fraud victims bought from peer-to-peer marketplaces',
      '30%+ below market price is a major red flag',
      '30-second verification can save you thousands'
    ]
  },
  
  'vin-check': {
    extendedDescription: `Buying a used car represents one of the largest purchases most people make, yet many buyers skip the essential step of verifying the Vehicle Identification Number (VIN). This comprehensive video teaches you exactly how to find a VIN, what a VIN check reveals, and how SafeOrStolen's free verification protects you from purchasing stolen vehicles. A stolen car purchase doesn't just mean losing your money—it means police confiscation, potential criminal charges, and no legal recourse. Whether you're buying from a dealership, private seller, or online marketplace, this video gives you the knowledge to protect your investment.`,
    keyTakeaways: [
      'VIN is a unique 17-character code that identifies every vehicle',
      'Find VIN on dashboard (driver\'s side), door jamb, title document, and insurance card',
      'VIN check reveals: stolen status, salvage title, flood damage, odometer fraud',
      'Never buy a car without running a VIN check—even from dealerships',
      'SafeOrStolen searches stolen property reports from all 50 states, NICB, insurance records, and state DMV databases',
      'Check VIN BEFORE meeting the seller, not after',
      'VIN tampering (mismatched plates, scratched numbers) is a major red flag'
    ],
    transcriptSummary: `Kelly opens the video with a sobering fact: over 700,000 vehicles are stolen in the United States every year, and many end up resold to unsuspecting buyers. The video then explains what a VIN is—a unique 17-character code assigned to every vehicle manufactured since 1981. This code contains information about the manufacturer, model year, and specific vehicle. Kelly demonstrates where to find the VIN: on the dashboard visible through the windshield on the driver's side, on a sticker inside the driver's door jamb, on the title document, insurance card, and vehicle registration. When buying, you should verify the VIN matches across all these locations—discrepancies indicate potential fraud. The video then walks through what SafeOrStolen's VIN check reveals: whether the vehicle is reported stolen in stolen property reports from all 50 states, whether there are any NICB VinCheck flags, insurance company theft or total loss claims, and title brands like salvage, flood, or rebuilt. Kelly emphasizes that even dealerships can unknowingly sell stolen vehicles—especially smaller lots or those dealing in trade-ins. The verification process is demonstrated: enter the VIN, wait 3 seconds for results from 100+ databases, and receive a clear Safe or Stolen result. The video concludes by highlighting major red flags: VIN plates that appear scratched or re-stamped, mismatched VINs between dashboard and door, titles from states with weak title regulations, and sellers who pressure you to complete the sale quickly.`,
    targetAudience: [
      'First-time car buyers who want to avoid scams',
      'Private party vehicle buyers',
      'Dealership customers who want extra verification',
      'Anyone buying a car from online marketplaces',
      'Insurance adjusters and lenders'
    ],
    relatedResources: [
      { title: 'Free VIN Check', url: '/verify' },
      { title: 'VIN Checker Tool', url: '/vin-checker' },
      { title: 'Check Car Stolen Status', url: '/check-car' },
      { title: 'License Plate Lookup', url: '/license-plate-lookup' }
    ],
    expertTips: `Before any test drive or in-person meeting, ask the seller to text you a clear photo of the VIN from both the dashboard and door jamb. Run both through SafeOrStolen and compare them—they must match exactly. Also check that the VIN on the title matches. Any discrepancy means potential VIN cloning or title fraud. For private sales, always meet at the seller's residence or the address listed on the title—reluctance to do so is a red flag.`,
    uniqueFaqs: [
      { question: 'What is the NCIC database?', answer: 'The National Crime Information Center (NCIC) is the FBI\'s central database of crime data, including stolen vehicles. When a vehicle is reported stolen to any law enforcement agency in the US, it\'s entered into NCIC within 24-48 hours. SafeOrStolen\'s search includes NCIC data.' },
      { question: 'Can a VIN be faked or cloned?', answer: 'Yes, VIN cloning is a common fraud where thieves copy the VIN from a legitimate vehicle and attach it to a stolen one. This is why we recommend checking VINs at multiple locations on the vehicle and verifying they all match. Any tampering with VIN plates is a felony.' },
      { question: 'What if the car has a salvage title?', answer: 'A salvage title means the vehicle was declared a total loss by an insurance company—often due to accident damage, flood, or theft recovery. While not illegal to sell, salvage vehicles have reduced value and may have safety issues. Our VIN check includes title brand history.' },
      { question: 'How do I check a car VIN before buying from a dealer?', answer: 'Ask the dealership for the VIN before visiting. They should provide it readily—it\'s usually on the window sticker or listing. Run it through SafeOrStolen before your visit. Reputable dealers expect and welcome VIN verification.' },
      { question: 'What does a VIN check reveal about flood damage?', answer: 'Our VIN check includes insurance claim history, which flags vehicles that were totaled due to flood damage. However, some flood vehicles are "washed" through states with weak title laws. We recommend inspecting for signs of flood damage in addition to running a VIN check.' }
    ],
    ctaText: 'Run a free VIN check now and ensure your next car purchase is safe, legitimate, and worth your investment.',
    keyStatistics: [
      '700,000+ vehicles stolen annually in the US',
      '1 in 100 used cars sold has title issues',
      '17 characters in every VIN',
      'Stolen property reports from all 50 states updates within 24-48 hours of theft report',
      '3-second verification protects a $30,000+ purchase'
    ]
  },
  
  'imei-check': {
    extendedDescription: `Your smartphone is one of your most valuable possessions, and buying used can save hundreds of dollars—but only if you verify the IMEI first. This video explains everything you need to know about IMEI numbers: what they are, how to find them, and why checking before purchase is absolutely essential. A phone with a bad IMEI could be carrier-blacklisted (unable to activate), reported stolen (leading to confiscation), or tied to an unpaid financing plan. SafeOrStolen's free IMEI checker searches carrier blacklists, insurance claim databases, and stolen property databases to ensure your next phone purchase is safe.`,
    keyTakeaways: [
      'IMEI (International Mobile Equipment Identity) is a unique 15-digit code for every phone',
      'Find IMEI by dialing *#06# or in Settings > About Phone',
      'IMEI check reveals: blacklist status, stolen reports, insurance claims, iCloud lock',
      'Carrier-blacklisted phones cannot be activated on major networks',
      'iCloud-locked iPhones are essentially unusable without the owner\'s credentials',
      'Always check IMEI before meeting the seller—at minimum, before paying',
      'Refuse to buy any phone where seller won\'t provide IMEI'
    ],
    transcriptSummary: `The video opens by highlighting the stakes of buying a used phone: with iPhones costing $1,000+ new, used phones offer significant savings—but only if the phone is legitimate. Kelly explains what an IMEI is: a 15-digit International Mobile Equipment Identity number assigned to every cellular device. It's like a fingerprint for your phone. When phones are stolen, the owner reports them to their carrier, which adds the IMEI to a global blacklist. Carriers share this blacklist, meaning a blacklisted phone won't work on AT&T, Verizon, T-Mobile, or any major carrier. The video demonstrates how to find the IMEI: on iPhone, go to Settings > General > About and scroll to IMEI, or dial *#06#. On Android, Settings > About Phone > IMEI. The IMEI is also printed on the original box and SIM tray. Kelly then explains what SafeOrStolen's IMEI check covers: carrier blacklist status (including international blacklists), stolen property databases (stolen property reports from all 50 states, insurance claims), and iCloud/activation lock status. The video warns about specific scenarios: a phone that looks perfect but shows "SIM not supported" is likely blacklisted; an iPhone asking for previous owner's Apple ID is iCloud-locked; a phone sold with "it works fine" but no proof of carrier activation is suspicious. The demonstration shows the verification process: enter 15-digit IMEI, wait 3 seconds, receive clear results. Kelly concludes with the golden rule: never buy a phone without checking the IMEI, and never accept excuses for why the seller can't provide it.`,
    targetAudience: [
      'Used phone buyers looking to save money',
      'Parents buying phones for children',
      'Small businesses sourcing employee devices',
      'Anyone who has purchased a blacklisted phone before',
      'People switching carriers who want to verify compatibility'
    ],
    relatedResources: [
      { title: 'Free IMEI Checker', url: '/imei-checker' },
      { title: 'Check Phone Status', url: '/check-phone' },
      { title: 'Is My iPhone Stolen?', url: '/is-my-iphone-stolen' },
      { title: 'Phone Blacklist Check', url: '/phone-blacklist-check' }
    ],
    expertTips: `For iPhones specifically, ask the seller to show you that Find My iPhone is disabled. If it's still enabled, the phone has an activation lock tied to the previous owner's Apple ID—even if you buy it, you won't be able to use it without their password. Also ask the seller to show the phone actually making a call on a cellular network, not just Wi-Fi. This proves the phone isn't carrier-blacklisted. Finally, match the IMEI shown on screen (*#06#) with the IMEI on the original box if available—mismatches indicate the box isn't from this phone.`,
    uniqueFaqs: [
      { question: 'What happens if I buy a phone with a bad IMEI?', answer: 'A bad IMEI means the phone is blacklisted by carriers. It won\'t connect to cellular networks—no calls, texts, or mobile data. It\'s essentially an expensive iPod. You\'ll lose your money with no recourse against the seller.' },
      { question: 'Can a blacklisted IMEI be fixed?', answer: 'Generally, no. The original owner or their insurance company must request removal from the blacklist. Some third-party services claim to "unblock" IMEIs, but these are often scams or temporary fixes. Prevention through verification is the only reliable solution.' },
      { question: 'What is iCloud lock and how do I check for it?', answer: 'iCloud lock (Activation Lock) ties an iPhone to the owner\'s Apple ID. If enabled, you cannot use the phone without their credentials. On the phone, go to Settings > [Owner\'s Name] > Find My—if Find My iPhone is ON, the phone is locked. Always ask sellers to disable this before purchase.' },
      { question: 'Will SafeOrStolen tell me if a phone is carrier-blacklisted?', answer: 'Yes! Our IMEI check includes global carrier blacklist databases. We\'ll flag phones that are blacklisted in the US or internationally, meaning they cannot be activated on major networks.' },
      { question: 'Should I check IMEI before or after meeting the seller?', answer: 'Ideally before—ask the seller to send you the IMEI via text and run it through SafeOrStolen. This saves you a trip if the phone is problematic. At minimum, check at the meetup using our mobile app before handing over any money.' }
    ],
    ctaText: 'Run a free IMEI check and make sure your next phone purchase works perfectly on your carrier.',
    keyStatistics: [
      '15 digits in every IMEI number',
      'Over 2 million phones stolen annually in the US',
      'Carriers share blacklist data globally',
      'iCloud-locked iPhones are unusable without owner credentials',
      '3-second IMEI verification saves hundreds in potential loss'
    ]
  },
  
  'help-big-trouble-stolen-check': {
    extendedDescription: `That sinking feeling when you realize the "great deal" you just bought might be stolen is exactly what this video addresses. Every day, buyers across the United States finish a Facebook Marketplace, Craigslist, OfferUp, or eBay transaction and later discover warning signs: a price that was too low, missing paperwork, a seller who disappeared, or an item that will not activate. This video walks through the immediate steps to take when you suspect you are in big trouble, including how to verify the item with SafeOrStolen, why stopping use matters, how to document the purchase, and what your legal options are. It is not too late to protect yourself. Running a quick IMEI, VIN, or serial number check can confirm whether the item is reported stolen, and having that record can be the difference between being treated as a victim and being accused of receiving stolen property. The video also explains why trying to resell the item to "make your money back" is a dangerous mistake, and how to report the transaction properly to the platform and to law enforcement.`,
    keyTakeaways: [
      'Stop using the item immediately if you suspect it is stolen',
      'Find the IMEI, VIN, or serial number and verify it on SafeOrStolen',
      'Document the listing, seller messages, payment, and verification result',
      'Do not confront the seller directly; report to the platform and police',
      'A SafeOrStolen due-diligence record helps protect you legally',
      'Reselling a suspected stolen item can create criminal liability',
      'Verify every purchase before paying to avoid this situation entirely'
    ],
    transcriptSummary: `Kelly McEvoy opens the video with a raw, relatable scenario: you just bought something, and a few minutes later a detail does not add up. Maybe the phone will not activate because the IMEI is blacklisted. Maybe the VIN on the car dashboard does not match the door jamb. Maybe the seller pressured you to pay in cash and leave fast. The first and most important message is to stop using the item immediately. Continuing to use, carry, or display a potentially stolen item can make you look like you knowingly accepted it, which complicates your legal position. The video then walks through the three-step verification process. Step one: find the identifier. For phones, dial *#06# or check Settings > About Phone. For vehicles, photograph the VIN from the dashboard and door jamb. For electronics, tools, bikes, and firearms, locate the serial number on the product label or back panel. Step two: run the identifier through SafeOrStolen at safeorstolen.com or in the mobile app. The tool searches 100+ databases including police stolen property records, insurance theft claims, carrier blacklists, and state DMV files, and returns a clear status in about 3 seconds. Step three: document everything. Screenshot the marketplace listing, save the seller's messages, keep your receipt or payment record, and screenshot your SafeOrStolen result. Kelly explains that this verification record is your proof of due diligence. If the item is flagged, the video advises against contacting the seller directly, because a thief can become dangerous when confronted. Instead, report the transaction to the marketplace, contact local police with your documentation, and let them guide next steps. If the item is not yet reported but you still suspect it, the video recommends keeping the verification record and avoiding further resale. The video ends with the core SafeOrStolen message: a three-second check before you buy can prevent all of this stress.`,
    targetAudience: [
      'Buyers who suspect they received stolen goods',
      'First-time secondhand marketplace users',
      'Parents purchasing used phones or electronics',
      'Small business owners sourcing inventory',
      'Anyone who has been scammed on a peer-to-peer platform'
    ],
    relatedResources: [
      { title: 'Start Free Verification', url: '/verify' },
      { title: 'Facebook Marketplace Safety Guide', url: '/facebook-marketplace-safety' },
      { title: 'How to Check If an Item Is Stolen', url: '/how-to-check-if-item-stolen' },
      { title: 'Download Mobile App', url: '/app' }
    ],
    expertTips: `If you think you bought stolen property, treat it like a potential legal incident, not a customer-service problem. First, stop using the item and move it to a safe location where it is not in your daily possession. Second, run a SafeOrStolen check within 24 hours to learn whether the item is already reported stolen. Third, screenshot every piece of evidence: the listing, the seller's profile, your payment confirmation, messages, and your verification result. Fourth, file a report with the marketplace platform and with local law enforcement; most police departments take theft reports online. Do not try to resell the item to recover your money, because that can expose you to receiving-stolen-property charges. Finally, if the item is not reported yet but the deal feels wrong, keep the documentation and avoid using it in public until you are certain.`,
    uniqueFaqs: [
      { question: 'What should I do first if I think I bought a stolen item?', answer: 'Stop using it and gather evidence. Do not contact the seller aggressively. Run the IMEI, VIN, or serial number through SafeOrStolen to see if it is reported stolen, then report the purchase to the marketplace and police.' },
      { question: 'Can I get in legal trouble for having a stolen item I bought unknowingly?', answer: 'Possession of stolen property can be a crime in many states, but prosecutors must show you knew or should have known. Running a SafeOrStolen verification before purchase creates a due-diligence record that helps show you acted in good faith.' },
      { question: 'Will the police give me my money back if I report a stolen item?', answer: 'Generally no. The police will return the item to the rightful owner if it is stolen. Your financial recovery is usually from the seller or the platform, not law enforcement.' },
      { question: 'Should I message the seller to demand a refund?', answer: 'No. Confronting a thief can be dangerous. Report through the marketplace and to police. Let law enforcement handle contact with the seller.' },
      { question: 'How can I avoid buying stolen items in the future?', answer: 'Always verify the IMEI, VIN, or serial number on SafeOrStolen before paying. Ask the seller for the identifier before meeting, use the SafeOrStolen mobile app at the point of sale, and walk away if the seller refuses.' }
    ],
    ctaText: 'Think you bought stolen property? Run a free SafeOrStolen check and protect yourself legally right now.',
    keyStatistics: [
      'Over $13 billion in stolen goods sold in the US each year',
      '2 free checks available at SafeOrStolen',
      '3-second verification across 100+ databases',
      'Police return stolen property to the rightful owner, not the buyer',
      'Documented due diligence can protect you from receiving-stolen-property charges'
    ]
  }
};

export const getVideoUniqueContent = (slug: string): VideoUniqueContent | undefined => {
  return VIDEO_UNIQUE_CONTENT[slug];
};

export const hasVideoUniqueContent = (slug: string): boolean => {
  return slug in VIDEO_UNIQUE_CONTENT;
};
