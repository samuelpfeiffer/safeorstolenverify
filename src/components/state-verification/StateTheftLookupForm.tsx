import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Search, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface StateTheftLookupFormProps {
  onSubmit: (data: { stateCode: string; type: string; value: string }) => void;
  isLoading?: boolean;
  defaultState?: string;
  defaultType?: 'vin' | 'license_plate';
}

const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' }
];

const INTEGRATED_STATES = ['AZ', 'FL', 'TX', 'CA', 'NY'];

export const StateTheftLookupForm: React.FC<StateTheftLookupFormProps> = ({
  onSubmit,
  isLoading = false,
  defaultState,
  defaultType = 'vin'
}) => {
  const [stateCode, setStateCode] = useState(defaultState || '');
  const [lookupType, setLookupType] = useState<string>(defaultType);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const hasDirectIntegration = INTEGRATED_STATES.includes(stateCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!stateCode) {
      setError('Please select a state');
      return;
    }

    if (!inputValue.trim()) {
      setError('Please enter a VIN or license plate number');
      return;
    }

    onSubmit({
      stateCode,
      type: lookupType,
      value: inputValue.trim()
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="state-select">State</Label>
          <Select value={stateCode} onValueChange={setStateCode}>
            <SelectTrigger id="state-select">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((state) => (
                <SelectItem key={state.code} value={state.code}>
                  {state.name} ({state.code})
                  {INTEGRATED_STATES.includes(state.code) && ' ✓'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasDirectIntegration && (
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Direct database integration available
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lookup-type">Lookup Type</Label>
          <Select value={lookupType} onValueChange={setLookupType}>
            <SelectTrigger id="lookup-type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vin">VIN (Vehicle Identification Number)</SelectItem>
              <SelectItem value="license_plate">License Plate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="input-value">
          {lookupType === 'vin' ? 'Vehicle Identification Number (VIN)' : 'License Plate Number'}
        </Label>
        <Input
          id="input-value"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={lookupType === 'vin' ? 'Enter 17-digit VIN' : 'Enter license plate number'}
          className="uppercase"
          maxLength={lookupType === 'vin' ? 17 : 10}
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button 
        type="submit" 
        className="w-full bg-sos-orange hover:bg-sos-orange/90"
        disabled={isLoading}
      >
        {isLoading ? (
          <>Checking...</>
        ) : (
          <>
            <Search className="mr-2 h-4 w-4" />
            Verify {lookupType === 'vin' ? 'VIN' : 'License Plate'}
          </>
        )}
      </Button>
    </form>
  );
};