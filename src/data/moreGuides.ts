import type { DefinitiveGuideProps } from "@/components/guides/DefinitiveItemGuide";

const reportStep = {
  name: "Log the item on SafeOrStolen",
  cost: "Free with an account",
  description:
    "Add the item, its identifier, and your police report number at /report-stolen. SafeOrStolen checks its own stolen-item reports whenever someone runs that identifier.",
  tellsYou:
    "Anyone who checks that identifier on SafeOrStolen sees that it was reported stolen. It does not notify police, carriers, insurers, or other registries.",
};

const victimRecordSteps = [
  "Keep a single file with the police report number, officer or agency name, identifier, photos, receipt, and every call reference number.",
  "Write down dates and times of each call, claim, and report.",
  "Watch marketplaces for your item and send any listing to the investigating officer instead of contacting the seller.",
  "Update your report and registries if the item is recovered, so it is no longer shown as stolen.",
];

const victimSafeOrStolen =
  "SafeOrStolen is a stolen-item verification hub for buyers and sellers covering phones, vehicles, license plates, serial-numbered electronics and power tools, firearms, and bicycles. For theft victims, the useful part is the report: once your item is logged, a buyer who checks its identifier on SafeOrStolen sees it was reported stolen. SafeOrStolen does not file police reports or contact carriers or insurers for you.";

const buyerSafeOrStolen =
  "SafeOrStolen gives buyers and sellers one account for phones, vehicles, license plates, serial-numbered electronics and power tools, firearms, and bicycles. A check is an additional due-diligence step, not a substitute for inspecting the item, matching documents, checking official resources, or confirming the seller has authority to sell.";

const buyerStolenSteps = [
  "Do not pay, take possession, or confront the seller.",
  "Save the listing URL, screenshots, messages, seller profile, payment request, and identifier.",
  "Leave the meeting safely and report the listing to the marketplace.",
  "Contact local law enforcement on the non-emergency line. Call emergency services only if someone is in immediate danger.",
  "If you already paid, preserve the item and evidence, contact police, and promptly open a dispute with your payment provider.",
];

const sosCheck = (what: string) => ({
  name: `Run a SafeOrStolen ${what} check`,
  cost: "Free to try with a free account",
  description:
    "SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis.",
  tellsYou:
    "Whether the identifier appears in the sources SafeOrStolen actually checked and whether public listing signals deserve review. No match does not prove an item is not stolen.",
});

// ---------------------------------------------------------------- VICTIM

export const STOLEN_PHONE_VICTIM_GUIDE: DefinitiveGuideProps = {
  variant: "victim",
  slug: "/what-to-do-if-your-phone-is-stolen",
  title: "What to Do if Your Phone Is Stolen",
  metaTitle: "What to Do if Your Phone Is Stolen: Step by Step",
  description:
    "Phone stolen? Mark it lost in Find My or Find My Device, ask your carrier to suspend service and block the IMEI, file a police report, and secure your accounts.",
  keywords:
    "what to do if phone is stolen, stolen phone steps, block IMEI, find my iphone stolen, find my device stolen",
  directAnswer:
    "Use Apple Find My or Google Find My Device to locate, lock, or mark the phone as lost. Call your carrier to suspend the line and ask them to block the phone's IMEI. File a police report with the IMEI, then change your important passwords, contact your insurer if the phone is covered, and log the phone on SafeOrStolen.",
  identifierTitle: "Where to find your IMEI without the phone",
  identifierIntro:
    "Police, carriers, and insurers will ask for the IMEI. You can usually find it without the phone.",
  identifierLocations: [
    "The original box label, which usually shows the IMEI or serial number.",
    "Your carrier account, bill, or device-payment agreement.",
    "iPhone: your Apple Account device list lists your signed-in devices; Apple explains where the IMEI appears on each model.",
    "Android: your Google Account device list can show the phone model; the carrier or box is the most reliable IMEI source.",
    "Purchase receipt, insurance policy, or a phone backup record.",
  ],
  methods: [
    {
      name: "Locate, lock, or mark it as lost",
      cost: "Free",
      description:
        "On iPhone, sign in to Find My on another device or iCloud.com and mark the phone as lost. On Android, use Google Find My Device to ring, secure, or erase it. Do not go to the location yourself.",
      tellsYou:
        "Where the phone last reported its location, and it locks the phone with a message. Share location information with police rather than acting on it.",
      url: "https://support.apple.com/en-us/101593",
      linkLabel: "Apple: if your iPhone is lost or stolen",
    },
    {
      name: "Google Find My Device (Android)",
      cost: "Free",
      description:
        "Sign in with the Google Account on the phone to ring, secure, or erase it remotely.",
      tellsYou:
        "The phone's last known location when location and Find My Device were turned on.",
      url: "https://support.google.com/android/answer/6160491",
      linkLabel: "Google Find My Device help",
    },
    {
      name: "Call your carrier",
      cost: "Free",
      description:
        "Ask the carrier to suspend the line so no one can use your number, and ask them to block the phone's IMEI on their network as stolen.",
      tellsYou:
        "The carrier can confirm the suspension and blacklist request. Get a reference number.",
    },
    {
      name: "File a police report",
      cost: "Free",
      description:
        "Report the theft to local police with the IMEI, serial number, make, model, color, and when and where it happened. Apple also recommends reporting a missing iPhone to local law enforcement.",
      tellsYou:
        "You get a report number that carriers, insurers, and SafeOrStolen reports can reference.",
    },
    {
      name: "Secure your accounts",
      cost: "Free",
      description:
        "Change passwords for email, banking, and your Apple or Google account, and remove saved payment cards from the device if your account allows it.",
      tellsYou: "It limits what a thief can reach through the phone.",
    },
    {
      name: "Contact your insurer or device-protection plan",
      cost: "Depends on your policy",
      description:
        "If the phone is covered by carrier insurance, a protection plan, or homeowners or renters insurance, start a claim. Some plans require the device to stay in Find My or require a police report.",
      tellsYou: "What your policy covers and what documents it needs.",
    },
    reportStep,
  ],
  redFlags: [
    "Going to a tracked location or meeting the person who has your phone.",
    "Replying to texts or emails claiming the phone was found that ask for your Apple or Google password or a code; these are common phishing attempts.",
    "Removing the phone from your Apple or Google account before your insurer or carrier says to, which can end Activation Lock protection.",
    "Waiting to call the carrier, which leaves your number and accounts exposed.",
  ],
  stolenSteps: victimRecordSteps,
  safeOrStolenText: victimSafeOrStolen,
  toolHref: "/report-stolen",
  toolLabel: "Report your stolen phone",
  faqs: [
    {
      question: "Can my carrier block a stolen phone?",
      answer:
        "Yes. Ask your carrier to suspend the line and block the phone's IMEI as stolen. Blocking stops the phone from being used on that carrier's network and participating networks.",
    },
    {
      question: "How do I find my IMEI if the phone is gone?",
      answer:
        "Check the original box, your carrier account or bill, the purchase receipt, or your insurance paperwork. Apple's support site explains where the IMEI appears for each iPhone model.",
    },
    {
      question: "Should I erase my stolen phone right away?",
      answer:
        "Mark it as lost first so you can still see its location and it shows your message. Erase it when you are confident you won't recover it or when your data is at risk. Follow Apple's or Google's guidance for your device.",
    },
    {
      question: "Does reporting it on SafeOrStolen notify the police?",
      answer:
        "No. Logging it on SafeOrStolen adds the item to SafeOrStolen's own stolen-item reports so buyers who check that identifier see it. Always file a police report separately.",
    },
  ],
  related: [
    { href: "/how-to-report-a-stolen-item", label: "How to report a stolen item" },
    { href: "/how-to-find-stolen-item-for-sale-online", label: "How to find your stolen item for sale online" },
    { href: "/blog/how-to-find-imei-number", label: "How to find an IMEI number" },
    { href: "/how-to-check-if-phone-stolen", label: "How to check if a phone is stolen (buyers)" },
  ],
};

