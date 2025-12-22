import React from 'react';

/**
 * Custom YouTube Thumbnail - Quick Start / Stolen Item Check
 * Red gradient with warning banners and pulsing checkmark
 */
export const ThumbnailQuickStart: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`relative w-full aspect-video overflow-hidden rounded-lg ${className}`}
      style={{
        background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 50%, #990000 100%)',
      }}
    >
      {/* Diagonal Stripes Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
        }}
      />

      {/* Top Left Warning Banner */}
      <div 
        className="absolute top-4 -left-8 bg-black text-yellow-400 font-anton text-lg md:text-xl px-10 py-1 shadow-lg"
        style={{ transform: 'rotate(-15deg)' }}
      >
        ⚠ STOP ⚠
      </div>

      {/* "DON'T BUY" Text - Left */}
      <div 
        className="absolute top-1/4 left-4 text-white font-anton text-2xl md:text-4xl drop-shadow-lg"
        style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
      >
        DON'T
        <br />
        BUY
      </div>

      {/* Central Checkmark with Pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #00FF00 0%, #00CC00 100%)',
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.6), 0 0 60px rgba(0, 255, 0, 0.4)',
          }}
        >
          <span className="text-white text-4xl md:text-6xl font-bold">✓</span>
        </div>
      </div>

      {/* "YET!" Text - Right */}
      <div 
        className="absolute top-1/4 right-4 text-white font-anton text-2xl md:text-4xl drop-shadow-lg text-right"
        style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
      >
        YET!
      </div>

      {/* Bottom Banner - CHECK FIRST */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-red-600 font-anton text-xl md:text-2xl px-6 py-2 rounded-lg shadow-xl"
        style={{ transform: 'translateX(-50%)' }}
      >
        CHECK FIRST
      </div>

      {/* Bottom Right Badge */}
      <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1">
        <div className="bg-yellow-400 text-black font-bold text-xs md:text-sm px-2 py-1 rounded">
          30 SECONDS
        </div>
        <div className="bg-green-500 text-white font-bold text-xs md:text-sm px-2 py-1 rounded flex items-center gap-1">
          FREE ✓
        </div>
      </div>
    </div>
  );
};

export default ThumbnailQuickStart;
