import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TrustScoreMeterProps {
  score: number;
  status: 'clean' | 'flagged' | 'stolen' | 'unknown';
}

export const TrustScoreMeter: React.FC<TrustScoreMeterProps> = ({ score, status }) => {
  const clampedScore = Math.max(0, Math.min(100, score));
  const circumference = 2 * Math.PI * 54; // radius 54
  const strokeDashoffset = circumference - (clampedScore / 100) * circumference;

  const color = status === 'clean' ? 'text-primary' :
                status === 'flagged' ? 'text-secondary' : 'text-destructive';

  const strokeColor = status === 'clean' ? 'hsl(25, 92%, 53%)' :
                      status === 'flagged' ? 'hsl(215, 20%, 50%)' : 'hsl(0, 72%, 51%)';

  return (
    <div className="flex items-center gap-6">
      {/* Circular meter */}
      <div className="relative w-28 h-28 shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          {/* Background ring */}
          <circle
            cx="60" cy="60" r="54"
            stroke="hsl(var(--border))"
            strokeWidth="8"
            fill="none"
          />
          {/* Score ring */}
          <motion.circle
            cx="60" cy="60" r="54"
            stroke={strokeColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={cn("text-2xl font-bold", color)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {clampedScore}
          </motion.span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Trust</span>
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {status === 'clean' ? 'High Trust Score' :
           status === 'flagged' ? 'Moderate Risk' : 'High Risk'}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {status === 'clean'
            ? 'No theft reports found across all checked databases. This item appears safe to purchase.'
            : status === 'flagged'
            ? 'Partial matches found. We recommend additional verification before purchasing.'
            : 'This item has been reported stolen. Do not purchase. Contact local authorities.'}
        </p>
      </div>
    </div>
  );
};
