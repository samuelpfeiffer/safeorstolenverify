
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from './core/app/AppRoot';
import './index.css';

console.log('Starting React application...');

const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found!');
  throw new Error('Failed to find the root element');
}

console.log('Root element found, creating React root...');
const root = createRoot(container);

console.log('Rendering AppRoot component...');
root.render(
  <StrictMode>
    <AppRoot />
  </StrictMode>
);
