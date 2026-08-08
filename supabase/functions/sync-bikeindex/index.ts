import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const PER_PAGE = 100;
const MAX_PAGES = 150;
const BATCH_SIZE = 500;
const PAGE_DELAY_MS = 250;
const UA = 'SafeOrStolen/1.0 (+https://safeorstolen.com)';

interface BikeRecord {
  id: number | string;
  serial?: string | null;
  manufacturer_name?: string | null;
  frame_model?: string | null;
  date_stolen?: number | null;
  stolen_location?: string | null;
  url?: string | null;
  status?: string | null;
}

interface RegistryRow {
  source: string;
  source_record_id: string;
  item_type: string;
  serial_normalized: string;
  serial_raw: string | null;
  manufacturer: string | null;
  model: string | null;
  date_stolen: string | null;
  location: string | null;
  source_url: string | null;
  synced_at: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function normalizeSerial(serial: string): string {
  return serial.toUpperCase().replace(/[\s\-]/g, '');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const started = Date.now();

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    let pagesFetched = 0;
    let recordsSeen = 0;
    let recordsSkippedNoSerial = 0;
    let recordsUpserted = 0;

    let buffer: RegistryRow[] = [];

    const flush = async () => {
      if (buffer.length === 0) return;
      const { error } = await supabase
        .from('stolen_registry')
        .upsert(buffer, { onConflict: 'source,source_record_id' });
      if (error) {
        console.error('[sync-bikeindex] upsert error:', error.message);
      } else {
        recordsUpserted += buffer.length;
      }
      buffer = [];
    };

    for (let page = 1; page <= MAX_PAGES; page++) {
      const url = `https://bikeindex.org/api/v3/search?page=${page}&per_page=${PER_PAGE}&stolenness=stolen`;
      const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } });

      if (!res.ok) {
        console.error(`[sync-bikeindex] page ${page} failed: ${res.status}`);
        break;
      }

      const json = await res.json();
      const bikes: BikeRecord[] = Array.isArray(json?.bikes) ? json.bikes : [];
      pagesFetched++;
      recordsSeen += bikes.length;

      for (const bike of bikes) {
        const raw = (bike.serial ?? '').trim();
        if (!raw || raw.toLowerCase() === 'unknown') {
          recordsSkippedNoSerial++;
          continue;
        }
        const normalized = normalizeSerial(raw);
        if (normalized.length < 6) {
          recordsSkippedNoSerial++;
          continue;
        }

        buffer.push({
          source: 'bikeindex',
          source_record_id: String(bike.id),
          item_type: 'bicycle',
          serial_normalized: normalized,
          serial_raw: raw,
          manufacturer: bike.manufacturer_name ?? null,
          model: bike.frame_model ?? null,
          date_stolen: bike.date_stolen ? new Date(bike.date_stolen * 1000).toISOString() : null,
          location: bike.stolen_location ?? null,
          source_url: bike.url ?? null,
          synced_at: new Date().toISOString(),
        });

        if (buffer.length >= BATCH_SIZE) await flush();
      }

      if (page % 10 === 0) {
        console.log(
          `[sync-bikeindex] page ${page} · seen=${recordsSeen} upserted=${recordsUpserted} skipped=${recordsSkippedNoSerial}`,
        );
      }

      if (bikes.length < PER_PAGE) break;

      await sleep(PAGE_DELAY_MS);
    }

    await flush();

    const body = {
      pages_fetched: pagesFetched,
      records_seen: recordsSeen,
      records_skipped_no_serial: recordsSkippedNoSerial,
      records_upserted: recordsUpserted,
      duration_ms: Date.now() - started,
    };

    console.log('[sync-bikeindex] complete', JSON.stringify(body));

    return new Response(JSON.stringify(body), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err) {
    console.error('[sync-bikeindex] fatal:', err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 },
    );
  }
});
