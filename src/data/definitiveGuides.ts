import type { DefinitiveGuideProps } from "@/components/guides/DefinitiveItemGuide";

const commonStolenSteps = [
  "Do not pay, take possession, or confront the seller.",
  "Save the listing URL, screenshots, messages, seller profile, payment request, and identifier.",
  "Leave the meeting safely and report the listing to the marketplace.",
  "Contact local law enforcement on the non-emergency line. Call emergency services only if someone is in immediate danger.",
  "If you already paid, preserve the item and evidence, contact police, and promptly open a dispute with your payment provider.",
];

const commonSafeOrStolen =
  "SafeOrStolen gives buyers and sellers one account for phones, vehicles, license plates, serial-numbered electronics and power tools, firearms, and bicycles. A check is an additional due-diligence step, not a substitute for inspecting the item, matching documents, checking official resources, or confirming the seller has authority to sell.";


export const PHONE_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-phone-stolen",
  title: "How to Check if a Phone Is Stolen",
  metaTitle: "How to Check if a Phone Is Stolen (IMEI Guide)",
  description:
    "Find and match a phone IMEI, check carrier blacklist status separately, inspect account locks, spot warning signs, and verify before buying.",
  keywords:
    "how to check if phone stolen, IMEI stolen check, used phone checklist, phone blacklist",
  directAnswer:
    "Get the 15-digit IMEI before meeting, confirm it on the phone in person, ask the original carrier to check its network and finance status, and make the seller remove Apple Activation Lock or Android Factory Reset Protection. Run the IMEI through SafeOrStolen to see the make and model and search its theft reports and public web results; its paid blacklist check also tells you whether the phone is on the lost and stolen carrier blacklist.",
  identifierTitle: "Where to find and match the IMEI",
  identifierIntro:
    "Most phones display the IMEI by dialing *#06#. Match that number with the device settings and, when present, the box or SIM tray.",
  identifierLocations: [
    "Dial *#06# and photograph the result.",
    "iPhone: Settings → General → About.",
    "Android: Settings → About phone; wording varies by manufacturer.",
    "Original box barcode label and, on some models, the SIM tray.",
    "Dual-SIM phones may have IMEI 1 and IMEI 2; record both.",
  ],
  methods: [
    {
      name: "Ask the original carrier",
      cost: "Usually free",
      description:
        "Ask the seller which carrier originally activated the phone, then use that carrier’s official IMEI eligibility tool or contact its support team.",
      tellsYou:
        "Whether that carrier currently considers the device eligible for service. Ask separately about unpaid-device or account restrictions because a theft check and finance check are not the same.",
    },
    {
      name: "Check account and activation locks in person",
      cost: "Free",
      description:
        "Have the seller remove their Apple or Google account, erase the phone in front of you, and begin setup while connected to Wi-Fi.",
      tellsYou:
        "Whether the phone can be activated without the previous owner’s credentials.",
    },
    {
      name: "Run a SafeOrStolen IMEI check",
      cost: "Free to try with a free account",
      description:
        "SafeOrStolen shows the phone’s make and model from the IMEI and searches theft reports filed on SafeOrStolen plus public web results. A paid blacklist check adds the lost and stolen carrier blacklist.",
      tellsYou:
        "Whether the identifier appears in the sources SafeOrStolen actually checked and whether public listing signals deserve review.",
    },
  ],
  redFlags: [
    "The seller refuses to provide the IMEI before meeting.",
    "The IMEI shown by *#06# does not match the box, tray, or listing.",
    "The seller cannot remove an Apple or Google account lock.",
    "The phone shows “lost” messaging or asks for another person’s account during setup.",
    "The seller will not let you test your SIM, cameras, charging, calls, and Wi-Fi before payment.",
    "The price is unusually low and the seller demands irreversible payment.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/imei-checker",
  toolLabel: "Open the IMEI checker",
  faqs: [
    {
      question: "Is there an official free stolen phone database?",
      answer:
        "Phone carriers share a lost and stolen phone blacklist, but there is no free public search of it. You can ask the original carrier about a specific IMEI, or use SafeOrStolen’s paid blacklist check, which searches it for you and lists the result next to SafeOrStolen theft reports and public web results.",
    },
    {
      question: "Can I check an IMEI for free?",
      answer:
        "Yes. A free SafeOrStolen account comes with 2 free checks, no credit card. An IMEI check shows the make and model and searches SafeOrStolen theft reports and public web results. The lost and stolen blacklist check is paid; monthly members ($10 a month) get up to 20 of them a month.",
    },
    {
      question: "Does a clean IMEI mean the phone is safe to buy?",
      answer:
        "No. A phone can be unreported, financed, later blacklisted, or locked to an owner account. Match the IMEI, test the phone, verify carrier status, remove account locks, and keep the payment record.",
    },
    {
      question: "Does SafeOrStolen check the lost and stolen phone blacklist?",
      answer:
        "Yes, with the paid blacklist check. It searches the lost and stolen phone blacklist and tells you whether the phone has been reported lost or stolen, alongside SafeOrStolen theft reports and public web results. A clean result is a good sign, but still test the phone and make sure it is signed out of any account lock before you pay.",
    },
    {
      question: "What if I already bought a stolen phone?",
      answer:
        "Preserve the phone, listing, messages, IMEI, and payment record. Contact local police and your payment provider. Do not resell it or attempt to bypass an account lock.",
    },
  ],
  related: [
    {
      href: "/blog/how-to-check-if-iphone-stolen",
      label: "How to check if an iPhone is stolen",
    },
    {
      href: "/blog/buying-used-phone-checklist",
      label: "Used-phone buying checklist",
    },
    {
      href: "/blog/what-is-a-blacklisted-imei",
      label: "What a blacklisted IMEI means",
    },
    {
      href: "/blog/bought-stolen-phone-what-to-do",
      label: "What to do after buying a stolen phone",
    },
  ],
};

