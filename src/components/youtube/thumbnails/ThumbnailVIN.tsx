import React from 'react';

/**
 * Custom YouTube Thumbnail - VIN Check
 * Automotive license plate aesthetic
 */
export const ThumbnailVIN: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`relative w-full aspect-video overflow-hidden rounded-lg ${className}`}
      style={{
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }}
    >
      {/* Road/Asphalt Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(255,255,255,0.1) 0%, transparent 60%)',
        }}
      />

      {/* Top Text - IS THIS CAR */}
      <div className="absolute top-4 md:top-6 left-0 right-0 text-center">
        <h2 className="font-teko text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
          IS THIS CAR
        </h2>
      </div>

      {/* Center - License Plate Style VIN */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="bg-white px-6 py-3 md:px-10 md:py-4 rounded-lg border-4 border-gray-800 shadow-2xl"
          style={{
            boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.1)',
          }}
        >
          <span className="font-oswald text-gray-900 text-2xl md:text-4xl font-bold tracking-widest">
            V I N ? ?
          </span>
        </div>
      </div>

      {/* Bottom Left - STOLEN? with echo effect */}
      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
        <div className="relative">
          {[0.15, 0.25, 0.4, 1].map((opacity, i) => (
            <div 
              key={i}
              className="font-anton text-red-500 text-xl md:text-3xl font-bold"
              style={{ 
                opacity,
                position: i === 3 ? 'relative' : 'absolute',
                top: i === 3 ? 0 : `${i * 2}px`,
                left: i === 3 ? 0 : `${i * 2}px`,
              }}
            >
              STOLEN?
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Right - Action Buttons */}
      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col gap-2 items-end">
        <div className="bg-blue-600 text-white font-bold text-xs md:text-sm px-3 py-1.5 rounded shadow-lg">
          CHECK VIN
        </div>
        <div className="bg-green-500 text-white font-bold text-xs md:text-sm px-3 py-1.5 rounded shadow-lg flex items-center gap-1">
          FREE ✓
        </div>
      </div>

      {/* Car Silhouette Hint */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 md:w-64 h-12 md:h-16 opacity-20"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.3), transparent)',
          borderRadius: '50% 50% 0 0',
        }}
      />
    </div>
  );
};

export default ThumbnailVIN;
