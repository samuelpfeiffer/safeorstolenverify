import { Link } from '@/lib/router-compat';
import {
  STATE_PLATE_LINKS,
  STATE_VIN_LINKS,
  REGION_ORDER,
  getRelatedStateLinks,
  type StateLink,
} from '@/data/stateLinkInventory';

interface StateLinksGridProps {
  kind: 'plate' | 'vin';
  heading?: string;
  description?: string;
}

/** Full, region-grouped list of every state page that exists for a lookup type. */
export const StateLinksGrid = ({ kind, heading, description }: StateLinksGridProps) => {
  const links = kind === 'plate' ? STATE_PLATE_LINKS : STATE_VIN_LINKS;
  const title =
    heading ?? (kind === 'plate' ? 'License Plate Lookup by State' : 'VIN Lookup by State');
  const sub =
    description ??
    (kind === 'plate'
      ? 'Every state has its own lookup page with local registration and theft context.'
      : 'State-specific VIN lookup pages with local title and theft context.');

  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-8">{sub}</p>

        <div className="space-y-8">
          {REGION_ORDER.map((region) => {
            const regionLinks = links.filter((l) => l.region === region);
            if (regionLinks.length === 0) return null;
            return (
              <div key={region}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  {region}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2">
                  {regionLinks.map((link: StateLink) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-muted-foreground hover:text-primary hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface OtherStatesModuleProps {
  kind: 'plate' | 'vin';
  currentPath: string;
  limit?: number;
}

/** Small state-to-state link mesh for individual state pages. */
export const OtherStatesModule = ({ kind, currentPath, limit = 8 }: OtherStatesModuleProps) => {
  const links = kind === 'plate' ? STATE_PLATE_LINKS : STATE_VIN_LINKS;
  const related = getRelatedStateLinks(links, currentPath, limit);
  if (related.length === 0) return null;

  const hubPath = kind === 'plate' ? '/license-plate-lookup' : '/vin-checker';

  return (
    <section className="py-10 border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl font-bold mb-4">
          {kind === 'plate' ? 'License Plate Lookup in Other States' : 'VIN Lookup in Other States'}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {related.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link to={hubPath} className="text-sm text-primary hover:underline">
          See all states &rarr;
        </Link>
      </div>
    </section>
  );
};