export const IPHONE_GUIDE: DefinitiveGuideProps = {
  ...PHONE_GUIDE,
  slug: "/blog/how-to-check-if-iphone-stolen",
  title: "How to Check if an iPhone Is Stolen",
  metaTitle: "How to Check if an iPhone Is Stolen (2026)",
  description:
    "Check an iPhone IMEI, Activation Lock, Find My, carrier status, parts history, and seller paperwork before buying a used iPhone.",
  keywords:
    "how to check if iPhone stolen, Activation Lock check, Find My iPhone, used iPhone IMEI",
  directAnswer:
    "Match the iPhone’s IMEI and serial number in Settings with the physical device and box, then have the seller turn off Find My, sign out of their Apple Account, erase the iPhone, and let you begin setup. Check carrier status separately and never buy an iPhone that asks for the previous owner’s credentials.",
  identifierTitle: "Where to find the iPhone IMEI and serial number",
  identifierIntro:
    "Open Settings → General → About, or dial *#06# for the IMEI. Apple also explains where identifiers appear on supported models and packaging.",
  methods: [
    {
      name: "Match the identifiers",
      cost: "Free",
      description:
        "Compare Settings → General → About with the box and any identifier printed on the SIM tray. Check Apple’s coverage page to confirm the serial resolves to the expected model.",
      tellsYou:
        "Whether the physical phone, software identity, and packaging are consistent.",
    },
    {
      name: "Remove Find My and Activation Lock",
      cost: "Free",
      description:
        "The seller must turn off Find My, sign out, erase the iPhone, and let you start setup. Apple has no public serial-number page that tells a buyer whether Activation Lock is enabled.",
      tellsYou:
        "A setup screen asking for the previous owner’s Apple Account means Activation Lock remains.",
    },
    {
      name: "Check carrier and finance status",
      cost: "Usually free",
      description:
        "Use the original carrier’s official eligibility tool or contact the carrier with the IMEI. Ask about network eligibility and device-payment restrictions.",
      tellsYou:
        "Whether the carrier currently permits activation; it cannot guarantee a later account issue will never be reported.",
    },
    {
      name: "Run a SafeOrStolen IMEI check",
      cost: "Free to try with a free account",
      description:
        "SafeOrStolen shows the iPhone’s model from the IMEI and searches its own theft reports and public web results. The lost and stolen carrier blacklist is a separate paid check, and Activation Lock can only be confirmed on the phone itself.",
      tellsYou:
        "Whether the IMEI appears in SafeOrStolen’s checked sources and whether public-web signals need review.",
    },
  ],
  related: [
    {
      href: "/how-to-check-if-phone-stolen",
      label: "General phone and IMEI guide",
    },
    {
      href: "/blog/icloud-locked-phone-meaning",
      label: "What iCloud locked means",
    },
    {
      href: "/blog/buying-used-phone-checklist",
      label: "Used-phone buying checklist",
    },
  ],
};

export const FIREARM_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-gun-is-stolen",
  title: "How to Check if a Gun Is Stolen",
  metaTitle: "How to Check if a Gun Is Stolen Safely",
  description:
    "How to check if a gun is stolen: search police theft records by serial number, ask police, use Florida and Ohio's public searches, or buy through a licensed dealer who can check the FBI's stolen-gun file.",
  keywords:
    "how to check if gun stolen, firearm serial check, stolen gun lookup, NCIC gun serial",
  directAnswer:
    "Private buyers cannot search the FBI's NCIC stolen-gun file themselves. Instead: (1) run the serial on SafeOrStolen, which searches police theft and loss reports from 33 states and DC plus live Ohio law-enforcement records; (2) in Florida or Ohio, also use the state's free public stolen-gun search; (3) ask local police to run the serial; and (4) best of all, do the sale through a licensed dealer (FFL), who can check the serial against the FBI's stolen-gun file through NICS E-Check. Never buy a gun whose serial number is missing or altered.",
  identifierTitle: "Where to find the firearm serial number",
  identifierIntro:
    "Use the serial marked on the firearm’s frame or receiver and record the manufacturer, model, caliber, and seller’s identification as permitted by law.",
  identifierLocations: [
    "Frame or receiver marking; this is the controlling serialized part under federal rules.",
    "Seller’s receipt, bill of sale, or transfer paperwork.",
    "Original case or box label, if available; it must match the firearm.",
    "Do not proceed if a serial is removed, altered, obscured, or inconsistent.",
  ],
  methods: [
    {
      name: "Ask local law enforcement",
      cost: "Usually free; agency policy varies",
      description:
        "Call the non-emergency line before the transaction and ask whether the agency will check a firearm serial. Private buyers cannot search NCIC directly.",
      tellsYou:
        "Police can use authorized systems when agency policy permits. A buyer has no self-service NCIC access.",
    },
    {
      name: "Run a SafeOrStolen firearm check",
      cost: "2 free checks with a free account",
      description:
        "SafeOrStolen searches police firearm theft and loss reports from 33 states and Washington, DC (242,839 reports, filed through 2017; years vary by state), live Ohio law-enforcement stolen-gun records, and theft reports filed on SafeOrStolen. It does not access NCIC, ATF eTrace, or other police-only systems.",
      tellsYou:
        "Whether a police report lists a gun with this serial number, and which make, model, state and year it names. Different manufacturers can use the same serial, so compare the make stamped on the gun.",
    },
    {
      name: "Buy through a licensed dealer (FFL)",
      cost: "The dealer's transfer fee; ask the shop before you go",
      description:
        "Since 2024, federal firearms licensees can voluntarily check a serial number against the FBI's NCIC stolen-gun file, including through the FBI's NICS E-Check system. Doing a private sale as a dealer transfer also completes the background check and creates a paper trail.",
      tellsYou:
        "Whether the serial matches a gun reported stolen anywhere in the US NCIC file. This is the most complete check available to a private buyer.",
    },
    {
      name: "Search Florida or Ohio's public stolen-gun records",
      cost: "Free",
      description:
        "Florida's FDLE Public Access System and the Ohio Attorney General's stolen-gun search let anyone look up a serial reported stolen to police in that state. SafeOrStolen already searches Ohio's records for you.",
      tellsYou:
        "Whether police in that state have reported a gun with this serial number stolen. They do not cover other states.",
    },
  ],
  redFlags: [
    "A removed, ground, restamped, or partly hidden serial number.",
    "A seller who refuses lawful identification, transfer paperwork, or a police check.",
    "A description that does not match the make, model, caliber, or markings.",
    "Pressure to avoid a required dealer, permit, waiting period, or background check.",
    "A price or story that changes when you ask about provenance.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/firearms-check",
  toolLabel: "Open the firearm checker",
  faqs: [
    {
      question: "Can a private buyer search NCIC?",
      answer:
        "No. NCIC is restricted to authorized criminal-justice users. Ask local police whether they will run a serial under their policy.",
    },
    {
      question: "Can ATF trace a gun for me?",
      answer:
        "No. ATF’s National Tracing Center and eTrace serve law-enforcement investigations, not consumer pre-purchase searches.",
    },
    {
      question: "Which states have public stolen-gun serial searches?",
      answer:
        "Official public tools were confirmed for Florida, Ohio, and Utah as of September 24, 2026. Each warns that results require law-enforcement confirmation.",
    },
    {
      question: "Can a gun dealer check if a gun is stolen?",
      answer:
        "Yes. Since 2024, federal firearms licensees (FFLs) can voluntarily check a serial number against the FBI's NCIC stolen-gun file, for example through NICS E-Check. Doing a private sale as a transfer through a dealer is the most thorough way to check a used gun.",
    },
    {
      question: "What happens if I buy a stolen gun without knowing?",
      answer:
        "Police will usually take the gun so it can be returned to its owner, and you lose the money you paid unless you recover it from the seller. Buying without knowing it was stolen is generally not a crime, which is why a bill of sale with the seller's name, ID and the gun's serial number protects you.",
    },
    {
      question: "What if the serial number is scratched off or altered?",
      answer:
        "Don't buy it. Possessing a firearm with an altered or removed serial number is a federal crime under 18 U.S.C. 922(k).",
    },
    {
      question: "Does a clean result prove a firearm is not stolen?",
      answer:
        "No. Stolen-firearm databases only include thefts that were reported, so no check can include every theft. Use our result alongside police guidance and all legally required transfer procedures.",
    },
  ],
  related: [
    {
      href: "/blog/atf-gun-serial-number-check",
      label: "ATF gun serial checks explained",
    },
    {
      href: "/blog/state-stolen-gun-database-guide",
      label: "State stolen-gun lookup guide",
    },
    {
      href: "/state-firearm-transfer-laws",
      label: "State firearm transfer laws",
    },
  ],
};

