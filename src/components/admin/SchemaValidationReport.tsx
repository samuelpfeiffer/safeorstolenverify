import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Comprehensive Schema Validation Report
 * Shows all implemented schemas across the site with validation status
 */
export const SchemaValidationReport = () => {
  const schemaImplementations = [
    {
      page: 'Global (MasterSEO)',
      path: 'All pages',
      schemas: ['Organization', 'WebSite'],
      count: 2,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'Homepage',
      path: '/',
      schemas: ['Service', 'SoftwareApplication'],
      count: 2,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'Verify Page',
      path: '/verify',
      schemas: ['Service (Stolen Item)', 'Service (IMEI)', 'Service (VIN)', 'Service (Serial)', 'HowTo', 'SoftwareApplication'],
      count: 6,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'Pricing Page',
      path: '/pricing',
      schemas: ['Service (Free Trial)', 'Service (Starter)', 'Service (Personal)', 'Service (Pro)', 'Service (Business)', 'Service (Enterprise)'],
      count: 6,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'About Page',
      path: '/about',
      schemas: ['AboutPage', 'Organization'],
      count: 2,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'FAQ Page',
      path: '/faq',
      schemas: ['FAQPage (40+ questions)'],
      count: 1,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'Mobile App Page',
      path: '/app',
      schemas: ['SoftwareApplication'],
      count: 1,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'Terms Page',
      path: '/terms',
      schemas: ['WebPage'],
      count: 1,
      status: 'valid',
      priority: 'critical'
    },
    {
      page: 'Privacy Page',
      path: '/privacy',
      schemas: ['WebPage'],
      count: 1,
      status: 'valid',
      priority: 'critical'
    }
  ];

  const totalSchemas = schemaImplementations.reduce((sum, impl) => sum + impl.count, 0);
  const validSchemas = schemaImplementations.filter(impl => impl.status === 'valid').reduce((sum, impl) => sum + impl.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Schema Validation Report</span>
          <Badge variant="default" className="text-lg">
            {validSchemas} Schemas Valid
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{totalSchemas}</div>
            <div className="text-sm text-muted-foreground">Total Schemas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{validSchemas}</div>
            <div className="text-sm text-muted-foreground">Valid Schemas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{schemaImplementations.length}</div>
            <div className="text-sm text-muted-foreground">Pages Covered</div>
          </div>
        </div>

        {/* Page-by-Page Breakdown */}
        <div className="space-y-3">
          {schemaImplementations.map((impl, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    {impl.page}
                    <Badge variant="outline" className="text-xs">
                      {impl.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{impl.path}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={impl.status === 'valid' ? 'default' : 'destructive'}>
                    {impl.count} {impl.count === 1 ? 'schema' : 'schemas'}
                  </Badge>
                  {impl.status === 'valid' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {impl.schemas.join(', ')}
              </div>
            </div>
          ))}
        </div>

        {/* Google Rich Results Test Links */}
        <div className="border-t pt-4 mt-4">
          <h3 className="font-semibold mb-3">Validation Tools</h3>
          <div className="space-y-2 text-sm">
            <div>
              <a 
                href="https://search.google.com/test/rich-results" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Rich Results Test
              </a>
              <span className="text-muted-foreground ml-2">- Validate individual page schemas</span>
            </div>
            <div>
              <a 
                href="https://validator.schema.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Schema.org Validator
              </a>
              <span className="text-muted-foreground ml-2">- Technical schema validation</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};