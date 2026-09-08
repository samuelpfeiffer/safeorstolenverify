import React, { useEffect, useState } from 'react';
import { Link, useParams } from '@/lib/router-compat';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProofDisclaimer } from '@/components/proof/ProofDisclaimer';
import { getPublicProofRecord, type PublicProofRecord } from '@/features/proof/api';
import { PROOF_CATEGORY_LABELS } from '@/features/proof/constants';

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="py-3 border-b border-border last:border-0">
    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
    <dd className="mt-1 text-sm text-foreground break-words">{children}</dd>
  </div>
);

const ProofRecordPage: React.FC = () => {
  const { id = '' } = useParams();
  const [record, setRecord] = useState<PublicProofRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const row = await getPublicProofRecord(id);
        if (!cancelled) setRecord(row);
      } catch (err) {
        console.error('[ProofRecordPage] lookup failed', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const created = record ? new Date(record.created_at) : null;
  const isDeleted = !!record?.deleted_at;

  return (
    <>
      <PageSEO
        title="Verification Record — SafeOrStolen"
        description="A timestamped SafeOrStolen record of a database search performed before a purchase."
        canonical={`/proof/${id}`}
        noIndex
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Verification Record
          </h1>
          <p className="text-sm text-muted-foreground mb-8 font-mono">{id}</p>

          {loading && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" /> Loading record…
            </div>
          )}

          {!loading && !record && (
            <p className="text-muted-foreground">No record exists with this ID.</p>
          )}

          {!loading && record && (
            <div className="space-y-8">
              {isDeleted && (
                <p className="rounded-xl border border-border bg-muted/40 p-4 text-sm text-foreground">
                  This record was deleted by its holder
                </p>
              )}

              {!isDeleted && (
                <div className="rounded-xl border-2 border-primary/40 bg-card/60 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground">
                      Verified by SafeOrStolen
                    </span>
                  </div>

                  <dl>
                    <Row label="Record ID">
                      <span className="font-mono">{record.id}</span>
                    </Row>
                    <Row label="Check date (UTC)">
                      <span className="font-mono">
                        {created?.toISOString().replace('.000', '')}
                      </span>
                    </Row>
                    <Row label="Check date (local)">{created?.toLocaleString()}</Row>
                    <Row label="Category">{PROOF_CATEGORY_LABELS[record.category]}</Row>
                    <Row label="Result">
                      {record.result === 'clean' ? 'Clean — no match found' : 'Flagged'}
                    </Row>
                    <Row label="Masked identifier">
                      <span className="font-mono">{record.identifier_masked}</span>
                    </Row>
                    <Row label="Databases queried">
                      {record.databases_queried.length ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {record.databases_queried.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      ) : (
                        'Not recorded'
                      )}
                    </Row>
                    <Row label="Record hash (SHA-256)">
                      <span className="font-mono text-xs break-all">{record.record_hash}</span>
                    </Row>
                  </dl>
                </div>
              )}

              <ProofDisclaimer />

              <p className="text-xs text-muted-foreground">
                Learn more about{' '}
                <Link to="/proof-of-purchase" className="text-primary hover:underline">
                  proof of clean purchase
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProofRecordPage;
