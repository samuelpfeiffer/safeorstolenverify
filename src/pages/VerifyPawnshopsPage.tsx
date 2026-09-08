import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';

export default function VerifyPawnshopsPage() {
  // Redirect to main pawn shops page
  return (
    <>
      <PageSEO
        title="Pawn Shop Verification - SafeOrStolen for Pawn Shops"
        description="Enterprise stolen goods verification for pawn shops. Verify IMEI, VIN, serial numbers instantly. Reduce legal risk, ensure compliance, protect your business."
        keywords="pawn shop verification, stolen goods checker pawn, IMEI verification pawn shop, pawn compliance"
        canonical="https://safeorstolen.com/verify/pawnshops"
      />
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Pawn Shop Verification</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for pawn shop verification solutions? Visit our dedicated page for enterprise features, compliance tools, and business pricing.
          </p>
          <Button size="lg" asChild>
            <Link to="/for-pawn-shops">
              View Pawn Shop Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