export const STOLEN_CAR_VICTIM_GUIDE: DefinitiveGuideProps = {
  variant: "victim",
  slug: "/what-to-do-if-your-car-is-stolen",
  title: "What to Do if Your Car Is Stolen",
  metaTitle: "What to Do if Your Car Is Stolen: First Steps",
  description:
    "Car stolen? Confirm it wasn't towed, call police with your VIN and plate, notify your insurer and lender, use any connected-car tracking, and keep records.",
  keywords:
    "what to do if car is stolen, stolen car steps, report stolen vehicle, car stolen insurance",
  directAnswer:
    "First make sure the car wasn't towed or repossessed by calling the local police non-emergency line or the property's towing company. Then report it stolen to police with your VIN, plate number, and description, call your insurer, tell your lender or leasing company, and use any connected-car app or tracker to share its location with police. Do not try to recover it yourself.",
  identifierTitle: "Where to find your VIN and plate details",
  identifierIntro:
    "Police need the VIN, plate number, year, make, model, color, and any distinguishing features.",
  identifierLocations: [
    "Your registration card or title.",
    "Your insurance card, policy documents, or insurer app.",
    "Your loan or lease paperwork, or the lender's online account.",
    "Service receipts, the purchase contract, or the manufacturer's connected-car app.",
  ],
  methods: [
    {
      name: "Rule out towing or repossession",
      cost: "Free",
      description:
        "Call the local police non-emergency line, check posted tow-away signs, and ask the property manager. If you have a loan, ask the lender whether it was repossessed.",
      tellsYou:
        "Whether the car was lawfully removed, which saves a false theft report.",
    },
    {
      name: "Report it to police",
      cost: "Free",
      description:
        "File a stolen-vehicle report with the VIN, plate, description, when and where you last saw it, and any tracker information. Police can enter stolen vehicles in law-enforcement systems.",
      tellsYou:
        "You get a report number your insurer and lender will need.",
    },
    {
      name: "Share connected-car or tracker location with police",
      cost: "Free if already set up",
      description:
        "If your car has a manufacturer app, a subscription service, or a tracking tag, give the location information to the officer instead of going there.",
      tellsYou: "Where the car last reported its location.",
    },
    {
      name: "Call your insurer",
      cost: "Depends on your policy",
      description:
        "Comprehensive coverage typically handles theft. Your insurer will ask for the police report number, keys, and ownership documents.",
      tellsYou: "What your policy covers, including any rental reimbursement.",
    },
    {
      name: "Tell your lender or leasing company",
      cost: "Free",
      description:
        "If the car is financed or leased, notify the lender. Keep making payments unless your lender or insurer tells you otherwise.",
      tellsYou: "How the lender and insurer will handle the claim together.",
    },
    reportStep,
  ],
  redFlags: [
    "Going to the car's location or confronting anyone in it.",
    "Paying someone online who claims they can return the car for a fee.",
    "Delaying the police report, which can hold up the insurance claim.",
    "Leaving spare keys, the title, or ID documents unaccounted for.",
  ],
  stolenSteps: victimRecordSteps,
  safeOrStolenText: victimSafeOrStolen,
  toolHref: "/report-stolen",
  toolLabel: "Report your stolen vehicle",
  faqs: [
    {
      question: "Who do I call first if my car is stolen?",
      answer:
        "Call police first. If there is any chance it was towed, the local police non-emergency line can often tell you. Then call your insurer.",
    },
    {
      question: "Does insurance cover a stolen car?",
      answer:
        "Theft is usually covered under comprehensive coverage. Liability-only policies generally do not cover theft of your own car. Check your policy or ask your insurer.",
    },
    {
      question: "Should I keep paying my car loan?",
      answer:
        "Generally yes, until the insurer settles the claim, unless your lender tells you otherwise. Ask your lender and insurer directly.",
    },
    {
      question: "Does SafeOrStolen report my car to the police?",
      answer:
        "No. Logging it on SafeOrStolen adds the VIN to SafeOrStolen's own stolen-item reports so buyers who check that VIN see it. File a police report separately.",
    },
  ],
  related: [
    { href: "/how-to-report-a-stolen-item", label: "How to report a stolen item" },
    { href: "/how-to-find-stolen-item-for-sale-online", label: "How to find your stolen item for sale online" },
    { href: "/how-to-check-if-car-stolen", label: "How to check if a car is stolen (buyers)" },
  ],
};

