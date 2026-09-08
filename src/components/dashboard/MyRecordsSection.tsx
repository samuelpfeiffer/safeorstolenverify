import React, { useCallback, useEffect, useState } from 'react';
import { Link } from '@/lib/router-compat';
import { Loader2, FileCheck, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import {
  claimAnonymousRecords,
  deleteProofRecord,
  getAnonymousRecordIds,
  listMyProofRecords,
  PROOF_PAGE_SIZE,
  type ProofRecordSummary,
} from '@/features/proof/api';
import { PROOF_CATEGORY_LABELS } from '@/features/proof/constants';


/** UI 4 — proof record history for the signed-in user, newest first, 25 per page. */
export const MyRecordsSection: React.FC = () => {
  const { toast } = useToast();
  const [rows, setRows] = useState<ProofRecordSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pendingAnon, setPendingAnon] = useState<string[]>([]);
  const [claiming, setClaiming] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);


  const load = useCallback(async (p: number) => {
    setLoading(true);
    try {
      const { rows: data, total: count } = await listMyProofRecords(p);
      setRows(data);
      setTotal(count);
    } catch (err) {
      console.error('[MyRecordsSection] load failed', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load(page);
  }, [load, page]);

  useEffect(() => {
    setPendingAnon(getAnonymousRecordIds());
  }, []);

  const handleClaim = async () => {
    setClaiming(true);
    try {
      const claimed = await claimAnonymousRecords(pendingAnon);
      setPendingAnon([]);
      toast({
        title: claimed ? 'Records attached' : 'Nothing to attach',
        description: claimed
          ? `${claimed} record${claimed === 1 ? '' : 's'} added to your account.`
          : 'Those records are already attached to an account.',
      });
      load(0);
      setPage(0);
    } finally {
      setClaiming(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteProofRecord(id);
      toast({ title: 'Record deleted', description: `${id} was permanently deleted.` });
      load(page);
    } catch (err) {
      console.error('[MyRecordsSection] delete failed', err);
      toast({
        title: 'Could not delete record',
        description: 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const totalPages = Math.max(1, Math.ceil(total / PROOF_PAGE_SIZE));


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCheck className="w-5 h-5" /> My Records
        </CardTitle>
        <CardDescription>
          Timestamped records of checks you saved before buying.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {pendingAnon.length > 0 && (
          <div className="rounded-xl border-2 border-primary/40 bg-card/60 p-4 flex flex-wrap items-center gap-3">
            <p className="text-sm text-foreground flex-1">
              You saved {pendingAnon.length} record{pendingAnon.length === 1 ? '' : 's'} before
              signing in. Attach {pendingAnon.length === 1 ? 'it' : 'them'} to this account?
            </p>
            <Button size="sm" onClick={handleClaim} disabled={claiming}>
              {claiming && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Attach records
            </Button>
          </div>
        )}

        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading records…
          </div>
        ) : rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No records yet. Run a check and save the result to create one.
          </p>
        ) : (
          <div className="divide-y divide-border">
            {rows.map((r) => (
              <div key={r.id} className="py-3 flex flex-wrap items-center gap-3">
                <span className="text-xs text-muted-foreground w-32">
                  {new Date(r.created_at).toLocaleDateString()}
                </span>
                <span className="text-sm text-foreground w-32">
                  {PROOF_CATEGORY_LABELS[r.category]}
                </span>
                <span className="text-sm font-mono text-muted-foreground w-24">
                  {r.identifier_masked}
                </span>
                <Badge variant={r.result === 'clean' ? 'secondary' : 'destructive'}>
                  {r.result}
                </Badge>
                {r.deleted_at && (
                  <span className="text-xs text-muted-foreground">deleted</span>
                )}
                <Link
                  to={`/proof/${r.id}`}
                  className="ml-auto text-sm text-primary hover:underline font-mono"
                >
                  {r.id}
                </Link>
                {!r.deleted_at && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Delete record ${r.id}`}
                        disabled={deletingId === r.id}
                      >
                        {deletingId === r.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4 text-muted-foreground" />
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete this record permanently?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This cannot be undone. Record {r.id} will be marked deleted, and anyone
                          who opens its link will see that it was deleted by its holder. The
                          original check details are not recoverable.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(r.id)}>
                          Delete permanently
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
            ))}

          </div>
        )}

        {total > PROOF_PAGE_SIZE && (
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              Previous
            </Button>
            <span className="text-xs text-muted-foreground">
              Page {page + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page + 1 >= totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
