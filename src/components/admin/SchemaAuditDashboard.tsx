import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SCHEMA_REGISTRY, getSchemaStats, getMissingSchemas, getAllSchemaTypes } from '@/config/schema-registry';

export function SchemaAuditDashboard() {
  const stats = getSchemaStats();
  const criticalMissing = getMissingSchemas('critical');
  const highMissing = getMissingSchemas('high');
  const allSchemaTypes = getAllSchemaTypes();

  const getStatusColor = (implemented: boolean) => {
    return implemented ? 'text-green-600' : 'text-red-600';
  };

  const getStatusIcon = (implemented: boolean) => {
    return implemented ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Schema Structured Data Audit</h2>
        <p className="text-muted-foreground">Track and manage structured data across all pages</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Pages Tracked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Schemas Implemented</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{stats.implemented}</div>
            <p className="text-xs text-muted-foreground">Target: 50+</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Missing Schemas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{stats.missing}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.percentage}%</div>
            <Progress value={stats.percentage} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Priority Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation by Priority</CardTitle>
          <CardDescription>Schema coverage across critical, high, and medium priority pages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">Critical</Badge>
                <span className="text-sm text-muted-foreground">
                  {stats.byPriority.critical.implemented} / {stats.byPriority.critical.total}
                </span>
              </div>
              <Progress 
                value={(stats.byPriority.critical.implemented / stats.byPriority.critical.total) * 100} 
                className="w-1/2"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-orange-500 text-orange-700">High</Badge>
                <span className="text-sm text-muted-foreground">
                  {stats.byPriority.high.implemented} / {stats.byPriority.high.total}
                </span>
              </div>
              <Progress 
                value={(stats.byPriority.high.implemented / stats.byPriority.high.total) * 100} 
                className="w-1/2"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Medium</Badge>
                <span className="text-sm text-muted-foreground">
                  {stats.byPriority.medium.implemented} / {stats.byPriority.medium.total}
                </span>
              </div>
              <Progress 
                value={(stats.byPriority.medium.implemented / stats.byPriority.medium.total) * 100} 
                className="w-1/2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical Missing Schemas */}
      {criticalMissing.length > 0 && (
        <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <CardTitle className="text-red-900 dark:text-red-100">
                Critical Pages Missing Schemas ({criticalMissing.length})
              </CardTitle>
            </div>
            <CardDescription className="text-red-700 dark:text-red-300">
              These core pages must have structured data immediately
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {criticalMissing.map((page, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 border-2 border-red-200 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <code className="text-sm font-mono">{page.path}</code>
                    </div>
                    <div className="flex gap-1 mt-1">
                      {page.schemaTypes.map((type, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`https://safeorstolen.com${page.path}`, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* High Priority Missing Schemas */}
      {highMissing.length > 0 && (
        <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <CardTitle className="text-orange-900 dark:text-orange-100">
                High Priority Pages Missing Schemas ({highMissing.length})
              </CardTitle>
            </div>
            <CardDescription className="text-orange-700 dark:text-orange-300">
              Important pages that need structured data soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {highMissing.slice(0, 10).map((page, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white dark:bg-gray-900 border border-orange-200 rounded"
                >
                  <div>
                    <code className="text-xs font-mono">{page.path}</code>
                    <div className="flex gap-1 mt-1">
                      {page.schemaTypes.map((type, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {highMissing.length > 10 && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                + {highMissing.length - 10} more high priority pages
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Schema Types Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Schema Types Used</CardTitle>
          <CardDescription>{allSchemaTypes.length} different schema.org types across the site</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allSchemaTypes.map((type, index) => (
              <Badge key={index} variant="outline">
                {type}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Pages Registry */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Page Registry ({SCHEMA_REGISTRY.length} pages)</CardTitle>
          <CardDescription>Full list of all tracked pages and their schema status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 max-h-96 overflow-y-auto">
            {SCHEMA_REGISTRY.map((page, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 border-b border-border/50 hover:bg-muted/50 transition-colors ${
                  !page.implemented ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center gap-2 flex-1">
                  <div className={getStatusColor(page.implemented)}>
                    {getStatusIcon(page.implemented)}
                  </div>
                  <code className="text-xs font-mono">{page.path}</code>
                  <Badge
                    variant={
                      page.priority === 'critical'
                        ? 'destructive'
                        : page.priority === 'high'
                        ? 'outline'
                        : 'secondary'
                    }
                    className="text-xs"
                  >
                    {page.priority}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  {page.schemaTypes.map((type, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900 dark:text-blue-100">Next Steps to Reach 50+ Schemas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm space-y-1">
            <p className="font-medium">1. Implement all {criticalMissing.length} critical page schemas immediately</p>
            <p className="font-medium">2. Add schemas to {highMissing.length} high-priority pages</p>
            <p className="font-medium">3. Validate all implemented schemas using Google Rich Results Test</p>
            <p className="font-medium">4. Monitor GSC for "Schema OK" count increase from 26 to 50+</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}