export const STOLEN_BIKE_VICTIM_GUIDE: DefinitiveGuideProps = {
  variant: "victim",
  slug: "/what-to-do-if-your-bike-is-stolen",
  title: "What to Do if Your Bike Is Stolen",
  metaTitle: "What to Do if Your Bike Is Stolen: Report & Recover",
  description:
    "Bike stolen? File a police report with the serial number, mark it stolen on Bike Index and 529 Garage, log it on SafeOrStolen, and watch local listings.",
  keywords:
    "what to do if bike is stolen, stolen bike report, bike index stolen, 529 garage stolen bike",
  directAnswer:
    "Find your bike's serial number, file a police report, and mark the bike stolen on Bike Index and 529 Garage so their communities and partners are alerted. Log it on SafeOrStolen too, then watch local marketplaces and send any match to police rather than meeting the seller.",
  identifierTitle: "Where to find your bike serial number",
  identifierIntro:
    "The frame serial is usually stamped under the bottom bracket. If the bike is gone, look for it in your records.",
  identifierLocations: [
    "Your receipt, warranty card, or the shop that sold you the bike.",
    "An existing Bike Index or 529 Garage registration.",
    "Photos of the bike, especially of the underside of the frame.",
    "E-bikes: the manufacturer app or account may list the frame, battery, or motor numbers.",
  ],
  methods: [
    {
      name: "File a police report",
      cost: "Free",
      description:
        "Report the theft with the serial number, make, model, color, size, photos, and any distinctive parts.",
      tellsYou: "You get a report number registries and insurers can reference.",
    },
    {
      name: "Mark it stolen on Bike Index",
      cost: "Free",
      description:
        "Register the bike if you haven't, then mark it lost or stolen. Bike Index says this notifies the Bike Index community and its partners.",
      tellsYou:
        "Anyone searching the serial on Bike Index sees the stolen report. SafeOrStolen also checks Bike Index during bicycle checks.",
      url: "https://bikeindex.org/",
      linkLabel: "Bike Index",
    },
    {
      name: "Report it on 529 Garage",
      cost: "Free",
      description:
        "Register the bike on 529 Garage and report it missing. 529 says one alert reaches riders, bike shops, and police near you.",
      tellsYou:
        "Buyers who search that serial on 529 Garage see it listed as missing.",
      url: "https://project529.com/garage/",
      linkLabel: "529 Garage",
    },
    reportStep,
    {
      name: "Check your insurance",
      cost: "Depends on your policy",
      description:
        "Homeowners, renters, or dedicated bike insurance may cover theft. Have the police report number and receipt ready.",
      tellsYou: "What is covered and what proof the insurer needs.",
    },
  ],
  redFlags: [
    "Meeting a seller who has your bike or trying to take it back yourself.",
    "Posting your serial number publicly without also reporting it to police and registries.",
    "Waiting to report; resale listings can appear quickly.",
  ],
  stolenSteps: victimRecordSteps,
  safeOrStolenText: victimSafeOrStolen,
  toolHref: "/report-stolen",
  toolLabel: "Report your stolen bike",
  faqs: [
    {
      question: "Where should I report a stolen bike?",
      answer:
        "File a police report, then mark it stolen on Bike Index and 529 Garage. Both are free. You can also log it on SafeOrStolen so buyers who check the serial here see it.",
    },
    {
      question: "What if I don't know my bike's serial number?",
      answer:
        "Check your receipt, the shop that sold it, old photos of the frame underside, or any registry account. Without a serial, give police a detailed description and photos.",
    },
    {
      question: "Does SafeOrStolen check Bike Index?",
      answer:
        "Yes. Bike Index is a live source for SafeOrStolen bicycle checks. SafeOrStolen does not check 529 Garage.",
    },
  ],
  related: [
    { href: "/how-to-report-a-stolen-item", label: "How to report a stolen item" },
    { href: "/how-to-find-stolen-item-for-sale-online", label: "How to find your stolen item for sale online" },
    { href: "/how-to-check-if-bike-stolen", label: "How to check if a bike is stolen (buyers)" },
  ],
};

export const STOLEN_GUN_VICTIM_GUIDE: DefinitiveGuideProps = {
  variant: "victim",
  slug: "/what-to-do-if-your-gun-is-stolen",
  title: "What to Do if Your Gun Is Stolen",
  metaTitle: "What to Do if Your Gun Is Stolen: Report It Now",
  description:
    "Gun stolen? Report it to local police right away with the make, model, and serial number, check your state's reporting law, and notify your insurer.",
  keywords:
    "what to do if gun is stolen, report stolen firearm, stolen gun report, lost firearm reporting",
  directAnswer:
    "Report the theft to your local police right away with the make, model, caliber, and serial number. Police can enter a stolen firearm into law-enforcement systems. Many states have their own reporting requirements and deadlines, so check your state's law. Licensed dealers (FFLs) also have a federal duty to report thefts and losses to ATF within 48 hours of discovery.",
  identifierTitle: "Where to find your firearm's serial number",
  identifierIntro:
    "Police need the serial number, make, model, caliber, and type.",
  identifierLocations: [
    "The purchase receipt or the dealer's paperwork from the sale.",
    "The original box or case label.",
    "Photos, an inventory list, or insurance records you keep.",
    "The dealer that sold it, which keeps transaction records.",
  ],
  methods: [
    {
      name: "Report it to local police right away",
      cost: "Free",
      description:
        "Report the theft with the serial number, make, model, caliber, and when and where it happened. Ask for the report number.",
      tellsYou:
        "Police can enter the firearm as stolen so it can be identified if recovered.",
    },
    {
      name: "Check your state's reporting law",
      cost: "Free",
      description:
        "Many states set their own requirement and deadline for owners to report a lost or stolen firearm. Check your state's official statutes or ask the police agency taking your report.",
      tellsYou: "Whether and how quickly your state requires you to report.",
    },
    {
      name: "If you are a licensed dealer: report to ATF",
      cost: "Free",
      description:
        "Federal regulation 27 CFR 478.39a requires federal firearms licensees to report a theft or loss from their inventory or collection to ATF and local authorities within 48 hours after discovering it.",
      tellsYou: "This applies to licensees, not private owners.",
      url: "https://www.ecfr.gov/current/title-27/chapter-II/subchapter-B/part-478/subpart-D/section-478.39a",
      linkLabel: "27 CFR 478.39a (eCFR)",
    },
    {
      name: "Notify your insurer",
      cost: "Depends on your policy",
      description:
        "Homeowners or renters policies may cover firearm theft, sometimes with limits. Have the police report number and serial ready.",
      tellsYou: "What is covered and what documentation you need.",
    },
    reportStep,
  ],
  redFlags: [
    "Waiting to report; some states set short deadlines.",
    "Trying to recover the firearm yourself.",
    "Reporting without the serial number when your receipt or dealer can provide it.",
  ],
  stolenSteps: victimRecordSteps,
  safeOrStolenText: victimSafeOrStolen,
  toolHref: "/report-stolen",
  toolLabel: "Report your stolen firearm",
  faqs: [
    {
      question: "Do I have to report a stolen gun?",
      answer:
        "It depends on your state. Many states require owners to report lost or stolen firearms, some within a set number of hours or days. Check your state's statutes or ask your local police. Reporting promptly is the safe choice in every state.",
    },
    {
      question: "Who has to report thefts to ATF?",
      answer:
        "Federal firearms licensees must report thefts or losses from their inventory or collection to ATF and local authorities within 48 hours of discovery under 27 CFR 478.39a. Private owners report to local police.",
    },
    {
      question: "Does SafeOrStolen report my gun to the police?",
      answer:
        "No. Logging it on SafeOrStolen adds the serial to SafeOrStolen's own stolen-item reports. File a police report separately.",
    },
  ],
  related: [
    { href: "/how-to-report-a-stolen-item", label: "How to report a stolen item" },
    { href: "/how-to-check-if-gun-is-stolen", label: "How to check if a gun is stolen (buyers)" },
  ],
};

