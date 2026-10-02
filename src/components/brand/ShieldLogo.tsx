import React, { useId } from 'react';

/**
 * Oct 2 2026: SafeOrStolen logo (SOS + phone + check) inside a shield with the brand-orange outline.
 * Used on the dashboard instead of a generic shield icon.
 */
export const ShieldLogo: React.FC<{ size?: number; className?: string; glow?: boolean }> = ({ size = 64, className, glow }) => {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const shield = 'M50 4 L92 17 V57 C92 85 74 103 50 116 C26 103 8 85 8 57 V17 Z';
  return (
    <svg
      width={size}
      height={Math.round(size * 1.2)}
      viewBox="0 0 100 120"
      className={className}
      role="img"
      aria-label="SafeOrStolen"
      style={glow ? { filter: 'drop-shadow(0 0 14px hsl(var(--primary) / 0.45))' } : undefined}
    >
      <defs>
        <clipPath id={`clip${id}`}>
          <path d={shield} />
        </clipPath>
        <linearGradient id={`edge${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(25 95% 60%)" />
          <stop offset="100%" stopColor="hsl(25 92% 45%)" />
        </linearGradient>
      </defs>
      <path d={shield} fill="#121110" />
      <g clipPath={`url(#clip${id})`}>
        <image href="/sos-logo.png" x="2" y="27" width="96" height="76" preserveAspectRatio="xMidYMid slice" />
        {/* hide the thin light edge at the bottom of the logo image */}
        <rect x="0" y="98" width="100" height="24" fill="#121110" />
        <rect x="0" y="0" width="100" height="29" fill="#121110" />
      </g>
      <path d={shield} fill="none" stroke={`url(#edge${id})`} strokeWidth="5" strokeLinejoin="round" />
    </svg>
  );
};

export default ShieldLogo;
