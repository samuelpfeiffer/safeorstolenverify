/**
 * SmartDetectionIndicator – shows AI detection status inline
 */
import React from 'react';
import { CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { DetectionResult } from '@/lib/aiDetection';
import { getTypeLabel, getTypeIcon } from '@/lib/aiDetection';

interface Props {
  isDetecting: boolean;
  detection: DetectionResult | null;
  detectionError: string | null;
  showManualSelect: boolean;
  onToggleManual: () => void;
  manualType: string;
  onManualTypeChange: (type: string) => void;
}

export const SmartDetectionIndicator: React.FC<Props> = ({
  isDetecting,
  detection,
  detectionError,
  showManualSelect,
  onToggleManual,
  manualType,
  onManualTypeChange,
}) => {
  if (isDetecting) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse py-2">
        <Loader2 className="h-4 w-4 animate-spin text-primary" />
        <span>🤖 AI is analyzing your input...</span>
      </div>
    );
  }

  if (detectionError && !detection) {
    return (
      <div className="space-y-2 py-2">
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>Detection unavailable — select type manually</span>
        </div>
        <ManualSelector value={manualType} onChange={onManualTypeChange} />
      </div>
    );
  }

  if (!detection) return null;

  // High confidence
  if (detection.confidence >= 95) {
    return (
      <div className="space-y-2 py-2">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <span className="font-medium text-green-600 dark:text-green-400">
            {getTypeIcon(detection.type)} Detected: {getTypeLabel(detection.type)}
          </span>
        </div>
        <button
          type="button"
          onClick={onToggleManual}
          className="text-xs text-muted-foreground hover:text-foreground underline-offset-2 hover:underline transition-colors"
        >
          Not a {getTypeLabel(detection.type)}? Click to change
        </button>
        {showManualSelect && (
          <ManualSelector value={manualType} onChange={onManualTypeChange} />
        )}
      </div>
    );
  }

  // Low confidence
  return (
    <div className="space-y-2 py-2">
      <div className="flex items-center gap-2 text-sm">
        <AlertCircle className="h-4 w-4 text-yellow-500" />
        <span className="font-medium text-yellow-600 dark:text-yellow-400">
          {getTypeIcon(detection.type)} Detected: {getTypeLabel(detection.type)}
        </span>
        <Badge variant="secondary" className="text-xs">
          {detection.confidence}% confident
        </Badge>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onToggleManual}
        className="text-xs h-7 px-2"
      >
        Not correct? Select manually <ChevronDown className="h-3 w-3 ml-1" />
      </Button>
      {showManualSelect && (
        <ManualSelector value={manualType} onChange={onManualTypeChange} />
      )}
    </div>
  );
};

function ManualSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-9 text-sm w-56">
        <SelectValue placeholder="Select item type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="smartphone">📱 Mobile Phone</SelectItem>
        <SelectItem value="vehicle">🚗 Vehicle (VIN)</SelectItem>
        <SelectItem value="license_plate">🪪 License Plate</SelectItem>
        <SelectItem value="electronics">💻 Electronics</SelectItem>
        <SelectItem value="bicycle">🚲 Bicycle</SelectItem>
        <SelectItem value="firearm">🔫 Firearm</SelectItem>
      </SelectContent>
    </Select>
  );
}