export const FIND_STOLEN_ONLINE_GUIDE: DefinitiveGuideProps = {
  variant: "victim",
  slug: "/how-to-find-stolen-item-for-sale-online",
  title: "How to Find Your Stolen Item for Sale Online",
  metaTitle: "How to Find Your Stolen Item for Sale Online",
  description:
    "Search marketplaces for your stolen item, set alerts, save evidence, and give listings to police. Never confront the seller or arrange a meetup yourself.",
  keywords:
    "find stolen item online, stolen item for sale, found my stolen bike on facebook marketplace, stolen property listing",
  directAnswer:
    "Search local marketplaces by the item's model, color, and distinctive features, and save searches so new listings alert you. If you find a likely match, screenshot the listing and seller profile, save the URL, and send it to the officer handling your police report. Do not message the seller about the theft, arrange a meetup, or try to take the item back yourself.",
  identifierTitle: "What to have ready before you search",
  identifierIntro:
    "Distinctive details help you recognize your item and help police confirm it's yours.",
  identifierLocations: [
    "Serial number, IMEI, or VIN.",
    "Clear photos, including scratches, stickers, and custom parts.",
    "Your police report number and the officer's contact details.",
    "The receipt or other proof you own it.",
  ],
  methods: [
    {
      name: "Search the main marketplaces",
      cost: "Free",
      description:
        "Search Facebook Marketplace, Craigslist, OfferUp, eBay, and Mercari for your item's model and color in your area and nearby cities. Pawn shop and resale listings are worth checking too.",
      tellsYou: "Whether a matching item is being offered near you.",
    },
    {
      name: "Save searches and alerts",
      cost: "Free",
      description:
        "Use each marketplace's saved-search or notification feature so you're told when new matching listings appear.",
      tellsYou: "New listings shortly after they're posted.",
    },
    {
      name: "Preserve the evidence",
      cost: "Free",
      description:
        "Screenshot the listing, photos, price, seller profile, and any messages, and save the URL and the date and time.",
      tellsYou: "A record police can use even if the listing is removed.",
    },
    {
      name: "Give the listing to police",
      cost: "Free",
      description:
        "Call the investigating officer or the non-emergency line and share your report number, the listing, and your proof of ownership. Let police decide how to handle recovery.",
      tellsYou: "How the agency will proceed.",
    },
    {
      name: "Report the listing to the marketplace",
      cost: "Free",
      description:
        "Use the platform's report tool to flag suspected stolen goods after you've saved your evidence.",
      tellsYou: "The platform can review or remove the listing.",
    },
    reportStep,
  ],
  redFlags: [
    "Messaging the seller to say the item is yours; it can lead them to delete the listing or become dangerous.",
    "Arranging a fake purchase or meetup without police involvement.",
    "Paying to 'buy back' your own item.",
    "Posting the seller's personal details publicly.",
  ],
  stolenSteps: victimRecordSteps,
  safeOrStolenText: victimSafeOrStolen,
  toolHref: "/report-stolen",
  toolLabel: "Report your stolen item",
  faqs: [
    {
      question: "I found my stolen item on Facebook Marketplace. What should I do?",
      answer:
        "Save screenshots and the listing link, then contact the officer handling your police report or the non-emergency line. Don't confront the seller or set up a meetup on your own.",
    },
    {
      question: "Can I just go buy it back?",
      answer:
        "It isn't recommended. It can be unsafe, and it may complicate a police investigation or insurance claim. Let police advise you.",
    },
    {
      question: "Will SafeOrStolen search marketplaces for my item?",
      answer:
        "No. SafeOrStolen does not monitor marketplaces for you. When you log your item, buyers who check its identifier on SafeOrStolen see it was reported stolen, and buyers can paste listing links into the marketplace URL analyzer.",
    },
  ],
  related: [
    { href: "/how-to-report-a-stolen-item", label: "How to report a stolen item" },
    { href: "/marketplace-url-checker", label: "Marketplace URL analyzer" },
    { href: "/how-to-tell-if-marketplace-item-is-stolen", label: "How to tell if a marketplace item is stolen" },
  ],
};

