/**
 * True when a verification result relates to a firearm.
 */
export const isFirearmItemType = (itemType?: string | null): boolean => {
  if (!itemType) return false;
  const t = itemType.toLowerCase();
  return (
    t.includes('firearm') ||
    t.includes('gun') ||
    t.includes('rifle') ||
    t.includes('pistol') ||
    t.includes('handgun') ||
    t.includes('shotgun')
  );
};