export const TV_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-tv-stolen",
  title: "How to Check if a TV Is Stolen",
  metaTitle: "How to Check if a TV Is Stolen Before You Buy",
  description:
    "How to check if a used or new-in-box TV is stolen: find the serial number, search it, match the receipt, spot organized-retail-theft red flags, and what to do if it is stolen.",
  keywords:
    "how to check if tv is stolen, tv serial number lookup stolen, stolen tv check, is this tv stolen, buying tv marketplace stolen",
  directAnswer:
    "There is no public national database of stolen TVs. To check one: (1) find the serial number on the label on the back and in the TV's settings menu, and make sure they match; (2) search the serial on SafeOrStolen; (3) ask for the original receipt and check the model and date match; (4) be very careful with new, boxed TVs sold far below store price, which is a common sign of retail theft; and (5) if you are unsure, ask local police to check the serial, since police can search stolen-property records the public cannot.",
  identifierTitle: "Where to find a TV's serial number",
  identifierIntro:
    "Use the number on the TV itself, not just the box. The label on the back and the number in the settings menu should match.",
  identifierLocations: [
    "The sticker on the back panel, usually near the inputs or the stand mount.",
    "The settings menu, usually under Support, About This TV, or System Information.",
    "The original box label and receipt, which should list the same model and serial.",
    "Do not buy if the label has been removed, covered, or does not match the settings menu.",
  ],
  methods: [
    {
      name: "Run a SafeOrStolen serial check",
      cost: "2 free checks with a free account",
      description:
        "SafeOrStolen searches theft reports filed by owners on SafeOrStolen and public web results for the serial number.",
      tellsYou:
        "Whether the TV's serial appears in a theft report or in a public post about a theft. A clean result does not prove the TV is not stolen.",
    },
    {
      name: "Match the receipt and the seller's story",
      cost: "Free",
      description:
        "Ask for the original receipt or order confirmation. The model, store and date should make sense, and the seller should be able to explain why they are selling.",
      tellsYou:
        "Whether there is a paper trail that ties the seller to the TV.",
    },
    {
      name: "Ask local police to check the serial",
      cost: "Usually free; policy varies",
      description:
        "Call the non-emergency line and ask whether they will check a serial number. Police can search stolen-property records, including pawn and theft reports, that the public cannot.",
      tellsYou:
        "Whether the serial has been reported stolen to police, when the agency is able to check it.",
    },
  ],
  redFlags: [
    "Several new TVs in sealed boxes, or a brand-new model at a price far below any store.",
    "A seller who wants to meet in a parking lot, has no receipt, and cannot say where it was bought.",
    "A missing or covered serial label, or a label that does not match the settings menu.",
    "Store security tags, store stickers, or a damaged box from a forced display.",
    "Pressure to pay now in cash or with a payment app that has no buyer protection.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/serial-number-checker",
  toolLabel: "Check a TV serial number",
  faqs: [
    {
      question: "Can I look up a TV serial number to see if it is stolen?",
      answer:
        "Yes, in part. Search the serial on SafeOrStolen, which checks owner theft reports and public web results. There is no single public national database of stolen TVs, so also match the receipt and, if in doubt, ask local police to check the serial.",
    },
    {
      question: "Can Samsung, LG, Sony or another manufacturer tell me if a TV is stolen?",
      answer:
        "Manufacturer support pages can confirm a model and warranty details, but they are not public stolen-property searches. Use them to confirm the serial is real and matches the model, not to prove the TV is clean.",
    },
    {
      question: "Why are cheap new TVs in boxes a red flag?",
      answer:
        "Organized retail theft rings often resell new electronics online for far below store prices. A sealed, current-model TV at a big discount with no receipt is one of the most common signs.",
    },
    {
      question: "What happens if I buy a stolen TV?",
      answer:
        "If police identify it, the TV is usually returned to its owner and you lose what you paid. Keep the listing, messages and payment record, and report the seller to police and the marketplace.",
    },
    {
      question: "My TV was stolen. What should I do?",
      answer:
        "File a police report with the serial number, then report it on SafeOrStolen so anyone who checks that serial sees it was stolen. If you do not know the serial, look for the box, receipt, or the brand account where you registered it.",
    },
  ],
  related: [
    { href: "/how-to-check-if-laptop-stolen", label: "How to check if a laptop or electronics is stolen" },
    { href: "/how-to-tell-if-marketplace-item-is-stolen", label: "How to tell if a marketplace item is stolen" },
    { href: "/report-stolen", label: "Report a stolen item" },
  ],
};

