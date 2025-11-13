import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { Loader, AlertCircle, Search, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PageSEO } from '@/components/seo/PageSEO';

interface UserStats {
  freeSearchesUsed: number;
  freeSearchesLimit: number;
  freeSearchesExpiry: string | null;
  isSubscribed: boolean;
}

interface SearchHistoryItem {
  identifier: string;
  search_type: string;
  created_at: string;
  results: any;
}

interface SearchSource {
  source: string;
  found?: boolean;
  count?: number;
  items?: any[];
  description?: string;
  icon: string;
  error?: string;
  vehicleInfo?: {
    make: string;
    model: string;
    year: string;
    type: string;
  };
}

interface SearchResults {
  query: string;
  type: string;
  supabase: SearchSource;
  external: SearchSource[];
  timestamp: string;
  error?: string;
}

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('auto');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<SearchResults | null>(null);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [userStats, setUserStats] = useState<UserStats>({
    freeSearchesUsed: 0,
    freeSearchesLimit: 2,
    freeSearchesExpiry: null,
    isSubscribed: false
  });

  useEffect(() => {
    if (user) {
      loadUserStats();
      loadSearchHistory();
    }
  }, [user]);

  async function loadUserStats() {
    try {
      const { data, error } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user!.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (data) {
        setUserStats({
          freeSearchesUsed: data.free_searches_used || 0,
          freeSearchesLimit: 2,
          freeSearchesExpiry: data.free_searches_expiry,
          isSubscribed: data.is_subscribed || false
        });
      } else {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        
        await supabase.from('user_stats').insert({
          user_id: user!.id,
          free_searches_used: 0,
          free_searches_expiry: expiryDate.toISOString(),
          is_subscribed: false
        });
        
        setUserStats({
          freeSearchesUsed: 0,
          freeSearchesLimit: 2,
          freeSearchesExpiry: expiryDate.toISOString(),
          isSubscribed: false
        });
      }
    } catch (error) {
      console.error('Error loading user stats:', error);
    }
  }

  async function loadSearchHistory() {
    try {
      const { data, error } = await supabase
        .from('search_history')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setSearchHistory(data || []);
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  }

  function detectSearchType(query: string): string {
    const cleaned = query.replace(/[^a-zA-Z0-9]/g, '');
    
    if (cleaned.length === 15 && /^\d+$/.test(cleaned)) return 'imei';
    if (cleaned.length === 17 && /^[A-HJ-NPR-Z0-9]{17}$/i.test(cleaned)) return 'vin';
    return 'serial';
  }

  function validateInput(query: string, type: string): boolean {
    const cleaned = query.replace(/[^a-zA-Z0-9]/g, '');
    
    if (type === 'imei') {
      return cleaned.length === 15 && /^\d+$/.test(cleaned);
    }
    if (type === 'vin') {
      return cleaned.length === 17 && /^[A-HJ-NPR-Z0-9]{17}$/i.test(cleaned);
    }
    return cleaned.length >= 3;
  }

  async function handleSearch() {
    if (!searchQuery.trim()) return;

    const now = new Date();
    const expiry = userStats.freeSearchesExpiry ? new Date(userStats.freeSearchesExpiry) : null;
    
    if (!userStats.isSubscribed) {
      if (expiry && now > expiry) {
        await resetFreeSearches();
      } else if (userStats.freeSearchesUsed >= userStats.freeSearchesLimit) {
        alert('You have used all your free searches. Please upgrade to continue.');
        window.location.href = '/pricing';
        return;
      }
    }

    setSearching(true);
    setResults(null);

    try {
      const type = searchType === 'auto' ? detectSearchType(searchQuery) : searchType;
      const cleanedQuery = searchQuery.replace(/[^a-zA-Z0-9]/g, '');

      if (!validateInput(cleanedQuery, type)) {
        throw new Error(`Invalid ${type.toUpperCase()} format`);
      }

      const supabaseResult = await searchSupabase(cleanedQuery, type);
      const externalResults = await searchExternalSources(cleanedQuery, type);

      const aggregatedResults: SearchResults = {
        query: cleanedQuery,
        type: type,
        supabase: supabaseResult,
        external: externalResults,
        timestamp: new Date().toISOString()
      };

      setResults(aggregatedResults);
      await saveSearchHistory(cleanedQuery, type, aggregatedResults);

      if (!userStats.isSubscribed) {
        await incrementSearchCount();
      }

    } catch (error: any) {
      console.error('Search error:', error);
      setResults({
        query: '',
        type: '',
        supabase: { source: '', icon: '' },
        external: [],
        timestamp: '',
        error: error.message || 'An error occurred during search'
      });
    } finally {
      setSearching(false);
    }
  }

  async function searchSupabase(identifier: string, type: string): Promise<SearchSource> {
    try {
      const { data, error } = await supabase
        .from('stolen_items')
        .select('*')
        .or(`imei.eq.${identifier},vin.eq.${identifier},serial_number.eq.${identifier}`)
        .limit(10);

      if (error) throw error;

      return {
        source: 'SafeOrStolen Database',
        found: data && data.length > 0,
        count: data ? data.length : 0,
        items: data || [],
        icon: '🏠'
      };
    } catch (error: any) {
      return {
        source: 'SafeOrStolen Database',
        error: error.message,
        icon: '🏠'
      };
    }
  }

  async function searchExternalSources(identifier: string, type: string): Promise<SearchSource[]> {
    const results: SearchSource[] = [];

    if (type === 'serial') {
      try {
        const bikeResult = await searchBikeIndex(identifier);
        results.push(bikeResult);
      } catch {
        results.push({
          source: 'BikeIndex.org',
          error: 'Service temporarily unavailable',
          icon: '🚴'
        });
      }
    }

    try {
      const stolenRegisterResult = await searchStolenRegister(identifier);
      results.push(stolenRegisterResult);
    } catch {
      results.push({
        source: 'StolenRegister.com',
        error: 'Service temporarily unavailable',
        icon: '🔍'
      });
    }

    if (type === 'vin') {
      try {
        const nhtsaResult = await searchNHTSA(identifier);
        results.push(nhtsaResult);
      } catch {
        results.push({
          source: 'NHTSA Vehicle Database',
          error: 'Service temporarily unavailable',
          icon: '🚗'
        });
      }
    }

    return results;
  }

  async function searchBikeIndex(serial: string): Promise<SearchSource> {
    const response = await fetch(
      `https://bikeindex.org/api/v3/search?serial=${encodeURIComponent(serial)}&stolenness=stolen`,
      { method: 'GET', headers: { 'Accept': 'application/json' } }
    );

    if (!response.ok) throw new Error('BikeIndex API error');
    const data = await response.json();

    return {
      source: 'BikeIndex.org',
      found: data.bikes && data.bikes.length > 0,
      count: data.bikes ? data.bikes.length : 0,
      items: data.bikes || [],
      description: '1.4M bikes, 159K stolen reports',
      icon: '🚴'
    };
  }

  async function searchStolenRegister(identifier: string): Promise<SearchSource> {
    const { data, error } = await supabase.functions.invoke('stolen-register-check', {
      body: { identifier }
    });

    if (error) throw error;

    return {
      source: 'StolenRegister.com',
      found: data?.result === 'stolen',
      count: data?.result === 'stolen' ? 1 : 0,
      description: 'Community-reported database',
      icon: '🔍'
    };
  }

  async function searchNHTSA(vin: string): Promise<SearchSource> {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`
    );

    if (!response.ok) throw new Error('NHTSA API error');
    const data = await response.json();
    const result = data.Results && data.Results[0];

    return {
      source: 'NHTSA Vehicle Database',
      found: result && result.Make !== '',
      vehicleInfo: result ? {
        make: result.Make,
        model: result.Model,
        year: result.ModelYear,
        type: result.VehicleType
      } : undefined,
      description: 'Official vehicle identification',
      icon: '🚗'
    };
  }

  async function saveSearchHistory(identifier: string, type: string, results: SearchResults) {
    try {
      await supabase.from('search_history').insert([{
        user_id: user!.id,
        identifier: identifier,
        search_type: type,
        results: results as any
      }]);
      
      await loadSearchHistory();
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  }

  async function incrementSearchCount() {
    try {
      await supabase
        .from('user_stats')
        .update({ free_searches_used: userStats.freeSearchesUsed + 1 })
        .eq('user_id', user!.id);

      setUserStats(prev => ({
        ...prev,
        freeSearchesUsed: prev.freeSearchesUsed + 1
      }));
    } catch (error) {
      console.error('Error incrementing search count:', error);
    }
  }

  async function resetFreeSearches() {
    try {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);

      await supabase
        .from('user_stats')
        .update({
          free_searches_used: 0,
          free_searches_expiry: expiryDate.toISOString()
        })
        .eq('user_id', user!.id);

      setUserStats(prev => ({
        ...prev,
        freeSearchesUsed: 0,
        freeSearchesExpiry: expiryDate.toISOString()
      }));
    } catch (error) {
      console.error('Error resetting searches:', error);
    }
  }

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Sign In Required</h2>
        <p className="text-muted-foreground mb-4">Please sign in to use the verification tool</p>
        <Button onClick={() => window.location.href = '/auth'}>Sign In</Button>
      </div>
    );
  }

  const searchesRemaining = userStats.isSubscribed 
    ? 'Unlimited' 
    : Math.max(0, userStats.freeSearchesLimit - userStats.freeSearchesUsed);

  return (
    <>
      <PageSEO
        title="Verification Dashboard"
        description="Check if items are stolen before you buy - search IMEI, VIN, and serial numbers"
      />
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Verification Dashboard</h1>
            <p className="text-muted-foreground">Check if items are stolen before you buy</p>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Searches Remaining</p>
                  <p className="text-2xl font-bold">
                    {searchesRemaining}
                    {!userStats.isSubscribed && ` / ${userStats.freeSearchesLimit}`}
                  </p>
                  {!userStats.isSubscribed && userStats.freeSearchesExpiry && (
                    <p className="text-xs text-muted-foreground">
                      Resets on {new Date(userStats.freeSearchesExpiry).toLocaleDateString()}
                    </p>
                  )}
                </div>
                {!userStats.isSubscribed && (
                  <Button onClick={() => window.location.href = '/pricing'}>
                    Upgrade for Unlimited
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Search for Stolen Items</CardTitle>
              <CardDescription>Enter IMEI, VIN, or Serial Number</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Input
                    placeholder="Enter identifier (IMEI, VIN, Serial Number)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="flex-1 min-w-[200px]"
                  />
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="auto">Auto-detect</option>
                    <option value="imei">IMEI (Phone)</option>
                    <option value="vin">VIN (Vehicle)</option>
                    <option value="serial">Serial Number</option>
                  </select>
                  <Button 
                    onClick={handleSearch} 
                    disabled={searching || !searchQuery.trim()}
                  >
                    {searching ? (
                      <>
                        <Loader className="h-4 w-4 animate-spin mr-2" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• IMEI: Dial *#06# on your phone (15 digits)</p>
                  <p>• VIN: Found on vehicle dashboard or door (17 characters)</p>
                  <p>• Serial Number: Usually on device label or settings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {results && !results.error && <ResultsDisplay results={results} />}

          {results && results.error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{results.error}</AlertDescription>
            </Alert>
          )}

          {searchHistory.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Recent Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {searchHistory.map((search, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer transition-colors"
                      onClick={() => {
                        setSearchQuery(search.identifier);
                        setSearchType(search.search_type);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{search.identifier}</p>
                          <p className="text-sm text-muted-foreground">
                            {search.search_type.toUpperCase()} • {new Date(search.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      {search.results?.supabase?.found || search.results?.external?.some((e: SearchSource) => e.found) ? (
                        <XCircle className="h-5 w-5 text-destructive" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-sos-lime" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}

function ResultsDisplay({ results }: { results: SearchResults }) {
  const allSources = [results.supabase, ...(results.external || [])];
  const totalFindings = allSources.filter(s => s && s.found).length;
  const hasAlert = totalFindings > 0;

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className={`p-4 rounded-lg mb-6 border-2 ${hasAlert ? 'bg-destructive/10 border-destructive' : 'bg-sos-lime/10 border-sos-lime'}`}>
          <div className="flex items-center gap-3">
            {hasAlert ? (
              <>
                <AlertCircle className="h-8 w-8 text-destructive" />
                <div>
                  <h3 className="text-xl font-bold text-destructive">⚠️ ALERT: Potentially Stolen</h3>
                  <p className="text-foreground">Found in {totalFindings} database(s) - Do not purchase</p>
                </div>
              </>
            ) : (
              <>
                <CheckCircle className="h-8 w-8 text-sos-lime" />
                <div>
                  <h3 className="text-xl font-bold text-sos-lime">✅ Clear</h3>
                  <p className="text-foreground">Not found in any stolen property databases</p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allSources.map((source, idx) => (
            <SourceCard key={idx} source={source} />
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Search Query:</strong> {results.query} ({results.type.toUpperCase()})
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Checked:</strong> {new Date(results.timestamp).toLocaleString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function SourceCard({ source }: { source: SearchSource }) {
  if (!source) return null;

  return (
    <div className={`p-4 rounded-lg border-2 ${
      source.error ? 'bg-muted border-border' :
      source.found ? 'bg-destructive/10 border-destructive' : 
      'bg-sos-lime/10 border-sos-lime'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{source.icon}</span>
          <div>
            <h4 className="font-semibold">{source.source}</h4>
            {source.description && (
              <p className="text-xs text-muted-foreground">{source.description}</p>
            )}
          </div>
        </div>
        {source.error ? (
          <XCircle className="h-5 w-5 text-muted-foreground" />
        ) : source.found ? (
          <AlertCircle className="h-5 w-5 text-destructive" />
        ) : (
          <CheckCircle className="h-5 w-5 text-sos-lime" />
        )}
      </div>

      <div className="mt-3">
        {source.error ? (
          <p className="text-sm text-muted-foreground">{source.error}</p>
        ) : source.found ? (
          <div>
            <p className="font-semibold text-destructive">
              ⚠️ Found - {source.count} match{source.count && source.count > 1 ? 'es' : ''}
            </p>
            {source.items && source.items.length > 0 && (
              <div className="mt-2 space-y-2">
                {source.items.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="text-sm p-2 bg-background rounded border border-border">
                    <p><strong>{item.title || item.description || 'Stolen Item'}</strong></p>
                    {item.stolen_date && <p className="text-xs text-muted-foreground">Reported: {item.stolen_date}</p>}
                    {item.location && <p className="text-xs text-muted-foreground">Location: {item.location}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-sos-lime font-semibold">✓ Clear - Not found</p>
        )}
      </div>

      {source.vehicleInfo && (
        <div className="mt-3 p-2 bg-background rounded border border-border text-sm">
          <p><strong>Vehicle:</strong> {source.vehicleInfo.year} {source.vehicleInfo.make} {source.vehicleInfo.model}</p>
          <p><strong>Type:</strong> {source.vehicleInfo.type}</p>
        </div>
      )}
    </div>
  );
}
