import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOAuditReport {
  category: 'Critical' | 'High' | 'Medium' | 'Low';
  issue: string;
  recommendation: string;
  status: 'Fixed' | 'In Progress' | 'Pending';
  impact: string;
}

const auditFindings: SEOAuditReport[] = [
  {
    category: 'Critical',
    issue: 'Homepage title consistency between HTML and React',
    recommendation: 'Unified title: "Free IMEI Check - Verify Stolen Phone & Device Status | SafeOrStolen"',
    status: 'Fixed',
    impact: 'Improves search engine clarity and reduces confusion'
  },
  {
    category: 'Critical', 
    issue: '51 Supabase security warnings affecting SEO trust',
    recommendation: 'Fix anonymous access policies and function search paths',
    status: 'Pending',
    impact: 'Security vulnerabilities can negatively impact search rankings'
  },
  {
    category: 'High',
    issue: 'Core Web Vitals optimization needed',
    recommendation: 'Implement LCP optimization, CLS prevention, FID improvements',
    status: 'Fixed',
    impact: 'Google Core Web Vitals are ranking factors'
  },
  {
    category: 'High',
    issue: 'Missing Google Search Console integration',
    recommendation: 'Add verification meta tag and submit sitemap',
    status: 'Pending',
    impact: 'Essential for monitoring organic search performance'
  },
  {
    category: 'Medium',
    issue: 'Alt text optimization for images',
    recommendation: 'Add keyword-rich alt attributes to all images',
    status: 'In Progress',
    impact: 'Improves image search rankings and accessibility'
  },
  {
    category: 'Medium',
    issue: 'Meta descriptions need optimization',
    recommendation: 'Create unique, compelling 150-character descriptions for all pages',
    status: 'In Progress',
    impact: 'Improves click-through rates from search results'
  }
];

export const SEOAuditReports: React.FC = () => {
  const criticalIssues = auditFindings.filter(f => f.category === 'Critical').length;
  const highIssues = auditFindings.filter(f => f.category === 'High').length;
  const fixedIssues = auditFindings.filter(f => f.status === 'Fixed').length;

  return (
    <>
      <Helmet>
        <title>SEO Audit Report - SafeOrStolen Technical Analysis</title>
        <meta name="description" content="Comprehensive SEO audit results and optimization recommendations for SafeOrStolen.com. Technical analysis of search engine optimization opportunities." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">SEO Audit Report</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <h3 className="font-semibold text-destructive">Critical Issues</h3>
                <p className="text-2xl font-bold">{criticalIssues}</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-amber-600">High Priority</h3>
                <p className="text-2xl font-bold">{highIssues}</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-green-600">Fixed</h3>
                <p className="text-2xl font-bold">{fixedIssues}</p>
              </div>
            </div>
          </header>

          <div className="space-y-6">
            {auditFindings.map((finding, index) => (
              <div key={index} className="bg-card border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      finding.category === 'Critical' ? 'bg-destructive text-destructive-foreground' :
                      finding.category === 'High' ? 'bg-amber-500 text-white' :
                      finding.category === 'Medium' ? 'bg-blue-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {finding.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      finding.status === 'Fixed' ? 'bg-green-500 text-white' :
                      finding.status === 'In Progress' ? 'bg-blue-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {finding.status}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{finding.issue}</h3>
                <p className="text-muted-foreground mb-3">{finding.recommendation}</p>
                <p className="text-sm bg-muted p-3 rounded">
                  <strong>SEO Impact:</strong> {finding.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Fix Supabase security warnings to improve site trustworthiness</li>
              <li>Set up Google Search Console and submit XML sitemap</li>
              <li>Complete alt text optimization for remaining images</li>
              <li>Create unique meta descriptions for all service pages</li>
              <li>Implement advanced schema markup for service pages</li>
              <li>Set up Core Web Vitals monitoring and alerts</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};