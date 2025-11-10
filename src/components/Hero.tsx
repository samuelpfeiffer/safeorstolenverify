import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Zap, Database, TrendingUp, ScanLine, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Import hero background
const heroBackground = '/generated-assets/hero-background.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [itemType, setItemType] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/verify?q=${encodeURIComponent(searchValue)}${itemType ? `&type=${itemType}` : ''}`);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Hero background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sos-orange/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sos-lime/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-fadeIn">
            <div className="trust-badge">
              <Shield className="w-4 h-4" />
              <span>Verified Secure</span>
            </div>
            <div className="trust-badge">
              <Database className="w-4 h-4" />
              <span>50M+ Records</span>
            </div>
            <div className="trust-badge">
              <Zap className="w-4 h-4" />
              <span>Instant Results</span>
            </div>
            <div className="trust-badge">
              <TrendingUp className="w-4 h-4" />
              <span>99.9% Accurate</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-6 animate-slideUp">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
              <span className="block text-foreground">Verify Secondhand Items</span>
              <span className="block mt-2">
                <span className="sos-gradient-text">Instantly</span>
                {' '}& Safely
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Check if phones, cars, electronics are{' '}
              <span className="text-sos-lime font-bold">safe</span> or{' '}
              <span className="text-sos-orange font-bold">stolen</span>.
              Free IMEI, VIN, serial number verification.
            </p>
          </div>

          {/* Search form */}
          <div className="max-w-4xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="modern-card p-3 rounded-2xl shadow-elegant-lg">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="Enter IMEI, VIN, Serial Number..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="h-16 text-lg bg-background border-border/50 focus-visible:ring-2 focus-visible:ring-sos-orange rounded-xl"
                    />
                  </div>
                  <Select value={itemType} onValueChange={setItemType}>
                    <SelectTrigger className="h-16 w-full md:w-56 bg-background border-border/50 rounded-xl">
                      <SelectValue placeholder="Item Type (Optional)" />
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
                    className="h-16 px-10 sos-gradient hover:opacity-90 text-white font-bold text-lg rounded-xl shadow-orange hover:shadow-elegant transition-all"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search Free
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                <span className="text-sos-orange font-bold">2 FREE</span> searches (14-day trial)
                {' • '}
                <span className="text-sos-lime font-semibold">50M+</span> records
                {' • '}
                Instant verification
                {' • '}
                No credit card required
              </p>
            </form>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={() => navigate('/dashboard')}
              className="sos-gradient hover:opacity-90 text-white font-bold text-lg px-8 h-14 rounded-xl shadow-orange hover:shadow-elegant transition-all"
            >
              <ScanLine className="w-5 h-5 mr-2" />
              Scan Now
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/mobile-app')}
              className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-bold text-lg px-8 h-14 rounded-xl shadow-lime hover:shadow-elegant transition-all"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download App
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/auth?mode=signup')}
              className="bg-background border-2 border-border hover:bg-secondary/50 text-foreground font-semibold text-lg px-8 h-14 rounded-xl transition-all"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/how-it-works')}
              className="border-2 border-border text-muted-foreground hover:bg-secondary/30 font-semibold text-lg px-8 h-14 rounded-xl transition-all"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-border/30">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black sos-gradient-text">50M+</div>
              <div className="text-sm font-semibold text-muted-foreground">Verified Records</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-sos-lime">99.9%</div>
              <div className="text-sm font-semibold text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-sos-orange">&lt;30s</div>
              <div className="text-sm font-semibold text-muted-foreground">Fast Results</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
