import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Shield, Smartphone, Car, Hash, CreditCard } from 'lucide-react';

export const HomeSearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/verify?q=${encodeURIComponent(searchValue.trim())}`);
    } else {
      navigate('/verify');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Clear labels for what can be entered */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
          <Smartphone className="h-4 w-4" />
          IMEI
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
          <Car className="h-4 w-4" />
          VIN
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
          <CreditCard className="h-4 w-4" />
          License Plate
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
          <Hash className="h-4 w-4" />
          Serial Number
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative p-1.5 rounded-2xl bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40">
          <div className="flex flex-col sm:flex-row gap-2 bg-background rounded-xl p-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter any IMEI, VIN, License Plate, or Serial Number..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-12 h-14 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold shrink-0"
            >
              <Shield className="mr-2 h-5 w-5" />
              Check Now - Free
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3 text-center">
          ✓ 2 free checks included • ✓ No credit card required • ✓ Results in 3 seconds
        </p>
      </form>
    </div>
  );
};