export const REPORT_STOLEN_HUB_GUIDE: DefinitiveGuideProps = {
  variant: "victim",
  slug: "/how-to-report-a-stolen-item",
  title: "How to Report a Stolen Item",
  metaTitle: "How to Report a Stolen Item: Police, Registries & More",
  description:
    "Report a stolen phone, car, bike, gun, or other item: police first, then your carrier, insurer, or registry, then log it on SafeOrStolen so buyers see it.",
  keywords:
    "how to report a stolen item, report stolen property, stolen item report, where to report stolen items",
  directAnswer:
    "Report the theft to local police first, with the item's serial number, IMEI, or VIN and a description. Then contact whoever can block or flag the item: your carrier for a phone, your insurer and lender for a car, Bike Index and 529 Garage for a bike. Finally, log the item on SafeOrStolen so buyers who check its identifier see it was reported stolen.",
  identifierTitle: "Find the item's identifier",
  identifierIntro:
    "Every report goes further with the right identifier.",
  identifierLocations: [
    "Phones: IMEI (box, carrier account, receipt).",
    "Cars, motorcycles, trailers: VIN (registration, title, insurance card).",
    "Bikes, electronics, tools, cameras, watches: serial number (receipt, box, registration, photos).",
    "Firearms: serial number (dealer paperwork, receipt, box).",
  ],
  methods: [
    {
      name: "File a police report",
      cost: "Free",
      description:
        "Use the non-emergency line or your agency's online report if it offers one. Call emergency services if a crime is in progress or someone is in danger.",
      tellsYou: "A report number you'll need for everything else.",
    },
    {
      name: "Phone: carrier, Find My, insurer",
      cost: "Free",
      description:
        "Mark it lost, ask your carrier to suspend service and block the IMEI, and start any insurance claim.",
      tellsYou: "See the full stolen phone guide.",
    },
    {
      name: "Vehicle: insurer and lender",
      cost: "Free",
      description:
        "Rule out towing, then notify your insurer and any lender with the police report number.",
      tellsYou: "See the full stolen car guide.",
    },
    {
      name: "Bike: Bike Index and 529 Garage",
      cost: "Free",
      description: "Mark it stolen on both free registries.",
      tellsYou: "See the full stolen bike guide.",
    },
    {
      name: "Firearm: police and state rules",
      cost: "Free",
      description:
        "Report immediately and check your state's reporting law. Licensed dealers also report to ATF.",
      tellsYou: "See the full stolen gun guide.",
    },
    reportStep,
  ],
  redFlags: [
    "Skipping the police report; insurers and registries often require it.",
    "Confronting someone who has your item.",
    "Paying anyone who promises to return your item for a fee.",
  ],
  stolenSteps: victimRecordSteps,
  safeOrStolenText: victimSafeOrStolen,
  toolHref: "/report-stolen",
  toolLabel: "Report a stolen item",
  faqs: [
    {
      question: "Where do I report a stolen item?",
      answer:
        "Start with your local police. Then contact the organization that can block or flag that item type, such as your carrier, insurer, lender, or a bike registry, and log it on SafeOrStolen.",
    },
    {
      question: "Can I report a stolen item online?",
      answer:
        "Many police agencies accept online reports for certain property crimes; check your local agency's website. You can log the item on SafeOrStolen online at any time.",
    },
    {
      question: "Does logging an item on SafeOrStolen replace a police report?",
      answer:
        "No. SafeOrStolen reports are a separate record that buyers see when they check the identifier on SafeOrStolen. Always file a police report.",
    },
  ],
  related: [
    { href: "/what-to-do-if-your-phone-is-stolen", label: "What to do if your phone is stolen" },
    { href: "/what-to-do-if-your-car-is-stolen", label: "What to do if your car is stolen" },
    { href: "/what-to-do-if-your-bike-is-stolen", label: "What to do if your bike is stolen" },
    { href: "/what-to-do-if-your-gun-is-stolen", label: "What to do if your gun is stolen" },
    { href: "/how-to-find-stolen-item-for-sale-online", label: "How to find your stolen item for sale online" },
    { href: "/report-stolen", label: "Log a stolen item on SafeOrStolen" },
  ],
};

// ---------------------------------------------------------------- BUYER

export const MOTORCYCLE_GUIDE: DefinitiveGuideProps = {
  slug: "/check-motorcycle-stolen-vin",
  title: "How to Check if a Motorcycle Is Stolen",
  metaTitle: "How to Check if a Motorcycle Is Stolen (VIN Guide)",
  description:
    "Match a motorcycle's VIN on the frame and title, run NICB VINCheck and an NMVTIS report, inspect for tampering, and verify the seller before you buy.",
  keywords:
    "how to check if motorcycle is stolen, motorcycle VIN check, stolen motorcycle check",
  directAnswer:
    "Find the VIN on the steering neck and the engine number on the crankcase, match the VIN to the title and registration in the seller's name, then run it through NICB VINCheck and an NMVTIS vehicle history report. Inspect the VIN plate and ignition for tampering, and ask police to check the VIN if anything seems off.",
  identifierTitle: "Where to find a motorcycle VIN",
  identifierIntro:
    "Motorcycles made for road use since 1981 have a 17-character VIN.",
  identifierLocations: [
    "Stamped on the steering neck (frame head) and often on a label nearby.",
    "The engine number is usually stamped on the crankcase; compare it with the title or paperwork if listed.",
    "Title, registration, insurance card, and the bill of sale.",
  ],
  methods: [
    {
      name: "Match the VIN to the title",
      cost: "Free",
      description:
        "Compare the frame VIN with the title and registration and confirm the seller's name and ID match the title.",
      tellsYou: "Whether the seller appears to have authority to sell.",
    },
    {
      name: "Run NICB VINCheck",
      cost: "Free",
      description:
        "Enter the VIN at NICB VINCheck.",
      tellsYou:
        "Whether participating insurers have recorded it as an unrecovered theft or a total loss.",
      url: "https://www.nicb.org/vincheck",
      linkLabel: "NICB VINCheck",
    },
    {
      name: "Get an NMVTIS report",
      cost: "Small fee from approved providers",
      description:
        "NMVTIS reports come from providers approved by the U.S. Department of Justice.",
      tellsYou: "Title history and brands such as salvage or junk.",
      url: "https://vehiclehistory.bja.ojp.gov/",
      linkLabel: "NMVTIS (vehiclehistory.bja.ojp.gov)",
    },
    {
      name: "Ask police to check the VIN",
      cost: "Usually free; policy varies",
      description:
        "Some agencies will run a VIN for a buyer. The public cannot search NCIC.",
      tellsYou: "Whether the agency finds a report in systems available to it.",
    },
    sosCheck("VIN"),
  ],
  redFlags: [
    "Ground-off, re-stamped, or loose VIN plates or frame numbers.",
    "Damaged ignition, missing keys, or hot-wired wiring.",
    "No title, a title in someone else's name, or a 'lost title' story.",
    "A price well below market and pressure to pay in cash quickly.",
  ],
  stolenSteps: buyerStolenSteps,
  safeOrStolenText: buyerSafeOrStolen,
  toolHref: "/vin-checker",
  toolLabel: "Open the VIN checker",
  faqs: [
    {
      question: "Does NICB VINCheck work for motorcycles?",
      answer:
        "NICB VINCheck accepts vehicle VINs, including many motorcycles. It shows theft and total-loss records from participating insurers only.",
    },
    {
      question: "What if the motorcycle has no title?",
      answer:
        "Treat it as a serious warning sign. Ask your state's motor vehicle agency how title transfer works, and don't pay until you can get a proper title.",
    },
    {
      question: "Does SafeOrStolen check NICB or NMVTIS?",
      answer:
        "No. SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis. Run NICB VINCheck and NMVTIS separately.",
    },
  ],
  related: [
    { href: "/how-to-check-if-car-stolen", label: "How to check if a car is stolen" },
    { href: "/how-to-check-if-trailer-atv-stolen", label: "Trailers, ATVs, and dirt bikes" },
    { href: "/vin-checker", label: "VIN checker" },
  ],
};

