import { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PUBLIC_SEARCHES = [
  { name: 'Florida FDLE — stolen gun', url: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenGun.jsf' },
  { name: 'Florida FDLE — stolen vehicle', url: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenVehicles.jsf' },
  { name: 'Florida FDLE — stolen article', url: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenArticle.jsf' },
  { name: 'Ohio Attorney General — stolen gun', url: 'https://www.ohioattorneygeneral.gov/stolengun' },
  { name: 'Utah — serial search', url: 'https://serialandcfp.ps.utah.gov/' },
];

export function PublicPoliceSearches({ serial }: { serial: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  async function copySerial() {
    setError('');
    try {
      await navigator.clipboard.writeText(serial.trim());
      setCopied(true);
    } catch {
      setError('Could not copy. Select the serial in the field above and copy it.');
    }
  }
  return (
    <section aria-label="Public police searches" className="mx-auto mt-6 max-w-2xl border-t border-border pt-5 text-left">
      <h2 className="text-lg font-semibold text-foreground">Public searches you open yourself</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        These links open official public search pages. SafeOrStolen does not scrape these links or connect additional state databases. Copy your serial and paste it into the appropriate search. Use a VIN or plate for the vehicle search.
      </p>
      <Button type="button" variant="outline" className="my-3" disabled={!serial.trim()} onClick={copySerial}>
        <Copy className="mr-2 h-4 w-4" />{copied ? 'Copy serial again' : 'Copy serial'}
      </Button>
      <p role="status" className="text-sm text-muted-foreground">{error || (copied ? 'Serial copied.' : '')}</p>
      <ul className="mt-3 space-y-3">
        {PUBLIC_SEARCHES.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4">
              {source.name}<ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted-foreground">Each search has limited coverage. A miss means not found in the records checked, not safe or proof of ownership. SafeOrStolen's Arizona vehicle checks cover Arizona reports only. Existing Ohio checks are unchanged.</p>
    </section>
  );
}