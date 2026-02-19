import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getStatusColor } from '@/utils/itemTypeDetector';

interface TrustMeterProps {
  score: number;
  status: 'clean' | 'flagged' | 'stolen' | 'unknown';
}

export const TrustMeter: React.FC<TrustMeterProps> = ({ score, status }) => {
  const clampedScore = Math.max(0, Math.min(100, score));
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (clampedScore / 100) * circumference;
  const colors = getStatusColor(status);

  const strokeColor = status === 'clean' ? '#34d399' :
                      status === 'flagged' ? '#fbbf24' : '#f87171';

  const label = status === 'clean' ? 'CLEAN' :
                status === 'flagged' ? 'FLAGGED' : 'STOLEN';

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-28 h-28 shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" stroke="hsl(var(--border))" strokeWidth="6" fill="none" />
          <motion.circle
            cx="60" cy="60" r="54"
            stroke={strokeColor}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        {/* Glow effect */}
        <div className={cn("absolute inset-2 rounded-full blur-lg opacity-20", colors.bg)} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={cn("text-3xl font-bold tabular-nums", colors.text)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {clampedScore}
          </motion.span>
          <span className={cn("text-[10px] uppercase tracking-widest font-semibold", colors.text)}>{label}</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {status === 'clean' ? 'High Trust Score' :
           status === 'flagged' ? 'Requires Attention' : 'High Risk — Reported Stolen'}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {status === 'clean'
            ? 'No theft reports found across all checked databases. This item appears safe to purchase.'
            : status === 'flagged'
            ? 'Partial matches found. We recommend additional verification before purchasing.'
            : 'This item has been reported stolen. Do not purchase. Contact local authorities immediately.'}
        </p>
      </div>
    </div>
  );
};
