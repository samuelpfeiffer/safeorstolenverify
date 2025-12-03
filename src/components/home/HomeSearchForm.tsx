import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Shield } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter IMEI, VIN, or Serial Number..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-12 h-14 text-lg bg-background/80 backdrop-blur-sm border-primary/30 focus:border-primary"
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          className="h-14 px-8 text-lg font-semibold"
        >
          <Shield className="mr-2 h-5 w-5" />
          Check Now - Free
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        2 free checks included • No credit card required • Results in 3 seconds
      </p>
    </form>
  );
};
