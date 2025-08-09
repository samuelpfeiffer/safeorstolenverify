import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, Search, Info } from 'lucide-react';
import { useRealVerification } from '@/hooks/useRealVerification';
import { useToast } from '@/hooks/use-toast';

const FirearmSearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [serialNumber, setSerialNumber] = useState('');
  const { verifyItem, isLoading } = useRealVerification();
  const { toast } = useToast();

  const cleanSerial = (value: string) => value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

  const handleSearch = async () => {
    const sn = cleanSerial(serialNumber);
    if (!sn) return;

    const result = await verifyItem(sn, 'firearm');
    if (result?.id) {
      navigate(`/?verificationId=${result.id}#verification-results`);
    } else {
      toast({ title: 'Verification failed', description: 'Please try again.', variant: 'destructive' });
    }
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="min-h-screen bg-sos">
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="rounded-lg border-white/10 bg-white/5 hover:bg-white/10 text-white"
          >
            <Link to="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div className="min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Search Stolen Firearms Database</h1>
            <p className="text-gray-300 mt-1">Check if a firearm has been reported stolen before purchasing.</p>
          </div>
        </div>

        {/* Notice */}
        <Card className="bg-fc-red/10 border-fc-red/30">
          <CardContent className="p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-fc-red flex-shrink-0" />
            <div>
              <p className="text-fc-red font-medium">Important Notice</p>
              <p className="text-red-200 text-sm">Always verify with local law enforcement for complete verification. This tool helps you make informed decisions.</p>
            </div>
          </CardContent>
        </Card>

        {/* Search Card */}
        <Card className="bg-sos-dark/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-sos-orange" />
              Firearm Serial Number Search
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label htmlFor="serial" className="block text-sm font-medium text-gray-200 mb-2">
                Enter Firearm Serial Number
              </label>
              <Input
                id="serial"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter serial number (we strip spaces and special characters)"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono text-lg"
              />
            </div>

            <Button
              onClick={handleSearch}
              disabled={!serialNumber.trim() || isLoading}
              className="w-full h-12 rounded-xl bg-sos-orange hover:bg-sos-orange/90 text-white text-lg font-semibold shadow-glow"
            >
              <Search className="w-5 h-5 mr-3" />
              {isLoading ? 'Checking…' : 'Search Stolen Firearms Database'}
            </Button>

            <p className="text-sm text-gray-400 text-center">We’ll verify on-site and show your results here. No redirects.</p>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="bg-sos-dark/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-fc-blue" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">How do I search?</h3>
              <p>Enter the firearm serial without spaces, dashes, or special characters. We sanitize input automatically.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Is this linked to NCIC?</h3>
              <p>Results indicate potential risk based on available checks. For definitive status, contact local law enforcement (NCIC).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Do you log my searches?</h3>
              <p>Searches may be recorded in your verification history to help you track items you’ve checked.</p>
            </div>
          </CardContent>
        </Card>

        <div className="pb-8" />
      </section>
    </div>
  );
};

export default FirearmSearchPage;
