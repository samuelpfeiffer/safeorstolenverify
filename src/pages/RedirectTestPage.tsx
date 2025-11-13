import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { REDIRECT_RULES, findRedirect } from '@/utils/redirects';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface TestResult {
  from: string;
  expectedTo: string;
  actualTo: string | null;
  status: 'pass' | 'fail';
}

export default function RedirectTestPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    const results: TestResult[] = [];

    // Test all static redirect rules
    REDIRECT_RULES.forEach(rule => {
      const actualTo = findRedirect(rule.from);
      results.push({
        from: rule.from,
        expectedTo: rule.to,
        actualTo,
        status: actualTo === rule.to ? 'pass' : 'fail'
      });
    });

    // Test timestamp pattern matching
    const timestampTests = [
      '/blog/test-post-1759314016.095080',
      '/blog/another-post-1234567890.123456',
      '/blog/third-post-9876543210.654321'
    ];

    timestampTests.forEach(testPath => {
      const actualTo = findRedirect(testPath);
      results.push({
        from: testPath,
        expectedTo: '/blog',
        actualTo,
        status: actualTo === '/blog' ? 'pass' : 'fail'
      });
    });

    setTestResults(results);
    setIsRunning(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  const passCount = testResults.filter(r => r.status === 'pass').length;
  const failCount = testResults.filter(r => r.status === 'fail').length;
  const totalCount = testResults.length;

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            Redirect Rules Test Suite
          </CardTitle>
          <CardDescription>
            Testing all {REDIRECT_RULES.length} static redirect rules + timestamp pattern matching
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Summary */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{totalCount}</div>
                  <div className="text-sm text-muted-foreground">Total Tests</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{passCount}</div>
                  <div className="text-sm text-muted-foreground">Passed</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{failCount}</div>
                  <div className="text-sm text-muted-foreground">Failed</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rerun Button */}
          <Button 
            onClick={runTests} 
            disabled={isRunning}
            className="w-full"
          >
            {isRunning ? 'Running Tests...' : 'Rerun All Tests'}
          </Button>

          {/* Results */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Test Results</h3>
            <div className="border rounded-lg divide-y max-h-[600px] overflow-y-auto">
              {testResults.map((result, index) => (
                <div 
                  key={index}
                  className={`p-4 flex items-start gap-4 ${
                    result.status === 'fail' ? 'bg-red-50 dark:bg-red-950/20' : ''
                  }`}
                >
                  <div className="mt-1">
                    {result.status === 'pass' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={result.status === 'pass' ? 'default' : 'destructive'}>
                        {result.status.toUpperCase()}
                      </Badge>
                      <code className="text-sm font-mono text-muted-foreground">
                        {result.from}
                      </code>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Expected:</span>
                        <code className="font-mono bg-muted px-2 py-0.5 rounded">
                          {result.expectedTo}
                        </code>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Actual:</span>
                        <code className={`font-mono px-2 py-0.5 rounded ${
                          result.actualTo === result.expectedTo 
                            ? 'bg-green-100 dark:bg-green-950/30' 
                            : 'bg-red-100 dark:bg-red-950/30'
                        }`}>
                          {result.actualTo || 'null'}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GSC URLs to Test Manually */}
          <div className="border-t pt-6 space-y-3">
            <h3 className="text-lg font-semibold">Manual Testing Required</h3>
            <p className="text-sm text-muted-foreground">
              These URLs from Google Search Console should be tested by visiting them directly:
            </p>
            <div className="grid gap-2 text-sm font-mono bg-muted p-4 rounded-lg">
              {[
                '/imei-checker-app → /mobile-app',
                '/blog/complete-verification-guide-stolen-goods-check → /how-it-works',
                '/stolen-property-lookup → /verify',
                '/transparency → Should show content',
                '/service-limitations → Should show content',
              ].map((url, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  {url}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
