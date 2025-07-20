
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Minimal test component to verify React is working
const TestApp = () => {
  console.log('TestApp rendering...');
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-4xl">Site is Loading...</h1>
    </div>
  );
};

console.log('Starting React application...');

const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found!');
  throw new Error('Failed to find the root element');
}

console.log('Root element found, creating React root...');
const root = createRoot(container);

console.log('Rendering TestApp component...');
root.render(
  <StrictMode>
    <TestApp />
  </StrictMode>
);
