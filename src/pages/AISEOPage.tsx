import React from 'react';
import AISEODashboard from '@/components/ai/AISEODashboard';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';

const AISEOPage: React.FC = () => {
  return (
    <>
      <EnhancedSEOHead 
        title="AI SEO Dashboard - Automated Search Engine Optimization | SafeOrStolen"
        description="Advanced AI-powered SEO optimization dashboard. Stay ahead of competitors with automated content analysis, ranking strategies, and competitive intelligence."
        keywords="AI SEO, automated SEO optimization, competitor analysis, content optimization, ranking analysis, search engine optimization tools"
        canonical="/ai-seo"
      />
      
      <div className="min-h-screen bg-background">
        <AISEODashboard />
      </div>
    </>
  );
};

export default AISEOPage;