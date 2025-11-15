import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Zap, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useImageOptimization } from '@/hooks/useImageOptimization';

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
      navigate(`/dashboard?q=${encodeURIComponent(searchValue)}${itemType ? `&type=${itemType}` : ''}`);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Hero background with optimized loading */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${heroBackground})`,
            transform: 'translateZ(0)', // GPU acceleration
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Mobile App Banner */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-3">
            <p className="text-sm md:text-base font-medium text-foreground">
              📱 <span className="text-primary">NEW:</span> Download Our Mobile App • 
              <span className="text-secondary"> Only App That Verifies Firearms</span> • No Subscription Required
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Verified Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">50M+ Records</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Instant Results</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="block text-foreground">Download Our Mobile App</span>
              <span className="block mt-2 text-primary">Verify Stolen Items Instantly</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The only mobile app that verifies phones, cars, electronics, AND firearms. Competitors have no app. Install free on iOS & Android.
            </p>
          </div>

          {/* Search form */}
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row gap-3">
                  <Input 
                    type="text" 
                    placeholder="Enter IMEI, VIN, Serial Number..." 
                    value={searchValue} 
                    onChange={e => setSearchValue(e.target.value)} 
                    className="flex-1 h-12 text-base"
                  />
                  <Select value={itemType} onValueChange={setItemType}>
                    <SelectTrigger className="h-12 w-full md:w-48">
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
                    className="h-12 px-8"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Verify Now
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                <span className="text-primary font-semibold">2 FREE</span> searches • 
                <span className="text-secondary font-semibold"> 50M+</span> records • 
                Instant verification • No credit card required
              </p>
            </form>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/mobile-app')}
              className="gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Download App
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8">
            {[
              { value: "2M+", label: "Items Verified" },
              { value: "50K+", label: "Active Users" },
              { value: "99.9%", label: "Accuracy" },
              { value: "24/7", label: "Support" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
