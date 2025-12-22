import React from 'react';

/**
 * Custom YouTube Thumbnail - IMEI Check
 * Cyber/tech phone verification design
 */
export const ThumbnailIMEI: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`relative w-full aspect-video overflow-hidden rounded-lg ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f23 100%)',
      }}
    >
      {/* Grid/Matrix Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Cyber Glow Effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 200, 255, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Top Text - YOUR PHONE */}
      <div className="absolute top-4 md:top-6 left-0 right-0 text-center">
        <h2 className="font-orbitron text-cyan-400 text-xl md:text-3xl font-bold tracking-widest">
          YOUR <span className="text-white">PHONE</span>
        </h2>
      </div>

      {/* Center - Phone Icon with Warning */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Phone Rectangle */}
          <div 
            className="w-16 h-28 md:w-24 md:h-40 rounded-xl border-4 border-cyan-500 bg-black/50 flex items-center justify-center"
            style={{
              boxShadow: '0 0 30px rgba(0, 200, 255, 0.4), inset 0 0 20px rgba(0, 200, 255, 0.1)',
            }}
          >
            <span className="text-yellow-400 text-3xl md:text-5xl">⚠</span>
          </div>
          
          {/* Warning Badge */}
          <div 
            className="absolute -top-2 -right-4 bg-red-600 text-white font-bold text-xs px-2 py-1 rounded"
            style={{ transform: 'rotate(15deg)' }}
          >
            BLACKLISTED?
          </div>
        </div>
      </div>

      {/* Side Text - MIGHT BE */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <span className="font-rajdhani text-gray-400 text-sm md:text-base">MIGHT BE</span>
      </div>

      {/* Black Listed Echo Effect */}
      <div className="absolute right-4 md:right-8 top-1/3 flex flex-col items-end">
        {[0.2, 0.4, 0.6, 1].map((opacity, i) => (
          <span 
            key={i}
            className="font-anton text-red-500 text-sm md:text-xl font-bold"
            style={{ opacity }}
          >
            BLACK
          </span>
        ))}
      </div>

      {/* Bottom - CHECK IMEI */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-3">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-orbitron text-lg md:text-2xl px-6 py-2 rounded-lg shadow-lg"
          style={{
            boxShadow: '0 0 20px rgba(0, 200, 255, 0.4)',
          }}
        >
          CHECK IMEI
        </div>
      </div>

      {/* Scan Lines Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />
    </div>
  );
};

export default ThumbnailIMEI;
