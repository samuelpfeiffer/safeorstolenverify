import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProofDisclaimer } from '@/components/proof/ProofDisclaimer';
import { useAuth } from '@/lib/auth';
import {
  getOwnerProofFields,
  getPublicProofRecord,
  type OwnerProofFields,
  type PublicProofRecord,
} from '@/features/proof/api';
import { PROOF_CATEGORY_LABELS } from '@/features/proof/constants';

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="py-3 border-b border-border last:border-0">
    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
    <dd className="mt-1 text-sm text-foreground break-words">{children}</dd>
  </div>
);

const ProofRecordPage: React.FC = () => {
  const { id = '' } = useParams();
  const { user } = useAuth();
  const [record, setRecord] = useState<PublicProofRecord | null>(null);
  const [owner, setOwner] = useState<OwnerProofFields | null>(null);
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

  useEffect(() => {
    let cancelled = false;
    if (!user || !record) {
      setOwner(null);
      return;
    }
    getOwnerProofFields(record.id).then((fields) => {
      if (!cancelled) setOwner(fields);
    });
    return () => {
      cancelled = true;
    };
  }, [user, record]);

  const created = record ? new Date(record.created_at) : null;

  return (
    <>
      <PageSEO
        title="Verification Record — SafeOrStolen"
        description="A timestamped SafeOrStolen record of a database check performed before a purchase."
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

          {!loading && record?.is_deleted && (
            <p className="rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
              This record was deleted by its holder
            </p>
          )}

          {!loading && record && !record.is_deleted && (
            <div className="space-y-8">
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
                    <span className="font-mono">{created?.toISOString().replace('.000', '')}</span>
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
                    {record.databases_queried.length
                      ? record.databases_queried.join(', ')
                      : 'Not recorded'}
                  </Row>
                  <Row label="Record hash (SHA-256)">
                    <span className="font-mono text-xs break-all">{record.record_hash}</span>
                  </Row>
                </dl>
              </div>

              {owner &&
                (owner.seller_name ||
                  owner.listing_source ||
                  owner.meeting_location ||
                  owner.purchase_price !== null) && (
                  <div className="rounded-xl border border-border bg-card/40 p-5">
                    <h2 className="text-sm font-semibold text-foreground mb-1">
                      Private details — visible only to you
                    </h2>
                    <p className="text-[11px] text-muted-foreground mb-3">
                      These are never shown to anyone else viewing this record.
                    </p>
                    <dl>
                      {owner.seller_name && <Row label="Seller">{owner.seller_name}</Row>}
                      {owner.listing_source && (
                        <Row label="Listing source">{owner.listing_source}</Row>
                      )}
                      {owner.meeting_location && (
                        <Row label="Meeting location">{owner.meeting_location}</Row>
                      )}
                      {owner.purchase_price !== null && (
                        <Row label="Purchase price">${owner.purchase_price}</Row>
                      )}
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