export const BIKE_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-bike-stolen",
  title: "How to Check if a Bike or E-Bike Is Stolen",
  metaTitle: "How to Check if a Bike Is Stolen (2026)",
  description:
    "Find a bicycle serial number, search a national stolen-bicycle registry, match seller records, inspect an e-bike, and know what to do if a bike may be stolen.",
  keywords:
    "how to check if bike stolen, bicycle serial lookup, e-bike stolen check, stolen bike registry search",
  directAnswer:
    "Find the frame serial number, check it with SafeOrStolen, compare it with the seller’s receipt and photos, and inspect the frame for alteration. For an e-bike, also record the battery, motor, and display identifiers and confirm any linked tracking account is transferred.",
  identifierTitle: "Where to find the bike serial number",
  identifierIntro:
    "The frame serial is most often stamped under the bottom bracket, but manufacturers use several locations.",
  identifierLocations: [
    "Under the bottom bracket where the crank arms meet.",
    "Head tube, rear dropout, seat tube, or underside of the top tube.",
    "Original receipt, warranty registration, and manufacturer records.",
    "E-bike battery, motor, and display may each have separate identifiers.",
  ],
  methods: [
    {
      name: "Check manufacturer or shop registration",
      cost: "Usually free",
      description:
        "Ask the seller to show the original receipt and any manufacturer, dealer, or local registry record. Transfer the registration where the service supports it.",
      tellsYou:
        "Whether the seller’s records and the bike’s description align; availability depends on the brand or local program.",
    },
    {
      name: "Ask local police about the serial",
      cost: "Usually free; policy varies",
      description:
        "Provide the complete serial and description. Police may check authorized systems; the public cannot search NCIC.",
      tellsYou:
        "Whether the agency can identify a report in systems available to it.",
    },
    {
      name: "Run a SafeOrStolen bicycle check",
      cost: "Free to try with a free account",
      description:
        "SafeOrStolen searches a national stolen-bicycle registry, theft reports filed on SafeOrStolen, and public web results that mention the serial.",
      tellsYou:
        "Whether the serial appears in those sources and whether matching public context needs review.",
    },
  ],
  redFlags: [
    "Serial number ground off, painted over, or covered by a sticker.",
    "Seller will not share the serial before meeting.",
    "E-bike account, app, or tracker cannot be removed from the prior owner.",
    "Battery or motor identifiers do not match the seller’s records.",
    "A high-value bike with no credible history, receipt, key, charger, or explanation.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/check-bike",
  toolLabel: "Open the bike checker",
  faqs: [
    {
      question: "Is the bike check free?",
      answer:
        "Yes. Your first checks on SafeOrStolen are free, and the bike check searches a national stolen-bicycle registry for you.",
    },
    {
      question: "What if the serial has no match?",
      answer:
        "No match means only that a matching report was not found there. Many bikes are never registered or reported, so continue checking the seller, receipt, physical bike, and local police guidance.",
    },
    {
      question: "How do I check an e-bike?",
      answer:
        "Check the frame serial plus battery, motor, display, keys, charger, and any manufacturer tracking account. Make sure the seller can transfer or remove linked ownership.",
    },
    {
      question: "Does SafeOrStolen really search a stolen-bicycle registry?",
      answer:
        "Yes. Every bike check searches a national stolen-bicycle registry, along with theft reports filed on SafeOrStolen and public web results. The result lists each source it searched.",
    },
  ],
  related: [
    { href: "/check-bike", label: "Bike serial checker" },
    { href: "/serial-number-checker", label: "General serial checker" },
    {
      href: "/how-to-tell-if-marketplace-item-is-stolen",
      label: "Marketplace buying guide",
    },
  ],
};

export const LAPTOP_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-laptop-stolen",
  title: "How to Check if a Laptop or Electronics Item Is Stolen",
  metaTitle: "How to Check if a Laptop Is Stolen (Free Serial Number Check)",
  description:
    "How to check if a laptop is stolen: search its serial number free, match it to the device, clear account and company locks, and check the seller's records before you pay.",
  keywords:
    "how to check if laptop stolen, laptop serial number lookup, used electronics check",
  directAnswer:
    "Record the serial number from both the device and its settings, confirm the manufacturer recognizes it, have the seller remove account or organization locks, and ask for a receipt. Search the serial on the public web and with SafeOrStolen, then test the device before paying.",
  identifierTitle: "Where to find a laptop or electronics serial number",
  identifierIntro:
    "Match the number printed on the device with the number shown in its operating system or firmware.",
  identifierLocations: [
    "Label or engraving on the underside, rear panel, battery bay, or stand.",
    "macOS: Apple menu → About This Mac; Windows: Settings → System → About or firmware setup.",
    "Original box, receipt, warranty page, or manufacturer account.",
    "Accessories such as tablets, cameras, and consoles may place the serial inside Settings or a battery compartment.",
  ],
  methods: [
    {
      name: "Confirm the manufacturer recognizes the serial",
      cost: "Usually free",
      description:
        "Use the manufacturer’s official warranty or support page when one is available. Confirm the model returned matches the item.",
      tellsYou:
        "Whether the serial has a plausible format and belongs to the expected model; it does not prove ownership or theft status.",
    },
    {
      name: "Remove account and organization controls",
      cost: "Free",
      description:
        "Have the seller sign out, disable device-finding features, remove mobile-device management, erase the device, and let you begin setup.",
      tellsYou:
        "Whether the device remains controlled by another person, school, or employer.",
    },
    {
      name: "Review receipt and seller history",
      cost: "Free",
      description:
        "Compare the serial with the receipt, box, warranty account, and marketplace profile. Contact the issuing store only through its official contact details if confirmation is available.",
      tellsYou:
        "Whether the seller’s story and the item’s paper trail are consistent.",
    },
    {
      name: "Run a SafeOrStolen serial check",
      cost: "Free to try with a free account",
      description:
        "SafeOrStolen searches theft reports filed on SafeOrStolen and public web results that mention the serial. It does not query Apple, Microsoft, manufacturer, police, or insurance databases.",
      tellsYou:
        "Whether the serial appears in SafeOrStolen’s checked sources and public-web context.",
    },
  ],
  redFlags: [
    "Serial labels are removed, replaced, scratched, or do not match settings.",
    "The device asks for another person’s account or an organization login after reset.",
    "The seller refuses a fresh reset and setup demonstration.",
    "The item has an asset tag from a school or business without release paperwork.",
    "The seller cannot explain a remote-management warning, missing charger, or unusually low price.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/serial-number-checker",
  toolLabel: "Open the serial checker",
  faqs: [
    {
      question: "Can Apple, Dell, HP, or Lenovo tell me if a laptop is stolen?",
      answer:
        "Manufacturer support pages generally identify a model or warranty status; they are not universal public stolen-property searches. Ask what the official page confirms and do not treat warranty recognition as proof of ownership.",
    },
    {
      question: "What does Remote Management mean on a used laptop?",
      answer:
        "It can mean a school or business still controls the device. Do not buy unless the organization has properly released it and the setup screen no longer requires its credentials.",
    },
    {
      question: "Does SafeOrStolen search manufacturer databases?",
      answer:
        "No. A laptop check searches theft reports filed on SafeOrStolen and public web results. Manufacturer support and ownership checks are separate.",
    },
    {
      question: "Should I trust a clean serial result?",
      answer:
        "Treat it as one data point. Match the serial, reset the device, inspect seller records, test it, and use a protected payment method.",
    },
  ],
  related: [
    { href: "/serial-number-checker", label: "Serial-number checker" },
    { href: "/check-ps5", label: "PS5 serial number check" },
    { href: "/how-to-check-if-tools-stolen", label: "Power-tool guide" },
  ],
};

