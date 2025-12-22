import React from 'react';

/**
 * Custom YouTube Thumbnail - Facebook Marketplace Safety
 * Split-screen "SCAM EXPOSED" design
 */
export const ThumbnailMarketplace: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`relative w-full aspect-video overflow-hidden rounded-lg ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1877F2 0%, #0D47A1 100%)',
      }}
    >
      {/* Split Screen Effect */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Red/Danger */}
        <div 
          className="w-1/2 h-full flex flex-col items-center justify-center relative"
          style={{ background: 'linear-gradient(180deg, rgba(255,0,0,0.3) 0%, rgba(200,0,0,0.4) 100%)' }}
        >
          <div className="text-red-500 text-5xl md:text-7xl font-bold mb-2">✗</div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20">
            {['SCAM', 'SCAM', 'SCAM', 'SCAM', 'SCAM'].map((text, i) => (
              <span key={i} className="font-anton text-red-600 text-lg md:text-xl">{text}</span>
            ))}
          </div>
        </div>
        
        {/* Right Side - Green/Safe */}
        <div 
          className="w-1/2 h-full flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(180deg, rgba(0,200,0,0.3) 0%, rgba(0,150,0,0.4) 100%)' }}
        >
          <div className="text-green-500 text-5xl md:text-7xl font-bold mb-2">✓</div>
          <div className="bg-yellow-400 text-black font-oswald text-xs md:text-sm px-3 py-1 rounded flex items-center gap-1">
            VERIFY FIRST ⚡
          </div>
        </div>
      </div>

      {/* Top Header - Facebook Marketplace */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4">
        <h2 className="font-bebas text-white text-2xl md:text-4xl text-center tracking-wider">
          <span className="text-[#1877F2]">FACEBOOK</span>
          <br />
          <span>MARKETPLACE</span>
        </h2>
      </div>

      {/* Center Banner - EXPOSED */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div 
          className="bg-yellow-400 text-black font-anton text-xl md:text-3xl px-6 py-2 shadow-xl"
          style={{ 
            transform: 'rotate(-5deg)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}
        >
          EXPOSED
        </div>
      </div>

      {/* Diagonal Stripes */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 40px)',
        }}
      />
    </div>
  );
};

export default ThumbnailMarketplace;
