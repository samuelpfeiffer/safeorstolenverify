/**
 * Proof of Clean Purchase — shared constants.
 *
 * The disclaimer is legally reviewed copy. Do not soften, shorten or reword it.
 */
export const PROOF_DISCLAIMER =
  'This record confirms that a search was performed on the date shown and what that search returned. It is not proof of ownership, a bill of sale, or a legal document. It does not guarantee the item is not stolen — many stolen items are never reported to any database. This item was not found in any database we checked, as of the date shown.';

export type ProofCategory = 'phone' | 'vehicle' | 'plate' | 'serial' | 'firearm' | 'bike';

export const PROOF_CATEGORY_LABELS: Record<ProofCategory, string> = {
  phone: 'Phone',
  vehicle: 'Vehicle',
  plate: 'License plate',
  serial: 'Serial number',
  firearm: 'Firearm',
  bike: 'Bicycle',
};

export type ProofResult = 'clean' | 'flagged' | 'no_report';

export const PROOF_RESULT_LABELS: Record<ProofResult, string> = {
  clean: 'Clean — no match found',
  no_report: 'No theft report found in the records searched',
  flagged: 'Flagged — a theft or loss report matched',
};

/** localStorage key holding proof record ids created while signed out. */
export const ANON_PROOF_IDS_KEY = 'sos_anon_proof_ids';
