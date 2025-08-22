
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";

const VerificationResultsPage = () => {
  const { id } = useParams();

  // Redirect to contact for manual verification - no mock data
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>
        </div>
        
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold">Verification Results</h1>
          
          <ContactCard 
            message="This verification ID could not be found in our system. All verification results are now provided only through real database lookups. Please contact us for manual verification assistance."
            className="max-w-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationResultsPage;
