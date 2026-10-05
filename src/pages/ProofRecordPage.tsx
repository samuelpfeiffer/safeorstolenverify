import React, { useEffect, useState } from 'react';
import { Link, useParams } from '@/lib/router-compat';
import { ShieldCheck, Loader2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProofDisclaimer } from '@/components/proof/ProofDisclaimer';
import { getPublicProofRecord, getProofPaidAt, type PublicProofRecord } from '@/features/proof/api';
import { PROOF_CATEGORY_LABELS, PROOF_RESULT_LABELS } from '@/features/proof/constants';

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
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

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

  // Back from Stripe (?paid=1): the webhook can take a few seconds to mark it paid.
  useEffect(() => {
    if (!record || record.paid_at || typeof window === 'undefined') return;
    if (!new URLSearchParams(window.location.search).has('paid')) return;
    let tries = 0;
    const timer = setInterval(async () => {
      tries += 1;
      const paidAt = await getProofPaidAt(record.id).catch(() => null);
      if (paidAt) { setRecord({ ...record, paid_at: paidAt }); clearInterval(timer); }
      if (tries >= 15) clearInterval(timer);
    }, 2000);
    return () => clearInterval(timer);
  }, [record]);

  const pay = async () => {
    if (!record) return;
    setPaying(true);
    setPayError(null);
    const { data, error } = await supabase.functions.invoke('create-checkout', {
      body: { product: 'certificate', proofId: record.id },
    });
    if (error || !data?.url) {
      setPayError('Could not open checkout. Please try again.');
      setPaying(false);
      return;
    }
    window.location.href = data.url;
  };

  const created = record ? new Date(record.created_at) : null;
  const isDeleted = !!record?.deleted_at;
  const isIssued = !!record?.paid_at;
  const returningFromPayment = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('paid');

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

              {!isDeleted && !isIssued && (
                <div className="rounded-xl border-2 border-primary/40 bg-card/60 p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-foreground">
                      {returningFromPayment ? 'Issuing your certificate…' : 'This certificate has not been issued yet'}
                    </span>
                  </div>
                  {returningFromPayment ? (
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Payment received. This usually takes a few seconds.
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">
                        A SafeOrStolen check was run on {created?.toLocaleDateString()}. Get the verification certificate
                        for $1.99 to show the full result, the records searched and the tamper-evident hash at this link.
                      </p>
                      <Button onClick={pay} disabled={paying} className="w-full">
                        {paying ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Get the certificate — $1.99'}
                      </Button>
                      {payError && <p className="text-xs text-red-500">{payError}</p>}
                    </>
                  )}
                </div>
              )}

              {!isDeleted && isIssued && (
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
                      {PROOF_RESULT_LABELS[record.result] ?? record.result}
                    </Row>
                    <Row label="Masked identifier">
                      <span className="font-mono">{record.identifier_masked}</span>
                    </Row>
                    {(() => {
                      const BUYER = 'Checked by buyer: ';
                      const ours = record.databases_queried.filter((d) => !d.startsWith(BUYER));
                      const buyer = record.databases_queried
                        .filter((d) => d.startsWith(BUYER))
                        .map((d) => d.slice(BUYER.length));
                      return (
                        <>
                          <Row label={buyer.length ? 'Checked by SafeOrStolen' : 'Databases queried'}>
                            {ours.length ? (
                              <ul className="list-disc pl-5 space-y-1">
                                {ours.map((d) => (
                                  <li key={d}>{d}</li>
                                ))}
                              </ul>
                            ) : (
                              'Not recorded'
                            )}
                          </Row>
                          {buyer.length > 0 && (
                            <Row label="Checked by the buyer">
                              <ul className="list-disc pl-5 space-y-1">
                                {buyer.map((d) => (
                                  <li key={d}>{d}</li>
                                ))}
                              </ul>
                            </Row>
                          )}
                        </>
                      );
                    })()}
                    <Row label="Record hash (SHA-256)">
                      <span className="font-mono text-xs break-all">{record.record_hash}</span>
                    </Row>
                  </dl>
                </div>
              )}

              {/* The reviewed disclaimer states the item was not found, so it is not shown on a flagged result. */}
              {record.result !== 'flagged' ? (
                <ProofDisclaimer />
              ) : (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This record confirms that a search was performed on the date shown and that a theft or loss report
                  matched it. It is not a finding by law enforcement. Contact your local police before taking any action.
                </p>
              )}

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
