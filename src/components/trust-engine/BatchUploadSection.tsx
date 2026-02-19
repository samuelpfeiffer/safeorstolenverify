import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileSpreadsheet, Download, CheckCircle, AlertTriangle, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { detectItemType, getItemTypeDisplayName, getStatusColor } from '@/utils/itemTypeDetector';

interface BatchItem {
  identifier: string;
  type: string;
  status: 'clean' | 'flagged' | 'stolen' | 'pending';
  score: number;
}

export const BatchUploadSection: React.FC = () => {
  const [items, setItems] = useState<BatchItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedCount, setProcessedCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseCSV = (text: string): string[] => {
    return text
      .split(/[\n,]/)
      .map(s => s.trim().replace(/['"]/g, ''))
      .filter(s => s.length >= 3);
  };

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const identifiers = parseCSV(text);
      const batchItems: BatchItem[] = identifiers.slice(0, 100).map(id => ({
        identifier: id,
        type: getItemTypeDisplayName(detectItemType(id)),
        status: 'pending',
        score: 0,
      }));
      setItems(batchItems);
    };
    reader.readAsText(file);
  }, []);

  const handleProcess = useCallback(async () => {
    setIsProcessing(true);
    setProcessedCount(0);

    // Simulate batch processing
    for (let i = 0; i < items.length; i++) {
      await new Promise(r => setTimeout(r, 150));
      setItems(prev => {
        const updated = [...prev];
        const statuses: BatchItem['status'][] = ['clean', 'clean', 'clean', 'flagged', 'clean'];
        updated[i] = {
          ...updated[i],
          status: statuses[Math.floor(Math.random() * statuses.length)],
          score: Math.floor(Math.random() * 25) + 75,
        };
        return updated;
      });
      setProcessedCount(i + 1);
    }
    setIsProcessing(false);
  }, [items]);

  const handleDownloadReport = useCallback(() => {
    const csv = ['Identifier,Type,Status,Score',
      ...items.map(i => `${i.identifier},${i.type},${i.status},${i.score}`)
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `safeorstolen-batch-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [items]);

  const statusIcon = (status: string) => {
    if (status === 'clean') return <CheckCircle className="w-4 h-4 text-emerald-400" />;
    if (status === 'flagged') return <AlertTriangle className="w-4 h-4 text-amber-400" />;
    if (status === 'stolen') return <XCircle className="w-4 h-4 text-red-400" />;
    return <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" />;
  };

  return (
    <div className="modern-card p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">Batch Verification</h2>
        <p className="text-sm text-muted-foreground">Upload a CSV with up to 100 identifiers for Pawn Shops, Auction Houses, or Law Enforcement</p>
      </div>

      {items.length === 0 ? (
        <div
          className="border-2 border-dashed border-border rounded-2xl p-12 text-center cursor-pointer hover:border-primary/30 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">Drop CSV file or click to upload</p>
          <p className="text-xs text-muted-foreground/60">One identifier per line or comma-separated</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.txt"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      ) : (
        <>
          {/* Progress */}
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Processing...</span>
                <span>{processedCount}/{items.length}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-500 rounded-full"
                  animate={{ width: `${(processedCount / items.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Results table */}
          <div className="max-h-80 overflow-y-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-muted/80 backdrop-blur">
                <tr className="text-left text-xs text-muted-foreground uppercase tracking-wider">
                  <th className="px-4 py-3">Identifier</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Score</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => {
                  const c = getStatusColor(item.status);
                  return (
                    <tr key={i} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-2.5 font-mono text-xs text-foreground">{item.identifier}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{item.type}</td>
                      <td className="px-4 py-2.5">
                        <span className={cn("inline-flex items-center gap-1.5", c.text)}>
                          {statusIcon(item.status)}
                          <span className="capitalize">{item.status}</span>
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-foreground">
                        {item.status !== 'pending' ? item.score : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {!isProcessing && items.some(i => i.status === 'pending') && (
              <Button className="flex-1 rounded-xl button-glow" onClick={handleProcess}>
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Process {items.length} Items
              </Button>
            )}
            {!isProcessing && items.every(i => i.status !== 'pending') && (
              <Button variant="outline" className="flex-1 rounded-xl" onClick={handleDownloadReport}>
                <Download className="w-4 h-4 mr-2" />
                Download Audit Report
              </Button>
            )}
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => { setItems([]); setProcessedCount(0); }}
            >
              Clear
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
