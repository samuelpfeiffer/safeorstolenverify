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
  /** Pawn shop / secondhand dealer serial-number rule. */
  pawn: string;
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
};
