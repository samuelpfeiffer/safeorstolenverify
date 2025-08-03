
import * as React from 'react';
import { AppRoot } from '@/core/app/AppRoot';

function App() {
  // Ensure React is properly loaded
  if (typeof React === 'undefined') {
    console.error('React is not properly loaded');
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center text-white">
        <p>Loading React...</p>
      </div>
    );
  }
  
  return <AppRoot />;
}

export default App;
