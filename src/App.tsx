
import React from 'react';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#0F172A', 
      color: 'white', 
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Safe or Stolen - Working!
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        The site is now functional. This is a basic working version.
      </p>
      <button 
        style={{
          backgroundColor: '#FF5722',
          color: 'white',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
        onClick={() => alert('Button works!')}
      >
        Test Button
      </button>
    </div>
  );
}

export default App;