export const TRAILER_ATV_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-trailer-atv-stolen",
  title: "How to Check if a Trailer, ATV, or Dirt Bike Is Stolen",
  metaTitle: "Check if a Trailer, ATV or Dirt Bike Is Stolen",
  description:
    "Find the VIN or serial on a trailer, ATV, UTV, or dirt bike, match it to the title or registration, run NICB VINCheck where it applies, and verify the seller.",
  keywords:
    "check if trailer is stolen, stolen ATV check, dirt bike VIN check, UTV stolen check",
  directAnswer:
    "Find the VIN or serial number on the frame, match it to the title, registration, or manufacturer's certificate in the seller's name, and look for tampering. Run the VIN through NICB VINCheck where it applies, ask your state's titling agency how that vehicle type is titled or registered, and ask police to check the number if you have doubts.",
  identifierTitle: "Where to find the VIN or serial",
  identifierIntro:
    "Locations vary by type and manufacturer; check the frame first.",
  identifierLocations: [
    "Trailers: a VIN plate or stamping on the tongue or front frame rail.",
    "ATVs and UTVs: a frame stamping, often near the front or under the seat.",
    "Dirt bikes: steering neck stamping and an engine number on the crankcase.",
    "Title, registration, off-highway permit, or manufacturer's certificate of origin.",
  ],
  methods: [
    {
      name: "Match the number to ownership paperwork",
      cost: "Free",
      description:
        "Compare the frame number with the title, registration, or certificate of origin, and the seller's ID with the owner's name.",
      tellsYou: "Whether the seller appears to have authority to sell.",
    },
    {
      name: "Run NICB VINCheck where it applies",
      cost: "Free",
      description:
        "Enter a 17-character VIN at NICB VINCheck.",
      tellsYou:
        "Whether participating insurers recorded it as an unrecovered theft or total loss. Some off-road vehicles and small trailers may not appear.",
      url: "https://www.nicb.org/vincheck",
      linkLabel: "NICB VINCheck",
    },
    {
      name: "Ask your state's titling agency",
      cost: "Free to ask",
      description:
        "Title and registration rules for trailers and off-highway vehicles differ by state. Ask how that vehicle type is titled or registered and what you need to transfer it.",
      tellsYou: "What paperwork a legitimate sale should include in your state.",
    },
    {
      name: "Ask police to check the number",
      cost: "Usually free; policy varies",
      description: "Some agencies will run a VIN or serial for a buyer.",
      tellsYou: "Whether the agency finds a report in systems available to it.",
    },
    sosCheck("VIN or serial"),
  ],
  redFlags: [
    "A VIN plate that's missing, riveted on crookedly, or painted over.",
    "No title or registration where your state requires one.",
    "Fresh welds, grinding marks, or repainting around the frame number.",
    "A seller who wants to meet somewhere other than where the vehicle is kept.",
  ],
  stolenSteps: buyerStolenSteps,
  safeOrStolenText: buyerSafeOrStolen,
  toolHref: "/vin-checker",
  toolLabel: "Open the VIN checker",
  faqs: [
    {
      question: "Do trailers and ATVs have VINs?",
      answer:
        "Most modern trailers and many ATVs and dirt bikes have a 17-character VIN; some older or small units use a manufacturer serial. Check the frame and paperwork.",
    },
    {
      question: "Do I need a title for an ATV or trailer?",
      answer:
        "It depends on your state and the vehicle type. Ask your state's titling agency before you buy.",
    },
    {
      question: "Does SafeOrStolen check NICB or state records?",
      answer:
        "No. SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis. Use NICB VINCheck and your state agency separately.",
    },
  ],
  related: [
    { href: "/check-motorcycle-stolen-vin", label: "How to check if a motorcycle is stolen" },
    { href: "/how-to-check-if-car-stolen", label: "How to check if a car is stolen" },
  ],
};

export const WATCH_GUIDE: DefinitiveGuideProps = {
  slug: "/check-watch-stolen",
  title: "How to Check if a Watch Is Stolen",
  metaTitle: "How to Check if a Watch Is Stolen (Serial Guide)",
  description:
    "Find a watch's serial and reference numbers, match box and papers, search a lost-and-stolen watch database, get a service-center check, and verify the seller.",
  keywords:
    "how to check if watch is stolen, rolex stolen check, watch serial number check, stolen watch database",
  directAnswer:
    "Get the serial and reference numbers from the seller before you meet, match them with the case, box, papers, and receipt, and search them on a lost-and-stolen watch database such as The Watch Register. For a high-value watch, buy through a jeweler who can inspect it or have the brand's service center or an independent watchmaker examine it before you pay.",
  identifierTitle: "Where to find a watch's serial number",
  identifierIntro:
    "Locations vary by brand; many put the serial on the caseback or between the lugs.",
  identifierLocations: [
    "Caseback engraving or between the lugs (remove the bracelet with care).",
    "The rehaut (inner bezel ring) on some modern luxury watches.",
    "Warranty card, certificate, receipt, and box label.",
  ],
  methods: [
    {
      name: "Match box, papers, and receipt",
      cost: "Free",
      description:
        "Compare the serial and reference on the watch with the warranty card, receipt, and box.",
      tellsYou: "Whether the documents belong to this watch.",
    },
    {
      name: "Search The Watch Register",
      cost: "Paid search credits",
      description:
        "The Watch Register describes itself as a global database of lost, stolen, and counterfeit watches and sells search credits.",
      tellsYou: "Whether a matching loss has been registered there.",
      url: "https://www.thewatchregister.com/",
      linkLabel: "The Watch Register",
    },
    {
      name: "Have it inspected",
      cost: "Varies",
      description:
        "A jeweler, independent watchmaker, or the brand's service center can inspect authenticity and condition.",
      tellsYou: "Whether the watch is genuine and unaltered.",
    },
    sosCheck("serial"),
  ],
  redFlags: [
    "Scratched-off, polished-away, or mismatched serial numbers.",
    "Papers or box that don't match the watch.",
    "Pressure to pay by wire or crypto, or to meet somewhere unusual.",
    "A price far below the market for that reference.",
  ],
  stolenSteps: buyerStolenSteps,
  safeOrStolenText: buyerSafeOrStolen,
  toolHref: "/serial-number-checker",
  toolLabel: "Open the serial checker",
  faqs: [
    {
      question: "Is there a stolen watch database?",
      answer:
        "Yes. The Watch Register is a paid database of lost, stolen, and counterfeit watches. SafeOrStolen does not query it.",
    },
    {
      question: "Can a missing serial number be normal?",
      answer:
        "Some watches have serials in less visible places, but a serial that has been removed or polished away is a strong warning sign. Have it inspected before you buy.",
    },
    {
      question: "Does SafeOrStolen check The Watch Register?",
      answer:
        "No. SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis.",
    },
  ],
  related: [
    { href: "/check-jewelry-stolen", label: "Jewelry check" },
    { href: "/how-to-tell-if-marketplace-item-is-stolen", label: "Marketplace buying guide" },
  ],
};

