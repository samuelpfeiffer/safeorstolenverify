
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ReceiptsFiltersProps {
  filterTerm: string;
  onFilterChange: (value: string) => void;
  onClearAll: () => void;
}

export const ReceiptsFilters = ({ filterTerm, onFilterChange, onClearAll }: ReceiptsFiltersProps) => {
  return (
    <div className="flex items-center mb-8 gap-4 justify-between">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Filter by serial number or item type..." 
          className="pl-10 bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-gray-400"
          value={filterTerm}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </div>
      <Button variant="outline" size="sm" onClick={onClearAll}>
        Clear All Receipts
      </Button>
    </div>
  );
};
