import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { ReportStolenItemForm } from '@/components/ReportStolenItemForm';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { AlertTriangle } from 'lucide-react';

const ReportStolenPageContent = () => {
  return (
    <>
      <PageSEO
        title="Report Stolen Item Free - Phone, Car, Electronics"
        description="Report your stolen phone, vehicle, laptop, or valuables. Help prevent others from unknowingly purchasing stolen goods."
        keywords="report stolen item, report stolen phone, report stolen car, report stolen laptop, stolen property report"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Report a Stolen Item
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Submit your stolen item details to our database. This helps protect other buyers 
              from unknowingly purchasing stolen goods and increases the chance of recovery.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
            <ReportStolenItemForm />
          </div>
          
          <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
            <h2 className="font-semibold text-foreground mb-2">Important Information</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• All reports are reviewed before being added to our database</li>
              <li>• False reports may result in account suspension</li>
              <li>• We recommend also filing a police report for your stolen item</li>
              <li>• Your contact information will remain private</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

const ReportStolenPage = () => {
  return (
    <ProtectedRoute>
      <ReportStolenPageContent />
    </ProtectedRoute>
  );
};

export default ReportStolenPage;