export const TOOLS_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-tools-stolen",
  title: "How to Check if Power Tools Are Stolen",
  metaTitle: "How to Check if a Tool Is Stolen — Free Serial Number Lookup",
  description:
    "How to check if a power tool is stolen: look up the serial number free, compare it with the receipt, spot removed labels and owner markings, and know when to walk away.",
  keywords:
    "how to check if tools stolen, power tool serial number check, used DeWalt Milwaukee Makita",
  directAnswer:
    "Record the model and serial number from each tool, battery, and charger; compare them with the receipt and manufacturer account; inspect for removed labels or owner markings; and ask local police about a serial check. Manufacturer tracking programs help only when the tool supports them and the prior owner properly transfers or releases it.",
  identifierTitle: "Where to find power-tool identifiers",
  identifierIntro:
    "Each tool in a kit may have its own model and serial number. Batteries, chargers, and tracking modules can have separate identifiers.",
  identifierLocations: [
    "Product label near the motor housing, handle, battery connection, or underside.",
    "Laser engraving or stamped metal plate on larger equipment.",
    "Original receipt, box label, warranty registration, or manufacturer account.",
    "Battery, charger, case, and tracking tag identifiers for a complete kit.",
  ],
  methods: [
    {
      name: "Check manufacturer registration or tracking",
      cost: "Varies; check the manufacturer",
      description:
        "Ask the seller to show the tool in their manufacturer account and transfer or remove it where supported. Programs differ by brand and model; do not assume every tool is trackable.",
      tellsYou:
        "Whether a supported tool is linked to the seller’s account and whether available ownership or tracking features can be transferred.",
    },
    {
      name: "Match receipts, kit contents, and markings",
      cost: "Free",
      description:
        "Compare every model and serial with the receipt, box, case, batteries, and seller’s description. Photograph permanent owner markings rather than removing them.",
      tellsYou: "Whether the kit has a consistent, explainable history.",
    },
    {
      name: "Ask local police about a serial check",
      cost: "Usually free; policy varies",
      description:
        "Provide the model, serial, photos, and any visible asset markings. Police may check authorized records unavailable to the public.",
      tellsYou:
        "Whether the agency can locate a matching report in systems it can access.",
    },
    {
      name: "Run a SafeOrStolen serial check",
      cost: "Free to try with a free account",
      description:
        "SafeOrStolen searches theft reports that tool owners filed on SafeOrStolen and public web results that mention the serial. It does not query manufacturer, contractor, police, or insurance databases.",
      tellsYou:
        "Whether the identifier appears in SafeOrStolen’s checked sources and public-web context.",
    },
  ],
  redFlags: [
    "Serial label removed, painted over, reattached, or inconsistent with the tool.",
    "Company, contractor, rental, school, or government asset markings without release records.",
    "Many nearly new tools sold without batteries, chargers, cases, receipts, or a credible explanation.",
    "A seller will not provide serials or allow a manufacturer-account transfer.",
    "Cash-only pressure, meeting-location changes, or a price far below comparable used tools.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/serial-number-checker",
  toolLabel: "Open the serial checker",
  faqs: [
    {
      question:
        "Can I look up a DeWalt, Milwaukee, Makita, or Ryobi serial number?",
      answer:
        "You can confirm model and support information through the manufacturer when available, but there is no universal public manufacturer theft database. Ask about registration or tracking features for the exact model.",
    },
    {
      question: "Does every tracked tool have GPS?",
      answer:
        "No. Tracking technology and range vary by brand and model. Some systems use nearby phones or dedicated equipment rather than continuous GPS.",
    },
    {
      question: "Should I check every tool in a kit?",
      answer:
        "Yes. Record each tool, battery, charger, case, and tracking-module identifier because mixed kits can have different histories.",
    },
    {
      question: "Does SafeOrStolen search manufacturer systems?",
      answer:
        "No. A tool check searches theft reports filed on SafeOrStolen and public web results. Manufacturer registration and tracking checks are separate.",
    },
  ],
  related: [
    { href: "/serial-number-checker", label: "Serial-number checker" },
    {
      href: "/how-to-check-if-laptop-stolen",
      label: "Laptop and electronics guide",
    },
    {
      href: "/how-to-tell-if-marketplace-item-is-stolen",
      label: "Marketplace buying guide",
    },
  ],
};

