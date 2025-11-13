import { ReportStolenItemForm } from '@/components/ReportStolenItemForm';

export default function ReportStolen() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Report Stolen Property</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Help protect the community by reporting your stolen items. When someone searches for your item,
          they'll be warned that it's reported stolen.
        </p>
      </div>
      
      <ReportStolenItemForm />
    </div>
  );
}
