import React from 'react';

/**
 * Custom YouTube Thumbnail - Marketplace Protection (Video 5)
 * Split-screen VS comparison: WITHOUT CHECKING vs WITH CHECKING
 */
export const ThumbnailMarketplaceProtection: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`relative w-full aspect-video overflow-hidden rounded-lg ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1877F2 0%, #0D47A1 100%)',
      }}
    >
      {/* Top Header - BEFORE YOU BUY */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 to-transparent py-3 z-10">
        <h2 className="font-anton text-white text-xl md:text-3xl text-center tracking-wide">
          BEFORE YOU BUY
        </h2>
      </div>

      {/* Split Screen Container */}
      <div className="absolute inset-0 flex pt-12 pb-12">
        {/* Left Side - WITHOUT CHECKING (Red/Danger) */}
        <div 
          className="w-1/2 h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(180deg, rgba(180,0,0,0.9) 0%, rgba(120,0,0,0.95) 100%)',
          }}
        >
          {/* Danger Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)',
            }}
          />
          
          {/* X Icon */}
          <div 
            className="relative w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3"
            style={{
              background: 'linear-gradient(135deg, #ff0000 0%, #aa0000 100%)',
              boxShadow: '0 4px 20px rgba(255,0,0,0.5)',
            }}
          >
            <span className="text-white text-3xl md:text-5xl font-bold">✗</span>
          </div>
          
          <span className="font-oswald text-white/90 text-xs md:text-sm font-medium tracking-wider">
            WITHOUT CHECKING
          </span>
          
          {/* Warning Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded flex items-center gap-1">
              ⚠️ SCAM RISK
            </div>
          </div>
        </div>
        
        {/* Right Side - WITH CHECKING (Green/Safe) */}
        <div 
          className="w-1/2 h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(180deg, rgba(0,150,0,0.9) 0%, rgba(0,100,0,0.95) 100%)',
          }}
        >
          {/* Safety Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
            }}
          />
          
          {/* Check Icon */}
          <div 
            className="relative w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #00ff00 0%, #00aa00 100%)',
              boxShadow: '0 4px 20px rgba(0,255,0,0.5)',
            }}
          >
            <span className="text-white text-3xl md:text-5xl font-bold">✓</span>
          </div>
          
          <span className="font-oswald text-white/90 text-xs md:text-sm font-medium tracking-wider">
            WITH CHECKING
          </span>
          
          {/* Safe Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="bg-green-400 text-black font-bold text-xs px-2 py-1 rounded flex items-center gap-1">
              ✓ PROTECTED
            </div>
          </div>
        </div>
      </div>

      {/* Center VS Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div 
          className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-white"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          <span className="font-anton text-black text-lg md:text-2xl font-bold">VS</span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent py-3 z-10">
        <div className="flex justify-center">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm md:text-base px-4 py-1.5 rounded-lg shadow-lg"
            style={{ boxShadow: '0 4px 15px rgba(255,215,0,0.4)' }}
          >
            VERIFY FREE ✓
          </div>
        </div>
      </div>

      {/* Facebook Marketplace Branding */}
      <div className="absolute top-14 left-4 z-10">
        <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/80 font-medium">
          📘 Marketplace
        </div>
      </div>
    </div>
  );
};

export default ThumbnailMarketplaceProtection;
