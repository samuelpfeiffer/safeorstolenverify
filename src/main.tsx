
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Ultra minimal component with no external dependencies
function MinimalApp() {
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem'
    }
  }, 'Safe or Stolen - Loading...');
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(React.createElement(MinimalApp));
