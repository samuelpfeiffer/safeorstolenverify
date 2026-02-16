import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Mic, MicOff, Search, Loader2, Volume2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import { useParallelVerification } from '@/hooks/useParallelVerification';
import { motion, AnimatePresence } from 'framer-motion';

const VoiceSearchTool = () => {
  const [transcript, setTranscript] = useState('');
  const { verify, isLoading, result } = useParallelVerification();
  
  const { 
    isListening, 
    isSupported, 
    startListening, 
    stopListening 
  } = useVoiceSearch({
    onResult: (text) => {
      setTranscript(text);
    },
    onError: (error) => {
      console.error('Voice error:', error);
    }
  });

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      setTranscript('');
      startListening();
    }
  };

  const handleVerify = async () => {
    if (transcript.trim()) {
      await verify(transcript.trim());
    }
  };

  return (
    <>
      <SEOHead
        title="Voice Search"
        description="Hands-free verification using voice commands. Speak serial numbers for instant stolen item checks."
        canonical="/tools/voice-search"
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-cyan-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Voice Search</h1>
            <p className="text-muted-foreground">
              Speak serial numbers for hands-free verification
            </p>
          </div>

          {!isSupported ? (
            <Card>
              <CardContent className="py-12 text-center">
                <MicOff className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Voice Not Supported</h3>
                <p className="text-muted-foreground">
                  Your browser doesn't support speech recognition. Try Chrome or Edge.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Speak Your Search</CardTitle>
                <CardDescription>
                  Click the microphone and say the serial number, IMEI, or VIN
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center gap-6">
                  <motion.button
                    onClick={handleVoiceToggle}
                    className={`w-32 h-32 rounded-full flex items-center justify-center transition-colors ${
                      isListening 
                        ? 'bg-red-500 text-white' 
                        : 'bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    animate={isListening ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ repeat: isListening ? Infinity : 0, duration: 1 }}
                  >
                    {isListening ? (
                      <MicOff className="w-16 h-16" />
                    ) : (
                      <Mic className="w-16 h-16" />
                    )}
                  </motion.button>

                  <AnimatePresence mode="wait">
                    {isListening && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-red-500"
                      >
                        <Volume2 className="w-5 h-5 animate-pulse" />
                        <span>Listening...</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Recognized Text</label>
                  <div className="flex gap-2">
                    <Input
                      value={transcript}
                      onChange={(e) => setTranscript(e.target.value)}
                      placeholder="Speak or type serial number..."
                      className="font-mono text-lg"
                    />
                    <Button 
                      onClick={handleVerify} 
                      disabled={isLoading || !transcript.trim()}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {result && (
                  <div className={`p-4 rounded-lg border ${
                    result.riskLevel === 'low' 
                      ? 'bg-green-500/10 border-green-500/20 text-green-600'
                      : result.riskLevel === 'critical' || result.riskLevel === 'high'
                      ? 'bg-red-500/10 border-red-500/20 text-red-600'
                      : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600'
                  }`}>
                    <h4 className="font-medium text-lg capitalize mb-1">
                      {result.finalStatus}
                    </h4>
                    <p className="text-sm opacity-80">{result.message}</p>
                  </div>
                )}

                <div className="text-center text-sm text-muted-foreground">
                  <p>Tips: Speak clearly and include letter-by-letter for accuracy</p>
                  <p className="mt-1">Example: "V-I-N 1-H-G-C-P-2-F-3-X-A-0-0-0-0-0-1"</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default VoiceSearchTool;
