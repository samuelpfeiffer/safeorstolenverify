
import { Suspense } from 'react';
import HomePage from './HomePage';

const Index = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-sos flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sos-orange mx-auto mb-4"></div>
          <p className="text-white">Loading Safe or Stolen...</p>
        </div>
      </div>
    }>
      <HomePage />
    </Suspense>
  );
};

export default Index;