export const BOAT_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-boat-stolen",
  title: "How to Check if a Boat Is Stolen",
  metaTitle: "How to Check if a Boat Is Stolen (HIN Guide)",
  description:
    "Find and match a boat HIN, search official Coast Guard documentation, check state records, inspect tampering, and verify before buying.",
  keywords:
    "how to check if boat stolen, HIN lookup, boat hull identification number, used boat check",
  directAnswer:
    "Find the 12-character Hull Identification Number (HIN), match it with the title and registration, check federal documentation if the vessel is documented, and ask the state titling agency and local marine patrol about their records. Also check the trailer VIN and outboard serial separately.",
  identifierTitle: "Where to find and match the HIN",
  identifierIntro:
    "A HIN identifies the hull, while the trailer and outboard motor have separate identifiers. Record and check all three.",
  identifierLocations: [
    "Starboard side of the transom, generally near the top.",
    "A second concealed or less accessible location placed by the manufacturer.",
    "State title, registration, bill of sale, and insurance paperwork.",
    "Trailer VIN and plate; outboard motor model and serial number.",
  ],
  methods: [
    {
      name: "Contact the state boat agency",
      cost: "Varies by state",
      description:
        "Ask the agency that titles or numbers boats how to verify the HIN and request available records. The responsible office may be a DMV, wildlife agency, or other state department.",
      tellsYou:
        "State title, registration, lien, or record information that the agency is legally allowed to disclose.",
    },
    {
      name: "Ask local police or marine patrol",
      cost: "Usually free; policy varies",
      description:
        "Provide the HIN, trailer VIN and plate, motor serial, seller details, and photos.",
      tellsYou:
        "Whether the agency can check authorized stolen-property records.",
    },
    {
      name: "Run the HIN through SafeOrStolen",
      cost: "Free to try with a free account",
      description:
        "SafeOrStolen treats the HIN as a general serial number and searches its own theft reports and public web results. It has no marine-specific source.",
      tellsYou:
        "Whether the HIN appears in the sources SafeOrStolen checked; official boat records remain separate.",
    },
  ],
  redFlags: [
    "HIN plate scratched, painted over, glued, re-riveted, or different from paperwork.",
    "The primary and hidden HIN do not match.",
    "Seller name does not match title and no lawful authority to sell is shown.",
    "Trailer VIN or outboard serial is missing or inconsistent.",
    "Last-minute cash pressure, missing keys, or no plausible maintenance and registration history.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/serial-number-checker",
  toolLabel: "Check a HIN as a serial number",
  faqs: [
    {
      question: "Does the Coast Guard search show every boat?",
      answer:
        "No. Federal documentation generally applies to qualifying vessels, while many recreational boats are titled or numbered by states.",
    },
    {
      question: "Does SafeOrStolen have a marine database?",
      answer:
        "No. It checks a HIN like any other serial number: against theft reports filed on SafeOrStolen and public web results.",
    },
    {
      question: "Do I need to check the trailer and motor too?",
      answer:
        "Yes. The hull, trailer, and outboard are separate property with separate identifiers and paperwork.",
    },
    {
      question: "What if the boat has no title?",
      answer:
        "Requirements vary by state. Contact the state boat agency before paying and do not rely on a bill of sale when the state requires a title.",
    },
  ],
  related: [
    { href: "/serial-number-checker", label: "Serial-number checker" },
    { href: "/vin-checker", label: "Trailer VIN checker" },
    { href: "/how-to-check-if-item-stolen", label: "All item guides" },
  ],
};

export const PLATE_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-check-if-license-plate-stolen",
  title: "How to Look Up a License Plate and Check if It Is Stolen",
  metaTitle: "How to Check if a License Plate Is Stolen",
  description:
    "Learn what the public can legally learn from a plate, how to spot a swapped plate, when to contact police, and where to find state plate guidance.",
  keywords:
    "license plate lookup, check stolen plate, plate owner lookup, DPPA plate records",
  directAnswer:
    "The public generally cannot use a plate to obtain an owner’s private DMV information. You can compare the plate with the registration and vehicle, search public web results, and report a suspicious or found vehicle to police, who can access authorized records. Always match the VIN because a clean plate can be moved to a stolen car.",
  identifierTitle: "What to record from the plate and vehicle",
  identifierIntro:
    "Record the plate exactly as displayed, its issuing state, and the vehicle details. Then compare them with the registration and VIN.",
  identifierLocations: [
    "Front and rear plates where required; note missing, mismatched, damaged, or temporary plates.",
    "Registration document: plate, VIN, year, make, model, and color.",
    "Dashboard and driver-door VIN locations.",
    "Listing photos and description; preserve them before the seller edits or removes the listing.",
  ],
  methods: [
    {
      name: "Compare the plate, registration, and VIN",
      cost: "Free",
      description:
        "The seller should show current registration and identification consistent with their authority to sell. Match the vehicle description and VIN.",
      tellsYou:
        "Whether the plate and paperwork appear to belong to the vehicle in front of you.",
    },
    {
      name: "Understand DMV privacy limits",
      cost: "Free",
      description:
        "The federal Driver’s Privacy Protection Act restricts disclosure and misuse of personal information from motor-vehicle records. State record-request procedures and permitted uses vary.",
      tellsYou:
        "Why a legitimate public lookup should not promise a stranger’s name, address, or other protected DMV information.",
    },
    {
      name: "Ask police to check a suspicious plate",
      cost: "Free",
      description:
        "If the vehicle, plate, VIN, or seller information conflicts, leave and contact local police on the non-emergency line. Police can use authorized state and national systems.",
      tellsYou:
        "Whether law enforcement can confirm a stolen vehicle or plate report.",
    },
    {
      name: "Run a SafeOrStolen plate check",
      cost: "Free to try with a free account",
      description:
        "SafeOrStolen searches theft reports filed on SafeOrStolen and public web results; Arizona plates are also checked against Arizona law-enforcement stolen-vehicle records. It does not access DMV registration records or reveal an owner’s private information.",
      tellsYou:
        "Whether the plate appears in SafeOrStolen’s checked sources and public-web context.",
    },
  ],
  redFlags: [
    "Plate details do not match the registration, VIN, make, model, or color.",
    "Two different plates, missing screws, fresh mounting marks, or an altered temporary tag.",
    "Seller will not show the VIN or registration.",
    "A request for an owner’s name or address from an unofficial lookup service.",
    "The seller changes meeting locations or pressures you to pay before inspection.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/license-plate-lookup",
  toolLabel: "Open the plate checker",
  faqs: [
    {
      question: "Can I find someone’s name or address from a plate?",
      answer:
        "Not for ordinary curiosity or shopping. DMV personal information is restricted under federal and state law, with specific permitted uses.",
    },
    {
      question: "Can a plate tell me if the car itself is stolen?",
      answer:
        "A plate is only a starting point because plates can be stolen or swapped. Match the registration and always check the VIN in every location.",
    },
    {
      question: "Does SafeOrStolen access DMV records?",
      answer:
        "No. A plate check searches theft reports filed on SafeOrStolen and public web results, plus Arizona law-enforcement records for Arizona plates. It never shows owner names or other protected information.",
    },
    {
      question: "What should I do with a suspicious plate?",
      answer:
        "Do not follow or confront anyone. Record what you can safely observe and contact local police.",
    },
  ],
  related: [
    {
      href: "/license-plate-lookup",
      label: "License plate checker and state links",
    },
    {
      href: "/how-to-check-if-car-stolen",
      label: "How to check if a car is stolen",
    },
    { href: "/vin-checker", label: "VIN checker" },
  ],
};

