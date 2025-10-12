import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Car, FileText, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ArizonaTheftSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8 text-sos-orange" />
            <Shield className="h-8 w-8 text-sos-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Arizona Stolen Vehicle Verification
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free access to Arizona Attorney General's TheftAZ database. 
            Verify vehicles by license plate or VIN before purchasing in Arizona.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* License Plate Lookup */}
          <Card className="border-sos-orange/30 hover:border-sos-orange transition-all hover:shadow-lg hover:shadow-sos-orange/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Car className="h-6 w-6 text-sos-orange" />
                <CardTitle className="text-xl">Arizona License Plate Check</CardTitle>
              </div>
              <CardDescription>
                Search TheftAZ database by license plate number. Updated twice daily with 
                reports from Phoenix PD, Maricopa County Sheriff, and all participating AZ agencies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>Instant verification from Arizona AG's office</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>All 50 states + Canada + Mexico support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>Free for registered users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>Essential before Craigslist, Facebook, OfferUp purchases</span>
                </li>
              </ul>
              
              <Button 
                asChild 
                className="w-full bg-sos-orange hover:bg-sos-orange/90"
                size="lg"
              >
                <Link to="/arizona-license-plate-lookup">
                  <Car className="h-4 w-4 mr-2" />
                  Check License Plate Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* VIN Lookup */}
          <Card className="border-sos-orange/30 hover:border-sos-orange transition-all hover:shadow-lg hover:shadow-sos-orange/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="h-6 w-6 text-sos-orange" />
                <CardTitle className="text-xl">Arizona VIN Theft Check</CardTitle>
              </div>
              <CardDescription>
                Verify vehicles using the 17-character VIN against Arizona's TheftAZ database. 
                More reliable than plate checks - VINs can't be easily changed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>Gold standard for stolen vehicle verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>VINs permanently stamped - can't be switched</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>Required for Arizona title transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sos-orange">✓</span>
                  <span>18,000+ AZ vehicles stolen annually</span>
                </li>
              </ul>
              
              <Button 
                asChild 
                className="w-full bg-sos-orange hover:bg-sos-orange/90"
                size="lg"
              >
                <Link to="/arizona-vin-lookup">
                  <FileText className="h-4 w-4 mr-2" />
                  Check VIN Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-sos-orange/10 border border-sos-orange/30 rounded-full px-6 py-3">
            <Shield className="h-5 w-5 text-sos-orange" />
            <p className="text-sm">
              <strong className="text-sos-orange">Official Source:</strong> Powered by Arizona Attorney 
              General's TheftAZ database (theftaz.azag.gov)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