export const CAMERA_GUIDE: DefinitiveGuideProps = {
  slug: "/check-camera-stolen",
  title: "How to Check if a Camera or Lens Is Stolen",
  metaTitle: "How to Check if a Camera or Lens Is Stolen",
  description:
    "Find camera body and lens serial numbers, match them to the receipt, search the web for photos taken with that camera, and verify the seller before paying.",
  keywords:
    "how to check if camera is stolen, lens serial number check, stolen camera finder, used camera buying",
  directAnswer:
    "Get the serial numbers for the body and every lens, match them to the receipt and box, and search the web for them. Stolen Camera Finder searches for serial numbers embedded in photo files online. Test the gear in person, take a sample photo, and check the camera's menu for owner or copyright information.",
  identifierTitle: "Where to find camera and lens serials",
  identifierIntro:
    "Record the body serial and each lens serial separately.",
  identifierLocations: [
    "Camera body: usually the bottom plate or inside the battery or card door.",
    "Lenses: the barrel, rear mount, or underside.",
    "Box label, warranty card, and receipt.",
    "Many cameras write the body serial into each photo's metadata.",
  ],
  methods: [
    {
      name: "Match serials to the receipt and box",
      cost: "Free",
      description: "Compare every serial with the seller's paperwork.",
      tellsYou: "Whether the documents belong to this gear.",
    },
    {
      name: "Search with Stolen Camera Finder",
      cost: "Free",
      description:
        "Stolen Camera Finder searches the web for serial numbers embedded in photo files. Take a photo with the camera and upload it, or enter the serial.",
      tellsYou:
        "Where photos taken with that camera appear online, which can reveal the previous owner.",
      url: "https://www.stolencamerafinder.com/",
      linkLabel: "Stolen Camera Finder",
    },
    {
      name: "Check owner and copyright settings",
      cost: "Free",
      description:
        "Look in the camera's menu for an owner name or copyright field, and ask the seller to reset it in front of you.",
      tellsYou: "Whether a different person's name is set on the camera.",
    },
    sosCheck("serial"),
  ],
  redFlags: [
    "Serial labels removed, scratched, or covered.",
    "An owner or copyright name in the menu that isn't the seller's.",
    "Serials that don't match the receipt or box.",
    "Professional gear sold far below market by someone who can't answer basic questions about it.",
  ],
  stolenSteps: buyerStolenSteps,
  safeOrStolenText: buyerSafeOrStolen,
  toolHref: "/serial-number-checker",
  toolLabel: "Open the serial checker",
  faqs: [
    {
      question: "Can I check a camera serial for free?",
      answer:
        "Yes. Stolen Camera Finder is free and searches for photos online that carry the serial. SafeOrStolen is free to try with a free account.",
    },
    {
      question: "Do lenses have serial numbers?",
      answer:
        "Most interchangeable lenses do, usually on the barrel or mount. Record them separately from the body.",
    },
    {
      question: "Does SafeOrStolen check Stolen Camera Finder?",
      answer:
        "No. SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis.",
    },
  ],
  related: [
    { href: "/how-to-check-if-laptop-stolen", label: "How to check if a laptop is stolen" },
    { href: "/serial-number-checker", label: "Serial checker" },
  ],
};

export const APPLE_DEVICE_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-apple-device-stolen",
  title: "How to Check if AirPods, an Apple Watch, or an iPad Is Stolen",
  metaTitle: "Check if AirPods, Apple Watch or iPad Is Stolen",
  description:
    "Check a used iPad, Apple Watch, or AirPods: match the serial, confirm Activation Lock and Find My are off, pair it in person, and verify the seller.",
  keywords:
    "check if airpods stolen, apple watch activation lock check, used ipad stolen check, apple serial number check",
  directAnswer:
    "Match the serial number in the device's settings with the box, check it on Apple's coverage page, and have the seller remove the device from their Apple Account and Find My in front of you. For an iPad or Apple Watch, start setup yourself: if it asks for someone else's Apple Account, Activation Lock is still on. For AirPods, pair them with your own iPhone before paying.",
  identifierTitle: "Where to find the serial number",
  identifierIntro:
    "Apple devices show their serial number in Settings and on the packaging.",
  identifierLocations: [
    "iPad: Settings → General → About.",
    "Apple Watch: Settings → General → About on the watch, or the Watch app on the paired iPhone.",
    "AirPods: the paired iPhone's Bluetooth or AirPods settings, and on the case.",
    "Box label and receipt.",
  ],
  methods: [
    {
      name: "Check the serial on Apple's coverage page",
      cost: "Free",
      description:
        "Enter the serial at Apple Check Coverage and confirm the model matches the listing.",
      tellsYou: "Whether the serial matches the model the seller describes.",
      url: "https://checkcoverage.apple.com/",
      linkLabel: "Apple Check Coverage",
    },
    {
      name: "Confirm Activation Lock and Find My are off",
      cost: "Free",
      description:
        "The seller must sign out of their Apple Account and turn off Find My, then erase the device. Start setup yourself.",
      tellsYou:
        "A prompt for the previous owner's Apple Account means Activation Lock is still on.",
      url: "https://support.apple.com/en-us/108794",
      linkLabel: "Apple Activation Lock guidance",
    },
    {
      name: "Pair AirPods with your own device",
      cost: "Free",
      description:
        "Before paying, pair the AirPods with your own iPhone and check that they connect normally. Ask the seller to remove them from their Apple Account.",
      tellsYou: "Whether the AirPods work for you and are released from the seller's account.",
    },
    sosCheck("serial"),
  ],
  redFlags: [
    "The device asks for another person's Apple Account during setup.",
    "The seller can't turn off Find My or says they'll do it later.",
    "Serial numbers that don't match the box or case.",
    "AirPods sold without their case, or a case with a different serial.",
  ],
  stolenSteps: buyerStolenSteps,
  safeOrStolenText: buyerSafeOrStolen,
  toolHref: "/serial-number-checker",
  toolLabel: "Open the serial checker",
  faqs: [
    {
      question: "Can I check Activation Lock with just a serial number?",
      answer:
        "Apple doesn't offer a public page that shows Activation Lock status from a serial. Have the seller sign out and erase the device, then start setup yourself.",
    },
    {
      question: "How do I check AirPods before buying?",
      answer:
        "Match the serial, pair them with your own iPhone in person, and ask the seller to remove them from their Apple Account.",
    },
    {
      question: "Does SafeOrStolen check Apple's systems?",
      answer:
        "No. SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis. Apple checks are done on the device and on Apple's site.",
    },
  ],
  related: [
    { href: "/blog/how-to-check-if-iphone-stolen", label: "How to check if an iPhone is stolen" },
    { href: "/check-tablet-stolen", label: "Tablet check" },
    { href: "/how-to-check-if-laptop-stolen", label: "How to check if a laptop is stolen" },
  ],
};