export const MARKETPLACE_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-tell-if-marketplace-item-is-stolen",
  title: "How to Tell if a Marketplace Item Is Stolen",
  metaTitle: "How to Spot a Stolen Marketplace Item",
  description:
    "Check Facebook Marketplace, OfferUp, Craigslist, eBay, Mercari, or Poshmark listings using identifiers, seller evidence, red flags, and safer payment steps.",
  keywords:
    "Facebook Marketplace stolen item, OfferUp stolen goods, Craigslist safety, marketplace listing checker",
  directAnswer:
    "Ask for the item’s full identifier before meeting, search the listing photos and text, compare the identifier in person, and request a receipt or ownership history. Walk away if the seller hides the identifier, cannot explain the item’s history, prevents testing, or demands irreversible payment before inspection.",
  identifierTitle: "Which identifier to request",
  identifierIntro:
    "The identifier depends on the item. Ask for it in the marketplace message thread so the request and response are preserved.",
  identifierLocations: [
    "Phone: 15-digit IMEI from *#06# and Settings.",
    "Vehicle: 17-character VIN plus plate and title.",
    "Laptop, electronics, or tools: model and serial number.",
    "Firearm: manufacturer, model, caliber, and receiver serial; follow all transfer laws.",
    "Bicycle: frame serial, plus e-bike battery and motor identifiers.",
  ],
  methods: [
    {
      name: "Analyze the listing and images",
      cost: "Free",
      description:
        "Reverse-image search photos, compare the seller’s other listings, read profile history, and preserve screenshots. Search the exact identifier in quotes when it is public and safe to do so.",
      tellsYou:
        "Whether photos or text were copied, the same item appears elsewhere, or the seller story conflicts with public information.",
    },
    {
      name: "Run the matching SafeOrStolen check",
      cost: "Free to paid, depending on resource",
      description:
        "Run the SafeOrStolen check built for the item type, whether it is a phone, car, bike, firearm, or something else, and follow the next steps it gives you.",
      tellsYou:
        "Item-specific facts that no general marketplace scan can replace.",
    },
    {
      name: "Inspect and match in person",
      cost: "Free",
      description:
        "Meet in a public place, compare the identifier with the listing and paperwork, test the item, and do not accept a substitute item.",
      tellsYou:
        "Whether the physical item is the same one you researched and whether it functions as described.",
    },
    {
      name: "Use the SafeOrStolen marketplace URL analyzer",
      cost: "Free to try with a free account",
      description:
        "Paste a Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark URL. The tool pulls out the listing details and any identifier it can find, then searches theft reports filed on SafeOrStolen and public web results.",
      tellsYou:
        "Listing-level risk signals and any available identifier result; missing identifiers and inaccessible listing content limit the analysis.",
    },
  ],
  redFlags: [
    "Seller refuses to provide an identifier or sends one that does not match in person.",
    "Copied or stock photos, inconsistent location, or many high-value items with the same story.",
    "Price far below comparable items with pressure to act immediately.",
    "Deposit, gift card, wire, cryptocurrency, or friends-and-family payment demanded before inspection.",
    "Missing receipt, title, keys, charger, account access, or a credible explanation.",
    "Seller will not meet publicly or allow a full test.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/marketplace-url-checker",
  toolLabel: "Analyze a marketplace URL",
  faqs: [
    {
      question: "Can a listing URL alone prove an item is stolen?",
      answer:
        "No. A URL analysis can find risk signals and identifiers, but you must match the identifier on the physical item and use item-specific official checks.",
    },
    {
      question: "Which marketplaces can SafeOrStolen analyze?",
      answer:
        "The analyzer supports links from Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, and Poshmark, subject to what the listing makes available.",
    },
    {
      question: "What if the seller will not share the serial number?",
      answer:
        "Do not proceed. Without the identifier you cannot confirm that the item you researched is the item being sold.",
    },
    {
      question: "What payment method should I use?",
      answer:
        "Use a method and marketplace flow that clearly offers buyer protection for the transaction. Read the provider’s current terms and avoid irreversible advance payments.",
    },
  ],
  related: [
    { href: "/marketplace-url-checker", label: "Marketplace URL analyzer" },
    {
      href: "/what-to-do-if-you-bought-something-stolen",
      label: "What to do after buying a stolen item",
    },
    { href: "/how-to-check-if-item-stolen", label: "All item guides" },
  ],
};

export const BOUGHT_STOLEN_GUIDE: DefinitiveGuideProps = {
  slug: "/what-to-do-if-you-bought-something-stolen",
  title: "What to Do if You Bought Something Stolen",
  metaTitle: "What to Do After Buying a Stolen Item",
  description:
    "Practical steps after discovering a purchase may be stolen: preserve evidence, stop using or reselling it, contact police and payment providers, and protect yourself.",
  keywords:
    "bought stolen item what to do, accidentally bought stolen property, report marketplace seller",
  directAnswer:
    "Stop using, moving, resetting, or reselling the item; preserve the listing, messages, identifier, and payment record; and contact local police on the non-emergency line. Then notify the marketplace and payment provider promptly, follow their dispute process, and get legal advice if you are concerned about your rights or obligations.",
  identifierTitle: "Preserve the item and its identifier",
  identifierIntro:
    "Do not erase, alter, repair, or hand the item to anyone claiming ownership without police guidance. Record its condition and identifying details.",
  identifierLocations: [
    "Photograph the IMEI, VIN, plate, serial, firearm serial, bike serial, or HIN.",
    "Save the original listing URL and screenshots.",
    "Export or screenshot the complete seller conversation and profile.",
    "Keep receipts, transfer records, shipping labels, and payment confirmations.",
    "Write down when and where the exchange occurred and who was present.",
  ],
  methods: [
    {
      name: "Contact local police",
      cost: "Free",
      description:
        "Use the non-emergency line unless there is immediate danger. Explain how you acquired the item and provide the identifier and preserved evidence.",
      tellsYou:
        "How the agency wants the item preserved, reported, or surrendered and whether it can confirm a theft report.",
    },
    {
      name: "Open a marketplace report",
      cost: "Free",
      description:
        "Use the platform’s official reporting process and attach only the evidence requested. Do not continue negotiating or arrange another meeting.",
      tellsYou:
        "Whether the platform can preserve the account and transaction information or provide buyer remedies under its current policy.",
    },
    {
      name: "Contact the payment provider",
      cost: "Usually free to open a dispute",
      description:
        "Act quickly and use the official fraud or purchase-dispute process. Provide the police report number when available.",
      tellsYou:
        "Whether the transaction qualifies for reversal or purchase protection under the provider’s terms.",
    },
    {
      name: "Save your SafeOrStolen result",
      cost: "Included with the check",
      description:
        "Keep the result with your evidence, but do not present it as a police finding, ownership decision, or legal document.",
      tellsYou:
        "What SafeOrStolen’s sources returned at the time of the check.",
    },
  ],
  redFlags: [
    "Anyone asks you to delete messages, reset the item, remove a serial, or return it privately.",
    "The seller threatens you or pressures you not to contact police.",
    "A supposed owner asks for money before providing a police report.",
    "A payment provider message arrives outside the provider’s official app or website.",
    "Someone requests the full identifier publicly; share it only with appropriate authorities and service providers.",
  ],
  stolenSteps: commonStolenSteps,
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/verify",
  toolLabel: "Review your verification history",
  faqs: [
    {
      question: "Will police take the item?",
      answer:
        "They may if it is evidence or confirmed stolen. Follow the handling instructions given by the investigating agency and request a report or property receipt when appropriate.",
    },
    {
      question: "Can I sell it to recover my money?",
      answer:
        "Do not resell an item you believe may be stolen. That can harm the owner, compromise evidence, and create legal risk.",
    },
    {
      question: "Can SafeOrStolen decide who owns the item?",
      answer:
        "No. SafeOrStolen provides a verification result from the sources it checks. Ownership and recovery decisions belong to the relevant parties and authorities.",
    },
    {
      question: "Should I contact the seller?",
      answer:
        "Preserve the conversation but avoid confrontation. Ask police and the marketplace how to proceed, especially if you feel unsafe.",
    },
  ],
  related: [
    {
      href: "/how-to-tell-if-marketplace-item-is-stolen",
      label: "Marketplace guide",
    },
    { href: "/how-to-check-if-phone-stolen", label: "Phone guide" },
    { href: "/how-to-check-if-car-stolen", label: "Vehicle guide" },
  ],
};

