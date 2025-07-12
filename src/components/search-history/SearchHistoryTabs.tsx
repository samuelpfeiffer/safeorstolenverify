
import { History, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchCard } from './SearchCard';
import { PurchaseCard } from './PurchaseCard';
import { SearchHistoryEmpty } from './SearchHistoryEmpty';
import { PurchaseHistoryEmpty } from './PurchaseHistoryEmpty';

interface SearchItem {
  id: string;
  serial_number: string;
  item_type: string;
  created_at: string;
  verification_status?: string;
}

interface PurchaseItem {
  id: string;
  serial_number: string;
  item_type: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

interface SearchHistoryTabsProps {
  filteredSearchHistory: SearchItem[];
  filteredPurchaseHistory: PurchaseItem[];
  onRemoveSearchItem: (id: string) => void;
}

export const SearchHistoryTabs = ({ 
  filteredSearchHistory, 
  filteredPurchaseHistory, 
  onRemoveSearchItem 
}: SearchHistoryTabsProps) => {
  return (
    <Tabs defaultValue="search" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="search" className="data-[state=active]:bg-sos-orange">
          <History className="mr-2 h-4 w-4" />
          Search History
        </TabsTrigger>
        <TabsTrigger value="purchase" className="data-[state=active]:bg-sos-orange">
          <Search className="mr-2 h-4 w-4" />
          Purchase History
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="search">
        {filteredSearchHistory.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSearchHistory.map((item) => (
              <SearchCard key={item.id} item={item} onRemove={onRemoveSearchItem} />
            ))}
          </div>
        ) : (
          <SearchHistoryEmpty />
        )}
      </TabsContent>
      
      <TabsContent value="purchase">
        {filteredPurchaseHistory.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPurchaseHistory.map((item) => (
              <PurchaseCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <PurchaseHistoryEmpty />
        )}
      </TabsContent>
    </Tabs>
  );
};