export const BUYING_STOLEN_LEGAL_GUIDE: DefinitiveGuideProps = {
  variant: "legal",
  slug: "/is-it-illegal-to-buy-stolen-property",
  title: "Is It Illegal to Buy Stolen Property if You Didn't Know?",
  metaTitle: "Is It Illegal to Buy Stolen Property Unknowingly?",
  description:
    "General information on buying stolen property without knowing: why knowledge matters, why you may still lose the item, and how to protect yourself. Not legal advice.",
  keywords:
    "is it illegal to buy stolen property, bought stolen item unknowingly, receiving stolen property, stolen goods law",
  directAnswer:
    "In general, receiving stolen property is a crime when the buyer knew, or in many states should have known, that it was stolen, so an innocent buyer is usually treated differently from one who ignored obvious warning signs. Even so, you generally can't keep a stolen item: it can be returned to the rightful owner, and you may lose what you paid. Laws vary by state, so this is general information, not legal advice.",
  identifierTitle: "The general rules",
  identifierIntro:
    "These points describe the law in general terms. Your state's statutes and the facts of your case control.",
  identifierLocations: [
    "Knowledge matters: most receiving-stolen-property laws require that you knew, believed, or in some states should have known the item was stolen.",
    "Ownership usually stays with the victim: a thief generally can't pass good title, so police may return the item to its owner.",
    "Warning signs count: a very low price, missing serial numbers, or a seller without paperwork can be used to argue you should have known.",
    "Federal law: 18 U.S.C. § 2315 covers knowingly receiving stolen goods worth $5,000 or more that crossed a state or U.S. boundary.",
  ],
  methods: [
    {
      name: "Check the item before you pay",
      cost: "Free to low cost",
      description:
        "Match the identifier, check the official resources for that item type, and look for warning signs.",
      tellsYou: "Evidence that you acted in good faith.",
    },
    {
      name: "Keep proof of the purchase",
      cost: "Free",
      description:
        "Keep the listing, messages, seller details, receipt or bill of sale, and payment record.",
      tellsYou: "A record of who sold it and what you paid.",
    },
    {
      name: "Read the federal statute",
      cost: "Free",
      description:
        "18 U.S.C. § 2315 applies to knowingly receiving interstate stolen goods of $5,000 or more. Most cases fall under state law instead.",
      tellsYou: "The federal standard, which requires knowledge.",
      url: "https://www.law.cornell.edu/uscode/text/18/2315",
      linkLabel: "18 U.S.C. § 2315 (Cornell LII)",
    },
    {
      name: "Talk to an attorney if you're contacted by police",
      cost: "Varies",
      description:
        "If police contact you about an item you bought, cooperate, and consider speaking with a licensed attorney in your state.",
      tellsYou: "Advice specific to your situation.",
    },
  ],
  redFlags: [
    "A price far below market value.",
    "Missing, scratched-off, or mismatched serial numbers.",
    "No receipt, title, or paperwork, and a vague story.",
    "Cash-only, rushed deals in unusual places.",
    "A seller offering many similar new items.",
  ],
  stolenSteps: [
    "Stop using or reselling the item.",
    "Keep the item and all purchase records.",
    "Contact local police on the non-emergency line and explain how you bought it.",
    "Ask your payment provider about a dispute if you paid electronically.",
    "Consider speaking with a licensed attorney.",
  ],
  safeOrStolenText:
    "A SafeOrStolen check is one due-diligence step. A clean result and a Proof of Clean Purchase record show you checked the item's identifier; they are not a legal defense, title, or guarantee of ownership.",
  toolHref: "/verify",
  toolLabel: "Check an item for free",
  faqs: [
    {
      question: "Can I get in trouble for buying something stolen without knowing?",
      answer:
        "Generally, criminal liability requires that you knew or, in some states, should have known the item was stolen. Every case depends on state law and the facts. This is not legal advice.",
    },
    {
      question: "Do I get to keep a stolen item I bought in good faith?",
      answer:
        "Usually not. A thief generally can't pass ownership, so the item can be returned to the rightful owner. You may be able to seek your money back from the seller or payment provider.",
    },
    {
      question: "Does a SafeOrStolen check protect me legally?",
      answer:
        "No. It's a record that you checked the identifier, not a legal defense or guarantee. Keep your purchase records too.",
    },
  ],
  related: [
    { href: "/what-to-do-if-you-bought-something-stolen", label: "What to do if you bought something stolen" },
    { href: "/how-to-check-if-item-stolen", label: "How to check if an item is stolen" },
    { href: "/state-pawnshop-laws", label: "State pawnshop and secondhand dealer laws" },
  ],
};