export const SELLER_PROOF_GUIDE: DefinitiveGuideProps = {
  slug: "/how-to-prove-item-is-not-stolen",
  title: "How to Show Buyers an Item Wasn't Reported Stolen",
  metaTitle: "How to Show an Item Wasn't Reported Stolen",
  description:
    "A seller guide to organizing receipts, matching identifiers, creating a Proof of Clean Purchase record, and sharing honest verification details.",
  keywords:
    "prove item not stolen, seller verification record, Proof of Clean Purchase, verified marketplace listing",
  directAnswer:
    "Show the buyer the item’s identifier, original receipt or ownership history, matching account or registration details, and a recent verification result they can open themselves. Invite the buyer to compare the identifier in person and run an independent check; never describe a clean result as proof of ownership or a guarantee.",
  identifierTitle: "Prepare the identifier and ownership trail",
  identifierIntro:
    "Record the identifier exactly as it appears on the item and collect the documents that explain how you acquired it.",
  identifierLocations: [
    "IMEI for phones; VIN and plate for vehicles.",
    "Serial number for electronics and power tools.",
    "Receiver serial for firearms, following all transfer laws.",
    "Frame serial for bicycles; HIN for boats.",
    "Receipt, order email, registration, warranty account, or prior bill of sale.",
  ],
  methods: [
    {
      name: "Match the physical item and records",
      cost: "Free",
      description:
        "Photograph the identifier and compare it with the receipt, box, account, title, or registration. Do not publish a full sensitive identifier in an open listing.",
      tellsYou:
        "Whether your records consistently describe the exact item you are selling.",
    },
    {
      name: "Remove personal account locks",
      cost: "Free",
      description:
        "Sign out of device accounts, disable tracking tied to you, and prepare any supported registration transfer. Demonstrate the process in person when practical.",
      tellsYou:
        "Whether the buyer can take control without your credentials remaining attached.",
    },
    {
      name: "Run a current SafeOrStolen check",
      cost: "Free to try with a free account",
      description:
        "Check the identifier and save the result to your account. If the checked sources return clean, create a Proof of Clean Purchase record.",
      tellsYou:
        "What SafeOrStolen’s own theft reports, public web results, and any item-specific records it searched returned on that date.",
    },
    {
      name: "Let the buyer verify independently",
      cost: "Buyer chooses",
      description:
        "Share the record link, show the identifier in person, and encourage the buyer to use item-specific official resources and their own SafeOrStolen check.",
      tellsYou:
        "That the buyer is reviewing current information rather than relying only on your screenshot.",
    },
  ],
  redFlags: [
    "A receipt or box identifier does not match the item.",
    "An account, lien, registration, or organization lock cannot be released.",
    "A shared report URL does not open or its masked identifier does not match.",
    "A seller claim goes beyond what the check actually established.",
    "Any request to hide an identifier mismatch or avoid a legally required transfer.",
  ],
  stolenSteps: [
    "Pause the listing and do not transfer the item.",
    "Review the result and confirm that the identifier was entered correctly.",
    "Preserve your purchase records and contact local police if the result indicates strong stolen evidence.",
    "Use SafeOrStolen support for a result dispute, but do not resell while the issue is unresolved.",
    "If your own purchase was recent, contact the marketplace and payment provider.",
  ],
  safeOrStolenText: commonSafeOrStolen,
  toolHref: "/verify",
  toolLabel: "Verify an item for sale",
  faqs: [
    {
      question: "Is Proof of Clean Purchase proof that I own the item?",
      answer:
        "No. It is a dated verification record with its own link, showing what a SafeOrStolen check returned. It is not a title, ownership proof, guarantee, or legal document.",
    },
    {
      question: "Should I publish the full identifier?",
      answer:
        "No. Share a privacy-conscious record and let a serious buyer compare the full identifier in person or through a secure channel.",
    },
    {
      question: "Does a clean result guarantee the item was never stolen?",
      answer:
        "No. Not every theft is reported and sources can change. State exactly what was checked and when.",
    },
    {
      question: "What should buyers verify themselves?",
      answer:
        "They should match the physical identifier, review your records, use the relevant official resources, inspect the item, and choose a protected payment method.",
    },
  ],
  related: [
    { href: "/proof-of-purchase", label: "About Proof of Clean Purchase" },
    { href: "/for-sellers", label: "SafeOrStolen for sellers" },
    { href: "/blog/how-to-sell-verified-items", label: "Seller listing guide" },
  ],
};
