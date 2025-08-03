
import React from 'react';
import { AppRoot } from '@/core/app/AppRoot';

function App() {
  // Ensure React is properly loaded before rendering
  if (typeof React === 'undefined') {
    console.error('React is not properly loaded');
    return <div>Loading...</div>;
  }
  
  return <AppRoot />;
}

export default App;
