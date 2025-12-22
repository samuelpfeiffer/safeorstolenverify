import React from 'react';
import { Smartphone, Car, Shield, CheckCircle } from 'lucide-react';

/**
 * Social Media Post Component - 1:1 ratio
 * Based on social_media_post.html design
 */
export const SocialMediaPost: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-xl ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
      }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-center gap-2">
        <Shield className="w-6 h-6 text-yellow-400" />
        <span className="font-montserrat font-bold text-white tracking-wider">
          SAFEORSTOLEN
        </span>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-montserrat font-bold text-white text-2xl md:text-3xl mb-2 leading-tight">
          VERIFY BEFORE
          <br />
          <span className="text-yellow-400">YOU BUY</span>
        </h2>
        <p className="text-white/80 text-sm mb-6">
          Check if items are stolen in 30 seconds
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Smartphone className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
            <h3 className="font-bold text-white text-sm">IMEI Check</h3>
            <p className="text-white/70 text-xs">Verify phones & electronics instantly</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Car className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
            <h3 className="font-bold text-white text-sm">VIN Lookup</h3>
            <p className="text-white/70 text-xs">Check vehicles against stolen databases</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-3 text-center">
        <span className="font-montserrat font-bold text-gray-900 tracking-wide">
          SAFEORSTOLEN.COM
        </span>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute top-20 -right-10 w-32 h-32 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-20 -left-10 w-24 h-24 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
      />
    </div>
  );
};

export default SocialMediaPost;
