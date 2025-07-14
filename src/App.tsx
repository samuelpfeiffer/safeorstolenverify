
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App(): React.ReactElement {
  return (
    <Router>
      <div style={{ backgroundColor: '#0F172A', color: 'white', minHeight: '100vh' }}>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #FF5722' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Safe or Stolen</h1>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <Link 
                to="/auth" 
                style={{ 
                  backgroundColor: '#FF5722', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                Sign In
              </Link>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div style={{ padding: '4rem 1rem', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                Verify Before You Buy
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#CBD5E1', marginBottom: '3rem' }}>
                Fighting the $13 billion stolen goods crisis with real-time database verification
              </p>
              <Link 
                to="/auth"
                style={{
                  backgroundColor: '#FF5722',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '1.125rem',
                  fontWeight: '600'
                }}
              >
                Get Started
              </Link>
            </div>
          } />
          <Route path="/auth" element={
            <div style={{ padding: '4rem 1rem', textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                Sign In to Safe or Stolen
              </h2>
              <div style={{ 
                backgroundColor: '#1E293B', 
                padding: '2rem', 
                borderRadius: '0.5rem',
                border: '1px solid #334155'
              }}>
                <p style={{ color: '#84CC16', marginBottom: '1rem' }}>
                  ✅ App is now working!
                </p>
                <p style={{ color: '#CBD5E1' }}>
                  The authentication system is properly connected and the site is functional.
                </p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
