
import React, { memo } from 'react';

export const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Professional Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      
      {/* Subtle Animated Accents */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/10 rounded-full filter blur-3xl animate-float"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full filter blur-3xl animate-float" 
          style={{ '--animation-delay': '2s' } as React.CSSProperties}
        ></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Professional Trust Glow */}
      <div 
        className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"
      ></div>
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';
