/**
 * Canonical inventory of state-level lookup pages that actually exist as routes.
 * Used for internal linking (hub -> state, state -> state).
 */

export interface StateLink {
  name: string;
  path: string;
  region: 'West' | 'Midwest' | 'South' | 'Northeast';
}

const REGION_BY_STATE: Record<string, StateLink['region']> = {
  alabama: 'South', alaska: 'West', arizona: 'West', arkansas: 'South',
  california: 'West', colorado: 'West', connecticut: 'Northeast', delaware: 'South',
  'washington-dc': 'South', florida: 'South', georgia: 'South', hawaii: 'West',
  idaho: 'West', illinois: 'Midwest', indiana: 'Midwest', iowa: 'Midwest',
  kansas: 'Midwest', kentucky: 'South', louisiana: 'South', maine: 'Northeast',
  maryland: 'South', massachusetts: 'Northeast', michigan: 'Midwest',
  minnesota: 'Midwest', mississippi: 'South', missouri: 'Midwest', montana: 'West',
  nebraska: 'Midwest', nevada: 'West', 'new-hampshire': 'Northeast',
  'new-jersey': 'Northeast', 'new-mexico': 'West', 'new-york': 'Northeast',
  'north-carolina': 'South', 'north-dakota': 'Midwest', ohio: 'Midwest',
  oklahoma: 'South', oregon: 'West', pennsylvania: 'Northeast',
  'rhode-island': 'Northeast', 'south-carolina': 'South', 'south-dakota': 'Midwest',
  tennessee: 'South', texas: 'South', utah: 'West', vermont: 'Northeast',
  virginia: 'South', washington: 'West', 'west-virginia': 'South',
  wisconsin: 'Midwest', wyoming: 'West',
};

const titleCase = (slug: string) =>
  slug === 'washington-dc'
    ? 'Washington, DC'
    : slug
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

// Oct 5 2026: only states with their own data sources keep a page; the rest 301
// to /license-plate-lookup and /vin-checker (see legacyRedirectMap).
const STATES_WITH_PAGES = ['arizona', 'florida'];
const PLATE_STATE_SLUGS = STATES_WITH_PAGES;

// Oct 7 2026: Arizona's VIN page was merged into its plate page, which covers both.
const VIN_STATE_SLUGS = ['florida'];


export const STATE_PLATE_LINKS: StateLink[] = PLATE_STATE_SLUGS.map((slug) => ({
  name: titleCase(slug),
  path: `/${slug}-license-plate-lookup`,
  region: REGION_BY_STATE[slug],
})).sort((a, b) => a.name.localeCompare(b.name));

export const STATE_VIN_LINKS: StateLink[] = VIN_STATE_SLUGS.map((slug) => ({
  name: titleCase(slug),
  path: `/${slug}-vin-lookup`,
  region: REGION_BY_STATE[slug],
})).sort((a, b) => a.name.localeCompare(b.name));

export const REGION_ORDER: StateLink['region'][] = ['Northeast', 'South', 'Midwest', 'West'];

/** Pick related states for the "Other states" mesh module. */
export const getRelatedStateLinks = (
  links: StateLink[],
  currentPath: string,
  limit = 8,
): StateLink[] => {
  const current = links.find((l) => l.path === currentPath);
  const others = links.filter((l) => l.path !== currentPath);
  if (!current) return others.slice(0, limit);
  const sameRegion = others.filter((l) => l.region === current.region);
  const rest = others.filter((l) => l.region !== current.region);
  return [...sameRegion, ...rest].slice(0, limit);
};
