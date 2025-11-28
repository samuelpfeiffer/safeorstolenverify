import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Zap, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useImageOptimization } from '@/hooks/useImageOptimization';
import heroDeviceImage from '@/assets/hero-verified-item.jpg';

// Import hero background
const heroBackground = '/generated-assets/hero-background.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [itemType, setItemType] = useState('');
  
  // Optimize images on mount
  useImageOptimization();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/verify?q=${encodeURIComponent(searchValue)}${itemType ? `&type=${itemType}` : ''}`);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sos via-sos-dark to-sos">
      {/* Animated gradient mesh background - reduced complexity for mobile LCP */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-sos-orange/20 via-transparent to-sos-lime/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,51,0,0.1),transparent)]" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* AI-Powered Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 backdrop-blur-sm border border-sos-orange/30 rounded-full px-6 py-2 shadow-lg">
            <div className="w-2 h-2 bg-sos-orange rounded-full animate-pulse" />
            <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-sos-orange to-sos-lime bg-clip-text text-transparent">
              AI-Powered Verification • Multi-Source Database • Instant Results
            </p>
          </div>

          {/* Trust badges with glassmorphism */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-sos-orange/20 shadow-lg hover:bg-white/10 transition-all">
              <Shield className="w-4 h-4 text-sos-orange" />
              <span className="text-sm font-medium text-sos-light">256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-sos-orange/20 shadow-lg hover:bg-white/10 transition-all">
              <Database className="w-4 h-4 text-sos-lime" />
              <span className="text-sm font-medium text-sos-light">Multi-Database</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-sos-orange/20 shadow-lg hover:bg-white/10 transition-all">
              <Zap className="w-4 h-4 text-sos-orange" />
              <span className="text-sm font-medium text-sos-light">3-Sec Results</span>
            </div>
          </div>

          {/* Main headline with modern gradient text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="block text-sos-light drop-shadow-lg">Verify Before You Buy</span>
              <span className="block mt-3 bg-gradient-to-r from-sos-orange via-sos-orange to-sos-lime bg-clip-text text-transparent drop-shadow-2xl">
                AI-Powered Protection
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sos-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              The only mobile app that verifies phones, cars, electronics, AND firearms. Competitors have no app. Install free on iOS & Android.
            </p>
            
            {/* Press credential badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>As seen in</span>
              <a 
                href="https://www.issuewire.com/safeorstolen-partners-with-fastercapital-to-launch-web-app-platform-for-trusted-secondhand-verification-1845387637096904" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                IssueWire
              </a>
              <span>&</span>
              <a 
                href="https://pressroom.prlog.org/SAFEORSTOLEN/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                PRLog
              </a>
              <span className="mx-2">|</span>
              <span>Backed by</span>
              <a 
                href="https://fastercapital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline font-medium"
              >
                FasterCapital
              </a>
            </div>
          </div>

          {/* Modern glassmorphic search form */}
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-sos-orange/30 shadow-2xl hover:shadow-sos-orange/20 transition-all">
                <div className="flex flex-col md:flex-row gap-3">
                  <Input 
                    type="text" 
                    placeholder="Enter IMEI, VIN, Serial Number..." 
                    value={searchValue} 
                    onChange={e => setSearchValue(e.target.value)} 
                    className="flex-1 h-14 text-base bg-white/10 border-sos-orange/30 text-sos-light placeholder:text-sos-gray-400 focus:bg-white/15"
                  />
                  <Select value={itemType} onValueChange={setItemType}>
                    <SelectTrigger className="h-14 w-full md:w-48 bg-white/10 border-sos-orange/30 text-sos-light">
                      <SelectValue placeholder="Item Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">📱 Phone</SelectItem>
                      <SelectItem value="vehicle">🚗 Vehicle</SelectItem>
                      <SelectItem value="laptop">💻 Laptop</SelectItem>
                      <SelectItem value="bike">🚲 Bicycle</SelectItem>
                      <SelectItem value="firearm">🔫 Firearm</SelectItem>
                      <SelectItem value="electronics">📺 Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={!searchValue.trim()} 
                    className="h-14 px-8 bg-gradient-to-r from-sos-orange to-sos-orange/90 hover:from-sos-orange/90 hover:to-sos-orange text-white font-semibold shadow-lg shadow-sos-orange/30 hover:shadow-sos-orange/50 transition-all"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Verify Now
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-sos-gray-300 text-center">
                <span className="text-sos-orange font-bold">2 FREE</span> verifications • 
                <span className="text-sos-lime font-bold">Instant</span> results • 
                Multi-database search • No credit card required
              </p>
            </form>
          </div>

          {/* Modern stats with glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
            {[
              { value: "New", label: "Early Access" },
              { value: "150+", label: "Databases" },
              { value: "24/7", label: "Available" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-sos-orange/20 hover:bg-white/10 hover:border-sos-orange/40 transition-all shadow-lg group">
                <div className="text-3xl font-bold bg-gradient-to-br from-sos-orange to-sos-lime bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-sm text-sos-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Verification in Action Image with modern frame - LCP optimized */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sos-orange/30 to-sos-lime/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <img 
                src={heroDeviceImage} 
                alt="SafeOrStolen verification app on mobile and desktop showing item verified status" 
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-sos-orange/30 group-hover:scale-[1.02] transition-transform"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1200}
                height={675}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
