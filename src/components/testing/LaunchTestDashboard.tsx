
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, XCircle, Play, Download, Rocket, Settings } from 'lucide-react';
import { performLaunchTests, generateLaunchReport } from '@/utils/launchPreparation';
import { ProductionChecklist } from './ProductionChecklist';

interface TestResult {
  passed: boolean;
  message: string;
  details?: string;
}

interface LaunchChecklist {
  category: string;
  tests: Array<{
    name: string;
    result: TestResult;
  }>;
}

export const LaunchTestDashboard = () => {
  const [testResults, setTestResults] = useState<LaunchChecklist[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [report, setReport] = useState<string>('');

  const runTests = async () => {
    setIsRunning(true);
    try {
      console.log('Starting comprehensive launch tests...');
      const results = await performLaunchTests();
      setTestResults(results);
      setHasRun(true);
      
      const generatedReport = generateLaunchReport(results);
      setReport(generatedReport);
      
      console.log('Launch tests completed:', results);
    } catch (error) {
      console.error('Error running launch tests:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const downloadReport = () => {
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'safe-or-stolen-launch-report.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getTotalStats = () => {
    const totalTests = testResults.reduce((acc, category) => acc + category.tests.length, 0);
    const passedTests = testResults.reduce((acc, category) => 
      acc + category.tests.filter(test => test.result.passed).length, 0
    );
    const successRate = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;
    
    return { totalTests, passedTests, successRate };
  };

  const { totalTests, passedTests, successRate } = getTotalStats();
  const isReadyForLaunch = successRate >= 95;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Rocket className="h-8 w-8 text-sos-orange" />
          <h1 className="text-3xl font-bold text-white">Launch Preparation Dashboard</h1>
        </div>
        <p className="text-gray-400">
          Comprehensive testing and validation for Safe or Stolen production launch
        </p>
      </div>

      {/* Control Panel */}
      <Card className="bg-card border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Test Controls
          </CardTitle>
          <CardDescription>
            Run comprehensive tests to validate application readiness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button 
              onClick={runTests} 
              disabled={isRunning}
              className="bg-sos-orange hover:bg-sos-orange/90"
            >
              {isRunning ? 'Running Tests...' : 'Run Launch Tests'}
            </Button>
            
            {hasRun && (
              <Button 
                onClick={downloadReport} 
                variant="outline"
                className="border-gray-600"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            )}
          </div>

          {hasRun && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span>{passedTests}/{totalTests} ({successRate}%)</span>
                  </div>
                  <Progress value={successRate} className="h-3" />
                </div>
                <Badge 
                  variant={isReadyForLaunch ? "default" : "destructive"}
                  className={isReadyForLaunch ? "bg-green-600" : "bg-red-600"}
                >
                  {isReadyForLaunch ? "Ready for Launch" : "Needs Attention"}
                </Badge>
              </div>

              {isReadyForLaunch && (
                <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                    <CheckCircle className="h-5 w-5" />
                    Application Ready for Launch!
                  </div>
                  <p className="text-green-300 text-sm">
                    All critical tests have passed. Your application is ready for production deployment.
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Main Tabs */}
      <Tabs defaultValue="checklist" className="space-y-4">
        <TabsList className="grid grid-cols-8 w-full bg-card">
          <TabsTrigger value="checklist" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Checklist
          </TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="auth">Auth</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        {/* Production Checklist Tab */}
        <TabsContent value="checklist">
          <ProductionChecklist />
        </TabsContent>

        {/* Test Results Tabs */}
        {hasRun ? (
          <>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testResults.map((category, index) => {
                  const passed = category.tests.filter(test => test.result.passed).length;
                  const total = category.tests.length;
                  const rate = Math.round((passed / total) * 100);
                  
                  return (
                    <Card key={index} className="bg-card border-gray-700">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">{passed}/{total} tests passed</span>
                          <Badge variant={rate >= 90 ? "default" : rate >= 70 ? "secondary" : "destructive"}>
                            {rate}%
                          </Badge>
                        </div>
                        <Progress value={rate} className="h-2" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {testResults.map((category, categoryIndex) => (
              <TabsContent 
                key={categoryIndex} 
                value={category.category.toLowerCase().replace(/[^a-z]/g, '')} 
                className="space-y-4"
              >
                <Card className="bg-card border-gray-700">
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>
                      Detailed test results for {category.category.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.tests.map((test, testIndex) => (
                        <div 
                          key={testIndex}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700"
                        >
                          {test.result.passed ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium">{test.name}</div>
                            <div className={`text-sm ${test.result.passed ? 'text-green-400' : 'text-red-400'}`}>
                              {test.result.message}
                            </div>
                            {test.result.details && (
                              <div className="text-xs text-gray-500 mt-1">
                                {test.result.details}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </>
        ) : (
          <TabsContent value="overview">
            <Card className="bg-card border-gray-700">
              <CardContent className="text-center py-12">
                <Rocket className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Ready to Test?</h3>
                <p className="text-gray-500 mb-6">
                  Run comprehensive tests to ensure your application is production-ready
                </p>
                <Button 
                  onClick={runTests}
                  className="bg-sos-orange hover:bg-sos-orange/90"
                >
                  Start Launch Tests
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};
