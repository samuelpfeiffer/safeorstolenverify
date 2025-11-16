import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

interface Suggestion {
  value: string;
  type: string;
  confidence: string;
}

interface SmartSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  itemType?: string;
  placeholder?: string;
}

export const SmartSearchInput = ({ 
  value, 
  onChange, 
  itemType,
  placeholder = "Enter serial number, IMEI, or VIN..."
}: SmartSearchInputProps) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const getSuggestions = async () => {
      if (value.length < 3) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const { data } = await supabase.functions.invoke('ai-search-suggestions', {
          body: { partialInput: value, itemType }
        });

        if (data?.suggestions) {
          setSuggestions(data.suggestions);
          setShowSuggestions(true);
        }
      } catch (error) {
        console.error('Error getting suggestions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounce = setTimeout(getSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [value, itemType]);

  return (
    <div className="relative">
      <div className="relative">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="pr-10"
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" />
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-background border rounded-md shadow-lg">
          {suggestions.map((suggestion, idx) => (
            <div
              key={idx}
              className="px-4 py-2 hover:bg-muted cursor-pointer transition-colors"
              onClick={() => {
                onChange(suggestion.value.split(' (')[0]); // Extract just the value
                setShowSuggestions(false);
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{suggestion.value}</span>
                <span className="text-xs text-muted-foreground capitalize">
                  {suggestion.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
