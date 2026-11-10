/** Explicit serial/gun choices disambiguate identifiers that have no unique number format. */
export function resolveVerificationInputType(detected: string, hint: string | null): string {
  return hint && (hint === 'serial' || hint === 'firearm' || detected === 'serial' || detected === 'unknown')
    ? hint
    : detected;
}
