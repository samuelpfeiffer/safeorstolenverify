
import React, { memo } from 'react';

export const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';
