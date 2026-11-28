/**
 * Nov 27 2026: state-specific facts for the gun serial number lookup pages of states SafeOrStolen holds no
 * police reports from. Without them those 16 pages differed only by the state name, and Search Console
 * grouped them as duplicates ("Google chose different canonical"). Every fact was checked on an official
 * source (state code / legislature site, state agency site, or ATF's official state-law compilation,
 * 36th ed., rev. Jan 15 2026) and carries its citation. Add a state only with sourced facts.
 */
export interface GunStateLaw {
  /** State law-enforcement agency and its records unit. */
  agency: string;
  /** Where and when to report a lost or stolen gun. */
  reportStolen: string;
  /** Buyer-relevant rules, each with its citation. */
  rules: string[];
  /** Pawn shop / secondhand dealer serial-number rule (omitted when no official source confirmed it). */
  pawn?: string;
  /** One extra fact for a private buyer. */
  extra?: string;
}

export const GUN_STATE_LAWS: Record<string, GunStateLaw> = {
  alabama: {
    agency: "The Alabama Law Enforcement Agency (ALEA), whose Criminal Justice Information Services (CJIS) Division runs the state's criminal-information systems.",
    reportStolen: "Alabama law does not set a deadline for reporting a lost or stolen gun, but report it to local police or the sheriff right away and give them the serial number, so it can be entered as stolen.",
    rules: [
      "No state permit is needed to buy a gun. Alabama's old pistol purchase application and waiting period (Ala. Code § 13A-11-77) was repealed in 2000.",
      "No gun registration. State law ordered all pistol sale records held by dealers, police, sheriffs and the Secretary of State destroyed by February 28, 2016 (Ala. Code § 13A-11-79(b)).",
      "No state background check on private sales between Alabama residents.",
    ],
    pawn: "Alabama pawn shops must record each item's model and serial number on the pawn ticket and keep their records available to law enforcement (Ala. Code §§ 5-19A-3 and 5-19A-5).",
    extra: "Even in a private sale, it is a crime to hand a pistol to someone you have reasonable cause to believe is a minor, a drug addict, a habitual drunkard or a person convicted of a crime of violence or of misdemeanor domestic violence (Ala. Code § 13A-11-76).",
  },
  alaska: {
    agency: "The Alaska Department of Public Safety (Alaska State Troopers). Stolen property is tracked in the Alaska Public Safety Information Network (APSIN).",
    reportStolen: "Alaska law does not set a deadline for reporting a lost or stolen gun. Report it to the Alaska State Troopers or local police with the serial number so it is entered as stolen.",
    rules: [
      "No state permit to buy, no waiting period and no gun registration.",
      "No state background check on private sales between Alaska residents.",
      "Cities and boroughs cannot add their own licensing, registration or transfer rules; firearm regulation is reserved to the state (AS 29.35.145).",
    ],
    pawn: "Alaska secondhand dealers must record the maker, model and serial number of every gun they buy in a book open to police inspection (AS 08.76.010–.020), and licensed pawnbrokers keep a register and report transactions, with serial numbers, to law enforcement (AS 08.76.180, 08.76.410–.420).",
  },
  arkansas: {
    agency: "The Arkansas State Police, part of the Arkansas Department of Public Safety. The Arkansas Crime Information Center (ACIC) holds the state's stolen-property files and is its link to the FBI's NCIC.",
    reportStolen: "Arkansas law does not set a deadline for reporting a lost or stolen gun. Report it to local police or the sheriff with the serial number so it reaches the ACIC and NCIC stolen files.",
    rules: [
      "No state permit to buy, no waiting period and no gun registration.",
      "No state background check on private sales between Arkansas residents.",
    ],
    pawn: "Arkansas pawn shops must record each item's identifying or serial number, keep the records for three years and let the State Police, sheriffs and local police inspect them; cities and counties can require daily electronic reporting (A.C.A. § 12-12-103).",
    extra: "Selling or transferring a gun to someone you know is prohibited from having one is a crime in Arkansas, and a Class B felony when the gun is a handgun (A.C.A. § 5-73-132).",
  },
  hawaii: {
    agency: "Hawaii has no state police force. The four county police departments issue gun permits, keep registrations and take stolen-gun reports; the Hawaii Criminal Justice Data Center (Department of the Attorney General) keeps the state's criminal records.",
    reportStolen: "Hawaii law requires an owner to report a lost or stolen gun to county police within 24 hours of discovering the loss (HRS § 134-29).",
    rules: [
      "A permit to acquire from the county police chief is needed for every gun, including private sales, gifts and inheritances. A handgun permit covers one transaction and expires after 30 days; a rifle or shotgun permit lasts one year (HRS § 134-2).",
      "The permit cannot be issued until at least 14 days after you apply, and police run NCIC and federal background checks first (HRS § 134-2(e)).",
      "Every gun must be registered with county police within 5 days of getting it, and a gun bought from a private seller must be brought in for inspection (HRS § 134-3).",
    ],
    pawn: "Hawaii pawnbrokers and secondhand dealers must record each item's description and serial number (or photos showing it), with the seller's ID, and give copies to police (HRS § 486M-2).",
    extra: "In a private sale, the seller fills in the buyer's permit with the gun's make, model, caliber and serial number, signs it and gets it to the issuing police department within 48 hours (HRS § 134-2(f)).",
  },
  iowa: {
    agency: "The Iowa Department of Public Safety, whose Division of Criminal Investigation (DCI) keeps the state's criminal records.",
    reportStolen: "Iowa law does not set a deadline for reporting a lost or stolen gun. Report it to local police or the sheriff with the serial number so it is entered as stolen.",
    rules: [
      "Since 2021 a permit to acquire is optional. A buyer at a dealer can show an Iowa permit to acquire or a carry permit, or simply pass the federal instant background check (Iowa Code § 724.15). The permit covers pistols and revolvers and is issued by the county sheriff (§ 724.17).",
      "No gun registration, no waiting period and no state background check on private sales.",
      "Transferring a gun to someone you know, or reasonably should know, is prohibited from having one is a class D felony (Iowa Code § 724.16).",
    ],
    pawn: "Iowa has no statewide pawn-shop serial-number rule; cities set pawn and secondhand reporting rules by local ordinance, so ask the local police department how they track pawned guns.",
    extra: "Knowingly acquiring a stolen firearm is a class D felony in Iowa (Iowa Code § 724.16A), which is one more reason to check the serial number before you buy.",
  },
  kentucky: {
    agency: "The Kentucky State Police; its Records Division keeps the state's criminal records.",
    reportStolen: "Kentucky law does not set a deadline for reporting a lost or stolen gun. Report it to the Kentucky State Police or local police with the serial number so it is entered as stolen.",
    rules: [
      "No state permit to buy, no waiting period and no state background check on private sales; state law protects buying a gun from an unlicensed person (KRS 237.020).",
      "No gun registration, and state law bars any government registry of privately owned guns (KRS 237.152).",
      "Knowingly selling a gun to someone prohibited from having one is a Class A misdemeanor (KRS 237.070).",
    ],
    pawn: "Kentucky pawnbrokers must keep a register describing each item by make, model and distinguishing marks, report it to an online system police can search, hold items 12 days before resale and report daily to police (KRS 226.040 and 226.070).",
    extra: "Having a gun with a defaced serial number is a crime in Kentucky (KRS 527.050), so walk away from any gun whose serial number is scratched or ground off.",
  },
  maine: {
    agency: "The Maine State Police; the State Bureau of Identification keeps the state's criminal records.",
    reportStolen: "Maine law does not set a deadline for reporting a lost or stolen gun. Report it to the Maine State Police, the sheriff or local police with the serial number so it is entered as stolen.",
    rules: [
      "No state permit to buy, and no gun registration; state law bars a government registry of guns (25 MRSA § 2014).",
      "Private sales arranged through an advertisement (including online listings) or at a gun show must go through a licensed dealer for a background check; transfers between family members are exempt (15 MRSA § 395).",
      "Sales that require a background check have a 72-hour waiting period (25 MRSA § 2016). The waiting period was challenged in federal court, so confirm its current status with a dealer.",
    ],
    pawn: "Maine pawnbrokers must report each transaction, including serial numbers, within 10 days to a tracking system chosen by the State Police (30-A MRSA § 3962), and used-goods dealers must record identification numbers and let police inspect (30-A MRSA § 3971).",
    extra: "Since 2025, a homemade gun frame or receiver must be given a serial number by a licensed dealer (25 MRSA § 2039).",
  },
  minnesota: {
    agency: "The Minnesota Department of Public Safety's Bureau of Criminal Apprehension (BCA), which runs the Minnesota Crime Information System.",
    reportStolen: "Minnesota law does not set a deadline for reporting a lost or stolen gun. Report it to local police or the sheriff with the serial number so it is entered as stolen.",
    rules: [
      "Buying a pistol or a semiautomatic military-style assault weapon takes a transferee permit (Minn. Stat. § 624.7131) or a carry permit, which counts as one, or a dealer's report of transfer, which can mean a wait of up to 30 days (§ 624.7132).",
      "Since 2023, a private sale of a pistol or semiautomatic military-style assault weapon must go through a dealer, or the buyer must show a permit and ID; both sides then complete a BCA record of transfer with the serial number and keep it for 10 years (Minn. Stat. § 624.7134).",
      "No gun registration.",
    ],
    pawn: "Minnesota pawnbrokers must record each item's serial number, keep their records for three years and give them to police on request (Minn. Stat. §§ 325J.04, 325J.05, 325J.08).",
  },
  mississippi: {
    agency: "The Mississippi Department of Public Safety, whose Criminal Information Center and Mississippi Justice Information Center keep the state's criminal records.",
    reportStolen: "Mississippi law does not set a deadline for reporting a lost or stolen gun. Report it to local police or the sheriff with the serial number so it is entered as stolen.",
    rules: [
      "No state permit to buy, no gun registration and no waiting period.",
      "No state background check on private sales between Mississippi residents.",
    ],
    pawn: "Mississippi pawnbrokers must record serial numbers (Miss. Code § 75-67-305), give their records to police on request, electronically within 72 hours where the agency supplies the software (§ 75-67-309), and may not take items whose serial numbers have been removed (§ 75-67-315).",
    extra: "Possessing or receiving a stolen firearm is its own crime in Mississippi (Miss. Code § 97-37-35).",
  },
  montana: {
    agency: "The Montana Department of Justice, which runs the state's criminal justice information network and criminal history records.",
    reportStolen: "Montana law does not set a deadline for reporting a lost or stolen gun. Report it to local police or the sheriff with the serial number so it is entered as stolen.",
    rules: [
      "No state permit to buy, no gun registration and no waiting period.",
      "No state background check on private sales between Montana residents.",
    ],
    pawn: "Montana pawnbrokers must keep a register of what they take in, open to any peace officer (MCA 31-1-402), and cities can require pawn and secondhand dealers to keep records (MCA 7-21-4207).",
    extra: "Possessing a gun whose serial number has been obscured, in order to conceal or transfer it, is an offense in Montana, and possession creates a presumption that the person knew (MCA 45-6-326).",
  },
  "new-mexico": {
    agency: "The New Mexico Department of Public Safety, whose Law Enforcement Records Bureau keeps the state's records.",
    reportStolen: "New Mexico law does not set a deadline for reporting a lost or stolen gun. Report it to local police or the sheriff with the serial number so it is entered as stolen.",
    rules: [
      "Private sales must go through a licensed dealer for a background check, with the dealer's fee capped at $35; transfers between immediate family members are exempt (NMSA 30-7-7.1).",
      "A 7-day waiting period was enacted in 2024 (NMSA 30-7-7.3). It has been challenged in federal court and its enforcement has been limited, so confirm its current status with a dealer before you buy.",
      "No state permit to buy and no gun registration.",
    ],
  },
  "north-dakota": {
    agency: "The North Dakota Attorney General's Bureau of Criminal Investigation (BCI).",
    reportStolen: "North Dakota law does not set a deadline for reporting a lost or stolen gun. Report it to local police or the sheriff with the serial number so it is entered as stolen.",
    rules: [
      "No state permit to buy, no gun registration and no waiting period.",
      "No state background check on private sales between North Dakota residents, but knowingly transferring a handgun to someone prohibited from having one is a crime (N.D.C.C. 62.1-02-02 and 62.1-02-08).",
    ],
    pawn: "North Dakota has no statewide pawn-shop serial-number law; cities license and regulate pawnbrokers (N.D.C.C. 40-05-01), so ask the local police department how they track pawned guns.",
    extra: "Possessing a gun with an altered serial number is banned in North Dakota, and the person holding it is presumed to have altered it unless they show otherwise (N.D.C.C. 62.1-03-05).",
  },
};
